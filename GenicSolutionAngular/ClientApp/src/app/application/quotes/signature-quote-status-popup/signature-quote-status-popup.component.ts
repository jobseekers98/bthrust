import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserlogService } from 'src/app/services/userlog.service';
import { QuoteService } from 'src/app/services/quote.service';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-quote-status-popup',
  templateUrl: 'signature-quote-status-popup.component.html',
  styles: []
})
export class SignatureQuoteStatusPopupComponent implements OnInit {
  @ViewChild('SignaturePad2', { static: false }) CustomerSingnaturePad: SignaturePad;
  CustomerSignaturePadOption = {
    ' minWidth': 2, pecColor: 'rgb(66,133,244)', backgroundcolor: 'rgb(255,255,255)', canvasWidth: 500, canvasHeight: 200 };
  currentUser: Login;
  temptQuoteStatus = 0;
  constructor(
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public quoteService: QuoteService,
    public dialogRef: MatDialogRef<SignatureQuoteStatusPopupComponent>
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }
  UpdateQuoteStatus() {
    const CustBase64 = this.CustomerSingnaturePad.toDataURL('image/png');
    this.quoteService.QuoteData.SalesPersonSignature = CustBase64;
    this.quoteService.updateQuoteSignature(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any; this.dialogRef.close();
      }}, error =>  console.log(error));
  }
  cleareCustomerCloserSignature() {
    this.CustomerSingnaturePad.clear();
  }
  close() {
    this.dialogRef.close();
  }
}
