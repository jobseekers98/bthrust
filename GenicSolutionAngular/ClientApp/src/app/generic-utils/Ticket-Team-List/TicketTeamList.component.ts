import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TicketEngineerComponent } from 'src/app/application/ticket-engineer/ticket-engineer.component';
import { Ticket } from 'src/app/services/ticket.module';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'generic-ticket-team-list',
  template: `
    <span *ngIf="TicketTeams.length === 0"
        class="ticketstatus statusnotassigned">Not&nbsp;Assigned</span>
    <div *ngIf="TicketTeams.length > 0" class="team-inner-1">
        <ul class="btn-group">

            <li *ngIf="TicketTeams.length === 1">
                <img *ngIf="TicketTeams[0].EngineerLogo.length === 0"
                    width="20pTicketTeams" height="20pTicketTeams"
                    src="{{localPrependUrl}}/assets/svg/noimage.svg" />
                <img *ngIf="TicketTeams[0].EngineerLogo.length > 0"
                    width="20pTicketTeams" height="20pTicketTeams"
                    src="{{TicketTeams[0].EngineerLogo}}">
                <span *ngIf="TicketTeams[0].EngineerName.length > 5" title="{{TicketTeams[0].EngineerName}}">
                    {{(TicketTeams[0].EngineerName).substring(0,5)}}...</span>
                <span *ngIf="TicketTeams[0].EngineerName.length <= 5">
                    {{TicketTeams[0].EngineerName}}</span>
            </li>
            <li *ngIf="TicketTeams.length > 1">
                <img *ngIf="TicketTeams[0].EngineerLogo.length === 0"
                    width="20pTicketTeams" height="20pTicketTeams"
                    src="{{localPrependUrl}}/assets/svg/noimage.svg" />
                <img *ngIf="TicketTeams[0].EngineerLogo.length > 0"
                    width="20pTicketTeams" height="20pTicketTeams"
                    src="{{TicketTeams[0].EngineerLogo}}">
                <span *ngIf="TicketTeams[0].EngineerName.length > 5" title="{{TicketTeams[0].EngineerName}}">
                    {{(TicketTeams[0].EngineerName).substring(0,5)}}...</span>
                <span *ngIf="TicketTeams[0].EngineerName.length <= 5">
                    {{TicketTeams[0].EngineerName}}</span>
            </li>
            <li *ngIf="TicketTeams.length > 1">
                <a href="javascript:;" class="moreenglisthover"
                    (click)="OpenAssinedEngineerDialog(Id, TicketId)">
                    +{{TicketTeams.length - 1}}</a>
            </li>

        </ul>
    </div>
    <span *ngIf="Reallocate" class="ticketstatus statusreallocated">REALLOCATED</span>
  `,
  styles: [`
    .team-inner-1 ul{padding-left:0;list-style-type:none;margin-bottom:0px;;}
    .team-inner-1 ul li{color:black;display: inline-block;padding: 8px 8px;}
    .team-inner-1 ul li img{ border-radius:40%; height: 20;width: 20; }
    .team-inner-1 ul li .close{font-size: 10px; padding-left: 8px; padding-top: 6px;}
    .moreenglisthover:hover {color: red;background-color: #e4d4c0;border-radius: 50%;padding: 2px;}
    .btn-group {background-color: rgba(77,89,149,.06);}
    `]
})
export class TicketTeamListComponent {
  @Input() TicketTeams: any;
  @Input() localPrependUrl: string;
  @Input() Reallocate: boolean;
  @Input() Id: string;
  @Input() TicketId: string;
  
  constructor(
    public service: TicketService,
    private dialog: MatDialog
  ) { this.TicketTeams = new Ticket(); }
  OpenAssinedEngineerDialog(Id: string, TicketId: string) {
    this.service.formData.Id =  Id;
    this.service.formData.TicketId =  TicketId;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '640px';
    dialogConfig.height = '460px';
    dialogConfig.data = { };
    this.dialog.open(TicketEngineerComponent, dialogConfig);
  }
}
