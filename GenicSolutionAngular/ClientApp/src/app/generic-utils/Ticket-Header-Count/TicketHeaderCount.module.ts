import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketHeaderCountComponent } from './TicketHeaderCount.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TicketHeaderCountComponent],
  exports: [TicketHeaderCountComponent]
})
export class TicketHeaderCountModule {}
