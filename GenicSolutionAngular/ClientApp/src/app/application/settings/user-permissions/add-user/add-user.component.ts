import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Smtpsetting } from 'src/app/services/genicprofile.module';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent implements OnInit {
  isEmailValid:boolean = true;
  isMobileValid:boolean = true;
  isNameValid: boolean = true;
  localPrependUrl: string;
  fileToUpload: File = null;
  tempLogoPath:  string = '';
  currentUser: Login;
  isLimitOuver: boolean = false;
  msgh1: string;
  msgh2: string;
  constructor(public AuthService: AuthenticationService,
              public smtpservice: GenicProfileService,
              public genericservice: GenericService,
              public toastr: ToastrService,
              public router: Router) {
      this.AuthService.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
     }

  ngOnInit() {
    this.genericservice.refreshSMTPList(this.currentUser.Token).subscribe( res => {
      if (res) {
        const templist = res as any;
        this.genericservice.SmtpsettingList = templist.result as Smtpsetting[];
      }}, error =>  console.log(error));
    this.tempLogoPath = 'assets/users/user.png';
    setTimeout(() => {
      this.smtpservice.getGenicProfile(this.currentUser.Token);
      this.smtpservice.checkUserLimit(this.currentUser.Token, 'subadmin').subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                    }
                    if (response.Message === 'warning') {
                        this.isLimitOuver = true;
                        this.msgh1 = response.h1;
                        this.msgh2 = response.h2;
                      }
        }}, error =>  console.log(error));
    }, 2000);
  }
  picked(file: FileList) {
    this.fileToUpload = file.item(0);
    const filExt = this.fileToUpload.name.split('.');
    const Ext1 = filExt[1];
    if (Ext1 === 'png' || Ext1 === 'jpg' || Ext1 === 'jpeg') {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.tempLogoPath = event.target.result;
        this.AuthService.localLoginData.Logo64Bit = this.tempLogoPath.split(',')[1];
      };
      reader.readAsDataURL(this.fileToUpload);
    } else {
      this.toastr.warning('', 'Invalid file format, select png, jpg, jpeg!');
      return false;
    }
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  }
  AddNewUserProfile() {
    if (this.AuthService.localLoginData.FullName === '' || this.AuthService.localLoginData.FullName === undefined) {
      this.isNameValid = false;
      this.toastr.warning('', 'Name is required!');
      return false;
    }
    if (this.AuthService.localLoginData.Email === '' || this.AuthService.localLoginData.Email === undefined) {
      this.isEmailValid = false;
      this.toastr.warning('', 'Email id is required!');
      return false;
    }
    this.AuthService.localLoginData.UserName = 'test';
    this.AuthService.localLoginData.Password = 'test';
    this.AuthService.localLoginData.SMTPId = Number(this.AuthService.localLoginData.SMTPId);
    this.AuthService.AddNewUserProfile(this.currentUser.Token)
    .subscribe( res => { const tempData: any = res;
                         if (tempData.Message === 'success') {
                            setTimeout(() => {
                              this.toastr.success('', 'User Created Successfully!');
                              this.AuthService.localLoginData = tempData.result;
                              this.AuthService.PermissionData = tempData.result.Permissions;
                              this.router.navigate(['/settings/user-permissions/allow-user-permissions']);
                            }, 1000);
                          }
                         if (tempData.Message === 'failure') {
                            setTimeout(() => {
                              this.toastr.warning(tempData.MessageDescription);
                            }, 1000);
                          }
                        }, error =>  console.log(error));

  }
  backtoUserList() {
    this.router.navigate(['//settings/user-permissions']);
  }
}
