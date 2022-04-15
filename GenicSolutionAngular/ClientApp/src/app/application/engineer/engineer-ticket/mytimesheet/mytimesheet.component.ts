import { Component, OnInit } from '@angular/core';
import { UserlogService } from 'src/app/services/userlog.service';
import { TicketService } from 'src/app/services/ticket.service';
import { AuthenticationService, Login } from 'src/app/services';
import { Ticket } from 'src/app/services/ticket.module';

@Component({
  selector: 'app-mytimesheet',
  templateUrl: './mytimesheet.component.html',
  styles: []
})
export class MytimesheetComponent implements OnInit {
  pp = 1;
  localTicketTimesheet: any;
  tempTotalTimeSpan: string;
  currentUser: Login;
  localTicketNumnerList: Ticket[];
  constructor(
    public logService: UserlogService,
    public ticketService: TicketService,
    public loginservice: AuthenticationService,
    ) {
      this.localTicketNumnerList = [];
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit() {
    this.getMyTimesheet()
    this.ticketService.getTickets(this.currentUser.Token, 1).subscribe(
      res => {
        const response = res as any;
        this.ticketService.Ticketlist = [];
        this.ticketService.Ticketlist = response.result as Ticket[];
        this.localTicketNumnerList = this.ticketService.Ticketlist.filter(x => x.Status !== 'CLOSED');
      }, error => console.log(error));
  }
//Get time sheet
getMyTimesheet() {
  this.logService.GetEngineerTicketTimesheet(this.currentUser.Id, this.currentUser.Token)
    .subscribe( res => {
      if (res) {
      let lst: any = [];
      lst = res;
      this.localTicketTimesheet = [];
      this.localTicketTimesheet= lst;
      this.logService.TicketTimeSheetList = [];
      this.logService.TicketTimeSheetList = lst;
      this.CountTotalTicketTimespan();
      }
    }, error =>  console.log(error));
}
  CountTotalTicketTimespan() {
    var hour = 0;
    var minute = 0;
    var second = 0;
    this.localTicketTimesheet.forEach(el => {
      if (el.EndDate === null || el.EndDate === undefined) {
        el.TimeDiff = '00:00:00';
      } else {
         // tslint:disable-next-line: radix
        hour += parseInt(el.TimeDiff.split(':')[0]);
        // tslint:disable-next-line: radix
        minute += parseInt(el.TimeDiff.split(':')[1]);
        // tslint:disable-next-line: radix
        second += parseInt(el.TimeDiff.split(':')[2]);
      }
    });
    hour = (hour + minute / 60);
    let min = minute + second / 60;
    minute = min %60;
    second = second % 60;
    let h = '00';
    let m = '00';
    let s = '00';
    h = hour.toString().split('.')[0];
    m = minute.toString().split('.')[0];
    s = second.toString().split('.')[0];
    var ttl = this.toString(h) + ':' + this.toString(m);
    this.tempTotalTimeSpan = ttl;
  }
  private toString(value) {
    let val = value;
    if (!value) {
      val = '00';
    }
    if (value < 10) {
      val = '0' + value;
    }
    return val;
  }

  loadTimesheet(TicketId: string) {
    setTimeout(() => {
    this.localTicketTimesheet = [];
    if (TicketId === 'All') {
      this.localTicketTimesheet = this.logService.TicketTimeSheetList;
    } else {
 
        this.localTicketTimesheet = this.logService.TicketTimeSheetList.filter(e =>
          e.TicketId === TicketId);

    }
    this.CountTotalTicketTimespan();
  }, 1000);
  }
  LoadTimesheetOnSearch(value: string) {
    setTimeout(() => {
      this.localTicketTimesheet = this.logService.TicketTimeSheetList.filter(e =>
        e.TicketId.toLowerCase().match(value.toLowerCase()));
        this.CountTotalTicketTimespan();
    }, 1000);
      
  }
}
