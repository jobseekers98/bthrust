(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-customer-customer-module~application-customers-customers-module~application-dash~3765db90"],{

/***/ "G5QB":
/*!*********************************************!*\
  !*** ./src/app/services/generic.service.ts ***!
  \*********************************************/
/*! exports provided: GenericService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericService", function() { return GenericService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class GenericService {
    constructor(http) {
        this.http = http;
        this.ratingcount = 0;
    }
    /// *******************************************************************************/
    // Category methods (api) Begin
    postCategoryDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Categories/PostCategory/' + token, this.CategoryformData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    putCategoryDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Categories/PutCategory/' + token, this.CategoryformData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    // deleteCategoryDetails(Id: number) {
    //   return this.http.delete(environment.apiUrl + '/api/Categories/' + Id , {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    //     observe: 'response' }).toPromise();
    // }
    refrestCategorylist(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Categories/GetCategory/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    // Category methods (api) End
    /// *******************************************************************************/
    /// *******************************************************************************/
    // Ticket Issue Type (api) Begin
    postTicketIssueTypeDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PostTicketIssueType/' + token, this.TicketIssueTypeformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    putTicketIssueTypeDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PutTicketIssueType/' + token, this.TicketIssueTypeformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    refrestTicketIssueTypelist(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/GetTicketIssueType/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    // Ticket Issue Type (api) End
    /// *******************************************************************************/
    /// *******************************************************************************/
    // Tax (api) Begin
    postTaxDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PostTax/' + token, this.TaxformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    putTaxDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PutTax/' + token, this.TaxformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    refrestTaxlist(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/GetTax/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    putTaxUpdateStatus(token, Id) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PutTaxStatusUpdate/' + token + '/' + Id, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    putTaxUpdateIsDefault(token, Id) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PutTaxIsDefaultUpdate/' + token + '/' + Id, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    // Tax (api) End
    // Payment Mode (api) Begin
    postPaymentModeDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PostPaymentMode/' + token, this.PaymentModeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    putPaymentModeDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PutPaymentMode/' + token, this.PaymentModeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    refrestPaymentModelist(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/GetPaymentMode/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    putPaymentModeUpdateStatus(token, Id) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PutPaymentModStatusUpdate/' + token + '/' + Id, this.PaymentModeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    // Payment Mode (api) End
    /// *******************************************************************************/
    //#region  SMTPSettings
    postSMTPDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/SMTPSettings/' + token, this.SmtpsettingData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    putSMTPDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/SMTPSettings/' + token, this.SmtpsettingData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    refreshSMTPList(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/SMTPSettings/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    SMTPDetailsById(id, token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/SMTPSettings/GetSMTPDetaildById/' + id + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    //#endregion
    //#region Genic Docs
    getGenicDocExt(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/GetGenicDocExt/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    postGenicDocExt(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PostGenicDocExt/' + token, this.GenicDocExtData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    putGenicDocExt(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PutGenicDocExt/' + token, this.GenicDocExtData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    removeGenicDocExt(token, Id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/GenicProfile/PutGenicDocExt/' + token + '/' + Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    //#endregion
    //#region Rating
    getTicketFreedback(tid, rating, token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/app/EngineerProfile/GetTicketRating/' + tid + '/' + rating + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    putTicketFreedback(tid, rating, ratingtext, token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/app/EngineerProfile/GetTicketRating/' + token, {
            'id': rating,
            'v1': ratingtext,
            'TicketId': tid
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
}
GenericService.ɵfac = function GenericService_Factory(t) { return new (t || GenericService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
GenericService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GenericService, factory: GenericService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HdV0":
/*!*******************************************************************************************!*\
  !*** ./src/app/generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TicketFeedbackComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketFeedbackComponentModule", function() { return TicketFeedbackComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TicketFeedbackComponent.component */ "Sh6L");





class TicketFeedbackComponentModule {
}
TicketFeedbackComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TicketFeedbackComponentModule });
TicketFeedbackComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TicketFeedbackComponentModule_Factory(t) { return new (t || TicketFeedbackComponentModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketFeedbackComponentModule, { declarations: [_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketFeedbackComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketFeedbackComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketFeedbackComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketFeedbackComponent"]],
                exports: [_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketFeedbackComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sh6L":
/*!**********************************************************************************************!*\
  !*** ./src/app/generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TicketFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketFeedbackComponent", function() { return TicketFeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_generic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/generic.service */ "G5QB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TicketFeedbackComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.rating(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_3_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.rating(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_3_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.rating(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_3_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.rating(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_3_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.rating(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_4_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.rating(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_4_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.rating(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_4_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.rating(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_4_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.rating(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_4_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.rating(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_5_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.rating(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_5_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.rating(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_5_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.rating(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_5_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.rating(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_5_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.rating(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_6_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.rating(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_6_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.rating(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_6_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.rating(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_6_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.rating(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_6_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.rating(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_7_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.rating(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_7_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.rating(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_7_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.rating(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_7_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.rating(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_7_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.rating(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_8_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.rating(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_8_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.rating(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_8_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.rating(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_8_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.rating(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFeedbackComponent_div_1_div_8_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.rating(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Star Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketFeedbackComponent_div_1_div_3_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketFeedbackComponent_div_1_div_4_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketFeedbackComponent_div_1_div_5_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketFeedbackComponent_div_1_div_6_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketFeedbackComponent_div_1_div_7_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TicketFeedbackComponent_div_1_div_8_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ratingcount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ratingcount === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ratingcount === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ratingcount === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ratingcount === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ratingcount === 5);
} }
function TicketFeedbackComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketFeedbackComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketFeedbackComponent_div_2_div_1_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketFeedbackComponent_div_2_div_2_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketFeedbackComponent_div_2_div_3_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketFeedbackComponent_div_2_div_4_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketFeedbackComponent_div_2_div_5_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketFeedbackComponent_div_2_div_6_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ratingcount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ratingcount === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ratingcount === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ratingcount === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ratingcount === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ratingcount === 5);
} }
class TicketFeedbackComponent {
    constructor(gp) {
        this.gp = gp;
    }
    ngOnInit() {
        if (this.ratingcount === undefined || this.ratingcount === null) {
            this.ratingcount = 0;
        }
    }
    rating(r) {
        if (this.Editable === 1) {
            if (this.ratingcount === r) {
                this.ratingcount = 0;
                this.gp.ratingcount = 0;
                return;
            }
            this.gp.ratingcount = r;
            this.ratingcount = r;
        }
    }
}
TicketFeedbackComponent.ɵfac = function TicketFeedbackComponent_Factory(t) { return new (t || TicketFeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_generic_service__WEBPACK_IMPORTED_MODULE_1__["GenericService"])); };
TicketFeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketFeedbackComponent, selectors: [["generic-ticket-feedback"]], inputs: { Status: "Status", ratingcount: "ratingcount", Editable: "Editable" }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col font-20", 4, "ngIf"], ["class", "col text-align-center", 4, "ngIf"], [1, "col", "font-20"], [4, "ngIf"], [1, "fa", "fa-star", 3, "click"], [1, "fa", "fa-star", "f-r-checked", 3, "click"], [1, "col", "text-align-center"], [1, "fa", "fa-star", "text-secondary"], [1, "fa", "fa-star", "f-r-checked", "text-secondary"]], template: function TicketFeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketFeedbackComponent_div_1_Template, 9, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketFeedbackComponent_div_2_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Editable === 0 || ctx.Editable === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Editable === 2 && ctx.Status === "CLOSED");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".f-r-checked[_ngcontent-%COMP%] { color: orange !important; } .text-align-center[_ngcontent-%COMP%] {text-align: center;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketFeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'generic-ticket-feedback',
                template: `
  <div class="row">
  <div class="col font-20" *ngIf="this.Editable === 0 || this.Editable === 1">
      <h3>Star Rating</h3>
      <div *ngIf="ratingcount === 0">
          <span class="fa fa-star" (click)="rating(1)" ></span>
          <span class="fa fa-star" (click)="rating(2)"></span>
          <span class="fa fa-star" (click)="rating(3)"></span>
          <span class="fa fa-star" (click)="rating(4)"></span>
          <span class="fa fa-star" (click)="rating(5)"></span>
      </div>
      <div *ngIf="ratingcount === 1">
          <span class="fa fa-star f-r-checked" (click)="rating(1)" ></span>
          <span class="fa fa-star" (click)="rating(2)"></span>
          <span class="fa fa-star" (click)="rating(3)"></span>
          <span class="fa fa-star" (click)="rating(4)"></span>
          <span class="fa fa-star" (click)="rating(5)"></span>
      </div>
      <div *ngIf="ratingcount === 2">
          <span class="fa fa-star f-r-checked" (click)="rating(1)" ></span>
          <span class="fa fa-star f-r-checked" (click)="rating(2)"></span>
          <span class="fa fa-star" (click)="rating(3)"></span>
          <span class="fa fa-star" (click)="rating(4)"></span>
          <span class="fa fa-star" (click)="rating(5)"></span>
      </div>
      <div *ngIf="ratingcount === 3">
          <span class="fa fa-star f-r-checked" (click)="rating(1)" ></span>
          <span class="fa fa-star f-r-checked" (click)="rating(2)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(3)"></span>
          <span class="fa fa-star" (click)="rating(4)"></span>
          <span class="fa fa-star" (click)="rating(5)"></span>
      </div>
      <div *ngIf="ratingcount === 4">
          <span class="fa fa-star f-r-checked" (click)="rating(1)" ></span>
          <span class="fa fa-star f-r-checked" (click)="rating(2)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(3)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(4)"></span>
          <span class="fa fa-star" (click)="rating(5)"></span>
      </div>
      <div *ngIf="ratingcount === 5">
          <span class="fa fa-star f-r-checked" (click)="rating(1)" ></span>
          <span class="fa fa-star f-r-checked" (click)="rating(2)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(3)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(4)"></span>
          <span class="fa fa-star f-r-checked" (click)="rating(5)"></span>
      </div>
  </div>
  <div class="col text-align-center" *ngIf="this.Editable === 2 && this.Status === 'CLOSED'">
  <div *ngIf="ratingcount === 0">
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
  </div>
  <div *ngIf="ratingcount === 1">
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
  </div>
  <div *ngIf="ratingcount === 2">
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
  </div>
  <div *ngIf="ratingcount === 3">
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
  </div>
  <div *ngIf="ratingcount === 4">
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star text-secondary"></span>
  </div>
  <div *ngIf="ratingcount === 5">
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
      <span class="fa fa-star f-r-checked text-secondary"></span>
  </div>
</div>
</div>
  `,
                styles: [`.f-r-checked { color: orange !important; } .text-align-center {text-align: center;}`]
            }]
    }], function () { return [{ type: src_app_services_generic_service__WEBPACK_IMPORTED_MODULE_1__["GenericService"] }]; }, { Status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ratingcount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], Editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~application-customer-customer-module~application-customers-customers-module~application-dash~3765db90-es2015.js.map