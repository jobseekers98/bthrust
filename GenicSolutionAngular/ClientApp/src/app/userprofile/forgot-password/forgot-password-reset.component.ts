import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services';
import { MatPasswordStrengthComponent } from '@angular-material-extensions/password-strength';
import { Title } from '@angular/platform-browser';
@Component({
  templateUrl: './forgot-password-reset.component.html',
  styles: []
})
export class ForgotPasswordResetComponent implements OnInit {
  @ViewChild('passwordComponentWithConfirmation', {static: true})
  passwordComponentWithConfirmation: MatPasswordStrengthComponent;
  loading = false;
  submitted = false;
  IsDone: boolean;
  IsValid: boolean;
  returnUrl: string;
  error = '';
  showDetails3: boolean;
  constructor(
    private titleService: Title,
    public service: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) { this.IsValid = true; this.IsDone = false; }

  ngOnInit(): void {
    if (this.service.forgetpassword.UserName.length === 0) { this.router.navigate(['/auth']); }
    this.titleService.setTitle('Forgot Password - Reset | Genic Solution');
    this.passwordComponentWithConfirmation.passwordFormControl.valueChanges.subscribe(() => {
      console.log('passwordFormControl form control = ', this.passwordComponentWithConfirmation.passwordFormControl);
    });

    this.passwordComponentWithConfirmation.passwordConfirmationFormControl.valueChanges.subscribe(() => {
      console.log('passwordFormControl form control = ', this.passwordComponentWithConfirmation.passwordConfirmationFormControl);
    });
    this.service.forgetpassword.NewPassword = '';
    this.service.forgetpassword.OldPassword = '';
    this.service.forgetpassword.ConfirmPassword = '';
  }
  onSubmit() {
    this.IsValid = true;
    this.submitted = true;
    this.loading = true;
    this.error = '';

    if (this.service.forgetpassword.NewPassword.length === 0) {
      this.toastr.warning('Warning', 'Please enter New Password');
      this.IsValid = false;
      this.loading = false;
      return false;
    }
    if (this.service.forgetpassword.ConfirmPassword.length === 0) {
      this.toastr.warning('Warning', 'Please enter Confirm Password');
      this.IsValid = false;
      this.loading = false;
      return false;
    }
    if (this.service.forgetpassword.NewPassword !== this.service.forgetpassword.ConfirmPassword) {
      this.toastr.warning('Warning', 'Both password not match');
      this.IsValid = false;
      this.loading = false;
      return false;
    }
    this.service.forgetpassword.OTP = '1234';
    this.service.ForgotPasswordStep3().subscribe( res => {
      if (res) { const msg = res as any;
                 if (msg.Message === 'success') {
                  this.toastr.success('success', msg.MessageDescription);
                  this.loading = false;
                  this.IsValid = false;
                  this.IsDone = true;
                 }
                 if (msg.Message === 'failure') {
                   this.toastr.warning('Warning', msg.MessageDescription);
                   this.loading = false;
                   this.IsValid = false;
                   }
      }}, error =>  console.log(error));
  }
  onStrengthChanged(strength: number) {
    // console.log('password strength = ', strength);
  }
}
