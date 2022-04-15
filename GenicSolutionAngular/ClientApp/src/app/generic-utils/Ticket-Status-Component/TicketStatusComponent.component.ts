import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'generic-ticket-status',
  template: `
     <span *ngIf="Status ==='NEW JOB REQUEST'" class="ticketstatus statusnewjobrequest">NEW&nbsp;JOB&nbsp;REQUEST</span>
     <span *ngIf="Status ==='DEFECT JOB'" class="ticketstatus statusnewjobrequest">DEFECT&nbsp;JOB</span>
    <span *ngIf="Status ==='CANCELLED'" class="ticketstatus statuscancelled">CANCELLED</span>
    <span *ngIf="Status ==='UPCOMING'" class="ticketstatus statusupcoming">UPCOMING</span>
    <span *ngIf="Status ==='CLOSED'" class="ticketstatus statusclosed">CLOSED</span>
    <span *ngIf="Status ==='CLOSEDQUOTED'" class="ticketstatus statusclosednQuoted">CLOSED & QUOTED</span>
    <span *ngIf="Status ==='CLOSEDINVOICED'" class="ticketstatus statusclosednInvoised">CLOSED & INVOICED</span>
    <span *ngIf="Status ==='OVERDUE'" class="ticketstatus statusoverdue">OVERDUE</span>
    <span *ngIf="Status ==='OVERDUE'" class="ticketstatus statusoverdueday">By {{OverDueDays}}
	<span *ngIf="OverDueDays === 1">&nbsp;Day</span>
	<span *ngIf="OverDueDays > 1">&nbsp;Days</span></span>
    <span *ngIf="Status ==='HOLD'" class="ticketstatus statushold">HOLD</span>
    <span *ngIf="Status ==='INPROGRESS'" class="ticketstatus statusinprogress">INPROGRESS</span>
    <span *ngIf="Status === 'UNSCHEDULED'" class="ticketstatus statusunschedulled">UNSCHEDULED</span>
  `
})
export class TicketStatusComponent {
  @Input() Status: string;
  @Input() OverDueDays: number;
}
