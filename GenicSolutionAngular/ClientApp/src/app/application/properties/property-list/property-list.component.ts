import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PropertyPopupComponent } from '../property-popup/property-popup.component';
import { PropertyService } from '../../../services/property.service';
import { Property } from '../../../services/property.model';
import { Router } from '@angular/router';
import { DownloadService } from '../../../services/downloads.service';
import { CustomerService } from '../../../services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Login, AuthenticationService } from '../../../services';
import { UserlogService } from '../../../services/userlog.service';
import { Subject } from 'rxjs/internal/Subject';
import { saveAs } from 'file-saver';
import { TicketService } from '../../../services/ticket.service';
import { DataTableDirective } from 'angular-datatables';
import { environment } from 'src/environments/environment';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { Customer } from 'src/app/services/customer.model';
import { Title } from '@angular/platform-browser';
declare let $: any;
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  TotalCustomerCount: number;
  TotalPropertyCount: number;
  TotalActiveProperty: number;
  TotalSuspendedOrCancelled: number;
  privatlist: any;
  currentUser: Login;
  localPrependUrl: string;
  dropdownbtnavgrev: string;
  localCustomerId: any = null;
  excelDataTemplatePath: string;
  config = {
    displayKey: 'FirstName', // if objects array passed which key to be displayed defaults to description
    search: true,
    limitTo: 10,
    height: '400px'
  };
  PropertyOptions = [];
  ErrorRes = [];
  SuccessRes = [];
  propertySync: boolean;
  propertySyncFor: string;
  constructor(
    public titleService: Title,
    public customerservice: CustomerService,
    public service: PropertyService,
    private dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService,
    private ticketService: TicketService,
    private downloadService: DownloadService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public genicprofileservice: GenicProfileService,
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.customerservice.CustomerList = [];
    this.propertySync = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
  }

  ngOnInit() {
    if (!this.currentUser.Permissions.PropertyView) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Properties | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.excelDataTemplatePath = this.localPrependUrl + '/assets/ExcelDataTemplate/PropertyDatabaseSheet.xlsx';
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [5, 10, 25, 50, 75, 100] };
    this.dropdownbtnavgrev = 'All Customers';
    this.service.refrestPropertylist(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.service.Propertylist = this.service.locallist = response.result as Property[];
                  setTimeout(() => {
                    this.dtTrigger.next();
                  }, 200);
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
    this.customerservice.getCustomerListSync(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.customerservice.CustomerList = this.customerservice.CustomerLocalList = response.result as Customer[];
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
    this.customerservice.getCustomerListOnProperty(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.customerservice.LocalCustList = this.customerservice.CustomerList = response.result as Customer[];
                  setTimeout(() => {
                    this.PropertyOptions = this.customerservice.LocalCustList;
                  }, 200);
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
    setTimeout(() => {
      this.LatLongSync();
    }, 5000);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.refreshCount();
    }, 5000);
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  refreshCount() {
    this.TotalCustomerCount = this.customerservice.CustomerList.length;
    this.TotalPropertyCount = this.service.Propertylist.length;
    const activecustomerlist = this.customerservice.CustomerList.filter(x => x.Status === true);
    const custCount = this.service.Propertylist.filter(x => activecustomerlist.map(y => y.Id).includes(x.CustomerId)
      && x.IsActive === true).length;
    this.TotalActiveProperty = custCount;

    const suspendedlist = this.customerservice.CustomerList.filter(x => x.Status === false);
    const suspendedlistCount = this.service.Propertylist.filter(x => suspendedlist.map(y => y.Id).includes(x.CustomerId)
      && x.IsActive === true);
    this.privatlist = suspendedlistCount;
    this.TotalSuspendedOrCancelled = this.TotalPropertyCount - custCount;
    let demoClasses = null;
    demoClasses = document.querySelectorAll('.property-list-dynamic-class');
    demoClasses.forEach(element => {
      this.privatlist.forEach(el => {
        if (element.id === el.CustomerId) {
          element.style.color = '#fd397a';
          element.style.background = '#f9c5d6';
        }
      });
    });
  }
  loadPropertyOnCustomerChange(event) {
    if (event.value === undefined) {
      this.service.locallist = this.service.Propertylist;
    } else {
      const activecustomerlist = this.customerservice.LocalCustList.filter(x => x.Id === event.value.Id);
      this.service.locallist = this.service.Propertylist.filter(x => activecustomerlist.map(y => y.Id).includes(x.CustomerId));
    }
  }
  OpenAddClienDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(PropertyPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res === '') {
      } else {
        if (res === undefined) {
          this.router.navigate(['/customers/customer-add/']);
        } else {
          this.router.navigate(['/properties/property-add/'], 
          { queryParams: { 'id': res.id, 'name': res.name, 'companyname': res.companyName } });
        }
      }
    });
  }
  pupulatecustomer(x: Property) {
    this.service.formData = Object.assign({}, x);
    this.router.navigate(['/properties/property-edit/']);
  }

  detailsproperty(x: Property) {
    this.service.formData = Object.assign([], x);
    this.router.navigate(['/properties/property-details/']);
  }
  onPropertyStatusChange(e, id: string, index) {
    this.service.putPropertyUpdateStatus(id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success('success', response.MessageDescription);
                  const des = 'Property of Customer ' + this.service.formData.CustomerName +
                  'is modified by user : ' + this.currentUser.UserName;
                  const Activity4 = 'Property of Customer ' + this.service.formData.CustomerName + 'is modified by user : ' +
                  this.currentUser.UserName;
                  this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Property',
                  this.service.formData.Id, 'Modify',  des, Activity4).subscribe();
                  this.service.locallist[index].IsActive = e.target.checked;
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }
  OnTicketHistory(x: Property): void {
    this.ticketService.formData.CustomerId = x.CustomerId;
    this.ticketService.formData.PropertyId = x.Id;
    this.router.navigate(['/properties/ticket-history-property-wise']);
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('property', this.currentUser.Token).then(blob => {
      saveAs(blob, 'property_' + new Date().getTime() + '.xlsx');
    });
  }

  // open file upload dialog
  openPopToUploadPro() {
  let element:HTMLElement = document.getElementById('PropBulkUpload') as HTMLElement;
  element.click();
  }
  // build upload customer property
  BuldCustomerUpload(file: FileList) {
    let ExcelfileToUpload = file.item(0);
    let filExt = ExcelfileToUpload.name.split('.');
    let Ext1 = filExt[1];
    if (Ext1 ==='xls' || Ext1 ==='xlsx') {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        let ExcelLocalURL = event.target.result;
        this.customerservice.SetAsDefaultValues();
        this.customerservice.formData.Latitude = Ext1;
        this.customerservice.formData.CustomerLogo = ExcelLocalURL.split(',')[1];
        this.customerservice.CustomerPropertyBulkUpload(this.currentUser.Id)
        .subscribe( res => {
          if(res) {
           let TResponse: any = new Object();
           TResponse = res;
           this.ErrorRes = TResponse.ErrorResponse;
           this.SuccessRes = TResponse.SuccessResponse;

           setTimeout(() => {
              this.service.refrestPropertylist(this.currentUser.Token);
              this.refreshCount();
            }, 1000);

          }
        }, error =>  console.log(error));
      };
      reader.readAsDataURL(ExcelfileToUpload);
    } else {
      this.toastr.warning('', 'Invalid file format, select excel sheet!');
      return false;
    }
  }
  LatLongSync() {
    let propertyModue = ['Customer', 'Property', 'Engineer'];
    propertyModue.forEach(pm => {
      this.propertySync = true;
      this.service.CustomerAddressLatLongGet(pm).subscribe( res => {
        this.propertySync = true;
        if (res) { let propList = res as any; this.propertySyncFor = pm;
                   propList.forEach(w => {
                    this.propertySync = true;
                    this.service.getAddressUsingPostalCodeSync(Number(w.AddressZipCode)).subscribe( res1 => {
                      if (res1) { let addressresult  = res1 as any; let addressresult1  = addressresult.results as any;
                                  if (addressresult1.length > 0) {
                                    this.service.formData.Id = w.Id;
                                    this.service.formData.CustomerId = '00000000-0000-0000-0000-000000000000';
                                    this.service.formData.AddressZipCode = w.AddressZipCode;
                                    this.service.formData.Latitude = addressresult1[0].geometry.location.lat;
                                    this.service.formData.Longitude = addressresult1[0].geometry.location.lng;
                                    this.service.CustomerAddressLatLongGetUpdate(pm).subscribe( res2 => {
                                      if (res2) { let updaterespone = res2 as any;
                                                  this.service.formData.Id = '00000000-0000-0000-0000-000000000000';
                                                  this.service.formData.CustomerId = '00000000-0000-0000-0000-000000000000';
                                                  this.service.formData.AddressZipCode = '';
                                                  this.service.formData.Latitude = '';
                                                  this.service.formData.Longitude = '';
                                                  this.propertySync = false;
                                      }}, error =>  console.log(error));
                                      this.propertySyncFor = '';
                                      this.propertySync = false;
                              }
                      }}, error =>  console.log(error));
                    this.propertySync = false;
                   });
                   this.propertySyncFor = '';
                   this.propertySync = false;
        }
      }, error =>  console.log(error));
      this.propertySync = false;
    });
  }
}
