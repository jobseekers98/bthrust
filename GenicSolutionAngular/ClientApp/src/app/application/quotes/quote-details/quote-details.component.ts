import { Component, OnInit, AfterViewInit } from '@angular/core';
import { QuoteService } from '../../../services/quote.service';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Quote } from '../../../services/quote.module';
import { InvoiceService } from '../../../services/invoice.service';
import { TicketService } from '../../../services/ticket.service';
import { UserlogService } from '../../../services/userlog.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Login } from '../../../services/login.mudule';
import { Property } from '../../../services/property.model';
import { PropertyService } from '../../../services/property.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { QuoteCustomerPopupComponent } from '../quote-customer-popup/quote-customer-popup.component';
import { Customer } from '../../../services/customer.model';
import { QuotecustomerPropertyPopupComponent } from '../quotecustomer-property-popup/quotecustomer-property-popup.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit, AfterViewInit {
  localPropertyData: Property;
  public uploader: FileUploader = new FileUploader({});
  currentUser: Login;
  localPrependUrl: string;
  localQuoteData: Quote;
  customerData: Customer;
  customerPropertyData: Property;
  emailIdToSendPDF: string;
  isValidEmailIdToSendPDF: boolean = true;
  constructor(
    public titleService: Title,
    public quoteService: QuoteService,
    public productservice: ProductService,
    public toastr: ToastrService,
    private router: Router,
    public invoiceService: InvoiceService,
    public ticketService: TicketService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public propertyService: PropertyService,
    private dialog: MatDialog,
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.emailIdToSendPDF = '';
   }

  ngOnInit() {
    this.localPropertyData = new Property();
    if (this.quoteService.QuoteData.CustomerName === 'Customer Name?' || this.quoteService.QuoteData.CustomerName === undefined) {
      this.router.navigate(['/quotes/']);
    }
    this.titleService.setTitle('Quotation Details | Genic Solution');
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.emailIdToSendPDF = this.quoteService.QuoteData.CustomerEmail;
      this.getQuoteItems();
      this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
    }, 200);
    setTimeout(() => {
      this.localPropertyData = Object.assign({}, this.propertyService.formData);
      // alert(this.quoteService.QuoteData.InvoiceNo + '-' + this.quoteService.QuoteData.Status);
    }, 500);

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        // console.log('FileUpload:uploaded:', item, status, response);
         this.toastr.info('info', 'file Add');

         const des = 'An attachment has been Added to the Quotation No ' +
         this.quoteService.QuoteData.QuoteId + ' of Customer ' + this.quoteService.QuoteData.CustomerName +
           ' by user ' + this.currentUser.UserName;
         const Activity = 'An attachment is added to the Quotation No : ' + this.quoteService.QuoteData.QuoteId;
         this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation',
         this.quoteService.QuoteData.Id, 'Added', des, Activity ).subscribe();


         this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
        };
    this.uploader.onBeforeUploadItem = (file) =>
      file.url = environment.apiUrl + '/api/Quotes/UploadQuoteAttachment/' + this.quoteService.QuoteData.Id;
  }
  getQuoteItems() {
    this.quoteService.getQuoteItems(this.currentUser.Token, this.quoteService.QuoteData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.quoteService.QuoteItemList = response.result;
                  }
    }}, error =>  console.log(error));
  }

popolateQuote(q: Quote) {
  this.quoteService.QuoteData = Object.assign({}, q);
  if (q.ModifiedUtcDate != null) {
    this.quoteService.QuoteData.ModifiedUtcDate = new Date(q.ModifiedUtcDate);
  }
  this.propertyService.formData = new Property();
  this.propertyService.getPropertyData(q.PropertyId);
  this.router.navigate(['/quotes/quote-Edit']);
}
ConvertQuoteToInvoice(q: Quote) {
  this.invoiceService.postTempInvoice(this.currentUser.Token).subscribe( res => {
    if (res) { const response = res as any;
               if (response.Message === 'success') {
                this.invoiceService.InvoiceData = response.result;
                this.quoteService.QuoteData = Object.assign({}, q);
                this.invoiceService.InvoiceData.InvoiceConvertedFrom = 'QUOTE';
                this.invoiceService.InvoiceData.InvoiceConvertedID = q.Id;
                this.invoiceService.InvoiceData.Status = 'Draft';
                this.invoiceService.InvoiceData.InvoiceTitle = q.JobTitle;
                this.invoiceService.InvoiceData.CustomerName = q.CustomerName;
                this.invoiceService.InvoiceData.CustomerAddress = q.CustomerAddress;
                this.invoiceService.InvoiceData.CustomerId = q.CustomerId;
                this.invoiceService.InvoiceData.PropertyId = q.PropertyId;
                this.invoiceService.InvoiceData.CustomerContactNo = q.CustomerContactNo;
                this.invoiceService.InvoiceData.CustomerEmail = q.CustomerEmail;
                this.invoiceService.InvoiceData.ClientRemark = q.ClientRemark;
                this.invoiceService.InvoiceData.InternalNotes = q.InternalNotes;
                this.invoiceService.InvoiceData.NetAmount = q.NetAmount;
                this.invoiceService.InvoiceData.SubTotal = q.SubTotal;
                this.invoiceService.InvoiceData.TaxAmount = q.TaxAmount;
                this.invoiceService.InvoiceData.TaxId = q.TaxId;
                this.invoiceService.InvoiceData.TaxRate = q.TaxRate;
                this.invoiceService.InvoiceData.DiscountType = q.DiscountType;
                this.invoiceService.InvoiceData.DiscountTextValue = q.DiscountAmount;
                this.invoiceService.InvoiceData.DiscountAmount = q.DiscountAmount;
                this.invoiceService.InvoiceData.ReqDepositeAmount = q.ReqDepositeAmount;
                this.invoiceService.InvoiceData.ReqDepositeTextValue = q.ReqDepositeTextValue;
                this.invoiceService.InvoiceData.ReqDepositeType = q.ReqDepositeType;
                this.invoiceService.InvoiceData.QuoteId = q.QuoteId;
                // setTimeout(() => {
                this.invoiceService.posQuoteItemToInvoiceItem(this.quoteService.QuoteData.Id, this.invoiceService.InvoiceData.Id);
              // }, 200);
                this.router.navigate(['/invoices/invoice-from-quote']);
                }
  }}, error =>  console.log(error));
}
ConvertQuoteToTicket(q: Quote) {
  this.ticketService.formData.QuoteId = q.Id;
  localStorage.setItem("QuoteId",this.ticketService.formData.QuoteId);
  this.router.navigate(['/tickets/ticket-create-from-quote']);
}
ConvertToPDFQuote(i: Quote) {
  if (confirm('Are you sure want to download Quotation?')) {

    const des = 'An download requrest sent by : ' + this.currentUser.UserName + ' of Quotation No : '
    + i.QuoteId + ' for Customer : '
     + i.CustomerName + ' Quotation title " ' +
     i.JobTitle + ' Amount of $ ' + i.NetAmount + '0.00 on dated : ' + new Date();
    const Activity2 = 'PDF download request is received against Quotation No : ' + this.quoteService.QuoteData.QuoteId;
    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation',
    this.quoteService.QuoteData.Id, 'download', des, Activity2 ).subscribe();
    this.toastr.success('success', 'Quotation copy is send to your registered email');
  }
}

copyQuotation(q: Quote) {
  this.OpenAddCustomerToQuoteDialog(q);
}
OpenAddCustomerToQuoteDialog(q: Quote) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '50%';
  dialogConfig.data = {};
  this.dialog.open(QuoteCustomerPopupComponent, dialogConfig).afterClosed().subscribe(res => {
    if (res !== '') {
      this.customerData = new Customer();
      this.customerData = res.x;
      this.localQuoteData = new Quote();

      this.OpenAddCustomerPropertyQuoteDialog(q);
      this.quoteService.getCustomerProperty(res.x.Id);
      this.quoteService.QuoteData.CustomerId = res.x.Id;    
      setTimeout(() => {
        this.invoiceService.refrestArrayofKeyslist(res.x.Id);
      }, 200);
    }
  });
}
OpenAddCustomerPropertyQuoteDialog(q: Quote) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '50%';
  dialogConfig.data = {};
  this.dialog.open(QuotecustomerPropertyPopupComponent, dialogConfig).afterClosed().subscribe(res => {
  this.quoteService.setDetaultQuoteData();
  this.quoteService.QuoteData.CustomerId = this.customerData.Id;
  this.quoteService.QuoteData.CompanyName = this.customerData.CompanyName; 
  if( this.invoiceService.ArrayofKeys.length > 0){
    this.quoteService.QuoteData.CustomerEmail = this.invoiceService.ArrayofKeys.filter(d=> d.IsDefault === true && d.Type === 'Email')[0].Value;
  this.quoteService.QuoteData.CustomerContactNo = this.invoiceService.ArrayofKeys.filter(d=> d.IsDefault === true && d.Type === 'Phone')[0].Value;
}
  this.quoteService.QuoteData.CustomerAddress = this.quoteService.PropertyList[0].AddressStreet1 + ' ' + this.quoteService.PropertyList[0].AddressStreet2 + ' ' + this.quoteService.PropertyList[0].AddressUnitNo + ' ' + this.quoteService.PropertyList[0].AddressCountry + ' ' + this.quoteService.PropertyList[0].AddressZipCode;
  this.quoteService.postTempQuote(this.currentUser.Token).subscribe( resq => {
    if (res) { const response = resq as any;
               if (response.Message === 'success') {
                this.quoteService.QuoteData = response.result as Quote;
                }
               if (response.Message === 'failure') {
                }
    }}, error =>  console.log(error));
  if (res !== '') {
        this.customerPropertyData = new Property();
        this.customerPropertyData = res.x;

        this.localQuoteData.CompanyName = this.customerData.CompanyName;
        this.localQuoteData.CustomerName = this.customerPropertyData.CustomerName;
        this.localQuoteData.CustomerId = this.customerPropertyData.CustomerId;
        this.localQuoteData.PropertyId = this.customerPropertyData.Id;
        this.localQuoteData.CustomerEmail = this.quoteService.QuoteData.CustomerEmail;
        this.localQuoteData.CustomerAddress = this.customerPropertyData.AddressStreet1 + ' ' + this.customerPropertyData.AddressStreet2 + ' ' + this.customerPropertyData.AddressUnitNo + ' ' + this.customerPropertyData.AddressCountry + ' ' + this.customerPropertyData.AddressZipCode;
        this.propertyService.formData = res.x;
       
        setTimeout(() => {
          this.quoteService.copyQuotation(this.quoteService.QuoteData.Id, q.Id)
          this.quoteService.QuoteData.CompanyName = this.localQuoteData.CompanyName;
          this.quoteService.QuoteData.CustomerName = this.localQuoteData.CustomerName;
          this.quoteService.QuoteData.CustomerId = this.localQuoteData.CustomerId;
          this.quoteService.QuoteData.PropertyId = this.localQuoteData.PropertyId;
          this.quoteService.QuoteData.CustomerAddress = this.localQuoteData.CustomerAddress;
          this.quoteService.QuoteData.CustomerEmail = this.localQuoteData.CustomerEmail;
          this.quoteService.QuoteData.JobTitle =q.JobTitle;
          this.quoteService.QuoteData.InternalNotes =q.InternalNotes;
          this.quoteService.QuoteData.ClientRemark =q.ClientRemark;
          this.quoteService.QuoteData.SubTotal =Number(q.SubTotal);
          this.quoteService.QuoteData.DiscountType =q.DiscountType;
          this.quoteService.QuoteData.DiscountTextValue = Number(q.DiscountTextValue);
          this.quoteService.QuoteData.DiscountAmount =Number(q.DiscountAmount);
          this.quoteService.QuoteData.TaxId =q.TaxId;
          this.quoteService.QuoteData.TaxRate =Number(q.TaxRate);
          this.quoteService.QuoteData.TaxAmount =Number(q.TaxAmount);
          this.quoteService.QuoteData.NetAmount =(Number(q.SubTotal) + Number(q.TaxAmount) - Number(q.DiscountAmount));
          this.quoteService.QuoteData.InternalNotes =q.InternalNotes;
          this.quoteService.QuoteData.ClientViewQty =q.ClientViewQty;
          this.quoteService.QuoteData.ClientViewUnitCost =q.ClientViewUnitCost;
          this.quoteService.QuoteData.ClientViewLineItemTotal =q.ClientViewLineItemTotal;
          this.quoteService.QuoteData.ClientViewTotal =q.ClientViewTotal;
          this.quoteService.QuoteData.LinkToJob =q.LinkToJob;
          this.quoteService.QuoteData.LinkToInvoice =q.LinkToInvoice;
          this.quoteService.QuoteData.Rating =q.Rating;
          this.quoteService.QuoteData.CCName =q.CCName;
          this.quoteService.QuoteData.CCContact =q.CCContact;
          this.quoteService.QuoteData.DID =q.DID;
          this.quoteService.QuoteData.FAX =q.FAX;
          this.quoteService.QuoteData.QuoteTermsAndCondition =q.QuoteTermsAndCondition;
          this.quoteService.QuoteData.SalesRepresentative =q.SalesRepresentative;
          this.quoteService.QuoteData.PreparedBy =q.PreparedBy;
          this.quoteService.QuoteData.Attention =q.Attention;

          this.router.navigate(['/quotes/quote-Add']);
        }, 1000);
    }
  });
}

downloadQuote(quoteId: string) {
  this.quoteService.downoadQuotationPDF(quoteId, this.currentUser.Token).subscribe( res => {
    if (res) { const response = res as any;
               if (response.Message === 'success') {
                this.toastr.success('success', response.MessageDescription);
                const a = $("<a>")
                  .attr("href", response.Path)
                  .attr("target", "_blank")
                  .attr("download", this.quoteService.QuoteData.QuoteId + '.pdf')
                  .appendTo("body");
                a[0].click();
                a.remove();
               }
               if (response.Message === 'failure') {
              this.toastr.warning('warning', response.MessageDescription);
              }
    }}, error =>  console.log(error));
}

SendQuoteByMail(i: Quote) {
  let emailText = this.emailIdToSendPDF;
  if (emailText === '') {
    this.isValidEmailIdToSendPDF = false;
    alert('Email can not be emplty.');
    return false;
  } else {
    let element: HTMLElement = document.getElementById('btnCLoseremail') as HTMLElement;
    element.click();
    this.isValidEmailIdToSendPDF=true;
    this.quoteService.sendForClientSign(this.quoteService.QuoteData.Id, emailText)
    .subscribe( res => {
      if (res) {
        this.toastr.success('success', 'Quotation link is send to client email for signature');
        const des = 'A Quotation send for signature , Quitation Id is  : '
      + i.QuoteId + ' for Customer : '
       + i.CustomerName + ' Quotation title " ' +
       i.JobTitle + ' Amount of $ ' + i.NetAmount + '0.00 on dated : ' + new Date();
      const Activity3 = 'An email request received against Quotation No : ' + this.quoteService.QuoteData.QuoteId +
      ' on mail id : ' + this.quoteService.QuoteData.CustomerEmail;
      this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation',
      this.quoteService.QuoteData.Id, 'Email', des, Activity3 ).subscribe();
      }
    }, error =>  console.log(error));
  }  
}


}
