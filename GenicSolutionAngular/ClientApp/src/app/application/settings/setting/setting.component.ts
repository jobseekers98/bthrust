import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { GenericService } from '../../../services/generic.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DownloadService } from '../../../services/downloads.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from '../../../services/userlog.service';
import { environment } from 'src/environments/environment';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { PropertyService } from '../../../services/property.service';
import { NgbDateAdapter, NgbTimeAdapter, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from '../../../ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from '../../../ngb-time-to-string-adapter';
import { LeaveCalendarComponent } from '../leave-calendar/leave-calendar.component';
import Swal from 'sweetalert2';
import { CalendarView, CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { colors } from '../../../demo-utils/colors';
import { Subject } from 'rxjs';
import { GenicProfileCalendar } from '../../../services/genicprofile.module';
import { EngineerService } from '../../../services/engineer.service';
import { Engineer } from '../../../services/engineer.module';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';
import { ReportsFilter } from 'src/app/services/report.module';
import { ReportService } from 'src/app/services/report.service';
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;
const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;
const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
@Component({
  selector: 'app-settings',
  templateUrl: './setting.component.html',
  styleUrls: ['../settings.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter },
  ],
})
export class SettingComponent implements OnInit, AfterViewInit {
  rows = [];
  currentUser: Login;
  localPrependUrl: string;
  isCompanyImageBinary: boolean;
  CompanyLogoFile: any;
  options = { componentRestrictions: { country: ['SG'] } };
  lat = 1.3521;
  lng = 103.8198;
  street_number = '';
  route = '';
  neighborhood = '';
  sublocality_level_3 = '';
  sublocality_level_2 = '';
  sublocality_level_1 = '';
  locality = '';
  administrative_area_level_2 = '';
  administrative_area_level_1 = '';
  country = '';
  postal_code = '';
  IsPostalSearch: boolean;
  addressresult: any;
  currentUTCDate = new Date();
  localdate = new Date(Date.UTC(this.currentUTCDate.getFullYear(),
    this.currentUTCDate.getMonth(),
    this.currentUTCDate.getDate(), 0, 0, 0));
  minDate = {
    year: Number(this.currentUTCDate.getFullYear()),
    month: Number(this.currentUTCDate.getMonth() + 1),
    day: Number(this.currentUTCDate.getDate())
  };
  maxDate = {
    year: Number(this.currentUTCDate.getFullYear()) + 2,
    month: Number(this.currentUTCDate.getMonth() + 1),
    day: Number(this.currentUTCDate.getDate())
  };
  LeaveSelectOption: number;
  viewDate = new Date();
  view = CalendarView.Month;
  events: CalendarEvent[];
  CalendarView = CalendarView;
  refresh = new Subject<void>();
  actions: CalendarEventAction[];
  activeDayIsOpen: false;

  LogoLocalURL = environment.NoImagePng;
  QuoteHeaderLocalURL = environment.NoImagePng;
  InvoiceHeaderLocalURL = environment.NoImagePng;
  ServiceHeaderLocalURL = environment.NoImagePng;
  attachmentLocalURL2 = environment.NoImagePng;

  LeaveManagementYear: number;
  LeaveManagementMonth: number;
  LeaveManagementEngineer: string;
  LeaveManagementEngineerList: any;
  showdata: string;

  todateprint: Date;
  fromdateprint: Date;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  hoveredDate: NgbDateStruct;
  Isdatepickershow = false;
  approvedleavecount = 0;
  pendingleavecount = 0;
  rejectedleavecount = 0;
  cancelledleavecount = 0;
  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

  EngineerdropdownList = []; EngineerselectedItems = [];
  EngineerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Engineers' };
  loader: boolean = false;
  constructor(
    private titleService: Title,
    public service: GenericService,
    public docservice: DocumentUploadService,
    public genicprofileservice: GenicProfileService,
    public propertyservice: PropertyService,
    public engineerservice: EngineerService,
    private dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    calendar: NgbCalendar
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    const t1 =
      this.fromDate.year.toString().padStart(4, '0') + '-' +
      this.fromDate.month.toString().padStart(2, '0') + '-' +
      this.fromDate.day.toString().padStart(2, '0') + 'T00:00:00Z';
    const t2 =
      this.toDate.year.toString().padStart(4, '0') + '-' +
      this.toDate.month.toString().padStart(2, '0') + '-' +
      this.toDate.day.toString().padStart(2, '0') + 'T23:59:59Z';
    this.genicprofileservice.TicketFilter.DateFrom = t1;
    this.genicprofileservice.TicketFilter.DateTo = t2;
  }


  ngOnInit() {
    if (!this.currentUser.Permissions.SettingView) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Settings | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.LeaveSelectOption = Number(this.currentUTCDate.getFullYear());
    this.isCompanyImageBinary = true;
    
    this.genicprofileservice.getCountryList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                   this.genicprofileservice.CountryList = response.result;
                   this.genicprofileservice.getGenicProfile(this.currentUser.Token);
                  }
    }}, error =>  console.log(error));
    setTimeout(() => {
      this.genicprofileservice.getGenicProfileCalendar(this.currentUser.Token, this.LeaveSelectOption);
      this.LogoLocalURL = this.genicprofileservice.formData.Logo;
      this.QuoteHeaderLocalURL = this.genicprofileservice.formData.QuotationHeader;
      this.InvoiceHeaderLocalURL = this.genicprofileservice.formData.InvoiceHeader;
      this.ServiceHeaderLocalURL = this.genicprofileservice.formData.ServiceHeader;
    }, 1000);

    this.LeaveManagementYear = this.viewDate.getFullYear();
    this.LeaveManagementMonth = 0;
    this.LeaveManagementEngineer = this.currentUser.Token;
    setTimeout(() => {
      this.LeaveManagemntSelectChange();
    }, 2000);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.events = [];
      this.genicprofileservice.GenicProfileCalendarList.forEach(element2 => {
        this.events.push({
          id: element2.Id,
          start: new Date(element2.Date),
          end: new Date(element2.Date),
          title: element2.Description,
          color: colors.green,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: false
        });
      });
      this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe(res => {
        this.EngineerdropdownList = [];
        if (res) {
          const response = res as any;
          if (response.Message === 'success') {
            const engList = response.result as Engineer[];
            engList.forEach(w => {
              this.EngineerdropdownList.push({ Id: w.Id, Name: w.EngineerName, IsAssigned: false });
            });
          }
          if (response.Message === 'failure') {
            this.toastr.warning('warning', response.MessageDescription);
          }
        }
      }, error => console.log(error));
    }, 2000);
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


  /***************** tab stype Begin *****************/
  toggletab(x: string) {
    let demoClasses = null;
    demoClasses = document.querySelectorAll('.setting-list-dynamic-class-tab');
    demoClasses.forEach(element => {
      if (element.name === x) {
        element.setAttribute('data-ktwizard-state', 'current');
      } else {
        element.setAttribute('data-ktwizard-state', 'step-content');
      }
    });
    demoClasses = document.querySelectorAll('.setting-list-dynamic-class');
    demoClasses.forEach(element => {
      if (element.id === x) {
        element.setAttribute('data-ktwizard-state', 'current');
      } else {
        element.setAttribute('data-ktwizard-state', 'step-content');
      }
    });
  }
  /***************** tab style End *******************/

  picked(event, m: string) {
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
      let id = this.genicprofileservice.formData.Id.toString();
      let remark = '';
      let type = m;
        this.docservice.uploadDocument(t , type, '',id, remark, file).subscribe( res => {
          if (res) { const response = res as any;
                    if (response.Message === 'success') {
                      this.toastr.info('upload successfully');
                      switch(m) {
                          case 'companylogo': this.genicprofileservice.formData.Logo = this.LogoLocalURL = response.MessageDescription; break;
                          case 'workorderheader': this.genicprofileservice.formData.ServiceHeader = this.ServiceHeaderLocalURL = response.MessageDescription; break;
                          case 'quotationheader': this.genicprofileservice.formData.QuotationHeader = this.QuoteHeaderLocalURL = response.MessageDescription; break;
                          case 'invoiceheader': this.genicprofileservice.formData.InvoiceHeader = this.InvoiceHeaderLocalURL = response.MessageDescription; break;
                        }
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
  /// End
  onSubmit(module: string) {
    this.genicprofileservice.formData.OTAfter = Number(this.genicprofileservice.formData.OTAfter);
    this.genicprofileservice.formData.BufferTime = Number(this.genicprofileservice.formData.BufferTime);
    this.genicprofileservice.postGenicProfileCompanyDetails(this.currentUser.Token, module).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }

  onLeaveCalendar() {
    this.genicprofileservice.GenicProfileCalendarData = {
      Id: 0, GenicProfileId: 0, Date: null,
      Description: '', WorkType: 'Full Day', StartTime: null, EndTime: null
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = {};
    this.dialog.open(LeaveCalendarComponent, dialogConfig);
  }
  LeaveCalendarSelectChange() {
    this.genicprofileservice.getGenicProfileCalendar(this.currentUser.Token, this.LeaveSelectOption);
    setTimeout(() => {
      this.events = [];
      this.genicprofileservice.GenicProfileCalendarList.forEach(element2 => {
        this.events.push({
          id: element2.Id,
          start: new Date(element2.Date),
          end: new Date(element2.Date),
          title: element2.Description,
          color: colors.green,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: false
        });
      });
      this.viewDate = new Date(this.LeaveSelectOption, 0, 1);
    }, 2000);
  }
  removeLeaveCalendar(Id: number) {
    Swal.fire({
      title: 'keep it?',
      text: 'Are you sure you want to remove this date?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.genicprofileservice.deleteGenicProfileCalendar(this.currentUser.Token, Id).then(
          res => {
            switch (res.status) {
              case 204:
                Swal.fire({
                  title: 'Deleted!',
                  text: 'Deleted successfully.)',
                  type: 'success',
                  timer: 5000,
                });
                this.genicprofileservice.getGenicProfileCalendar(this.currentUser.Token, this.LeaveSelectOption);
                break;
              case 401:
                Swal.fire({
                  title: 'Token Expire!',
                  text: 'Please logain you current token is expire',
                  type: 'warning',
                  timer: 5000,
                });
                break;
              default:
                Swal.fire({
                  title: 'Error!',
                  text: res.statusText,
                  type: 'error',
                });
                break;
            }
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Keep it!',
          text: 'Your Leave details is safe.',
          type: 'info',
          timer: 2000
        });
      }
    });
  }

  public handleAddressChange(address: any) {
    this.genicprofileservice.formData.AddressStreet1 = '';
    this.genicprofileservice.formData.AddressStreet2 = '';
    this.genicprofileservice.formData.AddressCity = '';
    this.genicprofileservice.formData.AddressState = '';
    this.genicprofileservice.formData.AddressZipCode = '';
    this.genicprofileservice.formData.AddressCountry = '';

    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    address.address_components.forEach((element: any) => {
      switch (element.types[0]) {
        case 'postal_code': { this.postal_code = element.long_name; break; }
        case 'country': { this.country = element.long_name; break; }
        case 'administrative_area_level_1': { this.administrative_area_level_1 = element.long_name; break; }
        case 'administrative_area_level_2': { this.administrative_area_level_2 = element.long_name; break; }
        case 'locality': { this.locality = element.long_name; break; }
        case 'sublocality_level_1': { this.sublocality_level_1 = element.long_name; break; }
        case 'sublocality_level_2': { this.sublocality_level_2 = element.long_name; break; }
        case 'sublocality_level_3': { this.sublocality_level_3 = element.long_name; break; }
        case 'neighborhood': { this.neighborhood = element.long_name; break; }
        case 'route': { this.route = element.long_name; break; }
        case 'street_number': { this.street_number = element.long_name; break; }
      }
    });
    this.genicprofileservice.formData.Latitude = this.lat.toString();
    this.genicprofileservice.formData.Longitude = this.lng.toString();
    this.genicprofileservice.formData.AddressStreet1 = this.street_number;
    this.genicprofileservice.formData.AddressStreet2 = this.route;
    this.genicprofileservice.formData.AddressCity = this.administrative_area_level_2 + this.sublocality_level_3 +
      this.sublocality_level_2 +
      this.sublocality_level_1 + this.neighborhood;
    this.genicprofileservice.formData.AddressState = this.administrative_area_level_1 + this.locality;
    this.genicprofileservice.formData.AddressZipCode = this.postal_code;
    this.genicprofileservice.formData.AddressCountry = this.country;

    this.street_number = '';
    this.route = '';
    this.administrative_area_level_2 = '';
    this.sublocality_level_3 = '';
    this.sublocality_level_2 = '';
    this.sublocality_level_1 = '';
    this.neighborhood = '';
    this.administrative_area_level_1 = '';
    this.locality = '';
    this.postal_code = '';
    this.country = '';
  }
  public findAddressByPostalCode(pc: string) {
    this.IsPostalSearch = true;
    if (pc.length === 6) {
      this.propertyservice.getAddressUsingPostalCode(Number(pc)).then(
        res => {
          this.addressresult = res.results;
        }
      );
      setTimeout(() => {
        if (this.addressresult.length > 0) {
          // tslint:disable-next-line: no-use-before-declare
          this.lat = this.addressresult[0].geometry.location.lat;
          this.lng = this.addressresult[0].geometry.location.lng;
          this.addressresult[0].address_components.forEach((element: any) => {
            switch (element.types[0]) {
              case 'postal_code': { this.postal_code = element.long_name; break; }
              case 'country': { this.country = element.long_name; break; }
              case 'administrative_area_level_1': { this.administrative_area_level_1 = element.long_name + ' '; break; }
              case 'administrative_area_level_2': { this.administrative_area_level_2 = element.long_name + ' '; break; }
              case 'locality': { this.locality = element.long_name + ' '; break; }
              case 'neighborhood': { this.neighborhood = element.long_name + ' '; break; }
            }
          });
          this.genicprofileservice.formData.Latitude = this.lat.toString();
          this.genicprofileservice.formData.Longitude = this.lng.toString();
          this.genicprofileservice.formData.AddressCity = this.administrative_area_level_2 + this.neighborhood;
          this.genicprofileservice.formData.AddressState = this.administrative_area_level_1 + this.locality;
          this.genicprofileservice.formData.AddressZipCode = this.postal_code;
          this.genicprofileservice.formData.AddressCountry = this.country;
        }
        this.IsPostalSearch = false;
      }, 1000);
    }
  }
  /***************** Genic Profile End *******************/


  /*****************Leave Management Begin ****************/
  LeaveManagemntSelectChange() {
    this.genicprofileservice.LeaveManagementList = [];
    setTimeout(() => {
      this.genicprofileservice.LeaveCalendarForAdminPostSync(this.currentUser.Token)
        .subscribe(res => {
          this.genicprofileservice.LeaveManagementList = [];
          this.genicprofileservice.LeaveManagementList = res as GenicProfileCalendar[];
          this.leavecount();
        }, error => console.log(error));
    }, 500);
    setTimeout(() => {
      this.genicprofileservice.getPendingLeaveRequest(this.currentUser.Token).subscribe(res => {
        this.genicprofileservice.PendingLeaveRequest.Count = res as number;
      }, error => console.log(error));
    }, 800);
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  approvedLeaveManagement(Id: number, Date1: Date) {
    let formatdate = new Date(Date1).toISOString().slice(0, 10);
    console.log(formatdate);
    Swal.fire({
      title: 'Leave Request',
      text: 'All allocated appointment/s for ' + formatdate + ' will be Unallocated automatically; ' +
        'make sure you allocate it to another available ' + this.currentUser.Engineer + '.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      confirmButtonText: 'Yes, Approved',
      cancelButtonColor: 'red',
      cancelButtonText: 'Reject',
    }).then((result) => {
      if (result.value) {
        this.genicprofileservice.approvedleaveAdmin(this.currentUser.Token, Id, 'Approved').then(
          res => {
            switch (res.status) {
              case 202:
                Swal.fire({
                  title: 'Approved!',
                  text: 'Leave Approved successfully.)',
                  type: 'success',
                  timer: 5000,
                });
                break;
              case 200:
                Swal.fire({
                  title: 'Approved!',
                  text: res.body.toString(),
                  type: 'success',
                  timer: 10000,
                });
                break;
              case 204:
                Swal.fire({
                  title: 'Invalid Request!',
                  text: 'Invalid Request',
                  type: 'warning',
                  timer: 5000,
                });
                break;
              case 208:
                Swal.fire({
                  title: 'Token Expire!',
                  text: 'Please logain you current token is expire',
                  type: 'warning',
                  timer: 5000,
                });
                break;
              default:
                Swal.fire({
                  title: 'Error!',
                  text: res.statusText,
                  type: 'error',
                });
                break;
            }
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.genicprofileservice.approvedleaveAdmin(this.currentUser.Token, Id, 'Rejected').then(
          res => {
            switch (res.status) {
              case 202:
                Swal.fire({
                  title: 'Reject!',
                  text: 'Leave is Rejected',
                  type: 'info',
                  timer: 2000,
                });
                this.LeaveCalendarSelectChange();
                break;
              case 204:
                Swal.fire({
                  title: 'Invalid Request',
                  text: 'Invalid Request',
                  type: 'warning',
                  timer: 5000,
                });
                break;
              case 208:
                Swal.fire({
                  title: 'Token Expire!',
                  text: 'Please logain you current token is expire',
                  type: 'warning',
                  timer: 5000,
                });
                break;
              default:
                Swal.fire({
                  title: 'Error!',
                  text: res.statusText,
                  type: 'error',
                });
                break;
            }
          }
        );
      }
    });
    setTimeout(() => {
      this.LeaveManagemntSelectChange();
    }, 4000);
  }
  cancelledLeaveCalendar(Id: number) {
    Swal.fire({
      title: 'Cancellation',
      text: 'Are you sure you want to cancelled you leave request',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      confirmButtonText: 'Yes, cancelled',
      cancelButtonColor: 'red',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.genicprofileservice.approvedleaveAdmin(this.currentUser.Token, Id, 'Cancelled').then(
          res => {
            switch (res.status) {
              case 202:
                Swal.fire({
                  title: 'cancelled!',
                  text: 'Cancelled successfully.)',
                  type: 'success',
                  timer: 5000,
                });
                break;
              case 203:
                Swal.fire({
                  title: 'Token Expire!',
                  text: 'Please logain you current token is expire',
                  type: 'warning',
                  timer: 5000,
                });
                break;
              case 204:
                Swal.fire({
                  title: 'Invalid Request!',
                  text: 'Invalid Request or try again after re-login',
                  type: 'warning',
                  timer: 5000,
                });
                break;
              default:
                Swal.fire({
                  title: 'Error!',
                  text: res.statusText,
                  type: 'error',
                });
                break;
            }
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Keep it!',
          text: 'Your Leave request is safe.',
          type: 'info',
          timer: 2000
        });
      }
    });
    setTimeout(() => {
      this.LeaveManagemntSelectChange();
    }, 4000);
  }
  onStatusChange(id: number) {
    this.genicprofileservice.updateHolidayStatus(id, this.currentUser.Token).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Done!',
          text: 'Status change successfully.',
          type: 'success',
          timer: 2000
        });
      }
    }, error => console.log(error));
  }
  /*****************Leave Management End *****************/


  onEngineerItemSelect(e) {
    this.genicprofileservice.TicketFilter.EngineerId = [];
    e.value.forEach(element => {
      this.genicprofileservice.TicketFilter.EngineerId.push(element.Id);
    });
    this.LeaveManagemntSelectChange();
  }

  onDateChange() {
      this.Isdatepickershow = false;
      this.LeaveManagemntSelectChange();
  }
  showdatepicker() {
    if (this.Isdatepickershow) {
      this.Isdatepickershow = false;
    } else {
      this.Isdatepickershow = true;
    }
  }
  leavecount() {
    this.approvedleavecount = this.genicprofileservice.LeaveManagementList.filter(x => x.Id !== 0 && x.Status === 'Approved').length;
    this.pendingleavecount = this.genicprofileservice.LeaveManagementList.filter(x => x.Id !== 0 && x.Status === 'Pending').length;
    this.rejectedleavecount = this.genicprofileservice.LeaveManagementList.filter(x => x.Id !== 0 && x.Status === 'Rejected').length;
    this.cancelledleavecount = this.genicprofileservice.LeaveManagementList.filter(x => x.Id !== 0 && x.Status === 'Cancelled').length;
  }
}
