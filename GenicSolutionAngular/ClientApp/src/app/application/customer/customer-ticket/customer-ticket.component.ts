import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/services/ticket.module';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TicketService } from 'src/app/services/ticket.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Subject } from 'rxjs/internal/Subject';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-ticket',
  templateUrl: './customer-ticket.component.html',
  styleUrls: []
})
export class CustomerTicketComponent implements OnInit, OnDestroy {
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
    public ticketservice: TicketService,
    private router: Router,
    public webParms: GenicProfileService,
    public loginservice: AuthenticationService,
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.ticketservice.Ticketlist = [];
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [5, 10, 25, 50, 75, 100] };
    this.type = 1;
    this.ticketservice.RunBlankModule();
  }

  ngOnInit() {
    this.loaddata();
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  loaddata() {
    switch (this.router.url) {
      case '/customer/customer-tickets': this.type = 1; this.webParms.WebsiteParam.UrlPath = 'All ' + this.currentUser.Ticket + 's'; break;
      case '/customer/customer-open-tickets': this.type = 2; this.webParms.WebsiteParam.UrlPath = 'Open ' + this.currentUser.Ticket + 's'; break;
      case '/customer/customer-today-new-tickets': this.type = 3; this.webParms.WebsiteParam.UrlPath = 'Today New ' + this.currentUser.Ticket + 's'; break;
      case '/customer/customer-today-closed-tickets': this.type = 4; this.webParms.WebsiteParam.UrlPath = 'Today Closed ' + this.currentUser.Ticket + 's'; break;
      case '/customer/customer-overdue-tickets': this.type = 5; this.webParms.WebsiteParam.UrlPath = 'Overdue ' + this.currentUser.Ticket + 's'; break;
      case '/customer/customer-upcoming-tickets': this.type = 6; this.webParms.WebsiteParam.UrlPath = 'Upcoming ' + this.currentUser.Ticket + 's'; break;
      default: this.type = 1; this.webParms.WebsiteParam.UrlPath = 'All ' + this.currentUser.Ticket + 's'; break;
    }
    this.ticketservice.getTickets(this.currentUser.Token, this.type).subscribe(
      res => {
        const response = res as any;
        this.ticketservice.Ticketlist = [];
        this.ticketservice.Ticketlist = response.result as Ticket[];
        this.dtTrigger.next();
        this.TotalOpenTicketCount = this.ticketservice.Ticketlist.filter(s=> s.Status === 'UPCOMING').length;
      }, error => console.log(error));
  }
  viewTicketDetails(x: Ticket) {
    this.ticketservice.getTicketById(this.currentUser.Token, x.Id).subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          this.ticketservice.formData = response.result;
          this.router.navigate(['/customer/customer-tickets/custoner-ticket-view-details']);
        }
      }
    }, error => console.log(error));
  }
  ViewTicketRefDetails(TicketId: string) {
    try{
    this.ticketservice.formData = this.ticketservice.Ticketlist.filter(s=> s.TicketId == TicketId)[0];
    this.router.navigate(['/customer/customer-tickets/custoner-ticket-view-details']);
    } catch {}
  }
  RequestForReScheduled(x: Ticket) {
    Swal.fire({
      title: 'Aru you sure?',
      text: 'you want to Re-scheduled this ' + this.currentUser.Ticket + '',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, Re-scheduled it!',
      cancelButtonText: 'Cancel!',
    }).then((result2) => {
      if (result2.value) {
        this.ticketservice.formData = Object.assign({}, x);
        this.ticketservice.formData.Status = 'RESCHEDULED';
        this.router.navigate(['/customer/customer-new-or-defect-ticket/']);
      } 
    });
  }
}
