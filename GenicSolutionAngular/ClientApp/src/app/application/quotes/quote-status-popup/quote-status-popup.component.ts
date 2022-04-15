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
  templateUrl: './quote-status-popup.component.html',
  styles: []
})
export class QuoteStatusPopupComponent implements OnInit {
  @ViewChild('SignaturePad1', { static: false }) SalesPersonSingnaturePad: SignaturePad;
  SalesPersonSignaturePadOption = { ' minWidth': 2, pecColor: 'rgb(66,133,244)', backgroundcolor: 'rgb(255,255,255)', canvasWidth: 500, canvasHeight: 150 };
  currentUser: Login;
  temptQuoteStatus = 0;
  constructor(
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public quoteService: QuoteService,
    public dialogRef: MatDialogRef<QuoteStatusPopupComponent>
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
    if (Status === 5 || Status === 6) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
       // icon: 'warning',
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
    const SaleBase64 = this.SalesPersonSingnaturePad.toDataURL('image/png');
    this.quoteService.QuoteData.SalesPersonSignature = SaleBase64;
    this.quoteService.QuoteData.CustomerSignature = '';
    this.quoteService.updateQuoteSignature(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any; this.dialogRef.close({ Status });
      }}, error =>  console.log(error));
  }
  cleareSalesPersonSignature() {
    this.SalesPersonSingnaturePad.clear();
  }
  close() {
    this.dialogRef.close();
  }
}
