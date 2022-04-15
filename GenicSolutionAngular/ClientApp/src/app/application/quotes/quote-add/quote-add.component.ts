import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { QuoteService } from '../../../services/quote.service';
import { ProductService } from '../../../services/product.service';
import { QuoteItem, Tax } from '../../../services/quote.module';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationStart } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { InvoiceService } from '../../../services/invoice.service';
import { UserlogService } from '../../../services/userlog.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Login } from '../../../services/login.mudule';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { Property } from '../../../services/property.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { QuoteCustomerPopupComponent } from '../quote-customer-popup/quote-customer-popup.component';
import { Customer } from '../../../services/customer.model';
import { QuotecustomerPropertyPopupComponent } from '../quotecustomer-property-popup/quotecustomer-property-popup.component';
import { NotificationService } from '../../../services/notification.service';
import { Product, Service } from '../../../services/product.module';
import { CustomerService } from 'src/app/services/customer.service';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';
import { Title } from '@angular/platform-browser';
declare let $: any;

@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
  ],
})
export class QuoteAddComponent implements OnInit, AfterViewInit, OnDestroy {
  // validation part start ---
  isQuoteTitleValid: boolean;
  isQtyValid: boolean;
  isUnitCostValid: boolean;
  ItemUniqueIsValid: boolean;
  // validation end--------
  fileToUpload: File = null;
  currentUser: Login;
  public uploader: FileUploader = new FileUploader({});
  tempSubTotal: number;
  tempNetAmount: number;
  ProductItemArray = [];
  tempArray = [];
  createbuttontext: string;
  ItemBtn = 'Add';
  ItemIsValid = true;
  ItemProductIsValid = true;
  ItemQuantityIsValid = true;
  ItemUnitCosttIsValid = true;
  ItemSubTotalAmount: number;
  ItemSubTotalByArry: any;
  ItemTotalAmount: number;
  private routeSub: any;
  Isnavigated: boolean;
  ActionType: string;
  localPrependUrl: string;
  QuoteNosChange = false;
  QuoteNosChangeBtn = 'Change';
  newUniqueID;
  locateQuoteUniqueID;
  currentUTCDate = new Date();

  customerData = new Customer();
  customerPropertyData = new Property();

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

  public productoptions: any;
  productdata: any;
  data: Array<any>;
  tempAvailableStock: number;
  tempSalePrice: number;
  tempIndexQty = 0;
  IshowStockSection = true;
  tempInWarranty: boolean = false;
  customwarrantyShow: boolean;
  customwarrantyShowEdit: boolean;
  loader: boolean = false;
  constructor(
    public titleService: Title,
    public quoteService: QuoteService,
    public productservice: ProductService,
    public docservice: DocumentUploadService,
    public toastr: ToastrService,
    private router: Router,
    public invoiceService: InvoiceService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public genicProfile: GenicProfileService,
    public customerservice: CustomerService,
    private dialog: MatDialog,
    public notifyService: NotificationService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.isQuoteTitleValid = true;
    this.isQtyValid = true;
    this.isUnitCostValid = true;
    this.ItemUniqueIsValid = true;
    this.productdata = [];
  }

  ngOnInit() {
    if (this.quoteService.QuoteData.CustomerName === 'Customer Name?' || this.quoteService.QuoteData.CustomerName === undefined) {
      this.router.navigate(['/quotes/']);
    }
    this.titleService.setTitle('Quotation Create | Genic Solution');
    this.customerservice.refrestCustomerIdWiseDepartmentList(this.quoteService.QuoteData.CustomerId);
    if (this.quoteService.QuoteData.QuoteTermsAndCondition === ''
      || this.quoteService.QuoteData.QuoteTermsAndCondition === null
      || this.quoteService.QuoteData.QuoteTermsAndCondition === undefined) {
      this.quoteService.QuoteData.QuoteTermsAndCondition = this.genicProfile.formData.QuoteTermsAndCondition;
    }
    this.newUniqueID = 0;
    this.locateQuoteUniqueID = this.quoteService.QuoteData.QuoteUniqueID;
    this.genicProfile.getGenicProfile(this.currentUser.Token);
    this.Isnavigated = false;

    if (this.router.url === '/quotes/quote-Add') {
      if (!this.currentUser.Permissions.QuoteCreate) { this.router.navigate(['/dashboard']); }
      this.createbuttontext = 'Save';
      this.quoteService.QuoteData.PreparedBy = this.currentUser.FullName;
    } else {
      if (!this.currentUser.Permissions.QuoteEdit) { this.router.navigate(['/dashboard']); }
      this.createbuttontext = 'Update';
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
    this.getNotificationData();
    setTimeout(() => {
      this.getQuoteItems();
      this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
      this.quoteService.refrestArrayofKeyslist(this.quoteService.QuoteData.CustomerId);
    }, 1000);
    setTimeout(() => {
      this.InitialazeProductDropdown();
    }, 3000);
    this.quoteService.getTaxList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                this.quoteService.TextList = response.result as Tax[]
              }}, error =>  console.log(error));
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (!this.Isnavigated) {
          const answer = window.confirm('Are you sure you want to save this data?');
          if (!answer) {
            this.quoteService.deleteTemporaryQuote(this.quoteService.QuoteData.Id);
          }
        }
      }
    });
  }
  InitialazeProductDropdown(): void {
    let tempurl = '';
    if (this.quoteService.QuoteItemData.Type === 'Product'){
      tempurl = '/api/products/GetProductsForSelect2Dropdown/';
    }
    if (this.quoteService.QuoteItemData.Type === 'Service'){
      tempurl = '/api/products/GetServicesForSelect2Dropdown/';
    }
    let prod = this.quoteService.QuoteItemData.Type;
      if(this.quoteService.QuoteItemData.Type === 'Product') { prod = this.currentUser.Product; }
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
  ngAfterViewInit() {
    setTimeout(() => {
      this.getQuoteItems();
      this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
    }, 2000);
  }
  getQuoteItems() {
    this.quoteService.getQuoteItems(this.currentUser.Token, this.quoteService.QuoteData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.quoteService.QuoteItemList = response.result;
                    this.setlocalcount();
                  }
    }}, error =>  console.log(error));
  }
  validateInput(event) {
    let v = event.target.value;
    if (v === '') {
      this.isQuoteTitleValid = false;
    } else {
      this.isQuoteTitleValid = true;
    }
    let k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57));
  }
  //Get Notification data
  getNotificationData() {
    this.notifyService.getNotification(this.currentUser.Token)
      .subscribe(res => {
        if (res) {
          let obj: any = new Object();
          obj = res;
          this.notifyService.NotificationData = obj;
        }
      }, error => console.log(error))
  }

  // calculate total value
  public CalculateQuoteProductCost() {
    const tempqty: any = this.quoteService.QuoteItemData.Qty;
    const temcost: any = Number(this.quoteService.QuoteItemData.UnitCost).toFixed(2);
    const total: any = tempqty * temcost;
    this.quoteService.QuoteItemData.Total = total.toString();
    if (temcost > 0) {
      this.isUnitCostValid = true;
    }
  }
  OnQuationItemTypeChange() {
    this.ItemQuantityIsValid = true;
    this.ItemUnitCosttIsValid = true;
    if (this.currentUser.Permissions.ProductWarranty) {
      if (this.quoteService.QuoteItemData.InWarranty) {
        this.ItemUniqueIsValid = true;
      }
    }
    if (this.quoteService.QuoteItemData.Type === 'Service') {
      this.quoteService.QuoteItemData.Qty = 1;
      this.quoteService.QuoteItemData.UnitCost = null;
      this.quoteService.QuoteItemData.Total = null;
      this.quoteService.QuoteItemData.InWarranty = false;
      this.quoteService.QuoteItemData.UniqId = null;
      this.quoteService.QuoteItemData.WarrantyDays = 365;
    }
    if (this.quoteService.QuoteItemData.Type === 'Product') {
      this.quoteService.QuoteItemData.Qty = null;
      this.quoteService.QuoteItemData.UnitCost = null;
      this.quoteService.QuoteItemData.Total = null;
      this.quoteService.QuoteItemData.InWarranty = false;
      this.quoteService.QuoteItemData.UniqId = null;
      this.quoteService.QuoteItemData.WarrantyDays = 365;
    }
    this.InitialazeProductDropdown();
    this.quoteService.QuoteItemData.ItemDescription = null;
  }
  WhenSelectProductChange(event) {
    if (this.quoteService.QuoteItemData.Type === 'Product') {
      const titem = this.productservice.Productlist.filter(x => x.Id === event.id);
      const warrantyvalue = titem[0].InWarranty;
      this.ItemQuantityIsValid = true;
      this.ItemUnitCosttIsValid = true;
      if (titem.length === 0) {
        this.quoteService.QuoteItemData.Qty = 0;
        this.quoteService.QuoteItemData.Total = 0;
        this.quoteService.QuoteItemData.UnitCost = 0;
        this.quoteService.QuoteItemData.ItemDescription = '';
        this.quoteService.QuoteItemData.WarrantyDays = 0;
        this.quoteService.QuoteItemData.InWarranty = false;
        this.IshowStockSection = false;
        this.tempInWarranty = false;
      } else {
        this.tempAvailableStock = Number(titem[0].Quantity);
        this.tempSalePrice = Number(titem[0].SalePrice);
        this.quoteService.QuoteItemData.WarrantyDays = Number(titem[0].WarrantyDays);
        this.IshowStockSection = true;
        this.quoteService.QuoteItemData.Qty = 1;
        this.quoteService.QuoteItemData.ItemName = titem[0].ProductName;
        this.quoteService.QuoteItemData.UnitCost = Number(titem[0].SalePrice);
        this.quoteService.QuoteItemData.Total = this.tempSalePrice * this.quoteService.QuoteItemData.Qty;
        this.quoteService.QuoteItemData.ItemDescription = titem[0].Description;
        this.quoteService.QuoteItemData.InWarranty = warrantyvalue;
        this.ItemQuantityIsValid = true;
        this.ItemUnitCosttIsValid = true;
      }
      if (warrantyvalue === true) { this.tempInWarranty = true; } else { this.tempInWarranty = false; }
    }
    if (this.quoteService.QuoteItemData.Type === 'Service') {
      const titem = this.productservice.serviceformList.filter(x => x.Id === event.id);
      const warrantyvalue = titem[0].InWarranty;
      if (titem.length === 0) {
        this.quoteService.QuoteItemData.ItemDescription = '';
        this.quoteService.QuoteItemData.WarrantyDays = 0;
        this.quoteService.QuoteItemData.InWarranty = false;
        this.tempInWarranty = false;
      } else {
        this.quoteService.QuoteItemData.Qty = 1;
        this.quoteService.QuoteItemData.ItemName = titem[0].ServiceName;
        this.quoteService.QuoteItemData.ItemDescription = titem[0].ServiceDescription;
        this.quoteService.QuoteItemData.WarrantyDays =Number(titem[0].WarrantyDays);
        this.quoteService.QuoteItemData.InWarranty = warrantyvalue;
        this.quoteService.QuoteItemData.UnitCost = 0;
        this.quoteService.QuoteItemData.Total = 0;
        this.ItemUnitCosttIsValid = true;
      }
      if (warrantyvalue === true) { this.tempInWarranty = true; } else { this.tempInWarranty = false; }
    }
    if (this.currentUser.Permissions.ProductWarranty) {
      if (this.quoteService.QuoteItemData.InWarranty) {
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
                    this.quoteService.QuoteItemData.UniqId  = response.MessageDescription;
                    }
      }}, error =>  console.log(error));
    }
  }
  // on remove depoiste type
  HideRequestedSection() {
    this.quoteService.QuoteData.ReqDepositeAmount = 0;
    this.quoteService.QuoteData.ReqDepositeTextValue = 0;
  }
  public addProductToQuote(QItemId: number,
    ItemName: string, Qty: number, UnitCost: number, Total: number, ItemDescription: string) {
    this.ItemIsValid = true;
    if (this.quoteService.QuoteData.Id === undefined || this.quoteService.QuoteData.Id === '00000000-0000-0000-0000-000000000000') {
      this.router.navigate(['/quotes/quote-Add']);
      return false;
    }
    if (ItemName === undefined || ItemName === 'select' || ItemName === '') {
      this.toastr.warning('Warning', 'Please select a product');
      this.ItemProductIsValid = false;
      this.ItemIsValid = false;
      return false;
    }
    if (Qty === undefined || Qty === null) {
      this.toastr.warning('Warning', 'Please enter quantity');
      this.ItemQuantityIsValid = false;
      this.ItemIsValid = false;
      this.isQtyValid = false;
      return false;
    }
    if (UnitCost === undefined || UnitCost === null) {
      this.toastr.warning('Warning', 'Please enter unit cost');
      this.ItemUnitCosttIsValid = false;
      this.ItemIsValid = false;
      this.isUnitCostValid = false;
      return false;
    }
    if (this.quoteService.QuoteItemData.UniqId === null || this.quoteService.QuoteItemData.UniqId === undefined) { this.quoteService.QuoteItemData.UniqId === ''; }
    if (this.currentUser.Permissions.ProductWarranty) {
      if (this.quoteService.QuoteItemData.InWarranty) {
        if (this.quoteService.QuoteItemData.UniqId === '' || this.quoteService.QuoteItemData.UniqId.length === 0) {
          this.toastr.warning('Warning', 'Please enter a unique id');
          this.ItemUniqueIsValid = false;
          this.ItemIsValid = false;
          return false;
        }
      }
    }
    this.quoteService.QuoteItemData.Id = QItemId;
    this.quoteService.QuoteItemData.QuoteId = this.quoteService.QuoteData.Id;
    this.quoteService.QuoteItemData.ItemName = ItemName;
    this.quoteService.QuoteItemData.Qty = Qty;
    this.quoteService.QuoteItemData.UnitCost = UnitCost;
    this.quoteService.QuoteItemData.Total = Total;
    this.quoteService.QuoteItemData.ItemDescription = ItemDescription;

    const des = 'A Service : ' + this.quoteService.QuoteItemData.ItemName + ', has been added to the Quotation No ' +
      this.quoteService.QuoteData.QuoteId + ' of Customer ' + this.quoteService.QuoteData.CustomerName + ' and Qty ' +
      this.quoteService.QuoteItemData.Qty + ' Amount of : $ ' + this.quoteService.QuoteItemData.Total
      + ' by user ' + this.currentUser.UserName;
    const Activity1 = 'An item : ' + this.quoteService.QuoteItemData.ItemName + 'Amount of : ' + this.quoteService.QuoteItemData.Total +
      ' is added to the Quotation No : ' + this.quoteService.QuoteData.QuoteId;
    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation',
      this.quoteService.QuoteData.Id, 'Added', des, Activity1).subscribe();
      this.quoteService.QuoteItemData.Qty = Number(this.quoteService.QuoteItemData.Qty);
    this.quoteService.QuoteItemData.Total = Number(this.quoteService.QuoteItemData.Total);
    this.quoteService.QuoteItemData.UnitCost = Number(this.quoteService.QuoteItemData.UnitCost);
    this.quoteService.QuoteItemData.WarrantyDays = Number(this.quoteService.QuoteItemData.WarrantyDays);
    if (QItemId === 0) {
      this.quoteService.postQuoteItemDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.Isnavigated = true;
                    this.getQuoteItems();
                    this.ItemUniqueIsValid = true;
                    this.isUnitCostValid = true;
                    this.isQtyValid = true;
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
    } else {
      this.quoteService.putQuoteItemDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.getQuoteItems();
                    const des1 = 'A Service : ' + this.quoteService.QuoteItemData.ItemName + ', has been modified from the Quotation No ' +
                      this.quoteService.QuoteData.QuoteId + ', of Customer : ' + this.quoteService.QuoteData.CustomerName + ', and Qty ' +
                      this.quoteService.QuoteItemData.Qty + ', Amount of : $ ' + this.quoteService.QuoteItemData.Total
                      + ' by user ' + this.currentUser.UserName;
                    const Activity2 = 'An item : ' + this.quoteService.QuoteItemData.ItemName + ' Amount of : '
                      + this.quoteService.QuoteItemData.Total +
                      ' is update to the Quotation No : ' + this.quoteService.QuoteData.QuoteId;
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName,
                      'Quotation', this.quoteService.QuoteData.Id, 'Modify', des1, Activity2).subscribe();
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
      this.ItemBtn = 'Add';
    }
    this.ItemUniqueIsValid = true;
    this.quoteService.QuoteItemData.Id = 0;
    this.quoteService.QuoteItemData.QuoteId = '';
    this.quoteService.QuoteItemData.ItemName = '';
    this.quoteService.QuoteItemData.Qty = null;
    this.quoteService.QuoteItemData.UnitCost = null;
    this.quoteService.QuoteItemData.Total = null;
    this.quoteService.QuoteItemData.ItemDescription = null;
    this.quoteService.QuoteItemData.UniqId = '';
    this.quoteService.QuoteItemData.InWarranty = false;
    this.quoteService.QuoteItemData.WarrantyDays = 0;
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
      this.quoteService.QuoteData.NetAmount = 0;
      this.quoteService.QuoteItemList.forEach(element => {
        this.quoteService.QuoteData.NetAmount += element.Total;
      });
    }, 1000);
  }
  PupulateQuoteProductList(x: QuoteItem) {
    this.quoteService.QuoteItemData = Object.assign({}, x);
    this.ItemBtn = 'Update';
    if (x.InWarranty) { this.tempInWarranty = true; } else { this.tempInWarranty = false; }
    setTimeout(() => {
      this.quoteService.QuoteItemData.Qty = x.Qty;
    }, 800);
  }
  RemoveQuoteItem(id: number) {
    this.quoteService.deleteQuoteItem(this.currentUser.Token, id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.info('info', response.MessageDescription);
                  this.getQuoteItems();
                  this.setlocalcount();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }

  setlocalcount() {
    this.ItemSubTotalByArry = [];
    this.ItemSubTotalByArry = this.quoteService.QuoteItemList.map(element => element.Total);
    if (this.ItemSubTotalByArry.length < 0) {
      this.quoteService.QuoteData.SubTotal = 0;
      this.quoteService.QuoteData.NetAmount = 0;
      this.quoteService.QuoteData.TaxAmount = 0;
      this.quoteService.QuoteData.TaxRate = 0;
      this.quoteService.QuoteData.DiscountAmount = 0;
      this.quoteService.QuoteData.DiscountTextValue = 0;
    } else {
      this.quoteService.QuoteData.SubTotal = this.ItemSubTotalByArry.reduce((a, b) => a + b, 0);

      let EditSubTotalValue = Number(this.ItemSubTotalByArry.reduce((a, b) => a + b, 0));
      let EditTaxRate = Number(this.quoteService.QuoteData.TaxRate);
      let EditTaxAmt = Number(EditSubTotalValue * EditTaxRate) / 100;
      this.quoteService.QuoteData.TaxAmount = EditTaxAmt;
      this.quoteService.QuoteData.SubTotal = EditSubTotalValue;

      if (Number(this.quoteService.QuoteData.DiscountType) === 0) {
        const EditDisTextValue = Number(this.quoteService.QuoteData.DiscountTextValue);
        if (Number(EditSubTotalValue) < EditDisTextValue) {
          this.quoteService.QuoteData.DiscountAmount = 0;
        } else {
          this.quoteService.QuoteData.DiscountAmount = Number(EditDisTextValue);
          this.quoteService.QuoteData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - EditDisTextValue);
        }
      } else if (Number(this.quoteService.QuoteData.DiscountType) === 1) {
        const EditDisTextValue = Number(this.quoteService.QuoteData.DiscountTextValue);
        const z = Number(EditSubTotalValue * EditDisTextValue / 100);
        if (Number(EditSubTotalValue) < z) {
          this.quoteService.QuoteData.DiscountAmount = 0;
        } else {
          this.quoteService.QuoteData.DiscountAmount = Number(z);
          this.quoteService.QuoteData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - z);
        }
      }
    }
  }
  // on deposite type change value
  changeDepositeValue() {
    if (Number(this.quoteService.QuoteData.ReqDepositeType) === 0) {
      const v = this.quoteService.QuoteData.NetAmount;
      const x = this.quoteService.QuoteData.ReqDepositeTextValue;
      if (Number(this.quoteService.QuoteData.NetAmount) < x) {
        this.quoteService.QuoteData.ReqDepositeAmount = 0;
      } else {
        this.quoteService.QuoteData.ReqDepositeAmount = x;
      }
    } else if (Number(this.quoteService.QuoteData.ReqDepositeType) === 1) {
      const v = this.quoteService.QuoteData.NetAmount;
      const x = this.quoteService.QuoteData.ReqDepositeTextValue;
      const z = v * x / 100;
      if (Number(this.quoteService.QuoteData.NetAmount) < z) {
        this.quoteService.QuoteData.ReqDepositeAmount = 0;
      } else {
        this.quoteService.QuoteData.ReqDepositeAmount = z;
      }
    }

  }
  changeDiscountValue() {
    if(this.quoteService.QuoteData.DiscountType == null || this.quoteService.QuoteData.DiscountType == undefined){
      this.quoteService.QuoteData.DiscountType = 0
    }
    if (Number(this.quoteService.QuoteData.DiscountType) === 0) {
      let SubTotalValue = Number(this.quoteService.QuoteData.SubTotal);
      const DisTextValue = Number(this.quoteService.QuoteData.DiscountTextValue);
      if (Number(SubTotalValue) < DisTextValue) {
        this.quoteService.QuoteData.DiscountAmount = 0;

        let TempTaxRate = Number(this.quoteService.QuoteData.TaxRate);
        let tempTaxAmt = Number(SubTotalValue) * TempTaxRate / 100;
        this.quoteService.QuoteData.TaxAmount = tempTaxAmt;
        this.quoteService.QuoteData.NetAmount = Number(SubTotalValue + tempTaxAmt);

      } else {
        this.quoteService.QuoteData.DiscountAmount = Number(DisTextValue);

        let TempTaxRate = Number(this.quoteService.QuoteData.TaxRate);
        let tempTaxAmt = (Number(SubTotalValue) - Number(DisTextValue)) * TempTaxRate / 100;
        this.quoteService.QuoteData.TaxAmount = tempTaxAmt;

        // let TaxAmt = Number(this.quoteService.QuoteData.TaxAmount) ;
        let z = SubTotalValue - DisTextValue + tempTaxAmt;
        this.quoteService.QuoteData.NetAmount = Number(z);
      }
    } else if (Number(this.quoteService.QuoteData.DiscountType) === 1) {
      let SubTotalValue = Number(this.quoteService.QuoteData.SubTotal);
      let DisTextValue = Number(this.quoteService.QuoteData.DiscountTextValue);
      const tempDiscAmount = Number(SubTotalValue * DisTextValue / 100);
      if (Number(SubTotalValue) < tempDiscAmount) {
        this.quoteService.QuoteData.DiscountAmount = 0;

        let TempTaxRate = Number(this.quoteService.QuoteData.TaxRate);
        let tempTaxAmt = Number(SubTotalValue) * Number(TempTaxRate) / 100;
        this.quoteService.QuoteData.TaxAmount = Number(tempTaxAmt);

        this.quoteService.QuoteData.NetAmount = Number(SubTotalValue + tempTaxAmt);
      } else {
        this.quoteService.QuoteData.DiscountAmount = Number(tempDiscAmount);

        let TempTaxRate = Number(this.quoteService.QuoteData.TaxRate);
        let tempTaxAmt = (Number(SubTotalValue) - Number(tempDiscAmount)) * TempTaxRate / 100;

        this.quoteService.QuoteData.TaxAmount = tempTaxAmt;
        let zz = SubTotalValue - tempDiscAmount + tempTaxAmt;
        this.quoteService.QuoteData.NetAmount = Number(zz);
      }
    }
  }
  // remove discount value
  RemoveDiscount() {
    this.quoteService.QuoteData.NetAmount = Number(this.quoteService.QuoteData.NetAmount) +
      Number(this.quoteService.QuoteData.DiscountAmount);
    this.quoteService.QuoteData.DiscountTextValue = 0;
    this.quoteService.QuoteData.DiscountType = 0;
    this.quoteService.QuoteData.DiscountAmount = 0;
  }
  // calculate tax
  CalculateQuoteTax() {
    let SubTotalValue = Number(this.quoteService.QuoteData.SubTotal);
    let DisctAmt = this.quoteService.QuoteData.DiscountAmount;
    let TaxRate = Number(this.quoteService.QuoteData.TaxRate);
    let z = SubTotalValue - DisctAmt;
    let TaxAmt = Number(z * TaxRate) / 100;
    this.quoteService.QuoteData.TaxAmount = TaxAmt;
    this.quoteService.QuoteData.NetAmount = z + TaxAmt;
  }
  picked(event) {
    this.loader = true;
    let t = this.currentUser.Token;
    let type = 'quotationattachment';
    let moduleid = this.quoteService.QuoteData.Id;
    let remark = '';
    let Files = event.target.files;
    let file = Files.item(0);
    this.docservice.uploadDocument(t , type, moduleid, '', remark, file).subscribe( res => {
      if (res) { const response = res as any;
        console.log(response);
                 if (response.Message === 'success') {
                  this.toastr.info('upload successfully');
                  this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
                  this.loader = false;
                  }
                  if (response.Message === 'failure') {
                    this.toastr.warning(response.MessageDescription);
                    this.loader = false;
                  }
    }}, error =>  console.log(error));
    this.loader = false;
  }
  RemoveQuoteAttachement(QuoteAttamentId: string) {
    if (confirm('Are you sure to delete this attachment?')) {
      this.loader = true;
      let t = this.currentUser.Token;
      let type = 'quotationattachment';
      let id = QuoteAttamentId.toString();
      let moduleid = this.quoteService.QuoteData.Id;
      let remark = '';
      this.docservice.RemoveDocument(t , type, moduleid, id, remark).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.toastr.info(response.MessageDescription);
                    this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
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
  onQuotePost(s: number) {
    this.quoteService.QuoteData.Status = s;
    this.quoteService.QuoteData.CreatedBy = this.currentUser.Id;
    if (this.quoteService.QuoteData.CustomerName === undefined ||
      this.quoteService.QuoteData.CustomerName === 'Customer Name?' ||
      this.quoteService.QuoteData.CustomerName === '') {
      this.toastr.warning('warning', 'Select Customer!');
      return false;
    }
    // tslint:disable-next-line:max-line-length
    if (this.quoteService.QuoteData.JobTitle === null || this.quoteService.QuoteData.JobTitle === '' || this.quoteService.QuoteData.JobTitle === undefined) {
      this.toastr.warning('warning', 'Add quote title.');
      this.isQuoteTitleValid = false;
      // tslint:disable-next-line:max-line-length
    } else if (this.quoteService.QuoteItemList.length === 0 || this.quoteService.QuoteItemList === [] || this.quoteService.QuoteItemList === undefined) {
      this.toastr.warning('warning', 'Add product/service to the quotation.');
    } else {
      this.quoteService.QuoteData.DiscountType = Number(this.quoteService.QuoteData.DiscountType);
      this.quoteService.QuoteData.TaxRate = Number(this.quoteService.QuoteData.TaxRate);
      this.loader = true;
      this.quoteService.putQuote(this.currentUser.Token).subscribe(res => {
        if (res) {
          const response = res as any;
          if (response.Message === 'success') {
            if (response.Status === 'insert') {
              this.toastr.success('success', response.MessageDescription);
              const qId = this.quoteService.QuoteData.Id;
              const isCust = this.notifyService.NotificationData.QuoteCustomer;
              const isAdmin = this.notifyService.NotificationData.QuoteAdmin;
              const AdminId = this.currentUser.Id;
              if (isCust === true || isAdmin === true) {
                this.notifyService.quoteEmailNotification(qId, isCust, isAdmin, AdminId)
                  .subscribe(resw => {
                    if (resw) {
                    }
                  }, error => console.log(error));
              }
              this.loader = false;
              // This section is used for email notification
              const des = 'Quotation No : ' + this.quoteService.QuoteData.QuoteId + ', is added by '
                + this.currentUser.UserName + ', for Customer '
                + this.quoteService.QuoteData.CustomerName + 'Quotation title ' +
                this.quoteService.QuoteData.JobTitle + ' Amount of $ ' + this.quoteService.QuoteData.NetAmount + '.00' +
                ', Discount Amount : ' + this.quoteService.QuoteData.DiscountAmount + ', Tax Amount : ' +
                this.quoteService.QuoteData.TaxAmount +
                ', Description : ' + this.quoteService.QuoteData.ClientRemark + ', Internal note : ' +
                this.quoteService.QuoteData.InternalNotes +
                ', on dated : ' + new Date(Date.parse(Date()));
              const Activity5 = 'New Quotation No : ' + this.quoteService.QuoteData.QuoteId + ' is created Amount of :$ '
                + this.quoteService.QuoteData.NetAmount + '0.00';
              this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation',
                this.quoteService.QuoteData.Id, 'Added', des, Activity5).subscribe();
              this.router.navigate(['/quotes/']);
            }
            if (response.Status === 'update') {
              this.toastr.success('success', response.MessageDescription);
              this.notifyService.updateQuoteEmailNotification(
                this.quoteService.QuoteData.Id,
                this.notifyService.NotificationData.QuoteCustomer,
                this.notifyService.NotificationData.QuoteAdmin,
                this.currentUser.Id)
                .subscribe(resu => {
                  if (resu) {
                  }
                }, error => console.log(error));
              const des1 = 'Quotation No : ' + this.quoteService.QuoteData.QuoteId + ', is modified by '
                + this.currentUser.UserName + ', for Customer '
                + this.quoteService.QuoteData.CustomerName + 'Quotation title ' +
                this.quoteService.QuoteData.JobTitle + ' Amount of $ ' + this.quoteService.QuoteData.NetAmount + '.00' +
                ', Discount Amount : ' + this.quoteService.QuoteData.DiscountAmount + ', Tax Amount : ' +
                this.quoteService.QuoteData.TaxAmount +
                ', Description : ' + this.quoteService.QuoteData.ClientRemark + ', Internal note : ' +
                this.quoteService.QuoteData.InternalNotes +
                ', on dated : ' + new Date(Date.parse(Date()));
              const Activity6 = 'Quotation No : ' + this.quoteService.QuoteData.QuoteId + ' is updated Amount of :$ '
                + this.quoteService.QuoteData.NetAmount + '0.00';
              this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation',
                this.quoteService.QuoteData.Id, 'Modify', des1, Activity6).subscribe();
              this.router.navigate(['/quotes/']);
            }
          }
          if (response.Message === 'failure') {
            this.toastr.warning('warning', response.MessageDescription);
            this.loader = false;
          }
        }
      }, error => console.log(error));
    }
  }
  // onSelectQuotesItemType() {
  //   switch (Number(this.quoteService.QuoteItemData.Type)) {
  //     case 1: this.quoteService.QuoteItemData.Type = 1; break;
  //     case 2: this.quoteService.QuoteItemData.Type = 2; break;
  //     default: this.quoteService.QuoteItemData.Type = 0; break;
  //   }
  // }
  ngOnDestroy() {
    this.quoteService.SetAsDefaultValue();
    this.routeSub.unsubscribe();
  }
  CleareProductToQuote() {
    this.quoteService.QuoteItemData.ItemName = '';
    this.quoteService.QuoteItemData.Qty = null;
    this.quoteService.QuoteItemData.ItemDescription = null;
    this.quoteService.QuoteItemData.UnitCost = null;
    this.quoteService.QuoteItemData.Total = null;
    this.quoteService.QuoteItemData.InWarranty = false;
    this.quoteService.QuoteItemData.WarrantyDays = 365;
    this.quoteService.QuoteItemData.UniqId = '';
  }

  onQuoteNosChange() {
    if (this.QuoteNosChange) {
      this.QuoteNosChange = false;
      this.QuoteNosChangeBtn = 'Change';
      if (this.locateQuoteUniqueID === this.quoteService.QuoteData.QuoteUniqueID) {
      } else {
        this.ValidateQuoteNo();
      }
    } else {
      this.QuoteNosChange = true;
      this.QuoteNosChangeBtn = 'Save';
    }
  }
  ValidateQuoteNo() {
    this.quoteService.ValidateQuoteNo(this.quoteService.QuoteData.QuoteUniqueID).subscribe(
      res => {
        switch (res.status) {
          case 201:
            this.newUniqueID = res.body;
            this.quoteService.QuoteData.QuoteId = this.genicProfile.formData.QuotePrefix + this.newUniqueID;
            this.toastr.success('success', 'Quotation number available.');
            break;
          case 202:
            this.toastr.warning('warning', 'Quotation number already taken, choose another.');
            break;
          default: this.toastr.error('error', res.statusText); break;
        }
      }, err => { console.log(err); });
  }
  numberOnly(event): boolean {
    if (event.target.value === 0 || event.target.value === '') {
      this.isQtyValid = false;
    } else {
      this.isQtyValid = true;
    }
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

  OpenAddClienDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(QuoteCustomerPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res !== '') {
        this.customerData = new Customer();
        this.customerData = res.x;
        this.quoteService.PropertyList = [];
        this.quoteService.getCustomerProperty(res.x.Id);
        this.OpenAddCustomerPropertyQuoteDialog();
        setTimeout(() => {
          this.quoteService.refrestArrayofKeyslist(res.x.Id);
        }, 200);

      }
    });
  }


  OpenAddCustomerPropertyQuoteDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {};
    this.dialog.open(QuotecustomerPropertyPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      if (res !== '') {
        if (res === undefined) {
          this.router.navigate(['/properties/property-add/'], {
            queryParams:
              { ' id': this.quoteService.QuoteData.CustomerId, ' name': this.quoteService.QuoteData.CustomerName }
          });
        } else {
          this.customerPropertyData = new Property();
          this.customerPropertyData = res.x;
          this.quoteService.QuoteData.CompanyName = this.customerData.CompanyName;
          this.quoteService.QuoteData.CustomerName = this.customerPropertyData.CustomerName;
          this.quoteService.QuoteData.CustomerId = this.customerPropertyData.CustomerId;
          this.quoteService.QuoteData.PropertyId = this.customerPropertyData.Id;
          this.quoteService.QuoteData.CustomerAddress = res.x.AddressStreet1 + ' ' + res.x.AddressStreet2 + ' ' + res.x.AddressUnitNo + ' ' + res.x.AddressCountry + ' ' + res.x.AddressZipCode;
        }
      }
    });
  }
  public customwarrantyShowMethor() {
    if (this.quoteService.QuoteItemData.WarrantyDays === undefined) {
      this.customwarrantyShow = false;
    } else {
      switch (this.quoteService.QuoteItemData.WarrantyDays.toString()) {
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

