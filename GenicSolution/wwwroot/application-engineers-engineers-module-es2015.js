(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-engineers-engineers-module"],{

/***/ "0eaW":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/from-ratio.js ***!
  \************************************************************/
/*! exports provided: fromRatio, legacyRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return fromRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return legacyRandom; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "SfhT");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "gMo9");


function fromRatio(ratio, opts) {
    var newColor = {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.r),
        g: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.g),
        b: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.b),
    };
    if (ratio.a !== undefined) {
        newColor.a = Number(ratio.a);
    }
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](newColor, opts);
}
function legacyRandom() {
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]({
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    });
}


/***/ }),

/***/ "4hpg":
/*!******************************************************************************!*\
  !*** ./src/app/application/engineers/engineer-add/engineer-add.component.ts ***!
  \******************************************************************************/
/*! exports provided: EngineerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerAddComponent", function() { return EngineerAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! email-validator */ "H/qo");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _engineer_view_geofencing_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engineer-view-geofencing.Component */ "VTWt");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/engineer.service */ "+MZO");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/DocumentUpload.service */ "nXz1");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/property.service */ "Pffd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "7itd");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-color/sketch */ "P/1d");




















function EngineerAddComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.msgh1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.msgh2, "");
} }
function EngineerAddComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerAddComponent_div_62_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 144);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r25.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EngineerAddComponent_div_62_div_4_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 144);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r28.localPrependUrl, "/", ctx_r28.service.formData.EngineerLogo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EngineerAddComponent_div_62_div_4_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 144);
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", ctx_r29.service.formData.EngineerLogo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EngineerAddComponent_div_62_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EngineerAddComponent_div_62_div_4_img_1_Template, 1, 2, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EngineerAddComponent_div_62_div_4_img_2_Template, 1, 1, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.isImageBinary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r26.isImageBinary);
} }
function EngineerAddComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EngineerAddComponent_div_62_img_3_Template, 1, 1, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EngineerAddComponent_div_62_div_4_Template, 3, 2, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 141, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EngineerAddComponent_div_62_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.pickedOnAdd($event, "engineer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Choose file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.service.formData.EngineerLogo.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.service.formData.EngineerLogo.length > 0);
} }
function EngineerAddComponent_div_63_div_4_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 157);
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r34.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EngineerAddComponent_div_63_div_4_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 157);
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r35.service.formData.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EngineerAddComponent_div_63_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EngineerAddComponent_div_63_div_4_img_1_Template, 1, 1, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EngineerAddComponent_div_63_div_4_img_2_Template, 1, 1, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 154, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EngineerAddComponent_div_63_div_4_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.picked($event, "engineer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerAddComponent_div_63_div_4_Template_i_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.RemoveProfileImage("engineer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r32.service.formData.EngineerLogo == null ? null : ctx_r32.service.formData.EngineerLogo.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r32.service.formData.EngineerLogo == null ? null : ctx_r32.service.formData.EngineerLogo.length) > 0);
} }
function EngineerAddComponent_div_63_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r33.localPrependUrl, "/assets/svg/spinner.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EngineerAddComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile Logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EngineerAddComponent_div_63_div_4_Template, 13, 2, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EngineerAddComponent_div_63_div_5_Template, 2, 1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.loader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loader);
} }
function EngineerAddComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 158, 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_div_90_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.service.formData.Type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Foreman");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r8.isType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.service.formData.Type);
} }
function EngineerAddComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please select any one option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 167, 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_div_91_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.service.formData.CreateCustomer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 169, 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_div_91_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.service.formData.CreateCustomer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.service.formData.CreateCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Can create ", ctx_r9.currentUser.Ticket.toLowerCase(), " only for allotted customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.service.formData.CreateCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Can create ", ctx_r9.currentUser.Ticket.toLowerCase(), " for any customer");
} }
function EngineerAddComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please select any one option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 170, 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_div_92_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.service.formData.CreateForAllDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 172, 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_div_92_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.service.formData.CreateForAllDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.service.formData.CreateForAllDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Can create ", ctx_r10.currentUser.Ticket.toLowerCase(), " for same day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.service.formData.CreateForAllDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Can create ", ctx_r10.currentUser.Ticket.toLowerCase(), " for any date");
} }
function EngineerAddComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 173, 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_div_93_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.service.formData.AssignToOtherUser = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.service.formData.AssignToOtherUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Assign ", ctx_r11.currentUser.Ticket.toLowerCase(), " to another user ");
} }
function EngineerAddComponent_a_167_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 178);
} }
function EngineerAddComponent_a_167_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 179);
} }
function EngineerAddComponent_a_167_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerAddComponent_a_167_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.findAddressByPostalCode(ctx_r58.service.formData.AddressZipCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EngineerAddComponent_a_167_i_1_Template, 1, 0, "i", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EngineerAddComponent_a_167_i_2_Template, 1, 0, "i", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r20.IsPostalSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.IsPostalSearch);
} }
function EngineerAddComponent_option_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", x_r60.CountryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r60.CountryName, " ");
} }
function EngineerAddComponent_tr_273_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Drive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_tr_273_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.loginservice.PermissionData.DriveView = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_tr_273_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.loginservice.PermissionData.DriveCreate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_tr_273_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.loginservice.PermissionData.DriveEdit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_tr_273_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.loginservice.PermissionData.DriveRemove = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.loginservice.PermissionData.DriveView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.loginservice.PermissionData.DriveCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.loginservice.PermissionData.DriveEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.loginservice.PermissionData.DriveRemove);
} }
function EngineerAddComponent_tr_274_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Live Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_tr_274_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.loginservice.PermissionData.LiveTracking = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.loginservice.PermissionData.LiveTracking);
} }
class EngineerAddComponent {
    constructor(titleService, service, logService, docservice, loginservice, propertyservice, toastr, router, dialog, genicprofile) {
        this.titleService = titleService;
        this.service = service;
        this.logService = logService;
        this.docservice = docservice;
        this.loginservice = loginservice;
        this.propertyservice = propertyservice;
        this.toastr = toastr;
        this.router = router;
        this.dialog = dialog;
        this.genicprofile = genicprofile;
        this.isValid = true;
        this.isNameValid = true;
        this.isMobileValid = true;
        this.isEmailValid = true;
        this.isType = true;
        this.isEmergencyContactNo = true;
        this.options = { componentRestrictions: { country: ['SG'] } };
        this.lat = 1.3521;
        this.lng = 103.8198;
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
        this.btnText = 'Add';
        this.loader = false;
        this.isLimitOuver = false;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.service.LocalEngineerWiseIssueTypeList = [];
    }
    ngOnInit() {
        this.genicprofile.getCountryList(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.countrylist = response.result;
                }
            }
        }, error => console.log(error));
        if (this.router.url === '/engineers/engineer-add') {
            this.titleService.setTitle(this.currentUser.Engineer + ' Create | Genic Solution');
            if (!this.currentUser.Permissions.CustomerCreate) {
                this.router.navigate(['/dashboard']);
            }
            this.createbuttontext = 'Create';
            this.service.formData.Color = '#cccccc';
            this.btnText = 'Add';
            this.isImageBinary = true;
            setTimeout(() => {
                this.genicprofile.checkUserLimit(this.currentUser.Token, 'engineer').subscribe(res => {
                    if (res) {
                        const response = res;
                        if (response.Message === 'failure') {
                            this.toastr.warning('warning', response.MessageDescription);
                        }
                        if (response.Message === 'warning') {
                            this.isLimitOuver = true;
                            this.msgh1 = response.h1;
                            this.msgh2 = response.h2;
                        }
                    }
                }, error => console.log(error));
            }, 2000);
        }
        const Id = window.location.pathname.split('/').pop();
        if (Id !== 'engineer-add') {
            if (Id === '00000000-0000-0000-0000-000000000000' || Id === undefined) {
                this.router.navigate(['/engineers']);
            }
            this.service.getEngineerById(this.currentUser.Token, Id).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.service.formData = response.result;
                    }
                    this.titleService.setTitle(this.currentUser.Engineer + ' Edit | Genic Solution');
                    this.loginservice.getUserPermissions(this.currentUser.Token, this.service.formData.Id).subscribe(res => {
                        const tempData = res;
                        if (tempData.Message === 'success') {
                            this.loginservice.PermissionData = tempData.result;
                        }
                    }, error => console.log(error));
                }
            }, error => console.log(error));
            this.createbuttontext = 'Update';
            this.btnText = 'Edit';
            this.isImageBinary = true;
        }
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        let Base64String = reader.result.substr(reader.result);
        this.service.formData.EngineerLogo = Base64String.split(',')[1];
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
    pickedOnAdd(event, m) {
        this.isImageBinary = false;
        let fileList = event.target.files;
        const file = fileList[0];
        if (m === 'engineer') {
            this.EngineerLogoFile = file;
            this.handleInputChange(file);
        }
    }
    picked(event, m) {
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
            let type = m;
            this.docservice.uploadDocument(t, type, moduleid, '', remark, file).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.toastr.info('upload successfully');
                        if (m === 'engineer') {
                            this.service.formData.EngineerLogo = response.MessageDescription;
                        }
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
    RemoveProfileImage(m) {
        this.loader = true;
        let t = this.currentUser.Token;
        let type = m;
        let moduleid = this.service.formData.Id;
        let remark = '';
        this.docservice.RemoveDocument(t, type, moduleid, '', remark).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.info(response.MessageDescription);
                    if (m === 'engineer') {
                        this.service.formData.EngineerLogo = '';
                    }
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
    onSubmit() {
        this.isValid = true;
        this.isNameValid = true;
        this.isMobileValid = true;
        this.isEmailValid = true;
        this.service.formData.Type = Number(this.service.formData.Type);
        if (this.service.formData.EngineerName === '') {
            this.isValid = false;
            this.isNameValid = false;
            this.toastr.warning('warning', 'Please enter ' + this.currentUser.Engineer.toLowerCase() + ' name');
            return false;
        }
        if (this.service.formData.EngineerPhone === '') {
            this.isValid = false;
            this.isMobileValid = false;
            this.toastr.warning('warning', 'Please enter ' + this.currentUser.Engineer.toLowerCase() + ' mobile no');
            return false;
        }
        if (this.service.formData.EngineerPhone.length > 0) {
            let isphone = /^\d*$/.test(this.service.formData.EngineerPhone);
            if (!isphone) {
                this.toastr.warning('Warning', 'Please enter a valid phone');
                this.isValid = false;
                this.isMobileValid = false;
                return false;
            }
        }
        if (this.service.formData.EngineerEmail === '') {
            this.isValid = false;
            this.isEmailValid = false;
            this.toastr.warning('warning', 'Please enter ' + this.currentUser.Engineer.toLowerCase() + ' email');
            return false;
        }
        if (this.service.formData.EngineerEmail.length > 0) {
            if (!email_validator__WEBPACK_IMPORTED_MODULE_2__["validate"](this.service.formData.EngineerEmail)) {
                this.toastr.warning('Warning', 'Please enter a valid email');
                this.isValid = false;
                this.isEmailValid = false;
                return false;
            }
        }
        if (this.service.formData.EngineerPhone === this.service.formData.EmergencyNumber) {
            this.isValid = false;
            this.isEmergencyContactNo = false;
            this.toastr.warning('warning', 'Emergency contact number should be different');
            return false;
        }
        if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
            if (this.EngineerLogoFile !== undefined) {
                if (this.EngineerLogoFile.size >= 2000000) {
                    this.toastr.info('size too large', 'Maximum logo size is 2MB');
                    return false;
                }
            }
            if (this.EngineerLogoFile === undefined) {
                this.service.formData.EngineerLogo = '';
            }
            if (this.CertificationLogoFile !== undefined) {
                if (this.CertificationLogoFile.size >= 2000000) {
                    this.toastr.info('size too large', 'Maximum logo size is 2MB');
                    return false;
                }
            }
            this.insertrecord();
        }
        else {
            this.updaterecord();
        }
    }
    insertrecord() {
        this.createbuttontext = 'Loading...';
        this.service.postEngineerDetails(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success('Summited Successfully', 'New ' + this.currentUser.Engineer + ' Created');
                    this.service.formData.EngineerWiseZoneList = [];
                    const des = 'An ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + '(' + this.service.formData.Type + ')' +
                        ', Mobile No : ' + this.service.formData.EngineerPhone +
                        ', Email : ' + this.service.formData.EngineerEmail + ', is added by user : ' + this.currentUser.UserName;
                    const Activity = 'New ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + ' has been added ';
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Engineer, this.service.formData.Id, 'Added', des, Activity).subscribe();
                    this.router.navigate(['/engineers/']);
                }
                if (response.Message === 'failure') {
                    this.createbuttontext = 'Create';
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    updaterecord() {
        this.service.putEngineerDetails(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success('Summited Successfully', 'Update Record successfully');
                    this.service.formData.EngineerWiseZoneList = [];
                    const des = 'An ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + '(' + this.service.formData.Type + ')' +
                        ', Mobile No : ' + this.service.formData.EngineerPhone +
                        ', Email : ' + this.service.formData.EngineerEmail + ', is modified by user : ' + this.currentUser.UserName;
                    const Activity1 = 'Profile details of ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + ' has been changed ';
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Engineer, this.service.formData.Id, 'Modify', des, Activity1).subscribe();
                    this.router.navigate(['/engineers/']);
                }
                if (response.Message === 'failure') {
                    this.createbuttontext = 'Create';
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    handleAddressChange(address) {
        this.service.formData.AddressStreet1 = '';
        this.service.formData.AddressStreet2 = '';
        this.service.formData.AddressCity = '';
        this.service.formData.AddressState = '';
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
        this.service.formData.Latitude = this.lat.toString();
        this.service.formData.Longitude = this.lng.toString();
        this.service.formData.AddressStreet1 = this.street_number + this.route;
        this.service.formData.AddressStreet2 = this.administrative_area_level_2 + this.sublocality_level_3 +
            this.sublocality_level_2 +
            this.sublocality_level_1 + this.neighborhood + this.administrative_area_level_1;
        this.service.formData.AddressCity = '';
        this.service.formData.AddressState = '';
        this.service.formData.AddressZipCode = this.postal_code;
        this.service.formData.AddressCountry = this.country;
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
    findAddressByPostalCode(pc) {
        this.IsPostalSearch = true;
        if (pc.length === 6) {
            this.propertyservice.getAddressUsingPostalCode(Number(pc)).then(res => { this.addressresult = res.results; });
            setTimeout(() => {
                if (this.addressresult.length > 0) {
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
                    this.service.formData.Latitude = this.lat.toString();
                    this.service.formData.Longitude = this.lng.toString();
                    this.service.formData.AddressStreet2 = this.administrative_area_level_2 + this.sublocality_level_3 +
                        this.sublocality_level_2 +
                        this.sublocality_level_1 + this.neighborhood + this.administrative_area_level_1 + this.locality;
                    this.service.formData.AddressCity = '';
                    this.service.formData.AddressState = '';
                    this.service.formData.AddressZipCode = this.postal_code;
                    this.service.formData.AddressCountry = this.country;
                }
                this.IsPostalSearch = false;
            }, 1000);
        }
    }
    ngOnDestroy() {
        this.service.SetAsDefaultValues();
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    assignToEngIssueType(index) {
        this.service.LocalEngineerWiseIssueTypeList[index].IsAssigned = true;
    }
    removeToEngIssueType(index) {
        this.service.LocalEngineerWiseIssueTypeList[index].IsAssigned = false;
    }
    assignToEngZone(index) {
        // this.genicZoneService.LocalEngineerWiseZoneList[index].IsAssigned = true;
    }
    removeToEngZone(ZoneId, index) {
        // tslint:disable-next-line: max-line-length
        if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000' || this.service.formData.Id === undefined || this.service.formData.Id === null) {
            // this.genicZoneService.LocalEngineerWiseZoneList[index].IsAssigned = false;
        }
        else {
            // Swal.fire({
            //   title: 'Are you sure to remove this zone ?',
            //   text: 'All scheduled ticket belongs to this zone will be unallocated of this engineer !',
            //  // icon: 'warning',
            //   showCancelButton: true,
            //   confirmButtonColor: '#3085d6',
            //   cancelButtonColor: '#d33',
            //   confirmButtonText: 'Remove'
            // }).then((result) => {
            //   if (result.value) {
            //     Swal.fire(
            //       'Removed!',
            //       'Zone removed and all scheduled tickets unallocated of this engineer',
            //       'success'
            //     );
            //   }
            // });
            //this.genicZoneService.LocalEngineerWiseZoneList[index].IsAssigned = false;
        }
    }
    OpenZoneInPopup(z) {
        setTimeout(() => {
            this.OpenZonePopup(z);
        }, 100);
    }
    OpenZonePopup(z) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '900px';
        dialogConfig.height = '600px';
        dialogConfig.panelClass = 'geoCustomMatClass';
        dialogConfig.data = {};
        // dialogConfig.panelClass = 'geoCustomMatClass';
        //this.genicZoneService.setDefaultGenicZone();
        //this.genicZoneService.GenicZoneData = Object.assign({}, z);
        this.dialog.open(_engineer_view_geofencing_Component__WEBPACK_IMPORTED_MODULE_4__["EngineerViewGeofencingComponent"], dialogConfig).afterClosed().subscribe(res => {
        });
    }
    /// color event
    changeColorFolder(event) {
        this.service.formData.Color = event.color.hex;
    }
    savePermissions() {
        this.loginservice.updateUserPermission(this.currentUser.Token, 'engineer').subscribe(res => {
            const tempData = res;
            if (tempData.Message === 'success') {
                this.toastr.success('', 'Permission updated successfully.');
            }
            if (tempData.Message === 'failure') {
                this.toastr.error(tempData.MessageDescription);
            }
        });
    }
}
EngineerAddComponent.ɵfac = function EngineerAddComponent_Factory(t) { return new (t || EngineerAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_6__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_7__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_8__["DocumentUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_10__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__["GenicProfileService"])); };
EngineerAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EngineerAddComponent, selectors: [["app-engineer-add"]], decls: 304, vars: 58, consts: [["autocomplete", "off", 3, "submit"], ["form", "ngForm"], ["type", "hidden", "name", "Id", 3, "value"], ["type", "hidden", "name", "Latitude", 3, "value"], ["type", "hidden", "name", "Longitude", 3, "value"], ["type", "hidden", "name", "Working", 3, "value"], ["type", "hidden", "name", "IsActive", 3, "value"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item", 2, "margin", "20px 0"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/engineers", 1, "kt-subheader__breadcrumbs-link"], ["class", "alert alert-solid-danger alert-bold fade show", "role", "alert", 4, "ngIf"], [1, "new-quote-main-section"], [1, "engineer-add-sec"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#home", 1, "nav-link", "active"], [1, "fa", "fa-user"], ["data-toggle", "tab", "href", "#menu1", 1, "nav-link"], [1, "fa", "fa-map"], ["data-toggle", "tab", "href", "#menu4", 1, "nav-link"], [1, "fa", "fa-paint-brush"], ["class", "nav-item", 4, "ngIf"], [1, "tab-content"], ["id", "home", 1, "tab-pane", "active"], [1, "card", "col-md-9"], [1, "col-md-12--"], ["id", "headingOne8", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseOne8", "aria-expanded", "true", "aria-controls", "collapseOne8", 1, "card-title", "padd-left-0", "padd-right-0"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Shape", "points", "0 0 24 0 24 24 0 24"], ["d", "M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z", "id", "Path-94", "fill", "#000000", "fill-rule", "nonzero"], ["d", "M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z", "id", "Path-94", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3", "transform", "translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) "], ["id", "collapseOne8", "aria-labelledby", "headingOne8", "data-parent", "#accordionExample8", 1, "collapse", "show"], [1, "card-body", "padd-left-0", "padd-right-0"], [1, "kt-portlet__body", "create-new-client-portlet-body"], [1, "kt-section", "kt-section--first"], [1, "kt-section__body"], [1, "row", "no-spacing"], [1, "col-xl-12", "no-spacing"], [1, "row"], ["class", "col-xl-3", 4, "ngIf"], [1, "col-xl-9"], [1, "col-xl-12"], [1, "form-group"], ["for", ""], [1, "text-danger"], ["name", "EngineerName", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["EngineerName", "ngModel"], ["name", "EngineerPhone", "placeholder", "Mobile", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["EngineerPhone", "ngModel"], ["name", "EngineerEmail", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["EngineerEmail", "ngModel"], ["class", "col-xl-12", 4, "ngIf"], ["class", "col-sm-12 col-md-6 col-xl-6 custom-bordered", 4, "ngIf"], ["class", "col-sm-12 col-md-12 col-xl-12", 4, "ngIf"], [1, "col-sm-12", "col-md-12", "col-xl-12"], [1, "kt-switch", "kt-switch--icon"], ["name", "service.formData.LoginAccess", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["LoginAccess", "ngModel"], [1, "swither-bootstrap-learn", "switcher-customer"], [1, "card"], ["id", "headingTwo8", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseTwo8", "aria-expanded", "false", "aria-controls", "collapseTwo8", 1, "card-title", "collapsed", "padd-left-0", "padd-right-0"], ["id", "collapseTwo8", "aria-labelledby", "headingTwo8", "data-parent", "#accordionExample8", 1, "collapse"], ["name", "EmergencyName", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["EmergencyName", "ngModel"], ["name", "EmergencyNumber", "placeholder", "Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["EmergencyNumber", "ngModel"], ["name", "EmergencyRelation", "placeholder", "Relation", 1, "form-control", 3, "ngModel", "ngModelChange"], ["EmergencyRelation", "ngModel"], ["id", "menu1", 1, "tab-pane", "fade"], [1, "col-md-9", "no-padding"], [1, "form-group", "row"], [1, "col-lg-12"], ["name", "AddressStreet1", "ngx-google-places-autocomplete", "", "placeholder", "Address Street 1", 1, "form-control", 3, "options", "ngModel", "onAddressChange", "ngModelChange"], ["AddressStreet1", "ngModel"], ["name", "AddressStreet2", "placeholder", "Address Street 2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressStreet2", "ngModel"], ["name", "AddressUnitNo", "placeholder", "Address Unit No", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressUnitNo", "ngModel"], [1, "input-group"], ["name", "AddressZipCode", "placeholder", "Postal Code", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressZipCode", "ngModel"], [1, "input-group-prepend"], [1, "input-group-text"], ["href", "javascript:;", 3, "click", 4, "ngIf"], ["name", "AddressCountry", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressCountry", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "menu4", 1, "tab-pane", "fade"], [1, "col-lg-9"], [2, "height", "280px"], [1, "col-lg-3"], ["color", "service.formData.Color", 3, "onChangeComplete"], ["id", "menu5", 1, "tab-pane", "fade"], [1, "col-md-12", "col-sm-12", "colxs-12"], [1, "support-service-incident-form"], [1, "kt-portlet__body", "padd-top-0"], [1, "col-md-12"], ["type", "hidden", "name", "PermissionData.Id", 3, "value", "ngModel", "ngModelChange"], [1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", "dataTable", "no-footer", "dtr-inline"], [1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--brand"], ["name", "DashboardEngineer", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"], ["name", "EngineerTicketView", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"], ["name", "CanEngineerCreateTicket", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"], ["name", "EngineerProfileView", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"], ["name", "EngineerTimesheetView", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["name", "CloserEdit", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"], ["colspan", "5", 2, "text-align", "right"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", 3, "click"], [1, "new-requst-filter_form", "create-new-client-popup"], [1, "container-fluid"], [1, "creat-new-quote-footer", "col-md-9--"], [1, "clearfix"], [1, "new-request-footer-bottom", "pull-right"], ["type", "button", "routerLink", "/engineers", 1, "btn", "btn-secondary"], [1, "btn-group"], ["type", "submit", 1, "btn", "btn-brand", 3, "disabled"], ["role", "alert", 1, "alert", "alert-solid-danger", "alert-bold", "fade", "show"], [1, "alert-icon"], [1, "fa", "fa-exclamation-triangle"], [1, "alert-text"], [1, "alert-close"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "la", "la-close"], ["data-toggle", "tab", "href", "#menu5", 1, "nav-link"], [1, "col-xl-3"], ["style", "width: 100%;", 3, "src", 4, "ngIf"], ["class", "upload-image", 4, "ngIf"], [1, "custom-file"], ["id", "inputGroupFile01", "type", "file", 1, "custom-file-input", 3, "change"], ["File", ""], ["for", "inputGroupFile01", 1, "custom-file-label"], [2, "width", "100%", 3, "src"], [1, "upload-image"], ["for", "", 1, "label"], ["class", "customer-logo-container", 4, "ngIf"], [1, "customer-logo-container"], ["style", "width: 100%;", "class", "customer-logo-container-image", "alt", "Avatar", 3, "src", 4, "ngIf"], [1, "customer-logo-container-overlay"], [1, "col-md-6"], ["href", "javascript:;"], ["onclick", "document.getElementById('customerprofilelogo').click()", 1, "fa", "fa-camera"], ["id", "customerprofilelogo", "type", "file", 1, "custom-file-input-0", 3, "change"], [1, "col-md-6", "text-right"], [1, "fa", "fa-trash", "text-danger", 3, "click"], ["alt", "Avatar", 1, "customer-logo-container-image", 2, "width", "100%", 3, "src"], ["name", "Type", "placeholder", "Designation", 1, "form-control", "kt-select2", "add-other-border-right", 3, "ngModel", "ngModelChange"], ["Type", "ngModel"], ["value", "0"], ["value", "1"], ["value", "2"], [1, "col-sm-12", "col-md-6", "col-xl-6", "custom-bordered"], [1, "form-group", "padd-15"], [1, "kt-radio-list"], [1, "kt-radio", "kt-radio--bold", "kt-radio--brand"], ["type", "radio", "value", "Partial", "name", "CreateCustomer", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["CreateCustomer", "ngModel"], ["type", "radio", "value", "All", "name", "CreateCustomer", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["type", "radio", "value", "SameDate", "name", "CreateForAllDate", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["CreateForAllDate", "ngModel"], ["type", "radio", "value", "AllDate", "name", "CreateForAllDate", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["name", "service.formData.AssignToOtherUser", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["AssignToOtherUser", "ngModel"], ["href", "javascript:;", 3, "click"], ["class", "la la-refresh", 4, "ngIf"], ["class", "la la-spinner fa-spin", 4, "ngIf"], [1, "la", "la-refresh"], [1, "la", "la-spinner", "fa-spin"], [3, "value"], ["name", "DriveView", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"], ["name", "DriveCreate", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"], ["name", "DriveEdit", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"], ["name", "DriveRemove", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"], ["name", "LiveTracking", "type", "checkbox", 1, "ng-valid", "ng-dirty", "ng-touched", 3, "ngModel", "ngModelChange"]], template: function EngineerAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EngineerAddComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EngineerAddComponent_div_24_Template, 11, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EngineerAddComponent_li_41_Template, 4, 0, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "polygon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, EngineerAddComponent_div_62_Template, 13, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, EngineerAddComponent_div_63_Template, 6, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Enter Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_72_listener($event) { return ctx.service.formData.EngineerName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Enter Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_80_listener($event) { return ctx.service.formData.EngineerPhone = $event; })("keypress", function EngineerAddComponent_Template_input_keypress_80_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Enter Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 58, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_88_listener($event) { return ctx.service.formData.EngineerEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, EngineerAddComponent_div_90_Template, 14, 3, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, EngineerAddComponent_div_91_Template, 19, 4, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, EngineerAddComponent_div_92_Template, 19, 4, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, EngineerAddComponent_div_93_Template, 10, 2, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 65, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_98_listener($event) { return ctx.service.formData.LoginAccess = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Login Access ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Emergency Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "polygon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Enter Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "input", 72, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_122_listener($event) { return ctx.service.formData.EmergencyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Enter Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "input", 74, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_128_listener($event) { return ctx.service.formData.EmergencyNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Enter Relation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "input", 76, 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_134_listener($event) { return ctx.service.formData.EmergencyRelation = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Address Street 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "input", 82, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAddressChange", function EngineerAddComponent_Template_input_onAddressChange_144_listener($event) { return ctx.handleAddressChange($event); })("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_144_listener($event) { return ctx.service.formData.AddressStreet1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Address Street 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "input", 84, 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_150_listener($event) { return ctx.service.formData.AddressStreet2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Address Unit No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "input", 86, 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_156_listener($event) { return ctx.service.formData.AddressUnitNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "input", 89, 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_163_listener($event) { return ctx.service.formData.AddressZipCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](167, EngineerAddComponent_a_167_Template, 3, 2, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "select", 94, 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_select_ngModelChange_172_listener($event) { return ctx.service.formData.AddressCountry = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "option", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](176, EngineerAddComponent_option_176_Template, 2, 2, "option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "color-sketch", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangeComplete", function EngineerAddComponent_Template_color_sketch_onChangeComplete_187_listener($event) { return ctx.changeColorFolder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "input", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_199_listener($event) { return ctx.loginservice.PermissionData.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "table", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Capabilities(View)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Capabilities(Create)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Capabilities(Edit)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Capabilities(Remove)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "label", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "input", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_219_listener($event) { return ctx.loginservice.PermissionData.DashboardEngineer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "label", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_233_listener($event) { return ctx.loginservice.PermissionData.EngineerTicketView = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "label", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "input", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_238_listener($event) { return ctx.loginservice.PermissionData.CanEngineerCreateTicket = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "label", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "input", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_250_listener($event) { return ctx.loginservice.PermissionData.EngineerProfileView = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Timesheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "label", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_264_listener($event) { return ctx.loginservice.PermissionData.EngineerTimesheetView = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](273, EngineerAddComponent_tr_273_Template, 23, 4, "tr", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](274, EngineerAddComponent_tr_274_Template, 14, 1, "tr", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Closer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "label", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EngineerAddComponent_Template_input_ngModelChange_284_listener($event) { return ctx.loginservice.PermissionData.CloserEdit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerAddComponent_Template_a_click_291_listener() { return ctx.savePermissions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "update Permissions");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "button", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303);
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
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Latitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Longitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Working);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.IsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Engineer, "'s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.btnText, " ", ctx.currentUser.Engineer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLimitOuver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.Engineer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, " Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createbuttontext === "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createbuttontext === "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createbuttontext === "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isNameValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.EngineerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isMobileValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.EngineerPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isEmailValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.EngineerEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.EngineerType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.CanEngineerCreateTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.CanEngineerCreateTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.CanEngineerCreateTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.LoginAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.EmergencyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isEmergencyContactNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.EmergencyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.EmergencyRelation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options)("ngModel", ctx.service.formData.AddressStreet1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressStreet2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressUnitNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressZipCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.AddressZipCode.toString().length === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countrylist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, " Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.service.formData.Color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, " Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.loginservice.PermissionData.Id)("ngModel", ctx.loginservice.PermissionData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginservice.PermissionData.DashboardEngineer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.Ticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginservice.PermissionData.EngineerTicketView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginservice.PermissionData.CanEngineerCreateTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginservice.PermissionData.EngineerProfileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginservice.PermissionData.EngineerTimesheetView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.DriveView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.LiveTracking);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginservice.PermissionData.CloserEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.createbuttontext);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxControlValueAccessor"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_16__["GooglePlaceDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_17__["SketchComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RadioControlValueAccessor"]], styles: [".nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{background-color:#E7E7E7;color:black;font-size:17px !important;text-transform:uppercase !important;padding:12px 40px;}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black;}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:white !important}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active, .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{background-color:#22366B;color:white}\r\n.tab-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:transparent !important;border:none;}\r\n.tab-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background-color:#dedede;border-bottom:none;margin-bottom:0px;}\r\n.tab-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:0px;font-size:18px;font-weight:600;color:black;}\r\n.kt-portlet__body.create-new-client-portlet-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.kt-portlet__body.create-new-client-portlet-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px !important;font-weight:600;color:black !important;}\r\n#menu1[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{font-size: 14px;height: 50px;}\r\n#menu1[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:15px !important;}\r\n#menu1[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px !important;color:black !important;font-weight:600 !important;}\r\n.creat-new-quote-footer[_ngcontent-%COMP%]{margin:20px 0px;}\r\n.new-quote-main-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:white !important;padding-top:15px;padding-bottom:15px !important;}\r\n.new-requst-filter_form.create-new-client-popup[_ngcontent-%COMP%]{position:sticky;bottom:0;}\r\n.creat-new-quote-footer[_ngcontent-%COMP%]{padding:10px 0px;background-color:white;}\r\n.new-quote-main-section[_ngcontent-%COMP%]   .kt-section__body[_ngcontent-%COMP%]{padding:10px !important;background-color:white;}\r\n.no-padding[_ngcontent-%COMP%]{padding:0px;}\r\n.collapse[_ngcontent-%COMP%]:not(.show){display:block;}\r\n.form-group.creat-properties-form-group[_ngcontent-%COMP%]{width:100%;}\r\nspan.Ac[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {background-color: #2c77f4; padding: 5px 8px; border-radius: 0px; margin-right: 1px;}\r\nspan.Ac[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: white;}\r\n.switcher-customer[_ngcontent-%COMP%] { top:-20px;position: relative; }\r\nspan.Av[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {background-color: #0b8a03; padding: 5px 8px; border-radius: 0px; margin-right: 1px;}\r\nspan.Av[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: white;}\r\nspan.At[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {background-color: #8a033bbf; padding: 5px 8px; border-radius: 0px; margin-right: 1px;}\r\nspan.At[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: white;}\r\nspan.spnUnrigh[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {color: #ff0000a6; font-size: 19px;}\r\nspan.spnrigh[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {color: #0b8a03; font-size: 19px;}\r\n.btlZonelist[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {color: #000000; font-weight: 600;}\r\n.bt-newZone[_ngcontent-%COMP%]{background-color: #2c77f4;color: white !important;padding: 2px 14px;margin-left: 6px;cursor: pointer;}\r\n#EngiViewGeoMapId[_ngcontent-%COMP%] { height: 100%;}\r\n.cl-map-class[_ngcontent-%COMP%]{height: 450px;}\r\n.btnclose-ectc[_ngcontent-%COMP%] {text-align: right;}\r\n.btnclose-ectc[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color: #ec978a; color: red; border: none; padding: 6px 13px; margin-bottom: 4px;}\r\n.geoCustomMatClass[_ngcontent-%COMP%]{padding: 0 !important; margin: 0 !important;}\r\n.mat-dialog-container[_ngcontent-%COMP%]{padding: 0 !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZW5naW5lZXJzL2VuZ2luZWVyLWFkZC9lbmdpbmVlci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOEJBQThCLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxtQ0FBbUMsQ0FBQyxpQkFBaUIsQ0FBQztBQUNuSixnQ0FBZ0MsV0FBVyxDQUFDO0FBQzVDLDhFQUE4RSxzQkFBc0I7QUFDcEcsZ0hBQWdILHdCQUF3QixDQUFDLFdBQVc7QUFDcEosbUJBQW1CLHVDQUF1QyxDQUFDLFdBQVcsQ0FBQztBQUN2RSxnQ0FBZ0Msd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUM7QUFDOUYsNENBQTRDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBQ3pHLDZEQUE2RCxrQkFBa0IsQ0FBQztBQUNoRixtRUFBbUUseUJBQXlCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDO0FBQ3BJLHFCQUFxQixlQUFlLENBQUMsWUFBWSxDQUFDO0FBQ2xELG1CQUFtQiw2QkFBNkIsQ0FBQztBQUNqRCx5QkFBeUIseUJBQXlCLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLENBQUM7QUFDckcsd0JBQXdCLGVBQWUsQ0FBQztBQUN4Qyw4QkFBOEIsaUNBQWlDLENBQUMsZ0JBQWdCLENBQUMsOEJBQThCLENBQUM7QUFDaEgsZ0RBQWdELGVBQWUsQ0FBQyxRQUFRLENBQUM7QUFDekUsd0JBQXdCLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO0FBQ2hFLDBDQUEwQyx1QkFBdUIsQ0FBQyxzQkFBc0IsQ0FBQztBQUN6RixZQUFZLFdBQVcsQ0FBQztBQUN4QixxQkFBcUIsYUFBYSxDQUFDO0FBQ25DLHdDQUF3QyxVQUFVLENBQUM7QUFDbkQsV0FBVyx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztBQUM5RixZQUFZLFlBQVksQ0FBQztBQUN6QixxQkFBcUIsU0FBUyxDQUFDLGtCQUFrQixFQUFFO0FBQ25ELFdBQVcseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7QUFDOUYsWUFBWSxZQUFZLENBQUM7QUFFekIsV0FBVywyQkFBMkIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztBQUNoRyxZQUFZLFlBQVksQ0FBQztBQUN6QixrQkFBa0IsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO0FBQ3BELGdCQUFnQixjQUFjLEVBQUUsZUFBZSxDQUFDO0FBQ2hELG9CQUFvQixjQUFjLEVBQUUsZ0JBQWdCLENBQUM7QUFDckQsWUFBWSx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7QUFDakgsb0JBQW9CLFlBQVksQ0FBQztBQUNqQyxjQUFjLGFBQWEsQ0FBQztBQUM1QixnQkFBZ0IsaUJBQWlCLENBQUM7QUFDbEMsc0JBQXNCLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7QUFDakgsbUJBQW1CLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDO0FBQy9ELHNCQUFzQixxQkFBcUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2VuZ2luZWVycy9lbmdpbmVlci1hZGQvZW5naW5lZXItYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmt7YmFja2dyb3VuZC1jb2xvcjojRTdFN0U3O2NvbG9yOmJsYWNrO2ZvbnQtc2l6ZToxN3B4ICFpbXBvcnRhbnQ7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnQ7cGFkZGluZzoxMnB4IDQwcHg7fVxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluayBpe2NvbG9yOmJsYWNrO31cclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIGksIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIGl7Y29sb3I6d2hpdGUgIWltcG9ydGFudH1cclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluazphY3RpdmUsIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIyMzY2Qjtjb2xvcjp3aGl0ZX1cclxuLnRhYi1jb250ZW50IC5jYXJke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtib3JkZXI6bm9uZTt9XHJcbi50YWItY29udGVudCAuY2FyZCAuY2FyZC1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojZGVkZWRlO2JvcmRlci1ib3R0b206bm9uZTttYXJnaW4tYm90dG9tOjBweDt9XHJcbi50YWItY29udGVudCAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGV7bWFyZ2luLWJvdHRvbTowcHg7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOmJsYWNrO31cclxuLmt0LXBvcnRsZXRfX2JvZHkuY3JlYXRlLW5ldy1jbGllbnQtcG9ydGxldC1ib2R5IC5mb3JtLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5rdC1wb3J0bGV0X19ib2R5LmNyZWF0ZS1uZXctY2xpZW50LXBvcnRsZXQtYm9keSAuZm9ybS1ncm91cCBsYWJlbHtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjayAhaW1wb3J0YW50O31cclxuI21lbnUxIC5mb3JtLWNvbnRyb2x7Zm9udC1zaXplOiAxNHB4O2hlaWdodDogNTBweDt9XHJcbiNtZW51MSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjE1cHggIWltcG9ydGFudDt9XHJcbiNtZW51MSAuZm9ybS1ncm91cCBsYWJlbHtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NjAwICFpbXBvcnRhbnQ7fVxyXG4uY3JlYXQtbmV3LXF1b3RlLWZvb3RlcnttYXJnaW46MjBweCAwcHg7fVxyXG4ubmV3LXF1b3RlLW1haW4tc2VjdGlvbiAuY2FyZHtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlICFpbXBvcnRhbnQ7cGFkZGluZy10b3A6MTVweDtwYWRkaW5nLWJvdHRvbToxNXB4ICFpbXBvcnRhbnQ7fVxyXG4ubmV3LXJlcXVzdC1maWx0ZXJfZm9ybS5jcmVhdGUtbmV3LWNsaWVudC1wb3B1cHtwb3NpdGlvbjpzdGlja3k7Ym90dG9tOjA7fVxyXG4uY3JlYXQtbmV3LXF1b3RlLWZvb3RlcntwYWRkaW5nOjEwcHggMHB4O2JhY2tncm91bmQtY29sb3I6d2hpdGU7fVxyXG4ubmV3LXF1b3RlLW1haW4tc2VjdGlvbiAua3Qtc2VjdGlvbl9fYm9keXtwYWRkaW5nOjEwcHggIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO31cclxuLm5vLXBhZGRpbmd7cGFkZGluZzowcHg7fVxyXG4uY29sbGFwc2U6bm90KC5zaG93KXtkaXNwbGF5OmJsb2NrO31cclxuLmZvcm0tZ3JvdXAuY3JlYXQtcHJvcGVydGllcy1mb3JtLWdyb3Vwe3dpZHRoOjEwMCU7fVxyXG5zcGFuLkFjIGEge2JhY2tncm91bmQtY29sb3I6ICMyYzc3ZjQ7IHBhZGRpbmc6IDVweCA4cHg7IGJvcmRlci1yYWRpdXM6IDBweDsgbWFyZ2luLXJpZ2h0OiAxcHg7fVxyXG5zcGFuLkFjIGEgaXtjb2xvcjogd2hpdGU7fVxyXG4uc3dpdGNoZXItY3VzdG9tZXIgeyB0b3A6LTIwcHg7cG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbnNwYW4uQXYgYSB7YmFja2dyb3VuZC1jb2xvcjogIzBiOGEwMzsgcGFkZGluZzogNXB4IDhweDsgYm9yZGVyLXJhZGl1czogMHB4OyBtYXJnaW4tcmlnaHQ6IDFweDt9XHJcbnNwYW4uQXYgYSBpe2NvbG9yOiB3aGl0ZTt9XHJcblxyXG5zcGFuLkF0IGEge2JhY2tncm91bmQtY29sb3I6ICM4YTAzM2JiZjsgcGFkZGluZzogNXB4IDhweDsgYm9yZGVyLXJhZGl1czogMHB4OyBtYXJnaW4tcmlnaHQ6IDFweDt9XHJcbnNwYW4uQXQgYSBpe2NvbG9yOiB3aGl0ZTt9XHJcbnNwYW4uc3BuVW5yaWdoIGkge2NvbG9yOiAjZmYwMDAwYTY7IGZvbnQtc2l6ZTogMTlweDt9XHJcbnNwYW4uc3BucmlnaCBpIHtjb2xvcjogIzBiOGEwMzsgZm9udC1zaXplOiAxOXB4O31cclxuLmJ0bFpvbmVsaXN0IHRyIHRkIHtjb2xvcjogIzAwMDAwMDsgZm9udC13ZWlnaHQ6IDYwMDt9XHJcbi5idC1uZXdab25le2JhY2tncm91bmQtY29sb3I6ICMyYzc3ZjQ7Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7cGFkZGluZzogMnB4IDE0cHg7bWFyZ2luLWxlZnQ6IDZweDtjdXJzb3I6IHBvaW50ZXI7fVxyXG4jRW5naVZpZXdHZW9NYXBJZCB7IGhlaWdodDogMTAwJTt9XHJcbi5jbC1tYXAtY2xhc3N7aGVpZ2h0OiA0NTBweDt9XHJcbi5idG5jbG9zZS1lY3RjIHt0ZXh0LWFsaWduOiByaWdodDt9XHJcbi5idG5jbG9zZS1lY3RjIGJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5NzhhOyBjb2xvcjogcmVkOyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDZweCAxM3B4OyBtYXJnaW4tYm90dG9tOiA0cHg7fVxyXG4uZ2VvQ3VzdG9tTWF0Q2xhc3N7cGFkZGluZzogMCAhaW1wb3J0YW50OyBtYXJnaW46IDAgIWltcG9ydGFudDt9XHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lcntwYWRkaW5nOiAwICFpbXBvcnRhbnQ7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineerAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-engineer-add',
                templateUrl: './engineer-add.component.html',
                styleUrls: ['./engineer-add.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }, { type: src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_6__["EngineerService"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_7__["UserlogService"] }, { type: src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_8__["DocumentUploadService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }, { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_10__["PropertyService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__["GenicProfileService"] }]; }, null); })();


/***/ }),

/***/ "577q":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/conversion.js ***!
  \************************************************************/
/*! exports provided: rgbToRgb, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb, rgbToHex, rgbaToHex, rgbaToArgbHex, convertDecimalToHex, convertHexToDecimal, parseIntFromHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToRgb", function() { return rgbToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsl", function() { return rgbToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return rgbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return hsvToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHex", function() { return rgbaToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToArgbHex", function() { return rgbaToArgbHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDecimalToHex", function() { return convertDecimalToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHexToDecimal", function() { return convertHexToDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseIntFromHex", function() { return parseIntFromHex; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "gMo9");

function rgbToRgb(r, g, b) {
    return {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255) * 255,
        g: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255) * 255,
        b: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255) * 255,
    };
}
function rgbToHsl(r, g, b) {
    r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
    g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
    b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0;
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = ((g - b) / d) + (g < b ? 6 : 0);
                break;
            case g:
                h = ((b - r) / d) + 2;
                break;
            case b:
                h = ((r - g) / d) + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + ((q - p) * (6 * t));
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + ((q - p) * ((2 / 3) - t) * 6);
    }
    return p;
}
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360);
    s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
    l = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(l, 100);
    if (s === 0) {
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? (l * (1 + s)) : (l + s - (l * s));
        var p = (2 * l) - q;
        r = hue2rgb(p, q, h + (1 / 3));
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - (1 / 3));
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
    r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
    g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
    b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0;
    }
    else {
        switch (max) {
            case r:
                h = ((g - b) / d) + (g < b ? 6 : 0);
                break;
            case g:
                h = ((b - r) / d) + 2;
                break;
            case b:
                h = ((r - g) / d) + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
function hsvToRgb(h, s, v) {
    h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360) * 6;
    s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
    v = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - (f * s));
    var t = v * (1 - ((1 - f) * s));
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
    ];
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)),
    ];
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
    return parseInt(val, 16);
}


/***/ }),

/***/ "9lSu":
/*!***********************************************************!*\
  !*** ./src/app/application/engineers/engineers.module.ts ***!
  \***********************************************************/
/*! exports provided: EngineersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineersModule", function() { return EngineersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-color/sketch */ "P/1d");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "7itd");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _engineer_list_engineer_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./engineer-list/engineer-list.component */ "tXVt");
/* harmony import */ var _engineer_details_engineer_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./engineer-details/engineer-details.component */ "ZQ7O");
/* harmony import */ var _engineers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./engineers.component */ "Fr9r");
/* harmony import */ var src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module */ "7kmZ");
/* harmony import */ var src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Team-List/TicketTeamList.module */ "5ngV");
/* harmony import */ var src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module */ "3jFn");
/* harmony import */ var _engineer_add_engineer_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./engineer-add/engineer-add.component */ "4hpg");




















const routes = [
    { path: '', component: _engineers_component__WEBPACK_IMPORTED_MODULE_12__["EngineersComponent"],
        children: [
            { path: '', component: _engineer_list_engineer_list_component__WEBPACK_IMPORTED_MODULE_10__["EngineerListComponent"] },
            { path: 'engineer-add', component: _engineer_add_engineer_add_component__WEBPACK_IMPORTED_MODULE_16__["EngineerAddComponent"] },
            { path: 'engineer-edit/:Id', component: _engineer_add_engineer_add_component__WEBPACK_IMPORTED_MODULE_16__["EngineerAddComponent"] },
            { path: 'engineer-details/:Id', component: _engineer_details_engineer_details_component__WEBPACK_IMPORTED_MODULE_11__["EngineerDetailsComponent"] }
        ] },
];
class EngineersModule {
}
EngineersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EngineersModule });
EngineersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EngineersModule_Factory(t) { return new (t || EngineersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"],
            ngx_color_sketch__WEBPACK_IMPORTED_MODULE_7__["ColorSketchModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].googleapiKey }),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_13__["TicketStatusComponentModule"],
            src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_14__["TicketTeamListModule"],
            src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_15__["TicketDateTimeFormatModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EngineersModule, { declarations: [_engineers_component__WEBPACK_IMPORTED_MODULE_12__["EngineersComponent"],
        _engineer_list_engineer_list_component__WEBPACK_IMPORTED_MODULE_10__["EngineerListComponent"],
        _engineer_add_engineer_add_component__WEBPACK_IMPORTED_MODULE_16__["EngineerAddComponent"],
        _engineer_details_engineer_details_component__WEBPACK_IMPORTED_MODULE_11__["EngineerDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"],
        ngx_color_sketch__WEBPACK_IMPORTED_MODULE_7__["ColorSketchModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_13__["TicketStatusComponentModule"],
        src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_14__["TicketTeamListModule"],
        src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_15__["TicketDateTimeFormatModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _engineers_component__WEBPACK_IMPORTED_MODULE_12__["EngineersComponent"],
                    _engineer_list_engineer_list_component__WEBPACK_IMPORTED_MODULE_10__["EngineerListComponent"],
                    _engineer_add_engineer_add_component__WEBPACK_IMPORTED_MODULE_16__["EngineerAddComponent"],
                    _engineer_details_engineer_details_component__WEBPACK_IMPORTED_MODULE_11__["EngineerDetailsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"],
                    ngx_color_sketch__WEBPACK_IMPORTED_MODULE_7__["ColorSketchModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].googleapiKey }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_13__["TicketStatusComponentModule"],
                    src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_14__["TicketTeamListModule"],
                    src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_15__["TicketDateTimeFormatModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Fr9r":
/*!**************************************************************!*\
  !*** ./src/app/application/engineers/engineers.component.ts ***!
  \**************************************************************/
/*! exports provided: EngineersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineersComponent", function() { return EngineersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class EngineersComponent {
    ngOnInit() { }
}
EngineersComponent.ɵfac = function EngineersComponent_Factory(t) { return new (t || EngineersComponent)(); };
EngineersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EngineersComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function EngineersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineersComponent, [{
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

/***/ "LQXu":
/*!**************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/format-input.js ***!
  \**************************************************************/
/*! exports provided: inputToRGB, stringInputToObject, isValidCSSUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return inputToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return stringInputToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return isValidCSSUnit; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "577q");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "cxgy");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "gMo9");



function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToRgb"])(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
            v = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.v);
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hsvToRgb"])(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
            l = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.l);
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"])(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = Object(_util__WEBPACK_IMPORTED_MODULE_2__["boundAlpha"])(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
var CSS_INTEGER = '[-\\+]?\\d+%?';
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color]) {
        color = _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
            a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
            a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}


/***/ }),

/***/ "P/1d":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-color/__ivy_ngcc__/sketch/fesm2015/ngx-color-sketch.js ***!
  \*********************************************************************************/
/*! exports provided: ColorSketchModule, SketchComponent, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSketchModule", function() { return ColorSketchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchComponent", function() { return SketchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SketchFieldsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SketchPresetColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "S5nb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "R9SF");









const _c0 = function (a0, a1) { return { input: a0, label: a1 }; };
function SketchFieldsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "color-editable-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchFieldsComponent_div_9_Template_color_editable_input_onChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.handleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, ctx_r0.input, ctx_r0.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.round(ctx_r0.rgb.a * 100))("dragLabel", true)("dragMax", 100);
} }
function SketchPresetColorsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "color-swatch", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function SketchPresetColorsComponent_div_1_Template_color_swatch_onClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.handleClick($event); })("onHover", function SketchPresetColorsComponent_div_1_Template_color_swatch_onHover_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onSwatchHover.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx_r0.swatchStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r0.normalizeValue(c_r1).color)("focusStyle", ctx_r0.focusStyle(c_r1));
} }
function SketchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "color-alpha", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchComponent_div_7_Template_color_alpha_onChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.handleValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("radius", 2)("rgb", ctx_r0.rgb)("hsl", ctx_r0.hsl);
} }
let SketchFieldsComponent = class SketchFieldsComponent {
    constructor() {
        this.disableAlpha = false;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.input = {
            width: '100%',
            padding: '4px 10% 3px',
            border: 'none',
            boxSizing: 'border-box',
            boxShadow: 'inset 0 0 0 1px #ccc',
            fontSize: '11px',
        };
        this.label = {
            display: 'block',
            textAlign: 'center',
            fontSize: '11px',
            color: '#222',
            paddingTop: '3px',
            paddingBottom: '4px',
            textTransform: 'capitalize',
        };
    }
    round(value) {
        return Math.round(value);
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(data.hex)) {
                this.onChange.emit({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.onChange.emit({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.a) {
            if (data.a < 0) {
                data.a = 0;
            }
            else if (data.a > 100) {
                data.a = 100;
            }
            data.a /= 100;
            this.onChange.emit({
                data: {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: Math.round(data.a * 100) / 100,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.h || data.s || data.l) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number((data.s && data.s) || this.hsl.s),
                    l: Number((data.l && data.l) || this.hsl.l),
                    source: 'hsl',
                },
                $event,
            });
        }
    }
};
SketchFieldsComponent.ɵfac = function SketchFieldsComponent_Factory(t) { return new (t || SketchFieldsComponent)(); };
SketchFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SketchFieldsComponent, selectors: [["color-sketch-fields"]], inputs: { disableAlpha: "disableAlpha", hsl: "hsl", rgb: "rgb", hex: "hex" }, outputs: { onChange: "onChange" }, decls: 10, vars: 31, consts: [[1, "sketch-fields"], [1, "sketch-double"], ["label", "hex", 3, "value", "onChange"], [1, "sketch-single"], ["label", "r", 3, "value", "dragLabel", "dragMax", "onChange"], ["label", "g", 3, "value", "dragLabel", "dragMax", "onChange"], ["label", "b", 3, "value", "dragLabel", "dragMax", "onChange"], ["class", "sketch-alpha", 4, "ngIf"], [1, "sketch-alpha"], ["label", "a", 3, "value", "dragLabel", "dragMax", "onChange"]], template: function SketchFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "color-editable-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchFieldsComponent_Template_color_editable_input_onChange_2_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "color-editable-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchFieldsComponent_Template_color_editable_input_onChange_4_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "color-editable-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchFieldsComponent_Template_color_editable_input_onChange_6_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "color-editable-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchFieldsComponent_Template_color_editable_input_onChange_8_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SketchFieldsComponent_div_9_Template, 2, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](19, _c0, ctx.input, ctx.label));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.hex.replace("#", ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](22, _c0, ctx.input, ctx.label));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.rgb.r)("dragLabel", true)("dragMax", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](25, _c0, ctx.input, ctx.label));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.rgb.g)("dragLabel", true)("dragMax", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](28, _c0, ctx.input, ctx.label));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.rgb.b)("dragLabel", true)("dragMax", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.disableAlpha === false);
    } }, directives: [ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".sketch-fields[_ngcontent-%COMP%] {\n      display: flex;\n      padding-top: 4px;\n    }\n    .sketch-double[_ngcontent-%COMP%] {\n      -webkit-box-flex: 2;\n      flex: 2 1 0%;\n    }\n    .sketch-single[_ngcontent-%COMP%] {\n      flex: 1 1 0%;\n      padding-left: 6px;\n    }\n    .sketch-alpha[_ngcontent-%COMP%] {\n      -webkit-box-flex: 1;\n      flex: 1 1 0%;\n      padding-left: 6px;\n    }"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchFieldsComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchFieldsComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SketchFieldsComponent.prototype, "hex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchFieldsComponent.prototype, "disableAlpha", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchFieldsComponent.prototype, "onChange", void 0);

let SketchPresetColorsComponent = class SketchPresetColorsComponent {
    constructor() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.swatchStyle = {
            borderRadius: '3px',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
        };
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    normalizeValue(val) {
        if (typeof val === 'string') {
            return { color: val };
        }
        return val;
    }
    focusStyle(val) {
        const c = this.normalizeValue(val);
        return {
            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${c.color}`,
        };
    }
};
SketchPresetColorsComponent.ɵfac = function SketchPresetColorsComponent_Factory(t) { return new (t || SketchPresetColorsComponent)(); };
SketchPresetColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SketchPresetColorsComponent, selectors: [["color-sketch-preset-colors"]], inputs: { colors: "colors" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, decls: 2, vars: 1, consts: [[1, "sketch-swatches"], ["class", "sketch-wrap", 4, "ngFor", "ngForOf"], [1, "sketch-wrap"], [1, "swatch", 3, "color", "focusStyle", "onClick", "onHover"]], template: function SketchPresetColorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SketchPresetColorsComponent_div_1_Template, 2, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.colors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchComponent"]], styles: [".sketch-swatches[_ngcontent-%COMP%] {\n      margin: 0px -10px;\n      padding: 10px 0px 0px 10px;\n      border-top: 1px solid rgb(238, 238, 238);\n      display: flex;\n      flex-wrap: wrap;\n      position: relative;\n    }\n    .sketch-wrap[_ngcontent-%COMP%] {\n      width: 16px;\n      height: 16px;\n      margin: 0px 10px 10px 0px;\n    }"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], SketchPresetColorsComponent.prototype, "colors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchPresetColorsComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchPresetColorsComponent.prototype, "onSwatchHover", void 0);

let SketchComponent = class SketchComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        /** Remove alpha slider and options from picker */
        this.disableAlpha = false;
        /** Hex strings for default colors at bottom of picker */
        this.presetColors = [
            '#D0021B',
            '#F5A623',
            '#F8E71C',
            '#8B572A',
            '#7ED321',
            '#417505',
            '#BD10E0',
            '#9013FE',
            '#4A90E2',
            '#50E3C2',
            '#B8E986',
            '#000000',
            '#4A4A4A',
            '#9B9B9B',
            '#FFFFFF',
        ];
        /** Width of picker */
        this.width = 200;
    }
    afterValidChange() {
        this.activeBackground = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${this.rgb.a})`;
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    handleBlockChange({ hex, $event }) {
        if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(hex)) {
            // this.hex = hex;
            this.handleChange({
                hex,
                source: 'hex',
            }, $event);
        }
    }
};
SketchComponent.ɵfac = function SketchComponent_Factory(t) { return new (t || SketchComponent)(); };
SketchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SketchComponent, selectors: [["color-sketch"]], inputs: { disableAlpha: "disableAlpha", presetColors: "presetColors", width: "width" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 16, consts: [[1, "sketch-saturation"], [3, "hsl", "hsv", "onChange"], [1, "sketch-controls"], [1, "sketch-sliders"], [1, "sketch-hue"], [3, "hsl", "onChange"], ["class", "sketch-alpha", 4, "ngIf"], [1, "sketch-color"], [1, "sketch-active"], [3, "rgb", "hsl", "hex", "disableAlpha", "onChange"], [3, "colors", "onClick", "onSwatchHover"], [1, "sketch-alpha"], [3, "radius", "rgb", "hsl", "onChange"]], template: function SketchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "color-saturation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchComponent_Template_color_saturation_onChange_2_listener($event) { return ctx.handleValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "color-hue", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchComponent_Template_color_hue_onChange_6_listener($event) { return ctx.handleValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SketchComponent_div_7_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "color-checkboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "color-sketch-fields", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchComponent_Template_color_sketch_fields_onChange_12_listener($event) { return ctx.handleValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "color-sketch-preset-colors", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function SketchComponent_Template_color_sketch_preset_colors_onClick_14_listener($event) { return ctx.handleBlockChange($event); })("onSwatchHover", function SketchComponent_Template_color_sketch_preset_colors_onSwatchHover_14_listener($event) { return ctx.onSwatchHover.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("sketch-picker ", ctx.className, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hsl", ctx.hsl)("hsv", ctx.hsv);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hsl", ctx.hsl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.disableAlpha === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.activeBackground);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rgb", ctx.rgb)("hsl", ctx.hsl)("hex", ctx.hex)("disableAlpha", ctx.disableAlpha);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colors", ctx.presetColors);
    } }, directives: [ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationComponent"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardComponent"], SketchFieldsComponent, SketchPresetColorsComponent, ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaComponent"]], styles: [".sketch-picker[_ngcontent-%COMP%] {\n      padding: 10px 10px 0;\n      box-sizing: initial;\n      background: #fff;\n      border-radius: 4px;\n      box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);\n    }\n    .sketch-saturation[_ngcontent-%COMP%] {\n      width: 100%;\n      padding-bottom: 75%;\n      position: relative;\n      overflow: hidden;\n    }\n    .sketch-controls[_ngcontent-%COMP%] {\n      display: flex;\n    }\n    .sketch-sliders[_ngcontent-%COMP%] {\n      padding: 4px 0px;\n      -webkit-box-flex: 1;\n      flex: 1 1 0%;\n    }\n    .sketch-hue[_ngcontent-%COMP%] {\n      position: relative;\n      height: 10px;\n      overflow: hidden;\n    }\n    .sketch-alpha[_ngcontent-%COMP%] {\n      position: relative;\n      height: 10px;\n      margin-top: 4px;\n      overflow: hidden;\n    }\n    .sketch-color[_ngcontent-%COMP%] {\n      width: 24px;\n      height: 24px;\n      position: relative;\n      margin-top: 4px;\n      margin-left: 4px;\n      border-radius: 3px;\n    }\n    .sketch-active[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n      border-radius: 2px;\n      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset;\n    }"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchComponent.prototype, "disableAlpha", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchComponent.prototype, "presetColors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchComponent.prototype, "width", void 0);
SketchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SketchComponent);
let ColorSketchModule = class ColorSketchModule {
};
ColorSketchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ColorSketchModule });
ColorSketchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ColorSketchModule_Factory(t) { return new (t || ColorSketchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"],
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SketchFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-sketch-fields',
                template: `
  <div class="sketch-fields">
    <div class="sketch-double">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="hex"
        [value]="hex.replace('#', '')"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-alpha" *ngIf="disableAlpha === false">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="a"
        [value]="round(rgb.a * 100)"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="100"
      ></color-editable-input>
    </div>
  </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                styles: [`
    .sketch-fields {
      display: flex;
      padding-top: 4px;
    }
    .sketch-double {
      -webkit-box-flex: 2;
      flex: 2 1 0%;
    }
    .sketch-single {
      flex: 1 1 0%;
      padding-left: 6px;
    }
    .sketch-alpha {
      -webkit-box-flex: 1;
      flex: 1 1 0%;
      padding-left: 6px;
    }
  `]
            }]
    }], function () { return []; }, { disableAlpha: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], hsl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rgb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SketchPresetColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-sketch-preset-colors',
                template: `
  <div class="sketch-swatches">
    <div class="sketch-wrap" *ngFor="let c of colors">
      <color-swatch
        [color]="normalizeValue(c).color"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
    </div>
  </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                styles: [`
    .sketch-swatches {
      margin: 0px -10px;
      padding: 10px 0px 0px 10px;
      border-top: 1px solid rgb(238, 238, 238);
      display: flex;
      flex-wrap: wrap;
      position: relative;
    }
    .sketch-wrap {
      width: 16px;
      height: 16px;
      margin: 0px 10px 10px 0px;
    }
  `]
            }]
    }], function () { return []; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onSwatchHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SketchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-sketch',
                template: `
  <div class="sketch-picker {{ className }}" [style.width]="width">
    <div class="sketch-saturation">
      <color-saturation [hsl]="hsl" [hsv]="hsv"
        (onChange)="handleValueChange($event)"
      >
      </color-saturation>
    </div>
    <div class="sketch-controls">
      <div class="sketch-sliders">
        <div class="sketch-hue">
          <color-hue [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-hue>
        </div>
        <div class="sketch-alpha" *ngIf="disableAlpha === false">
          <color-alpha
            [radius]="2" [rgb]="rgb" [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-alpha>
        </div>
      </div>
      <div class="sketch-color">
        <color-checkboard></color-checkboard>
        <div class="sketch-active" [style.background]="activeBackground"></div>
      </div>
    </div>
    <div class="sketch-controls">
      <color-sketch-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-sketch-fields>
    </div>
    <div class="sketch-controls">
      <color-sketch-preset-colors
        [colors]="presetColors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-sketch-preset-colors>
    </div>
  </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                styles: [`
    .sketch-picker {
      padding: 10px 10px 0;
      box-sizing: initial;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);
    }
    .sketch-saturation {
      width: 100%;
      padding-bottom: 75%;
      position: relative;
      overflow: hidden;
    }
    .sketch-controls {
      display: flex;
    }
    .sketch-sliders {
      padding: 4px 0px;
      -webkit-box-flex: 1;
      flex: 1 1 0%;
    }
    .sketch-hue {
      position: relative;
      height: 10px;
      overflow: hidden;
    }
    .sketch-alpha {
      position: relative;
      height: 10px;
      margin-top: 4px;
      overflow: hidden;
    }
    .sketch-color {
      width: 24px;
      height: 24px;
      position: relative;
      margin-top: 4px;
      margin-left: 4px;
      border-radius: 3px;
    }
    .sketch-active {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      border-radius: 2px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset;
    }
  `]
            }]
    }], function () { return []; }, { disableAlpha: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], presetColors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ColorSketchModule, { declarations: function () { return [SketchComponent, SketchFieldsComponent, SketchPresetColorsComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaModule"],
        ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardModule"],
        ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"],
        ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"],
        ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationModule"],
        ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"]]; }, exports: function () { return [SketchComponent, SketchFieldsComponent, SketchPresetColorsComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorSketchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    SketchComponent,
                    SketchFieldsComponent,
                    SketchPresetColorsComponent,
                ],
                exports: [
                    SketchComponent,
                    SketchFieldsComponent,
                    SketchPresetColorsComponent,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaModule"],
                    ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardModule"],
                    ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"],
                    ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"],
                    ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationModule"],
                    ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"],
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-color-sketch.js.map

/***/ }),

/***/ "R9SF":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-color/__ivy_ngcc__/fesm2015/ngx-color.js ***!
  \*******************************************************************/
/*! exports provided: AlphaComponent, AlphaModule, CheckboardComponent, CheckboardModule, ColorWrap, ColorWrapModule, CoordinatesDirective, CoordinatesModule, EditableInputComponent, EditableInputModule, HueComponent, HueModule, RaisedComponent, RaisedModule, SaturationComponent, SaturationModule, ShadeComponent, ShadeModule, SwatchComponent, SwatchModule, getCheckerboard, getContrastingColor, isValidHex, render, simpleCheckForValidColor, toState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaComponent", function() { return AlphaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaModule", function() { return AlphaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboardComponent", function() { return CheckboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboardModule", function() { return CheckboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorWrap", function() { return ColorWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorWrapModule", function() { return ColorWrapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatesDirective", function() { return CoordinatesDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatesModule", function() { return CoordinatesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableInputComponent", function() { return EditableInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableInputModule", function() { return EditableInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HueComponent", function() { return HueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HueModule", function() { return HueModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedComponent", function() { return RaisedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedModule", function() { return RaisedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturationComponent", function() { return SaturationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturationModule", function() { return SaturationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeComponent", function() { return ShadeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeModule", function() { return ShadeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchComponent", function() { return SwatchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchModule", function() { return SwatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckerboard", function() { return getCheckerboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastingColor", function() { return getContrastingColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidHex", function() { return isValidHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleCheckForValidColor", function() { return simpleCheckForValidColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toState", function() { return toState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "S5nb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ctrl/tinycolor */ "jVIm");










function EditableInputComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function EditableInputComponent_span_2_Template_span_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.handleMousedown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r0.labelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
} }
function HueComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r0.left)("top", ctx_r0.top);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r0.pointer);
} }
const _c0 = ["*"];
function SwatchComponent_color_checkboard_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "color-checkboard", 2);
} }
const checkboardCache = {};
function render(c1, c2, size) {
    if (typeof document === 'undefined') {
        return null;
    }
    const canvas = document.createElement('canvas');
    canvas.width = size * 2;
    canvas.height = size * 2;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return null;
    } // If no context can be found, return early.
    ctx.fillStyle = c1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = c2;
    ctx.fillRect(0, 0, size, size);
    ctx.translate(size, size);
    ctx.fillRect(0, 0, size, size);
    return canvas.toDataURL();
}
function getCheckerboard(c1, c2, size) {
    const key = `${c1}-${c2}-${size}`;
    if (checkboardCache[key]) {
        return checkboardCache[key];
    }
    const checkboard = render(c1, c2, size);
    if (!checkboard) {
        return null;
    }
    checkboardCache[key] = checkboard;
    return checkboard;
}

let CheckboardComponent = class CheckboardComponent {
    constructor() {
        this.white = 'transparent';
        this.size = 8;
        this.grey = 'rgba(0,0,0,.08)';
    }
    ngOnInit() {
        const background = getCheckerboard(this.white, this.grey, this.size);
        this.gridStyles = {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: `url(${background}) center left`,
        };
    }
};
CheckboardComponent.ɵfac = function CheckboardComponent_Factory(t) { return new (t || CheckboardComponent)(); };
CheckboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckboardComponent, selectors: [["color-checkboard"]], inputs: { white: "white", size: "size", grey: "grey", boxShadow: "boxShadow", borderRadius: "borderRadius" }, decls: 1, vars: 1, consts: [[1, "grid", 3, "ngStyle"]], template: function CheckboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.gridStyles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".grid[_ngcontent-%COMP%] {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    position: absolute;\n  }"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CheckboardComponent.prototype, "white", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CheckboardComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CheckboardComponent.prototype, "grey", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CheckboardComponent.prototype, "boxShadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CheckboardComponent.prototype, "borderRadius", void 0);
let CheckboardModule = class CheckboardModule {
};
CheckboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CheckboardModule });
CheckboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CheckboardModule_Factory(t) { return new (t || CheckboardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });

let CoordinatesDirective = class CoordinatesDirective {
    constructor(el) {
        this.el = el;
        this.coordinatesChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mousechange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mouseListening = false;
    }
    mousemove($event, x, y, isTouch = false) {
        if (this.mouseListening) {
            $event.preventDefault();
            this.mousechange.next({ $event, x, y, isTouch });
        }
    }
    mouseup() {
        this.mouseListening = false;
    }
    mousedown($event, x, y, isTouch = false) {
        $event.preventDefault();
        this.mouseListening = true;
        this.mousechange.next({ $event, x, y, isTouch });
    }
    ngOnInit() {
        this.sub = this.mousechange
            .pipe(
        // limit times it is updated for the same area
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])((p, q) => p.x === q.x && p.y === q.y))
            .subscribe(n => this.handleChange(n.x, n.y, n.$event, n.isTouch));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    handleChange(x, y, $event, isTouch) {
        const containerWidth = this.el.nativeElement.clientWidth;
        const containerHeight = this.el.nativeElement.clientHeight;
        const left = x -
            (this.el.nativeElement.getBoundingClientRect().left + window.pageXOffset);
        let top = y - this.el.nativeElement.getBoundingClientRect().top;
        if (!isTouch) {
            top = top - window.pageYOffset;
        }
        this.coordinatesChange.next({
            x,
            y,
            top,
            left,
            containerWidth,
            containerHeight,
            $event,
        });
    }
};
CoordinatesDirective.ɵfac = function CoordinatesDirective_Factory(t) { return new (t || CoordinatesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
CoordinatesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: CoordinatesDirective, selectors: [["", "ngx-color-coordinates", ""]], hostBindings: function CoordinatesDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousemove", function CoordinatesDirective_mousemove_HostBindingHandler($event) { return ctx.mousemove($event, $event.pageX, $event.pageY); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("touchmove", function CoordinatesDirective_touchmove_HostBindingHandler($event) { return ctx.mousemove($event, $event.touches[0].clientX, $event.touches[0].clientY, true); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mouseup", function CoordinatesDirective_mouseup_HostBindingHandler() { return ctx.mouseup(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("touchend", function CoordinatesDirective_touchend_HostBindingHandler() { return ctx.mouseup(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousedown", function CoordinatesDirective_mousedown_HostBindingHandler($event) { return ctx.mousedown($event, $event.pageX, $event.pageY); })("touchstart", function CoordinatesDirective_touchstart_HostBindingHandler($event) { return ctx.mousedown($event, $event.touches[0].clientX, $event.touches[0].clientY, true); });
    } }, outputs: { coordinatesChange: "coordinatesChange" } });
CoordinatesDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CoordinatesDirective.prototype, "coordinatesChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:mousemove', ['$event', '$event.pageX', '$event.pageY']),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:touchmove', [
        '$event',
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
        'true',
    ]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event, Number, Number, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], CoordinatesDirective.prototype, "mousemove", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:mouseup'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:touchend'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], CoordinatesDirective.prototype, "mouseup", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('mousedown', ['$event', '$event.pageX', '$event.pageY']),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('touchstart', [
        '$event',
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
        'true',
    ]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event, Number, Number, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], CoordinatesDirective.prototype, "mousedown", null);
CoordinatesDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], CoordinatesDirective);
let CoordinatesModule = class CoordinatesModule {
};
CoordinatesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoordinatesModule });
CoordinatesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CoordinatesModule_Factory(t) { return new (t || CoordinatesModule)(); } });

let AlphaComponent = class AlphaComponent {
    constructor() {
        this.direction = 'horizontal';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = this.rgb.a * 100;
            this.gradient = {
                background: `linear-gradient(to bottom, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
        }
        else {
            this.gradient = {
                background: `linear-gradient(to right, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
            this.pointerLeft = this.rgb.a * 100;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let a;
            if (top < 0) {
                a = 0;
            }
            else if (top > containerHeight) {
                a = 1;
            }
            else {
                a = Math.round(top * 100 / containerHeight) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        else {
            let a;
            if (left < 0) {
                a = 0;
            }
            else if (left > containerWidth) {
                a = 1;
            }
            else {
                a = Math.round(left * 100 / containerWidth) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data, $event });
    }
};
AlphaComponent.ɵfac = function AlphaComponent_Factory(t) { return new (t || AlphaComponent)(); };
AlphaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlphaComponent, selectors: [["color-alpha"]], inputs: { direction: "direction", hsl: "hsl", rgb: "rgb", pointer: "pointer", shadow: "shadow", radius: "radius" }, outputs: { onChange: "onChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 15, consts: [[1, "alpha"], [1, "alpha-checkboard"], [1, "alpha-gradient", 3, "ngStyle"], ["ngx-color-coordinates", "", 3, "coordinatesChange"], [1, "alpha-pointer"], [1, "alpha-slider", 3, "ngStyle"]], template: function AlphaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "color-checkboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("coordinatesChange", function AlphaComponent_Template_div_coordinatesChange_4_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border-radius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("box-shadow", ctx.shadow)("border-radius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.gradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("alpha-container color-alpha-", ctx.direction, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.pointerLeft, "%")("top", ctx.pointerTop, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.pointer);
    } }, directives: [CheckboardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], CoordinatesDirective], styles: [".alpha[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .alpha-checkboard[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n    .alpha-gradient[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .alpha-container[_ngcontent-%COMP%] {\n      position: relative;\n      height: 100%;\n      margin: 0 3px;\n    }\n    .alpha-pointer[_ngcontent-%COMP%] {\n      position: absolute;\n    }\n    .alpha-slider[_ngcontent-%COMP%] {\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      margin-top: 1px;\n      transform: translateX(-2px);\n    },"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlphaComponent.prototype, "shadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlphaComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlphaComponent.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "onChange", void 0);
let AlphaModule = class AlphaModule {
};
AlphaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AlphaModule });
AlphaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AlphaModule_Factory(t) { return new (t || AlphaModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule, CoordinatesModule]] });

function simpleCheckForValidColor(data) {
    const keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
    let checked = 0;
    let passed = 0;
    keysToCheck.forEach(letter => {
        if (!data[letter]) {
            return;
        }
        checked += 1;
        if (!isNaN(data[letter])) {
            passed += 1;
        }
        if (letter === 's' || letter === 'l') {
            const percentPatt = /^\d+%$/;
            if (percentPatt.test(data[letter])) {
                passed += 1;
            }
        }
    });
    return checked === passed ? data : false;
}
function toState(data, oldHue) {
    const color = data.hex ? new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](data.hex) : new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](data);
    const hsl = color.toHsl();
    const hsv = color.toHsv();
    const rgb = color.toRgb();
    const hex = color.toHex();
    if (hsl.s === 0) {
        hsl.h = oldHue || 0;
        hsv.h = oldHue || 0;
    }
    const transparent = hex === '000000' && rgb.a === 0;
    return {
        hsl,
        hex: transparent ? 'transparent' : `#${hex}`,
        rgb,
        hsv,
        oldHue: data.h || oldHue || hsl.h,
        source: data.source,
    };
}
function isValidHex(hex) {
    return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](hex).isValid;
}
function getContrastingColor(data) {
    if (!data) {
        return '#fff';
    }
    const col = toState(data);
    if (col.hex === 'transparent') {
        return 'rgba(0,0,0,0.4)';
    }
    const yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
    return yiq >= 128 ? '#000' : '#fff';
}

let ColorWrap = class ColorWrap {
    constructor() {
        this.className = '';
        this.color = {
            h: 250,
            s: 0.5,
            l: 0.2,
            a: 1,
        };
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onChangeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
        this.changes = this.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100))
            .subscribe(x => this.onChangeComplete.emit(x));
        this.setState(toState(this.color, 0));
        this.currentColor = this.hex;
    }
    ngOnChanges() {
        this.setState(toState(this.color, this.oldHue));
    }
    ngOnDestroy() {
        this.changes.unsubscribe();
    }
    setState(data) {
        this.oldHue = data.oldHue;
        this.hsl = data.hsl;
        this.hsv = data.hsv;
        this.rgb = data.rgb;
        this.hex = data.hex;
        this.source = data.source;
        this.afterValidChange();
    }
    handleChange(data, $event) {
        const isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            const color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onChange.emit({ color, $event });
            this.afterValidChange();
        }
    }
    /** hook for components after a complete change */
    afterValidChange() { }
    handleSwatchHover(data, $event) {
        const isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            const color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onSwatchHover.emit({ color, $event });
        }
    }
};
ColorWrap.ɵfac = function ColorWrap_Factory(t) { return new (t || ColorWrap)(); };
ColorWrap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ColorWrap, selectors: [["color-wrap"]], inputs: { className: "className", color: "color" }, outputs: { onChange: "onChange", onChangeComplete: "onChangeComplete", onSwatchHover: "onSwatchHover" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function ColorWrap_Template(rf, ctx) { }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "className", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "onChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "onChangeComplete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "onSwatchHover", void 0);
let ColorWrapModule = class ColorWrapModule {
};
ColorWrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ColorWrapModule });
ColorWrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ColorWrapModule_Factory(t) { return new (t || ColorWrapModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });

let EditableInputComponent = class EditableInputComponent {
    constructor() {
        this.placeholder = '';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.focus = false;
    }
    ngOnInit() {
        this.wrapStyle = this.style && this.style.wrap ? this.style.wrap : {};
        this.inputStyle = this.style && this.style.input ? this.style.input : {};
        this.labelStyle = this.style && this.style.label ? this.style.label : {};
        if (this.dragLabel) {
            this.labelStyle.cursor = 'ew-resize';
        }
    }
    handleFocus($event) {
        this.focus = true;
    }
    handleFocusOut($event) {
        this.focus = false;
        this.currentValue = this.blurValue;
    }
    handleKeydown($event) {
        // In case `e.target.value` is a percentage remove the `%` character
        // and update accordingly with a percentage
        // https://github.com/casesandberg/react-color/issues/383
        const stringValue = String($event.target.value);
        const isPercentage = stringValue.indexOf('%') > -1;
        const num = Number(stringValue.replace(/%/g, ''));
        if (!isNaN(num)) {
            const amount = this.arrowOffset || 1;
            // Up
            if ($event.keyCode === 38) {
                if (this.label) {
                    this.onChange.emit({
                        data: { [this.label]: num + amount },
                        $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num + amount, $event });
                }
                if (isPercentage) {
                    this.currentValue = `${num + amount}%`;
                }
                else {
                    this.currentValue = num + amount;
                }
            }
            // Down
            if ($event.keyCode === 40) {
                if (this.label) {
                    this.onChange.emit({
                        data: { [this.label]: num - amount },
                        $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num - amount, $event });
                }
                if (isPercentage) {
                    this.currentValue = `${num - amount}%`;
                }
                else {
                    this.currentValue = num - amount;
                }
            }
        }
    }
    handleKeyup($event) {
        if ($event.keyCode === 40 || $event.keyCode === 38) {
            return;
        }
        if (this.label) {
            this.onChange.emit({
                data: { [this.label]: $event.target.value },
                $event,
            });
        }
        else {
            this.onChange.emit({ data: $event.target.value, $event });
        }
    }
    ngOnChanges() {
        if (!this.focus) {
            this.currentValue = String(this.value).toUpperCase();
            this.blurValue = String(this.value).toUpperCase();
        }
        else {
            this.blurValue = String(this.value).toUpperCase();
        }
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    subscribe() {
        this.mousemove = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').subscribe((ev) => this.handleDrag(ev));
        this.mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup').subscribe(() => this.unsubscribe());
    }
    unsubscribe() {
        if (this.mousemove) {
            this.mousemove.unsubscribe();
        }
        if (this.mouseup) {
            this.mouseup.unsubscribe();
        }
    }
    handleMousedown($event) {
        if (this.dragLabel) {
            $event.preventDefault();
            this.handleDrag($event);
            this.subscribe();
        }
    }
    handleDrag($event) {
        if (this.dragLabel) {
            const newValue = Math.round(this.value + $event.movementX);
            if (newValue >= 0 && newValue <= this.dragMax) {
                this.onChange.emit({ data: { [this.label]: newValue }, $event });
            }
        }
    }
};
EditableInputComponent.ɵfac = function EditableInputComponent_Factory(t) { return new (t || EditableInputComponent)(); };
EditableInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditableInputComponent, selectors: [["color-editable-input"]], inputs: { placeholder: "placeholder", style: "style", label: "label", value: "value", arrowOffset: "arrowOffset", dragLabel: "dragLabel", dragMax: "dragMax" }, outputs: { onChange: "onChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 5, consts: [[1, "wrap", 3, "ngStyle"], ["spellCheck", "false", 3, "ngStyle", "value", "placeholder", "keydown", "keyup", "focus", "focusout"], [3, "ngStyle", "mousedown", 4, "ngIf"], [3, "ngStyle", "mousedown"]], template: function EditableInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function EditableInputComponent_Template_input_keydown_1_listener($event) { return ctx.handleKeydown($event); })("keyup", function EditableInputComponent_Template_input_keyup_1_listener($event) { return ctx.handleKeyup($event); })("focus", function EditableInputComponent_Template_input_focus_1_listener($event) { return ctx.handleFocus($event); })("focusout", function EditableInputComponent_Template_input_focusout_1_listener($event) { return ctx.handleFocusOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditableInputComponent_span_2_Template, 2, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.wrapStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.inputStyle)("value", ctx.currentValue)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.label);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n      display: flex;\n    }\n    .wrap[_ngcontent-%COMP%] {\n      position: relative;\n    }"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], EditableInputComponent.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], EditableInputComponent.prototype, "arrowOffset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], EditableInputComponent.prototype, "dragLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], EditableInputComponent.prototype, "dragMax", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "onChange", void 0);
let EditableInputModule = class EditableInputModule {
};
EditableInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EditableInputModule });
EditableInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EditableInputModule_Factory(t) { return new (t || EditableInputModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });

let HueComponent = class HueComponent {
    constructor() {
        this.hidePointer = false;
        this.direction = 'horizontal';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.left = '0px';
        this.top = '';
    }
    ngOnChanges() {
        if (this.direction === 'horizontal') {
            this.left = `${this.hsl.h * 100 / 360}%`;
        }
        else {
            this.top = `${-(this.hsl.h * 100 / 360) + 100}%`;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let h;
            if (top < 0) {
                h = 359;
            }
            else if (top > containerHeight) {
                h = 0;
            }
            else {
                const percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        else {
            let h;
            if (left < 0) {
                h = 0;
            }
            else if (left > containerWidth) {
                h = 359;
            }
            else {
                const percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data, $event });
    }
};
HueComponent.ɵfac = function HueComponent_Factory(t) { return new (t || HueComponent)(); };
HueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HueComponent, selectors: [["color-hue"]], inputs: { hidePointer: "hidePointer", direction: "direction", hsl: "hsl", pointer: "pointer", radius: "radius", shadow: "shadow" }, outputs: { onChange: "onChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 8, consts: [["ngx-color-coordinates", "", 1, "color-hue-container", 3, "coordinatesChange"], ["class", "color-hue-pointer", 3, "left", "top", 4, "ngIf"], [1, "color-hue-pointer"], [1, "color-hue-slider", 3, "ngStyle"]], template: function HueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("coordinatesChange", function HueComponent_Template_div_coordinatesChange_1_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HueComponent_div_2_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("color-hue color-hue-", ctx.direction, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border-radius", ctx.radius, "px")("box-shadow", ctx.shadow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hidePointer);
    } }, directives: [CoordinatesDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".color-hue[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .color-hue-container[_ngcontent-%COMP%] {\n      margin: 0 2px;\n      position: relative;\n      height: 100%;\n    }\n    .color-hue-pointer[_ngcontent-%COMP%] {\n      position: absolute;\n    }\n    .color-hue-slider[_ngcontent-%COMP%] {\n      margin-top: 1px;\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      transform: translateX(-2px);\n    }\n    .color-hue-horizontal[_ngcontent-%COMP%] {\n      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n    }\n    .color-hue-vertical[_ngcontent-%COMP%] {\n      background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n    }"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], HueComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], HueComponent.prototype, "shadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "hidePointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], HueComponent.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "onChange", void 0);
let HueModule = class HueModule {
};
HueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HueModule });
HueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function HueModule_Factory(t) { return new (t || HueModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]] });

let RaisedComponent = class RaisedComponent {
    constructor() {
        this.zDepth = 1;
        this.radius = 1;
        this.background = '#fff';
    }
};
RaisedComponent.ɵfac = function RaisedComponent_Factory(t) { return new (t || RaisedComponent)(); };
RaisedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RaisedComponent, selectors: [["color-raised"]], inputs: { zDepth: "zDepth", radius: "radius", background: "background" }, ngContentSelectors: _c0, decls: 4, vars: 5, consts: [[1, "raised-wrap"], [1, "raised-content"]], template: function RaisedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("raised-bg zDepth-", ctx.zDepth, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: [".raised-wrap[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n    }\n    .raised-bg[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n    }\n    .raised-content[_ngcontent-%COMP%] {\n      position: relative;\n    }\n    .zDepth-0[_ngcontent-%COMP%] {\n      box-shadow: none;\n    }\n    .zDepth-1[_ngcontent-%COMP%] {\n      box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n    }\n    .zDepth-2[_ngcontent-%COMP%] {\n      box-shadow: 0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2);\n    }\n    .zDepth-3[_ngcontent-%COMP%] {\n      box-shadow: 0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24);\n    }\n    .zDepth-4[_ngcontent-%COMP%] {\n      box-shadow: 0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22);\n    }\n    .zDepth-5[_ngcontent-%COMP%] {\n      box-shadow: 0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2);\n    }"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], RaisedComponent.prototype, "zDepth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RaisedComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RaisedComponent.prototype, "background", void 0);
let RaisedModule = class RaisedModule {
};
RaisedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RaisedModule });
RaisedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function RaisedModule_Factory(t) { return new (t || RaisedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });

let SaturationComponent = class SaturationComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 100%, 50%)`;
        this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.hsv.s * 100 + '%';
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        if (left < 0) {
            left = 0;
        }
        else if (left > containerWidth) {
            left = containerWidth;
        }
        else if (top < 0) {
            top = 0;
        }
        else if (top > containerHeight) {
            top = containerHeight;
        }
        const saturation = left / containerWidth;
        let bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;
        const data = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva',
        };
        this.onChange.emit({ data, $event });
    }
};
SaturationComponent.ɵfac = function SaturationComponent_Factory(t) { return new (t || SaturationComponent)(); };
SaturationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SaturationComponent, selectors: [["color-saturation"]], inputs: { hsl: "hsl", hsv: "hsv", radius: "radius", pointer: "pointer", circle: "circle" }, outputs: { onChange: "onChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 8, consts: [["ngx-color-coordinates", "", 1, "color-saturation", 3, "coordinatesChange"], [1, "saturation-white"], [1, "saturation-black"], [1, "saturation-pointer", 3, "ngStyle"], [1, "saturation-circle", 3, "ngStyle"]], template: function SaturationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("coordinatesChange", function SaturationComponent_Template_div_coordinatesChange_0_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.background);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", ctx.pointerTop)("left", ctx.pointerLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.pointer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.circle);
    } }, directives: [CoordinatesDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".saturation-white[_ngcontent-%COMP%] {\n      background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .saturation-black[_ngcontent-%COMP%] {\n      background: linear-gradient(to top, #000, rgba(0,0,0,0));\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .color-saturation[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .saturation-pointer[_ngcontent-%COMP%] {\n      position: absolute;\n      cursor: default;\n    }\n    .saturation-circle[_ngcontent-%COMP%] {\n      width: 4px;\n      height: 4px;\n      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n      border-radius: 50%;\n      cursor: hand;\n      transform: translate(-2px, -4px);\n    }"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "hsv", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], SaturationComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "circle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "onChange", void 0);
let SaturationModule = class SaturationModule {
};
SaturationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SaturationModule });
SaturationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SaturationModule_Factory(t) { return new (t || SaturationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]] });

let SwatchComponent = class SwatchComponent {
    constructor() {
        this.style = {};
        this.focusStyle = {};
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.divStyles = {};
        this.focusStyles = {};
        this.inFocus = false;
    }
    ngOnInit() {
        this.divStyles = Object.assign({ background: this.color, height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none' }, this.style);
    }
    currentStyles() {
        this.focusStyles = Object.assign({}, this.divStyles, this.focusStyle);
        return this.focus || this.inFocus ? this.focusStyles : this.divStyles;
    }
    handleFocusOut() {
        this.inFocus = false;
    }
    handleFocus() {
        this.inFocus = true;
    }
    handleHover(hex, $event) {
        this.onHover.emit({ hex, $event });
    }
    handleClick(hex, $event) {
        this.onClick.emit({ hex, $event });
    }
};
SwatchComponent.ɵfac = function SwatchComponent_Factory(t) { return new (t || SwatchComponent)(); };
SwatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SwatchComponent, selectors: [["color-swatch"]], inputs: { style: "style", focusStyle: "focusStyle", color: "color", focus: "focus" }, outputs: { onClick: "onClick", onHover: "onHover" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [["tabindex", "0", 1, "swatch", 3, "ngStyle", "click", "keydown.enter", "focus", "blur", "mouseover"], ["boxShadow", "inset 0 0 0 1px rgba(0,0,0,0.1)", 4, "ngIf"], ["boxShadow", "inset 0 0 0 1px rgba(0,0,0,0.1)"]], template: function SwatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SwatchComponent_Template_div_click_0_listener($event) { return ctx.handleClick(ctx.color, $event); })("keydown.enter", function SwatchComponent_Template_div_keydown_enter_0_listener($event) { return ctx.handleClick(ctx.color, $event); })("focus", function SwatchComponent_Template_div_focus_0_listener() { return ctx.handleFocus(); })("blur", function SwatchComponent_Template_div_blur_0_listener() { return ctx.handleFocusOut(); })("mouseover", function SwatchComponent_Template_div_mouseover_0_listener($event) { return ctx.handleHover(ctx.color, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SwatchComponent_color_checkboard_2_Template, 1, 0, "color-checkboard", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.currentStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.color === "transparent");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], CheckboardComponent], encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "focusStyle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], SwatchComponent.prototype, "focus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "onHover", void 0);
let SwatchModule = class SwatchModule {
};
SwatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SwatchModule });
SwatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SwatchModule_Factory(t) { return new (t || SwatchModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule]] });

let ShadeComponent = class ShadeComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnChanges() {
        this.gradient = {
            background: `linear-gradient(to right,
          hsl(${this.hsl.h}, 90%, 55%),
          #000)`,
        };
        const hsv = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](this.hsl).toHsv();
        this.pointerLeft = 100 - (hsv.v * 100);
    }
    handleChange({ left, containerWidth, $event }) {
        let data;
        let v;
        if (left < 0) {
            v = 0;
        }
        else if (left > containerWidth) {
            v = 1;
        }
        else {
            v = Math.round((left * 100) / containerWidth) / 100;
        }
        const hsv = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](this.hsl).toHsv();
        if (hsv.v !== v) {
            data = {
                h: this.hsl.h,
                s: 100,
                v: 1 - v,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb',
            };
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data, $event });
    }
};
ShadeComponent.ɵfac = function ShadeComponent_Factory(t) { return new (t || ShadeComponent)(); };
ShadeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShadeComponent, selectors: [["color-shade"]], inputs: { hsl: "hsl", rgb: "rgb", pointer: "pointer", shadow: "shadow", radius: "radius" }, outputs: { onChange: "onChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 12, consts: [[1, "shade"], [1, "shade-gradient", 3, "ngStyle"], ["ngx-color-coordinates", "", 1, "shade-container", 3, "coordinatesChange"], [1, "shade-pointer"], [1, "shade-slider", 3, "ngStyle"]], template: function ShadeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("coordinatesChange", function ShadeComponent_Template_div_coordinatesChange_2_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border-radius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("box-shadow", ctx.shadow)("border-radius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.gradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.pointerLeft, "%")("top", ctx.pointerTop, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.pointer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], CoordinatesDirective], styles: [".shade[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .shade-gradient[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .shade-container[_ngcontent-%COMP%] {\n      position: relative;\n      height: 100%;\n      margin: 0 3px;\n    }\n    .shade-pointer[_ngcontent-%COMP%] {\n      position: absolute;\n    }\n    .shade-slider[_ngcontent-%COMP%] {\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      margin-top: 1px;\n      transform: translateX(-2px);\n    },"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ShadeComponent.prototype, "shadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ShadeComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "onChange", void 0);
let ShadeModule = class ShadeModule {
};
ShadeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ShadeModule });
ShadeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ShadeModule_Factory(t) { return new (t || ShadeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-checkboard',
                template: `<div class="grid" [ngStyle]="gridStyles"></div>`,
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: [`
  .grid {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    position: absolute;
  }
  `]
            }]
    }], function () { return []; }, { white: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], grey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], boxShadow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], borderRadius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CheckboardModule, { declarations: function () { return [CheckboardComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [CheckboardComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [CheckboardComponent],
                exports: [CheckboardComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CoordinatesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{ selector: '[ngx-color-coordinates]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { coordinatesChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], mousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:mousemove', ['$event', '$event.pageX', '$event.pageY']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:touchmove', [
                    '$event',
                    '$event.touches[0].clientX',
                    '$event.touches[0].clientY',
                    'true',
                ]]
        }], mouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:mouseup']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:touchend']
        }], mousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['mousedown', ['$event', '$event.pageX', '$event.pageY']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['touchstart', [
                    '$event',
                    '$event.touches[0].clientX',
                    '$event.touches[0].clientY',
                    'true',
                ]]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoordinatesModule, { declarations: [CoordinatesDirective], exports: [CoordinatesDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CoordinatesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [CoordinatesDirective],
                exports: [CoordinatesDirective]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AlphaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-alpha',
                template: `
  <div class="alpha" [style.border-radius]="radius">
    <div class="alpha-checkboard">
      <color-checkboard></color-checkboard>
    </div>
    <div class="alpha-gradient" [ngStyle]="gradient" [style.box-shadow]="shadow" [style.border-radius]="radius"></div>
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="alpha-container color-alpha-{{direction}}">
      <div class="alpha-pointer" [style.left.%]="pointerLeft" [style.top.%]="pointerTop">
        <div class="alpha-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                styles: [`
    .alpha {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .alpha-checkboard {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }
    .alpha-gradient {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .alpha-container {
      position: relative;
      height: 100%;
      margin: 0 3px;
    }
    .alpha-pointer {
      position: absolute;
    }
    .alpha-slider {
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      margin-top: 1px;
      transform: translateX(-2px);
    },
  `]
            }]
    }], function () { return []; }, { direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], hsl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rgb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], pointer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], shadow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AlphaModule, { declarations: function () { return [AlphaComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule, CoordinatesModule]; }, exports: function () { return [AlphaComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AlphaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [AlphaComponent],
                exports: [AlphaComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule, CoordinatesModule]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorWrap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                // create seletor base for test override property
                selector: 'color-wrap',
                template: ``
            }]
    }], function () { return []; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onChangeComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onSwatchHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ColorWrapModule, { declarations: function () { return [ColorWrap]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ColorWrap]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorWrapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [ColorWrap],
                exports: [ColorWrap],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditableInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-editable-input',
                template: `
  <div class="wrap" [ngStyle]="wrapStyle">
    <input [ngStyle]="inputStyle" spellCheck="false"
      [value]="currentValue" [placeholder]="placeholder"
      (keydown)="handleKeydown($event)" (keyup)="handleKeyup($event)"
      (focus)="handleFocus($event)" (focusout)="handleFocusOut($event)" />
    <span *ngIf="label" [ngStyle]="labelStyle" (mousedown)="handleMousedown($event)">
      {{ label }}
    </span>
  </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: [`
    :host {
      display: flex;
    }
    .wrap {
      position: relative;
    }
  `]
            }]
    }], function () { return []; }, { placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], arrowOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dragLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dragMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EditableInputModule, { declarations: function () { return [EditableInputComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [EditableInputComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditableInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [EditableInputComponent],
                exports: [EditableInputComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-hue',
                template: `
  <div class="color-hue color-hue-{{direction}}" [style.border-radius.px]="radius" [style.box-shadow]="shadow">
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="color-hue-container">
      <div class="color-hue-pointer" [style.left]="left" [style.top]="top" *ngIf="!hidePointer">
        <div class="color-hue-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `,
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: [`
    .color-hue {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .color-hue-container {
      margin: 0 2px;
      position: relative;
      height: 100%;
    }
    .color-hue-pointer {
      position: absolute;
    }
    .color-hue-slider {
      margin-top: 1px;
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      transform: translateX(-2px);
    }
    .color-hue-horizontal {
      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    }
    .color-hue-vertical {
      background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    }
  `]
            }]
    }], function () { return []; }, { hidePointer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], hsl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], pointer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], shadow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HueModule, { declarations: function () { return [HueComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]; }, exports: function () { return [HueComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [HueComponent],
                exports: [HueComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RaisedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-raised',
                template: `
  <div class="raised-wrap">
    <div class="raised-bg zDepth-{{zDepth}}" [style.background]="background"></div>
    <div class="raised-content">
      <ng-content></ng-content>
    </div>
  </div>
  `,
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: [`
    .raised-wrap {
      position: relative;
      display: inline-block;
    }
    .raised-bg {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    .raised-content {
      position: relative;
    }
    .zDepth-0 {
      box-shadow: none;
    }
    .zDepth-1 {
      box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
    }
    .zDepth-2 {
      box-shadow: 0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2);
    }
    .zDepth-3 {
      box-shadow: 0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24);
    }
    .zDepth-4 {
      box-shadow: 0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22);
    }
    .zDepth-5 {
      box-shadow: 0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2);
    }
  `]
            }]
    }], function () { return []; }, { zDepth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RaisedModule, { declarations: function () { return [RaisedComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [RaisedComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RaisedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [RaisedComponent],
                exports: [RaisedComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SaturationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-saturation',
                template: `
  <div class="color-saturation" ngx-color-coordinates (coordinatesChange)="handleChange($event)" [style.background]="background">
    <div class="saturation-white">
      <div class="saturation-black"></div>
      <div class="saturation-pointer" [ngStyle]="pointer" [style.top]="pointerTop" [style.left]="pointerLeft">
        <div class="saturation-circle" [ngStyle]="circle"></div>
      </div>
    </div>
  </div>
  `,
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: [`
    .saturation-white {
      background: linear-gradient(to right, #fff, rgba(255,255,255,0));
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .saturation-black {
      background: linear-gradient(to top, #000, rgba(0,0,0,0));
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .color-saturation {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .saturation-pointer {
      position: absolute;
      cursor: default;
    }
    .saturation-circle {
      width: 4px;
      height: 4px;
      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
      border-radius: 50%;
      cursor: hand;
      transform: translate(-2px, -4px);
    }
  `]
            }]
    }], function () { return []; }, { onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], hsl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hsv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], pointer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], circle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SaturationModule, { declarations: function () { return [SaturationComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]; }, exports: function () { return [SaturationComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SaturationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [SaturationComponent],
                exports: [SaturationComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SwatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-swatch',
                template: `
    <div
      class="swatch"
      [ngStyle]="currentStyles()"
      [attr.title]="color"
      (click)="handleClick(color, $event)"
      (keydown.enter)="handleClick(color, $event)"
      (focus)="handleFocus()"
      (blur)="handleFocusOut()"
      (mouseover)="handleHover(color, $event)"
      tabindex="0"
    >
      <ng-content></ng-content>
      <color-checkboard
        *ngIf="color === 'transparent'"
        boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
      ></color-checkboard>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], focusStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SwatchModule, { declarations: function () { return [SwatchComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule]; }, exports: function () { return [SwatchComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SwatchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [SwatchComponent],
                exports: [SwatchComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ShadeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'color-shade',
                template: `
    <div class="shade" [style.border-radius]="radius">
      <div
        class="shade-gradient"
        [ngStyle]="gradient"
        [style.box-shadow]="shadow"
        [style.border-radius]="radius"
      ></div>
      <div
        ngx-color-coordinates
        (coordinatesChange)="handleChange($event)"
        class="shade-container"
      >
        <div
          class="shade-pointer"
          [style.left.%]="pointerLeft"
          [style.top.%]="pointerTop"
        >
          <div class="shade-slider" [ngStyle]="pointer"></div>
        </div>
      </div>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                styles: [`
    .shade {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-gradient {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-container {
      position: relative;
      height: 100%;
      margin: 0 3px;
    }
    .shade-pointer {
      position: absolute;
    }
    .shade-slider {
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      margin-top: 1px;
      transform: translateX(-2px);
    },
  `]
            }]
    }], function () { return []; }, { onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], hsl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rgb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], pointer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], shadow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShadeModule, { declarations: function () { return [ShadeComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]; }, exports: function () { return [ShadeComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ShadeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [ShadeComponent],
                exports: [ShadeComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-color.js.map

/***/ }),

/***/ "SfhT":
/*!*******************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/index.js ***!
  \*******************************************************/
/*! exports provided: TinyColor, tinycolor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return TinyColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return tinycolor; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "577q");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "cxgy");
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format-input */ "LQXu");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "gMo9");




var TinyColor = (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        if (color instanceof TinyColor) {
            return color;
        }
        this.originalInput = color;
        var rgb = Object(_format_input__WEBPACK_IMPORTED_MODULE_2__["inputToRGB"])(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    TinyColor.prototype.getBrightness = function () {
        var rgb = this.toRgb();
        return ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
    };
    TinyColor.prototype.getLuminance = function () {
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);
        }
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    };
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = Object(_util__WEBPACK_IMPORTED_MODULE_3__["boundAlpha"])(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    TinyColor.prototype.toHsv = function () {
        var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    TinyColor.prototype.toHsvString = function () {
        var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toHsl = function () {
        var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    TinyColor.prototype.toHslString = function () {
        var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, allow3Char);
    };
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToHex"])(this.r, this.g, this.b, this.a, allow4Char);
    };
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(" + r + ", " + g + ", " + b + ")" : "rgba(" + r + ", " + g + ", " + b + ", " + this.roundA + ")";
    };
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100) + "%"; };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100); };
        return this.a === 1 ?
            "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)" :
            "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.keys(_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]); _i < _a.length; _i++) {
            var key = _a[_i];
            if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][key] === hex) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
            g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
            b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
            a: ((rgb2.a - rgb1.a) * p) + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + (i * increment)) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}


/***/ }),

/***/ "VTWt":
/*!******************************************************************************************!*\
  !*** ./src/app/application/engineers/engineer-add/engineer-view-geofencing.Component.ts ***!
  \******************************************************************************************/
/*! exports provided: EngineerViewGeofencingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerViewGeofencingComponent", function() { return EngineerViewGeofencingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_genic_zone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/genic-zone.service */ "L6Ap");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/property.service */ "Pffd");




class EngineerViewGeofencingComponent {
    constructor(genicZoneService, propertySerivce) {
        this.genicZoneService = genicZoneService;
        this.propertySerivce = propertySerivce;
        this.alloverlays = [];
    }
    ngOnInit() {
        this.loadMapOnView();
        // MapLoaderService.load().then(() => {
        // });
    }
    loadMapOnView() {
        this.propertySerivce.getLatLongUsingCountry(this.genicZoneService.GenicZoneData.CountryName).then(res => {
            this.addressresult = res.results;
            setTimeout(() => {
                this.latitude = this.addressresult[0].geometry.location.lat;
                this.longitude = this.addressresult[0].geometry.location.lng;
                this.drawPolygon();
            }, 500);
        });
    }
    drawPolygon() {
        this.map = new google.maps.Map(document.getElementById('EngiViewGeoMapId'), {
            center: { lat: this.latitude, lng: this.longitude },
            zoom: 5
        });
        this.genicZoneService.GenicZoneData.ZoneCoordinatesList.forEach(l => {
            // tslint:disable-next-line: prefer-const
            let shapeCoord = JSON.parse(l.Coordinates);
            // this code is used to polygon
            if (shapeCoord.shape === 'polygon') {
                // tslint:disable-next-line: prefer-const
                let s = JSON.parse(shapeCoord.path);
                const len = Object.keys(s).length;
                let flightPlanCoordinates;
                flightPlanCoordinates = [];
                let ffItem1; // this variable is used add end point of polygon
                let ffItem2; // this variable is used add end point of polygon
                let objLatLong = Object();
                // tslint:disable-next-line: no-shadowed-variable
                for (let l = 0; l <= len - 1; l++) {
                    const pLenght = s[l].split(',');
                    objLatLong.lat = Number(pLenght[0]);
                    objLatLong.lng = Number(pLenght[1]);
                    flightPlanCoordinates.push(objLatLong);
                    if (l === 0) {
                        ffItem1 = Number(pLenght[0]);
                        ffItem2 = Number(pLenght[1]);
                    }
                    objLatLong = new Object();
                }
                objLatLong.lat = Number(ffItem1);
                objLatLong.lng = Number(ffItem2);
                flightPlanCoordinates.push(objLatLong); // here we push end point of polygon
                objLatLong = new Object();
                ffItem1 = 0;
                ffItem2 = 0;
                // tslint:disable-next-line: prefer-const
                let polygonPath = new google.maps.Polygon({
                    path: flightPlanCoordinates,
                    geodesic: true,
                    fillColor: '#0084cac7',
                    strokeOpacity: 1.0,
                    fillOpacity: 0.3,
                    strokeColor: '#000000',
                    strokeWeight: 0.58,
                });
                polygonPath.setMap(this.map);
            }
            // this code is used for rectangle
            if (shapeCoord.shape === 'rectangle') {
                // tslint:disable-next-line: prefer-const
                let tempBonds = JSON.parse(shapeCoord.bounds);
                const NorthEst = tempBonds.NE.split(',');
                const NorthEstOne = NorthEst[0];
                const NorthEstTow = NorthEst[1];
                const SouthWest = tempBonds.SW.split(',');
                const SouthWestOne = SouthWest[0];
                const SouthWestTwo = SouthWest[1];
                // tslint:disable-next-line: prefer-const
                let rectanglePath = new google.maps.Rectangle({
                    strokeOpacity: 1.0,
                    strokeColor: '#000000',
                    strokeWeight: 0.58,
                    fillColor: '#0084cac7',
                    fillOpacity: 0.3,
                    map: this.map,
                    bounds: new google.maps.LatLngBounds(new google.maps.LatLng(Number(SouthWestOne), Number(SouthWestTwo)), new google.maps.LatLng(Number(NorthEstOne), Number(NorthEstTow)))
                });
                rectanglePath.setMap(this.map);
            }
            // this code is used for circle
            if (shapeCoord.shape === 'circle') {
                const CurPosition = shapeCoord.Cb.split(',');
                const CurPositionLat = CurPosition[0];
                const CurPositionLng = CurPosition[1];
                const curtin = new google.maps.LatLng(Number(CurPositionLat), Number(CurPositionLng));
                const circle = new google.maps.Circle({
                    center: curtin,
                    path: google.maps.SymbolPath.CIRCLE,
                    map: this.map,
                    radius: Number(shapeCoord.radius),
                    fillColor: '#0084cac7',
                    fillOpacity: 0.3,
                    strokeColor: '#000000',
                    strokeWeight: 0.58,
                });
                circle.setMap(this.map);
            }
        });
    }
}
EngineerViewGeofencingComponent.ɵfac = function EngineerViewGeofencingComponent_Factory(t) { return new (t || EngineerViewGeofencingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genic_zone_service__WEBPACK_IMPORTED_MODULE_1__["GenicZoneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"])); };
EngineerViewGeofencingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EngineerViewGeofencingComponent, selectors: [["app-engineer-view-geofencing"]], decls: 11, vars: 0, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], [1, "btnclose-ectc"], ["mat-dialog-close", "", 1, ""], [1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", 2, "padding", "0"], [1, "kt-grid", "kt-grid--desktop", "kt-grid--ver", "kt-grid--ver-desktop", "kt-app"], [1, "kt-grid__item", "kt-grid__item--fluid", "kt-app__content"], [1, "row"], [1, "col-xl-12"], [1, "cl-map-class"], ["id", "EngiViewGeoMapId"]], template: function EngineerViewGeofencingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{background-color:#E7E7E7;color:black;font-size:17px !important;text-transform:uppercase !important;padding:12px 40px;}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black;}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:white !important}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active, .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{background-color:#22366B;color:white}\r\n.tab-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:transparent !important;border:none;}\r\n.tab-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background-color:#dedede;border-bottom:none;margin-bottom:0px;}\r\n.tab-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:0px;font-size:18px;font-weight:600;color:black;}\r\n.kt-portlet__body.create-new-client-portlet-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.kt-portlet__body.create-new-client-portlet-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px !important;font-weight:600;color:black !important;}\r\n#menu1[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{font-size: 14px;height: 50px;}\r\n#menu1[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:15px !important;}\r\n#menu1[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px !important;color:black !important;font-weight:600 !important;}\r\n.creat-new-quote-footer[_ngcontent-%COMP%]{margin:20px 0px;}\r\n.new-quote-main-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:white !important;padding-top:15px;padding-bottom:15px !important;}\r\n.new-requst-filter_form.create-new-client-popup[_ngcontent-%COMP%]{position:sticky;bottom:0;}\r\n.creat-new-quote-footer[_ngcontent-%COMP%]{padding:10px 0px;background-color:white;}\r\n.new-quote-main-section[_ngcontent-%COMP%]   .kt-section__body[_ngcontent-%COMP%]{padding:10px !important;background-color:white;}\r\n.no-padding[_ngcontent-%COMP%]{padding:0px;}\r\n.collapse[_ngcontent-%COMP%]:not(.show){display:block;}\r\n.form-group.creat-properties-form-group[_ngcontent-%COMP%]{width:100%;}\r\nspan.Ac[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {background-color: #2c77f4; padding: 5px 8px; border-radius: 0px; margin-right: 1px;}\r\nspan.Ac[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: white;}\r\n.switcher-customer[_ngcontent-%COMP%] { top:-20px;position: relative; }\r\nspan.Av[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {background-color: #0b8a03; padding: 5px 8px; border-radius: 0px; margin-right: 1px;}\r\nspan.Av[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: white;}\r\nspan.At[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {background-color: #8a033bbf; padding: 5px 8px; border-radius: 0px; margin-right: 1px;}\r\nspan.At[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: white;}\r\nspan.spnUnrigh[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {color: #ff0000a6; font-size: 19px;}\r\nspan.spnrigh[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {color: #0b8a03; font-size: 19px;}\r\n.btlZonelist[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {color: #000000; font-weight: 600;}\r\n.bt-newZone[_ngcontent-%COMP%]{background-color: #2c77f4;color: white !important;padding: 2px 14px;margin-left: 6px;cursor: pointer;}\r\n#EngiViewGeoMapId[_ngcontent-%COMP%] { height: 100%;}\r\n.cl-map-class[_ngcontent-%COMP%]{height: 450px;}\r\n.btnclose-ectc[_ngcontent-%COMP%] {text-align: right;}\r\n.btnclose-ectc[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color: #ec978a; color: red; border: none; padding: 6px 13px; margin-bottom: 4px;}\r\n.geoCustomMatClass[_ngcontent-%COMP%]{padding: 0 !important; margin: 0 !important;}\r\n.mat-dialog-container[_ngcontent-%COMP%]{padding: 0 !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZW5naW5lZXJzL2VuZ2luZWVyLWFkZC9lbmdpbmVlci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOEJBQThCLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxtQ0FBbUMsQ0FBQyxpQkFBaUIsQ0FBQztBQUNuSixnQ0FBZ0MsV0FBVyxDQUFDO0FBQzVDLDhFQUE4RSxzQkFBc0I7QUFDcEcsZ0hBQWdILHdCQUF3QixDQUFDLFdBQVc7QUFDcEosbUJBQW1CLHVDQUF1QyxDQUFDLFdBQVcsQ0FBQztBQUN2RSxnQ0FBZ0Msd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUM7QUFDOUYsNENBQTRDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBQ3pHLDZEQUE2RCxrQkFBa0IsQ0FBQztBQUNoRixtRUFBbUUseUJBQXlCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDO0FBQ3BJLHFCQUFxQixlQUFlLENBQUMsWUFBWSxDQUFDO0FBQ2xELG1CQUFtQiw2QkFBNkIsQ0FBQztBQUNqRCx5QkFBeUIseUJBQXlCLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLENBQUM7QUFDckcsd0JBQXdCLGVBQWUsQ0FBQztBQUN4Qyw4QkFBOEIsaUNBQWlDLENBQUMsZ0JBQWdCLENBQUMsOEJBQThCLENBQUM7QUFDaEgsZ0RBQWdELGVBQWUsQ0FBQyxRQUFRLENBQUM7QUFDekUsd0JBQXdCLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO0FBQ2hFLDBDQUEwQyx1QkFBdUIsQ0FBQyxzQkFBc0IsQ0FBQztBQUN6RixZQUFZLFdBQVcsQ0FBQztBQUN4QixxQkFBcUIsYUFBYSxDQUFDO0FBQ25DLHdDQUF3QyxVQUFVLENBQUM7QUFDbkQsV0FBVyx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztBQUM5RixZQUFZLFlBQVksQ0FBQztBQUN6QixxQkFBcUIsU0FBUyxDQUFDLGtCQUFrQixFQUFFO0FBQ25ELFdBQVcseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7QUFDOUYsWUFBWSxZQUFZLENBQUM7QUFFekIsV0FBVywyQkFBMkIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztBQUNoRyxZQUFZLFlBQVksQ0FBQztBQUN6QixrQkFBa0IsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO0FBQ3BELGdCQUFnQixjQUFjLEVBQUUsZUFBZSxDQUFDO0FBQ2hELG9CQUFvQixjQUFjLEVBQUUsZ0JBQWdCLENBQUM7QUFDckQsWUFBWSx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7QUFDakgsb0JBQW9CLFlBQVksQ0FBQztBQUNqQyxjQUFjLGFBQWEsQ0FBQztBQUM1QixnQkFBZ0IsaUJBQWlCLENBQUM7QUFDbEMsc0JBQXNCLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7QUFDakgsbUJBQW1CLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDO0FBQy9ELHNCQUFzQixxQkFBcUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2VuZ2luZWVycy9lbmdpbmVlci1hZGQvZW5naW5lZXItYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmt7YmFja2dyb3VuZC1jb2xvcjojRTdFN0U3O2NvbG9yOmJsYWNrO2ZvbnQtc2l6ZToxN3B4ICFpbXBvcnRhbnQ7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnQ7cGFkZGluZzoxMnB4IDQwcHg7fVxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluayBpe2NvbG9yOmJsYWNrO31cclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIGksIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIGl7Y29sb3I6d2hpdGUgIWltcG9ydGFudH1cclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluazphY3RpdmUsIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIyMzY2Qjtjb2xvcjp3aGl0ZX1cclxuLnRhYi1jb250ZW50IC5jYXJke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtib3JkZXI6bm9uZTt9XHJcbi50YWItY29udGVudCAuY2FyZCAuY2FyZC1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojZGVkZWRlO2JvcmRlci1ib3R0b206bm9uZTttYXJnaW4tYm90dG9tOjBweDt9XHJcbi50YWItY29udGVudCAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGV7bWFyZ2luLWJvdHRvbTowcHg7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOmJsYWNrO31cclxuLmt0LXBvcnRsZXRfX2JvZHkuY3JlYXRlLW5ldy1jbGllbnQtcG9ydGxldC1ib2R5IC5mb3JtLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5rdC1wb3J0bGV0X19ib2R5LmNyZWF0ZS1uZXctY2xpZW50LXBvcnRsZXQtYm9keSAuZm9ybS1ncm91cCBsYWJlbHtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjayAhaW1wb3J0YW50O31cclxuI21lbnUxIC5mb3JtLWNvbnRyb2x7Zm9udC1zaXplOiAxNHB4O2hlaWdodDogNTBweDt9XHJcbiNtZW51MSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjE1cHggIWltcG9ydGFudDt9XHJcbiNtZW51MSAuZm9ybS1ncm91cCBsYWJlbHtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NjAwICFpbXBvcnRhbnQ7fVxyXG4uY3JlYXQtbmV3LXF1b3RlLWZvb3RlcnttYXJnaW46MjBweCAwcHg7fVxyXG4ubmV3LXF1b3RlLW1haW4tc2VjdGlvbiAuY2FyZHtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlICFpbXBvcnRhbnQ7cGFkZGluZy10b3A6MTVweDtwYWRkaW5nLWJvdHRvbToxNXB4ICFpbXBvcnRhbnQ7fVxyXG4ubmV3LXJlcXVzdC1maWx0ZXJfZm9ybS5jcmVhdGUtbmV3LWNsaWVudC1wb3B1cHtwb3NpdGlvbjpzdGlja3k7Ym90dG9tOjA7fVxyXG4uY3JlYXQtbmV3LXF1b3RlLWZvb3RlcntwYWRkaW5nOjEwcHggMHB4O2JhY2tncm91bmQtY29sb3I6d2hpdGU7fVxyXG4ubmV3LXF1b3RlLW1haW4tc2VjdGlvbiAua3Qtc2VjdGlvbl9fYm9keXtwYWRkaW5nOjEwcHggIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO31cclxuLm5vLXBhZGRpbmd7cGFkZGluZzowcHg7fVxyXG4uY29sbGFwc2U6bm90KC5zaG93KXtkaXNwbGF5OmJsb2NrO31cclxuLmZvcm0tZ3JvdXAuY3JlYXQtcHJvcGVydGllcy1mb3JtLWdyb3Vwe3dpZHRoOjEwMCU7fVxyXG5zcGFuLkFjIGEge2JhY2tncm91bmQtY29sb3I6ICMyYzc3ZjQ7IHBhZGRpbmc6IDVweCA4cHg7IGJvcmRlci1yYWRpdXM6IDBweDsgbWFyZ2luLXJpZ2h0OiAxcHg7fVxyXG5zcGFuLkFjIGEgaXtjb2xvcjogd2hpdGU7fVxyXG4uc3dpdGNoZXItY3VzdG9tZXIgeyB0b3A6LTIwcHg7cG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbnNwYW4uQXYgYSB7YmFja2dyb3VuZC1jb2xvcjogIzBiOGEwMzsgcGFkZGluZzogNXB4IDhweDsgYm9yZGVyLXJhZGl1czogMHB4OyBtYXJnaW4tcmlnaHQ6IDFweDt9XHJcbnNwYW4uQXYgYSBpe2NvbG9yOiB3aGl0ZTt9XHJcblxyXG5zcGFuLkF0IGEge2JhY2tncm91bmQtY29sb3I6ICM4YTAzM2JiZjsgcGFkZGluZzogNXB4IDhweDsgYm9yZGVyLXJhZGl1czogMHB4OyBtYXJnaW4tcmlnaHQ6IDFweDt9XHJcbnNwYW4uQXQgYSBpe2NvbG9yOiB3aGl0ZTt9XHJcbnNwYW4uc3BuVW5yaWdoIGkge2NvbG9yOiAjZmYwMDAwYTY7IGZvbnQtc2l6ZTogMTlweDt9XHJcbnNwYW4uc3BucmlnaCBpIHtjb2xvcjogIzBiOGEwMzsgZm9udC1zaXplOiAxOXB4O31cclxuLmJ0bFpvbmVsaXN0IHRyIHRkIHtjb2xvcjogIzAwMDAwMDsgZm9udC13ZWlnaHQ6IDYwMDt9XHJcbi5idC1uZXdab25le2JhY2tncm91bmQtY29sb3I6ICMyYzc3ZjQ7Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7cGFkZGluZzogMnB4IDE0cHg7bWFyZ2luLWxlZnQ6IDZweDtjdXJzb3I6IHBvaW50ZXI7fVxyXG4jRW5naVZpZXdHZW9NYXBJZCB7IGhlaWdodDogMTAwJTt9XHJcbi5jbC1tYXAtY2xhc3N7aGVpZ2h0OiA0NTBweDt9XHJcbi5idG5jbG9zZS1lY3RjIHt0ZXh0LWFsaWduOiByaWdodDt9XHJcbi5idG5jbG9zZS1lY3RjIGJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5NzhhOyBjb2xvcjogcmVkOyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDZweCAxM3B4OyBtYXJnaW4tYm90dG9tOiA0cHg7fVxyXG4uZ2VvQ3VzdG9tTWF0Q2xhc3N7cGFkZGluZzogMCAhaW1wb3J0YW50OyBtYXJnaW46IDAgIWltcG9ydGFudDt9XHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lcntwYWRkaW5nOiAwICFpbXBvcnRhbnQ7fSJdfQ== */", ""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineerViewGeofencingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-engineer-view-geofencing',
                templateUrl: './engineer-view-geofencing.Component.html',
                styleUrls: ['./engineer-add.component.css']
            }]
    }], function () { return [{ type: src_app_services_genic_zone_service__WEBPACK_IMPORTED_MODULE_1__["GenicZoneService"] }, { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"] }]; }, null); })();


/***/ }),

/***/ "Y7UZ":
/*!*************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/readability.js ***!
  \*************************************************************/
/*! exports provided: readability, isReadable, mostReadable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return readability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return isReadable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return mostReadable; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "SfhT");

function readability(color1, color2) {
    var c1 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color1);
    var c2 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color2);
    return ((Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) /
        (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05));
}
function isReadable(color1, color2, wcag2) {
    if (wcag2 === void 0) { wcag2 = { level: 'AA', size: 'small' }; }
    var _a, _b;
    var readabilityLevel = readability(color1, color2);
    switch (((_a = wcag2.level) !== null && _a !== void 0 ? _a : 'AA') + ((_b = wcag2.size) !== null && _b !== void 0 ? _b : 'small')) {
        case 'AAsmall':
        case 'AAAlarge':
            return readabilityLevel >= 4.5;
        case 'AAlarge':
            return readabilityLevel >= 3;
        case 'AAAsmall':
            return readabilityLevel >= 7;
        default:
            return false;
    }
}
function mostReadable(baseColor, colorList, args) {
    if (args === void 0) { args = { includeFallbackColors: false, level: 'AA', size: 'small' }; }
    var bestColor = null;
    var bestScore = 0;
    var includeFallbackColors = args.includeFallbackColors, level = args.level, size = args.size;
    for (var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++) {
        var color = colorList_1[_i];
        var score = readability(baseColor, color);
        if (score > bestScore) {
            bestScore = score;
            bestColor = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color);
        }
    }
    if (isReadable(baseColor, bestColor, { level: level, size: size }) || !includeFallbackColors) {
        return bestColor;
    }
    args.includeFallbackColors = false;
    return mostReadable(baseColor, ['#fff', '#000'], args);
}


/***/ }),

/***/ "ZQ7O":
/*!**************************************************************************************!*\
  !*** ./src/app/application/engineers/engineer-details/engineer-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EngineerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerDetailsComponent", function() { return EngineerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _engineer_add_engineer_view_geofencing_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../engineer-add/engineer-view-geofencing.Component */ "VTWt");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/engineer.service */ "+MZO");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.component */ "myuM");
/* harmony import */ var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */ "X7qY");
/* harmony import */ var _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Team-List/TicketTeamList.component */ "U6ah");

















function EngineerDetailsComponent_li_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_img_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 73);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r2.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EngineerDetailsComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.service.formData.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EngineerDetailsComponent_tr_90_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_tr_90_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Foreman");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_tr_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Designation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EngineerDetailsComponent_tr_90_span_5_Template, 2, 0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EngineerDetailsComponent_tr_90_span_6_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.service.formData.Type === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.service.formData.Type === 2);
} }
function EngineerDetailsComponent_tr_91_span_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " for future Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_tr_91_span_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Only for Same Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_tr_91_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EngineerDetailsComponent_tr_91_span_5_span_2_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EngineerDetailsComponent_tr_91_span_5_span_3_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Add New Customer and ", ctx_r13.currentUser.Ticket, "s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.service.formData.CreateForAllDate === "AllDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.service.formData.CreateForAllDate === "SameDate");
} }
function EngineerDetailsComponent_tr_91_span_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " for future Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_tr_91_span_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Only for Same Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_tr_91_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EngineerDetailsComponent_tr_91_span_6_span_2_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EngineerDetailsComponent_tr_91_span_6_span_3_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Add New ", ctx_r14.currentUser.Ticket, " with existing Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.service.formData.CreateForAllDate === "AllDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.service.formData.CreateForAllDate === "SameDate");
} }
function EngineerDetailsComponent_tr_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " other permissions: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EngineerDetailsComponent_tr_91_span_5_Template, 4, 3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EngineerDetailsComponent_tr_91_span_6_Template, 4, 3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.service.formData.CreateCustomer === "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.service.formData.CreateCustomer === "Partial");
} }
function EngineerDetailsComponent_tr_92_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_tr_92_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_tr_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EngineerDetailsComponent_tr_92_span_5_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EngineerDetailsComponent_tr_92_span_6_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Assign ", ctx_r6.currentUser.Ticket, " to another user ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.service.formData.AssignToOtherUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.service.formData.AssignToOtherUser);
} }
function EngineerDetailsComponent_span_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_table_168_tr_16_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recurring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_table_168_tr_16_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UNALLOCATED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_table_168_tr_16_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RESECHEDULED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_table_168_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerDetailsComponent_table_168_tr_16_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const x_r24 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.ViewTicketDetails(x_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EngineerDetailsComponent_table_168_tr_16_span_6_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "generic-ticket-date-time-format", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("AChange", function EngineerDetailsComponent_table_168_tr_16_Template_generic_ticket_date_time_format_AChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const x_r24 = ctx.$implicit; return x_r24.AppointmentStart = $event; })("BChange", function EngineerDetailsComponent_table_168_tr_16_Template_generic_ticket_date_time_format_BChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const x_r24 = ctx.$implicit; return x_r24.AppointmentEnd = $event; })("CChange", function EngineerDetailsComponent_table_168_tr_16_Template_generic_ticket_date_time_format_CChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const x_r24 = ctx.$implicit; return x_r24.CreatedUtcDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EngineerDetailsComponent_table_168_tr_16_span_9_Template, 2, 0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EngineerDetailsComponent_table_168_tr_16_span_10_Template, 2, 0, "span", 97);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "generic-ticket-status", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function EngineerDetailsComponent_table_168_tr_16_Template_generic_ticket_status_StatusChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const x_r24 = ctx.$implicit; return x_r24.Status = $event; })("OverDueDaysChange", function EngineerDetailsComponent_table_168_tr_16_Template_generic_ticket_status_OverDueDaysChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const x_r24 = ctx.$implicit; return x_r24.OverDueDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "generic-ticket-team-list", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("TicketTeamsChange", function EngineerDetailsComponent_table_168_tr_16_Template_generic_ticket_team_list_TicketTeamsChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const x_r24 = ctx.$implicit; return x_r24.TicketTeams = $event; })("localPrependUrlChange", function EngineerDetailsComponent_table_168_tr_16_Template_generic_ticket_team_list_localPrependUrlChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.localPrependUrl = $event; })("ReallocateChange", function EngineerDetailsComponent_table_168_tr_16_Template_generic_ticket_team_list_ReallocateChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const x_r24 = ctx.$implicit; return x_r24.Reallocate = $event; })("IdChange", function EngineerDetailsComponent_table_168_tr_16_Template_generic_ticket_team_list_IdChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const x_r24 = ctx.$implicit; return x_r24.Id = $event; })("TicketIdChange", function EngineerDetailsComponent_table_168_tr_16_Template_generic_ticket_team_list_TicketIdChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const x_r24 = ctx.$implicit; return x_r24.TicketId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r24 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r24.TicketId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r24.TicketType === "Recurring Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("A", x_r24.AppointmentStart)("B", x_r24.AppointmentEnd)("C", x_r24.CreatedUtcDate)("T", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r24.OneOffAppointmentDate === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r24.Rescheduled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r24.CustomerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r24.CustomerCompanyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r24.CustomerAddress, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", x_r24.Status)("OverDueDays", x_r24.OverDueDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("TicketTeams", x_r24.TicketTeams)("localPrependUrl", ctx_r21.localPrependUrl)("Reallocate", x_r24.Reallocate)("Id", x_r24.Id)("TicketId", x_r24.TicketId);
} }
function EngineerDetailsComponent_table_168_td_19_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Record!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerDetailsComponent_table_168_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EngineerDetailsComponent_table_168_td_19_i_1_Template, 2, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.ticketservice.Ticketlist);
} }
function EngineerDetailsComponent_table_168_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 105);
} }
function EngineerDetailsComponent_table_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Customer Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EngineerDetailsComponent_table_168_tr_16_Template, 25, 18, "tr", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EngineerDetailsComponent_table_168_td_19_Template, 2, 1, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EngineerDetailsComponent_table_168_td_20_Template, 1, 0, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.currentUser.Ticket, "\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.currentUser.Ticket, " Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.currentUser.Engineer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.ticketservice.Ticketlist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.Ticketlist.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.Ticketlist.length > 0);
} }
function EngineerDetailsComponent_div_181_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerDetailsComponent_div_181_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.resetpassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Note: This is ", ctx_r10.service.formData.EngineerName, " login password reset button.");
} }
class EngineerDetailsComponent {
    constructor(titleService, service, logService, ticketservice, router, dialog, loginservice) {
        this.titleService = titleService;
        this.service = service;
        this.logService = logService;
        this.ticketservice = ticketservice;
        this.router = router;
        this.dialog = dialog;
        this.loginservice = loginservice;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    ngOnInit() {
        this.ticketservice.Ticketlist = [];
        const Id = window.location.pathname.split('/').pop();
        if (Id === '00000000-0000-0000-0000-000000000000') {
            this.router.navigate(['/engineers']);
        }
        this.titleService.setTitle(this.currentUser.Engineer + ' Details | Genic Solution');
        this.service.getEngineerById(this.currentUser.Token, Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.service.formData = response.result;
                    this.service.getEngineerTickets(this.currentUser.Token, Id).subscribe(res => {
                        const response = res;
                        this.ticketservice.Ticketlist = [];
                        this.ticketservice.Ticketlist = response.result;
                    }, error => console.log(error));
                }
            }
        }, error => console.log(error));
    }
    OpenZoneInPopup(z) {
        setTimeout(() => {
            this.OpenZonePopup(z);
        }, 100);
    }
    OpenZonePopup(z) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '900px';
        dialogConfig.height = '600px';
        dialogConfig.panelClass = 'geoCustomMatClass';
        dialogConfig.data = {};
        this.dialog.open(_engineer_add_engineer_view_geofencing_Component__WEBPACK_IMPORTED_MODULE_3__["EngineerViewGeofencingComponent"], dialogConfig).afterClosed().subscribe(res => {
        });
    }
    ViewTicketDetails(x) {
        this.ticketservice.formData = Object.assign({}, x);
        this.router.navigate(['/tickets/ticket-view-detail']);
    }
    resetpassword() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'keep it?',
            text: 'Are you sure you want to reset password of ' + this.service.formData.EngineerName + '?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            confirmButtonText: 'Cancel',
            cancelButtonColor: 'green',
            cancelButtonText: 'Continue',
        }).then((result) => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Keep it!',
                    text: 'Action is dismissed',
                    type: 'info',
                    timer: 2000
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                this.service.EngineerPasswordReset(this.service.formData.Id, this.currentUser.Token).subscribe(res => {
                    if (res) {
                        /// logs
                        const des = 'An ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + ', ' + this.currentUser.Engineer + ' Id : ' + this.service.formData.EngineerId +
                            ', is password reset by user : ' + this.currentUser.UserName;
                        const Activity = 'Password reset of ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + ' is successfully ';
                        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Engineer, this.service.formData.Id, 'Modify', des, Activity).subscribe();
                        /// logs
                        const response = res;
                        if (response.Message === 'success') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                title: 'Done!',
                                showConfirmButton: false,
                                text: 'Password is reset successfully.',
                                type: 'success',
                                timer: 2000,
                            });
                            setTimeout(() => {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                    title: 'Done!',
                                    text: 'New password is "Eng@1234"',
                                    type: 'success',
                                });
                            }, 2100);
                        }
                        if (response.Message === 'failure') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                title: 'failure!',
                                text: response.MessageDescription,
                                type: 'warning',
                            });
                        }
                        if (response.Message === 'error') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                title: 'error!',
                                text: response.MessageDescription,
                                type: 'error',
                            });
                        }
                    }
                }, error => console.log(error));
            }
        });
    }
}
EngineerDetailsComponent.ɵfac = function EngineerDetailsComponent_Factory(t) { return new (t || EngineerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_6__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_7__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_8__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"])); };
EngineerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EngineerDetailsComponent, selectors: [["ng-component"]], decls: 182, vars: 29, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/engineers", 1, "kt-subheader__breadcrumbs-link"], [1, "kt-subheader__toolbar"], [1, "kt-subheader__wrapper"], ["onclick", "window.history.back()", 1, "btn", "btn-primary", 2, "margin-right", "3px", "color", "white", "padding", "6px 10px 7px 10px", "cursor", "pointer"], [1, "customer-listing-detail-section"], [1, "col-md-12"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "col-xl-12", "col-lg-12", "no-spacing"], [1, "kt-portlet", "kt-portlet--tabs", "kt-portlet--height-fluid"], [1, "kt-widget11"], [1, "kt-section__content"], ["id", "kt_wizard_v2", "data-ktwizard-state", "step-first", 1, "kt-grid", "kt-wizard-v2", "kt-wizard-v2--white"], ["wizard", ""], [1, "kt-grid__item", "kt-grid__item--fluid", "kt-wizard-v2__wrapper"], ["data-ktwizard-type", "step-content", "data-ktwizard-state", "current", 1, "kt-wizard-v2__content"], [1, "kt-form__section", "kt-form__section--first"], [1, "kt-portlet__body", "tabing_kt_portlet_body"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-line", "nav-tabs-bold", "nav-tabs-line-3x", "nav-tabs-line-brand"], [1, "nav-item"], ["data-toggle", "tab", "href", "#kt_tabs_3_1", 1, "nav-link", "active"], [1, "flaticon-customer"], ["data-toggle", "tab", "href", "#kt_tabs_3_2", 1, "nav-link"], [1, "flaticon2-hospital"], ["data-toggle", "tab", "href", "#kt_tabs_3_3", 1, "nav-link"], [1, "flaticon-home"], ["data-toggle", "tab", "href", "#kt_tabs_3_4", 1, "nav-link"], [1, "flaticon-list"], ["data-toggle", "tab", "href", "#kt_tabs_3_4_1", 1, "nav-link"], [1, "fa", "fa-paint-brush"], ["class", "nav-item", 4, "ngIf"], [1, "tab-content"], ["id", "kt_tabs_3_1", "role", "tabpanel", 1, "tab-pane", "active"], [1, "kt-wizard-v2__form"], [1, "row"], [1, "col-sm-2", "col-md-2", "col-xl-2"], ["width", "150px", 3, "src", 4, "ngIf"], ["class", "upload-image", 4, "ngIf"], [1, "col-sm-6", "col-md-6", "col-xl-6"], [1, "table", "table-bodered", "tbl-cust-dt"], [4, "ngIf"], ["class", "form-text text-muted", 4, "ngIf"], ["id", "kt_tabs_3_2", "role", "tabpanel", 1, "tab-pane"], [1, "col-md-6"], ["id", "kt_tabs_3_3", "role", "tabpanel", 1, "tab-pane"], ["id", "kt_tabs_3_4", "role", "tabpanel", 1, "tab-pane"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-section", "kt-drop-section"], [1, "kt-portlet__body", "customer-listing-datatable"], ["class", "table table-striped- table-bordered table-hover table-checkable", 4, "ngIf"], ["id", "kt_tabs_3_4_1", "role", "tabpanel", 1, "tab-pane"], [1, "table"], ["width", "20%;"], ["width", "80%;"], [2, "width", "300px", "height", "69px"], ["class", "tab-pane", "id", "kt_tabs_3_5", "role", "tabpanel", 4, "ngIf"], ["data-toggle", "tab", "href", "#kt_tabs_3_5", 1, "nav-link"], [1, "flaticon-lock"], ["width", "150px", 3, "src"], [1, "upload-image"], ["width", "150px", 1, "img-thumbnail", 3, "src"], ["class", "kt-badge kt-badge--success kt-badge--inline kt-badge--pill", 4, "ngIf"], ["class", "kt-badge kt-badge--warning kt-badge--inline kt-badge--pill", 4, "ngIf"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "kt-badge--pill"], [1, "kt-badge", "kt-badge--warning", "kt-badge--inline", "kt-badge--pill"], [1, "form-text", "text-muted"], [1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable"], [2, "width", "5%"], [2, "width", "25%"], [2, "width", "30%"], [2, "width", "26%"], [2, "width", "2%"], [2, "width", "10%"], ["class", "quote-list-view-info odd", "role", "row", 4, "ngFor", "ngForAsync", "ngForOf"], ["colspan", "9", "style", "text-align: center;", 4, "ngIf"], ["colspan", "9", 4, "ngIf"], ["role", "row", 1, "quote-list-view-info", "odd"], [1, "btn", "btn-label-primary"], ["href", "javascript:;", 3, "click"], ["class", "recurring-ticket", 4, "ngIf"], [3, "A", "B", "C", "T", "AChange", "BChange", "CChange"], ["class", "ticketstatus statusunallocated", 4, "ngIf"], ["class", "ticketstatus statusrescheduled", 4, "ngIf"], [1, "text-center"], [3, "Status", "OverDueDays", "StatusChange", "OverDueDaysChange"], [3, "TicketTeams", "localPrependUrl", "Reallocate", "Id", "TicketId", "TicketTeamsChange", "localPrependUrlChange", "ReallocateChange", "IdChange", "TicketIdChange"], [1, "recurring-ticket"], [1, "ticketstatus", "statusunallocated"], [1, "ticketstatus", "statusrescheduled"], ["colspan", "9", 2, "text-align", "center"], ["colspan", "9"], ["id", "kt_tabs_3_5", "role", "tabpanel", 1, "tab-pane"], [1, "text-danger"], [1, "clearfix"], [1, "new-request-footer-bottom", "pull-right"], [1, "btn-group"], ["href", "javascript:;", 1, "btn", "btn-warning", 3, "click"]], template: function EngineerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Emergency Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, EngineerDetailsComponent_li_61_Template, 4, 0, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, EngineerDetailsComponent_img_68_Template, 1, 1, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, EngineerDetailsComponent_div_69_Template, 2, 1, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "table", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Phone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, EngineerDetailsComponent_tr_90_Template, 7, 2, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, EngineerDetailsComponent_tr_91_Template, 7, 2, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, EngineerDetailsComponent_tr_92_Template, 7, 3, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Login: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, EngineerDetailsComponent_span_98_Template, 2, 0, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, EngineerDetailsComponent_span_99_Template, 2, 0, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "table", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Contact Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Relation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "table", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Address Street 1: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Address Street 2: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Address Unit No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Postal Code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Country: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, EngineerDetailsComponent_table_168_Template, 21, 6, "table", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "table", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](181, EngineerDetailsComponent_div_181_Template, 15, 1, "div", 70);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Engineer, "s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Engineer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.EngineerName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, " Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket, " Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.EngineerEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.EngineerLogo.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.EngineerLogo.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.formData.EngineerName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.formData.EngineerPhone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.formData.EngineerEmail, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.EngineerType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.CanEngineerCreateTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.CanEngineerCreateTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.LoginAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.formData.LoginAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.EmergencyName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.formData.EmergencyNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.formData.EmergencyRelation, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.formData.AddressStreet1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.formData.AddressStreet2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.formData.AddressUnitNo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.formData.AddressZipCode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service.formData.AddressCountry, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketservice.Ticketlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, " Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.service.formData.Color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.EngineerEdit);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_12__["TicketDateTimeFormatComponent"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_13__["TicketStatusComponent"], _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_14__["TicketTeamListComponent"]], styles: [".nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{background-color:#E7E7E7;color:black;font-size:17px !important;text-transform:uppercase !important;padding:12px 40px;}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black;}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:white !important}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active, .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{background-color:#22366B;color:white}\r\n.tab-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:transparent !important;border:none;}\r\n.tab-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background-color:#dedede;border-bottom:none;margin-bottom:0px;}\r\n.tab-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:0px;font-size:18px;font-weight:600;color:black;}\r\n.kt-portlet__body.create-new-client-portlet-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.kt-portlet__body.create-new-client-portlet-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px !important;font-weight:600;color:black !important;}\r\n#menu1[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{font-size: 14px;height: 50px;}\r\n#menu1[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:15px !important;}\r\n#menu1[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px !important;color:black !important;font-weight:600 !important;}\r\n.creat-new-quote-footer[_ngcontent-%COMP%]{margin:20px 0px;}\r\n.new-quote-main-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:white !important;padding-top:15px;padding-bottom:15px !important;}\r\n.new-requst-filter_form.create-new-client-popup[_ngcontent-%COMP%]{position:sticky;bottom:0;}\r\n.creat-new-quote-footer[_ngcontent-%COMP%]{padding:10px 0px;background-color:white;}\r\n.new-quote-main-section[_ngcontent-%COMP%]   .kt-section__body[_ngcontent-%COMP%]{padding:10px !important;background-color:white;}\r\n.no-padding[_ngcontent-%COMP%]{padding:0px;}\r\n.collapse[_ngcontent-%COMP%]:not(.show){display:block;}\r\n.form-group.creat-properties-form-group[_ngcontent-%COMP%]{width:100%;}\r\nspan.Ac[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {background-color: #2c77f4; padding: 5px 8px; border-radius: 0px; margin-right: 1px;}\r\nspan.Ac[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: white;}\r\n.switcher-customer[_ngcontent-%COMP%] { top:-20px;position: relative; }\r\nspan.Av[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {background-color: #0b8a03; padding: 5px 8px; border-radius: 0px; margin-right: 1px;}\r\nspan.Av[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: white;}\r\nspan.At[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {background-color: #8a033bbf; padding: 5px 8px; border-radius: 0px; margin-right: 1px;}\r\nspan.At[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: white;}\r\nspan.spnUnrigh[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {color: #ff0000a6; font-size: 19px;}\r\nspan.spnrigh[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {color: #0b8a03; font-size: 19px;}\r\n.btlZonelist[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {color: #000000; font-weight: 600;}\r\n.bt-newZone[_ngcontent-%COMP%]{background-color: #2c77f4;color: white !important;padding: 2px 14px;margin-left: 6px;cursor: pointer;}\r\n#EngiViewGeoMapId[_ngcontent-%COMP%] { height: 100%;}\r\n.cl-map-class[_ngcontent-%COMP%]{height: 450px;}\r\n.btnclose-ectc[_ngcontent-%COMP%] {text-align: right;}\r\n.btnclose-ectc[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color: #ec978a; color: red; border: none; padding: 6px 13px; margin-bottom: 4px;}\r\n.geoCustomMatClass[_ngcontent-%COMP%]{padding: 0 !important; margin: 0 !important;}\r\n.mat-dialog-container[_ngcontent-%COMP%]{padding: 0 !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZW5naW5lZXJzL2VuZ2luZWVyLWFkZC9lbmdpbmVlci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOEJBQThCLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxtQ0FBbUMsQ0FBQyxpQkFBaUIsQ0FBQztBQUNuSixnQ0FBZ0MsV0FBVyxDQUFDO0FBQzVDLDhFQUE4RSxzQkFBc0I7QUFDcEcsZ0hBQWdILHdCQUF3QixDQUFDLFdBQVc7QUFDcEosbUJBQW1CLHVDQUF1QyxDQUFDLFdBQVcsQ0FBQztBQUN2RSxnQ0FBZ0Msd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUM7QUFDOUYsNENBQTRDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBQ3pHLDZEQUE2RCxrQkFBa0IsQ0FBQztBQUNoRixtRUFBbUUseUJBQXlCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDO0FBQ3BJLHFCQUFxQixlQUFlLENBQUMsWUFBWSxDQUFDO0FBQ2xELG1CQUFtQiw2QkFBNkIsQ0FBQztBQUNqRCx5QkFBeUIseUJBQXlCLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLENBQUM7QUFDckcsd0JBQXdCLGVBQWUsQ0FBQztBQUN4Qyw4QkFBOEIsaUNBQWlDLENBQUMsZ0JBQWdCLENBQUMsOEJBQThCLENBQUM7QUFDaEgsZ0RBQWdELGVBQWUsQ0FBQyxRQUFRLENBQUM7QUFDekUsd0JBQXdCLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO0FBQ2hFLDBDQUEwQyx1QkFBdUIsQ0FBQyxzQkFBc0IsQ0FBQztBQUN6RixZQUFZLFdBQVcsQ0FBQztBQUN4QixxQkFBcUIsYUFBYSxDQUFDO0FBQ25DLHdDQUF3QyxVQUFVLENBQUM7QUFDbkQsV0FBVyx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztBQUM5RixZQUFZLFlBQVksQ0FBQztBQUN6QixxQkFBcUIsU0FBUyxDQUFDLGtCQUFrQixFQUFFO0FBQ25ELFdBQVcseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7QUFDOUYsWUFBWSxZQUFZLENBQUM7QUFFekIsV0FBVywyQkFBMkIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztBQUNoRyxZQUFZLFlBQVksQ0FBQztBQUN6QixrQkFBa0IsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO0FBQ3BELGdCQUFnQixjQUFjLEVBQUUsZUFBZSxDQUFDO0FBQ2hELG9CQUFvQixjQUFjLEVBQUUsZ0JBQWdCLENBQUM7QUFDckQsWUFBWSx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7QUFDakgsb0JBQW9CLFlBQVksQ0FBQztBQUNqQyxjQUFjLGFBQWEsQ0FBQztBQUM1QixnQkFBZ0IsaUJBQWlCLENBQUM7QUFDbEMsc0JBQXNCLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7QUFDakgsbUJBQW1CLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDO0FBQy9ELHNCQUFzQixxQkFBcUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2VuZ2luZWVycy9lbmdpbmVlci1hZGQvZW5naW5lZXItYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmt7YmFja2dyb3VuZC1jb2xvcjojRTdFN0U3O2NvbG9yOmJsYWNrO2ZvbnQtc2l6ZToxN3B4ICFpbXBvcnRhbnQ7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnQ7cGFkZGluZzoxMnB4IDQwcHg7fVxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluayBpe2NvbG9yOmJsYWNrO31cclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIGksIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIGl7Y29sb3I6d2hpdGUgIWltcG9ydGFudH1cclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluazphY3RpdmUsIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIyMzY2Qjtjb2xvcjp3aGl0ZX1cclxuLnRhYi1jb250ZW50IC5jYXJke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtib3JkZXI6bm9uZTt9XHJcbi50YWItY29udGVudCAuY2FyZCAuY2FyZC1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojZGVkZWRlO2JvcmRlci1ib3R0b206bm9uZTttYXJnaW4tYm90dG9tOjBweDt9XHJcbi50YWItY29udGVudCAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGV7bWFyZ2luLWJvdHRvbTowcHg7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOmJsYWNrO31cclxuLmt0LXBvcnRsZXRfX2JvZHkuY3JlYXRlLW5ldy1jbGllbnQtcG9ydGxldC1ib2R5IC5mb3JtLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5rdC1wb3J0bGV0X19ib2R5LmNyZWF0ZS1uZXctY2xpZW50LXBvcnRsZXQtYm9keSAuZm9ybS1ncm91cCBsYWJlbHtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjayAhaW1wb3J0YW50O31cclxuI21lbnUxIC5mb3JtLWNvbnRyb2x7Zm9udC1zaXplOiAxNHB4O2hlaWdodDogNTBweDt9XHJcbiNtZW51MSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjE1cHggIWltcG9ydGFudDt9XHJcbiNtZW51MSAuZm9ybS1ncm91cCBsYWJlbHtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NjAwICFpbXBvcnRhbnQ7fVxyXG4uY3JlYXQtbmV3LXF1b3RlLWZvb3RlcnttYXJnaW46MjBweCAwcHg7fVxyXG4ubmV3LXF1b3RlLW1haW4tc2VjdGlvbiAuY2FyZHtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlICFpbXBvcnRhbnQ7cGFkZGluZy10b3A6MTVweDtwYWRkaW5nLWJvdHRvbToxNXB4ICFpbXBvcnRhbnQ7fVxyXG4ubmV3LXJlcXVzdC1maWx0ZXJfZm9ybS5jcmVhdGUtbmV3LWNsaWVudC1wb3B1cHtwb3NpdGlvbjpzdGlja3k7Ym90dG9tOjA7fVxyXG4uY3JlYXQtbmV3LXF1b3RlLWZvb3RlcntwYWRkaW5nOjEwcHggMHB4O2JhY2tncm91bmQtY29sb3I6d2hpdGU7fVxyXG4ubmV3LXF1b3RlLW1haW4tc2VjdGlvbiAua3Qtc2VjdGlvbl9fYm9keXtwYWRkaW5nOjEwcHggIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO31cclxuLm5vLXBhZGRpbmd7cGFkZGluZzowcHg7fVxyXG4uY29sbGFwc2U6bm90KC5zaG93KXtkaXNwbGF5OmJsb2NrO31cclxuLmZvcm0tZ3JvdXAuY3JlYXQtcHJvcGVydGllcy1mb3JtLWdyb3Vwe3dpZHRoOjEwMCU7fVxyXG5zcGFuLkFjIGEge2JhY2tncm91bmQtY29sb3I6ICMyYzc3ZjQ7IHBhZGRpbmc6IDVweCA4cHg7IGJvcmRlci1yYWRpdXM6IDBweDsgbWFyZ2luLXJpZ2h0OiAxcHg7fVxyXG5zcGFuLkFjIGEgaXtjb2xvcjogd2hpdGU7fVxyXG4uc3dpdGNoZXItY3VzdG9tZXIgeyB0b3A6LTIwcHg7cG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbnNwYW4uQXYgYSB7YmFja2dyb3VuZC1jb2xvcjogIzBiOGEwMzsgcGFkZGluZzogNXB4IDhweDsgYm9yZGVyLXJhZGl1czogMHB4OyBtYXJnaW4tcmlnaHQ6IDFweDt9XHJcbnNwYW4uQXYgYSBpe2NvbG9yOiB3aGl0ZTt9XHJcblxyXG5zcGFuLkF0IGEge2JhY2tncm91bmQtY29sb3I6ICM4YTAzM2JiZjsgcGFkZGluZzogNXB4IDhweDsgYm9yZGVyLXJhZGl1czogMHB4OyBtYXJnaW4tcmlnaHQ6IDFweDt9XHJcbnNwYW4uQXQgYSBpe2NvbG9yOiB3aGl0ZTt9XHJcbnNwYW4uc3BuVW5yaWdoIGkge2NvbG9yOiAjZmYwMDAwYTY7IGZvbnQtc2l6ZTogMTlweDt9XHJcbnNwYW4uc3BucmlnaCBpIHtjb2xvcjogIzBiOGEwMzsgZm9udC1zaXplOiAxOXB4O31cclxuLmJ0bFpvbmVsaXN0IHRyIHRkIHtjb2xvcjogIzAwMDAwMDsgZm9udC13ZWlnaHQ6IDYwMDt9XHJcbi5idC1uZXdab25le2JhY2tncm91bmQtY29sb3I6ICMyYzc3ZjQ7Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7cGFkZGluZzogMnB4IDE0cHg7bWFyZ2luLWxlZnQ6IDZweDtjdXJzb3I6IHBvaW50ZXI7fVxyXG4jRW5naVZpZXdHZW9NYXBJZCB7IGhlaWdodDogMTAwJTt9XHJcbi5jbC1tYXAtY2xhc3N7aGVpZ2h0OiA0NTBweDt9XHJcbi5idG5jbG9zZS1lY3RjIHt0ZXh0LWFsaWduOiByaWdodDt9XHJcbi5idG5jbG9zZS1lY3RjIGJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5NzhhOyBjb2xvcjogcmVkOyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDZweCAxM3B4OyBtYXJnaW4tYm90dG9tOiA0cHg7fVxyXG4uZ2VvQ3VzdG9tTWF0Q2xhc3N7cGFkZGluZzogMCAhaW1wb3J0YW50OyBtYXJnaW46IDAgIWltcG9ydGFudDt9XHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lcntwYWRkaW5nOiAwICFpbXBvcnRhbnQ7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './engineer-details.component.html',
                styleUrls: ['../engineer-add/engineer-add.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }, { type: src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_6__["EngineerService"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_7__["UserlogService"] }, { type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_8__["TicketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "cxgy":
/*!*****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js ***!
  \*****************************************************************/
/*! exports provided: names */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};


/***/ }),

/***/ "gMo9":
/*!******************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/util.js ***!
  \******************************************************/
/*! exports provided: bound01, clamp01, isOnePointZero, isPercentage, boundAlpha, convertToPercentage, pad2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bound01", function() { return bound01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp01", function() { return clamp01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnePointZero", function() { return isOnePointZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPercentage", function() { return isPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAlpha", function() { return boundAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPercentage", function() { return convertToPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad2", function() { return pad2; });
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var processPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    if (processPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    if (max === 360) {
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
    return typeof n === 'string' && n.includes('.') && parseFloat(n) === 1;
}
function isPercentage(n) {
    return typeof n === 'string' && n.includes('%');
}
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}


/***/ }),

/***/ "jVIm":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/public_api.js ***!
  \************************************************************/
/*! exports provided: TinyColor, tinycolor, names, readability, isReadable, mostReadable, toMsFilter, fromRatio, legacyRandom, inputToRGB, stringInputToObject, isValidCSSUnit, random, bounds, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "SfhT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]; });

/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "cxgy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "names", function() { return _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]; });

/* harmony import */ var _readability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readability */ "Y7UZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["readability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["isReadable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["mostReadable"]; });

/* harmony import */ var _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-ms-filter */ "xDgI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__["toMsFilter"]; });

/* harmony import */ var _from_ratio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from-ratio */ "0eaW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["fromRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["legacyRandom"]; });

/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format-input */ "LQXu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["inputToRGB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["stringInputToObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["isValidCSSUnit"]; });

/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random */ "sP/i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random__WEBPACK_IMPORTED_MODULE_6__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return _random__WEBPACK_IMPORTED_MODULE_6__["bounds"]; });









/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]);


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

/***/ "sP/i":
/*!********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/random.js ***!
  \********************************************************/
/*! exports provided: random, bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return bounds; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "SfhT");

function random(options) {
    if (options === void 0) { options = {}; }
    if (options.count !== undefined && options.count !== null) {
        var totalColors = options.count;
        var colors = [];
        options.count = undefined;
        while (totalColors > colors.length) {
            options.count = null;
            if (options.seed) {
                options.seed += 1;
            }
            colors.push(random(options));
        }
        options.count = totalColors;
        return colors;
    }
    var h = pickHue(options.hue, options.seed);
    var s = pickSaturation(h, options);
    var v = pickBrightness(h, s, options);
    var res = { h: h, s: s, v: v };
    if (options.alpha !== undefined) {
        res.a = options.alpha;
    }
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](res);
}
function pickHue(hue, seed) {
    var hueRange = getHueRange(hue);
    var res = randomWithin(hueRange, seed);
    if (res < 0) {
        res = 360 + res;
    }
    return res;
}
function pickSaturation(hue, options) {
    if (options.hue === 'monochrome') {
        return 0;
    }
    if (options.luminosity === 'random') {
        return randomWithin([0, 100], options.seed);
    }
    var saturationRange = getColorInfo(hue).saturationRange;
    var sMin = saturationRange[0];
    var sMax = saturationRange[1];
    switch (options.luminosity) {
        case 'bright':
            sMin = 55;
            break;
        case 'dark':
            sMin = sMax - 10;
            break;
        case 'light':
            sMax = 55;
            break;
        default:
            break;
    }
    return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S, options) {
    var bMin = getMinimumBrightness(H, S);
    var bMax = 100;
    switch (options.luminosity) {
        case 'dark':
            bMax = bMin + 20;
            break;
        case 'light':
            bMin = (bMax + bMin) / 2;
            break;
        case 'random':
            bMin = 0;
            bMax = 100;
            break;
        default:
            break;
    }
    return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S) {
    var lowerBounds = getColorInfo(H).lowerBounds;
    for (var i = 0; i < lowerBounds.length - 1; i++) {
        var s1 = lowerBounds[i][0];
        var v1 = lowerBounds[i][1];
        var s2 = lowerBounds[i + 1][0];
        var v2 = lowerBounds[i + 1][1];
        if (S >= s1 && S <= s2) {
            var m = (v2 - v1) / (s2 - s1);
            var b = v1 - (m * s1);
            return (m * S) + b;
        }
    }
    return 0;
}
function getHueRange(colorInput) {
    var num = parseInt(colorInput, 10);
    if (!Number.isNaN(num) && num < 360 && num > 0) {
        return [num, num];
    }
    if (typeof colorInput === 'string') {
        var namedColor = bounds.find(function (n) { return n.name === colorInput; });
        if (namedColor) {
            var color = defineColor(namedColor);
            if (color.hueRange) {
                return color.hueRange;
            }
        }
        var parsed = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](colorInput);
        if (parsed.isValid) {
            var hue = parsed.toHsv().h;
            return [hue, hue];
        }
    }
    return [0, 360];
}
function getColorInfo(hue) {
    if (hue >= 334 && hue <= 360) {
        hue -= 360;
    }
    for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
        var bound = bounds_1[_i];
        var color = defineColor(bound);
        if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
            return color;
        }
    }
    throw Error('Color not found');
}
function randomWithin(range, seed) {
    if (seed === undefined) {
        return Math.floor(range[0] + (Math.random() * (range[1] + 1 - range[0])));
    }
    var max = range[1] || 1;
    var min = range[0] || 0;
    seed = ((seed * 9301) + 49297) % 233280;
    var rnd = seed / 233280.0;
    return Math.floor(min + (rnd * (max - min)));
}
function defineColor(bound) {
    var sMin = bound.lowerBounds[0][0];
    var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
    var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
    var bMax = bound.lowerBounds[0][1];
    return {
        name: bound.name,
        hueRange: bound.hueRange,
        lowerBounds: bound.lowerBounds,
        saturationRange: [sMin, sMax],
        brightnessRange: [bMin, bMax],
    };
}
var bounds = [
    {
        name: 'monochrome',
        hueRange: null,
        lowerBounds: [[0, 0], [100, 0]],
    },
    {
        name: 'red',
        hueRange: [-26, 18],
        lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50],
        ],
    },
    {
        name: 'orange',
        hueRange: [19, 46],
        lowerBounds: [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]],
    },
    {
        name: 'yellow',
        hueRange: [47, 62],
        lowerBounds: [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]],
    },
    {
        name: 'green',
        hueRange: [63, 178],
        lowerBounds: [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]],
    },
    {
        name: 'blue',
        hueRange: [179, 257],
        lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35],
        ],
    },
    {
        name: 'purple',
        hueRange: [258, 282],
        lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42],
        ],
    },
    {
        name: 'pink',
        hueRange: [283, 334],
        lowerBounds: [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]],
    },
];


/***/ }),

/***/ "tXVt":
/*!********************************************************************************!*\
  !*** ./src/app/application/engineers/engineer-list/engineer-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: EngineerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerListComponent", function() { return EngineerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_engineer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/engineer.service */ "+MZO");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/genicprofile.service */ "bU6e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/downloads.service */ "iHRC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
















function EngineerListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerListComponent_div_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.OpenAddEngineerDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Engnineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerListComponent_li_77_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerListComponent_li_77_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.FilterEngineers(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerListComponent_li_77_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.FilterEngineers(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Working Engineers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerListComponent_li_77_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.FilterEngineers(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.dropdownbtnavgrev, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("All ", ctx_r1.currentUser.Engineer, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Notworking ", ctx_r1.currentUser.Engineer, "s");
} }
function EngineerListComponent_tr_99_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 75);
} if (rf & 2) {
    const x_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r10.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r12.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EngineerListComponent_tr_99_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 75);
} if (rf & 2) {
    const x_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r10.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r10.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EngineerListComponent_tr_99_li_46_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerListComponent_tr_99_li_46_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const x_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.pupulateengineer(x_r10.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EngineerListComponent_tr_99_li_47_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerListComponent_tr_99_li_47_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const x_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.detailsengineer(x_r10.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "InactiveBackColor": a0 }; };
function EngineerListComponent_tr_99_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EngineerListComponent_tr_99_img_2_Template, 1, 2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EngineerListComponent_tr_99_img_3_Template, 1, 2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerListComponent_tr_99_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const x_r10 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.detailsengineer(x_r10.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Phone :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EngineerListComponent_tr_99_Template_input_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const x_r10 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onEngineerStatusChange($event, x_r10.Id); })("ngModelChange", function EngineerListComponent_tr_99_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const x_r10 = ctx.$implicit; return x_r10.Working = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, EngineerListComponent_tr_99_li_46_Template, 3, 0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EngineerListComponent_tr_99_li_47_Template, 3, 0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, x_r10.Working === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r10.EngineerLogo.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r10.EngineerLogo.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r10.EngineerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r10.IsActive === true ? "online" : "offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", x_r10.IsActive ? "dot red" : "dot yellow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r10.EngineerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r10.EngineerPhone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r10.EngineerEmail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Open ", ctx_r2.currentUser.Ticket, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r10.OpenTicket, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Closed ", ctx_r2.currentUser.Ticket, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r10.ClosedTicket, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Over Due ", ctx_r2.currentUser.Ticket, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r10.OverDueTicket, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "example_", i_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r10.Working);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "example_", i_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentUser.Permissions.EngineerEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentUser.Permissions.EngineerView);
} }
function EngineerListComponent_th_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Record not found ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EngineerListComponent {
    constructor(titleService, service, loginservice, genicprofileservice, router, downloadService) {
        this.titleService = titleService;
        this.service = service;
        this.loginservice = loginservice;
        this.genicprofileservice = genicprofileservice;
        this.router = router;
        this.downloadService = downloadService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isShowAddEngineerButton = false;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.tempEngineerList = [];
        this.tempEngineerList2 = [];
        this.genicprofileservice.TicketFilter.IsReady = false;
        this.genicprofileservice.TicketFilter.IsReadyQuote = false;
        this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
        this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [5, 10, 25, 50, 75, 100] };
        this.dropdownbtnavgrev = 'All ' + this.currentUser.Engineer + 's';
        this.TotalEngineerCount = 0;
        this.WorkingEngineerCount = 0;
        this.NotworkingEngineerCount = 0;
    }
    ngOnInit() {
        this.titleService.setTitle(this.currentUser.Engineer + 's | Genic Solution');
        this.load();
    }
    load() {
        if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            }).catch(err => console.error(err));
        }
        this.service.refrestEngineerTableList(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                this.tempEngineerList = response.result;
                this.tempEngineerList2 = response.result;
                this.TotalEngineerCount = this.tempEngineerList.length;
                this.WorkingEngineerCount = this.tempEngineerList.filter(x => x.Working === true).length;
                this.NotworkingEngineerCount = this.tempEngineerList.filter(x => x.Working === false).length;
                this.dtTrigger.next();
            }
        }, error => console.log(error));
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    OpenAddEngineerDialog() {
        this.service.SetAsDefaultValues();
        this.router.navigate(['/engineers/engineer-add/']);
    }
    pupulateengineer(x) {
        this.router.navigate(['/engineers/engineer-edit/' + x]);
    }
    FilterEngineers(value) {
        this.tempEngineerList2 = [];
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.destroy();
        }).catch(err => console.error(err));
        switch (value) {
            case 3:
                this.tempEngineerList2 = this.tempEngineerList.filter(x => x.Working === false);
                this.dropdownbtnavgrev = 'Notworking ' + this.currentUser.Engineer + 's';
                break;
            case 2:
                this.tempEngineerList2 = this.tempEngineerList.filter(x => x.Working === true);
                this.dropdownbtnavgrev = 'Working ' + this.currentUser.Engineer + 's';
                break;
            default:
                this.tempEngineerList2 = this.tempEngineerList;
                this.dropdownbtnavgrev = 'All ' + this.currentUser.Engineer + 's';
        }
        this.dtTrigger.next();
    }
    detailsengineer(x) {
        this.router.navigate(['/engineers/engineer-details/' + x]);
    }
    onEngineerStatusChange(e, id) {
        if (e.target.checked === true) {
            this.service.putEngineerWorkingOrNot(this.currentUser.Token, id).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Done!',
                            text: 'Working status is change.',
                            type: 'success',
                            timer: 2000
                        });
                        this.load();
                    }
                    if (response.Message === 'failure') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'warning!',
                            text: response.MessageDescription,
                            type: 'warning',
                            timer: 5000
                        });
                        this.load();
                    }
                }
            }, error => console.log(error));
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Inactive ' + this.currentUser.Engineer + '?',
                text: 'Are you sure want to mark not working?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Cancel',
                cancelButtonText: 'Yes, Mark!',
            }).then((result) => {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'keep it!',
                        text: 'Action is skip by you.',
                        type: 'info',
                        timer: 2000
                    });
                    this.load();
                }
                else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'Aru you sure?',
                        text: 'All ' + this.currentUser.Ticket.toLowerCase() + 's will be unassigned from this ' + this.currentUser.Engineer.toLowerCase() + '?',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Cancel!',
                        cancelButtonText: 'Yes, change it!',
                    }).then((result2) => {
                        if (result2.value) {
                            this.load();
                        }
                        else if (result2.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                            this.service.putEngineerWorkingOrNot(this.currentUser.Token, id).subscribe(res => {
                                if (res) {
                                    const response = res;
                                    if (response.Message === 'success') {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                            title: 'Done!',
                                            text: 'Working status is change.',
                                            type: 'success',
                                            timer: 2000
                                        });
                                        this.load();
                                    }
                                    if (response.Message === 'failure') {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                                            title: 'warning!',
                                            text: response.MessageDescription,
                                            type: 'warning',
                                            timer: 5000
                                        });
                                        this.load();
                                    }
                                }
                            }, error => console.log(error));
                        }
                    });
                }
            });
        }
    }
    exportAsXLSX() {
        this.downloadService.downloadFromServer('engineer', this.currentUser.Token).then(blob => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, this.currentUser.Engineer + '_' + new Date().getTime() + '.xlsx');
        });
    }
}
EngineerListComponent.ɵfac = function EngineerListComponent_Factory(t) { return new (t || EngineerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_engineer_service__WEBPACK_IMPORTED_MODULE_7__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_9__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_downloads_service__WEBPACK_IMPORTED_MODULE_11__["DownloadService"])); };
EngineerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EngineerListComponent, selectors: [["ng-component"]], viewQuery: function EngineerListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 103, vars: 20, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], ["class", "kt-subheader__wrapper", 4, "ngIf"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__stats"], [1, "row", "mrg-top-10"], [1, "col-lg-4"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--brand", "kt-iconbox--animate-slower"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Shape", "points", "0 0 24 0 24 24 0 24"], ["d", "M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z", "id", "Combined-Shape", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], ["d", "M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z", "id", "Combined-Shape", "fill", "#000000", "fill-rule", "nonzero"], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], [1, "kt-link"], [1, "kt-iconbox__content"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--success", "kt-iconbox--animate-slow"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--warning", "kt-iconbox--animate-fast"], [1, "kt-drop-section"], [1, "row"], [1, "box-1", "expo", 2, "margin", "0 2px 4px 10px"], [1, "kt-section", "kt-drop-section"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "scFilter"], [4, "ngIf"], [1, "btnexport1"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], ["width", "10%"], ["width", "27%"], ["width", "20%"], ["width", "5%"], ["width", "8%"], ["class", "customer-list-view-info", 3, "ngClass", 4, "ngFor", "ngForOf"], ["colspan", "8", "style", "text-align: center;", 4, "ngIf"], [1, "kt-subheader__wrapper"], ["href", "javascript:;", 1, "btn", "btn-brand", 2, "background-color", "#ff8533", "border-color", "#ff8533", 3, "click"], [1, "fa", "fa-plus"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu", 2, "text-align", "left", "padding", "0"], [2, "width", "100%"], ["href", "javascript:;", 3, "click"], [1, "customer-list-view-info", 3, "ngClass"], ["width", "60px", "class", "img-thumbnail", "alt", "pic", 3, "title", "src", 4, "ngIf"], [1, "btn-group"], [1, "btn", "btn-label-primary", 2, "width", "110px !important"], [3, "ngClass", "title"], [1, "custom-switch", "custom-switch-label-yesno", "pl-0"], ["name", "x.Working", "type", "checkbox", 1, "custom-switch-input", "ng-valid", "ng-dirty", "ng-touched", 3, "id", "ngModel", "change", "ngModelChange"], ["x.Working", "ngModel"], [1, "custom-switch-btn", 3, "for"], [1, "padd-top-0"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "border", "#1dc9b7"], [1, "dropdown-menu"], ["width", "60px", "alt", "pic", 1, "img-thumbnail", 3, "title", "src"], ["colspan", "8", 2, "text-align", "center"]], template: function EngineerListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EngineerListComponent_div_13_Template, 4, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "polygon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "polygon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "polygon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, EngineerListComponent_li_77_Template, 15, 3, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineerListComponent_Template_a_click_80_listener() { return ctx.exportAsXLSX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Export to Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "table", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, EngineerListComponent_tr_99_Template, 48, 22, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, EngineerListComponent_th_102_Template, 3, 0, "th", 53);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Engineer, "s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.EngineerCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total ", ctx.currentUser.Engineer, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.TotalEngineerCount, " Total ", ctx.currentUser.Engineer, "s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Working ", ctx.currentUser.Engineer, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.WorkingEngineerCount, " Working ", ctx.currentUser.Engineer, "s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Not working ", ctx.currentUser.Engineer, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.NotworkingEngineerCount, " Not working ", ctx.currentUser.Engineer, "s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Engineer, " List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.NotworkingEngineerCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, "\u00A0Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, " Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Ticket, "'s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tempEngineerList2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tempEngineerList2.length === 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './engineer-list.component.html'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }, { type: _services_engineer_service__WEBPACK_IMPORTED_MODULE_7__["EngineerService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }, { type: _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_9__["GenicProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _services_downloads_service__WEBPACK_IMPORTED_MODULE_11__["DownloadService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "xDgI":
/*!**************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/to-ms-filter.js ***!
  \**************************************************************/
/*! exports provided: toMsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return toMsFilter; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "577q");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "SfhT");


function toMsFilter(firstColor, secondColor) {
    var color = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](firstColor);
    var hex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(color.r, color.g, color.b, color.a);
    var secondHex8String = hex8String;
    var gradientType = color.gradientType ? 'GradientType = 1, ' : '';
    if (secondColor) {
        var s = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](secondColor);
        secondHex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(s.r, s.g, s.b, s.a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
}


/***/ })

}]);
//# sourceMappingURL=application-engineers-engineers-module-es2015.js.map