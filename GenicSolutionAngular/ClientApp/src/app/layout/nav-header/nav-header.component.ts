import { Component, OnInit } from '@angular/core';
import { AuthenticationService, Login } from 'src/app/services';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserLog } from 'src/app/services/userlog.module';
import { UserlogService } from 'src/app/services/userlog.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { TicketService } from 'src/app/services/ticket.service';
import { QuoteService } from 'src/app/services/quote.service';
import { CustomerService } from 'src/app/services/customer.service';
import { EngineerService } from 'src/app/services/engineer.service';
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styles: []
})
export class NavHeaderComponent implements OnInit {
  currentUser: Login;
  IsOpen: boolean;
  IsSearch: boolean;
  localPrependUrl: string;
  localRecentActivities: UserLog[];
  LocalTimeSpan: Date;
  SearchList: any;
  SynchronizationUrl: string;
  VTSUrl: string;
  constructor(
    private router: Router,
    public service: AuthenticationService,
    public ticketservice: TicketService,
    public customerservice: CustomerService,
    public engineerservice: EngineerService,
    public quoteService: QuoteService,
    public genicprofileservice: GenicProfileService,
    public userLogService: UserlogService) {
    this.service.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.IsOpen = false;
    this.IsSearch = false;
    this.SearchList = {};
    this.SearchList.Item1 = [];
    this.SearchList.Item2 = [];
    this.SearchList.Item3 = [];
    this.SearchList.Item4 = [];
    this.LocalTimeSpan = new Date();
    const host = window.location.host;
    const subdomain = host.split('.')[0];
    this.SynchronizationUrl = 'https://fsm.bthrust.com.sg/Default?id=' + this.currentUser.Id.toLowerCase() + '&f=' + subdomain;
    this.VTSUrl = 'https://vts.skyfy.com.sg/web1/default.aspx?key=' + this.currentUser.VTSToken;
  }
  logout() {
    this.service.logout();
}
  slidertoggel() {
    if (this.IsOpen) {
      this.IsOpen = false;
    } else {
      this.IsOpen = true;
      this.localRecentActivities = [];
      this.userLogService.getRecentActivities(this.currentUser.Token);
      setTimeout(() => {
        this.userLogService.UserLogList.forEach(el => {
        var date1 = new Date(this.LocalTimeSpan);
        var date2 = new Date(el.LogDate);
        el.ActivityTimeSpan = ((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24)).toString();
        });
        this.localRecentActivities = this.userLogService.UserLogList;
      }, 1000);
      setTimeout(() => {
        this.userLogService.UserLogList.forEach(el => {
        var date1 = new Date(this.LocalTimeSpan);
        var date2 = new Date(el.LogDate);
        el.ActivityTimeSpan = ((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24)).toString();
        });
        this.localRecentActivities = this.userLogService.UserLogList;
      }, 3000);
    }
  }
  onkeypress(value: string) {
    if (value.length >= 2) {
      this.IsSearch = true;
      this.genicprofileservice.GlobalFilter.query = value;
      this.genicprofileservice.GlobalFilterSync(this.currentUser.Token).subscribe( res => {
        if (res) {
          this.SearchList = res as any[];
          this.IsSearch = false;
        }
      }, error =>  console.log(error));
    } else {
      this.SearchList = {};
      this.SearchList.Item1 = [];
      this.SearchList.Item2 = [];
      this.SearchList.Item3 = [];
      this.SearchList.Item4 = [];
    }
  }
  OnTicketClick(Id: string) {
    this.ticketservice.getTicketById(this.currentUser.Token, Id).subscribe( res => {
      if (res) { const response = res as any;
        this.ticketservice.formData = response.result;
        this.router.navigate(['/tickets/ticket-view-detail/']);
      }
    }, error =>  console.log(error));
  }
  OnQuotationClick(Id: string) {
    this.router.navigate(['/quotes/quote-Details/' + Id]);
  }
  OnCustomerClick(Id: string) {
    this.router.navigate(['/customers/customer-details/' + Id]);
  }
  OnEngineerClick(Id: string) {
    this.router.navigate(['/engineers/engineer-details/' + Id]);
  }
}
