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

import { InvoiceAddComponent } from './invoice-add/invoice-add.component';
import { InvoiceChangeStatusPopupComponent } from './invoice-change-status-popup/invoice-change-status-popup.component';
import { InvoiceCustomerPopupComponent } from './invoice-customer-popup/invoice-customer-popup.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoicePaymentAndReceiptComponent } from './invoice-payment-and-receipt/invoice-payment-and-receipt.component';
import { InvoicePlaneInvoiceCustomerPropertyPopupComponent } from './invoice-plane-invoice-customer-property-popup/invoice-plane-invoice-customer-property-popup.component';
import { InvoiceTicketPopupComponent } from './invoice-ticket-popup/invoice-ticket-popup.component';
import { InvoicesComponent } from './invoices.component';
import { ReminderModuleModule } from 'src/app/generic-utils/Reminder-Module/ReminderModule.module';
import { TicketIconAttachmentModule } from 'src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module';
const routes: Routes = [
  { path: '', component: InvoicesComponent,
            children: [
              { path: '', component: InvoiceListComponent },
              { path: 'invoice-add', component: InvoiceAddComponent },
              { path: 'invoice-edit', component: InvoiceAddComponent },
              { path: 'invoice-details', component: InvoiceDetailsComponent },
              { path: 'invoice-add-customer', component: InvoiceCustomerPopupComponent },
              { path: 'invoice-add-ticket', component: InvoiceTicketPopupComponent },
              { path: 'invoice-add-Plane-Invoice-cust-property', component: InvoicePlaneInvoiceCustomerPropertyPopupComponent },
              { path: 'invoice-add-plane-url', component: InvoiceAddComponent },
              { path: 'invoice-change-status', component: InvoiceChangeStatusPopupComponent },
              { path: 'invoice-from-quote', component: InvoiceAddComponent },
              { path: 'invoice-from-ticket', component: InvoiceAddComponent },
              { path: 'invoice-payment-and-receipt', component: InvoicePaymentAndReceiptComponent },
            ]},
];
@NgModule({
  declarations: [
    InvoicesComponent,
    InvoiceListComponent,
    InvoiceAddComponent,
    InvoiceDetailsComponent,
    InvoiceCustomerPopupComponent,
    InvoiceTicketPopupComponent,
    InvoicePlaneInvoiceCustomerPropertyPopupComponent,
    InvoiceChangeStatusPopupComponent,
    InvoicePaymentAndReceiptComponent
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
    TicketIconAttachmentModule,
    NgMultiSelectDropDownModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    RouterModule.forChild(routes),
    ReminderModuleModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class InvoicesModule { }
