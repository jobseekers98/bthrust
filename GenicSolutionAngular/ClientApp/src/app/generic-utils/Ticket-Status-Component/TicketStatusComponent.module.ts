import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketStatusComponent } from './TicketStatusComponent.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TicketStatusComponent],
  exports: [TicketStatusComponent]
})
export class TicketStatusComponentModule {}
