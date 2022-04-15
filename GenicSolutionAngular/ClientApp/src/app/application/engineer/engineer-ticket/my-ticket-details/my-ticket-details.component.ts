import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef, ElementRef } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket, TicketTimer, TicketItem } from 'src/app/services/ticket.module';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { TicketWiseServiceForm } from 'src/app/services/serviceform.module';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CloserService } from 'src/app/services/closer.service';
import { CloserAttachment, CloserDetails } from 'src/app/services/closerDetails.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceformService } from 'src/app/services/serviceform.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { FileUploader } from 'ng2-file-upload';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { ProductService } from 'src/app/services/product.service';
import { UserLog } from 'src/app/services/userlog.module';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import * as moment from 'moment';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { GenericService } from 'src/app/services/generic.service';
import { NotificationService } from 'src/app/services/notification.service';
declare let $: any;
import { SignaturePad } from 'angular2-signaturepad';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';
import { ViewServiceFormHTMLPopupComponent } from '../view-service-form-html-popup/view-service-form-html-popup2.component';
import { MasterservicepopupComponent } from '../masterservicepopup/masterservicepopup.component';
import { ServiceFormFilledPopupComponent } from '../service-form-filled-popup/service-form-filled-popup.component';
import { ImageTransform, Dimensions, ImageCroppedEvent } from 'src/app/generic-utils/image-cropper/public-api';
import { CloserUpdatePopupComponent } from 'src/app/application/closer-update-popup/closer-update-popup.component';

@Component({
  selector: 'app-my-ticket-details',
  templateUrl: './my-ticket-details.component.html',
  styleUrls: ['../engineer-ticket.component.css', './my-ticket-details.component.css']
})
export class MyTicketDetailsComponent implements OnInit, AfterViewInit {
  isRecording = false;
  recordedTime;
  blobUrl;
  recoudngId = 0;
  private TimerStartTime;
  isValidTermsAndConditions: boolean = true;
  attachmentLocalURL = environment.NoImagePng;
  attachmentLocalURLAFTER = environment.NoImagePng;
  attachmentLocalURL2 = environment.NoImagePng;
  @ViewChild('File', { static: false }) refCloserAttachment: ElementRef;
  myInputFile: ElementRef;
  fileToUpload: File = null;
  fileToUploadCloserAttachment: File = null;
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @ViewChild('modalContent2', { static: true }) modalContent2: TemplateRef<any>;
  @ViewChild('modalContent3', { static: true }) modalContent3: TemplateRef<any>;
  locaTicketData: Ticket;
  localPrependUrl: string;
  ItemIsValid = true;
  ItemServiceIsValid = true;
  ItemProductIsValid = true;
  ItemQuantityIsValid = true;
  ItemUnitCosttIsValid = true;
  ItemTotalAmount = 0;
  currentUser: Login;
  public uploader: FileUploader = new FileUploader({});
  progress: number;
  AttachmentDataArray = [];
  CloserIsActive;
  IsCloserExpend;
  IsCloserToShow;
  CloserAriaEexpanded: boolean;
  TimeSlot: any;
  TimeSlotDay: any;
  TimeSlotHours: any;
  TimeSlotMinuts: any;
  TimeSlotSeconds: any;
  sub: Subscription;
  countDown;
  count;
  TimerButtunName; // this is used to timer button caption
  TimerButtonClassName;
  ID; // this id is used for timer id
  DateDiff;
  NowDate: Date;
  TimerStartDate: Date;
  futureDate: Date;

  LocalLogData: UserLog;
  LocalLogList: UserLog[];
  localTicketTimesheet: any;
  tempTotalTimeSpan: string;
  CloserAttachmentSpinner: boolean;
  tempAvailableStock: number;
  tempSalePrice: number;
  IshowStockSection = true;
  IsRequiredCustomerName = false;

  tempServiceByOtherPerson: string = '';
  tempddpCustomerName: string = '';
  tempOtherCustomerEmail: string = '';
  isShowCustonerOtherName: boolean = false;
  tempCheckedBy: string = '';
  tempNameOfSignatory: string = '';
  Isserviceformdownload = false;
  IsserviceformdownloadCloserId = '00000000-0000-0000-0000-000000000000';
  // for signature pad start
  loader: boolean;
  @ViewChild('SignaturePad1', { static: false }) EnginnerSingnaturePad: SignaturePad;
  @ViewChild('SignaturePad2', { static: false }) CustomerCloserSingnaturePad: SignaturePad;
  public configPad = {' minWidth': 2, pecColor: 'rgb(66,133,244)', backgroundcolor: 'rgb(255,255,255)', canvasWidth: 360, canvasHeight: 200};
  EngineerListOptions = [];
  tempEngListByMuultSelect = [];
  config = {displayKey: 'EngineerName', search: true,limitTo: 4, height: '250px' };
  customwarrantyShow: boolean;
  customwarrantyShowEdit: boolean;
  isShowSpinner: false;
  ItemUniqueIsValid = true;

  // Image Crop
  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  imageURL: string;
  loading = false;
  CloserAttachmentTemp: CloserAttachment;
  CloserAttachmentBase64Length: string;
  CloserAttachmentBase64Name: string;
  constructor(
    private modal: NgbModal,
    public service: ServiceformService,
    public ticketService: TicketService,
    public docservice: DocumentUploadService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private router: Router,
    public closerService: CloserService,
    public invoiceService: InvoiceService,
    public loginservice: AuthenticationService,
    public logService: UserlogService,
    public productservice: ProductService,
    public webParms: GenicProfileService,
    public GenicService: GenericService,
    private audioRecordingService: AudioRecordingService,
    public notifyService: NotificationService
  ) {
    this.closerService.SetDefaultCloserDetailsData();
    this.invoiceService.PaymentModeList = [];
    this.CloserIsActive = '';
    this.IsCloserExpend = false;
    this.IsCloserToShow = '';
    this.CloserAriaEexpanded = false;
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.localTicketTimesheet = [];
    this.tempTotalTimeSpan = '';
    this.TimeSlot = '00-00:00:00';
    this.TimeSlotDay = '0';
    this.TimeSlotHours = '00';
    this.TimeSlotMinuts = '00';
    this.TimeSlotSeconds = '00';
    this.CloserAttachmentSpinner = false;
    // for recording purpose bellow---
    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
    });
    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      let base64data;
      base64data = '';
      var reader = new FileReader();
      reader.readAsDataURL(data.blob);
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
    this.loader = false;
    if (this.ticketService.formData.CustomerName === 'CUSTOMER NAME') {
      this.router.navigate(['/engineer/engineer-tickets']);
    } else {
      this.GenicService.refrestTaxlist(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                      this.GenicService.Taxlist = response.result;
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
      this.GenicService.refrestPaymentModelist(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.GenicService.PaymentModelist = [];
                      this.GenicService.PaymentModelist = response.result;
                    }
      }}, error =>  console.log(error));
      setTimeout(() => {
        this.webParms.getGenicProfile(this.currentUser.Token);
        this.refrestTicketItemlist();
        this.locaTicketData = this.ticketService.formData;
      }, 800);
      this.ticketService.TicketTimerData = new TicketTimer();

      if (this.ticketService.formData.Status === 'INPROGRESS') {
        this.ticketService.getTimerDuration(this.ticketService.formData.Id, this.currentUser.Id).subscribe( res => {
          if (res) { const response = res as any;
            if (response.Message === 'success') {
              this.ticketService.TicketTimerData = new TicketTimer();
              this.ticketService.TicketTimerData = response.result;
              this.myTimer();
              }
             if (response.Message === 'failure') {
              console.warn(response.MessageDescription);
              }
          }}, error =>  console.log(error));
      }

      setTimeout(() => {
        if (this.ticketService.TicketTimerData.Status === 1) {
          this.TimerButtunName = 'Stop';
          this.TimerButtonClassName = 'btn btn-warning';
          this.myTimer();
        } else {
          if (this.ticketService.formData.Status === 'HOLD') {
            this.TimerButtunName = 'Resume';
            this.TimerButtonClassName = 'btn btn-success';
          } else {
            this.TimerButtunName = 'Start';
            this.TimerButtonClassName = 'btn btn-info';
          }
        }
        this.closerService.CloserDetailsData.PaymentCollected = false;
        this.CalCulateCloserValue();
        this.getTicketLogs();
        this.getMyTimesheet();
        this.getAssignedServiceFormListByTicket();
      }, 2000);
    }
  }
  ngAfterViewInit() {
    this.invoiceService.refrestArrayofKeyslist(this.ticketService.formData.CustomerId);
    this.closerService.CloserDetailsData.EngineerId = this.currentUser.Id;
    this.closerService.CloserDetailsData.TicketId = this.ticketService.formData.Id;
    this.closerService.postTempTicketCloserDetails(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.closerService.CloserDetailsData = response.result as CloserDetails;
                  }
    }}, error =>  console.log(error));
    setTimeout(() => {
      this.getTicketCloserAttachmentList();
      this.getTicketCloserLog();
      this.tempOtherCustomerEmail = this.ticketService.formData.CustomerEmail;
      this.tempddpCustomerName = this.ticketService.formData.CustomerName;
      this.tempCheckedBy = this.ticketService.formData.CustomerName;
      this.tempNameOfSignatory = this.ticketService.formData.CustomerName;
    }, 1000);
    setTimeout(() => {
      this.tempEngListByMuultSelect = [];
      this.ticketService.formData.TicketTeams.forEach(w => {
        let Obj: any;
        Obj = new Object();
        Obj.Id = w.Id;
        Obj.EngineerName = w.EngineerName;
        Obj.IsAssigned = true;
        this.tempEngListByMuultSelect.push(Obj);
        Obj = new Object();
      });
      this.closerService.CloserDetailsData.EngineerName = this.ticketService.formData.TicketTeams[0].EngineerName;
    }, 2000);
  }
  refrestTicketItemlist() {
    this.ticketService.refrestTicketItemlist(this.currentUser.Token, this.ticketService.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.ticketService.TicketItemList = [];
                    this.ticketService.TicketItemList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  getAssignedServiceFormListByTicket() {
    this.service.getAssignedServiceFormListByTicket(this.currentUser.Token, this.ticketService.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.service.TicketWiseServiceFormList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  getTicketCloserLog() {
    this.closerService.getTicketCloserLog(this.currentUser.Token, this.ticketService.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.closerService.CloserDetailsList = [];
                    this.closerService.CloserDetailsList = response.result;
                  }
    }}, error =>  console.log(error));
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
  getTicketLogs() {
    this.logService.getTicketLogs(this.ticketService.formData.Id, this.currentUser.Ticket, this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.LocalLogList = [];
                  this.LocalLogList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  // Get time sheet
  getMyTimesheet() {
    this.logService.getTicketTimeSheet(this.ticketService.formData.Id, this.currentUser.Token)
      .subscribe(res => {
        if (res) {
          let lst: any = [];
          lst = res;
          this.localTicketTimesheet = [];
          this.logService.TicketTimeSheetList = [];
          this.logService.TicketTimeSheetList = lst;
          this.localTicketTimesheet = lst;
          this.CountTotalTicketTimespan();
        }
      }, error => console.log(error));
  }
  // cleare Closer signature-pad
  cleareEngineerSignature() {
    this.EnginnerSingnaturePad.clear();
  }
  cleareCustomerCloserSignature() {
    this.CustomerCloserSingnaturePad.clear();
  }


  close() { }
  removeAssignedServiceForm(id: string, FormTitle: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.removeAssignedServiceForm(this.currentUser.Token, id).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.toastr.info('info', response.MessageDescription);
                    const des = 'A service form has been removed from the ' + this.currentUser.Ticket + ' No ' +
                    this.ticketService.formData.TicketId + ', of Customer : ' + this.ticketService.formData.CustomerName +
                    ' by user : ' + this.currentUser.UserName;
                  const Activity = 'Service form :' + FormTitle + ' is removed from ' + this.currentUser.Ticket + ' No : ' + this.ticketService.formData.TicketId +
                    ', on dated : ' + new Date();
                  this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Ticket,
                    this.ticketService.formData.Id, 'Removed', des, Activity).subscribe();
                    this.getAssignedServiceFormListByTicket();
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
    }
  }
  OpenMasterServiceFormPopup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(MasterservicepopupComponent, dialogConfig).afterClosed().subscribe(res => {
    });
    // this.service.getMasterServiceformList();
  }
  // Start Ticket timer
  onTicketTimer(TicketID: string) {
    if (this.ticketService.formData.Status === 'UPCOMING') {
      this.ticketService.startTicketTimer(TicketID, this.currentUser.Id, true).subscribe(res => {
        if (res) { const response = res as any;
          if(response.Message === 'success') {
            this.toastr.success(response.MessageDescription);
            this.inserttimerlog(TicketID, 'Started');
            this.getTicketTimeDuration();
            }
            if(response.Message === 'warning') {
              const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: response.MessageDescription,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Not now!',
                cancelButtonText: 'Yes, Continue!',
                reverseButtons: true
              }).then((result) => {
                if (result.value) {
                  this.TimerButtunName = 'start';
                  this.router.navigate(['/engineer/engineer-tickets']);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  this.TimerButtunName = 'Stop';
                  this.ticketService.startTicketTimer(TicketID, this.currentUser.Id, false).subscribe(res => {
                    if (res) { const response = res as any;
                      if(response.Message === 'success') {
                        this.toastr.success(response.MessageDescription);
                        this.inserttimerlog(TicketID, 'started');
                        this.getTicketTimeDuration();
                        }
                      if(response.Message === 'failure') {
                        this.toastr.error(response.MessageDescription);
                      }
                    }
                  }, error => console.log(error));
                }
              });
            }
          if(response.Message === 'failure') {
            this.toastr.error(response.MessageDescription);
          }
        }
      }, error => console.log(error));
     
      this.TimerButtunName = 'Stop';
      this.TimerButtonClassName = 'btn btn-warning';
    } else {
      if (this.TimerButtunName === 'Start') {
          this.ticketService.startTicketTimer(TicketID, this.currentUser.Id, false).subscribe(res => {
            if (res) { const response = res as any;
              if(response.Message === 'success') {
                this.toastr.success(response.MessageDescription);
                this.inserttimerlog(TicketID, 'started');
                this.getTicketTimeDuration();
                }
              if(response.Message === 'failure') {
                this.toastr.error(response.MessageDescription);
              }
            }
          }, error => console.log(error));
        this.TimerButtunName = 'Stop';
        this.TimerButtonClassName = 'btn btn-warning';
      } else if (this.TimerButtunName === 'Resume') {
          this.ticketService.startTicketTimer(TicketID, this.currentUser.Id, false).subscribe(res => {
            if (res) { const response = res as any;
              if(response.Message === 'success') {
                this.toastr.success(response.MessageDescription);
                this.inserttimerlog(TicketID, 'Resumed');
                this.getTicketTimeDuration();
                }
              if(response.Message === 'failure') {
                this.toastr.error(response.MessageDescription);
              }
            }
          }, error => console.log(error));
        this.TimerButtunName = 'Stop';
        this.TimerButtonClassName = 'btn btn-warning';
      } else if (this.TimerButtunName === 'Stop') {
        this.ticketService.stopTicketTimer(this.ID, this.currentUser.Id).subscribe(
          res => {
            switch (res.status) {
              case 201:
                this.toastr.success('success', this.currentUser.Ticket + ' Stoped Now..');
                  this.inserttimerlog(TicketID, 'Stoped');
                break;
            }
          }, err => { console.log(err); });
        this.TimerButtunName = 'Start';
        this.TimerButtonClassName = 'btn btn-info';
      }
    }
  }
  getTicketTimeDuration() {
    this.ticketService.getTimerDuration(this.ticketService.formData.Id, this.currentUser.Id).subscribe( res => {
      if (res) { const response = res as any;
        if (response.Message === 'success') {
          this.ticketService.TicketTimerData = new TicketTimer();
          this.ticketService.TicketTimerData = response.result;
          this.myTimer();
          this.EmailNotificationOnStart(this.ticketService.formData.Id);
          }
         if (response.Message === 'failure') {
          console.warn(response.MessageDescription);
          }
      }}, error =>  console.log(error));
  }
  inserttimerlog(TicketID, type) {
    const des = this.currentUser.Ticket + ' No : ' +
    this.ticketService.formData.TicketId + ', has been ' + type + ' by : ' + this.currentUser.UserName +
    ', of Customer : ' + this.ticketService.formData.CustomerName + ', at : ' + new Date(Date.parse(Date()));
    const Activity1 = this.currentUser.Ticket + ' No : ' + this.ticketService.formData.TicketId +
      ', is ' + type + ' on dated : ' + new Date();
    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Ticket,
    TicketID, 'Modify', des, Activity1).subscribe();
  }
  myTimer() {
    this.ticketService.formData.Status = 'INPROGRESS';
    this.TimerStartTime = moment(this.ticketService.TicketTimerData.StartDate);
    setInterval(
      () => {
        const currentTime = moment();
        const diffTime = moment.duration(currentTime.diff(this.TimerStartTime));
        const time = this.toString(diffTime.days())
          + '-' + this.toString(diffTime.hours())
          + ':' + this.toString(diffTime.minutes())
          + ':' + this.toString(diffTime.seconds());
        this.TimeSlot = time;
        this.TimeSlotDay = this.toString(diffTime.days());
        this.TimeSlotHours = this.toString(diffTime.hours());
        this.TimeSlotMinuts = this.toString(diffTime.minutes());
        this.TimeSlotSeconds = this.toString(diffTime.seconds());
      },
      1000
    );
  }
  private toString(value) {
    let val = value;
    if (!value) {
      val = '00';
    }
    if (value < 10) {
      val = '0' + value;
    }
    return val;
  }
  public StartTicketTimerSwal(TicketID: string) {
    // if (this.TimerButtunName === 'Start') {
    if (this.TimerButtunName === 'Start' || this.TimerButtunName === 'Resume') {
      // calling Start swall
      this.StartTicketSwal(TicketID);
    } else if (this.TimerButtunName === 'Stop') {
      // calling Stop swall
      //// Check Service Form is filed & Subimitted
      this.service.CheckServiceFormStatus(this.currentUser.Token, this.closerService.CloserDetailsData.CloserID).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.StopTicketSwal();
                      }
                   if (response.Message === 'failure') {
                    Swal.fire(
                      'Warning!',
                       response.MessageDescription,
                      'warning'
                    );
                      }
        }}, error =>  console.log(error));
    }
  }
  // Start Ticket Swall
  StartTicketSwal(TicketID: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to ' + this.TimerButtunName + ' ' + this.currentUser.Ticket + ' !',
      type: 'warning',
      animation: false,
      customClass: {
        popup: 'animated tada'
      },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, ' + this.TimerButtunName + ' it!'
    }).then((result) => {
      if (result.value) {
        this.onTicketTimer(TicketID);
        Swal.fire(
          'Started!',
          this.currentUser.Ticket + ' started successfully..',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'You have cancelled your start ' + this.currentUser.Ticket + ' request :)',
          'error'
        );
      }
    });
  }
  // Stop Ticket Swall
  StopTicketSwal() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: 'You want to stop or hold ' + this.currentUser.Ticket + '!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Close now!',
      cancelButtonText: 'Yes, Hold it!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.closerService.CloserDetailsData.TicketFlag = 'CLOSED';
          this.ticketService.checkForemanIsWorkingOrNot(this.ticketService.formData.Id, this.currentUser.Id)
            .subscribe(res => {
              const response = res as any;
              if (response.Message === 'success') {
                this.removeandaddclass();
              }
              if (response.Message === 'failure') {
                Swal.fire({
                  title: 'Are you sure?',
                  text: response.MessageDescription,
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Continue & close for all',
                  cancelButtonText: 'Cancel'
                }).then((result2) => {
                  if (result2.value) {
                    this.removeandaddclass();
                  } else if (result2.dismiss === Swal.DismissReason.cancel) {
                    return false;
                  }
                });
              }
            }, error => console.log(error));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.removeandaddclass();
        this.closerService.CloserDetailsData.TicketFlag = 'HOLD';
      }
    });
  }

  removeandaddclass() {
    setTimeout(() => {
      let demoClasses = null;
      let demoCollapseClasses = null;
      demoClasses = document.querySelectorAll('#ulOpenCloserTab');
      demoClasses.forEach(element => {
        element.childNodes.forEach(el => {
          if (el.firstChild.id === 'activeTab5') {
            el.firstChild.classList.add('active');
          } else {
            el.firstChild.classList.remove('active');
          }
        });
      });
      demoCollapseClasses = document.querySelectorAll('#Idd');
      demoCollapseClasses.forEach(el => {
        el.firstChild.classList.remove('active');
      });
      demoCollapseClasses = document.querySelectorAll('#Idd');
      demoCollapseClasses.forEach(el => {
        el.childNodes.forEach(en => {
          if (en.id === 'kt_tabs_ClosedDetails') {
            en.classList.add('active');
            this.IsCloserToShow = 'show';
            this.CloserAriaEexpanded = true;
            this.scrollToBottom();
          } else {
            en.classList.remove('active');
          }
        });
      });
    }, 500);
  }
  scrollToBottom(): void {
    try {
      window.scrollTo({ top: 700, behavior: 'smooth' });
    } catch (err) { }
  }
  removeAttSection(index) {
    this.AttachmentDataArray.splice(index);
  }
  AskToHoldOrCloseTicketPopup() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: 'You want to stop or hold ' + this.currentUser.Ticket + '!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Close now!',
      cancelButtonText: 'Yes, Hold it!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.closerService.CloserDetailsData.TicketFlag = 'CLOSED';
        $('li.custoTab.nav-item.service-nav-item a').addClass('active').siblings().removeClass('active');
        setTimeout(() => {
          this.OnCloserSubmit();
        }, 1000);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        // tslint:disable-next-line: only-arrow-functions
        $('li.custoTab.nav-item.service-nav-item a').addClass('active').siblings().removeClass('active');
        this.closerService.CloserDetailsData.TicketFlag = 'HOLD';
        setTimeout(() => {
          this.OnCloserSubmit();
        }, 1000);
      }
    });
  }
  // valiate customer name on closer submit
  validateNameOfSignatory(event) {
    if (event.target.value === '' && this.currentUser.Permissions.IsRequiredCustomerName === true) {
      this.IsRequiredCustomerName === true;
      return false;
    } else {
      this.closerService.CloserDetailsData.NameOfSignatory === event.target.value;
      this.IsRequiredCustomerName === false;
    }
  }
  // On closer form submit
  OnCloserSubmit() {
    this.closerService.CloserDetailsData.otherAttentionName = '';
    this.closerService.CloserDetailsData.IsTested = true;
    // validate Terms and conditions

    // tslint:disable-next-line:max-line-length
    if (this.ticketService.formData.Status !== 'INPROGRESS') {
      this.toastr.warning('', 'Ticket is not started, first start ' + this.currentUser.Ticket + ' and try again.');
      return false;
    }
    if (this.closerService.CloserDetailsData.TicketFlag === null
      || this.closerService.CloserDetailsData.TicketFlag === undefined
      || this.closerService.CloserDetailsData.TicketFlag === 'UPCOMING') {
      // Popup open to ask whether you want to start of hold ticket
      this.AskToHoldOrCloseTicketPopup();
      return false;
    }
    if (this.closerService.CloserDetailsData.Remarks === '') {
      this.toastr.warning('', 'Please enter remarks and try again.');
      return false;
    } else {
    }

    this.closerService.CloserDetailsData.ServiceBy = '';
    this.tempEngListByMuultSelect.forEach(e => {
      this.closerService.CloserDetailsData.ServiceBy = e.EngineerName + ',';
    });
    // this.closerService.CloserDetailsData.ServiceBy
    this.closerService.CloserDetailsData.EngineerId = this.currentUser.Id;
    this.closerService.CloserDetailsData.TicketId = this.ticketService.formData.Id;
    this.closerService.CloserDetailsData.TicketNo = this.ticketService.formData.TicketId;
    const EngBase64 = this.EnginnerSingnaturePad.toDataURL('image/png');
    const CustBase64 = this.CustomerCloserSingnaturePad.toDataURL('image/png');
    this.closerService.CloserDetailsData.EngineerSignature = EngBase64;
    this.closerService.CloserDetailsData.CustomerSignature = CustBase64;
    this.closerService.CloserDetailsData.ServiceBy = this.closerService.CloserDetailsData.ServiceBy + this.tempServiceByOtherPerson;
    this.closerService.CloserDetailsData.attentionEmail = this.tempOtherCustomerEmail;
    this.closerService.CloserDetailsData.CheckedBy = this.tempCheckedBy;
    this.closerService.CloserDetailsData.NameOfSignatory = this.tempNameOfSignatory;
    this.closerService.CloserDetailsData.AmountPaid = Number(this.closerService.CloserDetailsData.AmountPaid);
    this.closerService.CloserDetailsData.CloserGSTAmount = Number(this.closerService.CloserDetailsData.CloserGSTAmount);
    if (this.closerService.CloserDetailsData.otherAttentionName === '') {
      this.closerService.CloserDetailsData.attentionName = this.ticketService.formData.CustomerName;
    } else {
      this.closerService.CloserDetailsData.attentionName = this.closerService.CloserDetailsData.otherAttentionName;
    }
    this.loader = true;
    this.closerService.putTicketCloserDetails(this.currentUser.Token).subscribe(
      res => {
        const response = res as any;
        if (response.Message === 'success') {
          if (response.Status === 'hold') {
            this.loader = false;
            this.toastr.success('success', response.MessageDescription);
            this.EmailNotificationOnHold(this.closerService.CloserDetailsData.CloserID);
            this.IsCloserToShow = '';
            this.CloserAriaEexpanded = false;
            const v: HTMLElement = document.getElementById('txtExpenseCloser') as HTMLElement;
            v.click();
            this.ticketService.formData.Status = 'HOLD';
            this.TimerButtunName = 'Resume';
            this.TimerButtonClassName = 'btn btn-success';
            this.ticketService.TicketTimerData = new TicketTimer();
            this.TimeSlot = null;
            const des = this.currentUser.Ticket + ' No : '
              + this.ticketService.formData.TicketId + ', has been Hold by : ' + this.currentUser.UserName +
              ', of Customer : ' + this.ticketService.formData.CustomerName + ', where Closer remarks : '
              + this.closerService.CloserDetailsData.Remarks;
            const Activity5 = this.currentUser.Ticket + ' No : ' + this.ticketService.formData.TicketId +
              ', has been Hold on dated : ' + new Date();
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Ticket,
              this.ticketService.formData.Id, 'Modify', des, Activity5).subscribe();
            this.cleareEngineerSignature();
            this.cleareCustomerCloserSignature();
            this.closerService.SetDefaultCloserDetailsData();
            this.closerService.CloserAttachmentList = [];
            this.getTicketCloserLog();
            // this.getMyTimesheet();
            this.router.navigate(['/engineer/engineer-tickets']);
          }
          if (response.Status === 'closed') {
            this.loader = false;
            this.toastr.success('success', response.MessageDescription);
            this.ticketService.formData.Status = 'CLOSED';
            // after closer details submitted update ticket status
            this.IsCloserToShow = '';
            this.CloserAriaEexpanded = false;
            const v: HTMLElement = document.getElementById('txtExpenseCloser') as HTMLElement;
            v.click();
            const des = this.currentUser.Ticket + ' No : '
              + this.ticketService.formData.TicketId + ', has been Closed by : ' + this.currentUser.UserName +
              ', of Customer : ' + this.ticketService.formData.CustomerName + ', where Closer remarks : '
              + this.closerService.CloserDetailsData.Remarks;
            const Activity4 = this.currentUser.Ticket + ' No : ' + this.ticketService.formData.TicketId +
              ', has been Closed on dated : ' + new Date();
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Ticket,
              this.ticketService.formData.Id, 'Added', des, Activity4).subscribe();
            this.cleareEngineerSignature();
            this.cleareCustomerCloserSignature();
            // Email Notification
            this.EmailNotificationOnCompletion(this.closerService.CloserDetailsData.CloserID);
            // Email Notification
            this.closerService.SetDefaultCloserDetailsData();
            this.closerService.CloserAttachmentList = [];
            this.getTicketCloserLog();
            this.getMyTimesheet();
          }
        }
        if (response.Message === 'failure') {
          this.toastr.warning('warning', response.MessageDescription);
          this.loader = false;
        }
      }
    );
  }
  // Send email on close ticket
  EmailNotificationOnCompletion(CloserId) {
    this.notifyService.CompletionTicketEmailNotification(CloserId)
      .subscribe(res => {
        if (res) {
        }
      }, error => console.log(error));
  }
  EmailNotificationOnHold(CloserId) {
    this.notifyService.HoldTicketEmailNotification(CloserId)
      .subscribe(res => {
        if (res) {
        }
      }, error => console.log(error))
  }
  // Send email on start ticket
  EmailNotificationOnStart(TicketId) {
    this.notifyService.StartTicketEmailNotification(TicketId)
      .subscribe(res => {
        if (res) {
        }
      }, error => console.log(error));
  }
  // Notificatoin section end here........................
  populateCloserForm(f: CloserDetails) {
    this.closerService.CloserDetailsData = f;
    this.router.navigate(['/engineer/engineer-tickets/closer-details']);
  }
  updateCloserForm(f: CloserDetails) {
    this.closerService.CloserDetailsData = f;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '1000px';
    dialogConfig.height = '800px';
    dialogConfig.data = {};
    this.dialog.open(CloserUpdatePopupComponent, dialogConfig).afterClosed().subscribe(res => {
      this.router.navigate(['/engineer/engineer-tickets/']);
    });
  }
  
  picked(event, m , x: CloserAttachment) {
    this.CloserAttachmentTemp = Object.assign({}, x);
    var pattern = /image-*/;
    let Files = event.target.files;
    let file = Files.item(0);
    if (!file.type.match(pattern)) {
      this.toastr.warning('', 'Invalid image format!'); return false;
    }
    let filExt = file.name.split('.');
    let Ext1 = filExt[1];
    if (Ext1 === 'png' || Ext1 === 'jpg' || Ext1 === 'jpeg') {
      this.CloserAttachmentBase64Name = file.name;
      setTimeout(() => {
        this.CloserAttachmentBase64Length = file.size.toString();
      }, 500);
      //this.loader = true;
      // let t = this.currentUser.Token;
      // let remark = '';
      // let type = m;
      //this.loading = true;
      this.imageChangedEvent = event;
      this.modal.open(this.modalContent3, { size: 'lg' });
    } else {
      this.toastr.warning('Invalid file format, select png, jpg, jpeg!');
      this.loader = false;
      return false;
    }
  }
  SaveAfterEdit() {
    this.loader = true;
     this.docservice.uploadBase64Document(this.currentUser.Token , 'closerattachment', 
     this.CloserAttachmentTemp.CloserID, this.CloserAttachmentTemp.CAID.toString(), 
     this.croppedImage.toString(), this.CloserAttachmentBase64Name, this.CloserAttachmentBase64Length).subscribe( res => {
          if (res) { const response = res as any;
                    if (response.Message === 'success') {
                      this.getTicketCloserAttachmentList();
                      this.loader = false;
                      this.modal.dismissAll();
                      }
                      if (response.Message === 'failure') {
                        this.toastr.warning(response.MessageDescription);
                        this.loader = false;
                        this.modal.dismissAll();
                      }
        }}, error =>  console.log(error));
  }
  picked2(event, m) {
      let Files: FileList = event.target.files;
      var pattern = /image-*/;
      for(let n=0; n < Files.length; n++) {
          if (Files.item(n).type.match(pattern)) {
              let filExt = Files.item(n).name.split('.');
              let Ext1 = filExt[1];
              if (Ext1 === 'png' || Ext1 === 'jpg' || Ext1 === 'jpeg') {
                this.loader = true;
                let t = this.currentUser.Token;
                let remark = '';
                let type = m;
                  this.docservice.uploadDocuments(t , type, this.closerService.CloserDetailsData.CloserID, '0', remark, Files.item(n)).subscribe( res => {
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
              }
          }
      }  
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
  onclickcloser(t, id) {
    if(t === 'before') { document.getElementById('id_' + id).click() }
    if(t === 'after') { document.getElementById('ida_' + id).click() }
  }
  //#endregion Closer Attachment End
  CountTotalTicketTimespan() {
    var hour = 0;
    var minute = 0;
    var second = 0;
    this.localTicketTimesheet.forEach(el => {
      if (el.EndDate === null || el.EndDate === undefined) {
        el.TimeDiff = '00:00:00';
      } else {
        hour += parseInt(el.TimeDiff.split(':')[0]);
        minute += parseInt(el.TimeDiff.split(':')[1]);
        second += parseInt(el.TimeDiff.split(':')[2]);
      }
    });
    hour = (hour + minute / 60);
    let min = minute + second / 60;
    minute = min % 60;
    second = second % 60;
    let h = '00';
    let m = '00';
    let s = '00';
    h = hour.toString().split('.')[0];
    m = minute.toString().split('.')[0];
    s = second.toString().split('.')[0];
    var ttl = this.toString(h) + ':' + this.toString(m);
    this.tempTotalTimeSpan = ttl;
  }
  loadTimesheet(Id: string) {
    setTimeout(() => {
      this.localTicketTimesheet = [];
      if (Id === 'All') {
        this.localTicketTimesheet = this.logService.TicketTimeSheetList;
      } else {
        this.localTicketTimesheet = this.logService.TicketTimeSheetList.filter(e =>
          e.EngineerId === Id);
      }
      this.CountTotalTicketTimespan();
    }, 1000);
  }
  LoadTimesheetOnSearch(value: string) {
    setTimeout(() => {
      this.localTicketTimesheet = this.logService.TicketTimeSheetList.filter(e =>
        e.EngineerName.toLowerCase().match(value.toLowerCase()));
      this.CountTotalTicketTimespan();
    }, 1000);

  }
  ReadMoreLog(p: UserLog) {
    this.LocalLogData = new UserLog();
    this.LocalLogData = p;
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  numberOnly(event): boolean {
    if (Number(event.target.value) === 0) {
      event.target.value = null;
    }
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  numberwithDecimalOnly(event): boolean {
    if (Number(event.target.value) === 0) {
      event.target.value = null;
    }
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      if (charCode === 46) {
        return true;
      } else {
        return false;
      }
    }
    return true;
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
  }
  // ----------- Audio section End -----------------------------------

// Html service form implemented--- start---------------------------
FillHTMLServiceForm(f: TicketWiseServiceForm) {
  this.service.TicketWiseServiceFormData = Object.assign({}, f);
  if (f.CloserId === '00000000-0000-0000-0000-000000000000' || f.CloserId === null || f.CloserId === undefined) {
    this.router.navigate(['/engineer/engineer-tickets']);
  }
  this.service.SetBlankServiceFormValue();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '1000px';
  dialogConfig.height = '700px';
  dialogConfig.data = {};
  this.dialog.open(ServiceFormFilledPopupComponent, dialogConfig).afterClosed().subscribe(res => {
    this.getAssignedServiceFormListByTicket();
  });
}
viewHTMLServiceForm(f: TicketWiseServiceForm) {
  this.service.TicketWiseServiceFormData = Object.assign({}, f);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.width = '800px';
  dialogConfig.height = '700px';
  dialogConfig.data = {};
  this.dialog.open(ViewServiceFormHTMLPopupComponent, dialogConfig).afterClosed().subscribe(res => {
    this.getAssignedServiceFormListByTicket();
  });
}
// view service form details popup
viewServiceFormDetails(f: TicketWiseServiceForm) {
  this.service.TicketWiseServiceFormData = Object.assign({}, f);
  this.viewServiceFormDetailsPopup();
}
viewServiceFormDetailsPopup() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.width = '800px';
  dialogConfig.maxHeight = '700px';
  dialogConfig.data = {};
  this.dialog.open(ViewServiceFormHTMLPopupComponent, dialogConfig).afterClosed().subscribe(res => {
  });
}
  viewClientHistory(ticket: Ticket): void {
    this.ticketService.formData = Object.assign({}, ticket);
    this.router.navigate(['/properties/ticket-history-property-wise']);
  }
  ValidaPaidAmount(event): boolean {
    if (event.target.value === 0 || event.target.value === '') {
    } else {
    }
    if (Number(event.target.value) === 0) {
      event.target.value = null;
    }
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      if (charCode === 46) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  GetCloserValue() {
    this.closerService.CloserDetailsData.CloserAmount = this.ticketService.formData.NetAmount
    this.closerService.CloserDetailsData.CloserTotalAmount = this.ticketService.formData.NetAmount;
  }
  CalCulateCloserValue() {
    let Amount = Number(this.closerService.CloserDetailsData.CloserAmount);
    let GST = Number(this.closerService.CloserDetailsData.CloserGSTAmount);
    if (GST === NaN || GST === undefined) {
      GST = 0;
    }
    let TotalAmount = (Amount * GST) / 100 + Amount;
    this.closerService.CloserDetailsData.CloserTotalAmount = TotalAmount;
  }
  CalCulateCloserValuebyAmount(event) {
    debugger
    let Amount = Number(event.target.value);
    let ev: any;
    ev = document.getElementById('ddltax');
    let ind = ev.selectedIndex;
    let localGST = Number(ev.options[ind].getAttribute("AttrGst"));
    if (localGST === NaN || localGST === undefined) {
      localGST = 0;
    }
    let TotalAmount = (Amount * localGST) / 100 + Amount;
    this.closerService.CloserDetailsData.CloserTotalAmount = TotalAmount;
  }

  OnCloserCustChange(event) {
    if (event.target.value === 'other') {
      this.isShowCustonerOtherName = true;
      this.tempCheckedBy = '';
      this.tempNameOfSignatory = '';
    } else {
      this.isShowCustonerOtherName = false;
      this.closerService.CloserDetailsData.otherAttentionName = '';
      this.tempCheckedBy = this.ticketService.formData.CustomerName;
      this.tempNameOfSignatory = this.ticketService.formData.CustomerName;
    }
  }

  whenSElectEng(event) {
    this.tempEngListByMuultSelect = event.value;
  }
  getOtherAttany(event) {
    let attany = event.target.value;
    this.tempNameOfSignatory = attany;
    this.tempCheckedBy = attany;
  }

  downloadServiceFormPDF(f: TicketWiseServiceForm) {
    if (this.closerService.CloserDetailsList.length <= 0) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Closer details not available!',
      });
    } else {
      this.Isserviceformdownload = true;
      this.IsserviceformdownloadCloserId = f.CloserId;
      this.service.downoadServiceFormPDF(f.CloserId)
        .subscribe(res => {
          const response = res as any;
          if (response.Message === 'success') {
            this.Isserviceformdownload = false;
            const a = $("<a>")
              .attr("href", response.Path)
              .attr("target", "_blank")
              .attr("download", f.TicketNo + '-' + f.ServicePrefix + f.TicketServiceID + '.pdf')
              .appendTo("body");
            a[0].click();
            a.remove();
          }
          if (response.Message === 'failure') {
            this.toastr.warning('warning', response.MessageDescription);
            this.Isserviceformdownload = false;
          }
        }, error => console.log(error));
    }
  }
  changePaymentCollected() {
    if (this.closerService.CloserDetailsData.PaymentCollected) {
      this.closerService.CloserDetailsData.CloserAmount = this.ticketService.formData.NetAmount;
      this.closerService.CloserDetailsData.AmountPaid = this.ticketService.formData.NetAmount;
      this.closerService.CloserDetailsData.CloserTotalAmount = this.ticketService.formData.NetAmount;
    } else {
      this.closerService.CloserDetailsData.CloserAmount = 0;
      this.closerService.CloserDetailsData.CloserGSTAmount = 0;
      this.closerService.CloserDetailsData.CloserTotalAmount = 0;
      this.closerService.CloserDetailsData.PaymentMode = 'SelectMode';
      this.closerService.CloserDetailsData.AmountPaid = 0;
      this.closerService.CloserDetailsData.PaymentRemarks = '';
    }
  }
  UpdateInstallationDate(p: TicketItem) {
    this.ticketService.TicketItem = Object.assign({}, p);
    this.modal.open(this.modalContent2, { size: 'lg' });
  }
  public customwarrantyShowMethor() {
    if (this.ticketService.TicketItem.WarrantyDays === undefined) {
      this.customwarrantyShow = false;
    } else {
      switch (this.ticketService.TicketItem.WarrantyDays.toString()) {
        case '90':
        case '180':
        case '270':
        case '365': this.customwarrantyShow = true; break;
        default: this.customwarrantyShow = false; break;
      }
    }
  }
  enablewarrantchange() {
    if (this.customwarrantyShowEdit) { this.customwarrantyShowEdit = false; } else { this.customwarrantyShowEdit = true; }
  }
  UpdateItemInstallation() {
    if (this.currentUser.Permissions.ProductWarranty) {
      if (this.ticketService.TicketItem.InWarranty) {
        if (this.ticketService.TicketItem.UniqId === '' || this.ticketService.TicketItem.UniqId.length === 0) {
          this.toastr.warning('Warning', 'Please enter a unique id');
          this.ItemUniqueIsValid = false;
          return false;
        }
      }
    }
    this.ticketService.TicketItem.WarrantyDays = Number(this.ticketService.TicketItem.WarrantyDays);
    this.ticketService.putTicketItemDetails(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success('success', response.MessageDescription);
                  this.refrestTicketItemlist();
                  setTimeout(() => {
                    this.modal.dismissAll();
                    this.isShowSpinner = false;
                  }, 500);
                  }
                 if (response.Message === 'failure') {
                  this.isShowSpinner = false;
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
    this.ItemUniqueIsValid = true;
  }
  fileChangeEvent(event: any): void {
    this.loading = true;
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    //console.log(event);
  }

  imageLoaded() {
    this.showCropper = true;
    //console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
    this.loading = false;
  }

  loadImageFailed() {
    console.error('Load image failed');
  }

  rotateLeft() {
    this.loading = true;
    setTimeout(() => { // Use timeout because rotating image is a heavy operation and will block the ui thread
      this.canvasRotation--;
      this.flipAfterRotate();
    });
  }

  rotateRight() {
    this.loading = true;
    setTimeout(() => {
      this.canvasRotation++;
      this.flipAfterRotate();
    });
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }

  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
    this.transform = {
      ...this.transform,
      rotate: this.rotation
    };
  }
}
