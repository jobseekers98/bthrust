import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { TicketService } from '../../../services/ticket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from '../../../services/ticket.module';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { TicketUpdateStatusComponent } from '../ticket-update-status/ticket-update-status.component';
import { DownloadService } from '../../../services/downloads.service';
import { environment } from 'src/environments/environment';
import { NgbDateStruct, NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/internal/Subject';
import { Login, AuthenticationService } from '../../../services';
import { saveAs } from 'file-saver';
import { DataTableDirective } from 'angular-datatables';
import { QuoteService } from '../../../services/quote.service';
import { NotificationService } from '../../../services/notification.service';
import { EngineerService } from '../../../services/engineer.service';
import { TicketFilter } from '../../../services/genicprofile.module';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../services/customer.model';
import { Engineer } from '../../../services/engineer.module';
import { NgbDateToStringAdapter } from '../../../ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from '../../../ngb-time-to-string-adapter';
import { TicketReschedulePopupComponent } from '../../ticket-reschedule-popup/ticket-reschedule-popup.component';
import { GenericService } from 'src/app/services/generic.service';
import { Title } from '@angular/platform-browser';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['../tickets.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter },
  ],
})

export class TicketListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  isDtInitialized: boolean = false;

  hoveredDate: NgbDateStruct;
  TotalOpenCount: number;
  TotalClosedCount: number;
  TotalOverdueCount: number;
  TotalDuein15DaysCount: number;
  dropdownbtnavgrev: string;
  localPrependUrl: string;
  OnDateSearchLoading: boolean;
  tempTicketList: Ticket[];
  currentUser: Login;
  CustomerdropdownList = []; CustomerselectedItems = [];
  CustomerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Customers'};
  EngineerdropdownList = []; EngineerselectedItems = [];
  EngineerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Engineers'};
  StatusdropdownList = []; StatusselectedItems = [];
  StatusdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Status'};
  DepartmentdropdownList = []; DepartmentselectedItems = [];
  DepartmentdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Group'};
  constructor(
    public titleService: Title,
    public service: TicketService,
    private engineerservice: EngineerService,
    private customerservice: CustomerService,
    private dialog: MatDialog,
    private router: Router,
    private route1: ActivatedRoute,
    private downloadService: DownloadService,
    public loginservice: AuthenticationService,
    public quoteService: QuoteService,
    public invoiceservice: InvoiceService,
    public notifyService: NotificationService,
    public genicprofileservice: GenicProfileService,
    public genericservice: GenericService) {
    this.localPrependUrl = environment.apiUrl;
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit() {
    if(this.currentUser.Type === 'Admin' || this.currentUser.Type === 'SubAdmin'){
      if (!this.currentUser.Permissions.TicketView) { this.router.navigate(['/dashboard']); }
    }
    if(this.currentUser.Type === 'Engineer'){
      if (!this.currentUser.Permissions.CanEngineerCreateTicket) { this.router.navigate(['/dashboard']); }
    }
    this.EngineerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: this.currentUser.Engineer};
    this.titleService.setTitle(this.currentUser.Ticket + 's | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
    this.OnDateSearchLoading = false;
    this.dropdownbtnavgrev = 'ALL ' + this.currentUser.Ticket.toUpperCase() + 'S';
    this.TotalOpenCount = 0;
    this.TotalClosedCount = 0;
    this.TotalOverdueCount = 0;
    this.TotalDuein15DaysCount = 0;
    this.service.Ticketlist = [];
    this.tempTicketList = [];
    this.customerservice.getCustomerListSync(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 const custList = response.result as Customer[];
                 custList.forEach(w => {
          this.CustomerdropdownList.push({Id: w.Id, Name: w.CompanyName , IsAssigned : false});
          this.genicprofileservice.TicketFilter.CustomerId.forEach(el => {
            if (w.Id === el) {
              this.CustomerselectedItems.push({Id: w.Id, Name: w.CompanyName , IsAssigned : true});
            }
          });
        });
      }}, error =>  console.log(error));
    this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   const engList = response.result as Engineer[];
                   engList.forEach(w => {
            this.EngineerdropdownList.push({Id: w.Id, Name: w.EngineerName, IsAssigned : false });
            this.genicprofileservice.TicketFilter.EngineerId.forEach(el => {
              if (w.Id === el) {
                this.EngineerselectedItems.push({Id: w.Id, Name: w.EngineerName, IsAssigned : true });
              }
            });
          });
        }}, error =>  console.log(error));
    this.genericservice.refreshSMTPList(this.currentUser.Token).subscribe( res => {
      if (res) { const dptList = res as any;
                 dptList.result.forEach(w => {
                 this.DepartmentdropdownList.push({Id: w.Id, Name: w.SMTPName, IsAssigned : false });
                 this.genicprofileservice.TicketFilter.DepartmentId.forEach(el => {
                  if (w.Id === el) {
                    this.DepartmentselectedItems.push({Id: w.Id, Name: w.SMTPName, IsAssigned : true });
                  }
                });
        });
      }}, error =>  console.log(error));
    this.StatusdropdownList = [
      { Id: 'UPCOMING', Name: 'UPCOMING' },
      { Id: 'HOLD', Name: 'HOLD' },
      { Id: 'INPROGRESS', Name: 'INPROGRESS' },
      { Id: 'OVERDUE', Name: 'OVERDUE' },
      { Id: 'CLOSED', Name: 'CLOSED' },
      { Id: 'UNALLOCATED', Name: 'UNALLOCATED' },
      { Id: 'UNSCHEDULED', Name: 'UNSCHEDULED' },
      { Id: 'CANCELLED', Name: 'CANCELLED' }
    ];
    if (this.genicprofileservice.TicketFilter.IsReady) {
          this.StatusdropdownList.forEach(w => {
              this.genicprofileservice.TicketFilter.Status.forEach(el => {
                if (w.Id === el) {
                  this.StatusselectedItems.push({Id: w.Id, Name: w.Name, IsAssigned: true });
                }
              });
            });
          }
    if (this.genicprofileservice.TicketFilter.IsReady) {
            this.distroyAndReloadFilterTable();
            this.genicprofileservice.TicketFilter.IsReady = false;
            setTimeout(() => {
              this.genicprofileservice.TicketFilter.IsReady = true;
            }, 1000);
          } else {
            this.distroyAndReloadTable();
          }
  }
  ngAfterViewInit() {
   // this.dtTrigger.next();
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  distroyAndReloadTable(): void {
    this.service.getTickets(this.currentUser.Token, 1).subscribe( res => {
                if (res) {  const response = res as any;
                  let re = response.result as Ticket[];
                  re.forEach(cl => {
                    if(cl.TicketClosedDate !== null){
                    cl.TicketClosedDate = this.converToLocal(cl.TicketClosedDate);
                    }
                    cl.CreatedUtcDate = this.converToLocal(cl.CreatedUtcDate)
                  });
                  this.tempTicketList = this.service.Ticketlist = re;
                  if (this.router.url !== '/tickets') {
                    const t = Number(this.route1.snapshot.queryParamMap.get('t'));
                    this.FilterTicketList(t, false);
                  }
                  if (this.isDtInitialized) {
                    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                        dtInstance.destroy();
                        this.dtTrigger.next();
                    }); } else {
                    this.isDtInitialized = true;
                    this.dtTrigger.next();
                }
                  this.headercount();
      }
    }, error =>  console.log(error));
  }
  distroyAndReloadFilterTable(): void {
    this.genicprofileservice.getFilterTicketListSync(this.currentUser.Token).subscribe( res => {
      if (res) {const response = res as any;
        response.forEach(cl => {
                  if(cl.TicketClosedDate !== null){
                  cl.TicketClosedDate = this.converToLocal(cl.TicketClosedDate);
                  }
                  cl.CreatedUtcDate = this.converToLocal(cl.CreatedUtcDate)
                });
                this.tempTicketList = this.service.Ticketlist = response;
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
              dtInstance.destroy();
              this.dtTrigger.next();
          }); } else {
          this.isDtInitialized = true;
          this.dtTrigger.next();
      }
        this.headercount();
      }
    }, error =>  console.log(error));
  }
  headercount() {
    const currentUTCDate = new Date();
    const todaydate = new Date(Date.UTC(currentUTCDate.getFullYear(),
      currentUTCDate.getMonth(),
      currentUTCDate.getDate(), 0, 0, 0));
    const date15DayEarly = new Date(Date.UTC(currentUTCDate.getFullYear(),
      currentUTCDate.getMonth(),
      currentUTCDate.getDate() - 15, 0, 0, 0));
    this.TotalOpenCount = this.service.Ticketlist.filter(x =>
      x.Status === 'UPCOMING' || x.Status === 'OVERDUE' || x.Status === 'INPROGRESS' || x.Status === 'HOLD').length;
    this.TotalClosedCount = this.service.Ticketlist.filter(x => x.Status === 'CLOSED').length;
    this.TotalOverdueCount = this.service.Ticketlist.filter(x => x.Status === 'OVERDUE').length;
    this.TotalDuein15DaysCount = this.service.Ticketlist.filter(x => new Date(x.OneOffAppointmentDate) < new Date(date15DayEarly) && x.Status === 'OVERDUE').length;
  }
  createnewticket() {
    this.service.RunBlankModule();
    setTimeout(() => {
      this.router.navigate(['/tickets/ticket-create/']);
    }, 100);
  }
  pupulateticket(x: Ticket) {
    this.service.formData = Object.assign({}, x);
    this.router.navigate(['/tickets/ticket-edit/']);
  }
  OpenUpdateStatusDialog(x: Ticket) {
    this.service.formData = Object.assign({}, x);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';
    dialogConfig.data = {};
    this.dialog.open(TicketUpdateStatusComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res !== undefined) {
        this.service.UpdateStatusOfTicket(x.TicketId, res.status, this.currentUser.Token).subscribe( res => {
            // Call Ticket Cancel
            this.SendCancelledNotificaiton(x.Id);
            this.distroyAndReloadTable();
          }, error =>  console.log(error));
      }
    });
  }

  // Send cancelled notification
  SendCancelledNotificaiton(TicketId) {
    this.notifyService.CancelledTicketEmailNotification(TicketId, this.currentUser.Id)
    .subscribe( resp => {
    }, error =>  console.log(error));
  }
 // Send cancelled notification

  OpenRescheduledDialog(x: Ticket) {
    this.service.formData = Object.assign({}, x);
    if (x.OneOffAppointmentDate != null) {
      this.service.formData.OneOffAppointmentDate = x.OneOffAppointmentDate;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '720px';
    dialogConfig.height = '720px';
    dialogConfig.data = {};
    this.dialog.open(TicketReschedulePopupComponent, dialogConfig).afterClosed().subscribe(res => {
      this.engineerservice.releseTemporaryEngineerFromTicket(this.service.formData.Id, this.currentUser.Token, 'revert').subscribe( res => {
        this.distroyAndReloadTable();
      }, error =>  console.log(error));
    });
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('ticket', this.currentUser.Token).then(blob => {
      saveAs(blob, this.currentUser.Ticket + '_' + new Date().getTime() + '.xlsx');
   });
  }
  FilterTicketList(n: number, local?: boolean) {
    const currentUTCDate = new Date();
    const todaydate = new Date(Date.UTC(currentUTCDate.getFullYear(),
      currentUTCDate.getMonth(),
      currentUTCDate.getDate(), 8, 0, 0));
    const due15days = new Date(Date.UTC(currentUTCDate.getFullYear(),
      currentUTCDate.getMonth(),
      currentUTCDate.getDate() - 15, 8, 0, 0));
    switch (Number(n)) {
      case 1:
        this.tempTicketList = this.service.Ticketlist;
        this.dropdownbtnavgrev = 'ALL ' + this.currentUser.Ticket.toUpperCase() + 'S';
        break;
      case 2:
        this.tempTicketList = this.service.Ticketlist.filter(x =>
          x.Status === 'UPCOMING' || x.Status === 'OVERDUE' || x.Status === 'INPROGRESS' || x.Status === 'HOLD');
        this.dropdownbtnavgrev = 'OPEN ' + this.currentUser.Ticket.toUpperCase() + 'S';
        break;
      case 3:
          this.tempTicketList = this.service.Ticketlist.filter(x => x.Status === 'HOLD');
          this.dropdownbtnavgrev = 'HOLD ' + this.currentUser.Ticket.toUpperCase() + 'S';
          break;
      case 4:
        this.tempTicketList = this.service.Ticketlist.filter(m => this.isToday(new Date(m.AppointmentStart)) === true && m.Status === 'UPCOMING');
        this.dropdownbtnavgrev = 'TODAY NEW ' + this.currentUser.Ticket.toUpperCase() + 'S';
        break;
        case 5:
          this.tempTicketList = this.service.Ticketlist.filter(x => new Date(x.OneOffAppointmentDate) >= new Date(todaydate) && x.Status === 'UPCOMING');
          this.dropdownbtnavgrev = 'UPCOMING ' + this.currentUser.Ticket.toUpperCase() + 'S';
          break;
        case 6:
          this.tempTicketList = this.service.Ticketlist.filter(x => x.Status === 'CANCELLED');
          this.dropdownbtnavgrev = 'CANCELLED ' + this.currentUser.Ticket.toUpperCase() + 'S';
          break;
        case 7:
          this.tempTicketList = this.service.Ticketlist.filter(x => x.Status === 'CLOSED');
          this.dropdownbtnavgrev = 'CLOSED ' + this.currentUser.Ticket.toUpperCase() + 'S';
          break;
      case 8:
        this.tempTicketList = this.service.Ticketlist.filter(m =>
          m.TicketClosedDate !== null  && this.isToday(new Date(m.TicketClosedDate)) === true && m.Status === 'CLOSED');
        this.dropdownbtnavgrev = 'TODAY CLOSED ' + this.currentUser.Ticket.toUpperCase() + 'S';
        break;
        case 9:
          this.tempTicketList = this.service.Ticketlist.filter(x => x.Status === 'INPROGRESS');
          this.dropdownbtnavgrev = 'INPROGRESS ' + this.currentUser.Ticket.toUpperCase() + 'S';
          break;
      case 10:
        this.tempTicketList = this.service.Ticketlist.filter(x =>
          new Date(x.OneOffAppointmentDate) < new Date(todaydate) && x.Status === 'OVERDUE');
        this.dropdownbtnavgrev = 'OVERDUE ' + this.currentUser.Ticket.toUpperCase() + 'S';
        break;
      case 11:
        this.tempTicketList = this.service.Ticketlist.filter(x =>
          new Date(x.OneOffAppointmentDate) < new Date(due15days) && x.Status === 'OVERDUE' && x.OneOffAppointmentDate !== null);
        this.dropdownbtnavgrev = 'DUE IN 15 DAYS';
        break;
      case 12:
          this.tempTicketList = this.service.Ticketlist.filter(x => x.Reallocate === true);
          this.dropdownbtnavgrev = 'REALLOCATED ' + this.currentUser.Ticket.toUpperCase() + 'S';
          break;
      case 13:
        this.tempTicketList = this.service.Ticketlist.filter(x => x.Rescheduled === true);
        this.dropdownbtnavgrev = 'RESECHEDULED ' + this.currentUser.Ticket.toUpperCase() + 'S';
        break;
      case 14:
        this.tempTicketList = this.service.Ticketlist.filter(x => x.Status === 'UNSCHEDULED');
        this.dropdownbtnavgrev = 'UNSCHEDULED ' + this.currentUser.Ticket.toUpperCase() + 'S';
        break;
      case 15:
        this.tempTicketList = this.service.Ticketlist.filter(x => x.TicketTeams.length === 0);
        this.dropdownbtnavgrev = 'UNALLOCATED ' + this.currentUser.Ticket.toUpperCase() + 'S';
        break;
    }
    if (local == null) {
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
        }); } else {
        this.isDtInitialized = true;
        this.dtTrigger.next();
    }
  }
  }
  ViewTicket(x: Ticket) {
    this.service.formData = Object.assign({}, x);
    this.router.navigate(['/tickets/ticket-details']);
  }

  ViewTicketDetails(x: Ticket) {
    this.service.formData = new Ticket();
    this.service.formData = x;
    this.router.navigate(['/tickets/ticket-view-detail']);
  }
  ViewInvoiceDetails(InvoiceId: string) {
    try{
      this.invoiceservice.refreshInvoiceById(InvoiceId, this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
         this.invoiceservice.InvoiceData = response.result;
         setTimeout(() => {
          this.router.navigate(['/invoices/invoice-details']);
         }, 200);
        }
      }, error =>  console.log(error)) ;
    } catch {}
  }
  isToday(expiryDateTimeStamp) {
    if(expiryDateTimeStamp === null) { return false; }
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return (expiryDateTimeStamp > start && expiryDateTimeStamp < end);
  }
  converToLocal(d: string): string {
    if(d != null) {
   return d.substring(0, 4) + '-' + d.substring(5, 7) + '-' + d.substring(8, 10) + 'T00:00:00Z';
    } else { return '1971-01-01T00:00:00Z'; }
  }
  morefilters() {
    if (this.genicprofileservice.TicketFilter.IsReady) {
      this.genicprofileservice.TicketFilter.IsReady = false;
      this.distroyAndReloadTable();
    } else {
      this.genicprofileservice.TicketFilter = new TicketFilter();
      this.CustomerselectedItems = [];
      this.EngineerselectedItems = [];
      this.StatusselectedItems = [];
      this.genicprofileservice.TicketFilter.IsReady = true;
    }
  }
  /// Custimer
  onCustomerItemSelect(e) {
    this.genicprofileservice.TicketFilter.CustomerId = [];
    e.value.forEach(element => {
      this.genicprofileservice.TicketFilter.CustomerId.push(element.Id);
    });
  }
  /// Engineers
  onEngineerItemSelect(e) {
    this.genicprofileservice.TicketFilter.EngineerId = [];
    e.value.forEach(element => {
      this.genicprofileservice.TicketFilter.EngineerId.push(element.Id);
    });
  }
  onStatusItemSelect(e) {
    this.genicprofileservice.TicketFilter.Status = [];
    e.value.forEach(element => {
      this.genicprofileservice.TicketFilter.Status.push(element.Id);
    });
  }
  /// Department
  onDepartmentItemSelect(e) {
    this.genicprofileservice.TicketFilter.DepartmentId = [];
    e.value.forEach(element => {
      this.genicprofileservice.TicketFilter.DepartmentId.push(element.Id);
    });
  }

  onDateChange() {
    this.OnDateSearchLoading = true;
    this.distroyAndReloadFilterTable();
    setTimeout(() => {
      this.OnDateSearchLoading = false;
    }, 100);
  }
 // View Quote Details
 viewQuoteDetails(x: Ticket) {
   this.quoteService.getQuoteDetails(x.TicketConvertedID).subscribe( res => {
    if (res) {
     let obj: any = new Object();
     obj = res;
     this.quoteService.QuoteData = obj;
     this.quoteService.getQuoteItems(this.currentUser.Token, this.quoteService.QuoteData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.quoteService.QuoteItemList = response.result;
                  }
    }}, error =>  console.log(error));
     this.quoteService.getQuoteAttachments(x.TicketConvertedID);

     setTimeout(() => {
      this.router.navigate(['/quotes/quote-Details']);
     }, 1000);
    }
  }, error =>  console.log(error)) ;
 }
}
