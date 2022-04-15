import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { Login, AuthenticationService } from 'src/app/services';
import { Customer } from 'src/app/services/customer.model';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { Property } from 'src/app/services/property.model';
import { PropertyService } from 'src/app/services/property.service';
import { Quote } from 'src/app/services/quote.module';
import { QuoteService } from 'src/app/services/quote.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserlogService } from 'src/app/services/userlog.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './customer-quote-details.component.html',
  styleUrls: ['./customer-quote-details.component.css'],
})
export class CustomerQuoteDetailsComponent implements OnInit, AfterViewInit {
  public uploader: FileUploader = new FileUploader({});
  currentUser: Login;
  localPrependUrl: string;
  localQuoteData: Quote;
  customerData: Customer;
  customerPropertyData: Property;
  emailIdToSendPDF: string;
  isValidEmailIdToSendPDF: boolean = true;
  @ViewChild('pdfDownlad', {static:false}) pdfDownlad;
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
    public propertyService: PropertyService
  ) {
    this.localPrependUrl = environment.apiUrl;
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.emailIdToSendPDF = '';
   }

  ngOnInit() {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
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
}
