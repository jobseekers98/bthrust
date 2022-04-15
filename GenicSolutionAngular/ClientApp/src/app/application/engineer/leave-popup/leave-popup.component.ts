import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService, Login } from 'src/app/services';
import { MatDialogRef } from '@angular/material/dialog';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';

@Component({
  selector: 'app-leave-popup',
  templateUrl: './leave-popup.component.html',
  styleUrls: ['./leave-popup.component.css']
})
export class LeavePopupComponent implements OnInit {
  currentUser: Login;
  createbuttontext: string;
  isValid = true;
  currentUTCDate = new Date();
  localdate = new Date(Date.UTC(this.currentUTCDate.getFullYear(),
                  this.currentUTCDate.getMonth(),
                  this.currentUTCDate.getDate(), 0, 0, 0));
  minDate = { year: Number(this.currentUTCDate.getFullYear()), month: this.currentUTCDate.getMonth() + 1,
     day: this.currentUTCDate.getDate() + 1};
  maxDate = { year: Number(this.currentUTCDate.getFullYear()), month: 12, day: 31 };
  constructor(
    public service: GenicProfileService,
    private toastr: ToastrService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public dialogRef: MatDialogRef<LeavePopupComponent>) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.service.GenicProfileCalendarData = Object.assign({}, this.service.GenicProfileCalendarData);
    if (this.service.GenicProfileCalendarData.Id === 0) {
      this.createbuttontext = 'Save changes';
    } else {
      this.createbuttontext = 'Update';
    }
  }
  onSubmit() {
    if (this.validateForm()) {
      if (this.service.GenicProfileCalendarData.WorkType === 'Half day') {
        this.service.GenicProfileCalendarData.StartTime = this.service.GenicProfileCalendarData.StartTime.split('T')[1].substring(0, 8);
        this.service.GenicProfileCalendarData.EndTime = this.service.GenicProfileCalendarData.EndTime.split('T')[1].substring(0, 8);
      } else {
        this.service.GenicProfileCalendarData.StartTime = null;
        this.service.GenicProfileCalendarData.EndTime = null;
      }
      let date1 = new Date(this.service.GenicProfileCalendarData.Date);
      this.service.GenicProfileCalendarData.LeaveFor = 2;
      this.service.postGenicProfileCalendar(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                    this.service.getGenicProfileCalendar(this.currentUser.Token, this.service.GenicProfileCalendarData.Date.getFullYear());
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
    }
  }
  onHalfDayChossen(t: number) {
    if (t === 1) {
      this.service.GenicProfileCalendarData.StartTime = null;
      this.service.GenicProfileCalendarData.EndTime = null;
    }
    if (t === 2) {
      let d1 = JSON.stringify(this.service.GenicProfileCalendarData.Date);
      this.service.GenicProfileCalendarData.StartTime = d1.split('T')[0].substring(1, 11) + 'T10:00:00Z';
      this.service.GenicProfileCalendarData.EndTime = d1.split('T')[0].substring(1, 11) + 'T14:00:00Z';
    }
  }
  validateForm() {
    this.isValid = true;
    if (this.service.GenicProfileCalendarData.Description === '') {
      this.isValid = false;
    }
    if (this.service.GenicProfileCalendarData.Date === null) {
      this.isValid = false;
    }
    return this.isValid;
  }
}
