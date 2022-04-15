import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CalendarComponent } from './calendar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MonthTicketComponent } from './month-ticket/month-ticket.component';
import { MonthResourceComponent } from './month-resource/month-resource.component';
import { MapComponent } from './map/map.component';
import { NgbDateAdapter, NgbModule, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from 'src/app/demo-utils/module';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { LSelect2Module } from 'ngx-select2';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { TicketStatusComponentModule } from 'src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module';
const routes: Routes = [
  { path: '', component: CalendarComponent,
            children: [
              { path: 'month-tickets', component: MonthTicketComponent },
              { path: 'month-resource', component: MonthResourceComponent },
              { path: 'map', component: MapComponent }
            ]},
];
@NgModule({
  declarations: [
    CalendarComponent,
    MonthTicketComponent,
    MonthResourceComponent,
    MapComponent],
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
    ReactiveFormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleapiKey }),
    RouterModule.forChild(routes),
    CalendarModule,
    SchedulerModule.forRoot(),
    FullCalendarModule,
    DemoUtilsModule,
    LSelect2Module,
    SelectDropDownModule,
    TicketStatusComponentModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers:  [
                { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
                { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
              ],
})
export class CalendarTicketModule { }
