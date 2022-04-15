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
import { TicketAllocateListPopupComponent } from './ticket-allocate-list-popup/ticket-allocate-list-popup.component';
import { TicketContactpersonPopupComponent } from './ticket-contactperson-popup/ticket-contactperson-popup.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketCustomerPopupComponent } from './ticket-customer-popup/ticket-customer-popup.component';
import { TicketPropertyPopupComponent } from './ticket-property-popup/ticket-property-popup.component';
import { TicketUpdateStatusComponent } from './ticket-update-status/ticket-update-status.component';
import { TicketViewDetailComponent } from './ticket-view-detail/ticket-view-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketsComponent } from './tickets.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { LSelect2Module } from 'ngx-select2';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TicketStatusComponentModule } from 'src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module';
import { TicketIconAttachmentModule } from 'src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module';
import { TicketTeamListModule } from 'src/app/generic-utils/Ticket-Team-List/TicketTeamList.module';
import { TicketDateTimeFormatModule } from 'src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module';
import { ReminderModuleModule } from 'src/app/generic-utils/Reminder-Module/ReminderModule.module';
import { TicketEquipmentModuleModule } from 'src/app/generic-utils/Ticket-Equipment-Module/TicketEquipmentModule.module';
import { TicketFeedbackComponentModule } from 'src/app/generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module';

const routes: Routes = [
  { path: '', component: TicketsComponent,
            children: [
              { path: '', component: TicketListComponent },
              { path: 'ticket-create', component: TicketCreateComponent },
              { path: 'ticket-edit', component: TicketCreateComponent },
              { path: 'ticket-copy', component: TicketCreateComponent},
              { path: 'ticket-create-from-request', component: TicketCreateComponent },
              { path: 'ticket-customer-popup', component: TicketCustomerPopupComponent },
              { path: 'ticket-update-status', component: TicketUpdateStatusComponent },
              { path: 'ticket-property-popup', component: TicketPropertyPopupComponent },
              { path: 'ticket-create-from-quote', component: TicketCreateComponent },
              { path: 'ticket-view-detail', component: TicketViewDetailComponent },
              { path: 'ticket-allocate-list-popup', component: TicketAllocateListPopupComponent },
              { path: 'ticket-contact-person-popup', component: TicketContactpersonPopupComponent }
            ]},
];
@NgModule({
  declarations: [
    TicketsComponent,
    TicketListComponent,
    TicketCreateComponent,
    TicketCustomerPopupComponent,
    TicketUpdateStatusComponent,
    TicketPropertyPopupComponent,
    TicketViewDetailComponent,
    TicketAllocateListPopupComponent,
    TicketContactpersonPopupComponent],
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
    LSelect2Module,
    SelectDropDownModule,
    NgMultiSelectDropDownModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    RouterModule.forChild(routes),
    TicketStatusComponentModule,
    TicketIconAttachmentModule,
    TicketTeamListModule,
    TicketDateTimeFormatModule,
    ReminderModuleModule,
    TicketEquipmentModuleModule,
    TicketFeedbackComponentModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class TicketsModule { }
