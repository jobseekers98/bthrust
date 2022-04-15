import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { saveAs } from 'file-saver';
import { DataTableDirective } from 'angular-datatables';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { Login, AuthenticationService } from 'src/app/services';
import { Customer } from 'src/app/services/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { DownloadService } from 'src/app/services/downloads.service';
import { TicketFilter } from 'src/app/services/genicprofile.module';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Invoice } from 'src/app/services/invoice.module';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Property } from 'src/app/services/property.model';
import { PropertyService } from 'src/app/services/property.service';
import { QuoteSummary, Quote } from 'src/app/services/quote.module';
import { QuoteService } from 'src/app/services/quote.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserlogService } from 'src/app/services/userlog.service';
import { CustomerQuoteStatusPopupComponent } from '../customer-quote-status-popup/customer-quote-status-popup.component';
declare let $: any;

@Component({
  selector: 'app-quote-list',
  templateUrl: './customer-quote-list.component.html',
  styleUrls: ['./customer-quote-list.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter },
  ],
})
export class CustomerQuoteListComponent implements OnInit, AfterViewInit, OnDestroy {
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
    if (this.currentUser.Type === 'Customer') {  
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
         { Id: 2, Name: 'Sent' },
         { Id: 3, Name: 'Accepted' },
         { Id: 4, Name: 'Rejected' },
         { Id: 5, Name: 'Cancelled' }];
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
  getQuoteDetails(q: Quote) {
    this.quoteService.QuoteData = q;
    this.propertyService.getPropertyData(q.PropertyId);
    this.router.navigate(['/customer/customer-quote-Details']);
  }

populateStatusPopup(q: Quote, Id) {
this.quoteService.QuoteData = q;
const dialogCon = new MatDialogConfig();
dialogCon.autoFocus = true;
dialogCon.width = '600px';
this.dialog.open(CustomerQuoteStatusPopupComponent, dialogCon).afterClosed().subscribe(res => {
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

  // post user log on quote status change
  postQuoteStatusUserLog(Status: number) {
    if (Status === 1) { this.StatusType = 'Draft';
    } else if (Status === 2) { this.StatusType = 'Sent';
    } else if (Status === 3) { this.StatusType = 'Accepted';
    } else if (Status === 4) { this.StatusType = 'Rejected';
    } else if (Status === 5) { this.StatusType = 'Cancellled';}

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
                  this.router.navigate(['/customer/customer-tickets/custoner-ticket-view-details']);
                }
  }}, error =>  console.log(error));
  }
  viewInvoiceDetails(Id) {
    this.invoiceService.refreshInvoiceBtId(Id).subscribe( res => {
      if (res) {
        this.invoiceService.InvoiceData = res as Invoice;
        this.router.navigate(['/invoices/invoice-details']);
      }}, error =>  console.log(error));
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
                  this.Totalcount();
                  }
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
                  this.Totalcount();
                }
            }
    }, error =>  console.log(error));
  }
  Totalcount() {
    setTimeout(() => {
      this.TotalQuotation = this.quoteService.QuoteLocalList.length;
      this.PendingQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 2).length;
      this.AcceptedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 3).length;
      this.RejectedQuotation  = this.quoteService.QuoteLocalList.filter(x => x.Status === 4).length;
      this.CancelledQuotation  = this.quoteService.QuoteLocalList.filter(x => x.Status === 5).length;
    }, 500);
  }
}
