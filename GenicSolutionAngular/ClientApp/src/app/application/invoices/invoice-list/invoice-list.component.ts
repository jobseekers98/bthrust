import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InvoiceCustomerPopupComponent } from '../invoice-customer-popup/invoice-customer-popup.component';
import { CustomerService } from '../../../services/customer.service';
import { TicketService } from '../../../services/ticket.service';
import { InvoiceTicketPopupComponent } from '../invoice-ticket-popup/invoice-ticket-popup.component';
import { InvoiceService } from '../../../services/invoice.service';
import { Invoice } from '../../../services/invoice.module';
import { PropertyService } from '../../../services/property.service';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { QuoteService } from '../../../services/quote.service';
import { Customer } from '../../../services/customer.model';
import { Property } from '../../../services/property.model';
import { Subject } from 'rxjs/internal/Subject';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styles: []
})
export class InvoiceListComponent implements OnInit, AfterViewInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  customerData: Customer;
  customerPropertyData: Property;
  currentUser: Login;
  TotalInvoice: number;
  TotalDraftInvoice: number;
  TotalCancelledInvoice: number;
  TotalPaidInvoices: number;
  TotalUnpaidInvoice: number;
  TotalOverDueInvoice: number;
  TotalSendOutParticalPaidInvoice: number;
  localInvoiceDueDate: Date;
  constructor(
    public titleService: Title,
    public dialog: MatDialog,
    public router: Router,
    public customerService: CustomerService,
    public ticketService: TicketService,
    public invoiceService: InvoiceService,
    public propertyservice: PropertyService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public quoteService: QuoteService,
    public propertyService: PropertyService,
    public genicprofileservice: GenicProfileService
  ) { this.loginservice.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit() {
    if (!this.currentUser.Permissions.InvoiceView) { this.router.navigate(['/dashboard']); }
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [5, 10, 25, 50, 75, 100] };
    this.invoiceService.refreshInvoiceList(this.currentUser.Token);
    this.titleService.setTitle('Invoices | Genic Solution');
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.TotalInvoice = this.invoiceService.InvoiceList.length;
      this.TotalDraftInvoice = this.invoiceService.InvoiceList.filter(a => a.Status === 'Draft').length;
      this.TotalCancelledInvoice = this.invoiceService.InvoiceList.filter(a => a.Status === 'cancelled').length;
      this.TotalSendOutParticalPaidInvoice = this.invoiceService.InvoiceList.filter(a => a.Status === 'PartiallyPaid').length;
      this.TotalPaidInvoices = this.invoiceService.InvoiceList.filter(a => a.Status === 'SendOutPaid').length;
      this.TotalUnpaidInvoice = this.invoiceService.InvoiceList.filter(a => a.Status === 'SendOutUnPaid').length;
      this.TotalOverDueInvoice = this.invoiceService.InvoiceList.filter(a => a.Status === 'SendOutOverDue').length;
    }, 100);
    setTimeout(() => {
      this.dtTrigger.next();
    }, 1000);
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  OpenAddCustomerToInvoiceDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(InvoiceCustomerPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res !== '') {
        this.customerService.formData.Id = res.c.Id;
        this.customerService.formData.CustomerId = res.c.CustomerId;
        this.customerService.formData.NameTitle = res.c.NameTitle;
        this.customerService.formData.FirstName = res.c.FirstName;
        this.customerService.formData.LastName = res.c.LastName;
        this.customerService.formData.CompanyName = res.c.CompanyName;
        this.customerData = new Customer();
        this.customerData = res.c;
        this.OpenAddTicketToInvoiceDialog();
      }
    });
  }
  OpenAddTicketToInvoiceDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = {};
    this.dialog.open(InvoiceTicketPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res !== undefined) {
        if(res !== ''){
        if (res.x) {
          this.invoiceService.postTempInvoice(this.currentUser.Token).subscribe(res0 => {
            if (res0) {
              const response = res0 as any;
              if (response.Message === 'success') {
                this.invoiceService.InvoiceData = response.result;
                this.ticketService.formData = Object.assign({}, res.x);
                this.invoiceService.InvoiceData.InvoiceConvertedFrom = 'TICKET';
                this.invoiceService.InvoiceData.InvoiceConvertedID = res.x.Id;
                this.invoiceService.InvoiceData.Status = 'Draft';
                this.invoiceService.InvoiceData.InvoiceTitle = res.x.Title;
                this.invoiceService.InvoiceData.Description = res.x.Description;
                this.invoiceService.InvoiceData.CustomerName = res.x.CustomerName;
                this.invoiceService.InvoiceData.CustomerId = res.x.CustomerId;
                this.invoiceService.InvoiceData.PropertyId = res.x.PropertyId;
                this.invoiceService.InvoiceData.CustomerContactNo = res.x.CustomerContactNo;
                this.invoiceService.InvoiceData.CustomerEmail = res.x.CustomerEmail;
                this.invoiceService.InvoiceData.CustomerAddress = res.x.CustomerAddress;
                this.invoiceService.InvoiceData.ClientRemark = res.x.Description;
                this.invoiceService.InvoiceData.InternalNotes = res.x.InternalNoteDescription;
                this.invoiceService.InvoiceData.NetAmount = res.x.NetAmount;
                this.invoiceService.InvoiceData.SubTotal = 0;
                this.invoiceService.InvoiceData.TicketId = res.x.TicketId;
                this.invoiceService.InvoiceData.TaxAmount = 0;
                this.invoiceService.InvoiceData.TaxId = 0;
                this.invoiceService.InvoiceData.TaxRate = 0;
                this.invoiceService.InvoiceData.DiscountType = 0;
                this.invoiceService.InvoiceData.DiscountTextValue = 0;
                this.invoiceService.InvoiceData.DiscountAmount = 0;
                this.invoiceService.InvoiceData.ReqDepositeAmount = 0;
                this.invoiceService.InvoiceData.ReqDepositeTextValue = 0;
                this.invoiceService.InvoiceData.ReqDepositeType = 0;
                this.invoiceService.posTciketitemToInvoiceItemTicketId(res.x.Id, this.invoiceService.InvoiceData.Id);
                this.propertyService.formData = new Property();
                this.propertyService.getPropertyData(res.x.PropertyId);
                this.router.navigate(['/invoices/invoice-from-ticket']);
              }
            }
          }, error => console.log(error));
        } else if (res.q) {
          this.invoiceService.postTempInvoice(this.currentUser.Token).subscribe(res1 => {
            if (res1) {
              const response = res1 as any;
              if (response.Message === 'success') {
                this.invoiceService.InvoiceData = response.result;
                this.quoteService.QuoteData = Object.assign({}, res.q);
                this.invoiceService.InvoiceData.InvoiceConvertedFrom = 'QUOTE';
                this.invoiceService.InvoiceData.InvoiceConvertedID = res.q.Id;
                this.invoiceService.InvoiceData.Status = 'Draft';
                this.invoiceService.InvoiceData.InvoiceTitle = res.q.JobTitle;
                this.invoiceService.InvoiceData.Description = res.q.Attention;
                this.invoiceService.InvoiceData.RefranceNo = res.q.SalesRepresentative;
                this.invoiceService.InvoiceData.CustomerName = res.q.CustomerName;
                this.invoiceService.InvoiceData.CustomerId = res.q.CustomerId;
                this.invoiceService.InvoiceData.PropertyId = res.q.PropertyId;
                this.invoiceService.InvoiceData.CustomerContactNo = res.q.CustomerContactNo;
                this.invoiceService.InvoiceData.CustomerEmail = res.q.CustomerEmail;
                this.invoiceService.InvoiceData.CustomerAddress = res.q.CustomerAddress;
                this.invoiceService.InvoiceData.ClientRemark = res.q.ClientRemark;
                this.invoiceService.InvoiceData.InternalNotes = res.q.InternalNotes;
                this.invoiceService.InvoiceData.NetAmount = res.q.NetAmount;
                this.invoiceService.InvoiceData.SubTotal = res.q.SubTotal;
                this.invoiceService.InvoiceData.TaxAmount = res.q.TaxAmount;
                this.invoiceService.InvoiceData.TaxId = res.q.TaxId;
                this.invoiceService.InvoiceData.TaxRate = res.q.TaxRate;
                this.invoiceService.InvoiceData.DiscountType = res.q.DiscountType;
                this.invoiceService.InvoiceData.DiscountTextValue = res.q.DiscountTextValue;
                this.invoiceService.InvoiceData.DiscountAmount = res.q.DiscountAmount;
                this.invoiceService.InvoiceData.ReqDepositeAmount = res.q.ReqDepositeAmount;
                this.invoiceService.InvoiceData.ReqDepositeTextValue = res.q.ReqDepositeTextValue;
                this.invoiceService.InvoiceData.ReqDepositeType = res.q.ReqDepositeType;
                this.invoiceService.InvoiceData.QuoteId = res.q.QuoteId;
                this.invoiceService.posQuoteItemToInvoiceItem(res.q.Id, this.invoiceService.InvoiceData.Id);
                this.propertyService.formData = new Property();
                this.propertyService.getPropertyData(res.q.PropertyId);
                this.router.navigate(['/invoices/invoice-from-quote']);
              }
            }
          }, error => console.log(error));
        }
      }
      }
    });
  }
  popolateInvoice(i: Invoice) {
    this.invoiceService.InvoiceData = Object.assign({}, i);
    this.propertyService.formData = new Property();
    this.propertyService.getPropertyData(i.PropertyId);
    this.router.navigate(['/invoices/invoice-edit']);
  }
  getInvoiceDetails(i: Invoice) {
    this.invoiceService.InvoiceData = i;
    this.router.navigate(['/invoices/invoice-details']);
  }
  viewQuoteDetails(Id: string) {
    this.quoteService.getQuoteDetails(Id)
   .subscribe( res => {
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
      this.quoteService.getQuoteAttachments(Id);
 
      setTimeout(() => {
       this.router.navigate(['/quotes/quote-Details']);
      }, 1000);
     }
   }, error =>  console.log(error)) ;
  }
  OnTicketDetails(Id: string) {
    this.ticketService.getTicketById(this.currentUser.Token, Id).subscribe( res => {
      if (res) { const response = res as any;
        this.ticketService.formData = response.result;
        this.router.navigate(['/tickets/ticket-view-detail/']);
      }
    }, error =>  console.log(error));
  }
}
