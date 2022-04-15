import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['../service.component.css']
})
export class ServiceAddComponent implements OnInit {
  currentUser: Login;
  createbuttontext: string;
  isValid = true;
  customwarrantyShow: boolean;
  customwarrantyShowEdit: boolean;
  constructor(
    public titleService: Title,
    public productservice: ProductService,
    private toastr: ToastrService,
    private router: Router,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public dialogRef: MatDialogRef<ServiceAddComponent> ) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit() {
    this.customwarrantyShowEdit = false;
    if (this.productservice.serviceformData.Id === '00000000-0000-0000-0000-000000000000') {
      if (!this.currentUser.Permissions.ServiceCreate) { this.router.navigate(['/dashboard']); }
      this.titleService.setTitle('Service Create | Genic Solution');
      this.createbuttontext = 'Create';
    } else {
      if (!this.currentUser.Permissions.ServiceEdit) { this.router.navigate(['/dashboard']); }
      this.titleService.setTitle('Service Edit | Genic Solution');
      this.createbuttontext = 'Update';
    }
    setTimeout(() => {
      if(!this.currentUser.Permissions.ProductWarranty){
        this.productservice.serviceformData.InWarranty = false;
        this.productservice.serviceformData.WarrantyDays = 0;
      } else { this.productservice.serviceformData.InWarranty = true; }
      this.customwarrantyShowMethor();
    }, 1000);
  }
  public customwarrantyShowMethor() {
    if (this.productservice.serviceformData.WarrantyDays === undefined) {
      this.customwarrantyShow = false;
    } else {
    switch (this.productservice.serviceformData.WarrantyDays.toString()) {
      case '90':
      case '180':
      case '270':
      case '365': this.customwarrantyShow = true; break;
      default: this.customwarrantyShow = false; break;
    }
  }
}
  onSubmit() {
    if (this.validateForm()) {
      if (this.productservice.serviceformData.Id === '00000000-0000-0000-0000-000000000000') {
        this.productservice.postServiceDetails(this.currentUser.Token).subscribe( res => {
          if (res) { const response = res as any;
               if (response.Message === 'success') {
                  this.toastr.success('success', response.MessageDescription);
                  const des = 'A Service : ' + this.productservice.serviceformData.ServiceName + ', has been added ' +
                  ', and Service Description : ' + this.productservice.serviceformData.ServiceDescription + ', by user : ' + this.currentUser.UserName;
                  const Activity = 'A Service : ' + this.productservice.serviceformData.ServiceName + ', has been added.';
                  this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Services',
                  this.productservice.serviceformData.Id, 'Added', des, Activity ).subscribe();
                  this.dialogRef.close();
                }
               if (response.Message === 'failure') {
                this.toastr.warning('warning', response.MessageDescription);
                }
        }}, error =>  console.log(error));
      } else {
        this.productservice.putServiceDetails(this.currentUser.Token).subscribe( res => {
          if (res) { const response = res as any;
               if (response.Message === 'success') {
                const des = 'A Service : ' + this.productservice.serviceformData.ServiceName + ', has been modified ' +
                ', and Service Description : ' + this.productservice.serviceformData.ServiceDescription + ', by user : ' + this.currentUser.UserName;
                const Activity1 = 'A Service : ' + this.productservice.serviceformData.ServiceName + ', has been updated.';
                this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Services',
                this.productservice.serviceformData.Id, 'Modify', des, Activity1 ).subscribe();
                this.dialogRef.close();
                }
               if (response.Message === 'failure') {
                this.toastr.warning('warning', response.MessageDescription);
                }
        }}, error =>  console.log(error));
      }
    }
  }
  enablewarrantchange() {
    if (this.customwarrantyShowEdit) { this.customwarrantyShowEdit = false; } else { this.customwarrantyShowEdit = true; }
  }
  validateForm() {
    this.isValid = true;
    if (this.productservice.serviceformData.ServiceName === '') {
      this.isValid = false;
    }
    this.productservice.serviceformData.WarrantyDays = Number(this.productservice.serviceformData.WarrantyDays);
    if (this.productservice.serviceformData.InWarranty) {
      if (this.productservice.serviceformData.WarrantyDays === null || 
          this.productservice.serviceformData.WarrantyDays === undefined || 
          this.productservice.serviceformData.WarrantyDays === 0){
         this.toastr.warning('warning', 'warranty not valid');
         this.isValid = false;
      }
    }
    return this.isValid;
  }
  numberOnly(event): boolean {
    if (Number(event.target.value) === 0) {
      event.target.value = null;
    }
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      if (charCode === 46) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
