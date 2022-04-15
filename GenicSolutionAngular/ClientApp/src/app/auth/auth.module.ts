import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FromDriveComponent } from './from-drive.component';
import { CustomerQuoteForSignatureComponent } from './customer-quote-for-signature.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { CustomerTicketFeedbackComponent } from './customer-ticket-feedback.component';
import { TicketFeedbackComponentModule } from '../generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module';

const routes: Routes = [
                        { path: '',	component: AuthComponent }, 
                        { path: 'from-drive',	component: FromDriveComponent },
                        { path: 'customer-quote-for-signature', component: CustomerQuoteForSignatureComponent },
                        { path: 'customer-ticket-feedback', component: CustomerTicketFeedbackComponent },
                        
                      ];
@NgModule({
  declarations: [AuthComponent, FromDriveComponent, CustomerQuoteForSignatureComponent, CustomerTicketFeedbackComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignaturePadModule,
    TicketFeedbackComponentModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
