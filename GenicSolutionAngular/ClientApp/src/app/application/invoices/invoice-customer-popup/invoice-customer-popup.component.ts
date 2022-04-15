import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../services/customer.model';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-invoice-customer-popup',
  templateUrl: './invoice-customer-popup.component.html',
  styleUrls: ['./invoice-customer-popup.component.css']
})
export class InvoiceCustomerPopupComponent implements OnInit {
  LocalList: Customer[];
  localPrependUrl: string;
  IsCustomerCreate = true;
  isValidTitle = true;
  isValidFirstname = true;
  isValidLastname = true;
  isValidCompanyname = true;
  currentUser: Login;
  isDone: boolean;
  constructor(
    public router: Router,
    public http: HttpClient,
    public dialog: MatDialog,
    private toastr: ToastrService,
    public loginservice: AuthenticationService,
    public dialogRef: MatDialogRef<InvoiceCustomerPopupComponent>,
    public customerservice: CustomerService,
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl; this.isDone = false;
  }

  ngOnInit() {
    this.LocalList = [];
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
  onClick(c: Customer) {
    if (c === undefined) {
      this.dialogRef.close();
    } else {
      this.dialogRef.close({ c });
      this.customerservice.formData = Object.assign({}, c);
    }
  }
  CreateNewClient() {
    this.dialogRef.close();
  }
  onkeypress(value: string) {
    this.LocalList = this.customerservice.CustomerList.filter(item =>
      item.CompanyName.toLowerCase().match(value.toLowerCase()) ||
      item.FirstName.toLowerCase().match(value.toLowerCase()) ||
      item.LastName.toLowerCase().match(value.toLowerCase()));
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
  onSubmit() {
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
    this.customerservice.AddNewCustomer(this.currentUser.Token)
      .subscribe(res => {
        const response = res as any;
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
  refreshcustomerlist() {
    this.customerservice.refrestCustomerList(this.currentUser.Token);
    setTimeout(() => {
      this.customerservice.CustomerLocalList = [];
      this.customerservice.CustomerLocalList = this.customerservice.CustomerList.filter(x => x.Status === true);
      this.LocalList = this.customerservice.CustomerLocalList;
    }, 1000);
  }
}
