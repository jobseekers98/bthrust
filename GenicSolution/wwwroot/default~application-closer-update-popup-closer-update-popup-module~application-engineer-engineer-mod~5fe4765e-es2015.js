(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-closer-update-popup-closer-update-popup-module~application-engineer-engineer-mod~5fe4765e"],{

/***/ "ko/b":
/*!**********************************************************************************!*\
  !*** ./src/app/application/closer-update-popup/closer-update-popup.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CloserUpdatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloserUpdatePopupComponent", function() { return CloserUpdatePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ngb-date-to-string-adapter */ "x8Rg");
/* harmony import */ var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ngb-time-to-string-adapter */ "dRK5");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/DocumentUpload.service */ "nXz1");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var src_app_services_closer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/closer.service */ "Xnxn");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/engineer.service */ "+MZO");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var src_app_services_audio_recording_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/audio-recording.service */ "vaZA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.component */ "xJsc");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-signaturepad */ "HnZm");























const _c0 = ["SignaturePad1"];
const _c1 = ["SignaturePad2"];
function CloserUpdatePopupComponent_div_20_tr_12_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloserUpdatePopupComponent_div_20_tr_12_div_16_div_1_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const au_r20 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r22.ClearTempCloaseAudio(au_r20.AttachmentAudioId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const au_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", au_r20.AudioAttachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", au_r20.AttachmentAudioName);
} }
function CloserUpdatePopupComponent_div_20_tr_12_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CloserUpdatePopupComponent_div_20_tr_12_div_16_div_1_Template, 6, 2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", a_r13.CloserAttachmentAduioList);
} }
function CloserUpdatePopupComponent_div_20_tr_12_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.recordedTime);
} }
function CloserUpdatePopupComponent_div_20_tr_12_a_22_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloserUpdatePopupComponent_div_20_tr_12_a_22_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const a_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.startRecording(a_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CloserUpdatePopupComponent_div_20_tr_12_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloserUpdatePopupComponent_div_20_tr_12_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const a_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.stopRecording(a_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CloserUpdatePopupComponent_div_20_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "generic-ticket-icon-attachment", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("NameChange", function CloserUpdatePopupComponent_div_20_tr_12_Template_generic_ticket_icon_attachment_NameChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const a_r13 = ctx.$implicit; return a_r13.AttachmentExtenstion = $event; })("PathChange", function CloserUpdatePopupComponent_div_20_tr_12_Template_generic_ticket_icon_attachment_PathChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const a_r13 = ctx.$implicit; return a_r13.AttachmentFile = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloserUpdatePopupComponent_div_20_tr_12_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const i_r14 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.onclickcloser("before", i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CloserUpdatePopupComponent_div_20_tr_12_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const a_r13 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.picked($event, "closerattachment", a_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CloserUpdatePopupComponent_div_20_tr_12_Template_textarea_blur_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const a_r13 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.UpdateCloserAttachmentRemark($event, a_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CloserUpdatePopupComponent_div_20_tr_12_div_16_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CloserUpdatePopupComponent_div_20_tr_12_div_20_Template, 7, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CloserUpdatePopupComponent_div_20_tr_12_a_22_Template, 2, 0, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CloserUpdatePopupComponent_div_20_tr_12_a_23_Template, 2, 0, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloserUpdatePopupComponent_div_20_tr_12_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const a_r13 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.removeAttachment(a_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Name", a_r13.AttachmentExtenstion)("Path", a_r13.AttachmentFile)("Status", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "id_", i_r14, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r13.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r13.CloserAttachmentAduioList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isRecording && ctx_r9.recoudngId === a_r13.CAID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.isRecording);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isRecording && ctx_r9.recoudngId === a_r13.CAID);
} }
function CloserUpdatePopupComponent_div_20_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloserUpdatePopupComponent_div_20_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.addCloserAttachment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CloserUpdatePopupComponent_div_20_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r11.localPrependUrl, "/assets/svg/spinner.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CloserUpdatePopupComponent_div_20_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r12.localPrependUrl, "/assets/svg/spinner.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CloserUpdatePopupComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Audio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CloserUpdatePopupComponent_div_20_tr_12_Template, 27, 9, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CloserUpdatePopupComponent_div_20_a_16_Template, 2, 0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CloserUpdatePopupComponent_div_20_div_17_Template, 2, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CloserUpdatePopupComponent_div_20_div_18_Template, 2, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.closerService.CloserAttachmentList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.CloserAttachmentSpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.CloserAttachmentSpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loader);
} }
function CloserUpdatePopupComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customer Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "signature-pad", 89, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloserUpdatePopupComponent_div_50_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.cleareCustomerCloserSignature(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Clear signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.configPad);
} }
function CloserUpdatePopupComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "signature-pad", 89, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloserUpdatePopupComponent_div_58_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.cleareEngineerSignature(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Clear signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currentUser.Engineer, " Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r4.configPad);
} }
function CloserUpdatePopupComponent_button_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CloserUpdatePopupComponent_button_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 97);
} }
function CloserUpdatePopupComponent_button_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CloserUpdatePopupComponent_button_77_div_1_Template, 1, 0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.loader);
} }
class CloserUpdatePopupComponent {
    constructor(titleService, dialogRef, docservice, ticketService, closerService, logService, toastr, sanitizer, router, genicProfile, loginservice, engineerservice, notifyService, audioRecordingService) {
        this.titleService = titleService;
        this.dialogRef = dialogRef;
        this.docservice = docservice;
        this.ticketService = ticketService;
        this.closerService = closerService;
        this.logService = logService;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.router = router;
        this.genicProfile = genicProfile;
        this.loginservice = loginservice;
        this.engineerservice = engineerservice;
        this.notifyService = notifyService;
        this.audioRecordingService = audioRecordingService;
        this.configPad = { ' minWidth': 2, pecColor: 'rgb(66,133,244)', backgroundcolor: 'rgb(255,255,255)', canvasWidth: 360, canvasHeight: 200 };
        this.attachmentLocalURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].NoImagePng;
        this.attachmentLocalURL2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].NoImagePng;
        this.isRecording = false;
        this.recoudngId = 0;
        this.blobToFile = (theBlob, fileName) => {
            var b = theBlob;
            b.lastModifiedDate = new Date();
            b.name = fileName;
            return theBlob;
        };
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.CloserAttachmentSpinner = false;
        this.customersignatureshow = false;
        this.engineersignatureshow = false;
        this.audioRecordingService.recordingFailed().subscribe(() => {
            this.isRecording = false;
        });
        this.audioRecordingService.getRecordedTime().subscribe((time) => {
            this.recordedTime = time;
        });
        this.audioRecordingService.getRecordedBlob().subscribe((data) => {
            this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
            let base64data;
            // base64data = '';
            var reader = new FileReader();
            reader.readAsDataURL(data.blob);
            // tslint:disable-next-line: only-arrow-functions
            reader.onloadend = function () {
                base64data = reader.result;
            };
            setTimeout(() => {
                this.closerService.CloserAttachmentAduioData.AudioAttachment = base64data.split(',')[1];
                this.closerService.CloserAttachmentAduioData.AudiotSize = data.blob.size;
            }, 500);
        });
    }
    ngOnInit() {
        if (!this.currentUser.Permissions.CloserEdit) {
            this.toastr.warning('You have not permission to overwrite closer details');
            this.dialogRef.close();
        }
        this.getTicketCloserAttachmentList();
        this.titleService.setTitle('Closer Update | Genic Solution');
    }
    getTicketCloserAttachmentList() {
        this.closerService.getTicketCloserAttachmentList(this.currentUser.Token, this.closerService.CloserDetailsData.CloserID).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.closerService.CloserAttachmentList = [];
                    this.closerService.CloserAttachmentList = response.result;
                }
            }
        }, error => console.log(error));
    }
    onSubmit() {
        if (this.closerService.CloserDetailsData.Remarks === '') {
            this.toastr.warning('', 'Please enter remarks and try again.');
            return false;
        }
        let CustBase64 = '';
        if (this.customersignatureshow) {
            CustBase64 = this.CustomerCloserSingnaturePad.toDataURL('image/png');
        }
        let EngBase64 = '';
        if (this.engineersignatureshow) {
            EngBase64 = this.EnginnerSingnaturePad.toDataURL('image/png');
        }
        this.closerService.CloserDetailsData.EngineerSignature = EngBase64;
        this.closerService.CloserDetailsData.CustomerSignature = CustBase64;
        this.closerService.CloserDetailsData.WithCustomerSignature = this.customersignatureshow;
        this.closerService.CloserDetailsData.IsTested = this.engineersignatureshow;
        this.loader = true;
        this.closerService.OverWriteCloserDetails(this.currentUser.Token).subscribe(res => {
            const response = res;
            if (response.Message === 'success') {
                this.dialogRef.close();
                this.loader = false;
                this.toastr.success('success', response.MessageDescription);
                const des = 'Ticket No : '
                    + this.ticketService.formData.TicketId + ', has been Modify by : ' + this.currentUser.UserName +
                    ', of Customer : ' + this.ticketService.formData.CustomerName + ', where Closer remarks : '
                    + this.closerService.CloserDetailsData.Remarks;
                const Activity5 = 'Ticket No : ' + this.ticketService.formData.TicketId +
                    ', has been Overwite on dated : ' + new Date();
                this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Ticket', this.ticketService.formData.Id, 'Modify', des, Activity5).subscribe();
                this.cleareEngineerSignature();
                this.cleareCustomerCloserSignature();
                this.closerService.SetDefaultCloserDetailsData();
                this.closerService.CloserAttachmentList = [];
                this.router.navigate(['/engineer/engineer-tickets']);
            }
            if (response.Message === 'failure') {
                this.toastr.warning('warning', response.MessageDescription);
                this.loader = false;
            }
        });
    }
    removeAttachment(x) {
        this.closerService.removeCloserAttachment(this.currentUser.Token, x.CAID, x.CloserID).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success(response.MessageDescription);
                    this.getTicketCloserAttachmentList();
                }
                if (response.Message === 'failure') {
                    this.CloserAttachmentSpinner = false;
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    UpdateCloserAttachmentRemark(event, x) {
        this.closerService.CloserAttachmentData.CAID = x.CAID;
        this.closerService.CloserAttachmentData.CloserID = x.CloserID;
        this.closerService.CloserAttachmentData.Remarks = event.target.value;
        this.CloserAttachmentSpinner = true;
        this.closerService.PutCloserDetails(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.CloserAttachmentSpinner = false;
                    this.getTicketCloserAttachmentList();
                }
            }
        }, error => console.log(error));
    }
    onclickcloser(t, id) {
        if (t === 'before') {
            document.getElementById('id_' + id).click();
        }
        if (t === 'after') {
            document.getElementById('ida_' + id).click();
        }
    }
    picked(event, m, x) {
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
            let remark = '';
            let type = m;
            this.docservice.uploadDocument(t, type, x.CloserID, x.CAID.toString(), remark, file).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.getTicketCloserAttachmentList();
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
    startRecording(x) {
        this.closerService.SetDefaultCloserAudio();
        if (!this.isRecording) {
            this.recoudngId = x.CAID;
            this.isRecording = true;
            this.audioRecordingService.startRecording();
        }
    }
    stopRecording(x) {
        if (this.isRecording) {
            this.audioRecordingService.stopRecording();
            this.isRecording = false;
            this.loader = true;
            this.closerService.CloserAttachmentAduioData.CAID = x.CAID;
            this.closerService.CloserAttachmentAduioData.CloserID = x.CloserID;
            setTimeout(() => {
                this.closerService.postCloserAttachmentAudioData(this.currentUser.Token).subscribe(res => {
                    if (res) {
                        const response = res;
                        if (response.Message === 'success') {
                            this.toastr.info(response.MessageDescription);
                            this.loader = false;
                            this.recoudngId = 0;
                            this.getTicketCloserAttachmentList();
                        }
                        if (response.Message === 'failure') {
                            this.toastr.warning('warning', response.MessageDescription);
                            this.loader = false;
                        }
                    }
                }, error => console.log(error));
            }, 1000);
        }
    }
    ClearTempCloaseAudio(id) {
        this.closerService.removeAudioAttachment(this.currentUser.Token, id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.info(response.MessageDescription);
                    this.loader = false;
                    this.recoudngId = 0;
                    this.getTicketCloserAttachmentList();
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                    this.loader = false;
                }
            }
        }, error => console.log(error));
        //this.closerService.CloserAttachmentData.CloserAttachmentAduioList.splice(index);
        //this.blobUrl = null;
    }
    addCloserAttachment() {
        this.closerService.CloserAttachmentData.CAID = 0;
        this.closerService.CloserAttachmentData.CloserID = this.closerService.CloserDetailsData.CloserID;
        this.CloserAttachmentSpinner = true;
        this.closerService.PostCloserDetails(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success(response.MessageDescription);
                    this.CloserAttachmentSpinner = false;
                    this.closerService.CloserAttachmentData.CloserAttachmentAduioList = [];
                    this.closerService.SetDefaultCloserAudio();
                    this.closerService.CloserAttachmentData.Remarks = '';
                    this.closerService.CloserAttachmentData.CAID = 0;
                    this.closerService.CloserAttachmentData.AttachmentFile = null;
                    this.closerService.CloserAttachmentData.AttachmentExtenstion = null;
                    this.closerService.CloserAttachmentData.AttachmentSize = 0;
                    this.closerService.CloserAttachmentData.AttachmentFileAfter = null;
                    this.closerService.CloserAttachmentData.AttachmentExtenstionAfter = null;
                    this.closerService.CloserAttachmentData.AttachmentSizeAfter = 0;
                    this.getTicketCloserAttachmentList();
                }
                if (response.Message === 'failure') {
                    this.CloserAttachmentSpinner = false;
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    // ----------- Audio section Start -----------------------------------
    // --- remove saved audio against Closer attchment
    removeSavedCloserAudio(Caid, AttachmentAudioId) {
        this.closerService.removeAudioAttachment(Caid, AttachmentAudioId);
        setTimeout(() => {
            this.getTicketCloserAttachmentList();
        }, 500);
    }
    // ----------- Audio section End -----------------------------------
    // cleare Closer signature-pad
    cleareEngineerSignature() {
        this.EnginnerSingnaturePad.clear();
    }
    cleareCustomerCloserSignature() {
        this.CustomerCloserSingnaturePad.clear();
    }
    oncheckedSignature(s) {
        if (s === 'c') {
            let cust_sign = document.getElementById("cust_sign");
            this.customersignatureshow = Boolean(cust_sign.checked);
        }
        if (s === 'e') {
            let eng_sign = document.getElementById("eng_sign");
            this.engineersignatureshow = Boolean(eng_sign.checked);
        }
    }
    close() {
        this.dialogRef.close();
    }
}
CloserUpdatePopupComponent.ɵfac = function CloserUpdatePopupComponent_Factory(t) { return new (t || CloserUpdatePopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_7__["DocumentUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_8__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_closer_service__WEBPACK_IMPORTED_MODULE_9__["CloserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_10__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_15__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_audio_recording_service__WEBPACK_IMPORTED_MODULE_17__["AudioRecordingService"])); };
CloserUpdatePopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloserUpdatePopupComponent, selectors: [["ng-component"]], viewQuery: function CloserUpdatePopupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.EnginnerSingnaturePad = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.CustomerCloserSingnaturePad = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"] }
        ])], decls: 78, vars: 15, consts: [[1, "dispaly-4"], ["mat-dialog-close", "", 1, "btn", "btn-outline-danger", "pull-right", 3, "click"], ["autocomplete", "off", 3, "submit"], ["form", "ngForm"], [1, "kt-portlet__body", "closeformbody"], [1, "kt-section", "ktrSection"], [1, "kt-section__content"], [1, "form-row"], [1, "form-group", "col-md-12"], [1, "col-md-12"], [1, "row"], [1, "col-md-12", "AttToBeAppend"], [1, "image-header", 2, "margin", "-14px -8px"], [1, "alert", "alert-success", 2, "color", "#2c77f4", "background-color", "#2c77f457", "border-color", "#2c77f457"], ["class", "col-md-12 attachmentlistSection", 4, "ngIf"], [1, "col-md-12", "serviceby-section"], [1, "closer-header-t"], [1, "alert", "alert-success"], [1, "closerbody-sec"], [1, "col-sm-0", "col-md-1", "col-lg-1", "col-xl-1"], [1, "col-sm-6", "col-md-5", "col-lg-5", "col-xl-5", 2, "border", "1px solid #2827331c"], [2, "width", "200px", 3, "title", "src"], [1, "col-sm-6", "col-md-5", "col-lg-5", "col-xl-5"], [1, "row", "forn-group", 2, "display", "none"], [1, "col"], ["type", "text", "name", "tempNameOfSignatory", "placeholder", "Customer Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["NameOfSignatory", "ngModel"], [1, "row", "forn-group"], [1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--brand"], ["type", "checkbox", "id", "cust_sign", 1, "dynamic-value-reader", 3, "change"], ["class", "row forn-group", 4, "ngIf"], [1, "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6"], ["type", "checkbox", "id", "eng_sign", 1, "dynamic-value-reader", 3, "change"], ["type", "hidden"], ["name", "RamarksOnClose", "placeholder", "Remarks", "rows", "3", "required", "", 1, "form-control", "requst-for-jobs", 3, "ngModel", "ngModelChange"], ["RamarksOnClose", "ngModel"], ["type", "hidden", "name", "Status", 3, "ngModel", "ngModelChange"], ["Status", "ngModel"], [1, "col", "bottom-btn"], ["mat-dialog-close", "", 1, "btn", "btn-warning", "btnCloseCloserForm"], ["type", "submit", "class", "btn btn-primary", 4, "ngIf"], ["disabled", "", "class", "btn btn-primary", 4, "ngIf"], [1, "col-md-12", "attachmentlistSection"], [1, "tblTicketServiceform", "table", "table-bordered", "service-form-table-border", "service-form-table-border", "htBorder"], ["width", "20%"], ["width", "45%"], ["width", "30%"], ["width", "5%"], [4, "ngFor", "ngForAsync", "ngForOf"], ["colSpan", "3"], [2, "text-align", "center"], ["href", "javascript:void(0);", "style", "font-size: 24px;", 3, "click", 4, "ngIf"], ["class", "spinnerSection", "style", "width: 100px;", 4, "ngIf"], [1, "col-md-3", "customer-logo-container"], [3, "Name", "Path", "Status", "NameChange", "PathChange"], [1, "customer-logo-container-overlay"], ["href", "javascript:;"], [1, "fa", "fa-upload", 3, "click"], ["type", "file", 1, "custom-file-input-0", 3, "id", "change"], ["type", "text", "placeholder", "Comment", "rows", "4", 1, "form-control", 3, "value", "blur"], ["class", "Closer-audio-section", 4, "ngIf"], [1, "col-lg-7"], [1, "col-lg-4"], ["class", "audio-timmer", 4, "ngIf"], [1, "col-lg-1"], ["class", "audio-button", "title", "Start recording", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "audio-button", "title", "Stop", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", 3, "click"], [1, "fa", "fa-trash", "text-danger"], [1, "Closer-audio-section"], ["class", "audio-list", 4, "ngFor", "ngForOf"], [1, "audio-list"], ["controls", ""], ["type", "audio/webm", 3, "src", "title"], [1, "audio-remove"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-times"], [1, "audio-timmer"], ["aria-hidden", "true", 1, "fa", "fa-circle"], ["title", "Start recording", "href", "javascript:void(0)", 1, "audio-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-microphone"], ["title", "Stop", "href", "javascript:void(0)", 1, "audio-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-stop-circle", 2, "color", "red"], ["href", "javascript:void(0);", 2, "font-size", "24px", 3, "click"], [1, "flaticon2-add", "text-success"], [1, "spinnerSection", 2, "width", "100px"], ["alt", "loader", 3, "src"], ["id", "CloseSignarePad", 1, "m-signature-pad", "CloseSignarePad"], [1, "m-signature-pad-body"], [3, "options"], ["SignaturePad2", ""], [1, "btnRemoveSection", 2, "float", "right", 3, "click"], [1, ""], ["SignaturePad1", ""], ["type", "submit", 1, "btn", "btn-primary"], ["disabled", "", 1, "btn", "btn-primary"], ["class", "spinner-border text-warning", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border", "text-warning"]], template: function CloserUpdatePopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Overwrite Closer Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloserUpdatePopupComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CloserUpdatePopupComponent_Template_form_submit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CloserUpdatePopupComponent_div_20_Template, 19, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Closer Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CloserUpdatePopupComponent_Template_input_ngModelChange_42_listener($event) { return ctx.closerService.CloserDetailsData.NameOfSignatory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CloserUpdatePopupComponent_Template_input_change_47_listener() { return ctx.oncheckedSignature("c"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Overwrite Customer Signature ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CloserUpdatePopupComponent_div_50_Template, 10, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CloserUpdatePopupComponent_Template_input_change_55_listener() { return ctx.oncheckedSignature("e"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, CloserUpdatePopupComponent_div_58_Template, 10, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "textarea", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CloserUpdatePopupComponent_Template_textarea_ngModelChange_66_listener($event) { return ctx.closerService.CloserDetailsData.Remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CloserUpdatePopupComponent_Template_input_ngModelChange_68_listener($event) { return ctx.closerService.CloserDetailsData.TicketFlag = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, CloserUpdatePopupComponent_button_76_Template, 2, 0, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, CloserUpdatePopupComponent_button_77_Template, 3, 1, "button", 41);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Ticket #", ctx.closerService.CloserDetailsData.TicketNo, " & Closer #", ctx.closerService.CloserDetailsData.CloserPrefix, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.closerService.CloserAttachmentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.closerService.CloserDetailsData.NameOfSignatory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.closerService.CloserDetailsData.CustomerSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.closerService.CloserDetailsData.EnginnerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.closerService.CloserDetailsData.EngineerSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.closerService.CloserDetailsData.NameOfSignatory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customersignatureshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Overwrite ", ctx.currentUser.Engineer, " Signature ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.engineersignatureshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.closerService.CloserDetailsData.Remarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.closerService.CloserDetailsData.TicketFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_20__["TicketIconAttachmentComponent"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_21__["SignaturePad"]], styles: [".ticket-open-sec[_ngcontent-%COMP%]{display: inline-block;padding:8px 22px;color:white;background-color:#4CAF50;border-radius:30px;}\r\n.ticket-open-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:white;pointer-events:none;font-size:14px;}\r\n.ticket-open-sec[_ngcontent-%COMP%]{margin:0 5px;}\r\n.CloserDtBody[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n.btncustoInfo[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n  }\r\n\r\n.serviceFormHeading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n    font-weight: 600;\r\n    color: #48465b;\r\n  }\r\n.singleBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: red;\r\n  }\r\n.singleBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 172px;\r\n    box-shadow: 5px 8px 3px -2px #2d77e7ba;\r\n  }\r\n.ticketEngList[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n.ticketEngList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      list-style: none;\r\n      display: inline-block;\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n.custInfo[_ngcontent-%COMP%] {\r\n    padding: 0 16px !important;\r\n  }\r\n.ktrSection[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n.htBorder[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 1px solid #22366b;\r\n  }\r\n.cmtImage[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n.support-service-incident-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }\r\n.support-service-incident-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\r\n      content: '';\r\n      width: 26%;\r\n      display: block;\r\n      border-bottom: 3px solid #fa7e2ea3;\r\n      margin-top: 7px;\r\n      margin-left: 3px;\r\n      margin-bottom: 12px;\r\n    }\r\n.cmtImage[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    width: 12%;\r\n    display: block;\r\n    border-bottom: 3px solid #fa7e2ea3;\r\n    margin-top: 7px;\r\n    margin-left: 3px;\r\n    margin-bottom: 12px;\r\n  }\r\n.closeformbody[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n.CloserAttachmentSection[_ngcontent-%COMP%] {\r\n    border: 1px solid #28273324;\r\n    padding: 7px;\r\n    margin-bottom: 12px;\r\n    margin-top: 8px;\r\n    \r\n  }\r\n.ticketStatusOpen[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 7px 27px;\r\n    border-radius: 20px;\r\n  }\r\n.ticketStatusClosed[_ngcontent-%COMP%] {\r\n    background-color: #ff9800bd;\r\n    color: #fff;\r\n    padding: 7px 27px;\r\n    border-radius: 20px;\r\n  }\r\n#frmCloserForm[_ngcontent-%COMP%] {\r\n    margin: 33px 0 0 0;\r\n  }\r\n.attchementSection[_ngcontent-%COMP%]{\r\n    widows: 100% !important;\r\n  }\r\n.btnTicketClock[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    margin: 0 0 0 4px;\r\n  }\r\n.ticket-Close-sec[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n    padding: 8px 22px;\r\n    color: white;\r\n    background-color: #ff8533;\r\n    border-radius: 30px;\r\n}\r\n.ticket-Close-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n#EngiProductSection[_ngcontent-%COMP%]{\r\n    border: 1px solid #e2e2e2 !important;\r\n    box-shadow: 0px 4px 11px 0px #5867dd61;\r\n}\r\n.prodByEngSection[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 6px;\r\n}\r\n.radioSection[_ngcontent-%COMP%]{\r\n    margin-bottom: 15px;\r\n}\r\n.lblType[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    color: #4e2d2d;\r\n    margin-right: 22px;\r\n    font-weight: 600;\r\n}\r\n.dds[_ngcontent-%COMP%]{\r\n    margin: 0 !important;\r\n}\r\n.engSubmit[_ngcontent-%COMP%]{\r\n    margin: 0px 0 0 0;\r\n    text-align: right;\r\n}\r\n.radioSection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    height: 12px !important;\r\n}\r\n.engDesc[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n}\r\n.engDesc[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n  height: 150px !important;\r\n}\r\nsup[_ngcontent-%COMP%] {\r\n  color:red;\r\n}\r\n.btnServiceView[_ngcontent-%COMP%]{\r\n  padding: 4px;\r\n}\r\n.btnServiceView[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  color: #4caf50;\r\n    font-size: 21px;\r\n    margin-right: 7px;\r\n    transition: width 2s, height 2s, transform 2s;\r\n}\r\n.btnServiceView[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n  color: #21366b;\r\n  transform: rotate(180deg);\r\n}\r\n.btnServiceClose[_ngcontent-%COMP%]{\r\n  padding: 4px;\r\n}\r\n.btnServiceClose[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  color: #d2194c;\r\n    font-size: 21px;\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n    transition: width 2s, height 2s, transform 2s;\r\n}\r\n.btnServiceClose[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n  transform: rotate(180deg);\r\n}\r\nli.custoTab[_ngcontent-%COMP%]{width: 12.49% !important;}\r\nli.custoTab-2[_ngcontent-%COMP%]{width: 14.28% !important;}\r\nli.custoTab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size: 11px !important; font-weight: 600 !important;}\r\n.tkthead[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color: #000000; margin-left: 11px !important; margin-bottom: 11px;}\r\n.timespanSection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color: #21366b; color: #fff; padding: 8px 29px; font-size: 12px; font-weight: 500; letter-spacing: 1px; border-radius: 15px;}\r\n.timespanSection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-radius: 16px; background-color: #dedede;font-size: 15px;}\r\n.mytimesheet[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family: unset;font-weight: 600;color: #7869dd; font-size: 20px;}\r\n.mytimesheet[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border: 1px solid #c6c4e6;line-height: 30px;padding: 1px 13px;margin-right: 6px;width: 73%;font-size: 14px;}\r\na.btbRadMore[_ngcontent-%COMP%]{background-color: #008b8be6; color: white; padding: 1px 10px; margin: 0 0 0 13px; }\r\n.AttToBeAppend[_ngcontent-%COMP%]{padding: 13px 7px; border: 1px solid #2c77f499;margin-bottom: 6px;}\r\n.timespanSection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin: 0px 5px !important;padding:8px 10px !important;}\r\n.audio-list[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%]{display: inline-block; height: 26px;}\r\n.audio-list[_ngcontent-%COMP%]{display: inline-flex;}\r\n.audio-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 18px; color: #000000;}\r\n.audio-list[_ngcontent-%COMP%]:last-child{border-bottom: none}\r\n.audio-button[_ngcontent-%COMP%] { font-size: 18px; }\r\n.audio-remove[_ngcontent-%COMP%]{display:inline-block; margin: 0 0 0 33px;}\r\n.audio-remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: red;}\r\n.audio-remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size: 24px;}\r\n.audio-timmer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style: none; padding: 0; margin: 4px 0px 0 2px;}\r\n.audio-timmer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display: inline-block;margin-right: 5px;}\r\n.audio-timmer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: red;}\r\n.audio-timmer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 16px; color: grey;}\r\n.button-sec[_ngcontent-%COMP%] {display: inline-block;}\r\n.spinnerSection[_ngcontent-%COMP%]{display:inline-block}\r\n.spinnerSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 43%; margin-left: 1px;}\r\nul.ttmsheet[_ngcontent-%COMP%]{list-style: none; padding: 0; margin: 0; position: relative;}\r\nul.ttmsheet[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display: inline-block;}\r\n.schedule1[_ngcontent-%COMP%]{display: inline-block;}\r\n.ticketstatus[_ngcontent-%COMP%] {display: inline-block;}\r\n.ticketstatus[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;padding:18px 22px;}\r\n.customer-logo-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n.customer-logo-container-image[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.customer-logo-container-overlay[_ngcontent-%COMP%] {\r\n  position: absolute; \r\n  bottom: 0; \r\n  background: transparent;\r\n  color: #f1f1f1; \r\n  width: 150px;\r\n  transition: .5s ease;\r\n  opacity:0;\r\n  color: white;\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n.customer-logo-container[_ngcontent-%COMP%]:hover   .customer-logo-container-overlay[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\nlabel.IsNotValidateTC[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: red !important;\r\n}\r\nlabel.IsValidateTC[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n    color: #0000005c !important;\r\n}\r\n.InvalidInput[_ngcontent-%COMP%]{\r\n  border-color: #ff0000ad !important;\r\n  box-shadow: 1px 0 3px #ff000085 !important;\r\n}\r\n.serviceby-section[_ngcontent-%COMP%]{padding: 5px 6px;}\r\n.serviceby-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    color: #000000;\r\n    font-weight: 600;\r\n}\r\n.payment-section[_ngcontent-%COMP%]{\r\n  border: 1px solid #2c77f442;\r\n  margin-bottom: 8px;\r\n  padding: 0 !important;\r\n}\r\n.alert.alert-success[_ngcontent-%COMP%]{\r\n  color: #2c77f4;\r\n    background-color: #2c77f457;\r\n    border-color: #2c77f457;\r\n}\r\n.payment-body[_ngcontent-%COMP%]{\r\n  padding: 8px;\r\n}\r\n.serviceby-section[_ngcontent-%COMP%]{\r\n  border: 1px solid #2c77f442;\r\n    margin-bottom: 8px;\r\n    padding: 0 !important;\r\n}\r\n.closerbody-sec[_ngcontent-%COMP%]{\r\n  padding: 8px;\r\n}\r\n.action-is-disabled[_ngcontent-%COMP%] { background-color: #edecec; cursor: no-drop; }\r\n.action-is-disabled-2[_ngcontent-%COMP%] {background-color: #edecec70;}\r\n.normal-text[_ngcontent-%COMP%] {font-size: 14px;font-weight: initial;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZW5naW5lZXIvZW5naW5lZXItdGlja2V0L215LXRpY2tldC1kZXRhaWxzL215LXRpY2tldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoSCxtQkFBbUIsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztBQUNsRSxpQkFBaUIsWUFBWSxDQUFDO0FBQzlCO0lBQ0ksV0FBVztFQUNiO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTs7O0tBR0c7QUFFSDtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7QUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0NBQXNDO0VBQ3hDO0FBRUE7SUFDRSxVQUFVO0VBQ1o7QUFFRTtNQUNFLGdCQUFnQjtNQUNoQixxQkFBcUI7TUFDckIsU0FBUztNQUNULFVBQVU7SUFDWjtBQUVGO0lBQ0UsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxXQUFXO0VBQ2I7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFFRTtNQUNFLFdBQVc7TUFDWCxVQUFVO01BQ1YsY0FBYztNQUNkLGtDQUFrQztNQUNsQyxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG1CQUFtQjtJQUNyQjtBQUVGO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxXQUFXO0VBQ2I7QUFFQTtJQUNFLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25C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L215LXRpY2tldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlja2V0LW9wZW4tc2Vje2Rpc3BsYXk6IGlubGluZS1ibG9jaztwYWRkaW5nOjhweCAyMnB4O2NvbG9yOndoaXRlO2JhY2tncm91bmQtY29sb3I6IzRDQUY1MDtib3JkZXItcmFkaXVzOjMwcHg7fVxyXG4udGlja2V0LW9wZW4tc2VjIGF7Y29sb3I6d2hpdGU7cG9pbnRlci1ldmVudHM6bm9uZTtmb250LXNpemU6MTRweDt9XHJcbi50aWNrZXQtb3Blbi1zZWN7bWFyZ2luOjAgNXB4O31cclxuLkNsb3NlckR0Qm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5idG5jdXN0b0luZm8gdGgge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLyogLnRibFRpY2tldFNlcnZpY2Vmb3JtIHNwYW4ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH0gKi9cclxuXHJcbiAgLnNlcnZpY2VGb3JtSGVhZGluZyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ4NDY1YjtcclxuICB9XHJcblxyXG4gIC5zaW5nbGVCb3ggcCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5zaW5nbGVCb3ggaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNzJweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA4cHggM3B4IC0ycHggIzJkNzdlN2JhO1xyXG4gIH1cclxuXHJcbiAgLnRpY2tldEVuZ0xpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gICAgLnRpY2tldEVuZ0xpc3QgbGkge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgLmN1c3RJbmZvIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmt0clNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaHRCb3JkZXIgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIyMzY2YjtcclxuICB9XHJcblxyXG4gIC5jbXRJbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnN1cHBvcnQtc2VydmljZS1pbmNpZGVudC1mb3JtIGgyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICAgLnN1cHBvcnQtc2VydmljZS1pbmNpZGVudC1mb3JtIGgyOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICB3aWR0aDogMjYlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmYTdlMmVhMztcclxuICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAuY210SW1hZ2UgaDI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEyJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmYTdlMmVhMztcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlZm9ybWJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuQ2xvc2VyQXR0YWNobWVudFNlY3Rpb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI4MjczMzI0O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggNXB4IDFweCAjMjgyNzMzNDI7ICovXHJcbiAgfVxyXG5cclxuICAudGlja2V0U3RhdHVzT3BlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogN3B4IDI3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpY2tldFN0YXR1c0Nsb3NlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwYmQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDdweCAyN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gICNmcm1DbG9zZXJGb3JtIHtcclxuICAgIG1hcmdpbjogMzNweCAwIDAgMDtcclxuICB9XHJcbiAgLmF0dGNoZW1lbnRTZWN0aW9ue1xyXG4gICAgd2lkb3dzOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG5UaWNrZXRDbG9ja3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAwIDAgNHB4O1xyXG4gIH1cclxuLnRpY2tldC1DbG9zZS1zZWN7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDIycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG4udGlja2V0LUNsb3NlLXNlYyBhe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jRW5naVByb2R1Y3RTZWN0aW9ue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMiAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMXB4IDBweCAjNTg2N2RkNjE7XHJcbn1cclxuLnByb2RCeUVuZ1NlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxufVxyXG4ucmFkaW9TZWN0aW9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubGJsVHlwZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNGUyZDJkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uZGRze1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmVuZ1N1Ym1pdHtcclxuICAgIG1hcmdpbjogMHB4IDAgMCAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnJhZGlvU2VjdGlvbiBpbnB1dHtcclxuICAgIGhlaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5lbmdEZXNje1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmVuZ0Rlc2MgdGV4dGFyZWF7XHJcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbnN1cCB7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbi5idG5TZXJ2aWNlVmlld3tcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuLmJ0blNlcnZpY2VWaWV3IGl7XHJcbiAgY29sb3I6ICM0Y2FmNTA7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDJzLCBoZWlnaHQgMnMsIHRyYW5zZm9ybSAycztcclxufVxyXG4uYnRuU2VydmljZVZpZXcgaTpob3ZlcntcclxuICBjb2xvcjogIzIxMzY2YjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5idG5TZXJ2aWNlQ2xvc2V7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcbi5idG5TZXJ2aWNlQ2xvc2UgaXtcclxuICBjb2xvcjogI2QyMTk0YztcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDJzLCBoZWlnaHQgMnMsIHRyYW5zZm9ybSAycztcclxufVxyXG4uYnRuU2VydmljZUNsb3NlIGk6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5saS5jdXN0b1RhYnt3aWR0aDogMTIuNDklICFpbXBvcnRhbnQ7fVxyXG5saS5jdXN0b1RhYi0ye3dpZHRoOiAxNC4yOCUgIWltcG9ydGFudDt9XHJcbmxpLmN1c3RvVGFiIGEgc3BhbiBoNHtmb250LXNpemU6IDExcHggIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O31cclxuLnRrdGhlYWQgaDJ7Y29sb3I6ICMwMDAwMDA7IG1hcmdpbi1sZWZ0OiAxMXB4ICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDExcHg7fVxyXG4udGltZXNwYW5TZWN0aW9uIHNwYW57YmFja2dyb3VuZC1jb2xvcjogIzIxMzY2YjsgY29sb3I6ICNmZmY7IHBhZGRpbmc6IDhweCAyOXB4OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGxldHRlci1zcGFjaW5nOiAxcHg7IGJvcmRlci1yYWRpdXM6IDE1cHg7fVxyXG4udGltZXNwYW5TZWN0aW9uIHNwYW4gc2VsZWN0e2JvcmRlci1yYWRpdXM6IDE2cHg7IGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7Zm9udC1zaXplOiAxNXB4O31cclxuLm15dGltZXNoZWV0IGgye2ZvbnQtZmFtaWx5OiB1bnNldDtmb250LXdlaWdodDogNjAwO2NvbG9yOiAjNzg2OWRkOyBmb250LXNpemU6IDIwcHg7fVxyXG4ubXl0aW1lc2hlZXQgaW5wdXR7Ym9yZGVyOiAxcHggc29saWQgI2M2YzRlNjtsaW5lLWhlaWdodDogMzBweDtwYWRkaW5nOiAxcHggMTNweDttYXJnaW4tcmlnaHQ6IDZweDt3aWR0aDogNzMlO2ZvbnQtc2l6ZTogMTRweDt9XHJcbmEuYnRiUmFkTW9yZXtiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YjhiZTY7IGNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMXB4IDEwcHg7IG1hcmdpbjogMCAwIDAgMTNweDsgfVxyXG4uQXR0VG9CZUFwcGVuZHtwYWRkaW5nOiAxM3B4IDdweDsgYm9yZGVyOiAxcHggc29saWQgIzJjNzdmNDk5O21hcmdpbi1ib3R0b206IDZweDt9XHJcbi50aW1lc3BhblNlY3Rpb24gc3BhbnttYXJnaW46IDBweCA1cHggIWltcG9ydGFudDtwYWRkaW5nOjhweCAxMHB4ICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBhdWRpb3tkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGhlaWdodDogMjZweDt9XHJcbi5hdWRpby1saXN0e2Rpc3BsYXk6IGlubGluZS1mbGV4O31cclxuLmF1ZGlvLWxpc3Qgc3Bhbntmb250LXNpemU6IDE4cHg7IGNvbG9yOiAjMDAwMDAwO31cclxuLmF1ZGlvLWxpc3Q6bGFzdC1jaGlsZHtib3JkZXItYm90dG9tOiBub25lfVxyXG4uYXVkaW8tYnV0dG9uIHsgZm9udC1zaXplOiAxOHB4OyB9XHJcbi5hdWRpby1yZW1vdmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7IG1hcmdpbjogMCAwIDAgMzNweDt9XHJcbi5hdWRpby1yZW1vdmUgYXtjb2xvcjogcmVkO31cclxuLmF1ZGlvLXJlbW92ZSBhIGl7Zm9udC1zaXplOiAyNHB4O31cclxuLmF1ZGlvLXRpbW1lciB1bHtsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiAwOyBtYXJnaW46IDRweCAwcHggMCAycHg7fVxyXG4uYXVkaW8tdGltbWVyIHVsIGxpe2Rpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6IDVweDt9XHJcbi5hdWRpby10aW1tZXIgdWwgbGkgaXtjb2xvcjogcmVkO31cclxuLmF1ZGlvLXRpbW1lciB1bCBsaSBzcGFue2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IGdyZXk7fVxyXG4uYnV0dG9uLXNlYyB7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLnNwaW5uZXJTZWN0aW9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrfVxyXG4uc3Bpbm5lclNlY3Rpb24gaW1ne3dpZHRoOiA0MyU7IG1hcmdpbi1sZWZ0OiAxcHg7fVxyXG4gdWwudHRtc2hlZXR7bGlzdC1zdHlsZTogbm9uZTsgcGFkZGluZzogMDsgbWFyZ2luOiAwOyBwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gdWwudHRtc2hlZXQgbGl7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuIC5zY2hlZHVsZTF7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLnRpY2tldHN0YXR1cyB7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLnRpY2tldHN0YXR1cyBzcGFue2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmc6MThweCAyMnB4O31cclxuLmN1c3RvbWVyLWxvZ28tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tZXItbG9nby1jb250YWluZXItaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmN1c3RvbWVyLWxvZ28tY29udGFpbmVyLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgYm90dG9tOiAwOyBcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2YxZjFmMTsgXHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIG9wYWNpdHk6MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmN1c3RvbWVyLWxvZ28tY29udGFpbmVyOmhvdmVyIC5jdXN0b21lci1sb2dvLWNvbnRhaW5lci1vdmVybGF5IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbmxhYmVsLklzTm90VmFsaWRhdGVUQyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5sYWJlbC5Jc1ZhbGlkYXRlVEMge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwNWMgIWltcG9ydGFudDtcclxufVxyXG4uSW52YWxpZElucHV0e1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmMDAwMGFkICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDAgM3B4ICNmZjAwMDA4NSAhaW1wb3J0YW50O1xyXG59XHJcbi5zZXJ2aWNlYnktc2VjdGlvbntwYWRkaW5nOiA1cHggNnB4O31cclxuLnNlcnZpY2VieS1zZWN0aW9uIGxhYmVse1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wYXltZW50LXNlY3Rpb257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJjNzdmNDQyO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFsZXJ0LmFsZXJ0LXN1Y2Nlc3N7XHJcbiAgY29sb3I6ICMyYzc3ZjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM3N2Y0NTc7XHJcbiAgICBib3JkZXItY29sb3I6ICMyYzc3ZjQ1NztcclxufVxyXG4ucGF5bWVudC1ib2R5e1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG4uc2VydmljZWJ5LXNlY3Rpb257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJjNzdmNDQyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jbG9zZXJib2R5LXNlY3tcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLmFjdGlvbi1pcy1kaXNhYmxlZCB7IGJhY2tncm91bmQtY29sb3I6ICNlZGVjZWM7IGN1cnNvcjogbm8tZHJvcDsgfVxyXG4uYWN0aW9uLWlzLWRpc2FibGVkLTIge2JhY2tncm91bmQtY29sb3I6ICNlZGVjZWM3MDt9XHJcbi5ub3JtYWwtdGV4dCB7Zm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiBpbml0aWFsO30iXX0= */", ".support-service-incident-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after{display:none !important;}\r\n.support-service-incident-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#22376b;font-size:24px;}\r\n\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0.95rem !important;}\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border: 1px solid #e2e2e2;}\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{font-weight:600;font-size:15px;}\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{font-size:15px;}\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color: #edf3f7;}\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f1f1f1;}\r\n.htBorder[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {border:1px solid #e2e2e2 !important;font-weight:600;font-size:15px;}\r\n.tblTicketServiceform[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:white !important;}\r\n.row.job-client-tabbing[_ngcontent-%COMP%]{margin: 0px 3px 20px !important;padding: 0px 0px 20px !important;border-bottom: 1px solid #dadada !important;}\r\nul.nav.nav-tabs.nav-tabs-line.nav-tabs-bold.nav-tabs-line-3x.nav-tabs-line-brand.tabbing-jobs-client[_ngcontent-%COMP%]{margin:0 0 0 !important;}\r\n.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:15px;}\r\n.service-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background: #dedede  !important;border: none !important;text-align: center !important;border-bottom:3px solid transparent !important;}\r\n.new-requst-filter_form[_ngcontent-%COMP%]   span.kt-switch.kt-switch--lg[_ngcontent-%COMP%]{display:block !important;}\r\n.new-requst-filter_form[_ngcontent-%COMP%]   span.kt-switch.kt-switch--lg[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;}\r\n.service-found-form-info[_ngcontent-%COMP%]   li.nav-item.service-nav-item[_ngcontent-%COMP%]{border-right: 1px solid #bfbfbf;}\r\n.service-found-form-info[_ngcontent-%COMP%]   li.nav-item.service-nav-item[_ngcontent-%COMP%]:last-child{border-right:0px !important;}\r\n.service-nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .service-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#21366B !important;border:none !important;color:white !important;text-align:center;border-bottom:none !important;}\r\n.kt-portlet__body.customer-listing-datatable.service-form-datatable[_ngcontent-%COMP%]{border:none !important;}\r\n.ticket-details[_ngcontent-%COMP%]{background-color:white;padding:30px 40px;}\r\n.customer-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px;position: relative;margin:15px 0px 20px;color:#20376c;font-weight:600;}\r\n.figure-icon[_ngcontent-%COMP%]{position: absolute;left: 0;top: 2px;display:none;width: 45px;height: 45px;line-height: 38px;text-align: center;background-color: #FA6130;border-radius: 50%;margin-right: 15px;}\r\n.customer-details[_ngcontent-%COMP%]{border-right: 2px solid #efefef;}\r\n.figure-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;font-size:24px;}\r\n.ticket-open-sec[_ngcontent-%COMP%]{display: inline-block;padding:8px 22px;color:white;background-color:#4CAF50;border-radius:30px;}\r\n.ticket-open-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:white;pointer-events:none;font-size:14px;}\r\n.customer-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:black;margin-bottom:0.6rem;font-weight:600;padding-left:30px;position: relative;}\r\n.customer-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position: absolute;left: 0;top: 6px;color: #999999;}\r\n.start-sec[_ngcontent-%COMP%]{display: inline-block;padding:8px 22px;color:white;background-color:#FA6130;}\r\n.start-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:white;pointer-events:none;font-size:14px;}\r\n.table-detail-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none !important;}\r\n.timing[_ngcontent-%COMP%]{display:inline-block;font-size:22px;color:#21366B;margin-left: 4px;}\r\n.timing[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:7px;}\r\n.ticket_number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:24px;font-weight:600;margin-bottom:0px;;}\r\n.table-detail-2[_ngcontent-%COMP%]{margin:25px 0px 0px;background-color:#f1f1f1;padding:0px 10px 15px;}\r\n.ticket_number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#4CAF50;font-size:12px;margin-left:10px;vertical-align:middle;}\r\n.date_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .engineer_sec[_ngcontent-%COMP%]{font-size:17px;color:black;margin-bottom:0px;font-weight:600;}\r\n.support-service-incident-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:black;padding-bottom:15px;}\r\n.custInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.kt-portlet__body.new_clients_properties_body[_ngcontent-%COMP%]{border:none !important;}\r\nspan.btn.btn-label-primary.ticket-cirle-red[_ngcontent-%COMP%]{    width: 73px;padding: 8px 5px 8px 5px;font-size: 14px;background-color:#C3E7FA;color:#3984ca;}\r\n.dropdown-menu.show[_ngcontent-%COMP%]{left: 0px !important;top: 3px !important; padding:0 !important;box-shadow:5px 1px 10px #c3c3c3;}\r\n.dropdown-menu.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#C3E7FA;color:black;}\r\n.dropdown-menu.show[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dropdown-menu.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{background-color:#FA6130;color:white;}\r\n.engineer_sec[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0px !important;padding-left:0px !important;}\r\n.engineer_sec[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding:0px 5px;}\r\n.schedule[_ngcontent-%COMP%]{display: inline-block;padding:8px 22px;color:white;background-color:#4CAF50;border-radius:30px;}\r\n.schedule[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:white;pointer-events:none;font-size:14px;}\r\n.ticket-open-sec[_ngcontent-%COMP%]{margin:0 5px;}\r\n.CloserAttachmentSection[_ngcontent-%COMP%]{border:none !important;}\r\n#frmCloserForm[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;font-size:16px;color:black;}\r\n.forn-group[_ngcontent-%COMP%]{margin-bottom:15px;;}\r\n.button-sec[_ngcontent-%COMP%]{margin:10px 0px; display: inline-block;}\r\n.CloserAttachmentSection[_ngcontent-%COMP%]{padding: 0px !important;;margin:0px !important;}\r\n.btnAddNewAttSection[_ngcontent-%COMP%]{padding:10px 24px !important;background-color:#e1e1ef !important;color:black !important;border:1px solid #e1e1ef !important;}\r\n.btnRemoveSection[_ngcontent-%COMP%]{margin: 4px 0px 2px 15px !important;padding:10px 24px !important;background-color:#2C77F4 !important;color:white !important;border:1px solid transparent;}\r\n.row.service-supports-heading[_ngcontent-%COMP%]{border-bottom:0px !important;}\r\n.accordion.accordion-solid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background-color:#dedede;height:60px;padding-right:15px;}\r\n.accordion.accordion-toggle-svg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{background-color: #dedede;}\r\n#frmCloserForm[_ngcontent-%COMP%]{margin-top:0px !important;}\r\n#frmCloserForm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:80px;max-height:120px;}\r\n.bottom-btn[_ngcontent-%COMP%]   .btnCloseCloserForm[_ngcontent-%COMP%]{padding:10px 24px !important;background-color:#e1e1ef !important;color:black !important;border:1px solid #e1e1ef !important;}\r\n.bottom-btn[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{padding:10px 24px !important;background-color:#2C77F4 !important;color:white !important;border:1px solid transparent;}\r\n.job-for-tab-content[_ngcontent-%COMP%]   .kt-portlet[_ngcontent-%COMP%]   .kt-portlet__body[_ngcontent-%COMP%]{background-color:white;}\r\n.col-md-2.right-side-doller-form-info[_ngcontent-%COMP%]{top:0px !important;}\r\n.product-head[_ngcontent-%COMP%]{background-color:#e4e4e4;}\r\n.product-tabcontent[_ngcontent-%COMP%]{background-color:white;margin-bottom:30px;}\r\n.product-head[_ngcontent-%COMP%]{margin:0px;padding:0px;}\r\n.product-first-name[_ngcontent-%COMP%]{padding-top: 5px;}\r\n.total-job-price-client[_ngcontent-%COMP%]{margin:20px 0px !important;}\r\n.total-job-price-client[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0px !important;}\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n    min-width: 80px !important;\r\n}\r\n.btn-sm[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]{padding: 1.2rem 1.8rem;font-size: 0.875rem;line-height: 1.5;border-radius: 0;background: #0084CA !important;color: white !important;}\r\n.team-inner-1[_ngcontent-%COMP%] {margin-top:15px;padding:0px 15px;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0px;;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:black;display: inline-block;padding: 8px 8px;background-color: #eaeaea;margin: 0px 3px 5px;border-radius: 5px;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ border-radius:40%; height: 20;width: 20; }\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size: 10px;\r\n    padding-left: 8px;\r\n    padding-top: 6px;}\r\n.box-1[_ngcontent-%COMP%]{display:inline-block;width:25%}\r\n.check-mark[_ngcontent-%COMP%]{margin-top:18px;position:relative;}\r\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}\r\n.expo[_ngcontent-%COMP%]{float:right;}\r\n.checkbox-downbox[_ngcontent-%COMP%]{position: absolute;bottom:-20px;background-color:#fff;padding:10px;border-radius:8px;width:131%;z-index: 9;}\r\n.custom-day[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        padding: 0.185rem 0.25rem;\r\n        display: inline-block;\r\n        height: 2rem;\r\n        width: 2rem;\r\n      }\r\n.custom-day.focused[_ngcontent-%COMP%] {\r\n        background-color: #e6e6e6;\r\n      }\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n        background-color: rgb(2, 117, 216);\r\n        color: white;\r\n      }\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n        background-color: rgba(2, 117, 216, 0.5);\r\n      }\r\n.txtSearch-ticket[_ngcontent-%COMP%]{height: 35px; border-radius: 27px; border: 1px solid gray; padding: 0 16px;\r\n        width: 100%;}\r\n.box-1.check-mark[_ngcontent-%COMP%]{text-align: right; margin-top: 7px; position: relative; margin-right: 9px;}\r\nlabel.kt-checkbox[_ngcontent-%COMP%]{color: #000000 ;font-weight: 600;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZW5naW5lZXIvZW5naW5lZXItdGlja2V0L2VuZ2luZWVyLXRpY2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5Qyx1QkFBdUIsQ0FBQztBQUNqRSxrQ0FBa0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUMvRDs7OzZKQUc2SjtBQUM3Six3REFBd0QsMEJBQTBCLENBQUM7QUFDbkYsMkRBQTJELHlCQUF5QixDQUFDO0FBQ3JGLHVFQUF1RSxlQUFlLENBQUMsY0FBYyxDQUFDO0FBQ3RHLHNFQUFzRSxjQUFjLENBQUM7QUFDckYsdUVBQXVFLHlCQUF5QixDQUFDO0FBQ2pHLHdFQUF3RSx3QkFBd0IsQ0FBQztBQUNqRyxjQUFjLG1DQUFtQyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUM7QUFDakYsK0JBQStCLGlDQUFpQyxDQUFDO0FBQ2pFLHdCQUF3QiwrQkFBK0IsQ0FBQyxnQ0FBZ0MsQ0FBQywyQ0FBMkMsQ0FBQztBQUNySSxxR0FBcUcsdUJBQXVCLENBQUM7QUFDN0gsaUNBQWlDLGNBQWMsQ0FBQztBQUNoRCxvQkFBb0IsK0JBQStCLENBQUMsdUJBQXVCLENBQUMsNkJBQTZCLENBQUMsOENBQThDLENBQUM7QUFDekoscURBQXFELHdCQUF3QixDQUFDO0FBQzlFLHdEQUF3RCxjQUFjLENBQUM7QUFDdkUsc0RBQXNELCtCQUErQixDQUFDO0FBQ3RGLGlFQUFpRSwyQkFBMkIsQ0FBQztBQUM3RixzREFBc0QsbUNBQW1DLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLENBQUM7QUFDeEwsb0VBQW9FLHNCQUFzQixDQUFDO0FBQzNGLGdCQUFnQixzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQztBQUN6RCxxQkFBcUIsY0FBYyxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDMUcsYUFBYSxrQkFBa0IsQ0FB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b0JBQW9CLENBQUMsU0FBUztBQUN6QyxZQUFZLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztBQUM5QyxrQkFBa0IsVUFBVTtBQUM1QixNQUFNLFdBQVcsQ0FBQztBQUNsQixrQkFBa0Isa0JBQWtCLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0FBQ3pIO1FBQ0ksa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLFdBQVc7TUFDYjtBQUNBO1FBQ0UseUJBQXlCO01BQzNCO0FBQ0E7UUFDRSxrQ0FBa0M7UUFDbEMsWUFBWTtNQUNkO0FBQ0E7UUFDRSx3Q0FBd0M7TUFDMUM7QUFDQSxrQkFBa0IsWUFBWSxFQUFFLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLGVBQWU7UUFDMUYsV0FBVyxDQUFDO0FBQ2Qsa0JBQWtCLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztBQUNsRyxrQkFBa0IsZUFBZSxDQUFDLGdCQUFnQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vZW5naW5lZXIvZW5naW5lZXItdGlja2V0L2VuZ2luZWVyLXRpY2tldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cHBvcnQtc2VydmljZS1pbmNpZGVudC1mb3JtIGgyOjphZnRlcntkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9XHJcbi5zdXBwb3J0LXNlcnZpY2UtaW5jaWRlbnQtZm9ybSBoMntjb2xvcjojMjIzNzZiO2ZvbnQtc2l6ZToyNHB4O31cclxuLyogLnNlcnZpY2UtbmF2LWl0ZW0gYXtiYWNrZ3JvdW5kOiAjZTRlNGU0ICFpbXBvcnRhbnQ7bWFyZ2luOiAwcHggNXB4ICFpbXBvcnRhbnQ7Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czo1MHB4ICFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcblxyXG4ubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1saW5lLTN4IC5uYXYtaXRlbXttYXJnaW4tYm90dG9tOjBweCAhaW1wb3J0YW50O2JvcmRlci1yaWdodDpub25lICFpbXBvcnRhbnQ7fVxyXG4uc2VydmljZS1uYXYtaXRlbSBhLmFjdGl2ZSwgLnNlcnZpY2UtbmF2LWl0ZW0gYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNGQTVGMkIgIWltcG9ydGFudDtib3JkZXI6bm9uZSAhaW1wb3J0YW50O2NvbG9yOndoaXRlICFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpjZW50ZXI7fSAqL1xyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZC5zZXJ2aWNlLWZvcm0tdGFibGUtYm9yZGVyIHRke3BhZGRpbmc6MC45NXJlbSAhaW1wb3J0YW50O31cclxudGFibGUudGFibGUudGFibGUtYm9yZGVyZWQuc2VydmljZS1mb3JtLXRhYmxlLWJvcmRlciB0ciB0ZHtib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO31cclxudGFibGUudGFibGUudGFibGUtYm9yZGVyZWQuc2VydmljZS1mb3JtLXRhYmxlLWJvcmRlciB0ciB0ZDpmaXJzdC1jaGlsZHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE1cHg7fVxyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZC5zZXJ2aWNlLWZvcm0tdGFibGUtYm9yZGVyIHRyIHRkOmxhc3QtY2hpbGR7Zm9udC1zaXplOjE1cHg7fVxyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZC5zZXJ2aWNlLWZvcm0tdGFibGUtYm9yZGVyIHRyOm50aC1jaGlsZChvZGQpe2JhY2tncm91bmQtY29sb3I6ICNlZGYzZjc7fVxyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZC5zZXJ2aWNlLWZvcm0tdGFibGUtYm9yZGVyIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7fVxyXG4uaHRCb3JkZXIgdGgge2JvcmRlcjoxcHggc29saWQgI2UyZTJlMiAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTVweDt9XHJcbi50YmxUaWNrZXRTZXJ2aWNlZm9ybSB0aGVhZCB0aHtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlICFpbXBvcnRhbnQ7fVxyXG4ucm93LmpvYi1jbGllbnQtdGFiYmluZ3ttYXJnaW46IDBweCAzcHggMjBweCAhaW1wb3J0YW50O3BhZGRpbmc6IDBweCAwcHggMjBweCAhaW1wb3J0YW50O2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFkYWRhICFpbXBvcnRhbnQ7fVxyXG51bC5uYXYubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1ib2xkLm5hdi10YWJzLWxpbmUtM3gubmF2LXRhYnMtbGluZS1icmFuZC50YWJiaW5nLWpvYnMtY2xpZW50e21hcmdpbjowIDAgMCAhaW1wb3J0YW50O31cclxuLnNlcnZpY2UtZm9ybS10YWJsZS1ib3JkZXIgdHIgdGR7Zm9udC1zaXplOjE1cHg7fVxyXG4uc2VydmljZS1uYXYtaXRlbSBhe2JhY2tncm91bmQ6ICNkZWRlZGUgICFpbXBvcnRhbnQ7Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcbi5uZXctcmVxdXN0LWZpbHRlcl9mb3JtIHNwYW4ua3Qtc3dpdGNoLmt0LXN3aXRjaC0tbGd7ZGlzcGxheTpibG9jayAhaW1wb3J0YW50O31cclxuLm5ldy1yZXF1c3QtZmlsdGVyX2Zvcm0gc3Bhbi5rdC1zd2l0Y2gua3Qtc3dpdGNoLS1sZyBoNHtmb250LXNpemU6MTZweDt9XHJcbi5zZXJ2aWNlLWZvdW5kLWZvcm0taW5mbyBsaS5uYXYtaXRlbS5zZXJ2aWNlLW5hdi1pdGVte2JvcmRlci1yaWdodDogMXB4IHNvbGlkICNiZmJmYmY7fVxyXG4uc2VydmljZS1mb3VuZC1mb3JtLWluZm8gbGkubmF2LWl0ZW0uc2VydmljZS1uYXYtaXRlbTpsYXN0LWNoaWxke2JvcmRlci1yaWdodDowcHggIWltcG9ydGFudDt9XHJcbi5zZXJ2aWNlLW5hdi1pdGVtIGEuYWN0aXZlLCAuc2VydmljZS1uYXYtaXRlbSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIxMzY2QiAhaW1wb3J0YW50O2JvcmRlcjpub25lICFpbXBvcnRhbnQ7Y29sb3I6d2hpdGUgIWltcG9ydGFudDt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItYm90dG9tOm5vbmUgIWltcG9ydGFudDt9IFxyXG4ua3QtcG9ydGxldF9fYm9keS5jdXN0b21lci1saXN0aW5nLWRhdGF0YWJsZS5zZXJ2aWNlLWZvcm0tZGF0YXRhYmxle2JvcmRlcjpub25lICFpbXBvcnRhbnQ7fVxyXG4udGlja2V0LWRldGFpbHN7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtwYWRkaW5nOjMwcHggNDBweDt9XHJcbi5jdXN0b21lci1kZXRhaWxzIGgye2ZvbnQtc2l6ZTo0MHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTttYXJnaW46MTVweCAwcHggMjBweDtjb2xvcjojMjAzNzZjO2ZvbnQtd2VpZ2h0OjYwMDt9XHJcbi5maWd1cmUtaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMDt0b3A6IDJweDtkaXNwbGF5Om5vbmU7d2lkdGg6IDQ1cHg7aGVpZ2h0OiA0NXB4O2xpbmUtaGVpZ2h0OiAzOHB4O3RleHQtYWxpZ246IGNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2MTMwO2JvcmRlci1yYWRpdXM6IDUwJTttYXJnaW4tcmlnaHQ6IDE1cHg7fVxyXG4uY3VzdG9tZXItZGV0YWlsc3tib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZWZlZmVmO31cclxuLmZpZ3VyZS1pY29uIGl7Y29sb3I6d2hpdGU7Zm9udC1zaXplOjI0cHg7fVxyXG4udGlja2V0LW9wZW4tc2Vje2Rpc3BsYXk6IGlubGluZS1ibG9jaztwYWRkaW5nOjhweCAyMnB4O2NvbG9yOndoaXRlO2JhY2tncm91bmQtY29sb3I6IzRDQUY1MDtib3JkZXItcmFkaXVzOjMwcHg7fVxyXG4udGlja2V0LW9wZW4tc2VjIGF7Y29sb3I6d2hpdGU7cG9pbnRlci1ldmVudHM6bm9uZTtmb250LXNpemU6MTRweDt9XHJcbi5jdXN0b21lci1kZXRhaWxzIHB7Zm9udC1zaXplOjE2cHg7Y29sb3I6YmxhY2s7bWFyZ2luLWJvdHRvbTowLjZyZW07Zm9udC13ZWlnaHQ6NjAwO3BhZGRpbmctbGVmdDozMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5jdXN0b21lci1kZXRhaWxzIHAgaXtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMDt0b3A6IDZweDtjb2xvcjogIzk5OTk5OTt9XHJcbi5zdGFydC1zZWN7ZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6OHB4IDIycHg7Y29sb3I6d2hpdGU7YmFja2dyb3VuZC1jb2xvcjojRkE2MTMwO31cclxuLnN0YXJ0LXNlYyBhe2NvbG9yOndoaXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7Zm9udC1zaXplOjE0cHg7fVxyXG4udGFibGUtZGV0YWlsLTIgdGFibGUgdHIgdGR7Ym9yZGVyOm5vbmUgIWltcG9ydGFudDt9XHJcbi50aW1pbmd7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOjIycHg7Y29sb3I6IzIxMzY2QjttYXJnaW4tbGVmdDogNHB4O31cclxuLnRpbWluZyBpe21hcmdpbi1yaWdodDo3cHg7fVxyXG4udGlja2V0X251bWJlciBwe2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjYwMDttYXJnaW4tYm90dG9tOjBweDs7fVxyXG4udGFibGUtZGV0YWlsLTJ7bWFyZ2luOjI1cHggMHB4IDBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7cGFkZGluZzowcHggMTBweCAxNXB4O31cclxuLnRpY2tldF9udW1iZXIgcCBzcGFuIGl7Y29sb3I6IzRDQUY1MDtmb250LXNpemU6MTJweDttYXJnaW4tbGVmdDoxMHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9XHJcbi5kYXRlX3NlYyBwLCAuZW5naW5lZXJfc2Vje2ZvbnQtc2l6ZToxN3B4O2NvbG9yOmJsYWNrO21hcmdpbi1ib3R0b206MHB4O2ZvbnQtd2VpZ2h0OjYwMDt9XHJcbi5zdXBwb3J0LXNlcnZpY2UtaW5jaWRlbnQtZm9ybSBoMntjb2xvcjpibGFjaztwYWRkaW5nLWJvdHRvbToxNXB4O31cclxuLmN1c3RJbmZvIHB7Zm9udC1zaXplOjE2cHg7fVxyXG5cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXN7YmFja2dyb3VuZDogI2MzZTdmYTt9XHJcbi5tb2RhbC1oZWFkZXIuc2VsZWN0LW5ldy1wcm9wZXJ0aWVzIC5idG57cGFkZGluZzogMC4yNXJlbSAwLjdyZW07YmFja2dyb3VuZC1jb2xvcjojMDA4NENBO2NvbG9yOndoaXRlO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgaDV7Y29sb3I6YmxhY2s7Zm9udC1zaXplOjIwcHg7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keS5tb2RhbC1ib2R5e2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHkgcHtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2s7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keSAuZm9ybi1ncm91cHttYXJnaW4tYm90dG9tOjE1cHg7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keWEgLmJ0bi1icmFuZHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7fVxyXG4ua3QtcG9ydGxldF9fYm9keS5uZXdfY2xpZW50c19wcm9wZXJ0aWVzX2JvZHl7Ym9yZGVyOm5vbmUgIWltcG9ydGFudDt9XHJcbnNwYW4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5LnRpY2tldC1jaXJsZS1yZWR7ICAgIHdpZHRoOiA3M3B4O3BhZGRpbmc6IDhweCA1cHggOHB4IDVweDtmb250LXNpemU6IDE0cHg7YmFja2dyb3VuZC1jb2xvcjojQzNFN0ZBO2NvbG9yOiMzOTg0Y2E7fVxyXG4uZHJvcGRvd24tbWVudS5zaG93e2xlZnQ6IDBweCAhaW1wb3J0YW50O3RvcDogM3B4ICFpbXBvcnRhbnQ7IHBhZGRpbmc6MCAhaW1wb3J0YW50O2JveC1zaGFkb3c6NXB4IDFweCAxMHB4ICNjM2MzYzM7fVxyXG4uZHJvcGRvd24tbWVudS5zaG93IGxpIGF7YmFja2dyb3VuZC1jb2xvcjojQzNFN0ZBO2NvbG9yOmJsYWNrO31cclxuLmRyb3Bkb3duLW1lbnUuc2hvdyBsaS5hY3RpdmUgYSwgLmRyb3Bkb3duLW1lbnUuc2hvdyBsaTpob3ZlciBhe2JhY2tncm91bmQtY29sb3I6I0ZBNjEzMDtjb2xvcjp3aGl0ZTt9XHJcbi5lbmdpbmVlcl9zZWMgdWx7bWFyZ2luLWJvdHRvbTowcHggIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6MHB4ICFpbXBvcnRhbnQ7fVxyXG4uZW5naW5lZXJfc2VjIHVsIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MHB4IDVweDt9XHJcbi5zY2hlZHVsZXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzo4cHggMjJweDtjb2xvcjp3aGl0ZTtiYWNrZ3JvdW5kLWNvbG9yOiM0Q0FGNTA7Ym9yZGVyLXJhZGl1czozMHB4O31cclxuLnNjaGVkdWxlIGF7Y29sb3I6d2hpdGU7cG9pbnRlci1ldmVudHM6bm9uZTtmb250LXNpemU6MTRweDt9XHJcbi50aWNrZXQtb3Blbi1zZWN7bWFyZ2luOjAgNXB4O31cclxuLkNsb3NlckF0dGFjaG1lbnRTZWN0aW9ue2JvcmRlcjpub25lICFpbXBvcnRhbnQ7fVxyXG4jZnJtQ2xvc2VyRm9ybSAuZm9ybi1ncm91cCBsYWJlbHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE2cHg7Y29sb3I6YmxhY2s7fVxyXG4uZm9ybi1ncm91cHttYXJnaW4tYm90dG9tOjE1cHg7O31cclxuLmJ1dHRvbi1zZWN7bWFyZ2luOjEwcHggMHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uQ2xvc2VyQXR0YWNobWVudFNlY3Rpb257cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7O21hcmdpbjowcHggIWltcG9ydGFudDt9XHJcbi5idG5BZGROZXdBdHRTZWN0aW9ue3BhZGRpbmc6MTBweCAyNHB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZTFlMWVmICFpbXBvcnRhbnQ7Y29sb3I6YmxhY2sgIWltcG9ydGFudDtib3JkZXI6MXB4IHNvbGlkICNlMWUxZWYgIWltcG9ydGFudDt9XHJcbi5idG5SZW1vdmVTZWN0aW9ue21hcmdpbjogNHB4IDBweCAycHggMTVweCAhaW1wb3J0YW50O3BhZGRpbmc6MTBweCAyNHB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojMkM3N0Y0ICFpbXBvcnRhbnQ7Y29sb3I6d2hpdGUgIWltcG9ydGFudDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O31cclxuLnJvdy5zZXJ2aWNlLXN1cHBvcnRzLWhlYWRpbmd7Ym9yZGVyLWJvdHRvbTowcHggIWltcG9ydGFudDt9XHJcbi5hY2NvcmRpb24uYWNjb3JkaW9uLXNvbGlkIC5jYXJkIC5jYXJkLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNkZWRlZGU7aGVpZ2h0OjYwcHg7cGFkZGluZy1yaWdodDoxNXB4O31cclxuLmFjY29yZGlvbi5hY2NvcmRpb24tdG9nZ2xlLXN2ZyAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGV7YmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTt9XHJcbiNmcm1DbG9zZXJGb3Jte21hcmdpbi10b3A6MHB4ICFpbXBvcnRhbnQ7fVxyXG4jZnJtQ2xvc2VyRm9ybSB0ZXh0YXJlYXtoZWlnaHQ6ODBweDttYXgtaGVpZ2h0OjEyMHB4O30gXHJcbi5ib3R0b20tYnRuIC5idG5DbG9zZUNsb3NlckZvcm17cGFkZGluZzoxMHB4IDI0cHggIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNlMWUxZWYgIWltcG9ydGFudDtjb2xvcjpibGFjayAhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgI2UxZTFlZiAhaW1wb3J0YW50O31cclxuLmJvdHRvbS1idG4gLmJ0bi1wcmltYXJ5e3BhZGRpbmc6MTBweCAyNHB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojMkM3N0Y0ICFpbXBvcnRhbnQ7Y29sb3I6d2hpdGUgIWltcG9ydGFudDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O31cclxuLmpvYi1mb3ItdGFiLWNvbnRlbnQgLmt0LXBvcnRsZXQgLmt0LXBvcnRsZXRfX2JvZHl7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTt9XHJcbi5jb2wtbWQtMi5yaWdodC1zaWRlLWRvbGxlci1mb3JtLWluZm97dG9wOjBweCAhaW1wb3J0YW50O31cclxuLnByb2R1Y3QtaGVhZHtiYWNrZ3JvdW5kLWNvbG9yOiNlNGU0ZTQ7fVxyXG4ucHJvZHVjdC10YWJjb250ZW50e2JhY2tncm91bmQtY29sb3I6d2hpdGU7bWFyZ2luLWJvdHRvbTozMHB4O31cclxuLnByb2R1Y3QtaGVhZHttYXJnaW46MHB4O3BhZGRpbmc6MHB4O31cclxuLnByb2R1Y3QtZmlyc3QtbmFtZXtwYWRkaW5nLXRvcDogNXB4O31cclxuLnRvdGFsLWpvYi1wcmljZS1jbGllbnR7bWFyZ2luOjIwcHggMHB4ICFpbXBvcnRhbnQ7fVxyXG4udG90YWwtam9iLXByaWNlLWNsaWVudCBwe21hcmdpbi1ib3R0b206MHB4ICFpbXBvcnRhbnQ7fVxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tc20sIC5idG4tZ3JvdXAtc20gPiAuYnRue3BhZGRpbmc6IDEuMnJlbSAxLjhyZW07Zm9udC1zaXplOiAwLjg3NXJlbTtsaW5lLWhlaWdodDogMS41O2JvcmRlci1yYWRpdXM6IDA7YmFja2dyb3VuZDogIzAwODRDQSAhaW1wb3J0YW50O2NvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O31cclxuLnRlYW0taW5uZXItMSB7bWFyZ2luLXRvcDoxNXB4O3BhZGRpbmc6MHB4IDE1cHg7fVxyXG4udGVhbS1pbm5lci0xIHVse3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1ib3R0b206MHB4Ozt9XHJcbi50ZWFtLWlubmVyLTEgdWwgbGl7Y29sb3I6YmxhY2s7ZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6IDhweCA4cHg7YmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTttYXJnaW46IDBweCAzcHggNXB4O2JvcmRlci1yYWRpdXM6IDVweDt9XHJcbi50ZWFtLWlubmVyLTEgdWwgbGkgaW1neyBib3JkZXItcmFkaXVzOjQwJTsgaGVpZ2h0OiAyMDt3aWR0aDogMjA7IH1cclxuLnRlYW0taW5uZXItMSB1bCBsaSAuY2xvc2V7Zm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O31cclxuICAgIC5ib3gtMXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyNSV9XHJcbi5jaGVjay1tYXJre21hcmdpbi10b3A6MThweDtwb3NpdGlvbjpyZWxhdGl2ZTt9XHJcbi5zZWFyY2gtYmFyIGlucHV0e3dpZHRoOjEwMCV9XHJcbi5leHBve2Zsb2F0OnJpZ2h0O31cclxuLmNoZWNrYm94LWRvd25ib3h7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTotMjBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzoxMHB4O2JvcmRlci1yYWRpdXM6OHB4O3dpZHRoOjEzMSU7ei1pbmRleDogOTt9XHJcbiAgICAuY3VzdG9tLWRheSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgfVxyXG4gICAgICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgICB9XHJcbiAgICAgIC5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgLnR4dFNlYXJjaC10aWNrZXR7aGVpZ2h0OiAzNXB4OyBib3JkZXItcmFkaXVzOiAyN3B4OyBib3JkZXI6IDFweCBzb2xpZCBncmF5OyBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7fVxyXG4gICAgICAuYm94LTEuY2hlY2stbWFya3t0ZXh0LWFsaWduOiByaWdodDsgbWFyZ2luLXRvcDogN3B4OyBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi1yaWdodDogOXB4O31cclxubGFiZWwua3QtY2hlY2tib3h7Y29sb3I6ICMwMDAwMDAgO2ZvbnQtd2VpZ2h0OiA2MDA7fSAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloserUpdatePopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './closer-update-popup.component.html',
                styleUrls: [
                    '../../../../src/app/application/engineer/engineer-ticket/my-ticket-details/my-ticket-details.component.css/',
                    '../../../../src/app/application/engineer/engineer-ticket/engineer-ticket.component.css'
                ],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"] }
                ],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] }, { type: src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_7__["DocumentUploadService"] }, { type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_8__["TicketService"] }, { type: src_app_services_closer_service__WEBPACK_IMPORTED_MODULE_9__["CloserService"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_10__["UserlogService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__["GenicProfileService"] }, { type: src_app_services__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"] }, { type: src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_15__["EngineerService"] }, { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"] }, { type: src_app_services_audio_recording_service__WEBPACK_IMPORTED_MODULE_17__["AudioRecordingService"] }]; }, { EnginnerSingnaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['SignaturePad1', { static: false }]
        }], CustomerCloserSingnaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['SignaturePad2', { static: false }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~application-closer-update-popup-closer-update-popup-module~application-engineer-engineer-mod~5fe4765e-es2015.js.map