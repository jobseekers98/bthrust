import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { QuoteService } from '../../../services/quote.service';
import { QuoteSummary } from '../../../services/quote.module';
import { QuoteCustomerPopupComponent } from '../quote-customer-popup/quote-customer-popup.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Quote } from '../../../services/quote.module';
import { QuotecustomerPropertyPopupComponent } from '../quotecustomer-property-popup/quotecustomer-property-popup.component';
import { QuoteStatusPopupComponent } from '../quote-status-popup/quote-status-popup.component';
import { UserlogService } from '../../../services/userlog.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Login } from '../../../services/login.mudule';
import { Property } from '../../../services/property.model';
import { Customer } from '../../../services/customer.model';
import { PropertyService } from '../../../services/property.service';
import { Subject } from 'rxjs/internal/Subject';
import { QuoteContactPersonPopupComponent } from '../quote-contact-person-popup/quote-contact-person-popup.component';
import { DownloadService } from '../../../services/downloads.service';
import { TicketService } from '../../../services/ticket.service';
import { saveAs } from 'file-saver';
import { CustomerService } from '../../../services/customer.service';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { DataTableDirective } from 'angular-datatables';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from '../../../ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from '../../../ngb-time-to-string-adapter';
import { TicketFilter } from '../../../services/genicprofile.module';
import { InvoiceService } from '../../../services/invoice.service';
import { Title } from '@angular/platform-browser';
import { SignatureQuoteStatusPopupComponent } from '../signature-quote-status-popup/signature-quote-status-popup.component';
declare let $: any;

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter },
  ],
})
export class QuoteListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  customerPropertyData: Property;
  customerData: Customer;
  StatusType: string;
  currentUser: Login;
  QuoteSummary: QuoteSummary;
  TotalQuotation: number;
  AcceptedQuotation: number;
  PendingQuotation: number;
  RejectedQuotation: number;
  CancelledQuotation: number;
  temptQuoteStatus: Number = 0;
  tempQuoteId: string = '';
  OnDateSearchLoading: boolean;
  isDtInitialized:boolean = false;
  CustomerdropdownList = []; CustomerselectedItems = [];
  CustomerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Customers'};
  StatusdropdownList = []; StatusselectedItems = [];
  StatusdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Status'};
  DepartmentdropdownList = []; DepartmentselectedItems = [];
  DepartmentdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Group'};
  constructor(
    public titleService: Title,
    public quoteService: QuoteService,
    public customerservice: CustomerService,
    private dialog: MatDialog,
    private router: Router,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public propertyService: PropertyService,
    public ticketService: TicketService,
    public invoiceService: InvoiceService,
    public genicprofileservice: GenicProfileService,
    public downloadService: DownloadService,
    ) {
      this.QuoteSummary = new QuoteSummary();
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.TotalQuotation = 0;
      this.AcceptedQuotation = 0;
      this.PendingQuotation = 0;
      this.RejectedQuotation = 0;
      this.CancelledQuotation = 0;
    }

  ngOnInit() {
    if (this.currentUser.Type === 'Admin' || this.currentUser.Type === 'SubAdmin') {  
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.OnDateSearchLoading = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, order: [0], lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
    if (!this.genicprofileservice.TicketFilter.IsReadyQuote) {
      this.distroyAndReloadTable();
    }
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
    this.StatusdropdownList = [
         { Id: 1, Name: 'Draft' },
         { Id: 2, Name: 'Pending' },
         { Id: 3, Name: 'Approved' },
          { Id: 4, Name: 'Accepted' },
          { Id: 5, Name: 'Rejected' },
          { Id: 6, Name: 'Cancelled' }
          ];
    if (this.genicprofileservice.TicketFilter.IsReadyQuote) {
        this.StatusdropdownList.forEach(w => {
            this.genicprofileservice.TicketFilter.Status.forEach(el => {
              if (w.item_id === el) {
                this.StatusselectedItems.push({item_id: w.item_id, item_text: w.item_text });
              }
            });
          });
        }
    if (this.genicprofileservice.TicketFilter.IsReadyQuote) {
          this.distroyAndReloadFilterTable();
          this.genicprofileservice.TicketFilter.IsReadyQuote = false;
          setTimeout(() => {
            this.genicprofileservice.TicketFilter.IsReadyQuote = true;
          }, 1000);
        }
        this.titleService.setTitle('Quotations | Genic Solution');
      } else { this.router.navigate(['/auth']); }
  }

  ngAfterViewInit() {

  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  OpenAddCustomerToQuoteDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(QuoteCustomerPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res !== '') {
        this.customerData = new Customer();
        this.customerData = res.x;
        this.quoteService.QuoteData = new Quote();
        this.quoteService.QuoteData.CustomerId = res.x.Id;
        this.quoteService.QuoteData.CompanyName = res.x.CompanyName;
        setTimeout(() => {
          this.quoteService.getCustomerProperty(res.x.Id);
          this.OpenAddnContactPersionDialog();
        }, 500);
      }
    });
  }
  OpenAddnContactPersionDialog() {
    this.quoteService.postTempQuote(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.quoteService.QuoteData = response.result as Quote;
                  }
                 if (response.Message === 'failure') {
                  }
      }}, error =>  console.log(error));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(QuoteContactPersonPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res !== '') {
        this.OpenAddCustomerPropertyQuoteDialog();
      }
    });
  }

  OpenAddCustomerPropertyQuoteDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(QuotecustomerPropertyPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res !== '') {
        if (res === undefined) {
          this.router.navigate(['/properties/property-add/'], {
            queryParams:
              { 'id': this.quoteService.QuoteData.CustomerId,
              'name': this.quoteService.QuoteData.CustomerName, 'companyname': this.quoteService.QuoteData.CompanyName }
          });
        } else {
          this.customerPropertyData = new Property();
          this.customerPropertyData = res.x;
          //this.quoteService.QuoteData.CompanyName = this.customerData.CompanyName;
          //this.quoteService.QuoteData.CustomerName = this.customerPropertyData.CustomerName;
          this.quoteService.QuoteData.CustomerId = this.customerPropertyData.CustomerId;
          this.quoteService.QuoteData.PropertyId = this.customerPropertyData.Id;
          this.quoteService.QuoteData.CustomerAddress = res.x.AddressStreet1 + ' ' + res.x.AddressStreet2 + ', ' + res.x.AddressUnitNo + ' ' + res.x.AddressCountry + ' ' + res.x.AddressZipCode;
          this.router.navigate(['/quotes/quote-Add']);
        }
      }
    });
  }
  popolateQuote(q: Quote) {
    this.quoteService.QuoteData = Object.assign({}, q);
    this.propertyService.getPropertyData(q.PropertyId);
    if (q.ModifiedUtcDate != null) {
      this.quoteService.QuoteData.ModifiedUtcDate = new Date(q.ModifiedUtcDate);
    }
    this.router.navigate(['/quotes/quote-Edit']);
  }
  getQuoteDetails(q: Quote) {
    this.quoteService.QuoteData = q;
    this.propertyService.getPropertyData(q.PropertyId);
    this.router.navigate(['/quotes/quote-Details']);
  }

populateStatusPopup(q: Quote, Id) {
this.quoteService.QuoteData = q;
const dialogCon = new MatDialogConfig();
dialogCon.autoFocus = true;
dialogCon.width = '600px';
this.dialog.open(QuoteStatusPopupComponent, dialogCon).afterClosed().subscribe(res => {
  if (res !== undefined) {
    this.quoteService.UpdateQuoteStatus(Id, res.Status, this.currentUser.Token).subscribe( res2 => {
      if (res) { const response = res2 as any;
                 if (response.Message === 'success') {
                  this.postQuoteStatusUserLog(res.Status);
                  this.distroyAndReloadTable();
                  }
                 if (response.Message === 'failure') {
                  }
      }}, error =>  console.log(error));
  } else {
    return false;
  }
});
}
addsignature(q: Quote) {
  this.quoteService.QuoteData = q;
  const dialogCon = new MatDialogConfig();
  dialogCon.autoFocus = true;
  dialogCon.width = '600px';
  this.dialog.open(SignatureQuoteStatusPopupComponent, dialogCon).afterClosed().subscribe(res => {
    if (res !== undefined) {
      this.distroyAndReloadTable();
    } else {
      return false;
    }
  });
  }

  // post user log on quote status change
  postQuoteStatusUserLog(Status: number) {
    if (Status === 1) { this.StatusType = 'Draft';
    } else if (Status === 2) { this.StatusType = 'Sent';
    } else if (Status === 3) { this.StatusType = 'Approved';
    } else if (Status === 4) { this.StatusType = 'Accepted';
    } else if (Status === 5) { this.StatusType = 'Rejected';
    } else if (Status === 6) { this.StatusType = 'Cancellled';
    }

    const des = 'Status change of Quotation No ' + this.quoteService.QuoteData.QuoteId + ' is as ' +
    this.StatusType + ' by ' + this.currentUser.UserName + ' for Customer ' + this.quoteService.QuoteData.CustomerName ;
    const Activity = 'Status mark as : ' + this.StatusType + ' changed of  Quotation No : ' + this.quoteService.QuoteData.QuoteId +
    ' on mail id : ' + this.quoteService.QuoteData.CustomerEmail;
    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation',
    this.quoteService.QuoteData.Id, 'Modify', des, Activity ).subscribe();
    }
exportAsXLSX(): void {
  this.downloadService.downloadFromServer('quotation', this.currentUser.Token).then(blob => {
    saveAs(blob, 'quotation_' + new Date().getTime() + '.xlsx');
 });
}

viewTicketDetails(Id) {
  this.ticketService.getTicketById(this.currentUser.Token, Id).subscribe( res => {
    if (res) { const response = res as any;
               if (response.Message === 'success') {
                  this.ticketService.formData = response.result;
                  this.router.navigate(['/tickets/ticket-view-detail']);
                }
  }}, error =>  console.log(error));
  }
  ViewInvoiceDetails(InvoiceId: string) {
    try{
      this.invoiceService.refreshInvoiceById(InvoiceId, this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
         this.invoiceService.InvoiceData = response.result;
         setTimeout(() => {
          this.router.navigate(['/invoices/invoice-details']);
         }, 200);
        }
      }, error =>  console.log(error)) ;
    } catch {}
  }
  morefilters() {
    if (this.genicprofileservice.TicketFilter.IsReadyQuote) {
      this.genicprofileservice.TicketFilter.IsReadyQuote = false;
      this.distroyAndReloadTable();
    } else {
      this.genicprofileservice.TicketFilter = new TicketFilter();
      this.CustomerselectedItems = [];
      this.StatusselectedItems = [];
      this.genicprofileservice.TicketFilter.IsReadyQuote = true;
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
  distroyAndReloadTableold(): void {
    if (this.dtElement !==  undefined && this.dtElement.dtInstance !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      }).catch(err => console.error(err));
    }
    this.quoteService.QuoteLocalList = [];
    this.quoteService.getrefrestQuoteListSync(this.currentUser.Token).subscribe( res => {
      if (res) {
        this.quoteService.QuoteLocalList = res as Quote[];
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
              dtInstance.destroy();
              this.dtTrigger.next();
          }); } else {
          this.isDtInitialized = true;
          this.dtTrigger.next();
      }
        this.TotalQuotation = this.quoteService.QuoteLocalList.length;
        this.AcceptedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 4).length;
        this.PendingQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 2).length;
        this.RejectedQuotation  = this.quoteService.QuoteLocalList.filter(x => x.Status === 5).length;
        this.CancelledQuotation  = this.quoteService.QuoteLocalList.filter(x => x.Status === 6).length;
      }
    }, error =>  console.log(error));
  }
  distroyAndReloadTable(): void {
    this.quoteService.getrefrestQuoteListSync(this.currentUser.Token).subscribe( res => {
      if (res) {  const response = res as any;
                  if (response.Message === 'success') {
                    this.quoteService.QuoteLocalList = response.result as Quote[];
                    if (this.isDtInitialized) {
                      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                          dtInstance.destroy();
                          this.dtTrigger.next();
                      }); } else {
                      this.isDtInitialized = true;
                      this.dtTrigger.next();
                  }
                    setTimeout(() => {
                      this.TotalQuotation = this.quoteService.QuoteLocalList.length;
                      this.AcceptedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 4).length;
                      this.PendingQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 2).length;
                      this.RejectedQuotation  = this.quoteService.QuoteLocalList.filter(x => x.Status === 5).length;
                      this.CancelledQuotation  = this.quoteService.QuoteLocalList.filter(x => x.Status === 6).length;
                    }, 500);
                  }
      }
    }, error =>  console.log(error));
  }
  distroyAndReloadFilterTableold(): void {
    this.quoteService.QuoteLocalList = [];
    this.genicprofileservice.getFilterQuotationListSync(this.currentUser.Token).subscribe( res => {
      if (res) {
        this.quoteService.QuoteLocalList = res as Quote[];
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
              dtInstance.destroy();
              this.dtTrigger.next();
          }); } else {
          this.isDtInitialized = true;
          this.dtTrigger.next();
      }
        this.TotalQuotation = this.quoteService.QuoteList.length;
        this.AcceptedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 4).length;
        this.PendingQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 2).length;
        this.RejectedQuotation  = this.quoteService.QuoteLocalList.filter(x => x.Status === 5).length;
        this.CancelledQuotation  = this.quoteService.QuoteLocalList.filter(x => x.Status === 6).length;
      }
    }, error =>  console.log(error));
  }
  distroyAndReloadFilterTable(): void {
    this.genicprofileservice.getFilterQuotationListSync(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.quoteService.QuoteLocalList = response.result as Quote[];
                  if (this.isDtInitialized) {
                    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                        dtInstance.destroy();
                        this.dtTrigger.next();
                    }); } else {
                    this.isDtInitialized = true;
                    this.dtTrigger.next();
                }
                  setTimeout(() => {
                    this.TotalQuotation = this.quoteService.QuoteLocalList.length;
                    this.AcceptedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 4).length;
        this.PendingQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 2).length;
        this.RejectedQuotation  = this.quoteService.QuoteLocalList.filter(x => x.Status === 5).length;
        this.CancelledQuotation  = this.quoteService.QuoteLocalList.filter(x => x.Status === 6).length;
                  }, 500);
                }
            }
    }, error =>  console.log(error));
  }
}
