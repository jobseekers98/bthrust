import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { Subject } from 'rxjs/internal/Subject';
import { saveAs } from 'file-saver';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Service } from 'src/app/services/product.module';
import { DataTableDirective } from 'angular-datatables';
import { CustomerService } from 'src/app/services/customer.service';
import { DownloadService } from 'src/app/services/downloads.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { ServiceAddComponent } from '../service-add/service-add.component';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-service',
  templateUrl: './service-list.component.html',
  styleUrls: ['../service.component.css']
})
export class ServiceListComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  currentUser: Login;
  localPrependUrl: string;
  excelDataTemplatePath: string;
  tempResponse: any;
  ErrorRes = [];
  SuccessRes = [];
  constructor(
    public productservice: ProductService,
    private dialog: MatDialog,
    private router: Router,
    public titleService: Title,
    private toastr: ToastrService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public customerService: CustomerService,
    private downloadservice: DownloadService,
    public genicprofileservice: GenicProfileService) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
      this.genicprofileservice.TicketFilter.IsReady = false;
      this.genicprofileservice.TicketFilter.IsReadyQuote = false;
      this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
      this.excelDataTemplatePath = this.localPrependUrl + '/assets/ExcelDataTemplate/ServiceDatabaseSheet.xlsx';
      this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [ 10, 25, 50, 75, 100 ] };
     }

  ngOnInit(): void {
   if (!this.currentUser.Permissions.ServiceView) { this.router.navigate(['/dashboard']); }
   this.titleService.setTitle('Services | Genic Solution');
   this.load();
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  OpenAddServiceDialog() {
    this.productservice.serviceformData = {
      Id: '00000000-0000-0000-0000-000000000000',
      ServiceId: 'SER',
      ServiceName: '',
      ServiceDescription: '',
      InWarranty: true,
      WarrantyDays: 365,
      IsActive: true
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = { };
    this.dialog.open(ServiceAddComponent, dialogConfig).afterClosed().subscribe(res => {
      this.load();
    });
  }
load() {
  if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
    }).catch(err => console.error(err));
  }
  this.productservice.refrestServicesList(this.currentUser.Token).subscribe( res => {
    if (res) { const response = res as any;
         if (response.Message === 'success') {
          this.productservice.serviceformList = response.result;
          this.dtTrigger.next();
          }
  }}, error =>  console.log(error));
}
  pupulateservice(x: Service) {
      this.productservice.serviceformData = Object.assign({}, x);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = false;
      dialogConfig.width = '50%';
      dialogConfig.data = { };
      this.dialog.open(ServiceAddComponent, dialogConfig).afterClosed().subscribe(res => {
        this.load();
      });
  }

  deleteservice(Id: string, ServiceName: string) {
    // if (confirm('Are you sure to delete this record?')) {
    //     this.productservice.deleteServiceDetails(Id).then(
    //       res => {
    //         if (res.status === 204) {
    //           this.service.refrestServicelist();
    //           this.toastr.info('info', 'Deleted Successfully');

    //           const desc1 = 'A serice form  : ' + ServiceName + ', is removed from service no ' +
    //           this.service.formData.ServiceId;
    //           const Activity = 'A serice form  : ' + ServiceName + ', is removed';
    //           // tslint:disable-next-line: max-line-length
    //           this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Service',
    //           Id, 'Removed', desc1, Activity).subscribe();

    //          } else if (res.status === 404) {
    //           this.toastr.warning('Not found', 'Record Not Found');
    //          }  else {
    //           this.toastr.error('Error', res.toString() );
    //          }
    //   },
    //   err => {
    //         this.toastr.error('error', err.statusText);
    //         console.log(err);
    //       });
    // }
  }
  exportAsXLSX(): void {
    this.downloadservice.downloadFromServer('service', this.currentUser.Token).then(blob => {
        saveAs(blob, 'service_' + new Date().getTime() + '.xlsx');
     });
  }

  // Bulk Service upload
  BuldServiceUpload(file: FileList) {
    let ExcelfileToUpload = file.item(0);
    let filExt = ExcelfileToUpload.name.split('.');
    let Ext1 = filExt[1];
    if (Ext1 ==='xls' || Ext1 ==='xlsx') {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        const ExcelLocalURL = event.target.result;
        this.customerService.SetAsDefaultValues();
        this.customerService.formData.Latitude = Ext1;
        this.customerService.formData.CustomerLogo = ExcelLocalURL.split(',')[1];
        this.customerService.ServiceBulkUpload(this.currentUser.Id)
        .subscribe( res => {
          if (res) {
           let TResponse: any = new Object();
           TResponse = res;
           this.ErrorRes = TResponse.ErrorResponse;
           this.SuccessRes = TResponse.SuccessResponse;
           const element: HTMLElement = document.getElementById('openServicePop') as HTMLElement;
           element.click();
           this.load();
          }
        }, error =>  console.log(error));
      };
      reader.readAsDataURL(ExcelfileToUpload);
    } else {
      this.toastr.warning('', 'Invalid file format, select excel sheet!');
      return false;
    }
  }

  onServiceStatusChange(e, id: string, index) {
    this.productservice.onServiceStatusChange(this.currentUser.Token, id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success('success', response.MessageDescription);
                  this.productservice.serviceformList[index].IsActive = e.target.checked;
                  this.load();
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }
}
