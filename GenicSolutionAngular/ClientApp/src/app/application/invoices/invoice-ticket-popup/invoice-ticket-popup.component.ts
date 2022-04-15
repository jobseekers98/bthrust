import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Ticket } from 'src/app/services/ticket.module';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from 'src/app/services/customer.service';
import { PropertyService } from 'src/app/services/property.service';
import { InvoicePlaneInvoiceCustomerPropertyPopupComponent } from '../invoice-plane-invoice-customer-property-popup/invoice-plane-invoice-customer-property-popup.component';
import { Quote } from 'src/app/services/quote.module';
import { Property } from 'src/app/services/property.model';
import { AuthenticationService, Login } from 'src/app/services';

@Component({
  selector: 'app-invoice-ticket-popup',
  templateUrl: './invoice-ticket-popup.component.html',
  styleUrls: ['./invoice-ticket-popup.component.css']
})
export class InvoiceTicketPopupComponent implements OnInit {
  LocalQuoteList: Quote[];
  LocalTicketList: Ticket[];
  currentUser: Login;
  PropertyAdrresssVisible = false;
  constructor(
    public router: Router,
    public rout: ActivatedRoute,
    public http: HttpClient,
    public dialog: MatDialog,
    public loginservice: AuthenticationService,
    public dialogRef: MatDialogRef<InvoiceTicketPopupComponent>,
    public invoiceService: InvoiceService,
    public customerService: CustomerService,
    public propertyservice: PropertyService,
  ) {  this.loginservice.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit() {
      this.invoiceService.getInvoiceTicketList(this.customerService.formData.Id, this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.LocalTicketList = [];
                    this.LocalTicketList = this.invoiceService.InvoiceTicketList = response.result;
                    }
      }}, error =>  console.log(error));
      this.invoiceService.getInvoiceQuoteList(this.customerService.formData.Id, this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.LocalQuoteList = [];
                    this.LocalQuoteList = this.invoiceService.QuoteList = response.result;
                    }
      }}, error =>  console.log(error));
  }
  onTicketClick(x: Ticket) {
    if (x === undefined) {
        this.dialogRef.close();
    } else {
        this.dialogRef.close({ x });
    }
}
onQuoteClick(q: Quote) {
  if (q === undefined) {
      this.dialogRef.close();
  } else {
      this.dialogRef.close({ q });
  }
}
OpenAddClienPropertyForPlaneInvoiceDialog() {
  this.invoiceService.postTempInvoice(this.currentUser.Token).subscribe( res => {
    if (res) { const response = res as any;
               if (response.Message === 'success') {
                this.invoiceService.InvoiceData = response.result;
                this.dialogRef.close();
                }
  }}, error =>  console.log(error));
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '50%';
  dialogConfig.data = {};
  this.dialog.open(InvoicePlaneInvoiceCustomerPropertyPopupComponent, dialogConfig).afterClosed().subscribe(res => {
    if (res !== '') {
      if (res === undefined) {
        this.router.navigate(['/properties/property-add/'], { queryParams:
          { ' id': this.invoiceService.InvoiceData.CustomerId, ' name': this.invoiceService.InvoiceData.CustomerName }
        });
      } else {
        this.PropertyAdrresssVisible = true;
        this.invoiceService.InvoiceData.CustomerName = this.customerService.formData.NameTitle + ' ' +
                                                        this.customerService.formData.FirstName + ' ' +
                                                        this.customerService.formData.LastName;
        this.invoiceService.InvoiceData.CustomerId = res.a.CustomerId;
        this.invoiceService.InvoiceData.PropertyId = res.a.Id;
        // this.invoiceService.InvoiceData.CustomerAddress = res.a.Id;
        // this.invoiceService.InvoiceData.CustomerEmail = res.a.Id;
        // this.invoiceService.InvoiceData.CustomerContactNo = res.a.Id;
        this.propertyservice.formData = new Property();
        this.propertyservice.formData = Object.assign({}, res.a);
      }
    }
  });
 }

 onQuoteKeypress(value: string) {
  this.LocalQuoteList = this.invoiceService.QuoteList.filter(item =>
    item.JobTitle.toLowerCase().match(value.toLowerCase()) ||
    item.CompanyName.toLowerCase().match(value.toLowerCase()) ||
    item.CustomerName.toLowerCase().match(value.toLowerCase()) ||
    item.CustomerEmail.toLowerCase().match(value.toLowerCase()) ||
    item.CustomerContactNo.toLowerCase().match(value.toLowerCase()) ||
    item.QuoteId.toLowerCase().match(value.toLowerCase()));
 }
 onTicketKeypress(value: string) {
  this.LocalTicketList = this.invoiceService.InvoiceTicketList.filter(item =>
    item.Title.toLowerCase().match(value.toLowerCase()) ||
    item.CustomerName.toLowerCase().match(value.toLowerCase()) ||
    item.CustomerEmail.toLowerCase().match(value.toLowerCase()) ||
    item.CustomerAddress.toLowerCase().match(value.toLowerCase()));
 }
}
