import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ColorSketchModule } from 'ngx-color/sketch';
import { environment } from 'src/environments/environment';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { EngineerDetailsComponent } from './engineer-details/engineer-details.component';
import { EngineersComponent } from './engineers.component';
import { TicketStatusComponentModule } from 'src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module';
import { TicketTeamListModule } from 'src/app/generic-utils/Ticket-Team-List/TicketTeamList.module';
import { TicketDateTimeFormatModule } from 'src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module';
import { EngineerAddComponent } from './engineer-add/engineer-add.component';
const routes: Routes = [
  { path: '', component: EngineersComponent,
            children: [
              { path: '', component: EngineerListComponent },
              { path: 'engineer-add', component: EngineerAddComponent },
              { path: 'engineer-edit/:Id', component: EngineerAddComponent },
              { path: 'engineer-details/:Id', component: EngineerDetailsComponent }
            ]},
];
@NgModule({
  declarations: [
    EngineersComponent,
    EngineerListComponent,
    EngineerAddComponent,
    EngineerDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    ColorSketchModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleapiKey }),
    RouterModule.forChild(routes),
    TicketStatusComponentModule,
    TicketTeamListModule,
    TicketDateTimeFormatModule
  ]
})
export class EngineersModule { }
