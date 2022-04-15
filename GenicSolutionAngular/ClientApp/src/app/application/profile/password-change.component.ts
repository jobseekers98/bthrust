import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Login, AuthenticationService } from 'src/app/services';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styles: []
})
export class PasswordChangeComponent implements OnInit {
  currentUser: Login;
  localPrependUrl: string;
  showDetails: boolean;
  isValidChangePassword = true;
  isValidOldChangePassword = true;
  isValidNewChangePassword = true;
  isValidConfirmChangePassword = true;
  showDetails3: boolean;
  constructor(
    public service: LoginService,
    public loginservice: AuthenticationService,
    private toastr: ToastrService,
    public genicprofileservice: GenicProfileService) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
   }

  ngOnInit() {
  }
  onsubmitPasswordchange() {
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.isValidChangePassword = true;
    this.isValidOldChangePassword = true;
    this.isValidNewChangePassword = true;
    this.isValidConfirmChangePassword = true;
    this.service.forgetpassword.UserName = this.currentUser.UserName;
    if (this.service.forgetpassword.OldPassword === '') {
      this.isValidChangePassword = false;
      this.isValidOldChangePassword = false;
      this.toastr.warning('warning', 'Please enter old password');
      return false;
    }
    if (this.service.forgetpassword.NewPassword === '') {
      this.isValidChangePassword = false;
      this.isValidNewChangePassword = false;
      this.toastr.warning('warning', 'Please enter new password');
      return false;
    }
    if (this.service.forgetpassword.ConfirmPassword === '') {
      this.isValidChangePassword = false;
      this.isValidConfirmChangePassword = false;
      this.toastr.warning('warning', 'Please enter verify password');
      return false;
    }
    if (this.service.forgetpassword.ConfirmPassword.length < 6) {
      this.isValidChangePassword = false;
      this.isValidConfirmChangePassword = false;
      this.toastr.warning('warning', 'Minimum 6-to-16 characters Password length Required');
      return false;
    }
    if (this.service.forgetpassword.NewPassword !== this.service.forgetpassword.ConfirmPassword) {
      this.isValidChangePassword = false;
      this.isValidNewChangePassword = false;
      this.isValidConfirmChangePassword = false;
      this.toastr.warning('warning', 'Both password not match');
      return false;
    }
    // this.service.putPasswordChange(this.currentUser.Token).subscribe(
    //   res => {
    //     if (res.status === 202) {
    //       this.toastr.success('success', 'update successfully');
    //       this.service.forgetpassword.OldPassword = '';
    //       this.service.forgetpassword.NewPassword = '';
    //       this.service.forgetpassword.ConfirmPassword = '';
    //       Swal.fire({
    //         title: 'Your password update successfully!',
    //         text: 'Use new password when you login next time.',
    //         type: 'info'
    //       });
    //     } else {
    //       const r: any = res;
    //       this.toastr.warning('warning', r.body.toString());
    //     }
    //   },
    //   err => {
    //     const r: any = err;
    //     this.toastr.error('error', r.body.toString());
    //     console.log(err.error);
    //   });
    this.service.putPasswordChange(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                if (response.Message === 'success') {
                  this.toastr.success(response.MessageDescription);
                  this.service.forgetpassword.OldPassword = '';
                  this.service.forgetpassword.NewPassword = '';
                  this.service.forgetpassword.ConfirmPassword = '';
                  setTimeout(() => {
                    window.history.back();
                  }, 2000);
                  }
                if (response.Message === 'failure') {
                  this.toastr.warning(response.MessageDescription);
                }
      }}, error =>  console.log(error));
  }
  onStrengthChanged(strength: number) {
   // console.log('password strength = ', strength);
  }
  onPasswordStrengShow() {
    if (this.showDetails) {
      this.showDetails = false;
    } else {
      this.showDetails = true;
    }
  }
}
