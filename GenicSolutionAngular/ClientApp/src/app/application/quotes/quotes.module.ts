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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { QuoteAddComponent } from './quote-add/quote-add.component';
import { QuoteContactPersonPopupComponent } from './quote-contact-person-popup/quote-contact-person-popup.component';
import { QuoteCustomerPopupComponent } from './quote-customer-popup/quote-customer-popup.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteStatusPopupComponent } from './quote-status-popup/quote-status-popup.component';
import { QuotecustomerPropertyPopupComponent } from './quotecustomer-property-popup/quotecustomer-property-popup.component';
import { QuotesComponent } from './quotes.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignatureQuoteStatusPopupComponent } from './signature-quote-status-popup/signature-quote-status-popup.component';
import { QuoteStatusComponentModule } from 'src/app/generic-utils/Quote-Status-Component/QuoteStatusComponent.module';
import { ReminderModuleModule } from 'src/app/generic-utils/Reminder-Module/ReminderModule.module';
import { TicketIconAttachmentModule } from 'src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module';
const routes: Routes = [
  { path: '', component: QuotesComponent,
            children: [
              { path: '', component: QuoteListComponent },
              { path: 'quote-customer-popup', component: QuoteCustomerPopupComponent },
              { path: 'quote-Add', component: QuoteAddComponent },
              { path: 'quote-Edit', component: QuoteAddComponent },
              { path: 'quote-Details', component: QuoteDetailsComponent },
              { path: 'quote-customer-property-popup', component: QuotecustomerPropertyPopupComponent },
              { path: 'quote-Status', component: QuoteStatusPopupComponent },
              { path: 'quote-customer-contact-popup', component: QuoteContactPersonPopupComponent },
              { path: 'signature-quote-customer-contact-popup', component: SignatureQuoteStatusPopupComponent }
            ]},
];
@NgModule({
  declarations: [
    QuotesComponent,
    QuoteListComponent,
    QuoteCustomerPopupComponent,
    QuoteAddComponent,
    QuoteDetailsComponent,
    QuotecustomerPropertyPopupComponent,
    QuoteStatusPopupComponent,
    QuoteContactPersonPopupComponent,
    SignatureQuoteStatusPopupComponent
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
    LSelect2Module,
    SelectDropDownModule,
    NgMultiSelectDropDownModule,
    ReactiveFormsModule,
    TicketIconAttachmentModule,
    SignaturePadModule,
    GooglePlaceModule,
    RouterModule.forChild(routes),
    ReminderModuleModule,
    QuoteStatusComponentModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class QuotesModule { }
