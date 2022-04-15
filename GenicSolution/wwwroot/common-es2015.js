(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "4ebh":
/*!********************************************!*\
  !*** ./src/app/services/property.model.ts ***!
  \********************************************/
/*! exports provided: Property, InternalObject, AutoCaptureParms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalObject", function() { return InternalObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCaptureParms", function() { return AutoCaptureParms; });
class Property {
}
class InternalObject {
}
class AutoCaptureParms {
}


/***/ }),

/***/ "IWF8":
/*!*************************************************************************************!*\
  !*** ./src/app/generic-utils/Quote-Status-Component/QuoteStatusComponent.module.ts ***!
  \*************************************************************************************/
/*! exports provided: QuoteStatusComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteStatusComponentModule", function() { return QuoteStatusComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuoteStatusComponent.component */ "sVpj");





class QuoteStatusComponentModule {
}
QuoteStatusComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QuoteStatusComponentModule });
QuoteStatusComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QuoteStatusComponentModule_Factory(t) { return new (t || QuoteStatusComponentModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuoteStatusComponentModule, { declarations: [_QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["QuoteStatusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["QuoteStatusComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteStatusComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [_QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["QuoteStatusComponent"]],
                exports: [_QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["QuoteStatusComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "JYEN":
/*!*******************************************!*\
  !*** ./src/app/services/report.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsFilter, ReportsWarranty, ProductWarranty, ReportsUnWarranty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsFilter", function() { return ReportsFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsWarranty", function() { return ReportsWarranty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWarranty", function() { return ProductWarranty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsUnWarranty", function() { return ReportsUnWarranty; });
class ReportsFilter {
}
class ReportsWarranty {
}
class ProductWarranty {
}
class ReportsUnWarranty {
}


/***/ }),

/***/ "L6Ap":
/*!************************************************!*\
  !*** ./src/app/services/genic-zone.service.ts ***!
  \************************************************/
/*! exports provided: GenicZoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenicZoneService", function() { return GenicZoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class GenicZoneService {
    constructor(http) {
        this.http = http;
        this.setDefaultGenicZone();
        this.setDefaultZoneCoordinates();
        this.GenicZoneList = [];
        this.ZoneCoordinatesList = [];
        this.localZoneList = [];
        this.EngineerWiseZoneList = [];
    }
    setDefaultGenicZone() {
        this.GenicZoneData = {
            ZoneId: 0,
            ZoneName: '',
            CountryName: 'Singapore',
            IsActive: true,
            IsAssigned: false,
            ZoneCoordinatesList: [],
        };
    }
    setDefaultZoneCoordinates() {
        this.ZoneCoordinatesData = {
            Id: 0,
            ZoneId: 0,
            Coordinates: '',
        };
    }
    GetGenicZone() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/GenicZone/GetGenicZone').toPromise().then(res => this.GenicZoneList = res);
    }
    postGenicZone() {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/GenicZone/postGenicZone', this.GenicZoneData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        }).pipe();
    }
    updateZoneStatus(zoneId, Status) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/GenicZone/updateZoneStatus/' + zoneId + '/' + Status, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        }).toPromise();
    }
    removeGenicZone(zoneId) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/GenicZone/removeGenicZone/' + zoneId, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        }).pipe();
    }
    // Get Zone list to assign an engineer
    GetEngineerWiseZone(EngineerId) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/GenicZone/GetEngineerWiseZone/' + EngineerId).toPromise().then(res => this.EngineerWiseZoneList = res);
    }
}
GenicZoneService.ɵfac = function GenicZoneService_Factory(t) { return new (t || GenicZoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GenicZoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GenicZoneService, factory: GenicZoneService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenicZoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jG0A":
/*!********************************************!*\
  !*** ./src/app/services/customer.model.ts ***!
  \********************************************/
/*! exports provided: Customer, ArrayofKey, CustomerContactPerson, CustomerDepartmentType, CustomerDepartment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayofKey", function() { return ArrayofKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerContactPerson", function() { return CustomerContactPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDepartmentType", function() { return CustomerDepartmentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDepartment", function() { return CustomerDepartment; });
class Customer {
}
class ArrayofKey {
}
class CustomerContactPerson {
}
class CustomerDepartmentType {
}
class CustomerDepartment {
}


/***/ }),

/***/ "ppW+":
/*!********************************************!*\
  !*** ./src/app/services/report.service.ts ***!
  \********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _report_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.module */ "JYEN");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class ReportService {
    constructor(http) {
        this.http = http;
        this.ProductWarranty = new _report_module__WEBPACK_IMPORTED_MODULE_2__["ProductWarranty"]();
    }
    refrestTicketReports(token, sdate, edate, type, eid, status) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Reports/TicketReports/' + token + '/' + sdate + '/' + edate +
            '/' + type + '/' + eid + '/' + status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response;
        }));
    }
    refrestEngineerReports(token, sdate, edate, type) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Reports/EngineerReports/' + token + '/' + sdate + '/' + edate +
            '/' + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response;
        }));
    }
    refrestEngineerwiseReports(token, sdate, edate, eid) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Reports/EngineerWiseReports/' + token + '/' + sdate + '/' + edate + '/' + eid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response;
        }));
    }
    refrestEngineerAttendanceReports(token, sdate, edate, eid) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Reports/EngineerAttendanceReport/' + token + '/' + sdate + '/' + edate + '/' + eid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response;
        }));
    }
    refrestEngineerwise2Reports(token, sdate, edate, eid) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Reports/EngineerWise2Reports/' + token + '/' + sdate + '/' + edate + '/' + eid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response;
        }));
    }
    refrestVisitsReports(token, sdate, edate, type, eid, tid) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Reports/Visits/' + token + '/' + sdate + '/' + edate + '/' +
            type + '/' + eid + '/' + tid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response;
        }));
    }
    refrestWarrantyList(token, SDate, EDate, CId, PId, UId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Reports/Warranty/' + token + '/' + SDate + '/' + EDate + '/' +
            CId + '/' + PId + '/' + UId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    WarrantyForMaintance(token, CId, UId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Reports/WarrantyForMaintance/' + token + '/' + CId + '/' + UId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    refrestUnWarrantyList(token, strSearch) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Reports/WithOutWarranty/' + token + '/' + strSearch)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    getproductById(token, Id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Tickets/GetTicketItemById/' + token + '/' + Id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    getproductwarrantyById(token, Id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Products/GetProductWarrantyById/' + token + '/' + Id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    postProductWarranty(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Products/AddItemInProduct/' + token, this.ProductWarranty, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).pipe();
    }
    putProductWarranty(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Products/UpdateItemInProduct/' + token, this.ProductWarranty, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).pipe();
    }
    deleteProductWarranty(token, id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/Products/Deleteproductwarranty/' + token + '/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).toPromise();
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sVpj":
/*!****************************************************************************************!*\
  !*** ./src/app/generic-utils/Quote-Status-Component/QuoteStatusComponent.component.ts ***!
  \****************************************************************************************/
/*! exports provided: QuoteStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteStatusComponent", function() { return QuoteStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function QuoteStatusComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteStatusComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteStatusComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteStatusComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteStatusComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteStatusComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class QuoteStatusComponent {
}
QuoteStatusComponent.ɵfac = function QuoteStatusComponent_Factory(t) { return new (t || QuoteStatusComponent)(); };
QuoteStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteStatusComponent, selectors: [["generic-quote-status"]], inputs: { Status: "Status" }, decls: 6, vars: 6, consts: [["class", "ticketstatus quotestatusdraft uppercase", 4, "ngIf"], ["class", "ticketstatus quotestatuspending uppercase", 4, "ngIf"], ["class", "ticketstatus quotestatusapproved uppercase", 4, "ngIf"], ["class", "ticketstatus quotestatusaccepeted uppercase", 4, "ngIf"], ["class", "ticketstatus quotestatusrejected uppercase", 4, "ngIf"], ["class", "ticketstatus quotestatuscancelled uppercase", 4, "ngIf"], [1, "ticketstatus", "quotestatusdraft", "uppercase"], [1, "ticketstatus", "quotestatuspending", "uppercase"], [1, "ticketstatus", "quotestatusapproved", "uppercase"], [1, "ticketstatus", "quotestatusaccepeted", "uppercase"], [1, "ticketstatus", "quotestatusrejected", "uppercase"], [1, "ticketstatus", "quotestatuscancelled", "uppercase"]], template: function QuoteStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuoteStatusComponent_span_0_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuoteStatusComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteStatusComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuoteStatusComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteStatusComponent_span_4_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuoteStatusComponent_span_5_Template, 2, 0, "span", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === 6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'generic-quote-status',
                template: `
  <span *ngIf="Status === 1" class="ticketstatus quotestatusdraft uppercase">Draft</span>
  <span *ngIf="Status === 2" class="ticketstatus quotestatuspending uppercase">Pending</span>
  <span *ngIf="Status === 3" class="ticketstatus quotestatusapproved uppercase">Approved</span>
  <span *ngIf="Status === 4" class="ticketstatus quotestatusaccepeted uppercase">Accepted</span>
  <span *ngIf="Status === 5" class="ticketstatus quotestatusrejected uppercase">Rejected</span>
  <span *ngIf="Status === 6" class="ticketstatus quotestatuscancelled uppercase">Cancelled</span>
  `
            }]
    }], null, { Status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map