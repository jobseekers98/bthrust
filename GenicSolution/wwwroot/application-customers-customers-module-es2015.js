(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-customers-customers-module"],{

/***/ "0lRL":
/*!**************************************************************!*\
  !*** ./src/app/application/customers/customers.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CustomersComponent {
    ngOnInit() { }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(); };
CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ template: '<router-outlet></router-outlet>' }]
    }], null, null); })();


/***/ }),

/***/ "H/qo":
/*!***********************************************!*\
  !*** ./node_modules/email-validator/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
exports.validate = function(email)
{
	if (!email)
		return false;
		
	if(email.length>254)
		return false;

	var valid = tester.test(email);
	if(!valid)
		return false;

	// Further checking of some things regex can't handle
	var parts = email.split("@");
	if(parts[0].length>64)
		return false;

	var domainParts = parts[1].split(".");
	if(domainParts.some(function(part) { return part.length>63; }))
		return false;

	return true;
}

/***/ }),

/***/ "btRI":
/*!********************************************************************************!*\
  !*** ./src/app/application/customers/customer-list/custome-lists.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/downloads.service */ "iHRC");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

















const _c0 = ["BulkUpload"];
const _c1 = ["BulkUpload2"];
function CustomerListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_div_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addcustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerListComponent_ng_content_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "currentUser.Permissions.EngineerType; then hqaddress; else billingaddress"]);
} }
function CustomerListComponent_ng_template_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "BILLING ADDRESS");
} }
function CustomerListComponent_ng_template_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "HQ ADDRESS");
} }
function CustomerListComponent_tr_123_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 98);
} if (rf & 2) {
    const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("title", "", x_r16.NameTitle, " ", x_r16.FirstName, " ", x_r16.LastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r18.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerListComponent_tr_123_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 98);
} if (rf & 2) {
    const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("title", "", x_r16.NameTitle, " ", x_r16.FirstName, " ", x_r16.LastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r16.CustomerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerListComponent_tr_123_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_tr_123_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.detailscustomer(x_r16.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r16.CustomerId);
} }
function CustomerListComponent_tr_123_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r16.CustomerId);
} }
function CustomerListComponent_tr_123_span_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r34.Value, " ");
} }
function CustomerListComponent_tr_123_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerListComponent_tr_123_span_22_span_1_Template, 2, 1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34.Type === "Email" && item_r34.IsDefault === true);
} }
function CustomerListComponent_tr_123_span_26_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r37.Value, " ");
} }
function CustomerListComponent_tr_123_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerListComponent_tr_123_span_26_span_1_Template, 2, 1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.Type === "Phone" && item_r37.IsDefault === true);
} }
function CustomerListComponent_tr_123_li_41_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_tr_123_li_41_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.pupulatecustomer(x_r16.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerListComponent_tr_123_li_42_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_tr_123_li_42_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.detailscustomer(x_r16.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "InactiveBackColor": a0 }; };
function CustomerListComponent_tr_123_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerListComponent_tr_123_img_2_Template, 1, 4, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerListComponent_tr_123_img_3_Template, 1, 4, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomerListComponent_tr_123_a_6_Template, 2, 1, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerListComponent_tr_123_a_7_Template, 2, 1, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Company: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CustomerListComponent_tr_123_span_22_Template, 2, 1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Phone: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CustomerListComponent_tr_123_span_26_Template, 2, 1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomerListComponent_tr_123_Template_input_change_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const x_r16 = ctx.$implicit; const i_r17 = ctx.index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onStatusChange($event, x_r16.Id, i_r17); })("ngModelChange", function CustomerListComponent_tr_123_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const x_r16 = ctx.$implicit; return x_r16.Status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CustomerListComponent_tr_123_li_41_Template, 3, 0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CustomerListComponent_tr_123_li_42_Template, 3, 0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c2, x_r16.Status === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r16.CustomerLogo.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r16.CustomerLogo.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.currentUser.Permissions.CustomerView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.currentUser.Permissions.CustomerView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 22, x_r16.CreatedUtcDate, "MMM d, y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", x_r16.NameTitle, " ", x_r16.FirstName, " ", x_r16.LastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r16.CompanyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", x_r16.ArrayofKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", x_r16.ArrayofKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", x_r16.AddressStreet1, " ", x_r16.AddressStreet2, " ", x_r16.AddressUnitNo, ", ", x_r16.AddressCountry, " ", x_r16.AddressZipCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "example_", i_r17, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r16.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "example_", i_r17, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.currentUser.Permissions.CustomerEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.currentUser.Permissions.CustomerView);
} }
function CustomerListComponent_th_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Record not found ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerListComponent_ng_container_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const s_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r49, " ");
} }
function CustomerListComponent_ng_container_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const e_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r50, " ");
} }
function CustomerListComponent_ng_container_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const s_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r51, " ");
} }
function CustomerListComponent_ng_container_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const e_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r52, " ");
} }
const _c3 = ["*"];
class CustomerListComponent {
    constructor(titleService, service, router, downloadService, logService, loginservice, genicprofileservice, toastr) {
        this.titleService = titleService;
        this.service = service;
        this.router = router;
        this.downloadService = downloadService;
        this.logService = logService;
        this.loginservice = loginservice;
        this.genicprofileservice = genicprofileservice;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ErrorRes = [];
        this.SuccessRes = [];
        this.ErrorRes2 = [];
        this.SuccessRes2 = [];
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.service.CustomerList = [];
        this.service.CustomerLocalList = [];
    }
    ngOnInit() {
        if (!this.currentUser.Permissions.CustomerView) {
            this.router.navigate(['/dashboard']);
        }
        this.titleService.setTitle('Customers | Genic Solution');
        this.genicprofileservice.TicketFilter.IsReady = false;
        this.genicprofileservice.TicketFilter.IsReadyQuote = false;
        this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
        this.excelDataTemplatePath = this.localPrependUrl + '/assets/ExcelDataTemplate/CustomerDatabaseSheet.xlsx';
        this.excelDataTemplatePath2 = this.localPrependUrl + '/assets/ExcelDataTemplate/CustomerContactPersonDatabaseSheet.xlsx';
        this.dtOptions = { pagingType: 'full_numbers', paging: true, order: [1, 'desc'], lengthMenu: [5, 10, 25, 50, 75, 100] };
        this.dropdownbtnavgrev = 'All Customers';
        this.dropdownbtndepartment = 'All Department';
        this.service.getCustomerListSync(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.service.CustomerList = this.service.CustomerLocalList = response.result;
                    this.TotalCustomerCount = this.service.CustomerLocalList.length;
                    this.ActiveCustomerCount = this.service.CustomerLocalList.filter(x => x.Status === true).length;
                    this.SuspendedCustomerCount = this.service.CustomerLocalList.filter(x => x.Status === false).length;
                    this.dtTrigger.next();
                }
            }
        }, error => console.log(error));
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    pupulatecustomer(Id) {
        this.router.navigate(['/customers/customer-edit/' + Id]);
    }
    detailscustomer(Id) {
        this.router.navigate(['/customers/customer-details/' + Id]);
    }
    FilterCustomers(value) {
        this.dropdownbtndepartment = 'All Department';
        switch (value) {
            case 'Suspended Customers':
                this.service.CustomerLocalList = this.service.CustomerList.filter(x => x.Status === false);
                this.dropdownbtnavgrev = 'Suspended Customers';
                break;
            case 'Active Customers':
                this.service.CustomerLocalList = this.service.CustomerList.filter(x => x.Status === true);
                this.dropdownbtnavgrev = 'Active Customers';
                break;
            default:
                this.service.CustomerLocalList = this.service.CustomerList;
                this.dropdownbtnavgrev = 'All Customers';
        }
    }
    // FilterDepartmentWise(id: number, name: string) {
    //   this.dropdownbtnavgrev = 'All Customers';
    //   if (id === 0) {
    //     this.service.CustomerLocalList = this.service.CustomerList;
    //     this.dropdownbtndepartment = 'All Department';
    //   } else {
    //     const suspendedlist = this.service.CustomerDepartmentList.filter(x => x.SMTPSettingsId === id);
    //     this.service.CustomerLocalList = this.service.CustomerList.filter(x => suspendedlist.map(y => y.CustomerId).includes(x.Id));
    //    // this.service.CustomerLocalList = this.service.CustomerList.filter(x => x.CustomerDepartment.filter(s => s.SMTPSettingsId === id ));
    //     this.dropdownbtndepartment = name;
    //   }
    // }
    onStatusChange(e, id, index) {
        this.service.putCustomerUpdateStatus(id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                    let st = e.target.checked;
                    if (st === true) {
                        st = 'Active';
                    }
                    else {
                        st = 'InActive';
                    }
                    const des = 'Customer : ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName +
                        ', Status has been changed as ' + st + ' by user '
                        + this.currentUser.UserName;
                    const Activity = 'Status changed as :' + st + ' of Customer : ' + this.service.formData.NameTitle
                        + ' ' + this.service.formData.FirstName
                        + ' ' + this.service.formData.LastName + ', on dated : ' + new Date(Date.parse(Date()));
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer', this.service.formData.Id, 'Modify', des, Activity).subscribe();
                    this.service.CustomerLocalList[index].Status = e.target.checked;
                    this.TotalCustomerCount = this.service.CustomerLocalList.length;
                    this.ActiveCustomerCount = this.service.CustomerLocalList.filter(x => x.Status === true).length;
                    this.SuspendedCustomerCount = this.service.CustomerLocalList.filter(x => x.Status === false).length;
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    exportAsXLSX() {
        this.downloadService.downloadFromServer('customer', this.currentUser.Token).then(blob => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, 'customer_' + new Date().getTime() + '.xlsx');
        });
    }
    // bulk upload customer
    BuldCustomerUpload(file) {
        let ExcelfileToUpload = file.item(0);
        let filExt = ExcelfileToUpload.name.split('.');
        let Ext1 = filExt[1];
        if (Ext1 === 'xls' || Ext1 === 'xlsx') {
            var reader = new FileReader();
            reader.onload = (event) => {
                let ExcelLocalURL = event.target.result;
                this.service.SetAsDefaultValues();
                this.service.formData.Latitude = Ext1;
                this.service.formData.CustomerLogo = ExcelLocalURL.split(',')[1];
                this.service.CustomerBulkUpload(this.currentUser.Id)
                    .subscribe(res => {
                    if (res) {
                        let TResponse = new Object();
                        TResponse = res;
                        this.ErrorRes = TResponse.ErrorResponse;
                        this.SuccessRes = TResponse.SuccessResponse;
                        let element = document.getElementById('customerPop');
                        element.click();
                        this.service.refrestCustomerList(this.currentUser.Token);
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
    BuldContactPersonUpload(file) {
        let ExcelfileToUpload = file.item(0);
        let filExt = ExcelfileToUpload.name.split('.');
        let Ext1 = filExt[1];
        if (Ext1 === 'xls' || Ext1 === 'xlsx') {
            var reader = new FileReader();
            reader.onload = (event) => {
                let ExcelLocalURL = event.target.result;
                this.service.SetAsDefaultValues();
                this.service.formData.Latitude = Ext1;
                this.service.formData.CustomerLogo = ExcelLocalURL.split(',')[1];
                this.service.ContactPersonBulkUpload(this.currentUser.Id)
                    .subscribe(res => {
                    if (res) {
                        let TResponse = new Object();
                        TResponse = res;
                        this.ErrorRes2 = TResponse.ErrorResponse;
                        this.SuccessRes2 = TResponse.SuccessResponse;
                        let element = document.getElementById('customerPop');
                        element.click();
                        this.service.refrestCustomerList(this.currentUser.Token);
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
    addcustomer() {
        this.router.navigate(['/customers/customer-add/']);
    }
}
CustomerListComponent.ɵfac = function CustomerListComponent_Factory(t) { return new (t || CustomerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_8__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_9__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"])); };
CustomerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerListComponent, selectors: [["app-customers"]], viewQuery: function CustomerListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.BulkUpload = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.BulkUpload2 = _t.first);
    } }, ngContentSelectors: _c3, decls: 195, vars: 18, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], ["class", "kt-subheader__wrapper", 4, "ngIf"], [1, "kt-subheader__wrapper"], ["on", "", "id", "customerPop", "data-toggle", "modal", "data-target", "#BuidUploadPop", 1, "btn", "btn-brand", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-file"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__stats"], [1, "row", "mrg-top-10"], [1, "col-lg-4"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--brand", "kt-iconbox--animate-slower"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Shape", "points", "0 0 24 0 24 24 0 24"], ["d", "M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z", "id", "Combined-Shape", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], ["d", "M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z", "id", "Combined-Shape", "fill", "#000000", "fill-rule", "nonzero"], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], [1, "kt-link"], [1, "kt-iconbox__content"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--success", "kt-iconbox--animate-slow"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--warning", "kt-iconbox--animate-fast"], [1, "kt-drop-section"], [1, "row"], [1, "box-1", "expo", 2, "margin", "0 2px 4px 10px"], [1, "kt-section", "kt-drop-section"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "scFilter"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu", 2, "text-align", "left", "padding", "0"], [2, "width", "100%"], ["href", "javascript:;", 3, "click"], [1, "btnexport1"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], ["width", "5%;"], ["width", "35%;"], ["width", "40%;"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["billingaddress", ""], ["hqaddress", ""], ["class", "customer-list-view-info", 3, "ngClass", 4, "ngFor", "ngForAsync", "ngForOf"], ["colspan", "8", "style", "text-align: center;", 4, "ngIf"], ["id", "BuidUploadPop", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "myManFaContent"], [1, "modal-header", 2, "background-color", "aqua"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body", "my-Model-body"], [1, "ExcelUpladRule"], [1, "col-md-6", "llf"], [1, "uploaddd"], ["on", "", "target", "_blank", 1, "btn", "btn-brand", "text-white", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "col-md-6", "rrd"], ["on", "", "data-toggle", "modal", 1, "btn", "btn-brand", "text-white", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], ["BulkUpload", ""], [1, "SuccessSection"], [4, "ngFor", "ngForOf"], [1, "errorSection"], ["BulkUpload2", ""], ["on", "", 1, "btn", "btn-brand", "text-white", 3, "click"], [1, "la", "la-plus"], [1, "customer-list-view-info", 3, "ngClass"], ["width", "60px", "class", "img-thumbnail", "alt", "pic", 3, "title", "src", 4, "ngIf"], [2, "cursor", "pointer"], [1, "btn", "btn-label-primary"], ["href", "javascript:;", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "custom-switch", "custom-switch-label-yesno", "pl-0"], ["name", "x.Status", "type", "checkbox", 1, "custom-switch-input", "ng-valid", "ng-dirty", "ng-touched", 3, "id", "ngModel", "change", "ngModelChange"], ["x.Status", "ngModel"], [1, "custom-switch-btn", 3, "for"], [1, "padd-top-0"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "border", "#1dc9b7"], [1, "dropdown-menu"], ["width", "60px", "alt", "pic", 1, "img-thumbnail", 3, "title", "src"], ["colspan", "8", 2, "text-align", "center"], ["role", "alert", 1, "alert-alert-success"], ["role", "alert", 1, "alert-alert-danger"]], template: function CustomerListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomerListComponent_div_13_Template, 4, 0, "div", 11);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "polygon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Total Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "polygon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Active Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "g", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "polygon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Suspended Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h1", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Customer List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ul", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_a_click_88_listener() { return ctx.FilterCustomers("All Customers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "All Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_a_click_91_listener() { return ctx.FilterCustomers("Active Customers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Active Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_a_click_94_listener() { return ctx.FilterCustomers("Suspended Customers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Suspended Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_a_click_98_listener() { return ctx.exportAsXLSX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Export to Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "table", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Customer\u00A0Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Customer\u00A0info.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, CustomerListComponent_ng_content_113_Template, 1, 0, "ng-content", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, CustomerListComponent_ng_template_114_Template, 1, 0, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, CustomerListComponent_ng_template_116_Template, 1, 0, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "th", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, CustomerListComponent_tr_123_Template, 43, 27, "tr", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, CustomerListComponent_th_126_Template, 3, 0, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h4", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Customer Bulk Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Customer upload rules as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "1.) All * fields are mendatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "2.) Do not remove first row header of template file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "3.) Do not change header name.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Download sample data template...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Sample Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Select Excel sheet and upload...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_a_click_157_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](161); return _r8.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Bulk Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "input", 77, 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomerListComponent_Template_input_change_160_listener($event) { return ctx.BuldCustomerUpload($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](164, CustomerListComponent_ng_container_164_Template, 3, 1, "ng-container", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, CustomerListComponent_ng_container_166_Template, 3, 1, "ng-container", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Contact Person upload rules same as above:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Download sample data template...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Sample Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Select Excel sheet and upload...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerListComponent_Template_a_click_185_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](189); return _r11.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Bulk Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "input", 77, 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomerListComponent_Template_input_change_188_listener($event) { return ctx.BuldContactPersonUpload($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](192, CustomerListComponent_ng_container_192_Template, 3, 1, "ng-container", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](194, CustomerListComponent_ng_container_194_Template, 3, 1, "ng-container", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](115);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.CustomerCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalCustomerCount, " Total Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ActiveCustomerCount, " Active Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.SuspendedCustomerCount, " Suspended Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.dropdownbtnavgrev, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.EngineerType)("ngIfThen", _r4)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.CustomerLocalList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.CustomerLocalList === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.excelDataTemplatePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SuccessRes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ErrorRes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.excelDataTemplatePath2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SuccessRes2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ErrorRes2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: [".kt-widget4__item.contact-details-new-quote[_ngcontent-%COMP%]   span.fa.fa-user-circle[_ngcontent-%COMP%]{color:#ff8533}.kt-widget4__item.contact-details-new-quote[_ngcontent-%COMP%]   span.fa.fa-home[_ngcontent-%COMP%]{background-color:#ff8533}.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]   .kt-widget4__title[_ngcontent-%COMP%]:hover{color:#0089cd}.kt-portlet__body.create-new-client-portlet-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{margin-bottom:15px}.btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color:#ff8533}.customer_all[_ngcontent-%COMP%]{margin-bottom:15px}.customer_all[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   select.btn[_ngcontent-%COMP%]{background-color:#ff8533!important;color:#fff}.text-info[_ngcontent-%COMP%]{color:#fff}span.btn.btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa;color:#000}.customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c3e7fa!important}.kt-iconbox--wave[_ngcontent-%COMP%]{background-color:#ff853329;border:1px solid #ff8533}.kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{fill:#ff8533}.btn-group-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%] > .btn[_ngcontent-xmv-c1][_ngcontent-%COMP%], .btn-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%]{padding:.5rem .7rem}.table-checkable[_ngcontent-%COMP%]   .customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:.5rem .7rem}.kt-portlet__head.profile-details-info[_ngcontent-%COMP%]{display:none!important}.customer-listing-detail-section[_ngcontent-%COMP%]   ul.nav.nav-tabs.nav-tabs-line.nav-tabs-bold.nav-tabs-line-brand[_ngcontent-%COMP%]{background-color:#0084ca}.customer-listing-detail-section[_ngcontent-%COMP%]   ul.nav.nav-tabs.nav-tabs-line.nav-tabs-bold.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{color:#fff}.nav-tabs.nav-tabs-line.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.customer-listing-detail-section[_ngcontent-%COMP%]   .nav-tabs.nav-tabs-line.nav-tabs-line-brand.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-tabs.nav-tabs-line.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%], .nav-tabs.nav-tabs-line.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover, .nav-tabs.nav-tabs-line.nav-tabs-line-brand.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#0084ca!important}.nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#0084ca!important}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]{background-color:#ffebde}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]:after{border-left-color:#ffebde!important}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]   .kt-wizard-v2__nav-icon[_ngcontent-%COMP%]{color:#ff8533}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]{background-color:#0084ca}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]   .kt-portlet__head-label[_ngcontent-%COMP%]   .kt-portlet__head-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]   .kt-portlet__head-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff}.fade[_ngcontent-%COMP%]:not(.show){opacity:1}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;border-bottom:none;padding:20px 15px;background-color:#f1f1f1;margin-bottom:0}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(100%/5);border-right:1px solid #d6d6d6}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child(){border-right:0}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#e7e7e7;color:#000;font-size:14px;padding:10px 18px;text-align:center;display:block}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000;margin-right:10px;font-size:18px;text-align:center}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#21366b;color:#fff}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#fff}.tab-content[_ngcontent-%COMP%]{background-color:#fff;margin:15px;padding:15px;box-shadow:10px 10px 10px #e7e7e7;margin-top:0}.contact-bton[_ngcontent-%COMP%]   .btn-sm.btn.btn-label-info.btn-bold[_ngcontent-%COMP%]{display:block}.kt-portlet__body.create-new-client-portlet-body.create-new-property-details[_ngcontent-%COMP%]{background-color:#fff}.label[_ngcontent-%COMP%]{font-weight:600;color:#000}.accordion.accordion-toggle-svg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:1.5rem}.kt-section[_ngcontent-%COMP%]   .kt-section__heading[_ngcontent-%COMP%], .kt-section[_ngcontent-%COMP%]   .kt-section__title[_ngcontent-%COMP%]{font-size:1.5rem}.btn-sm.btn.btn-label-info.btn-bold[_ngcontent-%COMP%]{margin-top:25px}#menu3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:15px}.switcher-customer[_ngcontent-%COMP%]{top:-15px;position:relative}.kt-portlet__head-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px!important;color:#fff!important}.action-is-disabled[_ngcontent-%COMP%]{cursor:no-drop}.team-inner-1[_ngcontent-%COMP%]{margin-top:15px;padding:0 15px}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#000;display:inline-block;padding:8px 8px;background-color:#eaeaea;margin:0 3px 5px;border-radius:5px}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:40%;height:20;width:20}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size:10px;padding-left:8px;padding-top:6px}.customer-logo-container[_ngcontent-%COMP%]{position:relative;width:100%;max-width:100%}.customer-logo-container-image[_ngcontent-%COMP%]{display:block;width:100%;height:auto}.customer-logo-container-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;background:#000;background:rgba(0,0,0,.5);color:#f1f1f1;width:100%;transition:.5s ease;opacity:0;color:#fff;font-size:30px;padding:6px;text-align:center}.customer-logo-container[_ngcontent-%COMP%]:hover   .customer-logo-container-overlay[_ngcontent-%COMP%]{opacity:1}.box-1[_ngcontent-%COMP%]{display:inline-block;width:25%}.check-mark[_ngcontent-%COMP%]{margin-top:18px;position:relative}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.expo[_ngcontent-%COMP%]{float:right}.checkbox-downbox[_ngcontent-%COMP%]{position:absolute;bottom:-20px;background-color:#fff;padding:10px;border-radius:8px;width:131%;z-index:9}.txtSearchTicket[_ngcontent-%COMP%]{float:right;margin-top:10px;line-height:25px!important;padding:4px 24px;width:30%;border:none;border-radius:16px;background-color:#eaeaea}.dropdown-menu.show[_ngcontent-%COMP%]{margin-left:-105px}.myCOlsp[_ngcontent-%COMP%]{color:#000;font-size:21px;font-weight:600}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vY3VzdG9tZXJzL2N1c3RvbWVyLWFkZC9jdXN0b21lci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUUsYUFBYSxDQUFDLDREQUE0RCx3QkFBd0IsQ0FBQyx1REFBdUQsYUFBYSxDQUFDLCtEQUErRCxrQkFBa0IsQ0FBQyxXQUFXLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDLGNBQWMsa0JBQWtCLENBQUMsb0NBQW9DLGtDQUFrQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLFVBQVUsQ0FBQywyQkFBMkIsd0JBQXdCLENBQUMsVUFBVSxDQUFDLDJDQUEyQyx1QkFBdUIsQ0FBQyxrQkFBa0IsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLFlBQVksQ0FBQyxvRkFBb0YsbUJBQW1CLENBQUMsMERBQTBELG1CQUFtQixDQUFDLHVDQUF1QyxzQkFBc0IsQ0FBQyxpR0FBaUcsd0JBQXdCLENBQUMsNEdBQTRHLFVBQVUsQ0FBQyxpREFBaUQsVUFBVSxDQUFDLCtTQUErUyx1QkFBdUIsQ0FBQyx1RkFBdUYsdUJBQXVCLENBQUMsb0lBQW9JLHdCQUF3QixDQUFDLDBJQUEwSSxtQ0FBbUMsQ0FBQyw0SkFBNEosYUFBYSxDQUFDLGlFQUFpRSx3QkFBd0IsQ0FBQyxrSEFBa0gsVUFBVSxDQUFDLDRGQUE0RixVQUFVLENBQUMsaUJBQWlCLFNBQVMsQ0FBQyxrQkFBa0IsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsa0NBQWtDLGNBQWMsQ0FBQyx1QkFBdUIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMseUJBQXlCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsMkRBQTJELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywrREFBK0QsVUFBVSxDQUFDLGFBQWEscUJBQXFCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQ0FBaUMsQ0FBQyxZQUFZLENBQUMsa0RBQWtELGFBQWEsQ0FBQyw2RUFBNkUscUJBQXFCLENBQUMsT0FBTyxlQUFlLENBQUMsVUFBVSxDQUFDLCtEQUErRCxnQkFBZ0IsQ0FBQyxnRUFBZ0UsZ0JBQWdCLENBQUMsb0NBQW9DLGVBQWUsQ0FBQyxhQUFhLFlBQVksQ0FBQyxtQkFBbUIsU0FBUyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5Qix3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsY0FBYyxDQUFDLGNBQWMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsVUFBVSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUNBQWlDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsZ0VBQWdFLFNBQVMsQ0FBQyxPQUFPLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxZQUFZLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsVUFBVSxDQUFDLE1BQU0sV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLFdBQVcsQ0FBQyxlQUFlLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBb0Isa0JBQWtCLENBQUMsU0FBUyxVQUFVLENBQUMsY0FBYyxDQUFDLGVBQWUiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9jdXN0b21lcnMvY3VzdG9tZXItYWRkL2N1c3RvbWVyLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmt0LXdpZGdldDRfX2l0ZW0uY29udGFjdC1kZXRhaWxzLW5ldy1xdW90ZSBzcGFuLmZhLmZhLXVzZXItY2lyY2xle2NvbG9yOiNmZjg1MzN9Lmt0LXdpZGdldDRfX2l0ZW0uY29udGFjdC1kZXRhaWxzLW5ldy1xdW90ZSBzcGFuLmZhLmZhLWhvbWV7YmFja2dyb3VuZC1jb2xvcjojZmY4NTMzfS5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtIC5rdC13aWRnZXQ0X190aXRsZTpob3Zlcntjb2xvcjojMDA4OWNkfS5rdC1wb3J0bGV0X19ib2R5LmNyZWF0ZS1uZXctY2xpZW50LXBvcnRsZXQtYm9keSAuZm9ybS1jb250cm9se21hcmdpbi1ib3R0b206MTVweH0uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6I2ZmODUzM30uY3VzdG9tZXJfYWxse21hcmdpbi1ib3R0b206MTVweH0uY3VzdG9tZXJfYWxsIC5idG4tZ3JvdXAgc2VsZWN0LmJ0bntiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzMhaW1wb3J0YW50O2NvbG9yOiNmZmZ9LnRleHQtaW5mb3tjb2xvcjojZmZmfXNwYW4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6I2MzZTdmYTtjb2xvcjojMDAwfS5jdXN0b21lci1saXN0LXZpZXctaW5mbyAuYnRuLWdyb3VwIC5idG4gaXtjb2xvcjojYzNlN2ZhIWltcG9ydGFudH0ua3QtaWNvbmJveC0td2F2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzMyOTtib3JkZXI6MXB4IHNvbGlkICNmZjg1MzN9Lmt0LXN2Zy1pY29uIGcgW2ZpbGxde2ZpbGw6I2ZmODUzM30uYnRuLWdyb3VwLXNtW19uZ2NvbnRlbnQteG12LWMxXT4uYnRuW19uZ2NvbnRlbnQteG12LWMxXSwuYnRuLXNtW19uZ2NvbnRlbnQteG12LWMxXXtwYWRkaW5nOi41cmVtIC43cmVtfS50YWJsZS1jaGVja2FibGUgLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIC5idG4tZ3JvdXAgLmJ0bntwYWRkaW5nOi41cmVtIC43cmVtfS5rdC1wb3J0bGV0X19oZWFkLnByb2ZpbGUtZGV0YWlscy1pbmZve2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmN1c3RvbWVyLWxpc3RpbmctZGV0YWlsLXNlY3Rpb24gdWwubmF2Lm5hdi10YWJzLm5hdi10YWJzLWxpbmUubmF2LXRhYnMtYm9sZC5uYXYtdGFicy1saW5lLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRjYX0uY3VzdG9tZXItbGlzdGluZy1kZXRhaWwtc2VjdGlvbiB1bC5uYXYubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1ib2xkLm5hdi10YWJzLWxpbmUtYnJhbmQgYS5uYXYtbGlua3tjb2xvcjojZmZmfS5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi5uYXYtdGFicyAubmF2LWxpbmsgaXtjb2xvcjojZmZmfS5jdXN0b21lci1saXN0aW5nLWRldGFpbC1zZWN0aW9uIC5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi10YWJzLWxpbmUtYnJhbmQubmF2Lm5hdi10YWJzIC5uYXYtbGluazpob3ZlciwubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1saW5lLWJyYW5kIGEubmF2LWxpbmsuYWN0aXZlLC5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi10YWJzLWxpbmUtYnJhbmQgYS5uYXYtbGluazpob3ZlciwubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1saW5lLWJyYW5kLm5hdi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle2NvbG9yOiMwMDg0Y2EhaW1wb3J0YW50fS5uYXYtdGFicy5uYXYtdGFicy1saW5lIGEubmF2LWxpbmsuYWN0aXZlIGksLm5hdi10YWJzLm5hdi10YWJzLWxpbmUgYS5uYXYtbGluazpob3ZlciBpe2NvbG9yOiMwMDg0Y2EhaW1wb3J0YW50fS5rdC13aXphcmQtdjIgLmt0LXdpemFyZC12Ml9fYXNpZGUgLmt0LXdpemFyZC12Ml9fbmF2IC5rdC13aXphcmQtdjJfX25hdi1pdGVtcyAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbVtkYXRhLWt0d2l6YXJkLXN0YXRlPWN1cnJlbnRde2JhY2tncm91bmQtY29sb3I6I2ZmZWJkZX0ua3Qtd2l6YXJkLXYyIC5rdC13aXphcmQtdjJfX2FzaWRlIC5rdC13aXphcmQtdjJfX25hdiAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbXMgLmt0LXdpemFyZC12Ml9fbmF2LWl0ZW1bZGF0YS1rdHdpemFyZC1zdGF0ZT1jdXJyZW50XTphZnRlcntib3JkZXItbGVmdC1jb2xvcjojZmZlYmRlIWltcG9ydGFudH0ua3Qtd2l6YXJkLXYyIC5rdC13aXphcmQtdjJfX2FzaWRlIC5rdC13aXphcmQtdjJfX25hdiAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbXMgLmt0LXdpemFyZC12Ml9fbmF2LWl0ZW1bZGF0YS1rdHdpemFyZC1zdGF0ZT1jdXJyZW50XSAua3Qtd2l6YXJkLXYyX19uYXYtaWNvbntjb2xvcjojZmY4NTMzfS5rdC1wb3J0bGV0X19oZWFkLmt0LXBvcnRsZXRfX2hlYWQtLWxnLmNvbnRhY3RfZGV0YWlsX3RhYmxlX2luZm97YmFja2dyb3VuZC1jb2xvcjojMDA4NGNhfS5rdC1wb3J0bGV0X19oZWFkLmt0LXBvcnRsZXRfX2hlYWQtLWxnLmNvbnRhY3RfZGV0YWlsX3RhYmxlX2luZm8gLmt0LXBvcnRsZXRfX2hlYWQtbGFiZWwgLmt0LXBvcnRsZXRfX2hlYWQtaWNvbiBpe2NvbG9yOiNmZmZ9Lmt0LXBvcnRsZXRfX2hlYWQua3QtcG9ydGxldF9faGVhZC0tbGcuY29udGFjdF9kZXRhaWxfdGFibGVfaW5mbyAua3QtcG9ydGxldF9faGVhZC1sYWJlbCBoM3tjb2xvcjojZmZmfS5mYWRlOm5vdCguc2hvdyl7b3BhY2l0eToxfS5jdXN0b21lci1mb3JtIHVse3dpZHRoOjEwMCU7Ym9yZGVyLWJvdHRvbTpub25lO3BhZGRpbmc6MjBweCAxNXB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTttYXJnaW4tYm90dG9tOjB9LmN1c3RvbWVyLWZvcm0gdWwgbGl7d2lkdGg6Y2FsYygxMDAlLzUpO2JvcmRlci1yaWdodDoxcHggc29saWQgI2Q2ZDZkNn0uY3VzdG9tZXItZm9ybSB1bCBsaTpsYXN0LWNoaWxkKCl7Ym9yZGVyLXJpZ2h0OjB9LmN1c3RvbWVyLWZvcm0gdWwgbGkgYXtiYWNrZ3JvdW5kOiNlN2U3ZTc7Y29sb3I6IzAwMDtmb250LXNpemU6MTRweDtwYWRkaW5nOjEwcHggMThweDt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmJsb2NrfS5jdXN0b21lci1mb3JtIHVsIGxpIGEgaXtjb2xvcjojMDAwO21hcmdpbi1yaWdodDoxMHB4O2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyfS5jdXN0b21lci1mb3JtIHVsIGxpIGEuYWN0aXZlLC5jdXN0b21lci1mb3JtIHVsIGxpIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjEzNjZiO2NvbG9yOiNmZmZ9LmN1c3RvbWVyLWZvcm0gdWwgbGkgYS5hY3RpdmUgaSwuY3VzdG9tZXItZm9ybSB1bCBsaSBhOmhvdmVyIGl7Y29sb3I6I2ZmZn0udGFiLWNvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO21hcmdpbjoxNXB4O3BhZGRpbmc6MTVweDtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNlN2U3ZTc7bWFyZ2luLXRvcDowfS5jb250YWN0LWJ0b24gLmJ0bi1zbS5idG4uYnRuLWxhYmVsLWluZm8uYnRuLWJvbGR7ZGlzcGxheTpibG9ja30ua3QtcG9ydGxldF9fYm9keS5jcmVhdGUtbmV3LWNsaWVudC1wb3J0bGV0LWJvZHkuY3JlYXRlLW5ldy1wcm9wZXJ0eS1kZXRhaWxze2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubGFiZWx7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiMwMDB9LmFjY29yZGlvbi5hY2NvcmRpb24tdG9nZ2xlLXN2ZyAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGV7Zm9udC1zaXplOjEuNXJlbX0ua3Qtc2VjdGlvbiAua3Qtc2VjdGlvbl9faGVhZGluZywua3Qtc2VjdGlvbiAua3Qtc2VjdGlvbl9fdGl0bGV7Zm9udC1zaXplOjEuNXJlbX0uYnRuLXNtLmJ0bi5idG4tbGFiZWwtaW5mby5idG4tYm9sZHttYXJnaW4tdG9wOjI1cHh9I21lbnUzIC5jYXJke3BhZGRpbmc6MTVweH0uc3dpdGNoZXItY3VzdG9tZXJ7dG9wOi0xNXB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5rdC1wb3J0bGV0X19oZWFkLWljb24gaXtmb250LXNpemU6MThweCFpbXBvcnRhbnQ7Y29sb3I6I2ZmZiFpbXBvcnRhbnR9LmFjdGlvbi1pcy1kaXNhYmxlZHtjdXJzb3I6bm8tZHJvcH0udGVhbS1pbm5lci0xe21hcmdpbi10b3A6MTVweDtwYWRkaW5nOjAgMTVweH0udGVhbS1pbm5lci0xIHVse3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1ib3R0b206MH0udGVhbS1pbm5lci0xIHVsIGxpe2NvbG9yOiMwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzo4cHggOHB4O2JhY2tncm91bmQtY29sb3I6I2VhZWFlYTttYXJnaW46MCAzcHggNXB4O2JvcmRlci1yYWRpdXM6NXB4fS50ZWFtLWlubmVyLTEgdWwgbGkgaW1ne2JvcmRlci1yYWRpdXM6NDAlO2hlaWdodDoyMDt3aWR0aDoyMH0udGVhbS1pbm5lci0xIHVsIGxpIC5jbG9zZXtmb250LXNpemU6MTBweDtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctdG9wOjZweH0uY3VzdG9tZXItbG9nby1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJX0uY3VzdG9tZXItbG9nby1jb250YWluZXItaW1hZ2V7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDphdXRvfS5jdXN0b21lci1sb2dvLWNvbnRhaW5lci1vdmVybGF5e3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2JhY2tncm91bmQ6IzAwMDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO2NvbG9yOiNmMWYxZjE7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOi41cyBlYXNlO29wYWNpdHk6MDtjb2xvcjojZmZmO2ZvbnQtc2l6ZTozMHB4O3BhZGRpbmc6NnB4O3RleHQtYWxpZ246Y2VudGVyfS5jdXN0b21lci1sb2dvLWNvbnRhaW5lcjpob3ZlciAuY3VzdG9tZXItbG9nby1jb250YWluZXItb3ZlcmxheXtvcGFjaXR5OjF9LmJveC0xe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjI1JX0uY2hlY2stbWFya3ttYXJnaW4tdG9wOjE4cHg7cG9zaXRpb246cmVsYXRpdmV9LnNlYXJjaC1iYXIgaW5wdXR7d2lkdGg6MTAwJX0uZXhwb3tmbG9hdDpyaWdodH0uY2hlY2tib3gtZG93bmJveHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206LTIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjhweDt3aWR0aDoxMzElO3otaW5kZXg6OX0udHh0U2VhcmNoVGlja2V0e2Zsb2F0OnJpZ2h0O21hcmdpbi10b3A6MTBweDtsaW5lLWhlaWdodDoyNXB4IWltcG9ydGFudDtwYWRkaW5nOjRweCAyNHB4O3dpZHRoOjMwJTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZWFlYWVhfS5kcm9wZG93bi1tZW51LnNob3d7bWFyZ2luLWxlZnQ6LTEwNXB4fS5teUNPbHNwe2NvbG9yOiMwMDA7Zm9udC1zaXplOjIxcHg7Zm9udC13ZWlnaHQ6NjAwfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customers',
                templateUrl: './customer-list.component.html',
                styleUrls: ['../customer-add/customer-add.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }, { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_8__["DownloadService"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_9__["UserlogService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__["GenicProfileService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: false }]
        }], BulkUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['BulkUpload', { static: false }]
        }], BulkUpload2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['BulkUpload2', { static: false }]
        }] }); })();


/***/ }),

/***/ "lbdE":
/*!**************************************************************************************!*\
  !*** ./src/app/application/customers/customer-details/customer-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/property.service */ "Pffd");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/quote.service */ "uOqW");
/* harmony import */ var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/invoice.service */ "py7r");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _generic_utils_Quote_Status_Component_QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../generic-utils/Quote-Status-Component/QuoteStatusComponent.component */ "sVpj");
/* harmony import */ var _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.component */ "myuM");
/* harmony import */ var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */ "X7qY");
/* harmony import */ var _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Team-List/TicketTeamList.component */ "U6ah");


















function CustomerDetailsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polygon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total Invoiced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.TotalInvoiced, " Total Invoiced ");
} }
function CustomerDetailsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polygon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total Open Quotes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.TotalQuotes, " Open Quotes ");
} }
function CustomerDetailsComponent_a_126_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailsComponent_a_126_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.toggletab("Quotes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Quotes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_a_127_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailsComponent_a_127_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.toggletab("Invoices"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Invoices ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_ng_content_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "currentUser.Permissions.EngineerType; then hqaddress; else billingaddress"]);
} }
function CustomerDetailsComponent_ng_template_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "BILLING ADDRESS");
} }
function CustomerDetailsComponent_ng_template_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "HQ ADDRESS");
} }
function CustomerDetailsComponent_li_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Generate Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_img_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 133);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r11.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerDetailsComponent_div_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r12.service.formData.CustomerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerDetailsComponent_ng_template_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Yes ");
} }
function CustomerDetailsComponent_ng_template_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No ");
} }
function CustomerDetailsComponent_ng_template_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Yes ");
} }
function CustomerDetailsComponent_ng_template_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No ");
} }
function CustomerDetailsComponent_ng_template_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Yes ");
} }
function CustomerDetailsComponent_ng_template_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No ");
} }
function CustomerDetailsComponent_ng_template_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Yes ");
} }
function CustomerDetailsComponent_ng_template_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No ");
} }
function CustomerDetailsComponent_ng_template_216_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_ng_template_217_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Suspended");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_li_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r38.SMTPName);
} }
function CustomerDetailsComponent_tr_246_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Primary ", x_r39.Type, " ");
} }
function CustomerDetailsComponent_tr_246_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Secondary ", x_r39.Type, " ");
} }
function CustomerDetailsComponent_tr_246_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomerDetailsComponent_tr_246_span_6_Template, 2, 1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerDetailsComponent_tr_246_span_7_Template, 2, 1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r40 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r39.Key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r39.IsDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !x_r39.IsDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r39.Value, " ");
} }
function CustomerDetailsComponent_255_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Billing Addresses");
} }
function CustomerDetailsComponent_255_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomerDetailsComponent_255_ng_template_0_Template, 1, 0, "ng-template");
} }
function CustomerDetailsComponent_256_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "HQ Addresses ");
} }
function CustomerDetailsComponent_256_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomerDetailsComponent_256_ng_template_0_Template, 1, 0, "ng-template");
} }
function CustomerDetailsComponent_tr_308_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_tr_308_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_tr_308_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerDetailsComponent_tr_308_span_10_Template, 2, 0, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomerDetailsComponent_tr_308_span_11_Template, 3, 0, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r47 = ctx.$implicit;
    const i_r48 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r48 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", x_r47.NameTitle, " ", x_r47.FirstName, " ", x_r47.LastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r47.Phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r47.Email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r47.IsDefaultContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !x_r47.IsDefaultContact);
} }
function CustomerDetailsComponent_div_309_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailsComponent_div_309_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.resetpassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Generate Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Note: Please click below on Generate password & share it with ", ctx_r28.service.formData.CompanyName, ".");
} }
function CustomerDetailsComponent_div_326_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Property not added yet ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_table_327_tr_10_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_table_327_tr_10_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_table_327_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerDetailsComponent_table_327_tr_10_p_7_Template, 3, 0, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomerDetailsComponent_table_327_tr_10_p_8_Template, 3, 0, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", x_r54.CustomerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r54.PropertyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", x_r54.AddressStreet1, " ", x_r54.AddressStreet2, " ", x_r54.AddressUnitNo, " ", x_r54.AddressZipCode, " ", x_r54.AddressCountry, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r54.IsActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !x_r54.IsActive);
} }
function CustomerDetailsComponent_table_327_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Prop# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerDetailsComponent_table_327_tr_10_Template, 9, 9, "tr", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.propertiesservice.Propertylist);
} }
function CustomerDetailsComponent_tr_356_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r57.InvoiceId);
} }
function CustomerDetailsComponent_tr_356_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailsComponent_tr_356_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const q_r57 = ctx.$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.getQuoteDetails(q_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomerDetailsComponent_tr_356_span_6_Template, 2, 1, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "generic-quote-status", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function CustomerDetailsComponent_tr_356_Template_generic_quote_status_StatusChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const q_r57 = ctx.$implicit; return q_r57.Status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r57.QuoteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !q_r57.InvoiceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, q_r57.CreatedUtcDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r57.JobTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r57.NetAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", q_r57.Status);
} }
function CustomerDetailsComponent_tr_387_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r64.SendOutStatus, " ");
} }
function CustomerDetailsComponent_tr_387_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r64.Status, " ");
} }
function CustomerDetailsComponent_tr_387_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r64.Status, " ");
} }
function CustomerDetailsComponent_tr_387_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailsComponent_tr_387_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const i_r64 = ctx.$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.getInvoiceDetails(i_r64); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SGD 7.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CustomerDetailsComponent_tr_387_span_15_Template, 3, 1, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CustomerDetailsComponent_tr_387_span_16_Template, 3, 1, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomerDetailsComponent_tr_387_span_17_Template, 3, 1, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r64.InvoiceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, i_r64.InvoiceDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r64.InvoiceTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r64.NetAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r64.Status === "SendOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r64.Status === "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r64.Status === "cancelled");
} }
function CustomerDetailsComponent_table_402_tr_14_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailsComponent_table_402_tr_14_span_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const x_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.viewQuoteDetails(x_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r76.QuoteId, "");
} }
function CustomerDetailsComponent_table_402_tr_14_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recurring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_table_402_tr_14_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UNALLOCATED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_table_402_tr_14_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RESECHEDULED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_table_402_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailsComponent_table_402_tr_14_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const x_r76 = ctx.$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.ViewTicketDetails(x_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomerDetailsComponent_table_402_tr_14_span_6_Template, 4, 1, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerDetailsComponent_table_402_tr_14_span_7_Template, 2, 0, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "generic-ticket-date-time-format", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("AChange", function CustomerDetailsComponent_table_402_tr_14_Template_generic_ticket_date_time_format_AChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const x_r76 = ctx.$implicit; return x_r76.AppointmentStart = $event; })("BChange", function CustomerDetailsComponent_table_402_tr_14_Template_generic_ticket_date_time_format_BChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const x_r76 = ctx.$implicit; return x_r76.AppointmentEnd = $event; })("CChange", function CustomerDetailsComponent_table_402_tr_14_Template_generic_ticket_date_time_format_CChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const x_r76 = ctx.$implicit; return x_r76.CreatedUtcDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerDetailsComponent_table_402_tr_14_span_10_Template, 2, 0, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomerDetailsComponent_table_402_tr_14_span_11_Template, 2, 0, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "generic-ticket-status", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function CustomerDetailsComponent_table_402_tr_14_Template_generic_ticket_status_StatusChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const x_r76 = ctx.$implicit; return x_r76.Status = $event; })("OverDueDaysChange", function CustomerDetailsComponent_table_402_tr_14_Template_generic_ticket_status_OverDueDaysChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const x_r76 = ctx.$implicit; return x_r76.OverDueDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "generic-ticket-team-list", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("TicketTeamsChange", function CustomerDetailsComponent_table_402_tr_14_Template_generic_ticket_team_list_TicketTeamsChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const x_r76 = ctx.$implicit; return x_r76.TicketTeams = $event; })("localPrependUrlChange", function CustomerDetailsComponent_table_402_tr_14_Template_generic_ticket_team_list_localPrependUrlChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r94.localPrependUrl = $event; })("ReallocateChange", function CustomerDetailsComponent_table_402_tr_14_Template_generic_ticket_team_list_ReallocateChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const x_r76 = ctx.$implicit; return x_r76.Reallocate = $event; })("IdChange", function CustomerDetailsComponent_table_402_tr_14_Template_generic_ticket_team_list_IdChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const x_r76 = ctx.$implicit; return x_r76.Id = $event; })("TicketIdChange", function CustomerDetailsComponent_table_402_tr_14_Template_generic_ticket_team_list_TicketIdChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const x_r76 = ctx.$implicit; return x_r76.TicketId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r76 = ctx.$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r76.TicketId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r76.QuoteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r76.TicketType === "Recurring Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("A", x_r76.AppointmentStart)("B", x_r76.AppointmentEnd)("C", x_r76.CreatedUtcDate)("T", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r76.OneOffAppointmentDate === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r76.Rescheduled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r76.CustomerAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", x_r76.Status)("OverDueDays", x_r76.OverDueDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("TicketTeams", x_r76.TicketTeams)("localPrependUrl", ctx_r73.localPrependUrl)("Reallocate", x_r76.Reallocate)("Id", x_r76.Id)("TicketId", x_r76.TicketId);
} }
function CustomerDetailsComponent_table_402_td_17_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Record!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDetailsComponent_table_402_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerDetailsComponent_table_402_td_17_i_1_Template, 2, 0, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.ticketservice.TicketLocalList);
} }
function CustomerDetailsComponent_table_402_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 186);
} }
function CustomerDetailsComponent_table_402_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomerDetailsComponent_table_402_tr_14_Template, 18, 17, "tr", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomerDetailsComponent_table_402_td_17_Template, 2, 1, "td", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomerDetailsComponent_table_402_td_18_Template, 1, 0, "td", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r33.currentUser.Ticket, "\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r33.currentUser.Ticket, " Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.currentUser.Engineer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.ticketservice.Ticketlist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.ticketservice.Ticketlist.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.ticketservice.Ticketlist.length > 0);
} }
const _c0 = ["*"];
class CustomerDetailsComponent {
    constructor(titleService, service, propertiesservice, ticketservice, quotesservice, invoiveservice, router, logService, loginservice) {
        this.titleService = titleService;
        this.service = service;
        this.propertiesservice = propertiesservice;
        this.ticketservice = ticketservice;
        this.quotesservice = quotesservice;
        this.invoiveservice = invoiveservice;
        this.router = router;
        this.logService = logService;
        this.loginservice = loginservice;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.propertyCount = 0;
        this.quotesCount = 0;
        this.invoicesCount = 0;
        this.ticketCount = 0;
        this.TotalQuotes = 0;
        this.TotalInvoiced = 0;
        this.TotalTicket = 0;
        this.TotalOpenTickets = 0;
        this.TotalClosed = 0;
        this.TotalOverDue = 0;
        this.propertiesservice.Propertylist = [];
        this.quotesservice.QuoteList = [];
        this.invoiveservice.InvoiceList = [];
        this.ticketservice.Ticketlist = [];
    }
    ngOnInit() {
        if (!this.currentUser.Permissions.CustomerView) {
            this.router.navigate(['/dashboard']);
        }
        this.titleService.setTitle('Customer Details | Genic Solution');
        const Id = window.location.pathname.split('/').pop();
        this.service.getCustomerByIdSync(this.currentUser.Token, Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.service.formData = response.result;
                    this.propertiesservice.refrestPropertylistCustomerWise(this.currentUser.Token, this.service.formData.Id).subscribe(res => {
                        if (res) {
                            const response = res;
                            if (response.Message === 'success') {
                                this.propertiesservice.Propertylist = this.propertiesservice.locallist = response.result;
                            }
                        }
                    }, error => console.log(error));
                    this.quotesservice.refrestQuoteListByCustomer(this.service.formData.Id);
                    this.invoiveservice.refrestInvoiceListByCustomer(this.service.formData.Id);
                    this.ticketservice.refrestTicketListByCustomer(this.service.formData.Id);
                }
            }
        }, error => console.log(error));
        setTimeout(() => {
            this.propertyCount = this.propertiesservice.Propertylist.length;
            this.invoicesCount = this.invoiveservice.InvoiceList.length;
            this.quotesCount = this.quotesservice.QuoteList.length;
            this.ticketCount = this.ticketservice.Ticketlist.length;
            this.TotalQuotes = this.quotesservice.QuoteList.filter(x => x.Status === 1).length;
            this.TotalInvoiced = this.invoicesCount;
            this.TotalTicket = this.ticketCount;
            this.TotalOpenTickets = this.ticketservice.Ticketlist.filter(x => x.Status === 'UPCOMING' || x.Status === 'OVERDUE' || x.Status === 'INPROGRESS' || x.Status === 'HOLD').length;
            this.TotalClosed = this.ticketservice.Ticketlist.filter(x => x.Status === 'CLOSED').length;
            this.TotalOverDue = this.ticketservice.Ticketlist.filter(x => x.Status === 'OVERDUE').length;
        }, 2000);
    }
    getQuoteDetails(q) {
        this.quotesservice.QuoteData = q;
        this.router.navigate(['/quotes/quote-Details']);
    }
    getInvoiceDetails(i) {
        this.invoiveservice.InvoiceData = i;
        this.router.navigate(['/invoices/invoice-details']);
    }
    ViewTicketDetails(x) {
        this.ticketservice.formData = Object.assign({}, x);
        this.router.navigate(['/tickets/ticket-view-detail']);
    }
    viewQuoteDetails(x) {
        this.quotesservice.getQuoteDetails(x.TicketConvertedID)
            .subscribe(res => {
            if (res) {
                let obj = new Object();
                obj = res;
                this.quotesservice.QuoteData = obj;
                this.quotesservice.getQuoteItems(this.currentUser.Token, x.TicketConvertedID).subscribe(res => {
                    if (res) {
                        const response = res;
                        if (response.Message === 'success') {
                            this.quotesservice.QuoteItemList = response.result;
                        }
                    }
                }, error => console.log(error));
                this.quotesservice.getQuoteAttachments(x.TicketConvertedID);
                setTimeout(() => {
                    this.router.navigate(['/quotes/quote-Details']);
                }, 1000);
            }
        }, error => console.log(error));
    }
    toggletab(x) {
        let demoClasses = null;
        demoClasses = document.querySelectorAll('.customer-details-dynamic-class-tab');
        demoClasses.forEach(element => {
            if (element.name === x) {
                element.setAttribute('data-ktwizard-state', 'current');
            }
            else {
                element.setAttribute('data-ktwizard-state', 'step-content');
            }
        });
        demoClasses = document.querySelectorAll('.customer-details-dynamic-class');
        demoClasses.forEach(element => {
            if (element.id === x) {
                element.setAttribute('data-ktwizard-state', 'current');
            }
            else {
                element.setAttribute('data-ktwizard-state', 'step-content');
            }
        });
    }
    resetpassword() {
        const tempname = this.service.formData.CompanyName;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'keep it?',
            text: 'Are you sure you want to generate a password for ' + tempname + '?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            confirmButtonText: 'Cancel',
            cancelButtonColor: 'green',
            cancelButtonText: 'Continue',
        }).then((result) => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Keep it!',
                    text: 'Action is dismissed',
                    type: 'info',
                    timer: 2000
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                this.service.CustomerPasswordReset(this.service.formData.Id, this.currentUser.Token).subscribe(res => {
                    let response = res;
                    if (response.Message === 'success') {
                        /// logs
                        const des = 'An customer : ' + tempname + ', Customer Id : ' + this.service.formData.CustomerId +
                            ', is password reset by user : ' + this.currentUser.UserName;
                        const Activity = 'Password reset of ' + this.currentUser.Engineer.toLowerCase() + ' : ' + tempname + ' is successfully ';
                        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Engineer, this.service.formData.Id, 'Modify', des, Activity).subscribe();
                        /// logs
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Done!',
                            showConfirmButton: false,
                            text: 'Password is generated successfully.',
                            type: 'success',
                            timer: 2000,
                        });
                        setTimeout(() => {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                title: 'Done!',
                                text: 'For ' + this.service.formData.CustomerId + ' new password is "' + response.MessageDescription + '"',
                                type: 'success',
                            });
                        }, 2100);
                    }
                    else if (response.Message === 'failure') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Done!',
                            text: 'Your Token is expire, please try againg after login',
                            type: 'warning',
                            timer: 10000,
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Error!',
                            text: res.toString(),
                            type: 'warning',
                        });
                    }
                }, error => console.log(error));
            }
        });
    }
}
CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) { return new (t || CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_5__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_7__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_8__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_10__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"])); };
CustomerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerDetailsComponent, selectors: [["app-customer-details"]], ngContentSelectors: _c0, decls: 403, vars: 59, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/customers", 1, "kt-subheader__breadcrumbs-link"], [1, "customer-listing-detail-section"], [1, "col-md-12"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "kt-portlet__head-toolbar"], ["onclick", "window.history.back()", 1, "btn", "btn-primary", 2, "margin-right", "3px", "color", "white", "padding", "6px 10px 7px 10px", "cursor", "pointer"], [1, "kt-portlet__body"], [1, "kt-widget19__wrapper"], [1, "kt-widget19__content"], [1, "kt-widget19__userpic"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--wave"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Shape", "points", "0 0 24 0 24 24 0 24"], ["d", "M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z", "id", "Mask", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], ["d", "M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z", "id", "Mask-Copy", "fill", "#000000", "fill-rule", "nonzero"], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], [1, "kt-link"], [1, "kt-iconbox__content"], [1, "col-xl-12", "col-lg-12", "no-spacing"], [1, "kt-portlet", "kt-portlet--tabs", "kt-portlet--height-fluid"], [1, "kt-widget11"], [1, ""], [1, "kt-section__content"], ["id", "kt_wizard_v2", "data-ktwizard-state", "step-first", 1, "kt-grid", "kt-wizard-v2", "kt-wizard-v2--white"], ["wizard", ""], [1, "kt-grid__item", "kt-wizard-v2__aside"], [1, "kt-wizard-v2__nav"], [1, "kt-portlet__head", "profile-details-info"], [1, "dropdown", "dropdown-inline"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-clean", "btn-sm", "btn-icon-md", "btn-icon"], [1, "kt-wizard-v2__nav-items"], ["href", "javascript:;", "name", "Profile", "data-ktwizard-type", "step", "data-ktwizard-state", "current", 1, "kt-wizard-v2__nav-item", "customer-details-dynamic-class-tab", 3, "click"], [1, "kt-wizard-v2__nav-body"], [1, "kt-wizard-v2__nav-icon"], [1, "flaticon-profile-1"], [1, "kt-wizard-v2__nav-label"], [1, "kt-wizard-v2__nav-label-title"], ["id", "tabProperties", "href", "javascript:;", "name", "Properties", "data-ktwizard-type", "step", 1, "kt-wizard-v2__nav-item", "customer-details-dynamic-class-tab", 3, "click"], [1, "flaticon-buildings"], ["class", "kt-wizard-v2__nav-item customer-details-dynamic-class-tab", "href", "javascript:;", "name", "Quotes", "data-ktwizard-type", "step", 3, "click", 4, "ngIf"], ["class", "kt-wizard-v2__nav-item customer-details-dynamic-class-tab", "href", "javascript:;", "name", "Invoices", "data-ktwizard-type", "step", 3, "click", 4, "ngIf"], ["href", "javascript:;", "name", "Tickets", "data-ktwizard-type", "step", 1, "kt-wizard-v2__nav-item", "customer-details-dynamic-class-tab", 3, "click"], [1, "flaticon2-browser-2"], [1, "kt-grid__item", "kt-grid__item--fluid", "kt-wizard-v2__wrapper"], ["data-ktwizard-type", "step-content", "id", "Profile", "name", "Profile", "data-ktwizard-state", "current", 1, "kt-wizard-v2__content", "customer-details-dynamic-class"], [1, "kt-form__section", "kt-form__section--first"], [1, "kt-portlet__body", "tabing_kt_portlet_body"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-line", "nav-tabs-bold", "nav-tabs-line-3x", "nav-tabs-line-brand"], [1, "nav-item"], ["data-toggle", "tab", "href", "#kt_tabs_3_1", 1, "nav-link", "active"], [1, "flaticon-customer"], ["data-toggle", "tab", "href", "#kt_tabs_3_2", 1, "nav-link"], [1, "flaticon2-delivery-truck"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["billingaddress", ""], ["hqaddress", ""], ["data-toggle", "tab", "href", "#kt_tabs_3_4", 1, "nav-link"], [1, "fa", "fa-users"], ["class", "nav-item", 4, "ngIf"], [1, "tab-content"], ["id", "kt_tabs_3_1", "role", "tabpanel", 1, "tab-pane", "active"], [1, "kt-wizard-v2__form"], [1, "row"], [1, "col-md-4"], ["width", "260px", "style", "border-radius: 50%;", "class", "img-thumbnail", 3, "src", 4, "ngIf"], ["class", "upload-image", 4, "ngIf"], [1, "col-md-8"], [1, "table", "table-bodered", "tbl-cust-dt"], ["width", "60%;"], ["width", "40%;"], [3, "ngIf"], [1, "scTicketissueType"], [4, "ngFor", "ngForOf"], [1, "table-responsive"], [1, "table", "table-striped", "properies-table-info", "ng-star-inserted"], ["id", "kt_tabs_3_2", "role", "tabpanel", 1, "tab-pane"], [1, "kt-portlet"], [1, "kt-portlet__head", "billing_shipping_head"], [1, "col-md-6"], [4, "ngIf"], ["id", "kt_tabs_3_4", "role", "tabpanel", 1, "tab-pane"], [1, "col-sm-12"], ["class", "tab-pane", "id", "kt_tabs_3_5", "role", "tabpanel", 4, "ngIf"], ["id", "Properties", "name", "Properties", "data-ktwizard-type", "step-content", 1, "kt-wizard-v2__content", "customer-details-dynamic-class"], [1, "kt-portlet", "kt-portlet--mobile"], [1, "kt-portlet__head", "kt-portlet__head--lg", "contact_detail_table_info"], [1, "kt-portlet__head-icon"], [1, "kt-font-brand", "flaticon-buildings"], [1, "kt-portlet__body", "properties_filter_body"], [1, "kt-form", "kt-form--label-right", "kt-margin-b-30"], [1, "row", "align-items-center"], [1, "col-xl-12", "order-2", "order-xl-1"], [1, "col-md-12", "kt-margin-b-20-tablet-and-mobile"], [1, "kt-input-icon", "kt-input-icon--left"], ["class", " col-md-12 alert alert-info", 4, "ngIf"], ["class", "table table-striped properies-table-info ng-star-inserted", 4, "ngIf"], ["id", "Quotes", "name", "Quotes", "data-ktwizard-type", "step-content", 1, "kt-wizard-v2__content", "customer-details-dynamic-class"], [1, "kt-font-brand", "flaticon2-quotation-mark"], [1, "kt-section"], [1, "kt-section__content", "table-responsive"], ["role", "row"], ["width", "52px"], ["class", "quote-list-view-info odd", "role", "row", 4, "ngFor", "ngForOf"], ["id", "Invoices", "name", "Invoices", "data-ktwizard-type", "step-content", 1, "kt-wizard-v2__content", "customer-details-dynamic-class"], [1, "kt-font-brand", "flaticon-file-2"], ["class", "invoice-list-view-info odd", "role", "row", 4, "ngFor", "ngForOf"], ["id", "Tickets", "name", "Tickets", "data-ktwizard-type", "step-content", 1, "kt-wizard-v2__content", "customer-details-dynamic-class"], [1, "kt-font-brand", "flaticon2-browser-2"], ["href", "javascript:;", "name", "Quotes", "data-ktwizard-type", "step", 1, "kt-wizard-v2__nav-item", "customer-details-dynamic-class-tab", 3, "click"], [1, "flaticon2-quotation-mark"], ["href", "javascript:;", "name", "Invoices", "data-ktwizard-type", "step", 1, "kt-wizard-v2__nav-item", "customer-details-dynamic-class-tab", 3, "click"], [1, "flaticon-file-2"], ["data-toggle", "tab", "href", "#kt_tabs_3_5", 1, "nav-link"], [1, "flaticon-lock"], ["width", "260px", 1, "img-thumbnail", 2, "border-radius", "50%", 3, "src"], [1, "upload-image"], [1, "btn", "btn-label-success", "btn-pill", "reallocated-one"], [1, "btn", "btn-label-danger", "btn-pill", "invoices-btn"], ["class", "kt-badge kt-badge--brand kt-badge--inline kt-badge--pill", 4, "ngIf"], ["class", "kt-badge kt-badge--success kt-badge--inline kt-badge--pill", 4, "ngIf"], [1, "kt-badge", "kt-badge--brand", "kt-badge--inline", "kt-badge--pill"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "kt-badge--pill"], ["class", "kt-badge kt-badge--warning kt-badge--inline kt-badge--pill", 4, "ngIf"], [1, "kt-badge", "kt-badge--warning", "kt-badge--inline", "kt-badge--pill"], ["href", "javascript:;"], ["id", "kt_tabs_3_5", "role", "tabpanel", 1, "tab-pane"], [1, "text-danger"], [1, "clearfix"], [1, "new-request-footer-bottom", "pull-right"], [1, "btn-group"], ["href", "javascript:;", 1, "btn", "btn-warning", 3, "click"], [1, "col-md-12", "alert", "alert-info"], ["width", "76px"], ["class", "customer-list-view-info", 3, "id", 4, "ngFor", "ngForOf"], [1, "customer-list-view-info", 3, "id"], [1, "btn", "btn-label-primary"], [1, "kt-font-bold", "kt-font-success"], [1, "kt-font-bold", "kt-font-danger"], ["role", "row", 1, "quote-list-view-info", "odd"], ["tabindex", "0", 1, "sorting_1"], ["href", "javascript:;", 3, "click"], ["class", "btn btn-label-danger btn-pill invoices-btn", 4, "ngIf"], [3, "Status", "StatusChange"], ["role", "row", 1, "invoice-list-view-info", "odd"], [1, "btn", "btn-label-info"], [1, "btn", "btn-label-warning"], [2, "width", "5%"], [2, "width", "35%"], [2, "width", "46%"], [2, "width", "2%"], [2, "width", "10%"], ["class", "quote-list-view-info odd", "role", "row", 4, "ngFor", "ngForAsync", "ngForOf"], ["colspan", "9", "style", "text-align: center;", 4, "ngIf"], ["colspan", "9", 4, "ngIf"], ["class", "btn btn-label-success btn-pill reallocated-one", 4, "ngIf"], ["class", "recurring-ticket", 4, "ngIf"], [3, "A", "B", "C", "T", "AChange", "BChange", "CChange"], ["class", "ticketstatus statusunallocated", 4, "ngIf"], ["class", "ticketstatus statusrescheduled", 4, "ngIf"], [1, "text-center"], [3, "Status", "OverDueDays", "StatusChange", "OverDueDaysChange"], [3, "TicketTeams", "localPrependUrl", "Reallocate", "Id", "TicketId", "TicketTeamsChange", "localPrependUrlChange", "ReallocateChange", "IdChange", "TicketIdChange"], ["href", "javascript:void(0)", 3, "click"], [1, "recurring-ticket"], [1, "ticketstatus", "statusunallocated"], [1, "ticketstatus", "statusrescheduled"], ["colspan", "9", 2, "text-align", "center"], ["colspan", "9"]], template: function CustomerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CustomerDetailsComponent_div_32_Template, 15, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CustomerDetailsComponent_div_33_Template, 15, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "polygon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "polygon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "polygon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Total Closed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "polygon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Total OverDue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailsComponent_Template_a_click_112_listener() { return ctx.toggletab("Profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailsComponent_Template_a_click_119_listener() { return ctx.toggletab("Properties"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Properties ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, CustomerDetailsComponent_a_126_Template, 7, 0, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, CustomerDetailsComponent_a_127_Template, 7, 0, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDetailsComponent_Template_a_click_128_listener() { return ctx.toggletab("Tickets"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "ul", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Customer Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, CustomerDetailsComponent_ng_content_151_Template, 1, 0, "ng-content", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, CustomerDetailsComponent_ng_template_152_Template, 1, 0, "ng-template", null, 73, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](154, CustomerDetailsComponent_ng_template_154_Template, 1, 0, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Contact Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, CustomerDetailsComponent_li_160_Template, 4, 0, "li", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](167, CustomerDetailsComponent_img_167_Template, 1, 1, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, CustomerDetailsComponent_div_168_Template, 2, 1, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "table", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Company: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Company Name as Primary : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](188, CustomerDetailsComponent_ng_template_188_Template, 1, 0, "ng-template", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](189, CustomerDetailsComponent_ng_template_189_Template, 1, 0, "ng-template", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](195, CustomerDetailsComponent_ng_template_195_Template, 1, 0, "ng-template", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](196, CustomerDetailsComponent_ng_template_196_Template, 1, 0, "ng-template", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Notify for upcoming visits: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, CustomerDetailsComponent_ng_template_202_Template, 1, 0, "ng-template", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, CustomerDetailsComponent_ng_template_203_Template, 1, 0, "ng-template", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Print email on work order: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](209, CustomerDetailsComponent_ng_template_209_Template, 1, 0, "ng-template", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, CustomerDetailsComponent_ng_template_210_Template, 1, 0, "ng-template", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](216, CustomerDetailsComponent_ng_template_216_Template, 2, 0, "ng-template", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](217, CustomerDetailsComponent_ng_template_217_Template, 2, 0, "ng-template", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Group: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "ul", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](225, CustomerDetailsComponent_li_225_Template, 3, 1, "li", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Additional Remarks: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "table", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " Contact Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](246, CustomerDetailsComponent_tr_246_Template, 10, 5, "tr", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](255, CustomerDetailsComponent_255_Template, 1, 0, undefined, 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](256, CustomerDetailsComponent_256_Template, 1, 0, undefined, 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "table", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " Address Street 1: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " Address Street 2: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " Address Unit No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Postal Code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Country: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "table", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Contact Person Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " Mobile No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Is Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](308, CustomerDetailsComponent_tr_308_Template, 12, 8, "tr", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](309, CustomerDetailsComponent_div_309_Template, 15, 1, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " \u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](326, CustomerDetailsComponent_div_326_Template, 2, 0, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](327, CustomerDetailsComponent_table_327_Template, 11, 1, "table", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " \u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "table", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "tr", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "th", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](356, CustomerDetailsComponent_tr_356_Template, 16, 8, "tr", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "i", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "table", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "tr", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Invoice#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Total Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](387, CustomerDetailsComponent_tr_387_Template, 18, 9, "tr", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, " \u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "i", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](402, CustomerDetailsComponent_table_402_Template, 19, 6, "table", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](153);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.service.formData.NameTitle, " ", ctx.service.formData.FirstName, " ", ctx.service.formData.LastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.InvoiceView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.QuoteView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total ", ctx.currentUser.Ticket, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.TotalTicket, " Total ", ctx.currentUser.Ticket, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Open ", ctx.currentUser.Ticket, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.TotalOpenTickets, " Open ", ctx.currentUser.Ticket, "s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalClosed, " Total Closed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalOverDue, " Total OverDue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.QuoteView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.InvoiceView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket, "s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.EngineerType)("ngIfThen", _r8)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.CustomerEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.CustomerLogo.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.CustomerLogo.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.service.formData.NameTitle, " ", ctx.service.formData.FirstName, " ", ctx.service.formData.LastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.CompanyName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.UseCompanyNameAsPrimaryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.formData.UseCompanyNameAsPrimaryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Notify when you close a ", ctx.currentUser.Ticket, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.ClientReminders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.formData.ClientReminders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.ClientFollowUpEmails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.formData.ClientFollowUpEmails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.PrintEmailOnWorkOuder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.formData.PrintEmailOnWorkOuder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.formData.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.formData.CustomerDepartment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.RefferdBy, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.formData.ArrayofKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.EngineerType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.EngineerType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.AddressStreet1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.AddressStreet2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.AddressUnitNo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.AddressZipCode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.AddressCountry, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.formData.CustomerContactPerson);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.CustomerEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Properties (", ctx.propertyCount, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.propertiesservice.Propertylist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.propertiesservice.Propertylist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Quote (", ctx.quotesCount, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quotesservice.QuoteList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Invoices (", ctx.invoicesCount, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoiveservice.InvoiceList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.currentUser.Ticket, "s (", ctx.ticketCount, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketservice.Ticketlist);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _generic_utils_Quote_Status_Component_QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_13__["QuoteStatusComponent"], _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_14__["TicketDateTimeFormatComponent"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_15__["TicketStatusComponent"], _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_16__["TicketTeamListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: [".kt-widget4__item.contact-details-new-quote[_ngcontent-%COMP%]   span.fa.fa-user-circle[_ngcontent-%COMP%]{color:#ff8533}.kt-widget4__item.contact-details-new-quote[_ngcontent-%COMP%]   span.fa.fa-home[_ngcontent-%COMP%]{background-color:#ff8533}.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]   .kt-widget4__title[_ngcontent-%COMP%]:hover{color:#0089cd}.kt-portlet__body.create-new-client-portlet-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{margin-bottom:15px}.btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color:#ff8533}.customer_all[_ngcontent-%COMP%]{margin-bottom:15px}.customer_all[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   select.btn[_ngcontent-%COMP%]{background-color:#ff8533!important;color:#fff}.text-info[_ngcontent-%COMP%]{color:#fff}span.btn.btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa;color:#000}.customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c3e7fa!important}.kt-iconbox--wave[_ngcontent-%COMP%]{background-color:#ff853329;border:1px solid #ff8533}.kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{fill:#ff8533}.btn-group-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%] > .btn[_ngcontent-xmv-c1][_ngcontent-%COMP%], .btn-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%]{padding:.5rem .7rem}.table-checkable[_ngcontent-%COMP%]   .customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:.5rem .7rem}.kt-portlet__head.profile-details-info[_ngcontent-%COMP%]{display:none!important}.customer-listing-detail-section[_ngcontent-%COMP%]   ul.nav.nav-tabs.nav-tabs-line.nav-tabs-bold.nav-tabs-line-brand[_ngcontent-%COMP%]{background-color:#0084ca}.customer-listing-detail-section[_ngcontent-%COMP%]   ul.nav.nav-tabs.nav-tabs-line.nav-tabs-bold.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{color:#fff}.nav-tabs.nav-tabs-line.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.customer-listing-detail-section[_ngcontent-%COMP%]   .nav-tabs.nav-tabs-line.nav-tabs-line-brand.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-tabs.nav-tabs-line.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%], .nav-tabs.nav-tabs-line.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover, .nav-tabs.nav-tabs-line.nav-tabs-line-brand.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#0084ca!important}.nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#0084ca!important}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]{background-color:#ffebde}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]:after{border-left-color:#ffebde!important}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]   .kt-wizard-v2__nav-icon[_ngcontent-%COMP%]{color:#ff8533}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]{background-color:#0084ca}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]   .kt-portlet__head-label[_ngcontent-%COMP%]   .kt-portlet__head-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]   .kt-portlet__head-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff}.fade[_ngcontent-%COMP%]:not(.show){opacity:1}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;border-bottom:none;padding:20px 15px;background-color:#f1f1f1;margin-bottom:0}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(100%/5);border-right:1px solid #d6d6d6}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child(){border-right:0}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#e7e7e7;color:#000;font-size:14px;padding:10px 18px;text-align:center;display:block}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000;margin-right:10px;font-size:18px;text-align:center}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#21366b;color:#fff}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#fff}.tab-content[_ngcontent-%COMP%]{background-color:#fff;margin:15px;padding:15px;box-shadow:10px 10px 10px #e7e7e7;margin-top:0}.contact-bton[_ngcontent-%COMP%]   .btn-sm.btn.btn-label-info.btn-bold[_ngcontent-%COMP%]{display:block}.kt-portlet__body.create-new-client-portlet-body.create-new-property-details[_ngcontent-%COMP%]{background-color:#fff}.label[_ngcontent-%COMP%]{font-weight:600;color:#000}.accordion.accordion-toggle-svg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:1.5rem}.kt-section[_ngcontent-%COMP%]   .kt-section__heading[_ngcontent-%COMP%], .kt-section[_ngcontent-%COMP%]   .kt-section__title[_ngcontent-%COMP%]{font-size:1.5rem}.btn-sm.btn.btn-label-info.btn-bold[_ngcontent-%COMP%]{margin-top:25px}#menu3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:15px}.switcher-customer[_ngcontent-%COMP%]{top:-15px;position:relative}.kt-portlet__head-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px!important;color:#fff!important}.action-is-disabled[_ngcontent-%COMP%]{cursor:no-drop}.team-inner-1[_ngcontent-%COMP%]{margin-top:15px;padding:0 15px}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#000;display:inline-block;padding:8px 8px;background-color:#eaeaea;margin:0 3px 5px;border-radius:5px}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:40%;height:20;width:20}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size:10px;padding-left:8px;padding-top:6px}.customer-logo-container[_ngcontent-%COMP%]{position:relative;width:100%;max-width:100%}.customer-logo-container-image[_ngcontent-%COMP%]{display:block;width:100%;height:auto}.customer-logo-container-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;background:#000;background:rgba(0,0,0,.5);color:#f1f1f1;width:100%;transition:.5s ease;opacity:0;color:#fff;font-size:30px;padding:6px;text-align:center}.customer-logo-container[_ngcontent-%COMP%]:hover   .customer-logo-container-overlay[_ngcontent-%COMP%]{opacity:1}.box-1[_ngcontent-%COMP%]{display:inline-block;width:25%}.check-mark[_ngcontent-%COMP%]{margin-top:18px;position:relative}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.expo[_ngcontent-%COMP%]{float:right}.checkbox-downbox[_ngcontent-%COMP%]{position:absolute;bottom:-20px;background-color:#fff;padding:10px;border-radius:8px;width:131%;z-index:9}.txtSearchTicket[_ngcontent-%COMP%]{float:right;margin-top:10px;line-height:25px!important;padding:4px 24px;width:30%;border:none;border-radius:16px;background-color:#eaeaea}.dropdown-menu.show[_ngcontent-%COMP%]{margin-left:-105px}.myCOlsp[_ngcontent-%COMP%]{color:#000;font-size:21px;font-weight:600}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vY3VzdG9tZXJzL2N1c3RvbWVyLWFkZC9jdXN0b21lci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUUsYUFBYSxDQUFDLDREQUE0RCx3QkFBd0IsQ0FBQyx1REFBdUQsYUFBYSxDQUFDLCtEQUErRCxrQkFBa0IsQ0FBQyxXQUFXLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDLGNBQWMsa0JBQWtCLENBQUMsb0NBQW9DLGtDQUFrQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLFVBQVUsQ0FBQywyQkFBMkIsd0JBQXdCLENBQUMsVUFBVSxDQUFDLDJDQUEyQyx1QkFBdUIsQ0FBQyxrQkFBa0IsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLFlBQVksQ0FBQyxvRkFBb0YsbUJBQW1CLENBQUMsMERBQTBELG1CQUFtQixDQUFDLHVDQUF1QyxzQkFBc0IsQ0FBQyxpR0FBaUcsd0JBQXdCLENBQUMsNEdBQTRHLFVBQVUsQ0FBQyxpREFBaUQsVUFBVSxDQUFDLCtTQUErUyx1QkFBdUIsQ0FBQyx1RkFBdUYsdUJBQXVCLENBQUMsb0lBQW9JLHdCQUF3QixDQUFDLDBJQUEwSSxtQ0FBbUMsQ0FBQyw0SkFBNEosYUFBYSxDQUFDLGlFQUFpRSx3QkFBd0IsQ0FBQyxrSEFBa0gsVUFBVSxDQUFDLDRGQUE0RixVQUFVLENBQUMsaUJBQWlCLFNBQVMsQ0FBQyxrQkFBa0IsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsa0NBQWtDLGNBQWMsQ0FBQyx1QkFBdUIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMseUJBQXlCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsMkRBQTJELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywrREFBK0QsVUFBVSxDQUFDLGFBQWEscUJBQXFCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQ0FBaUMsQ0FBQyxZQUFZLENBQUMsa0RBQWtELGFBQWEsQ0FBQyw2RUFBNkUscUJBQXFCLENBQUMsT0FBTyxlQUFlLENBQUMsVUFBVSxDQUFDLCtEQUErRCxnQkFBZ0IsQ0FBQyxnRUFBZ0UsZ0JBQWdCLENBQUMsb0NBQW9DLGVBQWUsQ0FBQyxhQUFhLFlBQVksQ0FBQyxtQkFBbUIsU0FBUyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5Qix3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsY0FBYyxDQUFDLGNBQWMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsVUFBVSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUNBQWlDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsZ0VBQWdFLFNBQVMsQ0FBQyxPQUFPLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxZQUFZLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsVUFBVSxDQUFDLE1BQU0sV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLFdBQVcsQ0FBQyxlQUFlLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBb0Isa0JBQWtCLENBQUMsU0FBUyxVQUFVLENBQUMsY0FBYyxDQUFDLGVBQWUiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9jdXN0b21lcnMvY3VzdG9tZXItYWRkL2N1c3RvbWVyLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmt0LXdpZGdldDRfX2l0ZW0uY29udGFjdC1kZXRhaWxzLW5ldy1xdW90ZSBzcGFuLmZhLmZhLXVzZXItY2lyY2xle2NvbG9yOiNmZjg1MzN9Lmt0LXdpZGdldDRfX2l0ZW0uY29udGFjdC1kZXRhaWxzLW5ldy1xdW90ZSBzcGFuLmZhLmZhLWhvbWV7YmFja2dyb3VuZC1jb2xvcjojZmY4NTMzfS5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtIC5rdC13aWRnZXQ0X190aXRsZTpob3Zlcntjb2xvcjojMDA4OWNkfS5rdC1wb3J0bGV0X19ib2R5LmNyZWF0ZS1uZXctY2xpZW50LXBvcnRsZXQtYm9keSAuZm9ybS1jb250cm9se21hcmdpbi1ib3R0b206MTVweH0uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6I2ZmODUzM30uY3VzdG9tZXJfYWxse21hcmdpbi1ib3R0b206MTVweH0uY3VzdG9tZXJfYWxsIC5idG4tZ3JvdXAgc2VsZWN0LmJ0bntiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzMhaW1wb3J0YW50O2NvbG9yOiNmZmZ9LnRleHQtaW5mb3tjb2xvcjojZmZmfXNwYW4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6I2MzZTdmYTtjb2xvcjojMDAwfS5jdXN0b21lci1saXN0LXZpZXctaW5mbyAuYnRuLWdyb3VwIC5idG4gaXtjb2xvcjojYzNlN2ZhIWltcG9ydGFudH0ua3QtaWNvbmJveC0td2F2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzMyOTtib3JkZXI6MXB4IHNvbGlkICNmZjg1MzN9Lmt0LXN2Zy1pY29uIGcgW2ZpbGxde2ZpbGw6I2ZmODUzM30uYnRuLWdyb3VwLXNtW19uZ2NvbnRlbnQteG12LWMxXT4uYnRuW19uZ2NvbnRlbnQteG12LWMxXSwuYnRuLXNtW19uZ2NvbnRlbnQteG12LWMxXXtwYWRkaW5nOi41cmVtIC43cmVtfS50YWJsZS1jaGVja2FibGUgLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIC5idG4tZ3JvdXAgLmJ0bntwYWRkaW5nOi41cmVtIC43cmVtfS5rdC1wb3J0bGV0X19oZWFkLnByb2ZpbGUtZGV0YWlscy1pbmZve2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmN1c3RvbWVyLWxpc3RpbmctZGV0YWlsLXNlY3Rpb24gdWwubmF2Lm5hdi10YWJzLm5hdi10YWJzLWxpbmUubmF2LXRhYnMtYm9sZC5uYXYtdGFicy1saW5lLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRjYX0uY3VzdG9tZXItbGlzdGluZy1kZXRhaWwtc2VjdGlvbiB1bC5uYXYubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1ib2xkLm5hdi10YWJzLWxpbmUtYnJhbmQgYS5uYXYtbGlua3tjb2xvcjojZmZmfS5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi5uYXYtdGFicyAubmF2LWxpbmsgaXtjb2xvcjojZmZmfS5jdXN0b21lci1saXN0aW5nLWRldGFpbC1zZWN0aW9uIC5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi10YWJzLWxpbmUtYnJhbmQubmF2Lm5hdi10YWJzIC5uYXYtbGluazpob3ZlciwubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1saW5lLWJyYW5kIGEubmF2LWxpbmsuYWN0aXZlLC5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi10YWJzLWxpbmUtYnJhbmQgYS5uYXYtbGluazpob3ZlciwubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1saW5lLWJyYW5kLm5hdi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle2NvbG9yOiMwMDg0Y2EhaW1wb3J0YW50fS5uYXYtdGFicy5uYXYtdGFicy1saW5lIGEubmF2LWxpbmsuYWN0aXZlIGksLm5hdi10YWJzLm5hdi10YWJzLWxpbmUgYS5uYXYtbGluazpob3ZlciBpe2NvbG9yOiMwMDg0Y2EhaW1wb3J0YW50fS5rdC13aXphcmQtdjIgLmt0LXdpemFyZC12Ml9fYXNpZGUgLmt0LXdpemFyZC12Ml9fbmF2IC5rdC13aXphcmQtdjJfX25hdi1pdGVtcyAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbVtkYXRhLWt0d2l6YXJkLXN0YXRlPWN1cnJlbnRde2JhY2tncm91bmQtY29sb3I6I2ZmZWJkZX0ua3Qtd2l6YXJkLXYyIC5rdC13aXphcmQtdjJfX2FzaWRlIC5rdC13aXphcmQtdjJfX25hdiAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbXMgLmt0LXdpemFyZC12Ml9fbmF2LWl0ZW1bZGF0YS1rdHdpemFyZC1zdGF0ZT1jdXJyZW50XTphZnRlcntib3JkZXItbGVmdC1jb2xvcjojZmZlYmRlIWltcG9ydGFudH0ua3Qtd2l6YXJkLXYyIC5rdC13aXphcmQtdjJfX2FzaWRlIC5rdC13aXphcmQtdjJfX25hdiAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbXMgLmt0LXdpemFyZC12Ml9fbmF2LWl0ZW1bZGF0YS1rdHdpemFyZC1zdGF0ZT1jdXJyZW50XSAua3Qtd2l6YXJkLXYyX19uYXYtaWNvbntjb2xvcjojZmY4NTMzfS5rdC1wb3J0bGV0X19oZWFkLmt0LXBvcnRsZXRfX2hlYWQtLWxnLmNvbnRhY3RfZGV0YWlsX3RhYmxlX2luZm97YmFja2dyb3VuZC1jb2xvcjojMDA4NGNhfS5rdC1wb3J0bGV0X19oZWFkLmt0LXBvcnRsZXRfX2hlYWQtLWxnLmNvbnRhY3RfZGV0YWlsX3RhYmxlX2luZm8gLmt0LXBvcnRsZXRfX2hlYWQtbGFiZWwgLmt0LXBvcnRsZXRfX2hlYWQtaWNvbiBpe2NvbG9yOiNmZmZ9Lmt0LXBvcnRsZXRfX2hlYWQua3QtcG9ydGxldF9faGVhZC0tbGcuY29udGFjdF9kZXRhaWxfdGFibGVfaW5mbyAua3QtcG9ydGxldF9faGVhZC1sYWJlbCBoM3tjb2xvcjojZmZmfS5mYWRlOm5vdCguc2hvdyl7b3BhY2l0eToxfS5jdXN0b21lci1mb3JtIHVse3dpZHRoOjEwMCU7Ym9yZGVyLWJvdHRvbTpub25lO3BhZGRpbmc6MjBweCAxNXB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTttYXJnaW4tYm90dG9tOjB9LmN1c3RvbWVyLWZvcm0gdWwgbGl7d2lkdGg6Y2FsYygxMDAlLzUpO2JvcmRlci1yaWdodDoxcHggc29saWQgI2Q2ZDZkNn0uY3VzdG9tZXItZm9ybSB1bCBsaTpsYXN0LWNoaWxkKCl7Ym9yZGVyLXJpZ2h0OjB9LmN1c3RvbWVyLWZvcm0gdWwgbGkgYXtiYWNrZ3JvdW5kOiNlN2U3ZTc7Y29sb3I6IzAwMDtmb250LXNpemU6MTRweDtwYWRkaW5nOjEwcHggMThweDt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmJsb2NrfS5jdXN0b21lci1mb3JtIHVsIGxpIGEgaXtjb2xvcjojMDAwO21hcmdpbi1yaWdodDoxMHB4O2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyfS5jdXN0b21lci1mb3JtIHVsIGxpIGEuYWN0aXZlLC5jdXN0b21lci1mb3JtIHVsIGxpIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjEzNjZiO2NvbG9yOiNmZmZ9LmN1c3RvbWVyLWZvcm0gdWwgbGkgYS5hY3RpdmUgaSwuY3VzdG9tZXItZm9ybSB1bCBsaSBhOmhvdmVyIGl7Y29sb3I6I2ZmZn0udGFiLWNvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO21hcmdpbjoxNXB4O3BhZGRpbmc6MTVweDtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNlN2U3ZTc7bWFyZ2luLXRvcDowfS5jb250YWN0LWJ0b24gLmJ0bi1zbS5idG4uYnRuLWxhYmVsLWluZm8uYnRuLWJvbGR7ZGlzcGxheTpibG9ja30ua3QtcG9ydGxldF9fYm9keS5jcmVhdGUtbmV3LWNsaWVudC1wb3J0bGV0LWJvZHkuY3JlYXRlLW5ldy1wcm9wZXJ0eS1kZXRhaWxze2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubGFiZWx7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiMwMDB9LmFjY29yZGlvbi5hY2NvcmRpb24tdG9nZ2xlLXN2ZyAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGV7Zm9udC1zaXplOjEuNXJlbX0ua3Qtc2VjdGlvbiAua3Qtc2VjdGlvbl9faGVhZGluZywua3Qtc2VjdGlvbiAua3Qtc2VjdGlvbl9fdGl0bGV7Zm9udC1zaXplOjEuNXJlbX0uYnRuLXNtLmJ0bi5idG4tbGFiZWwtaW5mby5idG4tYm9sZHttYXJnaW4tdG9wOjI1cHh9I21lbnUzIC5jYXJke3BhZGRpbmc6MTVweH0uc3dpdGNoZXItY3VzdG9tZXJ7dG9wOi0xNXB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5rdC1wb3J0bGV0X19oZWFkLWljb24gaXtmb250LXNpemU6MThweCFpbXBvcnRhbnQ7Y29sb3I6I2ZmZiFpbXBvcnRhbnR9LmFjdGlvbi1pcy1kaXNhYmxlZHtjdXJzb3I6bm8tZHJvcH0udGVhbS1pbm5lci0xe21hcmdpbi10b3A6MTVweDtwYWRkaW5nOjAgMTVweH0udGVhbS1pbm5lci0xIHVse3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1ib3R0b206MH0udGVhbS1pbm5lci0xIHVsIGxpe2NvbG9yOiMwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzo4cHggOHB4O2JhY2tncm91bmQtY29sb3I6I2VhZWFlYTttYXJnaW46MCAzcHggNXB4O2JvcmRlci1yYWRpdXM6NXB4fS50ZWFtLWlubmVyLTEgdWwgbGkgaW1ne2JvcmRlci1yYWRpdXM6NDAlO2hlaWdodDoyMDt3aWR0aDoyMH0udGVhbS1pbm5lci0xIHVsIGxpIC5jbG9zZXtmb250LXNpemU6MTBweDtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctdG9wOjZweH0uY3VzdG9tZXItbG9nby1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJX0uY3VzdG9tZXItbG9nby1jb250YWluZXItaW1hZ2V7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDphdXRvfS5jdXN0b21lci1sb2dvLWNvbnRhaW5lci1vdmVybGF5e3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2JhY2tncm91bmQ6IzAwMDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO2NvbG9yOiNmMWYxZjE7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOi41cyBlYXNlO29wYWNpdHk6MDtjb2xvcjojZmZmO2ZvbnQtc2l6ZTozMHB4O3BhZGRpbmc6NnB4O3RleHQtYWxpZ246Y2VudGVyfS5jdXN0b21lci1sb2dvLWNvbnRhaW5lcjpob3ZlciAuY3VzdG9tZXItbG9nby1jb250YWluZXItb3ZlcmxheXtvcGFjaXR5OjF9LmJveC0xe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjI1JX0uY2hlY2stbWFya3ttYXJnaW4tdG9wOjE4cHg7cG9zaXRpb246cmVsYXRpdmV9LnNlYXJjaC1iYXIgaW5wdXR7d2lkdGg6MTAwJX0uZXhwb3tmbG9hdDpyaWdodH0uY2hlY2tib3gtZG93bmJveHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206LTIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjhweDt3aWR0aDoxMzElO3otaW5kZXg6OX0udHh0U2VhcmNoVGlja2V0e2Zsb2F0OnJpZ2h0O21hcmdpbi10b3A6MTBweDtsaW5lLWhlaWdodDoyNXB4IWltcG9ydGFudDtwYWRkaW5nOjRweCAyNHB4O3dpZHRoOjMwJTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZWFlYWVhfS5kcm9wZG93bi1tZW51LnNob3d7bWFyZ2luLWxlZnQ6LTEwNXB4fS5teUNPbHNwe2NvbG9yOiMwMDA7Zm9udC1zaXplOjIxcHg7Zm9udC13ZWlnaHQ6NjAwfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-details',
                templateUrl: './customer-details.component.html',
                styleUrls: ['../customer-add/customer-add.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }, { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_5__["PropertyService"] }, { type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"] }, { type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_7__["QuoteService"] }, { type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_8__["InvoiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_10__["UserlogService"] }, { type: src_app_services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "nXz1":
/*!****************************************************!*\
  !*** ./src/app/services/DocumentUpload.service.ts ***!
  \****************************************************/
/*! exports provided: DocumentUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentUploadService", function() { return DocumentUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class DocumentUploadService {
    constructor(http) {
        this.http = http;
    }
    uploadDocument(token, access_type, guid, id, remark, file) {
        if (guid === '') {
            guid = '00000000-0000-0000-0000-000000000000';
        }
        if (id === '') {
            id = '0';
        }
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api-aws-doc-upload', formData, {
            reportProgress: true,
            headers: {
                "ACCESS_KEY": src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].Accesskey,
                "ACCESS_TYPE": access_type,
                "ACCESS_TOKEN": token,
                "ACCESS_GUID": guid,
                "ACCESS_Id": id,
                "Remark": remark
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    RemoveDocument(token, access_type, guid, id, remark) {
        if (guid === '') {
            guid = '00000000-0000-0000-0000-000000000000';
        }
        if (id === '') {
            id = '0';
        }
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api-aws-doc-remove', {
            reportProgress: true,
            headers: {
                "ACCESS_KEY": src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].Accesskey,
                "ACCESS_TYPE": access_type,
                "ACCESS_TOKEN": token,
                "ACCESS_GUID": guid,
                "ACCESS_Id": id,
                "Remark": remark
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    uploadDocuments(token, access_type, guid, id, remark, file) {
        if (guid === '') {
            guid = '00000000-0000-0000-0000-000000000000';
        }
        if (id === '') {
            id = '0';
        }
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api-aws-doc-uploads', formData, {
            reportProgress: true,
            headers: {
                "ACCESS_KEY": src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].Accesskey,
                "ACCESS_TYPE": access_type,
                "ACCESS_TOKEN": token,
                "ACCESS_GUID": guid,
                "ACCESS_Id": id,
                "Remark": remark
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    uploadBase64Document(token, access_type, guid, id, base64, name, size) {
        if (guid === '') {
            guid = '00000000-0000-0000-0000-000000000000';
        }
        if (id === '') {
            id = '0';
        }
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api-aws-doc-base64-upload', {
            "Base64": base64
        }, {
            reportProgress: true,
            headers: {
                "ACCESS_KEY": src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].Accesskey,
                "ACCESS_TYPE": access_type,
                "ACCESS_TOKEN": token,
                "ACCESS_GUID": guid,
                "ACCESS_Id": id,
                "Base64Name": name,
                "Base64Size": size,
                'Content-Type': 'application/json'
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
}
DocumentUploadService.ɵfac = function DocumentUploadService_Factory(t) { return new (t || DocumentUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DocumentUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentUploadService, factory: DocumentUploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "yjuK":
/*!******************************************************************************!*\
  !*** ./src/app/application/customers/customer-add/customer-add.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddComponent", function() { return CustomerAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_customer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.model */ "jG0A");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! email-validator */ "H/qo");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/DocumentUpload.service */ "nXz1");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/property.service */ "Pffd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "7itd");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-select-dropdown */ "8bGj");




















function CustomerAddComponent_ng_content_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "currentUser.Permissions.EngineerType; then hqaddress; else billingaddress"]);
} }
function CustomerAddComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "BILLING ADDRESS");
} }
function CustomerAddComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "HQ ADDRESS");
} }
function CustomerAddComponent_div_62_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 173);
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r42.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerAddComponent_div_62_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 173);
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r43.service.formData.CustomerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerAddComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerAddComponent_div_62_img_1_Template, 1, 1, "img", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerAddComponent_div_62_img_2_Template, 1, 1, "img", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 170, 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomerAddComponent_div_62_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.picked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_div_62_Template_i_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.RemoveProfileImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.service.formData.CustomerLogo == null ? null : ctx_r5.service.formData.CustomerLogo.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.service.formData.CustomerLogo == null ? null : ctx_r5.service.formData.CustomerLogo.length) > 0);
} }
function CustomerAddComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r6.localPrependUrl, "/assets/svg/spinner.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerAddComponent_table_118_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_table_118_tr_10_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const x_r49 = ctx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.populateEmailArrayofKey(x_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_table_118_tr_10_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const x_r49 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.deleteArrayofKey(x_r49.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r49.Key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r49.Value);
} }
function CustomerAddComponent_table_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerAddComponent_table_118_tr_10_Template, 11, 2, "tr", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.service.EmailArrayList);
} }
function CustomerAddComponent_table_153_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_table_153_tr_10_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const x_r54 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.populatePhoneArrayofKey(x_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_table_153_tr_10_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const x_r54 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.deleteArrayofKey(x_r54.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r54.Key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r54.Value);
} }
function CustomerAddComponent_table_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerAddComponent_table_153_tr_10_Template, 11, 2, "tr", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.service.MobileArrayList);
} }
function CustomerAddComponent_table_203_tr_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerAddComponent_table_203_tr_14_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_table_203_tr_14_span_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const x_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.SetDefaultCntactPerson(x_r59.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerAddComponent_table_203_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerAddComponent_table_203_tr_14_span_2_Template, 2, 0, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerAddComponent_table_203_tr_14_span_3_Template, 3, 0, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_table_203_tr_14_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const x_r59 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.PupulatcontactPerson(x_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_table_203_tr_14_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const x_r59 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.RemovecontactPerson(x_r59.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r59.IsDefaultContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !x_r59.IsDefaultContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", x_r59.NameTitle, " ", x_r59.FirstName, " ", x_r59.LastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r59.Email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r59.Phone);
} }
function CustomerAddComponent_table_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Is Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Person Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomerAddComponent_table_203_tr_14_Template, 16, 7, "tr", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.service.CustomerContactPersonList);
} }
function CustomerAddComponent_a_261_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_a_261_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.AddContactPersonData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r24.arraycontactbutton, " ");
} }
function CustomerAddComponent_a_262_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r25.arraycontactbutton, " ");
} }
function CustomerAddComponent_div_272_a_34_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 208);
} }
function CustomerAddComponent_div_272_a_34_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 209);
} }
function CustomerAddComponent_div_272_a_34_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_div_272_a_34_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r81.findAddressByPostalCode(ctx_r81.propertyservice.formData.AddressZipCode, "mailing"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerAddComponent_div_272_a_34_i_1_Template, 1, 0, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerAddComponent_div_272_a_34_i_2_Template, 1, 0, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r76.IsPostalSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r76.IsPostalSearch);
} }
function CustomerAddComponent_div_272_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", x_r83.CountryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r83.CountryName, " ");
} }
function CustomerAddComponent_div_272_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Address line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 194, 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAddressChange", function CustomerAddComponent_div_272_Template_input_onAddressChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.handleAddressChange($event, "mailing"); })("ngModelChange", function CustomerAddComponent_div_272_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.propertyservice.formData.AddressStreet1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 196, 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_272_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.propertyservice.formData.AddressStreet2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Address Unit No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 198, 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_272_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.propertyservice.formData.AddressUnitNo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 200, 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_272_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.propertyservice.formData.AddressState = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Postal Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 202, 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_272_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.propertyservice.formData.AddressZipCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CustomerAddComponent_div_272_a_34_Template, 3, 2, "a", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Select Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 204, 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_272_Template_select_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.propertyservice.formData.AddressCountry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CustomerAddComponent_div_272_option_43_Template, 2, 2, "option", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r26.options)("ngModel", ctx_r26.propertyservice.formData.AddressStreet1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.propertyservice.formData.AddressStreet2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.propertyservice.formData.AddressUnitNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.propertyservice.formData.AddressState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.propertyservice.formData.AddressZipCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r26.propertyservice.formData.AddressZipCode == null ? null : ctx_r26.propertyservice.formData.AddressZipCode.length) === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.propertyservice.formData.AddressCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.countrylist);
} }
function CustomerAddComponent_div_273_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_273_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.propertyservice.formData.AddressStreet1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_273_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.propertyservice.formData.AddressStreet2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_273_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.propertyservice.formData.AddressUnitNo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_273_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.propertyservice.formData.AddressCity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_273_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.propertyservice.formData.AddressState = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_273_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.propertyservice.formData.AddressZipCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_div_273_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.propertyservice.formData.AddressCountry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "This client has multiple properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Multiple properties can only be edited individually. To edit a property, select it from the client's list of properties.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.propertyservice.formData.AddressStreet1)("ngModel", ctx_r27.propertyservice.formData.AddressStreet1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.propertyservice.formData.AddressStreet2)("ngModel", ctx_r27.propertyservice.formData.AddressStreet2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.propertyservice.formData.AddressUnitNo)("ngModel", ctx_r27.propertyservice.formData.AddressUnitNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.propertyservice.formData.AddressCity)("ngModel", ctx_r27.propertyservice.formData.AddressCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.propertyservice.formData.AddressState)("ngModel", ctx_r27.propertyservice.formData.AddressState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.propertyservice.formData.AddressZipCode)("ngModel", ctx_r27.propertyservice.formData.AddressZipCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.propertyservice.formData.AddressCountry)("ngModel", ctx_r27.propertyservice.formData.AddressCountry);
} }
function CustomerAddComponent_a_315_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 208);
} }
function CustomerAddComponent_a_315_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 209);
} }
function CustomerAddComponent_a_315_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_a_315_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.findAddressByPostalCode(ctx_r102.service.formData.AddressZipCode, "billing"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerAddComponent_a_315_i_1_Template, 1, 0, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerAddComponent_a_315_i_2_Template, 1, 0, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r34.IsPostalSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.IsPostalSearch);
} }
function CustomerAddComponent_option_324_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", x_r104.CountryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r104.CountryName, " ");
} }
function CustomerAddComponent_div_356_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-select-dropdown", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomerAddComponent_div_356_div_1_Template_ngx_select_dropdown_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r106.changeValue($event); })("ngModelChange", function CustomerAddComponent_div_356_div_1_Template_ngx_select_dropdown_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r108.CustomerDepartmentItems = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("ngModel", ctx_r105.CustomerDepartmentItems)("config", ctx_r105.config)("options", ctx_r105.CustomerDepartmentList);
} }
function CustomerAddComponent_div_356_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerAddComponent_div_356_div_1_Template, 6, 4, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.currentUser.Type === "Admin");
} }
const _c0 = ["*"];
class CustomerAddComponent {
    constructor(titleService, service, docservice, propertyservice, toastr, router, logService, loginservice, genicprofileservice) {
        this.titleService = titleService;
        this.service = service;
        this.docservice = docservice;
        this.propertyservice = propertyservice;
        this.toastr = toastr;
        this.router = router;
        this.logService = logService;
        this.loginservice = loginservice;
        this.genicprofileservice = genicprofileservice;
        this.options = { componentRestrictions: { country: ['SG'] } };
        this.lat = 1.3521;
        this.lng = 103.8198;
        this.zoom = 8;
        this.street_number = '';
        this.route = '';
        this.neighborhood = '';
        this.sublocality_level_3 = '';
        this.sublocality_level_2 = '';
        this.sublocality_level_1 = '';
        this.locality = '';
        this.administrative_area_level_2 = '';
        this.administrative_area_level_1 = '';
        this.country = '';
        this.postal_code = '';
        this.isValid = true;
        this.isValidEmail = true;
        this.isValidEmailTitle = true;
        this.isValidPhone = true;
        this.isValidPhoneTitle = true;
        this.isValidTitle = true;
        this.isValidFirstname = true;
        this.isValidLastname = true;
        this.isValidCompanyname = true;
        this.btnText = 'Add';
        this.arraycontactbutton = 'Add';
        this.IsContactPersonAdd = true;
        this.isContactersonValid = true;
        this.isContactersonTitle = true;
        this.isContactersonFirstName = true;
        this.isContactersonLastName = true;
        this.CustomerDepartmentItems = [];
        this.CustomerDepartmentList = [];
        this.config = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Department' };
        this.loader = false;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.IsPostalSearch = false;
        this.Isnavigated = true;
        this.arrayemailbutton = 'Add';
        this.arrayphonebutton = 'Add';
        this.genicprofileservice.SmtpsettingList = [];
        this.service.EmailArrayList = [];
        this.service.MobileArrayList = [];
        this.propertyservice.Propertylist = [];
        this.service.CustomerContactPersonList = [];
        this.genicprofileservice.TicketFilter.IsReady = false;
        this.genicprofileservice.TicketFilter.IsReadyQuote = false;
        this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
        this.service.SetAsDefaultValues();
        this.service.CustomerDepartmentTypeList = [];
        this.service.formData.CustomerDepartment = [];
    }
    ngOnInit() {
        if (this.service.formData === undefined) {
            this.service.SetAsDefaultValues();
        }
        if (!this.currentUser.Permissions.CustomerEdit) {
            this.router.navigate(['/dashboard']);
        }
        this.genicprofileservice.getCountryList(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.countrylist = response.result;
                }
            }
        }, error => console.log(error));
        if (this.router.url === '/customers/customer-add') {
            if (!this.currentUser.Permissions.CustomerCreate) {
                this.router.navigate(['/dashboard']);
            }
            this.titleService.setTitle('Customer Create | Genic Solution');
            this.service.createTemporaryCustomer(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.service.formData = response.result;
                        this.loadOtherDetails();
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                }
            }, error => console.log(error));
            this.createbuttontext = 'Create';
            this.btnText = 'Add';
        }
        const Id = window.location.pathname.split('/').pop();
        if (Id !== 'customer-add') {
            if (Id === '00000000-0000-0000-0000-000000000000' || Id === undefined) {
                this.router.navigate(['/customers']);
            }
            this.createbuttontext = 'Update';
            this.titleService.setTitle('Customer Edit | Genic Solution');
            this.service.getCustomerByIdSync(this.currentUser.Token, Id).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.service.formData = response.result;
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                }
            }, error => console.log(error));
        }
        this.service.refrestCustomerWiseDepartmentList(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    setTimeout(() => {
                        this.service.CustomerDepartmentTypeList = response.result;
                        this.CustomerDepartmentList = this.service.CustomerDepartmentTypeList;
                        if (this.router.url !== '/customers/customer-add') {
                            this.CustomerDepartmentList = this.service.CustomerDepartmentTypeList;
                            this.service.formData.CustomerDepartment.forEach(w => {
                                let Obj;
                                Obj = new Object();
                                Obj.Id = w.SMTPSettingsId;
                                Obj.Name = w.SMTPName;
                                Obj.IsAssigned = false;
                                this.CustomerDepartmentItems.push(Obj);
                                Obj = new Object();
                            });
                        }
                    }, 2000);
                }
            }
        }, error => console.log(error));
        this.routeSub = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (!this.Isnavigated) {
                    let Id = this.service.formData.Id;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: 'keep it?',
                        text: 'Are you sure you want to save this data?',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, keep it!',
                        cancelButtonText: 'No, delete it',
                    }).then((result) => {
                        if (result.value) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                title: 'Keep it!',
                                text: 'Your customer details is safe.',
                                type: 'info',
                                timer: 2000
                            });
                        }
                        else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                            this.service.deleteTemporaryCustomer(this.currentUser.Token, Id).subscribe(res => {
                                if (res) {
                                    const response = res;
                                    if (response.Message === 'success') {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                            title: 'Deleted!',
                                            text: response.MessageDescription,
                                            type: 'info',
                                            timer: 2000,
                                        });
                                    }
                                    if (response.Message === 'failure') {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                            title: 'Denied!',
                                            text: response.MessageDescription,
                                            type: 'warning',
                                            timer: 5000,
                                        });
                                    }
                                }
                            }, error => console.log(error));
                        }
                    });
                }
            }
        });
    }
    picked(event) {
        var pattern = /image-*/;
        let Files = event.target.files;
        let file = Files.item(0);
        if (!file.type.match(pattern)) {
            this.toastr.warning('', 'Invalid image format!');
            return false;
        }
        let filExt = file.name.split('.');
        let Ext1 = filExt[1];
        if (Ext1 === 'png' || Ext1 === 'jpg' || Ext1 === 'jpeg') {
            this.loader = true;
            let t = this.currentUser.Token;
            let moduleid = this.service.formData.Id;
            let remark = '';
            let type = 'customer';
            this.docservice.uploadDocument(t, type, moduleid, '', remark, file).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.toastr.info('upload successfully');
                        this.service.formData.CustomerLogo = response.MessageDescription;
                        this.loader = false;
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning(response.MessageDescription);
                        this.loader = false;
                    }
                }
            }, error => console.log(error));
            this.loader = false;
        }
        else {
            this.toastr.warning('Invalid file format, select png, jpg, jpeg!');
            this.loader = false;
            return false;
        }
    }
    /// Remove Profile Image
    RemoveProfileImage() {
        this.loader = true;
        let t = this.currentUser.Token;
        let type = 'customer';
        let moduleid = this.service.formData.Id;
        let remark = '';
        this.docservice.RemoveDocument(t, type, moduleid, '', remark).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.info(response.MessageDescription);
                    this.service.formData.CustomerLogo = '';
                    this.loader = false;
                }
                if (response.Message === 'failure') {
                    this.toastr.warning(response.MessageDescription);
                    this.loader = false;
                }
            }
        }, error => console.log(error));
        this.loader = false;
    }
    // loading = true;
    ngAfterViewInit() {
        setTimeout(() => {
            this.loadOtherDetails();
            this.loadarrlist();
        }, 1000);
    }
    ngOnDestroy() {
        this.routeSub.unsubscribe();
        this.service.SetAsDefaultValues();
    }
    loadarrlist() {
        setTimeout(() => {
            this.service.MobileArrayList = this.service.ArrayofKeys.filter(x => x.Type === 'Phone');
            this.service.EmailArrayList = this.service.ArrayofKeys.filter(x => x.Type === 'Email');
        }, 1000);
    }
    loadOtherDetails() {
        this.refrestArrayofKeyslist();
        this.propertyservice.refrestPropertylistCustomerWise(this.currentUser.Token, this.service.formData.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.propertyservice.Propertylist = this.propertyservice.locallist = response.result;
                    if (this.propertyservice.Propertylist.length >= 1) {
                        this.propertyservice.formData.Id = this.propertyservice.Propertylist[0].Id;
                        this.propertyservice.formData.Latitude = this.propertyservice.Propertylist[0].Latitude;
                        this.propertyservice.formData.Longitude = this.propertyservice.Propertylist[0].Longitude;
                        this.propertyservice.formData.CustomerId = this.propertyservice.Propertylist[0].CustomerId;
                        this.propertyservice.formData.CustomerName = this.propertyservice.Propertylist[0].CustomerName;
                        this.propertyservice.formData.AddressStreet1 = this.propertyservice.Propertylist[0].AddressStreet1;
                        this.propertyservice.formData.AddressStreet2 = this.propertyservice.Propertylist[0].AddressStreet2;
                        // this.propertyservice.formData.AddressCity = this.propertyservice.Propertylist[0].AddressCity;
                        // this.propertyservice.formData.AddressState = this.propertyservice.Propertylist[0].AddressState;
                        this.propertyservice.formData.AddressUnitNo = this.propertyservice.Propertylist[0].AddressUnitNo;
                        this.propertyservice.formData.AddressZipCode = this.propertyservice.Propertylist[0].AddressZipCode;
                        this.propertyservice.formData.AddressCountry = this.propertyservice.Propertylist[0].AddressCountry;
                    }
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
        this.refrestContactPersonlist();
        this.loadarrlist();
    }
    onSubmit() {
        this.isValidTitle = true;
        this.isValidFirstname = true;
        if (this.service.formData.NameTitle === '') {
            this.toastr.warning('Warning', 'Please select Title a value');
            this.isValid = false;
            this.isValidTitle = false;
            return false;
        }
        if (this.service.formData.FirstName === '') {
            this.toastr.warning('Warning', 'Please enter first name');
            this.isValid = false;
            this.isValidFirstname = false;
            return false;
        }
        if (this.service.formData.CompanyName === '') {
            this.toastr.warning('Warning', 'Please enter company name');
            this.isValid = false;
            this.isValidCompanyname = false;
            return false;
        }
        if (this.service.formData.IsAddressSame) {
            this.service.formData.AddressStreet1 = this.propertyservice.formData.AddressStreet1;
            this.service.formData.AddressStreet2 = this.propertyservice.formData.AddressStreet2;
            // this.service.formData.AddressCity = this.propertyservice.formData.AddressCity;
            // this.service.formData.AddressState = this.propertyservice.formData.AddressState;
            this.service.formData.AddressUnitNo = this.propertyservice.formData.AddressUnitNo;
            this.service.formData.AddressZipCode = this.propertyservice.formData.AddressZipCode;
            this.service.formData.AddressCountry = this.propertyservice.formData.AddressCountry;
            this.service.formData.Latitude = this.propertyservice.formData.Latitude;
            this.service.formData.Longitude = this.propertyservice.formData.Longitude;
        }
        if (this.propertyservice.formData.AddressStreet1.length > 0 || this.propertyservice.formData.AddressStreet2.length > 0) {
            this.service.formData.Properties = [];
            this.service.formData.Properties.push({
                Id: '00000000-0000-0000-0000-000000000000',
                CustomerName: (this.service.formData.NameTitle + ' ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName).trim(),
                CustomerId: this.service.formData.Id,
                AddressStreet1: this.propertyservice.formData.AddressStreet1,
                AddressStreet2: this.propertyservice.formData.AddressStreet2,
                AddressZipCode: this.propertyservice.formData.AddressZipCode,
                AddressCountry: this.propertyservice.formData.AddressCountry,
                Latitude: this.propertyservice.formData.Latitude,
                Longitude: this.propertyservice.formData.Longitude,
                AddressUnitNo: this.propertyservice.formData.AddressUnitNo,
                AddressCity: '',
                AddressState: '',
                IsActive: true,
                CompanyName: this.service.formData.CompanyName,
                Remarks: '',
            });
        }
        if (this.service.EmailArrayList.length === 0) {
            this.toastr.warning('Warning', 'Please enter an email address');
            this.isValid = false;
            this.isValidEmail = false;
            this.isValidEmailTitle = false;
            return false;
        }
        if (this.service.MobileArrayList.length === 0) {
            this.toastr.warning('Warning', 'Please enter contact number');
            this.isValid = false;
            this.isValidPhone = false;
            this.isValidPhoneTitle = false;
            return false;
        }
        if (this.CustomerLogoFile !== undefined) {
            if (this.CustomerLogoFile.size >= 2000000) {
                this.toastr.info('size too large', 'Maximum logo size is 2MB');
                return false;
            }
        }
        if (this.CustomerLogoFile === undefined) {
            this.service.formData.CustomerLogo = '';
        }
        this.service.putCustomerDetails(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    if (response.result === 'Insert') {
                        this.service.SetAsDefaultValues();
                        this.toastr.success('success', response.MessageDescription);
                        const des = 'Customer Name : ' + this.service.formData.FirstName + ' ' + this.service.formData.FirstName
                            + ' ' + this.service.formData.LastName + ', Company Name : ' + this.service.formData.CompanyName +
                            ', Address : ' + this.service.formData.AddressCity + ' ' + this.service.formData.AddressStreet1 + ' ' +
                            this.service.formData.AddressStreet2 + ' ' + this.service.formData.AddressUnitNo + ' ' +
                            this.service.formData.AddressCountry + ' ' + this.service.formData.AddressZipCode +
                            ', has been added  by user ' + this.currentUser.UserName + 'and his company name is : ' +
                            this.service.formData.CompanyName;
                        const Activity = ' New Customer : ' + this.service.formData.NameTitle + ' ' + this.service.formData.FirstName
                            + ' ' + this.service.formData.FirstName + ' is added : on dated : ' + new Date(Date.parse(Date()));
                        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer', this.service.formData.Id, 'Added', des, Activity).subscribe();
                        this.Isnavigated = true;
                        if (this.propertyservice.formData.AddressStreet1.length !== 0 ||
                            this.propertyservice.formData.AddressStreet2.length !== 0) {
                            this.propertyservice.formData.Id = '00000000-0000-0000-0000-000000000000';
                            this.propertyservice.formData.CustomerName = (this.service.formData.NameTitle + ' ' +
                                this.service.formData.FirstName + ' ' +
                                this.service.formData.LastName).trim();
                            this.propertyservice.formData.CustomerId = this.service.formData.Id;
                            this.propertyservice.formData.AddressUnitNo = '';
                            this.propertyservice.formData.AddressState = '';
                            this.propertyservice.formData.IsActive = true;
                            this.propertyservice.formData.CompanyName = this.service.formData.CompanyName;
                            this.propertyservice.formData.Remarks = '';
                            this.propertyservice.formData.PropertyId = 'PRO';
                            setTimeout(() => {
                                this.propertyservice.postPropertyDetails(this.currentUser.Token).subscribe(resp => {
                                    if (res) {
                                        const responsep = resp;
                                        //  if (responsep.Message === 'success') {
                                        //   }
                                        //  if (responsep.Message === 'failure') {
                                        //   this.toastr.warning('warning', responsep.MessageDescription);
                                        //   }
                                    }
                                }, error => console.log(error));
                            }, 200);
                            setTimeout(() => {
                                this.propertyservice.SetAsDefaultValue();
                            }, 1000);
                        }
                        this.router.navigate(['/customers/']);
                    }
                    if (response.result === 'Update') {
                        this.service.SetAsDefaultValues();
                        this.toastr.success('success', response.MessageDescription);
                        const des1 = 'Customer Name : ' + this.service.formData.FirstName + ' ' + this.service.formData.FirstName
                            + ' ' + this.service.formData.LastName + ', Company Name : ' + this.service.formData.CompanyName +
                            ', Address : ' + this.service.formData.AddressCity + ' ' + this.service.formData.AddressStreet1 + ' ' +
                            this.service.formData.AddressStreet2 + ' ' + this.service.formData.AddressUnitNo + ' ' +
                            this.service.formData.AddressCountry + ' ' + this.service.formData.AddressZipCode +
                            ', has been modified by user ' + this.currentUser.UserName + 'and his company name is : ' +
                            this.service.formData.CompanyName;
                        const Activity1 = 'Details of Customer name : ' + this.service.formData.NameTitle + ' ' +
                            this.service.formData.FirstName
                            + ' ' + this.service.formData.FirstName + ' is modified : on dated : ' + new Date(Date.parse(Date()));
                        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer', this.service.formData.Id, 'Modify', des1, Activity1).subscribe();
                        this.Isnavigated = true;
                        if (this.propertyservice.formData.AddressStreet1.length !== 0 ||
                            this.propertyservice.formData.AddressStreet2.length !== 0 ||
                            this.propertyservice.formData.AddressCity.length !== 0) {
                            if (this.propertyservice.Propertylist.length === 1) {
                                setTimeout(() => {
                                    this.propertyservice.putPropertyDetails(this.currentUser.Token).subscribe(resp => {
                                        if (res) {
                                            const responsep = resp;
                                            //  if (responsep.Message === 'success') {
                                            //   }
                                            //  if (responsep.Message === 'failure') {
                                            //   this.toastr.warning('warning', responsep.MessageDescription);
                                            //   }
                                        }
                                    }, error => console.log(error));
                                }, 200);
                                setTimeout(() => {
                                    this.propertyservice.SetAsDefaultValue();
                                }, 1000);
                            }
                        }
                        this.router.navigate(['/customers/']);
                    }
                }
                if (response.Message === 'failure') {
                    this.createbuttontext = 'Create';
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    OnCancled() {
        this.router.navigate(['/customers/']);
    }
    refrestArrayofKeyslist() {
        this.service.refrestArrayofKeyslist(this.currentUser.Token, this.service.formData.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.service.ArrayofKeys = response.result;
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    refrestContactPersonlist() {
        this.service.refrestContactPersonlist(this.currentUser.Token, this.service.formData.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.service.CustomerContactPersonList = response.result;
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    AddArrayList(id, key, value, type) {
        this.isValidEmail = true;
        this.isValidEmailTitle = true;
        this.isValidPhone = true;
        this.isValidPhoneTitle = true;
        if (type === 'Email') {
            if (key === '') {
                this.toastr.warning('Warning', 'Please select title of email');
                this.isValidEmailTitle = false;
                this.isValid = false;
                return false;
            }
        }
        if (type === 'Phone') {
            if (key === '') {
                this.toastr.warning('Warning', 'Please select title of phone no');
                this.isValidPhoneTitle = false;
                this.isValid = false;
                return false;
            }
        }
        if (value === '') {
            if (type === 'Email') {
                this.toastr.warning('Warning', 'Please enter an email');
                this.isValidEmail = false;
                this.isValid = false;
                return false;
            }
            if (type === 'Phone') {
                this.toastr.warning('Warning', 'Please enter phone number');
                this.isValidPhone = false;
                this.isValid = false;
                return false;
            }
        }
        if (type === 'Email') {
            if (!email_validator__WEBPACK_IMPORTED_MODULE_3__["validate"](value)) {
                this.toastr.warning('Warning', 'Please enter a valid email');
                this.isValid = false;
                this.isValidEmail = false;
                return false;
            }
        }
        if (type === 'Phone') {
            let isphone = /^\d*$/.test(value);
            if (!isphone) {
                this.toastr.warning('Warning', 'Please enter a valid phone');
                this.isValid = false;
                this.isValidPhone = false;
                return false;
            }
        }
        this.service.ArrayofKey.Id = id;
        this.service.ArrayofKey.CustomerId = this.service.formData.Id;
        this.service.ArrayofKey.Key = key;
        this.service.ArrayofKey.Value = value;
        this.service.ArrayofKey.Type = type;
        if (id === 0) {
            this.service.postArrayofKeysDetails(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        const des = 'Contact details of Customer : ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName +
                            ', has been Added by user ' + this.currentUser.UserName + 'and his company name is : '
                            + this.service.formData.CompanyName + ', and his ' + type + 'is : ' + value;
                        const Activity3 = type + ' : ' + value + ' is added to the Customer name : '
                            + this.service.formData.NameTitle + ' ' + this.service.formData.FirstName
                            + ' ' + this.service.formData.LastName + ' is added : on dated : ' + new Date(Date.parse(Date()));
                        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer', this.service.formData.Id, 'Added', des, Activity3).subscribe();
                        this.refrestArrayofKeyslist();
                        this.loadarrlist();
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                }
            }, error => console.log(error));
        }
        else {
            this.service.putArrayofKeysDetails(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        const des = 'Contact details of Customer : ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName +
                            ', has been modified by user ' + this.currentUser.UserName + 'and his company name is : '
                            + this.service.formData.CompanyName + ', and his ' + this.service.ArrayofKey.Type + 'is : ' + this.service.ArrayofKey.Value;
                        const Activity4 = type + ' : ' + value + ' is modified of Customer name : '
                            + this.service.formData.NameTitle + ' ' + this.service.formData.FirstName
                            + ' ' + this.service.formData.LastName + ', on dated : ' + new Date(Date.parse(Date()));
                        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer', this.service.formData.Id, 'Modify', des, Activity4).subscribe();
                        this.refrestArrayofKeyslist();
                        this.loadarrlist();
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                }
            }, error => console.log(error));
        }
        if (this.service.ArrayofKey.Type === 'Email') {
            this.arrayemailbutton = 'Add';
            this.service.ArrayofKey.Id = 0;
            this.service.EmailArray.CustomerId = '00000000-0000-0000-0000-000000000000';
            this.service.EmailArray.Key = '';
            this.service.EmailArray.Value = '';
            this.service.EmailArray.Type = '';
        }
        if (this.service.ArrayofKey.Type === 'Phone') {
            this.arrayphonebutton = 'Add';
            this.service.ArrayofKey.Id = 0;
            this.service.MobileArray.CustomerId = '00000000-0000-0000-0000-000000000000';
            this.service.MobileArray.Key = '';
            this.service.MobileArray.Value = '';
            this.service.MobileArray.Type = '';
        }
        this.service.ArrayofKey.Id = 0;
        this.service.ArrayofKey.CustomerId = '00000000-0000-0000-0000-000000000000';
        this.service.ArrayofKey.Key = '';
        this.service.ArrayofKey.Value = '';
        this.service.ArrayofKey.Type = '';
        this.Isnavigated = false;
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    populateEmailArrayofKey(x) {
        this.service.EmailArray = Object.assign({}, x);
        this.arrayemailbutton = 'update';
    }
    populatePhoneArrayofKey(x) {
        this.service.MobileArray = Object.assign({}, x);
        this.arrayphonebutton = 'update';
    }
    deleteArrayofKey(id) {
        this.service.deleteArrayofKeysDetails(this.currentUser.Token, id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.refrestArrayofKeyslist();
                    this.loadarrlist();
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    billingaddresssame() {
        if (this.service.formData.IsAddressSame) {
            this.service.formData.AddressStreet1 = this.propertyservice.formData.AddressStreet1;
            this.service.formData.AddressStreet2 = this.propertyservice.formData.AddressStreet2;
            this.service.formData.AddressUnitNo = this.propertyservice.formData.AddressUnitNo;
            this.service.formData.AddressZipCode = this.propertyservice.formData.AddressZipCode;
            this.service.formData.AddressCountry = this.propertyservice.formData.AddressCountry;
        }
        else {
            this.service.formData.AddressStreet1 = '';
            this.service.formData.AddressStreet2 = '';
            this.service.formData.AddressCity = '';
            this.service.formData.AddressState = '';
            this.service.formData.AddressZipCode = '';
            this.service.formData.AddressCountry = '';
            this.service.formData.AddressUnitNo = '';
        }
    }
    handleAddressChange(address, type) {
        this.service.formData.AddressStreet1 = '';
        this.service.formData.AddressStreet2 = '';
        this.service.formData.AddressUnitNo = '';
        this.service.formData.AddressZipCode = '';
        this.service.formData.AddressCountry = '';
        this.lat = address.geometry.location.lat();
        this.lng = address.geometry.location.lng();
        address.address_components.forEach((element) => {
            switch (element.types[0]) {
                case 'postal_code': {
                    this.postal_code = element.long_name;
                    break;
                }
                case 'country': {
                    this.country = element.long_name;
                    break;
                }
                case 'administrative_area_level_1': {
                    this.administrative_area_level_1 = element.long_name + ' ';
                    break;
                }
                case 'administrative_area_level_2': {
                    this.administrative_area_level_2 = element.long_name + ' ';
                    break;
                }
                case 'locality': {
                    this.locality = element.long_name + ' ';
                    break;
                }
                case 'sublocality_level_1': {
                    this.sublocality_level_1 = element.long_name + ' ';
                    break;
                }
                case 'sublocality_level_2': {
                    this.sublocality_level_2 = element.long_name + ' ';
                    break;
                }
                case 'sublocality_level_3': {
                    this.sublocality_level_3 = element.long_name + ' ';
                    break;
                }
                case 'neighborhood': {
                    this.neighborhood = element.long_name + ' ';
                    break;
                }
                case 'route': {
                    this.route = element.long_name + ' ';
                    break;
                }
                case 'street_number': {
                    this.street_number = element.long_name + ' ';
                    break;
                }
            }
        });
        if (type === 'mailing') {
            this.propertyservice.formData.Latitude = this.lat.toString();
            this.propertyservice.formData.Longitude = this.lng.toString();
            this.propertyservice.formData.AddressStreet1 = this.street_number;
            this.propertyservice.formData.AddressStreet2 = this.route;
            this.propertyservice.formData.AddressCity = this.administrative_area_level_2 + this.sublocality_level_3 +
                this.sublocality_level_2 +
                this.sublocality_level_1 + this.neighborhood;
            this.propertyservice.formData.AddressState = this.administrative_area_level_1 + this.locality;
            this.propertyservice.formData.AddressZipCode = this.postal_code;
            this.propertyservice.formData.AddressCountry = this.country;
        }
        if (type === 'billing') {
            this.service.formData.Latitude = this.lat.toString();
            this.service.formData.Longitude = this.lng.toString();
            this.service.formData.AddressStreet1 = this.street_number;
            this.service.formData.AddressStreet2 = this.route;
            this.service.formData.AddressCity = this.administrative_area_level_2 + this.sublocality_level_3 +
                this.sublocality_level_2 +
                this.sublocality_level_1 + this.neighborhood;
            this.service.formData.AddressState = this.administrative_area_level_1 + this.locality;
            this.service.formData.AddressZipCode = this.postal_code;
            this.service.formData.AddressCountry = this.country;
        }
        this.street_number = '';
        this.route = '';
        this.administrative_area_level_2 = '';
        this.sublocality_level_3 = '';
        this.sublocality_level_2 = '';
        this.sublocality_level_1 = '';
        this.neighborhood = '';
        this.administrative_area_level_1 = '';
        this.locality = '';
        this.postal_code = '';
        this.country = '';
    }
    findAddressByPostalCode(pc, type) {
        this.IsPostalSearch = true;
        if (pc.length === 6) {
            this.propertyservice.getAddressUsingPostalCode(Number(pc)).then(res => {
                this.addressresult = res.results;
            });
            setTimeout(() => {
                if (this.addressresult.length > 0) {
                    // tslint:disable-next-line: no-use-before-declare
                    this.lat = this.addressresult[0].geometry.location.lat;
                    this.lng = this.addressresult[0].geometry.location.lng;
                    this.addressresult[0].address_components.forEach((element) => {
                        switch (element.types[0]) {
                            case 'postal_code': {
                                this.postal_code = element.long_name;
                                break;
                            }
                            case 'country': {
                                this.country = element.long_name;
                                break;
                            }
                            case 'administrative_area_level_1': {
                                this.administrative_area_level_1 = element.long_name + ' ';
                                break;
                            }
                            case 'administrative_area_level_2': {
                                this.administrative_area_level_2 = element.long_name + ' ';
                                break;
                            }
                            case 'locality': {
                                this.locality = element.long_name + ' ';
                                break;
                            }
                            case 'neighborhood': {
                                this.neighborhood = element.long_name + ' ';
                                break;
                            }
                        }
                    });
                    if (type === 'mailing') {
                        this.propertyservice.formData.Latitude = this.lat.toString();
                        this.propertyservice.formData.Longitude = this.lng.toString();
                        this.propertyservice.formData.AddressCity = this.administrative_area_level_2 + this.neighborhood;
                        this.propertyservice.formData.AddressState = this.administrative_area_level_1 + this.locality;
                        this.propertyservice.formData.AddressZipCode = this.postal_code;
                        this.propertyservice.formData.AddressCountry = this.country;
                    }
                    if (type === 'billing') {
                        this.service.formData.Latitude = this.lat.toString();
                        this.service.formData.Longitude = this.lng.toString();
                        this.service.formData.AddressCity = this.administrative_area_level_2 + this.neighborhood;
                        this.service.formData.AddressState = this.administrative_area_level_1 + this.locality;
                        this.service.formData.AddressZipCode = this.postal_code;
                        this.service.formData.AddressCountry = this.country;
                    }
                }
                this.IsPostalSearch = false;
                this.street_number = '';
                this.route = '';
                this.administrative_area_level_2 = '';
                this.sublocality_level_3 = '';
                this.sublocality_level_2 = '';
                this.sublocality_level_1 = '';
                this.neighborhood = '';
                this.administrative_area_level_1 = '';
                this.locality = '';
                this.postal_code = '';
                this.country = '';
            }, 1000);
        }
    }
    AddContactPersonData() {
        if (this.service.CustomerContactPersonData.NameTitle === '') {
            this.toastr.warning('Warning', 'Please select contact person title');
            this.isContactersonTitle = false;
            this.isContactersonValid = false;
            return false;
        }
        if (this.service.CustomerContactPersonData.FirstName === '') {
            this.toastr.warning('Warning', 'Please enter first name');
            this.isContactersonFirstName = false;
            this.isContactersonValid = false;
            return false;
        }
        if (this.service.CustomerContactPersonData.LastName === '') {
            this.toastr.warning('Warning', 'Please enter last name');
            this.isContactersonLastName = false;
            this.isContactersonValid = false;
            return false;
        }
        this.isContactersonTitle = true;
        this.isContactersonFirstName = true;
        this.isContactersonLastName = true;
        if (this.IsContactPersonAdd) {
            this.service.postContactPersonDetails(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        const des = 'Contact person details of Customer : ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName +
                            ', has been Added by user ' + this.currentUser.UserName + 'and Contact person name is : '
                            + this.service.CustomerContactPersonData.NameTitle + ' ' + this.service.CustomerContactPersonData.FirstName + ' ' + this.service.CustomerContactPersonData.LastName + ' Phone No is ' +
                            this.service.CustomerContactPersonData.Phone + ' Email is ' + this.service.CustomerContactPersonData.Email;
                        const Activity3 = this.service.CustomerContactPersonData.NameTitle + ' ' + this.service.CustomerContactPersonData.FirstName + ' ' + this.service.CustomerContactPersonData.LastName + ' is added to the Company : '
                            + this.service.formData.CompanyName + ' is added : on dated : ' + new Date(Date.parse(Date()));
                        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer', this.service.formData.Id, 'Added', des, Activity3).subscribe();
                        this.refrestContactPersonlist();
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                    this.service.CustomerContactPersonData.Id = 0;
                    this.service.CustomerContactPersonData.CustomerId = this.service.formData.Id;
                    this.service.CustomerContactPersonData.NameTitle = '';
                    this.service.CustomerContactPersonData.FirstName = '';
                    this.service.CustomerContactPersonData.LastName = '';
                    this.service.CustomerContactPersonData.Email = '';
                    this.service.CustomerContactPersonData.Phone = '';
                    this.service.CustomerContactPersonData.IsDefaultContact = false;
                }
            }, error => console.log(error));
        }
        else {
            this.service.putContactPersonDetails(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        const des = 'Contact person details of Customer : ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName +
                            ', has been modified by user ' + this.currentUser.UserName + 'and Contact person name is : '
                            + this.service.CustomerContactPersonData.NameTitle + ' ' + this.service.CustomerContactPersonData.FirstName + ' ' + this.service.CustomerContactPersonData.LastName + ' Phone No is ' +
                            this.service.CustomerContactPersonData.Phone + ' Email is ' + this.service.CustomerContactPersonData.Email;
                        const Activity4 = this.service.CustomerContactPersonData.NameTitle + ' ' + this.service.CustomerContactPersonData.FirstName + ' ' + this.service.CustomerContactPersonData.LastName + ' is modified to the Company : '
                            + this.service.formData.CompanyName + ' is modified : on dated : ' + new Date(Date.parse(Date()));
                        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer', this.service.formData.Id, 'Modify', des, Activity4).subscribe();
                        this.refrestContactPersonlist();
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                }
            }, error => console.log(error));
            this.service.CustomerContactPersonData.Id = 0;
            this.service.CustomerContactPersonData.CustomerId = this.service.formData.Id;
            this.service.CustomerContactPersonData.NameTitle = '';
            this.service.CustomerContactPersonData.FirstName = '';
            this.service.CustomerContactPersonData.LastName = '';
            this.service.CustomerContactPersonData.Email = '';
            this.service.CustomerContactPersonData.Phone = '';
            this.service.CustomerContactPersonData.IsDefaultContact = false;
            this.IsContactPersonAdd = true;
            this.arraycontactbutton = 'Add';
        }
    }
    PupulatcontactPerson(x) {
        this.IsContactPersonAdd = false;
        this.arraycontactbutton = 'Update';
        this.service.CustomerContactPersonData = Object.assign({}, x);
    }
    RemovecontactPerson(id) {
        this.service.deleteContactPersonDetails(this.currentUser.Token, id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.refrestContactPersonlist();
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    AddDefaultContactPerson() {
        if (this.service.CustomerContactPersonList.length === 0) {
            if (this.service.formData.FirstName.length !== 0 && this.service.formData.LastName.length !== 0) {
                let emailarray = this.service.ArrayofKeys.filter(r => r.Type === 'Email' && r.IsDefault === true);
                if (emailarray.length === 1) {
                    emailarray = emailarray[0].Value;
                }
                else {
                    emailarray = null;
                }
                let phonearray = this.service.ArrayofKeys.filter(r => r.Type === 'Phone' && r.IsDefault === true);
                if (phonearray.length === 1) {
                    phonearray = phonearray[0].Value;
                }
                else {
                    phonearray = null;
                }
                this.service.CustomerContactPersonData.Id = 0;
                this.service.CustomerContactPersonData.CustomerId = this.service.formData.Id;
                this.service.CustomerContactPersonData.NameTitle = this.service.formData.NameTitle;
                this.service.CustomerContactPersonData.FirstName = this.service.formData.FirstName;
                this.service.CustomerContactPersonData.LastName = this.service.formData.LastName;
                this.service.CustomerContactPersonData.Email = emailarray;
                this.service.CustomerContactPersonData.Phone = phonearray;
                this.service.CustomerContactPersonData.IsDefaultContact = true;
                setTimeout(() => {
                    this.service.postContactPersonDetails(this.currentUser.Token).subscribe(res => {
                        if (res) {
                            const response = res;
                            if (response.Message === 'success') {
                                const des = 'Contact person details of Customer : ' +
                                    this.service.formData.FirstName + ' ' + this.service.formData.LastName +
                                    ', has been Added by user ' + this.currentUser.UserName + 'and Contact person name is : '
                                    + this.service.CustomerContactPersonData.NameTitle + ' ' +
                                    this.service.CustomerContactPersonData.FirstName + ' ' +
                                    this.service.CustomerContactPersonData.LastName + ' Phone No is ' +
                                    this.service.CustomerContactPersonData.Phone + ' Email is ' + this.service.CustomerContactPersonData.Email;
                                const Activity3 = this.service.CustomerContactPersonData.NameTitle + ' ' +
                                    this.service.CustomerContactPersonData.FirstName + ' ' +
                                    this.service.CustomerContactPersonData.LastName + ' is added to the Company : '
                                    + this.service.formData.CompanyName + ' is added : on dated : ' + new Date(Date.parse(Date()));
                                this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer', this.service.formData.Id, 'Added', des, Activity3).subscribe();
                                this.refrestContactPersonlist();
                            }
                            if (response.Message === 'failure') {
                                this.toastr.warning('warning', response.MessageDescription);
                            }
                            this.service.CustomerContactPersonData.Id = 0;
                            this.service.CustomerContactPersonData.CustomerId = this.service.formData.Id;
                            this.service.CustomerContactPersonData.NameTitle = '';
                            this.service.CustomerContactPersonData.FirstName = '';
                            this.service.CustomerContactPersonData.LastName = '';
                            this.service.CustomerContactPersonData.Email = '';
                            this.service.CustomerContactPersonData.Phone = '';
                            this.service.CustomerContactPersonData.IsDefaultContact = false;
                        }
                    }, error => console.log(error));
                }, 500);
            }
        }
    }
    SetDefaultCntactPerson(n) {
        this.service.setdefaultContactPersonlist(n);
    }
    changeValue(event) {
        this.service.formData.CustomerDepartment = [];
        event.value.forEach(el => {
            this.service.formData.CustomerDepartment.push({
                Id: 0,
                CustomerId: this.service.formData.Id,
                SMTPSettingsId: Number(el.Id),
                SMTPName: el.Name
            });
            this.service.CustomerDepartmentData = new src_app_services_customer_model__WEBPACK_IMPORTED_MODULE_2__["CustomerDepartment"]();
        });
        this.service.SetCustomerWiseDepartment(this.service.formData.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success(response.MessageDescription);
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
}
CustomerAddComponent.ɵfac = function CustomerAddComponent_Factory(t) { return new (t || CustomerAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_8__["DocumentUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_9__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_11__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__["GenicProfileService"])); };
CustomerAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerAddComponent, selectors: [["app-customer-add"]], ngContentSelectors: _c0, decls: 372, vars: 100, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["routerLink", "/customers", 1, "kt-subheader__breadcrumbs-link"], ["autocomplete", "off", 3, "submit"], ["type", "hidden", "name", "Id", 3, "value", "ngModel", "ngModelChange"], [1, "customer-form"], [1, "nav", "nav-tabs"], ["data-toggle", "tab", "href", "#home", 1, "active"], [1, "fa", "fa-phone"], ["data-toggle", "tab", "href", "#menu0", 3, "click"], [1, "fa", "fa-users"], ["data-toggle", "tab", "href", "#menu1"], [1, "fa", "fa-home"], ["data-toggle", "tab", "href", "#menu2", 3, "ngClass"], [1, "fa", "fa-credit-card"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["billingaddress", ""], ["hqaddress", ""], ["data-toggle", "tab", "href", "#menu3"], [1, "fa", "fa-bell"], [1, "tab-content", "customer-tab-content"], ["id", "home", 1, "tab-pane", "fade", "in", "active"], [1, "col-md-12", "col-sm-12", "col-xs-12", "padd-left-0"], ["id", "accordionExample8", 1, "accordion", "accordion-solid", "accordion-toggle-svg"], [1, "card"], [1, "col-md-9"], ["id", "collapseOne8", "aria-labelledby", "headingOne8", "data-parent", "#accordionExample8", 1, "collapse", "show"], [1, "card-body", "padd-left-0", "padd-right-0"], [1, "kt-portlet__body", "create-new-client-portlet-body"], [1, "kt-section", "kt-section--first"], [1, "kt-section__body"], [1, "row"], [1, "col-lg-3"], [1, "form-group"], ["for", "", 1, "label"], ["class", "customer-logo-container", 4, "ngIf"], [1, "col-lg-9"], [1, "row", "no-spacing"], [1, "col-xl-2", "no-spacing"], ["for", "", 1, "label", "whole-text-required"], [1, "text-danger"], ["name", "NameTitle", 1, "form-control", 3, "ngModel", "ngModelChange"], ["NameTitle", "ngModel"], ["value", ""], ["value", "Mrs."], ["value", "Mr."], ["value", "Ms."], ["value", "Dr."], [1, "col-xl-5", "no-spacing"], ["name", "FirstName", "placeholder", "First Name", "min", "0", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FirstName", "ngModel"], ["name", "LastName", "placeholder", "Last Name", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["LastName", "ngModel"], [1, "form-group", "row"], [1, "col-lg-12"], ["name", "CompanyName", "placeholder", "Company Name", "maxlength", "128", 1, "form-control", 3, "ngModel", "ngModelChange"], ["CompanyName", "ngModel"], [1, "kt-switch", "kt-switch--icon"], ["name", "service.formData.UseCompanyNameAsPrimaryName", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["UseCompanyNameAsPrimaryName", "ngModel"], [1, "swither-bootstrap-learn", "switcher-customer"], ["type", "hidden", "name", "EmailArray.Id", 3, "value", "ngModel", "ngModelChange"], [1, "kt-section__title", "padd-top-10", "mrg-bottom-10"], ["class", "table table-striped properies-table-info ng-star-inserted", 4, "ngIf"], [1, "kt-section__body", "contact-bton"], [1, "form-group", "form-group-last", "row"], [1, "form-group", "row", "align-items-center"], [1, "row", "no-spacing", "col-md-12"], [1, "col-md-2"], ["name", "EmailArray.Key", 1, "form-control", "kt-select2", 3, "ngModel", "ngModelChange"], ["EmailArray.Key", "ngModel"], ["value", "Main"], ["value", "Work"], ["value", "Home"], [1, "col-md-8", "no-spacing"], ["name", "EmailArray.Value", "placeholder", "Email", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["EmailArray.Value", "ngModel"], [1, "col-md-2", "bt-cont"], ["href", "javascript:;", 1, "btn-sm", "btn", "btn-label-info", "btn-bold", 3, "click"], ["type", "hidden", "name", "MobileArray.Id", 3, "value", "ngModel", "ngModelChange"], ["name", "MobileArray.Key", 1, "form-control", "kt-select2", 3, "ngModel", "ngModelChange"], ["MobileArray.Key", "ngModel"], ["value", "Mobile"], ["value", "Fax"], ["value", "Other"], ["name", "MobileArray.Value", "placeholder", "Phone Number", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["MobileArray.Value", "ngModel"], ["id", "menu0", 1, "tab-pane"], ["id", "accordionExample81", 1, "accordion", "accordion-solid", "accordion-toggle-svg"], [1, "col-md-12"], ["id", "collapseOne81", "aria-labelledby", "headingOne8", "data-parent", "#accordionExample81", 1, "collapse", "show"], ["type", "hidden", "name", "service.CustomerContactPersonData.Id", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "service.CustomerContactPersonData.CustomerId", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "service.CustomerContactPersonData.IsDefaultContact", 3, "value", "ngModel", "ngModelChange"], ["name", "CustomerContactPersonData.NameTitle", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.CustomerContactPersonData.NameTitle", "ngModel"], ["name", "CustomerContactPersonData.FirstName", "placeholder", "First Name", "min", "0", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.CustomerContactPersonData.FirstName", "ngModel"], ["name", "CustomerContactPersonData.LastName", "placeholder", "Last Name", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.CustomerContactPersonData.LastName", "ngModel"], ["name", "CustomerContactPersonData.Phone", "placeholder", "Phone No", "min", "0", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["service.CustomerContactPersonData.Phone", "ngModel"], ["name", "CustomerContactPersonData.Email", "placeholder", "Email", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.CustomerContactPersonData.Email", "ngModel"], ["class", "btn-sm btn btn-label-info btn-bold", 3, "click", 4, "ngIf"], ["href", "javascript:;", "class", "btn-sm btn btn-label-info btn-bold", "style", "background-color:  lightgray !important;", 4, "ngIf"], ["id", "menu1", 1, "tab-pane", "fade"], ["type", "hidden", "name", "propertyservice.formData.Id", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "propertyservice.formData.Latitude", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "propertyservice.formData.Longitude", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "propertyservice.formData.CustomerId", 3, "value", "ngModel", "ngModelChange"], [1, "col-md-10"], [1, "kt-widget4"], ["class", "kt-section__body", 4, "ngIf"], [4, "ngIf"], ["id", "menu2", 1, "tab-pane", "fade"], [1, "padd-top-10"], [1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--brand"], ["type", "checkbox", "name", "IsAddressSame", 3, "ngModel", "ngModelChange", "change"], ["IsAddressSame", "ngModel"], ["name", "AddressStreet1", "ngx-google-places-autocomplete", "", "placeholder", "Add Address Line 1", 3, "options", "ngModel", "ngClass", "readonly", "onAddressChange", "ngModelChange"], ["AddressStreet1", "ngModel"], ["name", "AddressStreet2", "placeholder", "Add Address Line 2", 3, "ngModel", "ngClass", "readonly", "ngModelChange"], ["AddressStreet2", "ngModel"], ["name", "AddressUnitNo", "placeholder", "Address Unit No", 3, "ngModel", "ngClass", "readonly", "ngModelChange"], ["AddressUnitNo", "ngModel"], [1, "form-group", "row", 2, "display", "none"], ["name", "AddressState", "placeholder", "State", 3, "ngModel", "ngClass", "readonly", "ngModelChange"], ["AddressState", "ngModel"], [1, "input-group"], ["name", "AddressZipCode", "placeholder", "Postal Code", 1, "form-control", 3, "ngModel", "ngClass", "readonly", "ngModelChange"], ["AddressZipCode", "ngModel"], [1, "input-group-prepend"], [1, "input-group-text"], ["href", "javascript:;", 3, "click", 4, "ngIf"], ["name", "AddressCountry", 3, "ngModel", "ngClass", "disabled", "ngModelChange"], ["AddressCountry", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "menu3", 1, "tab-pane", "fade"], [1, "card-body", "padd-left-0"], ["name", "service.formData.ClientReminders", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["ClientReminders", "ngModel"], [1, "col-md-12", "padd-top-10", "padd-left-0", "padd-right-0"], ["name", "service.formData.ClientFollowUpEmails", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["ClientFollowUpEmails", "ngModel"], ["name", "service.formData.PrintEmailOnWorkOuder", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["PrintEmailOnWorkOuder", "ngModel"], ["class", "col-md-9", 4, "ngIf"], ["for", "RefferdBy", 1, "label"], ["name", "RefferdBy", "rows", "5", "placeholder", "Additional Remarks", 1, "form-control", "ng-pristine", "ng-valid", "ng-touched", 3, "ngModel", "ngModelChange"], ["RefferdBy", "ngModel"], [1, "creat-new-quote-footer", "clearfix"], [1, "new-request-footer-bottom", "pull-right"], ["type", "button", "routerLink", "/customers", 1, "btn", "btn-secondary"], [1, "btn-group"], ["type", "submit", 1, "btn", "btn-brand"], [1, "customer-logo-container"], ["class", "customer-logo-container-image", "alt", "Avatar", 3, "src", 4, "ngIf"], [1, "customer-logo-container-overlay"], [1, "col-md-6"], ["href", "javascript:;"], ["onclick", "document.getElementById('customerprofilelogo').click()", 1, "fa", "fa-camera"], ["id", "customerprofilelogo", "type", "file", 1, "custom-file-input-0", 3, "change"], ["File", ""], [1, "fa", "fa-trash", "text-danger", 3, "click"], ["alt", "Avatar", 1, "customer-logo-container-image", 3, "src"], [1, "table", "table-striped", "properies-table-info", "ng-star-inserted"], ["role", "row"], ["width", "15%"], ["width", "70%"], [4, "ngFor", "ngForOf"], [1, "btn-group", "btnOpp"], ["href", "javascript:;", "title", "edit", 1, "btn-Edit", 3, "click"], [1, "la", "la-edit"], ["href", "javascript:;", "title", "remove", 1, "btn-remove", 3, "click"], [1, "la", "la-trash-o"], ["width", "10%"], ["width", "50%"], [4, "ngFor", "ngForAsync", "ngForOf"], ["class", "kt-badge kt-badge--success kt-badge--inline kt-badge--pill", 4, "ngIf"], ["class", "kt-badge kt-badge--warning kt-badge--inline kt-badge--pill", 4, "ngIf"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "kt-badge--pill"], [1, "kt-badge", "kt-badge--warning", "kt-badge--inline", "kt-badge--pill"], ["href", "javascript:;", 3, "click"], [1, "btn-sm", "btn", "btn-label-info", "btn-bold", 3, "click"], ["href", "javascript:;", 1, "btn-sm", "btn", "btn-label-info", "btn-bold", 2, "background-color", "lightgray !important"], ["name", "propertyservice.formData.AddressStreet1", "ngx-google-places-autocomplete", "", "placeholder", "Address line 1", 1, "form-control", 3, "options", "ngModel", "onAddressChange", "ngModelChange"], ["propertyservice.formData.AddressStreet1", "ngModel"], ["name", "propertyservice.formData.AddressStreet2", "placeholder", "Address line 2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["propertyservice.formData.AddressStreet2", "ngModel"], ["name", "propertyservice.formData.AddressUnitNo", "placeholder", "Address Unit No", 1, "form-control", 3, "ngModel", "ngModelChange"], ["propertyservice.formData.AddressUnitNo", "ngModel"], ["name", "propertyservice.formData.AddressState", "placeholder", "State", 1, "form-control", 3, "ngModel", "ngModelChange"], ["propertyservice.formData.AddressState", "ngModel"], ["name", "propertyservice.formData.AddressZipCode", "placeholder", "Postal Code", 1, "form-control", 3, "ngModel", "ngModelChange"], ["propertyservice.formData.AddressZipCode", "ngModel"], ["name", "propertyservice.formData.AddressCountry", 1, "form-control", 3, "ngModel", "ngModelChange"], ["propertyservice.formData.AddressCountry", "ngModel"], ["class", "la la-refresh", 4, "ngIf"], ["class", "la la-spinner fa-spin", 4, "ngIf"], [1, "la", "la-refresh"], [1, "la", "la-spinner", "fa-spin"], [3, "value"], ["type", "hidden", "name", "propertyservice.formData.AddressStreet1", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "propertyservice.formData.AddressStreet2", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "propertyservice.formData.AddressUnitNo", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "propertyservice.formData.AddressCity", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "propertyservice.formData.AddressState", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "propertyservice.formData.AddressZipCode", 3, "value", "ngModel", "ngModelChange"], ["type", "hidden", "name", "propertyservice.formData.AddressCountry", 3, "value", "ngModel", "ngModelChange"], ["class", "form-group", 4, "ngIf"], ["tabindex", "0", "name", "CustomerDepartmentItems", 1, "myselectClass", 3, "multiple", "ngModel", "config", "options", "change", "ngModelChange"]], template: function CustomerAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CustomerAddComponent_Template_form_submit_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_19_listener($event) { return ctx.service.formData.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CONTACT DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_Template_a_click_27_listener() { return ctx.AddDefaultContactPerson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CONTACT PERSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "PROPERTY ADDRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CustomerAddComponent_ng_content_37_Template, 1, 0, "ng-content", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CustomerAddComponent_ng_template_38_Template, 1, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CustomerAddComponent_ng_template_40_Template, 1, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " NOTIFICATIONS & REMARKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Profile Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, CustomerAddComponent_div_62_Template, 13, 2, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CustomerAddComponent_div_63_Template, 2, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_select_ngModelChange_72_listener($event) { return ctx.service.formData.NameTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Mrs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Mr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Ms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Dr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "input", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_90_listener($event) { return ctx.service.formData.FirstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 59, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_96_listener($event) { return ctx.service.formData.LastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Company Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "input", 63, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_104_listener($event) { return ctx.service.formData.CompanyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 66, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_109_listener($event) { return ctx.service.formData.UseCompanyNameAsPrimaryName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Use company name as the primary name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_115_listener($event) { return ctx.service.EmailArray.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, CustomerAddComponent_table_118_Template, 11, 1, "table", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "select", 77, 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_select_ngModelChange_130_listener($event) { return ctx.service.EmailArray.Key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Enter Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "input", 83, 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_146_listener($event) { return ctx.service.EmailArray.Value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_Template_a_click_149_listener() { return ctx.AddArrayList(ctx.service.EmailArray.Id, ctx.service.EmailArray.Key, ctx.service.EmailArray.Value, "Email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_152_listener($event) { return ctx.service.MobileArray.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, CustomerAddComponent_table_153_Template, 11, 1, "table", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "select", 88, 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_select_ngModelChange_165_listener($event) { return ctx.service.MobileArray.Key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Fax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "input", 93, 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_187_listener($event) { return ctx.service.MobileArray.Value = $event; })("keypress", function CustomerAddComponent_Template_input_keypress_187_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerAddComponent_Template_a_click_190_listener() { return ctx.AddArrayList(ctx.service.MobileArray.Id, ctx.service.MobileArray.Key, ctx.service.MobileArray.Value, "Phone"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h3", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, CustomerAddComponent_table_203_Template, 15, 1, "table", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_205_listener($event) { return ctx.service.CustomerContactPersonData.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_206_listener($event) { return ctx.service.CustomerContactPersonData.CustomerId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_207_listener($event) { return ctx.service.CustomerContactPersonData.IsDefaultContact = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "select", 102, 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_select_ngModelChange_218_listener($event) { return ctx.service.CustomerContactPersonData.NameTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Mrs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Mr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Ms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Dr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "input", 104, 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_236_listener($event) { return ctx.service.CustomerContactPersonData.FirstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "input", 106, 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_244_listener($event) { return ctx.service.CustomerContactPersonData.LastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " Mobile No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "input", 108, 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_250_listener($event) { return ctx.service.CustomerContactPersonData.Phone = $event; })("keypress", function CustomerAddComponent_Template_input_keypress_250_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "input", 110, 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_258_listener($event) { return ctx.service.CustomerContactPersonData.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](261, CustomerAddComponent_a_261_Template, 2, 1, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](262, CustomerAddComponent_a_262_Template, 2, 1, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_264_listener($event) { return ctx.propertyservice.formData.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "input", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_265_listener($event) { return ctx.propertyservice.formData.Latitude = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_266_listener($event) { return ctx.propertyservice.formData.Longitude = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "input", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_267_listener($event) { return ctx.propertyservice.formData.CustomerId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](272, CustomerAddComponent_div_272_Template, 44, 9, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](273, CustomerAddComponent_div_273_Template, 12, 14, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "label", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "input", 126, 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_278_listener($event) { return ctx.service.formData.IsAddressSame = $event; })("change", function CustomerAddComponent_Template_input_change_278_listener() { return ctx.billingaddresssame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " address is the same as mailing address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Add Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "input", 128, 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAddressChange", function CustomerAddComponent_Template_input_onAddressChange_286_listener($event) { return ctx.handleAddressChange($event, "billing"); })("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_286_listener($event) { return ctx.service.formData.AddressStreet1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Add Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "input", 130, 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_292_listener($event) { return ctx.service.formData.AddressStreet2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Address Unit No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "input", 132, 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_298_listener($event) { return ctx.service.formData.AddressUnitNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Add State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "input", 135, 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_304_listener($event) { return ctx.service.formData.AddressState = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "input", 138, 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_311_listener($event) { return ctx.service.formData.AddressZipCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](315, CustomerAddComponent_a_315_Template, 3, 2, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Select Your Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "select", 143, 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_select_ngModelChange_320_listener($event) { return ctx.service.formData.AddressCountry = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](324, CustomerAddComponent_option_324_Template, 2, 2, "option", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "input", 148, 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_329_listener($event) { return ctx.service.formData.ClientReminders = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " Client reminders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " sent for upcoming visits. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "input", 151, 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_339_listener($event) { return ctx.service.formData.ClientFollowUpEmails = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, " Client follow-up emails ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " when you close a job. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "input", 153, 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_input_ngModelChange_349_listener($event) { return ctx.service.formData.PrintEmailOnWorkOuder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " Print email on document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " when you download. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](356, CustomerAddComponent_div_356_Template, 2, 1, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "label", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Additional Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "textarea", 157, 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerAddComponent_Template_textarea_ngModelChange_360_listener($event) { return ctx.service.formData.RefferdBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "button", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "button", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.btnText, " Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Id)("ngModel", ctx.service.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.formData.IsAddressSame ? "action-is-disabled" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.EngineerType)("ngIfThen", _r3)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isValidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.NameTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isValidFirstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.FirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isValidLastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.LastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isValidCompanyname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.CompanyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.UseCompanyNameAsPrimaryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.EmailArray.Id)("ngModel", ctx.service.EmailArray.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.EmailArrayList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isValidEmailTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.EmailArray.Key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isValidEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.EmailArray.Value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.arrayemailbutton, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.MobileArray.Id)("ngModel", ctx.service.MobileArray.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.MobileArrayList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isValidPhoneTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.MobileArray.Key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isValidPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.MobileArray.Value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.arrayphonebutton, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.CustomerContactPersonList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.CustomerContactPersonData.Id)("ngModel", ctx.service.CustomerContactPersonData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.CustomerContactPersonData.CustomerId)("ngModel", ctx.service.CustomerContactPersonData.CustomerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.CustomerContactPersonData.IsDefaultContact)("ngModel", ctx.service.CustomerContactPersonData.IsDefaultContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isContactersonTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.CustomerContactPersonData.NameTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isContactersonFirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.CustomerContactPersonData.FirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isContactersonLastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.CustomerContactPersonData.LastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.CustomerContactPersonData.Phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.CustomerContactPersonData.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.CustomerContactPersonData.NameTitle !== "" && ctx.service.CustomerContactPersonData.FirstName !== "" && ctx.service.CustomerContactPersonData.LastName !== "" && ctx.service.CustomerContactPersonData.Email !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.CustomerContactPersonData.NameTitle === "" || ctx.service.CustomerContactPersonData.FirstName === "" || ctx.service.CustomerContactPersonData.LastName === "" || ctx.service.CustomerContactPersonData.Email === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.propertyservice.formData.Id)("ngModel", ctx.propertyservice.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.propertyservice.formData.Latitude)("ngModel", ctx.propertyservice.formData.Latitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.propertyservice.formData.Longitude)("ngModel", ctx.propertyservice.formData.Longitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.propertyservice.formData.CustomerId)("ngModel", ctx.propertyservice.formData.CustomerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.propertyservice.Propertylist.length <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.propertyservice.Propertylist.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.IsAddressSame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options)("ngModel", ctx.service.formData.AddressStreet1)("ngClass", ctx.service.formData.IsAddressSame ? "form-control action-is-disabled" : "form-control")("readonly", ctx.service.formData.IsAddressSame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressStreet2)("ngClass", ctx.service.formData.IsAddressSame ? "form-control action-is-disabled" : "form-control")("readonly", ctx.service.formData.IsAddressSame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressUnitNo)("ngClass", ctx.service.formData.IsAddressSame ? "form-control action-is-disabled" : "form-control")("readonly", ctx.service.formData.IsAddressSame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressState)("ngClass", ctx.service.formData.IsAddressSame ? "form-control action-is-disabled" : "form-control")("readonly", ctx.service.formData.IsAddressSame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressZipCode)("ngClass", ctx.service.formData.IsAddressSame ? "form-control action-is-disabled" : "form-control")("readonly", ctx.service.formData.IsAddressSame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.service.formData.AddressZipCode == null ? null : ctx.service.formData.AddressZipCode.length) === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressCountry)("ngClass", ctx.service.formData.IsAddressSame ? "form-control action-is-disabled" : "form-control")("disabled", ctx.service.formData.IsAddressSame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countrylist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.ClientReminders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.ClientFollowUpEmails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.PrintEmailOnWorkOuder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.CustomerDepartmentTypeList.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.RefferdBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.createbuttontext, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxControlValueAccessor"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16__["GooglePlaceDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_17__["SelectDropDownComponent"]], styles: [".kt-widget4__item.contact-details-new-quote[_ngcontent-%COMP%]   span.fa.fa-user-circle[_ngcontent-%COMP%]{color:#ff8533}.kt-widget4__item.contact-details-new-quote[_ngcontent-%COMP%]   span.fa.fa-home[_ngcontent-%COMP%]{background-color:#ff8533}.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]   .kt-widget4__title[_ngcontent-%COMP%]:hover{color:#0089cd}.kt-portlet__body.create-new-client-portlet-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{margin-bottom:15px}.btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color:#ff8533}.customer_all[_ngcontent-%COMP%]{margin-bottom:15px}.customer_all[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   select.btn[_ngcontent-%COMP%]{background-color:#ff8533!important;color:#fff}.text-info[_ngcontent-%COMP%]{color:#fff}span.btn.btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa;color:#000}.customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c3e7fa!important}.kt-iconbox--wave[_ngcontent-%COMP%]{background-color:#ff853329;border:1px solid #ff8533}.kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{fill:#ff8533}.btn-group-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%] > .btn[_ngcontent-xmv-c1][_ngcontent-%COMP%], .btn-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%]{padding:.5rem .7rem}.table-checkable[_ngcontent-%COMP%]   .customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:.5rem .7rem}.kt-portlet__head.profile-details-info[_ngcontent-%COMP%]{display:none!important}.customer-listing-detail-section[_ngcontent-%COMP%]   ul.nav.nav-tabs.nav-tabs-line.nav-tabs-bold.nav-tabs-line-brand[_ngcontent-%COMP%]{background-color:#0084ca}.customer-listing-detail-section[_ngcontent-%COMP%]   ul.nav.nav-tabs.nav-tabs-line.nav-tabs-bold.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{color:#fff}.nav-tabs.nav-tabs-line.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.customer-listing-detail-section[_ngcontent-%COMP%]   .nav-tabs.nav-tabs-line.nav-tabs-line-brand.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-tabs.nav-tabs-line.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%], .nav-tabs.nav-tabs-line.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover, .nav-tabs.nav-tabs-line.nav-tabs-line-brand.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#0084ca!important}.nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#0084ca!important}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]{background-color:#ffebde}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]:after{border-left-color:#ffebde!important}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]   .kt-wizard-v2__nav-icon[_ngcontent-%COMP%]{color:#ff8533}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]{background-color:#0084ca}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]   .kt-portlet__head-label[_ngcontent-%COMP%]   .kt-portlet__head-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]   .kt-portlet__head-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff}.fade[_ngcontent-%COMP%]:not(.show){opacity:1}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;border-bottom:none;padding:20px 15px;background-color:#f1f1f1;margin-bottom:0}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(100%/5);border-right:1px solid #d6d6d6}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child(){border-right:0}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#e7e7e7;color:#000;font-size:14px;padding:10px 18px;text-align:center;display:block}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000;margin-right:10px;font-size:18px;text-align:center}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#21366b;color:#fff}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#fff}.tab-content[_ngcontent-%COMP%]{background-color:#fff;margin:15px;padding:15px;box-shadow:10px 10px 10px #e7e7e7;margin-top:0}.contact-bton[_ngcontent-%COMP%]   .btn-sm.btn.btn-label-info.btn-bold[_ngcontent-%COMP%]{display:block}.kt-portlet__body.create-new-client-portlet-body.create-new-property-details[_ngcontent-%COMP%]{background-color:#fff}.label[_ngcontent-%COMP%]{font-weight:600;color:#000}.accordion.accordion-toggle-svg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:1.5rem}.kt-section[_ngcontent-%COMP%]   .kt-section__heading[_ngcontent-%COMP%], .kt-section[_ngcontent-%COMP%]   .kt-section__title[_ngcontent-%COMP%]{font-size:1.5rem}.btn-sm.btn.btn-label-info.btn-bold[_ngcontent-%COMP%]{margin-top:25px}#menu3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:15px}.switcher-customer[_ngcontent-%COMP%]{top:-15px;position:relative}.kt-portlet__head-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px!important;color:#fff!important}.action-is-disabled[_ngcontent-%COMP%]{cursor:no-drop}.team-inner-1[_ngcontent-%COMP%]{margin-top:15px;padding:0 15px}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#000;display:inline-block;padding:8px 8px;background-color:#eaeaea;margin:0 3px 5px;border-radius:5px}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:40%;height:20;width:20}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size:10px;padding-left:8px;padding-top:6px}.customer-logo-container[_ngcontent-%COMP%]{position:relative;width:100%;max-width:100%}.customer-logo-container-image[_ngcontent-%COMP%]{display:block;width:100%;height:auto}.customer-logo-container-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;background:#000;background:rgba(0,0,0,.5);color:#f1f1f1;width:100%;transition:.5s ease;opacity:0;color:#fff;font-size:30px;padding:6px;text-align:center}.customer-logo-container[_ngcontent-%COMP%]:hover   .customer-logo-container-overlay[_ngcontent-%COMP%]{opacity:1}.box-1[_ngcontent-%COMP%]{display:inline-block;width:25%}.check-mark[_ngcontent-%COMP%]{margin-top:18px;position:relative}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.expo[_ngcontent-%COMP%]{float:right}.checkbox-downbox[_ngcontent-%COMP%]{position:absolute;bottom:-20px;background-color:#fff;padding:10px;border-radius:8px;width:131%;z-index:9}.txtSearchTicket[_ngcontent-%COMP%]{float:right;margin-top:10px;line-height:25px!important;padding:4px 24px;width:30%;border:none;border-radius:16px;background-color:#eaeaea}.dropdown-menu.show[_ngcontent-%COMP%]{margin-left:-105px}.myCOlsp[_ngcontent-%COMP%]{color:#000;font-size:21px;font-weight:600}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vY3VzdG9tZXJzL2N1c3RvbWVyLWFkZC9jdXN0b21lci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUUsYUFBYSxDQUFDLDREQUE0RCx3QkFBd0IsQ0FBQyx1REFBdUQsYUFBYSxDQUFDLCtEQUErRCxrQkFBa0IsQ0FBQyxXQUFXLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDLGNBQWMsa0JBQWtCLENBQUMsb0NBQW9DLGtDQUFrQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLFVBQVUsQ0FBQywyQkFBMkIsd0JBQXdCLENBQUMsVUFBVSxDQUFDLDJDQUEyQyx1QkFBdUIsQ0FBQyxrQkFBa0IsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLFlBQVksQ0FBQyxvRkFBb0YsbUJBQW1CLENBQUMsMERBQTBELG1CQUFtQixDQUFDLHVDQUF1QyxzQkFBc0IsQ0FBQyxpR0FBaUcsd0JBQXdCLENBQUMsNEdBQTRHLFVBQVUsQ0FBQyxpREFBaUQsVUFBVSxDQUFDLCtTQUErUyx1QkFBdUIsQ0FBQyx1RkFBdUYsdUJBQXVCLENBQUMsb0lBQW9JLHdCQUF3QixDQUFDLDBJQUEwSSxtQ0FBbUMsQ0FBQyw0SkFBNEosYUFBYSxDQUFDLGlFQUFpRSx3QkFBd0IsQ0FBQyxrSEFBa0gsVUFBVSxDQUFDLDRGQUE0RixVQUFVLENBQUMsaUJBQWlCLFNBQVMsQ0FBQyxrQkFBa0IsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsa0NBQWtDLGNBQWMsQ0FBQyx1QkFBdUIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMseUJBQXlCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsMkRBQTJELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywrREFBK0QsVUFBVSxDQUFDLGFBQWEscUJBQXFCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQ0FBaUMsQ0FBQyxZQUFZLENBQUMsa0RBQWtELGFBQWEsQ0FBQyw2RUFBNkUscUJBQXFCLENBQUMsT0FBTyxlQUFlLENBQUMsVUFBVSxDQUFDLCtEQUErRCxnQkFBZ0IsQ0FBQyxnRUFBZ0UsZ0JBQWdCLENBQUMsb0NBQW9DLGVBQWUsQ0FBQyxhQUFhLFlBQVksQ0FBQyxtQkFBbUIsU0FBUyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5Qix3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsY0FBYyxDQUFDLGNBQWMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsVUFBVSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUNBQWlDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsZ0VBQWdFLFNBQVMsQ0FBQyxPQUFPLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxZQUFZLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsVUFBVSxDQUFDLE1BQU0sV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLFdBQVcsQ0FBQyxlQUFlLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBb0Isa0JBQWtCLENBQUMsU0FBUyxVQUFVLENBQUMsY0FBYyxDQUFDLGVBQWUiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9jdXN0b21lcnMvY3VzdG9tZXItYWRkL2N1c3RvbWVyLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmt0LXdpZGdldDRfX2l0ZW0uY29udGFjdC1kZXRhaWxzLW5ldy1xdW90ZSBzcGFuLmZhLmZhLXVzZXItY2lyY2xle2NvbG9yOiNmZjg1MzN9Lmt0LXdpZGdldDRfX2l0ZW0uY29udGFjdC1kZXRhaWxzLW5ldy1xdW90ZSBzcGFuLmZhLmZhLWhvbWV7YmFja2dyb3VuZC1jb2xvcjojZmY4NTMzfS5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtIC5rdC13aWRnZXQ0X190aXRsZTpob3Zlcntjb2xvcjojMDA4OWNkfS5rdC1wb3J0bGV0X19ib2R5LmNyZWF0ZS1uZXctY2xpZW50LXBvcnRsZXQtYm9keSAuZm9ybS1jb250cm9se21hcmdpbi1ib3R0b206MTVweH0uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6I2ZmODUzM30uY3VzdG9tZXJfYWxse21hcmdpbi1ib3R0b206MTVweH0uY3VzdG9tZXJfYWxsIC5idG4tZ3JvdXAgc2VsZWN0LmJ0bntiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzMhaW1wb3J0YW50O2NvbG9yOiNmZmZ9LnRleHQtaW5mb3tjb2xvcjojZmZmfXNwYW4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6I2MzZTdmYTtjb2xvcjojMDAwfS5jdXN0b21lci1saXN0LXZpZXctaW5mbyAuYnRuLWdyb3VwIC5idG4gaXtjb2xvcjojYzNlN2ZhIWltcG9ydGFudH0ua3QtaWNvbmJveC0td2F2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzMyOTtib3JkZXI6MXB4IHNvbGlkICNmZjg1MzN9Lmt0LXN2Zy1pY29uIGcgW2ZpbGxde2ZpbGw6I2ZmODUzM30uYnRuLWdyb3VwLXNtW19uZ2NvbnRlbnQteG12LWMxXT4uYnRuW19uZ2NvbnRlbnQteG12LWMxXSwuYnRuLXNtW19uZ2NvbnRlbnQteG12LWMxXXtwYWRkaW5nOi41cmVtIC43cmVtfS50YWJsZS1jaGVja2FibGUgLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIC5idG4tZ3JvdXAgLmJ0bntwYWRkaW5nOi41cmVtIC43cmVtfS5rdC1wb3J0bGV0X19oZWFkLnByb2ZpbGUtZGV0YWlscy1pbmZve2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmN1c3RvbWVyLWxpc3RpbmctZGV0YWlsLXNlY3Rpb24gdWwubmF2Lm5hdi10YWJzLm5hdi10YWJzLWxpbmUubmF2LXRhYnMtYm9sZC5uYXYtdGFicy1saW5lLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRjYX0uY3VzdG9tZXItbGlzdGluZy1kZXRhaWwtc2VjdGlvbiB1bC5uYXYubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1ib2xkLm5hdi10YWJzLWxpbmUtYnJhbmQgYS5uYXYtbGlua3tjb2xvcjojZmZmfS5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi5uYXYtdGFicyAubmF2LWxpbmsgaXtjb2xvcjojZmZmfS5jdXN0b21lci1saXN0aW5nLWRldGFpbC1zZWN0aW9uIC5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi10YWJzLWxpbmUtYnJhbmQubmF2Lm5hdi10YWJzIC5uYXYtbGluazpob3ZlciwubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1saW5lLWJyYW5kIGEubmF2LWxpbmsuYWN0aXZlLC5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi10YWJzLWxpbmUtYnJhbmQgYS5uYXYtbGluazpob3ZlciwubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1saW5lLWJyYW5kLm5hdi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle2NvbG9yOiMwMDg0Y2EhaW1wb3J0YW50fS5uYXYtdGFicy5uYXYtdGFicy1saW5lIGEubmF2LWxpbmsuYWN0aXZlIGksLm5hdi10YWJzLm5hdi10YWJzLWxpbmUgYS5uYXYtbGluazpob3ZlciBpe2NvbG9yOiMwMDg0Y2EhaW1wb3J0YW50fS5rdC13aXphcmQtdjIgLmt0LXdpemFyZC12Ml9fYXNpZGUgLmt0LXdpemFyZC12Ml9fbmF2IC5rdC13aXphcmQtdjJfX25hdi1pdGVtcyAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbVtkYXRhLWt0d2l6YXJkLXN0YXRlPWN1cnJlbnRde2JhY2tncm91bmQtY29sb3I6I2ZmZWJkZX0ua3Qtd2l6YXJkLXYyIC5rdC13aXphcmQtdjJfX2FzaWRlIC5rdC13aXphcmQtdjJfX25hdiAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbXMgLmt0LXdpemFyZC12Ml9fbmF2LWl0ZW1bZGF0YS1rdHdpemFyZC1zdGF0ZT1jdXJyZW50XTphZnRlcntib3JkZXItbGVmdC1jb2xvcjojZmZlYmRlIWltcG9ydGFudH0ua3Qtd2l6YXJkLXYyIC5rdC13aXphcmQtdjJfX2FzaWRlIC5rdC13aXphcmQtdjJfX25hdiAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbXMgLmt0LXdpemFyZC12Ml9fbmF2LWl0ZW1bZGF0YS1rdHdpemFyZC1zdGF0ZT1jdXJyZW50XSAua3Qtd2l6YXJkLXYyX19uYXYtaWNvbntjb2xvcjojZmY4NTMzfS5rdC1wb3J0bGV0X19oZWFkLmt0LXBvcnRsZXRfX2hlYWQtLWxnLmNvbnRhY3RfZGV0YWlsX3RhYmxlX2luZm97YmFja2dyb3VuZC1jb2xvcjojMDA4NGNhfS5rdC1wb3J0bGV0X19oZWFkLmt0LXBvcnRsZXRfX2hlYWQtLWxnLmNvbnRhY3RfZGV0YWlsX3RhYmxlX2luZm8gLmt0LXBvcnRsZXRfX2hlYWQtbGFiZWwgLmt0LXBvcnRsZXRfX2hlYWQtaWNvbiBpe2NvbG9yOiNmZmZ9Lmt0LXBvcnRsZXRfX2hlYWQua3QtcG9ydGxldF9faGVhZC0tbGcuY29udGFjdF9kZXRhaWxfdGFibGVfaW5mbyAua3QtcG9ydGxldF9faGVhZC1sYWJlbCBoM3tjb2xvcjojZmZmfS5mYWRlOm5vdCguc2hvdyl7b3BhY2l0eToxfS5jdXN0b21lci1mb3JtIHVse3dpZHRoOjEwMCU7Ym9yZGVyLWJvdHRvbTpub25lO3BhZGRpbmc6MjBweCAxNXB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTttYXJnaW4tYm90dG9tOjB9LmN1c3RvbWVyLWZvcm0gdWwgbGl7d2lkdGg6Y2FsYygxMDAlLzUpO2JvcmRlci1yaWdodDoxcHggc29saWQgI2Q2ZDZkNn0uY3VzdG9tZXItZm9ybSB1bCBsaTpsYXN0LWNoaWxkKCl7Ym9yZGVyLXJpZ2h0OjB9LmN1c3RvbWVyLWZvcm0gdWwgbGkgYXtiYWNrZ3JvdW5kOiNlN2U3ZTc7Y29sb3I6IzAwMDtmb250LXNpemU6MTRweDtwYWRkaW5nOjEwcHggMThweDt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmJsb2NrfS5jdXN0b21lci1mb3JtIHVsIGxpIGEgaXtjb2xvcjojMDAwO21hcmdpbi1yaWdodDoxMHB4O2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyfS5jdXN0b21lci1mb3JtIHVsIGxpIGEuYWN0aXZlLC5jdXN0b21lci1mb3JtIHVsIGxpIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjEzNjZiO2NvbG9yOiNmZmZ9LmN1c3RvbWVyLWZvcm0gdWwgbGkgYS5hY3RpdmUgaSwuY3VzdG9tZXItZm9ybSB1bCBsaSBhOmhvdmVyIGl7Y29sb3I6I2ZmZn0udGFiLWNvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO21hcmdpbjoxNXB4O3BhZGRpbmc6MTVweDtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNlN2U3ZTc7bWFyZ2luLXRvcDowfS5jb250YWN0LWJ0b24gLmJ0bi1zbS5idG4uYnRuLWxhYmVsLWluZm8uYnRuLWJvbGR7ZGlzcGxheTpibG9ja30ua3QtcG9ydGxldF9fYm9keS5jcmVhdGUtbmV3LWNsaWVudC1wb3J0bGV0LWJvZHkuY3JlYXRlLW5ldy1wcm9wZXJ0eS1kZXRhaWxze2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubGFiZWx7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiMwMDB9LmFjY29yZGlvbi5hY2NvcmRpb24tdG9nZ2xlLXN2ZyAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGV7Zm9udC1zaXplOjEuNXJlbX0ua3Qtc2VjdGlvbiAua3Qtc2VjdGlvbl9faGVhZGluZywua3Qtc2VjdGlvbiAua3Qtc2VjdGlvbl9fdGl0bGV7Zm9udC1zaXplOjEuNXJlbX0uYnRuLXNtLmJ0bi5idG4tbGFiZWwtaW5mby5idG4tYm9sZHttYXJnaW4tdG9wOjI1cHh9I21lbnUzIC5jYXJke3BhZGRpbmc6MTVweH0uc3dpdGNoZXItY3VzdG9tZXJ7dG9wOi0xNXB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5rdC1wb3J0bGV0X19oZWFkLWljb24gaXtmb250LXNpemU6MThweCFpbXBvcnRhbnQ7Y29sb3I6I2ZmZiFpbXBvcnRhbnR9LmFjdGlvbi1pcy1kaXNhYmxlZHtjdXJzb3I6bm8tZHJvcH0udGVhbS1pbm5lci0xe21hcmdpbi10b3A6MTVweDtwYWRkaW5nOjAgMTVweH0udGVhbS1pbm5lci0xIHVse3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1ib3R0b206MH0udGVhbS1pbm5lci0xIHVsIGxpe2NvbG9yOiMwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzo4cHggOHB4O2JhY2tncm91bmQtY29sb3I6I2VhZWFlYTttYXJnaW46MCAzcHggNXB4O2JvcmRlci1yYWRpdXM6NXB4fS50ZWFtLWlubmVyLTEgdWwgbGkgaW1ne2JvcmRlci1yYWRpdXM6NDAlO2hlaWdodDoyMDt3aWR0aDoyMH0udGVhbS1pbm5lci0xIHVsIGxpIC5jbG9zZXtmb250LXNpemU6MTBweDtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctdG9wOjZweH0uY3VzdG9tZXItbG9nby1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJX0uY3VzdG9tZXItbG9nby1jb250YWluZXItaW1hZ2V7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDphdXRvfS5jdXN0b21lci1sb2dvLWNvbnRhaW5lci1vdmVybGF5e3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2JhY2tncm91bmQ6IzAwMDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO2NvbG9yOiNmMWYxZjE7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOi41cyBlYXNlO29wYWNpdHk6MDtjb2xvcjojZmZmO2ZvbnQtc2l6ZTozMHB4O3BhZGRpbmc6NnB4O3RleHQtYWxpZ246Y2VudGVyfS5jdXN0b21lci1sb2dvLWNvbnRhaW5lcjpob3ZlciAuY3VzdG9tZXItbG9nby1jb250YWluZXItb3ZlcmxheXtvcGFjaXR5OjF9LmJveC0xe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjI1JX0uY2hlY2stbWFya3ttYXJnaW4tdG9wOjE4cHg7cG9zaXRpb246cmVsYXRpdmV9LnNlYXJjaC1iYXIgaW5wdXR7d2lkdGg6MTAwJX0uZXhwb3tmbG9hdDpyaWdodH0uY2hlY2tib3gtZG93bmJveHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206LTIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjhweDt3aWR0aDoxMzElO3otaW5kZXg6OX0udHh0U2VhcmNoVGlja2V0e2Zsb2F0OnJpZ2h0O21hcmdpbi10b3A6MTBweDtsaW5lLWhlaWdodDoyNXB4IWltcG9ydGFudDtwYWRkaW5nOjRweCAyNHB4O3dpZHRoOjMwJTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZWFlYWVhfS5kcm9wZG93bi1tZW51LnNob3d7bWFyZ2luLWxlZnQ6LTEwNXB4fS5teUNPbHNwe2NvbG9yOiMwMDA7Zm9udC1zaXplOjIxcHg7Zm9udC13ZWlnaHQ6NjAwfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-add',
                templateUrl: './customer-add.component.html',
                styleUrls: ['../customer-add/customer-add.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }, { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"] }, { type: src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_8__["DocumentUploadService"] }, { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_9__["PropertyService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_11__["UserlogService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__["GenicProfileService"] }]; }, null); })();


/***/ }),

/***/ "zNgj":
/*!***********************************************************!*\
  !*** ./src/app/application/customers/customers.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers.component */ "0lRL");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "7itd");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "lbdE");
/* harmony import */ var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer-add/customer-add.component */ "yjuK");
/* harmony import */ var _customer_list_custome_lists_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer-list/custome-lists.component */ "btRI");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-select-dropdown */ "8bGj");
/* harmony import */ var src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module */ "7kmZ");
/* harmony import */ var src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Team-List/TicketTeamList.module */ "5ngV");
/* harmony import */ var src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module */ "3jFn");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/generic-utils/Quote-Status-Component/QuoteStatusComponent.module */ "IWF8");
/* harmony import */ var src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module */ "HdV0");























const routes = [
    { path: '', component: _customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"],
        children: [
            { path: '', component: _customer_list_custome_lists_component__WEBPACK_IMPORTED_MODULE_12__["CustomerListComponent"] },
            { path: 'customer-add', component: _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_11__["CustomerAddComponent"] },
            { path: 'customer-edit/:Id', component: _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_11__["CustomerAddComponent"] },
            { path: 'customer-details/:Id', component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_10__["CustomerDetailsComponent"] }
        ] },
];
class CustomersModule {
}
CustomersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomersModule });
CustomersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomersModule_Factory(t) { return new (t || CustomersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_13__["SelectDropDownModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({ apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].googleapiKey }),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_14__["TicketStatusComponentModule"],
            src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_15__["TicketTeamListModule"],
            src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_16__["TicketDateTimeFormatModule"],
            src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_18__["QuoteStatusComponentModule"],
            src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_19__["TicketFeedbackComponentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomersModule, { declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"],
        _customer_list_custome_lists_component__WEBPACK_IMPORTED_MODULE_12__["CustomerListComponent"],
        _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_11__["CustomerAddComponent"],
        _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_10__["CustomerDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"],
        ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_13__["SelectDropDownModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_14__["TicketStatusComponentModule"],
        src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_15__["TicketTeamListModule"],
        src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_16__["TicketDateTimeFormatModule"],
        src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_18__["QuoteStatusComponentModule"],
        src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_19__["TicketFeedbackComponentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"],
                    _customer_list_custome_lists_component__WEBPACK_IMPORTED_MODULE_12__["CustomerListComponent"],
                    _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_11__["CustomerAddComponent"],
                    _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_10__["CustomerDetailsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"],
                    ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_13__["SelectDropDownModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({ apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].googleapiKey }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_14__["TicketStatusComponentModule"],
                    src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_15__["TicketTeamListModule"],
                    src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_16__["TicketDateTimeFormatModule"],
                    src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_18__["QuoteStatusComponentModule"],
                    src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_19__["TicketFeedbackComponentModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=application-customers-customers-module-es2015.js.map