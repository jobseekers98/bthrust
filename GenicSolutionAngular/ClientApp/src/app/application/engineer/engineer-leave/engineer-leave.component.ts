import { Component, OnInit } from '@angular/core';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { CalendarEvent, CalendarView, CalendarEventAction } from 'angular-calendar';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subject } from 'rxjs';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { GenicProfileCalendar } from 'src/app/services/genicprofile.module';
import { LeavePopupComponent } from '../leave-popup/leave-popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-engineer-leave',
  templateUrl: './engineer-leave.component.html',
  styleUrls: ['./engineer-leave.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter },
  ],
})
export class EngineerLeaveComponent implements OnInit {
  currentUser: Login;
  LeaveSelectOption: number;
  LeaveSelectOptionMonth: number;
  viewDate = new Date();
  events: CalendarEvent[];
  refresh = new Subject<void>();
  actions: CalendarEventAction[];
  activeDayIsOpen: false;
  view = CalendarView.Month;
  showdata: string;
  constructor(
    public titleService: Title,
    public genicprofileservice: GenicProfileService,
    public loginservice: AuthenticationService,
    private dialog: MatDialog,
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser.Engineer = this.currentUser.Engineer;
   }

  ngOnInit() {
    this.LeaveSelectOption = this.viewDate.getFullYear();
    this.LeaveSelectOptionMonth = 0;
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 1);
    this.LeaveCalendarSelectChange();
    this.titleService.setTitle(this.currentUser.Engineer + ' Leave | Genic Solution');
  }

  LeaveCalendarSelectChange() {
    this.viewDate = new Date(this.LeaveSelectOption, this.LeaveSelectOptionMonth - 1, 1);
    this.genicprofileservice.LeaveCalendarSync(this.currentUser.Token, this.LeaveSelectOption, this.LeaveSelectOptionMonth)
    .subscribe( res => {
                         this.genicprofileservice.GenicProfileCalendarList = res as GenicProfileCalendar[];
                         this.events = [];
                         this.genicprofileservice.GenicProfileCalendarList.forEach(element2 => {
                          this.events.push({
                            id: element2.Id,
                            start: new Date(element2.Date),
                            end: new Date(element2.Date),
                            title: element2.Description,
                            resizable: {
                              beforeStart: true,
                              afterEnd: true
                            },
                            draggable: false,
                            meta: { LeaveFor: element2.LeaveFor }
                          });
                        });
    }
    , error =>  console.log(error));
    this.showdat();
  }
  showdat() {
    this.showdata = '';
    switch (Number(this.LeaveSelectOptionMonth)) {
        case 0: this.showdata = '';   break;
        case 1: this.showdata = 'January';   break;
        case 2: this.showdata = 'February';   break;
        case 3: this.showdata = 'March';   break;
        case 4: this.showdata = 'April';   break;
        case 5: this.showdata = 'May';   break;
        case 6: this.showdata = 'June';   break;
        case 7: this.showdata = 'July';   break;
        case 8: this.showdata = 'August';   break;
        case 9: this.showdata = 'September';   break;
        case 10: this.showdata = 'October';   break;
        case 11: this.showdata = 'November';   break;
        case 12: this.showdata = 'December';   break;
    }
    this.showdata += ' ' + this.LeaveSelectOption ;
  }
  onLeaveCalendar() {
    this.genicprofileservice.GenicProfileCalendarData = {
      Id: 0, GenicProfileId: 0, Date: null,
      Description: '', WorkType: 'Full Day', StartTime: null, EndTime: null, LeaveFor: 2, EngineerId: this.currentUser.Id, Status: 'Pending'
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = {};
    this.dialog.open(LeavePopupComponent, dialogConfig).afterClosed().subscribe(res => {
     this.LeaveCalendarSelectChange();
    });
  }
  removeLeaveCalendar(Id: number) {
    Swal.fire({
      title: 'Leave Request',
      text: 'Are you sure you want to remove your leave request',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      confirmButtonText: 'Yes, Continue',
      cancelButtonColor: 'red',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        this.genicprofileservice.deleteGenicProfileCalendar(this.currentUser.Token, Id).then(
          res => {
            switch (res.status) {
              case 204:
                Swal.fire({
                  title: 'Deleted!',
                  text: 'Deleted successfully.)',
                  type: 'success',
                  timer: 5000,
                });
                this.LeaveCalendarSelectChange();
                break;
              case 401:
                Swal.fire({
                  title: 'Token Expire!',
                  text: 'Please logain you current token is expire',
                  type: 'warning',
                  timer: 5000,
                });
                break;
              default:
                Swal.fire({
                  title: 'Error!',
                  text: res.statusText,
                  type: 'error',
                });
                break;
            }
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Keep it!',
          text: 'Your Leave request is safe.',
          type: 'info',
          timer: 2000
        });
      }
    });
  }
  cancelledLeaveCalendar(Id: number) {
    Swal.fire({
      title: 'Cancellation',
      text: 'Are you sure you want to cancelled you leave request',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      confirmButtonText: 'Yes, cancelled',
      cancelButtonColor: 'red',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.genicprofileservice.approvedleave(this.currentUser.Token, Id, 'Cancelled').then(
          res => {
            switch (res.status) {
              case 202:
                Swal.fire({
                  title: 'cancelled!',
                  text: 'Cancelled successfully.)',
                  type: 'success',
                  timer: 5000,
                });
                this.LeaveCalendarSelectChange();
                break;
              case 203:
                Swal.fire({
                  title: 'Token Expire!',
                  text: 'Please logain you current token is expire',
                  type: 'warning',
                  timer: 5000,
                });
                break;
                case 204:
                  Swal.fire({
                    title: 'Invalid Request!',
                    text: 'Invalid Request or try again after re-login',
                    type: 'warning',
                    timer: 5000,
                  });
                  break;
              default:
                Swal.fire({
                  title: 'Error!',
                  text: res.statusText,
                  type: 'error',
                });
                break;
            }
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Keep it!',
          text: 'Your Leave request is safe.',
          type: 'info',
          timer: 2000
        });
      }
    });
  }
}
