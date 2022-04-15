import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as _moment from 'moment';
import { environment } from 'src/environments/environment';
import { AuthenticationService, Login } from 'src/app/services';
import { Brand, Category } from 'src/app/services/product.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  createbuttontext: string;
  IsItemAdd = true;
  ItemBtn = 'Add';
  filename: string;
  progress: number;
  IsProductNameValid = true;
  IsProductIdValid = true;
  IsProductBrandValid = true;
  IsProductCategoryValid = true;
  IsProductPurchasePriceValid = true;
  IsProductSalePriseValid = true;
  IsProductQuentityValid = true;
  IsProductLowStockQuentityValid = true;
  IsValid = true;
  BatchNoIsValid = true;
  QuantityIsValid = true;
  ManufacturingDateIsValid = true;
  ExpiryDateIsValid = true;
  localPrependUrl: string;
  productLogoFile: any;
  isUrlPart: boolean;
  tempLoopQty: number;
  tempExpiryDate?: Date;
  currentUser: Login;
  currentUTCDate = new Date();
  ManufacminDate = new Date(1990, 0, 1);
  ManufacmaxDate = new Date(Date.UTC(this.currentUTCDate.getFullYear(),
    this.currentUTCDate.getMonth(),
    this.currentUTCDate.getDate(), 0, 0, 0));

  ExpiryminDate = new Date(Date.UTC(this.currentUTCDate.getFullYear(),
    this.currentUTCDate.getMonth(),
    this.currentUTCDate.getDate(), 0, 0, 0));
  ExpirymaxDate = new Date(Date.UTC(this.currentUTCDate.getFullYear() + 20,
    this.currentUTCDate.getMonth(),
    this.currentUTCDate.getDate(), 0, 0, 0));
  customwarrantyShow: boolean;
  customwarrantyShowEdit: boolean;
  constructor(
    public titleService: Title,
    public service: ProductService,
    private router: Router,
    private toastr: ToastrService, public loginservice: AuthenticationService) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.tempLoopQty = 0;
    this.tempExpiryDate = null;
    this.customwarrantyShowEdit = false;
    this.service.SetAsDefaultValue();
  }

  ngOnInit() {
    if (this.router.url === '/products/product-add') {
      if (!this.currentUser.Permissions.ProductCreate) { this.router.navigate(['/dashboard']); }
      this.titleService.setTitle(this.currentUser.Product + ' Create | Genic Solution');
      this.whenAddProduct();
      if(!this.currentUser.Permissions.ProductWarranty){
        this.service.formData.InWarranty = false;
        this.service.formData.WarrantyDays = 0;
      } else { this.service.formData.InWarranty = true; }
    }
    const Id = window.location.pathname.split('/').pop();
    if (Id !== 'product-add') {
      if (!this.currentUser.Permissions.ProductEdit) { this.router.navigate(['/dashboard']); }
      this.titleService.setTitle(this.currentUser.Product + ' Edit | Genic Solution');
      this.service.refrestBrand(this.currentUser.Token).subscribe(res => {
        if (res) {
          const response = res as any;
          this.service.BrandList = response.result as Brand[];
          this.service.refrestCategory(this.currentUser.Token).subscribe(res => {
            if (res) {
              const response2 = res as any;
              this.service.CategoryList = response2.result as Category[];
              this.service.getProductById(this.currentUser.Token, Id).subscribe(res => {
                if (res) {
                  const response3 = res as any;
                  if (response3.Message === 'success') {
                    this.service.formData = response3.result;
                    this.customwarrantyShowMethor();
                    this.createbuttontext = 'Update';
                    this.isUrlPart = true;
                  }
                }
              }, error => console.log(error));
            }
          }, error => console.log(error));
        }
      }, error => console.log(error));
    }
  }
  whenAddProduct() {
    this.service.refrestBrand(this.currentUser.Token).subscribe(res => {
      if (res) {
        const response = res as any;
        this.service.BrandList = response.result as Brand[];
        this.service.refrestCategory(this.currentUser.Token).subscribe(res => {
          if (res) {
            const response = res as any;
            this.service.CategoryList = response.result as Category[];
            this.customwarrantyShowMethor();
            this.createbuttontext = 'Create';
            this.isUrlPart = true;
            const count = this.service.Productlist.length + 1;
            this.service.formData.ProductId =  this.currentUser.Product.toUpperCase().slice(0, 3) + count;
            this.service.ItemofList.BatchNo = this.currentUser.Product.toUpperCase().slice(0, 3) + count;
            this.service.formData.WarrantyDays = 30;
            if (this.currentUser.Permissions.IsProductOnly) {
              this.service.formData.PurchasePrice = 0;
              this.service.formData.SalePrice = 0;
              this.service.formData.Quantity = 1;
              this.service.formData.LowStockTriggerQuantity = 0;
            }
          }
        }, error => console.log(error));
      }
    }, error => console.log(error));
  }

  /// Convert base64strin image Begin
  _handleReaderLoaded(e) {
    let reader = e.target;
    let Base64String = reader.result.substr(reader.result);
    this.service.formData.ProductLogo = Base64String.split(',')[1];
  }
  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  picked(event) {
    this.isUrlPart = false;
    let fileList: FileList = event.target.files;
    const file: File = fileList[0];
    this.productLogoFile = file;
    this.handleInputChange(file);
  }
 
  public customwarrantyShowMethor() {
    if (this.service.formData.WarrantyDays === undefined) {
      this.customwarrantyShow = false;
    } else {
      switch (this.service.formData.WarrantyDays.toString()) {
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
  public onSubmit() {
    this.IsProductNameValid = true;
    this.IsProductIdValid = true;
    this.IsProductBrandValid = true;
    this.IsProductCategoryValid = true;
    this.IsProductPurchasePriceValid = true;
    this.IsProductSalePriseValid = true;
    this.IsProductQuentityValid = true;
    this.IsProductLowStockQuentityValid = true;
    if (this.service.formData.ProductName === '') {
      this.toastr.warning('warning', 'Please enter ' + this.currentUser.Product.toLowerCase() + ' name');
      this.IsProductNameValid = false;
      this.IsValid = false;
      return false;
    }
    if (this.service.formData.ProductId === '') {
      this.toastr.warning('warning', 'Please enter ' + this.currentUser.Product.toLowerCase() + ' id');
      this.IsProductIdValid = false;
      this.IsValid = false;
      return false;
    }
    if (this.service.formData.LowStockTriggerQuantity > this.service.formData.Quantity) {
      this.toastr.warning('warning', 'Low stock trigger quantity is always less then or equal to total quantity');
      this.IsProductLowStockQuentityValid = false;
      this.IsValid = false;
      return false;
    }
    if (this.productLogoFile !== undefined) {
      if (this.productLogoFile.size >= 2000000) {
        this.toastr.info('size too large', 'Maximum logo size is 2MB');
        return false;
      }
    }
    if (this.productLogoFile === undefined) {
      this.service.formData.ProductLogo = '';
    }
    if (this.service.formData.Quantity < this.service.formData.LowStockTriggerQuantity) {
      this.toastr.warning('warning', 'Low quantity is lessthen to total quantity');
      return false;
    }

    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.insertrecord();
    } else {
      this.updaterecord();
    }
  }

  private insertrecord() {
    this.service.formData.WarrantyDays = Number(this.service.formData.WarrantyDays);
    this.service.postProductDetails(this.currentUser.Token).subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          this.toastr.success('success', response.MessageDescription);
          this.service.SetAsDefaultValue();
          this.router.navigate(['/products/']);
        }
        if (response.Message === 'failure') {
          this.toastr.warning('warning', response.MessageDescription);
        }
      }
    }, error => console.log(error));
  }

  private updaterecord() {
    this.service.formData.WarrantyDays = Number(this.service.formData.WarrantyDays);
    this.service.putProductDetails(this.currentUser.Token).subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          this.toastr.success('success', response.MessageDescription);
          this.service.SetAsDefaultValue();
          this.router.navigate(['/products/']);
        }
        if (response.Message === 'failure') {
          this.toastr.warning('warning', response.MessageDescription);
        }
      }
    }, error => console.log(error));
  }
  public RemoveItemList(i: number) {
    return this.service.formData.ItemofLists.splice(i, 1);
  }
  numberOnly(event): boolean {
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
