import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbTimeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from 'src/app/services/ticket.service';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { ToastrService } from 'ngx-toastr';
import { EngineerService } from 'src/app/services/engineer.service';
import { Router } from '@angular/router';
import { Login, AuthenticationService } from 'src/app/services';
import { NotificationService } from 'src/app/services/notification.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { CloserService } from 'src/app/services/closer.service';
import { environment } from 'src/environments/environment';
import { UserlogService } from 'src/app/services/userlog.service';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { SignaturePad } from 'angular2-signaturepad';
import { CloserAttachment } from 'src/app/services/closerDetails.module';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';

@Component({
  templateUrl: './closer-update-popup.component.html',
  styleUrls: [
    '../../../../src/app/application/engineer/engineer-ticket/my-ticket-details/my-ticket-details.component.css/',
    '../../../../src/app/application/engineer/engineer-ticket/engineer-ticket.component.css'
  ],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }],
})
export class CloserUpdatePopupComponent implements OnInit {
  @ViewChild('SignaturePad1', { static: false }) EnginnerSingnaturePad: SignaturePad;
  @ViewChild('SignaturePad2', { static: false }) CustomerCloserSingnaturePad: SignaturePad;
  public configPad = {' minWidth': 2, pecColor: 'rgb(66,133,244)', backgroundcolor: 'rgb(255,255,255)', canvasWidth: 360, canvasHeight: 200};
  customersignatureshow: boolean;
  engineersignatureshow: boolean;
  currentUser: Login;
  loader: boolean;
  CloserAttachmentSpinner: boolean;
  localPrependUrl: string;
  attachmentLocalURL = environment.NoImagePng;
  attachmentLocalURL2 = environment.NoImagePng;
  blobUrl;
  isRecording = false;
  recordedTime;
  recoudngId = 0;
  constructor(
    public titleService: Title,
    public dialogRef: MatDialogRef<CloserUpdatePopupComponent>,
    public docservice: DocumentUploadService,
    public ticketService: TicketService,
    public closerService: CloserService,
    public logService: UserlogService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private router: Router,
    public genicProfile: GenicProfileService,
    public loginservice: AuthenticationService,
    public engineerservice: EngineerService,
    public notifyService: NotificationService,
    private audioRecordingService: AudioRecordingService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.CloserAttachmentSpinner = false;
    this.customersignatureshow = false;
    this.engineersignatureshow = false;
    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
    });
    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      let base64data;
      // base64data = '';
      var reader = new FileReader();
      reader.readAsDataURL(data.blob);
      // tslint:disable-next-line: only-arrow-functions
      reader.onloadend = function () {
        base64data = reader.result;
      };
      setTimeout(() => {
        this.closerService.CloserAttachmentAduioData.AudioAttachment = base64data.split(',')[1];
        this.closerService.CloserAttachmentAduioData.AudiotSize = data.blob.size;
      }, 500);
    });
   }

  ngOnInit() {
     if(!this.currentUser.Permissions.CloserEdit) {
      this.toastr.warning('You have not permission to overwrite closer details');
      this.dialogRef.close();
     }
     this.getTicketCloserAttachmentList();
     this.titleService.setTitle('Closer Update | Genic Solution');
  }
  getTicketCloserAttachmentList() {
    this.closerService.getTicketCloserAttachmentList(this.currentUser.Token, this.closerService.CloserDetailsData.CloserID).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.closerService.CloserAttachmentList = [];
                    this.closerService.CloserAttachmentList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  onSubmit(){
  if (this.closerService.CloserDetailsData.Remarks === '') {
    this.toastr.warning('', 'Please enter remarks and try again.');
    return false;
  }
  let CustBase64 = '';
  if (this.customersignatureshow) {
     CustBase64 = this.CustomerCloserSingnaturePad.toDataURL('image/png');
  }
  let EngBase64 = '';
  if (this.engineersignatureshow) {
    EngBase64 = this.EnginnerSingnaturePad.toDataURL('image/png');
  }
  
  this.closerService.CloserDetailsData.EngineerSignature = EngBase64;
  this.closerService.CloserDetailsData.CustomerSignature = CustBase64;
  this.closerService.CloserDetailsData.WithCustomerSignature = this.customersignatureshow;
  this.closerService.CloserDetailsData.IsTested = this.engineersignatureshow;
  this.loader = true;
  this.closerService.OverWriteCloserDetails(this.currentUser.Token).subscribe(
    res => {
      const response = res as any;
      if (response.Message === 'success') {
        this.dialogRef.close();
        this.loader = false;
        this.toastr.success('success', response.MessageDescription);
        const des = 'Ticket No : '
          + this.ticketService.formData.TicketId + ', has been Modify by : ' + this.currentUser.UserName +
          ', of Customer : ' + this.ticketService.formData.CustomerName + ', where Closer remarks : '
          + this.closerService.CloserDetailsData.Remarks;
        const Activity5 = 'Ticket No : ' + this.ticketService.formData.TicketId +
          ', has been Overwite on dated : ' + new Date();
        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Ticket',
          this.ticketService.formData.Id, 'Modify', des, Activity5).subscribe();
        this.cleareEngineerSignature();
        this.cleareCustomerCloserSignature();
        this.closerService.SetDefaultCloserDetailsData();
        this.closerService.CloserAttachmentList = [];
        this.router.navigate(['/engineer/engineer-tickets']);
      }
      if (response.Message === 'failure') {
        this.toastr.warning('warning', response.MessageDescription);
        this.loader = false;
      }
    }
  );
  }

  removeAttachment(x: CloserAttachment) {
    this.closerService.removeCloserAttachment(this.currentUser.Token, x.CAID, x.CloserID).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success(response.MessageDescription);
                  this.getTicketCloserAttachmentList();
                  }
                  if (response.Message === 'failure') {
                    this.CloserAttachmentSpinner = false;
                      this.toastr.warning('warning', response.MessageDescription);
                    }
    }}, error =>  console.log(error)); 
  }
  UpdateCloserAttachmentRemark(event, x: CloserAttachment) {
    this.closerService.CloserAttachmentData.CAID = x.CAID;
    this.closerService.CloserAttachmentData.CloserID = x.CloserID;
    this.closerService.CloserAttachmentData.Remarks = event.target.value;
    this.CloserAttachmentSpinner = true;
    this.closerService.PutCloserDetails(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.CloserAttachmentSpinner = false;
                  this.getTicketCloserAttachmentList();
                  }
    }}, error =>  console.log(error));
}
onclickcloser(t, id) {
  if(t === 'before') { document.getElementById('id_' + id).click() }
  if(t === 'after') { document.getElementById('ida_' + id).click() }
}
picked(event, m , x: CloserAttachment) {
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
    let remark = '';
    let type = m;
      this.docservice.uploadDocument(t , type, x.CloserID, x.CAID.toString(), remark, file).subscribe( res => {
        if (res) { const response = res as any;
                  if (response.Message === 'success') {
                    this.getTicketCloserAttachmentList();
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
startRecording(x: CloserAttachment) {
  this.closerService.SetDefaultCloserAudio();
  if (!this.isRecording) {
    this.recoudngId = x.CAID;
    this.isRecording = true;
    this.audioRecordingService.startRecording();
  }
}
stopRecording(x: CloserAttachment) {
  if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
      this.loader = true;
      this.closerService.CloserAttachmentAduioData.CAID = x.CAID
      this.closerService.CloserAttachmentAduioData.CloserID = x.CloserID
      setTimeout(() => {
        this.closerService.postCloserAttachmentAudioData(this.currentUser.Token).subscribe( res => {
          if (res) { const response = res as any;
                     if (response.Message === 'success') {
                      this.toastr.info(response.MessageDescription);
                      this.loader = false;
                          this.recoudngId = 0
                        this.getTicketCloserAttachmentList();
                      }
                     if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                        this.loader = false;
                      }
        }}, error =>  console.log(error));
      }, 1000);
  }
}

public blobToFile = (theBlob: Blob, fileName:string): File => {
  var b: any = theBlob;
  b.lastModifiedDate = new Date();
  b.name = fileName;
  return <File>theBlob;
}
ClearTempCloaseAudio(id) {
  this.closerService.removeAudioAttachment(this.currentUser.Token, id).subscribe( res => {
    if (res) { const response = res as any;
               if (response.Message === 'success') {
                this.toastr.info(response.MessageDescription);
                this.loader = false;
                    this.recoudngId = 0
                  this.getTicketCloserAttachmentList();
                }
               if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  this.loader = false;
                }
  }}, error =>  console.log(error));
  //this.closerService.CloserAttachmentData.CloserAttachmentAduioList.splice(index);
  //this.blobUrl = null;
}
  addCloserAttachment() {
    this.closerService.CloserAttachmentData.CAID = 0 ;
      this.closerService.CloserAttachmentData.CloserID = this.closerService.CloserDetailsData.CloserID;
      this.CloserAttachmentSpinner = true;
      this.closerService.PostCloserDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.toastr.success(response.MessageDescription);
                    this.CloserAttachmentSpinner = false;
                    this.closerService.CloserAttachmentData.CloserAttachmentAduioList = [];
                    this.closerService.SetDefaultCloserAudio();
                    this.closerService.CloserAttachmentData.Remarks = '';
                    this.closerService.CloserAttachmentData.CAID = 0;
                    this.closerService.CloserAttachmentData.AttachmentFile = null;
                    this.closerService.CloserAttachmentData.AttachmentExtenstion = null;
                    this.closerService.CloserAttachmentData.AttachmentSize = 0;
                    this.closerService.CloserAttachmentData.AttachmentFileAfter = null;
                    this.closerService.CloserAttachmentData.AttachmentExtenstionAfter = null;
                    this.closerService.CloserAttachmentData.AttachmentSizeAfter = 0;
                    this.getTicketCloserAttachmentList();
                    }
                   if (response.Message === 'failure') {
                    this.CloserAttachmentSpinner = false;
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
  }

    // ----------- Audio section Start -----------------------------------
  // --- remove saved audio against Closer attchment
  removeSavedCloserAudio(Caid, AttachmentAudioId) {
    this.closerService.removeAudioAttachment(Caid, AttachmentAudioId);
    setTimeout(() => {
      this.getTicketCloserAttachmentList();
    }, 500);
  }
  // ----------- Audio section End -----------------------------------


    // cleare Closer signature-pad
    cleareEngineerSignature() {
      this.EnginnerSingnaturePad.clear();
    }
    cleareCustomerCloserSignature() {
      this.CustomerCloserSingnaturePad.clear();
    }
    oncheckedSignature(s: string) {
      if(s === 'c') {
        let cust_sign = <any>document.getElementById("cust_sign");
        this.customersignatureshow = Boolean(cust_sign.checked);
      }
      if(s === 'e') {
        let eng_sign = <any>document.getElementById("eng_sign");
        this.engineersignatureshow = Boolean(eng_sign.checked);
      }
    }
    close() {
      this.dialogRef.close();
    }
}
