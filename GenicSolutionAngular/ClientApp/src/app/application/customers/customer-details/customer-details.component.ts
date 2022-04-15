import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { PropertyService } from 'src/app/services/property.service';
import { TicketService } from 'src/app/services/ticket.service';
import { QuoteService } from 'src/app/services/quote.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Router } from '@angular/router';
import { Quote } from 'src/app/services/quote.module';
import { Invoice } from 'src/app/services/invoice.module';
import { Ticket } from 'src/app/services/ticket.module';
import { environment } from 'src/environments/environment';
import { Login, AuthenticationService } from 'src/app/services';
import Swal from 'sweetalert2';
import { UserlogService } from 'src/app/services/userlog.service';
import { Property } from 'src/app/services/property.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['../customer-add/customer-add.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  propertyCount: number;
  quotesCount: number;
  invoicesCount: number;
  ticketCount: number;
  currentUser: Login;
  TotalQuotes: number;
  TotalInvoiced: number;
  TotalTicket: number;
  TotalOpenTickets: number;
  TotalClosed: number;
  TotalOverDue: number;
  localPrependUrl: string;
  data: any;
  constructor(
    public titleService: Title,
    public service: CustomerService,
    public propertiesservice: PropertyService,
    public ticketservice: TicketService,
    public quotesservice: QuoteService,
    public invoiveservice: InvoiceService,
    private router: Router,
    public logService: UserlogService,
    public loginservice: AuthenticationService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl; 
    this.propertyCount = 0;
    this.quotesCount = 0;
    this.invoicesCount = 0;
    this.ticketCount = 0;
    this.TotalQuotes = 0;
    this.TotalInvoiced = 0;
    this.TotalTicket = 0;
    this.TotalOpenTickets = 0;
    this.TotalClosed = 0;
    this.TotalOverDue = 0;
    this.propertiesservice.Propertylist = [];
    this.quotesservice.QuoteList = [];
    this.invoiveservice.InvoiceList = [];
    this.ticketservice.Ticketlist = [];
  }

  ngOnInit() {
    if (!this.currentUser.Permissions.CustomerView) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Customer Details | Genic Solution');
    const Id = window.location.pathname.split('/').pop();
    this.service.getCustomerByIdSync(this.currentUser.Token, Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.service.formData = response.result;
                  this.propertiesservice.refrestPropertylistCustomerWise(this.currentUser.Token, this.service.formData.Id).subscribe( res => {
                    if (res) { const response = res as any;
                               if (response.Message === 'success') {
                                  this.propertiesservice.Propertylist = this.propertiesservice.locallist = response.result as Property[]
                                }
                  }}, error =>  console.log(error));
                  this.quotesservice.refrestQuoteListByCustomer(this.service.formData.Id);
                  this.invoiveservice.refrestInvoiceListByCustomer(this.service.formData.Id);
                  this.ticketservice.refrestTicketListByCustomer(this.service.formData.Id);
                  }
      }}, error =>  console.log(error));
    setTimeout(() => {
      this.propertyCount = this.propertiesservice.Propertylist.length;
      this.invoicesCount = this.invoiveservice.InvoiceList.length;
      this.quotesCount = this.quotesservice.QuoteList.length;
      this.ticketCount = this.ticketservice.Ticketlist.length;
      this.TotalQuotes =  this.quotesservice.QuoteList.filter(x => x.Status === 1).length;
      this.TotalInvoiced = this.invoicesCount;
      this.TotalTicket = this.ticketCount;
      this.TotalOpenTickets = this.ticketservice.Ticketlist.filter(x =>
        x.Status === 'UPCOMING' || x.Status === 'OVERDUE' || x.Status === 'INPROGRESS' || x.Status === 'HOLD').length;
      this.TotalClosed = this.ticketservice.Ticketlist.filter(x => x.Status === 'CLOSED').length;
      this.TotalOverDue =  this.ticketservice.Ticketlist.filter(x => x.Status === 'OVERDUE').length;
    }, 2000);
  }
  getQuoteDetails(q: Quote) {
    this.quotesservice.QuoteData = q;
    this.router.navigate(['/quotes/quote-Details']);
  }
  getInvoiceDetails(i: Invoice) {
    this.invoiveservice.InvoiceData = i;
    this.router.navigate(['/invoices/invoice-details']);
  }
  ViewTicketDetails(x: Ticket) {
    this.ticketservice.formData =  Object.assign({}, x);
    this.router.navigate(['/tickets/ticket-view-detail']);
  }
  viewQuoteDetails(x: Ticket) {
    this.quotesservice.getQuoteDetails(x.TicketConvertedID)
   .subscribe( res => {
     if (res) {
      let obj: any = new Object();
      obj = res;
      this.quotesservice.QuoteData = obj;
      this.quotesservice.getQuoteItems(this.currentUser.Token, x.TicketConvertedID).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                      this.quotesservice.QuoteItemList = response.result;
                    }
      }}, error =>  console.log(error));
      this.quotesservice.getQuoteAttachments(x.TicketConvertedID);
      setTimeout(() => {
       this.router.navigate(['/quotes/quote-Details']);
      }, 1000);
     }
   }, error =>  console.log(error)) ;
  }
 
  toggletab(x: string) {
    let demoClasses = null;
    demoClasses = document.querySelectorAll('.customer-details-dynamic-class-tab');
    demoClasses.forEach(element => {
      if (element.name === x) {
        element.setAttribute('data-ktwizard-state', 'current');
      } else {
        element.setAttribute('data-ktwizard-state', 'step-content');
      }
    });
    demoClasses = document.querySelectorAll('.customer-details-dynamic-class');
    demoClasses.forEach(element => {
      if (element.id === x) {
        element.setAttribute('data-ktwizard-state', 'current');
      } else {
        element.setAttribute('data-ktwizard-state', 'step-content');
      }
    });
  }
  resetpassword() {
    const tempname = this.service.formData.CompanyName;
    Swal.fire({
      title: 'keep it?',
      text: 'Are you sure you want to generate a password for ' + tempname + '?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      confirmButtonText: 'Cancel',
      cancelButtonColor: 'green',
      cancelButtonText: 'Continue',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Keep it!',
          text: 'Action is dismissed',
          type: 'info',
          timer: 2000
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.service.CustomerPasswordReset(this.service.formData.Id, this.currentUser.Token).subscribe( res => {
          let response = res as any;
          if (response.Message === 'success') {
            /// logs
            const des = 'An customer : ' + tempname + ', Customer Id : ' + this.service.formData.CustomerId +
               ', is password reset by user : ' + this.currentUser.UserName;
            const Activity = 'Password reset of '+ this.currentUser.Engineer.toLowerCase() +' : ' + tempname + ' is successfully ';
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Engineer,
            this.service.formData.Id, 'Modify', des, Activity).subscribe();
            /// logs
            Swal.fire({
              title: 'Done!',
              showConfirmButton: false,
              text: 'Password is generated successfully.',
              type: 'success',
              timer: 2000,
            });
            setTimeout(() => {
              Swal.fire({
                title: 'Done!',
                text: 'For ' + this.service.formData.CustomerId + ' new password is "' + response.MessageDescription + '"',
                type: 'success',
              });
            }, 2100);
          } else if (response.Message === 'failure') {
            Swal.fire({
              title: 'Done!',
              text: 'Your Token is expire, please try againg after login',
              type: 'warning',
              timer: 10000,
            });
          } else {
            Swal.fire({
              title: 'Error!',
              text: res.toString(),
              type: 'warning',
            });
          }
        }, error =>  console.log(error));
      }
    });
  }
}
