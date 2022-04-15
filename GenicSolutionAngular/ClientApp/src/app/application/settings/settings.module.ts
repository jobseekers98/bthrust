import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileUploadModule } from 'ng2-file-upload';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { LSelect2Module } from 'ngx-select2';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { GeofencingListComponent } from './geofencing/geofencing-list.component';
import { GeofencingViewComponent } from './geofencing/geofencing-view.Component';
import { GeofencingComponent } from './geofencing/geofencing.component';
import { LeaveCalendarComponent } from './leave-calendar/leave-calendar.component';
import { AddTemplatesComponent } from './notifications/add-templates/add-templates.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TemplatesComponent } from './notifications/templates/templates.component';
import { SettingComponent } from './setting/setting.component';
import { SettingsComponent } from './settings.component';
import { TicketIssueTypeComponent } from './ticket-issue-type/ticket-issue-type.component';
import { AddUserComponent } from './user-permissions/add-user/add-user.component';
import { AllowPermissionsComponent } from './user-permissions/allow-permissions/allow-permissions.component';
import { UserListComponent } from './user-permissions/user-list.component';
import { CalendarModule } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DemoUtilsModule } from 'src/app/demo-utils/module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SmtpDetailsComponent } from './smtp-details/smtp-details.component';
import { LogComponent } from './log/log.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { TaxDetailsComponent } from './tax-details/tax-details.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { DriveDocsAllowComponent } from './drive-docs-allow/drive-docs-allow.component';
// import { LogComponent } from './log/log.component';

const routes: Routes = [
  { path: '', component: SettingsComponent,
            children: [
              { path: '', component: SettingComponent },
              { path: 'leave-calendar', component: LeaveCalendarComponent },
              { path: 'geofencing', component: GeofencingComponent },
              { path: 'geofencing-list', component: GeofencingListComponent },
              { path: 'geofencing-view', component: GeofencingViewComponent },
              { path: 'user-log', component: LogComponent },
              { path: 'user-permissions', component: UserListComponent },
              { path: 'genic-document-allow', component: DriveDocsAllowComponent },
              { path: 'user-permissions', children: [
                          { path: 'allow-user-permissions' , component: AllowPermissionsComponent },
                          { path: 'add-new-user' , component: AddUserComponent }] },
              { path: 'notifications', component: NotificationsComponent },
              { path: 'notifications', children: [
                        { path: 'templates' , component: TemplatesComponent },
                        { path: 'add-template' , component: AddTemplatesComponent },
                        { path: 'edit-template' , component: AddTemplatesComponent },
                          ]},
            ]},
];
@NgModule({
  declarations: [
    SettingsComponent,
    SettingComponent,
    BrandDetailsComponent,
    CategoryDetailsComponent,
    TicketIssueTypeComponent,
    TaxDetailsComponent,
    LogComponent,
    PaymentModeComponent,
    LeaveCalendarComponent,
    GeofencingComponent,
    GeofencingListComponent,
    GeofencingViewComponent,
    UserListComponent,
    AllowPermissionsComponent,
    AddUserComponent,
    NotificationsComponent,
    TemplatesComponent,
    AddTemplatesComponent,
    SmtpDetailsComponent,
    DriveDocsAllowComponent
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
    FileUploadModule,
    GooglePlaceModule,
    CalendarModule,
    SchedulerModule.forRoot(),
    FullCalendarModule,
    DemoUtilsModule,
    LSelect2Module,
    SelectDropDownModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AngularEditorModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class SettingsModule { }
