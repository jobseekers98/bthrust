import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketTeamListComponent } from './TicketTeamList.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TicketTeamListComponent],
  exports: [TicketTeamListComponent]
})
export class TicketTeamListModule {}
