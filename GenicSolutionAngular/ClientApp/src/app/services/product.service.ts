import { Injectable } from '@angular/core';
import { Product, ItemofList, ProductMovement, Brand, Category, Service } from './product.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  formData: Product;
  Productlist: Product[];
  serviceformData: Service;
  serviceformList: Service[];
  ProductLocalList: Product[];
  ItemofList: ItemofList;
  ItemofLists: ItemofList[];
  ProductMovementData: ProductMovement;
  ProductMovementList: ProductMovement[];
  locatProductMovmentList: ProductMovement[];
  BrandformData: Brand;
  BrandList: Brand[];
  CategoryformData: Category;
  CategoryList: Category[];
  constructor(private http: HttpClient) {
   this.SetAsDefaultValue();
   this.setDefaultProductMovement();
   this.setDefaultProductBatch();
   this.ProductMovementList = [];
   this.locatProductMovmentList = [];
   this.Productlist = [];
   this.ItemofLists = [];
   }

   SetAsDefaultValue() {
    this.formData = {
      Id: '00000000-0000-0000-0000-000000000000',
      ProductLogo: '',
      ProductId: '' ,
      ProductName: '',
      ProductBrand: '',
      ProductCategory: '',
      PurchasePrice: 0,
      SalePrice: 0,
      Quantity: 0,
      LowStockTriggerQuantity: 0,
      Description: '',
      RuleType: 'LEFO',
      Status: true,
      InWarranty: true,
      WarrantyDays: 365,
      ItemofLists: [],
      ProductMovementList: []
    };
   }
   setDefaultProductBatch() {
    this.ItemofList = {
      Id: 0,
      ProductId: '00000000-0000-0000-0000-000000000000',
      BatchNo: '' ,
      AvailableQuantity: 0,
      ManufacturingDate: null,
      ExpiryDate: null,
      UsedQty: 0,
      TotalQty: 0,
      HoldQty: 0,
      ProductUnit: 'PCS',
      tempQty: 0,
      Remarks: '',
    };
   }
   setDefaultProductMovement() {
     this.ProductMovementData = {
      Id: 0,
      ProductId: '',
      ProductCode: '',
      ProductName: '',
      TicketId: '',
      QuoteId: '',
      InvoiceId: '',
      JobDate: new Date(),
      CustomerName: '',
      CustomerAddress: '',
      UsedQty: 0,
      QtyAvailable: 0,
      QtyHold: 0,
      QtyTotal: 0,
      MovementDate: new Date(),
     };
   }
   postProductDetails(t: string) {
      return this.http.post(environment.apiUrl + '/api/Products/PostProduct/' + t, this.formData).pipe(map(Response => Response));
  }
  putProductDetails(t: string) {
      return this.http.put(environment.apiUrl + '/api/Products/PutProduct/' + t, this.formData).pipe(map(Response => Response));
  }
  getAllProductList(token: string) {
    return this.http.get(environment.apiUrl + '/api/Products/GetAllProduct/' + token).pipe(map(Response => Response));
  }
  refrestProductsList(token: string) {
    return this.http.get(environment.apiUrl + '/api/Products/GetProducts/' + token).pipe(map(Response => Response));
  }
  getProductById(token: string, PId: string) {
    return this.http.get(environment.apiUrl + '/api/Products/GetProductById/' + token + '/' + PId).pipe(map(Response => Response));
  }
  refrestProductlistSync(token: string) {
    return this.http.get(environment.apiUrl + '/api/Products/GetProductListForWarranty/' + token).pipe(map( Response => Response));
  }


  onProductStatusChange(token, PId) {
    return this.http.put(environment.apiUrl + '/api/Products/onProductStatusChange/' + token + '/' + PId, null).pipe(map(Response => {return Response;}));
  }

  //#region service
  postServiceDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Products/PostService/' + token, this.serviceformData).pipe(map(Response => { return Response;}));
  }
  putServiceDetails(token: string) {
      return this.http.put(environment.apiUrl + '/api/Products/PutService/' + token, this.serviceformData).pipe(map(Response => { return Response;}));
  }
  refrestServicesList(token: string) {
    return this.http.get(environment.apiUrl + '/api/Products/GetService/' + token).pipe(map(Response => { return Response;}));
  }
  onServiceStatusChange(token: string, ServiceId: string) {
    return this.http.put(environment.apiUrl + '/api/Products/onServiceStatusChange/' + token + '/' + ServiceId, null).pipe(map(Response => {return Response;}));
  }
  GetRandamUniqueId(token: string) {
    return this.http.get(environment.apiUrl + '/api/Products/GetWarrantyUniqueKey/' + token).pipe(map(Response => {return Response;}));
  }
  //#endregion


  /// *******************************************************************************/
  // Brands methods (api) Begin
  postBrandDetails(token: string) {
      return this.http.post(environment.apiUrl + '/api/Products/PostBrand/' + token, this.BrandformData).pipe(map(Response => {return Response;}));
  }
  putBrandDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Products/PutBrand/' + token, this.BrandformData).pipe(map(Response => {return Response;}));
  }
  refrestBrand(token: string) {
    return this.http.get(environment.apiUrl + '/api/Products/GetBrand/' + token).pipe(map(Response => {return Response;}));
  }
  // Brands methods (api) End
  /// *******************************************************************************/


    /// *******************************************************************************/
  // Category methods (api) Begin
  postCategoryDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Products/PostCategory/' + token, this.CategoryformData).pipe(map(Response => {return Response;}));
  }
  putCategoryDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Products/PutCategory/' + token, this.CategoryformData).pipe(map(Response => {return Response;}));
  }
  refrestCategory(token: string) {
    return this.http.get(environment.apiUrl + '/api/Products/GetCategory/' + token).pipe(map(Response => {return Response;}));
  }
  // Category methods (api) End
  /// *******************************************************************************/
}
