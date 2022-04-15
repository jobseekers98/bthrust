import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketDateTimeFormatComponent } from './TicketDateTimeFormat.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TicketDateTimeFormatComponent],
  exports: [TicketDateTimeFormatComponent]
})
export class TicketDateTimeFormatModule {}
