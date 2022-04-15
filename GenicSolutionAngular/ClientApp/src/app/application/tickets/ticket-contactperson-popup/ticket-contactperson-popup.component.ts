import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Customer, CustomerContactPerson } from 'src/app/services/customer.model';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ticket-contactperson-popup',
  templateUrl: './ticket-contactperson-popup.component.html',
  styleUrls: ['./ticket-contactperson-popup.component.css']
})
export class TicketContactpersonPopupComponent implements OnInit {
  LocalList: CustomerContactPerson[];
  localPrependUrl: string;
  isValidTitle = true;
  isValidFirstname = true;
  isValidLastname = true;
  IsContactPersonCreate = true;
  currentUser: Login;
  constructor(
    public dialogRef: MatDialogRef<TicketContactpersonPopupComponent>,
    public customerservice: CustomerService,
    public ticketservice: TicketService,
    public loginservice: AuthenticationService,
    private toastr: ToastrService
  ) { this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.IsContactPersonCreate = true;
    setTimeout(() => {
      this.LocalList = this.customerservice.formData.CustomerContactPerson;
      this.customerservice.CustomerContactPersonData.CustomerId = this.customerservice.formData.Id;
    }, 500);
  }
  onClick(c: CustomerContactPerson) {
    if (c === null) {
      this.dialogRef.close();
    } else {
      this.ticketservice.formData.CustomerName = c.NameTitle + ' ' + c.FirstName + ' ' + c.LastName;
      this.ticketservice.formData.CustomerEmail = c.Email;
      this.ticketservice.formData.CustomerContactNo = c.Phone;
      this.ticketservice.formData.CustomerCompanyName = this.customerservice.formData.CompanyName;
      this.ticketservice.formData.CustomerId = this.customerservice.formData.Id;
      }
    setTimeout(() => {
      this.dialogRef.close();
    }, 100);
  }
  redirect(c: Customer) {
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
