import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { TicketService } from '../../../services/ticket.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { TicketCustomerPopupComponent } from '../ticket-customer-popup/ticket-customer-popup.component';
import { NgbTimeAdapter, NgbDateAdapter, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EngineerService } from '../../../services/engineer.service';
import { ProductService } from '../../../services/product.service';
import { Ticket, TicketIssueType, TicketItem, TicketWiseIssueType } from '../../../services/ticket.module';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup} from '@angular/forms';
import { NgbDateToStringAdapter } from '../../../ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from '../../../ngb-time-to-string-adapter';
import { TicketPropertyPopupComponent } from '../ticket-property-popup/ticket-property-popup.component';
import { PropertyService } from '../../../services/property.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Login } from '../../../services/login.mudule';
import { Engineer } from '../../../services/engineer.module';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { QuoteService } from '../../../services/quote.service';
import { Quote } from '../../../services/quote.module';
import { UserlogService } from '../../../services/userlog.service';
import { TicketAllocateListPopupComponent } from '../ticket-allocate-list-popup/ticket-allocate-list-popup.component';
import { TicketContactpersonPopupComponent } from '../ticket-contactperson-popup/ticket-contactperson-popup.component';
import { NotificationService } from '../../../services/notification.service';
import { Subject } from 'rxjs';
import { ReportService } from '../../../services/report.service';
import { ReportsWarranty } from '../../../services/report.module';
import { Product, Service } from '../../../services/product.module';
import { environment } from '../../../../environments/environment';
import { GenericService } from 'src/app/services/generic.service';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter },
  ],
})
export class TicketCreateComponent implements OnInit, AfterViewInit, OnDestroy {
  refresh: Subject<any> = new Subject();
  tempCopyTicketId: string;
  ticketIsCopyed: boolean = false;
  constructor(
    public titleService: Title,
    public service: TicketService,
    public docservice: DocumentUploadService,
    public engineerservice: EngineerService,
    public customerservice: CustomerService,
    public productservice: ProductService,
    public propertyservice: PropertyService,
    public reportservice: ReportService,
    public quoteservice: QuoteService,
    private dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService,
    public loginservice: AuthenticationService,
    public genicProfile: GenicProfileService,
    public genicservice: GenericService,
    public logService: UserlogService,
    public notifyService: NotificationService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.productdata = [];
    this.customerservice.CustomerDepartmentTypeList = [];
    this.IsTicketCreateloading = false;
  }
  @ViewChild('ticketdetailModalWeekbutton', { static: false }) detailModalWeekbutton: ElementRef;
  currentUser: Login;
  localPrependUrl: string;
  createbuttontext: string;
  IsTicketCreateloading: boolean;
  ItemBtn = 'Add';
  meridian = true;
  ItemIsValid = true;
  IsCustomerIsValid = true;
  ItemProductIsValid = true;
  ItemServiceIsValid = true;
  ItemQuantityIsValid = true;
  ItemUnitCosttIsValid = true;
  ItemUniqueIsValid = true;

  OneOffIsVisible = true;
  RecurringIsVisible = true;
  PropertyAdrresssVisible = false;

  TicketNoChange = false;
  TicketNoChangeBtn = 'Change';
  newUniqueID;
  locateTicketUniqueID;
  recurringList: any = [];
  tooltip: boolean = false;
  IsTeamShow = false;
  IsRequest = false;
  EngineerLocalList: Engineer[];
  QuatationLocalList: Quote[];
  IsItemMaintance: boolean;
  IsCustomerSelected = true;
  isTitleValid = true;
  TicketFor: string;
  // new section
  tempAvailableStock: number;
  tempSalePrice: number;
  tempIndexQty = 0;
  tempInWarranty: boolean = false;
  IshowStockSection = true;
  IsDefaultTicketCreate = true;
  // new section
  customwarrantyShow: boolean;
  customwarrantyShowEdit: boolean;
  currentUTCDate = new Date();
  localdate = new Date(Date.UTC(this.currentUTCDate.getFullYear(),
    this.currentUTCDate.getMonth(),
    this.currentUTCDate.getDate(), 8, 0, 0));
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
  public uploader: FileUploader = new FileUploader({});
  config = { displayKey: 'Name', search: true, limitTo: 4, height: '250px'};
  TicketIssueTypeOptions = [];
  TicketIssueTypeSelectedOptions = [];
  btnText = 'Add';
  selectForm: FormGroup;
  oldTicketTeam: any = [];
  // calendar: NgbCalendar;
  IsSearchTrue: boolean;
  model: NgbDateStruct;
  date: {year: number, month: number};
  disabledDates: NgbDateStruct[] = [];

  public productoptions: any;
  productdata: any;
  loader: boolean = false;
  recurringchangesbtn: number = 0;
  isgroupDisabled: boolean = false;
  skippublickholiday: boolean = true;
  isDisabled = (date: NgbDateStruct, current: {month: number, year: number}) => {
    return this.disabledDates.find(x => NgbDate.from(x).equals(date)) ? true : false;
  }
  isDisabledCss = (date: NgbDate) => {
    return this.disabledDates.find(x => NgbDate.from(x).equals(date)) ? true : false;
  }
  ngOnInit() {
    if(this.currentUser.Type === 'Admin' || this.currentUser.Type === 'SubAdmin'){
      if (!this.currentUser.Permissions.TicketCreate) { this.router.navigate(['/dashboard']); }
    }
    if(this.currentUser.Type === 'Engineer'){
      if (!this.currentUser.Permissions.CanEngineerCreateTicket) { this.router.navigate(['/dashboard']); }
    }
    this.disabledSelectDate();
    if(this.currentUser.Type === 'SubAdmin') { this.isgroupDisabled = true; }
    this.service.formData.NetAmount = 0.00;
    this.genicProfile.TicketFilter.IsReadyQuote = false;
    this.genicProfile.TicketFilter.IsReadyInvoice = false;
    // new section
    this.tempAvailableStock = -1;
    this.tempSalePrice = 0;
    this.IsDefaultTicketCreate = true;
    // new section
    this.IsItemMaintance = false;
    this.IsSearchTrue = false;
    this.newUniqueID = 0;
    this.locateTicketUniqueID = this.service.formData.TicketUniqueID;
    this.genicProfile.getGenicProfile(this.currentUser.Token);
    this.service.Ticketlist = [];
    this.service.TicketTeamList = [];
    this.service.TicketItemList = [];
    this.service.TicketAttachmentList = [];
    this.service.TicketIssueTypeList = [];
    this.engineerservice.Engineerlist = [];
    this.propertyservice.Propertylist = [];
    this.EngineerLocalList = [];
    this.QuatationLocalList = [];
    this.genicservice.refrestTicketIssueTypelist(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
        this.genicservice.TicketIssueTypelist = response.result as TicketIssueType[];
      }}, error =>  console.log(error));
    this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 this.engineerservice.Engineerlist = response.result as Engineer[];
      }}, error =>  console.log(error));
    /// Product Item
    this.productservice.refrestServicesList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                this.productservice.serviceformList = response.result as Service[];
              }}, error =>  console.log(error));
    this.productservice.refrestProductsList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                this.productservice.Productlist = response.result as Product[];
      }}, error =>  console.log(error));
    this.getNotificationData();
    switch (this.router.url) {

      case '/tickets/ticket-create':
        this.createbuttontext = 'Create';
        this.btnText = 'Add';
        this.service.formData.IsRequestExists = false;
        this.service.formData.CustomerName = 'CUSTOMER NAME';
        this.titleService.setTitle(this.currentUser.Ticket + ' Create | Genic Solution');
        break;

      case '/tickets/ticket-edit':
        if (this.service.formData.TicketId === '') { this.router.navigate(['/tickets']); }
        this.titleService.setTitle(this.currentUser.Ticket + ' Edit | Genic Solution');
        this.service.getTicketById(this.currentUser.Token, this.service.formData.Id).subscribe( res => {
          if (res) { const response = res as any;
                     if (response.Message === 'success') {
                        this.service.formData = response.result;
                      }
                     if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                      }
        }}, error =>  console.log(error));
        this.service.formData.IsRequestExists = false;
        this.createbuttontext = 'Update';
        this.btnText = 'Edit';
        // For Email template
        this.oldTicketTeam = this.service.formData.TicketTeams;
        if (this.service.formData.OneOffScheduled) {
          this.OneOffIsVisible = false;
        } else {
          this.OneOffIsVisible = true;
        }
        this.PropertyAdrresssVisible = true;
        setTimeout(() => {
          this.refrestTicketTeamlist();
          this.refrestTicketItemlist();
          this.service.refrestTicketAttachmentList(this.service.formData.Id);
          this.customerservice.refrestCustomerIdWiseDepartmentList(this.service.formData.CustomerId);
          if (this.service.formData.Status === 'NEW REQUEST') {
            this.service.formData.OneOffScheduled = false;
            this.OneOffIsVisible = true;
            }
        }, 1000);
        break;
      case '/tickets/ticket-create-from-quote':
        this.titleService.setTitle('Ticket Create From Quote | Genic Solution');
        this.service.formData.IsRequestExists = false;
        this.service.formData.PropertyId = null;
        this.createbuttontext = 'Create';
        this.btnText = 'Add';
        this.PropertyAdrresssVisible = true;
        this.service.createTicketFromQuotation(this.service.formData.QuoteId, this.currentUser.Token);
        setTimeout(() => {
          this.propertyservice.refrestPropertyById(this.service.formData.PropertyId);
          this.refrestTicketTeamlist();
          this.refrestTicketItemlist();
          this.service.refrestTicketAttachmentList(this.service.formData.Id);
          this.quoteservice.refrestQuoteListByCustomer(this.service.formData.CustomerId);
          this.customerservice.refrestCustomerIdWiseDepartmentList(this.service.formData.CustomerId);
          }, 2000);
        setTimeout(() => {
          this.service.formData.NetAmount = 0.00;
          this.service.TicketItemList.forEach(element => {
            this.service.formData.NetAmount += element.ItemTotalCost;
          });
          this.service.formData.NetAmount.toFixed(2);
          this.QuatationLocalList = this.quoteservice.QuoteList.filter(x => x.Status === 4 && x.TicketNo === null);
        }, 3000);
        break;
        case '/tickets/ticket-copy':
          if (this.service.formData.TicketId === '') { this.router.navigate(['/tickets']); }
          this.titleService.setTitle(this.currentUser.Ticket + ' Copy | Genic Solution');
          this.tempCopyTicketId = this.service.formData.Id;
          this.ticketIsCopyed = true;
          this.createbuttontext = 'Create';
          this.btnText = 'Add';
          setTimeout(() => {
            this.OpenAddClienDialog()
          }, 1000);
          break;
    }
    setTimeout(() => {
      this.TicketIssueTypeOptions = this.genicservice.TicketIssueTypelist;
      if (this.router.url === '/tickets/ticket-edit') {
        this.TicketIssueTypeOptions = this.genicservice.TicketIssueTypelist;
        this.service.formData.TicketWiseIssueType.forEach(w => {
          let Obj: any;
          Obj = new Object();
          Obj.Id = w.TicketIssueTypeId;
          Obj.Name = w.IssueTypeName;
          Obj.IsAssigned = false;
          this.TicketIssueTypeSelectedOptions.push(Obj);
          Obj = new Object();
        });
      }
      this.InitialazeProductDropdown();
    }, 3000);
  }

    InitialazeProductDropdown(): void {
      let tempurl = '';
      if (this.service.TicketItem.Type === 'Product'){
        tempurl = '/api/products/GetProductsForSelect2Dropdown/';
      }
      if (this.service.TicketItem.Type === 'Service'){
        tempurl = '/api/products/GetServicesForSelect2Dropdown/';
      }
      let prod = this.service.TicketItem.Type;
      if(this.service.TicketItem.Type === 'Product') { prod = this.currentUser.Product; }
      this.productdata = {
        multiple: false,
        placeholder: 'Select ' + prod,
        minimumInputLength: 1,
        ajax: {
          url:  environment.apiUrl + tempurl + this.currentUser.Token,
          dataType: 'json',
          delay: 250,
          data: function (params) {
            return {
              q: params.term,
              page: params.page
            };
          },
          processResults: function (data, params) {
            params.page = params.page || 1;
            return {
              results: data.items,
              pagination: {
                more: (params.page * 30) < data.total_count
              }
            };
          },
          cache: true
        },
        escapeMarkup: function (markup) { return markup; },
        templateResult: this.templateResult,
        templateSelection: this.templateSelection
      };
    }
    // function for result template
    public templateResult(repo) {
      if (repo.loading) { return repo.text; }
      return '<div class="select2-result-repository clearfix"><div class="select2-result-repository__meta">' +
      '<div class="select2-result-repository__title"><strong>' + repo.full_name + '</strong></div>' +
      '<div class="select2-result-repository__description">' + repo.description + '</div></div></div>';
    }
    templateSelection(repo) {
      return repo.full_name || repo.text;
    }
  // Get Notification data
getNotificationData() {
  this.notifyService.getNotification(this.currentUser.Token)
  .subscribe( res => {
    if (res) {
     let obj: any = new Object();
     obj = res;
     this.notifyService.NotificationData = obj;
    }
  }, error =>  console.log(error));
}
  ngAfterViewInit() {

  }
  refrestTicketTeamlist() {
    this.service.refrestTicketTeamlist(this.service.formData.Id, this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.service.TicketTeamList = [];
                    this.service.TicketTeamList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  refrestTicketItemlist() {
    this.service.refrestTicketItemlist(this.currentUser.Token, this.service.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.service.TicketItemList = [];
                    this.service.TicketItemList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  OpenAddClienDialog() {
    this.service.RunBlankModule();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(TicketCustomerPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      let emailarray = res.x.ArrayofKeys.filter(r => r.Type === 'Email' && r.IsDefault === true);
      if (emailarray.length === 1) {
        emailarray = emailarray[0].Value;
      } else {
        emailarray = null;
      }
      let phonearray = res.x.ArrayofKeys.filter(r => r.Type === 'Phone' && r.IsDefault === true);
      if (phonearray.length === 1) {
        phonearray = phonearray[0].Value;
      } else {
        phonearray = null;
      }
      if (res !== '') {
        this.OpenAddnContactPersionDialog();
        this.PropertyAdrresssVisible = false;
      }
    });
  }

  OpenAddnContactPersionDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(TicketContactpersonPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res !== '') {
        this.OpenAddPropertyDialog();
        this.PropertyAdrresssVisible = false;
      }
    });
  }

  ChangePropertyAddress() {
    this.OpenAddPropertyDialog();
  }

  OpenAddPropertyDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(TicketPropertyPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res !== '') {
        if (res === undefined) {
          this.router.navigate(['/properties/property-add/'], {
            queryParams:
            {
              'id': this.service.formData.CustomerId,
              'name': this.service.formData.CustomerName,
              'companyname': this.service.formData.CustomerCompanyName
            }
          });
        } else {
          this.PropertyAdrresssVisible = true;
          this.service.formData.PropertyId = res.x.Id;
          this.service.formData.CustomerAddress = res.x.AddressStreet1 + ' ' + res.x.AddressStreet2 + ', ' +
            res.x.AddressUnitNo + ' ' +
            res.x.AddressCountry + ' ' + res.x.AddressZipCode;
        }
      }
      if(this.ticketIsCopyed) {
        this.service.formData.TicketConvertedFrom = 'copy';
        this.service.formData.TicketConvertedID = this.tempCopyTicketId;
      }
      if (this.IsDefaultTicketCreate) {
        setTimeout(() => {
          this.service.createTemporaryTicket(this.currentUser.Token).subscribe( res => {
            if (res) { const response = res as any;
                       if (response.Message === 'success') {
                        this.service.formData = response.result as Ticket;
                        this.service.formData.Customers = this.customerservice.formData;
                        }
                       if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                        }
            }}, error =>  console.log(error));
        }, 500);
        setTimeout(() => {
          this.refrestTicketTeamlist();
          this.refrestTicketItemlist();
          this.service.refrestTicketAttachmentList(this.service.formData.Id);
          this.quoteservice.refrestQuoteListByCustomer(this.service.formData.CustomerId);
          this.customerservice.refrestCustomerIdWiseDepartmentList(this.service.formData.CustomerId);
        }, 1000);
        setTimeout(() => {
          this.CheckedUncheckedEngineerList();
          if (this.currentUser.Permissions.ProductWarranty) {
            this.OnTicketForChange(true);
          }
        }, 2000);
        setTimeout(() => {
          this.service.formData.NetAmount = 0.00;
          this.service.TicketItemList.forEach(element => {
            this.service.formData.NetAmount += element.ItemTotalCost;
          });
          this.service.formData.NetAmount.toFixed(2);
          this.QuatationLocalList = this.quoteservice.QuoteList.filter(x => x.Status === 2 && x.TicketNo === null);
        }, 2000);
      }
    });
  }
  changeValue(event) {
    this.service.formData.TicketWiseIssueType = [];
    let datalist = '';
    if (this.service.formData.Status.toUpperCase() !== 'NEW REQUEST')   {
      event.value.forEach(el => {
        datalist += el.Name + ', ';
        const t1 = datalist.slice(0, datalist.length - 2);
        this.service.formData.Title = t1;
        this.service.formData.TicketWiseIssueType.push({
          Id: 0,
          TicketId: this.service.formData.Id,
          TicketIssueTypeId: Number(el.Id),
          IssueTypeName: el.Name
        });
        this.service.TicketWiseIssueTypeData = new TicketWiseIssueType();
      });
    }
    this.service.postTTicketWiseIssueTypeDetails(this.service.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }
  onAppointmentDateSelect() {
    this.service.formData.AppointmentEnd = this.service.formData.AppointmentStart;
    this.service.formData.AppointmentStart = this.service.formData.AppointmentStart.split('T')[0] + 'T10:00:00Z';
    this.service.formData.AppointmentEnd = this.service.formData.AppointmentStart.split('T')[0] + 'T11:00:00Z';
  }
  CreateTicketFromQuotation(e, q: Quote) {
    if (e.target.checked) {
      this.quoteservice.QuoteData = Object.assign({}, q);
      this.service.formData.CustomerId = q.CustomerId;
      this.service.formData.Description = q.ClientRemark;
      this.service.formData.InternalNoteDescription = q.InternalNotes;
      this.service.formData.CustomerName = q.CustomerName;
      this.service.formData.CustomerEmail = q.CustomerEmail;
      this.service.formData.CustomerContactNo = q.CustomerContactNo;
      this.service.formData.PropertyId = q.PropertyId;
      this.service.formData.NetAmount = q.SubTotal;
      this.service.formData.TicketConvertedFrom = 'QUOTE';
      this.service.formData.TicketConvertedID = q.Id;
      this.service.formData.NetAmount = q.SubTotal;

      setTimeout(() => {
        this.service.formData.Title = q.JobTitle;
        this.service.formData.Description = q.ClientRemark;
        this.service.formData.InternalNoteDescription = q.InternalNotes;
        this.service.formData.TicketConvertedFrom = 'QUOTE';
        this.service.formData.TicketConvertedID = q.Id;
        this.service.formData.QuoteId = q.QuoteId;
        this.quoteservice.posQuoteItemToTicketItem(this.currentUser.Token,q.Id, this.service.formData.Id).subscribe( res => {
          if (res) { const response = res as any;
                     if (response.Message === 'success') {
                      this.router.navigate(['/tickets/ticket-create-from-quote']);
                      }
        }}, error =>  console.log(error));
      }, 1000);
      setTimeout(() => {
        this.refrestTicketItemlist();
      }, 2000);
    } else {
      this.service.formData.Title = '';
      this.service.formData.Description = '';
      this.service.formData.InternalNoteDescription = '';
      this.service.formData.NetAmount = 0.00;
      this.service.formData.TicketConvertedFrom = null;
      this.service.formData.TicketConvertedID = null;
      this.service.createTemporaryTicket(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.service.formData = response.result as Ticket;
                    }
                   if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                    }
        }}, error =>  console.log(error));
      setTimeout(() => {
        this.refrestTicketItemlist();
        this.refrestTicketTeamlist();
      }, 2000);
    }
  }
  onSubmit() {
    this.IsCustomerSelected = true;
    this.isTitleValid = true;
    if (this.service.formData.CustomerId === null || this.service.formData.CustomerId === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('warning', 'select customer');
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) { }
      this.IsCustomerSelected = false;
      return false;
    }
    if (this.service.formData.RecurringScheduled === true) {
      this.toastr.warning('warning', 'Cannot create Recurring as an unscheduled');
      return false;
    }
    if (this.service.formData.Title.length === 0) {
      this.toastr.warning('warning', 'Please enter ' + this.currentUser.Ticket + ' title');
      this.isTitleValid = false;
      return false;
    }
    if (!this.service.formData.OneOffScheduled) {
      if (this.service.formData.AppointmentStart === null) {
        this.toastr.warning('warning', 'Please select appointment date');
        return false;
      }
    }
    if (this.service.formData.AppointmentStart !== null && this.service.formData.AppointmentEnd !== null) {
      if (new Date(this.service.formData.AppointmentStart) >= new Date(this.service.formData.AppointmentEnd)) {
        this.toastr.warning('warning', 'Start Time is lessthen end time');
        return false;
      }
    }
    this.service.formData.OneOffAppointmentDate = this.service.formData.AppointmentStart;
    const sTime = new Date(this.service.formData.AppointmentStart);
    const eTime = new Date(this.service.formData.AppointmentEnd);
    this.service.formData.OneOffStartTime =
      sTime.getUTCHours().toString().padStart(2, '0') + ':' +
      sTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
      sTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
      sTime.getUTCMilliseconds().toString().padStart(3, '0');
    this.service.formData.OneOffEndTime =
      eTime.getUTCHours().toString().padStart(2, '0') + ':' +
      eTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
      eTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
      eTime.getUTCMilliseconds().toString().padStart(3, '0');
    this.createbuttontext = 'Please wait...';
    this.IsTicketCreateloading = true;
    //this.service.formData.OneOffAppointmentDate.toLocaleString();
    this.service.formData.RecurringId = Number(this.service.formData.RecurringId);
    this.service.formData.TicketUniqueID = Number(this.service.formData.TicketUniqueID);
    this.service.formData.RecurringDuration = Number(this.service.formData.RecurringDuration);
    this.service.formData.RecurringVisitFrequency = Number(this.service.formData.RecurringVisitFrequency);
    this.service.formData.RecurringTotalVisit = Number(this.service.formData.RecurringTotalVisit);
    this.service.formData.Priority = Number(this.service.formData.Priority);
    this.service.formData.SMTPId = Number(this.service.formData.SMTPId);
    this.service.putTicketDetails(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  if (response.result === 'Insert') {
                    const TId  = this.service.formData.Id;
                    const isCust = this.notifyService.NotificationData.CreateTicketCustomer;
                    const isAdmin =  this.notifyService.NotificationData.CreateTicketAdmin;
                    const AdminId = this.currentUser.Id;
                    if (isCust === true || isAdmin === true) {
                      this.notifyService.NewTicketEmailNotification(TId, isCust, isAdmin, AdminId)
                      .subscribe( resp => {
                        if (resp) {
                        }
                      }, error =>  console.log(error));
                    }
                    // This section is used for email notification
                    const des2 = this.currentUser.Ticket + ' No : ' + this.service.formData.TicketId + ', is added by '
                      + this.currentUser.FullName + ', for Customer : '
                      + this.service.formData.CustomerName + ', ' + this.currentUser.Ticket + ' title ' +
                      this.service.formData.Title + ', Amount of $ ' + this.service.formData.NetAmount + '.00' +
                      ', Description : ' + this.service.formData.Description + ', Internal note : '
                      + this.service.formData.InternalNoteDescription +
                      ', on dated : ' + new Date(Date.parse(Date()));
                    const Activity2 = 'New ' + this.currentUser.Ticket + ' No : ' + this.service.formData.TicketId + ', is created Amount of :$ '
                      + this.service.formData.NetAmount + '.00';
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.FullName, this.currentUser.Ticket,
                      this.service.formData.Id, 'Added', des2, Activity2).subscribe();
                    this.router.navigate(['/tickets/']);
                  }
                  if (response.result === 'Update') {
                    const TId1  = this.service.formData.Id;
                    const isCust1 = this.notifyService.NotificationData.CreateTicketCustomer;
                    const isAdmin1 =  this.notifyService.NotificationData.CreateTicketAdmin;
                    const AdminId1 = this.currentUser.Id;
                    this.ReAllocationEmailNotification(TId1, isCust1, isAdmin1, AdminId1);
                    // Update email Notification
                    const des3 = this.currentUser.Ticket + ' No : ' + this.service.formData.TicketId + ', is updated by '
                      + this.currentUser.FullName + ', for Customer : '
                      + this.service.formData.CustomerName + ', ' + this.currentUser.Ticket + ' title ' +
                      this.service.formData.Title + ', Amount of $ ' + this.service.formData.NetAmount + '.00' +
                      ', Description : ' + this.service.formData.Description + ', Internal note : '
                      + this.service.formData.InternalNoteDescription +
                      ', on dated : ' + new Date(Date.parse(Date()));
                    const Activity3 = 'New ' + this.currentUser.Ticket + ' No : ' + this.service.formData.TicketId + ', is updated, Amount of :$ '
                      + this.service.formData.NetAmount + '.00';
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.FullName, this.currentUser.Ticket,
                      this.service.formData.Id, 'Modify', des3, Activity3).subscribe();
                    this.router.navigate(['/tickets/']);
                  }
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  this.createbuttontext = 'try again';
                  this.IsTicketCreateloading = false;
                  }
      }}, error =>  console.log(error));
  }
  TicketType(type) {
    if (type === 'kt_tabs_3_1') {
      this.service.formData.TicketType = 'One-Off Ticket';
    } else if (type === 'kt_tabs_3_2') {
      this.service.formData.TicketType = 'Recurring Ticket';
      const d1 = this.localdate.getFullYear().toString().padStart(4, '0') + '-' +
        (this.localdate.getMonth() + 1).toString().padStart(2, '0') + '-' +
        this.localdate.getDate().toString().padStart(2, '0') + 'T10:00:00Z';
      const d2 = this.localdate.getFullYear().toString().padStart(4, '0') + '-' +
        (this.localdate.getMonth() + 1).toString().padStart(2, '0') + '-' +
        this.localdate.getDate().toString().padStart(2, '0') + 'T11:00:00Z';
      this.service.formData.AppointmentStart = d1;
      this.service.formData.AppointmentEnd = d2;
    }
  }
  public RecurringTimeCalculator() {
    let numdays = 0;
    let visitfruq = 0;
    this.service.formData.RecurringStartDate = this.service.formData.AppointmentStart;
    const now = new Date(this.service.formData.RecurringStartDate);
    numdays = Number(this.service.formData.RecurringDuration);
    visitfruq = this.service.formData.RecurringVisitFrequency;
    switch (Number(this.service.formData.RecurringDuration)) {
      case 1:
        this.service.formData.RecurringTotalVisit = numdays * visitfruq;
        now.setDate(new Date(this.service.formData.RecurringStartDate).getDate() + (this.service.formData.RecurringTotalVisit - 1));
        this.service.formData.RecurringEndDate = now.toISOString();
        setTimeout(() => { this.OnTicketRecurringHelper(0); }, 500);
        break;
      case 7:
        this.service.formData.RecurringTotalVisit = numdays * visitfruq;
        now.setDate(new Date(this.service.formData.RecurringStartDate).getDate() + (this.service.formData.RecurringTotalVisit - 1));
        this.service.formData.RecurringEndDate = now.toISOString();
        setTimeout(() => { let el1: HTMLElement = document.getElementById('ticketshowWeekModal') as HTMLElement; el1.click(); }, 500);
        break;
      case 30:
        this.service.formData.RecurringTotalVisit = numdays * visitfruq;
        now.setDate(new Date(this.service.formData.RecurringStartDate).getDate() + (this.service.formData.RecurringTotalVisit - 1));
        this.service.formData.RecurringEndDate = now.toISOString();
        setTimeout(() => { let el2: HTMLElement = document.getElementById('ticketshowMonthModal') as HTMLElement; el2.click(); }, 500);
        break;
      case 33:
          this.service.formData.RecurringTotalVisit = numdays * visitfruq;
          now.setDate(new Date(this.service.formData.RecurringStartDate).getDate() + (this.service.formData.RecurringTotalVisit - 1));
          this.service.formData.RecurringEndDate = now.toISOString();
          setTimeout(() => { let el2: HTMLElement = document.getElementById('ticketshowMonthModal') as HTMLElement; el2.click(); }, 500);
          break;
      case 31:
        this.service.formData.RecurringTotalVisit = numdays * visitfruq;
        now.setDate(new Date(this.service.formData.RecurringStartDate).getDate() + (this.service.formData.RecurringTotalVisit - 1));
        this.service.formData.RecurringEndDate = now.toISOString();
        setTimeout(() => { let el3: HTMLElement = document.getElementById('ticketshowCustomMonthModal') as HTMLElement; el3.click(); }, 500);
        break;
      case 32:
        this.service.formData.RecurringTotalVisit = numdays * visitfruq;
        now.setDate(new Date(this.service.formData.RecurringStartDate).getDate() + (this.service.formData.RecurringTotalVisit - 1));
        this.service.formData.RecurringEndDate = now.toISOString();
        setTimeout(() => { let el3: HTMLElement = document.getElementById('ticketshowCustomMonthModal2') as HTMLElement; el3.click(); }, 500);
        break;
      case 90:
        this.service.formData.RecurringTotalVisit = visitfruq;
        this.service.TicketRecurringHelper.RecurringVisitFrequency = visitfruq;
        setTimeout(() => { this.OnTicketRecurringHelper(3); }, 500);
        break;
      case 180:
          this.service.formData.RecurringTotalVisit = visitfruq;
          this.service.TicketRecurringHelper.RecurringVisitFrequency = visitfruq;
          this.OnTicketRecurringHelper(4);
          break;
    }
    numdays = 0;
    visitfruq = 0;
  }

  clickOntoolTip() {
    if(this.tooltip) {
      this.tooltip = false;
    } else {
      this.tooltip = true;
    }
  }
  public OneOffScheduledLater() {
    if (this.service.formData.OneOffScheduled === true) {
      this.service.formData.OneOffStartTime = null;
      this.service.formData.OneOffEndTime = null;
      this.OneOffIsVisible = false;
    } else {
      this.OneOffIsVisible = true;
    }
  }
  public RecurringScheduledLater() {
    if (this.service.formData.RecurringScheduled === true) {
      this.service.formData.OneOffScheduled = true;
      this.service.formData.OneOffStartTime = null;
      this.service.formData.OneOffEndTime = null;

      this.service.formData.RecurringStartDate = null;
      this.service.formData.RecurringEndDate = null;
      this.service.formData.RecurringTotalVisit = 0;
      this.RecurringIsVisible = false;
    } else {
      this.service.formData.OneOffScheduled = false;
      this.RecurringIsVisible = true;
    }
  }

  /***********************************************************************************************************/
  /////// Ticket Item Begin
  public CalculateItemTotalCost(event) {
    if (this.ItemBtn === 'Add') {
      if (Number(event.target.value) >= 0) {
        this.service.TicketItem.ItemTotalCost
          = Number(this.service.TicketItem.ItemQuantity)
          * Number(this.service.TicketItem.ItemUnitCost);
        this.ItemQuantityIsValid = true;
      } else {
        this.ItemQuantityIsValid = false;
        this.ItemIsValid = false;
        return false;
      }
    } else {
      if (Number(event.target.value) <= 0) {
        this.service.TicketItem.ItemTotalCost
          = Number(this.service.TicketItem.ItemQuantity)
          * Number(this.service.TicketItem.ItemUnitCost);
        this.ItemQuantityIsValid = false;
        this.ItemIsValid = false;
        return false;
      } else {
        this.service.TicketItem.ItemTotalCost
          = Number(this.service.TicketItem.ItemQuantity)
          * Number(this.service.TicketItem.ItemUnitCost);
        this.ItemQuantityIsValid = true;
      }
    }

  }
  public CalculateItemUnitCost(event) {
    if (this.service.TicketItem.Type === 'Product') {
      this.service.TicketItem.ItemUnitCost = Number(event.target.value);
      this.service.TicketItem.ItemTotalCost = Number(this.service.TicketItem.ItemQuantity) * Number(event.target.value);
    } else {
      this.service.TicketItem.ItemTotalCost = Number(event.target.value);
      this.service.TicketItem.ItemQuantity = Number(0);
      this.service.TicketItem.ItemUnitCost = Number(event.target.value);
    }

  }
  public AddItemsToTicket() {
    this.ItemIsValid = true;
    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('Warning', 'Please select a customer first');
      this.ItemIsValid = false;
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) { }
      return false;
    }
    if (this.service.TicketItem.ItemName === '' && this.service.TicketItem.Type === 'Product') {
      this.toastr.warning('Warning', 'Please select a product');
      this.ItemProductIsValid = false;
      this.ItemIsValid = false;
      return false;
    }
    if (this.service.TicketItem.ItemName === '' && this.service.TicketItem.Type === 'Service') {
      this.toastr.warning('Warning', 'Please select a service');
      this.ItemServiceIsValid = false;
      this.ItemIsValid = false;
      return false;
    }
    if (this.service.TicketItem.ItemQuantity === null && this.service.TicketItem.Type === 'Product') {
      this.ItemQuantityIsValid = false;
      this.ItemIsValid = false;
      return false;
    }
    if (this.service.TicketItem.ItemUnitCost === null) {
      this.ItemUnitCosttIsValid = false;
      this.ItemIsValid = false;
      return false;
    }
    if (this.service.TicketItem.UniqId === null || this.service.TicketItem.UniqId === undefined) { this.service.TicketItem.UniqId === ''; }
    if (this.currentUser.Permissions.ProductWarranty) {
      if (this.service.TicketItem.InWarranty) {
        if (this.service.TicketItem.UniqId === '' || this.service.TicketItem.UniqId.length === 0) {
          this.toastr.warning('Warning', 'Please enter a unique id');
          this.ItemUniqueIsValid = false;
          this.ItemIsValid = false;
          return false;
        }
      }
    }
    // new section
    this.service.TicketItem.TicketId = this.service.formData.Id;
    this.service.TicketItem.IsPriseRevised = false;
    this.service.TicketItem.ItemAddredBy = false;
    this.service.TicketItem.ItemAddredById = this.currentUser.Id;
    this.service.TicketItem.ItemAddredByName = this.currentUser.FullName;
    this.service.TicketItem.ItemQuantity = Number(this.service.TicketItem.ItemQuantity);
    this.service.TicketItem.ItemTotalCost = Number(this.service.TicketItem.ItemTotalCost);
    this.service.TicketItem.ItemUnitCost = Number(this.service.TicketItem.ItemUnitCost);
    this.service.TicketItem.WarrantyDays = Number(this.service.TicketItem.WarrantyDays);
    if (this.service.TicketItem.Id === 0) {
      this.service.postTicketItemDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    const des7 = 'A Product : ' + this.service.TicketItem.ItemName + ', is added to the ' + this.currentUser.Ticket +' No ' +
                    this.service.formData.TicketId + ', of Customer : ' + this.service.formData.CustomerName + ', and Qty ' +
                    this.service.TicketItem.ItemQuantity + ', Amount of : $ ' + this.service.TicketItem.ItemTotalCost
                    + ' by user ' + this.currentUser.FullName;
                    const Activity7 = 'An item : ' + this.service.TicketItem.ItemName + ' Amount of : '
                    + this.service.TicketItem.ItemTotalCost +
                    ' is added to the ' + this.currentUser.Ticket +' No : ' + this.service.formData.TicketId;
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.FullName,
                      this.currentUser.Ticket, this.service.formData.Id, 'Added', des7, Activity7).subscribe();
                    this.refrestTicketItemlist();
                    setTimeout(() => { this.calculateTicketCost(); }, 1000);
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
    } else {
      this.service.putTicketItemDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    const des7 = 'A Product : ' + this.service.TicketItem.ItemName + ', is updated from the ' + this.currentUser.Ticket + ' No ' +
                    this.service.formData.TicketId + ', of Customer : ' + this.service.formData.CustomerName + ', and Qty ' +
                    this.service.TicketItem.ItemQuantity + ', Amount of : $ ' + this.service.TicketItem.ItemTotalCost
                    + ' by user ' + this.currentUser.FullName;
                    const Activity7 = 'An item : ' + this.service.TicketItem.ItemName + ' Amount of : '
                    + this.service.TicketItem.ItemTotalCost +
                    ' is updated from the ' + this.currentUser.Ticket +' No : ' + this.service.formData.TicketId;
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.FullName,
                      this.currentUser.Ticket, this.service.formData.Id, 'Modify', des7, Activity7).subscribe();
                    this.refrestTicketItemlist();
                    setTimeout(() => { this.calculateTicketCost(); }, 1000);
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
      this.ItemBtn = 'Add';
    }
    setTimeout(() => {
      this.service.TicketItem.Id = 0;
      this.service.TicketItem.IsPriseRevised = false;
      this.service.TicketItem.ItemAddredBy = false;
      this.service.TicketItem.ItemAddredById = '00000000-0000-0000-0000-000000000000';
      this.service.TicketItem.ItemAddredByName = '';
      this.service.TicketItem.TicketId = '00000000-0000-0000-0000-000000000000';
      this.service.TicketItem.ItemName = '';
      this.service.TicketItem.ItemDescription = '';
      this.service.TicketItem.ItemQuantity = null;
      this.service.TicketItem.ItemUnitCost = null;
      this.service.TicketItem.ItemTotalCost = null;
      this.tempAvailableStock = 0;
      this.tempSalePrice = 0;
      this.IshowStockSection = false;
      this.ItemUniqueIsValid = false;
      this.tempIndexQty = 0;
      this.service.formData.NetAmount.toFixed(2);
      this.service.TicketItem.UniqId = '';
      this.service.TicketItem.InWarranty = false;
      this.service.TicketItem.WarrantyDays = 365;
    }, 2000);
   
    if (this.service.TicketItem.Type === 'Product') {
      this.service.TicketItem.Type = 'Service';
      this.InitialazeProductDropdown();
      setTimeout(() => { this.service.TicketItem.Type = 'Product'; this.InitialazeProductDropdown(); }, 200);
    } else {
      this.service.TicketItem.Type = 'Product';
      this.InitialazeProductDropdown();
      setTimeout(() => { this.service.TicketItem.Type = 'Service'; this.InitialazeProductDropdown(); }, 200);
    }
    
    return this.ItemIsValid;
  }

  PupulateItemList(x: TicketItem) {
    setTimeout(() => {
      this.tempIndexQty = x.ItemQuantity;
      this.service.TicketItem = Object.assign({}, x);
      this.ItemBtn = 'update';
      if (x.InWarranty) { this.tempInWarranty = true; } else { this.tempInWarranty = false; }
    }, 200);
    setTimeout(() => {
      this.service.TicketItem.ItemQuantity = x.ItemQuantity;
    }, 800);
  }

  RemoveItemsFromTicket(id: number) {
    if (confirm('Are you sure to remove this item from ' + this.currentUser.Ticket + '?')) {
      this.service.deleteTicketItemDetails(this.currentUser.Token, id).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                      this.refrestTicketItemlist();
                      setTimeout(() => { this.calculateTicketCost(); }, 1000);
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
    }
  }
  CleareItemsToTicket() {
    this.service.TicketItem = {
      Id: 0,
      TicketId: '',
      ItemName: '',
      Type: 'Product',
      ItemDescription: null,
      ItemQuantity: null,
      ItemUnitCost: null,
      ItemTotalCost: null,
      InWarranty: false,
      WarrantyDays: 365,
      UniqId: ''
    };
    this.ItemBtn = 'Add';
  }
  ///// Ticket Item End
  /***********************************************************************************************************/

  /***********************************************************************************************************/
  /////// Ticket Team Remove from Ticket Begin
  public AddEngineersToTicket(engineerid: string, engineername: string) {

    this.service.deleteTicketTeamDetails(this.service.formData.Id, engineerid,this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.refrestTicketTeamlist();
                    this.toastr.info('info', engineername + ' is removed');
                    const des4 = 'An ' + this.currentUser.Engineer + ' : ' + engineername + ', has been Removed from the ' + this.currentUser.Ticket + ' No ' +
                    this.service.formData.TicketId +
                    ' by user ' + this.currentUser.UserName;
                    const Activity4 = 'An ' + this.currentUser.Engineer + ' : ' + engineername + ', has been Removed from the ' + this.currentUser.Ticket + ' No ' +
                    this.service.formData.TicketId;
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.FullName, this.currentUser.Ticket,
                    this.service.formData.Id, 'Removed', des4, Activity4).subscribe();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  ///// Ticket Team Remove from Ticket End
  /***********************************************************************************************************/

  /***********************************************************************************************************/
  ///// Ticket Attachment Begin
  picked(event) {
    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('Warning', 'Please select a customer first');
      this.ItemIsValid = false;
      try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (err) { }
      return false;
    }
    this.loader = true;
    let t = this.currentUser.Token;
    let type = 'ticketattachment';
    let moduleid = this.service.formData.Id;
    let remark = '';
    let Files = event.target.files;
    let file = Files.item(0);
    this.docservice.uploadDocument(t , type, moduleid, '', remark, file).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.info('upload successfully');
                  this.service.refrestTicketAttachmentList(this.service.formData.Id);
                  this.loader = false;
                  }
                  if (response.Message === 'failure') {
                    this.toastr.warning(response.MessageDescription);
                    this.loader = false;
                  }
    }}, error =>  console.log(error));
    this.loader = false;
  }
  RemoveTicketAttachement(attachmentId: string) {
    if (confirm('Are you sure to delete this attachment?')) {
      this.loader = true;
      let t = this.currentUser.Token;
      let type = 'ticketattachment';
      let moduleid = this.service.formData.Id;
      let id = attachmentId.toString();
      let remark = '';
      this.docservice.RemoveDocument(t , type, moduleid, id, remark).subscribe( res => {
        if (res) { const response = res as any;
                  if (response.Message === 'success') {
                    this.toastr.info(response.MessageDescription);
                    this.service.refrestTicketAttachmentList(this.service.formData.Id);
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
    ///// Ticket Attachment End
  /***********************************************************************************************************/
  public ticketTeamShow() {

  }
  OpenEngineerTeamListForAssignDialog() {
    if (this.service.formData.Id === undefined || this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('Warning', 'Please select customer first!');
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) { }
      return false;
    }
    if (new Date(this.service.formData.AppointmentStart) >= new Date(this.service.formData.AppointmentEnd)) {
      this.toastr.warning('warning', 'Start Time is lessthen end time');
      return false;
    }
    if (this.service.formData.AppointmentStart === undefined || this.service.formData.AppointmentStart === null ||
      this.service.formData.AppointmentEnd === undefined || this.service.formData.AppointmentEnd === null) {
      this.toastr.warning('Warning', 'Please select appointment date & time!');
      return false;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '360px';
    dialogConfig.height = '400px';
    dialogConfig.data = {};
    this.dialog.open(TicketAllocateListPopupComponent, dialogConfig);
  }
  ngOnDestroy() {
    this.service.RunBlankModule();
  }
  onkeypresssearchengineer(value: string) {
    this.EngineerLocalList = this.engineerservice.Engineerlist.filter(item =>
    item.EngineerName.toLowerCase().match(value.toLowerCase()) ||
    item.EngineerName.toLowerCase().match(value.toLowerCase()) ||
    item.EngineerName.toLowerCase().match(value.toLowerCase()));
    setTimeout(() => {
      this.CheckedUncheckedEngineerList();
    }, 100);
  }

  private CheckedUncheckedEngineerList() {
    let demoClasses = null;
    demoClasses = document.querySelectorAll('.engineer-list-class');
    demoClasses.forEach(element => {
      this.service.TicketTeamList.forEach(el => {
        if (element.id === el.EngineerId) {
          // tslint:disable-next-line: quotemark
          element.innerHTML = "<input type='checkbox' (click)='AddEngineersToTicket(false, " + el.EngineerId + ", 0)' checked>";
        }
      }
      );
    });
  }
  ///// Ticket Attachment End
  public onTicketNoChange() {
    if (this.TicketNoChange) {
      this.TicketNoChange = false;
      this.TicketNoChangeBtn = 'Change';
      if (this.locateTicketUniqueID === this.service.formData.TicketUniqueID) {
      } else {
        this.ValidateTicketNo();
      }
    } else {
      this.TicketNoChange = true;
      this.TicketNoChangeBtn = 'Save';
    }
  }
  ValidateTicketNo() {
    this.service.ValidateTicketNo(this.service.formData.TicketUniqueID).subscribe(
      res => {
        switch (res.status) {
          case 201:
            this.newUniqueID = res.body;
            this.service.formData.TicketId = this.genicProfile.formData.TicketPrefix + this.newUniqueID;
            this.service.formData.TicketUniqueID = this.newUniqueID;
            this.toastr.success('success', this.currentUser.Ticket + ' number available.');
            break;
          case 202:
            this.toastr.warning('warning', this.currentUser.Ticket + ' number already taken, choose another.');
            break;
          default: this.toastr.error('error', res.statusText); break;
        }
      }, err => { console.log(err); });
  }

  OnTicketRecurringHelper(type: number) {
    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('warning', 'Select customer first.');
      return false;
    }
    let rdur = Number(this.service.formData.RecurringDuration);
    if(rdur === 33) { type = 7 }
    this.service.TicketRecurringHelper.Id = 0;
    this.service.TicketRecurringHelper.Type = type;
    this.service.TicketRecurringHelper.IsFor = 1;
    this.service.TicketRecurringHelper.RecurringStartDate = this.service.formData.AppointmentStart;
    this.service.TicketRecurringHelper.RecurringDuration = Number(rdur);
    this.service.TicketRecurringHelper.RecurringVisitFrequency = Number(this.service.formData.RecurringVisitFrequency);
    this.service.putTicketRecurringHelperDetails(this.currentUser.Token, this.skippublickholiday).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.service.formData.RecurringTotalVisit = response.result.Count;
                  this.service.formData.RecurringStartDate = response.result.FirstVisit;
                  this.service.formData.RecurringEndDate = response.result.LastVisit;
                  this.recurringList = response.result.List;
                  let demoClasses = null;
                  demoClasses = document.querySelector('#ticketdetailModalWeekbutton'); demoClasses.click();
                  let demoClasses2 = null;
                  demoClasses2 = document.querySelector('#ticketdetailModalMonthbutton'); demoClasses2.click();
                  let demoClasses3 = null;
                  demoClasses3 = document.querySelector('#ticketdetailCustomModalMonthbutton'); demoClasses3.click();
                  let demoClasses4 = null;
                  demoClasses4 = document.querySelector('#ticketdetailCustomModalMonth2button'); demoClasses4.click();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
    this.recurringchangesbtn = 0;
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
  /***********************************************************************************************************/

  OnTicketForChange(IsNew: boolean) {
    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('warning', 'Select customer first.');
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) { }
      return false;
    }
    if (IsNew) {
      this.IsItemMaintance = false;
    } else {
      this.IsItemMaintance = true;
      this.reportservice.WarrantyForMaintance(this.currentUser.Token, this.service.formData.CustomerId, 'ALL').subscribe( res => {
        if (res) { 
          this.reportservice.ReportsWarrantyList = [];
          this.reportservice.ReportsWarrantyList = res as ReportsWarranty[];
          this.reportservice.ReportsWarrantyList = this.reportservice.ReportsWarrantyList;
                   this.IsSearchTrue = false;
                   } }, error =>  console.log(error));
    }
  }
  recurringchangesapply(n: number) {
    this.recurringchangesbtn = n;
  }
  OnTicketForChangebtn() {
    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('warning', 'Select customer first.');
      return false;
    }
    this.IsSearchTrue = true;
    let ev: any; ev = document.getElementById('ItemSearch');
    let searchStr = 'ALL';
    if (ev.value.toString().length > 0) {
      searchStr = ev.value.toString();
    }
    this.reportservice.WarrantyForMaintance(this.currentUser.Token, this.service.formData.CustomerId, searchStr).subscribe( res => {
      if (res) { 
        this.reportservice.ReportsWarrantyList = [];
        this.reportservice.ReportsWarrantyList = res as ReportsWarranty[];
        this.reportservice.ReportsWarrantyList = this.reportservice.ReportsWarrantyList;
                 this.IsSearchTrue = false;
                 } }, error =>  console.log(error));
  }
  pushTicketItemValues(x: TicketItem, isFrom: string) {
    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('warning', 'Select customer first.');
      return false;
    }
    this.service.TicketItem.Id = x.Id;
    this.service.TicketItem.UniqId = x.UniqId;
    this.service.TicketItem.ItemName = x.ItemName;
    this.service.TicketItem.TicketId = this.service.formData.Id;
    this.service.TicketItem.ItemQuantity = x.ItemQuantity;
    this.service.TicketItem.ItemUnitCost = x.ItemUnitCost;
    this.service.TicketItem.ItemTotalCost = x.ItemTotalCost;
    this.service.TicketItem.ItemAddredById = this.currentUser.Id;
    this.service.TicketItem.ItemAddredByName = this.currentUser.FullName;
    this.service.TicketItem.MaintanceRemarks = x.MaintanceRemarks;
    this.service.TicketItem.ItemDescription = x.Type;
    this.reportservice.ReportsWarranty = new ReportsWarranty();
    this.reportservice.ReportsWarranty.IsFrom = isFrom;

  }
  OnMaintanceItemAddInItems() {
    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('warning', 'Select customer first.');
      return false;
    }
    //this.service.TicketItem.ItemTotalCost = 0;
    this.service.AddMaintanceItemInItemList(this.currentUser.Token, this.reportservice.ReportsWarranty.IsFrom).subscribe( res => {
     if (res) { const response = res as any;
                if (response.Message === 'success') {
                  this.toastr.info('info', response.MessageDescription);
                  this.refrestTicketItemlist();
                  setTimeout(() => { this.calculateTicketCost(); }, 1000);
                  let demoClasses2 = null;
                  demoClasses2 = document.querySelector('#MaintanceModelPopupbutton');
                  demoClasses2.click();
                } 
                if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                }
                } }, error =>  console.log(error));
  }

  OnTicketItemTypeChange() {
    this.tempInWarranty = false;
    this.ItemQuantityIsValid = true;
    this.ItemUnitCosttIsValid = true;
    if (this.currentUser.Permissions.ProductWarranty) {
      if (this.service.TicketItem.InWarranty) {
        this.ItemUniqueIsValid = true;
      }
    }
    if (this.service.TicketItem.Type === 'Service') {
      this.service.TicketItem.ItemQuantity = 1;
      this.service.TicketItem.ItemUnitCost = null;
      this.service.TicketItem.ItemTotalCost = null;
      this.service.TicketItem.InWarranty = false;
      this.service.TicketItem.UniqId = null;
      this.service.TicketItem.WarrantyDays = 365;
    }
    if (this.service.TicketItem.Type === 'Product') {
      this.service.TicketItem.ItemQuantity = null;
      this.service.TicketItem.ItemUnitCost = null;
      this.service.TicketItem.ItemTotalCost = null;
      this.service.TicketItem.InWarranty = false;
      this.service.TicketItem.UniqId = null;
      this.service.TicketItem.WarrantyDays = 365;
    }
    this.InitialazeProductDropdown();
    this.service.TicketItem.ItemDescription = null;
  }

  WhenSelectProductChange(event) {
    if (this.service.TicketItem.Type === 'Product') {
      const titem = this.productservice.Productlist.filter(x => x.Id === event.id);
      const warrantyvalue = titem[0].InWarranty;
      this.ItemQuantityIsValid = true;
      this.ItemUnitCosttIsValid = true;
      if (titem.length === 0) {
        this.service.TicketItem.ItemQuantity = 0;
        this.service.TicketItem.ItemTotalCost = 0;
        this.service.TicketItem.ItemUnitCost = 0;
        this.service.TicketItem.ItemDescription = '';
        this.service.TicketItem.WarrantyDays = 0;
        this.service.TicketItem.InWarranty = false;
        this.IshowStockSection = false;
        this.tempInWarranty = false;
      } else {
        this.tempAvailableStock = Number(titem[0].Quantity);
        this.tempSalePrice = Number(titem[0].SalePrice);
        this.service.TicketItem.WarrantyDays = titem[0].WarrantyDays;
        this.IshowStockSection = true;
        this.service.TicketItem.ItemQuantity = 1;
        this.service.TicketItem.ItemName = titem[0].ProductName;
        this.service.TicketItem.ItemUnitCost = Number(titem[0].SalePrice);
        this.service.TicketItem.ItemTotalCost = this.tempSalePrice * this.service.TicketItem.ItemQuantity;
        this.service.TicketItem.ItemDescription = titem[0].Description;
        this.service.TicketItem.InWarranty = warrantyvalue;
        this.ItemQuantityIsValid = true;
        this.ItemUnitCosttIsValid = true;
      }
      if (warrantyvalue === true) {this.tempInWarranty = true; } else {this.tempInWarranty = false; }
    }
    if (this.service.TicketItem.Type === 'Service') {
      const titem = this.productservice.serviceformList.filter(x => x.Id === event.id);
      const warrantyvalue = titem[0].InWarranty;
      if (titem.length === 0) {
        this.service.TicketItem.ItemDescription = '';
        this.service.TicketItem.WarrantyDays = 0;
        this.service.TicketItem.InWarranty = false;
        this.tempInWarranty = false;
      } else {
        this.service.TicketItem.ItemQuantity = 1;
        this.service.TicketItem.ItemName = titem[0].ServiceName;
        this.service.TicketItem.ItemDescription = titem[0].ServiceDescription;
        this.service.TicketItem.WarrantyDays = titem[0].WarrantyDays;
        this.service.TicketItem.ItemUnitCost = 0;
        this.service.TicketItem.ItemTotalCost = 0;
        this.service.TicketItem.InWarranty = warrantyvalue;
        this.ItemUnitCosttIsValid = true;
      }
      if (warrantyvalue === true) {this.tempInWarranty = true; } else {this.tempInWarranty = false; }
    }
    if (this.currentUser.Permissions.ProductWarranty) {
      if (this.service.TicketItem.InWarranty) {
        this.ItemUniqueIsValid = true;
        this.GenerateUniqueRandom();
      }
    }
  }

  GenerateUniqueRandom() {
    if (this.ItemBtn === 'Add') {
      this.productservice.GetRandamUniqueId(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.service.TicketItem.UniqId = response.MessageDescription;
                    }
      }}, error =>  console.log(error));
    }
  }
  disabledSelectDate() {
    this.genicProfile.DisabledDateList(this.currentUser.Token).subscribe( res => {
      if (res) {
       let obj: any;
       obj = res;
       obj.forEach(element => {
         this.disabledDates.push({year: element.year, month: element.month, day: element.day});
       });
       this.isDisabled = (date: NgbDateStruct, current: {month: number, year: number}) => {
          return this.disabledDates.find(x => NgbDate.from(x).equals(date)) ? true : false;
        };
      }
    }, error =>  console.log(error));
  }
  calculateTicketCost() {
    this.service.formData.NetAmount = 0;
    this.service.TicketItemList.forEach(e => {
      this.service.formData.NetAmount += e.ItemTotalCost;
    });
  }
// Re-Allocation of Engineer
ReAllocationEmailNotification(TId, isCust, isAdmin, AdminId) {
   // This section is used for email notification
   this.notifyService.ReAllocationTicketEmailNotification(this.oldTicketTeam , TId, isCust, isAdmin, AdminId)
    .subscribe( res => {
      if (res) {
      }
    }, error =>  console.log(error));
}

// OnCancel Button CLick
onCancelButtonClick() {
  if(this.router.url === '/tickets/ticket-edit' && this.createbuttontext === 'Update') {
    this.service.onTicketCancelButtonClick(this.oldTicketTeam , this.service.formData.Id)
     .subscribe( res => {
       if (res) {
       }
     }, error =>  console.log(error));
  }
}

public customwarrantyShowMethor() {
  if (this.service.TicketItem.WarrantyDays === undefined) {
    this.customwarrantyShow = false;
  } else {
  switch (this.service.TicketItem.WarrantyDays.toString()) {
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
SetSkipOff(e) {
  const enb = Boolean(e.target.checked);
  if(enb){
    this.skippublickholiday = true;
  } else {
    this.skippublickholiday = false;
  }
}
}
