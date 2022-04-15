import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketFeedbackComponent } from './TicketFeedbackComponent.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TicketFeedbackComponent],
  exports: [TicketFeedbackComponent]
})
export class TicketFeedbackComponentModule {}
