import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { ChartModule } from 'angular-highcharts';
import { TicketStatusComponentModule } from 'src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module';
import { TicketTeamListModule } from 'src/app/generic-utils/Ticket-Team-List/TicketTeamList.module';
import { TicketDateTimeFormatModule } from 'src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module';
import { TicketFeedbackComponentModule } from 'src/app/generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module';

const routes: Routes = [
  { path: '',	component: DashboardComponent},
  {	path: 'dashboard',	component: DashboardComponent }
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    ChartModule,
    RouterModule.forChild(routes),
    TicketStatusComponentModule,
    TicketTeamListModule,
    TicketDateTimeFormatModule,
    TicketFeedbackComponentModule
  ]
})
export class DashboardModule { }
