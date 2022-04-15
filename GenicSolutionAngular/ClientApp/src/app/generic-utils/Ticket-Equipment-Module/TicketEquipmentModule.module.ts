import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketEquipmentModuleComponent } from './TicketEquipmentModule.component';
import { LSelect2Module } from 'ngx-select2';

@NgModule({
  imports: [CommonModule, FormsModule, LSelect2Module],
  declarations: [TicketEquipmentModuleComponent],
  exports: [TicketEquipmentModuleComponent]
})
export class TicketEquipmentModuleModule {}
