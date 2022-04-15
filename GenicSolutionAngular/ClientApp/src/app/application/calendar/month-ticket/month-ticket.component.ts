import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView, CalendarModule, DateAdapter,
   CalendarEventAction } from 'angular-calendar';
import { Subject } from 'rxjs';
import { colors } from '../../../demo-utils/colors';
import { Router } from '@angular/router';
import { isSameMonth, isSameDay } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Login } from '../../../services/login.mudule';
import { CustomerService } from '../../../services/customer.service';
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../../services';
import { CalendarService } from '../../../services/calendar.service';
import { Customer } from '../../../services/customer.model';
import { EngineerService } from '../../../services/engineer.service';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { TicketService } from '../../../services/ticket.service';
import { UserlogService } from '../../../services/userlog.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { TicketReschedulePopupComponent } from '../../ticket-reschedule-popup/ticket-reschedule-popup.component';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './month-ticket.component.html',
  styleUrls: ['./month-ticket.component.css']
})
export class MonthTicketComponent implements OnInit {
  currentUser: Login;
  @ViewChild('modalTender', { static: true }) modalTender: TemplateRef<any>;
  @ViewChild('viewmodalContent', { static: true }) viewmodalContent: TemplateRef<any>;
  
  CalendarView = CalendarView;
  view = CalendarView.Month;
  viewDate = new Date();
  TicketUnscheduledList: any;
  TicketScheduledList: any;
  externalEvents: CalendarEvent[];
  activeDayIsOpen = false;
  refresh = new Subject<void>();
  actions: CalendarEventAction[];
  events: CalendarEvent[];
  TotalUnscheduled: number;
  localPrependUrl: string;
  modalData: { action: string; event: CalendarEvent; };
  OneOffIsVisible = true;
  Iscalendarshow = false;
  JsonOneOffStartDate: string;
  IsTeamShow =  false;
  currentUTCDate = new Date();
  spinnerShow: boolean;
  monthcellvisits = false;
  Islegendshow = false;
  IsTenderlegendshow = false;
  date: {year: number, month: number};
  localdate1 = new Date(Date.UTC(this.currentUTCDate.getFullYear(),
                  this.currentUTCDate.getMonth(),
                  this.currentUTCDate.getDate(), 0, 0, 0));
  minDate = {
              year: Number(this.currentUTCDate.getFullYear()),
              month: Number(this.currentUTCDate.getMonth() + 1),
              day: Number(this.currentUTCDate.getDate())
            };
  maxDate = {
              year: Number(this.currentUTCDate.getFullYear()) + 2,
              month: Number(this.currentUTCDate.getMonth() + 1),
              day: Number(this.currentUTCDate.getDate())
            };
  tenderData: any;
  constructor(
    public titleService: Title,
    private modal: NgbModal,
    public customerservice: CustomerService,
    public calendarservice: CalendarService,
    public ticketservice: TicketService,
    public engineerservice: EngineerService,
    private router: Router,
    private dialog: MatDialog,
    private toastr: ToastrService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public genicprofileservice: GenicProfileService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
   }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
    // console.log('dayClicked');
  }

  eventDropped({ event, newStart, newEnd, allDay }: CalendarEventTimesChangedEvent): void {
    const externalIndex = this.externalEvents.indexOf(event);
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    if (externalIndex > -1) {
      this.externalEvents.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    if (this.view === 'month') {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.events = [...this.events];

    if (!this.ticketservice.formData.OneOffScheduled) {
      this.ticketservice.formData.OneOffAppointmentDate = event.start.toLocaleString();
      this.ticketservice.formData.Id = event.id.toString();
      const sdate = this.utcdate(JSON.stringify(event.start).slice(1, -1));
      const edate = this.utcdate(JSON.stringify(event.end).slice(1, -1));
      this.ticketservice.formData.AppointmentStart = sdate;
      this.ticketservice.formData.AppointmentEnd = edate;
      this.ticketservice.formData.OneOffStartTime = (sdate.split('T')[1]).slice(0, -1).toString();
      this.ticketservice.formData.OneOffEndTime = (edate.split('T')[1]).slice(0, -1).toString();
    }
    setTimeout(() => {
      this.DateDragAction();
    }, 200);
  }

  externalDrop(event: CalendarEvent) {
    if (this.externalEvents.indexOf(event) === -1) {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.externalEvents.push(event);
      this.DateDragActionExternal(event.id.toString());
    }
    // console.log('externalDrop');
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
    // console.log('deleteEvent');
  }

  setView(view: CalendarView) {
    this.view = view;
    // console.log('setView');
  }

  ngOnInit() {
    this.titleService.setTitle('Calendar Month | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.externalEvents = [];
    this.ticketservice.Ticketlist = [];
    this.ticketservice.TicketTeamList = [];
    this.engineerservice.Engineerlist = [];
    this.RefreshCalendar();
  }
  private DateDragAction() {
    this.openpopup(this.ticketservice.formData.Id);
  }
  private DateDragActionExternal(Id) {

  }
  private RefreshCalendar() {
    this.ticketservice.Ticketlist = [];

    this.ticketservice.refreshCalendarTicketList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.TicketUnscheduledList = this.ticketservice.Ticketlist = response.result;
                  this.TicketUnscheduledList = [];
                  this.TicketScheduledList = [];
                  this.TicketUnscheduledList = this.ticketservice.Ticketlist.filter(x => x.OneOffScheduled === true && x.Status !== 'CANCELLED');
                  this.externalEvents = [];
                  this.TicketUnscheduledList.forEach(element1 => {
                    this.externalEvents.push({
                      id: element1.Id,
                      start: new Date(),
                      end: new Date(),
                      title: element1.CustomerCompanyName,
                      color: colors.blue,
                      resizable: {  beforeStart: false, afterEnd: false },
                      draggable: true,
                      meta: { Priority: this.ticketservice.formData.Priority, Status: this.ticketservice.formData.Status,
                        StatusTemp: this.ticketservice.formData.Status,
                        TicketTeams: this.ticketservice.formData.TicketTeams, Subject: this.ticketservice.formData.Title, IsTicket: true }
                    });
                  });
                  this.TicketScheduledList = this.ticketservice.Ticketlist.filter(x => x.OneOffScheduled === false && x.Status !== 'CANCELLED');
                  this.events = [];
                  this.TicketScheduledList.forEach(element2 => {
                    this.events.push({
                      id: element2.Id,
                      start: this.localdate(element2.AppointmentStart),
                      end: this.localdate(element2.AppointmentEnd),
                      title: element2.CustomerCompanyName,
                      color: colors.blue,
                      resizable: { beforeStart: false, afterEnd: false },
                      draggable: true,
                      meta: { Priority: element2.Priority, Status: element2.Status, StatusTemp: element2.Status,
                         TicketTeams: element2.TicketTeams, Subject: element2.Title, IsTicket: true }
                    });
                  });
                  // this.tenderservice.getTenderListForCalendar(this.currentUser.Token).subscribe( tenderres => {
                  //   if (tenderres) { const tenderresponse = tenderres as any;
                  //                    if (tenderresponse.Message === 'success') {
                  //                       tenderresponse.item1.forEach(el => {
                  //                         this.events.push({
                  //                           id: el.Id,
                  //                           start: this.localdate(el.TenderClosing),
                  //                           end: this.localdate(el.TenderClosing),
                  //                           title: 'Tender Closing',
                  //                           color: colors.blue,
                  //                           resizable: { beforeStart: false, afterEnd: false },
                  //                           draggable: true,
                  //                           meta: { data: el, Status: el.Status , StatusTemp: el.StatusTemp, IsTicket: false }
                  //                         });
                  //                       });
                  //                       tenderresponse.item2.forEach(el => {
                  //                         this.events.push({
                  //                           id: el.Id,
                  //                           start: this.localdate(el.SitewalkDate),
                  //                           end: this.localdate(el.SitewalkDate),
                  //                           title: 'SiteWalk',
                  //                           color: colors.blue,
                  //                           resizable: { beforeStart: false, afterEnd: false },
                  //                           draggable: true,
                  //                           meta: { data: el, Status: el.Status , StatusTemp: el.StatusTemp, IsTicket: false }
                  //                         });
                  //                       });
                  //                       this.refresh.next();
                  //               }
                  //   }}, error =>  console.log(error));
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  public OneOffScheduledLater() {
    if (this.ticketservice.formData.OneOffScheduled === true) {
      this.OneOffIsVisible = false;
    } else {
      this.OneOffIsVisible = true;
    }
  }
  showcalendar() {
    if (this.Iscalendarshow) {
      this.Iscalendarshow = false;
    } else {
      this.Iscalendarshow = true;
    }
  }
  showlegendpopup() {
    if (this.Islegendshow) {
      this.Islegendshow = false;
    } else {
      this.Islegendshow = true;
    }
  }
  showtenderlegendpopup() {
    if (this.IsTenderlegendshow) {
      this.IsTenderlegendshow = false;
    } else {
      this.IsTenderlegendshow = true;
    }
  }
  onDateSelect(e: any) {
    this.Iscalendarshow = false;
    this.viewDate = new Date(e.year, e.month - 1, e.day, 0 ,0 , 0, 0);
  }
  private localdate(locatdate: string): Date {
    let date = new Date(locatdate);
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
                    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(),
                    date.getUTCMilliseconds());
  }
  private utcdate(locatdate: string): string {
    let date = new Date(locatdate);
    return JSON.stringify(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(),
                    date.getHours(), date.getMinutes(), date.getSeconds(),
                    date.getMilliseconds()))).slice(1, -1);
  }
  openpopup(id: string) {
    this.engineerservice.Engineerlist = [];
    this.ticketservice.getTicketById(this.currentUser.Token, id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.ticketservice.formData = response.result;
                    this.loadEngineerList();
                    this.modal.open(this.viewmodalContent, { size: 'lg' });
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  opentenderpopup(x: any) {
    this.tenderData = new Object();
    this.tenderData = x;
    this.modal.open(this.modalTender, { size: 'md' });
  }
  openeditticket() {
    this.modal.dismissAll();
    setTimeout(() => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '720px';
    dialogConfig.height = '720px';
    dialogConfig.data = {};
    this.dialog.open(TicketReschedulePopupComponent, dialogConfig).afterClosed().subscribe(res => {
      this.engineerservice.releseTemporaryEngineerFromTicket(this.ticketservice.formData.Id,
        this.currentUser.Token, 'revert').subscribe( res => {
          this.RefreshCalendar();
      }, error =>  console.log(error));
    });
    }, 200);
  }
  detailscustomer(x: Customer) {
    this.modal.dismissAll();
    setTimeout(() => {
      this.customerservice.formData = Object.assign({}, x);
      this.router.navigate(['/customers/customer-details/']);
     }, 200);
  }

  private loadEngineerList() {
    setTimeout(() => {
      let stime = this.ticketservice.formData.AppointmentStart.replace('-', '').replace('-', '');
      stime = stime.replace(':', '').replace(':', '').replace('T', '').replace('Z', '');

      let etime = this.ticketservice.formData.AppointmentEnd.replace('-', '').replace('-', '');
      etime = etime.replace(':', '').replace(':', '').replace('T', '').replace('Z', '');
      this.engineerservice.refrestUnallocatedTimeEngineerList(stime, etime, this.currentUser.Token);
      // console.log(this.ticketservice.formData);
    }, 200);
  }

  monthcellvisitslist(index?: string) {
    let demoClasseslist = null;
    demoClasseslist = document.querySelectorAll('.agent-row-inner');
    demoClasseslist.forEach(element => {
      element.style.display = 'none';
    });
    let demoClasses = null;
    demoClasses = document.querySelectorAll('#agent-row-inner-' + index);
    demoClasses.forEach(element2 => {
      element2.style.display = 'block';
    });
}
monthcellvisitslistclose() {
  let demoClasseslist = null;
  demoClasseslist = document.querySelectorAll('.agent-row-inner');
  demoClasseslist.forEach(element => {
    element.style.display = 'none';
  });
}
  ///// Ticket Team End
  /***********************************************************************************************************/
}
