import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { PopoverModule } from 'ngx-smart-popover';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordOtpComponent } from './forgot-password/forgot-password-otp.component';
import { ForgotPasswordResetComponent } from './forgot-password/forgot-password-reset.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [
  { path: '', component: UserprofileComponent,
            children: [
              { path: 'forgot-password', component: ForgotPasswordComponent },
              { path: 'forgot-password-otp', component: ForgotPasswordOtpComponent },
              { path: 'forgot-password-reset', component: ForgotPasswordResetComponent }
            ]},
];
@NgModule({
  declarations: [
    UserprofileComponent,
    ForgotPasswordComponent,
    ForgotPasswordOtpComponent,
    ForgotPasswordResetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule ,
    NgbModule,
    PopoverModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    LoadingBarHttpClientModule,
    MatPasswordStrengthModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  entryComponents: []
})
export class UserProfileModule { }
