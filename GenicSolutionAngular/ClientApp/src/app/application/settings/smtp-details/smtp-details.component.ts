import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService, Login } from 'src/app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Smtpsetting } from 'src/app/services/genicprofile.module';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-smtp-details',
  templateUrl: './smtp-details.component.html',
  styleUrls: ['../settings.component.css']
})
export class SmtpDetailsComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  currentUser: Login;
  localPrependUrl: string;
  isValidSMTP: boolean;
  isValidSMTPName: boolean;
  isValidEmailEncryption: boolean;
  isValidSMTPHost: boolean;
  isValidSMTPPort: boolean;
  isValidSMTPEmail: boolean;
  isValidSMTPUsername: boolean;
  isValidSMTPPassword: boolean;
  isValidEmailCharset: boolean;
  isValidEmailSignature: boolean;
  isValidPredefinedHeader: boolean;
  isValidPredefinedFooter: boolean;
  constructor(
    private modal: NgbModal,
    private toastr: ToastrService,
    public genericservice: GenericService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
  ) {this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.genericservice.SmtpsettingList = [];
  }

  ngOnInit(): void {
     this.isValidSMTP = false;
     this.isValidEmailEncryption = true;
     this.isValidSMTPName = true;
     this.isValidSMTPHost = true;
     this.isValidSMTPPort = true;
     this.isValidSMTPEmail = true;
     this.isValidSMTPUsername = true;
     this.isValidSMTPPassword = true;
     this.isValidEmailCharset = true;
     this.isValidEmailSignature = true;
     this.refreshlist();
  }
  refreshlist() {
    this.genericservice.refreshSMTPList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
        this.genericservice.SmtpsettingList = response.result as Smtpsetting[];
      }}, error =>  console.log(error));
  }
  pupulatesmtp(x?: Smtpsetting) {
    if (x == null) {
      this.genericservice.SmtpsettingData = {
        Id: 0,
        SMTPName: '',
        EmailProtocol: 'SMTP',
        EmailEncryption: 'SSL',
        SMTPHost: '',
        SMTPPort: '',
        SMTPEmail: '',
        SMTPUsername: '',
        SMTPPassword: '',
        EmailCharset: 'utf-8',
        EmailSignature: ''
      };
    } else {
      this.genericservice.SmtpsettingData = Object.assign({}, x);
    }
    setTimeout(() => {
      this.modal.open(this.modalContent, { size: 'xl' });
    }, 500);
  }
  removesmtp(x: Smtpsetting) {
    Swal.fire({
      title: 'Remove',
      text: 'Are you sure you want to remove ' + x.SMTPName,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      confirmButtonText: 'Yes, remove it',
      cancelButtonColor: 'red',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
          //  this.genericservice.removeSMTPById(x.Id, this.currentUser.Token).subscribe( res => {
          //   if (res) {
          //     const respone = res as any;
          //     if (respone.Message === 'success') {
          //       this.toastr.success(respone.MessageDescription);
          //       this.refreshlist();
          //     } else {
          //       Swal.fire({
          //         title: 'Keep it!',
          //         text: respone.MessageDescription,
          //         type: 'warning',
          //         timer: 2000
          //       });
          //     }
          //   }}, error =>  console.log(error));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Keep it!',
          text: 'Your Leave request is safe.',
          type: 'info',
          timer: 2000
        });
      }
    });
  }
  /***************** SMTP Begin *******************/
  OnSMTPSettingSubmit() {
    if (this.validateSMTPForm()) {
      if (this.genericservice.SmtpsettingData.Id === 0) {
        this.genericservice.postSMTPDetails(this.currentUser.Token).subscribe( res => {
          if (res) { const respone = res as any;
                     if (respone.Message === 'success') {
                      this.toastr.success(respone.MessageDescription);
                      this.refreshlist();
                      const des = 'A SMTP settings is added  by user : ' + this.currentUser.UserName + ' email protocal : ' +
                      this.genericservice.SmtpsettingData.EmailProtocol + ', Email encription : ' + this.genericservice.SmtpsettingData.EmailEncryption +
                      ', SMTP Host : ' + this.genericservice.SmtpsettingData.SMTPHost + ', SMTP Port : ' + this.genericservice.SmtpsettingData.SMTPPort +
                      ', SMTP Email : ' + this.genericservice.SmtpsettingData.SMTPEmail + ', SMTP UserName : ' +
                      this.genericservice.SmtpsettingData.SMTPUsername +
                      ', SMTP Password : ' + this.genericservice.SmtpsettingData.SMTPPassword + ', is added by : ' + this.currentUser.UserName;
                      const Activity6 = 'SMTP added setting changed';
                      this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'SMTP',
                      'NULL', 'Added', des, Activity6).subscribe();
                     } else {
                      this.toastr.warning(respone.MessageDescription);
                     }
          }}, error =>  console.log(error));
      } else {
        this.genericservice.putSMTPDetails(this.currentUser.Token).subscribe( res => {
          if (res) { const respone = res as any;
                     if (respone.Message === 'success') {
                    this.toastr.success(respone.MessageDescription);
                    this.refreshlist();
                    const des = 'A SMTP settings is added  by user : ' + this.currentUser.UserName + ' email protocal : ' +
                    this.genericservice.SmtpsettingData.EmailProtocol + ', Email encription : ' + this.genericservice.SmtpsettingData.EmailEncryption +
                    ', SMTP Host : ' + this.genericservice.SmtpsettingData.SMTPHost + ', SMTP Port : ' + this.genericservice.SmtpsettingData.SMTPPort +
                    ', SMTP Email : ' + this.genericservice.SmtpsettingData.SMTPEmail + ', SMTP UserName : ' +
                    this.genericservice.SmtpsettingData.SMTPUsername +
                    ', SMTP Password : ' + this.genericservice.SmtpsettingData.SMTPPassword + ', is modified by : ' + this.currentUser.UserName;
                    const Activity7 = 'SMTP updated setting changed';
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'SMTP', 'NULL',
                    'Modify', des, Activity7).subscribe();
                    } else {
                    this.toastr.warning(respone.MessageDescription);
                    }
          }}, error =>  console.log(error));
      }
      this.modal.dismissAll();
    }  else {
      this.toastr.warning('warning', 'All Fields are mandatory');
    }
  }
  validateSMTPForm(): boolean {
    this.isValidSMTP = false;
    if (this.genericservice.SmtpsettingData.SMTPName.length === 0) { return this.isValidSMTPName = false; }this.isValidSMTPName = true;
    if (this.genericservice.SmtpsettingData.EmailEncryption.length === 0) { return this.isValidEmailEncryption = false; }
    this.isValidEmailEncryption = true;
    if (this.genericservice.SmtpsettingData.SMTPHost.length === 0) { return this.isValidSMTPHost = false; }this.isValidSMTPHost = true;
    if (this.genericservice.SmtpsettingData.SMTPPort.length === 0) { return this.isValidSMTPPort = false; }this.isValidSMTPPort = true;
    if (this.genericservice.SmtpsettingData.SMTPEmail.length === 0) { return this.isValidSMTPEmail = false; }this.isValidSMTPEmail = true;
    if (this.genericservice.SmtpsettingData.SMTPUsername.length === 0) { return this.isValidSMTPUsername = false; }this.isValidSMTPUsername = true;
    if (this.genericservice.SmtpsettingData.SMTPPassword.length === 0) { return this.isValidSMTPPassword = false; }this.isValidSMTPPassword = true;
    if (this.genericservice.SmtpsettingData.EmailCharset.length === 0) { return this.isValidEmailCharset = false; }this.isValidEmailCharset  = true;
    if (this.genericservice.SmtpsettingData.EmailSignature.length === 0) { return this.isValidEmailSignature = false; }
    this.isValidEmailSignature = true;
    this.isValidSMTP = true;
    return this.isValidSMTP;
  }
  /***************** SMTP End *******************/
}
