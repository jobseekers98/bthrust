import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { environment } from 'src/environments/environment';
import { CalendarService } from 'src/app/services/calendar.service';
import { EngineerLocation } from 'src/app/services/calendar.module';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { ToastrService } from 'ngx-toastr';
import { GenericService } from 'src/app/services/generic.service';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  currentUser: Login;
  localPrependUrl: string;
  TotalClosed = 0;
  TotalInprogress = 0;
  TotalClosedList = [];
  TotalInprogressList = [];
  markers: marker[];
  lat: number;
  lng: number;
  zoom: number;
  Iscalendarshow = false;
  IsLeftSection: boolean;
  IsRightSection: boolean;
  IsLeftSectionLive: boolean;
  date: { year: number, month: number };
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  locallist: any;
  CalendarTicketDetailsData: any;
  CalenderList: any;
  CalendarTicketList: any;
  constructor(
    public titleService: Title,
    public ticketservice: TicketService,
    public propertyservice: PropertyService,
    private router: Router,
    private toastr: ToastrService,
    public loginservice: AuthenticationService,
    public genericservice: GenericService,
    public genicprofileservice: GenicProfileService,
    public service: CalendarService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.locallist = [];
    this.CalendarTicketDetailsData = [];
  }
  ngOnInit() {
    if (this.currentUser.Permissions.MapView === false) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Map | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.IsLeftSection = true;
    this.IsRightSection = true;
    this.IsLeftSectionLive = false;
    this.lat = 1.3817199;
    this.lng = 103.8450399;
    this.zoom = 12;
    this.markers = [];
    const currentUTCDate = new Date();
    this.CalenderList = [];
    this.CalendarTicketList = [];
    this.propertyservice.InternalObject.TodayDate = this.genicprofileservice.TODAY_DATE_IN_STRING;
    let _date =  this.propertyservice.InternalObject.TodayDate.toString().split('T')[0].replace('-', '').replace('-', '');
    this.loadData(_date);
  }
  loadData(date: string) {
    this.service.refrestEngineerMapList(this.currentUser.Token, date).subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          this.CalenderList = response.result as any;
        }
        if (response.Message === 'failure') {
          this.toastr.warning('warning', response.MessageDescription);
        }
      }
    }, error => console.log(error));
    this.service.refrestTicketMapList(this.currentUser.Token, date).subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          this.CalendarTicketList = response.result as any;
          this.TotalClosed = response.result.filter(e => e.Status === 'CLOSED').length;
          this.TotalInprogress = response.result.filter(e => e.Status === 'INPROGRESS').length;
          this.TotalClosedList = response.result.filter(e => e.Status === 'CLOSED');
          this.TotalInprogressList = response.result.filter(e => e.Status === 'INPROGRESS');
        }
        if (response.Message === 'failure') {
          this.toastr.warning('warning', response.MessageDescription);
        }
      }
    }, error => console.log(error));
  }
  openmodelpopupticketdetails(TicketId: string) {
    this.service.refrestTicketDetailsMapList(this.currentUser.Token, TicketId).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.CalendarTicketDetailsData = response.result;
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
    //this.service.refrestTicketDetailsMapList(this.currentUser.Token, TicketId);
  }
  showcalendar() {
    if (this.Iscalendarshow) {
      this.Iscalendarshow = false;
    } else {
      this.Iscalendarshow = true;
    }
  }
  hidecalendar() {
    this.Iscalendarshow = false;
  }
  IsLeftSectionMethod() {
    if (this.IsLeftSection) {
      this.IsLeftSection = false;
    } else {
      this.IsLeftSection = true;
    }
  }
  IsRightSectionMethod() {
    if (this.IsRightSection) {
      this.IsRightSection = false;
    } else {
      this.IsRightSection = true;
    }
  }
  IsLeftLiveSectionMethod() {
    if (this.IsLeftSectionLive) {
      this.IsLeftSectionLive = false;
      this.service.EngineerLocation = [];
    } else {
      if (this.currentUser.Permissions.LiveTracking) {
        this.IsLeftSectionLive = true;
        this.service.engineerlocation(this.currentUser.Token).subscribe(res => {
          if (res) { const response = res as any;
            this.service.EngineerLocation = response.result as EngineerLocation[];
            this.markers = [];
            this.service.EngineerLocation.forEach(el => {
              this.markers.push({
                Id: el.EngineerId,
                lat: el.Latitude,
                lng: el.Longitude,
                name: el.EngineerName,
                address: el.LocationAddress
              });
            });
          }
        }, error => console.log(error));
      } else {
        this.toastr.warning('Permission not granted');
      }
    }
  }
  onDateSelect() {
    this.propertyservice.InternalObject.Type = 'ALL';
    this.propertyservice.InternalObject.DateFrom = '';
    this.propertyservice.InternalObject.DateTo = '';
    const datetime = this.propertyservice.InternalObject.TodayDate;
    const date = datetime.toString().split('T')[0];
    const newdate = date.split('-').filter(function (item) { item = item ? item.replace(/-/g, '') : item; return item; }).join('');
    this.loadData(newdate);
    setTimeout(() => {
      this.Iscalendarshow = false;
    }, 200);
  }
  pupulateticket(Id: string) {
    this.ticketservice.getTicketById(this.currentUser.Token, Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.ticketservice.formData = response.result;
                    this.router.navigate(['/tickets/ticket-view-detail']);
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  OnMouseUp(x: any) {
    this.markers = [];
    this.markers.push({
      Id: '0',
      lat: x.Latitude,
      lng: x.Longitude,
      name: x.CustomerName,
      address: x.CustomerAddress
    });
  }
  // leftpopup() {
  //   let parent1 = null;
  //   parent1 = document.querySelector('leftpopup');
  //   parent1.parent('.left-section').toggleClass('closeClass-left');
  // }
  showinnerlist(index?: string, EngineerId?: string) {
    if (EngineerId !== undefined) {
      //this.propertyservice.InternalObject.TodayDate = this.propertyservice.InternalObject.TodayDate;
	   let _date =  this.propertyservice.InternalObject.TodayDate.toString().split('T')[0].replace('-', '').replace('-', '');
      this.service.refrestGetEngineerLeftTaskList(this.currentUser.Token, EngineerId, _date).subscribe(res => {
        if (res) {
          const response = res as any;
          if (response.Message === 'success') {
            this.locallist = response.result;
          }
          if (response.Message === 'failure') {
            this.toastr.warning('warning', response.MessageDescription);
          }
        }
      }, error => console.log(error));
    }
    if (index == null) {
      let demoClasseslist = null;
      demoClasseslist = document.querySelectorAll('.agent-row-inner');
      demoClasseslist.forEach(element => {
        element.style.display = 'none';
      });
    } else {
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
  }
  showinnerlistlive(index?: string) {
    if (index == null) {
      let demoClasseslist = null;
      demoClasseslist = document.querySelectorAll('.agent-row-inner-live');
      demoClasseslist.forEach(element => {
        element.style.display = 'none';
      });
    } else {
      let demoClasseslist = null;
      demoClasseslist = document.querySelectorAll('.agent-row-inner-live');
      demoClasseslist.forEach(element => {
        element.style.display = 'none';
      });
      let demoClasses = null;
      demoClasses = document.querySelectorAll('#agent-row-inner-live-' + index);
      demoClasses.forEach(element2 => {
        element2.style.display = 'block';
      });
    }
  }
}

// tslint:disable-next-line: class-name
interface marker {
  Id: string;
  lat: number;
  lng: number;
  name: string;
  address: string;
}

