import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketIconAttachmentComponent } from './TicketIconAttachment.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TicketIconAttachmentComponent],
  exports: [TicketIconAttachmentComponent]
})
export class TicketIconAttachmentModule {}
