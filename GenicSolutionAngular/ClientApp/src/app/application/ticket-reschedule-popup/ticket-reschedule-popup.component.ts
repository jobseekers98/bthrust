import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbTimeAdapter, NgbDateAdapter, NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from 'src/app/services/ticket.service';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { ToastrService } from 'ngx-toastr';
import { EngineerService } from 'src/app/services/engineer.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { Login, AuthenticationService } from 'src/app/services';
import { NotificationService } from 'src/app/services/notification.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Engineer } from 'src/app/services/engineer.module';

@Component({
  selector: 'app-ticket-reschedule-popup',
  templateUrl: './ticket-reschedule-popup.component.html',
  styles: [`.custom-day { text-align: center; padding: 0.185rem 0.25rem; border-radius: 0.25rem; display: inline-block; width: 2rem; }
  .custom-day:hover, .custom-day.focused { background-color: #e6e6e6; color: #fff; }
  .isHoliday { background-color: #eae6e6 !important;color: red !important; cursor: alias; }
  .hidden { display: none; }
  .isDisabledDate {color: #eae7e7;}`],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }],
})
export class TicketReschedulePopupComponent implements OnInit {
  refresh: Subject<any> = new Subject();
  savechanges = false;
  currentUTCDate = new Date();
  // Notification Param
  oldScheduleDate: any = Date();
  oldScheduleTime: any = '';
  // Notification Param
  meridian = true;
  localdate = new Date(Date.UTC(this.currentUTCDate.getFullYear(),
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
  currentUser: Login;
  ShowEngineerList: boolean;
  spinnerShow: boolean;
  oldTicketTeam: any = [];
  public radioData: any;
  LastAppointmentDateStart: string;
  LastAppointmentDateEnd: string;
  loader: boolean;
  Iscalendarshow: boolean;
  date: {year: number, month: number};
  disabledDates: NgbDateStruct[] = [];
  isDisabled = (date: NgbDateStruct, current: {month: number, year: number}) => {
    return this.disabledDates.find(x => NgbDate.from(x).equals(date)) ? true : false;
  }
  isDisabledCss = (date: NgbDate) => {
    return this.disabledDates.find(x => NgbDate.from(x).equals(date)) ? true : false;
  }
  IsEditable: boolean;
  constructor(
    public dialogRef: MatDialogRef<TicketReschedulePopupComponent>,
    public service: TicketService,
    private toastr: ToastrService,
    private router: Router,
    public genicProfile: GenicProfileService,
    public loginservice: AuthenticationService,
    public engineerservice: EngineerService,
    public notifyService: NotificationService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.IsEditable = true;
   }

  ngOnInit() {
      this.radioData = 'O';
      this.loader = false;
      this.ShowEngineerList = false;
      this.spinnerShow = false;
      // Notification Param
      this.oldScheduleDate = this.service.formData.OneOffAppointmentDate;
      this.oldScheduleTime = this.service.formData.OneOffStartTime;
      // Notification Param
      this.service.getTicketById(this.currentUser.Token, this.service.formData.Id).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                      this.service.formData = response.result;
                      this.oldTicketTeam = this.service.formData.TicketTeams;
                   this.LastAppointmentDateStart = this.service.formData.AppointmentStart;
                   this.LastAppointmentDateEnd = this.service.formData.AppointmentEnd;
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
      this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe( res => {
          if (res) { const response = res as any;
                     this.engineerservice.Engineerlist = response.result as Engineer[];
          }}, error =>  console.log(error));
      this.refrestTicketTeamlist();
      this.BindEngineerList();

      // Disabled Dates
      this.disabledSelectDate();
      setTimeout(() => {
        if (this.currentUser.Type === 'Engineer') {
        if (this.engineerservice.formData.CreateForAllDate === 'SameDate') {
          this.maxDate = {
           year: Number(this.currentUTCDate.getFullYear()),
           month: Number(this.currentUTCDate.getMonth() + 1),
           day: Number(this.currentUTCDate.getDate())
         };
        }}
      }, 500);
      setTimeout(() => {
        switch(this.service.formData.Status){
          case 'UPCOMING':
          case 'OVERDUE':
          case 'HOLD':
          this.IsEditable = true;
          break;
          default: this.IsEditable = false; break;
        }
      }, 1000);
  }
  refrestTicketTeamlist() {
    this.service.refrestTicketTeamlist(this.service.formData.Id, this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.service.TicketTeamList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  onSubmit() {
    this.spinnerShow = true;
    if (this.service.formData.AppointmentStart !== null && this.service.formData.AppointmentEnd !== null) {
      if (new Date(this.service.formData.AppointmentStart) > new Date(this.service.formData.AppointmentEnd)) {
        this.toastr.warning('warning', 'Start Time is lessthen end time');
        this.spinnerShow = false;
        return false;
      }
    }
    this.service.formData.OneOffAppointmentDate = this.service.formData.AppointmentStart;
    const sTime = new Date(this.service.formData.AppointmentStart);
    const eTime = new Date(this.service.formData.AppointmentEnd);
    this.service.formData.OneOffStartTime =
                              sTime.getUTCHours().toString().padStart(2, '0') + ':' +
                              sTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                              sTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                              sTime.getUTCMilliseconds().toString().padStart(3, '0');
    this.service.formData.OneOffEndTime =
                              eTime.getUTCHours().toString().padStart(2, '0') + ':' +
                              eTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                              eTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                              eTime.getUTCMilliseconds().toString().padStart(3, '0');
    if (this.radioData === 'R') {
      this.service.AssignedEngineerForAllTickets(this.currentUser.Token).then(
            res => {
              if (res.status === 202) {
                this.toastr.success('Selected Engineers is assigned to all ' + this.currentUser.Ticket + 's');
                this.SendReScheduleTicketEmailNotification(this.service.formData.Id);
              }
            }
          );
    } else {
      this.service.RescheduledTicket(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.SendReScheduleTicketEmailNotification(this.service.formData.Id);
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
    }

    setTimeout(() => {
      let s = this.savechanges;
      this.dialogRef.close({ s });
      this.spinnerShow = false;
      this.toastr.success('Update successfully');
      }, 1000);
  }

  // Send ReSchedule notification
  SendReScheduleTicketEmailNotification(TicketId) {
    this.notifyService.ReScheduleTicketEmailNotification(this.oldTicketTeam, TicketId, this.currentUser.Id, this.oldScheduleDate, this.oldScheduleTime)
    .subscribe( resp => {
    }, error =>  console.log(error));
  }

  public AddEngineersToTicket(index: number, checked: boolean, engineerid: string, engineername: string) {
    if (this.service.formData.TicketId === undefined || this.service.formData.TicketId === '') {
      this.router.navigate(['/tickets/ticket-create']);
      return false;
    }
    if (checked) {
      this.service.formData.TicketTeams.push({
        Id: 0,
        TicketId: this.service.formData.Id,
        EngineerId: engineerid,
        EngineerName: engineername,
        EngineerLogo: null
      });
    } else {
      this.service.formData.TicketTeams.splice(index, 1);
      this.engineerservice.Engineerlist.push({
        Id: engineerid,
        EngineerName: engineername
      });
    }
    this.service.formData.Reallocate = true;
    this.BindEngineerList();
  }
  onAppointmentDateTimeSelect() {
    this.ShowEngineerList = false;
    this.service.formData.Rescheduled = true;
    this.service.formData.AppointmentEnd = this.service.formData.AppointmentStart;
    this.service.formData.AppointmentStart = this.service.formData.AppointmentStart.split('T')[0] + 'T10:00:00Z';
    this.service.formData.AppointmentEnd = this.service.formData.AppointmentStart.split('T')[0] + 'T11:00:00Z';
  }
  onAppointmentTimeSelect() {
    this.ShowEngineerList = false;
    this.service.formData.Rescheduled = true;
  }
  OnGetAvailableEngineers() {
    this.loader = true;
    if (new Date(this.service.formData.AppointmentStart) >= new Date(this.service.formData.AppointmentEnd)) {
      this.toastr.warning('warning', 'Start Time is lessthen end time');
      this.loader = false;
      return false;
    }
    if (this.service.formData.AppointmentStart === undefined || this.service.formData.AppointmentStart === null ||
    this.service.formData.AppointmentEnd === undefined || this.service.formData.AppointmentEnd === null) {
      this.toastr.warning('Warning', 'Please select appointment date & time!');
      this.loader = false;
      return false;
     }
    this.ShowEngineerList = true;
    let stime = this.service.formData.AppointmentStart.replace('-', '').replace('-', '');
    stime = stime.replace(':', '').replace(':', '').replace('T', '').replace('Z', '');
    let etime = this.service.formData.AppointmentEnd.replace('-', '').replace('-', '');
    etime = etime.replace(':', '').replace(':', '').replace('T', '').replace('Z', '');
    this.engineerservice.releseTemporaryEngineerFromTicket(this.service.formData.Id, this.currentUser.Token, 'relese').subscribe( res => {
      this.engineerservice.refrestUnallocatedTimeEngineerList(stime, etime, this.currentUser.Token);
      this.loader = false;
    }, error =>  console.log(error));
    this.service.formData.TicketTeams = [];
  }
  disabledSelectDate() {
    this.genicProfile.DisabledDateList(this.currentUser.Token).subscribe( res => {
      if (res) {
       let obj: any;
       obj = res;
       obj.forEach(element => {
         this.disabledDates.push({year: element.year, month: element.month, day: element.day});
       });
       this.isDisabled = (date: NgbDateStruct, current: {month: number, year: number}) => {
          return this.disabledDates.find(x => NgbDate.from(x).equals(date)) ? true : false;
        };
      }
    }, error =>  console.log(error));
  }
  showcalendar() {
    if (this.Iscalendarshow) {
      this.Iscalendarshow = false;
    } else {
      this.Iscalendarshow = true;
    }
  }
  private BindEngineerList() {
    setTimeout(() => {
      let demoClasses = null;
      demoClasses = document.querySelectorAll('.engineer-list-class');
      demoClasses.forEach(element => {
        this.service.formData.TicketTeams.forEach(el => {
          if (element.id === el.EngineerId) {
            element.innerHTML = '';
          }
        });
      });
      this.refresh.next();
     }, 100);
  }
  close() {
    this.dialogRef.close();
  }
}
