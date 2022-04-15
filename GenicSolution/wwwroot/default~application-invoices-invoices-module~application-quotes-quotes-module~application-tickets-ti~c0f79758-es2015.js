(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-invoices-invoices-module~application-quotes-quotes-module~application-tickets-ti~c0f79758"],{

/***/ "1+cd":
/*!**********************************************!*\
  !*** ./src/app/services/reminder.service.ts ***!
  \**********************************************/
/*! exports provided: ReminderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderService", function() { return ReminderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ReminderService {
    constructor(http) {
        this.http = http;
        this.TicketReminder = {
            Id: 0,
            TicketId: '00000000-0000-0000-0000-000000000000',
            Subject: '',
            Body: '',
            MailTo: '',
            RecurringStartDate: null,
            RecurringEndDate: null,
            Duration: 0,
            VisitFrequency: 0,
            ReminderDate: null,
            IsActive: true
        };
        this.InvoiceReminder = {
            Id: 0,
            InvoiceId: '00000000-0000-0000-0000-000000000000',
            Subject: '',
            Body: '',
            MailTo: '',
            RecurringStartDate: null,
            RecurringEndDate: null,
            Duration: 0,
            VisitFrequency: 0,
            ReminderDate: null,
            IsActive: true
        };
        this.QuoteReminder = {
            Id: 0,
            QuoteId: '00000000-0000-0000-0000-000000000000',
            Subject: '',
            Body: '',
            MailTo: '',
            RecurringStartDate: null,
            RecurringEndDate: null,
            Duration: 0,
            VisitFrequency: 0,
            ReminderDate: null,
            IsActive: true
        };
    }
    getReminder(t, r, type) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Reminder/GetReminders/' + t + '/' + r + '/' + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    getAllReminders(t, type) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Reminder/GetAllReminders/' + t + '/' + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    putReminderStatus(t, id, type) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Reminder/PutReminderStatus/' + t + '/' + id + '/' + type, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    postQuoteReminder(t, type) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Reminder/PostReminder/' + t + '/' + type, this.QuoteReminder).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
    removeQuoteReminder(t, id, qid, type) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Reminder/DeleteQuotationReminder/' + t + '/' + id + '/' + qid + '/' + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }));
    }
}
ReminderService.ɵfac = function ReminderService_Factory(t) { return new (t || ReminderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ReminderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReminderService, factory: ReminderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReminderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "7Q/8":
/*!***************************************************************************!*\
  !*** ./src/app/generic-utils/Reminder-Module/ReminderModule.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReminderModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderModuleComponent", function() { return ReminderModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_quote_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/quote.module */ "xcKa");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! email-validator */ "H/qo");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/quote.service */ "uOqW");
/* harmony import */ var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/invoice.service */ "py7r");
/* harmony import */ var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/reminder.service */ "1+cd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");













function ReminderModuleComponent_div_9_table_3_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TicketId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReminderModuleComponent_div_9_table_3_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "QuoteId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReminderModuleComponent_div_9_table_3_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "InvoiceId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReminderModuleComponent_div_9_table_3_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReminderModuleComponent_div_9_table_3_tr_15_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const x_r46 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r48.removeReminder(x_r46.Id, x_r46.RId, ctx_r48.ReminderModule); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r46.RNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r46.Subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r46.Body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r46.MailTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 5, x_r46.ReminderDate, "EEEE, MMMM d, y", "+0000"));
} }
function ReminderModuleComponent_div_9_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReminderModuleComponent_div_9_table_3_th_2_Template, 2, 0, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReminderModuleComponent_div_9_table_3_th_3_Template, 2, 0, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReminderModuleComponent_div_9_table_3_th_4_Template, 2, 0, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mail To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reminder Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReminderModuleComponent_div_9_table_3_tr_15_Template, 15, 9, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.ReminderModule === "ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.ReminderModule === "quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.ReminderModule === "invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.data);
} }
function ReminderModuleComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReminderModuleComponent_div_9_table_3_Template, 18, 4, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.length > 0);
} }
function ReminderModuleComponent_div_10_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reminder Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 98, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReminderModuleComponent_div_10_div_22_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r58.toggle(); })("ngModelChange", function ReminderModuleComponent_div_10_div_22_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.reminderservice.QuoteReminder.ReminderDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r51.isReminderDateValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minDate", ctx_r51.minDate)("ngModel", ctx_r51.reminderservice.QuoteReminder.ReminderDate);
} }
function ReminderModuleComponent_div_10_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 100, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReminderModuleComponent_div_10_div_23_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r63.toggle(); })("ngModelChange", function ReminderModuleComponent_div_10_div_23_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.reminderservice.QuoteReminder.RecurringStartDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minDate", ctx_r52.minDate)("ngModel", ctx_r52.reminderservice.QuoteReminder.RecurringStartDate);
} }
function ReminderModuleComponent_div_10_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 103, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_div_10_div_24_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.reminderservice.QuoteReminder.VisitFrequency = $event; })("change", function ReminderModuleComponent_div_10_div_24_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r71.RecurringTimeCalculator(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r53.reminderservice.QuoteReminder.VisitFrequency);
} }
function ReminderModuleComponent_div_10_a_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Set Week Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReminderModuleComponent_div_10_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Set Month Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReminderModuleComponent_div_10_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "skip weekly/Public off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReminderModuleComponent_div_10_div_31_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.SetSkipOff($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r56.skippublickholiday);
} }
function ReminderModuleComponent_div_10_div_32_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, v_r75), " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, v_r75, "EEEE"), ")");
} }
function ReminderModuleComponent_div_10_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReminderModuleComponent_div_10_div_32_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r76.clickOntoolTip2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReminderModuleComponent_div_10_div_32_span_6_Template, 5, 7, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r57.tooltip2 ? "btooltiptext5-1" : "btooltiptext5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r57.recurringList2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r57.visit_total, " Reminder");
} }
function ReminderModuleComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reminder Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 89, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_div_10_Template_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.reminderservice.QuoteReminder.Duration = $event; })("change", function ReminderModuleComponent_div_10_Template_select_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.ChangeReminderDuration(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "One Time Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Daily Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Weekly Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Monthly Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quarterly Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Half Yearly Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReminderModuleComponent_div_10_div_22_Template, 9, 4, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReminderModuleComponent_div_10_div_23_Template, 9, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ReminderModuleComponent_div_10_div_24_Template, 8, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ReminderModuleComponent_div_10_a_29_Template, 2, 0, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ReminderModuleComponent_div_10_a_30_Template, 2, 0, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ReminderModuleComponent_div_10_div_31_Template, 9, 1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ReminderModuleComponent_div_10_div_32_Template, 10, 3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.reminderservice.QuoteReminder.Duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration == 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration > 0);
} }
function ReminderModuleComponent_div_11_a_35_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReminderModuleComponent_div_11_a_35_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Reminder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReminderModuleComponent_div_11_a_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReminderModuleComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mail To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Can send up to 5 emails, separated by comma");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 118, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_div_11_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.reminderservice.QuoteReminder.MailTo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 120, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_div_11_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.reminderservice.QuoteReminder.Subject = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "textarea", 123, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_div_11_Template_textarea_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.reminderservice.QuoteReminder.Body = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ReminderModuleComponent_div_11_a_35_Template, 2, 0, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ReminderModuleComponent_div_11_a_36_Template, 2, 0, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r2.isMailValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.reminderservice.QuoteReminder.MailTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r2.isSubjectValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.reminderservice.QuoteReminder.Subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r2.isBodyValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.reminderservice.QuoteReminder.Body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loading);
} }
class ReminderModuleComponent {
    constructor(service, quoteservice, invoiceservice, reminderservice, toastr, genicservice) {
        this.service = service;
        this.quoteservice = quoteservice;
        this.invoiceservice = invoiceservice;
        this.reminderservice = reminderservice;
        this.toastr = toastr;
        this.genicservice = genicservice;
        this.currentUTCDate = new Date();
        this.minDate = { year: Number(this.currentUTCDate.getFullYear()), month: Number(this.currentUTCDate.getMonth() + 1), day: Number(this.currentUTCDate.getDate()) };
        this.skippublickholiday = true;
        this.recurringList2 = [];
        this.tooltip2 = false;
        this.reminderservice.QuoteReminder = new src_app_services_quote_module__WEBPACK_IMPORTED_MODULE_1__["QuoteReminder"]();
        this.reminderservice.QuoteReminderList = [];
        this.IsVisibleContract = false;
        this.visit_total = 0;
        this.loading = false;
        this.isValid = true;
        this.isReminderDateValid = true;
        this.isMailValid = true;
        this.isSubjectValid = true;
        this.isBodyValid = true;
    }
    ngOnInit() {
        this.InitiateObject();
        this.reminderservice.getReminder(this.Token, this.Id, this.ReminderModule).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.data = [];
                    this.data = response.result;
                    this.reminderservice.TicketReminder.MailTo = this.service.formData.CustomerEmail;
                    this.reminderservice.QuoteReminder.MailTo = this.quoteservice.QuoteData.CustomerEmail;
                    this.reminderservice.InvoiceReminder.MailTo = this.invoiceservice.QuoteData.CustomerEmail;
                    if (this.data.length > 0) {
                        this.IsVisibleContract = true;
                        let checkbox1 = null;
                        checkbox1 = document.querySelector('#addremindercheckbox');
                        checkbox1.checked = true;
                    }
                }
            }
        }, error => console.log(error));
    }
    SelectReminder() {
        if (this.IsVisibleContract) {
            return this.IsVisibleContract = false;
        }
        else {
            switch (this.ReminderModule) {
                case 'quote':
                    this.reminderservice.QuoteReminder.MailTo = this.quoteservice.QuoteData.CustomerEmail;
                    break;
                case 'invoice':
                    this.reminderservice.QuoteReminder.MailTo = this.invoiceservice.InvoiceData.CustomerEmail;
                    break;
                case 'ticket':
                    this.reminderservice.QuoteReminder.MailTo = this.service.formData.CustomerEmail;
                    break;
                case 'warranty':
                    this.reminderservice.QuoteReminder.MailTo = this.service.formData.CustomerEmail;
                    break;
            }
            return this.IsVisibleContract = true;
        }
    }
    ChangeReminderDuration() {
        this.reminderservice.QuoteReminder.Duration = Number(this.reminderservice.QuoteReminder.Duration);
        if (this.reminderservice.QuoteReminder.Duration === 7) {
            this.reminderservice.QuoteReminder.VisitFrequency = 1;
        }
        if (this.reminderservice.QuoteReminder.Duration === 30) {
            this.reminderservice.QuoteReminder.VisitFrequency = 1;
        }
        let todaydate = this.genicservice.TODAY_DATE_IN_STRING + 'T00:00:00Z';
        this.reminderservice.QuoteReminder.ReminderDate = '';
        this.reminderservice.QuoteReminder.RecurringStartDate = '';
        this.reminderservice.QuoteReminder.RecurringEndDate = '';
        this.reminderservice.QuoteReminder.ReminderDate = todaydate;
        this.reminderservice.QuoteReminder.RecurringStartDate = todaydate;
        this.reminderservice.QuoteReminder.RecurringEndDate = todaydate;
    }
    RecurringTimeCalculator() {
        let numdays = 0;
        let visitfruq = 0;
        let totalVisit = 0;
        const now = new Date(this.reminderservice.QuoteReminder.RecurringStartDate);
        numdays = Number(this.reminderservice.QuoteReminder.Duration);
        visitfruq = this.reminderservice.QuoteReminder.VisitFrequency;
        switch (Number(this.reminderservice.QuoteReminder.Duration)) {
            case 0:
                this.visit_total = totalVisit = numdays * visitfruq;
                now.setDate(new Date(this.reminderservice.QuoteReminder.RecurringStartDate).getDate() + (totalVisit - 1));
                this.reminderservice.QuoteReminder.RecurringEndDate = now.toISOString();
                break;
            case 1:
                this.visit_total = totalVisit = numdays * visitfruq;
                now.setDate(new Date(this.reminderservice.QuoteReminder.RecurringStartDate).getDate() + (totalVisit - 1));
                this.reminderservice.QuoteReminder.RecurringEndDate = now.toISOString();
                setTimeout(() => { this.TicketRecurringHelper(0); }, 500);
                break;
            case 7:
                this.visit_total = totalVisit = numdays * visitfruq;
                now.setDate(new Date(this.reminderservice.QuoteReminder.RecurringStartDate).getDate() + (totalVisit - 1));
                this.reminderservice.QuoteReminder.RecurringEndDate = now.toISOString();
                setTimeout(() => { let el1 = document.getElementById('remindershowWeekModal'); el1.click(); }, 500);
                break;
            case 30:
                this.visit_total = totalVisit = numdays * visitfruq;
                now.setDate(new Date(this.reminderservice.QuoteReminder.RecurringStartDate).getDate() + (totalVisit - 1));
                this.reminderservice.QuoteReminder.RecurringEndDate = now.toISOString();
                setTimeout(() => { let el2 = document.getElementById('remindershowMonthModal'); el2.click(); }, 500);
                break;
            case 90:
                this.visit_total = totalVisit = visitfruq;
                this.reminderservice.QuoteReminder.VisitFrequency = visitfruq;
                setTimeout(() => { this.TicketRecurringHelper(3); }, 500);
                break;
            case 180:
                this.visit_total = totalVisit = visitfruq;
                this.reminderservice.QuoteReminder.VisitFrequency = visitfruq;
                setTimeout(() => { this.TicketRecurringHelper(4); }, 500);
                break;
        }
        numdays = 0;
        visitfruq = 0;
        totalVisit = 0;
    }
    onSubmit() {
        if (this.validateForm()) {
            this.reminderservice.QuoteReminder.Id = 0;
            this.reminderservice.QuoteReminder.QuoteId = this.Id;
            this.reminderservice.QuoteReminder.IsActive = true;
            this.reminderservice.QuoteReminder.Duration = Number(this.reminderservice.QuoteReminder.Duration);
            this.reminderservice.QuoteReminder.VisitFrequency = Number(this.reminderservice.QuoteReminder.VisitFrequency);
            if (this.reminderservice.QuoteReminder.Duration === 0) {
                this.reminderservice.QuoteReminder.ReminderDate = this.reminderservice.QuoteReminder.ReminderDate;
                this.reminderservice.QuoteReminder.RecurringStartDate = null;
                this.reminderservice.QuoteReminder.RecurringEndDate = null;
            }
            this.loading = true;
            this.reminderservice.postQuoteReminder(this.Token, this.ReminderModule).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.toastr.success(response.MessageDescription);
                        this.data = [];
                        this.data = response.result;
                        this.loading = false;
                        this.InitiateObject();
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning(response.MessageDescription);
                        this.loading = false;
                    }
                }
            }, error => console.log(error));
        }
    }
    removeReminder(rid, QuoteId, type) {
        this.reminderservice.removeQuoteReminder(this.Token, rid, QuoteId, type).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success(response.MessageDescription);
                    this.data = [];
                    this.data = response.result;
                }
                if (response.Message === 'failure') {
                    this.toastr.warning(response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    TicketRecurringHelper(type) {
        if (this.Id === '00000000-0000-0000-0000-000000000000') {
            return false;
        }
        this.service.TicketRecurringHelper.Id = 0;
        this.service.TicketRecurringHelper.Type = type;
        this.service.TicketRecurringHelper.IsFor = 2; /// For Reminder Type
        this.service.TicketRecurringHelper.RecurringStartDate = this.reminderservice.QuoteReminder.RecurringStartDate;
        this.service.TicketRecurringHelper.RecurringDuration = Number(this.reminderservice.QuoteReminder.Duration);
        this.service.TicketRecurringHelper.RecurringVisitFrequency = Number(this.reminderservice.QuoteReminder.VisitFrequency);
        this.service.putTicketRecurringHelperDetails(this.Token, this.skippublickholiday).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.visit_total = response.result.Count;
                    this.recurringList2 = response.result.List;
                    //this.service.formData.RecurringStartDate = response.result.FirstVisit;
                    //this.service.formData.RecurringEndDate = response.result.LastVisit;
                    let demoClasses = null;
                    demoClasses = document.querySelector('#reminderdetailModalWeekbutton');
                    demoClasses.click();
                    let demoClasses2 = null;
                    demoClasses2 = document.querySelector('#reminderdetailModalMonthbutton');
                    demoClasses2.click();
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    validateForm() {
        if (this.reminderservice.QuoteReminder.Duration === undefined || this.reminderservice.QuoteReminder.Duration === null) {
            this.reminderservice.QuoteReminder.Duration = 0;
        }
        if (this.reminderservice.QuoteReminder.VisitFrequency === undefined || this.reminderservice.QuoteReminder.VisitFrequency === null) {
            this.reminderservice.QuoteReminder.VisitFrequency = 1;
        }
        this.isValid = true;
        this.isReminderDateValid = true;
        if (this.reminderservice.QuoteReminder.ReminderDate === null || this.reminderservice.QuoteReminder.ReminderDate === undefined ||
            this.reminderservice.QuoteReminder.ReminderDate === '') {
            this.isReminderDateValid = false;
            this.isValid = false;
            this.toastr.warning('warning', 'Please select reminder date!');
        }
        this.isMailValid = true;
        if (this.reminderservice.QuoteReminder.MailTo === null || this.reminderservice.QuoteReminder.MailTo === undefined ||
            this.reminderservice.QuoteReminder.MailTo === '') {
            this.isMailValid = false;
            this.isValid = false;
            this.toastr.warning('Please enter mail address!');
        }
        let arrEmail = this.reminderservice.QuoteReminder.MailTo.split(',');
        if (arrEmail.length > 5) {
            this.isMailValid = false;
            this.isValid = false;
            this.toastr.warning('Can send up to 5 emails, separated by comma');
            this.toastr.error('current length is ' + arrEmail.length);
        }
        arrEmail.forEach(element => {
            if (!email_validator__WEBPACK_IMPORTED_MODULE_2__["validate"](element)) {
                this.toastr.warning('Warning', 'Please enter a valid email');
                this.toastr.error(element + ' Invalid email');
                this.isMailValid = false;
                this.isValid = false;
                return false;
            }
        });
        this.isSubjectValid = true;
        if (this.reminderservice.QuoteReminder.Subject === null || this.reminderservice.QuoteReminder.Subject === undefined ||
            this.reminderservice.QuoteReminder.Subject === '') {
            this.isSubjectValid = false;
            this.isValid = false;
            this.toastr.warning('warning', 'Please enter mail subject!');
        }
        this.isBodyValid = true;
        if (this.reminderservice.QuoteReminder.Body === null || this.reminderservice.QuoteReminder.Body === undefined ||
            this.reminderservice.QuoteReminder.Body === '') {
            this.isBodyValid = false;
            this.isValid = false;
            this.toastr.warning('warning', 'Please enter mail subject!');
        }
        return this.isValid;
    }
    InitiateObject() {
        let todaydate = this.genicservice.TODAY_DATE_IN_STRING + 'T00:00:00Z';
        this.reminderservice.QuoteReminder = new src_app_services_quote_module__WEBPACK_IMPORTED_MODULE_1__["QuoteReminder"]();
        this.reminderservice.QuoteReminder.Id = 0;
        this.reminderservice.QuoteReminder.QuoteId = this.Id;
        this.reminderservice.QuoteReminder.Subject = '';
        this.reminderservice.QuoteReminder.MailTo = '';
        this.reminderservice.QuoteReminder.Body = '';
        this.reminderservice.QuoteReminder.Duration = 0;
        this.reminderservice.QuoteReminder.VisitFrequency = 1;
        this.reminderservice.QuoteReminder.ReminderDate = todaydate;
        this.reminderservice.QuoteReminder.RecurringStartDate = todaydate;
        this.reminderservice.QuoteReminder.RecurringEndDate = todaydate;
        this.reminderservice.QuoteReminder.IsActive = true;
    }
    SetSkipOff(e) {
        const enb = Boolean(e.target.checked);
        if (enb) {
            this.skippublickholiday = true;
        }
        else {
            this.skippublickholiday = false;
        }
    }
    clickOntoolTip2() {
        if (this.tooltip2) {
            this.tooltip2 = false;
        }
        else {
            this.tooltip2 = true;
        }
    }
}
ReminderModuleComponent.ɵfac = function ReminderModuleComponent_Factory(t) { return new (t || ReminderModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_6__["ReminderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_8__["GenicProfileService"])); };
ReminderModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReminderModuleComponent, selectors: [["generic-reminder-module"]], inputs: { Id: "Id", Token: "Token", ReminderModule: "ReminderModule" }, decls: 334, vars: 43, consts: [[1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--brand", 2, "margin-top", "-12px"], ["type", "checkbox", "id", "addremindercheckbox", 3, "change"], ["class", "row", 4, "ngIf"], ["id", "reminderdetailModalWeek", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "id", "reminderdetailModalWeekbutton", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "detail-inner"], [1, "details-tabs"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#dtab1", 1, "nav-link", "active"], [1, "tab-content"], ["id", "dtab1", 1, "tab-pane", "active"], [1, "row"], [1, "col-md-12", "col-sm-12"], [1, "ticket-month"], [1, "table"], [1, "container-check"], ["type", "checkbox", "checked", "checked", "name", "SundayIsActive", 3, "ngModel", "ngModelChange"], ["SundayIsActive", "ngModel"], [1, "checkmark"], ["type", "checkbox", "checked", "checked", "name", "MondayIsActive", 3, "ngModel", "ngModelChange"], ["MondayIsActive", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "TuesdayIsActive", 3, "ngModel", "ngModelChange"], ["TuesdayIsActive", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "WednesdayIsActive", 3, "ngModel", "ngModelChange"], ["WednesdayIsActive", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "ThursdayIsActive", 3, "ngModel", "ngModelChange"], ["ThursdayIsActive", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "FridayIsActive", 3, "ngModel", "ngModelChange"], ["FridayIsActive", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "SaturdayIsActive", 3, "ngModel", "ngModelChange"], ["SaturdayIsActive", "ngModel"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["id", "reminderdetailModalMonth", 1, "modal", "fade"], ["type", "button", "id", "reminderdetailModalMonthbutton", "data-dismiss", "modal", 1, "close"], ["data-toggle", "tab", "href", "#dtab2", 1, "nav-link", "active"], ["id", "dtab2", 1, "tab-pane", "active"], [1, "row", "tickt-month-parent"], ["type", "checkbox", "checked", "checked", "name", "Date1", 3, "ngModel", "ngModelChange"], ["Date1", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "Date2", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date3", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date4", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date5", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date6", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date7", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date8", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date9", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date10", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date11", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date12", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date13", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date14", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date15", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date16", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date17", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date18", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date19", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date20", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date21", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date22", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date24", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date25", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date26", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date27", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date28", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date29", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date30", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date31", 3, "ngModel", "ngModelChange"], [1, "kt-portlet__body"], [1, "col"], ["class", "table", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForAsync", "ngForOf"], ["colspan", "6"], ["href", "javascript:;", 3, "click"], [1, "far", "fa-trash-alt", "text-danger"], [1, "col-md-3"], [1, "text-danger"], [1, "kt-widget19__wrapper"], ["name", "country", "name", "Duration", "aria-describedby", "country-error", "aria-invalid", "false", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Duration", "ngModel"], [3, "value"], ["class", "col-md-2", 4, "ngIf"], ["class", "col-md-1", 4, "ngIf"], [1, "col-md-2"], [1, "input-group"], ["href", "javascript:;", "class", "btn btn-brand", "data-toggle", "modal", "id", "remindershowWeekModal", "data-target", "#reminderdetailModalWeek", 4, "ngIf"], ["href", "javascript:;", "class", "btn btn-brand", "data-toggle", "modal", "id", "remindershowMonthModal", "data-target", "#reminderdetailModalMonth", 4, "ngIf"], ["type", "text", "ngbDatepicker", "", "dateFormat", "yyyy-MMM-dd", "name", "reminderservice.QuoteReminder.ReminderDate", "placeholder", "dd-MM-yyyy", 1, "form-control", 2, "height", "37px !important", 3, "minDate", "ngModel", "click", "ngModelChange"], ["dateReminderDate", "ngbDatepicker", "reminderservice.QuoteReminder.ReminderDate", "ngModel"], ["type", "text", "ngbDatepicker", "", "dateFormat", "yyyy-MMM-dd", "name", "quoteService.QuoteReminder.RecurringStartDate", "placeholder", "dd-MM-yyyy", 1, "form-control", 2, "height", "37px !important", 3, "minDate", "ngModel", "click", "ngModelChange"], ["dateRecurringStartDate", "ngbDatepicker", "reminderservice.QuoteReminder.RecurringStartDate", "ngModel"], [1, "col-md-1"], ["type", "text", "name", "VisitFrequency", 1, "form-control", 2, "height", "37px !important", 3, "ngModel", "ngModelChange", "change"], ["VisitFrequency", "ngModel"], ["href", "javascript:;", "data-toggle", "modal", "id", "remindershowWeekModal", "data-target", "#reminderdetailModalWeek", 1, "btn", "btn-brand"], ["href", "javascript:;", "data-toggle", "modal", "id", "remindershowMonthModal", "data-target", "#reminderdetailModalMonth", 1, "btn", "btn-brand"], [1, "kt-switch", "kt-switch--icon"], ["type", "checkbox", 3, "checked", "change"], [1, "swither-bootstrap-learn", "switcher-customer"], [1, "btooltip5", 3, "click"], [1, "fa", "fa-question-circle", "text-info", 2, "cursor", "pointer"], [3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "form-control", 2, "background-color", "#f7f8fa"], [1, "btooltip1"], [1, "fa", "fa-question-circle", "text-info", 2, "cursor", "help"], [1, "btooltip1text"], ["type", "text", "name", "reminderservice.QuoteReminder.MailTo", "placeholder", "someone@domain.com", 1, "form-control", 2, "height", "37px !important", 3, "ngModel", "ngModelChange"], ["reminderservice.QuoteReminder.MailTo", "ngModel"], ["type", "text", "name", "reminderservice.QuoteReminder.Subject", "placeholder", "Subject", 1, "form-control", 2, "height", "37px !important", 3, "ngModel", "ngModelChange"], ["reminderservice.QuoteReminder.Subject", "ngModel"], [1, "col-md-4"], ["name", "reminderservice.QuoteReminder.Body", "rows", "1", "placeholder", "Body", 1, "form-control", 3, "ngModel", "ngModelChange"], ["reminderservice.QuoteReminder.Body", "ngModel"], [1, "form-group"], ["href", "javascript:;", "class", "btn btn-brand btn-sm", 3, "click", 4, "ngIf"], ["href", "javascript:;", "class", "btn btn-brand btn-sm", 4, "ngIf"], ["href", "javascript:;", 1, "btn", "btn-brand", "btn-sm", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-brand", "btn-sm"], [1, "fa", "fa-spinner", "fa-spin"]], template: function ReminderModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Set Reminder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReminderModuleComponent_Template_input_change_7_listener() { return ctx.SelectReminder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReminderModuleComponent_div_9_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReminderModuleComponent_div_10_Template, 33, 14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReminderModuleComponent_div_11_Template, 37, 11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "WEEK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_39_listener($event) { return ctx.service.TicketRecurringHelper.SundayIsActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_46_listener($event) { return ctx.service.TicketRecurringHelper.MondayIsActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Tue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_53_listener($event) { return ctx.service.TicketRecurringHelper.TuesdayIsActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Wed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_60_listener($event) { return ctx.service.TicketRecurringHelper.WednesdayIsActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Thu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_67_listener($event) { return ctx.service.TicketRecurringHelper.ThursdayIsActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Fri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_74_listener($event) { return ctx.service.TicketRecurringHelper.FridayIsActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_81_listener($event) { return ctx.service.TicketRecurringHelper.SaturdayIsActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReminderModuleComponent_Template_button_click_85_listener() { return ctx.TicketRecurringHelper(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Changes Apply");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "MONTH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "input", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_114_listener($event) { return ctx.service.TicketRecurringHelper.Date1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "input", 49, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_121_listener($event) { return ctx.service.TicketRecurringHelper.Date2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "input", 50, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_128_listener($event) { return ctx.service.TicketRecurringHelper.Date3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 51, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_135_listener($event) { return ctx.service.TicketRecurringHelper.Date4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "input", 52, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_142_listener($event) { return ctx.service.TicketRecurringHelper.Date5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "input", 53, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_149_listener($event) { return ctx.service.TicketRecurringHelper.Date6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "input", 54, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_156_listener($event) { return ctx.service.TicketRecurringHelper.Date7 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "input", 55, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_164_listener($event) { return ctx.service.TicketRecurringHelper.Date8 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "input", 56, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_171_listener($event) { return ctx.service.TicketRecurringHelper.Date9 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "input", 57, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_178_listener($event) { return ctx.service.TicketRecurringHelper.Date10 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "input", 58, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_185_listener($event) { return ctx.service.TicketRecurringHelper.Date11 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "input", 59, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_192_listener($event) { return ctx.service.TicketRecurringHelper.Date12 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "input", 60, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_199_listener($event) { return ctx.service.TicketRecurringHelper.Date13 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "input", 61, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_206_listener($event) { return ctx.service.TicketRecurringHelper.Date14 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "input", 62, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_214_listener($event) { return ctx.service.TicketRecurringHelper.Date15 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "input", 63, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_221_listener($event) { return ctx.service.TicketRecurringHelper.Date16 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "input", 64, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_228_listener($event) { return ctx.service.TicketRecurringHelper.Date17 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "input", 65, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_235_listener($event) { return ctx.service.TicketRecurringHelper.Date18 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "input", 66, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_242_listener($event) { return ctx.service.TicketRecurringHelper.Date19 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "input", 67, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_249_listener($event) { return ctx.service.TicketRecurringHelper.Date20 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "input", 68, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_256_listener($event) { return ctx.service.TicketRecurringHelper.Date21 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "input", 69, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_264_listener($event) { return ctx.service.TicketRecurringHelper.Date22 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "input", 60, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_271_listener($event) { return ctx.service.TicketRecurringHelper.Date23 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "input", 70, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_278_listener($event) { return ctx.service.TicketRecurringHelper.Date24 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "input", 71, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_285_listener($event) { return ctx.service.TicketRecurringHelper.Date25 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "input", 72, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_292_listener($event) { return ctx.service.TicketRecurringHelper.Date26 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "input", 73, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_299_listener($event) { return ctx.service.TicketRecurringHelper.Date27 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "input", 74, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_306_listener($event) { return ctx.service.TicketRecurringHelper.Date28 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "input", 75, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_314_listener($event) { return ctx.service.TicketRecurringHelper.Date29 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "input", 76, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_321_listener($event) { return ctx.service.TicketRecurringHelper.Date30 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "input", 77, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_328_listener($event) { return ctx.service.TicketRecurringHelper.Date31 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReminderModuleComponent_Template_button_click_332_listener() { return ctx.TicketRecurringHelper(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Changes Apply");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsVisibleContract);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsVisibleContract);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsVisibleContract);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.formData.TicketId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.SundayIsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.MondayIsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.TuesdayIsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.WednesdayIsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.ThursdayIsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.FridayIsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.SaturdayIsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.formData.TicketId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.TicketRecurringHelper.Date31);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["#reminderdetailModalMonth[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding: 0.65rem;}\n    #reminderdetailModalMonth[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background-clip: content-box;border:none;}\n    #reminderdetailModalMonth[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{background: #0191d2;color:white;}\n    .tickt-month-parent[_ngcontent-%COMP%]{padding:10px;}\n    .container-check[_ngcontent-%COMP%] {display: block;position: relative;padding-left:20px;margin-bottom: 12px;cursor: pointer;font-size: 22px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\n    .container-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;}\n    .checkmark[_ngcontent-%COMP%] {position: absolute;top: 0;left: 0;height:100%;width:100%;background-color: #0082c830;}\n    .container-check[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {background-color: #ccc;}\n    .container-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {background-color: #2196F3;border-bottom: 5px solid #1C5B8C;}\n    .checkmark[_ngcontent-%COMP%]:after {content: \"\";position: absolute;display: none; padding-right: 3px;}\n    .container-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {display: block;}\n    .container-check[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{ margin: 0;position: relative;display: inline-block;z-index: 1000;font-size:24px;color:black;}\n    #reminderdetailModalWeek[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#2C77F4;color:white}\n    #reminderdetailModalWeek[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding: 0.65rem;}\n    #reminderdetailModalWeek[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background-clip: content-box;border:none;}\n    #reminderdetailModalWeek[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{background: #0191d2;color:white;}\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {padding: 10px !important;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReminderModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'generic-reminder-module',
                template: `
                  <div class="kt-portlet kt-portlet--height-fluid kt-widget19">
                    <div class="kt-portlet__head">
                      <div class="kt-portlet__head-label">
                        <h3 class="kt-portlet__head-title">
                        Set Reminder
                        </h3> &nbsp; &nbsp;
                        <label class="kt-checkbox kt-checkbox--solid kt-checkbox--brand" style="margin-top: -12px;">
                        <input type="checkbox" id="addremindercheckbox"
                             (change)="SelectReminder()">
                        <span></span>
                        </label>
                      </div>
                    </div>
                    <div class="row" *ngIf="IsVisibleContract">
                      <div class="kt-portlet__body">
                      <div class="col">
                        <table class="table" *ngIf="data.length > 0">
                            <tr>
                                <th *ngIf="this.ReminderModule === 'ticket'">TicketId</th>
                                <th *ngIf="this.ReminderModule === 'quote'">QuoteId</th>
                                <th *ngIf="this.ReminderModule === 'invoice'">InvoiceId</th>
                                <th>Subject</th><th>Body</th><th>Mail To</th><th>Reminder Date</th><th>Action</th>
                            </tr>
                            <tr *ngFor="let x of data; let i=index; async">
                                <td>{{x.RNo}}</td>
                                <td>{{x.Subject}}</td>
                                <td>{{x.Body}}</td>
                                <td>{{x.MailTo}}</td>
                                <td>{{x.ReminderDate | date:'EEEE, MMMM d, y':'+0000'}}</td>
                                <td><a href="javascript:;" (click)="removeReminder(x.Id, x.RId, this.ReminderModule)"><i class="far fa-trash-alt text-danger"></i></a></td>
                            </tr>
                            <tr><td colspan="6"></td></tr>
                        </table>
                      </div>
                     </div>
                    </div>
                    <div class="row" *ngIf="IsVisibleContract">
                      <div class="kt-portlet__body">
                        <div class="col-md-3">
                          <label>Reminder Type<span class="text-danger">*</span></label>
                          <div class="kt-widget19__wrapper">
                            <select name="country"
                            class="form-control"
                            name="Duration"
                            #Duration="ngModel"
                            [(ngModel)]="reminderservice.QuoteReminder.Duration"
                            (change)="ChangeReminderDuration()"
                            aria-describedby="country-error"
                            aria-invalid="false">
                            <option value="{{0}}">One Time Reminder</option>
                            <option value="{{1}}">Daily Reminder</option>
                            <option value="{{7}}">Weekly Reminder</option>
                            <option value="{{30}}">Monthly Reminder</option>
                            <option value="{{90}}">Quarterly Reminder</option>
                            <option value="{{180}}">Half Yearly Reminder</option>
                        </select>
                          </div>
                        </div>
                        <div class="col-md-2" *ngIf="reminderservice.QuoteReminder.Duration === 0">
                          <label>Reminder Date<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <input type="text" class="form-control" ngbDatepicker (click)="dateReminderDate.toggle()"
                                      style="height: 37px !important;"
                                      [minDate]="minDate"
                                      dateFormat="yyyy-MMM-dd"
                                      #dateReminderDate="ngbDatepicker"
                                      name="reminderservice.QuoteReminder.ReminderDate"
                                      #reminderservice.QuoteReminder.ReminderDate="ngModel"
                                      [(ngModel)]="reminderservice.QuoteReminder.ReminderDate"
                                      placeholder="dd-MM-yyyy" [class.is-invalid]="!isReminderDateValid"/>
                                </div>
                        </div>
                        <div class="col-md-2" *ngIf="reminderservice.QuoteReminder.Duration > 0">
                          <label>Start Date<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <input type="text" class="form-control" ngbDatepicker (click)="dateRecurringStartDate.toggle()"
                                      style="height: 37px !important;"
                                      [minDate]="minDate"
                                      dateFormat="yyyy-MMM-dd"
                                      #dateRecurringStartDate="ngbDatepicker"
                                      name="quoteService.QuoteReminder.RecurringStartDate"
                                      #reminderservice.QuoteReminder.RecurringStartDate="ngModel"
                                      [(ngModel)]="reminderservice.QuoteReminder.RecurringStartDate"
                                      placeholder="dd-MM-yyyy"/>

                              </div>
                        </div>
                        <div class="col-md-1" *ngIf="reminderservice.QuoteReminder.Duration > 0">
                            <label>Frequency<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <input type="text" class="form-control"
                                        style="height: 37px !important;"
                                        name="VisitFrequency"
                                        #VisitFrequency="ngModel"
                                        [(ngModel)]="reminderservice.QuoteReminder.VisitFrequency"
                                        (change)="RecurringTimeCalculator()"/>
                                </div>
                        </div>
                        <div class="col-md-2">
                                <label>&nbsp;</label>
                                <div class="input-group">
                              <a href="javascript:;" class="btn btn-brand"
                                  *ngIf="reminderservice.QuoteReminder.Duration == 7"
                                  data-toggle="modal"
                                  id="remindershowWeekModal"
                                  data-target="#reminderdetailModalWeek">
                                 Set Week Days</a>
                              <a href="javascript:;" class="btn btn-brand"
                                  *ngIf="reminderservice.QuoteReminder.Duration == 30"
                                  data-toggle="modal"
                                  id="remindershowMonthModal"
                                  data-target="#reminderdetailModalMonth">
                                 Set Month Date</a>
                                </div>
                          </div>
                        <div class="col-md-2" *ngIf="reminderservice.QuoteReminder.Duration > 0">
                        <label>skip weekly/Public off</label>
                        <div class="input-group">
                            <span class="kt-switch kt-switch--icon"><label><input
                                (change)="SetSkipOff($event)" [checked]="skippublickholiday"
                                type="checkbox"><span></span></label></span>
                            <span class="swither-bootstrap-learn switcher-customer">
                            </span>
                            </div>
                        </div>
                        <div class="col-md-2" *ngIf="reminderservice.QuoteReminder.Duration > 0">
                            <label>Total Reminder</label>
                            <div class="btooltip5" (click)="clickOntoolTip2()">
                            <i class="fa fa-question-circle text-info" style="cursor: pointer;"></i>
                                <span [ngClass]="this.tooltip2 ? 'btooltiptext5-1':'btooltiptext5'" >
                                    <span *ngFor="let v of recurringList2">
                                        {{v | date}} ({{v | date:'EEEE'}})<br>
                                    </span>
                                </span>
                            </div>
                              <div class="input-group">
                                <label class="form-control" style="background-color: #f7f8fa;" >{{visit_total}} Reminder</label>
                                </div>
                        </div>
                      </div>
                    </div>
                    <div class="row" *ngIf="IsVisibleContract">
                      <div class="kt-portlet__body">
                      <div class="col-md-3">
                        <label>Mail To<span class="text-danger">*</span></label>&nbsp;
                        <div class="btooltip1"> <i
                            class="fa fa-question-circle text-info"
                            style="cursor: help;"></i>
                        <span class="btooltip1text">Can send up to 5 emails, separated by comma</span>
                    </div>
                        <div class="input-group">
                          <input type="text" class="form-control"
                                style="height: 37px !important;"
                                name="reminderservice.QuoteReminder.MailTo"
                                #reminderservice.QuoteReminder.MailTo="ngModel"
                                [(ngModel)]="reminderservice.QuoteReminder.MailTo"
                                placeholder="someone@domain.com" [class.is-invalid]="!isMailValid"/>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <label>Subject<span class="text-danger">*</span></label>
                        <div class="input-group">
                          <input type="text" class="form-control"
                                style="height: 37px !important;"
                                name="reminderservice.QuoteReminder.Subject"
                                #reminderservice.QuoteReminder.Subject="ngModel"
                                [(ngModel)]="reminderservice.QuoteReminder.Subject"
                                placeholder="Subject" [class.is-invalid]="!isSubjectValid"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <label>Body<span class="text-danger">*</span></label>
                        <div class="input-group">
                          <textarea class="form-control"  name="reminderservice.QuoteReminder.Body"
                          #reminderservice.QuoteReminder.Body="ngModel"
                          [(ngModel)]="reminderservice.QuoteReminder.Body" rows="1"
                          placeholder="Body" [class.is-invalid]="!isBodyValid"></textarea>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <label>&nbsp;</label>
                        <div class="form-group">
                          <a href="javascript:;" *ngIf="!this.loading"
                          (click)="onSubmit()"
                              class="btn btn-brand btn-sm">
                            Add Reminder 
                          </a>
                          <a href="javascript:;" *ngIf="this.loading"
                              class="btn btn-brand btn-sm">
                              <i class="fa fa-spinner fa-spin"></i>
                          </a>
                      </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="modal fade" id="reminderdetailModalWeek">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form>
                <div class="modal-header">
                    <h4 class="modal-title">{{service.formData.TicketId}}</h4>
                    <button type="button" class="close" id="reminderdetailModalWeekbutton" data-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="detail-inner">
                        <div class="details-tabs">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#dtab1">WEEK</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="dtab1" class="tab-pane active">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12">
                                            <div class="ticket-month">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Sun</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="SundayIsActive" #SundayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.SundayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Mon</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="MondayIsActive" #MondayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.MondayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Tue</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="TuesdayIsActive"
                                                                        #TuesdayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.TuesdayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Wed</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="WednesdayIsActive"
                                                                        #WednesdayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.WednesdayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Thu</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="ThursdayIsActive"
                                                                        #ThursdayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.ThursdayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Fri</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="FridayIsActive" #FridayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.FridayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>Sat</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="SaturdayIsActive"
                                                                        #SaturdayIsActive="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.SaturdayIsActive">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <button type="button" (click)="TicketRecurringHelper(1)"
                                            class="btn btn-secondary">Changes Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
                  <div class="modal fade" id="reminderdetailModalMonth">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form>
                <div class="modal-header">
                    <h4 class="modal-title">{{service.formData.TicketId}}</h4>
                    <button type="button" class="close" id="reminderdetailModalMonthbutton" data-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="detail-inner">
                        <div class="details-tabs">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#dtab2">MONTH</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="dtab2" class="tab-pane active">
                                    <div class="row tickt-month-parent">
                                        <div class="col-md-12 col-sm-12">
                                            <div class="ticket-month">

                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>1</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date1" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date1">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>2</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date2" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date2">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>3</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date3" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date3">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>4</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date4" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date4">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>5</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date5" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date5">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>6</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date6" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date6">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>7</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date7" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date7">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>


                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>8</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date8" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date8">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>9</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date9" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date9">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>10</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date10" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date10">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>11</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date11" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date11">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>12</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date12" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date12">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>13</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date13" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date13">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>14</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date14" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date14">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>


                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>15</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date15" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date15">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>16</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date16" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date16">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>17</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date17" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date17">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>18</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date18" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date18">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>19</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date19" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date19">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>20</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date20" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date20">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>21</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date21" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date21">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>22</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date22" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date22">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>23</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date13" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date23">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>24</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date24" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date24">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>25</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date25" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date25">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>26</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date26" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date26">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>27</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date27" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date27">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>28</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date28" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date28">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>29</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date29" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date29">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>30</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date30" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date30">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <label class="container-check">
                                                                    <p>31</p>
                                                                    <input type="checkbox" checked="checked"
                                                                        name="Date31" #Date1="ngModel"
                                                                        [(ngModel)]="service.TicketRecurringHelper.Date31">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <button type="button" (click)="TicketRecurringHelper(2)"
                                            class="btn btn-secondary">Changes Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
  `,
                styles: [`
    #reminderdetailModalMonth .modal-header{padding: 0.65rem;}
    #reminderdetailModalMonth .modal-content{background-clip: content-box;border:none;}
    #reminderdetailModalMonth .modal-content .nav-tabs .nav-item .nav-link{background: #0191d2;color:white;}
    .tickt-month-parent{padding:10px;}
    .container-check {display: block;position: relative;padding-left:20px;margin-bottom: 12px;cursor: pointer;font-size: 22px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}
    .container-check input {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;}
    .checkmark {position: absolute;top: 0;left: 0;height:100%;width:100%;background-color: #0082c830;}
    .container-check:hover input ~ .checkmark {background-color: #ccc;}
    .container-check input:checked ~ .checkmark {background-color: #2196F3;border-bottom: 5px solid #1C5B8C;}
    .checkmark:after {content: "";position: absolute;display: none; padding-right: 3px;}
    .container-check input:checked ~ .checkmark:after {display: block;}
    .container-check p{ margin: 0;position: relative;display: inline-block;z-index: 1000;font-size:24px;color:black;}
    #reminderdetailModalWeek .btn{background-color:#2C77F4;color:white}
    #reminderdetailModalWeek .modal-header{padding: 0.65rem;}
    #reminderdetailModalWeek .modal-content{background-clip: content-box;border:none;}
    #reminderdetailModalWeek .modal-content .nav-tabs .nav-item .nav-link{background: #0191d2;color:white;}
    .table th .table td {padding: 10px !important;}
    `]
            }]
    }], function () { return [{ type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"] }, { type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"] }, { type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceService"] }, { type: src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_6__["ReminderService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_8__["GenicProfileService"] }]; }, { Id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], Token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ReminderModule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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

/***/ "wTVD":
/*!************************************************************************!*\
  !*** ./src/app/generic-utils/Reminder-Module/ReminderModule.module.ts ***!
  \************************************************************************/
/*! exports provided: ReminderModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderModuleModule", function() { return ReminderModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ReminderModule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReminderModule.component */ "7Q/8");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ngb-date-to-string-adapter */ "x8Rg");
/* harmony import */ var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ngb-time-to-string-adapter */ "dRK5");








class ReminderModuleModule {
}
ReminderModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReminderModuleModule });
ReminderModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReminderModuleModule_Factory(t) { return new (t || ReminderModuleModule)(); }, providers: [
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__["NgbDateToStringAdapter"] },
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbTimeToStringAdapter"] }
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReminderModuleModule, { declarations: [_ReminderModule_component__WEBPACK_IMPORTED_MODULE_3__["ReminderModuleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]], exports: [_ReminderModule_component__WEBPACK_IMPORTED_MODULE_3__["ReminderModuleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReminderModuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
                declarations: [_ReminderModule_component__WEBPACK_IMPORTED_MODULE_3__["ReminderModuleComponent"]],
                exports: [_ReminderModule_component__WEBPACK_IMPORTED_MODULE_3__["ReminderModuleComponent"]],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__["NgbDateToStringAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbTimeToStringAdapter"] }
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~application-invoices-invoices-module~application-quotes-quotes-module~application-tickets-ti~c0f79758-es2015.js.map