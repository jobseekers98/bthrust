(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-service-service-module"],{

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ProductService {
    constructor(http) {
        this.http = http;
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
            ProductId: '',
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
            BatchNo: '',
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
    postProductDetails(t) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostProduct/' + t, this.formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    putProductDetails(t) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutProduct/' + t, this.formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    getAllProductList(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetAllProduct/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestProductsList(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProducts/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    getProductById(token, PId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProductById/' + token + '/' + PId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestProductlistSync(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProductListForWarranty/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    onProductStatusChange(token, PId) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/onProductStatusChange/' + token + '/' + PId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    //#region service
    postServiceDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostService/' + token, this.serviceformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    putServiceDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutService/' + token, this.serviceformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    refrestServicesList(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetService/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    onServiceStatusChange(token, ServiceId) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/onServiceStatusChange/' + token + '/' + ServiceId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    GetRandamUniqueId(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetWarrantyUniqueKey/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    //#endregion
    /// *******************************************************************************/
    // Brands methods (api) Begin
    postBrandDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostBrand/' + token, this.BrandformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    putBrandDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutBrand/' + token, this.BrandformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    refrestBrand(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetBrand/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    // Brands methods (api) End
    /// *******************************************************************************/
    /// *******************************************************************************/
    // Category methods (api) Begin
    postCategoryDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostCategory/' + token, this.CategoryformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    putCategoryDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutCategory/' + token, this.CategoryformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    refrestCategory(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetCategory/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "YD9O":
/*!****************************************************************************!*\
  !*** ./src/app/application/service/service-list/service-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ServiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceListComponent", function() { return ServiceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _service_add_service_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-add/service-add.component */ "q65n");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/downloads.service */ "iHRC");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





















function ServiceListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceListComponent_div_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.OpenAddServiceDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceListComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceListComponent_table_40_tr_14_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" With ", x_r9.WarrantyDays, " Days Warranty ");
} }
function ServiceListComponent_table_40_tr_14_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServiceListComponent_table_40_tr_14_div_6_div_1_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r9.InWarranty);
} }
function ServiceListComponent_table_40_tr_14_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r9.ServiceDescription);
} }
function ServiceListComponent_table_40_tr_14_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const x_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r9.ServiceDescription.substring(0, 50), "...");
} }
function ServiceListComponent_table_40_tr_14_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceListComponent_table_40_tr_14_li_22_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const x_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.pupulateservice(x_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "InactiveBackColor": a0 }; };
function ServiceListComponent_table_40_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ServiceListComponent_table_40_tr_14_div_6_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServiceListComponent_table_40_tr_14_div_8_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ServiceListComponent_table_40_tr_14_ng_template_9_Template, 1, 1, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServiceListComponent_table_40_tr_14_Template_input_change_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const x_r9 = ctx.$implicit; const i_r10 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.onServiceStatusChange($event, x_r9.Id, i_r10); })("ngModelChange", function ServiceListComponent_table_40_tr_14_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const x_r9 = ctx.$implicit; return x_r9.IsActive = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ServiceListComponent_table_40_tr_14_li_22_Template, 3, 0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, x_r9.IsActive === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r9.ServiceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r9.ServiceName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.currentUser.Permissions.ProductWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r9.ServiceDescription.length < 50)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "example_pm", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r9.IsActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "example_pm", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.currentUser.Permissions.ServiceEdit);
} }
function ServiceListComponent_table_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Service\u00A0Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Service Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Service Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ServiceListComponent_table_40_tr_14_Template, 23, 12, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r2.dtOptions)("dtTrigger", ctx_r2.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.productservice.serviceformList);
} }
function ServiceListComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const s_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r28, " ");
} }
function ServiceListComponent_ng_container_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const e_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r29, " ");
} }
class ServiceListComponent {
    constructor(productservice, dialog, router, titleService, toastr, logService, loginservice, customerService, downloadservice, genicprofileservice) {
        this.productservice = productservice;
        this.dialog = dialog;
        this.router = router;
        this.titleService = titleService;
        this.toastr = toastr;
        this.logService = logService;
        this.loginservice = loginservice;
        this.customerService = customerService;
        this.downloadservice = downloadservice;
        this.genicprofileservice = genicprofileservice;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ErrorRes = [];
        this.SuccessRes = [];
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.genicprofileservice.TicketFilter.IsReady = false;
        this.genicprofileservice.TicketFilter.IsReadyQuote = false;
        this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
        this.excelDataTemplatePath = this.localPrependUrl + '/assets/ExcelDataTemplate/ServiceDatabaseSheet.xlsx';
        this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [10, 25, 50, 75, 100] };
    }
    ngOnInit() {
        if (!this.currentUser.Permissions.ServiceView) {
            this.router.navigate(['/dashboard']);
        }
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
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = false;
        dialogConfig.width = '50%';
        dialogConfig.data = {};
        this.dialog.open(_service_add_service_add_component__WEBPACK_IMPORTED_MODULE_6__["ServiceAddComponent"], dialogConfig).afterClosed().subscribe(res => {
            this.load();
        });
    }
    load() {
        if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            }).catch(err => console.error(err));
        }
        this.productservice.refrestServicesList(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.productservice.serviceformList = response.result;
                    this.dtTrigger.next();
                }
            }
        }, error => console.log(error));
    }
    pupulateservice(x) {
        this.productservice.serviceformData = Object.assign({}, x);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = false;
        dialogConfig.width = '50%';
        dialogConfig.data = {};
        this.dialog.open(_service_add_service_add_component__WEBPACK_IMPORTED_MODULE_6__["ServiceAddComponent"], dialogConfig).afterClosed().subscribe(res => {
            this.load();
        });
    }
    deleteservice(Id, ServiceName) {
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
    exportAsXLSX() {
        this.downloadservice.downloadFromServer('service', this.currentUser.Token).then(blob => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, 'service_' + new Date().getTime() + '.xlsx');
        });
    }
    // Bulk Service upload
    BuldServiceUpload(file) {
        let ExcelfileToUpload = file.item(0);
        let filExt = ExcelfileToUpload.name.split('.');
        let Ext1 = filExt[1];
        if (Ext1 === 'xls' || Ext1 === 'xlsx') {
            var reader = new FileReader();
            reader.onload = (event) => {
                const ExcelLocalURL = event.target.result;
                this.customerService.SetAsDefaultValues();
                this.customerService.formData.Latitude = Ext1;
                this.customerService.formData.CustomerLogo = ExcelLocalURL.split(',')[1];
                this.customerService.ServiceBulkUpload(this.currentUser.Id)
                    .subscribe(res => {
                    if (res) {
                        let TResponse = new Object();
                        TResponse = res;
                        this.ErrorRes = TResponse.ErrorResponse;
                        this.SuccessRes = TResponse.SuccessResponse;
                        const element = document.getElementById('openServicePop');
                        element.click();
                        this.load();
                    }
                }, error => console.log(error));
            };
            reader.readAsDataURL(ExcelfileToUpload);
        }
        else {
            this.toastr.warning('', 'Invalid file format, select excel sheet!');
            return false;
        }
    }
    onServiceStatusChange(e, id, index) {
        this.productservice.onServiceStatusChange(this.currentUser.Token, id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                    this.productservice.serviceformList[index].IsActive = e.target.checked;
                    this.load();
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
}
ServiceListComponent.ɵfac = function ServiceListComponent_Factory(t) { return new (t || ServiceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_11__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_13__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_14__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_15__["GenicProfileService"])); };
ServiceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceListComponent, selectors: [["app-service"]], viewQuery: function ServiceListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 81, vars: 6, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], ["class", "kt-subheader__wrapper", 4, "ngIf"], [1, "kt-subheader__wrapper"], ["on", "", "id", "openServicePop", "data-toggle", "modal", "data-target", "#BuidUploadPop", 1, "btn", "btn-brand", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-file"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__stats"], [1, "kt-section", "kt-drop-section"], [1, "kt-section__content"], [1, "row"], [1, "col-md-12", "no-spacing"], [1, ""], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "dropdown", "bootm-filter"], [1, "kt-header__topbar-wrapper"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "btnexport"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "panel-body"], ["class", " col-md-12 alert alert-info", 4, "ngIf"], ["datatable", "", "class", "table table-striped- table-bordered table-hover table-checkable", 3, "dtOptions", "dtTrigger", 4, "ngIf"], ["id", "BuidUploadPop", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "myManFaContent"], [1, "modal-header", 2, "background-color", "aqua"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body", "my-Model-body"], [1, "ExcelUpladRule"], [1, "col-md-6", "llf"], [1, "uploaddd"], ["on", "", "target", "_blank", 1, "btn", "btn-brand", "text-white", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "col-md-6", "rrd"], ["on", "", "data-toggle", "modal", "data-target", "#BuidUploadPop", 1, "btn", "btn-brand", "text-white", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], ["BulkUpload", ""], [1, "SuccessSection"], [4, "ngFor", "ngForOf"], [1, "errorSection"], ["href", "javascript:;", 1, "btn", "btn-brand", 3, "click"], [1, "fa", "fa-plus"], [1, "col-md-12", "alert", "alert-info"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], ["class", "customer-list-view-info", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "customer-list-view-info", 3, "ngClass"], [1, "btn", "btn-label-primary"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["descriptioncontent", ""], [1, "custom-switch", "custom-switch-label-yesno", "pl-0"], ["name", "x.IsActive", "type", "checkbox", 1, "custom-switch-input", "ng-valid", "ng-dirty", "ng-touched", 3, "id", "ngModel", "change", "ngModelChange"], ["x.IsActive", "ngModel"], [1, "custom-switch-btn", 3, "for"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "border", "#1dc9b7"], [1, "caret"], [1, "dropdown-menu"], ["href", "javascript:;", 3, "click"], ["role", "alert", 1, "alert-alert-success"], ["role", "alert", 1, "alert-alert-danger"]], template: function ServiceListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ServiceListComponent_div_13_Template, 4, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Bulk Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Service List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceListComponent_Template_a_click_36_listener() { return ctx.exportAsXLSX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Export to Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ServiceListComponent_div_39_Template, 2, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ServiceListComponent_table_40_Template, 15, 3, "table", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Service Bulk Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Service upload rules as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1.) All * fields are mendatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2.) Do not remove first row header of template file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "3.) Do not change header name.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Download sample data template...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Sample Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Select Excel sheet and upload...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceListComponent_Template_a_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Bulk Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServiceListComponent_Template_input_change_74_listener($event) { return ctx.BuldServiceUpload($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ServiceListComponent_ng_container_78_Template, 3, 1, "ng-container", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ServiceListComponent_ng_container_80_Template, 3, 1, "ng-container", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.ServiceCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productservice.serviceformList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productservice.serviceformList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.excelDataTemplatePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SuccessRes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ErrorRes);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"]], styles: [".main-head[_ngcontent-%COMP%]{background-color:#C3E7FA;padding:10px;}\r\n.main-head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:black !important;font-size:20px !important;}\r\n.form-row[_ngcontent-%COMP%]{padding:10px;background-color:#F1F1F1;margin:0 0 15px !important;}\r\n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:black !important;font-size:14px !important;font-weight:600 !important;}\r\n.input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{background-color:#FA5F2B;}\r\n.input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.form-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#0080c7;border-color:transparent !important;}\r\n.btn.btn-outline-dark[_ngcontent-%COMP%]{background-color:#ECECF5 !important;border-color:transparent !important;}\r\n.btn.btn-outline-dark[_ngcontent-%COMP%]:hover{color: #595d6e;border-color: #e2e5ec !important;background-color: #f4f5f8 !important;}\r\n.btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\n.switcher-customer[_ngcontent-%COMP%] { top:-15px;position: relative; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyx3QkFBd0IsQ0FBQyxZQUFZLENBQUM7QUFDakQsY0FBYyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUMvRCxVQUFVLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEIsQ0FBQztBQUMzRSxnQkFBZ0Isc0JBQXNCLENBQUMseUJBQXlCLENBQUMsMEJBQTBCLENBQUM7QUFDNUYsdUNBQXVDLHdCQUF3QixDQUFDO0FBQ2hFLHlDQUF5QyxXQUFXLENBQUM7QUFDckQsNkJBQTZCLHdCQUF3QixDQUFDLG1DQUFtQyxDQUFDO0FBQzFGLHNCQUFzQixtQ0FBbUMsQ0FBQyxtQ0FBbUMsQ0FBQztBQUM5Riw0QkFBNEIsY0FBYyxDQUFDLGdDQUFnQyxDQUFDLG9DQUFvQyxDQUFDO0FBQ2pILFdBQVcsd0JBQXdCLENBQUMscUJBQXFCLENBQUM7QUFDMUQscUJBQXFCLG1CQUFtQixDQUFDO0FBQ3pDLHFCQUFxQixTQUFTLENBQUMsa0JBQWtCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWhlYWR7YmFja2dyb3VuZC1jb2xvcjojQzNFN0ZBO3BhZGRpbmc6MTBweDt9XHJcbi5tYWluLWhlYWQgaDR7Y29sb3I6YmxhY2sgIWltcG9ydGFudDtmb250LXNpemU6MjBweCAhaW1wb3J0YW50O31cclxuLmZvcm0tcm93e3BhZGRpbmc6MTBweDtiYWNrZ3JvdW5kLWNvbG9yOiNGMUYxRjE7bWFyZ2luOjAgMCAxNXB4ICFpbXBvcnRhbnQ7fVxyXG4uZm9ybS1yb3cgbGFiZWx7Y29sb3I6YmxhY2sgIWltcG9ydGFudDtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjYwMCAhaW1wb3J0YW50O31cclxuLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHR7YmFja2dyb3VuZC1jb2xvcjojRkE1RjJCO31cclxuLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQgaXtjb2xvcjp3aGl0ZTt9XHJcbi5mb3JtLWdyb3VwIC5idG4uYnRuLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDA4MGM3O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O31cclxuLmJ0bi5idG4tb3V0bGluZS1kYXJre2JhY2tncm91bmQtY29sb3I6I0VDRUNGNSAhaW1wb3J0YW50O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O31cclxuLmJ0bi5idG4tb3V0bGluZS1kYXJrOmhvdmVye2NvbG9yOiAjNTk1ZDZlO2JvcmRlci1jb2xvcjogI2UyZTVlYyAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6ICNmNGY1ZjggIWltcG9ydGFudDt9XHJcbi5idG4tYnJhbmR7YmFja2dyb3VuZC1jb2xvcjojZmY4NTMzO2JvcmRlci1jb2xvcjogI2ZmODUzMzt9XHJcbi5kcm9wZG93bi1tZW51LnNob3cge21hcmdpbi1sZWZ0OiAtMTA1cHg7fVxyXG4uc3dpdGNoZXItY3VzdG9tZXIgeyB0b3A6LTE1cHg7cG9zaXRpb246IHJlbGF0aXZlOyB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service',
                templateUrl: './service-list.component.html',
                styleUrls: ['../service.component.css']
            }]
    }], function () { return [{ type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_11__["UserlogService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }, { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_13__["CustomerService"] }, { type: src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_14__["DownloadService"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_15__["GenicProfileService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "q65n":
/*!**************************************************************************!*\
  !*** ./src/app/application/service/service-add/service-add.component.ts ***!
  \**************************************************************************/
/*! exports provided: ServiceAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAddComponent", function() { return ServiceAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ServiceAddComponent_div_26_tr_12_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceAddComponent_div_26_tr_12_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hide terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceAddComponent_div_26_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Warrant terms:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceAddComponent_div_26_tr_12_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.enablewarrantchange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServiceAddComponent_div_26_tr_12_span_7_Template, 3, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServiceAddComponent_div_26_tr_12_span_8_Template, 3, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.productservice.serviceformData.WarrantyDays, " Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.customwarrantyShowEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.customwarrantyShowEdit);
} }
function ServiceAddComponent_div_26_tr_13_label_24_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 47, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServiceAddComponent_div_26_tr_13_label_24_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.customwarrantyShowMethor(); })("ngModelChange", function ServiceAddComponent_div_26_tr_13_label_24_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.productservice.serviceformData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Custom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.productservice.serviceformData.WarrantyDays);
} }
function ServiceAddComponent_div_26_tr_13_label_25_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServiceAddComponent_div_26_tr_13_label_25_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.customwarrantyShowMethor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Custom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceAddComponent_div_26_tr_13_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 50, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ServiceAddComponent_div_26_tr_13_div_28_Template_input_keyup_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.customwarrantyShowMethor(); })("keydown", function ServiceAddComponent_div_26_tr_13_div_28_Template_input_keydown_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r29.customwarrantyShowMethor(); })("ngModelChange", function ServiceAddComponent_div_26_tr_13_div_28_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.productservice.serviceformData.WarrantyDays = $event; })("keypress", function ServiceAddComponent_div_26_tr_13_div_28_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r31.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.productservice.serviceformData.WarrantyDays);
} }
function ServiceAddComponent_div_26_tr_13_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (in number of days) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceAddComponent_div_26_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServiceAddComponent_div_26_tr_13_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.customwarrantyShowMethor(); })("ngModelChange", function ServiceAddComponent_div_26_tr_13_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.productservice.serviceformData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 90 Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 39, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServiceAddComponent_div_26_tr_13_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.customwarrantyShowMethor(); })("ngModelChange", function ServiceAddComponent_div_26_tr_13_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.productservice.serviceformData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 180 Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 40, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServiceAddComponent_div_26_tr_13_Template_input_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.customwarrantyShowMethor(); })("ngModelChange", function ServiceAddComponent_div_26_tr_13_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.productservice.serviceformData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 270 Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 41, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServiceAddComponent_div_26_tr_13_Template_input_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.customwarrantyShowMethor(); })("ngModelChange", function ServiceAddComponent_div_26_tr_13_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.productservice.serviceformData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 365 Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ServiceAddComponent_div_26_tr_13_label_24_Template, 5, 1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ServiceAddComponent_div_26_tr_13_label_25_Template, 4, 0, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ServiceAddComponent_div_26_tr_13_div_28_Template, 3, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ServiceAddComponent_div_26_tr_13_div_29_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.productservice.serviceformData.WarrantyDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.productservice.serviceformData.WarrantyDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.productservice.serviceformData.WarrantyDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.productservice.serviceformData.WarrantyDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.customwarrantyShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.customwarrantyShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.customwarrantyShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.customwarrantyShow);
} }
function ServiceAddComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServiceAddComponent_div_26_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.productservice.serviceformData.InWarranty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Service warranty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ServiceAddComponent_div_26_tr_12_Template, 9, 3, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ServiceAddComponent_div_26_tr_13_Template, 30, 8, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.productservice.serviceformData.InWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.productservice.serviceformData.InWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.customwarrantyShowEdit);
} }
class ServiceAddComponent {
    constructor(titleService, productservice, toastr, router, logService, loginservice, dialogRef) {
        this.titleService = titleService;
        this.productservice = productservice;
        this.toastr = toastr;
        this.router = router;
        this.logService = logService;
        this.loginservice = loginservice;
        this.dialogRef = dialogRef;
        this.isValid = true;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
        this.customwarrantyShowEdit = false;
        if (this.productservice.serviceformData.Id === '00000000-0000-0000-0000-000000000000') {
            if (!this.currentUser.Permissions.ServiceCreate) {
                this.router.navigate(['/dashboard']);
            }
            this.titleService.setTitle('Service Create | Genic Solution');
            this.createbuttontext = 'Create';
        }
        else {
            if (!this.currentUser.Permissions.ServiceEdit) {
                this.router.navigate(['/dashboard']);
            }
            this.titleService.setTitle('Service Edit | Genic Solution');
            this.createbuttontext = 'Update';
        }
        setTimeout(() => {
            if (!this.currentUser.Permissions.ProductWarranty) {
                this.productservice.serviceformData.InWarranty = false;
                this.productservice.serviceformData.WarrantyDays = 0;
            }
            else {
                this.productservice.serviceformData.InWarranty = true;
            }
            this.customwarrantyShowMethor();
        }, 1000);
    }
    customwarrantyShowMethor() {
        if (this.productservice.serviceformData.WarrantyDays === undefined) {
            this.customwarrantyShow = false;
        }
        else {
            switch (this.productservice.serviceformData.WarrantyDays.toString()) {
                case '90':
                case '180':
                case '270':
                case '365':
                    this.customwarrantyShow = true;
                    break;
                default:
                    this.customwarrantyShow = false;
                    break;
            }
        }
    }
    onSubmit() {
        if (this.validateForm()) {
            if (this.productservice.serviceformData.Id === '00000000-0000-0000-0000-000000000000') {
                this.productservice.postServiceDetails(this.currentUser.Token).subscribe(res => {
                    if (res) {
                        const response = res;
                        if (response.Message === 'success') {
                            this.toastr.success('success', response.MessageDescription);
                            const des = 'A Service : ' + this.productservice.serviceformData.ServiceName + ', has been added ' +
                                ', and Service Description : ' + this.productservice.serviceformData.ServiceDescription + ', by user : ' + this.currentUser.UserName;
                            const Activity = 'A Service : ' + this.productservice.serviceformData.ServiceName + ', has been added.';
                            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Services', this.productservice.serviceformData.Id, 'Added', des, Activity).subscribe();
                            this.dialogRef.close();
                        }
                        if (response.Message === 'failure') {
                            this.toastr.warning('warning', response.MessageDescription);
                        }
                    }
                }, error => console.log(error));
            }
            else {
                this.productservice.putServiceDetails(this.currentUser.Token).subscribe(res => {
                    if (res) {
                        const response = res;
                        if (response.Message === 'success') {
                            const des = 'A Service : ' + this.productservice.serviceformData.ServiceName + ', has been modified ' +
                                ', and Service Description : ' + this.productservice.serviceformData.ServiceDescription + ', by user : ' + this.currentUser.UserName;
                            const Activity1 = 'A Service : ' + this.productservice.serviceformData.ServiceName + ', has been updated.';
                            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Services', this.productservice.serviceformData.Id, 'Modify', des, Activity1).subscribe();
                            this.dialogRef.close();
                        }
                        if (response.Message === 'failure') {
                            this.toastr.warning('warning', response.MessageDescription);
                        }
                    }
                }, error => console.log(error));
            }
        }
    }
    enablewarrantchange() {
        if (this.customwarrantyShowEdit) {
            this.customwarrantyShowEdit = false;
        }
        else {
            this.customwarrantyShowEdit = true;
        }
    }
    validateForm() {
        this.isValid = true;
        if (this.productservice.serviceformData.ServiceName === '') {
            this.isValid = false;
        }
        this.productservice.serviceformData.WarrantyDays = Number(this.productservice.serviceformData.WarrantyDays);
        if (this.productservice.serviceformData.InWarranty) {
            if (this.productservice.serviceformData.WarrantyDays === null ||
                this.productservice.serviceformData.WarrantyDays === undefined ||
                this.productservice.serviceformData.WarrantyDays === 0) {
                this.toastr.warning('warning', 'warranty not valid');
                this.isValid = false;
            }
        }
        return this.isValid;
    }
    numberOnly(event) {
        if (Number(event.target.value) === 0) {
            event.target.value = null;
        }
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            if (charCode === 46) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
}
ServiceAddComponent.ɵfac = function ServiceAddComponent_Factory(t) { return new (t || ServiceAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_5__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"])); };
ServiceAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceAddComponent, selectors: [["app-service-add"]], decls: 33, vars: 11, consts: [[1, "main-head"], [1, "dispaly-4"], ["autocomplete", "off"], ["type", "hidden", "name", "Id", 3, "ngModel", "ngModelChange"], ["Id", "ngModel"], ["type", "hidden", "name", "ServiceId", 3, "ngModel", "ngModelChange"], ["ServiceId", "ngModel"], [1, "form-row"], [1, "form-group", "col-md-12", "popup-heading"], [1, "text-danger"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-list"], ["name", "ServiceName", "maxlength", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ServiceName", "ngModel"], [1, "form-group", "col-md-12"], ["rows", "4", "name", "ServiceDescription", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ServiceDescription", "ngModel"], ["class", "form-group col-md-12", 4, "ngIf"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-dark", "ml-1", 3, "mat-dialog-close"], [1, "fa", "fa-close"], ["colspan", "4"], [1, "col-md-12", "padd-top-10", "padd-left-0", "padd-right-0"], [1, "kt-switch", "kt-switch--icon"], ["name", "productservice.serviceformData.InWarranty", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["InWarranty", "ngModel"], [1, "swither-bootstrap-learn", "switcher-customer"], [4, "ngIf"], ["colspan", "2"], ["href", "javascript:void(0)", 1, "text-warning", "btnStockUpdate", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["aria-hidden", "true", 1, "fa", "fa-minus"], [1, "kt-radio-list"], [1, "kt-radio", "kt-radio--bold", "kt-radio--brand"], ["type", "radio", "value", "90", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["WarrantyDays", "ngModel"], ["type", "radio", "value", "180", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "270", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "365", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["class", "kt-radio kt-radio--bold kt-radio--brand", 4, "ngIf"], ["colspan", "2", 2, "vertical-align", "bottom"], [1, "row"], ["class", "col-md-4", 4, "ngIf"], ["class", "col-md-8 padd-top-10", 4, "ngIf"], ["type", "radio", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "name", "WarrantyDays", "checked", "", 1, "custom-control-input", 3, "change"], [1, "col-md-4"], ["type", "text", "name", "WarrantyDays", "placeholder", "Custom", "maxlength", "3", 1, "undertd_text", 3, "ngModel", "keyup", "keydown", "ngModelChange", "keypress"], [1, "col-md-8", "padd-top-10"]], template: function ServiceAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServiceAddComponent_Template_input_ngModelChange_4_listener($event) { return ctx.productservice.serviceformData.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServiceAddComponent_Template_input_ngModelChange_6_listener($event) { return ctx.productservice.serviceformData.ServiceId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Service Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServiceAddComponent_Template_input_ngModelChange_18_listener($event) { return ctx.productservice.serviceformData.ServiceName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Service Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "textarea", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServiceAddComponent_Template_textarea_ngModelChange_24_listener($event) { return ctx.productservice.serviceformData.ServiceDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ServiceAddComponent_div_26_Template, 14, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceAddComponent_Template_button_click_28_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productservice.serviceformData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productservice.serviceformData.ServiceId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productservice.serviceformData.ServiceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productservice.serviceformData.ServiceDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.ProductWarranty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.productservice.serviceformData.ServiceName.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.createbuttontext);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"]], styles: [".main-head[_ngcontent-%COMP%]{background-color:#C3E7FA;padding:10px;}\r\n.main-head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:black !important;font-size:20px !important;}\r\n.form-row[_ngcontent-%COMP%]{padding:10px;background-color:#F1F1F1;margin:0 0 15px !important;}\r\n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:black !important;font-size:14px !important;font-weight:600 !important;}\r\n.input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{background-color:#FA5F2B;}\r\n.input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.form-group[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#0080c7;border-color:transparent !important;}\r\n.btn.btn-outline-dark[_ngcontent-%COMP%]{background-color:#ECECF5 !important;border-color:transparent !important;}\r\n.btn.btn-outline-dark[_ngcontent-%COMP%]:hover{color: #595d6e;border-color: #e2e5ec !important;background-color: #f4f5f8 !important;}\r\n.btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\n.switcher-customer[_ngcontent-%COMP%] { top:-15px;position: relative; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyx3QkFBd0IsQ0FBQyxZQUFZLENBQUM7QUFDakQsY0FBYyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUMvRCxVQUFVLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEIsQ0FBQztBQUMzRSxnQkFBZ0Isc0JBQXNCLENBQUMseUJBQXlCLENBQUMsMEJBQTBCLENBQUM7QUFDNUYsdUNBQXVDLHdCQUF3QixDQUFDO0FBQ2hFLHlDQUF5QyxXQUFXLENBQUM7QUFDckQsNkJBQTZCLHdCQUF3QixDQUFDLG1DQUFtQyxDQUFDO0FBQzFGLHNCQUFzQixtQ0FBbUMsQ0FBQyxtQ0FBbUMsQ0FBQztBQUM5Riw0QkFBNEIsY0FBYyxDQUFDLGdDQUFnQyxDQUFDLG9DQUFvQyxDQUFDO0FBQ2pILFdBQVcsd0JBQXdCLENBQUMscUJBQXFCLENBQUM7QUFDMUQscUJBQXFCLG1CQUFtQixDQUFDO0FBQ3pDLHFCQUFxQixTQUFTLENBQUMsa0JBQWtCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWhlYWR7YmFja2dyb3VuZC1jb2xvcjojQzNFN0ZBO3BhZGRpbmc6MTBweDt9XHJcbi5tYWluLWhlYWQgaDR7Y29sb3I6YmxhY2sgIWltcG9ydGFudDtmb250LXNpemU6MjBweCAhaW1wb3J0YW50O31cclxuLmZvcm0tcm93e3BhZGRpbmc6MTBweDtiYWNrZ3JvdW5kLWNvbG9yOiNGMUYxRjE7bWFyZ2luOjAgMCAxNXB4ICFpbXBvcnRhbnQ7fVxyXG4uZm9ybS1yb3cgbGFiZWx7Y29sb3I6YmxhY2sgIWltcG9ydGFudDtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjYwMCAhaW1wb3J0YW50O31cclxuLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHR7YmFja2dyb3VuZC1jb2xvcjojRkE1RjJCO31cclxuLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQgaXtjb2xvcjp3aGl0ZTt9XHJcbi5mb3JtLWdyb3VwIC5idG4uYnRuLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDA4MGM3O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O31cclxuLmJ0bi5idG4tb3V0bGluZS1kYXJre2JhY2tncm91bmQtY29sb3I6I0VDRUNGNSAhaW1wb3J0YW50O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O31cclxuLmJ0bi5idG4tb3V0bGluZS1kYXJrOmhvdmVye2NvbG9yOiAjNTk1ZDZlO2JvcmRlci1jb2xvcjogI2UyZTVlYyAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6ICNmNGY1ZjggIWltcG9ydGFudDt9XHJcbi5idG4tYnJhbmR7YmFja2dyb3VuZC1jb2xvcjojZmY4NTMzO2JvcmRlci1jb2xvcjogI2ZmODUzMzt9XHJcbi5kcm9wZG93bi1tZW51LnNob3cge21hcmdpbi1sZWZ0OiAtMTA1cHg7fVxyXG4uc3dpdGNoZXItY3VzdG9tZXIgeyB0b3A6LTE1cHg7cG9zaXRpb246IHJlbGF0aXZlOyB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service-add',
                templateUrl: './service-add.component.html',
                styleUrls: ['../service.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_5__["UserlogService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "uZJf":
/*!*******************************************************!*\
  !*** ./src/app/application/service/service.module.ts ***!
  \*******************************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_add_service_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-add/service-add.component */ "q65n");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service-list/service-list.component */ "YD9O");















const routes = [
    { path: '', component: _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_12__["ServiceListComponent"],
        children: [
            { path: 'service-list', component: _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_12__["ServiceListComponent"] }
        ] },
];
class ServiceModule {
}
ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceModule });
ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceModule_Factory(t) { return new (t || ServiceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, { declarations: [_service_add_service_add_component__WEBPACK_IMPORTED_MODULE_6__["ServiceAddComponent"], _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_12__["ServiceListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_service_add_service_add_component__WEBPACK_IMPORTED_MODULE_6__["ServiceAddComponent"], _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_12__["ServiceListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ],
                exports: [
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=application-service-service-module-es2015.js.map