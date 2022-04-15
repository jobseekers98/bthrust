import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/services/customer.model';
import { environment } from 'src/environments/environment';
import { TicketService } from 'src/app/services/ticket.service';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-ticket-customer-popup',
  templateUrl: './ticket-customer-popup.component.html',
  styleUrls: ['./ticket-customer-popup.component.css']
})
export class TicketCustomerPopupComponent implements OnInit {
  LocalList: Customer[];
  localPrependUrl: string;
  IsCustomerCreate = true;
  isValidTitle = true;
  isValidFirstname = true;
  isValidLastname = true;
  isValidCompanyname = true;
  isValidEmailAddress = true;
  isValidPhoneNumber = true;
  currentUser: Login;
  isDone: boolean;
  constructor(
    public dialogRef: MatDialogRef<TicketCustomerPopupComponent>,
    public customerservice: CustomerService,
    public ticketservice: TicketService,
    private toastr: ToastrService,
    public loginservice: AuthenticationService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl; this.isDone = false; }

  ngOnInit() {
    this.IsCustomerCreate = true;
    this.refreshcustomerlist();
  }
  refreshcustomerlist() {
    this.customerservice.getCustomerListSync(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.customerservice.CustomerList = response.result as Customer[];
                  setTimeout(() => {
                    this.customerservice.CustomerLocalList = [];
                    this.customerservice.CustomerLocalList = this.customerservice.CustomerList.filter(x => x.Status === true);
                    this.LocalList = this.customerservice.CustomerLocalList;
                  }, 200);
                  }
      }}, error =>  console.log(error));
  }
  onClick(x: Customer) {
    if (x === null) {
      this.dialogRef.close();
    } else {
      this.customerservice.formData = Object.assign({}, x);
      }
    setTimeout(() => {
        this.dialogRef.close({ x });
      }, 100);
  }
  redirect() {
    this.customerservice.formData.NameTitle = '';
    this.customerservice.formData.FirstName = '';
    this.customerservice.formData.LastName = '';
    this.customerservice.formData.CompanyName = '';
    this.customerservice.formData.UseCompanyNameAsPrimaryName = true;
    this.customerservice.formData.AddressStreet1 = '';
    this.customerservice.formData.AddressStreet2 = '';
    this.IsCustomerCreate = false;
  }
  onBack() {
    this.IsCustomerCreate = true;
  }
  onSubmit() {
    this.isValidTitle = true;
    this.isValidFirstname = true;
    this.isValidLastname = true;
    this.isValidCompanyname = true;
    this.isValidEmailAddress = true;
    this.isValidPhoneNumber = true;
    if (this.customerservice.formData.NameTitle === '' || this.customerservice.formData.NameTitle === undefined) {
      this.isValidTitle = false;
      this.toastr.warning('', 'Title is required!');
      return false;
    }
    if (this.customerservice.formData.FirstName === '' || this.customerservice.formData.FirstName === undefined) {
      this.isValidFirstname = false;
      this.toastr.warning('', 'First Name is required!');
      return false;
    }
    if (this.customerservice.formData.LastName === '' || this.customerservice.formData.LastName === undefined) {
      this.isValidLastname = false;
      this.toastr.warning('', 'Last Name is required!');
      return false;
    }
    if (this.customerservice.formData.CompanyName === '' || this.customerservice.formData.CompanyName === undefined) {
      this.isValidCompanyname = false;
      this.toastr.warning('', 'Company Name is required!');
      return false;
    }
    if (this.customerservice.formData.AddressStreet1 === '' || this.customerservice.formData.AddressStreet1 === undefined) {
      this.isValidEmailAddress = false;
      this.toastr.warning('', 'Email Address is required!');
      return false;
    }
    if (this.customerservice.formData.AddressStreet2 === '' || this.customerservice.formData.AddressStreet2 === undefined) {
      this.isValidPhoneNumber = false;
      this.toastr.warning('', 'Phone Number is required!');
      return false;
    }
    this.isDone = true;
    this.customerservice.AddNewCustomer(this.currentUser.Token)
    .subscribe( res => { const response = res as any;
                         if (response.Message === 'success') {
                            this.toastr.success('success',
                                'User ' +
                                this.customerservice.formData.NameTitle + ' ' +
                                this.customerservice.formData.FirstName + ' ' +
                                this.customerservice.formData.LastName +
                                ' is added Successfully!');
                            this.customerservice.formData = res;
                            this.isDone = false;
                            this.refreshcustomerlist();
                            this.IsCustomerCreate = true;
                              }
                         if (response.Message === 'failure') {
                            this.toastr.warning('warning', response.MessageDescription);
                            this.isDone = false;
                          }
    }, error => console.log(error));
  }
  onkeypress(value: string) {
    this.LocalList = this.customerservice.CustomerLocalList.filter(item =>
      (item.CompanyName.toLowerCase().match(value.toLowerCase()) ||
      item.FirstName.toLowerCase().match(value.toLowerCase()) ||
      item.LastName.toLowerCase().match(value.toLowerCase())));
  }
}
