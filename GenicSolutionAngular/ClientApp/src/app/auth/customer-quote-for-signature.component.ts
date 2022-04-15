import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserlogService } from 'src/app/services/userlog.service';
import { QuoteService } from 'src/app/services/quote.service';
import { SignaturePad } from 'angular2-signaturepad';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-quote-for-signature',
  templateUrl: 'customer-quote-for-signature.component.html',
  styles: []
})
export class CustomerQuoteForSignatureComponent implements OnInit {
  @ViewChild('SignaturePad2', { static: false }) CustomerSingnaturePad: SignaturePad;
  CustomerSignaturePadOption = {
    ' minWidth': 2, pecColor: 'rgb(66,133,244)', backgroundcolor: 'rgb(255,255,255)', canvasWidth: 500, canvasHeight: 200 };
  currentUser: Login;
  temptQuoteStatus = 0;
  class1: string;
  text1: string;
  isValid: boolean = false;
  IsLoading: boolean = false;
  constructor(
    private route1: ActivatedRoute,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public quoteService: QuoteService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit() {
    const Id = this.route1.snapshot.queryParamMap.get('i');
    const token = this.route1.snapshot.queryParamMap.get('t');
    if(Id === null) { 
      this.text1 = 'This is invalid request.';
      this.class1 = 'alert alert-danger display-3';
     }
    this.quoteService.getQuoteDetailsForSign(Id, token).subscribe( res => {
      if (res) { let response = res as any;
        if(response.Message === 'success') {
          this.quoteService.QuoteData = response.result;
          this.temptQuoteStatus = Number(this.quoteService.QuoteData.Status);
          this.isValid = true;
        }
        if(response.Message === 'failure') {
          this.text1 = response.MessageDescription;
          this.class1 = 'alert alert-warning display-3';
        }
      }
    }, error =>  console.log(error)) ;
  }
  SetStatus(Status: number) {
    this.temptQuoteStatus = Status;
  }
  InsertESignature(Status: number) {
    this.IsLoading = true;
    const token = this.route1.snapshot.queryParamMap.get('t');
    if(Status === 4) {
      const CustBase64 = this.CustomerSingnaturePad.toDataURL('image/png');
      this.quoteService.QuoteData.CustomerSignature = CustBase64;
      this.quoteService.QuoteData.Status = 4;
      }
      if(Status === 5) {
        this.quoteService.QuoteData.CustomerSignature = '';
        this.quoteService.QuoteData.Status = 5;
        }
    this.quoteService.updateQuoteSignaturewithRemark(token).subscribe( res => {
      if (res) { const response = res as any; 
        if(response.Message === 'success') {
          this.quoteService.QuoteData = response.result;
          this.temptQuoteStatus = Number(this.quoteService.QuoteData.Status);
          this.text1 = response.MessageDescription;
          this.class1 = 'alert alert-success display-5';
          this.isValid = false;
          this.IsLoading = false;
        }
        if(response.Message === 'failure') {
          this.text1 = response.MessageDescription;
          this.class1 = 'alert alert-warning display-5';
          this.IsLoading = false;
        }
      }}, error =>  console.log(error));
  }
  cleareCustomerCloserSignature() {
    this.CustomerSingnaturePad.clear();
  }
}
