import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService, Login } from 'src/app/services';
import { DashboardService } from 'src/app/services/dashboard.service';
@Component({
  selector: 'generic-ticket-header-count',
  template: `
          <div class="row mrg-top-10">
          <div class="col-lg-4">
            <div class="kt-portlet kt-iconbox kt-iconbox--brand kt-iconbox--animate-slower">
              <div class="kt-portlet__body">
                <div class="kt-iconbox__body">
                  <div class="kt-iconbox__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <path d="M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z" id="Combined-Shape-Copy" fill="#000000" opacity="0.3" transform="translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) " />
                      </g>
                    </svg>
                  </div>
                  <div class="kt-iconbox__desc">
                    <h3 class="kt-iconbox__title">
                      <a class="kt-link" href="javascript:;">Open {{this.currentUser.Ticket}}s</a>
                    </h3>
                    <div class="kt-iconbox__content">
                      {{Open}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="kt-portlet kt-iconbox kt-iconbox--success kt-iconbox--animate-slow">
              <div class="kt-portlet__body">
                <div class="kt-iconbox__body">
                  <div class="kt-iconbox__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <path d="M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z" id="Combined-Shape-Copy" fill="#000000" opacity="0.3" transform="translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) " />
                      </g>
                    </svg>
                  </div>
                  <div class="kt-iconbox__desc">
                    <h3 class="kt-iconbox__title">
                      <a class="kt-link" href="javascript:;">Closed {{this.currentUser.Ticket}}s</a>
                    </h3>
                    <div class="kt-iconbox__content">
                      {{Closed}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="kt-portlet kt-iconbox kt-iconbox--warning kt-iconbox--animate-fast">
              <div class="kt-portlet__body">
                <div class="kt-iconbox__body">
                  <div class="kt-iconbox__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <path d="M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z" id="Combined-Shape-Copy" fill="#000000" opacity="0.3" transform="translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) " />
                      </g>
                    </svg>
                  </div>
                  <div class="kt-iconbox__desc">
                    <h3 class="kt-iconbox__title">
                      <a class="kt-link" href="javascript:;">Overdue {{this.currentUser.Ticket}}s</a>
                    </h3>
                    <div class="kt-iconbox__content">
                      {{OverDue}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
  `
})
export class TicketHeaderCountComponent implements OnInit {
  @Input() Token: string;
  Open: number;
  Closed: number;
  OverDue: number;
  currentUser: Login;
  constructor(private service: DashboardService,public loginservice: AuthenticationService) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.Open = 0;this.Closed = 0;this.OverDue = 0;
   }
  ngOnInit() {
    this.service.getTicketheaderCount(this.Token).subscribe(res => {
      const response = res as any;
      this.Open = Number(response.OpenTicket);
      this.Closed = Number(response.ClosedTicket);
      this.OverDue = Number(response.OverDueTicket);
    }, error => console.log(error));
  }
}
