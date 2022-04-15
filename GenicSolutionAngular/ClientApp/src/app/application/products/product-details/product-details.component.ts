import { Component, OnInit, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService, Login } from 'src/app/services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  localPrependUrl: string;
  dropdownbtnavgrev: string;
  IsValid = true;
  BatchNoIsValid = true;
  QuantityIsValid = true;
  ManufacturingDateIsValid = true;
  ExpiryDateIsValid = true;
  tempLoopQty: number;
  tempExpiryDate?: Date;
  tempUsableQty: number;
  tempManfacDateTochange?: Date;
  tempExpDateTochange?: Date;
  tempIndexToChangeDate?: number;
  StockQtyUpdate:boolean = false;
  LowStockQtyUpdate:boolean = false;
  WarrantyUpdate:boolean = false;
  customwarrantyShow: boolean = false;
  currentUser: Login;
  date: {year: number, month: number};
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
  @ViewChild('BatchItemManfacDateModalContent', { static: true }) BatchItemManfacDateModalContent: TemplateRef<any>;
  constructor(
    public titleService: Title,
    public service: ProductService,
    private router: Router,
    private toastr: ToastrService,
    public loginservice: AuthenticationService) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
      this.service.locatProductMovmentList = [];
      this.tempLoopQty = 0;
      this.tempExpiryDate = null;
      this.tempUsableQty = 0;
      this.tempManfacDateTochange = null;
      this.tempExpDateTochange = null;
      this.tempIndexToChangeDate = null;
    }

  ngOnInit() {
    const Id = window.location.pathname.split('/').pop();
    if (!this.currentUser.Permissions.ProductView) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle(this.currentUser.Product + ' details | Genic Solution');
      this.service.getProductById(this.currentUser.Token, Id).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.service.formData = response.result;
                    }
      }}, error =>  console.log(error));
    setTimeout(() => {
      this.customwarrantyShowMethor();
    }, 1000);
  }
  exportAsXLSX() {}
  OpenAddProduct() {
    this.service.SetAsDefaultValue();
    this.router.navigate(['/products/product-add/']);
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

enableStockUpdate() {
  this.StockQtyUpdate = true;
}
enableLowStockUpdate() {
  this.LowStockQtyUpdate = true;
}
enableWarrantyUpdate() {
  this.WarrantyUpdate = true;
}

updateStockQty() {
  this.StockQtyUpdate = false;
}
updateLowStock() {
  this.LowStockQtyUpdate = false;
}
updateWarranty() {
  this.WarrantyUpdate = false;
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
SaveStockQty() {
  this.service.formData.ProductLogo = '';
  this.service.formData.WarrantyDays = Number(this.service.formData.WarrantyDays);
  this.service.putProductDetails(this.currentUser.Token).subscribe( res => {
    if (res) { const response = res as any;
               if (response.Message === 'success') {
                this.toastr.success('success', response.MessageDescription);
                this.service.SetAsDefaultValue();
                this.router.navigate(['/products/']);
                }
               if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                }
  }}, error =>  console.log(error));
}
}
