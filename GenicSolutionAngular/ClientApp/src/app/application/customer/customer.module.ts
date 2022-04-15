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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ChartModule } from 'angular-highcharts';
import { DemoUtilsModule } from 'src/app/demo-utils/module';
import { CalendarModule } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { NgxImageCompressService } from 'ngx-image-compress';
import { TicketStatusComponentModule } from 'src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module';
import { TicketIconAttachmentModule } from 'src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module';
import { TicketTeamListModule } from 'src/app/generic-utils/Ticket-Team-List/TicketTeamList.module';
import { TicketDateTimeFormatModule } from 'src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerComponent } from './customer.component';
import { CustomerTicketComponent } from './customer-ticket/customer-ticket.component';
import { TicketHeaderCountModule } from 'src/app/generic-utils/Ticket-Header-Count/TicketHeaderCount.module';
import { CustomerTicketViewDetailsComponent } from './customer-ticket-view-details/customer-ticket-view-details.component';
import { CustomerDefectTicketComponent } from './customer-defect-ticket/customer-defect-ticket.component';
import { CustomerQuoteListComponent } from './customer-quote/customer-quote-list/customer-quote-list.component';
import { CustomerQuoteDetailsComponent } from './customer-quote/customer-quote-details/customer-quote-details.component';
import { CustomerQuoteStatusPopupComponent } from './customer-quote/customer-quote-status-popup/customer-quote-status-popup.component';
import { QuoteStatusComponentModule } from 'src/app/generic-utils/Quote-Status-Component/QuoteStatusComponent.module';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { TicketFeedbackComponentModule } from 'src/app/generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module';
const routes: Routes = [
  { path: '', component: CustomerComponent,
    children: [
      { path: 'customer-profile', component: CustomerProfileComponent },
      { path: 'customer-dashboard', component: CustomerDashboardComponent },
      { path: 'customer-open-tickets', component: CustomerTicketComponent },
      { path: 'customer-today-new-tickets', component: CustomerTicketComponent },
      { path: 'customer-today-closed-tickets', component: CustomerTicketComponent },
      { path: 'customer-overdue-tickets', component: CustomerTicketComponent },
      { path: 'customer-upcoming-tickets', component: CustomerTicketComponent },
      { path: 'customer-tickets', component: CustomerTicketComponent },
      { path: 'customer-tickets', children: [{ path: 'custoner-ticket-view-details', component: CustomerTicketViewDetailsComponent }]},
      { path: 'customer-new-or-defect-ticket', component: CustomerDefectTicketComponent },
      { path: 'customer-quote', component: CustomerQuoteListComponent },
      { path: 'customer-quote-Details', component: CustomerQuoteDetailsComponent },
      { path: 'customer-quote-Status', component: CustomerQuoteStatusPopupComponent },
    ]},
];
@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDashboardComponent,
    CustomerTicketComponent,
    CustomerTicketViewDetailsComponent,
    CustomerDefectTicketComponent,
    CustomerProfileComponent,
    CustomerQuoteListComponent,
    CustomerQuoteDetailsComponent,
    CustomerQuoteStatusPopupComponent
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
    RouterModule.forChild(routes),
    TicketStatusComponentModule,
    TicketIconAttachmentModule,
    TicketTeamListModule,
    TicketDateTimeFormatModule,
    TicketHeaderCountModule,
    QuoteStatusComponentModule,
    TicketFeedbackComponentModule
  ],
  providers: [NgxImageCompressService,
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
  ]
})
export class CustomerModule { }
