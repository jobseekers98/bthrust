import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/app/services/customer.model';
import { environment } from 'src/environments/environment';
import { Login, AuthenticationService } from 'src/app/services';
import { PropertyService } from 'src/app/services/property.service';


@Component({
  selector: 'app-property-popup',
  templateUrl: './property-popup.component.html',
  styleUrls: ['../property-list/property-list.component.css']
})
export class PropertyPopupComponent implements OnInit {
  LocalList: Customer[];
  localPrependUrl: string;
  currentUser: Login;
  constructor(
    public loginservice: AuthenticationService,
    public dialogRef: MatDialogRef<PropertyPopupComponent>,
    public propertyservice: PropertyService,
    public service: CustomerService) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
     }

  ngOnInit() {
    this.LocalList = [];
    this.service.CustomerList = [];
    this.service.getCustomerListSync(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.service.CustomerList = response.result as Customer[];
                  setTimeout(() => {
                    this.LocalList = this.service.CustomerList.filter(x => x.Status === true);
                  }, 200);
                  }
      }}, error =>  console.log(error));
  }

  onClick(id?: string, name?: string, companyName?: string) {
    this.propertyservice.SetAsDefaultValue();
    setTimeout(() => {
      if (id === undefined) {
        this.dialogRef.close();
      } else {
        this.dialogRef.close({id, name, companyName});
      }
      }, 200);
  }
  onkeypress(value: string) {
    this.LocalList = this.service.CustomerList.filter(item =>
      item.CompanyName.toLowerCase().match(value.toLowerCase()) ||
      item.FirstName.toLowerCase().match(value.toLowerCase()) ||
      item.LastName.toLowerCase().match(value.toLowerCase()));
  }
}
