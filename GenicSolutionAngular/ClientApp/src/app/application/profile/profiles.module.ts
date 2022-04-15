import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LSelect2Module } from 'ngx-select2';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PasswordChangeComponent } from './password-change.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
const routes: Routes = [
  { path: '',	component: PasswordChangeComponent},
  { path: 'password-change', component: PasswordChangeComponent},
];
@NgModule({
  declarations: [PasswordChangeComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    NgbModule,
    LSelect2Module,
    MatPasswordStrengthModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgMultiSelectDropDownModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class ProfilesModule { }
