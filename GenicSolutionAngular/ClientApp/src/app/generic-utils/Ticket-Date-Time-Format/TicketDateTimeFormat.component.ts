import { Component, Input } from '@angular/core';
import { AuthenticationService, Login } from 'src/app/services';
@Component({
  selector: 'generic-ticket-date-time-format',
  template: `
  <div *ngIf="T === 1">
  <strong>{{this.currentUser.Ticket}} Date: </strong> {{ C | date:'MMM d, y':'+0000' }} <br>
    <strong>Appointment</strong><br>
    <strong>Start:</strong> {{ A | date:'MMM d, y HH:mm':'+0000' }}<br>
    <strong>End:</strong> {{ B | date:'MMM d, y HH:mm':'+0000' }}
  </div>
  <div *ngIf="T === 11">
    {{ C | date:'MMM d, y':'+0000' }}
  </div>
  <div *ngIf="T === 12">
  {{ A | date:'MMM d, y h:mm a':'+0000' }} - {{ B | date:'h:mm a':'+0000' }}
  </div>
  `
})
export class TicketDateTimeFormatComponent {
  @Input() A: string;
  @Input() B: string;
  @Input() C?: string;
  @Input() T?: number; // Format Type
  currentUser: Login;
  constructor(public loginservice: AuthenticationService) { 
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    if (this.T === null) {
      this.T = 1;
    }
  }
}
