import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-invoice-payment-and-receipt',
  templateUrl: './invoice-payment-and-receipt.component.html',
  styles: []
})
export class InvoicePaymentAndReceiptComponent implements OnInit {
  currentUser: Login;
  IsShowInvStatus: string;
  IsShowPaymentSection: string;
  tempPaymentlist: any;
  iAmount: number;
  pAmount: number;
  constructor(
    public invoiceService: InvoiceService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<InvoicePaymentAndReceiptComponent>,
    public toastr: ToastrService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
  ) { this.loginservice.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit() {
    
    this.invoiceService.getPaymentModeDetails(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                   console.log(response.result);
                  this.invoiceService.PaymentModeList = response.result;
                  }
    }}, error =>  console.log(error));
    this.invoiceService.getPaymentDetailsByInvoiceNo(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.invoiceService.TotalPaymentData = response.result;
                  }
    }}, error =>  console.log(error));
    this.iAmount = this.invoiceService.InvoiceData.NetAmount;
    this.pAmount = this.invoiceService.TotalPaymentData.PaymentAmount;
    if (this.iAmount > this.pAmount) {
      this.IsShowPaymentSection = 'true';
      this.invoiceService.PaymentData.PaymentAmount = this.iAmount - this.pAmount;
    } else {
      this.invoiceService.PaymentData.PaymentAmount = 0;

      this.invoiceService.getPaymentSummary(this.invoiceService.InvoiceData.Id).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.tempPaymentlist = response.result;
                    this.IsShowPaymentSection = 'false';
                    }
      }}, error =>  console.log(error));
    }
  }
  setClearPaymentData() {
    this.invoiceService.PaymentData.PaymentAmount = 0;
    this.invoiceService.PaymentData.PaymentMethod = '';
    this.invoiceService.PaymentData.PaymentNote = '';
    this.invoiceService.PaymentData.TransactionId = '';
    this.invoiceService.PaymentData.PModeId = 0;
    this.invoiceService.PaymentData.PaymentDate = null;
  }
  onPaymentSubmit() {
    if (this.invoiceService.PaymentData.PaymentAmount > this.invoiceService.InvoiceData.NetAmount) {
      this.toastr.warning('warning', 'Invalid amount.');
    } else {
    this.invoiceService.PaymentData.InvoiceId = this.invoiceService.InvoiceData.Id;
    this.invoiceService.PaymentData.InvoiceNo = this.invoiceService.InvoiceData.InvoiceId;
    if (this.invoiceService.PaymentData.PModeId === 0) {
      this.toastr.warning('warning', 'Select Payment mode');
    } else if (this.invoiceService.PaymentData.PaymentAmount === 0) {
      this.toastr.warning('warning', 'Invalid Amount');
    } else if (this.invoiceService.PaymentData.PaymentDate === null || this.invoiceService.PaymentData.PaymentDate === undefined) {
      this.toastr.warning('warning', 'Invalid payment date');
    } else {
    this.invoiceService.PaymentData.PaymentDate = new Date(Date.parse(Date()));
    this.invoiceService.PaymentData.PModeId = Number(this.invoiceService.PaymentData.PModeId);
	  this.invoiceService.postPayment(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  const des = 'Amount of : $ ' +
                  this.invoiceService.PaymentData.PaymentAmount + '0.00, received against Invoice No : '
                  + this.invoiceService.InvoiceData.InvoiceId +
                  ', from Customer : ' + this.invoiceService.InvoiceData.CustomerName +
                    ', by user : ' + this.currentUser.UserName + ', on dated : ' + new Date();
                  const Activity =  ' Payment of : $ ' + this.invoiceService.PaymentData.PaymentAmount +
                  'received against invoice no : ' + this.invoiceService.InvoiceData.InvoiceId ;
                  this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Payment', 'Added',
                  this.invoiceService.InvoiceData.Id , des, Activity ).subscribe();
        
                  this.invoiceService.PaymentData = {
                    Id: '00000000-0000-0000-0000-000000000000',
                    InvoiceId: '00000000-0000-0000-0000-000000000000',
                    InvoiceNo: '',
                    PaymentAmount: 0,
                    BalanceAmount: 0,
                    PaymentDate: new Date(),
                    PModeId: 0,
                    PaymentMethod: '',
                    TransactionId: '',
                    PaymentNote: '',
                    CreatedDate: new Date(),
                    UpdatedDate: new Date(),
                    Status: '',
                    SendOutStatus: '',
                    PaymentModeList: []
                  };
                  this.IsShowPaymentSection = 'false';
                  this.invoiceService.getPaymentDetailsByInvoiceNo(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe( res => {
                    if (res) { const response = res as any;
                               if (response.Message === 'success') {
                                this.invoiceService.TotalPaymentData = response.result;
                                }
                  }}, error =>  console.log(error));
                  this.invoiceService.getPaymentSummary(this.invoiceService.InvoiceData.Id);
                  this.dialogRef.close();
                  }
                  if (response.Message === 'failure') {
                    this.toastr.warning(response.MessageDescription);
                  }
    }}, error =>  console.log(error));
    }
  }
  }
  EmailReciptPDF() {
    if (confirm('Are you sure want to send payment slip on email.')) {
      this.invoiceService.emailPaymentReceipt(this.invoiceService.InvoiceData.Id);
      this.toastr.success('success', 'Payment receipt send to your registered email');
    }
  }
}
