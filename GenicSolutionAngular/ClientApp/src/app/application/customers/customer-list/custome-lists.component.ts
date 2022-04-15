import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/services/customer.model';
import { Router } from '@angular/router';
import {DownloadService} from 'src/app/services/downloads.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs/internal/Subject';
import { saveAs } from 'file-saver';
import { DataTableDirective } from 'angular-datatables';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-customers',
  templateUrl: './customer-list.component.html',
  styleUrls: ['../customer-add/customer-add.component.css']
})
export class CustomerListComponent implements OnInit, AfterViewInit, OnDestroy  {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  currentUser: Login;
  TotalCustomerCount: number;
  ActiveCustomerCount: number;
  SuspendedCustomerCount: number;
  dropdownbtnavgrev: string;
  dropdownbtndepartment: string;
  localPrependUrl: string;
  excelDataTemplatePath: string;
  excelDataTemplatePath2: string;
  ErrorRes = [];
  SuccessRes = [];
  ErrorRes2 = [];
  SuccessRes2 = [];

  @ViewChild('BulkUpload', {static: false}) BulkUpload;
  @ViewChild('BulkUpload2', {static: false}) BulkUpload2;
  constructor(
    public titleService: Title,
    public service: CustomerService,
    private router: Router,
    private downloadService: DownloadService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public genicprofileservice: GenicProfileService,
    private toastr: ToastrService) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
      this.service.CustomerList = [];
      this.service.CustomerLocalList = [];
  }

  ngOnInit() {
    if (!this.currentUser.Permissions.CustomerView) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Customers | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.excelDataTemplatePath = this.localPrependUrl + '/assets/ExcelDataTemplate/CustomerDatabaseSheet.xlsx';
    this.excelDataTemplatePath2 = this.localPrependUrl + '/assets/ExcelDataTemplate/CustomerContactPersonDatabaseSheet.xlsx';
    this.dtOptions = { pagingType: 'full_numbers', paging: true, order: [1, 'desc'], lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
    this.dropdownbtnavgrev = 'All Customers';
    this.dropdownbtndepartment = 'All Department';
    this.service.getCustomerListSync(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.service.CustomerList = this.service.CustomerLocalList = response.result as Customer[];
                  this.TotalCustomerCount = this.service.CustomerLocalList.length;
                  this.ActiveCustomerCount = this.service.CustomerLocalList.filter(x => x.Status === true).length;
                  this.SuspendedCustomerCount = this.service.CustomerLocalList.filter(x => x.Status === false).length;     
                  this.dtTrigger.next();
                }
      }}, error =>  console.log(error));
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  pupulatecustomer(Id: string) {
    this.router.navigate(['/customers/customer-edit/' + Id]);
  }
  detailscustomer(Id: string) {
    this.router.navigate(['/customers/customer-details/' + Id]);
  }
    FilterCustomers(value: string) {
    this.dropdownbtndepartment = 'All Department';
    switch (value) {
      case 'Suspended Customers':
      this.service.CustomerLocalList = this.service.CustomerList.filter(x => x.Status === false);
      this.dropdownbtnavgrev = 'Suspended Customers';
      break;
      case 'Active Customers':
      this.service.CustomerLocalList = this.service.CustomerList.filter(x => x.Status === true);
      this.dropdownbtnavgrev = 'Active Customers';
      break;
      default: this.service.CustomerLocalList = this.service.CustomerList;
               this.dropdownbtnavgrev = 'All Customers';
    }
  }
  // FilterDepartmentWise(id: number, name: string) {
  //   this.dropdownbtnavgrev = 'All Customers';
  //   if (id === 0) {
  //     this.service.CustomerLocalList = this.service.CustomerList;
  //     this.dropdownbtndepartment = 'All Department';
  //   } else {
  //     const suspendedlist = this.service.CustomerDepartmentList.filter(x => x.SMTPSettingsId === id);
  //     this.service.CustomerLocalList = this.service.CustomerList.filter(x => suspendedlist.map(y => y.CustomerId).includes(x.Id));
  //    // this.service.CustomerLocalList = this.service.CustomerList.filter(x => x.CustomerDepartment.filter(s => s.SMTPSettingsId === id ));
  //     this.dropdownbtndepartment = name;
  //   }
  // }
  onStatusChange(e, id: string, index) {
    this.service.putCustomerUpdateStatus(id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success('success', response.MessageDescription);
                  let st = e.target.checked;
                  if (st === true) { st = 'Active'; } else { st = 'InActive'; }
                  const des = 'Customer : ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName +
                  ', Status has been changed as ' + st + ' by user '
                  + this.currentUser.UserName;
                  const Activity =  'Status changed as :' + st + ' of Customer : ' + this.service.formData.NameTitle
                  + ' ' + this.service.formData.FirstName
                  + ' ' + this.service.formData.LastName + ', on dated : ' + new Date(Date.parse(Date()));
                  this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer',
                  this.service.formData.Id, 'Modify', des, Activity).subscribe();
                  this.service.CustomerLocalList[index].Status = e.target.checked;
                  this.TotalCustomerCount = this.service.CustomerLocalList.length;
                  this.ActiveCustomerCount = this.service.CustomerLocalList.filter(x => x.Status === true).length;
                  this.SuspendedCustomerCount = this.service.CustomerLocalList.filter(x => x.Status === false).length;
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('customer', this.currentUser.Token).then(blob => {
      saveAs(blob, 'customer_' + new Date().getTime() + '.xlsx');
   });
  }
// bulk upload customer
  BuldCustomerUpload(file: FileList) {
    let ExcelfileToUpload = file.item(0);
    let filExt = ExcelfileToUpload.name.split('.');
    let Ext1 = filExt[1];
    if (Ext1 ==='xls' || Ext1 ==='xlsx') {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        let ExcelLocalURL = event.target.result;
        this.service.SetAsDefaultValues();
        this.service.formData.Latitude = Ext1;
        this.service.formData.CustomerLogo = ExcelLocalURL.split(',')[1];

        this.service.CustomerBulkUpload(this.currentUser.Id)
        .subscribe( res => {
          if(res) {
           let TResponse: any = new Object();
           TResponse = res;
           this.ErrorRes = TResponse.ErrorResponse;
           this.SuccessRes = TResponse.SuccessResponse;
           let element: HTMLElement = document.getElementById('customerPop') as HTMLElement;
           element.click();
           this.service.refrestCustomerList(this.currentUser.Token);
          }
        }, error =>  console.log(error));


      };
      reader.readAsDataURL(ExcelfileToUpload);
    } else {
      this.toastr.warning('', 'Invalid file format, select excel sheet!');
      return false;
    }
  }
  BuldContactPersonUpload(file: FileList) {
    let ExcelfileToUpload = file.item(0);
    let filExt = ExcelfileToUpload.name.split('.');
    let Ext1 = filExt[1];
    if (Ext1 === 'xls' || Ext1 === 'xlsx') {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        let ExcelLocalURL = event.target.result;
        this.service.SetAsDefaultValues();
        this.service.formData.Latitude = Ext1;
        this.service.formData.CustomerLogo = ExcelLocalURL.split(',')[1];
        this.service.ContactPersonBulkUpload(this.currentUser.Id)
        .subscribe( res => {
          if(res) {
           let TResponse: any = new Object();
           TResponse = res;
           this.ErrorRes2 = TResponse.ErrorResponse;
           this.SuccessRes2 = TResponse.SuccessResponse;
           let element: HTMLElement = document.getElementById('customerPop') as HTMLElement;
           element.click();
           this.service.refrestCustomerList(this.currentUser.Token);
          }
        }, error =>  console.log(error));
      };
      reader.readAsDataURL(ExcelfileToUpload);
    } else {
      this.toastr.warning('', 'Invalid file format, select excel sheet!');
      return false;
    }
  }
  addcustomer(): void {
    this.router.navigate(['/customers/customer-add/']);
  }
}
