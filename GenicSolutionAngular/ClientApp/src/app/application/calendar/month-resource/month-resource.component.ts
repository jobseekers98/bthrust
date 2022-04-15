import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef, ElementRef } from '@angular/core';
import { CalendarService } from '../../../services/calendar.service';
import { Login, AuthenticationService } from '../../../services';
import { environment } from '../../../../environments/environment';
import { EngineerService } from '../../../services/engineer.service';
import { CustomerService } from '../../../services/customer.service';
import { TicketService } from '../../../services/ticket.service';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from '../../../services/userlog.service';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Customer } from '../../../services/customer.model';
import { Engineer } from '../../../services/engineer.module';
import { Subject } from 'rxjs/internal/Subject';
import { Ticket } from '../../../services/ticket.module';
import { Router } from '@angular/router';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { ResourceFullCalendarSetting } from '../../../services/genicprofile.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { TicketReschedulePopupComponent } from '../../ticket-reschedule-popup/ticket-reschedule-popup.component';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './month-resource.component.html',
  styleUrls: ['./month-resource.component.css']
})
export class MonthResourceComponent implements OnInit, AfterViewInit {
  refresh: Subject<any> = new Subject();
  OneOffIsVisible = true;
  @ViewChild('viewmodalContent', { static: true }) viewmodalContent: TemplateRef<any>;
  @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent;
  @ViewChild('external', { static: true }) external: ElementRef;
  aspectRatio = 2.8;
  currentUser: Login;
  localPrependUrl: string;
  showFilte: boolean;
  Iscalendarshow = false;
  spinnerShow: boolean;
  currentUTCDate = new Date();
  viewDate = new Date();
  plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, resourceTimelinePlugin];
  defaultView = 'resourceTimelineDay';
  calendarEvents: calendarEvents[];
  resources: resources[];
  droppable: true;
  date: {year: number, month: number};
  header = { left: ' prev, today next ', center: 'title', right: 'resourceTimelineDay,resourceTimelineThreeDays,resourceTimelineWeek'};
  views = {
            resourceTimelineThreeDays: { type: 'resourceTimeline', duration: { days: 3 }, buttonText: '3 day'},
            resourceTimelineWeek: { type: 'resourceTimeline', duration: { days: 7 }, buttonText: 'week'}
            };
  CustomerdropdownList = []; CustomerselectedItems = [];
  CustomerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Customers'};
  EngineerdropdownList = []; EngineerselectedItems = [];
  EngineerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Engineers'};
  StatusdropdownList = []; StatusselectedItems = [];
  StatusdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Status'};
  ticketlist: any;
  isDtInitialized: boolean;
  CalendarResourceData: any;
  constructor(
    private titleService: Title,
    public service: CalendarService,
    public ticketservice: TicketService,
    public loginservice: AuthenticationService,
    public customerservice: CustomerService,
    public genicprofileservice: GenicProfileService,
    public engineerservice: EngineerService,
    public logService: UserlogService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private router: Router,
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.ticketlist = [];
    this.isDtInitialized = false;
  }
  ngOnInit() {
    this.EngineerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: this.currentUser.Engineer + 's'};
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    if (this.currentUser.Permissions.ResourceView === false) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Calendar Resource | Genic Solution');
    this.showFilte = false;
    setTimeout(() => {
      this.showFilte = true;
    }, 1000);

    this.RefreshData();
    if (this.genicprofileservice.ResourceFullCalendarSetting === undefined) {
      this.genicprofileservice.ResourceFullCalendarSetting = new ResourceFullCalendarSetting();
      this.genicprofileservice.ResourceFullCalendarSetting.start = '08:00';
      this.genicprofileservice.ResourceFullCalendarSetting.end = '20:00';
    }

    // tslint:disable-next-line: no-unused-expression
    new Draggable(this.external.nativeElement, {
      itemSelector: '.fc-event', eventData(eventEl) {
        return {
          title: eventEl.innerText
        };
      }
  });
  }
  eventDragStop(model) {
    console.log(model);
  }
  drop(e) {
    const Id = e.draggedEl.id;
    const sTime = new Date(e.dateStr);
    const eTime = new Date(e.dateStr);
    eTime.setMinutes(sTime.getMinutes() + 60);
    const EngineerId = e.resource._resource.id;
    this.ticketservice.formData = new Ticket();
    this.ticketservice.formData.Id = Id;
    this.ticketservice.formData.CustomerId = '00000000-0000-0000-0000-000000000000';
    this.ticketservice.formData.PropertyId = EngineerId;
    this.ticketservice.formData.OneOffAppointmentDate = sTime.toISOString();
    this.ticketservice.formData.OneOffStartTime =
                              sTime.getHours().toString().padStart(2, '0') + ':' +
                              sTime.getMinutes().toString().padStart(2, '0') + ':' +
                              sTime.getSeconds().toString().padStart(2, '0') + '.' +
                              sTime.getMilliseconds().toString().padStart(3, '0');
    this.ticketservice.formData.OneOffEndTime =
                              eTime.getHours().toString().padStart(2, '0') + ':' +
                              eTime.getMinutes().toString().padStart(2, '0') + ':' +
                              eTime.getSeconds().toString().padStart(2, '0') + '.' +
                              eTime.getMilliseconds().toString().padStart(3, '0');
    this.ticketservice.ResourceViewDropableEvent(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                    this.RefreshData();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  eventClick(e) {
    const Id = e.event._def.publicId;
    if (Number(Id) !== 0) {
      this.openpopup(Id);
    } else {
      Swal.fire({
        title: e.view.title,
        text: e.event._def.title,
        type: 'info'
      });
    }
  }
  ngAfterViewInit() {
    this.customerservice.getCustomerListSync(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 const custList = response.result as Customer[];
                 custList.forEach(w => {
                 this.CustomerdropdownList.push({Id: w.Id, Name: w.CompanyName , IsAssigned : false});
                 this.genicprofileservice.TicketFilter.CustomerId.forEach(el => {
                  if (w.Id === el) {
                    this.CustomerselectedItems.push({Id: w.Id, Name: w.CompanyName , IsAssigned : true});
                  }
                });
        });
      }}, error =>  console.log(error));
    this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   const engList = response.result as Engineer[];
                   engList.forEach(w => {
            this.EngineerdropdownList.push({Id: w.Id, Name: w.EngineerName, IsAssigned : false });
            this.genicprofileservice.TicketFilter.EngineerId.forEach(el => {
              if (w.Id === el) {
                this.EngineerselectedItems.push({Id: w.Id, Name: w.EngineerName, IsAssigned : true });
              }
            });
          });
        }}, error =>  console.log(error));
    this.StatusdropdownList = [
        { Id: 'UPCOMING', Name: 'UPCOMING' },
        { Id: 'HOLD', Name: 'HOLD' },
        { Id: 'INPROGRESS', Name: 'INPROGRESS' },
        { Id: 'OVERDUE', Name: 'OVERDUE' },
        { Id: 'CLOSED', Name: 'CLOSED' },
        { Id: 'UNALLOCATED', Name: 'UNALLOCATED' },
        { Id: 'UNSCHEDULED', Name: 'UNSCHEDULED' },
        { Id: 'CANCELED', Name: 'CANCELED' }
      ];
  }
  onDateSelect(e: any) {
    this.Iscalendarshow = false;
    const d = new Date(e.year, e.month - 1, e.day, 0 ,0 , 0, 0);
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate(d);

    // this.Iscalendarshow = false;
    // const d = new Date(this.CalendarResourceData.Date);
    // const calendarApi = this.calendarComponent.getApi();
    // calendarApi.gotoDate(d);
  }
  DraggableEvent(e) {
    const Id = e.prevEvent._def.publicId;
    const sTime = new Date(e.event._instance.range.start);
    const eTime = new Date(e.event._instance.range.end);
    const EngineerId = e.prevEvent._def.resourceIds[0];
    this.ticketservice.formData = new Ticket();
    this.ticketservice.formData.Id = Id;
    this.ticketservice.formData.PropertyId = EngineerId;
    this.ticketservice.formData.OneOffAppointmentDate = sTime.toISOString();
    this.ticketservice.formData.OneOffStartTime =
                              sTime.getUTCHours().toString().padStart(2, '0') + ':' +
                              sTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                              sTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                              sTime.getUTCMilliseconds().toString().padStart(3, '0');
    this.ticketservice.formData.OneOffEndTime =
                              eTime.getUTCHours().toString().padStart(2, '0') + ':' +
                              eTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                              eTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                              eTime.getUTCMilliseconds().toString().padStart(3, '0');
    this.ticketservice.ResourceViewDraggableEvent(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                    this.RefreshData();
                  }
                 if (response.Message === 'failure') {
                    this.RefreshData();
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  eventDrop(e) {
    if (e.oldResource === null) {
      const Id = e.event._def.publicId;
      const sTime = new Date(e.event._instance.range.start);
      const eTime = new Date(e.event._instance.range.end);
      const EngineerId = e.event._def.resourceIds[0];

      this.ticketservice.formData = new Ticket();
      this.ticketservice.formData.Id = Id;
      this.ticketservice.formData.PropertyId = EngineerId;
      this.ticketservice.formData.OneOffAppointmentDate = sTime.toISOString();
      this.ticketservice.formData.OneOffStartTime =
                                sTime.getUTCHours().toString().padStart(2, '0') + ':' +
                                sTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                                sTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                                sTime.getUTCMilliseconds().toString().padStart(3, '0');
      this.ticketservice.formData.OneOffEndTime =
                                eTime.getUTCHours().toString().padStart(2, '0') + ':' +
                                eTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                                eTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                                eTime.getUTCMilliseconds().toString().padStart(3, '0');
      this.ticketservice.ResourceViewDraggableEvent(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                      this.toastr.success('success', response.MessageDescription);
                      this.RefreshData();
                    }
                   if (response.Message === 'failure') {
                      this.RefreshData();
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
    } else {
      const Id = e.event._def.publicId;
      const sTime = new Date(e.event._instance.range.start);
      const eTime = new Date(e.event._instance.range.end);
      const OldEngineerId = e.oldResource._resource.id;
      const NewEngineerId = e.newResource._resource.id;

      this.ticketservice.formData = new Ticket();
      this.ticketservice.formData.Id = Id;
      this.ticketservice.formData.CustomerId = OldEngineerId;
      this.ticketservice.formData.PropertyId = NewEngineerId;
      this.ticketservice.formData.OneOffAppointmentDate = sTime.toISOString();
      this.ticketservice.formData.OneOffStartTime =
                                sTime.getUTCHours().toString().padStart(2, '0') + ':' +
                                sTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                                sTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                                sTime.getUTCMilliseconds().toString().padStart(3, '0');
      this.ticketservice.formData.OneOffEndTime =
                                eTime.getUTCHours().toString().padStart(2, '0') + ':' +
                                eTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                                eTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                                eTime.getUTCMilliseconds().toString().padStart(3, '0');
      this.ticketservice.ResourceViewDropableEvent(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                      this.toastr.success('success', response.MessageDescription);
                      this.RefreshData();
                    }
                   if (response.Message === 'failure') {
                      this.RefreshData();
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
    }
  }
  RefreshData(): void {
    if (this.isDtInitialized) {
      const calendarApi = this.calendarComponent.getApi();
      calendarApi.removeAllEvents();
      calendarApi.refetchEvents();
    }
    this.ticketlist = [];
    this.resources = [];
    this.calendarEvents = [];
    this.service.ResourceParamData.TokenNo = this.currentUser.Token;
    this.service.refrestResourceViewList(this.currentUser.Token, this.service.ResourceParamData).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.isDtInitialized = true;
                  this.resources = response.Item1;
                  this.calendarEvents = response.Item2;
                  this.ticketservice.getUnAssignedTickets(this.currentUser.Token).subscribe( res2 => {
                    if (res2) { const response2 = res2 as any;
                                this.ticketlist = response2.result;
                    }}, error =>  console.log(error));
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  eventrender(event) {
    event.el.title = event.event.title;
  }
  showcalendar() {
    if (this.Iscalendarshow) {
      this.Iscalendarshow = false;
    } else {
      this.Iscalendarshow = true;
    }
  }
  /// Custimer
  onCustomerItemSelect(e) {
    this.service.ResourceParamData.CustomerId = [];
    e.value.forEach(element => {
      this.service.ResourceParamData.CustomerId.push(element.Id);
    });
    this.RefreshData();
  }
  /// Engineers
  onEngineerItemSelect(e) {
    this.service.ResourceParamData.EngineerId = [];
    e.value.forEach(element => {
      this.service.ResourceParamData.EngineerId.push(element.Id);
    });
    this.RefreshData();
  }
  onStatusItemSelect(e) {
    this.service.ResourceParamData.Status = [];
    e.value.forEach(element => {
      this.service.ResourceParamData.Status.push(element.Id);
    });
    this.RefreshData();
  }
  openpopup(id: string) {
    // this.toastr.info(c);
    this.ticketservice.formData.Id = id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '720px';
    dialogConfig.height = '720px';
    dialogConfig.data = {};
    this.dialog.open(TicketReschedulePopupComponent, dialogConfig)
    .afterClosed().subscribe(res => {
      this.engineerservice.releseTemporaryEngineerFromTicket(this.ticketservice.formData.Id,
        this.currentUser.Token, 'revert').subscribe( res => {
          this.RefreshData();
      }, error =>  console.log(error));
    });
  }
  public OneOffScheduledLater() {
    if (this.ticketservice.formData.OneOffScheduled === true) {
      this.OneOffIsVisible = false;
    } else {
      this.OneOffIsVisible = true;
    }
  }
 resourcetime(e, v) {
    if (v === 'start') {
      this.genicprofileservice.ResourceFullCalendarSetting.start = e.target.value;
    }
    if (v === 'end') {
      this.genicprofileservice.ResourceFullCalendarSetting.end = e.target.value;
    }
  }
}

// tslint:disable-next-line: class-name
interface resources {
  id?: string;
  title?: string;
  eventColor?: string;
}
// tslint:disable-next-line: class-name
interface  calendarEvents {
    resourceId?: string;
    title?: string;
    start?: string;
    end?: string;
  }
