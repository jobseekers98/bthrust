import { NgModule } from '@angular/core';
import { ApplicationComponent } from './application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { PopoverModule } from 'ngx-smart-popover';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SignaturePadModule } from 'angular2-signaturepad';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { ChartModule } from 'angular-highcharts';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgxPrintModule } from 'ngx-print';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { DataTablesModule } from 'angular-datatables';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { AudioRecordingService } from '../services/audio-recording.service';
import { NavAsideComponent } from '../layout/nav-aside/nav-aside.component';
import { NavHeaderComponent } from '../layout/nav-header/nav-header.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DownloadService } from '../services/downloads.service';
import { AuthGuard } from '../auth';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard],	component: ApplicationComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../application/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'services', loadChildren: () => import('../application/service/service.module').then(m => m.ServiceModule) },
      { path: 'customer', loadChildren: () => import('../application/customer/customer.module').then(m => m.CustomerModule) },
      { path: 'customers', loadChildren: () => import('../application/customers/customers.module').then(m => m.CustomersModule) },
      { path: 'properties', loadChildren: () => import('../application/properties/properties.module').then(m => m.PropertiesModule) },
      { path: 'calendar', loadChildren: () => import('../application/calendar/calendar.module').then(m => m.CalendarTicketModule) },
      { path: 'engineer', loadChildren: () => import('../application/engineer/engineer.module').then(m => m.EngineerModule) },
      { path: 'engineers', loadChildren: () => import('../application/engineers/engineers.module').then(m => m.EngineersModule) },
      { path: 'products', loadChildren: () => import('../application/products/products.module').then(m => m.ProductsModule) },
      { path: 'warranty', loadChildren: () => import('../application/warranty/warranty.module').then(m => m.WarrantyModule) },
      { path: 'tickets', loadChildren: () => import('../application/tickets/tickets.module').then(m => m.TicketsModule) },
      { path: 'closer-update-popup', loadChildren: () => import('../application/closer-update-popup/closer-update-popup.module').then(m => m.CloserUpdatePopupModule) },
      { path: 'ticket-reschedule-popup', loadChildren: () => import('../application/ticket-reschedule-popup/ticket-reschedule-pupup.module').then(m => m.TicketReschedulePopupModule) },
      { path: 'ticket-engineer', loadChildren: () => import('../application/ticket-engineer/ticket-engineer.module').then(m => m.TicketEngineerModule) },
      { path: 'password-change', loadChildren: () => import('../application/profile/profiles.module').then(m => m.ProfilesModule) },
      { path: 'reports', loadChildren: () => import('../application/reports/reports.module').then(m => m.ReportsModule) },
      { path: 'reminders', loadChildren: () => import('../application/reminders/reminders.module').then(m => m.RemindersModule) },
      { path: 'invoices', loadChildren: () => import('../application/invoices/invoices.module').then(m => m.InvoicesModule) },
      { path: 'quotes', loadChildren: () => import('../application/quotes/quotes.module').then(m => m.QuotesModule) },
      { path: 'settings', loadChildren: () => import('../application/settings/settings.module').then(m => m.SettingsModule) }
    ]
  }
];
@NgModule({
  declarations: [
    ApplicationComponent,
    NavAsideComponent,
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule ,
    NgbModule,
    PopoverModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleapiKey }),
    SweetAlert2Module.forRoot(),
    SignaturePadModule,
    CalendarModule,
    SchedulerModule.forRoot(),
    ChartModule,
    LoadingBarHttpClientModule,
    NgxPrintModule,
    NgxDocViewerModule,
    DataTablesModule,
    SelectDropDownModule,
    FullCalendarModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  entryComponents: [],
  providers: [
            [ {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
              {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
            ],
              NgbCarouselConfig,
              DownloadService,
              AudioRecordingService
            ],
})
export class ApplicationModule { }
