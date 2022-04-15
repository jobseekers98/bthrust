import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services';
import * as EmailValidator from 'email-validator';
import { Title } from '@angular/platform-browser';
@Component({
  templateUrl: './forgot-password-otp.component.html',
  styles: []
})
export class ForgotPasswordOtpComponent implements OnInit {
  loading = false;
  submitted = false;
  IsValid: boolean;
  returnUrl: string;
  error = '';
  constructor(
    private titleService: Title,
    public service: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) { this.IsValid = true; }

  ngOnInit(): void {
    if (this.service.forgetpassword.UserName.length === 0) { this.router.navigate(['/auth']); }
    this.titleService.setTitle('Forgot Password - OTP | Genic Solution');
  }
  onSubmit() {
    this.IsValid = true;
    this.submitted = true;
    this.loading = true;
    this.error = '';

    if (this.service.forgetpassword.OTP === undefined || this.service.forgetpassword.OTP === null) {
      this.toastr.warning('Warning', 'Please enter an OTP');
      this.IsValid = false;
      this.loading = false;
      return false;
    }
    if (this.service.forgetpassword.OTP.toString().length !== 4) {
      this.toastr.warning('Warning', 'Please enter an valid OTP');
      this.IsValid = false;
      this.loading = false;
      return false;
    }
    this.returnUrl = '/auth/users/forgot-password-reset';
    this.service.forgetpassword.NewPassword = '********';
    this.service.forgetpassword.OldPassword = '********';
    this.service.ForgotPasswordStep2().subscribe( res => {
      if (res) { const msg = res as any;
                 if (msg.Message === 'success') {
                  this.toastr.success('success', msg.MessageDescription);
                  setTimeout(() => { this.router.navigate([this.returnUrl]); }, 500);
                  this.loading = false;
                  this.IsValid = false;
                 }
                 if (msg.Message === 'failure') {
                   this.toastr.warning('Warning', msg.MessageDescription);
                   this.loading = false;
                   this.IsValid = false;
                   }
      }}, error =>  console.log(error));
  }
}
