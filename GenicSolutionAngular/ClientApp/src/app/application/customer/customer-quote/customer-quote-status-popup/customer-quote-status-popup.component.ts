import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserlogService } from 'src/app/services/userlog.service';
import { QuoteService } from 'src/app/services/quote.service';
import Swal from 'sweetalert2';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-quote-status-popup',
  templateUrl: 'customer-quote-status-popup.component.html',
  styles: []
})
export class CustomerQuoteStatusPopupComponent implements OnInit {
  @ViewChild('SignaturePad2', { static: false }) CustomerSingnaturePad: SignaturePad;
  CustomerSignaturePadOption = {
    ' minWidth': 2, pecColor: 'rgb(66,133,244)', backgroundcolor: 'rgb(255,255,255)', canvasWidth: 500, canvasHeight: 200 };
  currentUser: Login;
  temptQuoteStatus = 0;
  constructor(
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public quoteService: QuoteService,
    public dialogRef: MatDialogRef<CustomerQuoteStatusPopupComponent>
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.temptQuoteStatus = Number(this.quoteService.QuoteData.Status);
  }
  SetStatus(Status: number) {
    this.temptQuoteStatus = Status;
  }
  UpdateQuoteStatus(Status: number) {
    if (Status === 3) {
      this.InsertESignature(Status);
    } else {
    if (Status === 4) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continue!'
      }).then((result) => {
        if (result.value) {
          if (Status === undefined) {
            this.dialogRef.close();
          } else {
            this.dialogRef.close({ Status });
          }
          Swal.fire(
            'Changed!',
            'Your Status is changed.',
            'success'
          );
        }
      });
    } else {
      if (Status === undefined) {
        this.dialogRef.close();
      } else {
        this.dialogRef.close({ Status });
      }}
   }

  }
  InsertESignature(Status: number) {
    const CustBase64 = this.CustomerSingnaturePad.toDataURL('image/png');
    this.quoteService.QuoteData.CustomerSignature = CustBase64;
    this.quoteService.updateQuoteSignature(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any; this.dialogRef.close({ Status });
      }}, error =>  console.log(error));
  }
  cleareCustomerCloserSignature() {
    this.CustomerSingnaturePad.clear();
  }
}
