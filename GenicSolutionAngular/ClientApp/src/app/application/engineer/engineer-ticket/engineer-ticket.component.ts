import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/services/ticket.module';
import { ServiceformService } from 'src/app/services/serviceform.service';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TicketService } from 'src/app/services/ticket.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Subject } from 'rxjs/internal/Subject';
import { DataTableDirective } from 'angular-datatables';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-engineer-ticket',
  templateUrl: './engineer-ticket.component.html',
  styleUrls: ['./engineer-ticket.component.css']
})
export class EngineerTicketComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  currentUser: Login;
  TotalOpenTicketCount: number;
  TotalClosedCount: number;
  TotalOverdueCount: number;
  localPrependUrl: string;
  type: number;
  constructor(
    public titleService: Title,
    public ticketservice: TicketService,
    public service1: ServiceformService,
    private router: Router,
    public webParms: GenicProfileService,
    public loginservice: AuthenticationService,
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
  }

  ngOnInit() {
    this.loaddata();
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  loaddata() { 
    switch (this.router.url) {
      case '/engineer/engineer-tickets': this.type = 1; this.webParms.WebsiteParam.UrlPath = 'All Tickets'; break;
      case '/engineer/engineer-open-tickets': this.type = 2; this.webParms.WebsiteParam.UrlPath = 'Open Tickets'; break;
      case '/engineer/engineer-today-tickets': this.type = 3; this.webParms.WebsiteParam.UrlPath = 'Today New Tickets'; break;
      case '/engineer/engineer-today-closed-tickets': this.type = 4; this.webParms.WebsiteParam.UrlPath = 'Today Closed Tickets'; break;
      case '/engineer/engineer-overdue-tickets': this.type = 5; this.webParms.WebsiteParam.UrlPath = 'Overdue Tickets'; break;
      case '/engineer/engineer-upcoming-tickets': this.type = 6; this.webParms.WebsiteParam.UrlPath = 'Upcoming Tickets'; break;
      case '/engineer/engineer-hold-tickets': this.type = 7; this.webParms.WebsiteParam.UrlPath = 'Hold Tickets'; break;
      case '/engineer/engineer-closed-tickets': this.type = 8; this.webParms.WebsiteParam.UrlPath = 'Closed Tickets'; break;
      default: this.type = 1; this.webParms.WebsiteParam.UrlPath = 'All Tickets'; break;
    }
    this.ticketservice.getTickets(this.currentUser.Token, this.type).subscribe(
      res => {
        const response = res as any;
        this.ticketservice.Ticketlist = [];
        this.ticketservice.Ticketlist = response.result as Ticket[];
        this.dtTrigger.next();
        this.TotalOpenTicketCount = this.ticketservice.Ticketlist.filter(s=> s.Status === 'UPCOMING').length;
      }, error => console.log(error));
      this.titleService.setTitle(this.currentUser.Engineer + ' ' + this.webParms.WebsiteParam.UrlPath + ' | Genic Solution');
  }
  OpenEngineerTicketDetailDialog(x: Ticket) {
    this.ticketservice.getTicketById(this.currentUser.Token, x.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.ticketservice.formData = response.result;
                    this.router.navigate(['/engineer/engineer-tickets/myticketdetails']);
                  }
    }}, error =>  console.log(error));
  }
  ViewTicketRefDetails(TicketId: string) {
    this.ticketservice.getTicketById(this.currentUser.Token, TicketId).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.ticketservice.formData = response.result;
                    this.router.navigate(['/engineer/engineer-tickets/myticketdetails']);
                  }
    }}, error =>  console.log(error));
  }
}
