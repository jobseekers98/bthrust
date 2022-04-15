import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Invoice } from 'src/app/services/invoice.module';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { InvoiceChangeStatusPopupComponent } from '../invoice-change-status-popup/invoice-change-status-popup.component';
import { InvoicePaymentAndReceiptComponent } from '../invoice-payment-and-receipt/invoice-payment-and-receipt.component';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Property } from 'src/app/services/property.model';;
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
  ],

})
export class InvoiceDetailsComponent implements OnInit, AfterViewInit {
  localPropertyData: Property;
  currentUser: Login;
  IsShowInvStatus: string;
  IsShowPaymentSection: string;
  tempPaymentlist: any;
  iAmount: number;
  pAmount: number;
  localPrependUrl: string;
  public uploader: FileUploader = new FileUploader({});
  constructor(
    public titleService: Title,
    public invoiceService: InvoiceService,
    public productservice: ProductService,
    public toastr: ToastrService,
    public router: Router,
    public dialog: MatDialog,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
  }
  ngOnInit() {
    if (!this.currentUser.Permissions.InvoiceView) { this.router.navigate(['/dashboard']); this.toastr.info('Permission Not Granted') }
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    if (this.invoiceService.InvoiceData.InvoiceId === '' || this.invoiceService.InvoiceData.InvoiceId === undefined) {
      this.router.navigate(['/invoices/']);
    } else {
      this.invoiceService.getPaymentDetailsByInvoiceNo(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe(res => {
        if (res) {
          const response = res as any;
          if (response.Message === 'success') {
            this.invoiceService.TotalPaymentData = response.result;
          }
        }
      }, error => console.log(error));
      this.titleService.setTitle('Invoice Details | Genic Solution');
      this.iAmount = this.invoiceService.InvoiceData.NetAmount;
      this.pAmount = this.invoiceService.TotalPaymentData.PaymentAmount;
      if (this.iAmount > this.pAmount) {
        this.IsShowPaymentSection = 'true';
        this.invoiceService.PaymentData.PaymentAmount = this.iAmount - this.pAmount;
      } else {
        this.invoiceService.PaymentData.PaymentAmount = 0;
        setTimeout(() => {
          this.invoiceService.getPaymentSummary(this.invoiceService.InvoiceData.Id);
          this.tempPaymentlist = this.invoiceService.PaymentSummary;
          this.IsShowPaymentSection = 'false';
        }, 100);
      }
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.getInvoiceItems();
      this.getInvoiceAttachments();
      this.invoiceService.refrestArrayofKeyslist(this.invoiceService.InvoiceData.CustomerId);
    }, 200);
  }
  getInvoiceItems() {
    this.invoiceService.getInvoiceItems(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          this.invoiceService.InvoiceItemList = [];
          this.invoiceService.InvoiceItemList = response.result;
        }
      }
    }, error => console.log(error));
  }
  getInvoiceAttachments() {
    this.invoiceService.getInvoiceAttachments(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          this.invoiceService.InvoiceAttachmentList = response.result;
        }
      }
    }, error => console.log(error));
  }
  RemoveInvoiceAttachement(InvoiceAttamentId: number, Attachment: string) {
    if (confirm('Are you sure to delete this attachment?')) {
      this.invoiceService.deleteInvoiceAttachment(InvoiceAttamentId).then(
        res => {
          if (res.status === 204) {
            this.getInvoiceAttachments();

            const des = 'An attachment : ' + Attachment + ',has been Removed from the Invoice No : ' +
              this.invoiceService.InvoiceData.InvoiceId + ', of Customer : ' + this.invoiceService.InvoiceData.CustomerName +
              ', by user : ' + this.currentUser.UserName;
            const Activity1 = 'An attachment : ' + Attachment + ', is removed from the Invoice no : '
              + this.invoiceService.InvoiceData.InvoiceId;
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice',
              this.invoiceService.InvoiceData.Id, 'Removed', des, Activity1).subscribe();

            this.toastr.info('info', 'Deleted successfully');
          } else if (res.status === 404) {
            this.toastr.warning('Warning', 'Record Not Found');
          } else {
            this.toastr.error('Error', res.statusText);
          }
        },
        err => {
          this.toastr.error('Error', err.statusText);
          console.log(err.error);
        });
    }
  }
  popolateInvoice(i: Invoice) {
    this.invoiceService.InvoiceData = Object.assign({}, i);
    this.router.navigate(['/invoices/invoice-edit']);
  }

  CollapseInvStatus() {
    if (this.IsShowInvStatus === 'true') {
      this.IsShowInvStatus = 'false';
    } else {
      this.IsShowInvStatus = 'true';
    }
  }
  UpdateInvoiceStatus(i: Invoice) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    dialogConfig.data = {};
    this.dialog.open(InvoiceChangeStatusPopupComponent, dialogConfig).afterClosed().subscribe(res => {
    });
  }
  getInvoicePayment(i: Invoice) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.data = {};
    this.dialog.open(InvoicePaymentAndReceiptComponent, dialogConfig).afterClosed().subscribe(res => {
    });
  }
  downloadInvoice(id: string) {
    this.invoiceService.downoadInvoicePDF(id, this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success('success', response.MessageDescription);
                  const a = $("<a>")
                    .attr("href", response.Path)
                    .attr("target", "_blank")
                    .attr("download", this.invoiceService.InvoiceData.InvoiceId + '.pdf')
                    .appendTo("body");
                  a[0].click();
                  a.remove();
                 }
                 if (response.Message === 'failure') {
                this.toastr.warning('warning', response.MessageDescription);
                }
      }}, error =>  console.log(error));
  }
  SendInvoiceByMail(i: Invoice) {
      const des = 'An email requrest sent by : ' + this.currentUser.UserName + ', of Invoice No : '
        + i.InvoiceId + ', for Customer : '
        + i.CustomerName + ', invoice title " ' +
        i.InvoiceTitle + ', Amount of $ ' + i.NetAmount + '0.00, on dated : ' + new Date();
      const Activity3 = ' Invoice no : ' + this.invoiceService.InvoiceData.InvoiceId + ' is emailed on :' +
        this.invoiceService.InvoiceData.CustomerEmail + ' dated : ' + new Date();
      this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice',
        i.Id, 'Email', des, Activity3).subscribe();

      this.invoiceService.emailInvoiceCopy(this.invoiceService.InvoiceData.Id);
      this.toastr.success('success', 'Invoice copy is send to client ' + this.invoiceService.InvoiceData.CustomerEmail + ' registered email');
  }
}
