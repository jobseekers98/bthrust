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

import { ReportsComponent } from './reports.component';
import { ReportEngineersComponent } from './report-engineers/report-engineers.component';
import { ReportTicketComponent } from './tickets/report-ticket.component';
import { VisitsComponent } from './visits/visits.component';
import { TicketStatusComponentModule } from 'src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module';
import { ReportEngineerTimeSheetComponent } from './report-engineer-time-sheet/report-engineer-time-sheet.component';
import { ReportEngineerAttendanceComponent } from './report-engineer-attendance/report-engineer-attendance.component';
const routes: Routes = [
  { path: '', component: ReportsComponent,
            children: [
              { path: 'report-engineer-time-sheet', component: ReportEngineerTimeSheetComponent },
              { path: 'report-engineer-attendance', component: ReportEngineerAttendanceComponent },
              { path: 'report-engineers', component: ReportEngineersComponent },
              { path: 'report-ticket', component: ReportTicketComponent },
              { path: 'visits', component: VisitsComponent }
            ]},
];
@NgModule({
  declarations: [
    ReportsComponent,
    ReportEngineerTimeSheetComponent,
    ReportEngineerAttendanceComponent,
    ReportEngineersComponent,
    ReportTicketComponent,
    VisitsComponent],
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
    RouterModule.forChild(routes),
    TicketStatusComponentModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class ReportsModule { }
