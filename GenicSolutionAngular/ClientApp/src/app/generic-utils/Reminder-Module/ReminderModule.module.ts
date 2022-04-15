import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReminderModuleComponent } from './ReminderModule.component';
import { NgbDateAdapter, NgbModule, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule],
  declarations: [ReminderModuleComponent],
  exports: [ReminderModuleComponent],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
  ],
})
export class ReminderModuleModule {}
