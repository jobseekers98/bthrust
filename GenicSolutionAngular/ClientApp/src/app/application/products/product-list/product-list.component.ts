import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ProductService } from '../../../services/product.service';
import { DownloadService } from '../../../services/downloads.service';
import { UserlogService } from '../../../services/userlog.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Login } from '../../../services';
import { CustomerService } from '../../../services/customer.service';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { DataTableDirective } from 'angular-datatables';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  isDtInitialized: boolean = false;
  localPrependUrl: string;
  currentUser: Login;
  excelDataTemplatePath: string;
  ErrorRes = [];
  SuccessRes = [];
  constructor(
    public titleService: Title,
    public service: ProductService,
    private toastr: ToastrService,
    private router: Router,
    private downloadService: DownloadService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public customerService: CustomerService,
    public genicprofileservice: GenicProfileService
  ) {
    this.localPrependUrl = environment.apiUrl;
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.excelDataTemplatePath = this.localPrependUrl + '/assets/ExcelDataTemplate/ProductDatabaseSheet.xlsx';
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [ 10, 25, 50, 75, 100 ] };
   }

  ngOnInit() {
    if (!this.currentUser.Permissions.ProductView) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle(this.currentUser.Product + 's | Genic Solution');
    this.service.getAllProductList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.service.Productlist = response.result;
                    this.dtTrigger.next();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  OpenAddProduct() {
    this.router.navigate(['/products/product-add/']);
  }

  pupulateproduct(Id: string) {
      this.router.navigate(['/products/product-edit/' + Id]);
  }

  detailsproduct(Id: string) {
    this.router.navigate(['/products/product-details/' + Id]);
  }
  deleteproduct(Id: string, ProductName: string) {
    // if (confirm('Are you sure to delete this record?')) {
    //     this.service.deleteProductDetails(Id).then(
    //       res => {
    //         if (res.status === 204) {
    //           this.service.refrestProductlist();
    //           this.toastr.info('info', 'Deleted Successfully');

    //           const des = 'Product : ' + ProductName + 'has been removed ' +
    //           ', by user : ' + this.currentUser.UserName + ', on dated : ' + new Date();
    //           const Activity =  'Product : ' + ProductName + 'has been removed.';
    //           this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Product',
    //           Id, 'Removed', des, Activity ).subscribe();

    //          } else if (res.status === 404) {
    //           this.toastr.info('Not found', 'Record Not Found');
    //          }  else {
    //           this.toastr.error('Error', res.statusText);
    //          }
    //   },
    //   err => {
    //         this.toastr.error('error', err.statusText);
    //         console.log(err.error);
    //       });
    // }
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('product', this.currentUser.Token).then(blob => {
      saveAs(blob, this.currentUser.Product + '_' + new Date().getTime() + '.xlsx');
   });
  }


  // bulk upload Product
  BulkProductUpload(file: FileList) {
    let ExcelfileToUpload = file.item(0);
    let filExt = ExcelfileToUpload.name.split('.');
    let Ext1 = filExt[1];
    if (Ext1 ==='xls' || Ext1 ==='xlsx') {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        let ExcelLocalURL = event.target.result;
        this.customerService.SetAsDefaultValues();
        this.customerService.formData.Latitude = Ext1;
        this.customerService.formData.CustomerLogo = ExcelLocalURL.split(',')[1];

        this.customerService.ProductBulkUpload(this.currentUser.Id)
        .subscribe( res => {
          if(res) {
           let TResponse: any = new Object();
           TResponse = res;
           this.ErrorRes = TResponse.ErrorResponse;
           this.SuccessRes = TResponse.SuccessResponse;
           let element: HTMLElement = document.getElementById('openProductPop') as HTMLElement;
           element.click();
           // this.service.refrestProductlist(this.currentUser.Token);
          }
        }, error =>  console.log(error))



      };
      reader.readAsDataURL(ExcelfileToUpload);
    } else {
      this.toastr.warning('', 'Invalid file format, select excel sheet!');
      return false;
    }
  }

//Product Status change
onProductStatusChange(Id,index){
  this.service.Productlist[index].Status;
  this.service.onProductStatusChange(this.currentUser.Token, Id).subscribe( res => {
    if (res) { const response = res as any;
               if (response.Message === 'success') {
                this.toastr.info(response.MessageDescription);
                }
               if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                }
  }}, error =>  console.log(error));
 }
}

