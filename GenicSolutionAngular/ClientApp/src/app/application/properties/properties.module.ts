import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LSelect2Module } from 'ngx-select2';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AgmCoreModule } from '@agm/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PropertyAddComponent } from './property-add/property-add.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { propertiesComponent } from './properties.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyPopupComponent } from './property-popup/property-popup.component';
import { TicketHistoryComponent } from './ticket-history/ticket-history.component';
import { TicketHistoryDetailsComponent } from './ticket-history-details/ticket-history-details.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { TicketStatusComponentModule } from 'src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module';
import { TicketTeamListModule } from 'src/app/generic-utils/Ticket-Team-List/TicketTeamList.module';
import { TicketDateTimeFormatModule } from 'src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module';
import { TicketIconAttachmentModule } from 'src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module';

const routes: Routes = [
                        { path: '', component: propertiesComponent,
                                  children: [
                                    { path: '', component: PropertyListComponent },
                                    { path: 'property-add', component: PropertyAddComponent },
                                    { path: 'property-edit', component: PropertyAddComponent },
                                    { path: 'property-popup', component: PropertyPopupComponent },
                                    { path: 'property-details', component: PropertyDetailsComponent },
                                    { path: 'ticket-history-property-wise', component: TicketHistoryComponent },
                                    { path: 'ticket-history-view-details/:Id', component: TicketHistoryDetailsComponent }
                                  ]},
                      ];
@NgModule({
  declarations: [
    propertiesComponent,
    PropertyListComponent,
    PropertyAddComponent,
    PropertyDetailsComponent,
    PropertyPopupComponent,
    TicketHistoryComponent,
    TicketHistoryDetailsComponent],
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
    LSelect2Module,
    SelectDropDownModule,
    ReactiveFormsModule,
    AgmCoreModule,
    GooglePlaceModule,
    RouterModule.forChild(routes),
    TicketStatusComponentModule,
    TicketIconAttachmentModule,
    TicketTeamListModule,
    TicketDateTimeFormatModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class PropertiesModule { }
