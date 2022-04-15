import { Component, OnInit, ViewChild, OnDestroy, TemplateRef } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { ReportsWarranty, ProductWarranty } from '../../services/report.module';
import { AuthenticationService, Login } from '../../services';
import { GenicProfileService } from '../../services/genicprofile.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { ProductService } from '../../services/product.service';
import { NgbDateAdapter, NgbModal, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../../services/ticket.service';
import { UserlogService } from '../../services/userlog.service';
import { ToastrService } from 'ngx-toastr';
import { TicketItem } from '../../services/ticket.module';
import { environment } from 'src/environments/environment';
import { DownloadService } from '../../services/downloads.service';
import { saveAs } from 'file-saver';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { EngineerService } from 'src/app/services/engineer.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter },
  ],
})
export class WarrantyComponent implements OnInit, OnDestroy {
  @ViewChild('modalContent1', { static: true }) modalContent1: TemplateRef<any>;
  @ViewChild('modalContent2', { static: true }) modalContent2: TemplateRef<any>;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  isDtInitialized: boolean = false;
  WarrantyList: any;
  date = new Date();
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  firstdate = this.firstDay.getFullYear().toString().padStart(4, '0') + '-' +
    (this.firstDay.getMonth() + 1).toString().padStart(2, '0') + '-' +
    this.firstDay.getDate().toString().padStart(2, '0');

  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
  lastdate = this.lastDay.getFullYear().toString().padStart(4, '0') + '-' +
    (this.lastDay.getMonth() + 1).toString().padStart(2, '0') + '-' +
    this.lastDay.getDate().toString().padStart(2, '0');
  currentUser: Login;
  customwarrantyShow: boolean;
  customwarrantyShowEdit: boolean;
  isShowSpinner: boolean = false;
  excelDataTemplatePath: string;
  localPrependUrl: string;
  ErrorRes = [];
  SuccessRes = [];
  dropdownbtnavgrev: string;
  CustomerdropdownList = []; CustomerselectedItems = [];
  CustomerdropdownSettings = { displayKey: 'Name', search: true, height: '300px', placeholder: 'Select Customer' };
  ProductdropdownList = []; ProductselectedItems = [];
  ProductdropdownSettings = { displayKey: 'Name', search: true, height: '300px', placeholder: 'Select Product' };
  EngineerdropdownList = []; EngineerselectedItems = [];
  EngineerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Technician' };

  SCustomerdropdownList = []; SCustomerselectedItems = [];
  SCustomerdropdownSettings = { displayKey: 'Name', search: true, height: '300px', placeholder: 'Select Customer' };
  SProductdropdownList = []; SProductselectedItems = [];
  SProductdropdownSettings = { displayKey: 'Name', search: true, height: '300px', placeholder: 'Select Product' };
  tempCust = '';
  tempProd = '';
  //isEdit = false;
  tempCustList: any;
  tempProdList: any;
  constructor(public service: ReportService,
    private router: Router,
    public titleService: Title,
    private modal: NgbModal,
    public logService: UserlogService,
    private toastr: ToastrService,
    private downloadService: DownloadService,
    public loginservice: AuthenticationService,
    public ticketService: TicketService,
    public customerservice: CustomerService,
    public productService: ProductService,
    public engineerservice: EngineerService,
    public genicprofileservice: GenicProfileService) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [5, 10, 25, 50, 75, 100] };
    this.dropdownbtnavgrev = 'All';
    this.service.ReportsWarrantyListActive = [];
  }

  ngOnInit() {
    this.EngineerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: this.currentUser.Engineer };
    this.ProductdropdownSettings = { displayKey: 'Name', search: true, height: '300px', placeholder: 'Select ' + this.currentUser.Product };
    this.SProductdropdownSettings = { displayKey: 'Name', search: true, height: '300px', placeholder: 'Select ' + this.currentUser.Product };
    this.service.ReportsWarranty = new ReportsWarranty();
    this.service.ReportsWarranty.InstallationDate = this.firstdate;
    this.service.ReportsWarranty.ExpiryDate = this.lastdate;
    this.service.ReportsWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
    this.service.ReportsWarranty.ProductId = '00000000-0000-0000-0000-000000000000';
    this.service.ReportsWarranty.UniqId = '';
    this.service.ReportsWarranty.IsDateActive = false;
    this.excelDataTemplatePath = this.localPrependUrl + '/assets/ExcelDataTemplate/ProductWarrantyDatabaseSheet.xlsx';

    if (!this.currentUser.Permissions.ProductWarranty) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Warranty | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.customerservice.GetCustomerList(this.currentUser.Token).subscribe(res => {
      if (res) {
        let response = res as any;
        this.tempCustList = [];
        this.tempCustList = response.result;
        const items = response.result.sort((a, b) => a.Name.localeCompare(b.Name));
        items.forEach(w => {
          this.SCustomerdropdownList.push({ Id: w.Id, Name: w.Name, IsAssigned: false });
        });

        this.productService.refrestProductlistSync(this.currentUser.Token).subscribe(res => {
          if (res) {
            let responsep = res as any;
            this.tempProdList = responsep.result;
            const items = responsep.result.sort((a, b) => a.Name.localeCompare(b.Name));
            items.forEach(w => {
              this.SProductdropdownList.push({ Id: w.Id, Name: w.Name, IsAssigned: false });
            });
            this.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
          }
        }, error => console.log(error));

        this.engineerservice.refrestEngineerTableList(this.currentUser.Token).subscribe(res => {
          if (res) {
            const response = res as any;
            this.engineerservice.EngineerLocalList = response.result;
          }
        }, error => console.log(error));
      }
    }, error => console.log(error));
  }
  distroyAndReloadTable(SDate: string, EDate: string, CustometId: string, ProductId: string, UniqId: string): void {
    this.service.refrestWarrantyList(this.currentUser.Token, SDate, EDate, CustometId, ProductId, UniqId).subscribe(res => {
      if (res) {
        const response = res as any;
        this.service.ReportsWarrantyList = [];
        this.service.ReportsWarrantyListActive = [];
        this.service.ReportsWarrantyList = response.result;
        this.service.ReportsWarrantyListActive = response.result
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
          });
        } else {
          this.isDtInitialized = true;
          this.dtTrigger.next();
        }
      }
    }, error => console.log(error));
  }
  refreshWarrantyList(isSearch: boolean) {
    this.dropdownbtnavgrev = 'All';
    if (isSearch) {
      if (this.service.ReportsWarranty.InstallationDate === '00000000') { this.service.ReportsWarranty.ExpiryDate === '00000000'; }
      if (this.service.ReportsWarranty.ExpiryDate === '00000000') { this.service.ReportsWarranty.InstallationDate === '00000000'; }
      const cursDate = this.service.ReportsWarranty.InstallationDate;
      const cureDate = this.service.ReportsWarranty.ExpiryDate;
      let sDate = cursDate.split('T')[0].replace(/-/g, '');
      let eDate = cureDate.split('T')[0].replace(/-/g, '');
      let uid = 'ALL';
      if (this.service.ReportsWarranty.UniqId.length > 0) { uid = this.service.ReportsWarranty.UniqId; }
      if (!this.service.ReportsWarranty.IsDateActive) {
        sDate = '00000000';
        eDate = '00000000';
      }
      this.distroyAndReloadTable(sDate, eDate, this.service.ReportsWarranty.CustomerId, this.service.ReportsWarranty.ProductId, uid);
    } else {
      this.SCustomerselectedItems = [];
      this.SProductselectedItems = [];
      this.service.ReportsWarranty = new ReportsWarranty();
      this.service.ReportsWarranty.InstallationDate = this.firstdate;
      this.service.ReportsWarranty.ExpiryDate = this.lastdate;
      this.service.ReportsWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
      this.service.ReportsWarranty.ProductId = '00000000-0000-0000-0000-000000000000';
      this.service.ReportsWarranty.UniqId = '';
      this.service.ReportsWarranty.IsDateActive = false;
      this.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
    }
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  FilterCustomers(value: string) {
    this.service.ReportsWarrantyListActive = [];
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
    }).catch(err => console.error('error', err));
    switch (value) {
      case 'Expired':
        this.service.ReportsWarrantyListActive = this.service.ReportsWarrantyList.filter(x => x.Status === 'Expired');
        this.dropdownbtnavgrev = 'Expired';
        break;
      case 'Active':
        this.service.ReportsWarrantyListActive = this.service.ReportsWarrantyList.filter(x => x.Status === 'Active');
        this.dropdownbtnavgrev = 'Active';
        break;
      default: this.service.ReportsWarrantyListActive = this.service.ReportsWarrantyList;
        this.dropdownbtnavgrev = 'All';
    }
    setTimeout(() => { this.dtTrigger.next(); }, 100);
  }
  OpenWarrantyModel(Id: number) {
    this.service.getproductById(this.currentUser.Token, Id).subscribe(res => {
      if (res) {
        this.ticketService.TicketItem = res as TicketItem;
        this.modal.open(this.modalContent2, { size: 'lg' });
      }
    }, error => console.log(error));
  }

  public customwarrantyShowMethor() {
    if (this.service.ProductWarranty.WarrantyDays === undefined) {
      this.customwarrantyShow = false;
    } else {
      switch (this.service.ProductWarranty.WarrantyDays.toString()) {
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
  UpdateItemInstallation() {
    this.isShowSpinner = true;
    this.ticketService.TicketItem.InWarranty = true;
    this.ticketService.TicketItem.WarrantyDays = Number(this.ticketService.TicketItem.WarrantyDays);
    this.ticketService.putTicketItemDetails(this.currentUser.Token).subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          const des7 = 'A ' + this.currentUser.Product + ' : ' + this.ticketService.TicketItem.ItemName + ', is updated from the ' + this.currentUser.Ticket + ' No ' +
            this.ticketService.formData.TicketId + ', of Customer : ' + this.ticketService.formData.CustomerName + ', and Uniq No ' +
            this.ticketService.TicketItem.UniqId + ', Warranty :  ' + this.ticketService.TicketItem.WarrantyDays
            + ' Days by user ' + this.currentUser.FullName;
          const Activity7 = 'An ' + this.currentUser.Product + ' : ' + this.ticketService.TicketItem.ItemName + ' Installation Date Update : '
            + this.ticketService.TicketItem.InstallationDate +
            ' is updated from the ' + this.currentUser.Ticket + ' No : ' + this.ticketService.formData.TicketId;
          this.logService.postUserLog(this.currentUser.Id, this.currentUser.FullName,
            this.currentUser.Ticket, this.ticketService.formData.Id, 'Modify', des7, Activity7).subscribe();
          this.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
          setTimeout(() => {
            this.modal.dismissAll();
            this.isShowSpinner = false;
          }, 500);
        }
        if (response.Message === 'failure') {
          this.isShowSpinner = false;
          this.toastr.warning('warning', response.MessageDescription);
        }
      }
    }, error => console.log(error));
  }
  AddProductWarranty() {
    //this.isEdit = false;
    this.modal.open(this.modalContent1, { size: 'lg' });
    this.service.ProductWarranty.Id = 0;
    this.service.ProductWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
    this.service.ProductWarranty.ProductId = '00000000-0000-0000-0000-000000000000';
    this.service.ProductWarranty.UniqId = '';
    this.service.ProductWarranty.InstallationDate = null;
    if (this.service.ProductWarranty.WarrantyDays == null || this.service.ProductWarranty.WarrantyDays === 0 ||
      this.service.ProductWarranty.WarrantyDays === undefined) {
      this.service.ProductWarranty.WarrantyDays = 365;
    }
    this.CustomerselectedItems = [];
    this.ProductselectedItems = [];
    this.EngineerselectedItems = [];
    this.CustomerdropdownList = [];
    this.ProductdropdownList = [];
    this.EngineerdropdownList = [];
    try {
      this.tempCustList.forEach(w => {
          this.CustomerdropdownList.push({ Id: w.Id, Name: w.Name, IsAssigned: false });
      });
    } catch { }

    try {
      this.tempProdList.forEach(w => { {
          this.ProductdropdownList.push({ Id: w.Id, Name: w.Name, IsAssigned: false });
        }
      });
    } catch { }

    try {
      this.engineerservice.EngineerLocalList.forEach(w => { {
          this.EngineerdropdownList.push({ Id: w.Id, Name: w.EngineerName, IsAssigned: false });
        }
      });
    } catch { }
  }
  AddProductWarrantyInDB() {
    //this.isEdit = false;
    this.service.ProductWarranty.WarrantyDays = Number(this.service.ProductWarranty.WarrantyDays);
    if (this.service.ProductWarranty.CustomerId === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('Please select a Customer');
      return false;
    }
    if (this.service.ProductWarranty.ProductId === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('Please select a ' + this.currentUser.Product);
      return false;
    }
    if (this.service.ProductWarranty.InstallationDate === null) {
      this.toastr.warning('Please select a Installation Date');
      return false;
    }
    if (this.service.ProductWarranty.Id === 0) {
      this.service.postProductWarranty(this.currentUser.Token).subscribe(
        res => {
          switch (res.status) {
            case 201:
              this.toastr.success(this.currentUser.Product = ' added successfully');
              this.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
              setTimeout(() => {
                this.modal.dismissAll();
                this.CustomerselectedItems = [];
                this.ProductselectedItems = [];
                this.isShowSpinner = false;
              }, 500);
              break;
            case 206: this.toastr.warning('Token Expire'); this.isShowSpinner = false; break;
            case 208: this.toastr.warning('Unique id already exist. use an other'); this.isShowSpinner = false; break;
            case 404: break;
            default: this.toastr.error('error', res.statusText); break;
          }
        }, err => { console.log(err); });
    } else {
      this.service.putProductWarranty(this.currentUser.Token).subscribe(
        res => {
          switch (res.status) {
            case 202:
              this.toastr.success('Update successfully');
              this.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
              setTimeout(() => {
                this.modal.dismissAll();
                this.CustomerselectedItems = [];
                this.ProductselectedItems = [];
                this.isShowSpinner = false;
              }, 500);
              break;
            case 206: this.toastr.warning('Token Expire'); this.isShowSpinner = false; break;
            case 208: this.toastr.warning('Unique id already exist. use an other'); this.isShowSpinner = false; break;
            case 404: break;
            default: this.toastr.error('error', res.statusText); break;
          }
        }, err => { console.log(err); });
    }
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('productwarranty', this.currentUser.Token).then(blob => {
      saveAs(blob, this.currentUser.Product + 'warranty_' + new Date().getTime() + '.xlsx');
    });
  }
  pupulatewarranty(x: ReportsWarranty) {
    if (x.IsFrom === 'TicketItem') {
      this.service.getproductById(this.currentUser.Token, x.Id).subscribe(res => {
        if (res) {
          const response = res as any;
          this.ticketService.TicketItem = response.result as TicketItem;
          this.modal.open(this.modalContent2, { size: 'lg' });
        }
      }, error => console.log(error));
    }
    if (x.IsFrom === 'ProductWarranty') {
      this.service.getproductwarrantyById(this.currentUser.Token, x.Id).subscribe(res => {
        if (res) {
          this.service.ProductWarranty = res as ProductWarranty;
          this.CustomerselectedItems = [];
          this.ProductselectedItems = [];
          this.EngineerselectedItems = [];
          this.CustomerdropdownList = [];
          this.ProductdropdownList = [];
          this.EngineerdropdownList = [];
          try {
            let cid = '00000000-0000-0000-0000-000000000000';
            const eitem = this.tempCustList.filter(x => x.Id === this.service.ProductWarranty.CustomerId) as any;
            cid = eitem[0].Id;
            this.tempCustList.forEach(w => {
              if (w.Id === cid) {
                this.CustomerselectedItems.push({ Id: w.Id, Name: w.Name, IsAssigned: true });
              } else {
                this.CustomerdropdownList.push({ Id: w.Id, Name: w.Name, IsAssigned: false });
              }
            });
          } catch { }

          try {
            let pid = '00000000-0000-0000-0000-000000000000';
            const eitem = this.tempProdList.filter(x => x.Id === this.service.ProductWarranty.ProductId) as any;
            pid = eitem[0].Id;
            this.tempProdList.forEach(w => {
              if (w.Id === pid) {
                this.ProductselectedItems.push({ Id: w.Id, Name: w.Name, IsAssigned: true });
              } else {
                this.ProductdropdownList.push({ Id: w.Id, Name: w.Name, IsAssigned: false });
              }
            });
          } catch { }

          this.modal.open(this.modalContent1, { size: 'lg' });
        }
      }, error => console.log(error));
    }
  }
  removewarranty(x: ReportsWarranty) {
    if (x.IsFrom === 'TicketItem') {
      if (confirm('Are you sure to remove this warranty ' + this.currentUser.Product.toLowerCase() + '?')) {
        this.ticketService.deleteTicketItemDetails(this.currentUser.Token, x.Id).subscribe(res => {
          if (res) {
            const response = res as any;
            if (response.Message === 'success') {
              this.service.ReportsWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
              this.service.ReportsWarranty.ProductId = '00000000-0000-0000-0000-000000000000';
              this.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
            }
            if (response.Message === 'failure') {
              this.toastr.warning('warning', response.MessageDescription);
            }
          }
        }, error => console.log(error));
      }
    }
    if (x.IsFrom === 'ProductWarranty') {
      if (confirm('Are you sure to remove this warranty ' + this.currentUser.Product.toLowerCase() + '?')) {
        this.service.deleteProductWarranty(this.currentUser.Token, x.Id).then(
          res => {
            switch (res.status) {
              case 204:
                this.toastr.success('Removed successfully');
                this.service.ReportsWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
                this.service.ReportsWarranty.ProductId = '00000000-0000-0000-0000-000000000000';
                this.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
                break;
              case 404: break;
              default: this.toastr.error('error', res.statusText); break;
            }
          }, err => { console.log(err); });
      }
    }
  }
  onItemSelect(e, t) {
    if (t === 'C') {
      if (e.value === undefined) { this.service.ProductWarranty.CustomerId = '00000000-0000-0000-0000-000000000000'; }
      this.service.ProductWarranty.CustomerId = e.value.Id;
    }
    if (t === 'P') {
      const titem = this.tempProdList.filter(x => x.Id === e.value.Id);
      this.service.ProductWarranty.UniqId = titem[0].SerialNo;
      if (e.value === undefined) { this.service.ProductWarranty.ProductId = '00000000-0000-0000-0000-000000000000'; }
      this.service.ProductWarranty.ProductId = e.value.Id;
    }
    if (t === 'SC') {
      if (e.value === undefined) { this.service.ReportsWarranty.CustomerId = '00000000-0000-0000-0000-000000000000'; }
      this.service.ReportsWarranty.CustomerId = e.value.Id;
    }
    if (t === 'SP') {
      if (e.value === undefined) { this.service.ReportsWarranty.ProductId = '00000000-0000-0000-0000-000000000000'; }
      this.service.ReportsWarranty.ProductId = e.value.Id;
    }
  }
  BuldWarrantyUpload(file: FileList) {
    let ExcelfileToUpload = file.item(0);
    let filExt = ExcelfileToUpload.name.split('.');
    let Ext1 = filExt[1];
    if (Ext1 === 'xls' || Ext1 === 'xlsx') {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        let ExcelLocalURL = event.target.result;
        this.customerservice.SetAsDefaultValues();
        this.customerservice.formData.Latitude = Ext1;
        this.customerservice.formData.CustomerLogo = ExcelLocalURL.split(',')[1];
        this.customerservice.ProductWarrantyBulkUpload(this.currentUser.Id)
          .subscribe(res => {
            if (res) {
              let TResponse: any = new Object();
              TResponse = res;
              this.ErrorRes = TResponse.ErrorResponse;
              this.SuccessRes = TResponse.SuccessResponse;
              setTimeout(() => {
                this.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
              }, 1000);
            }
          }, error => console.log(error));
      };
      reader.readAsDataURL(ExcelfileToUpload);
    } else {
      this.toastr.warning('', 'Invalid file format, select excel sheet!');
      return false;
    }
  }
}
