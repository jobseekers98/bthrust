import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services';
import * as EmailValidator from 'email-validator';
import { Title } from '@angular/platform-browser';
@Component({
  templateUrl: './forgot-password.component.html',
  styles: []
})
export class ForgotPasswordComponent implements OnInit {
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
    this.titleService.setTitle('Forgot Password | Genic Solution');
  }
  onSubmit() {
    this.IsValid = true;
    this.submitted = true;
    this.loading = true;
    this.error = '';

    if (this.service.forgetpassword.UserName === '') {
      this.toastr.warning('Warning', 'Please enter an email');
      this.IsValid = false;
      this.loading = false;
      return false;
    }
    if (!EmailValidator.validate(this.service.forgetpassword.UserName)) {
      this.toastr.warning('Warning', 'Please enter a valid email');
      this.IsValid = false;
      this.loading = false;
      return false;
    }
    this.returnUrl = '/auth/users/forgot-password-otp';
    this.service.forgetpassword.OTP = null;
    this.service.forgetpassword.NewPassword = '********';
    this.service.forgetpassword.OldPassword = '********';
    this.service.ForgotPasswordStep1().subscribe( res => {
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
