import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerListComponent } from './customer-list/custome-lists.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { TicketStatusComponentModule } from 'src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module';
import { TicketTeamListModule } from 'src/app/generic-utils/Ticket-Team-List/TicketTeamList.module';
import { TicketDateTimeFormatModule } from 'src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { QuoteStatusComponentModule } from 'src/app/generic-utils/Quote-Status-Component/QuoteStatusComponent.module';
import { TicketFeedbackComponentModule } from 'src/app/generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module';
const routes: Routes = [
  { path: '', component: CustomersComponent,
            children: [
              { path: '', component: CustomerListComponent },
              { path: 'customer-add', component: CustomerAddComponent },
              { path: 'customer-edit/:Id', component: CustomerAddComponent },
              { path: 'customer-details/:Id', component: CustomerDetailsComponent }
            ]},
];
@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    SelectDropDownModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleapiKey }),
    RouterModule.forChild(routes),
    TicketStatusComponentModule,
    TicketTeamListModule,
    TicketDateTimeFormatModule,
    QuoteStatusComponentModule,
    TicketFeedbackComponentModule
  ]
})
export class CustomersModule { }
