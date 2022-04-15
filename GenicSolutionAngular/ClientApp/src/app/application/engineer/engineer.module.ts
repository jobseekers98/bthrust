import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateAdapter, NgbModule, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileUploadModule } from 'ng2-file-upload';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { LSelect2Module } from 'ngx-select2';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ChartModule } from 'angular-highcharts';
import { EngineerDashboardComponent } from './engineer-dashboard/engineer-dashboard.component';
import { EngineerLeaveComponent } from './engineer-leave/engineer-leave.component';
import { CloserdetailsComponent } from './engineer-ticket/closerdetails/closerdetails.component';
import { EngineerTicketComponent } from './engineer-ticket/engineer-ticket.component';
import { MyTicketDetailsComponent } from './engineer-ticket/my-ticket-details/my-ticket-details.component';
import { MytimesheetComponent } from './engineer-ticket/mytimesheet/mytimesheet.component';
import { EngineerComponent } from './engineer.component';
import { LeavePopupComponent } from './leave-popup/leave-popup.component';
import { DemoUtilsModule } from 'src/app/demo-utils/module';
import { CalendarModule } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import {NgxImageCompressService} from 'ngx-image-compress';
import { TicketStatusComponentModule } from 'src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module';
import { TicketIconAttachmentModule } from 'src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module';
import { TicketTeamListModule } from 'src/app/generic-utils/Ticket-Team-List/TicketTeamList.module';
import { TicketDateTimeFormatModule } from 'src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { TicketHeaderCountModule } from 'src/app/generic-utils/Ticket-Header-Count/TicketHeaderCount.module';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { EngineerProfileComponent } from './engineer-profile/engineer-profile.component';
import { MasterservicepopupComponent } from './engineer-ticket/masterservicepopup/masterservicepopup.component';
import { ServiceFormFilledPopupComponent } from './engineer-ticket/service-form-filled-popup/service-form-filled-popup.component';
import { ViewServiceFormHTMLPopupComponent } from './engineer-ticket/view-service-form-html-popup/view-service-form-html-popup2.component';
import { ImageCropperModule } from 'src/app/generic-utils/image-cropper/public-api';
import { EngineerAttendanceComponent } from './engineer-attendance/engineer-attendance.component';
import { TicketFeedbackComponentModule } from 'src/app/generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module';
const routes: Routes = [
  { path: '', component: EngineerComponent,
    children: [
      { path: '', component: EngineerTicketComponent },
      { path: 'engineer-profile', component: EngineerProfileComponent },
      { path: 'engineer-leave', component: EngineerLeaveComponent },
      { path: 'leave-pupup', component: LeavePopupComponent },
      { path: 'engineer-dashboard', component: EngineerDashboardComponent },
      { path: 'engineer-tickets', component: EngineerTicketComponent },
      { path: 'engineer-open-tickets', component: EngineerTicketComponent },
      { path: 'engineer-hold-tickets', component: EngineerTicketComponent },
      { path: 'engineer-closed-tickets', component: EngineerTicketComponent },
      { path: 'engineer-today-closed-tickets', component: EngineerTicketComponent },
      { path: 'engineer-upcoming-tickets', component: EngineerTicketComponent },
      { path: 'engineer-today-tickets', component: EngineerTicketComponent },
      { path: 'engineer-overdue-tickets', component: EngineerTicketComponent },
      { path: 'engineer-attendance', component: EngineerAttendanceComponent },
      
      { path: 'my-ticket-time-sheet', component: MytimesheetComponent },
      { path: 'engineer-tickets',
            children: [
              { path: 'myticketdetails', component: MyTicketDetailsComponent },
              { path: 'ticket-MasterServiceform', component: MasterservicepopupComponent },
              { path: 'closer-details', component: CloserdetailsComponent },
              { path: 'Serviceform-details', component: ServiceFormFilledPopupComponent },
              { path: 'view-service-form', component: ViewServiceFormHTMLPopupComponent }
            ]
      },
    ]},
];
@NgModule({
  declarations: [
    EngineerComponent,
    EngineerTicketComponent,
    EngineerProfileComponent,
    EngineerLeaveComponent,
    LeavePopupComponent,
    EngineerDashboardComponent,
    MytimesheetComponent,
    MyTicketDetailsComponent,
    MasterservicepopupComponent,
    CloserdetailsComponent,
    ServiceFormFilledPopupComponent,
    ViewServiceFormHTMLPopupComponent,
    EngineerAttendanceComponent
 ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NgbModule,
    ChartModule,
    FileUploadModule,
    LSelect2Module,
    SelectDropDownModule,
    NgMultiSelectDropDownModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    CalendarModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleapiKey }),
    SchedulerModule.forRoot(),
    FullCalendarModule,
    DemoUtilsModule,
    SignaturePadModule,
    MatPasswordStrengthModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forChild(routes),
    TicketStatusComponentModule,
    TicketIconAttachmentModule,
    TicketTeamListModule,
    TicketDateTimeFormatModule,
    TicketHeaderCountModule,
    ImageCropperModule,
    TicketFeedbackComponentModule
  ],
  providers: [NgxImageCompressService,
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class EngineerModule { }
