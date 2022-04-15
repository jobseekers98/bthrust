import { Component, Input } from '@angular/core';

@Component({
  selector: 'generic-quote-status',
  template: `
  <span *ngIf="Status === 1" class="ticketstatus quotestatusdraft uppercase">Draft</span>
  <span *ngIf="Status === 2" class="ticketstatus quotestatuspending uppercase">Pending</span>
  <span *ngIf="Status === 3" class="ticketstatus quotestatusapproved uppercase">Approved</span>
  <span *ngIf="Status === 4" class="ticketstatus quotestatusaccepeted uppercase">Accepted</span>
  <span *ngIf="Status === 5" class="ticketstatus quotestatusrejected uppercase">Rejected</span>
  <span *ngIf="Status === 6" class="ticketstatus quotestatuscancelled uppercase">Cancelled</span>
  `
})
export class QuoteStatusComponent {
  @Input() Status: number;
}
