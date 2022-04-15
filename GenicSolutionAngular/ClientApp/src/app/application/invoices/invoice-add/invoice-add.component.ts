import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { InvoiceItem } from 'src/app/services/Invoice.module';
import { QuoteService } from 'src/app/services/quote.service';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { PropertyService } from 'src/app/services/property.service';
import { Product, Service } from 'src/app/services/product.module';
import { Tax } from 'src/app/services/quote.module';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter },
  ],
})
export class InvoiceAddComponent implements OnInit, AfterViewInit, OnDestroy {
  fileToUpload: File = null;
  InvoiceDateIsValid = true;
  InvoiceDueDateIsValid = true;
  currentUser: Login;
  createbuttontext: string;
  public uploader: FileUploader = new FileUploader({});
  ProductItemArray = [];
  tempArray = [];
  ItemBtn = 'Add';
  isQtyValid: boolean;
  ItemIsValid = true;
  ItemProductIsValid = true;
  ItemQuantityIsValid = true;
  ItemUnitCosttIsValid = true;
  ItemUniqueIsValid = true;
  ItemSubTotalAmount: number;
  ItemSubTotalByArry: any;
  ItemTotalAmount: number;
  ActionType: string;
  localPrependUrl: string;
  InvoiceNosChange = false;
  InvoiceNosChangeBtn  = 'Change';
  newUniqueID;
  locateInvoiceUniqueID;
  btnloader: boolean;
  loader: boolean = false;
  tempAvailableStock: number;
  tempSalePrice: number;
  tempIndexQty = 0;
  IshowStockSection = true;
  tempInWarranty: boolean = false;
  customwarrantyShow: boolean;
  customwarrantyShowEdit: boolean;
  isUnitCostValid: boolean;
  public productoptions: any;
  productdata: any;
  data: Array<any>;
  constructor(
    public titleService: Title,
    public invoiceService: InvoiceService,
    public productservice: ProductService,
    public quoteService: QuoteService,
    public docservice: DocumentUploadService,
    public router: Router,
    public toastr: ToastrService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public genicProfile: GenicProfileService,
    public propertyService: PropertyService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.locateInvoiceUniqueID = this.invoiceService.InvoiceData.InvoiceUniqueID;
    this.isQtyValid = true;
    this.isUnitCostValid = true;
    this.productdata = [];
  }

  ngOnInit() {
    this.btnloader = false;
    this.newUniqueID = 0;
    this.genicProfile.getGenicProfile(this.currentUser.Token);
    this.quoteService.getTaxList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                this.quoteService.TextList = response.result as Tax[]
              }}, error =>  console.log(error));
    if (this.invoiceService.InvoiceData.InvoiceId === '' || this.invoiceService.InvoiceData.InvoiceId === undefined) {
      this.router.navigate(['/invoices/']);
    }
    if (this.router.url === '/invoices/invoice-add') {
      if (!this.currentUser.Permissions.InvoiceCreate) { this.router.navigate(['/dashboard']); }
      this.titleService.setTitle('Invoice Create | Genic Solution');
      this.createbuttontext = 'Create';
      this.invoiceService.InvoiceData.InvoiceDate = this.genicProfile.TODAY_DATE_IN_STRING;
      this.invoiceService.InvoiceData.InvoiceDueDate = this.genicProfile.NEXT_MONTH_DATE_IN_STRING;
    } else if (this.router.url === '/invoices/invoice-add-plane-url') {
      if (!this.currentUser.Permissions.InvoiceCreate) { this.router.navigate(['/dashboard']); }
      this.createbuttontext = 'Create';
      this.invoiceService.InvoiceData.InvoiceDate = this.genicProfile.TODAY_DATE_IN_STRING;
      this.invoiceService.InvoiceData.InvoiceDueDate = this.genicProfile.NEXT_MONTH_DATE_IN_STRING;
    } else if (this.router.url === '/invoices/invoice-edit') {
      if (!this.currentUser.Permissions.InvoiceEdit) { this.router.navigate(['/dashboard']); }
      this.createbuttontext = 'Update';
      this.titleService.setTitle('Invoice Edit | Genic Solution');
    } else if (this.router.url === '/invoices/invoice-from-quote') {
      if (!this.currentUser.Permissions.InvoiceCreate) { this.router.navigate(['/dashboard']); }
      this.createbuttontext = 'Create';
      this.invoiceService.InvoiceData.InvoiceDate = this.genicProfile.TODAY_DATE_IN_STRING;
      this.invoiceService.InvoiceData.InvoiceDueDate = this.genicProfile.NEXT_MONTH_DATE_IN_STRING;
      setTimeout(() => { this.setlocalcount(); }, 1000);
    } else {
      if (!this.currentUser.Permissions.InvoiceCreate) { this.router.navigate(['/dashboard']); }
      this.createbuttontext = 'Create';
      this.invoiceService.InvoiceData.InvoiceDate = this.genicProfile.TODAY_DATE_IN_STRING;
      this.invoiceService.InvoiceData.InvoiceDueDate = this.genicProfile.NEXT_MONTH_DATE_IN_STRING;
      setTimeout(() => { this.setlocalcount(); }, 1000);
    }
    this.productservice.refrestServicesList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                this.productservice.serviceformList = response.result as Service[];
              }}, error =>  console.log(error));
    this.productservice.refrestProductsList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                this.productservice.Productlist = response.result as Product[];
                console.log(this.productservice.Productlist);
      }}, error =>  console.log(error));
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.getInvoiceItems();
    }, 1000);
    setTimeout(() => {
      this.InitialazeProductDropdown();
    }, 3000);
  }

  InitialazeProductDropdown(): void {
    let tempurl = '';
    if (this.invoiceService.InvoiceItemData.Type === 'Product'){
      tempurl = '/api/products/GetProductsForSelect2Dropdown/';
    }
    if (this.invoiceService.InvoiceItemData.Type === 'Service'){
      tempurl = '/api/products/GetServicesForSelect2Dropdown/';
    }
    let prod = this.invoiceService.InvoiceItemData.Type;
      if(this.invoiceService.InvoiceItemData.Type === 'Product') { prod = this.currentUser.Product; }
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
  picked(event) {
    this.loader = true;
    let t = this.currentUser.Token;
    let type = 'invoiceattachment';
    let moduleid = this.invoiceService.InvoiceData.Id;
    let remark = '';
    let Files = event.target.files;
    let file = Files.item(0);
    this.docservice.uploadDocument(t , type, moduleid, '', remark, file).subscribe( res => {
      if (res) { const response = res as any;
        console.log(response);
                 if (response.Message === 'success') {
                  this.toastr.info('upload successfully');
                  this.getInvoiceAttachments();
                  this.loader = false;
                  }
                  if (response.Message === 'failure') {
                    this.toastr.warning(response.MessageDescription);
                    this.loader = false;
                  }
    }}, error =>  console.log(error));
    this.loader = false;
  }

  // remove invice attachment
  RemoveInvoiceAttachement(QuoteAttamentId: number, Attachment: string) {
    if (confirm('Are you sure to delete this attachment?')) {
      this.invoiceService.deleteInvoiceAttachment(QuoteAttamentId).then(
        res => {
          if (res.status === 204) {
            this.getInvoiceAttachments();
            const des = 'An attachment : ' + Attachment + ', has been Removed from the Invoice No : ' +
            this.invoiceService.InvoiceData.InvoiceId + ' of Customer : ' + this.invoiceService.InvoiceData.CustomerName +
            ' by user : ' + this.currentUser.UserName;
            const Activity1 =  'An attachment ' + Attachment + ' has been removed from the Invoice No : '
            + this.invoiceService.InvoiceData.InvoiceId ;
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice',
            this.invoiceService.InvoiceData.Id, 'Removed', des, Activity1 ).subscribe();
            this.toastr.info('info', 'Deleted successfully');
          } else if (res.status === 404) {
            this.toastr.warning('Warning', 'Record Not Found');
          } else {
            this.toastr.error('Error', res.statusText);
          }
        },
        err => {
          this.toastr.error('Error', err.statusText);
          console.log(err.error);
        });
    }
  }
  getInvoiceItems() {
    this.invoiceService.getInvoiceItems(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.invoiceService.InvoiceItemList = [];
                  this.invoiceService.InvoiceItemList = response.result;
                  this.setlocalcount();
                  }
    }}, error =>  console.log(error));
  }
  getInvoiceAttachments() {
    this.invoiceService.getInvoiceAttachments(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.invoiceService.InvoiceAttachmentList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  setlocalcount() {
    this.ItemSubTotalByArry = [];
    this.ItemSubTotalByArry = this.invoiceService.InvoiceItemList.map(element => element.Total);
    if (this.ItemSubTotalByArry.length < 0) {
      this.invoiceService.InvoiceData.SubTotal = 0;
      this.invoiceService.InvoiceData.NetAmount = 0;
      this.invoiceService.InvoiceData.TaxAmount = 0;
      this.invoiceService.InvoiceData.TaxRate = 0;
      this.invoiceService.InvoiceData.DiscountAmount = 0;
      this.invoiceService.InvoiceData.DiscountTextValue = 0;
    } else {
      this.invoiceService.InvoiceData.SubTotal = this.ItemSubTotalByArry.reduce((a, b) => a + b, 0);

      let EditSubTotalValue = Number(this.ItemSubTotalByArry.reduce((a, b) => a + b, 0));
      let EditTaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
      let EditTaxAmt = Number(EditSubTotalValue * EditTaxRate) / 100;
      this.invoiceService.InvoiceData.TaxAmount = EditTaxAmt;
      this.invoiceService.InvoiceData.SubTotal = EditSubTotalValue;

      if (Number(this.invoiceService.InvoiceData.DiscountType) === 0) {
        const EditDisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);
        if (Number(EditSubTotalValue) < EditDisTextValue) {
          this.invoiceService.InvoiceData.DiscountAmount = 0;
        } else {
          this.invoiceService.InvoiceData.DiscountAmount = Number(EditDisTextValue);
          this.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - EditDisTextValue);
        }
      } else if (Number(this.invoiceService.InvoiceData.DiscountType) === 1) {
        const EditDisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);
        const z = Number(EditSubTotalValue * EditDisTextValue / 100);
        if (Number(EditSubTotalValue) < z) {
          this.invoiceService.InvoiceData.DiscountAmount = 0;
        } else {
          this.invoiceService.InvoiceData.DiscountAmount = Number(z);
          this.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - z);
        }
      }
    }
  }
  RemoveInvoiceItem(id: number, ItemName: string, Qty: number, UnitCost: number) {
    this.invoiceService.deleteInvoiceItems(id).then(
      res => {
        switch (res.status) {
          case 204:
            this.toastr.info('success', 'Item removed from invoice');
            this.getInvoiceItems();

            const des = 'An Item : ' + ItemName + ', Qty : ' + Qty +
            ', Amount of $: ' + (Qty * UnitCost) + ', has been Removed from the Invoice No: ' +
            this.invoiceService.InvoiceData.InvoiceId + ' of Customer : '
            + this.invoiceService.InvoiceData.CustomerName + ', by user : ' + this.currentUser.UserName;
            const Activity2 =  'An item : ' + ItemName + ' Amount of :$ ' + Qty * UnitCost + 'has been removed from the Invoice No : '
            + this.invoiceService.InvoiceData.InvoiceId ;
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice',
            this.invoiceService.InvoiceData.Id, 'Removed', des, Activity2 ).subscribe();

            // calculate invoice total value start
            setTimeout(() => {
              this.ItemSubTotalByArry = [];
              this.ItemSubTotalByArry = this.invoiceService.InvoiceItemList.map(element => element.Total);
              this.invoiceService.InvoiceData.SubTotal = this.ItemSubTotalByArry.reduce((a, b) => a + b, 0);

              const EditSubTotalValue = Number(this.ItemSubTotalByArry.reduce((a, b) => a + b, 0));
              const EditTaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
              const EditTaxAmt = Number(EditSubTotalValue * EditTaxRate) / 100 ;
              this.invoiceService.InvoiceData.TaxAmount = EditTaxAmt;
              this.invoiceService.InvoiceData.SubTotal = EditSubTotalValue;

              if (Number(this.invoiceService.InvoiceData.DiscountType) === 0) {
                const EditDisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);
                if (Number(EditSubTotalValue) < EditDisTextValue) {
                  this.invoiceService.InvoiceData.DiscountAmount = 0;
                } else {
                  this.invoiceService.InvoiceData.DiscountAmount = Number(EditDisTextValue);
                  this.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - EditDisTextValue);
                }
              } else if (Number(this.invoiceService.InvoiceData.DiscountType) === 1) {
                const EditDisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);
                const z = Number(EditSubTotalValue * EditDisTextValue / 100);
                if (Number(EditSubTotalValue) < z) {
                  this.invoiceService.InvoiceData.DiscountAmount = 0;
                } else {
                  this.invoiceService.InvoiceData.DiscountAmount = Number(z);
                  this.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - z);
                }
              }
            }, 1000);
            // calculate invoice total value end

            break;
          case 404: break;
          default: this.toastr.error('error', res.statusText); break;
        }
      }, err => { console.log(err); });
  }
  public CalculateInvoiceProductCost() {
    const tempqty: any = Number(this.invoiceService.InvoiceItemData.Qty);
    const temcost: any = Number(this.invoiceService.InvoiceItemData.UnitCost).toFixed(2);
    const total: any = Number(tempqty * temcost);
    this.invoiceService.InvoiceItemData.Total = total.toFixed(2).toString();
  }

  // Id,InvoiceId,ItemName,Qty,UnitCost,Total,ItemDescription
  public addProductToInvoice(Id: number, InvoiceId: string,
                             ItemName: string, Qty: number, UnitCost: number, Total: number, ItemDescription: string) {
    this.ItemIsValid = true;
    if (this.invoiceService.InvoiceData.Id === undefined || this.invoiceService.InvoiceData.Id === '00000000-0000-0000-0000-000000000000') {
      this.router.navigate(['/invoices/invoice-add']);
      return false;
    }
    if (ItemName === undefined || ItemName === 'select') {
      this.toastr.warning('Warning', 'Please select a product');
      this.ItemProductIsValid = false;
      this.ItemIsValid = false;
      return false;
    }
    if (Qty === undefined || Qty === 0) {
      this.toastr.warning('Warning', 'Please enter quantity');
      this.ItemQuantityIsValid = false;
      this.ItemIsValid = false;
      return false;
    }
    if (UnitCost === undefined || UnitCost === 0) {
      this.toastr.warning('Warning', 'Please enter unit cost');
      this.ItemUnitCosttIsValid = false;
      this.ItemIsValid = false;
      return false;
    }
    if (this.currentUser.Permissions.ProductWarranty) {
      if (this.invoiceService.InvoiceItemData.InWarranty) {
        if (this.invoiceService.InvoiceItemData.UniqId === '' || this.invoiceService.InvoiceItemData.UniqId.length === 0) {
          this.toastr.warning('Warning', 'Please enter a unique id');
          this.ItemUniqueIsValid = false;
          this.ItemIsValid = false;
          return false;
        }
      }
    }
    this.invoiceService.InvoiceItemData.Id = Id;
    this.invoiceService.InvoiceItemData.InvoiceId = InvoiceId;
    this.invoiceService.InvoiceItemData.ItemName = ItemName;
    this.invoiceService.InvoiceItemData.Qty = Number(Qty);
    this.invoiceService.InvoiceItemData.UnitCost = Number(UnitCost);
    this.invoiceService.InvoiceItemData.Total = Number(Total);
    this.invoiceService.InvoiceItemData.ItemDescription = ItemDescription;
    this.invoiceService.InvoiceItemData.WarrantyDays = Number(this.invoiceService.InvoiceItemData.WarrantyDays);

    const des = 'A Product : ' + this.invoiceService.InvoiceItemData.ItemName + ', has been Added to the Invoice No : ' +
    this.invoiceService.InvoiceData.InvoiceId + ' of Customer ' + this.invoiceService.InvoiceData.CustomerName + ' and Qty ' +
    this.invoiceService.InvoiceItemData.Qty + ' Amount of : $ '
    + this.invoiceService.InvoiceItemData.Total + ' by user ' + this.currentUser.UserName ;
    const Activity3 =  'An item : ' + ItemName + ' Amount of :$ ' + Qty * UnitCost + ' is added to the Invoice No : '
    + this.invoiceService.InvoiceData.InvoiceId ;
    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice',
    this.invoiceService.InvoiceData.Id, 'Added', des, Activity3 ).subscribe();


    if (Id === 0) {
      this.invoiceService.postInvoiceItemDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.getInvoiceItems();
                    }
      }}, error =>  console.log(error));
    } else {
      this.invoiceService.putInvoiceItemDetails().subscribe(
        res => {
          switch (res.status) {
            case 202:
              this.getInvoiceItems();


            setTimeout(() => {
              this.ItemSubTotalByArry = [];
              this.ItemSubTotalByArry = this.invoiceService.InvoiceItemList.map(element => element.Total);
              this.invoiceService.InvoiceData.SubTotal = this.ItemSubTotalByArry.reduce((a, b) => a + b, 0);

              const EditSubTotalValue = Number(this.ItemSubTotalByArry.reduce((a, b) => a + b, 0));
              const EditTaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
              const EditTaxAmt = Number(EditSubTotalValue * EditTaxRate) / 100 ;
              this.invoiceService.InvoiceData.TaxAmount = EditTaxAmt;
              this.invoiceService.InvoiceData.SubTotal = EditSubTotalValue;

              if (Number(this.invoiceService.InvoiceData.DiscountType) === 0) {
                const EditDisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);
                if (Number(EditSubTotalValue) < EditDisTextValue) {
                  this.invoiceService.InvoiceData.DiscountAmount = 0;
                } else {
                  this.invoiceService.InvoiceData.DiscountAmount = Number(EditDisTextValue);
                  this.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - EditDisTextValue);
                }
              } else if (Number(this.invoiceService.InvoiceData.DiscountType) === 1) {
                const EditDisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);
                const z = Number(EditSubTotalValue * EditDisTextValue / 100);
                if (Number(EditSubTotalValue) < z) {
                  this.invoiceService.InvoiceData.DiscountAmount = 0;
                } else {
                  this.invoiceService.InvoiceData.DiscountAmount = Number(z);
                  this.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - z);
                }
              }
            }, 200);

            const descc = 'A Product : ' + this.invoiceService.InvoiceItemData.ItemName + ', has been Modify to the Invoice No : ' +
            this.invoiceService.InvoiceData.InvoiceId + ' of Customer ' + this.invoiceService.InvoiceData.CustomerName + ' and Qty ' +
            this.invoiceService.InvoiceItemData.Qty + ' Amount of : $ '
            + this.invoiceService.InvoiceItemData.Total + ' by user ' + this.currentUser.UserName ;
            const Activity4 =  'An item : ' + this.invoiceService.InvoiceItemData.ItemName + ' Amount of :$ '
             + this.invoiceService.InvoiceItemData.Total + ' is updated against Invoice No : ' +
            + this.invoiceService.InvoiceData.InvoiceId ;
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice',
            this.invoiceService.InvoiceData.Id, 'Modify', descc, Activity4 ).subscribe();

            break;
            case 208: this.toastr.warning('Unique id already exist. use an other'); break;
            case 404: break;
            default: this.toastr.error('error', res.statusText); break;
          }
        }, err => { console.log(err); });
      this.ItemBtn = 'Add';
    }
    this.ItemUnitCosttIsValid = true;
    this.invoiceService.InvoiceItemData.Id = 0;
    this.invoiceService.InvoiceItemData.InvoiceId = '00000000-0000-0000-0000-000000000000';
    this.invoiceService.InvoiceItemData.ItemName = '';
    this.invoiceService.InvoiceItemData.Qty = null;
    this.invoiceService.InvoiceItemData.UnitCost = null;
    this.invoiceService.InvoiceItemData.Total = null;
    this.invoiceService.InvoiceItemData.ItemDescription = '';
    this.invoiceService.InvoiceItemData.UniqId = '';
    this.invoiceService.InvoiceItemData.InWarranty = false;
    this.invoiceService.InvoiceItemData.WarrantyDays = 365;

    if (this.quoteService.QuoteItemData.Type === 'Product') {
      this.quoteService.QuoteItemData.Type = 'Service';
      this.InitialazeProductDropdown();
      setTimeout(() => { this.quoteService.QuoteItemData.Type = 'Product'; this.InitialazeProductDropdown(); }, 200);
    } else {
      this.quoteService.QuoteItemData.Type = 'Product';
      this.InitialazeProductDropdown();
      setTimeout(() => { this.quoteService.QuoteItemData.Type = 'Service'; this.InitialazeProductDropdown(); }, 200);
    }

    setTimeout(() => {
      this.invoiceService.InvoiceData.NetAmount = 0;
      this.invoiceService.InvoiceItemList.forEach(element => {
      this.invoiceService.InvoiceData.NetAmount += element.Total;
    });
    }, 1000);
  }
  PupulateInvoiceProductList(x: InvoiceItem) {
    this.invoiceService.InvoiceItemData = Object.assign({}, x);
    if (x.InWarranty) { this.tempInWarranty = true; } else { this.tempInWarranty = false; }
    this.ItemBtn = 'Update';
    setTimeout(() => {
      this.invoiceService.InvoiceItemData.Qty = x.Qty;
    }, 800);
  }
  OnInvoiceItemTypeChange() {
    this.ItemQuantityIsValid = true;
    this.ItemUnitCosttIsValid = true;
    if (this.currentUser.Permissions.ProductWarranty) {
      if (this.invoiceService.InvoiceItemData.InWarranty) {
        this.ItemUniqueIsValid = true;
      }
    }
    if (this.invoiceService.InvoiceItemData.Type === 'Service') {
      this.invoiceService.InvoiceItemData.Qty = 1;
      this.invoiceService.InvoiceItemData.UnitCost = null;
      this.invoiceService.InvoiceItemData.Total = null;
      this.invoiceService.InvoiceItemData.InWarranty = false;
      this.invoiceService.InvoiceItemData.UniqId = null;
      this.invoiceService.InvoiceItemData.WarrantyDays = 365;
    }
    if (this.invoiceService.InvoiceItemData.Type === 'Product') {
      this.invoiceService.InvoiceItemData.Qty = null;
      this.invoiceService.InvoiceItemData.UnitCost = null;
      this.invoiceService.InvoiceItemData.Total = null;
      this.invoiceService.InvoiceItemData.InWarranty = false;
      this.invoiceService.InvoiceItemData.UniqId = null;
      this.invoiceService.InvoiceItemData.WarrantyDays = 365;
    }
    this.InitialazeProductDropdown();
    this.invoiceService.InvoiceItemData.ItemDescription = null;
  }
  // change deposite value
  changeInvoiceDepositeValue() {
    if (Number(this.invoiceService.InvoiceData.ReqDepositeType) === 0) {
      //const v = this.invoiceService.InvoiceData.NetAmount;
      const x = Number(this.invoiceService.InvoiceData.ReqDepositeTextValue);
      if (Number(this.invoiceService.InvoiceData.NetAmount) < x) {
        this.invoiceService.InvoiceData.ReqDepositeAmount = Number(0);
        this.toastr.info('Deposit amount is always less than from total amount.');
      } else {
        this.invoiceService.InvoiceData.ReqDepositeAmount = Number(x);
      }
    } else if (Number(this.invoiceService.InvoiceData.ReqDepositeType) === 1) {
      const v = Number(this.invoiceService.InvoiceData.NetAmount);
      const x = Number(this.invoiceService.InvoiceData.ReqDepositeTextValue);
      const z = v * x / 100;
      if (Number(this.invoiceService.InvoiceData.NetAmount) < z) {
        this.invoiceService.InvoiceData.ReqDepositeAmount = Number(0);
        this.toastr.info('Deposit amount is always less than from total amount.');
      } else {
        this.invoiceService.InvoiceData.ReqDepositeAmount = Number(z);
      }
    }
  }
  changeDiscountValue() {
    if(this.invoiceService.InvoiceData.DiscountType == null || this.invoiceService.InvoiceData.DiscountType == undefined){
      this.invoiceService.InvoiceData.DiscountType = 0
    }
    if (Number(this.invoiceService.InvoiceData.DiscountType) === 0) {
      let SubTotalValue = Number(this.invoiceService.InvoiceData.SubTotal);
      const DisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);
      if (Number(SubTotalValue) < DisTextValue) {
        this.invoiceService.InvoiceData.DiscountAmount = 0;
        let TempTaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
        let tempTaxAmt = Number(SubTotalValue) * TempTaxRate / 100;
        this.invoiceService.InvoiceData.TaxAmount = tempTaxAmt;
        this.invoiceService.InvoiceData.NetAmount = Number(SubTotalValue + tempTaxAmt);
      } else {
        this.invoiceService.InvoiceData.DiscountAmount = Number(DisTextValue);
        let TempTaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
        let tempTaxAmt = (Number(SubTotalValue) - Number(DisTextValue)) * TempTaxRate / 100;
        this.invoiceService.InvoiceData.TaxAmount = tempTaxAmt;
        let z = SubTotalValue - DisTextValue + tempTaxAmt;
        this.invoiceService.InvoiceData.NetAmount = Number(z);
      }
    } else if (Number(this.invoiceService.InvoiceData.DiscountType) === 1) {
      let SubTotalValue = Number(this.invoiceService.InvoiceData.SubTotal);
      let DisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);
      const tempDiscAmount = Number(SubTotalValue * DisTextValue / 100);
      if (Number(SubTotalValue) < tempDiscAmount) {
        this.invoiceService.InvoiceData.DiscountAmount = 0;
        let TempTaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
        let tempTaxAmt = Number(SubTotalValue) * Number(TempTaxRate) / 100;
        this.invoiceService.InvoiceData.TaxAmount = Number(tempTaxAmt);
        this.invoiceService.InvoiceData.NetAmount = Number(SubTotalValue + tempTaxAmt);
      } else {
        this.invoiceService.InvoiceData.DiscountAmount = Number(tempDiscAmount);
        let TempTaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
        let tempTaxAmt = (Number(SubTotalValue) - Number(tempDiscAmount)) * TempTaxRate / 100;
        this.invoiceService.InvoiceData.TaxAmount = tempTaxAmt;
        let zz = SubTotalValue - tempDiscAmount + tempTaxAmt;
        this.invoiceService.InvoiceData.NetAmount = Number(zz);
      }
    }
  }
  // calculate tax
  CalculateInvoiceTax() {
    let SubTotalValue = Number(this.invoiceService.InvoiceData.SubTotal);
    let DisctAmt = Number(this.invoiceService.InvoiceData.DiscountAmount);
    let TaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
    let z = SubTotalValue - DisctAmt;
    let TaxAmt = Number(z * TaxRate) / 100;
    this.invoiceService.InvoiceData.TaxAmount = TaxAmt;
    this.invoiceService.InvoiceData.NetAmount = z + TaxAmt;
  }
  // post invoice
  putInvoice() {
    if (this.invoiceService.InvoiceData.InvoiceDate === undefined || this.invoiceService.InvoiceData.InvoiceDate === null) {
      this.toastr.warning('Warning', 'Please select Invoice date');
      this.InvoiceDateIsValid = false;
      return this.InvoiceDateIsValid;
    }
    if (this.invoiceService.InvoiceData.InvoiceDueDate === undefined || this.invoiceService.InvoiceData.InvoiceDueDate === null) {
      this.toastr.warning('Warning', 'Please select Invoice due date');
      this.InvoiceDueDateIsValid = false;
      return this.InvoiceDueDateIsValid;
    }
    if (this.invoiceService.InvoiceData.InvoiceTitle === null || this.invoiceService.InvoiceData.InvoiceTitle === '' || this.invoiceService.InvoiceData.InvoiceTitle === undefined) {
      this.toastr.warning('warning', 'Add Invoice title.');
    } else if (this.invoiceService.InvoiceItemList.length === 0 || this.invoiceService.InvoiceItemList === [] || this.invoiceService.InvoiceItemList === undefined) {
      this.toastr.warning('warning', 'Add product to the Invoice.');
    } else {
    this.btnloader = true;
    this.createbuttontext = 'Loading...';
    this.invoiceService.InvoiceData.DiscountType = Number(this.invoiceService.InvoiceData.DiscountType);
    this.invoiceService.InvoiceData.DiscountAmount = Number(this.invoiceService.InvoiceData.DiscountAmount);
    this.invoiceService.InvoiceData.DiscountTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);
    this.invoiceService.InvoiceData.SubTotal = Number(this.invoiceService.InvoiceData.SubTotal);
    this.invoiceService.InvoiceData.TaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
    this.invoiceService.InvoiceData.TaxAmount = Number(this.invoiceService.InvoiceData.TaxAmount);
    this.invoiceService.InvoiceData.ReqDepositeType = Number(this.invoiceService.InvoiceData.ReqDepositeType);
    this.invoiceService.InvoiceData.ReqDepositeTextValue = Number(this.invoiceService.InvoiceData.ReqDepositeTextValue);
    this.invoiceService.InvoiceData.ReqDepositeAmount = Number(this.invoiceService.InvoiceData.ReqDepositeAmount);
    this.invoiceService.InvoiceData.NetAmount = Number(this.invoiceService.InvoiceData.NetAmount);
    this.invoiceService.putInvoice(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                    if(response.type === 'insert') {
                      const des1 = 'Invoice No : ' + this.invoiceService.InvoiceData.InvoiceId +
                      ' is Added :  by user : ' + this.currentUser.UserName + ' for Customer : ' +
                      this.invoiceService.InvoiceData.CustomerName + 'invoice title : ' +
                      ', Client Description : ' + this.invoiceService.InvoiceData.ClientRemark + ',Internal note : ' +
                      this.invoiceService.InvoiceData.InternalNotes +
                      this.invoiceService.InvoiceData.InvoiceTitle + ', Amount of : $ ' + this.invoiceService.InvoiceData.NetAmount + '0.00' +
                      ', Discount : $ ' + this.invoiceService.InvoiceData.DiscountAmount + ', Tax : $ ' + this.invoiceService.InvoiceData.TaxAmount +
                      ', and required to deposite amount : $' + this.invoiceService.InvoiceData.ReqDepositeAmount +
                      ', on dated : ' + new Date(Date.parse(Date()));
                      const Activity5 =  'New invoice No : ' + this.invoiceService.InvoiceData.InvoiceId + ' , Amount :$ '
                      + this.invoiceService.InvoiceData.NetAmount + '0.00' + ' is created';
                      this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice',
                      this.invoiceService.InvoiceData.Id, 'Added', des1, Activity5 ).subscribe();
                      this.btnloader = false;
                      this.router.navigate(['/invoices/']);
                    }
                    if(response.type === 'update') {
                      const des = 'Invoice No : ' + this.invoiceService.InvoiceData.InvoiceId +
                      ' is modified :  by user : ' + this.currentUser.UserName + ' for Customer : ' +
                      this.invoiceService.InvoiceData.CustomerName + 'invoice title : ' +
                      ', Client Description : ' + this.invoiceService.InvoiceData.ClientRemark + ',Internal note : ' +
                      this.invoiceService.InvoiceData.InternalNotes +
                      this.invoiceService.InvoiceData.InvoiceTitle + ', Amount of : $ ' + this.invoiceService.InvoiceData.NetAmount + '0.00' +
                      ', Discount : $ ' + this.invoiceService.InvoiceData.DiscountAmount + ', Tax : $ ' + this.invoiceService.InvoiceData.TaxAmount +
                      ', and required to deposite amount : $' + this.invoiceService.InvoiceData.ReqDepositeAmount +
                      ', on dated : ' + new Date(Date.parse(Date()));
                      const Activity6 =  'Invoice No : ' + this.invoiceService.InvoiceData.InvoiceId + ' , Amount :$ '
                      + this.invoiceService.InvoiceData.NetAmount + '0.00' + ' is updated';
                      this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice',
                      this.invoiceService.InvoiceData.Id, 'Modify', des, Activity6 );
                      this.btnloader = false;
                      this.router.navigate(['/invoices/']);
                    }
                  }
                  if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
}
  CleareProductToInvoice() {
    this.invoiceService.InvoiceItemData.ItemName = null;
    this.invoiceService.InvoiceItemData.Qty = null;
    this.invoiceService.InvoiceItemData.ItemDescription = null;
    this.invoiceService.InvoiceItemData.UnitCost = null;
    this.invoiceService.InvoiceItemData.Total = null;
    this.invoiceService.InvoiceItemData.UniqId = '';
    this.invoiceService.InvoiceItemData.InWarranty = false;
    this.invoiceService.InvoiceItemData.WarrantyDays = 0;
  }
  ngOnDestroy() {
    this.invoiceService.SetAsDefaultValue();
  }
  onInvoiceNosChange() {
    if (this.InvoiceNosChange) {
      this.InvoiceNosChange = false;
      this.InvoiceNosChangeBtn = 'Change';
      if (this.locateInvoiceUniqueID === this.quoteService.QuoteData.QuoteUniqueID) {
      } else {
        this.ValidateInvoiceNo();
      }
    } else {
      this.InvoiceNosChange = true;
      this.InvoiceNosChangeBtn = 'Save';
    }
  }
  ValidateInvoiceNo() {
    this.invoiceService.ValidateInvoiceNo(this.invoiceService.InvoiceData.InvoiceUniqueID).subscribe(
      res => {
        switch (res.status) {
          case 201:
          this.newUniqueID = res.body;
          this.invoiceService.InvoiceData.InvoiceId = this.genicProfile.formData.InvoicePrefix + this.newUniqueID;
          this.toastr.success('success', 'Invoice number available.');
          break;
          case 202:
          this.toastr.warning('warning', 'Invoice number already taken, choose another.');
          break;
          default: this.toastr.error('error', res.statusText); break;
        }
      }, err => { console.log(err); });
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
    if (event.target.value === 0 || event.target.value === '') {
      this.isUnitCostValid = false;
    } else {
      this.isUnitCostValid = true;
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
  WhenSelectProductChange(event) {
    if (this.invoiceService.InvoiceItemData.Type === 'Product') {
      const titem = this.productservice.Productlist.filter(x => x.Id === event.id);
      const warrantyvalue = titem[0].InWarranty;
      this.ItemQuantityIsValid = true;
      this.ItemUnitCosttIsValid = true;
      if (titem.length === 0) {
        this.invoiceService.InvoiceItemData.Qty = 0;
        this.invoiceService.InvoiceItemData.Total = 0;
        this.invoiceService.InvoiceItemData.UnitCost = 0;
        this.invoiceService.InvoiceItemData.ItemDescription = '';
        this.invoiceService.InvoiceItemData.WarrantyDays = 0;
        this.IshowStockSection = false;
        this.tempInWarranty = false;
      } else {
        this.tempAvailableStock = Number(titem[0].Quantity);
        this.tempSalePrice = Number(titem[0].SalePrice);
        this.invoiceService.InvoiceItemData.WarrantyDays = Number(titem[0].WarrantyDays);
        this.IshowStockSection = true;
        this.invoiceService.InvoiceItemData.Qty = 1;
        this.invoiceService.InvoiceItemData.ItemName = titem[0].ProductName;
        this.invoiceService.InvoiceItemData.UnitCost = Number(titem[0].SalePrice);
        this.invoiceService.InvoiceItemData.Total = this.tempSalePrice * this.invoiceService.InvoiceItemData.Qty;
        this.invoiceService.InvoiceItemData.ItemDescription = titem[0].Description;
        this.ItemQuantityIsValid = true;
        this.ItemUnitCosttIsValid = true;
      }
      if (warrantyvalue === true) {this.tempInWarranty = true; } else {this.tempInWarranty = false; }
    }
    if (this.invoiceService.InvoiceItemData.Type === 'Service') {
      const titem = this.productservice.serviceformList.filter(x => x.Id === event.id);
      const warrantyvalue = titem[0].InWarranty;
      if (titem.length === 0) {
        this.invoiceService.InvoiceItemData.ItemDescription = '';
        this.invoiceService.InvoiceItemData.WarrantyDays = 0;
        this.tempInWarranty = false;
      } else {
        this.invoiceService.InvoiceItemData.Qty = 1;
        this.invoiceService.InvoiceItemData.ItemName = titem[0].ServiceName;
        this.invoiceService.InvoiceItemData.ItemDescription = titem[0].ServiceDescription;
        this.invoiceService.InvoiceItemData.WarrantyDays = titem[0].WarrantyDays;
        this.invoiceService.InvoiceItemData.UnitCost = 0;
        this.invoiceService.InvoiceItemData.Total = 0;
        this.ItemUnitCosttIsValid = true;
      }
      if (warrantyvalue === true) {this.tempInWarranty = true; } else {this.tempInWarranty = false; }
    }
    if (this.currentUser.Permissions.ProductWarranty) {
      if (this.invoiceService.InvoiceItemData.InWarranty) {
        this.ItemUniqueIsValid = true;
        this.GenerateUniqueRandom();
      }
    }
    this.InitialazeProductDropdown();
  }

  GenerateUniqueRandom() {
    if (this.ItemBtn === 'Add') {
      this.productservice.GetRandamUniqueId(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.invoiceService.InvoiceItemData.UniqId  = response.MessageDescription;
                    }
      }}, error =>  console.log(error));
    }
  }

  public customwarrantyShowMethor() {
    if (this.invoiceService.InvoiceItemData.WarrantyDays === undefined) {
      this.customwarrantyShow = false;
    } else {
    switch (this.invoiceService.InvoiceItemData.WarrantyDays.toString()) {
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
}
