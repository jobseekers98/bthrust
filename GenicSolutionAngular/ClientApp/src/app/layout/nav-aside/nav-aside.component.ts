import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Login, AuthenticationService } from 'src/app/services';
import { TicketService } from 'src/app/services/ticket.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { environment } from 'src/environments/environment';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-nav-aside',
  templateUrl: './nav-aside.component.html',
  styles: []
})
export class NavAsideComponent implements OnInit, AfterViewInit {
  currentUser: Login;
  AllTicketCount: number;
  OpenTicketCount: number;
  HoldTicketCount: number;
  ClosedTicketCount: number;
  TodayClosedTicketCount: number;
  UpcomingTicketCount: number;
  TodayTicketCount: number;
  OverdueTicketCount: number;
  activetabclass: string;
  localPrependUrl: string;
  tabOpen = 1;
  menuIsOpen: string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public ticketservice: TicketService,
    public customerservice: CustomerService,
    public service: AuthenticationService,
    private router: Router,
    public genicProfile: GenicProfileService) {
    this.service.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.menuIsOpen = 'kt-aside__brand-aside-toggler';
   }

  ngOnInit() {
    this.AllTicketCount = 0;
    this.OpenTicketCount = 0;
    this.HoldTicketCount = 0;
    this.ClosedTicketCount = 0;
    this.TodayClosedTicketCount = 0;
    this.UpcomingTicketCount = 0;
    this.TodayTicketCount = 0;
    this.OverdueTicketCount = 0;
    this.genicProfile.getGenicProfile(this.currentUser.Token);
    //console.warn(this.genicProfile.formData.Geolocation);
    setTimeout(() => {
      this.refreshTicketCount();
    }, 5000);
    // set interval every 5 minutes
    setInterval(() => {
      this.refreshTicketCount();
      }, 300000);
  }
  refreshTicketCount() {
    if (this.currentUser.Type === 'Engineer') {
      this.ticketservice.getTickets(this.currentUser.Token, 1).subscribe(
        res => {
          const response = res as any;
          this.AllTicketCount = response.result.length;
          this.OpenTicketCount = response.result.filter(x =>  x.Status === 'UPCOMING' || x.Status === 'OVERDUE' || x.Status === 'INPROGRESS' || x.Status === 'HOLD').length;
          this.HoldTicketCount = response.result.filter(x => x.Status === 'HOLD').length;
          this.ClosedTicketCount = response.result.filter(x => x.Status === 'CLOSED').length;
          this.TodayClosedTicketCount = response.result.filter(x => x.TicketClosedDate !== null && this.isToday(new Date(x.TicketClosedDate)) === true).length;
          this.UpcomingTicketCount = response.result.filter(x => x.Status === 'UPCOMING').length;
          this.TodayTicketCount = response.result.filter(m => m.AppointmentStart !== null && this.isToday(new Date(m.AppointmentStart)) === true).length;
          this.OverdueTicketCount = response.result.filter(x => x.Status === 'OVERDUE').length;
        }, error => console.log(error));
    }
  }
  refreshPendingrequest() {
    this.genicProfile.getPendingLeaveRequest(this.currentUser.Token).subscribe( res => {
      this.genicProfile.PendingLeaveRequest.Count = res as number;
    }, error =>  console.log(error));
  }
  isToday(expiryDateTimeStamp) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return (expiryDateTimeStamp > start && expiryDateTimeStamp < end);
  }
  tabtoggel(n: number) {
    if (this.tabOpen === n) { return this.tabOpen = -1; }
    return this.tabOpen = n;
  }
  menutoggel() {
    if (this.menuIsOpen === 'kt-aside__brand-aside-toggler') {
      this.menuIsOpen = 'kt-aside__brand-aside-toggler kt-aside__brand-aside-toggler--active';
      this.renderer.addClass(this.document.body, 'kt-aside--minimize');
    } else {
      this.menuIsOpen = 'kt-aside__brand-aside-toggler';
      // kt-aside--minimize
      this.renderer.removeClass(this.document.body, 'kt-aside--minimize');
    }
  }
  toggelActiveClass() {
   return this.activetabclass = 'kt-menu__item--open';
  }
  RunBlankModule(t: string) {
    switch(t){
      case 'customer': 
      this.customerservice.SetAsDefaultValues();
      setTimeout(() => { this.router.navigate(['/customers/customer-add/']); }, 100);
      break;
      case 'ticket': 
      this.ticketservice.RunBlankModule();
      setTimeout(() => { this.router.navigate(['/customer/customer-new-or-defect-ticket/']); }, 100);
      break;
    }
  }
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.kt-header-mobile__toolbar-toggler').click(function () {
        $('#kt_aside').toggle();
      })
      if($(window).width() <=  991){
        $('.kt-menu__subnav .kt-menu__item .kt-menu__link').click(function(){
          $('#kt_aside').hide();
        })
      }
      $('#kt_header_mobile_topbar_toggler').click(function(){
        $('body').toggleClass('kt-header__topbar--mobile-on');
      })
    });
  }
}
