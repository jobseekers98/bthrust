import { Component, OnInit, ViewChild , AfterViewInit, TemplateRef} from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket, TicketTimer, TicketItem } from 'src/app/services/ticket.module';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CloserService } from 'src/app/services/closer.service';
import { CloserDetails } from 'src/app/services/closerDetails.module';
import { NgbDateAdapter, NgbTimeAdapter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { ServiceformService } from 'src/app/services/serviceform.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { ProductService } from 'src/app/services/product.service';
import { TicketWiseServiceForm } from 'src/app/services/serviceform.module';
import { UserLog } from 'src/app/services/userlog.module';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import * as moment from 'moment';
import { NotificationService } from 'src/app/services/notification.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import { ViewServiceFormHTMLPopupComponent } from '../../engineer/engineer-ticket/view-service-form-html-popup/view-service-form-html-popup2.component';
import { CloserUpdatePopupComponent } from '../../closer-update-popup/closer-update-popup.component';

@Component({
  selector: 'app-ticket-view-detail',
  templateUrl: './ticket-view-detail.component.html',
  styleUrls: ['./ticket-view-detail.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
],
})
export class TicketViewDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @ViewChild('modalContent2', { static: true }) modalContent2: TemplateRef<any>;
  locaTicketData: Ticket;
  LocalTicketItemList: any;
  localPrependUrl: string;
  currentUser: Login;
  LocalLogData: UserLog;
  LocalLogList: UserLog[];
  localTicketTimesheet: any;
  tempTotalTimeSpan: string;
  private TimerStartTime;
  TimeSlot: any;
  TimeSlotDay: any;
  TimeSlotHours: any;
  TimeSlotMinuts: any;
  TimeSlotSeconds: any;
  customwarrantyShow: boolean;
  customwarrantyShowEdit: boolean;
  isShowSpinner: boolean = false;
  ItemUniqueIsValid = true;
  Isserviceformdownload = false;
  IsserviceformdownloadCloserId = '00000000-0000-0000-0000-000000000000';
  constructor(
    public service: ServiceformService,
    public titleService: Title,
    public ticketService: TicketService,
    private dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService,
    public closerService: CloserService,
    public invoiceService: InvoiceService,
    public loginservice: AuthenticationService,
    public logService: UserlogService,
    public productservice: ProductService,
    private modal: NgbModal,
    public profileService: GenicProfileService,
    public notifyService: NotificationService

  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.LocalLogList = [];
    this.localTicketTimesheet = [];
    this.tempTotalTimeSpan = '';
    this.TimeSlot = '00-00:00:00';
    this.TimeSlotDay = '0';
    this.TimeSlotHours = '00';
    this.TimeSlotMinuts = '00';
    this.TimeSlotSeconds = '00';
    this.ticketService.formData.TicketWiseIssueType = [];
   }

  ngOnInit() {
    this.ticketService.getTicketById(this.currentUser.Token, this.ticketService.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.ticketService.formData = response.result;
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
    if (this.ticketService.formData.CustomerName === 'CUSTOMER NAME') {
      this.router.navigate(['/tickets']);
    } else {
    this.LocalTicketItemList = [];
    this.refrestTicketItemlist();
    // Get ticket log on ticket id
    this.getTicketLogs();
    this.profileService.getGenicProfile(this.currentUser.Token);
    this.ticketService.TicketTimerData = new TicketTimer();
    setTimeout(() => {
      this.LocalTicketItemList = this.ticketService.TicketItemList;
      // get ticket data to locat varialble
      }, 500);

     // Get: Time Sheet
     this.getMyTimesheet();
     // this method used to get time duration when already started ticket
     this.service.getAssignedServiceFormListByTicket(this.currentUser.Token, this.ticketService.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.service.TicketWiseServiceFormList = response.result;
                  }
    }}, error =>  console.log(error));
    this.getTicketCloserLog();
    // post temp service form
    }
    this.titleService.setTitle(this.currentUser.Ticket + ' Details | Genic Solution');
  }
  ngAfterViewInit() {
   // this.invoiceService.refrestArrayofKeyslist(this.ticketService.formData.CustomerId);
    // list of closer attachment
    setTimeout(() => {
      this.getTicketCloserAttachmentList();
    }, 1000);

    // setTimeout(() => {
    //   this.myTimer();
    // }, 2000);
  }
  refrestTicketItemlist() {
    this.ticketService.refrestTicketItemlist(this.currentUser.Token, this.ticketService.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.ticketService.TicketItemList = [];
                    this.ticketService.TicketItemList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  getTicketLogs() {
    this.logService.getTicketLogs(this.ticketService.formData.Id, this.currentUser.Ticket, this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.LocalLogList = [];
                    this.LocalLogList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  getTicketCloserLog() {
    this.closerService.getTicketCloserLog(this.currentUser.Token, this.ticketService.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.closerService.CloserDetailsList = [];
                    this.closerService.CloserDetailsList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  getTicketCloserAttachmentList() {
    this.closerService.getTicketCloserAttachmentList(this.currentUser.Token, this.closerService.CloserDetailsData.CloserID).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.closerService.CloserAttachmentList = [];
                    this.closerService.CloserAttachmentList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  //Get time sheet
getMyTimesheet() {
  this.logService.getTicketTimeSheet(this.ticketService.formData.Id, this.currentUser.Token)
    .subscribe( res => {
      if (res) {
      let lst: any = [];
      lst = res;
      this.localTicketTimesheet = [];
      this.localTicketTimesheet= lst;
      this.logService.TicketTimeSheetList = [];
      this.logService.TicketTimeSheetList = lst;
      this.CountTotalTicketTimespan();
      }
    }, error =>  console.log(error));
}
  myTimer() {
    this.TimerStartTime = moment(this.ticketService.TicketTimerData.StartDate);
    setInterval(
      () => {
        const currentTime = moment();
        const diffTime = moment.duration(currentTime.diff(this.TimerStartTime));
        const time = this.toString(diffTime.days())
          + '-' + this.toString(diffTime.hours())
          + ':' + this.toString(diffTime.minutes())
          + ':' + this.toString(diffTime.seconds());
        this.TimeSlot = time;
        this.TimeSlotDay = this.toString(diffTime.days());
        this.TimeSlotHours = this.toString(diffTime.hours());
        this.TimeSlotMinuts = this.toString(diffTime.minutes());
        this.TimeSlotSeconds = this.toString(diffTime.seconds());
      },
      1000
    );

  }

  private toString(value) {
    let val = value;
    if (!value) {
      val = '00';
    }
    if (value < 10) {
      val = '0' + value;
    }
    return val;
  }
  viewServiceFormDetails2() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '1000px';
    dialogConfig.maxHeight = '700px';
    dialogConfig.data = {};
    this.dialog.open(ViewServiceFormHTMLPopupComponent, dialogConfig).afterClosed().subscribe(res => {
    });
  }
  // view service form details popup
  viewServiceFormDetails(f: TicketWiseServiceForm) {
  this.service.TicketWiseServiceFormData = Object.assign({}, f);
  this.viewServiceFormDetailsPopup();
  }
  viewServiceFormDetailsPopup() {
     const dialogConfig = new MatDialogConfig();
     dialogConfig.autoFocus = false;
     dialogConfig.width = '1000px';
     dialogConfig.maxHeight = '700px';
     dialogConfig.data = {};
     this.dialog.open(ViewServiceFormHTMLPopupComponent, dialogConfig).afterClosed().subscribe(res => {
     });
}
populateCloserForm(f: CloserDetails) {
this.closerService.CloserDetailsData = f;
this.router.navigate(['./engineer/engineer-tickets/closer-details']);
}
updateCloserForm(f: CloserDetails) {
  console.log(f);
  this.closerService.CloserDetailsData = f;
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '1000px';
  dialogConfig.height = '800px';
  dialogConfig.data = {};
  this.dialog.open(CloserUpdatePopupComponent, dialogConfig).afterClosed().subscribe(res => {
    this.router.navigate(['/tickets/']);
  });
}
popolateTicket(t: Ticket) {
  this.ticketService.formData = t;
  this.router.navigate(['./tickets/ticket-edit']);
}
ReadMoreLog(p: UserLog) {
  this.LocalLogData = new UserLog();
  this.LocalLogData = p;
  this.modal.open(this.modalContent, { size: 'lg' });
}
close() {}
CountTotalTicketTimespan() {
  var hour = 0;
  var minute = 0;
  var second = 0;
  this.localTicketTimesheet.forEach(el => {
    if (el.EndDate === null || el.EndDate === undefined) {
      el.TimeDiff = '00:00:00';
    } else {
       // tslint:disable-next-line: radix
      hour += parseInt(el.TimeDiff.split(':')[0]);
      // tslint:disable-next-line: radix
      minute += parseInt(el.TimeDiff.split(':')[1]);
      // tslint:disable-next-line: radix
      second += parseInt(el.TimeDiff.split(':')[2]);
    }
  });
  hour = (hour + minute / 60);
  let min = minute + second / 60;
  minute = min %60;
  second = second % 60;
  let h = '00';
  let m = '00';
  let s = '00';
  h = hour.toString().split('.')[0];
  m = minute.toString().split('.')[0];
  s = second.toString().split('.')[0];
  var ttl = this.toString(h) + ':' + this.toString(m);
  this.tempTotalTimeSpan = ttl;
}
loadTimesheet(Id: string) {
  setTimeout(() => {
    this.localTicketTimesheet = [];
    if (Id === 'All') {
    this.localTicketTimesheet = this.logService.TicketTimeSheetList;
  } else {
      this.localTicketTimesheet = this.logService.TicketTimeSheetList.filter(e =>
        e.EngineerId === Id);
  }
    this.CountTotalTicketTimespan();
  }, 1000);
}
LoadTimesheetOnSearch(value: string) {
  setTimeout(() => {
    this.localTicketTimesheet = this.logService.TicketTimeSheetList.filter(e =>
      e.EngineerName.toLowerCase().match(value.toLowerCase()));
    this.CountTotalTicketTimespan();
  }, 1000);
}
viewHTMLServiceForm(f: TicketWiseServiceForm) {
  this.service.TicketWiseServiceFormData = Object.assign({}, f);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '1000px';
  dialogConfig.height = '700px';
  dialogConfig.data = {};
  this.dialog.open(ViewServiceFormHTMLPopupComponent, dialogConfig);
}
viewClientHistory(ticket: Ticket): void {
  this.ticketService.formData = Object.assign({}, ticket);
  this.router.navigate(['/properties/ticket-history-property-wise']);
}


downloadServiceFormPDF(f: TicketWiseServiceForm) {
  if (this.closerService.CloserDetailsList.length <= 0) {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Closer details not available!',
    });
  } else {
  this.Isserviceformdownload = true;
  this.IsserviceformdownloadCloserId = f.CloserId;
  this.service.downoadServiceFormPDF(f.CloserId)
        .subscribe(res => {
          const response = res as any;
          if (response.Message === 'success') {
            this.Isserviceformdownload = false;
            const a = $('<a>')
              .attr('href', response.Path)
			        .attr("target", "_blank")
              .attr('download', 'Service.pdf')
              .appendTo('body');
            a[0].click();
            a.remove();
          }
          if (response.Message === 'failure') {
            this.toastr.warning('warning', response.MessageDescription);
            this.Isserviceformdownload = false;
          }
        }, error => console.log(error));
}
}
copyTicket(ticketid: string) {
  this.ticketService.formData.Id = ticketid;
  this.router.navigate(['/tickets/ticket-copy/']);
}

emailWorkOrder(f: TicketWiseServiceForm) {
  Swal.fire({
    title: 'Aru you sure?',
    text: 'Send work order to ' + this.ticketService.formData.CustomerEmail + ' email',
    type: 'info',
    showCancelButton: true,
    confirmButtonColor: 'red',
    confirmButtonText: 'Cancel',
    cancelButtonColor: 'green',
    cancelButtonText: 'Continue',
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: 'Canceled!',
        text: 'Action is dismissed',
        type: 'info',
        timer: 2000
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      this.notifyService.WorkOrderEmailNotification(f.CloserId, this.currentUser.Id)
      .subscribe(res => {
        if (res) {
          Swal.fire({
            title: 'Success!',
            text: 'Work order email successfully!',
            type: 'success',
            timer: 2000
          });
        }
      }, error => console.log(error));
    }
  });
}
UpdateInstallationDate(p: TicketItem) {
  this.ticketService.TicketItem = Object.assign({} , p);
  this.modal.open(this.modalContent2, { size: 'lg' });
}
public customwarrantyShowMethor() {
  if (this.ticketService.TicketItem.WarrantyDays === undefined) {
    this.customwarrantyShow = false;
  } else {
  switch (this.ticketService.TicketItem.WarrantyDays.toString()) {
    case '90':
    case '180':
    case '270':
    case '365': this.customwarrantyShow = true; break;
    default: this.customwarrantyShow = false; break;
  }
}
}
numberOnly(event): boolean {
  if (Number(event.target.value) === 0) {
    event.target.value = null;
  }
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
enablewarrantchange() {
if (this.customwarrantyShowEdit) { this.customwarrantyShowEdit = false; } else { this.customwarrantyShowEdit = true; }
}
UpdateItemInstallation() {
  if (this.currentUser.Permissions.ProductWarranty) {
    if (this.ticketService.TicketItem.InWarranty) {
      if (this.ticketService.TicketItem.UniqId === '' || this.ticketService.TicketItem.UniqId.length === 0) {
        this.toastr.warning('Warning', 'Please enter a unique id');
        this.ItemUniqueIsValid = false;
        return false;
      }
    }
  }
  this.isShowSpinner = true;
  this.ticketService.TicketItem.WarrantyDays = Number(this.ticketService.TicketItem.WarrantyDays);
  this.ticketService.putTicketItemDetails(this.currentUser.Token).subscribe( res => {
    if (res) { const response = res as any;
               if (response.Message === 'success') {
                this.refrestTicketItemlist();
                setTimeout(() => {
                  this.LocalTicketItemList = this.ticketService.TicketItemList;
                }, 1000);
                setTimeout(() => {
                  this.modal.dismissAll();
                  this.isShowSpinner = false;
                }, 500);
                }
               if (response.Message === 'failure') {
                this.isShowSpinner = false;
                  this.toastr.warning('warning', response.MessageDescription);
                }
  }}, error =>  console.log(error));
  this.ItemUniqueIsValid = false;
}
}
