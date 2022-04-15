import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Login } from 'src/app/services/login.mudule';
import { environment } from 'src/environments/environment';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { GenericService } from 'src/app/services/generic.service';
import { Smtpsetting } from 'src/app/services/genicprofile.module';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';

@Component({
  selector: 'app-allow-permissions',
  templateUrl: './allow-permissions.component.html',
  styles: []
})
export class AllowPermissionsComponent implements OnInit, AfterViewInit {
  isEmailValid:boolean = true;
  isMobileValid:boolean = true;
  isNameValid: boolean = true;
  localPrependUrl: string;
  fileToUpload: File = null;
  tempLogoPath:  string = '';
  currentUser: Login;
  loader: boolean = false;
  smtpdata: any = [];
  constructor(public AuthService: AuthenticationService,
              public docservice: DocumentUploadService,
              public smtpservice: GenicProfileService,
              public genericservice: GenericService,
              public toastr: ToastrService,
              public router: Router) {
      this.AuthService.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
     }

  ngOnInit() {
      if (this.AuthService.PermissionData.Id === 0 ||
        this.AuthService.PermissionData.Id === null ||
        this.AuthService.PermissionData.Id === undefined) {
        this.router.navigate(['/settings/user-permissions']);
      }
      this.genericservice.refreshSMTPList(this.currentUser.Token).subscribe( res => {
        if (res) {
          const templist = res as any;
          this.smtpdata = templist.result as Smtpsetting[];
          this.AuthService.localLoginData.SMTPId = this.AuthService.localLoginData.SMTPId;
        }}, error =>  console.log(error));
      this.AuthService.localLoginData.Logo64Bit = '';
      setTimeout(() => {
       this.locateUserImage();
     }, 1000);
  }
ngAfterViewInit() {
  // setTimeout(() => {
  //  this.AuthService.localLoginData.SMTPId = Number(this.AuthService.localLoginData.SMTPId);
  // }, 3000);
}
locateUserImage() {
  if (this.AuthService.localLoginData.Logo === '' || this.AuthService.localLoginData.Logo === null) {
    this.tempLogoPath = 'assets/users/user.png';
  } else {
  this.tempLogoPath =  this.AuthService.localLoginData.Logo;
}

}
  savePermissions() {
    this.AuthService.updateUserPermission(this.currentUser.Token, 'user').subscribe(
      res => { const tempData: any = res;
               if (tempData.Message === 'success') {
                  this.toastr.success('', 'Permission updated successfully.');
                  this.router.navigate(['/settings/user-permissions']);
                }
               if (tempData.Message === 'failure') {
                  this.toastr.error(tempData.MessageDescription);
                }
      }
    );
  }

  picked(event) {
    var pattern = /image-*/;
    let Files = event.target.files;
    let file = Files.item(0);
    if (!file.type.match(pattern)) {
      this.toastr.warning('', 'Invalid image format!'); return false;
    }
    let filExt = file.name.split('.');
    let Ext1 = filExt[1];
    if (Ext1 === 'png' || Ext1 === 'jpg' || Ext1 === 'jpeg') {
      this.loader = true;
      let t = this.currentUser.Token;
      let moduleid = this.AuthService.localLoginData.Id;
      let remark = '';
      let type = 'user';
        this.docservice.uploadDocument(t , type, moduleid, '', remark, file).subscribe( res => {
          if (res) { const response = res as any;
                    if (response.Message === 'success') {
                      this.toastr.info('upload successfully');
                      this.AuthService.localLoginData.Logo = response.MessageDescription;
                      this.tempLogoPath =  response.MessageDescription;
                      this.loader = false;
                      }
                      if (response.Message === 'failure') {
                        this.toastr.warning(response.MessageDescription);
                        this.loader = false;
                      }
        }}, error =>  console.log(error));
      this.loader = false;
    } else {
      this.toastr.warning('Invalid file format, select png, jpg, jpeg!');
      this.loader = false;
      return false;
    }
  }
  // picked(file: FileList) {
  //   this.fileToUpload = file.item(0);
  //   let filExt = this.fileToUpload.name.split('.');
  //   let Ext1 = filExt[1];
  //   if (Ext1 === 'png' || Ext1 === 'jpg' || Ext1 === 'jpeg') {
  //     var reader = new FileReader();
  //     reader.onload = (event: any) => {
  //       this.tempLogoPath = event.target.result;
  //       this.AuthService.localLoginData.Logo64Bit = this.tempLogoPath.split(',')[1];
  //     };
  //     reader.readAsDataURL(this.fileToUpload);
  //   } else {
  //     this.toastr.warning('', 'Invalid file format, select png, jpg, jpeg!');
  //     return false;
  //   }
  // }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  }
updateUserProfile() {
    this.AuthService.localLoginData.SMTPId = Number(this.AuthService.localLoginData.SMTPId);
    this.AuthService.localLoginData.Password = '********';
    this.AuthService.updateUserProfile(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                if (response.Message === 'success') {
                  this.toastr.success(response.MessageDescription);
                  this.router.navigate(['/settings/user-permissions']);
                  }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }

  backtoUserList() {
    this.router.navigate(['/settings/user-permissions']);
  }
}
