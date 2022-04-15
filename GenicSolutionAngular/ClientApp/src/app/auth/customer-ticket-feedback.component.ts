import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from '../services/generic.service';

@Component({
  selector: 'app-customer-ticket-feedback',
  templateUrl: 'customer-ticket-feedback.component.html',
  styles: []
})
export class CustomerTicketFeedbackComponent implements OnInit {
  currentUser: Login;
  class1: string;
  text1: string;
  isValid: boolean = false;
  IsLoading: boolean = false;
  tempdata: any;
  _feedbackcount: number = 0;
  ratingcount: number = 0;
  alreadyfeedback: boolean = false;
  val: string = '';
  constructor(
    private route1: ActivatedRoute,
    public loginservice: AuthenticationService,
    public genericservice: GenericService
  ) { this.loginservice.currentUser.subscribe(x => this.currentUser = x); }
  ngOnInit() {
    const Id = this.route1.snapshot.queryParamMap.get('i');
    const rating = this.route1.snapshot.queryParamMap.get('r');
    const token = this.route1.snapshot.queryParamMap.get('t');
    if(Id === null || rating === null || token === null) { 
      this.text1 = "We're sorry. We were not able to find a match.";
      this.class1 = 'alert alert-danger display-4';
     }
     let _rating = Number(rating);
     this.genericservice.ratingcount = _rating;
    this.genericservice.getTicketFreedback(Id, _rating,  token).subscribe( res => {
      if (res) { let response = res as any;
        this.genericservice.ratingcount = response.result.Rating;
        this.ratingcount = this.genericservice.ratingcount;
        if(response.Message === 'success') {
          this.tempdata = response
          this.isValid = true;
        }
        if(response.Message === 'failure') {
          this.text1 = response.MessageDescription;
          this.class1 = 'alert alert-warning display-5';
          this.alreadyfeedback = true;
          //var description = <HTMLInputElement>document.getElementById('Description').valu;
          this.val = response.result.RatingFeedback;
          
        }
      }
    }, error =>  console.log(error)) ;
  }
  submit() {
    this.IsLoading = true;
    const Id = this.route1.snapshot.queryParamMap.get('i');
    const token = this.route1.snapshot.queryParamMap.get('t');
    let _rating = this.genericservice.ratingcount;
    var description = <HTMLInputElement>document.getElementById('Description');
    this.genericservice.putTicketFreedback(Id, _rating, description.value, token).subscribe( res => {
      if (res) { const response = res as any; 
        if(response.Message === 'success') {
          this.text1 = response.MessageDescription;
          this.class1 = 'alert alert-success display-4';
          this.isValid = false;
          this.IsLoading = false;
        }
        if(response.Message === 'failure') {
          this.text1 = response.MessageDescription;
          this.class1 = 'alert alert-warning display-4';
          this.IsLoading = false;
        }
      }}, error =>  console.log(error));
  }
  onkeypress(v: string) {
    this._feedbackcount = v.length;
  }
  rating(r: number) {
    this.ratingcount = r;
  }
}
