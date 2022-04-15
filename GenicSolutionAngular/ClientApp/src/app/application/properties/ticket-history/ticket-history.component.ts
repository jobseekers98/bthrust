import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/services/ticket.module';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subject} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Property } from 'src/app/services/property.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['../property-list/property-list.component.css']
})
export class TicketHistoryComponent implements OnInit, AfterViewInit {

  public data: any[];
  public options: any;
  tempIndex: number ;
  ClientName: string;
  currentUser: Login;
  TotalOpenCount: number;
  TotalClosedCount: number;
  TotalOverdueCount: number;
  TotalDuein15DaysCount: number;
  refresh = new Subject<void>();
  tempProId: any;
  PropOptions: any;
  optVar: any;
  localPrependUrl: string;
  constructor(
    public titleService: Title,
    public propertyService: PropertyService,
    public ticketService: TicketService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    private router: Router) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
      this.propertyService.Propertylist = [];
      this.ticketService.Ticketlist = [];
      this.ticketService.TicketLocalList = [];
      this.TotalOpenCount = 0;
      this.TotalClosedCount = 0;
      this.TotalOverdueCount = 0;
      this.TotalDuein15DaysCount = 0;
      this.tempProId = 'All Property';
      this.PropOptions = [];
      this.optVar = new Object();
      this.data = [];
      this.tempIndex = 1;
     }

    ngOnInit() {
    this.ClientName = '';
    if (this.ticketService.formData.PropertyId === '00000000-0000-0000-0000-000000000000' || this.ticketService.formData.PropertyId === null) {
      this.router.navigate(['/tickets']);
    }
    if (this.ticketService.formData.CustomerId === '00000000-0000-0000-0000-000000000000' || this.ticketService.formData.CustomerId === null) {
      this.router.navigate(['/tickets']);
    }
    this.titleService.setTitle('Ticket History | Genic Solution');
    this.propertyService.refrestPropertylistCustomerWise(this.currentUser.Token, this.ticketService.formData.CustomerId).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.propertyService.Propertylist = this.propertyService.locallist = response.result as Property[]
                    this.propertyService.locallist = this.propertyService.Propertylist.filter(x => x.IsActive === true);
                    setTimeout(() => {
                      this.ticketService.TicketLocalList = this.ticketService.Ticketlist.filter(u => u.PropertyId === this.ticketService.formData.PropertyId);
                    }, 1000);
                    
                    this.tempProId = this.ticketService.formData.PropertyId;
                    this.data.push(this.optVar.text = 'All Property' );
                    this.propertyService.Propertylist.forEach(el => {
                      this.optVar.id = el.Id;
                      this.optVar.text = el.AddressStreet1 + ' ' + el.AddressStreet2 + ' ' + el.AddressUnitNo + ' ' + el.AddressCity +
                      ' ' + el.AddressState + ' ' + el.AddressCountry + ' ' + el.AddressZipCode;
                      this.data.push(this.optVar);
                      this.optVar = new Object();
                      this.options = { placeholder: 'en-us' };
                      let tempOpt = JSON.parse(JSON.stringify(this.options));
                      tempOpt.placeholder = 'Không tìm thấy';
                      this.options = tempOpt;
                    });
                    this.data.forEach(s =>  {
                      if (s.id === this.ticketService.formData.PropertyId) {
                       this.data[this.tempIndex - 1].selected = true;
                      }
                      this.tempIndex++;
                    });
                  }
    }}, error =>  console.log(error));
    this.ticketService.refrestTicketListByCustomer(this.ticketService.formData.CustomerId);
  }
ngAfterViewInit() {
  this.CalculateTicketCount();
}
CalculateTicketCount() {
  setTimeout(() => {
    const currentUTCDate = new Date();
    const todaydate = new Date(Date.UTC(currentUTCDate.getFullYear(),
      currentUTCDate.getMonth(),
      currentUTCDate.getDate(), 0, 0, 0));
    const date15DayEarly = new Date(Date.UTC(currentUTCDate.getFullYear(),
      currentUTCDate.getMonth(),
      currentUTCDate.getDate() - 15, 0, 0, 0));
    this.TotalOpenCount = this.ticketService.TicketLocalList.filter(x =>
      x.Status === 'UPCOMING' || x.Status === 'OVERDUE' || x.Status === 'INPROGRESS' || x.Status === 'HOLD').length;
    this.TotalClosedCount = this.ticketService.TicketLocalList.filter(x => x.Status === 'CLOSED').length;
    this.TotalOverdueCount = this.ticketService.TicketLocalList.filter(x =>
      new Date(x.OneOffAppointmentDate) < new Date(todaydate) && x.Status === 'OVERDUE').length;
    this.TotalDuein15DaysCount = this.ticketService.TicketLocalList.filter(x =>
      new Date(x.OneOffAppointmentDate) < new Date(date15DayEarly) && x.Status !== 'CLOSED').length;

    this.ClientName = this.propertyService.Propertylist[0].CustomerName;
  }, 1500);
}
ViewTicketDetails(x: Ticket) {
  this.router.navigate(['/properties/ticket-history-view-details/' + x.Id]);
}
OpenAssinedEngineerDialog() {

}
exportAsXLSX() {}

valueChange(event) {
this.tempProId = event.id;
this.ticketService.TicketLocalList = [];
if (this.tempProId === 'All Property') {
  this.ticketService.TicketLocalList = this.ticketService.Ticketlist;
} else {
  this.ticketService.TicketLocalList = this.ticketService.Ticketlist.filter(el => el.PropertyId === this.tempProId);
}
this.CalculateTicketCount();
}
}
