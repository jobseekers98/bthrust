import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket, TicketTimer } from 'src/app/services/ticket.module';
import { MatDialog } from '@angular/material/dialog';
import { TicketWiseServiceForm } from 'src/app/services/serviceform.module';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CloserService } from 'src/app/services/closer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceformService } from 'src/app/services/serviceform.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { ProductService } from 'src/app/services/product.service';
import { UserLog } from 'src/app/services/userlog.module';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import * as moment from 'moment';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { GenericService } from 'src/app/services/generic.service';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-customer-ticket-view-details',
  templateUrl: './customer-ticket-view-details.component.html',
  styleUrls: ['../../engineer/engineer-ticket/engineer-ticket.component.css', '../../engineer/engineer-ticket/my-ticket-details/my-ticket-details.component.css']
})
export class CustomerTicketViewDetailsComponent implements OnInit {
  isRecording = false;
  recordedTime;
  blobUrl;
  private TimerStartTime;
  isValidTermsAndConditions: boolean = true;
  attachmentLocalURL = 'assets/users/NoImage.png';
  attachmentLocalURL2 = 'assets/users/NoImage.png';
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
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
  localTicketTimesheet: any;
  tempTotalTimeSpan: string;
  CloserAttachmentSpinner: boolean;
  tempAvailableStock: number;
  tempSalePrice: number;
  IshowStockSection = true;
  IsRequiredCustomerName = false;
  tempServiceByOtherPerson: string = '';
  isShowCustonerOtherName: boolean = false;
  Isserviceformdownload = false;
  IsserviceformdownloadCloserId = '00000000-0000-0000-0000-000000000000';
  // for signature pad start
  loader: boolean;
  customwarrantyShow: boolean;
  customwarrantyShowEdit: boolean;
  isShowSpinner: false;
  ItemUniqueIsValid = true;
  constructor(
    private modal: NgbModal,
    public service: ServiceformService,
    public ticketService: TicketService,
    private toastr: ToastrService,
    private router: Router,
    public closerService: CloserService,
    public invoiceService: InvoiceService,
    public loginservice: AuthenticationService,
    private http: HttpClient,
    public logService: UserlogService,
    public productservice: ProductService,
    public webParms: GenicProfileService,
    public GenicService: GenericService,
    private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer,
    public notifyService: NotificationService,
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
    this.ticketService.TicketItemList = [];
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
    this.loader = false;
    if (this.ticketService.formData.CustomerName === 'CUSTOMER NAME') { this.router.navigate(['/customer/customer-tickets']);
    } else {
      this.ticketService.refrestTicketItemlist(this.currentUser.Token, this.ticketService.formData.Id).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                      this.ticketService.TicketItemList = [];
                      this.ticketService.TicketItemList = response.result;
                    }
      }}, error =>  console.log(error));
      this.logService.getTicketLogs(this.ticketService.formData.Id, 'Ticket', this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                      this.logService.UserLogList = [];
                      this.logService.UserLogList = response.result;
                    }
      }}, error =>  console.log(error));
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
        this.closerService.CloserDetailsData.CloserAmount = this.ticketService.formData.NetAmount;
        this.closerService.CloserDetailsData.CloserTotalAmount = this.ticketService.formData.NetAmount;
        this.closerService.CloserDetailsData.CloserGSTAmount = 7;
      }, 2000);
      // this.getMyTimesheet();
      this.getAssignedServiceFormListByTicket();
      this.getTicketCloserAttachmentList();
      this.getTicketCloserLog();
    }
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
  // Get time sheet
  // getMyTimesheet() {
  //   this.logService.getTicketTimeSheet(this.ticketService.formData.Id, this.currentUser.Token)
  //     .subscribe(res => {
  //       if (res) {
  //         let lst: any = [];
  //         lst = res;
  //         this.localTicketTimesheet = [];
  //         this.logService.TicketTimeSheetList = [];
  //         this.logService.TicketTimeSheetList = lst;
  //         this.localTicketTimesheet = lst;
  //         this.CountTotalTicketTimespan();
  //       }
  //     }, error => console.log(error));
  // }

  close() { }

  getTicketTimeDuration() {
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
          } else {
            en.classList.remove('active');
          }
        });
      });
    }, 500);
  }

  removeAttSection(index) {
    this.AttachmentDataArray.splice(index);
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
            const link = this.localPrependUrl + '/Documents/ServiceFormPDF/' + f.ServicePrefix + f.TicketServiceID + '.pdf';
            const a = $("<a>")
              .attr("href", link)
              .attr("target", "_blank")
              .attr("download", f.ServicePrefix + f.TicketServiceID + '.pdf')
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
}
