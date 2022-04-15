import { Component, Input, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
@Component({
  selector: 'generic-ticket-feedback',
  template: `
  <div class="row">
  <div class="col font-20" *ngIf="this.Editable === 0 || this.Editable === 1">
      <h3>Star Rating</h3>
      <div *ngIf="ratingcount === 0">
          <span class="fa fa-star" (click)="rating(1)" ></span>
          <span class="fa fa-star" (click)="rating(2)"></span>
          <span class="fa fa-star" (click)="rating(3)"></span>
          <span class="fa fa-star" (click)="rating(4)"></span>
          <span class="fa fa-star" (click)="rating(5)"></span>
      </div>
      <div *ngIf="ratingcount === 1">
          <span class="fa fa-star f-r-checked" (click)="rating(1)" ></span>
          <span class="fa fa-star" (click)="rating(2)"></span>
          <span class="fa fa-star" (click)="rating(3)"></span>
          <span class="fa fa-star" (click)="rating(4)"></span>
          <span class="fa fa-star" (click)="rating(5)"></span>
      </div>
      <div *ngIf="ratingcount === 2">
          <span class="fa fa-star f-r-checked" (click)="rating(1)" ></span>
          <span class="fa fa-star f-r-checked" (click)="rating(2)"></span>
          <span class="fa fa-star" (click)="rating(3)"></span>
          <span class="fa fa-star" (click)="rating(4)"></span>
          <span class="fa fa-star" (click)="rating(5)"></span>
      </div>
      <div *ngIf="ratingcount === 3">
          <span class="fa fa-star f-r-checked" (click)="rating(1)" ></span>
          <span class="fa fa-star f-r-checked" (click)="rating(2)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(3)"></span>
          <span class="fa fa-star" (click)="rating(4)"></span>
          <span class="fa fa-star" (click)="rating(5)"></span>
      </div>
      <div *ngIf="ratingcount === 4">
          <span class="fa fa-star f-r-checked" (click)="rating(1)" ></span>
          <span class="fa fa-star f-r-checked" (click)="rating(2)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(3)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(4)"></span>
          <span class="fa fa-star" (click)="rating(5)"></span>
      </div>
      <div *ngIf="ratingcount === 5">
          <span class="fa fa-star f-r-checked" (click)="rating(1)" ></span>
          <span class="fa fa-star f-r-checked" (click)="rating(2)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(3)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(4)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(5)"></span>
      </div>
  </div>
  <div class="col text-align-center" *ngIf="this.Editable === 2 && this.Status === 'CLOSED'">
  <div *ngIf="ratingcount === 0">
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
  </div>
  <div *ngIf="ratingcount === 1">
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
  </div>
  <div *ngIf="ratingcount === 2">
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
  </div>
  <div *ngIf="ratingcount === 3">
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
  </div>
  <div *ngIf="ratingcount === 4">
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
  </div>
  <div *ngIf="ratingcount === 5">
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
  </div>
</div>
</div>
  `,
  styles:[`.f-r-checked { color: orange !important; } .text-align-center {text-align: center;}`]
})
export class TicketFeedbackComponent implements OnInit {
  @Input() Status: string;
  @Input() ratingcount: number;
  @Input() Editable: number;
  constructor(private gp: GenericService) { }
  ngOnInit() {
    if(this.ratingcount === undefined || this.ratingcount === null) { this.ratingcount = 0; }
  }
  rating(r: number) {
    if(this.Editable === 1) {
    if(this.ratingcount === r) { this.ratingcount = 0; this.gp.ratingcount = 0; return; }
    this.gp.ratingcount = r;
    this.ratingcount = r;
    }
  }
}
