import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from '../../../services/customer.service';
import { CustomerContactPerson, Customer } from '../../../services/customer.model';
import { QuoteService } from '../../../services/quote.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService, Login } from '../../../services';

@Component({
  selector: 'app-quote-contact-person-popup',
  templateUrl: './quote-contact-person-popup.component.html',
  styleUrls: ['./quote-contact-person-popup.component.css']
})
export class QuoteContactPersonPopupComponent implements OnInit {
  LocalList: CustomerContactPerson[];
  isValidTitle = true;
  isValidFirstname = true;
  isValidLastname = true;
  IsContactPersonCreate = true;
  currentUser: Login;
  constructor(
    public dialogRef: MatDialogRef<QuoteContactPersonPopupComponent>,
    public loginservice: AuthenticationService,
    public customerservice: CustomerService,
    public quoteService: QuoteService,
    private toastr: ToastrService
  ) { this.loginservice.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit() {
    setTimeout(() => {
      this.LocalList = this.customerservice.formData.CustomerContactPerson;
      this.customerservice.CustomerContactPersonData.CustomerId = this.customerservice.formData.Id;
    }, 500);
  }
  onClick(c: CustomerContactPerson) {
    if (c === null) {
      this.dialogRef.close();
    } else {
      this.quoteService.QuoteData.CustomerName = c.NameTitle + ' ' + c.FirstName + ' ' + c.LastName;
      this.quoteService.QuoteData.CustomerEmail = c.Email;
      this.quoteService.QuoteData.CustomerContactNo = c.Phone;
      this.quoteService.QuoteData.CompanyName = this.customerservice.formData.CompanyName;
      this.quoteService.QuoteData.CustomerId = this.customerservice.formData.Id;
      this.quoteService.QuoteData.Attention = '';
      }
      //  let x = this.customerservice.formData;
    setTimeout(() => {
      this.dialogRef.close();
    }, 100);
  }
  redirect(c: Customer) {
    this.customerservice.formData = Object.assign({}, c);
    // setTimeout(() => {
    //   this.router.navigate(['/customers/customer-edit/']);
    // }, 100);
    this.IsContactPersonCreate = false;
  }
  onBack() {
    this.IsContactPersonCreate = true;
  }
  onSubmit() {
    if (this.customerservice.CustomerContactPersonData.NameTitle === '' ||
     this.customerservice.CustomerContactPersonData.NameTitle === undefined) {
      this.isValidTitle = false;
      this.toastr.warning('', 'Title is required!');
      return false;
    }
    if (this.customerservice.CustomerContactPersonData.FirstName === '' ||
     this.customerservice.CustomerContactPersonData.FirstName === undefined) {
      this.isValidFirstname = false;
      this.toastr.warning('', 'First Name is required!');
      return false;
    }
    if (this.customerservice.CustomerContactPersonData.LastName === '' ||
    this.customerservice.CustomerContactPersonData.LastName === undefined) {
      this.isValidLastname = false;
      this.toastr.warning('', 'Last Name is required!');
      return false;
    }
    this.customerservice.AddNewContactPerson(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success('success', response.MessageDescription);
                  this.customerservice.formData.CustomerContactPerson = response.result;
                  this.LocalList = response.result;
                  this.IsContactPersonCreate = true;
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  onkeypress(value: string) {
    this.LocalList = this.customerservice.formData.CustomerContactPerson.filter(item =>
      item.Phone.toLowerCase().match(value.toLowerCase()) ||
      item.Email.toLowerCase().match(value.toLowerCase()) ||
      item.FirstName.toLowerCase().match(value.toLowerCase()) ||
      item.LastName.toLowerCase().match(value.toLowerCase()));
  }
}
