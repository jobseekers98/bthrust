import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-invoice-change-status-popup',
  templateUrl: './invoice-change-status-popup.component.html',
  styleUrls: ['./invoice-change-status-popup.component.css']
})
export class InvoiceChangeStatusPopupComponent implements OnInit {
  currentUser: Login;
  tempPaymentlist: any;
  IsShowInvStatus: string;
  IsShowPaymentSection: string;
  constructor(
    public router: Router,
    public rout: ActivatedRoute,
    public http: HttpClient,
    public invoiceService: InvoiceService,
    public toastr: ToastrService,
    public dialogRef: MatDialogRef<InvoiceChangeStatusPopupComponent>,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
  ) { }

  ngOnInit() {
    this.invoiceService.getPaymentSummary(this.invoiceService.InvoiceData.Id);
    this.tempPaymentlist = this.invoiceService.PaymentSummary;
    this.IsShowPaymentSection = 'false';
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.IsShowInvStatus = 'true';
  }
  byInvoiceStatusChange(Id: string, Status: string) {
    this.invoiceService.UpdateInvoiceStatus(Id, Status).subscribe( res => {
      if (res) { const response = res as any;
        if (response.Message === 'success') {
          this.invoiceService.InvoiceData.Status = Status;
          this.toastr.success('success', response.MessageDescription);
          const des = 'Status of Invoice No : ' + this.invoiceService.InvoiceData.InvoiceId +
            ' has been changed as :' + Status + ', of Customer : ' + this.invoiceService.InvoiceData.CustomerName +
            ', by user : ' + this.currentUser.UserName + ', on dated : ' + new Date();
          const Activity = 'Invoice Status changed as : ' + Status + ', against Invoice no : '
            + this.invoiceService.InvoiceData.InvoiceId;
          this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice',
            this.invoiceService.InvoiceData.Id, 'Modify', des, Activity).subscribe();
          this.dialogRef.close();
         }
        if (response.Message === 'failure') {
           this.toastr.warning('warning', response.MessageDescription);
         }
      }}, error =>  console.log(error));
  }
  CollapseInvStatus() {
    if (this.IsShowInvStatus === 'true') {
      this.IsShowInvStatus = 'false';
    } else {
      this.IsShowInvStatus = 'true';
    }
  }
}
