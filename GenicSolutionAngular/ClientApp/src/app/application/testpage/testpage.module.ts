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
import { TestpageComponent } from './testpage.component';
import { LSelect2Module } from 'ngx-select2';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
const routes: Routes = [
  { path: '',	component: TestpageComponent},
  { path: 'test', component: TestpageComponent},
];
@NgModule({
  declarations: [TestpageComponent],
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
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    LSelect2Module,
    SelectDropDownModule,
    NgMultiSelectDropDownModule,
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class TestPageModule { }
