import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { ReminderComponent } from './reminder/reminder.component';
import { RemindersComponent } from './reminders.component';

const routes: Routes = [
  { path: '', component: RemindersComponent,
            children: [
              { path: 'reminder', component: ReminderComponent }
            ]},
];
@NgModule({
  declarations: [RemindersComponent,ReminderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleapiKey }),
    RouterModule.forChild(routes)
  ]
})
export class RemindersModule { }
