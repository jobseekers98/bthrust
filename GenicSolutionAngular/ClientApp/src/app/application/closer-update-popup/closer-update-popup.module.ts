import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CloserUpdatePopupComponent } from './closer-update-popup.component';
import { TicketIconAttachmentModule } from 'src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module';
import { SignaturePadModule } from 'angular2-signaturepad';
@NgModule({
  declarations: [CloserUpdatePopupComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TicketIconAttachmentModule,
    SignaturePadModule
  ],
  exports: [
  ],
})
export class CloserUpdatePopupModule { }
