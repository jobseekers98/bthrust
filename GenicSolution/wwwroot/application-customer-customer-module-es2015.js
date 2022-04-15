(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-customer-customer-module"],{

/***/ "3mO2":
/*!***********************************************************************************!*\
  !*** ./src/app/application/customer/customer-ticket/customer-ticket.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomerTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTicketComponent", function() { return CustomerTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _generic_utils_Ticket_Header_Count_TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Header-Count/TicketHeaderCount.component */ "wjE4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.component */ "Sh6L");
/* harmony import */ var _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.component */ "myuM");
/* harmony import */ var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */ "X7qY");
/* harmony import */ var _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Team-List/TicketTeamList.component */ "U6ah");

















function CustomerTicketComponent_table_28_tr_20_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.InvoiceNo);
} }
function CustomerTicketComponent_table_28_tr_20_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recurring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketComponent_table_28_tr_20_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UNALLOCATED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketComponent_table_28_tr_20_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RESECHEDULED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketComponent_table_28_tr_20_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerTicketComponent_table_28_tr_20_li_29_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const x_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.RequestForReScheduled(x_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Request for Reschedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketComponent_table_28_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerTicketComponent_table_28_tr_20_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.viewTicketDetails(x_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomerTicketComponent_table_28_tr_20_span_6_Template, 3, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerTicketComponent_table_28_tr_20_span_7_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "generic-ticket-feedback", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ratingcountChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_feedback_ratingcountChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.Rating = $event; })("StatusChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_feedback_StatusChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.Status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "generic-ticket-date-time-format", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("AChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_date_time_format_AChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.AppointmentStart = $event; })("BChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_date_time_format_BChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.AppointmentEnd = $event; })("CChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_date_time_format_CChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.CreatedUtcDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "generic-ticket-date-time-format", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("AChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_date_time_format_AChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.AppointmentStart = $event; })("BChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_date_time_format_BChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.AppointmentEnd = $event; })("CChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_date_time_format_CChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.CreatedUtcDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomerTicketComponent_table_28_tr_20_span_13_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomerTicketComponent_table_28_tr_20_span_14_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "generic-ticket-status", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_status_StatusChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.Status = $event; })("OverDueDaysChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_status_OverDueDaysChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.OverDueDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "generic-ticket-team-list", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("TicketTeamsChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_team_list_TicketTeamsChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.TicketTeams = $event; })("localPrependUrlChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_team_list_localPrependUrlChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.localPrependUrl = $event; })("ReallocateChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_team_list_ReallocateChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.Reallocate = $event; })("IdChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_team_list_IdChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.Id = $event; })("TicketIdChange", function CustomerTicketComponent_table_28_tr_20_Template_generic_ticket_team_list_TicketIdChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; return x_r3.TicketId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CustomerTicketComponent_table_28_tr_20_li_29_Template, 3, 0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerTicketComponent_table_28_tr_20_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const x_r3 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.viewTicketDetails(x_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.TicketId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (x_r3.InvoiceNo == null ? null : x_r3.InvoiceNo.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r3.TicketType === "Recurring Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratingcount", x_r3.Rating)("Editable", 2)("Status", x_r3.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("A", x_r3.AppointmentStart)("B", x_r3.AppointmentEnd)("C", x_r3.CreatedUtcDate)("T", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("A", x_r3.AppointmentStart)("B", x_r3.AppointmentEnd)("C", x_r3.CreatedUtcDate)("T", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r3.OneOffAppointmentDate === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r3.Rescheduled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.CustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.CustomerAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", x_r3.Status)("OverDueDays", x_r3.OverDueDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("TicketTeams", x_r3.TicketTeams)("localPrependUrl", ctx_r1.localPrependUrl)("Reallocate", x_r3.Reallocate)("Id", x_r3.Id)("TicketId", x_r3.TicketId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r3.Status === "UPCOMING" || x_r3.Status === "OVERDUE");
} }
function CustomerTicketComponent_table_28_tfoot_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketComponent_table_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Raised Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Appointment Date & Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CustomerTicketComponent_table_28_tr_20_Template, 33, 26, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CustomerTicketComponent_table_28_tfoot_21_Template, 4, 0, "tfoot", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r0.dtOptions)("dtTrigger", ctx_r0.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.currentUser.Ticket, "\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentUser.Engineer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ticketservice.Ticketlist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ticketservice.Ticketlist.length === 0);
} }
class CustomerTicketComponent {
    constructor(ticketservice, router, webParms, loginservice) {
        this.ticketservice = ticketservice;
        this.router = router;
        this.webParms = webParms;
        this.loginservice = loginservice;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.ticketservice.Ticketlist = [];
        this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [5, 10, 25, 50, 75, 100] };
        this.type = 1;
        this.ticketservice.RunBlankModule();
    }
    ngOnInit() {
        this.loaddata();
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    loaddata() {
        switch (this.router.url) {
            case '/customer/customer-tickets':
                this.type = 1;
                this.webParms.WebsiteParam.UrlPath = 'All ' + this.currentUser.Ticket + 's';
                break;
            case '/customer/customer-open-tickets':
                this.type = 2;
                this.webParms.WebsiteParam.UrlPath = 'Open ' + this.currentUser.Ticket + 's';
                break;
            case '/customer/customer-today-new-tickets':
                this.type = 3;
                this.webParms.WebsiteParam.UrlPath = 'Today New ' + this.currentUser.Ticket + 's';
                break;
            case '/customer/customer-today-closed-tickets':
                this.type = 4;
                this.webParms.WebsiteParam.UrlPath = 'Today Closed ' + this.currentUser.Ticket + 's';
                break;
            case '/customer/customer-overdue-tickets':
                this.type = 5;
                this.webParms.WebsiteParam.UrlPath = 'Overdue ' + this.currentUser.Ticket + 's';
                break;
            case '/customer/customer-upcoming-tickets':
                this.type = 6;
                this.webParms.WebsiteParam.UrlPath = 'Upcoming ' + this.currentUser.Ticket + 's';
                break;
            default:
                this.type = 1;
                this.webParms.WebsiteParam.UrlPath = 'All ' + this.currentUser.Ticket + 's';
                break;
        }
        this.ticketservice.getTickets(this.currentUser.Token, this.type).subscribe(res => {
            const response = res;
            this.ticketservice.Ticketlist = [];
            this.ticketservice.Ticketlist = response.result;
            this.dtTrigger.next();
            this.TotalOpenTicketCount = this.ticketservice.Ticketlist.filter(s => s.Status === 'UPCOMING').length;
        }, error => console.log(error));
    }
    viewTicketDetails(x) {
        this.ticketservice.getTicketById(this.currentUser.Token, x.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.ticketservice.formData = response.result;
                    this.router.navigate(['/customer/customer-tickets/custoner-ticket-view-details']);
                }
            }
        }, error => console.log(error));
    }
    ViewTicketRefDetails(TicketId) {
        try {
            this.ticketservice.formData = this.ticketservice.Ticketlist.filter(s => s.TicketId == TicketId)[0];
            this.router.navigate(['/customer/customer-tickets/custoner-ticket-view-details']);
        }
        catch (_a) { }
    }
    RequestForReScheduled(x) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Aru you sure?',
            text: 'you want to Re-scheduled this ' + this.currentUser.Ticket + '',
            type: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, Re-scheduled it!',
            cancelButtonText: 'Cancel!',
        }).then((result2) => {
            if (result2.value) {
                this.ticketservice.formData = Object.assign({}, x);
                this.ticketservice.formData.Status = 'RESCHEDULED';
                this.router.navigate(['/customer/customer-new-or-defect-ticket/']);
            }
        });
    }
}
CustomerTicketComponent.ɵfac = function CustomerTicketComponent_Factory(t) { return new (t || CustomerTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_7__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"])); };
CustomerTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerTicketComponent, selectors: [["app-customer-ticket"]], viewQuery: function CustomerTicketComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 29, vars: 4, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/customer/customer-dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], [1, "kt-subheader__wrapper"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-widget17__items"], [3, "Token", "TokenChange"], [1, "kt-section", "kt-drop-section"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "panel-body"], ["datatable", "", "class", "table table-striped- table-bordered table-hover table-checkable", 3, "dtOptions", "dtTrigger", 4, "ngIf"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], [2, "width", "5%"], [2, "width", "10%"], [2, "width", "20%"], [2, "width", "15%"], [2, "width", "40%"], [2, "width", "17%"], [2, "width", "3%"], ["class", "quote-list-view-info odd", "role", "row", 4, "ngFor", "ngForAsync", "ngForOf"], [4, "ngIf"], ["role", "row", 1, "quote-list-view-info", "odd"], [1, "btn", "btn-label-primary"], ["href", "javascript:;", 3, "click"], ["class", "btn btn-label-danger", "title", "Invoice No", 4, "ngIf"], ["class", "recurring-ticket", 4, "ngIf"], [3, "ratingcount", "Editable", "Status", "ratingcountChange", "StatusChange"], [3, "A", "B", "C", "T", "AChange", "BChange", "CChange"], ["class", "ticketstatus statusunallocated", 4, "ngIf"], ["class", "ticketstatus statusrescheduled", 4, "ngIf"], [1, "text-center"], [3, "Status", "OverDueDays", "StatusChange", "OverDueDaysChange"], [3, "TicketTeams", "localPrependUrl", "Reallocate", "Id", "TicketId", "TicketTeamsChange", "localPrependUrlChange", "ReallocateChange", "IdChange", "TicketIdChange"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"], ["title", "Invoice No", 1, "btn", "btn-label-danger"], [1, "recurring-ticket"], [1, "ticketstatus", "statusunallocated"], [1, "ticketstatus", "statusrescheduled"], [2, "text-align", "center"], ["colspan", "10"]], template: function CustomerTicketComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "generic-ticket-header-count", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("TokenChange", function CustomerTicketComponent_Template_generic_ticket_header_count_TokenChange_19_listener($event) { return ctx.currentUser.Token = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CustomerTicketComponent_table_28_Template, 22, 6, "table", 25);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.webParms.WebsiteParam.UrlPath, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Token", ctx.currentUser.Token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket, " List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketservice.Ticketlist);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _generic_utils_Ticket_Header_Count_TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_9__["TicketHeaderCountComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_11__["TicketFeedbackComponent"], _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_12__["TicketDateTimeFormatComponent"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_13__["TicketStatusComponent"], _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_14__["TicketTeamListComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerTicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-ticket',
                templateUrl: './customer-ticket.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_7__["GenicProfileService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "9u/L":
/*!*************************************************!*\
  !*** ./src/app/services/genicprofile.module.ts ***!
  \*************************************************/
/*! exports provided: GenicProfile, GenicProfileCalendar, PendingLeaveRequest, WebsiteParams, TicketFilter, GlobalFilter, ResourceFullCalendarSetting, Country, Smtpsetting, GenicDocExt, EngineerAttendance, EngineerAttendanceImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenicProfile", function() { return GenicProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenicProfileCalendar", function() { return GenicProfileCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingLeaveRequest", function() { return PendingLeaveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteParams", function() { return WebsiteParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketFilter", function() { return TicketFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFilter", function() { return GlobalFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceFullCalendarSetting", function() { return ResourceFullCalendarSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Smtpsetting", function() { return Smtpsetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenicDocExt", function() { return GenicDocExt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerAttendance", function() { return EngineerAttendance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerAttendanceImage", function() { return EngineerAttendanceImage; });
class GenicProfile {
}
class GenicProfileCalendar {
}
class PendingLeaveRequest {
}
class WebsiteParams {
}
class TicketFilter {
    constructor() {
        this.CustomerId = [];
        this.EngineerId = [];
        this.DepartmentId = [];
        this.Status = [];
    }
}
class GlobalFilter {
}
class ResourceFullCalendarSetting {
}
class Country {
}
class Smtpsetting {
}
class GenicDocExt {
}
class EngineerAttendance {
}
class EngineerAttendanceImage {
}


/***/ }),

/***/ "EFTt":
/*!*************************************************************************************************!*\
  !*** ./src/app/application/customer/customer-defect-ticket/customer-defect-ticket.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CustomerDefectTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDefectTicketComponent", function() { return CustomerDefectTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_ticket_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ticket.module */ "R0Vg");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/property.service */ "Pffd");
/* harmony import */ var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/report.service */ "ppW+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-image-compress */ "X9o6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");

















const _c0 = ["modalAttachment"];
function CustomerDefectTicketComponent_div_36_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 48);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
} }
function CustomerDefectTicketComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerDefectTicketComponent_div_36_input_1_Template, 1, 1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.itIsNewRequest);
} }
function CustomerDefectTicketComponent_div_37_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
} }
function CustomerDefectTicketComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerDefectTicketComponent_div_37_input_1_Template, 1, 1, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.itIsNewRequest);
} }
function CustomerDefectTicketComponent_input_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 51);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
} }
function CustomerDefectTicketComponent_div_39_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", x_r17.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", x_r17.AddressStreet1, " ", x_r17.AddressStreet2, " ", x_r17.AddressUnitNo, " ", x_r17.AddressCountry, " ", x_r17.AddressZipCode, " ");
} }
function CustomerDefectTicketComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerDefectTicketComponent_div_39_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.ticketService.formData.PropertyId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerDefectTicketComponent_div_39_option_10_Template, 2, 6, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r3.isPropertyValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.ticketService.formData.PropertyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.propertyservice.Propertylist);
} }
function CustomerDefectTicketComponent_table_83_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDefectTicketComponent_table_83_tr_10_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const k_r22 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.EditAttachment(k_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r21 = ctx.$implicit;
    const k_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](k_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "data:image/", x_r21.AttachmentName, ";base64,", x_r21.AttachmentPath, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerDefectTicketComponent_table_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerDefectTicketComponent_table_83_tr_10_Template, 8, 3, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.ticketService.TicketAttachmentList);
} }
function CustomerDefectTicketComponent_span_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDefectTicketComponent_span_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDefectTicketComponent_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Attachment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDefectTicketComponent_ng_template_94_Template_button_click_6_listener() { const close_r25 = ctx.close; return close_r25(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDefectTicketComponent_ng_template_94_Template_i_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.handleAttachment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDefectTicketComponent_ng_template_94_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.AddAttachment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r12.attachmentLocalURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.ListAButton);
} }
class CustomerDefectTicketComponent {
    constructor(logService, loginservice, ticketService, customerservice, propertyservice, service, toastr, modal, imageCompress, router) {
        this.logService = logService;
        this.loginservice = loginservice;
        this.ticketService = ticketService;
        this.customerservice = customerservice;
        this.propertyservice = propertyservice;
        this.service = service;
        this.toastr = toastr;
        this.modal = modal;
        this.imageCompress = imageCompress;
        this.router = router;
        this.meridian = true;
        this.ListAindex = 0;
        this.currentUTCDate = new Date();
        this.localdate = new Date(Date.UTC(this.currentUTCDate.getFullYear(), this.currentUTCDate.getMonth(), this.currentUTCDate.getDate(), 8, 0, 0));
        this.minDate = { year: Number(this.currentUTCDate.getFullYear()), month: Number(this.currentUTCDate.getMonth() + 1), day: Number(this.currentUTCDate.getDate()) };
        this.maxDate = { year: Number(this.currentUTCDate.getFullYear()), month: Number(this.currentUTCDate.getMonth() + 2), day: Number(this.currentUTCDate.getDate()) };
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.isValid = true;
        this.isDescriptionValid = true;
        this.isPropertyValid = true;
        this.itIsNewRequest = true;
        this.loading = false;
        this.attachmentLocalURL = 'assets/users/NoImage.png';
        this.ticketService.TicketAttachmentList = [];
    }
    ngOnInit() {
        this.RequestIsValid();
        if (this.itIsNewRequest) {
            this.propertyservice.refrestPropertylistCustomerWise(this.currentUser.Token, this.currentUser.Id).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.propertyservice.Propertylist = response.result;
                    }
                }
            }, error => console.log(error));
        }
        this.timer = setInterval(() => {
            console.info(this.ticketService.formData);
            if (this.ticketService.formData.Id === '00000000-0000-0000-0000-000000000000') {
                this.ticketService.formData.Status = 'NEW JOB REQUEST';
                this.itIsNewRequest = true;
            }
        }, 3000);
    }
    onSubmit() {
        if (this.validateForm()) {
            this.customerservice.postCreateByCustomer(this.currentUser.Token, this.ticketService.formData).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Done!',
                            html: response.MessageDescription,
                            type: 'success',
                            timer: 10000
                        });
                        this.loading = false;
                        this.uploadTicketAttachment(response.result);
                    }
                    if (response.Message === 'failure') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'warning!',
                            text: response.MessageDescription,
                            type: 'warning',
                            timer: 5000
                        });
                        this.loading = false;
                    }
                }
            }, error => console.log(error));
        }
    }
    uploadTicketAttachment(tId) {
        if (this.ticketService.TicketAttachmentList.length > 0) {
            this.ticketService.TicketAttachmentList.forEach(element => {
                element.TicketId = tId;
            });
            this.customerservice.postTicketAttachmentByCustomer(this.currentUser.Token, this.ticketService.TicketAttachmentList).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Done!',
                            html: response.MessageDescription,
                            type: 'success',
                            timer: 10000
                        });
                        this.router.navigate(['/customer/customer-dashboard/']);
                    }
                }
            }, error => console.log(error));
        }
        else {
            this.router.navigate(['/customer/customer-dashboard/']);
        }
        setTimeout(() => { this.router.navigate(['/customer/customer-dashboard/']); }, 10000);
    }
    //#region Attachment
    openmodelattachment() {
        this.ListAButton = 'Add';
        this.ticketService.TicketAttachment = new src_app_services_ticket_module__WEBPACK_IMPORTED_MODULE_2__["TicketAttachment"]();
        this.ticketService.TicketAttachment.Id = 0;
        this.ticketService.TicketAttachment.TicketId = this.ticketService.formData.Id;
        this.ticketService.TicketAttachment.AttachmentName = '';
        this.ticketService.TicketAttachment.AttachmentPath = '';
        this.ticketService.TicketAttachment.AttachmentSize = 0;
        this.modal.open(this.modalAttachment, { size: 'sm' });
        this.attachmentLocalURL = 'assets/users/NoImage.png';
    }
    AddAttachment() {
        this.ListAIsValid = true;
        if (this.ticketService.TicketAttachment.AttachmentName.length === 0) {
            this.toastr.warning('Please add attachment');
            this.ListAIsValid = false;
            return false;
        }
        if (this.ListAButton === 'Add') {
            this.ticketService.TicketAttachmentList.push({
                Id: 0,
                TicketId: this.ticketService.formData.Id,
                AttachmentName: this.ticketService.TicketAttachment.AttachmentName,
                AttachmentSize: this.ticketService.TicketAttachment.AttachmentSize,
                AttachmentPath: this.ticketService.TicketAttachment.AttachmentPath
            });
        }
        if (this.ListAButton === 'Update') {
            this.ticketService.TicketAttachmentList[this.ListAindex] = {
                Id: 0,
                TicketId: this.ticketService.formData.Id,
                AttachmentName: this.ticketService.TicketAttachment.AttachmentName,
                AttachmentSize: this.ticketService.TicketAttachment.AttachmentSize,
                AttachmentPath: this.ticketService.TicketAttachment.AttachmentPath
            };
            this.ListAButton = 'Add';
        }
        this.modal.dismissAll();
    }
    EditAttachment(i) {
        this.ListAButton = 'Update';
        this.ListAindex = i;
        this.modal.open(this.modalAttachment, { size: 'sm' });
        this.attachmentLocalURL = 'data:image/' + this.ticketService.TicketAttachmentList[i].AttachmentName +
            ';base64,' + this.ticketService.TicketAttachmentList[i].AttachmentPath;
        return this.ticketService.TicketAttachment = {
            Id: 0,
            TicketId: this.ticketService.TicketAttachmentList[i].TicketId,
            AttachmentName: this.ticketService.TicketAttachmentList[i].AttachmentName,
            AttachmentSize: this.ticketService.TicketAttachmentList[i].AttachmentSize,
            AttachmentPath: this.ticketService.TicketAttachmentList[i].AttachmentPath
        };
    }
    handleAttachment() {
        this.imageCompress.uploadFile().then(({ image, orientation }) => {
            this.ticketService.TicketAttachment.AttachmentName = image.split('/')[1].split(';')[0];
            this.imageCompress.compressFile(image, orientation, 50, 100).then(result => {
                this.ticketService.TicketAttachment.AttachmentSize = this.imageCompress.byteCount(result);
                if (this.ticketService.TicketAttachment.AttachmentSize >= 2000000) {
                    this.toastr.info('size too large', 'Maximum size is 2MB');
                    this.ticketService.TicketAttachment.AttachmentSize = null;
                    this.ticketService.TicketAttachment.AttachmentName = null;
                    this.ticketService.TicketAttachment.AttachmentPath = null;
                    return false;
                }
                this.attachmentLocalURL = result;
                this.ticketService.TicketAttachment.AttachmentPath = this.attachmentLocalURL.split(',')[1];
            });
        });
    }
    //#endregion
    validateForm() {
        this.loading = true;
        this.isValid = true;
        this.isDescriptionValid = true;
        if (this.ticketService.formData.Description === null || this.ticketService.formData.Description === undefined ||
            this.ticketService.formData.Description === '') {
            this.isDescriptionValid = false;
            this.isValid = false;
            this.loading = false;
            this.toastr.warning('warning', 'Please enter description!');
        }
        if (this.itIsNewRequest) {
            this.isPropertyValid = true;
            if (this.ticketService.formData.PropertyId === '00000000-0000-0000-0000-000000000000') {
                this.toastr.warning('warning', 'Please select property');
                this.isPropertyValid = false;
                this.loading = false;
                return false;
            }
            if (this.ticketService.formData.AppointmentStart === null) {
                this.toastr.warning('warning', 'Please select appointment date');
                this.loading = false;
                return false;
            }
        }
        return this.isValid;
    }
    RequestIsValid() {
        if (this.ticketService.formData.Id === '00000000-0000-0000-0000-000000000000') {
            this.itIsNewRequest = true;
            this.ticketService.formData.Description = '';
            this.ticketService.formData.Status = 'NEW JOB REQUEST';
        }
        else {
            this.itIsNewRequest = false;
            this.ticketService.formData.Description = '';
        }
    }
    selectDate() {
        this.ticketService.formData.AppointmentEnd = this.ticketService.formData.AppointmentStart;
        this.ticketService.formData.AppointmentStart = this.ticketService.formData.AppointmentStart.split('T')[0] + 'T10:00:00Z';
        this.ticketService.formData.AppointmentEnd = this.ticketService.formData.AppointmentStart.split('T')[0] + 'T11:00:00Z';
    }
    ngOnDestroy() {
        clearInterval(this.timer);
    }
}
CustomerDefectTicketComponent.ɵfac = function CustomerDefectTicketComponent_Factory(t) { return new (t || CustomerDefectTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_4__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_8__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_9__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_image_compress__WEBPACK_IMPORTED_MODULE_12__["NgxImageCompressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"])); };
CustomerDefectTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerDefectTicketComponent, selectors: [["ng-component"]], viewQuery: function CustomerDefectTicketComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalAttachment = _t.first);
    } }, decls: 96, vars: 22, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/customer/customer-dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/customer/customer-tickets"], [1, "kt-subheader__toolbar"], [1, "kt-subheader__wrapper"], ["onclick", "window.history.back()", 1, "btn", "btn-primary", 2, "margin-right", "3px", "color", "white", "padding", "4px 9px", "cursor", "pointer", "margin-left", "6px"], ["type", "hidden", "name", "Id", 3, "value", "ngModel", "ngModelChange"], [1, "tab-content", "customer-tab-content"], ["id", "menu0", 1, "tab-pane", "fade", "in", "active"], [1, "card-body", "padd-left-0", "padd-right-0"], [1, "kt-portlet__body", "create-new-client-portlet-body"], [1, "kt-section", "kt-section--first"], [1, "kt-section__body"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-12"], [1, "row", "no-spacing"], [1, "col-sm-12", "col-md-12", "col-xl-12"], [1, "form-group"], ["for", "", 1, "label"], [4, "ngIf"], ["class", "form-control", "value", "NEW JOB REQUEST", "style", "cursor: no-drop;", 3, "disabled", 4, "ngIf"], ["class", "col-sm-12 col-md-12 col-xl-12", 4, "ngIf"], [1, "text-danger"], ["name", "Description", "rows", "5", "placeholder", "Description", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelChange"], ["Description", "ngModel"], [1, "col-sm-3", "col-md-3", "col-xl-3"], ["name", "AppointmentStart", 3, "minDate", "maxDate", "ngModel", "ngModelChange", "select", "navigate"], ["AppointmentStart", "ngModel"], ["name", "AppointmentStart", 3, "meridian", "ngModel", "ngModelChange"], ["name", "AppointmentEnd", 3, "meridian", "ngModel", "ngModelChange"], ["AppointmentEnd", "ngModel"], [1, "col-md-12", "mt-4"], [1, "fa", "fa-plus", "text-success", "daily-add-btn", 2, "cursor", "pointer", 3, "click"], ["class", "table", 4, "ngIf"], [1, "col-xl-12"], ["type", "button", "routerLink", "/customer/customer-tickets", 1, "btn", "btn-secondary"], [1, "btn-group"], ["type", "submit", 1, "btn", "btn-brand", 3, "click"], ["modalAttachment", ""], ["class", "form-control", "value", "DEFECT JOB", "style", "cursor: no-drop;", 3, "disabled", 4, "ngIf"], ["value", "DEFECT JOB", 1, "form-control", 2, "cursor", "no-drop", 3, "disabled"], ["class", "form-control", "value", "RE-SCHEDULED", "style", "cursor: no-drop;", 3, "disabled", 4, "ngIf"], ["value", "RE-SCHEDULED", 1, "form-control", 2, "cursor", "no-drop", 3, "disabled"], ["value", "NEW JOB REQUEST", 1, "form-control", 2, "cursor", "no-drop", 3, "disabled"], ["name", "PropertyId", 1, "form-control", 3, "ngModel", "ngModelChange"], ["PropertyId", "ngModel"], ["value", "00000000-0000-0000-0000-000000000000"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "box"], ["alt", "", 2, "width", "50px", 3, "src"], [1, "fa", "fa-edit", 3, "click"], [1, "row", "cus-model-header", 2, "margin", "0"], [1, "col-md-9"], [1, "modal-title", 2, "font-size", "1.5em", "padding", "10px", "color", "black", "font-weight", "600"], [1, "col-md-3"], [1, "btn-group", 2, "float", "right"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "text-white", 3, "click"], ["aria-hidden", "true"], ["id", "month-2-modal", 1, "modal-body"], [1, "col-md-12"], [1, "col-md-12", "customer-logo-container"], ["alt", "", 2, "width", "240px", 3, "src"], [1, "customer-logo-container-overlay"], ["href", "javascript:;"], [1, "fa", "fa-paperclip", 3, "click"], [1, "btn", "btn-sm", "btn-block", "btn-primary", 2, "cursor", "pointer", "color", "#fff", "font-weight", "bold", 3, "click"]], template: function CustomerDefectTicketComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerDefectTicketComponent_Template_input_ngModelChange_22_listener($event) { return ctx.ticketService.formData.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CustomerDefectTicketComponent_div_36_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CustomerDefectTicketComponent_div_37_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CustomerDefectTicketComponent_input_38_Template, 1, 1, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CustomerDefectTicketComponent_div_39_Template, 11, 4, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "textarea", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerDefectTicketComponent_Template_textarea_ngModelChange_46_listener($event) { return ctx.ticketService.formData.Description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Appointment Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ngb-datepicker", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerDefectTicketComponent_Template_ngb_datepicker_ngModelChange_55_listener($event) { return ctx.ticketService.formData.AppointmentStart = $event; })("select", function CustomerDefectTicketComponent_Template_ngb_datepicker_select_55_listener() { return ctx.selectDate(); })("navigate", function CustomerDefectTicketComponent_Template_ngb_datepicker_navigate_55_listener($event) { return ctx.date = $event.next; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Start Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ngb-timepicker", 36, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerDefectTicketComponent_Template_ngb_timepicker_ngModelChange_63_listener($event) { return ctx.ticketService.formData.AppointmentStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "End Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ngb-timepicker", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerDefectTicketComponent_Template_ngb_timepicker_ngModelChange_71_listener($event) { return ctx.ticketService.formData.AppointmentEnd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDefectTicketComponent_Template_i_click_81_listener() { return ctx.openmodelattachment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, CustomerDefectTicketComponent_table_83_Template, 11, 1, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDefectTicketComponent_Template_button_click_91_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, CustomerDefectTicketComponent_span_92_Template, 2, 0, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, CustomerDefectTicketComponent_span_93_Template, 2, 0, "span", 27);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, CustomerDefectTicketComponent_ng_template_94_Template, 29, 2, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket, "s \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket, " Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.ticketService.formData.Id)("ngModel", ctx.ticketService.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Ticket, " Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.formData.Status === "DEFECT JOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.formData.Status === "RESCHEDULED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itIsNewRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itIsNewRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.isDescriptionValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticketService.formData.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minDate", ctx.minDate)("maxDate", ctx.maxDate)("ngModel", ctx.ticketService.formData.AppointmentStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meridian", ctx.meridian)("ngModel", ctx.ticketService.formData.AppointmentStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meridian", ctx.meridian)("ngModel", ctx.ticketService.formData.AppointmentEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.TicketAttachmentList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTimepicker"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"]], styles: [".kt-widget4__item.contact-details-new-quote[_ngcontent-%COMP%]   span.fa.fa-user-circle[_ngcontent-%COMP%]{color:#ff8533}.kt-widget4__item.contact-details-new-quote[_ngcontent-%COMP%]   span.fa.fa-home[_ngcontent-%COMP%]{background-color:#ff8533}.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]   .kt-widget4__title[_ngcontent-%COMP%]:hover{color:#0089cd}.kt-portlet__body.create-new-client-portlet-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{margin-bottom:15px}.btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color:#ff8533}.customer_all[_ngcontent-%COMP%]{margin-bottom:15px}.customer_all[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   select.btn[_ngcontent-%COMP%]{background-color:#ff8533!important;color:#fff}.text-info[_ngcontent-%COMP%]{color:#fff}span.btn.btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa;color:#000}.customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c3e7fa!important}.kt-iconbox--wave[_ngcontent-%COMP%]{background-color:#ff853329;border:1px solid #ff8533}.kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{fill:#ff8533}.btn-group-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%] > .btn[_ngcontent-xmv-c1][_ngcontent-%COMP%], .btn-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%]{padding:.5rem .7rem}.table-checkable[_ngcontent-%COMP%]   .customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:.5rem .7rem}.kt-portlet__head.profile-details-info[_ngcontent-%COMP%]{display:none!important}.customer-listing-detail-section[_ngcontent-%COMP%]   ul.nav.nav-tabs.nav-tabs-line.nav-tabs-bold.nav-tabs-line-brand[_ngcontent-%COMP%]{background-color:#0084ca}.customer-listing-detail-section[_ngcontent-%COMP%]   ul.nav.nav-tabs.nav-tabs-line.nav-tabs-bold.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{color:#fff}.nav-tabs.nav-tabs-line.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.customer-listing-detail-section[_ngcontent-%COMP%]   .nav-tabs.nav-tabs-line.nav-tabs-line-brand.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-tabs.nav-tabs-line.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%], .nav-tabs.nav-tabs-line.nav-tabs-line-brand[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover, .nav-tabs.nav-tabs-line.nav-tabs-line-brand.nav.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#0084ca!important}.nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#0084ca!important}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]{background-color:#ffebde}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]:after{border-left-color:#ffebde!important}.kt-wizard-v2[_ngcontent-%COMP%]   .kt-wizard-v2__aside[_ngcontent-%COMP%]   .kt-wizard-v2__nav[_ngcontent-%COMP%]   .kt-wizard-v2__nav-items[_ngcontent-%COMP%]   .kt-wizard-v2__nav-item[data-ktwizard-state=current][_ngcontent-%COMP%]   .kt-wizard-v2__nav-icon[_ngcontent-%COMP%]{color:#ff8533}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]{background-color:#0084ca}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]   .kt-portlet__head-label[_ngcontent-%COMP%]   .kt-portlet__head-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.kt-portlet__head.kt-portlet__head--lg.contact_detail_table_info[_ngcontent-%COMP%]   .kt-portlet__head-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff}.fade[_ngcontent-%COMP%]:not(.show){opacity:1}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;border-bottom:none;padding:20px 15px;background-color:#f1f1f1;margin-bottom:0}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(100%/5);border-right:1px solid #d6d6d6}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child(){border-right:0}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#e7e7e7;color:#000;font-size:14px;padding:10px 18px;text-align:center;display:block}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000;margin-right:10px;font-size:18px;text-align:center}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#21366b;color:#fff}.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#fff}.tab-content[_ngcontent-%COMP%]{background-color:#fff;margin:15px;padding:15px;box-shadow:10px 10px 10px #e7e7e7;margin-top:0}.contact-bton[_ngcontent-%COMP%]   .btn-sm.btn.btn-label-info.btn-bold[_ngcontent-%COMP%]{display:block}.kt-portlet__body.create-new-client-portlet-body.create-new-property-details[_ngcontent-%COMP%]{background-color:#fff}.label[_ngcontent-%COMP%]{font-weight:600;color:#000}.accordion.accordion-toggle-svg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:1.5rem}.kt-section[_ngcontent-%COMP%]   .kt-section__heading[_ngcontent-%COMP%], .kt-section[_ngcontent-%COMP%]   .kt-section__title[_ngcontent-%COMP%]{font-size:1.5rem}.btn-sm.btn.btn-label-info.btn-bold[_ngcontent-%COMP%]{margin-top:25px}#menu3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:15px}.switcher-customer[_ngcontent-%COMP%]{top:-15px;position:relative}.kt-portlet__head-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px!important;color:#fff!important}.action-is-disabled[_ngcontent-%COMP%]{cursor:no-drop}.team-inner-1[_ngcontent-%COMP%]{margin-top:15px;padding:0 15px}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#000;display:inline-block;padding:8px 8px;background-color:#eaeaea;margin:0 3px 5px;border-radius:5px}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:40%;height:20;width:20}.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size:10px;padding-left:8px;padding-top:6px}.customer-logo-container[_ngcontent-%COMP%]{position:relative;width:100%;max-width:100%}.customer-logo-container-image[_ngcontent-%COMP%]{display:block;width:100%;height:auto}.customer-logo-container-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;background:#000;background:rgba(0,0,0,.5);color:#f1f1f1;width:100%;transition:.5s ease;opacity:0;color:#fff;font-size:30px;padding:6px;text-align:center}.customer-logo-container[_ngcontent-%COMP%]:hover   .customer-logo-container-overlay[_ngcontent-%COMP%]{opacity:1}.box-1[_ngcontent-%COMP%]{display:inline-block;width:25%}.check-mark[_ngcontent-%COMP%]{margin-top:18px;position:relative}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.expo[_ngcontent-%COMP%]{float:right}.checkbox-downbox[_ngcontent-%COMP%]{position:absolute;bottom:-20px;background-color:#fff;padding:10px;border-radius:8px;width:131%;z-index:9}.txtSearchTicket[_ngcontent-%COMP%]{float:right;margin-top:10px;line-height:25px!important;padding:4px 24px;width:30%;border:none;border-radius:16px;background-color:#eaeaea}.dropdown-menu.show[_ngcontent-%COMP%]{margin-left:-105px}.myCOlsp[_ngcontent-%COMP%]{color:#000;font-size:21px;font-weight:600}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vY3VzdG9tZXJzL2N1c3RvbWVyLWFkZC9jdXN0b21lci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUUsYUFBYSxDQUFDLDREQUE0RCx3QkFBd0IsQ0FBQyx1REFBdUQsYUFBYSxDQUFDLCtEQUErRCxrQkFBa0IsQ0FBQyxXQUFXLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDLGNBQWMsa0JBQWtCLENBQUMsb0NBQW9DLGtDQUFrQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLFVBQVUsQ0FBQywyQkFBMkIsd0JBQXdCLENBQUMsVUFBVSxDQUFDLDJDQUEyQyx1QkFBdUIsQ0FBQyxrQkFBa0IsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLFlBQVksQ0FBQyxvRkFBb0YsbUJBQW1CLENBQUMsMERBQTBELG1CQUFtQixDQUFDLHVDQUF1QyxzQkFBc0IsQ0FBQyxpR0FBaUcsd0JBQXdCLENBQUMsNEdBQTRHLFVBQVUsQ0FBQyxpREFBaUQsVUFBVSxDQUFDLCtTQUErUyx1QkFBdUIsQ0FBQyx1RkFBdUYsdUJBQXVCLENBQUMsb0lBQW9JLHdCQUF3QixDQUFDLDBJQUEwSSxtQ0FBbUMsQ0FBQyw0SkFBNEosYUFBYSxDQUFDLGlFQUFpRSx3QkFBd0IsQ0FBQyxrSEFBa0gsVUFBVSxDQUFDLDRGQUE0RixVQUFVLENBQUMsaUJBQWlCLFNBQVMsQ0FBQyxrQkFBa0IsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsa0NBQWtDLGNBQWMsQ0FBQyx1QkFBdUIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMseUJBQXlCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsMkRBQTJELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywrREFBK0QsVUFBVSxDQUFDLGFBQWEscUJBQXFCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQ0FBaUMsQ0FBQyxZQUFZLENBQUMsa0RBQWtELGFBQWEsQ0FBQyw2RUFBNkUscUJBQXFCLENBQUMsT0FBTyxlQUFlLENBQUMsVUFBVSxDQUFDLCtEQUErRCxnQkFBZ0IsQ0FBQyxnRUFBZ0UsZ0JBQWdCLENBQUMsb0NBQW9DLGVBQWUsQ0FBQyxhQUFhLFlBQVksQ0FBQyxtQkFBbUIsU0FBUyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5Qix3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsY0FBYyxDQUFDLGNBQWMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsVUFBVSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUNBQWlDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsZ0VBQWdFLFNBQVMsQ0FBQyxPQUFPLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxZQUFZLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsVUFBVSxDQUFDLE1BQU0sV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLFdBQVcsQ0FBQyxlQUFlLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBb0Isa0JBQWtCLENBQUMsU0FBUyxVQUFVLENBQUMsY0FBYyxDQUFDLGVBQWUiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9jdXN0b21lcnMvY3VzdG9tZXItYWRkL2N1c3RvbWVyLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmt0LXdpZGdldDRfX2l0ZW0uY29udGFjdC1kZXRhaWxzLW5ldy1xdW90ZSBzcGFuLmZhLmZhLXVzZXItY2lyY2xle2NvbG9yOiNmZjg1MzN9Lmt0LXdpZGdldDRfX2l0ZW0uY29udGFjdC1kZXRhaWxzLW5ldy1xdW90ZSBzcGFuLmZhLmZhLWhvbWV7YmFja2dyb3VuZC1jb2xvcjojZmY4NTMzfS5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtIC5rdC13aWRnZXQ0X190aXRsZTpob3Zlcntjb2xvcjojMDA4OWNkfS5rdC1wb3J0bGV0X19ib2R5LmNyZWF0ZS1uZXctY2xpZW50LXBvcnRsZXQtYm9keSAuZm9ybS1jb250cm9se21hcmdpbi1ib3R0b206MTVweH0uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6I2ZmODUzM30uY3VzdG9tZXJfYWxse21hcmdpbi1ib3R0b206MTVweH0uY3VzdG9tZXJfYWxsIC5idG4tZ3JvdXAgc2VsZWN0LmJ0bntiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzMhaW1wb3J0YW50O2NvbG9yOiNmZmZ9LnRleHQtaW5mb3tjb2xvcjojZmZmfXNwYW4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6I2MzZTdmYTtjb2xvcjojMDAwfS5jdXN0b21lci1saXN0LXZpZXctaW5mbyAuYnRuLWdyb3VwIC5idG4gaXtjb2xvcjojYzNlN2ZhIWltcG9ydGFudH0ua3QtaWNvbmJveC0td2F2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzMyOTtib3JkZXI6MXB4IHNvbGlkICNmZjg1MzN9Lmt0LXN2Zy1pY29uIGcgW2ZpbGxde2ZpbGw6I2ZmODUzM30uYnRuLWdyb3VwLXNtW19uZ2NvbnRlbnQteG12LWMxXT4uYnRuW19uZ2NvbnRlbnQteG12LWMxXSwuYnRuLXNtW19uZ2NvbnRlbnQteG12LWMxXXtwYWRkaW5nOi41cmVtIC43cmVtfS50YWJsZS1jaGVja2FibGUgLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIC5idG4tZ3JvdXAgLmJ0bntwYWRkaW5nOi41cmVtIC43cmVtfS5rdC1wb3J0bGV0X19oZWFkLnByb2ZpbGUtZGV0YWlscy1pbmZve2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmN1c3RvbWVyLWxpc3RpbmctZGV0YWlsLXNlY3Rpb24gdWwubmF2Lm5hdi10YWJzLm5hdi10YWJzLWxpbmUubmF2LXRhYnMtYm9sZC5uYXYtdGFicy1saW5lLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRjYX0uY3VzdG9tZXItbGlzdGluZy1kZXRhaWwtc2VjdGlvbiB1bC5uYXYubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1ib2xkLm5hdi10YWJzLWxpbmUtYnJhbmQgYS5uYXYtbGlua3tjb2xvcjojZmZmfS5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi5uYXYtdGFicyAubmF2LWxpbmsgaXtjb2xvcjojZmZmfS5jdXN0b21lci1saXN0aW5nLWRldGFpbC1zZWN0aW9uIC5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi10YWJzLWxpbmUtYnJhbmQubmF2Lm5hdi10YWJzIC5uYXYtbGluazpob3ZlciwubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1saW5lLWJyYW5kIGEubmF2LWxpbmsuYWN0aXZlLC5uYXYtdGFicy5uYXYtdGFicy1saW5lLm5hdi10YWJzLWxpbmUtYnJhbmQgYS5uYXYtbGluazpob3ZlciwubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1saW5lLWJyYW5kLm5hdi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle2NvbG9yOiMwMDg0Y2EhaW1wb3J0YW50fS5uYXYtdGFicy5uYXYtdGFicy1saW5lIGEubmF2LWxpbmsuYWN0aXZlIGksLm5hdi10YWJzLm5hdi10YWJzLWxpbmUgYS5uYXYtbGluazpob3ZlciBpe2NvbG9yOiMwMDg0Y2EhaW1wb3J0YW50fS5rdC13aXphcmQtdjIgLmt0LXdpemFyZC12Ml9fYXNpZGUgLmt0LXdpemFyZC12Ml9fbmF2IC5rdC13aXphcmQtdjJfX25hdi1pdGVtcyAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbVtkYXRhLWt0d2l6YXJkLXN0YXRlPWN1cnJlbnRde2JhY2tncm91bmQtY29sb3I6I2ZmZWJkZX0ua3Qtd2l6YXJkLXYyIC5rdC13aXphcmQtdjJfX2FzaWRlIC5rdC13aXphcmQtdjJfX25hdiAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbXMgLmt0LXdpemFyZC12Ml9fbmF2LWl0ZW1bZGF0YS1rdHdpemFyZC1zdGF0ZT1jdXJyZW50XTphZnRlcntib3JkZXItbGVmdC1jb2xvcjojZmZlYmRlIWltcG9ydGFudH0ua3Qtd2l6YXJkLXYyIC5rdC13aXphcmQtdjJfX2FzaWRlIC5rdC13aXphcmQtdjJfX25hdiAua3Qtd2l6YXJkLXYyX19uYXYtaXRlbXMgLmt0LXdpemFyZC12Ml9fbmF2LWl0ZW1bZGF0YS1rdHdpemFyZC1zdGF0ZT1jdXJyZW50XSAua3Qtd2l6YXJkLXYyX19uYXYtaWNvbntjb2xvcjojZmY4NTMzfS5rdC1wb3J0bGV0X19oZWFkLmt0LXBvcnRsZXRfX2hlYWQtLWxnLmNvbnRhY3RfZGV0YWlsX3RhYmxlX2luZm97YmFja2dyb3VuZC1jb2xvcjojMDA4NGNhfS5rdC1wb3J0bGV0X19oZWFkLmt0LXBvcnRsZXRfX2hlYWQtLWxnLmNvbnRhY3RfZGV0YWlsX3RhYmxlX2luZm8gLmt0LXBvcnRsZXRfX2hlYWQtbGFiZWwgLmt0LXBvcnRsZXRfX2hlYWQtaWNvbiBpe2NvbG9yOiNmZmZ9Lmt0LXBvcnRsZXRfX2hlYWQua3QtcG9ydGxldF9faGVhZC0tbGcuY29udGFjdF9kZXRhaWxfdGFibGVfaW5mbyAua3QtcG9ydGxldF9faGVhZC1sYWJlbCBoM3tjb2xvcjojZmZmfS5mYWRlOm5vdCguc2hvdyl7b3BhY2l0eToxfS5jdXN0b21lci1mb3JtIHVse3dpZHRoOjEwMCU7Ym9yZGVyLWJvdHRvbTpub25lO3BhZGRpbmc6MjBweCAxNXB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTttYXJnaW4tYm90dG9tOjB9LmN1c3RvbWVyLWZvcm0gdWwgbGl7d2lkdGg6Y2FsYygxMDAlLzUpO2JvcmRlci1yaWdodDoxcHggc29saWQgI2Q2ZDZkNn0uY3VzdG9tZXItZm9ybSB1bCBsaTpsYXN0LWNoaWxkKCl7Ym9yZGVyLXJpZ2h0OjB9LmN1c3RvbWVyLWZvcm0gdWwgbGkgYXtiYWNrZ3JvdW5kOiNlN2U3ZTc7Y29sb3I6IzAwMDtmb250LXNpemU6MTRweDtwYWRkaW5nOjEwcHggMThweDt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmJsb2NrfS5jdXN0b21lci1mb3JtIHVsIGxpIGEgaXtjb2xvcjojMDAwO21hcmdpbi1yaWdodDoxMHB4O2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyfS5jdXN0b21lci1mb3JtIHVsIGxpIGEuYWN0aXZlLC5jdXN0b21lci1mb3JtIHVsIGxpIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjEzNjZiO2NvbG9yOiNmZmZ9LmN1c3RvbWVyLWZvcm0gdWwgbGkgYS5hY3RpdmUgaSwuY3VzdG9tZXItZm9ybSB1bCBsaSBhOmhvdmVyIGl7Y29sb3I6I2ZmZn0udGFiLWNvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO21hcmdpbjoxNXB4O3BhZGRpbmc6MTVweDtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNlN2U3ZTc7bWFyZ2luLXRvcDowfS5jb250YWN0LWJ0b24gLmJ0bi1zbS5idG4uYnRuLWxhYmVsLWluZm8uYnRuLWJvbGR7ZGlzcGxheTpibG9ja30ua3QtcG9ydGxldF9fYm9keS5jcmVhdGUtbmV3LWNsaWVudC1wb3J0bGV0LWJvZHkuY3JlYXRlLW5ldy1wcm9wZXJ0eS1kZXRhaWxze2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubGFiZWx7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiMwMDB9LmFjY29yZGlvbi5hY2NvcmRpb24tdG9nZ2xlLXN2ZyAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGV7Zm9udC1zaXplOjEuNXJlbX0ua3Qtc2VjdGlvbiAua3Qtc2VjdGlvbl9faGVhZGluZywua3Qtc2VjdGlvbiAua3Qtc2VjdGlvbl9fdGl0bGV7Zm9udC1zaXplOjEuNXJlbX0uYnRuLXNtLmJ0bi5idG4tbGFiZWwtaW5mby5idG4tYm9sZHttYXJnaW4tdG9wOjI1cHh9I21lbnUzIC5jYXJke3BhZGRpbmc6MTVweH0uc3dpdGNoZXItY3VzdG9tZXJ7dG9wOi0xNXB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5rdC1wb3J0bGV0X19oZWFkLWljb24gaXtmb250LXNpemU6MThweCFpbXBvcnRhbnQ7Y29sb3I6I2ZmZiFpbXBvcnRhbnR9LmFjdGlvbi1pcy1kaXNhYmxlZHtjdXJzb3I6bm8tZHJvcH0udGVhbS1pbm5lci0xe21hcmdpbi10b3A6MTVweDtwYWRkaW5nOjAgMTVweH0udGVhbS1pbm5lci0xIHVse3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1ib3R0b206MH0udGVhbS1pbm5lci0xIHVsIGxpe2NvbG9yOiMwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzo4cHggOHB4O2JhY2tncm91bmQtY29sb3I6I2VhZWFlYTttYXJnaW46MCAzcHggNXB4O2JvcmRlci1yYWRpdXM6NXB4fS50ZWFtLWlubmVyLTEgdWwgbGkgaW1ne2JvcmRlci1yYWRpdXM6NDAlO2hlaWdodDoyMDt3aWR0aDoyMH0udGVhbS1pbm5lci0xIHVsIGxpIC5jbG9zZXtmb250LXNpemU6MTBweDtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctdG9wOjZweH0uY3VzdG9tZXItbG9nby1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJX0uY3VzdG9tZXItbG9nby1jb250YWluZXItaW1hZ2V7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDphdXRvfS5jdXN0b21lci1sb2dvLWNvbnRhaW5lci1vdmVybGF5e3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2JhY2tncm91bmQ6IzAwMDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO2NvbG9yOiNmMWYxZjE7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOi41cyBlYXNlO29wYWNpdHk6MDtjb2xvcjojZmZmO2ZvbnQtc2l6ZTozMHB4O3BhZGRpbmc6NnB4O3RleHQtYWxpZ246Y2VudGVyfS5jdXN0b21lci1sb2dvLWNvbnRhaW5lcjpob3ZlciAuY3VzdG9tZXItbG9nby1jb250YWluZXItb3ZlcmxheXtvcGFjaXR5OjF9LmJveC0xe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjI1JX0uY2hlY2stbWFya3ttYXJnaW4tdG9wOjE4cHg7cG9zaXRpb246cmVsYXRpdmV9LnNlYXJjaC1iYXIgaW5wdXR7d2lkdGg6MTAwJX0uZXhwb3tmbG9hdDpyaWdodH0uY2hlY2tib3gtZG93bmJveHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206LTIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjhweDt3aWR0aDoxMzElO3otaW5kZXg6OX0udHh0U2VhcmNoVGlja2V0e2Zsb2F0OnJpZ2h0O21hcmdpbi10b3A6MTBweDtsaW5lLWhlaWdodDoyNXB4IWltcG9ydGFudDtwYWRkaW5nOjRweCAyNHB4O3dpZHRoOjMwJTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZWFlYWVhfS5kcm9wZG93bi1tZW51LnNob3d7bWFyZ2luLWxlZnQ6LTEwNXB4fS5teUNPbHNwe2NvbG9yOiMwMDA7Zm9udC1zaXplOjIxcHg7Zm9udC13ZWlnaHQ6NjAwfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerDefectTicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './customer-defect-ticket.component.html',
                styleUrls: ['../../customers/customer-add/customer-add.component.css'],
            }]
    }], function () { return [{ type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_4__["UserlogService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"] }, { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"] }, { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_8__["PropertyService"] }, { type: src_app_services_report_service__WEBPACK_IMPORTED_MODULE_9__["ReportService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] }, { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_12__["NgxImageCompressService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }]; }, { modalAttachment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalAttachment', { static: true }]
        }] }); })();


/***/ }),

/***/ "Jiy+":
/*!********************************************!*\
  !*** ./src/app/services/userlog.module.ts ***!
  \********************************************/
/*! exports provided: UserLog, LogParam, TicketTimeSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLog", function() { return UserLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogParam", function() { return LogParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketTimeSheet", function() { return TicketTimeSheet; });
class UserLog {
}
class LogParam {
}
class TicketTimeSheet {
}


/***/ }),

/***/ "WhPU":
/*!*************************************************************************************!*\
  !*** ./src/app/application/customer/customer-profile/customer-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerProfileComponent", function() { return CustomerProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/DocumentUpload.service */ "nXz1");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/property.service */ "Pffd");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "7itd");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "pxUr");















function CustomerProfileComponent_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 53);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "", ctx_r0.service.formData.NameTitle, " ", ctx_r0.service.formData.FirstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", ctx_r0.service.formData.NameTitle, " ", ctx_r0.service.formData.FirstName, "");
} }
function CustomerProfileComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.service.formData.CustomerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "", ctx_r1.service.formData.NameTitle, " ", ctx_r1.service.formData.FirstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", ctx_r1.service.formData.NameTitle, " ", ctx_r1.service.formData.FirstName, "");
} }
function CustomerProfileComponent_div_73_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 79);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r4.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerProfileComponent_div_73_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.service.formData.CustomerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerProfileComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Customer Info: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Profile Picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CustomerProfileComponent_div_73_img_15_Template, 1, 1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CustomerProfileComponent_div_73_div_16_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 68, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomerProfileComponent_div_73_Template_input_change_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.picked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerProfileComponent_div_73_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onsubmit("Profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.service.formData.CustomerLogo.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.service.formData.CustomerLogo.length > 0);
} }
function CustomerProfileComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address Info: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address Street 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAddressChange", function CustomerProfileComponent_div_74_Template_input_onAddressChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.handleAddressChange($event); })("ngModelChange", function CustomerProfileComponent_div_74_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.service.formData.AddressStreet1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Address Street 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 84, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerProfileComponent_div_74_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.service.formData.AddressStreet2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address Unit No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 86, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerProfileComponent_div_74_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.service.formData.AddressUnitNo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Postal Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerProfileComponent_div_74_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.service.formData.AddressZipCode = $event; })("keyup", function CustomerProfileComponent_div_74_Template_input_keyup_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.findAddressByPostalCode(ctx_r21.service.formData.AddressZipCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 90, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerProfileComponent_div_74_Template_select_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.service.formData.AddressCountry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Select Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Singapore ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "agm-map", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "agm-marker", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.options)("ngModel", ctx_r3.service.formData.AddressStreet1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.service.formData.AddressStreet2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.service.formData.AddressUnitNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.service.formData.AddressZipCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.service.formData.AddressCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r3.lat)("longitude", ctx_r3.lng)("zoom", ctx_r3.zoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r3.lat)("longitude", ctx_r3.lng);
} }
class CustomerProfileComponent {
    constructor(titleService, logService, docservice, loginservice, propertyservice, service, toastr) {
        this.titleService = titleService;
        this.logService = logService;
        this.docservice = docservice;
        this.loginservice = loginservice;
        this.propertyservice = propertyservice;
        this.service = service;
        this.toastr = toastr;
        this.tabshow = 'Profile';
        this.isValid = true;
        this.isNameValid = true;
        this.isMobileValid = true;
        this.isValidChangePassword = true;
        this.isValidOldChangePassword = true;
        this.isValidNewChangePassword = true;
        this.isValidConfirmChangePassword = true;
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
        this.loader = true;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    ngOnInit() {
        this.service.getCustomerByIdSync(this.currentUser.Token, this.currentUser.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.service.formData = response.result;
                }
            }
        }, error => console.log(error));
        this.titleService.setTitle('Customer Profile | Genic Solution');
        setTimeout(() => {
            this.backgroundurl = this.localPrependUrl + '/' + this.service.formData.CustomerLogo;
            if (this.service.formData.Latitude.length > 0) {
                this.lat = Number(this.service.formData.Latitude);
                this.lng = Number(this.service.formData.Longitude);
            }
        }, 1000);
        this.service.formData.AddressCountry = 'Singapore';
    }
    OnTabClick(s) {
        this.tabshow = s;
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
    /// End
    onStrengthChanged(strength) {
        //console.log('password strength = ', strength);
    }
    onsubmit(t) {
    }
    onPasswordStrengShow() {
        if (this.showDetails) {
            this.showDetails = false;
        }
        else {
            this.showDetails = true;
        }
    }
    handleAddressChange(address) {
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
                    this.administrative_area_level_1 = element.long_name;
                    break;
                }
                case 'administrative_area_level_2': {
                    this.administrative_area_level_2 = element.long_name;
                    break;
                }
                case 'locality': {
                    this.locality = element.long_name;
                    break;
                }
                case 'sublocality_level_1': {
                    this.sublocality_level_1 = element.long_name;
                    break;
                }
                case 'sublocality_level_2': {
                    this.sublocality_level_2 = element.long_name;
                    break;
                }
                case 'sublocality_level_3': {
                    this.sublocality_level_3 = element.long_name;
                    break;
                }
                case 'neighborhood': {
                    this.neighborhood = element.long_name;
                    break;
                }
                case 'route': {
                    this.route = element.long_name;
                    break;
                }
                case 'street_number': {
                    this.street_number = element.long_name;
                    break;
                }
            }
        });
        this.service.formData.Latitude = this.lat.toString();
        this.service.formData.Longitude = this.lng.toString();
        this.service.formData.AddressStreet1 = this.street_number;
        this.service.formData.AddressStreet2 = +' ' + this.route;
        this.service.formData.AddressCity = this.sublocality_level_3 + ' ' +
            this.sublocality_level_2 + ' ' +
            this.sublocality_level_1 + ' ' + this.neighborhood;
        this.service.formData.AddressState = this.administrative_area_level_1 + ' ' + this.administrative_area_level_2 + ' ' + this.locality;
        this.service.formData.AddressZipCode = this.postal_code;
        this.service.formData.AddressCountry = this.country;
    }
    findAddressByPostalCode(pc) {
        if (pc.toLocaleString().length === 6) {
            let Unformataddress = this.propertyservice.getAddressUsingPostalCode(Number(pc));
            setTimeout(() => {
                this.service.formData.Latitude = this.lat.toString();
                this.service.formData.Longitude = this.lng.toString();
                this.service.formData.AddressCity = this.neighborhood;
                this.service.formData.AddressState = this.administrative_area_level_1 + ' ' +
                    this.administrative_area_level_2 + ' ' +
                    this.locality;
                this.service.formData.AddressZipCode = this.postal_code;
                this.service.formData.AddressCountry = this.country;
            }, 1000);
        }
    }
}
CustomerProfileComponent.ɵfac = function CustomerProfileComponent_Factory(t) { return new (t || CustomerProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_3__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_4__["DocumentUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_6__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
CustomerProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerProfileComponent, selectors: [["app-customer-profile"]], decls: 75, vars: 12, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/customer/customer-dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], [1, "kt-grid", "kt-grid--desktop", "kt-grid--ver", "kt-grid--ver-desktop", "kt-app"], ["id", "kt_user_profile_aside_close", 1, "kt-app__aside-close"], [1, "la", "la-close"], ["type", "hidden", "name", "Id", 3, "value"], ["type", "hidden", "name", "Latitude", 3, "value"], ["type", "hidden", "name", "Longitude", 3, "value"], ["id", "kt_user_profile_aside", 1, "kt-grid__item", "kt-app__toggle", "kt-app__aside"], [1, "kt-portlet"], [1, "kt-portlet__body", "kt-portlet__body--fit-y"], [1, "kt-widget", "kt-widget--user-profile-1"], [1, "kt-widget__head", 2, "padding-top", "10px"], [1, "kt-widget__media"], [3, "src", "alt", "title", 4, "ngIf"], ["class", "upload-image", 4, "ngIf"], [1, "kt-widget__content"], [1, "kt-widget__section"], ["href", "javascript:;", 1, "kt-widget__username"], [1, "flaticon2-correct", "kt-font-success"], [1, "kt-widget__subtitle"], [1, "kt-widget__body"], [1, "kt-widget__info"], [1, "kt-widget__label"], ["href", "javascript:;", 1, "kt-widget__data"], [1, "kt-widget__items"], ["href", "#PersonalInformation", "data-toggle", "tab", 1, "kt-widget__item", "active", 3, "click"], [1, "kt-widget__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Shape", "points", "0 0 24 0 24 24 0 24"], ["d", "M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z", "id", "Mask", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], ["d", "M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z", "id", "Mask-Copy", "fill", "#000000", "fill-rule", "nonzero"], [1, "kt-widget__desc"], ["href", "#Emergency", "data-toggle", "tab", 1, "kt-widget__item", 3, "click"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z", "id", "Path-50", "fill", "#000000", "opacity", "0.3"], ["d", "M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z", "id", "Mask", "fill", "#000000", "opacity", "0.3"], ["d", "M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z", "id", "Mask-Copy", "fill", "#000000", "opacity", "0.3"], [1, "kt-grid__item", "kt-grid__item--fluid", "kt-app__content"], [1, "row"], [1, "col-xl-12"], [1, "tab-content"], ["class", "kt-portlet ", 4, "ngIf"], [3, "src", "alt", "title"], [1, "upload-image"], [1, "kt-form", "kt-form--label-right"], [1, "kt-portlet__body"], [1, "kt-section", "kt-section--first"], [1, "kt-section__body"], [1, "col-xl-3"], [1, "col-lg-9", "col-xl-6"], [1, "kt-section__title", "kt-section__title-sm"], [1, "form-group", "row"], [1, "col-xl-3", "col-lg-3", "col-form-label"], ["id", "kt_apps_user_add_avatar", 1, "kt-avatar", "kt-avatar--outline", "kt-avatar--circle"], ["class", "kt-avatar__holder", 3, "src", 4, "ngIf"], ["data-toggle", "kt-tooltip", "title", "", "data-original-title", "Change avatar", 1, "kt-avatar__upload"], [1, "fa", "fa-pen"], ["type", "file", "name", "profile_avatar", "accept", ".png, .jpg, .jpeg", 3, "change"], ["File", ""], ["data-toggle", "kt-tooltip", "title", "", "data-original-title", "Cancel avatar", 1, "kt-avatar__cancel"], [1, "fa", "fa-times"], [1, "col-xl-12", "no-spacing"], [1, "kt-portlet__foot", 2, "display", "none"], [1, "kt-form__actions"], [1, "col-lg-3", "col-xl-3"], [1, "col-lg-9", "col-xl-9"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-secondary"], [1, "kt-avatar__holder", 3, "src"], [1, "col-lg-12"], ["for", ""], ["name", "AddressStreet1", "ngx-google-places-autocomplete", "", "placeholder", "Street 1 (search by street name/route)", "disabled", "", 1, "form-control", 3, "options", "ngModel", "onAddressChange", "ngModelChange"], ["AddressStreet1", "ngModel"], ["name", "AddressStreet2", "placeholder", "Street 2", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressStreet2", "ngModel"], ["name", "AddressUnitNo", "placeholder", "Address Unit No", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressUnitNo", "ngModel"], ["name", "AddressZipCode", "placeholder", "Postal Code (search by postal code)", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["AddressZipCode", "ngModel"], ["name", "AddressCountry", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressCountry", "ngModel"], ["value", "0"], ["value", "Singapore"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude"], ["type", "button", 1, "btn", "btn-success"]], template: function CustomerProfileComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CustomerProfileComponent_img_25_Template, 1, 5, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CustomerProfileComponent_div_26_Template, 2, 5, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerProfileComponent_Template_a_click_48_listener() { return ctx.OnTabClick("Profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "polygon", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Personal Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerProfileComponent_Template_a_click_58_listener() { return ctx.OnTabClick("Address"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "rect", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, CustomerProfileComponent_div_73_Template, 35, 2, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, CustomerProfileComponent_div_74_Template, 58, 11, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Latitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.service.formData.Longitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.CustomerLogo.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.CustomerLogo.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.service.formData.NameTitle, " ", ctx.service.formData.FirstName, " ", ctx.service.formData.LastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.formData.ArrayofKeys[0].Value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.formData.ArrayofKeys[1].Value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabshow === "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabshow === "Address");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmMarker"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-profile',
                templateUrl: './customer-profile.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_3__["UserlogService"] }, { type: src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_4__["DocumentUploadService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_6__["PropertyService"] }, { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "YBa0":
/*!**********************************************************************************************************!*\
  !*** ./src/app/application/customer/customer-quote/customer-quote-list/customer-quote-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CustomerQuoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerQuoteListComponent", function() { return CustomerQuoteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ngb-date-to-string-adapter */ "x8Rg");
/* harmony import */ var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/ngb-time-to-string-adapter */ "dRK5");
/* harmony import */ var src_app_services_genicprofile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/genicprofile.module */ "9u/L");
/* harmony import */ var src_app_services_quote_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/quote.module */ "xcKa");
/* harmony import */ var _customer_quote_status_popup_customer_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../customer-quote-status-popup/customer-quote-status-popup.component */ "trZU");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/quote.service */ "uOqW");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/property.service */ "Pffd");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/invoice.service */ "py7r");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/downloads.service */ "iHRC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _generic_utils_Quote_Status_Component_QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../generic-utils/Quote-Status-Component/QuoteStatusComponent.component */ "sVpj");



























function CustomerQuoteListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 53);
} }
function CustomerQuoteListComponent_tr_117_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r2.InvoiceNo);
} }
function CustomerQuoteListComponent_tr_117_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerQuoteListComponent_tr_117_span_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const q_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.viewTicketDetails(q_r2.TicketId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r2.TicketNo);
} }
function CustomerQuoteListComponent_tr_117_li_48_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerQuoteListComponent_tr_117_li_48_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const q_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.populateStatusPopup(q_r2, q_r2.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerQuoteListComponent_tr_117_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerQuoteListComponent_tr_117_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const q_r2 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.getQuoteDetails(q_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomerQuoteListComponent_tr_117_span_6_Template, 3, 1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerQuoteListComponent_tr_117_span_7_Template, 3, 1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Company: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sub Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Discount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tax: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Net Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "generic-quote-status", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function CustomerQuoteListComponent_tr_117_Template_generic_quote_status_StatusChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const q_r2 = ctx.$implicit; return q_r2.Status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerQuoteListComponent_tr_117_Template_a_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const q_r2 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.getQuoteDetails(q_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CustomerQuoteListComponent_tr_117_li_48_Template, 3, 0, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r2.QuoteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", q_r2.InvoiceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", q_r2.TicketNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, q_r2.CreatedUtcDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r2.JobTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r2.CustomerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r2.CompanyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r2.SubTotal.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r2.DiscountAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r2.TaxAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r2.NetAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", q_r2.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", q_r2.Status === 2);
} }
class CustomerQuoteListComponent {
    constructor(titleService, quoteService, customerservice, dialog, router, logService, loginservice, propertyService, ticketService, invoiceService, genicprofileservice, downloadService) {
        this.titleService = titleService;
        this.quoteService = quoteService;
        this.customerservice = customerservice;
        this.dialog = dialog;
        this.router = router;
        this.logService = logService;
        this.loginservice = loginservice;
        this.propertyService = propertyService;
        this.ticketService = ticketService;
        this.invoiceService = invoiceService;
        this.genicprofileservice = genicprofileservice;
        this.downloadService = downloadService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.temptQuoteStatus = 0;
        this.tempQuoteId = '';
        this.isDtInitialized = false;
        this.CustomerdropdownList = [];
        this.CustomerselectedItems = [];
        this.CustomerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Customers' };
        this.StatusdropdownList = [];
        this.StatusselectedItems = [];
        this.StatusdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Status' };
        this.DepartmentdropdownList = [];
        this.DepartmentselectedItems = [];
        this.DepartmentdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Group' };
        this.QuoteSummary = new src_app_services_quote_module__WEBPACK_IMPORTED_MODULE_9__["QuoteSummary"]();
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.TotalQuotation = 0;
        this.AcceptedQuotation = 0;
        this.PendingQuotation = 0;
        this.RejectedQuotation = 0;
        this.CancelledQuotation = 0;
    }
    ngOnInit() {
        if (this.currentUser.Type === 'Customer') {
            this.genicprofileservice.TicketFilter.IsReady = false;
            this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
            this.OnDateSearchLoading = false;
            this.dtOptions = { pagingType: 'full_numbers', paging: true, order: [0], lengthMenu: [5, 10, 25, 50, 75, 100] };
            if (!this.genicprofileservice.TicketFilter.IsReadyQuote) {
                this.distroyAndReloadTable();
            }
            this.customerservice.getCustomerListSync(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    const custList = response.result;
                    custList.forEach(w => {
                        this.CustomerdropdownList.push({ Id: w.Id, Name: w.CompanyName, IsAssigned: false });
                        this.genicprofileservice.TicketFilter.CustomerId.forEach(el => {
                            if (w.Id === el) {
                                this.CustomerselectedItems.push({ Id: w.Id, Name: w.CompanyName, IsAssigned: true });
                            }
                        });
                    });
                }
            }, error => console.log(error));
            this.StatusdropdownList = [
                { Id: 1, Name: 'Draft' },
                { Id: 2, Name: 'Sent' },
                { Id: 3, Name: 'Accepted' },
                { Id: 4, Name: 'Rejected' },
                { Id: 5, Name: 'Cancelled' }
            ];
            if (this.genicprofileservice.TicketFilter.IsReadyQuote) {
                this.StatusdropdownList.forEach(w => {
                    this.genicprofileservice.TicketFilter.Status.forEach(el => {
                        if (w.item_id === el) {
                            this.StatusselectedItems.push({ item_id: w.item_id, item_text: w.item_text });
                        }
                    });
                });
            }
            if (this.genicprofileservice.TicketFilter.IsReadyQuote) {
                this.distroyAndReloadFilterTable();
                this.genicprofileservice.TicketFilter.IsReadyQuote = false;
                setTimeout(() => {
                    this.genicprofileservice.TicketFilter.IsReadyQuote = true;
                }, 1000);
            }
            this.titleService.setTitle('Quotations | Genic Solution');
        }
        else {
            this.router.navigate(['/auth']);
        }
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    getQuoteDetails(q) {
        this.quoteService.QuoteData = q;
        this.propertyService.getPropertyData(q.PropertyId);
        this.router.navigate(['/customer/customer-quote-Details']);
    }
    populateStatusPopup(q, Id) {
        this.quoteService.QuoteData = q;
        const dialogCon = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogCon.autoFocus = true;
        dialogCon.width = '600px';
        this.dialog.open(_customer_quote_status_popup_customer_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_10__["CustomerQuoteStatusPopupComponent"], dialogCon).afterClosed().subscribe(res => {
            if (res !== undefined) {
                this.quoteService.UpdateQuoteStatus(Id, res.Status, this.currentUser.Token).subscribe(res2 => {
                    if (res) {
                        const response = res2;
                        if (response.Message === 'success') {
                            this.postQuoteStatusUserLog(res.Status);
                            this.distroyAndReloadTable();
                        }
                        if (response.Message === 'failure') {
                        }
                    }
                }, error => console.log(error));
            }
            else {
                return false;
            }
        });
    }
    // post user log on quote status change
    postQuoteStatusUserLog(Status) {
        if (Status === 1) {
            this.StatusType = 'Draft';
        }
        else if (Status === 2) {
            this.StatusType = 'Sent';
        }
        else if (Status === 3) {
            this.StatusType = 'Accepted';
        }
        else if (Status === 4) {
            this.StatusType = 'Rejected';
        }
        else if (Status === 5) {
            this.StatusType = 'Cancellled';
        }
        const des = 'Status change of Quotation No ' + this.quoteService.QuoteData.QuoteId + ' is as ' +
            this.StatusType + ' by ' + this.currentUser.UserName + ' for Customer ' + this.quoteService.QuoteData.CustomerName;
        const Activity = 'Status mark as : ' + this.StatusType + ' changed of  Quotation No : ' + this.quoteService.QuoteData.QuoteId +
            ' on mail id : ' + this.quoteService.QuoteData.CustomerEmail;
        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation', this.quoteService.QuoteData.Id, 'Modify', des, Activity).subscribe();
    }
    exportAsXLSX() {
        this.downloadService.downloadFromServer('quotation', this.currentUser.Token).then(blob => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, 'quotation_' + new Date().getTime() + '.xlsx');
        });
    }
    viewTicketDetails(Id) {
        this.ticketService.getTicketById(this.currentUser.Token, Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.ticketService.formData = response.result;
                    this.router.navigate(['/customer/customer-tickets/custoner-ticket-view-details']);
                }
            }
        }, error => console.log(error));
    }
    viewInvoiceDetails(Id) {
        this.invoiceService.refreshInvoiceBtId(Id).subscribe(res => {
            if (res) {
                this.invoiceService.InvoiceData = res;
                this.router.navigate(['/invoices/invoice-details']);
            }
        }, error => console.log(error));
    }
    morefilters() {
        if (this.genicprofileservice.TicketFilter.IsReadyQuote) {
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.distroyAndReloadTable();
        }
        else {
            this.genicprofileservice.TicketFilter = new src_app_services_genicprofile_module__WEBPACK_IMPORTED_MODULE_8__["TicketFilter"]();
            this.CustomerselectedItems = [];
            this.StatusselectedItems = [];
            this.genicprofileservice.TicketFilter.IsReadyQuote = true;
        }
    }
    /// Custimer
    onCustomerItemSelect(e) {
        this.genicprofileservice.TicketFilter.CustomerId = [];
        e.value.forEach(element => {
            this.genicprofileservice.TicketFilter.CustomerId.push(element.Id);
        });
    }
    /// Engineers
    onEngineerItemSelect(e) {
        this.genicprofileservice.TicketFilter.EngineerId = [];
        e.value.forEach(element => {
            this.genicprofileservice.TicketFilter.EngineerId.push(element.Id);
        });
    }
    onStatusItemSelect(e) {
        this.genicprofileservice.TicketFilter.Status = [];
        e.value.forEach(element => {
            this.genicprofileservice.TicketFilter.Status.push(element.Id);
        });
    }
    /// Department
    onDepartmentItemSelect(e) {
        this.genicprofileservice.TicketFilter.DepartmentId = [];
        e.value.forEach(element => {
            this.genicprofileservice.TicketFilter.DepartmentId.push(element.Id);
        });
    }
    onDateChange() {
        this.OnDateSearchLoading = true;
        this.distroyAndReloadFilterTable();
        setTimeout(() => {
            this.OnDateSearchLoading = false;
        }, 100);
    }
    distroyAndReloadTable() {
        this.quoteService.getrefrestQuoteListSync(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.quoteService.QuoteLocalList = response.result;
                    if (this.isDtInitialized) {
                        this.dtElement.dtInstance.then((dtInstance) => {
                            dtInstance.destroy();
                            this.dtTrigger.next();
                        });
                    }
                    else {
                        this.isDtInitialized = true;
                        this.dtTrigger.next();
                    }
                    this.Totalcount();
                }
            }
        }, error => console.log(error));
    }
    distroyAndReloadFilterTable() {
        this.genicprofileservice.getFilterQuotationListSync(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.quoteService.QuoteLocalList = response.result;
                    if (this.isDtInitialized) {
                        this.dtElement.dtInstance.then((dtInstance) => {
                            dtInstance.destroy();
                            this.dtTrigger.next();
                        });
                    }
                    else {
                        this.isDtInitialized = true;
                        this.dtTrigger.next();
                    }
                    this.Totalcount();
                }
            }
        }, error => console.log(error));
    }
    Totalcount() {
        setTimeout(() => {
            this.TotalQuotation = this.quoteService.QuoteLocalList.length;
            this.PendingQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 2).length;
            this.AcceptedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 3).length;
            this.RejectedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 4).length;
            this.CancelledQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 5).length;
        }, 500);
    }
}
CustomerQuoteListComponent.ɵfac = function CustomerQuoteListComponent_Factory(t) { return new (t || CustomerQuoteListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_12__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_13__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_15__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_16__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_17__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_18__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_19__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_20__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_21__["DownloadService"])); };
CustomerQuoteListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerQuoteListComponent, selectors: [["app-quote-list"]], viewQuery: function CustomerQuoteListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbDateToStringAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_7__["NgbTimeToStringAdapter"] },
        ])], decls: 118, vars: 8, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid", "breadcud-kt-container"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], ["class", "kt-subheader__wrapper", 4, "ngIf"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "row", "mrg-top-10"], [1, "col-lg-3"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--brand", "kt-iconbox--animate-slower"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["id", "\u201C", "fill", "#000000", "transform", "translate(16.500000, 12.500000) rotate(-180.000000) translate(-16.500000, -12.500000) ", "points", "19 7 17 13 19 13 19 18 14 18 14 13 16 7"], ["id", "Path", "fill", "#000000", "opacity", "0.3", "transform", "translate(8.500000, 12.500000) rotate(-180.000000) translate(-8.500000, -12.500000) ", "points", "11 7 9 13 11 13 11 18 6 18 6 13 8 7"], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], ["href", "javascript:;", 1, "kt-link"], [1, "kt-iconbox__content"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--success", "kt-iconbox--animate-slow"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--warning", "kt-iconbox--animate-fast"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--danger", "kt-iconbox--animate-faster"], [1, "kt-section", "kt-drop-section"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "kt_table_1_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "row"], [1, "col-sm-12"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "scFilter"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", "dataTable", "no-footer", "dtr-inline", 3, "dtOptions", "dtTrigger"], [2, "width", "5%"], [2, "width", "10%"], [2, "width", "15%"], [2, "width", "30%"], [2, "width", "25%"], ["class", "quote-list-view-info odd", 4, "ngFor", "ngForAsync", "ngForOf"], [1, "kt-subheader__wrapper"], [1, "quote-list-view-info", "odd"], [1, "btn", "btn-label-primary"], ["href", "javascript:;", 3, "click"], ["class", "btn btn-label-danger btn-pill invoices-btn", 4, "ngIf"], [3, "Status", "StatusChange"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "border", "#1dc9b7"], [1, "caret"], [1, "dropdown-menu"], [4, "ngIf"], [1, "btn", "btn-label-danger", "btn-pill", "invoices-btn"], ["href", "javascript:void(0);", 3, "click"]], template: function CustomerQuoteListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Quotations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomerQuoteListComponent_div_13_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "polygon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "polygon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Total Quotations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "polygon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "polygon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Accepted Quotations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "polygon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "polygon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Pending Quotations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "polygon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "polygon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Rejected Quotations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Quotation List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerQuoteListComponent_Template_a_click_95_listener() { return ctx.exportAsXLSX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Export to Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "table", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Quotation\u00A0No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Customer Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, CustomerQuoteListComponent_tr_117_Template, 49, 15, "tr", 52);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.QuoteCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalQuotation, " Total Quotations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.AcceptedQuotation, " Accepted Quotations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.PendingQuotation, " Pending Quotations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.RejectedQuotation, " Rejected Quotations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteService.QuoteLocalList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _generic_utils_Quote_Status_Component_QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_23__["QuoteStatusComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"]], styles: [".QuoteAddSection[_ngcontent-%COMP%]{text-align: right;}\r\n.QuoteAddSection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height: 36px; margin-right: 4px; padding: 0 7px;border-radius: 22px; border: 1px solid gray;}\r\n.QuoteAddSection[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#FF8533;border-color:transparent;}\r\n.QuoteAddSection[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:focus, .QuoteAddSection[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover{background-color:#c3e7fa;color:#0084CA;}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-top: 3px solid #ff8533;padding-left:0px;padding-right: 0px;background-color:white !important;}\r\n.quote-detail-1-body[_ngcontent-%COMP%]{border-bottom:3px solid #f2f2f2;margin:0 15px 15px;}\r\n.new-requst-filter_form[_ngcontent-%COMP%]   h3.kt-section__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#22376c;}\r\n.customer-quote-details[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:15px;}\r\n.kt-widget4__title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;}\r\n.kt-portlet[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]   .kt-portlet__head-toolbar[_ngcontent-%COMP%]{font-size:14px;color:black;}\r\n.col-md-12.new-request-service-details-form[_ngcontent-%COMP%]{border:none;}\r\n.kt-portlet__head[_ngcontent-%COMP%]{padding:0px 0px !important;}\r\n.add-data-ticket-list-view[_ngcontent-%COMP%]{padding-top:0px !important;margin-top:0px !important;}\r\n.kt-portlet__body[_ngcontent-%COMP%]{padding:0px !important;}\r\n.kt-portlet-body-1[_ngcontent-%COMP%]{width:100%}\r\n.quote-row[_ngcontent-%COMP%]{padding: 10px;background: #eaeaea;margin: 0;}\r\n.add-invoicing-view-list-border[_ngcontent-%COMP%]{border-bottom:none;}\r\n.kt-widget1[_ngcontent-%COMP%]{padding:10px;}\r\n.kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{ padding: 0.7rem 0 !important;}\r\n.title-deposite[_ngcontent-%COMP%]{margin-bottom:0px;font-size:18px !important;font-weight:600 !important;}\r\n.invoicing-list-view-border-left[_ngcontent-%COMP%]   span.kt-widget1__number.kt-font-danger[_ngcontent-%COMP%]{font-size:18px !important;font-weight:600 !important;}\r\n.kt-widget4__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px !important;color:black !important;}\r\n.myshap[_ngcontent-%COMP%]{margin-bottom: 0px !important;}\r\n#kt_repeater_1[_ngcontent-%COMP%]   .row.col-md-12[_ngcontent-%COMP%]{margin-top:15px;}\r\n.kt-portlet__head[_ngcontent-%COMP%]{padding: 0px 15px !important;}\r\n.quote-top-right[_ngcontent-%COMP%]{text-align:right;}\r\n.quote-view-top[_ngcontent-%COMP%]{padding:0px 20px;}\r\n.quote-1-top[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;font-weight:600;margin-bottom:15px;color:black}\r\n.quote-1-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: 16px;color: black;margin-top: 15px;font-weight: 600;}\r\n.table-quote[_ngcontent-%COMP%]{margin-top:25px}\r\n.table-quote[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:16px;}\r\n.table-quote[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0px;margin-top:5px !important;}\r\n.table-quote[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:normal;}\r\n.quote-right-view[_ngcontent-%COMP%]{margin-top:62px;}\r\n.quote-right-view[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;font-weight:600;color:black;margin-bottom:15px;text-align:right;}\r\n.quote-right-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:16px;}\r\n.quote-right-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:50%;}\r\n.quote-view-top[_ngcontent-%COMP%]{border-bottom: 3px solid #f1f1f1;}\r\n.quote-edit-request[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:20px !important;}\r\n.quote-edit-request[_ngcontent-%COMP%]   .kt-section__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600;color:black;font-size:30px;}\r\n.quote-edit-request[_ngcontent-%COMP%]   .kt-section__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:black;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\n.dispaly-4[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    width: 100%;\r\n    margin: 0 0 24px 0;\r\n}\r\n.form-row[_ngcontent-%COMP%]{\r\n    margin: 0 auto !important;\r\n}\r\n.form-group[_ngcontent-%COMP%]{\r\n    margin: 0 auto !important;\r\n}\r\n\r\n.btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vY3VzdG9tZXIvY3VzdG9tZXItcXVvdGUvY3VzdG9tZXItcXVvdGUtbGlzdC9jdXN0b21lci1xdW90ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLGlCQUFpQixDQUFDO0FBQ25DLHVCQUF1QixZQUFZLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDO0FBQ25ILGtDQUFrQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQztBQUNwRixpRkFBaUYsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQ3hILHNDQUFzQyw2QkFBNkIsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxpQ0FBaUMsQ0FBQztBQUMxSSxxQkFBcUIsK0JBQStCLENBQUMsa0JBQWtCLENBQUM7QUFDeEUsK0NBQStDLGFBQWEsQ0FBQztBQUM3RCxxQ0FBcUMsY0FBYyxDQUFDO0FBQ3BELG1CQUFtQixjQUFjLENBQUMsZUFBZSxDQUFDO0FBQ2xELHdEQUF3RCxjQUFjLENBQUMsV0FBVyxDQUFDO0FBQ25GLDRDQUE0QyxXQUFXLENBQUM7QUFDeEQsa0JBQWtCLDBCQUEwQixDQUFDO0FBQzdDLDJCQUEyQiwwQkFBMEIsQ0FBQyx5QkFBeUIsQ0FBQztBQUNoRixrQkFBa0Isc0JBQXNCLENBQUM7QUFDekMsbUJBQW1CLFVBQVU7QUFDN0IsV0FBVyxhQUFhLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO0FBQ3ZELGdDQUFnQyxrQkFBa0IsQ0FBQztBQUNuRCxZQUFZLFlBQVksQ0FBQztBQUN6QiwrQkFBK0IsNEJBQTRCLENBQUM7QUFDNUQsZ0JBQWdCLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLDBCQUEwQixDQUFDO0FBQ3ZGLHdFQUF3RSx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBQztBQUM3SCxvQkFBb0IseUJBQXlCLENBQUMsc0JBQXNCLENBQUM7QUFDckUsUUFBUSw2QkFBNkIsQ0FBQztBQUN0Qyw4QkFBOEIsZUFBZSxDQUFDO0FBQzlDLGtCQUFrQiw0QkFBNEIsQ0FBQztBQUMvQyxpQkFBaUIsZ0JBQWdCLENBQUM7QUFDbEMsZ0JBQWdCLGdCQUFnQixDQUFDO0FBQ2pDLGdCQUFnQixjQUFjLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFdBQVc7QUFDN0UsZUFBZSxlQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0FBQzlFLGFBQWEsZUFBZTtBQUM1QixzQkFBc0IsY0FBYyxDQUFDO0FBQ3JDLHdCQUF3QixpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQztBQUNwRSw2QkFBNkIsa0JBQWtCLENBQUM7QUFDaEQsa0JBQWtCLGVBQWUsQ0FBQztBQUNsQyxxQkFBcUIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7QUFDcEcsMkJBQTJCLGNBQWMsQ0FBQztBQUMxQyw4QkFBOEIsU0FBUyxDQUFDO0FBQ3hDLGdCQUFnQixnQ0FBZ0MsQ0FBQztBQUNqRCxvQkFBb0Isd0JBQXdCLENBQUMsdUJBQXVCLENBQUM7QUFDckUseUNBQXlDLGVBQWUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ3BGLDhDQUE4QyxXQUFXLENBQUM7QUFDMUQscUJBQXFCLG1CQUFtQixDQUFDO0FBQ3pDO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7OzZIQUU2SDtBQUM3SCxXQUFXLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vY3VzdG9tZXIvY3VzdG9tZXItcXVvdGUvY3VzdG9tZXItcXVvdGUtbGlzdC9jdXN0b21lci1xdW90ZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUXVvdGVBZGRTZWN0aW9ue3RleHQtYWxpZ246IHJpZ2h0O31cclxuLlF1b3RlQWRkU2VjdGlvbiBpbnB1dHtoZWlnaHQ6IDM2cHg7IG1hcmdpbi1yaWdodDogNHB4OyBwYWRkaW5nOiAwIDdweDtib3JkZXItcmFkaXVzOiAyMnB4OyBib3JkZXI6IDFweCBzb2xpZCBncmF5O31cclxuLlF1b3RlQWRkU2VjdGlvbiAuYnRuLmJ0bi1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6I0ZGODUzMztib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7fVxyXG4uUXVvdGVBZGRTZWN0aW9uIC5idG4uYnRuLXByaW1hcnk6Zm9jdXMsIC5RdW90ZUFkZFNlY3Rpb24gLmJ0bi5idG4tcHJpbWFyeTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmE7Y29sb3I6IzAwODRDQTt9XHJcbi5jb2wtbWQtMTIuc2VjdGlvbi1jbGllbnQtcmVxdXN0LWZvcm17Ym9yZGVyLXRvcDogM3B4IHNvbGlkICNmZjg1MzM7cGFkZGluZy1sZWZ0OjBweDtwYWRkaW5nLXJpZ2h0OiAwcHg7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZSAhaW1wb3J0YW50O31cclxuLnF1b3RlLWRldGFpbC0xLWJvZHl7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgI2YyZjJmMjttYXJnaW46MCAxNXB4IDE1cHg7fVxyXG4ubmV3LXJlcXVzdC1maWx0ZXJfZm9ybSBoMy5rdC1zZWN0aW9uX190aXRsZSBwe2NvbG9yOiMyMjM3NmM7fVxyXG4uY3VzdG9tZXItcXVvdGUtZGV0YWlscyAudGFibGUgdHIgdGR7Zm9udC1zaXplOjE1cHg7fVxyXG4ua3Qtd2lkZ2V0NF9fdGl0bGV7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NjAwO31cclxuLmt0LXBvcnRsZXQgLmt0LXBvcnRsZXRfX2hlYWQgLmt0LXBvcnRsZXRfX2hlYWQtdG9vbGJhcntmb250LXNpemU6MTRweDtjb2xvcjpibGFjazt9XHJcbi5jb2wtbWQtMTIubmV3LXJlcXVlc3Qtc2VydmljZS1kZXRhaWxzLWZvcm17Ym9yZGVyOm5vbmU7fVxyXG4ua3QtcG9ydGxldF9faGVhZHtwYWRkaW5nOjBweCAwcHggIWltcG9ydGFudDt9XHJcbi5hZGQtZGF0YS10aWNrZXQtbGlzdC12aWV3e3BhZGRpbmctdG9wOjBweCAhaW1wb3J0YW50O21hcmdpbi10b3A6MHB4ICFpbXBvcnRhbnQ7fVxyXG4ua3QtcG9ydGxldF9fYm9keXtwYWRkaW5nOjBweCAhaW1wb3J0YW50O31cclxuLmt0LXBvcnRsZXQtYm9keS0xe3dpZHRoOjEwMCV9XHJcbi5xdW90ZS1yb3d7cGFkZGluZzogMTBweDtiYWNrZ3JvdW5kOiAjZWFlYWVhO21hcmdpbjogMDt9XHJcbi5hZGQtaW52b2ljaW5nLXZpZXctbGlzdC1ib3JkZXJ7Ym9yZGVyLWJvdHRvbTpub25lO31cclxuLmt0LXdpZGdldDF7cGFkZGluZzoxMHB4O30gXHJcbi5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVteyBwYWRkaW5nOiAwLjdyZW0gMCAhaW1wb3J0YW50O31cclxuLnRpdGxlLWRlcG9zaXRle21hcmdpbi1ib3R0b206MHB4O2ZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NjAwICFpbXBvcnRhbnQ7fVxyXG4uaW52b2ljaW5nLWxpc3Qtdmlldy1ib3JkZXItbGVmdCBzcGFuLmt0LXdpZGdldDFfX251bWJlci5rdC1mb250LWRhbmdlcntmb250LXNpemU6MThweCAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjYwMCAhaW1wb3J0YW50O31cclxuLmt0LXdpZGdldDRfX2l0ZW0gcHtmb250LXNpemU6MTZweCAhaW1wb3J0YW50O2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7fVxyXG4ubXlzaGFwe21hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O31cclxuI2t0X3JlcGVhdGVyXzEgLnJvdy5jb2wtbWQtMTJ7bWFyZ2luLXRvcDoxNXB4O31cclxuLmt0LXBvcnRsZXRfX2hlYWR7cGFkZGluZzogMHB4IDE1cHggIWltcG9ydGFudDt9XHJcbi5xdW90ZS10b3AtcmlnaHR7dGV4dC1hbGlnbjpyaWdodDt9XHJcbi5xdW90ZS12aWV3LXRvcHtwYWRkaW5nOjBweCAyMHB4O31cclxuLnF1b3RlLTEtdG9wIGgye2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjYwMDttYXJnaW4tYm90dG9tOjE1cHg7Y29sb3I6YmxhY2t9XHJcbi5xdW90ZS0xLXRvcCBwe2ZvbnQtc2l6ZTogMTZweDtjb2xvcjogYmxhY2s7bWFyZ2luLXRvcDogMTVweDtmb250LXdlaWdodDogNjAwO31cclxuLnRhYmxlLXF1b3Rle21hcmdpbi10b3A6MjVweH1cclxuLnRhYmxlLXF1b3RlIHRhYmxlIHRye2ZvbnQtc2l6ZToxNnB4O31cclxuLnRhYmxlLXF1b3RlIHRhYmxlIHRyIHB7bWFyZ2luLWJvdHRvbTowcHg7bWFyZ2luLXRvcDo1cHggIWltcG9ydGFudDt9XHJcbi50YWJsZS1xdW90ZSB0YWJsZSB0ciBwIHNwYW57Zm9udC13ZWlnaHQ6bm9ybWFsO31cclxuLnF1b3RlLXJpZ2h0LXZpZXd7bWFyZ2luLXRvcDo2MnB4O31cclxuLnF1b3RlLXJpZ2h0LXZpZXcgaDJ7Zm9udC1zaXplOjIycHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOmJsYWNrO21hcmdpbi1ib3R0b206MTVweDt0ZXh0LWFsaWduOnJpZ2h0O31cclxuLnF1b3RlLXJpZ2h0LXZpZXcgdGFibGUgdHJ7Zm9udC1zaXplOjE2cHg7fVxyXG4ucXVvdGUtcmlnaHQtdmlldyB0YWJsZSB0ciB0ZHt3aWR0aDo1MCU7fVxyXG4ucXVvdGUtdmlldy10b3B7Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmMWYxZjE7fVxyXG4ucXVvdGUtZWRpdC1yZXF1ZXN0e2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTtwYWRkaW5nOjIwcHggIWltcG9ydGFudDt9XHJcbi5xdW90ZS1lZGl0LXJlcXVlc3QgLmt0LXNlY3Rpb25fX3RpdGxlIHB7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOmJsYWNrO2ZvbnQtc2l6ZTozMHB4O31cclxuLnF1b3RlLWVkaXQtcmVxdWVzdCAua3Qtc2VjdGlvbl9fdGl0bGUgcCBzcGFue2NvbG9yOmJsYWNrO31cclxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7bWFyZ2luLWxlZnQ6IC0xMDVweDt9XHJcbi5kaXNwYWx5LTR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwIDI0cHggMDtcclxufVxyXG4uZm9ybS1yb3d7XHJcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4vKiAuZmlsdGVyc3Ryb25nIHsgcGFkZGluZzogNHB4OyB9XHJcbi5maWx0ZXJzdHJvbmcgZGl2IHN0cm9uZyB7cGFkZGluZzogMTBweDsgZm9udC1zaXplOiAxLjJlbTtkaXNwbGF5OiBub25lO31cclxuICAuZmlsdGVyc3Ryb25nIGRpdiBpbnB1dCB7ICBib3JkZXI6IDJweCBzb2xpZCAjZDBkMGQzOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgYm9yZGVyLXJhZGl1czogMC4zZW07IGhlaWdodDogMzRweDt9ICovXHJcbi5idG4tYnJhbmR7YmFja2dyb3VuZC1jb2xvcjojZmY4NTMzO2JvcmRlci1jb2xvcjogI2ZmODUzMzt9Il19 */", ".QuoteAddSection[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .QuoteAddSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: right;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerQuoteListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-list',
                templateUrl: './customer-quote-list.component.html',
                styleUrls: ['./customer-quote-list.component.css'],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbDateToStringAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_7__["NgbTimeToStringAdapter"] },
                ],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"] }, { type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_12__["QuoteService"] }, { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_13__["CustomerService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_15__["UserlogService"] }, { type: src_app_services__WEBPACK_IMPORTED_MODULE_16__["AuthenticationService"] }, { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_17__["PropertyService"] }, { type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_18__["TicketService"] }, { type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_19__["InvoiceService"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_20__["GenicProfileService"] }, { type: src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_21__["DownloadService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "gGY5":
/*!*****************************************************************************************!*\
  !*** ./src/app/application/customer/customer-dashboard/customer-dashboard.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CustomerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDashboardComponent", function() { return CustomerDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dashboard.service */ "0AbP");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.component */ "Sh6L");
/* harmony import */ var _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.component */ "myuM");
/* harmony import */ var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */ "X7qY");
/* harmony import */ var _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Team-List/TicketTeamList.component */ "U6ah");
















function CustomerDashboardComponent_div_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDashboardComponent_table_198_tr_18_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r4.QuoteId, "");
} }
function CustomerDashboardComponent_table_198_tr_18_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDashboardComponent_table_198_tr_18_span_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const x_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.ViewTicketRefDetails(x_r4.InvoiceNo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r4.InvoiceNo, "");
} }
function CustomerDashboardComponent_table_198_tr_18_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recurring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDashboardComponent_table_198_tr_18_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UNALLOCATED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDashboardComponent_table_198_tr_18_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RESECHEDULED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDashboardComponent_table_198_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerDashboardComponent_table_198_tr_18_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.ViewTicket(x_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomerDashboardComponent_table_198_tr_18_span_6_Template, 4, 1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerDashboardComponent_table_198_tr_18_span_7_Template, 4, 1, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomerDashboardComponent_table_198_tr_18_span_8_Template, 2, 0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "generic-ticket-feedback", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ratingcountChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_feedback_ratingcountChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.Rating = $event; })("StatusChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_feedback_StatusChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.Status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "generic-ticket-date-time-format", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("AChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_date_time_format_AChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.AppointmentStart = $event; })("BChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_date_time_format_BChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.AppointmentEnd = $event; })("CChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_date_time_format_CChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.CreatedUtcDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "generic-ticket-date-time-format", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("AChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_date_time_format_AChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.AppointmentStart = $event; })("BChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_date_time_format_BChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.AppointmentEnd = $event; })("CChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_date_time_format_CChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.CreatedUtcDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomerDashboardComponent_table_198_tr_18_span_14_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CustomerDashboardComponent_table_198_tr_18_span_15_Template, 2, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "generic-ticket-status", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_status_StatusChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.Status = $event; })("OverDueDaysChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_status_OverDueDaysChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.OverDueDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "generic-ticket-team-list", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("TicketTeamsChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_team_list_TicketTeamsChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.TicketTeams = $event; })("localPrependUrlChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_team_list_localPrependUrlChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.localPrependUrl = $event; })("ReallocateChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_team_list_ReallocateChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.Reallocate = $event; })("IdChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_team_list_IdChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.Id = $event; })("TicketIdChange", function CustomerDashboardComponent_table_198_tr_18_Template_generic_ticket_team_list_TicketIdChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r4 = ctx.$implicit; return x_r4.TicketId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r4.TicketId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r4.QuoteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (x_r4.InvoiceNo == null ? null : x_r4.InvoiceNo.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r4.TicketType === "Recurring Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratingcount", x_r4.Rating)("Editable", 2)("Status", x_r4.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("A", x_r4.AppointmentStart)("B", x_r4.AppointmentEnd)("C", x_r4.CreatedUtcDate)("T", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("A", x_r4.AppointmentStart)("B", x_r4.AppointmentEnd)("C", x_r4.CreatedUtcDate)("T", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r4.OneOffAppointmentDate === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r4.Rescheduled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r4.CustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r4.CustomerAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", x_r4.Status)("OverDueDays", x_r4.OverDueDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("TicketTeams", x_r4.TicketTeams)("localPrependUrl", ctx_r2.localPrependUrl)("Reallocate", x_r4.Reallocate)("Id", x_r4.Id)("TicketId", x_r4.TicketId);
} }
function CustomerDashboardComponent_table_198_td_21_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Record!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerDashboardComponent_table_198_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerDashboardComponent_table_198_td_21_i_1_Template, 2, 0, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.ticketservice.Ticketlist);
} }
function CustomerDashboardComponent_table_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Raised Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Appointment Date & Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomerDashboardComponent_table_198_tr_18_Template, 24, 26, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CustomerDashboardComponent_table_198_td_21_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.currentUser.Ticket, "\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentUser.Engineer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ticketservice.Ticketlist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ticketservice.Ticketlist.length === 0);
} }
class CustomerDashboardComponent {
    constructor(service, loginservice, ticketservice, router) {
        this.service = service;
        this.loginservice = loginservice;
        this.ticketservice = ticketservice;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    ngOnInit() {
        if (this.validateUser()) {
            this.dtOptions = { pagingType: 'full_numbers', paging: true, pageLength: 5, ordering: false, lengthMenu: [5, 10, 25, 50, 75, 100] };
            this.service.refrestCDTotal(this.currentUser.Id).subscribe(res => {
                this.service.CDTicket = res;
            }, error => console.log(error));
            this.service.refrestCDTicketDue(this.currentUser.Id).subscribe(res => {
                this.service.CDTicketDue = res;
            }, error => console.log(error));
            this.loadcolumnchart();
            this.loadPiechart();
            this.ticketservice.getTickets(this.currentUser.Token, 1).subscribe(res => {
                const response = res;
                this.ticketservice.Ticketlist = [];
                this.ticketservice.Ticketlist = response.result;
                this.dtTrigger.next();
            }, error => console.log(error));
            // this.ticketservice.refrestCustomerTicketList(this.currentUser.Id).subscribe(res => {
            //   this.ticketservice.Ticketlist = res as Ticket[];
            //   setTimeout(() => { this.dtTrigger.next(); }, 200);
            // }, error => console.log(error));
        }
    }
    loadcolumnchart() {
        this.service.CDTicketChart = null;
        this.service.refrestCDTicketColumnChart(this.currentUser.Id).subscribe(res => {
            this.service.CDTicketChart = res;
            this.createColumnChart();
        }, error => console.log(error));
    }
    loadPiechart() {
        this.service.refrestCDTicketPieChartList(this.currentUser.Id).subscribe(res => {
            const response = res;
            this.piedata = [];
            response.PieChart.forEach(element => {
                {
                    this.piedata.push({ name: element.Name + ' (' + element.Count + ')', y: element.Count });
                }
            });
            this.createpiechart();
        }, error => console.log(error));
    }
    ngAfterViewInit() {
    }
    ViewTicket(x) {
        this.ticketservice.formData = Object.assign({}, x);
        this.router.navigate(['/customer/customer-tickets/custoner-ticket-view-details']);
    }
    ViewTicketRefDetails(TicketId) {
        try {
            this.ticketservice.formData = this.ticketservice.Ticketlist.filter(s => s.TicketId == TicketId)[0];
            this.router.navigate(['/customer/customer-tickets/custoner-ticket-view-details']);
        }
        catch (_a) { }
    }
    createColumnChart() {
        this.columnchart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                renderTo: 'container',
                width: 540,
            },
            xAxis: {
                categories: ['Today', 'Tomorrow', 'This Week']
            },
            plotOptions: {
                series: {
                    pointStart: 0,
                    borderWidth: 0,
                    shadow: false
                }
            },
            legend: {
                layout: 'proximate',
                align: 'right',
                verticalAlign: 'top',
                padding: 0,
                floating: true,
                backgroundColor: 'transparent'
            },
            responsive: {
                rules: [{
                        condition: {
                            minWidth: 500,
                        }
                    }]
            },
            series: [
                {
                    type: 'column',
                    name: 'High',
                    data: [
                        this.service.CDTicketChart.TicketChartTodayHeigh,
                        this.service.CDTicketChart.TicketChartTomarrowHeigh,
                        this.service.CDTicketChart.TicketChartThisWeekHeigh
                    ],
                },
                {
                    type: 'column',
                    name: 'Medium',
                    data: [
                        this.service.CDTicketChart.TicketChartTodayMedium,
                        this.service.CDTicketChart.TicketChartTomarrowMedium,
                        this.service.CDTicketChart.TicketChartThisWeekMedium
                    ],
                },
                {
                    type: 'column',
                    name: 'Low',
                    data: [
                        this.service.CDTicketChart.TicketChartTodayLow,
                        this.service.CDTicketChart.TicketChartTomarrowLow,
                        this.service.CDTicketChart.TicketChartThisWeekLow
                    ],
                }
            ],
        });
    }
    createpiechart() {
        this.piechart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                renderTo: 'container',
                plotShadow: false,
                width: 540,
                type: 'pie'
            },
            title: {
                text: 'Chart title'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                    },
                    showInLegend: true
                }
            },
            legend: {
                layout: 'proximate',
                align: 'right',
                verticalAlign: 'top',
                padding: 0,
                floating: true,
                backgroundColor: 'transparent'
            },
            responsive: {
                rules: [{
                        condition: {
                            minWidth: 500,
                        }
                    }]
            },
            series: [{
                    type: 'pie',
                    name: 'Total',
                    data: this.piedata
                }]
        });
    }
    validateUser() {
        switch (this.currentUser.Type) {
            case 'Admin':
            case 'SubAdmin':
                this.router.navigate(['/dashboard']);
                return false;
            case 'Engineer':
                this.router.navigate(['/engineer/engineer-dashboard']);
                return false;
            case 'Customer':
                this.router.navigate(['/customer/customer-dashboard']);
                return true;
            default:
                this.loginservice.logout();
                return false;
        }
    }
}
CustomerDashboardComponent.ɵfac = function CustomerDashboardComponent_Factory(t) { return new (t || CustomerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
CustomerDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerDashboardComponent, selectors: [["app-customer-dashboard"]], decls: 199, vars: 25, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/customer/customer-dashboard"], [1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], [1, "row"], [1, "col-lg-8", "padd-left-0"], [1, "row", "home-dashboard-metr-info"], [1, "col-lg-6"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--animate-fast"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon1"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z", "id", "Combined-Shape-Copy", "fill", "#000000", "opacity", "0.3", "transform", "translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) "], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], ["href", "javascript:;", "routerLink", "/customer/customer-tickets", 1, "kt-link"], [1, "kt-iconbox__content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon2"], ["href", "javascript:;", "routerLink", "/customer/customer-open-tickets", 1, "kt-link"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon3"], ["href", "javascript:;", "routerLink", "/customer/customer-today-new-tickets", 1, "kt-link"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon4"], ["href", "javascript:;", "routerLink", "/customer/customer-today-closed-tickets", 1, "kt-link"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon5"], ["href", "javascript:;", "routerLink", "/customer/customer-overdue-tickets", 1, "kt-link"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon6"], ["href", "javascript:;", "routerLink", "/customer/customer-upcoming-tickets", 1, "kt-link"], [1, "border-home-divide-info"], [1, "col-lg-4", "home-dashboard-metr-info", "job-for-tab-content"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "kt-widget4"], [1, "col-lg-12"], [1, "kt-widget4__item"], [1, "kt-widget4__info"], ["href", "javascript:;", 1, "kt-widget4__username"], [1, "kt-user-card-v2"], [1, "kt-user-card-v2__pic"], [1, "kt-badge", "kt-badge--xl", "kt-badge--warning", "today"], [1, "col-lg-12", "padd-top-5"], [1, "row", "home-dashboard-metr-info", "job-for-tab-content"], [1, "col-lg-6", "col-md-6"], [3, "chart"], [1, "home-dashboard-metr-info", "table-dashboard", 2, "width", "100%"], [1, "col-md-12"], [1, "kt-portlet__body", "customer-listing-datatable"], [1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "col-sm-12"], ["class", " col-md-12 alert alert-info", 4, "ngIf"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "panel-body"], ["datatable", "", "class", "table table-striped- table-bordered table-hover table-checkable", 3, "dtOptions", "dtTrigger", 4, "ngIf"], [1, "col-md-12", "alert", "alert-info"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], [2, "width", "5%"], [2, "width", "10%"], [2, "width", "20%"], [2, "width", "15%"], [2, "width", "41%"], [2, "width", "2%"], ["class", "quote-list-view-info odd", "role", "row", 4, "ngFor", "ngForAsync", "ngForOf"], ["colspan", "10", "style", "text-align: center;", 4, "ngIf"], ["role", "row", 1, "quote-list-view-info", "odd"], [1, "btn", "btn-label-primary"], ["href", "javascript:;", 3, "click"], ["class", "btn btn-label-success btn-pill reallocated-one", 4, "ngIf"], ["class", "btn btn-label-danger", "title", "Defect Job", 4, "ngIf"], ["class", "recurring-ticket", 4, "ngIf"], [3, "ratingcount", "Editable", "Status", "ratingcountChange", "StatusChange"], [3, "A", "B", "C", "T", "AChange", "BChange", "CChange"], ["class", "ticketstatus statusunallocated", 4, "ngIf"], ["class", "ticketstatus statusrescheduled", 4, "ngIf"], [1, "text-center"], [3, "Status", "OverDueDays", "StatusChange", "OverDueDaysChange"], [3, "TicketTeams", "localPrependUrl", "Reallocate", "Id", "TicketId", "TicketTeamsChange", "localPrependUrlChange", "ReallocateChange", "IdChange", "TicketIdChange"], [1, "btn", "btn-label-success", "btn-pill", "reallocated-one"], ["href", "javascript:void(0)"], ["title", "Defect Job", 1, "btn", "btn-label-danger"], ["href", "javascript:void(0)", 3, "click"], [1, "recurring-ticket"], [1, "ticketstatus", "statusunallocated"], [1, "ticketstatus", "statusrescheduled"], ["colspan", "10", 2, "text-align", "center"], [4, "ngIf"]], template: function CustomerDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Total Closed Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Overdue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Tomorrow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " This Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Next Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Next Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](191, CustomerDashboardComponent_div_191_Template, 2, 0, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h1", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](198, CustomerDashboardComponent_table_198_Template, 22, 6, "table", 62);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total ", ctx.currentUser.Ticket, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicket.TotalTicket, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Open ", ctx.currentUser.Ticket, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicket.TotalOpenTicket, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Today New ", ctx.currentUser.Ticket, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicket.TotalNewTicketToday, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicket.TotalTicketClosedToday, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Overdue ", ctx.currentUser.Ticket, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicket.TotalTicketOverDue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Upcoming ", ctx.currentUser.Ticket, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicket.TotalUpcoming, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket.toUpperCase(), " DUE TIMES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicketDue.TicketOverDue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicketDue.TicketDueTimeToday, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicketDue.TicketDueTimeTomarrow, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicketDue.TicketDueTimeThisWeek, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicketDue.TicketDueTimeNextWeek, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.CDTicketDue.TicketDueTimeNextMonth, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" OPEN ", ctx.currentUser.Ticket.toUpperCase(), "S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx.columnchart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ISSUE-WISE ", ctx.currentUser.Ticket.toUpperCase(), "S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx.piechart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ticketservice.Ticketlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket, " List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketservice.Ticketlist);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_10__["TicketFeedbackComponent"], _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_11__["TicketDateTimeFormatComponent"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_12__["TicketStatusComponent"], _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_13__["TicketTeamListComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-dashboard',
                templateUrl: './customer-dashboard.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "iqYz":
/*!*********************************************************!*\
  !*** ./src/app/application/customer/customer.module.ts ***!
  \*********************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "7itd");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_select2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-select2 */ "u1nn");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var src_app_demo_utils_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/demo-utils/module */ "QejX");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var angular_calendar_scheduler__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-calendar-scheduler */ "SA0W");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-signaturepad */ "HnZm");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-image-compress */ "X9o6");
/* harmony import */ var src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module */ "7kmZ");
/* harmony import */ var src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module */ "A6Rf");
/* harmony import */ var src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Team-List/TicketTeamList.module */ "5ngV");
/* harmony import */ var src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module */ "3jFn");
/* harmony import */ var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/ngb-date-to-string-adapter */ "x8Rg");
/* harmony import */ var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/ngb-time-to-string-adapter */ "dRK5");
/* harmony import */ var _customer_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./customer-dashboard/customer-dashboard.component */ "gGY5");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./customer.component */ "uN8R");
/* harmony import */ var _customer_ticket_customer_ticket_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./customer-ticket/customer-ticket.component */ "3mO2");
/* harmony import */ var src_app_generic_utils_Ticket_Header_Count_TicketHeaderCount_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Header-Count/TicketHeaderCount.module */ "GkDo");
/* harmony import */ var _customer_ticket_view_details_customer_ticket_view_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./customer-ticket-view-details/customer-ticket-view-details.component */ "x4Dp");
/* harmony import */ var _customer_defect_ticket_customer_defect_ticket_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./customer-defect-ticket/customer-defect-ticket.component */ "EFTt");
/* harmony import */ var _customer_quote_customer_quote_list_customer_quote_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./customer-quote/customer-quote-list/customer-quote-list.component */ "YBa0");
/* harmony import */ var _customer_quote_customer_quote_details_customer_quote_details_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./customer-quote/customer-quote-details/customer-quote-details.component */ "x2xL");
/* harmony import */ var _customer_quote_customer_quote_status_popup_customer_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./customer-quote/customer-quote-status-popup/customer-quote-status-popup.component */ "trZU");
/* harmony import */ var src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! src/app/generic-utils/Quote-Status-Component/QuoteStatusComponent.module */ "IWF8");
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./customer-profile/customer-profile.component */ "WhPU");
/* harmony import */ var src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module */ "HdV0");















































const routes = [
    { path: '', component: _customer_component__WEBPACK_IMPORTED_MODULE_32__["CustomerComponent"],
        children: [
            { path: 'customer-profile', component: _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_41__["CustomerProfileComponent"] },
            { path: 'customer-dashboard', component: _customer_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["CustomerDashboardComponent"] },
            { path: 'customer-open-tickets', component: _customer_ticket_customer_ticket_component__WEBPACK_IMPORTED_MODULE_33__["CustomerTicketComponent"] },
            { path: 'customer-today-new-tickets', component: _customer_ticket_customer_ticket_component__WEBPACK_IMPORTED_MODULE_33__["CustomerTicketComponent"] },
            { path: 'customer-today-closed-tickets', component: _customer_ticket_customer_ticket_component__WEBPACK_IMPORTED_MODULE_33__["CustomerTicketComponent"] },
            { path: 'customer-overdue-tickets', component: _customer_ticket_customer_ticket_component__WEBPACK_IMPORTED_MODULE_33__["CustomerTicketComponent"] },
            { path: 'customer-upcoming-tickets', component: _customer_ticket_customer_ticket_component__WEBPACK_IMPORTED_MODULE_33__["CustomerTicketComponent"] },
            { path: 'customer-tickets', component: _customer_ticket_customer_ticket_component__WEBPACK_IMPORTED_MODULE_33__["CustomerTicketComponent"] },
            { path: 'customer-tickets', children: [{ path: 'custoner-ticket-view-details', component: _customer_ticket_view_details_customer_ticket_view_details_component__WEBPACK_IMPORTED_MODULE_35__["CustomerTicketViewDetailsComponent"] }] },
            { path: 'customer-new-or-defect-ticket', component: _customer_defect_ticket_customer_defect_ticket_component__WEBPACK_IMPORTED_MODULE_36__["CustomerDefectTicketComponent"] },
            { path: 'customer-quote', component: _customer_quote_customer_quote_list_customer_quote_list_component__WEBPACK_IMPORTED_MODULE_37__["CustomerQuoteListComponent"] },
            { path: 'customer-quote-Details', component: _customer_quote_customer_quote_details_customer_quote_details_component__WEBPACK_IMPORTED_MODULE_38__["CustomerQuoteDetailsComponent"] },
            { path: 'customer-quote-Status', component: _customer_quote_customer_quote_status_popup_customer_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_39__["CustomerQuoteStatusPopupComponent"] },
        ] },
];
class CustomerModule {
}
CustomerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerModule_Factory(t) { return new (t || CustomerModule)(); }, providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_24__["NgxImageCompressService"],
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_29__["NgbDateToStringAdapter"] },
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_30__["NgbTimeToStringAdapter"] }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_16__["ChartModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
            ngx_select2__WEBPACK_IMPORTED_MODULE_14__["LSelect2Module"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["NgMultiSelectDropDownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_22__["AgmCoreModule"].forRoot({ apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].googleapiKey }),
            angular_calendar_scheduler__WEBPACK_IMPORTED_MODULE_19__["SchedulerModule"].forRoot(),
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_20__["FullCalendarModule"],
            src_app_demo_utils_module__WEBPACK_IMPORTED_MODULE_17__["DemoUtilsModule"],
            angular2_signaturepad__WEBPACK_IMPORTED_MODULE_21__["SignaturePadModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_25__["TicketStatusComponentModule"],
            src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_26__["TicketIconAttachmentModule"],
            src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_27__["TicketTeamListModule"],
            src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_28__["TicketDateTimeFormatModule"],
            src_app_generic_utils_Ticket_Header_Count_TicketHeaderCount_module__WEBPACK_IMPORTED_MODULE_34__["TicketHeaderCountModule"],
            src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_40__["QuoteStatusComponentModule"],
            src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_42__["TicketFeedbackComponentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_32__["CustomerComponent"],
        _customer_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["CustomerDashboardComponent"],
        _customer_ticket_customer_ticket_component__WEBPACK_IMPORTED_MODULE_33__["CustomerTicketComponent"],
        _customer_ticket_view_details_customer_ticket_view_details_component__WEBPACK_IMPORTED_MODULE_35__["CustomerTicketViewDetailsComponent"],
        _customer_defect_ticket_customer_defect_ticket_component__WEBPACK_IMPORTED_MODULE_36__["CustomerDefectTicketComponent"],
        _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_41__["CustomerProfileComponent"],
        _customer_quote_customer_quote_list_customer_quote_list_component__WEBPACK_IMPORTED_MODULE_37__["CustomerQuoteListComponent"],
        _customer_quote_customer_quote_details_customer_quote_details_component__WEBPACK_IMPORTED_MODULE_38__["CustomerQuoteDetailsComponent"],
        _customer_quote_customer_quote_status_popup_customer_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_39__["CustomerQuoteStatusPopupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        angular_highcharts__WEBPACK_IMPORTED_MODULE_16__["ChartModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
        ngx_select2__WEBPACK_IMPORTED_MODULE_14__["LSelect2Module"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["NgMultiSelectDropDownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"],
        angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"],
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"], _agm_core__WEBPACK_IMPORTED_MODULE_22__["AgmCoreModule"], angular_calendar_scheduler__WEBPACK_IMPORTED_MODULE_19__["SchedulerModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_20__["FullCalendarModule"],
        src_app_demo_utils_module__WEBPACK_IMPORTED_MODULE_17__["DemoUtilsModule"],
        angular2_signaturepad__WEBPACK_IMPORTED_MODULE_21__["SignaturePadModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_25__["TicketStatusComponentModule"],
        src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_26__["TicketIconAttachmentModule"],
        src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_27__["TicketTeamListModule"],
        src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_28__["TicketDateTimeFormatModule"],
        src_app_generic_utils_Ticket_Header_Count_TicketHeaderCount_module__WEBPACK_IMPORTED_MODULE_34__["TicketHeaderCountModule"],
        src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_40__["QuoteStatusComponentModule"],
        src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_42__["TicketFeedbackComponentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _customer_component__WEBPACK_IMPORTED_MODULE_32__["CustomerComponent"],
                    _customer_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["CustomerDashboardComponent"],
                    _customer_ticket_customer_ticket_component__WEBPACK_IMPORTED_MODULE_33__["CustomerTicketComponent"],
                    _customer_ticket_view_details_customer_ticket_view_details_component__WEBPACK_IMPORTED_MODULE_35__["CustomerTicketViewDetailsComponent"],
                    _customer_defect_ticket_customer_defect_ticket_component__WEBPACK_IMPORTED_MODULE_36__["CustomerDefectTicketComponent"],
                    _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_41__["CustomerProfileComponent"],
                    _customer_quote_customer_quote_list_customer_quote_list_component__WEBPACK_IMPORTED_MODULE_37__["CustomerQuoteListComponent"],
                    _customer_quote_customer_quote_details_customer_quote_details_component__WEBPACK_IMPORTED_MODULE_38__["CustomerQuoteDetailsComponent"],
                    _customer_quote_customer_quote_status_popup_customer_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_39__["CustomerQuoteStatusPopupComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    angular_highcharts__WEBPACK_IMPORTED_MODULE_16__["ChartModule"],
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
                    ngx_select2__WEBPACK_IMPORTED_MODULE_14__["LSelect2Module"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["NgMultiSelectDropDownModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"],
                    angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"],
                    ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_22__["AgmCoreModule"].forRoot({ apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].googleapiKey }),
                    angular_calendar_scheduler__WEBPACK_IMPORTED_MODULE_19__["SchedulerModule"].forRoot(),
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_20__["FullCalendarModule"],
                    src_app_demo_utils_module__WEBPACK_IMPORTED_MODULE_17__["DemoUtilsModule"],
                    angular2_signaturepad__WEBPACK_IMPORTED_MODULE_21__["SignaturePadModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_25__["TicketStatusComponentModule"],
                    src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_26__["TicketIconAttachmentModule"],
                    src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_27__["TicketTeamListModule"],
                    src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_28__["TicketDateTimeFormatModule"],
                    src_app_generic_utils_Ticket_Header_Count_TicketHeaderCount_module__WEBPACK_IMPORTED_MODULE_34__["TicketHeaderCountModule"],
                    src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_40__["QuoteStatusComponentModule"],
                    src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_42__["TicketFeedbackComponentModule"]
                ],
                providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_24__["NgxImageCompressService"],
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_29__["NgbDateToStringAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_30__["NgbTimeToStringAdapter"] }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "trZU":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/application/customer/customer-quote/customer-quote-status-popup/customer-quote-status-popup.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CustomerQuoteStatusPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerQuoteStatusPopupComponent", function() { return CustomerQuoteStatusPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/quote.service */ "uOqW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-signaturepad */ "HnZm");









const _c0 = ["SignaturePad2"];
function CustomerQuoteStatusPopupComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CustomerQuoteStatusPopupComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CustomerQuoteStatusPopupComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0\u00A0\u00A0Customer Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "signature-pad", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerQuoteStatusPopupComponent_div_13_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.cleareCustomerCloserSignature(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Clear signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r2.CustomerSignaturePadOption);
} }
function CustomerQuoteStatusPopupComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CustomerQuoteStatusPopupComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class CustomerQuoteStatusPopupComponent {
    constructor(logService, loginservice, quoteService, dialogRef) {
        this.logService = logService;
        this.loginservice = loginservice;
        this.quoteService = quoteService;
        this.dialogRef = dialogRef;
        this.CustomerSignaturePadOption = {
            ' minWidth': 2, pecColor: 'rgb(66,133,244)', backgroundcolor: 'rgb(255,255,255)', canvasWidth: 500, canvasHeight: 200
        };
        this.temptQuoteStatus = 0;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
        this.temptQuoteStatus = Number(this.quoteService.QuoteData.Status);
    }
    SetStatus(Status) {
        this.temptQuoteStatus = Status;
    }
    UpdateQuoteStatus(Status) {
        if (Status === 3) {
            this.InsertESignature(Status);
        }
        else {
            if (Status === 4) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Continue!'
                }).then((result) => {
                    if (result.value) {
                        if (Status === undefined) {
                            this.dialogRef.close();
                        }
                        else {
                            this.dialogRef.close({ Status });
                        }
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Changed!', 'Your Status is changed.', 'success');
                    }
                });
            }
            else {
                if (Status === undefined) {
                    this.dialogRef.close();
                }
                else {
                    this.dialogRef.close({ Status });
                }
            }
        }
    }
    InsertESignature(Status) {
        const CustBase64 = this.CustomerSingnaturePad.toDataURL('image/png');
        this.quoteService.QuoteData.CustomerSignature = CustBase64;
        this.quoteService.updateQuoteSignature(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                this.dialogRef.close({ Status });
            }
        }, error => console.log(error));
    }
    cleareCustomerCloserSignature() {
        this.CustomerSingnaturePad.clear();
    }
}
CustomerQuoteStatusPopupComponent.ɵfac = function CustomerQuoteStatusPopupComponent_Factory(t) { return new (t || CustomerQuoteStatusPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_2__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"])); };
CustomerQuoteStatusPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerQuoteStatusPopupComponent, selectors: [["app-quote-status-popup"]], viewQuery: function CustomerQuoteStatusPopupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.CustomerSingnaturePad = _t.first);
    } }, decls: 25, vars: 5, consts: [[1, "Container"], [1, "dispaly-4"], [1, "form-row"], [1, "form-group", "col-md-12"], [1, "kt-radio-list"], [1, "row"], [1, "myStatus"], ["href", "javascript:void(0)", 3, "click"], [4, "ngIf"], ["class", "signature", 4, "ngIf"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "mat-dialog-close", "", 1, "btn", "btn-outline-dark", "ml-1"], [1, "fa", "fa-close"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "AcceptStatus"], ["aria-hidden", "true", 1, "far", "fa-circle", "OtherStatus"], [1, "signature"], [1, "row", "forn-group"], [1, "col"], ["id", "CloseSignarePad", 1, "m-signature-pad", "CloseSignarePad"], [1, "m-signature-pad-body"], [3, "options"], ["SignaturePad2", ""], [1, "btnRemoveSection", 3, "click"]], template: function CustomerQuoteStatusPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Change Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerQuoteStatusPopupComponent_Template_a_click_9_listener() { return ctx.SetStatus(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerQuoteStatusPopupComponent_ng_container_10_Template, 2, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomerQuoteStatusPopupComponent_ng_container_11_Template, 2, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Accept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomerQuoteStatusPopupComponent_div_13_Template, 11, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerQuoteStatusPopupComponent_Template_a_click_15_listener() { return ctx.SetStatus(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CustomerQuoteStatusPopupComponent_ng_container_16_Template, 2, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomerQuoteStatusPopupComponent_ng_container_17_Template, 2, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Reject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerQuoteStatusPopupComponent_Template_button_click_20_listener() { return ctx.UpdateQuoteStatus(ctx.temptQuoteStatus); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Change Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temptQuoteStatus === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temptQuoteStatus !== 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temptQuoteStatus === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temptQuoteStatus === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temptQuoteStatus !== 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePad"]], styles: [".Container[_ngcontent-%COMP%] {\n        overflow-y: auto !important;\n        overflow-x: hidden;\n        min-height: 22px;\n        max-height: 100vh;\n    }\n\n    .myStatus[_ngcontent-%COMP%] {\n        width: 100%;\n        background-color: cyan;\n        padding: 6px 6px;\n        margin: 0 0 1px 0;\n        border: 1px solid #ad5a2242;\n    }\n\n    .myStatus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin: 0px 0 0 11px;\n        color: black;\n        font-size: initial;\n    }\n\n    .AcceptStatus[_ngcontent-%COMP%] {\n        margin: 0 5px 0 0;\n        color: green;\n    }\n\n    .OtherStatus[_ngcontent-%COMP%] {\n        margin: 0 5px 0 0;\n        color: #847a74;\n    }\n\n    .signature[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 280px;\n        border: 1px solid #ad5a2242;\n    }\n\n    .btnRemoveSection[_ngcontent-%COMP%] {\n        background-color: #fcb822;\n        color: black;\n        padding: 2px 15px;\n        float: left;\n        margin-top: 2px;\n        cursor: pointer;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerQuoteStatusPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-status-popup',
                templateUrl: 'customer-quote-status-popup.component.html',
                styles: []
            }]
    }], function () { return [{ type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_2__["UserlogService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }]; }, { CustomerSingnaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['SignaturePad2', { static: false }]
        }] }); })();


/***/ }),

/***/ "uN8R":
/*!************************************************************!*\
  !*** ./src/app/application/customer/customer.component.ts ***!
  \************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CustomerComponent {
    ngOnInit() { }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ template: '<router-outlet></router-outlet>' }]
    }], null, null); })();


/***/ }),

/***/ "x2xL":
/*!****************************************************************************************************************!*\
  !*** ./src/app/application/customer/customer-quote/customer-quote-details/customer-quote-details.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CustomerQuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerQuoteDetailsComponent", function() { return CustomerQuoteDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_property_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/property.model */ "4ebh");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/quote.service */ "uOqW");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/invoice.service */ "py7r");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/property.service */ "Pffd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.component */ "xJsc");


















const _c0 = ["pdfDownlad"];
function CustomerQuoteDetailsComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerQuoteDetailsComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerQuoteDetailsComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerQuoteDetailsComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerQuoteDetailsComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerQuoteDetailsComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerQuoteDetailsComponent_em_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r21, " ");
} }
function CustomerQuoteDetailsComponent_tr_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invoice Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.quoteService.QuoteData.InvoiceNo, "");
} }
function CustomerQuoteDetailsComponent_tr_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.currentUser.Ticket, " Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.quoteService.QuoteData.TicketNo, "");
} }
function CustomerQuoteDetailsComponent_div_155_div_7_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", p_r22.UniqId, ")");
} }
function CustomerQuoteDetailsComponent_div_155_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerQuoteDetailsComponent_div_155_div_7_small_3_Template, 2, 1, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r22.WarrantyDays, " Days warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r22.UniqId.length > 0);
} }
function CustomerQuoteDetailsComponent_div_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerQuoteDetailsComponent_div_155_div_7_Template, 4, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r22.ItemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r22.ItemDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r22.InWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r22.Qty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", p_r22.UnitCost.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", p_r22.Total.toFixed(2), " ");
} }
function CustomerQuoteDetailsComponent_i_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 109);
} }
function CustomerQuoteDetailsComponent_i_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 110);
} }
function CustomerQuoteDetailsComponent_i_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 109);
} }
function CustomerQuoteDetailsComponent_i_212_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 110);
} }
function CustomerQuoteDetailsComponent_i_215_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 109);
} }
function CustomerQuoteDetailsComponent_i_216_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 110);
} }
function CustomerQuoteDetailsComponent_i_219_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 109);
} }
function CustomerQuoteDetailsComponent_i_220_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 110);
} }
function CustomerQuoteDetailsComponent_div_246_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "generic-ticket-icon-attachment", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("NameChange", function CustomerQuoteDetailsComponent_div_246_Template_generic_ticket_icon_attachment_NameChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const x_r27 = ctx.$implicit; return x_r27.AttachmentExtension = $event; })("PathChange", function CustomerQuoteDetailsComponent_div_246_Template_generic_ticket_icon_attachment_PathChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const x_r27 = ctx.$implicit; return x_r27.Attachment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Name", x_r27.AttachmentExtension)("Path", x_r27.Attachment)("Status", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", x_r27.Attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerQuoteDetailsComponent_div_247_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sale Person Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r31.quoteService.QuoteData.SalesPersonSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerQuoteDetailsComponent_div_247_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customer Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r32.quoteService.QuoteData.CustomerSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerQuoteDetailsComponent_div_247_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0\u00A0\u00A0 Signature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerQuoteDetailsComponent_div_247_div_10_Template, 4, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomerQuoteDetailsComponent_div_247_div_11_Template, 4, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.quoteService.QuoteData.SalesPersonSignature == null ? null : ctx_r20.quoteService.QuoteData.SalesPersonSignature.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.quoteService.QuoteData.CustomerSignature == null ? null : ctx_r20.quoteService.QuoteData.CustomerSignature.length) > 0);
} }
class CustomerQuoteDetailsComponent {
    constructor(titleService, quoteService, productservice, toastr, router, invoiceService, ticketService, logService, loginservice, propertyService) {
        this.titleService = titleService;
        this.quoteService = quoteService;
        this.productservice = productservice;
        this.toastr = toastr;
        this.router = router;
        this.invoiceService = invoiceService;
        this.ticketService = ticketService;
        this.logService = logService;
        this.loginservice = loginservice;
        this.propertyService = propertyService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({});
        this.isValidEmailIdToSendPDF = true;
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.emailIdToSendPDF = '';
    }
    ngOnInit() {
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        if (this.quoteService.QuoteData.CustomerName === 'Customer Name?' || this.quoteService.QuoteData.CustomerName === undefined) {
            this.router.navigate(['/quotes/']);
        }
        this.titleService.setTitle('Quotation Details | Genic Solution');
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.emailIdToSendPDF = this.quoteService.QuoteData.CustomerEmail;
            this.getQuoteItems();
            this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
        }, 200);
    }
    getQuoteItems() {
        this.quoteService.getQuoteItems(this.currentUser.Token, this.quoteService.QuoteData.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.quoteService.QuoteItemList = response.result;
                }
            }
        }, error => console.log(error));
    }
    popolateQuote(q) {
        this.quoteService.QuoteData = Object.assign({}, q);
        if (q.ModifiedUtcDate != null) {
            this.quoteService.QuoteData.ModifiedUtcDate = new Date(q.ModifiedUtcDate);
        }
        this.propertyService.formData = new src_app_services_property_model__WEBPACK_IMPORTED_MODULE_3__["Property"]();
        this.propertyService.getPropertyData(q.PropertyId);
        this.router.navigate(['/quotes/quote-Edit']);
    }
    downloadQuote(quoteId) {
        this.quoteService.downoadQuotationPDF(quoteId, this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                    const a = $("<a>")
                        .attr("href", response.Path)
                        .attr("target", "_blank")
                        .attr("download", this.quoteService.QuoteData.QuoteId + '.pdf')
                        .appendTo("body");
                    a[0].click();
                    a.remove();
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
}
CustomerQuoteDetailsComponent.ɵfac = function CustomerQuoteDetailsComponent_Factory(t) { return new (t || CustomerQuoteDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_5__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_10__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_11__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_13__["PropertyService"])); };
CustomerQuoteDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerQuoteDetailsComponent, selectors: [["app-quote-details"]], viewQuery: function CustomerQuoteDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pdfDownlad = _t.first);
    } }, decls: 265, vars: 42, consts: [["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid", "breadcud-kt-container"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/quotes", 1, "kt-subheader__breadcrumbs-link"], [1, "new-request-main-section", "jobs-for-client-section"], [1, "kt-container", "kt-container--fluid"], [1, "new-requst-filter_form"], [1, ""], [1, "col-md-12", "section-client-requst-form"], [1, "kt-section", "kt-customer-list-view-section", "uppercase"], [1, "flaticon-list", "pending-view-page-list"], ["class", "view-pending", 4, "ngIf"], [1, "quote-view-top"], [1, "row"], [1, "col-md-7"], [1, "quote-1-top"], [1, "table-quote"], [1, "table"], [1, "kt-widget4__sub"], ["target", "_blank", 3, "href"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "quote-right-view", "text-right"], [1, "table-right-quote", "text-right"], ["onclick", "window.history.back()", 1, "btn", "btn-primary", 2, "margin-right", "3px", "color", "white", "padding", "6px 10px 7px 10px", "cursor", "pointer"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:void(0);", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "line-height", "19px"], [1, "caret"], [1, "dropdown-menu", 2, "text-align", "center"], ["href", "javascript:void(0);", 3, "click"], ["pdfDownlad", ""], [4, "ngIf"], [1, "col-md-12", "new-request-service-details-form"], [1, "col-md-12", "job-for-tab-content"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "row--"], [1, "kt-portlet__body", 2, "padding", "0px !important"], [1, "col-md-12--", "kt-portlet-body-1", 2, "width", "100%"], [1, "tab-content"], ["id", "kt_widget11_tab1_content", 1, "tab-pane", "active"], [1, "kt-widget11"], ["id", "kt_repeater_1"], [1, "row", "quote-row", 2, "height", "50px"], [1, "col-md-6"], [1, "product-service-colun-name"], [1, "col-md-2"], [1, "product-service-colun-name", "kt-align-right"], [1, "add-data-ticket-list-view"], ["class", "row col-md-12", 4, "ngFor", "ngForOf"], ["data-repeater-list", "", 1, "col-lg-12"], [1, "add-invoicing-view-list-border"], [1, "kt-widget4"], [1, "kt-widget4__item"], [1, "col-md-5", "no-spacing"], [1, "col-md-7", "invoicing-list-view-border-left"], [1, "kt-widget1"], [1, "kt-widget1__item"], [1, "kt-widget1__info"], [1, "kt-widget1__title"], [1, "kt-widget1__number", "kt-font-success"], [1, "discountSection"], [1, "discountShow"], [1, "tax-block"], [1, "TaxToHide"], [1, "kt-widget1__item", "quotes-list-view-total-info"], [1, "kt-widget1__number", "kt-font-primary"], [1, "row--", 2, "display", "none"], [1, "clientViewSection"], [1, "form-group"], [1, "clView"], ["aria-hidden", "true", 1, "fa", "fa-eye"], [1, "kt-checkbox-inline"], [1, "kt-checkbox"], ["class", "fa fa-check", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-times", "aria-hidden", "true", 4, "ngIf"], [1, "on-site-client-required"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19", "internal-notes-attachment"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "kt-portlet__body"], [1, "kt-widget19__wrapper"], ["name", "QuoteTermsAndCondition", "readonly", "", "id", "QuoteTermsAndCondition", "rows", "3", "maxlength", "1024", "placeholder", "QuoteTerms And Condition", 1, "form-control", 3, "ngModel", "ngModelChange"], ["data-container", "body", "data-toggle", "kt-popover", "data-placement", "top", "data-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "data-original-title", "", "title", "", 1, "tooltip-questionMark"], ["readonly", "", "id", "exampleTextarea", "rows", "3", "placeholder", "Note details", "name", "InternalNotes", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col-md-1", 4, "ngFor", "ngForOf"], ["class", "on-site-client-required", 4, "ngIf"], ["id", "emailConfirmPopup", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "myManFaContent"], [1, "modal-header", 2, "background-color", "aqua"], [1, "modal-title"], ["type", "button", "id", "btnCLoseremail", "data-dismiss", "modal", 1, "close"], [1, "modal-body", "my-Model-body"], [1, "col-md-12"], [1, "editableEmailSection"], ["type", "text", "required", "", "placeholder", "Email..", "name", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "submitSEction"], ["href", "javascript:void(0)", 1, "btn", "btn-success"], [1, "view-pending"], [1, "row", "col-md-12"], [1, "product-service-colun-name", "invoice-list-view-product-service"], [1, "myshap"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "col-md-1"], [3, "Name", "Path", "Status", "NameChange", "PathChange"], [1, "col-md-4"], [1, "fa", "fa-download", "text-success"], ["class", "col-lg-6", 4, "ngIf"], [1, "col-lg-6"], [3, "src"]], template: function CustomerQuoteDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Quotation's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Quotation Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CustomerQuoteDetailsComponent_span_25_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CustomerQuoteDetailsComponent_span_26_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CustomerQuoteDetailsComponent_span_27_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CustomerQuoteDetailsComponent_span_28_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CustomerQuoteDetailsComponent_span_29_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CustomerQuoteDetailsComponent_span_30_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Subject:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Billing Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, CustomerQuoteDetailsComponent_em_55_Template, 3, 1, "em", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Contact Details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Contact: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sales Rep: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Prepared By: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Attention: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Quote Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "More Action's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerQuoteDetailsComponent_Template_a_click_109_listener() { return ctx.downloadQuote(ctx.quoteService.QuoteData.Id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Download PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Quote Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](126, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, CustomerQuoteDetailsComponent_tr_127_Template, 7, 1, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, CustomerQuoteDetailsComponent_tr_128_Template, 7, 2, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " PRODUCT / SERVICE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " QTY. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " UNIT COST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " TOTAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, CustomerQuoteDetailsComponent_div_155_Template, 18, 6, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h3", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h3", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h3", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h3", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Client View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Adjust what your client will see on this quote. To change the default for \u200Ball future quotes, visit the PDF Configuration. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](207, CustomerQuoteDetailsComponent_i_207_Template, 1, 0, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](208, CustomerQuoteDetailsComponent_i_208_Template, 1, 0, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Quantities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, CustomerQuoteDetailsComponent_i_211_Template, 1, 0, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](212, CustomerQuoteDetailsComponent_i_212_Template, 1, 0, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Unit Cost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](215, CustomerQuoteDetailsComponent_i_215_Template, 1, 0, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](216, CustomerQuoteDetailsComponent_i_216_Template, 1, 0, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Line item totals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](219, CustomerQuoteDetailsComponent_i_219_Template, 1, 0, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](220, CustomerQuoteDetailsComponent_i_220_Template, 1, 0, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Total ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " \u00A0\u00A0\u00A0\u00A0 TERMS & CONDITIONS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "textarea", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerQuoteDetailsComponent_Template_textarea_ngModelChange_231_listener($event) { return ctx.quoteService.QuoteData.QuoteTermsAndCondition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "\u00A0\u00A0\u00A0\u00A0ADDITIONAL REMARKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "textarea", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerQuoteDetailsComponent_Template_textarea_ngModelChange_244_listener($event) { return ctx.quoteService.QuoteData.InternalNotes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](246, CustomerQuoteDetailsComponent_div_246_Template, 9, 4, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](247, CustomerQuoteDetailsComponent_div_247_Template, 12, 2, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "EMAIL QUOTATION PDF!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "button", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Change mail here to send quotation pdf!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerQuoteDetailsComponent_Template_input_ngModelChange_261_listener($event) { return ctx.emailIdToSendPDF = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.Status === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.Status === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.Status === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.Status === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.Status === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.Status === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.quoteService.QuoteData.CompanyName, " (", ctx.quoteService.QuoteData.CustomerName, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteService.QuoteData.JobTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://maps.google.com/?q=", ctx.quoteService.QuoteData.CustomerAddress, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteService.QuoteData.CustomerAddress == null ? null : ctx.quoteService.QuoteData.CustomerAddress.split(","));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteService.QuoteData.CustomerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteService.QuoteData.CustomerEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteService.QuoteData.CustomerContactNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteService.QuoteData.SalesRepresentative, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteService.QuoteData.PreparedBy, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteService.QuoteData.Attention, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteService.QuoteData.QuoteId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](126, 40, ctx.quoteService.QuoteData.CreatedUtcDate), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.InvoiceNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.TicketNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteService.QuoteItemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteService.QuoteData.ClientRemark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.quoteService.QuoteData.SubTotal.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.quoteService.QuoteData.DiscountAmount.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.quoteService.QuoteData.TaxAmount.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.quoteService.QuoteData.NetAmount.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.ClientViewQty === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.ClientViewQty === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.ClientViewUnitCost === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.ClientViewUnitCost === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.ClientViewLineItemTotal === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.ClientViewLineItemTotal === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.ClientViewTotal === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.ClientViewTotal === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.QuoteTermsAndCondition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.InternalNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteService.QuoteAttachmentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.quoteService.QuoteData.SalesPersonSignature == null ? null : ctx.quoteService.QuoteData.SalesPersonSignature.length) > 0 || (ctx.quoteService.QuoteData.CustomerSignature == null ? null : ctx.quoteService.QuoteData.CustomerSignature.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailIdToSendPDF);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_16__["TicketIconAttachmentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], styles: [".ticket-attachment-container[_ngcontent-%COMP%] { position: relative; width: 100%; }\r\n    .ticket-attachment-image[_ngcontent-%COMP%] {display: block; width: 100%; height: auto; }\r\n    .ticket-attachment-overlay[_ngcontent-%COMP%] {position: absolute;bottom: 0;left: 100%;right: 0;background-color: rgb(162, 176, 180);overflow: hidden; width: 0;height: 100%;transition: .5s ease;text-align: center;}\r\n    .ticket-attachment-container[_ngcontent-%COMP%]:hover   .ticket-attachment-overlay[_ngcontent-%COMP%] {width: 100%;left: 0;}\r\n    .ticket-attachment-text[_ngcontent-%COMP%] {white-space: nowrap; color: white; font-size: 20px; position: absolute; overflow: hidden;top: 50%; left: 50%; transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);}\r\n    .ticket-attachment-remove-text[_ngcontent-%COMP%] {white-space: nowrap;color: white;font-size: 20px;position: absolute;overflow: hidden;bottom: 10%;left: 50%; transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);}\r\n    .file-upload[_ngcontent-%COMP%] {position: relative;display: inline-block;}\r\n    .file-upload__label[_ngcontent-%COMP%] {display: block;padding: 1em 1em;color: #fff; background: #b1a4a4; border-radius: .4em;font-size: 22px; height: 100%;transition: background .3s;}\r\n    .file-upload__label[_ngcontent-%COMP%]:hover {cursor: pointer;background: rgb(204, 198, 198); }\r\n    .file-upload__input[_ngcontent-%COMP%] {position: absolute;left: 0;top: 0;right: 0;bottom: 0;font-size: 1; width:0;height: 100%;opacity: 0;}\r\n    i.fa.fa-eye[_ngcontent-%COMP%] {\r\n        margin: 13px 0 0 0;\r\n        color: green;\r\n        padding: 0 10px 0 0;\r\n        font-size: 20px;\r\n      }\r\n    .clView[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        font-size: 17px;\r\n        color: #258000;\r\n      }\r\n    .kt-checkbox-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding: 0 !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vY3VzdG9tZXIvY3VzdG9tZXItcXVvdGUvY3VzdG9tZXItcXVvdGUtZGV0YWlscy9jdXN0b21lci1xdW90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQStCLGtCQUFrQixFQUFFLFdBQVcsRUFBRTtJQUM1RCwwQkFBMEIsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUU7SUFDckUsNEJBQTRCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLG9DQUFvQyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7SUFDbE0sK0RBQStELFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDbkYseUJBQXlCLG1CQUFtQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQyxvQ0FBb0MsQ0FBQztJQUM3TSxnQ0FBZ0MsbUJBQW1CLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGdDQUFnQyxDQUFDLG9DQUFvQyxDQUFDO0lBQ2xOLGNBQWMsa0JBQWtCLENBQUMscUJBQXFCLENBQUM7SUFDdkQscUJBQXFCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQztJQUNwSywyQkFBMkIsZUFBZSxDQUFDLDhCQUE4QixFQUFFO0lBQzNFLHFCQUFxQixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO0lBQ3hIO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZUFBZTtNQUNqQjtJQUVBO1FBQ0UsZUFBZTtRQUNmLGNBQWM7TUFDaEI7SUFDQSwwQkFBMEIscUJBQXFCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9jdXN0b21lci9jdXN0b21lci1xdW90ZS9jdXN0b21lci1xdW90ZS1kZXRhaWxzL2N1c3RvbWVyLXF1b3RlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWNrZXQtYXR0YWNobWVudC1jb250YWluZXIgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOyB9XHJcbiAgICAudGlja2V0LWF0dGFjaG1lbnQtaW1hZ2Uge2Rpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyB9XHJcbiAgICAudGlja2V0LWF0dGFjaG1lbnQtb3ZlcmxheSB7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogMDtsZWZ0OiAxMDAlO3JpZ2h0OiAwO2JhY2tncm91bmQtY29sb3I6IHJnYigxNjIsIDE3NiwgMTgwKTtvdmVyZmxvdzogaGlkZGVuOyB3aWR0aDogMDtoZWlnaHQ6IDEwMCU7dHJhbnNpdGlvbjogLjVzIGVhc2U7dGV4dC1hbGlnbjogY2VudGVyO31cclxuICAgIC50aWNrZXQtYXR0YWNobWVudC1jb250YWluZXI6aG92ZXIgLnRpY2tldC1hdHRhY2htZW50LW92ZXJsYXkge3dpZHRoOiAxMDAlO2xlZnQ6IDA7fVxyXG4gICAgLnRpY2tldC1hdHRhY2htZW50LXRleHQge3doaXRlLXNwYWNlOiBub3dyYXA7IGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiAyMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IG92ZXJmbG93OiBoaWRkZW47dG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO31cclxuICAgIC50aWNrZXQtYXR0YWNobWVudC1yZW1vdmUtdGV4dCB7d2hpdGUtc3BhY2U6IG5vd3JhcDtjb2xvcjogd2hpdGU7Zm9udC1zaXplOiAyMHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTtvdmVyZmxvdzogaGlkZGVuO2JvdHRvbTogMTAlO2xlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO31cclxuICAgIC5maWxlLXVwbG9hZCB7cG9zaXRpb246IHJlbGF0aXZlO2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbiAgICAuZmlsZS11cGxvYWRfX2xhYmVsIHtkaXNwbGF5OiBibG9jaztwYWRkaW5nOiAxZW0gMWVtO2NvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjYjFhNGE0OyBib3JkZXItcmFkaXVzOiAuNGVtO2ZvbnQtc2l6ZTogMjJweDsgaGVpZ2h0OiAxMDAlO3RyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO31cclxuICAgIC5maWxlLXVwbG9hZF9fbGFiZWw6aG92ZXIge2N1cnNvcjogcG9pbnRlcjtiYWNrZ3JvdW5kOiByZ2IoMjA0LCAxOTgsIDE5OCk7IH0gIFxyXG4gICAgLmZpbGUtdXBsb2FkX19pbnB1dCB7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDA7dG9wOiAwO3JpZ2h0OiAwO2JvdHRvbTogMDtmb250LXNpemU6IDE7IHdpZHRoOjA7aGVpZ2h0OiAxMDAlO29wYWNpdHk6IDA7fVxyXG4gICAgaS5mYS5mYS1leWUge1xyXG4gICAgICAgIG1hcmdpbjogMTNweCAwIDAgMDtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuY2xWaWV3IGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgY29sb3I6ICMyNTgwMDA7XHJcbiAgICAgIH1cclxuICAgICAgLmt0LWNoZWNrYm94LWlubGluZSBsYWJlbHtwYWRkaW5nOiAwICFpbXBvcnRhbnQ7fSJdfQ== */", ".myshap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .job-for-tab-content[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--height-fluid.kt-widget19[_ngcontent-%COMP%] {\n    border: 1px solid #eaeaea;\n    padding: 14px 9px 0 10px !important;\n  }\n\n  .dropdown-menu.show[_ngcontent-%COMP%] {\n    transform: translate3d(-61px, 38px, 0px) !important;\n  }\n\n  .dropdown-menu.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-bottom: 1px solid gainsboro;\n  }\n\n  .dropdown-menu.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n\n  .dropdown-menu.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 6 0 6px 42px;\n  }\n\n  .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    background-color: #ff8533 !important;\n  }\n\n  .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #fff !important;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerQuoteDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-details',
                templateUrl: './customer-quote-details.component.html',
                styleUrls: ['./customer-quote-details.component.css'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_5__["QuoteService"] }, { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"] }, { type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_10__["TicketService"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_11__["UserlogService"] }, { type: src_app_services__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] }, { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_13__["PropertyService"] }]; }, { pdfDownlad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pdfDownlad', { static: false }]
        }] }); })();


/***/ }),

/***/ "x4Dp":
/*!*************************************************************************************************************!*\
  !*** ./src/app/application/customer/customer-ticket-view-details/customer-ticket-view-details.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CustomerTicketViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTicketViewDetailsComponent", function() { return CustomerTicketViewDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ticket_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ticket.module */ "R0Vg");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var src_app_services_userlog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/userlog.module */ "Jiy+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_serviceform_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/serviceform.service */ "y96C");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_closer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/closer.service */ "Xnxn");
/* harmony import */ var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/invoice.service */ "py7r");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var src_app_services_generic_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/generic.service */ "G5QB");
/* harmony import */ var src_app_services_audio_recording_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/audio-recording.service */ "vaZA");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/services/notification.service */ "OC8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */ "X7qY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.component */ "Sh6L");
/* harmony import */ var _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.component */ "xJsc");





























const _c0 = ["modalContent"];
function CustomerTicketViewDetailsComponent_em_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r23, " ");
} }
function CustomerTicketViewDetailsComponent_p_50_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r25.IssueTypeName);
} }
function CustomerTicketViewDetailsComponent_p_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomerTicketViewDetailsComponent_p_50_li_4_Template, 3, 1, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ticketService.formData.TicketWiseIssueType);
} }
function CustomerTicketViewDetailsComponent_div_53_div_3_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.TimeSlotDay, " Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.TimeSlotHours, " Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.TimeSlotMinuts, " Minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.TimeSlotSeconds, " Second");
} }
function CustomerTicketViewDetailsComponent_div_53_div_3_span_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "--:--:--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_div_53_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerTicketViewDetailsComponent_div_53_div_3_span_2_span_2_Template, 12, 4, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerTicketViewDetailsComponent_div_53_div_3_span_2_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.TimeSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r27.TimeSlot);
} }
function CustomerTicketViewDetailsComponent_div_53_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "--:--:--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_div_53_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerTicketViewDetailsComponent_div_53_div_3_span_2_Template, 4, 2, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerTicketViewDetailsComponent_div_53_div_3_span_3_Template, 4, 0, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r26.TimerButtonClassName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.ticketService.formData.Status === "INPROGRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.ticketService.formData.Status === "HOLD");
} }
function CustomerTicketViewDetailsComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerTicketViewDetailsComponent_div_53_div_3_Template, 4, 5, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.TimerButtunName);
} }
function CustomerTicketViewDetailsComponent_i_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 127);
} }
function CustomerTicketViewDetailsComponent_i_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 128);
} }
function CustomerTicketViewDetailsComponent_i_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 129);
} }
function CustomerTicketViewDetailsComponent_p_70_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.ticketService.formData.Description);
} }
function CustomerTicketViewDetailsComponent_p_70_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.ticketService.formData.Description.substring(0, 180));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.ticketService.formData.Description);
} }
function CustomerTicketViewDetailsComponent_p_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerTicketViewDetailsComponent_p_70_span_2_Template, 2, 1, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerTicketViewDetailsComponent_p_70_ng_template_3_Template, 6, 2, "ng-template", null, 131, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.ticketService.formData.Description.length < 180)("ngIfElse", _r32);
} }
function CustomerTicketViewDetailsComponent_li_80_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 136);
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r35.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerTicketViewDetailsComponent_li_80_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 136);
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r34.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerTicketViewDetailsComponent_li_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerTicketViewDetailsComponent_li_80_img_1_Template, 1, 1, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerTicketViewDetailsComponent_li_80_img_2_Template, 1, 1, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r34.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34.EngineerLogo.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34.EngineerLogo.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r34.EngineerName, " ");
} }
function CustomerTicketViewDetailsComponent_th_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Installation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_th_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unit Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_th_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_tr_194_div_4_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maintance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_tr_194_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerTicketViewDetailsComponent_tr_194_div_4_small_2_Template, 2, 0, "small", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r38.ItemName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r38.IsMaintance);
} }
function CustomerTicketViewDetailsComponent_tr_194_div_5_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maintance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_tr_194_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerTicketViewDetailsComponent_tr_194_div_5_small_2_Template, 2, 0, "small", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r38.ItemName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r38.IsMaintance);
} }
function CustomerTicketViewDetailsComponent_tr_194_div_6_div_1_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", p_r38.UniqId, ")");
} }
function CustomerTicketViewDetailsComponent_tr_194_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerTicketViewDetailsComponent_tr_194_div_6_div_1_small_3_Template, 2, 1, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r38.WarrantyDays, " Days warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r38.UniqId.length > 0);
} }
function CustomerTicketViewDetailsComponent_tr_194_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerTicketViewDetailsComponent_tr_194_div_6_div_1_Template, 4, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r38.InWarranty);
} }
function CustomerTicketViewDetailsComponent_tr_194_td_7_div_1_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_tr_194_td_7_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerTicketViewDetailsComponent_tr_194_td_7_div_1_a_1_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r38.InstallationDate === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, p_r38.InstallationDate));
} }
function CustomerTicketViewDetailsComponent_tr_194_td_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerTicketViewDetailsComponent_tr_194_td_7_div_1_a_1_Template, 5, 4, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r38.InWarranty);
} }
function CustomerTicketViewDetailsComponent_tr_194_td_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, p_r38.InstallationDate), " ");
} }
function CustomerTicketViewDetailsComponent_tr_194_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerTicketViewDetailsComponent_tr_194_td_7_div_1_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerTicketViewDetailsComponent_tr_194_td_7_div_2_Template, 3, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.ticketService.formData.Status === "INPROGRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.ticketService.formData.Status !== "INPROGRESS");
} }
function CustomerTicketViewDetailsComponent_tr_194_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remarks: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r38.MaintanceRemarks);
} }
function CustomerTicketViewDetailsComponent_tr_194_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r38.ItemQuantity, "");
} }
function CustomerTicketViewDetailsComponent_tr_194_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r38.ItemUnitCost);
} }
function CustomerTicketViewDetailsComponent_tr_194_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r38.ItemTotalCost);
} }
function CustomerTicketViewDetailsComponent_tr_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomerTicketViewDetailsComponent_tr_194_div_4_Template, 5, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomerTicketViewDetailsComponent_tr_194_div_5_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomerTicketViewDetailsComponent_tr_194_div_6_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerTicketViewDetailsComponent_tr_194_td_7_Template, 3, 2, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerTicketViewDetailsComponent_tr_194_div_10_Template, 5, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomerTicketViewDetailsComponent_tr_194_div_12_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomerTicketViewDetailsComponent_tr_194_td_13_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomerTicketViewDetailsComponent_tr_194_td_14_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r39 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r38.ItemAddredBy === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r38.ItemAddredBy === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.currentUser.Permissions.ProductWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.currentUser.Permissions.ProductWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r38.ItemDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r38.IsMaintance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r38.Type === "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.currentUser.Permissions.IsProductOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.currentUser.Permissions.IsProductOnly);
} }
function CustomerTicketViewDetailsComponent_tr_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "td", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.ticketService.formData.NetAmount);
} }
function CustomerTicketViewDetailsComponent_div_210_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "generic-ticket-icon-attachment", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("NameChange", function CustomerTicketViewDetailsComponent_div_210_Template_generic_ticket_icon_attachment_NameChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const x_r68 = ctx.$implicit; return x_r68.AttachmentName = $event; })("PathChange", function CustomerTicketViewDetailsComponent_div_210_Template_generic_ticket_icon_attachment_PathChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const x_r68 = ctx.$implicit; return x_r68.AttachmentPath = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Name", x_r68.AttachmentName)("Path", x_r68.AttachmentPath)("Status", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", x_r68.AttachmentPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CustomerTicketViewDetailsComponent_div_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No Attachment Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_tr_237_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_tr_237_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_tr_237_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Empty Service form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_tr_237_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " inprogress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_tr_237_td_18_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 159);
} }
function CustomerTicketViewDetailsComponent_tr_237_td_18_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 160);
} }
function CustomerTicketViewDetailsComponent_tr_237_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerTicketViewDetailsComponent_tr_237_td_18_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const f_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.downloadServiceFormPDF(f_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerTicketViewDetailsComponent_tr_237_td_18_i_2_Template, 1, 0, "i", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerTicketViewDetailsComponent_tr_237_td_18_i_3_Template, 1, 0, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r78.Isserviceformdownload);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.Isserviceformdownload && f_r72.CloserId === ctx_r78.IsserviceformdownloadCloserId);
} }
function CustomerTicketViewDetailsComponent_tr_237_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomerTicketViewDetailsComponent_tr_237_span_9_Template, 2, 0, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerTicketViewDetailsComponent_tr_237_span_10_Template, 2, 0, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomerTicketViewDetailsComponent_tr_237_span_11_Template, 2, 0, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomerTicketViewDetailsComponent_tr_237_td_17_Template, 2, 0, "td", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomerTicketViewDetailsComponent_tr_237_td_18_Template, 4, 2, "td", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r72 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", f_r72.ServicePrefix, "", f_r72.TicketServiceID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", f_r72.ServiceFormName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", f_r72.ServiceFormSequenceId, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r72.IsActive === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.ticketService.formData.Status != "CLOSED" && f_r72.IsActive === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.ticketService.formData.Status === "CLOSED" && f_r72.IsActive === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, f_r72.ServiceDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r72.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.ticketService.formData.Status != "CLOSED" && f_r72.IsActive === false && f_r72.IsHTML === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.ticketService.formData.Status === "CLOSED" && f_r72.IsActive === true && f_r72.IsHTML === true);
} }
function CustomerTicketViewDetailsComponent_tr_238_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No service form available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "collapsed": a0 }; };
function CustomerTicketViewDetailsComponent_div_244_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 162, 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Closer Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "polygon", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r17.CloserAriaEexpanded === false));
} }
function CustomerTicketViewDetailsComponent_tr_268_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r86.CloserPrefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r86.EnginnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, f_r86.StartDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r86.StartTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r86.EndTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r86.TotalDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r86.TicketFlag, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r86.Remarks);
} }
function CustomerTicketViewDetailsComponent_tr_269_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No closer details available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerTicketViewDetailsComponent_tr_290_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r88.Description, "");
} }
function CustomerTicketViewDetailsComponent_tr_290_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerTicketViewDetailsComponent_tr_290_ng_template_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const p_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.ReadMoreLog(p_r88); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " More...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r88.Description.substring(0, 150));
} }
function CustomerTicketViewDetailsComponent_tr_290_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomerTicketViewDetailsComponent_tr_290_div_9_Template, 2, 1, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomerTicketViewDetailsComponent_tr_290_ng_template_10_Template, 3, 1, "ng-template", null, 131, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r88 = ctx.$implicit;
    const i_r89 = ctx.index;
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r89 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r88.UserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, p_r88.LogDate, "EEEE, MMMM d, y, h:mm:ss a", "+0000"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r88.Description.length < 150)("ngIfElse", _r91);
} }
function CustomerTicketViewDetailsComponent_ng_template_303_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerTicketViewDetailsComponent_ng_template_303_Template_button_click_1_listener() { const close_r98 = ctx.close; return close_r98(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "IP:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User's Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Log Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
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
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.LocalLogData.IP, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.LocalLogData.UserName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 4, ctx_r22.LocalLogData.LogDate, "EEEE, MMMM d, y, h:mm:ss a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.LocalLogData.Description, " ");
} }
class CustomerTicketViewDetailsComponent {
    constructor(modal, service, ticketService, toastr, router, closerService, invoiceService, loginservice, http, logService, productservice, webParms, GenicService, audioRecordingService, sanitizer, notifyService) {
        this.modal = modal;
        this.service = service;
        this.ticketService = ticketService;
        this.toastr = toastr;
        this.router = router;
        this.closerService = closerService;
        this.invoiceService = invoiceService;
        this.loginservice = loginservice;
        this.http = http;
        this.logService = logService;
        this.productservice = productservice;
        this.webParms = webParms;
        this.GenicService = GenicService;
        this.audioRecordingService = audioRecordingService;
        this.sanitizer = sanitizer;
        this.notifyService = notifyService;
        this.isRecording = false;
        this.isValidTermsAndConditions = true;
        this.attachmentLocalURL = 'assets/users/NoImage.png';
        this.attachmentLocalURL2 = 'assets/users/NoImage.png';
        this.ItemIsValid = true;
        this.ItemServiceIsValid = true;
        this.ItemProductIsValid = true;
        this.ItemQuantityIsValid = true;
        this.ItemUnitCosttIsValid = true;
        this.ItemTotalAmount = 0;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
        this.AttachmentDataArray = [];
        this.IshowStockSection = true;
        this.IsRequiredCustomerName = false;
        this.tempServiceByOtherPerson = '';
        this.isShowCustonerOtherName = false;
        this.Isserviceformdownload = false;
        this.IsserviceformdownloadCloserId = '00000000-0000-0000-0000-000000000000';
        this.ItemUniqueIsValid = true;
        this.closerService.SetDefaultCloserDetailsData();
        this.invoiceService.PaymentModeList = [];
        this.CloserIsActive = '';
        this.IsCloserExpend = false;
        this.IsCloserToShow = '';
        this.CloserAriaEexpanded = false;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.localTicketTimesheet = [];
        this.ticketService.TicketItemList = [];
        this.tempTotalTimeSpan = '';
        this.TimeSlot = '00-00:00:00';
        this.TimeSlotDay = '0';
        this.TimeSlotHours = '00';
        this.TimeSlotMinuts = '00';
        this.TimeSlotSeconds = '00';
        this.CloserAttachmentSpinner = false;
        // for recording purpose bellow---
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
        this.loader = false;
        if (this.ticketService.formData.CustomerName === 'CUSTOMER NAME') {
            this.router.navigate(['/customer/customer-tickets']);
        }
        else {
            this.ticketService.refrestTicketItemlist(this.currentUser.Token, this.ticketService.formData.Id).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.ticketService.TicketItemList = [];
                        this.ticketService.TicketItemList = response.result;
                    }
                }
            }, error => console.log(error));
            this.logService.getTicketLogs(this.ticketService.formData.Id, 'Ticket', this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.logService.UserLogList = [];
                        this.logService.UserLogList = response.result;
                    }
                }
            }, error => console.log(error));
            if (this.ticketService.formData.Status === 'INPROGRESS') {
                this.ticketService.getTimerDuration(this.ticketService.formData.Id, this.currentUser.Id).subscribe(res => {
                    if (res) {
                        const response = res;
                        if (response.Message === 'success') {
                            this.ticketService.TicketTimerData = new src_app_services_ticket_module__WEBPACK_IMPORTED_MODULE_1__["TicketTimer"]();
                            this.ticketService.TicketTimerData = response.result;
                            this.myTimer();
                        }
                        if (response.Message === 'failure') {
                            console.warn(response.MessageDescription);
                        }
                    }
                }, error => console.log(error));
            }
            setTimeout(() => {
                if (this.ticketService.TicketTimerData.Status === 1) {
                    this.TimerButtunName = 'Stop';
                    this.TimerButtonClassName = 'btn btn-warning';
                    this.myTimer();
                }
                else {
                    if (this.ticketService.formData.Status === 'HOLD') {
                        this.TimerButtunName = 'Resume';
                        this.TimerButtonClassName = 'btn btn-success';
                    }
                    else {
                        this.TimerButtunName = 'Start';
                        this.TimerButtonClassName = 'btn btn-info';
                    }
                }
                this.closerService.CloserDetailsData.PaymentCollected = false;
                this.closerService.CloserDetailsData.CloserAmount = this.ticketService.formData.NetAmount;
                this.closerService.CloserDetailsData.CloserTotalAmount = this.ticketService.formData.NetAmount;
                this.closerService.CloserDetailsData.CloserGSTAmount = 7;
            }, 2000);
            // this.getMyTimesheet();
            this.getAssignedServiceFormListByTicket();
            this.getTicketCloserAttachmentList();
            this.getTicketCloserLog();
        }
    }
    getAssignedServiceFormListByTicket() {
        this.service.getAssignedServiceFormListByTicket(this.currentUser.Token, this.ticketService.formData.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.service.TicketWiseServiceFormList = response.result;
                }
            }
        }, error => console.log(error));
    }
    getTicketCloserLog() {
        this.closerService.getTicketCloserLog(this.currentUser.Token, this.ticketService.formData.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.closerService.CloserDetailsList = [];
                    this.closerService.CloserDetailsList = response.result;
                }
            }
        }, error => console.log(error));
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
    // Get time sheet
    // getMyTimesheet() {
    //   this.logService.getTicketTimeSheet(this.ticketService.formData.Id, this.currentUser.Token)
    //     .subscribe(res => {
    //       if (res) {
    //         let lst: any = [];
    //         lst = res;
    //         this.localTicketTimesheet = [];
    //         this.logService.TicketTimeSheetList = [];
    //         this.logService.TicketTimeSheetList = lst;
    //         this.localTicketTimesheet = lst;
    //         this.CountTotalTicketTimespan();
    //       }
    //     }, error => console.log(error));
    // }
    close() { }
    getTicketTimeDuration() {
        this.ticketService.getTimerDuration(this.ticketService.formData.Id, this.currentUser.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.ticketService.TicketTimerData = new src_app_services_ticket_module__WEBPACK_IMPORTED_MODULE_1__["TicketTimer"]();
                    this.ticketService.TicketTimerData = response.result;
                    this.myTimer();
                }
                if (response.Message === 'failure') {
                    console.warn(response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    myTimer() {
        this.ticketService.formData.Status = 'INPROGRESS';
        this.TimerStartTime = moment__WEBPACK_IMPORTED_MODULE_6__(this.ticketService.TicketTimerData.StartDate);
        setInterval(() => {
            const currentTime = moment__WEBPACK_IMPORTED_MODULE_6__();
            const diffTime = moment__WEBPACK_IMPORTED_MODULE_6__["duration"](currentTime.diff(this.TimerStartTime));
            const time = this.toString(diffTime.days())
                + '-' + this.toString(diffTime.hours())
                + ':' + this.toString(diffTime.minutes())
                + ':' + this.toString(diffTime.seconds());
            this.TimeSlot = time;
            this.TimeSlotDay = this.toString(diffTime.days());
            this.TimeSlotHours = this.toString(diffTime.hours());
            this.TimeSlotMinuts = this.toString(diffTime.minutes());
            this.TimeSlotSeconds = this.toString(diffTime.seconds());
        }, 1000);
    }
    toString(value) {
        let val = value;
        if (!value) {
            val = '00';
        }
        if (value < 10) {
            val = '0' + value;
        }
        return val;
    }
    removeandaddclass() {
        setTimeout(() => {
            let demoClasses = null;
            let demoCollapseClasses = null;
            demoClasses = document.querySelectorAll('#ulOpenCloserTab');
            demoClasses.forEach(element => {
                element.childNodes.forEach(el => {
                    if (el.firstChild.id === 'activeTab5') {
                        el.firstChild.classList.add('active');
                    }
                    else {
                        el.firstChild.classList.remove('active');
                    }
                });
            });
            demoCollapseClasses = document.querySelectorAll('#Idd');
            demoCollapseClasses.forEach(el => {
                el.firstChild.classList.remove('active');
            });
            demoCollapseClasses = document.querySelectorAll('#Idd');
            demoCollapseClasses.forEach(el => {
                el.childNodes.forEach(en => {
                    if (en.id === 'kt_tabs_ClosedDetails') {
                        en.classList.add('active');
                        this.IsCloserToShow = 'show';
                        this.CloserAriaEexpanded = true;
                    }
                    else {
                        en.classList.remove('active');
                    }
                });
            });
        }, 500);
    }
    removeAttSection(index) {
        this.AttachmentDataArray.splice(index);
    }
    downloadServiceFormPDF(f) {
        if (this.closerService.CloserDetailsList.length <= 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Closer details not available!',
            });
        }
        else {
            this.Isserviceformdownload = true;
            this.IsserviceformdownloadCloserId = f.CloserId;
            this.service.downoadServiceFormPDF(f.CloserId)
                .subscribe(res => {
                const response = res;
                if (response.Message === 'success') {
                    this.Isserviceformdownload = false;
                    const link = this.localPrependUrl + '/Documents/ServiceFormPDF/' + f.ServicePrefix + f.TicketServiceID + '.pdf';
                    const a = $("<a>")
                        .attr("href", link)
                        .attr("target", "_blank")
                        .attr("download", f.ServicePrefix + f.TicketServiceID + '.pdf')
                        .appendTo("body");
                    a[0].click();
                    a.remove();
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                    this.Isserviceformdownload = false;
                }
            }, error => console.log(error));
        }
    }
    CountTotalTicketTimespan() {
        var hour = 0;
        var minute = 0;
        var second = 0;
        this.localTicketTimesheet.forEach(el => {
            if (el.EndDate === null || el.EndDate === undefined) {
                el.TimeDiff = '00:00:00';
            }
            else {
                hour += parseInt(el.TimeDiff.split(':')[0]);
                minute += parseInt(el.TimeDiff.split(':')[1]);
                second += parseInt(el.TimeDiff.split(':')[2]);
            }
        });
        hour = (hour + minute / 60);
        let min = minute + second / 60;
        minute = min % 60;
        second = second % 60;
        let h = '00';
        let m = '00';
        let s = '00';
        h = hour.toString().split('.')[0];
        m = minute.toString().split('.')[0];
        s = second.toString().split('.')[0];
        var ttl = this.toString(h) + ':' + this.toString(m);
        this.tempTotalTimeSpan = ttl;
    }
    loadTimesheet(Id) {
        setTimeout(() => {
            this.localTicketTimesheet = [];
            if (Id === 'All') {
                this.localTicketTimesheet = this.logService.TicketTimeSheetList;
            }
            else {
                this.localTicketTimesheet = this.logService.TicketTimeSheetList.filter(e => e.EngineerId === Id);
            }
            this.CountTotalTicketTimespan();
        }, 1000);
    }
    LoadTimesheetOnSearch(value) {
        setTimeout(() => {
            this.localTicketTimesheet = this.logService.TicketTimeSheetList.filter(e => e.EngineerName.toLowerCase().match(value.toLowerCase()));
            this.CountTotalTicketTimespan();
        }, 1000);
    }
    ReadMoreLog(p) {
        this.LocalLogData = new src_app_services_userlog_module__WEBPACK_IMPORTED_MODULE_5__["UserLog"]();
        this.LocalLogData = p;
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    numberOnly(event) {
        if (Number(event.target.value) === 0) {
            event.target.value = null;
        }
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    numberwithDecimalOnly(event) {
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
CustomerTicketViewDetailsComponent.ɵfac = function CustomerTicketViewDetailsComponent_Factory(t) { return new (t || CustomerTicketViewDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_serviceform_service__WEBPACK_IMPORTED_MODULE_8__["ServiceformService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_9__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_closer_service__WEBPACK_IMPORTED_MODULE_12__["CloserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_13__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_16__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_17__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_18__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_generic_service__WEBPACK_IMPORTED_MODULE_19__["GenericService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_audio_recording_service__WEBPACK_IMPORTED_MODULE_20__["AudioRecordingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_22__["NotificationService"])); };
CustomerTicketViewDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerTicketViewDetailsComponent, selectors: [["app-customer-ticket-view-details"]], viewQuery: function CustomerTicketViewDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, decls: 305, vars: 58, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid", "breadcud-kt-container"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/customer/customer-dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "onclick", "window.history.back()", 1, "kt-subheader__breadcrumbs-link"], [1, "kt-subheader__toolbar"], [1, "new-quote-main-section"], [1, "kt-container", "kt-container--fluid"], [1, "new-requst-filter_form", "create-new-client-popup"], [1, "accordion", "accordion-solid"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-xs-12", "service-found-form-info", "job-for-tab-content"], [1, "kt-portlet__body"], [1, "kt-portlet__body", "customer-listing-datatable", "service-form-datatable"], [1, "kt-section__content"], [1, "ticket-details"], [1, "col-md-5"], [1, "ticket-detail-1"], [1, "customer-details"], [1, "figure-icon"], [1, "far", "fa-user"], [1, "fas", "fa-building"], [1, "fas", "fa-envelope"], [1, "fas", "fa-phone"], [1, "fas", "fa-map"], ["target", "_blank", 3, "href"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-md-7"], [1, "ticket-detail-2"], [1, "table-detail-2"], [1, "table"], [1, "ticket_number"], ["class", "fas fa-circle text-danger", 4, "ngIf"], ["class", "fas fa-circle text-info", 4, "ngIf"], ["class", "fas fa-circle text-success", 4, "ngIf"], [1, "date_sec"], [1, "normal-text"], [1, "engineer_sec"], ["colspan", "2"], [3, "title", 4, "ngFor", "ngForOf"], [1, "row", 2, "padding-left", "16px"], [1, "text-center"], [3, "Status", "OverDueDays", "StatusChange", "OverDueDaysChange"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, ""], [1, "kt-widget19__wrapper"], [1, "kt-widget19__content"], [1, "kt-widget19__userpic"], [1, "col-md-12", "new-request-service-details-form"], [1, "row", "job-client-tabbing"], ["id", "ulOpenCloserTab", "role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-line", "nav-tabs-bold", "nav-tabs-line-3x", "nav-tabs-line-brand", "tabbing-jobs-client"], [1, "custoTab-2", "nav-item", "service-nav-item"], ["data-toggle", "tab", "href", "#kt_tabs_CustomerInfo", "id", "activeTab1", 1, "nav-link", "active"], [1, "kt-switch", "kt-switch--lg"], ["data-toggle", "tab", "href", "#kt_tabs_ProductInfo", "id", "activeTab2", 1, "nav-link"], ["data-toggle", "tab", "href", "#kt_tabs_CommentsImages", "id", "activeTab3", 1, "nav-link"], ["data-toggle", "tab", "href", "#kt_tabs_ServiceForm", "id", "activeTab4", 1, "nav-link"], ["data-toggle", "tab", "href", "#kt_tabs_ClosedDetails", "id", "activeTab5", 1, "nav-link"], ["data-toggle", "tab", "href", "#kt_tabs_Log", "id", "activeTab6", 1, "nav-link"], ["data-toggle", "tab", "href", "#kt_tabs_Feedback", 1, "nav-link"], ["id", "Idd", 1, "tab-content", "job-for-tab-content"], ["id", "kt_tabs_CustomerInfo", "role", "tabpanel", 1, "tab-pane", "active"], [1, "row", "service-supports-heading", "padd-top-15", "custInfo"], [1, "col-md-6", "col-sm-6", "colxs-12"], [1, "support-service-incident-form"], [1, "support-service-serial-number"], [1, "kt-section", "ktrSection"], [1, "table", "table-bordered", "service-form-table-border", "service-form-table-border"], ["width", "180px"], ["colspan", "3"], ["id", "kt_tabs_ProductInfo", "role", "tabpanel", 1, "tab-pane"], [1, "col-md-12", "col-sm-12", "colxs-12"], [1, "col-md-12"], ["id", "EngiProductSection", "aria-labelledby", "EngiProductSection", "data-parent", "#accordionExample8", 1, "collapse"], [1, "card-body", "padd-left-0", "padd-right-0"], [1, "kt-portlet__body", "create-new-client-portlet-body"], [1, "kt-section", "kt-section--first", "CloserDtBody", "dds"], [1, "prodByEngSection"], ["autocomplete", "Off"], [1, "col-md-12", "col-lg-12", "kt-portlet__body", "padd-top-0"], [1, "table", "table-bordered", "service-form-table-border", "service-form-table-border", "htBorder"], [4, "ngFor", "ngForAsync", "ngForOf"], ["id", "kt_tabs_CommentsImages", "role", "tabpanel", 1, "tab-pane"], [1, "service-supports-heading", "padd-top-15", "custInfo"], [1, "support-service-incident-form", "cmtImage"], [2, "margin", "0 0 0 8px"], [1, "ticketImgBox"], ["class", "col-md-1", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["id", "kt_tabs_ServiceForm", "role", "tabpanel", 1, "tab-pane"], [1, "support-service-incident-form", "serviceFormHeading"], [1, "tblTicketServiceform", "table", "table-bordered", "service-form-table-border", "service-form-table-border", "htBorder"], [2, "width", "2%"], [2, "width", "115", "text-align", "center"], ["id", "kt_tabs_ClosedDetails", "role", "tabpanel", 1, "tab-pane"], ["class", "accordion accordion-solid accordion-toggle-svg", "id", "accordionExample8", 4, "ngIf"], [1, "kt-portlet__body", "closeformbody"], [2, "width", "15%"], [2, "width", "10%"], [2, "width", "20%"], ["id", "kt_tabs_Log", "role", "tabpanel", 1, "tab-pane"], [1, "kt-portlet__body", "padd-top-0"], ["id", "kt_tabs_Feedback", "role", "tabpanel", 1, "tab-pane"], [1, "col-1"], [3, "ratingcount", "Editable", "Status", "ratingcountChange", "StatusChange"], ["modalContent", ""], [1, "fa", "fa-puzzle-piece"], [1, "scTicketissueType"], ["onclick", "window.history.back()", 1, "btn", "btn-primary", 2, "margin-right", "3px", "color", "white", "padding", "4px 9px", "cursor", "pointer", "margin-left", "6px"], ["class", "btnTicketClock", 4, "ngIf"], [1, "btnTicketClock"], [2, "padding", "0"], ["class", "timing", 4, "ngIf"], [1, "timing"], [1, "fas", "fa-clock"], ["style", "font-size: 14px;", 4, "ngIf"], [2, "font-size", "14px"], [1, "fas", "fa-circle", "text-danger"], [1, "fas", "fa-circle", "text-info"], [1, "fas", "fa-circle", "text-success"], ["class", "normal-text", 4, "ngIf", "ngIfElse"], ["descriptioncontent", ""], [1, "btooltip2"], [1, "btooltiptext2"], [3, "title"], ["width", "20px", "height", "20px", 3, "src", 4, "ngIf"], ["width", "20px", "height", "20px", 3, "src"], ["class", "kt-badge kt-badge--brand kt-badge--inline kt-badge--pill", 4, "ngIf"], [1, "kt-badge", "kt-badge--brand", "kt-badge--inline", "kt-badge--pill"], ["href", "javascript:;", "style", "cursor:not-allowed;", 4, "ngIf"], ["href", "javascript:;", 2, "cursor", "not-allowed"], ["width", "10%"], ["width", "80%"], [1, "col-md-1"], [3, "Name", "Path", "Status", "NameChange", "PathChange"], [1, "col-md-4"], [1, "fa", "fa-download", "text-success"], [1, "singleBox"], [1, "btn", "btn-label-primary", "ticket-cirle-red"], [2, "margin", "0 0 0 20px"], ["class", "kt-badge kt-badge--success kt-badge--inline kt-badge--pill", 4, "ngIf"], ["class", "kt-badge kt-badge--danger kt-badge--inline kt-badge--pill", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "kt-badge--pill"], [1, "kt-badge", "kt-badge--danger", "kt-badge--inline", "kt-badge--pill"], [2, "text-align", "center"], ["href", "javascript:void(0)", "title", "Download Service Form", 3, "click"], ["class", "fa fa-download", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-spinner fa-spin", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-download"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"], ["colspan", "4"], ["id", "accordionExample8", 1, "accordion", "accordion-solid", "accordion-toggle-svg"], ["scrollCloserSection", ""], [1, "card"], [1, "col-md-12--"], ["id", "headingOne8", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseOne8", "aria-expanded", "CloserAriaEexpanded", "aria-controls", "collapseOne8", "id", "txtExpenseCloser", 1, "card-title", "padd-left-0", "padd-right-0", 2, "float", "right", 3, "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Shape", "points", "0 0 24 0 24 24 0 24"], ["d", "M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z", "id", "Path-94", "fill", "#000000", "fill-rule", "nonzero"], ["d", "M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z", "id", "Path-94", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3", "transform", "translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) "], ["colspan", "9", 2, "text-align", "center"], [2, "width", "5%"], [2, "width", "40%"], [4, "ngIf", "ngIfElse"], ["href", "javascript:void(0)", 1, "btbRadMore", 3, "click"], [1, "modal-header"], ["type", "button", 1, "close", 2, "color", "red", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "table", "table-bordered", "service-form-table-border"]], template: function CustomerTicketViewDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CustomerTicketViewDetailsComponent_em_49_Template, 3, 1, "em", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CustomerTicketViewDetailsComponent_p_50_Template, 5, 1, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CustomerTicketViewDetailsComponent_div_53_Template, 4, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, CustomerTicketViewDetailsComponent_i_61_Template, 1, 0, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, CustomerTicketViewDetailsComponent_i_62_Template, 1, 0, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CustomerTicketViewDetailsComponent_i_63_Template, 1, 0, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, CustomerTicketViewDetailsComponent_p_70_Template, 5, 2, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Appointment: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, CustomerTicketViewDetailsComponent_li_80_Template, 4, 4, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "generic-ticket-status", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function CustomerTicketViewDetailsComponent_Template_generic_ticket_status_StatusChange_83_listener($event) { return ctx.ticketService.formData.Status = $event; })("OverDueDaysChange", function CustomerTicketViewDetailsComponent_Template_generic_ticket_status_OverDueDaysChange_83_listener($event) { return ctx.ticketService.formData.OverDueDays = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ul", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Product\u00A0/\u00A0Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Comments\u00A0Images ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Service\u00A0Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Closer\u00A0Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Log's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Customer Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "table", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Company Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Customer Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Contact Info:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Product / Service Information \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "form", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "table", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, CustomerTicketViewDetailsComponent_th_186_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](191, CustomerTicketViewDetailsComponent_th_191_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](192, CustomerTicketViewDetailsComponent_th_192_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](194, CustomerTicketViewDetailsComponent_tr_194_Template, 15, 10, "tr", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](197, CustomerTicketViewDetailsComponent_tr_197_Template, 8, 1, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h2", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Comments & Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, CustomerTicketViewDetailsComponent_div_210_Template, 8, 4, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, CustomerTicketViewDetailsComponent_div_211_Template, 5, 0, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Customer Service form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "table", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "th", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Service Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Service Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "th", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](237, CustomerTicketViewDetailsComponent_tr_237_Template, 19, 13, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](238, CustomerTicketViewDetailsComponent_tr_238_Template, 3, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](244, CustomerTicketViewDetailsComponent_div_244_Template, 12, 3, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "table", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "th", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Service Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "th", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Start Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "th", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "End Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "th", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Total Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "th", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "th", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](268, CustomerTicketViewDetailsComponent_tr_268_Template, 20, 10, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](269, CustomerTicketViewDetailsComponent_tr_269_Template, 3, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "table", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "User's Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Log Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](290, CustomerTicketViewDetailsComponent_tr_290_Template, 12, 9, "tr", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Rating & Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "generic-ticket-feedback", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ratingcountChange", function CustomerTicketViewDetailsComponent_Template_generic_ticket_feedback_ratingcountChange_300_listener($event) { return ctx.ticketService.formData.Rating = $event; })("StatusChange", function CustomerTicketViewDetailsComponent_Template_generic_ticket_feedback_StatusChange_300_listener($event) { return ctx.ticketService.formData.Status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](303, CustomerTicketViewDetailsComponent_ng_template_303_Template, 32, 7, "ng-template", null, 115, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.webParms.WebsiteParam.UrlPath, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket, " Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ticketService.formData.CustomerName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ticketService.formData.CustomerCompanyName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ticketService.formData.CustomerEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ticketService.formData.CustomerContactNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://maps.google.com/?q=", ctx.ticketService.formData.CustomerAddress, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketService.formData.CustomerAddress == null ? null : ctx.ticketService.formData.CustomerAddress.split(","));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.formData.TicketWiseIssueType.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.formData.Status === "UPCOMING" || ctx.ticketService.formData.Status === "HOLD" || ctx.ticketService.formData.Status === "INPROGRESS" || ctx.ticketService.formData.Status === "OVERDUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.ticketService.formData.TicketId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.formData.Priority === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.formData.Priority === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.formData.Priority === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ticketService.formData.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.formData.Description.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](75, 50, ctx.ticketService.formData.AppointmentStart, "MMM d, y HH:mm a", "+0000"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](76, 54, ctx.ticketService.formData.AppointmentEnd, "HH:mm a", "+0000"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketService.formData.TicketTeams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", ctx.ticketService.formData.Status)("OverDueDays", ctx.ticketService.formData.OverDueDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket.toUpperCase(), " DETAILS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ticketService.formData.CustomerCompanyName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ticketService.formData.CustomerName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Contact No : ", ctx.ticketService.formData.CustomerContactNo, ", Email : ", ctx.ticketService.formData.CustomerEmail, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://maps.google.com/?q=", ctx.ticketService.formData.CustomerAddress, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ticketService.formData.CustomerAddress, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.ProductWarranty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketService.TicketItemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ticketService.formData.InternalNoteDescription, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketService.formData.TicketAttachments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ticketService.formData.TicketAttachments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, " Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.TicketWiseServiceFormList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.TicketWiseServiceFormList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.formData.Status === "INPROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, " Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, " Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.closerService.CloserDetailsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.closerService.CloserDetailsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Ticket, " Log's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logService.UserLogList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratingcount", ctx.ticketService.formData.Rating)("Editable", 2)("Status", ctx.ticketService.formData.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ticketService.formData.RatingFeedback, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_24__["TicketStatusComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgForm"], _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_26__["TicketFeedbackComponent"], _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_27__["TicketIconAttachmentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_23__["DatePipe"]], styles: [".support-service-incident-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after{display:none !important;}\r\n.support-service-incident-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#22376b;font-size:24px;}\r\n\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0.95rem !important;}\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border: 1px solid #e2e2e2;}\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{font-weight:600;font-size:15px;}\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{font-size:15px;}\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color: #edf3f7;}\r\ntable.table.table-bordered.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f1f1f1;}\r\n.htBorder[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {border:1px solid #e2e2e2 !important;font-weight:600;font-size:15px;}\r\n.tblTicketServiceform[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:white !important;}\r\n.row.job-client-tabbing[_ngcontent-%COMP%]{margin: 0px 3px 20px !important;padding: 0px 0px 20px !important;border-bottom: 1px solid #dadada !important;}\r\nul.nav.nav-tabs.nav-tabs-line.nav-tabs-bold.nav-tabs-line-3x.nav-tabs-line-brand.tabbing-jobs-client[_ngcontent-%COMP%]{margin:0 0 0 !important;}\r\n.service-form-table-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:15px;}\r\n.service-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background: #dedede  !important;border: none !important;text-align: center !important;border-bottom:3px solid transparent !important;}\r\n.new-requst-filter_form[_ngcontent-%COMP%]   span.kt-switch.kt-switch--lg[_ngcontent-%COMP%]{display:block !important;}\r\n.new-requst-filter_form[_ngcontent-%COMP%]   span.kt-switch.kt-switch--lg[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;}\r\n.service-found-form-info[_ngcontent-%COMP%]   li.nav-item.service-nav-item[_ngcontent-%COMP%]{border-right: 1px solid #bfbfbf;}\r\n.service-found-form-info[_ngcontent-%COMP%]   li.nav-item.service-nav-item[_ngcontent-%COMP%]:last-child{border-right:0px !important;}\r\n.service-nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .service-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#21366B !important;border:none !important;color:white !important;text-align:center;border-bottom:none !important;}\r\n.kt-portlet__body.customer-listing-datatable.service-form-datatable[_ngcontent-%COMP%]{border:none !important;}\r\n.ticket-details[_ngcontent-%COMP%]{background-color:white;padding:30px 40px;}\r\n.customer-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px;position: relative;margin:15px 0px 20px;color:#20376c;font-weight:600;}\r\n.figure-icon[_ngcontent-%COMP%]{position: absolute;left: 0;top: 2px;display:none;width: 45px;height: 45px;line-height: 38px;text-align: center;background-color: #FA6130;border-radius: 50%;margin-right: 15px;}\r\n.customer-details[_ngcontent-%COMP%]{border-right: 2px solid #efefef;}\r\n.figure-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;font-size:24px;}\r\n.ticket-open-sec[_ngcontent-%COMP%]{display: inline-block;padding:8px 22px;color:white;background-color:#4CAF50;border-radius:30px;}\r\n.ticket-open-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:white;pointer-events:none;font-size:14px;}\r\n.customer-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:black;margin-bottom:0.6rem;font-weight:600;padding-left:30px;position: relative;}\r\n.customer-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position: absolute;left: 0;top: 6px;color: #999999;}\r\n.start-sec[_ngcontent-%COMP%]{display: inline-block;padding:8px 22px;color:white;background-color:#FA6130;}\r\n.start-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:white;pointer-events:none;font-size:14px;}\r\n.table-detail-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none !important;}\r\n.timing[_ngcontent-%COMP%]{display:inline-block;font-size:22px;color:#21366B;margin-left: 4px;}\r\n.timing[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:7px;}\r\n.ticket_number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:24px;font-weight:600;margin-bottom:0px;;}\r\n.table-detail-2[_ngcontent-%COMP%]{margin:25px 0px 0px;background-color:#f1f1f1;padding:0px 10px 15px;}\r\n.ticket_number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#4CAF50;font-size:12px;margin-left:10px;vertical-align:middle;}\r\n.date_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .engineer_sec[_ngcontent-%COMP%]{font-size:17px;color:black;margin-bottom:0px;font-weight:600;}\r\n.support-service-incident-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:black;padding-bottom:15px;}\r\n.custInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.kt-portlet__body.new_clients_properties_body[_ngcontent-%COMP%]{border:none !important;}\r\nspan.btn.btn-label-primary.ticket-cirle-red[_ngcontent-%COMP%]{    width: 73px;padding: 8px 5px 8px 5px;font-size: 14px;background-color:#C3E7FA;color:#3984ca;}\r\n.dropdown-menu.show[_ngcontent-%COMP%]{left: 0px !important;top: 3px !important; padding:0 !important;box-shadow:5px 1px 10px #c3c3c3;}\r\n.dropdown-menu.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#C3E7FA;color:black;}\r\n.dropdown-menu.show[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dropdown-menu.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{background-color:#FA6130;color:white;}\r\n.engineer_sec[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0px !important;padding-left:0px !important;}\r\n.engineer_sec[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding:0px 5px;}\r\n.schedule[_ngcontent-%COMP%]{display: inline-block;padding:8px 22px;color:white;background-color:#4CAF50;border-radius:30px;}\r\n.schedule[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:white;pointer-events:none;font-size:14px;}\r\n.ticket-open-sec[_ngcontent-%COMP%]{margin:0 5px;}\r\n.CloserAttachmentSection[_ngcontent-%COMP%]{border:none !important;}\r\n#frmCloserForm[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;font-size:16px;color:black;}\r\n.forn-group[_ngcontent-%COMP%]{margin-bottom:15px;;}\r\n.button-sec[_ngcontent-%COMP%]{margin:10px 0px; display: inline-block;}\r\n.CloserAttachmentSection[_ngcontent-%COMP%]{padding: 0px !important;;margin:0px !important;}\r\n.btnAddNewAttSection[_ngcontent-%COMP%]{padding:10px 24px !important;background-color:#e1e1ef !important;color:black !important;border:1px solid #e1e1ef !important;}\r\n.btnRemoveSection[_ngcontent-%COMP%]{margin: 4px 0px 2px 15px !important;padding:10px 24px !important;background-color:#2C77F4 !important;color:white !important;border:1px solid transparent;}\r\n.row.service-supports-heading[_ngcontent-%COMP%]{border-bottom:0px !important;}\r\n.accordion.accordion-solid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background-color:#dedede;height:60px;padding-right:15px;}\r\n.accordion.accordion-toggle-svg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{background-color: #dedede;}\r\n#frmCloserForm[_ngcontent-%COMP%]{margin-top:0px !important;}\r\n#frmCloserForm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:80px;max-height:120px;}\r\n.bottom-btn[_ngcontent-%COMP%]   .btnCloseCloserForm[_ngcontent-%COMP%]{padding:10px 24px !important;background-color:#e1e1ef !important;color:black !important;border:1px solid #e1e1ef !important;}\r\n.bottom-btn[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{padding:10px 24px !important;background-color:#2C77F4 !important;color:white !important;border:1px solid transparent;}\r\n.job-for-tab-content[_ngcontent-%COMP%]   .kt-portlet[_ngcontent-%COMP%]   .kt-portlet__body[_ngcontent-%COMP%]{background-color:white;}\r\n.col-md-2.right-side-doller-form-info[_ngcontent-%COMP%]{top:0px !important;}\r\n.product-head[_ngcontent-%COMP%]{background-color:#e4e4e4;}\r\n.product-tabcontent[_ngcontent-%COMP%]{background-color:white;margin-bottom:30px;}\r\n.product-head[_ngcontent-%COMP%]{margin:0px;padding:0px;}\r\n.product-first-name[_ngcontent-%COMP%]{padding-top: 5px;}\r\n.total-job-price-client[_ngcontent-%COMP%]{margin:20px 0px !important;}\r\n.total-job-price-client[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0px !important;}\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n    min-width: 80px !important;\r\n}\r\n.btn-sm[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]{padding: 1.2rem 1.8rem;font-size: 0.875rem;line-height: 1.5;border-radius: 0;background: #0084CA !important;color: white !important;}\r\n.team-inner-1[_ngcontent-%COMP%] {margin-top:15px;padding:0px 15px;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0px;;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:black;display: inline-block;padding: 8px 8px;background-color: #eaeaea;margin: 0px 3px 5px;border-radius: 5px;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ border-radius:40%; height: 20;width: 20; }\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size: 10px;\r\n    padding-left: 8px;\r\n    padding-top: 6px;}\r\n.box-1[_ngcontent-%COMP%]{display:inline-block;width:25%}\r\n.check-mark[_ngcontent-%COMP%]{margin-top:18px;position:relative;}\r\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}\r\n.expo[_ngcontent-%COMP%]{float:right;}\r\n.checkbox-downbox[_ngcontent-%COMP%]{position: absolute;bottom:-20px;background-color:#fff;padding:10px;border-radius:8px;width:131%;z-index: 9;}\r\n.custom-day[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        padding: 0.185rem 0.25rem;\r\n        display: inline-block;\r\n        height: 2rem;\r\n        width: 2rem;\r\n      }\r\n.custom-day.focused[_ngcontent-%COMP%] {\r\n        background-color: #e6e6e6;\r\n      }\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n        background-color: rgb(2, 117, 216);\r\n        color: white;\r\n      }\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n        background-color: rgba(2, 117, 216, 0.5);\r\n      }\r\n.txtSearch-ticket[_ngcontent-%COMP%]{height: 35px; border-radius: 27px; border: 1px solid gray; padding: 0 16px;\r\n        width: 100%;}\r\n.box-1.check-mark[_ngcontent-%COMP%]{text-align: right; margin-top: 7px; position: relative; margin-right: 9px;}\r\nlabel.kt-checkbox[_ngcontent-%COMP%]{color: #000000 ;font-weight: 600;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZW5naW5lZXIvZW5naW5lZXItdGlja2V0L2VuZ2luZWVyLXRpY2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5Qyx1QkFBdUIsQ0FBQztBQUNqRSxrQ0FBa0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUMvRDs7OzZKQUc2SjtBQUM3Six3REFBd0QsMEJBQTBCLENBQUM7QUFDbkYsMkRBQTJELHlCQUF5QixDQUFDO0FBQ3JGLHVFQUF1RSxlQUFlLENBQUMsY0FBYyxDQUFDO0FBQ3RHLHNFQUFzRSxjQUFjLENBQUM7QUFDckYsdUVBQXVFLHlCQUF5QixDQUFDO0FBQ2pHLHdFQUF3RSx3QkFBd0IsQ0FBQztBQUNqRyxjQUFjLG1DQUFtQyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUM7QUFDakYsK0JBQStCLGlDQUFpQyxDQUFDO0FBQ2pFLHdCQUF3QiwrQkFBK0IsQ0FBQyxnQ0FBZ0MsQ0FBQywyQ0FBMkMsQ0FBQztBQUNySSxxR0FBcUcsdUJBQXVCLENBQUM7QUFDN0gsaUNBQWlDLGNBQWMsQ0FBQztBQUNoRCxvQkFBb0IsK0JBQStCLENBQUMsdUJBQXVCLENBQUMsNkJBQTZCLENBQUMsOENBQThDLENBQUM7QUFDekoscURBQXFELHdCQUF3QixDQUFDO0FBQzlFLHdEQUF3RCxjQUFjLENBQUM7QUFDdkUsc0RBQXNELCtCQUErQixDQUFDO0FBQ3RGLGlFQUFpRSwyQkFBMkIsQ0FBQztBQUM3RixzREFBc0QsbUNBQW1DLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLENBQUM7QUFDeEwsb0VBQW9FLHNCQUFzQixDQUFDO0FBQzNGLGdCQUFnQixzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQztBQUN6RCxxQkFBcUIsY0FBYyxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDMUcsYUFBYSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDO0FBQzVMLGtCQUFrQiwrQkFBK0IsQ0FBQztBQUNsRCxlQUFlLFdBQVcsQ0FBQyxjQUFjLENBQUM7QUFDMUMsaUJBQWlCLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoSCxtQkFBbUIsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztBQUNsRSxvQkFBb0IsY0FBYyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7QUFDekgsc0JBQXNCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO0FBQ3pFLFdBQVcscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDO0FBQ3ZGLGFBQWEsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztBQUM1RCw0QkFBNEIsc0JBQXNCLENBQUM7QUFDbkQsUUFBUSxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzNFLFVBQVUsZ0JBQWdCLENBQUM7QUFDM0IsaUJBQWlCLGNBQWMsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUU7QUFDbkUsZ0JBQWdCLG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO0FBQ25GLHdCQUF3QixhQUFhLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO0FBQzVGLDJCQUEyQixjQUFjLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztBQUN4RixrQ0FBa0MsV0FBVyxDQUFDLG1CQUFtQixDQUFDO0FBQ2xFLFlBQVksY0FBYyxDQUFDO0FBRTNCLG9DQUFvQyxtQkFBbUIsQ0FBQztBQUN4RCx5Q0FBeUMsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3RHLHVDQUF1QyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ2xFLGdDQUFnQyx3QkFBd0IsQ0FBQztBQUN6RCxrQ0FBa0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDN0UsaUNBQWlDLGtCQUFrQixDQUFDO0FBQ3BELGlDQUFpQyx3QkFBd0IsQ0FBQztBQUMxRCw4Q0FBOEMsc0JBQXNCLENBQUM7QUFDckUsZ0RBQWdELFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQzVJLG9CQUFvQixvQkFBb0IsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsQ0FBQywrQkFBK0IsQ0FBQztBQUNuSCx5QkFBeUIsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQzlELGdFQUFnRSx3QkFBd0IsQ0FBQyxXQUFXLENBQUM7QUFDckcsaUJBQWlCLDRCQUE0QixDQUFDLDJCQUEyQixDQUFDO0FBQzFFLG9CQUFvQixvQkFBb0IsQ0FBQyxlQUFlLENBQUM7QUFDekQsVUFBVSxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUM7QUFDekcsWUFBWSxXQUFXLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO0FBQzNELGlCQUFpQixZQUFZLENBQUM7QUFDOUIseUJBQXlCLHNCQUFzQixDQUFDO0FBQ2hELGlDQUFpQyxlQUFlLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztBQUM1RSxZQUFZLGtCQUFrQixFQUFFO0FBQ2hDLFlBQVksZUFBZSxFQUFFLHFCQUFxQixDQUFDO0FBQ25ELHlCQUF5Qix1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQztBQUN4RSxxQkFBcUIsNEJBQTRCLENBQUMsbUNBQW1DLENBQUMsc0JBQXNCLENBQUMsbUNBQW1DLENBQUM7QUFDakosa0JBQWtCLG1DQUFtQyxDQUFDLDRCQUE0QixDQUFDLG1DQUFtQyxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixDQUFDO0FBQzNLLDhCQUE4Qiw0QkFBNEIsQ0FBQztBQUMzRCw4Q0FBOEMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0FBQ3RHLCtEQUErRCx5QkFBeUIsQ0FBQztBQUN6RixlQUFlLHlCQUF5QixDQUFDO0FBQ3pDLHdCQUF3QixXQUFXLENBQUMsZ0JBQWdCLENBQUM7QUFDckQsZ0NBQWdDLDRCQUE0QixDQUFDLG1DQUFtQyxDQUFDLHNCQUFzQixDQUFDLG1DQUFtQyxDQUFDO0FBQzVKLHlCQUF5Qiw0QkFBNEIsQ0FBQyxtQ0FBbUMsQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsQ0FBQztBQUM5SSxtREFBbUQsc0JBQXNCLENBQUM7QUFDMUUsc0NBQXNDLGtCQUFrQixDQUFDO0FBQ3pELGNBQWMsd0JBQXdCLENBQUM7QUFDdkMsb0JBQW9CLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO0FBQzlELGNBQWMsVUFBVSxDQUFDLFdBQVcsQ0FBQztBQUNyQyxvQkFBb0IsZ0JBQWdCLENBQUM7QUFDckMsd0JBQXdCLDBCQUEwQixDQUFDO0FBQ25ELDBCQUEwQiw0QkFBNEIsQ0FBQztBQUN2RDtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBLDhCQUE4QixzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyx1QkFBdUIsQ0FBQztBQUNsSyxlQUFlLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNoRCxpQkFBaUIsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixFQUFFO0FBQ3hFLG9CQUFvQixXQUFXLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUM7QUFDeEkseUJBQXlCLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxTQUFTLEVBQUU7QUFDbEUsMkJBQTJCLGVBQWU7SUFDdEMsaUJBQWlCO0lBQ2pCLGdCQUFnQixDQUFDO0FBQ2pCLE9BQU8sb0JBQW9CLENBQUMsU0FBUztBQUN6QyxZQUFZLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztBQUM5QyxrQkFBa0IsVUFBVTtBQUM1QixNQUFNLFdBQVcsQ0FBQztBQUNsQixrQkFBa0Isa0JBQWtCLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0FBQ3pIO1FBQ0ksa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLFdBQVc7TUFDYjtBQUNBO1FBQ0UseUJBQXlCO01BQzNCO0FBQ0E7UUFDRSxrQ0FBa0M7UUFDbEMsWUFBWTtNQUNkO0FBQ0E7UUFDRSx3Q0FBd0M7TUFDMUM7QUFDQSxrQkFBa0IsWUFBWSxFQUFFLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLGVBQWU7UUFDMUYsV0FBVyxDQUFDO0FBQ2Qsa0JBQWtCLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztBQUNsRyxrQkFBa0IsZUFBZSxDQUFDLGdCQUFnQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vZW5naW5lZXIvZW5naW5lZXItdGlja2V0L2VuZ2luZWVyLXRpY2tldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cHBvcnQtc2VydmljZS1pbmNpZGVudC1mb3JtIGgyOjphZnRlcntkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9XHJcbi5zdXBwb3J0LXNlcnZpY2UtaW5jaWRlbnQtZm9ybSBoMntjb2xvcjojMjIzNzZiO2ZvbnQtc2l6ZToyNHB4O31cclxuLyogLnNlcnZpY2UtbmF2LWl0ZW0gYXtiYWNrZ3JvdW5kOiAjZTRlNGU0ICFpbXBvcnRhbnQ7bWFyZ2luOiAwcHggNXB4ICFpbXBvcnRhbnQ7Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czo1MHB4ICFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcblxyXG4ubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1saW5lLTN4IC5uYXYtaXRlbXttYXJnaW4tYm90dG9tOjBweCAhaW1wb3J0YW50O2JvcmRlci1yaWdodDpub25lICFpbXBvcnRhbnQ7fVxyXG4uc2VydmljZS1uYXYtaXRlbSBhLmFjdGl2ZSwgLnNlcnZpY2UtbmF2LWl0ZW0gYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNGQTVGMkIgIWltcG9ydGFudDtib3JkZXI6bm9uZSAhaW1wb3J0YW50O2NvbG9yOndoaXRlICFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpjZW50ZXI7fSAqL1xyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZC5zZXJ2aWNlLWZvcm0tdGFibGUtYm9yZGVyIHRke3BhZGRpbmc6MC45NXJlbSAhaW1wb3J0YW50O31cclxudGFibGUudGFibGUudGFibGUtYm9yZGVyZWQuc2VydmljZS1mb3JtLXRhYmxlLWJvcmRlciB0ciB0ZHtib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO31cclxudGFibGUudGFibGUudGFibGUtYm9yZGVyZWQuc2VydmljZS1mb3JtLXRhYmxlLWJvcmRlciB0ciB0ZDpmaXJzdC1jaGlsZHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE1cHg7fVxyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZC5zZXJ2aWNlLWZvcm0tdGFibGUtYm9yZGVyIHRyIHRkOmxhc3QtY2hpbGR7Zm9udC1zaXplOjE1cHg7fVxyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZC5zZXJ2aWNlLWZvcm0tdGFibGUtYm9yZGVyIHRyOm50aC1jaGlsZChvZGQpe2JhY2tncm91bmQtY29sb3I6ICNlZGYzZjc7fVxyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZC5zZXJ2aWNlLWZvcm0tdGFibGUtYm9yZGVyIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7fVxyXG4uaHRCb3JkZXIgdGgge2JvcmRlcjoxcHggc29saWQgI2UyZTJlMiAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTVweDt9XHJcbi50YmxUaWNrZXRTZXJ2aWNlZm9ybSB0aGVhZCB0aHtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlICFpbXBvcnRhbnQ7fVxyXG4ucm93LmpvYi1jbGllbnQtdGFiYmluZ3ttYXJnaW46IDBweCAzcHggMjBweCAhaW1wb3J0YW50O3BhZGRpbmc6IDBweCAwcHggMjBweCAhaW1wb3J0YW50O2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFkYWRhICFpbXBvcnRhbnQ7fVxyXG51bC5uYXYubmF2LXRhYnMubmF2LXRhYnMtbGluZS5uYXYtdGFicy1ib2xkLm5hdi10YWJzLWxpbmUtM3gubmF2LXRhYnMtbGluZS1icmFuZC50YWJiaW5nLWpvYnMtY2xpZW50e21hcmdpbjowIDAgMCAhaW1wb3J0YW50O31cclxuLnNlcnZpY2UtZm9ybS10YWJsZS1ib3JkZXIgdHIgdGR7Zm9udC1zaXplOjE1cHg7fVxyXG4uc2VydmljZS1uYXYtaXRlbSBhe2JhY2tncm91bmQ6ICNkZWRlZGUgICFpbXBvcnRhbnQ7Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcbi5uZXctcmVxdXN0LWZpbHRlcl9mb3JtIHNwYW4ua3Qtc3dpdGNoLmt0LXN3aXRjaC0tbGd7ZGlzcGxheTpibG9jayAhaW1wb3J0YW50O31cclxuLm5ldy1yZXF1c3QtZmlsdGVyX2Zvcm0gc3Bhbi5rdC1zd2l0Y2gua3Qtc3dpdGNoLS1sZyBoNHtmb250LXNpemU6MTZweDt9XHJcbi5zZXJ2aWNlLWZvdW5kLWZvcm0taW5mbyBsaS5uYXYtaXRlbS5zZXJ2aWNlLW5hdi1pdGVte2JvcmRlci1yaWdodDogMXB4IHNvbGlkICNiZmJmYmY7fVxyXG4uc2VydmljZS1mb3VuZC1mb3JtLWluZm8gbGkubmF2LWl0ZW0uc2VydmljZS1uYXYtaXRlbTpsYXN0LWNoaWxke2JvcmRlci1yaWdodDowcHggIWltcG9ydGFudDt9XHJcbi5zZXJ2aWNlLW5hdi1pdGVtIGEuYWN0aXZlLCAuc2VydmljZS1uYXYtaXRlbSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIxMzY2QiAhaW1wb3J0YW50O2JvcmRlcjpub25lICFpbXBvcnRhbnQ7Y29sb3I6d2hpdGUgIWltcG9ydGFudDt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItYm90dG9tOm5vbmUgIWltcG9ydGFudDt9IFxyXG4ua3QtcG9ydGxldF9fYm9keS5jdXN0b21lci1saXN0aW5nLWRhdGF0YWJsZS5zZXJ2aWNlLWZvcm0tZGF0YXRhYmxle2JvcmRlcjpub25lICFpbXBvcnRhbnQ7fVxyXG4udGlja2V0LWRldGFpbHN7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtwYWRkaW5nOjMwcHggNDBweDt9XHJcbi5jdXN0b21lci1kZXRhaWxzIGgye2ZvbnQtc2l6ZTo0MHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTttYXJnaW46MTVweCAwcHggMjBweDtjb2xvcjojMjAzNzZjO2ZvbnQtd2VpZ2h0OjYwMDt9XHJcbi5maWd1cmUtaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMDt0b3A6IDJweDtkaXNwbGF5Om5vbmU7d2lkdGg6IDQ1cHg7aGVpZ2h0OiA0NXB4O2xpbmUtaGVpZ2h0OiAzOHB4O3RleHQtYWxpZ246IGNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2MTMwO2JvcmRlci1yYWRpdXM6IDUwJTttYXJnaW4tcmlnaHQ6IDE1cHg7fVxyXG4uY3VzdG9tZXItZGV0YWlsc3tib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZWZlZmVmO31cclxuLmZpZ3VyZS1pY29uIGl7Y29sb3I6d2hpdGU7Zm9udC1zaXplOjI0cHg7fVxyXG4udGlja2V0LW9wZW4tc2Vje2Rpc3BsYXk6IGlubGluZS1ibG9jaztwYWRkaW5nOjhweCAyMnB4O2NvbG9yOndoaXRlO2JhY2tncm91bmQtY29sb3I6IzRDQUY1MDtib3JkZXItcmFkaXVzOjMwcHg7fVxyXG4udGlja2V0LW9wZW4tc2VjIGF7Y29sb3I6d2hpdGU7cG9pbnRlci1ldmVudHM6bm9uZTtmb250LXNpemU6MTRweDt9XHJcbi5jdXN0b21lci1kZXRhaWxzIHB7Zm9udC1zaXplOjE2cHg7Y29sb3I6YmxhY2s7bWFyZ2luLWJvdHRvbTowLjZyZW07Zm9udC13ZWlnaHQ6NjAwO3BhZGRpbmctbGVmdDozMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5jdXN0b21lci1kZXRhaWxzIHAgaXtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMDt0b3A6IDZweDtjb2xvcjogIzk5OTk5OTt9XHJcbi5zdGFydC1zZWN7ZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6OHB4IDIycHg7Y29sb3I6d2hpdGU7YmFja2dyb3VuZC1jb2xvcjojRkE2MTMwO31cclxuLnN0YXJ0LXNlYyBhe2NvbG9yOndoaXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7Zm9udC1zaXplOjE0cHg7fVxyXG4udGFibGUtZGV0YWlsLTIgdGFibGUgdHIgdGR7Ym9yZGVyOm5vbmUgIWltcG9ydGFudDt9XHJcbi50aW1pbmd7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOjIycHg7Y29sb3I6IzIxMzY2QjttYXJnaW4tbGVmdDogNHB4O31cclxuLnRpbWluZyBpe21hcmdpbi1yaWdodDo3cHg7fVxyXG4udGlja2V0X251bWJlciBwe2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjYwMDttYXJnaW4tYm90dG9tOjBweDs7fVxyXG4udGFibGUtZGV0YWlsLTJ7bWFyZ2luOjI1cHggMHB4IDBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7cGFkZGluZzowcHggMTBweCAxNXB4O31cclxuLnRpY2tldF9udW1iZXIgcCBzcGFuIGl7Y29sb3I6IzRDQUY1MDtmb250LXNpemU6MTJweDttYXJnaW4tbGVmdDoxMHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9XHJcbi5kYXRlX3NlYyBwLCAuZW5naW5lZXJfc2Vje2ZvbnQtc2l6ZToxN3B4O2NvbG9yOmJsYWNrO21hcmdpbi1ib3R0b206MHB4O2ZvbnQtd2VpZ2h0OjYwMDt9XHJcbi5zdXBwb3J0LXNlcnZpY2UtaW5jaWRlbnQtZm9ybSBoMntjb2xvcjpibGFjaztwYWRkaW5nLWJvdHRvbToxNXB4O31cclxuLmN1c3RJbmZvIHB7Zm9udC1zaXplOjE2cHg7fVxyXG5cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXN7YmFja2dyb3VuZDogI2MzZTdmYTt9XHJcbi5tb2RhbC1oZWFkZXIuc2VsZWN0LW5ldy1wcm9wZXJ0aWVzIC5idG57cGFkZGluZzogMC4yNXJlbSAwLjdyZW07YmFja2dyb3VuZC1jb2xvcjojMDA4NENBO2NvbG9yOndoaXRlO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgaDV7Y29sb3I6YmxhY2s7Zm9udC1zaXplOjIwcHg7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keS5tb2RhbC1ib2R5e2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHkgcHtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2s7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keSAuZm9ybi1ncm91cHttYXJnaW4tYm90dG9tOjE1cHg7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keWEgLmJ0bi1icmFuZHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7fVxyXG4ua3QtcG9ydGxldF9fYm9keS5uZXdfY2xpZW50c19wcm9wZXJ0aWVzX2JvZHl7Ym9yZGVyOm5vbmUgIWltcG9ydGFudDt9XHJcbnNwYW4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5LnRpY2tldC1jaXJsZS1yZWR7ICAgIHdpZHRoOiA3M3B4O3BhZGRpbmc6IDhweCA1cHggOHB4IDVweDtmb250LXNpemU6IDE0cHg7YmFja2dyb3VuZC1jb2xvcjojQzNFN0ZBO2NvbG9yOiMzOTg0Y2E7fVxyXG4uZHJvcGRvd24tbWVudS5zaG93e2xlZnQ6IDBweCAhaW1wb3J0YW50O3RvcDogM3B4ICFpbXBvcnRhbnQ7IHBhZGRpbmc6MCAhaW1wb3J0YW50O2JveC1zaGFkb3c6NXB4IDFweCAxMHB4ICNjM2MzYzM7fVxyXG4uZHJvcGRvd24tbWVudS5zaG93IGxpIGF7YmFja2dyb3VuZC1jb2xvcjojQzNFN0ZBO2NvbG9yOmJsYWNrO31cclxuLmRyb3Bkb3duLW1lbnUuc2hvdyBsaS5hY3RpdmUgYSwgLmRyb3Bkb3duLW1lbnUuc2hvdyBsaTpob3ZlciBhe2JhY2tncm91bmQtY29sb3I6I0ZBNjEzMDtjb2xvcjp3aGl0ZTt9XHJcbi5lbmdpbmVlcl9zZWMgdWx7bWFyZ2luLWJvdHRvbTowcHggIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6MHB4ICFpbXBvcnRhbnQ7fVxyXG4uZW5naW5lZXJfc2VjIHVsIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MHB4IDVweDt9XHJcbi5zY2hlZHVsZXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzo4cHggMjJweDtjb2xvcjp3aGl0ZTtiYWNrZ3JvdW5kLWNvbG9yOiM0Q0FGNTA7Ym9yZGVyLXJhZGl1czozMHB4O31cclxuLnNjaGVkdWxlIGF7Y29sb3I6d2hpdGU7cG9pbnRlci1ldmVudHM6bm9uZTtmb250LXNpemU6MTRweDt9XHJcbi50aWNrZXQtb3Blbi1zZWN7bWFyZ2luOjAgNXB4O31cclxuLkNsb3NlckF0dGFjaG1lbnRTZWN0aW9ue2JvcmRlcjpub25lICFpbXBvcnRhbnQ7fVxyXG4jZnJtQ2xvc2VyRm9ybSAuZm9ybi1ncm91cCBsYWJlbHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE2cHg7Y29sb3I6YmxhY2s7fVxyXG4uZm9ybi1ncm91cHttYXJnaW4tYm90dG9tOjE1cHg7O31cclxuLmJ1dHRvbi1zZWN7bWFyZ2luOjEwcHggMHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uQ2xvc2VyQXR0YWNobWVudFNlY3Rpb257cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7O21hcmdpbjowcHggIWltcG9ydGFudDt9XHJcbi5idG5BZGROZXdBdHRTZWN0aW9ue3BhZGRpbmc6MTBweCAyNHB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZTFlMWVmICFpbXBvcnRhbnQ7Y29sb3I6YmxhY2sgIWltcG9ydGFudDtib3JkZXI6MXB4IHNvbGlkICNlMWUxZWYgIWltcG9ydGFudDt9XHJcbi5idG5SZW1vdmVTZWN0aW9ue21hcmdpbjogNHB4IDBweCAycHggMTVweCAhaW1wb3J0YW50O3BhZGRpbmc6MTBweCAyNHB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojMkM3N0Y0ICFpbXBvcnRhbnQ7Y29sb3I6d2hpdGUgIWltcG9ydGFudDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O31cclxuLnJvdy5zZXJ2aWNlLXN1cHBvcnRzLWhlYWRpbmd7Ym9yZGVyLWJvdHRvbTowcHggIWltcG9ydGFudDt9XHJcbi5hY2NvcmRpb24uYWNjb3JkaW9uLXNvbGlkIC5jYXJkIC5jYXJkLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNkZWRlZGU7aGVpZ2h0OjYwcHg7cGFkZGluZy1yaWdodDoxNXB4O31cclxuLmFjY29yZGlvbi5hY2NvcmRpb24tdG9nZ2xlLXN2ZyAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGV7YmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTt9XHJcbiNmcm1DbG9zZXJGb3Jte21hcmdpbi10b3A6MHB4ICFpbXBvcnRhbnQ7fVxyXG4jZnJtQ2xvc2VyRm9ybSB0ZXh0YXJlYXtoZWlnaHQ6ODBweDttYXgtaGVpZ2h0OjEyMHB4O30gXHJcbi5ib3R0b20tYnRuIC5idG5DbG9zZUNsb3NlckZvcm17cGFkZGluZzoxMHB4IDI0cHggIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNlMWUxZWYgIWltcG9ydGFudDtjb2xvcjpibGFjayAhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgI2UxZTFlZiAhaW1wb3J0YW50O31cclxuLmJvdHRvbS1idG4gLmJ0bi1wcmltYXJ5e3BhZGRpbmc6MTBweCAyNHB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojMkM3N0Y0ICFpbXBvcnRhbnQ7Y29sb3I6d2hpdGUgIWltcG9ydGFudDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O31cclxuLmpvYi1mb3ItdGFiLWNvbnRlbnQgLmt0LXBvcnRsZXQgLmt0LXBvcnRsZXRfX2JvZHl7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTt9XHJcbi5jb2wtbWQtMi5yaWdodC1zaWRlLWRvbGxlci1mb3JtLWluZm97dG9wOjBweCAhaW1wb3J0YW50O31cclxuLnByb2R1Y3QtaGVhZHtiYWNrZ3JvdW5kLWNvbG9yOiNlNGU0ZTQ7fVxyXG4ucHJvZHVjdC10YWJjb250ZW50e2JhY2tncm91bmQtY29sb3I6d2hpdGU7bWFyZ2luLWJvdHRvbTozMHB4O31cclxuLnByb2R1Y3QtaGVhZHttYXJnaW46MHB4O3BhZGRpbmc6MHB4O31cclxuLnByb2R1Y3QtZmlyc3QtbmFtZXtwYWRkaW5nLXRvcDogNXB4O31cclxuLnRvdGFsLWpvYi1wcmljZS1jbGllbnR7bWFyZ2luOjIwcHggMHB4ICFpbXBvcnRhbnQ7fVxyXG4udG90YWwtam9iLXByaWNlLWNsaWVudCBwe21hcmdpbi1ib3R0b206MHB4ICFpbXBvcnRhbnQ7fVxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tc20sIC5idG4tZ3JvdXAtc20gPiAuYnRue3BhZGRpbmc6IDEuMnJlbSAxLjhyZW07Zm9udC1zaXplOiAwLjg3NXJlbTtsaW5lLWhlaWdodDogMS41O2JvcmRlci1yYWRpdXM6IDA7YmFja2dyb3VuZDogIzAwODRDQSAhaW1wb3J0YW50O2NvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O31cclxuLnRlYW0taW5uZXItMSB7bWFyZ2luLXRvcDoxNXB4O3BhZGRpbmc6MHB4IDE1cHg7fVxyXG4udGVhbS1pbm5lci0xIHVse3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1ib3R0b206MHB4Ozt9XHJcbi50ZWFtLWlubmVyLTEgdWwgbGl7Y29sb3I6YmxhY2s7ZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6IDhweCA4cHg7YmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTttYXJnaW46IDBweCAzcHggNXB4O2JvcmRlci1yYWRpdXM6IDVweDt9XHJcbi50ZWFtLWlubmVyLTEgdWwgbGkgaW1neyBib3JkZXItcmFkaXVzOjQwJTsgaGVpZ2h0OiAyMDt3aWR0aDogMjA7IH1cclxuLnRlYW0taW5uZXItMSB1bCBsaSAuY2xvc2V7Zm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O31cclxuICAgIC5ib3gtMXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyNSV9XHJcbi5jaGVjay1tYXJre21hcmdpbi10b3A6MThweDtwb3NpdGlvbjpyZWxhdGl2ZTt9XHJcbi5zZWFyY2gtYmFyIGlucHV0e3dpZHRoOjEwMCV9XHJcbi5leHBve2Zsb2F0OnJpZ2h0O31cclxuLmNoZWNrYm94LWRvd25ib3h7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTotMjBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzoxMHB4O2JvcmRlci1yYWRpdXM6OHB4O3dpZHRoOjEzMSU7ei1pbmRleDogOTt9XHJcbiAgICAuY3VzdG9tLWRheSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgfVxyXG4gICAgICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgICB9XHJcbiAgICAgIC5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgLnR4dFNlYXJjaC10aWNrZXR7aGVpZ2h0OiAzNXB4OyBib3JkZXItcmFkaXVzOiAyN3B4OyBib3JkZXI6IDFweCBzb2xpZCBncmF5OyBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7fVxyXG4gICAgICAuYm94LTEuY2hlY2stbWFya3t0ZXh0LWFsaWduOiByaWdodDsgbWFyZ2luLXRvcDogN3B4OyBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi1yaWdodDogOXB4O31cclxubGFiZWwua3QtY2hlY2tib3h7Y29sb3I6ICMwMDAwMDAgO2ZvbnQtd2VpZ2h0OiA2MDA7fSAgIl19 */", ".ticket-open-sec[_ngcontent-%COMP%]{display: inline-block;padding:8px 22px;color:white;background-color:#4CAF50;border-radius:30px;}\r\n.ticket-open-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:white;pointer-events:none;font-size:14px;}\r\n.ticket-open-sec[_ngcontent-%COMP%]{margin:0 5px;}\r\n.CloserDtBody[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n.btncustoInfo[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n  }\r\n\r\n.serviceFormHeading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n    font-weight: 600;\r\n    color: #48465b;\r\n  }\r\n.singleBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    color: red;\r\n  }\r\n.singleBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 172px;\r\n    box-shadow: 5px 8px 3px -2px #2d77e7ba;\r\n  }\r\n.ticketEngList[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n.ticketEngList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      list-style: none;\r\n      display: inline-block;\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n.custInfo[_ngcontent-%COMP%] {\r\n    padding: 0 16px !important;\r\n  }\r\n.ktrSection[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n.htBorder[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 1px solid #22366b;\r\n  }\r\n.cmtImage[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n.support-service-incident-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }\r\n.support-service-incident-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\r\n      content: '';\r\n      width: 26%;\r\n      display: block;\r\n      border-bottom: 3px solid #fa7e2ea3;\r\n      margin-top: 7px;\r\n      margin-left: 3px;\r\n      margin-bottom: 12px;\r\n    }\r\n.cmtImage[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    width: 12%;\r\n    display: block;\r\n    border-bottom: 3px solid #fa7e2ea3;\r\n    margin-top: 7px;\r\n    margin-left: 3px;\r\n    margin-bottom: 12px;\r\n  }\r\n.closeformbody[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n.CloserAttachmentSection[_ngcontent-%COMP%] {\r\n    border: 1px solid #28273324;\r\n    padding: 7px;\r\n    margin-bottom: 12px;\r\n    margin-top: 8px;\r\n    \r\n  }\r\n.ticketStatusOpen[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 7px 27px;\r\n    border-radius: 20px;\r\n  }\r\n.ticketStatusClosed[_ngcontent-%COMP%] {\r\n    background-color: #ff9800bd;\r\n    color: #fff;\r\n    padding: 7px 27px;\r\n    border-radius: 20px;\r\n  }\r\n#frmCloserForm[_ngcontent-%COMP%] {\r\n    margin: 33px 0 0 0;\r\n  }\r\n.attchementSection[_ngcontent-%COMP%]{\r\n    widows: 100% !important;\r\n  }\r\n.btnTicketClock[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    margin: 0 0 0 4px;\r\n  }\r\n.ticket-Close-sec[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n    padding: 8px 22px;\r\n    color: white;\r\n    background-color: #ff8533;\r\n    border-radius: 30px;\r\n}\r\n.ticket-Close-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n#EngiProductSection[_ngcontent-%COMP%]{\r\n    border: 1px solid #e2e2e2 !important;\r\n    box-shadow: 0px 4px 11px 0px #5867dd61;\r\n}\r\n.prodByEngSection[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 6px;\r\n}\r\n.radioSection[_ngcontent-%COMP%]{\r\n    margin-bottom: 15px;\r\n}\r\n.lblType[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    color: #4e2d2d;\r\n    margin-right: 22px;\r\n    font-weight: 600;\r\n}\r\n.dds[_ngcontent-%COMP%]{\r\n    margin: 0 !important;\r\n}\r\n.engSubmit[_ngcontent-%COMP%]{\r\n    margin: 0px 0 0 0;\r\n    text-align: right;\r\n}\r\n.radioSection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    height: 12px !important;\r\n}\r\n.engDesc[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n}\r\n.engDesc[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n  height: 150px !important;\r\n}\r\nsup[_ngcontent-%COMP%] {\r\n  color:red;\r\n}\r\n.btnServiceView[_ngcontent-%COMP%]{\r\n  padding: 4px;\r\n}\r\n.btnServiceView[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  color: #4caf50;\r\n    font-size: 21px;\r\n    margin-right: 7px;\r\n    transition: width 2s, height 2s, transform 2s;\r\n}\r\n.btnServiceView[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n  color: #21366b;\r\n  transform: rotate(180deg);\r\n}\r\n.btnServiceClose[_ngcontent-%COMP%]{\r\n  padding: 4px;\r\n}\r\n.btnServiceClose[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  color: #d2194c;\r\n    font-size: 21px;\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n    transition: width 2s, height 2s, transform 2s;\r\n}\r\n.btnServiceClose[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n  transform: rotate(180deg);\r\n}\r\nli.custoTab[_ngcontent-%COMP%]{width: 12.49% !important;}\r\nli.custoTab-2[_ngcontent-%COMP%]{width: 14.28% !important;}\r\nli.custoTab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size: 11px !important; font-weight: 600 !important;}\r\n.tkthead[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color: #000000; margin-left: 11px !important; margin-bottom: 11px;}\r\n.timespanSection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color: #21366b; color: #fff; padding: 8px 29px; font-size: 12px; font-weight: 500; letter-spacing: 1px; border-radius: 15px;}\r\n.timespanSection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-radius: 16px; background-color: #dedede;font-size: 15px;}\r\n.mytimesheet[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family: unset;font-weight: 600;color: #7869dd; font-size: 20px;}\r\n.mytimesheet[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border: 1px solid #c6c4e6;line-height: 30px;padding: 1px 13px;margin-right: 6px;width: 73%;font-size: 14px;}\r\na.btbRadMore[_ngcontent-%COMP%]{background-color: #008b8be6; color: white; padding: 1px 10px; margin: 0 0 0 13px; }\r\n.AttToBeAppend[_ngcontent-%COMP%]{padding: 13px 7px; border: 1px solid #2c77f499;margin-bottom: 6px;}\r\n.timespanSection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin: 0px 5px !important;padding:8px 10px !important;}\r\n.audio-list[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%]{display: inline-block; height: 26px;}\r\n.audio-list[_ngcontent-%COMP%]{display: inline-flex;}\r\n.audio-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 18px; color: #000000;}\r\n.audio-list[_ngcontent-%COMP%]:last-child{border-bottom: none}\r\n.audio-button[_ngcontent-%COMP%] { font-size: 18px; }\r\n.audio-remove[_ngcontent-%COMP%]{display:inline-block; margin: 0 0 0 33px;}\r\n.audio-remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: red;}\r\n.audio-remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size: 24px;}\r\n.audio-timmer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style: none; padding: 0; margin: 4px 0px 0 2px;}\r\n.audio-timmer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display: inline-block;margin-right: 5px;}\r\n.audio-timmer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color: red;}\r\n.audio-timmer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 16px; color: grey;}\r\n.button-sec[_ngcontent-%COMP%] {display: inline-block;}\r\n.spinnerSection[_ngcontent-%COMP%]{display:inline-block}\r\n.spinnerSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 43%; margin-left: 1px;}\r\nul.ttmsheet[_ngcontent-%COMP%]{list-style: none; padding: 0; margin: 0; position: relative;}\r\nul.ttmsheet[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display: inline-block;}\r\n.schedule1[_ngcontent-%COMP%]{display: inline-block;}\r\n.ticketstatus[_ngcontent-%COMP%] {display: inline-block;}\r\n.ticketstatus[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;padding:18px 22px;}\r\n.customer-logo-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n.customer-logo-container-image[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.customer-logo-container-overlay[_ngcontent-%COMP%] {\r\n  position: absolute; \r\n  bottom: 0; \r\n  background: transparent;\r\n  color: #f1f1f1; \r\n  width: 150px;\r\n  transition: .5s ease;\r\n  opacity:0;\r\n  color: white;\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n.customer-logo-container[_ngcontent-%COMP%]:hover   .customer-logo-container-overlay[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\nlabel.IsNotValidateTC[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: red !important;\r\n}\r\nlabel.IsValidateTC[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n    color: #0000005c !important;\r\n}\r\n.InvalidInput[_ngcontent-%COMP%]{\r\n  border-color: #ff0000ad !important;\r\n  box-shadow: 1px 0 3px #ff000085 !important;\r\n}\r\n.serviceby-section[_ngcontent-%COMP%]{padding: 5px 6px;}\r\n.serviceby-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    color: #000000;\r\n    font-weight: 600;\r\n}\r\n.payment-section[_ngcontent-%COMP%]{\r\n  border: 1px solid #2c77f442;\r\n  margin-bottom: 8px;\r\n  padding: 0 !important;\r\n}\r\n.alert.alert-success[_ngcontent-%COMP%]{\r\n  color: #2c77f4;\r\n    background-color: #2c77f457;\r\n    border-color: #2c77f457;\r\n}\r\n.payment-body[_ngcontent-%COMP%]{\r\n  padding: 8px;\r\n}\r\n.serviceby-section[_ngcontent-%COMP%]{\r\n  border: 1px solid #2c77f442;\r\n    margin-bottom: 8px;\r\n    padding: 0 !important;\r\n}\r\n.closerbody-sec[_ngcontent-%COMP%]{\r\n  padding: 8px;\r\n}\r\n.action-is-disabled[_ngcontent-%COMP%] { background-color: #edecec; cursor: no-drop; }\r\n.action-is-disabled-2[_ngcontent-%COMP%] {background-color: #edecec70;}\r\n.normal-text[_ngcontent-%COMP%] {font-size: 14px;font-weight: initial;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZW5naW5lZXIvZW5naW5lZXItdGlja2V0L215LXRpY2tldC1kZXRhaWxzL215LXRpY2tldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoSCxtQkFBbUIsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztBQUNsRSxpQkFBaUIsWUFBWSxDQUFDO0FBQzlCO0lBQ0ksV0FBVztFQUNiO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTs7O0tBR0c7QUFFSDtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7QUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0NBQXNDO0VBQ3hDO0FBRUE7SUFDRSxVQUFVO0VBQ1o7QUFFRTtNQUNFLGdCQUFnQjtNQUNoQixxQkFBcUI7TUFDckIsU0FBUztNQUNULFVBQVU7SUFDWjtBQUVGO0lBQ0UsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxXQUFXO0VBQ2I7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFFRTtNQUNFLFdBQVc7TUFDWCxVQUFVO01BQ1YsY0FBYztNQUNkLGtDQUFrQztNQUNsQyxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG1CQUFtQjtJQUNyQjtBQUVGO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxXQUFXO0VBQ2I7QUFFQTtJQUNFLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQ0FBMkM7RUFDN0M7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjtBQUNGO0VBQ0UscUJBQXFCO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDZDQUE2QztBQUNqRDtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNkNBQTZDO0FBQ2pEO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQSxZQUFZLHdCQUF3QixDQUFDO0FBQ3JDLGNBQWMsd0JBQXdCLENBQUM7QUFDdkMsc0JBQXNCLDBCQUEwQixFQUFFLDJCQUEyQixDQUFDO0FBQzlFLFlBQVksY0FBYyxFQUFFLDRCQUE0QixFQUFFLG1CQUFtQixDQUFDO0FBQzlFLHNCQUFzQix5QkFBeUIsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDO0FBQzdKLDZCQUE2QixtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQyxlQUFlLENBQUM7QUFDNUYsZ0JBQWdCLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUM7QUFDcEYsbUJBQW1CLHlCQUF5QixDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7QUFDOUgsYUFBYSwyQkFBMkIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUU7QUFDL0YsZUFBZSxpQkFBaUIsRUFBRSwyQkFBMkIsQ0FBQyxrQkFBa0IsQ0FBQztBQUNqRixzQkFBc0IsMEJBQTBCLENBQUMsMkJBQTJCLENBQUM7QUFDN0Usa0JBQWtCLHFCQUFxQixFQUFFLFlBQVksQ0FBQztBQUN0RCxZQUFZLG9CQUFvQixDQUFDO0FBQ2pDLGlCQUFpQixlQUFlLEVBQUUsY0FBYyxDQUFDO0FBQ2pELHVCQUF1QixtQkFBbUI7QUFDMUMsZ0JBQWdCLGVBQWUsRUFBRTtBQUNqQyxjQUFjLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDO0FBQ3ZELGdCQUFnQixVQUFVLENBQUM7QUFDM0Isa0JBQWtCLGVBQWUsQ0FBQztBQUNsQyxpQkFBaUIsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixDQUFDO0FBQ3JFLG9CQUFvQixxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQztBQUM1RCxzQkFBc0IsVUFBVSxDQUFDO0FBQ2pDLHlCQUF5QixlQUFlLEVBQUUsV0FBVyxDQUFDO0FBQ3RELGFBQWEscUJBQXFCLENBQUM7QUFDbkMsZ0JBQWdCLG9CQUFvQjtBQUNwQyxvQkFBb0IsVUFBVSxFQUFFLGdCQUFnQixDQUFDO0FBQ2hELFlBQVksZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQztBQUN4RSxlQUFlLHFCQUFxQixDQUFDO0FBQ3JDLFdBQVcscUJBQXFCLENBQUM7QUFDbEMsZUFBZSxxQkFBcUIsQ0FBQztBQUNyQyxtQkFBbUIsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0FBQ3BEO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTtFQUNFLGtDQUFrQztFQUNsQywwQ0FBMEM7QUFDNUM7QUFDQSxtQkFBbUIsZ0JBQWdCLENBQUM7QUFDcEM7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMkJBQTJCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBLHNCQUFzQix5QkFBeUIsRUFBRSxlQUFlLEVBQUU7QUFDbEUsdUJBQXVCLDJCQUEyQixDQUFDO0FBQ25ELGNBQWMsZUFBZSxDQUFDLG9CQUFvQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vZW5naW5lZXIvZW5naW5lZXItdGlja2V0L215LXRpY2tldC1kZXRhaWxzL215LXRpY2tldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlja2V0LW9wZW4tc2Vje2Rpc3BsYXk6IGlubGluZS1ibG9jaztwYWRkaW5nOjhweCAyMnB4O2NvbG9yOndoaXRlO2JhY2tncm91bmQtY29sb3I6IzRDQUY1MDtib3JkZXItcmFkaXVzOjMwcHg7fVxyXG4udGlja2V0LW9wZW4tc2VjIGF7Y29sb3I6d2hpdGU7cG9pbnRlci1ldmVudHM6bm9uZTtmb250LXNpemU6MTRweDt9XHJcbi50aWNrZXQtb3Blbi1zZWN7bWFyZ2luOjAgNXB4O31cclxuLkNsb3NlckR0Qm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5idG5jdXN0b0luZm8gdGgge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLyogLnRibFRpY2tldFNlcnZpY2Vmb3JtIHNwYW4ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH0gKi9cclxuXHJcbiAgLnNlcnZpY2VGb3JtSGVhZGluZyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ4NDY1YjtcclxuICB9XHJcblxyXG4gIC5zaW5nbGVCb3ggcCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5zaW5nbGVCb3ggaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNzJweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA4cHggM3B4IC0ycHggIzJkNzdlN2JhO1xyXG4gIH1cclxuXHJcbiAgLnRpY2tldEVuZ0xpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gICAgLnRpY2tldEVuZ0xpc3QgbGkge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgLmN1c3RJbmZvIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmt0clNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaHRCb3JkZXIgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIyMzY2YjtcclxuICB9XHJcblxyXG4gIC5jbXRJbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnN1cHBvcnQtc2VydmljZS1pbmNpZGVudC1mb3JtIGgyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICAgLnN1cHBvcnQtc2VydmljZS1pbmNpZGVudC1mb3JtIGgyOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICB3aWR0aDogMjYlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmYTdlMmVhMztcclxuICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAuY210SW1hZ2UgaDI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEyJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmYTdlMmVhMztcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlZm9ybWJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuQ2xvc2VyQXR0YWNobWVudFNlY3Rpb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI4MjczMzI0O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggNXB4IDFweCAjMjgyNzMzNDI7ICovXHJcbiAgfVxyXG5cclxuICAudGlja2V0U3RhdHVzT3BlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogN3B4IDI3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpY2tldFN0YXR1c0Nsb3NlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwYmQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDdweCAyN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gICNmcm1DbG9zZXJGb3JtIHtcclxuICAgIG1hcmdpbjogMzNweCAwIDAgMDtcclxuICB9XHJcbiAgLmF0dGNoZW1lbnRTZWN0aW9ue1xyXG4gICAgd2lkb3dzOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG5UaWNrZXRDbG9ja3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAwIDAgNHB4O1xyXG4gIH1cclxuLnRpY2tldC1DbG9zZS1zZWN7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDIycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG4udGlja2V0LUNsb3NlLXNlYyBhe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jRW5naVByb2R1Y3RTZWN0aW9ue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMiAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMXB4IDBweCAjNTg2N2RkNjE7XHJcbn1cclxuLnByb2RCeUVuZ1NlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxufVxyXG4ucmFkaW9TZWN0aW9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubGJsVHlwZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNGUyZDJkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uZGRze1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmVuZ1N1Ym1pdHtcclxuICAgIG1hcmdpbjogMHB4IDAgMCAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnJhZGlvU2VjdGlvbiBpbnB1dHtcclxuICAgIGhlaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5lbmdEZXNje1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmVuZ0Rlc2MgdGV4dGFyZWF7XHJcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbnN1cCB7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbi5idG5TZXJ2aWNlVmlld3tcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuLmJ0blNlcnZpY2VWaWV3IGl7XHJcbiAgY29sb3I6ICM0Y2FmNTA7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDJzLCBoZWlnaHQgMnMsIHRyYW5zZm9ybSAycztcclxufVxyXG4uYnRuU2VydmljZVZpZXcgaTpob3ZlcntcclxuICBjb2xvcjogIzIxMzY2YjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5idG5TZXJ2aWNlQ2xvc2V7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcbi5idG5TZXJ2aWNlQ2xvc2UgaXtcclxuICBjb2xvcjogI2QyMTk0YztcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDJzLCBoZWlnaHQgMnMsIHRyYW5zZm9ybSAycztcclxufVxyXG4uYnRuU2VydmljZUNsb3NlIGk6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5saS5jdXN0b1RhYnt3aWR0aDogMTIuNDklICFpbXBvcnRhbnQ7fVxyXG5saS5jdXN0b1RhYi0ye3dpZHRoOiAxNC4yOCUgIWltcG9ydGFudDt9XHJcbmxpLmN1c3RvVGFiIGEgc3BhbiBoNHtmb250LXNpemU6IDExcHggIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O31cclxuLnRrdGhlYWQgaDJ7Y29sb3I6ICMwMDAwMDA7IG1hcmdpbi1sZWZ0OiAxMXB4ICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDExcHg7fVxyXG4udGltZXNwYW5TZWN0aW9uIHNwYW57YmFja2dyb3VuZC1jb2xvcjogIzIxMzY2YjsgY29sb3I6ICNmZmY7IHBhZGRpbmc6IDhweCAyOXB4OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGxldHRlci1zcGFjaW5nOiAxcHg7IGJvcmRlci1yYWRpdXM6IDE1cHg7fVxyXG4udGltZXNwYW5TZWN0aW9uIHNwYW4gc2VsZWN0e2JvcmRlci1yYWRpdXM6IDE2cHg7IGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7Zm9udC1zaXplOiAxNXB4O31cclxuLm15dGltZXNoZWV0IGgye2ZvbnQtZmFtaWx5OiB1bnNldDtmb250LXdlaWdodDogNjAwO2NvbG9yOiAjNzg2OWRkOyBmb250LXNpemU6IDIwcHg7fVxyXG4ubXl0aW1lc2hlZXQgaW5wdXR7Ym9yZGVyOiAxcHggc29saWQgI2M2YzRlNjtsaW5lLWhlaWdodDogMzBweDtwYWRkaW5nOiAxcHggMTNweDttYXJnaW4tcmlnaHQ6IDZweDt3aWR0aDogNzMlO2ZvbnQtc2l6ZTogMTRweDt9XHJcbmEuYnRiUmFkTW9yZXtiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YjhiZTY7IGNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMXB4IDEwcHg7IG1hcmdpbjogMCAwIDAgMTNweDsgfVxyXG4uQXR0VG9CZUFwcGVuZHtwYWRkaW5nOiAxM3B4IDdweDsgYm9yZGVyOiAxcHggc29saWQgIzJjNzdmNDk5O21hcmdpbi1ib3R0b206IDZweDt9XHJcbi50aW1lc3BhblNlY3Rpb24gc3BhbnttYXJnaW46IDBweCA1cHggIWltcG9ydGFudDtwYWRkaW5nOjhweCAxMHB4ICFpbXBvcnRhbnQ7fVxyXG4uYXVkaW8tbGlzdCBhdWRpb3tkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGhlaWdodDogMjZweDt9XHJcbi5hdWRpby1saXN0e2Rpc3BsYXk6IGlubGluZS1mbGV4O31cclxuLmF1ZGlvLWxpc3Qgc3Bhbntmb250LXNpemU6IDE4cHg7IGNvbG9yOiAjMDAwMDAwO31cclxuLmF1ZGlvLWxpc3Q6bGFzdC1jaGlsZHtib3JkZXItYm90dG9tOiBub25lfVxyXG4uYXVkaW8tYnV0dG9uIHsgZm9udC1zaXplOiAxOHB4OyB9XHJcbi5hdWRpby1yZW1vdmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7IG1hcmdpbjogMCAwIDAgMzNweDt9XHJcbi5hdWRpby1yZW1vdmUgYXtjb2xvcjogcmVkO31cclxuLmF1ZGlvLXJlbW92ZSBhIGl7Zm9udC1zaXplOiAyNHB4O31cclxuLmF1ZGlvLXRpbW1lciB1bHtsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiAwOyBtYXJnaW46IDRweCAwcHggMCAycHg7fVxyXG4uYXVkaW8tdGltbWVyIHVsIGxpe2Rpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6IDVweDt9XHJcbi5hdWRpby10aW1tZXIgdWwgbGkgaXtjb2xvcjogcmVkO31cclxuLmF1ZGlvLXRpbW1lciB1bCBsaSBzcGFue2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6IGdyZXk7fVxyXG4uYnV0dG9uLXNlYyB7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLnNwaW5uZXJTZWN0aW9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrfVxyXG4uc3Bpbm5lclNlY3Rpb24gaW1ne3dpZHRoOiA0MyU7IG1hcmdpbi1sZWZ0OiAxcHg7fVxyXG4gdWwudHRtc2hlZXR7bGlzdC1zdHlsZTogbm9uZTsgcGFkZGluZzogMDsgbWFyZ2luOiAwOyBwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gdWwudHRtc2hlZXQgbGl7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuIC5zY2hlZHVsZTF7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLnRpY2tldHN0YXR1cyB7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLnRpY2tldHN0YXR1cyBzcGFue2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmc6MThweCAyMnB4O31cclxuLmN1c3RvbWVyLWxvZ28tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tZXItbG9nby1jb250YWluZXItaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmN1c3RvbWVyLWxvZ28tY29udGFpbmVyLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgYm90dG9tOiAwOyBcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2YxZjFmMTsgXHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIG9wYWNpdHk6MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmN1c3RvbWVyLWxvZ28tY29udGFpbmVyOmhvdmVyIC5jdXN0b21lci1sb2dvLWNvbnRhaW5lci1vdmVybGF5IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbmxhYmVsLklzTm90VmFsaWRhdGVUQyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5sYWJlbC5Jc1ZhbGlkYXRlVEMge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwNWMgIWltcG9ydGFudDtcclxufVxyXG4uSW52YWxpZElucHV0e1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmMDAwMGFkICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDAgM3B4ICNmZjAwMDA4NSAhaW1wb3J0YW50O1xyXG59XHJcbi5zZXJ2aWNlYnktc2VjdGlvbntwYWRkaW5nOiA1cHggNnB4O31cclxuLnNlcnZpY2VieS1zZWN0aW9uIGxhYmVse1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wYXltZW50LXNlY3Rpb257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJjNzdmNDQyO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFsZXJ0LmFsZXJ0LXN1Y2Nlc3N7XHJcbiAgY29sb3I6ICMyYzc3ZjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM3N2Y0NTc7XHJcbiAgICBib3JkZXItY29sb3I6ICMyYzc3ZjQ1NztcclxufVxyXG4ucGF5bWVudC1ib2R5e1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG4uc2VydmljZWJ5LXNlY3Rpb257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJjNzdmNDQyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jbG9zZXJib2R5LXNlY3tcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLmFjdGlvbi1pcy1kaXNhYmxlZCB7IGJhY2tncm91bmQtY29sb3I6ICNlZGVjZWM7IGN1cnNvcjogbm8tZHJvcDsgfVxyXG4uYWN0aW9uLWlzLWRpc2FibGVkLTIge2JhY2tncm91bmQtY29sb3I6ICNlZGVjZWM3MDt9XHJcbi5ub3JtYWwtdGV4dCB7Zm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiBpbml0aWFsO30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerTicketViewDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-ticket-view-details',
                templateUrl: './customer-ticket-view-details.component.html',
                styleUrls: ['../../engineer/engineer-ticket/engineer-ticket.component.css', '../../engineer/engineer-ticket/my-ticket-details/my-ticket-details.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: src_app_services_serviceform_service__WEBPACK_IMPORTED_MODULE_8__["ServiceformService"] }, { type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_9__["TicketService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: src_app_services_closer_service__WEBPACK_IMPORTED_MODULE_12__["CloserService"] }, { type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_13__["InvoiceService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"] }, { type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_16__["UserlogService"] }, { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_17__["ProductService"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_18__["GenicProfileService"] }, { type: src_app_services_generic_service__WEBPACK_IMPORTED_MODULE_19__["GenericService"] }, { type: src_app_services_audio_recording_service__WEBPACK_IMPORTED_MODULE_20__["AudioRecordingService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["DomSanitizer"] }, { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_22__["NotificationService"] }]; }, { modalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalContent', { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=application-customer-customer-module-es2015.js.map