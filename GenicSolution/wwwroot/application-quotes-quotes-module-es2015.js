(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-quotes-quotes-module"],{

/***/ "/Y9G":
/*!*****************************************************!*\
  !*** ./src/app/application/quotes/quotes.module.ts ***!
  \*****************************************************/
/*! exports provided: QuotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesModule", function() { return QuotesModule; });
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
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-select-dropdown */ "8bGj");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _quote_add_quote_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./quote-add/quote-add.component */ "4JXw");
/* harmony import */ var _quote_contact_person_popup_quote_contact_person_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quote-contact-person-popup/quote-contact-person-popup.component */ "Mhew");
/* harmony import */ var _quote_customer_popup_quote_customer_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quote-customer-popup/quote-customer-popup.component */ "wRCY");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "c8zV");
/* harmony import */ var _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./quote-list/quote-list.component */ "8PM8");
/* harmony import */ var _quote_status_popup_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./quote-status-popup/quote-status-popup.component */ "ImnT");
/* harmony import */ var _quotecustomer_property_popup_quotecustomer_property_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./quotecustomer-property-popup/quotecustomer-property-popup.component */ "WzcN");
/* harmony import */ var _quotes_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./quotes.component */ "2Zoe");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular2-signaturepad */ "HnZm");
/* harmony import */ var _signature_quote_status_popup_signature_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./signature-quote-status-popup/signature-quote-status-popup.component */ "QfdM");
/* harmony import */ var src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/generic-utils/Quote-Status-Component/QuoteStatusComponent.module */ "IWF8");
/* harmony import */ var src_app_generic_utils_Reminder_Module_ReminderModule_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/generic-utils/Reminder-Module/ReminderModule.module */ "wTVD");
/* harmony import */ var src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module */ "A6Rf");
































const routes = [
    { path: '', component: _quotes_component__WEBPACK_IMPORTED_MODULE_24__["QuotesComponent"],
        children: [
            { path: '', component: _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_21__["QuoteListComponent"] },
            { path: 'quote-customer-popup', component: _quote_customer_popup_quote_customer_popup_component__WEBPACK_IMPORTED_MODULE_19__["QuoteCustomerPopupComponent"] },
            { path: 'quote-Add', component: _quote_add_quote_add_component__WEBPACK_IMPORTED_MODULE_17__["QuoteAddComponent"] },
            { path: 'quote-Edit', component: _quote_add_quote_add_component__WEBPACK_IMPORTED_MODULE_17__["QuoteAddComponent"] },
            { path: 'quote-Details', component: _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_20__["QuoteDetailsComponent"] },
            { path: 'quote-customer-property-popup', component: _quotecustomer_property_popup_quotecustomer_property_popup_component__WEBPACK_IMPORTED_MODULE_23__["QuotecustomerPropertyPopupComponent"] },
            { path: 'quote-Status', component: _quote_status_popup_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_22__["QuoteStatusPopupComponent"] },
            { path: 'quote-customer-contact-popup', component: _quote_contact_person_popup_quote_contact_person_popup_component__WEBPACK_IMPORTED_MODULE_18__["QuoteContactPersonPopupComponent"] },
            { path: 'signature-quote-customer-contact-popup', component: _signature_quote_status_popup_signature_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_26__["SignatureQuoteStatusPopupComponent"] }
        ] },
];
class QuotesModule {
}
QuotesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QuotesModule });
QuotesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QuotesModule_Factory(t) { return new (t || QuotesModule)(); }, imports: [[
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
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
            ngx_select2__WEBPACK_IMPORTED_MODULE_14__["LSelect2Module"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__["SelectDropDownModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_29__["TicketIconAttachmentModule"],
            angular2_signaturepad__WEBPACK_IMPORTED_MODULE_25__["SignaturePadModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_generic_utils_Reminder_Module_ReminderModule_module__WEBPACK_IMPORTED_MODULE_28__["ReminderModuleModule"],
            src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_27__["QuoteStatusComponentModule"]
        ], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuotesModule, { declarations: [_quotes_component__WEBPACK_IMPORTED_MODULE_24__["QuotesComponent"],
        _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_21__["QuoteListComponent"],
        _quote_customer_popup_quote_customer_popup_component__WEBPACK_IMPORTED_MODULE_19__["QuoteCustomerPopupComponent"],
        _quote_add_quote_add_component__WEBPACK_IMPORTED_MODULE_17__["QuoteAddComponent"],
        _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_20__["QuoteDetailsComponent"],
        _quotecustomer_property_popup_quotecustomer_property_popup_component__WEBPACK_IMPORTED_MODULE_23__["QuotecustomerPropertyPopupComponent"],
        _quote_status_popup_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_22__["QuoteStatusPopupComponent"],
        _quote_contact_person_popup_quote_contact_person_popup_component__WEBPACK_IMPORTED_MODULE_18__["QuoteContactPersonPopupComponent"],
        _signature_quote_status_popup_signature_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_26__["SignatureQuoteStatusPopupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
        ngx_select2__WEBPACK_IMPORTED_MODULE_14__["LSelect2Module"],
        ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__["SelectDropDownModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_29__["TicketIconAttachmentModule"],
        angular2_signaturepad__WEBPACK_IMPORTED_MODULE_25__["SignaturePadModule"],
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_generic_utils_Reminder_Module_ReminderModule_module__WEBPACK_IMPORTED_MODULE_28__["ReminderModuleModule"],
        src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_27__["QuoteStatusComponentModule"]], exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuotesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _quotes_component__WEBPACK_IMPORTED_MODULE_24__["QuotesComponent"],
                    _quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_21__["QuoteListComponent"],
                    _quote_customer_popup_quote_customer_popup_component__WEBPACK_IMPORTED_MODULE_19__["QuoteCustomerPopupComponent"],
                    _quote_add_quote_add_component__WEBPACK_IMPORTED_MODULE_17__["QuoteAddComponent"],
                    _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_20__["QuoteDetailsComponent"],
                    _quotecustomer_property_popup_quotecustomer_property_popup_component__WEBPACK_IMPORTED_MODULE_23__["QuotecustomerPropertyPopupComponent"],
                    _quote_status_popup_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_22__["QuoteStatusPopupComponent"],
                    _quote_contact_person_popup_quote_contact_person_popup_component__WEBPACK_IMPORTED_MODULE_18__["QuoteContactPersonPopupComponent"],
                    _signature_quote_status_popup_signature_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_26__["SignatureQuoteStatusPopupComponent"]
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
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
                    ngx_select2__WEBPACK_IMPORTED_MODULE_14__["LSelect2Module"],
                    ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__["SelectDropDownModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_29__["TicketIconAttachmentModule"],
                    angular2_signaturepad__WEBPACK_IMPORTED_MODULE_25__["SignaturePadModule"],
                    ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_generic_utils_Reminder_Module_ReminderModule_module__WEBPACK_IMPORTED_MODULE_28__["ReminderModuleModule"],
                    src_app_generic_utils_Quote_Status_Component_QuoteStatusComponent_module__WEBPACK_IMPORTED_MODULE_27__["QuoteStatusComponentModule"]
                ],
                exports: [
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "2Zoe":
/*!********************************************************!*\
  !*** ./src/app/application/quotes/quotes.component.ts ***!
  \********************************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class QuotesComponent {
    ngOnInit() { }
}
QuotesComponent.ɵfac = function QuotesComponent_Factory(t) { return new (t || QuotesComponent)(); };
QuotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuotesComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function QuotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ template: '<router-outlet></router-outlet>' }]
    }], null, null); })();


/***/ }),

/***/ "4JXw":
/*!*********************************************************************!*\
  !*** ./src/app/application/quotes/quote-add/quote-add.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuoteAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteAddComponent", function() { return QuoteAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ngb-date-to-string-adapter */ "x8Rg");
/* harmony import */ var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ngb-time-to-string-adapter */ "dRK5");
/* harmony import */ var _services_property_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/property.model */ "4ebh");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _quote_customer_popup_quote_customer_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quote-customer-popup/quote-customer-popup.component */ "wRCY");
/* harmony import */ var _services_customer_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/customer.model */ "jG0A");
/* harmony import */ var _quotecustomer_property_popup_quotecustomer_property_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../quotecustomer-property-popup/quotecustomer-property-popup.component */ "WzcN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_quote_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/quote.service */ "uOqW");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/product.service */ "Gdn9");
/* harmony import */ var src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/DocumentUpload.service */ "nXz1");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/invoice.service */ "py7r");
/* harmony import */ var _services_userlog_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/userlog.service */ "V05N");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../services/genicprofile.service */ "bU6e");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _generic_utils_Reminder_Module_ReminderModule_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../generic-utils/Reminder-Module/ReminderModule.component */ "7Q/8");
/* harmony import */ var ngx_select2__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-select2 */ "u1nn");
/* harmony import */ var _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.component */ "xJsc");































function QuoteAddComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quotation number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteAddComponent_span_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.quoteService.QuoteData.QuoteId);
} }
function QuoteAddComponent_span_80_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_span_80_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.quoteService.QuoteData.QuoteUniqueID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.genicProfile.formData.QuotePrefix, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.quoteService.QuoteData.QuoteUniqueID);
} }
function QuoteAddComponent_tr_131_div_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", x_r27.UniqId, ")");
} }
function QuoteAddComponent_tr_131_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteAddComponent_tr_131_div_6_span_2_Template, 2, 1, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r27.WarrantyDays, " Days warranty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (x_r27.UniqId == null ? null : x_r27.UniqId.length) > 0);
} }
function QuoteAddComponent_tr_131_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r27.Qty, "");
} }
function QuoteAddComponent_tr_131_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteAddComponent_tr_131_div_6_Template, 3, 2, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteAddComponent_tr_131_div_8_Template, 2, 1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteAddComponent_tr_131_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const x_r27 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.PupulateQuoteProductList(x_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteAddComponent_tr_131_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const x_r27 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.RemoveQuoteItem(x_r27.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r27.ItemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r27.ItemDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r27.InWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r27.Type === "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", x_r27.UnitCost, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r27.Total, "");
} }
function QuoteAddComponent_div_135_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 174, 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_div_135_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.quoteService.QuoteItemData.Type = $event; })("change", function QuoteAddComponent_div_135_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.OnQuationItemTypeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.quoteService.QuoteItemData.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.currentUser.Product);
} }
function QuoteAddComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 176, 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_div_136_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.quoteService.QuoteItemData.Type = $event; })("change", function QuoteAddComponent_div_136_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.OnQuationItemTypeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.quoteService.QuoteItemData.Type);
} }
function QuoteAddComponent_div_141_l_select2_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "l-select2", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function QuoteAddComponent_div_141_l_select2_1_Template_l_select2_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.WhenSelectProductChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r46.productdata)("data", ctx_r46.data);
} }
function QuoteAddComponent_div_141_l_select2_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "l-select2", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function QuoteAddComponent_div_141_l_select2_2_Template_l_select2_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.WhenSelectProductChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r47.productdata)("data", ctx_r47.data);
} }
function QuoteAddComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuoteAddComponent_div_141_l_select2_1_Template, 1, 2, "l-select2", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteAddComponent_div_141_l_select2_2_Template, 1, 2, "l-select2", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.quoteService.QuoteItemData.Type === "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.quoteService.QuoteItemData.Type === "Product");
} }
function QuoteAddComponent_div_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.quoteService.QuoteItemData.ItemName, " ");
} }
const _c0 = function (a0) { return { "InvalidInput": a0 }; };
function QuoteAddComponent_input_144_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 180, 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_input_144_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.quoteService.QuoteItemData.Qty = $event; })("keyup", function QuoteAddComponent_input_144_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.CalculateQuoteProductCost(); })("keypress", function QuoteAddComponent_input_144_Template_input_keypress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.quoteService.QuoteItemData.Qty)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r11.isQtyValid === false));
} }
function QuoteAddComponent_div_165_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r59.currentUser.Product, " ");
} }
function QuoteAddComponent_div_165_div_1_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Service ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteAddComponent_div_165_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r61.quoteService.QuoteItemData.WarrantyDays, " Days Warranty ");
} }
function QuoteAddComponent_div_165_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 191);
} }
function QuoteAddComponent_div_165_div_1_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit Warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteAddComponent_div_165_div_1_div_12_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteAddComponent_div_165_div_1_div_12_div_8_label_21_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 207, 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_div_165_div_1_div_12_div_8_label_21_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r76.customwarrantyShowMethor(); })("ngModelChange", function QuoteAddComponent_div_165_div_1_div_12_div_8_label_21_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r78.quoteService.QuoteItemData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Custom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r73.quoteService.QuoteItemData.WarrantyDays);
} }
function QuoteAddComponent_div_165_div_1_div_12_div_8_label_22_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_div_165_div_1_div_12_div_8_label_22_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r79.customwarrantyShowMethor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Custom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteAddComponent_div_165_div_1_div_12_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 201, 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_div_165_div_1_div_12_div_8_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r81.customwarrantyShowMethor(); })("ngModelChange", function QuoteAddComponent_div_165_div_1_div_12_div_8_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r83.quoteService.QuoteItemData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 90 Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 203, 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_div_165_div_1_div_12_div_8_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r84.customwarrantyShowMethor(); })("ngModelChange", function QuoteAddComponent_div_165_div_1_div_12_div_8_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r85.quoteService.QuoteItemData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 180 Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 204, 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_div_165_div_1_div_12_div_8_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r86.customwarrantyShowMethor(); })("ngModelChange", function QuoteAddComponent_div_165_div_1_div_12_div_8_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r87.quoteService.QuoteItemData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 270 Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 205, 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_div_165_div_1_div_12_div_8_Template_input_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r88.customwarrantyShowMethor(); })("ngModelChange", function QuoteAddComponent_div_165_div_1_div_12_div_8_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r89.quoteService.QuoteItemData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " 365 Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuoteAddComponent_div_165_div_1_div_12_div_8_label_21_Template, 5, 1, "label", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, QuoteAddComponent_div_165_div_1_div_12_div_8_label_22_Template, 4, 0, "label", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r67.quoteService.QuoteItemData.WarrantyDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r67.quoteService.QuoteItemData.WarrantyDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r67.quoteService.QuoteItemData.WarrantyDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r67.quoteService.QuoteItemData.WarrantyDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.customwarrantyShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r67.customwarrantyShow);
} }
function QuoteAddComponent_div_165_div_1_div_12_div_9_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 210, 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_div_165_div_1_div_12_div_9_input_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r92.quoteService.QuoteItemData.WarrantyDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r90.quoteService.QuoteItemData.WarrantyDays);
} }
function QuoteAddComponent_div_165_div_1_div_12_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuoteAddComponent_div_165_div_1_div_12_div_9_input_1_Template, 2, 1, "input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r68.customwarrantyShowEdit);
} }
function QuoteAddComponent_div_165_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 193, 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_div_165_div_1_div_12_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r94.quoteService.QuoteItemData.UniqId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteAddComponent_div_165_div_1_div_12_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r96.enablewarrantchange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteAddComponent_div_165_div_1_div_12_span_6_Template, 3, 0, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuoteAddComponent_div_165_div_1_div_12_span_7_Template, 3, 0, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteAddComponent_div_165_div_1_div_12_div_8_Template, 23, 6, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuoteAddComponent_div_165_div_1_div_12_div_9_Template, 2, 1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r63.quoteService.QuoteItemData.UniqId)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r63.ItemUniqueIsValid === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r63.customwarrantyShowEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.customwarrantyShowEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.customwarrantyShowEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r63.customwarrantyShow);
} }
function QuoteAddComponent_div_165_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 186, 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_div_165_div_1_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r97.GenerateUniqueRandom(); })("ngModelChange", function QuoteAddComponent_div_165_div_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r99.quoteService.QuoteItemData.InWarranty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " want to give Warranty on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuoteAddComponent_div_165_div_1_i_7_Template, 2, 1, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteAddComponent_div_165_div_1_i_8_Template, 2, 0, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuoteAddComponent_div_165_div_1_div_10_Template, 2, 1, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuoteAddComponent_div_165_div_1_div_11_Template, 1, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuoteAddComponent_div_165_div_1_div_12_Template, 10, 8, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.quoteService.QuoteItemData.InWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.quoteService.QuoteItemData.Type === "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.quoteService.QuoteItemData.Type === "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.quoteService.QuoteItemData.InWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r57.quoteService.QuoteItemData.InWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.quoteService.QuoteItemData.InWarranty);
} }
function QuoteAddComponent_div_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuoteAddComponent_div_165_div_1_Template, 13, 6, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.tempInWarranty);
} }
function QuoteAddComponent_option_273_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", t_r100.TaxRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", t_r100.TaxName, "");
} }
function QuoteAddComponent_div_312_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "generic-ticket-icon-attachment", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("NameChange", function QuoteAddComponent_div_312_Template_generic_ticket_icon_attachment_NameChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const x_r101 = ctx.$implicit; return x_r101.AttachmentExtension = $event; })("PathChange", function QuoteAddComponent_div_312_Template_generic_ticket_icon_attachment_PathChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const x_r101 = ctx.$implicit; return x_r101.Attachment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteAddComponent_div_312_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const x_r101 = ctx.$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.RemoveQuoteAttachement(x_r101.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Name", x_r101.AttachmentExtension)("Path", x_r101.Attachment)("Status", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", x_r101.Attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function QuoteAddComponent_label_328_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 218, 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_label_328_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.quoteService.QuoteData.LinkToInvoice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.quoteService.QuoteData.LinkToInvoice);
} }
function QuoteAddComponent_div_350_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteAddComponent_div_350_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.onQuotePost(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteAddComponent_div_350_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.onQuotePost(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r23.createbuttontext, " as Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r23.createbuttontext, " as Pending");
} }
function QuoteAddComponent_div_351_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class QuoteAddComponent {
    constructor(titleService, quoteService, productservice, docservice, toastr, router, invoiceService, logService, loginservice, genicProfile, customerservice, dialog, notifyService) {
        this.titleService = titleService;
        this.quoteService = quoteService;
        this.productservice = productservice;
        this.docservice = docservice;
        this.toastr = toastr;
        this.router = router;
        this.invoiceService = invoiceService;
        this.logService = logService;
        this.loginservice = loginservice;
        this.genicProfile = genicProfile;
        this.customerservice = customerservice;
        this.dialog = dialog;
        this.notifyService = notifyService;
        // validation end--------
        this.fileToUpload = null;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({});
        this.ProductItemArray = [];
        this.tempArray = [];
        this.ItemBtn = 'Add';
        this.ItemIsValid = true;
        this.ItemProductIsValid = true;
        this.ItemQuantityIsValid = true;
        this.ItemUnitCosttIsValid = true;
        this.QuoteNosChange = false;
        this.QuoteNosChangeBtn = 'Change';
        this.currentUTCDate = new Date();
        this.customerData = new _services_customer_model__WEBPACK_IMPORTED_MODULE_10__["Customer"]();
        this.customerPropertyData = new _services_property_model__WEBPACK_IMPORTED_MODULE_7__["Property"]();
        this.minDate = {
            year: Number(this.currentUTCDate.getFullYear()),
            month: Number(this.currentUTCDate.getMonth() + 1),
            day: Number(this.currentUTCDate.getDate())
        };
        this.maxDate = {
            year: Number(this.currentUTCDate.getFullYear()) + 2,
            month: Number(this.currentUTCDate.getMonth() + 1),
            day: Number(this.currentUTCDate.getDate())
        };
        this.tempIndexQty = 0;
        this.IshowStockSection = true;
        this.tempInWarranty = false;
        this.loader = false;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.isQuoteTitleValid = true;
        this.isQtyValid = true;
        this.isUnitCostValid = true;
        this.ItemUniqueIsValid = true;
        this.productdata = [];
    }
    ngOnInit() {
        if (this.quoteService.QuoteData.CustomerName === 'Customer Name?' || this.quoteService.QuoteData.CustomerName === undefined) {
            this.router.navigate(['/quotes/']);
        }
        this.titleService.setTitle('Quotation Create | Genic Solution');
        this.customerservice.refrestCustomerIdWiseDepartmentList(this.quoteService.QuoteData.CustomerId);
        if (this.quoteService.QuoteData.QuoteTermsAndCondition === ''
            || this.quoteService.QuoteData.QuoteTermsAndCondition === null
            || this.quoteService.QuoteData.QuoteTermsAndCondition === undefined) {
            this.quoteService.QuoteData.QuoteTermsAndCondition = this.genicProfile.formData.QuoteTermsAndCondition;
        }
        this.newUniqueID = 0;
        this.locateQuoteUniqueID = this.quoteService.QuoteData.QuoteUniqueID;
        this.genicProfile.getGenicProfile(this.currentUser.Token);
        this.Isnavigated = false;
        if (this.router.url === '/quotes/quote-Add') {
            if (!this.currentUser.Permissions.QuoteCreate) {
                this.router.navigate(['/dashboard']);
            }
            this.createbuttontext = 'Save';
            this.quoteService.QuoteData.PreparedBy = this.currentUser.FullName;
        }
        else {
            if (!this.currentUser.Permissions.QuoteEdit) {
                this.router.navigate(['/dashboard']);
            }
            this.createbuttontext = 'Update';
        }
        this.productservice.refrestServicesList(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                this.productservice.serviceformList = response.result;
            }
        }, error => console.log(error));
        this.productservice.refrestProductsList(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                this.productservice.Productlist = response.result;
                console.log(this.productservice.Productlist);
            }
        }, error => console.log(error));
        this.getNotificationData();
        setTimeout(() => {
            this.getQuoteItems();
            this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
            this.quoteService.refrestArrayofKeyslist(this.quoteService.QuoteData.CustomerId);
        }, 1000);
        setTimeout(() => {
            this.InitialazeProductDropdown();
        }, 3000);
        this.quoteService.getTaxList(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                this.quoteService.TextList = response.result;
            }
        }, error => console.log(error));
        this.routeSub = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (!this.Isnavigated) {
                    const answer = window.confirm('Are you sure you want to save this data?');
                    if (!answer) {
                        this.quoteService.deleteTemporaryQuote(this.quoteService.QuoteData.Id);
                    }
                }
            }
        });
    }
    InitialazeProductDropdown() {
        let tempurl = '';
        if (this.quoteService.QuoteItemData.Type === 'Product') {
            tempurl = '/api/products/GetProductsForSelect2Dropdown/';
        }
        if (this.quoteService.QuoteItemData.Type === 'Service') {
            tempurl = '/api/products/GetServicesForSelect2Dropdown/';
        }
        let prod = this.quoteService.QuoteItemData.Type;
        if (this.quoteService.QuoteItemData.Type === 'Product') {
            prod = this.currentUser.Product;
        }
        this.productdata = {
            multiple: false,
            placeholder: 'Select ' + prod,
            minimumInputLength: 1,
            ajax: {
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + tempurl + this.currentUser.Token,
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term,
                        page: params.page
                    };
                },
                processResults: function (data, params) {
                    params.page = params.page || 1;
                    return {
                        results: data.items,
                        pagination: {
                            more: (params.page * 30) < data.total_count
                        }
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            templateResult: this.templateResult,
            templateSelection: this.templateSelection
        };
    }
    // function for result template
    templateResult(repo) {
        if (repo.loading) {
            return repo.text;
        }
        return '<div class="select2-result-repository clearfix"><div class="select2-result-repository__meta">' +
            '<div class="select2-result-repository__title"><strong>' + repo.full_name + '</strong></div>' +
            '<div class="select2-result-repository__description">' + repo.description + '</div></div></div>';
    }
    templateSelection(repo) {
        return repo.full_name || repo.text;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.getQuoteItems();
            this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
        }, 2000);
    }
    getQuoteItems() {
        this.quoteService.getQuoteItems(this.currentUser.Token, this.quoteService.QuoteData.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.quoteService.QuoteItemList = response.result;
                    this.setlocalcount();
                }
            }
        }, error => console.log(error));
    }
    validateInput(event) {
        let v = event.target.value;
        if (v === '') {
            this.isQuoteTitleValid = false;
        }
        else {
            this.isQuoteTitleValid = true;
        }
        let k;
        k = event.charCode;
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57));
    }
    //Get Notification data
    getNotificationData() {
        this.notifyService.getNotification(this.currentUser.Token)
            .subscribe(res => {
            if (res) {
                let obj = new Object();
                obj = res;
                this.notifyService.NotificationData = obj;
            }
        }, error => console.log(error));
    }
    // calculate total value
    CalculateQuoteProductCost() {
        const tempqty = this.quoteService.QuoteItemData.Qty;
        const temcost = Number(this.quoteService.QuoteItemData.UnitCost).toFixed(2);
        const total = tempqty * temcost;
        this.quoteService.QuoteItemData.Total = total.toString();
        if (temcost > 0) {
            this.isUnitCostValid = true;
        }
    }
    OnQuationItemTypeChange() {
        this.ItemQuantityIsValid = true;
        this.ItemUnitCosttIsValid = true;
        if (this.currentUser.Permissions.ProductWarranty) {
            if (this.quoteService.QuoteItemData.InWarranty) {
                this.ItemUniqueIsValid = true;
            }
        }
        if (this.quoteService.QuoteItemData.Type === 'Service') {
            this.quoteService.QuoteItemData.Qty = 1;
            this.quoteService.QuoteItemData.UnitCost = null;
            this.quoteService.QuoteItemData.Total = null;
            this.quoteService.QuoteItemData.InWarranty = false;
            this.quoteService.QuoteItemData.UniqId = null;
            this.quoteService.QuoteItemData.WarrantyDays = 365;
        }
        if (this.quoteService.QuoteItemData.Type === 'Product') {
            this.quoteService.QuoteItemData.Qty = null;
            this.quoteService.QuoteItemData.UnitCost = null;
            this.quoteService.QuoteItemData.Total = null;
            this.quoteService.QuoteItemData.InWarranty = false;
            this.quoteService.QuoteItemData.UniqId = null;
            this.quoteService.QuoteItemData.WarrantyDays = 365;
        }
        this.InitialazeProductDropdown();
        this.quoteService.QuoteItemData.ItemDescription = null;
    }
    WhenSelectProductChange(event) {
        if (this.quoteService.QuoteItemData.Type === 'Product') {
            const titem = this.productservice.Productlist.filter(x => x.Id === event.id);
            const warrantyvalue = titem[0].InWarranty;
            this.ItemQuantityIsValid = true;
            this.ItemUnitCosttIsValid = true;
            if (titem.length === 0) {
                this.quoteService.QuoteItemData.Qty = 0;
                this.quoteService.QuoteItemData.Total = 0;
                this.quoteService.QuoteItemData.UnitCost = 0;
                this.quoteService.QuoteItemData.ItemDescription = '';
                this.quoteService.QuoteItemData.WarrantyDays = 0;
                this.quoteService.QuoteItemData.InWarranty = false;
                this.IshowStockSection = false;
                this.tempInWarranty = false;
            }
            else {
                this.tempAvailableStock = Number(titem[0].Quantity);
                this.tempSalePrice = Number(titem[0].SalePrice);
                this.quoteService.QuoteItemData.WarrantyDays = Number(titem[0].WarrantyDays);
                this.IshowStockSection = true;
                this.quoteService.QuoteItemData.Qty = 1;
                this.quoteService.QuoteItemData.ItemName = titem[0].ProductName;
                this.quoteService.QuoteItemData.UnitCost = Number(titem[0].SalePrice);
                this.quoteService.QuoteItemData.Total = this.tempSalePrice * this.quoteService.QuoteItemData.Qty;
                this.quoteService.QuoteItemData.ItemDescription = titem[0].Description;
                this.quoteService.QuoteItemData.InWarranty = warrantyvalue;
                this.ItemQuantityIsValid = true;
                this.ItemUnitCosttIsValid = true;
            }
            if (warrantyvalue === true) {
                this.tempInWarranty = true;
            }
            else {
                this.tempInWarranty = false;
            }
        }
        if (this.quoteService.QuoteItemData.Type === 'Service') {
            const titem = this.productservice.serviceformList.filter(x => x.Id === event.id);
            const warrantyvalue = titem[0].InWarranty;
            if (titem.length === 0) {
                this.quoteService.QuoteItemData.ItemDescription = '';
                this.quoteService.QuoteItemData.WarrantyDays = 0;
                this.quoteService.QuoteItemData.InWarranty = false;
                this.tempInWarranty = false;
            }
            else {
                this.quoteService.QuoteItemData.Qty = 1;
                this.quoteService.QuoteItemData.ItemName = titem[0].ServiceName;
                this.quoteService.QuoteItemData.ItemDescription = titem[0].ServiceDescription;
                this.quoteService.QuoteItemData.WarrantyDays = Number(titem[0].WarrantyDays);
                this.quoteService.QuoteItemData.InWarranty = warrantyvalue;
                this.quoteService.QuoteItemData.UnitCost = 0;
                this.quoteService.QuoteItemData.Total = 0;
                this.ItemUnitCosttIsValid = true;
            }
            if (warrantyvalue === true) {
                this.tempInWarranty = true;
            }
            else {
                this.tempInWarranty = false;
            }
        }
        if (this.currentUser.Permissions.ProductWarranty) {
            if (this.quoteService.QuoteItemData.InWarranty) {
                this.ItemUniqueIsValid = true;
                this.GenerateUniqueRandom();
            }
        }
        this.InitialazeProductDropdown();
    }
    GenerateUniqueRandom() {
        if (this.ItemBtn === 'Add') {
            this.productservice.GetRandamUniqueId(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.quoteService.QuoteItemData.UniqId = response.MessageDescription;
                    }
                }
            }, error => console.log(error));
        }
    }
    // on remove depoiste type
    HideRequestedSection() {
        this.quoteService.QuoteData.ReqDepositeAmount = 0;
        this.quoteService.QuoteData.ReqDepositeTextValue = 0;
    }
    addProductToQuote(QItemId, ItemName, Qty, UnitCost, Total, ItemDescription) {
        this.ItemIsValid = true;
        if (this.quoteService.QuoteData.Id === undefined || this.quoteService.QuoteData.Id === '00000000-0000-0000-0000-000000000000') {
            this.router.navigate(['/quotes/quote-Add']);
            return false;
        }
        if (ItemName === undefined || ItemName === 'select' || ItemName === '') {
            this.toastr.warning('Warning', 'Please select a product');
            this.ItemProductIsValid = false;
            this.ItemIsValid = false;
            return false;
        }
        if (Qty === undefined || Qty === null) {
            this.toastr.warning('Warning', 'Please enter quantity');
            this.ItemQuantityIsValid = false;
            this.ItemIsValid = false;
            this.isQtyValid = false;
            return false;
        }
        if (UnitCost === undefined || UnitCost === null) {
            this.toastr.warning('Warning', 'Please enter unit cost');
            this.ItemUnitCosttIsValid = false;
            this.ItemIsValid = false;
            this.isUnitCostValid = false;
            return false;
        }
        if (this.quoteService.QuoteItemData.UniqId === null || this.quoteService.QuoteItemData.UniqId === undefined) {
            this.quoteService.QuoteItemData.UniqId === '';
        }
        if (this.currentUser.Permissions.ProductWarranty) {
            if (this.quoteService.QuoteItemData.InWarranty) {
                if (this.quoteService.QuoteItemData.UniqId === '' || this.quoteService.QuoteItemData.UniqId.length === 0) {
                    this.toastr.warning('Warning', 'Please enter a unique id');
                    this.ItemUniqueIsValid = false;
                    this.ItemIsValid = false;
                    return false;
                }
            }
        }
        this.quoteService.QuoteItemData.Id = QItemId;
        this.quoteService.QuoteItemData.QuoteId = this.quoteService.QuoteData.Id;
        this.quoteService.QuoteItemData.ItemName = ItemName;
        this.quoteService.QuoteItemData.Qty = Qty;
        this.quoteService.QuoteItemData.UnitCost = UnitCost;
        this.quoteService.QuoteItemData.Total = Total;
        this.quoteService.QuoteItemData.ItemDescription = ItemDescription;
        const des = 'A Service : ' + this.quoteService.QuoteItemData.ItemName + ', has been added to the Quotation No ' +
            this.quoteService.QuoteData.QuoteId + ' of Customer ' + this.quoteService.QuoteData.CustomerName + ' and Qty ' +
            this.quoteService.QuoteItemData.Qty + ' Amount of : $ ' + this.quoteService.QuoteItemData.Total
            + ' by user ' + this.currentUser.UserName;
        const Activity1 = 'An item : ' + this.quoteService.QuoteItemData.ItemName + 'Amount of : ' + this.quoteService.QuoteItemData.Total +
            ' is added to the Quotation No : ' + this.quoteService.QuoteData.QuoteId;
        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation', this.quoteService.QuoteData.Id, 'Added', des, Activity1).subscribe();
        this.quoteService.QuoteItemData.Qty = Number(this.quoteService.QuoteItemData.Qty);
        this.quoteService.QuoteItemData.Total = Number(this.quoteService.QuoteItemData.Total);
        this.quoteService.QuoteItemData.UnitCost = Number(this.quoteService.QuoteItemData.UnitCost);
        this.quoteService.QuoteItemData.WarrantyDays = Number(this.quoteService.QuoteItemData.WarrantyDays);
        if (QItemId === 0) {
            this.quoteService.postQuoteItemDetails(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.Isnavigated = true;
                        this.getQuoteItems();
                        this.ItemUniqueIsValid = true;
                        this.isUnitCostValid = true;
                        this.isQtyValid = true;
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                }
            }, error => console.log(error));
        }
        else {
            this.quoteService.putQuoteItemDetails(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.getQuoteItems();
                        const des1 = 'A Service : ' + this.quoteService.QuoteItemData.ItemName + ', has been modified from the Quotation No ' +
                            this.quoteService.QuoteData.QuoteId + ', of Customer : ' + this.quoteService.QuoteData.CustomerName + ', and Qty ' +
                            this.quoteService.QuoteItemData.Qty + ', Amount of : $ ' + this.quoteService.QuoteItemData.Total
                            + ' by user ' + this.currentUser.UserName;
                        const Activity2 = 'An item : ' + this.quoteService.QuoteItemData.ItemName + ' Amount of : '
                            + this.quoteService.QuoteItemData.Total +
                            ' is update to the Quotation No : ' + this.quoteService.QuoteData.QuoteId;
                        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation', this.quoteService.QuoteData.Id, 'Modify', des1, Activity2).subscribe();
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                }
            }, error => console.log(error));
            this.ItemBtn = 'Add';
        }
        this.ItemUniqueIsValid = true;
        this.quoteService.QuoteItemData.Id = 0;
        this.quoteService.QuoteItemData.QuoteId = '';
        this.quoteService.QuoteItemData.ItemName = '';
        this.quoteService.QuoteItemData.Qty = null;
        this.quoteService.QuoteItemData.UnitCost = null;
        this.quoteService.QuoteItemData.Total = null;
        this.quoteService.QuoteItemData.ItemDescription = null;
        this.quoteService.QuoteItemData.UniqId = '';
        this.quoteService.QuoteItemData.InWarranty = false;
        this.quoteService.QuoteItemData.WarrantyDays = 0;
        if (this.quoteService.QuoteItemData.Type === 'Product') {
            this.quoteService.QuoteItemData.Type = 'Service';
            this.InitialazeProductDropdown();
            setTimeout(() => { this.quoteService.QuoteItemData.Type = 'Product'; this.InitialazeProductDropdown(); }, 200);
        }
        else {
            this.quoteService.QuoteItemData.Type = 'Product';
            this.InitialazeProductDropdown();
            setTimeout(() => { this.quoteService.QuoteItemData.Type = 'Service'; this.InitialazeProductDropdown(); }, 200);
        }
        setTimeout(() => {
            this.quoteService.QuoteData.NetAmount = 0;
            this.quoteService.QuoteItemList.forEach(element => {
                this.quoteService.QuoteData.NetAmount += element.Total;
            });
        }, 1000);
    }
    PupulateQuoteProductList(x) {
        this.quoteService.QuoteItemData = Object.assign({}, x);
        this.ItemBtn = 'Update';
        if (x.InWarranty) {
            this.tempInWarranty = true;
        }
        else {
            this.tempInWarranty = false;
        }
        setTimeout(() => {
            this.quoteService.QuoteItemData.Qty = x.Qty;
        }, 800);
    }
    RemoveQuoteItem(id) {
        this.quoteService.deleteQuoteItem(this.currentUser.Token, id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.info('info', response.MessageDescription);
                    this.getQuoteItems();
                    this.setlocalcount();
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    setlocalcount() {
        this.ItemSubTotalByArry = [];
        this.ItemSubTotalByArry = this.quoteService.QuoteItemList.map(element => element.Total);
        if (this.ItemSubTotalByArry.length < 0) {
            this.quoteService.QuoteData.SubTotal = 0;
            this.quoteService.QuoteData.NetAmount = 0;
            this.quoteService.QuoteData.TaxAmount = 0;
            this.quoteService.QuoteData.TaxRate = 0;
            this.quoteService.QuoteData.DiscountAmount = 0;
            this.quoteService.QuoteData.DiscountTextValue = 0;
        }
        else {
            this.quoteService.QuoteData.SubTotal = this.ItemSubTotalByArry.reduce((a, b) => a + b, 0);
            let EditSubTotalValue = Number(this.ItemSubTotalByArry.reduce((a, b) => a + b, 0));
            let EditTaxRate = Number(this.quoteService.QuoteData.TaxRate);
            let EditTaxAmt = Number(EditSubTotalValue * EditTaxRate) / 100;
            this.quoteService.QuoteData.TaxAmount = EditTaxAmt;
            this.quoteService.QuoteData.SubTotal = EditSubTotalValue;
            if (Number(this.quoteService.QuoteData.DiscountType) === 0) {
                const EditDisTextValue = Number(this.quoteService.QuoteData.DiscountTextValue);
                if (Number(EditSubTotalValue) < EditDisTextValue) {
                    this.quoteService.QuoteData.DiscountAmount = 0;
                }
                else {
                    this.quoteService.QuoteData.DiscountAmount = Number(EditDisTextValue);
                    this.quoteService.QuoteData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - EditDisTextValue);
                }
            }
            else if (Number(this.quoteService.QuoteData.DiscountType) === 1) {
                const EditDisTextValue = Number(this.quoteService.QuoteData.DiscountTextValue);
                const z = Number(EditSubTotalValue * EditDisTextValue / 100);
                if (Number(EditSubTotalValue) < z) {
                    this.quoteService.QuoteData.DiscountAmount = 0;
                }
                else {
                    this.quoteService.QuoteData.DiscountAmount = Number(z);
                    this.quoteService.QuoteData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - z);
                }
            }
        }
    }
    // on deposite type change value
    changeDepositeValue() {
        if (Number(this.quoteService.QuoteData.ReqDepositeType) === 0) {
            const v = this.quoteService.QuoteData.NetAmount;
            const x = this.quoteService.QuoteData.ReqDepositeTextValue;
            if (Number(this.quoteService.QuoteData.NetAmount) < x) {
                this.quoteService.QuoteData.ReqDepositeAmount = 0;
            }
            else {
                this.quoteService.QuoteData.ReqDepositeAmount = x;
            }
        }
        else if (Number(this.quoteService.QuoteData.ReqDepositeType) === 1) {
            const v = this.quoteService.QuoteData.NetAmount;
            const x = this.quoteService.QuoteData.ReqDepositeTextValue;
            const z = v * x / 100;
            if (Number(this.quoteService.QuoteData.NetAmount) < z) {
                this.quoteService.QuoteData.ReqDepositeAmount = 0;
            }
            else {
                this.quoteService.QuoteData.ReqDepositeAmount = z;
            }
        }
    }
    changeDiscountValue() {
        if (this.quoteService.QuoteData.DiscountType == null || this.quoteService.QuoteData.DiscountType == undefined) {
            this.quoteService.QuoteData.DiscountType = 0;
        }
        if (Number(this.quoteService.QuoteData.DiscountType) === 0) {
            let SubTotalValue = Number(this.quoteService.QuoteData.SubTotal);
            const DisTextValue = Number(this.quoteService.QuoteData.DiscountTextValue);
            if (Number(SubTotalValue) < DisTextValue) {
                this.quoteService.QuoteData.DiscountAmount = 0;
                let TempTaxRate = Number(this.quoteService.QuoteData.TaxRate);
                let tempTaxAmt = Number(SubTotalValue) * TempTaxRate / 100;
                this.quoteService.QuoteData.TaxAmount = tempTaxAmt;
                this.quoteService.QuoteData.NetAmount = Number(SubTotalValue + tempTaxAmt);
            }
            else {
                this.quoteService.QuoteData.DiscountAmount = Number(DisTextValue);
                let TempTaxRate = Number(this.quoteService.QuoteData.TaxRate);
                let tempTaxAmt = (Number(SubTotalValue) - Number(DisTextValue)) * TempTaxRate / 100;
                this.quoteService.QuoteData.TaxAmount = tempTaxAmt;
                // let TaxAmt = Number(this.quoteService.QuoteData.TaxAmount) ;
                let z = SubTotalValue - DisTextValue + tempTaxAmt;
                this.quoteService.QuoteData.NetAmount = Number(z);
            }
        }
        else if (Number(this.quoteService.QuoteData.DiscountType) === 1) {
            let SubTotalValue = Number(this.quoteService.QuoteData.SubTotal);
            let DisTextValue = Number(this.quoteService.QuoteData.DiscountTextValue);
            const tempDiscAmount = Number(SubTotalValue * DisTextValue / 100);
            if (Number(SubTotalValue) < tempDiscAmount) {
                this.quoteService.QuoteData.DiscountAmount = 0;
                let TempTaxRate = Number(this.quoteService.QuoteData.TaxRate);
                let tempTaxAmt = Number(SubTotalValue) * Number(TempTaxRate) / 100;
                this.quoteService.QuoteData.TaxAmount = Number(tempTaxAmt);
                this.quoteService.QuoteData.NetAmount = Number(SubTotalValue + tempTaxAmt);
            }
            else {
                this.quoteService.QuoteData.DiscountAmount = Number(tempDiscAmount);
                let TempTaxRate = Number(this.quoteService.QuoteData.TaxRate);
                let tempTaxAmt = (Number(SubTotalValue) - Number(tempDiscAmount)) * TempTaxRate / 100;
                this.quoteService.QuoteData.TaxAmount = tempTaxAmt;
                let zz = SubTotalValue - tempDiscAmount + tempTaxAmt;
                this.quoteService.QuoteData.NetAmount = Number(zz);
            }
        }
    }
    // remove discount value
    RemoveDiscount() {
        this.quoteService.QuoteData.NetAmount = Number(this.quoteService.QuoteData.NetAmount) +
            Number(this.quoteService.QuoteData.DiscountAmount);
        this.quoteService.QuoteData.DiscountTextValue = 0;
        this.quoteService.QuoteData.DiscountType = 0;
        this.quoteService.QuoteData.DiscountAmount = 0;
    }
    // calculate tax
    CalculateQuoteTax() {
        let SubTotalValue = Number(this.quoteService.QuoteData.SubTotal);
        let DisctAmt = this.quoteService.QuoteData.DiscountAmount;
        let TaxRate = Number(this.quoteService.QuoteData.TaxRate);
        let z = SubTotalValue - DisctAmt;
        let TaxAmt = Number(z * TaxRate) / 100;
        this.quoteService.QuoteData.TaxAmount = TaxAmt;
        this.quoteService.QuoteData.NetAmount = z + TaxAmt;
    }
    picked(event) {
        this.loader = true;
        let t = this.currentUser.Token;
        let type = 'quotationattachment';
        let moduleid = this.quoteService.QuoteData.Id;
        let remark = '';
        let Files = event.target.files;
        let file = Files.item(0);
        this.docservice.uploadDocument(t, type, moduleid, '', remark, file).subscribe(res => {
            if (res) {
                const response = res;
                console.log(response);
                if (response.Message === 'success') {
                    this.toastr.info('upload successfully');
                    this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
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
    RemoveQuoteAttachement(QuoteAttamentId) {
        if (confirm('Are you sure to delete this attachment?')) {
            this.loader = true;
            let t = this.currentUser.Token;
            let type = 'quotationattachment';
            let id = QuoteAttamentId.toString();
            let moduleid = this.quoteService.QuoteData.Id;
            let remark = '';
            this.docservice.RemoveDocument(t, type, moduleid, id, remark).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.toastr.info(response.MessageDescription);
                        this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
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
    }
    onQuotePost(s) {
        this.quoteService.QuoteData.Status = s;
        this.quoteService.QuoteData.CreatedBy = this.currentUser.Id;
        if (this.quoteService.QuoteData.CustomerName === undefined ||
            this.quoteService.QuoteData.CustomerName === 'Customer Name?' ||
            this.quoteService.QuoteData.CustomerName === '') {
            this.toastr.warning('warning', 'Select Customer!');
            return false;
        }
        // tslint:disable-next-line:max-line-length
        if (this.quoteService.QuoteData.JobTitle === null || this.quoteService.QuoteData.JobTitle === '' || this.quoteService.QuoteData.JobTitle === undefined) {
            this.toastr.warning('warning', 'Add quote title.');
            this.isQuoteTitleValid = false;
            // tslint:disable-next-line:max-line-length
        }
        else if (this.quoteService.QuoteItemList.length === 0 || this.quoteService.QuoteItemList === [] || this.quoteService.QuoteItemList === undefined) {
            this.toastr.warning('warning', 'Add product/service to the quotation.');
        }
        else {
            this.quoteService.QuoteData.DiscountType = Number(this.quoteService.QuoteData.DiscountType);
            this.quoteService.QuoteData.TaxRate = Number(this.quoteService.QuoteData.TaxRate);
            this.loader = true;
            this.quoteService.putQuote(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        if (response.Status === 'insert') {
                            this.toastr.success('success', response.MessageDescription);
                            const qId = this.quoteService.QuoteData.Id;
                            const isCust = this.notifyService.NotificationData.QuoteCustomer;
                            const isAdmin = this.notifyService.NotificationData.QuoteAdmin;
                            const AdminId = this.currentUser.Id;
                            if (isCust === true || isAdmin === true) {
                                this.notifyService.quoteEmailNotification(qId, isCust, isAdmin, AdminId)
                                    .subscribe(resw => {
                                    if (resw) {
                                    }
                                }, error => console.log(error));
                            }
                            this.loader = false;
                            // This section is used for email notification
                            const des = 'Quotation No : ' + this.quoteService.QuoteData.QuoteId + ', is added by '
                                + this.currentUser.UserName + ', for Customer '
                                + this.quoteService.QuoteData.CustomerName + 'Quotation title ' +
                                this.quoteService.QuoteData.JobTitle + ' Amount of $ ' + this.quoteService.QuoteData.NetAmount + '.00' +
                                ', Discount Amount : ' + this.quoteService.QuoteData.DiscountAmount + ', Tax Amount : ' +
                                this.quoteService.QuoteData.TaxAmount +
                                ', Description : ' + this.quoteService.QuoteData.ClientRemark + ', Internal note : ' +
                                this.quoteService.QuoteData.InternalNotes +
                                ', on dated : ' + new Date(Date.parse(Date()));
                            const Activity5 = 'New Quotation No : ' + this.quoteService.QuoteData.QuoteId + ' is created Amount of :$ '
                                + this.quoteService.QuoteData.NetAmount + '0.00';
                            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation', this.quoteService.QuoteData.Id, 'Added', des, Activity5).subscribe();
                            this.router.navigate(['/quotes/']);
                        }
                        if (response.Status === 'update') {
                            this.toastr.success('success', response.MessageDescription);
                            this.notifyService.updateQuoteEmailNotification(this.quoteService.QuoteData.Id, this.notifyService.NotificationData.QuoteCustomer, this.notifyService.NotificationData.QuoteAdmin, this.currentUser.Id)
                                .subscribe(resu => {
                                if (resu) {
                                }
                            }, error => console.log(error));
                            const des1 = 'Quotation No : ' + this.quoteService.QuoteData.QuoteId + ', is modified by '
                                + this.currentUser.UserName + ', for Customer '
                                + this.quoteService.QuoteData.CustomerName + 'Quotation title ' +
                                this.quoteService.QuoteData.JobTitle + ' Amount of $ ' + this.quoteService.QuoteData.NetAmount + '.00' +
                                ', Discount Amount : ' + this.quoteService.QuoteData.DiscountAmount + ', Tax Amount : ' +
                                this.quoteService.QuoteData.TaxAmount +
                                ', Description : ' + this.quoteService.QuoteData.ClientRemark + ', Internal note : ' +
                                this.quoteService.QuoteData.InternalNotes +
                                ', on dated : ' + new Date(Date.parse(Date()));
                            const Activity6 = 'Quotation No : ' + this.quoteService.QuoteData.QuoteId + ' is updated Amount of :$ '
                                + this.quoteService.QuoteData.NetAmount + '0.00';
                            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation', this.quoteService.QuoteData.Id, 'Modify', des1, Activity6).subscribe();
                            this.router.navigate(['/quotes/']);
                        }
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                        this.loader = false;
                    }
                }
            }, error => console.log(error));
        }
    }
    // onSelectQuotesItemType() {
    //   switch (Number(this.quoteService.QuoteItemData.Type)) {
    //     case 1: this.quoteService.QuoteItemData.Type = 1; break;
    //     case 2: this.quoteService.QuoteItemData.Type = 2; break;
    //     default: this.quoteService.QuoteItemData.Type = 0; break;
    //   }
    // }
    ngOnDestroy() {
        this.quoteService.SetAsDefaultValue();
        this.routeSub.unsubscribe();
    }
    CleareProductToQuote() {
        this.quoteService.QuoteItemData.ItemName = '';
        this.quoteService.QuoteItemData.Qty = null;
        this.quoteService.QuoteItemData.ItemDescription = null;
        this.quoteService.QuoteItemData.UnitCost = null;
        this.quoteService.QuoteItemData.Total = null;
        this.quoteService.QuoteItemData.InWarranty = false;
        this.quoteService.QuoteItemData.WarrantyDays = 365;
        this.quoteService.QuoteItemData.UniqId = '';
    }
    onQuoteNosChange() {
        if (this.QuoteNosChange) {
            this.QuoteNosChange = false;
            this.QuoteNosChangeBtn = 'Change';
            if (this.locateQuoteUniqueID === this.quoteService.QuoteData.QuoteUniqueID) {
            }
            else {
                this.ValidateQuoteNo();
            }
        }
        else {
            this.QuoteNosChange = true;
            this.QuoteNosChangeBtn = 'Save';
        }
    }
    ValidateQuoteNo() {
        this.quoteService.ValidateQuoteNo(this.quoteService.QuoteData.QuoteUniqueID).subscribe(res => {
            switch (res.status) {
                case 201:
                    this.newUniqueID = res.body;
                    this.quoteService.QuoteData.QuoteId = this.genicProfile.formData.QuotePrefix + this.newUniqueID;
                    this.toastr.success('success', 'Quotation number available.');
                    break;
                case 202:
                    this.toastr.warning('warning', 'Quotation number already taken, choose another.');
                    break;
                default:
                    this.toastr.error('error', res.statusText);
                    break;
            }
        }, err => { console.log(err); });
    }
    numberOnly(event) {
        if (event.target.value === 0 || event.target.value === '') {
            this.isQtyValid = false;
        }
        else {
            this.isQtyValid = true;
        }
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
        if (event.target.value === 0 || event.target.value === '') {
            this.isUnitCostValid = false;
        }
        else {
            this.isUnitCostValid = true;
        }
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
    OpenAddClienDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {};
        this.dialog.open(_quote_customer_popup_quote_customer_popup_component__WEBPACK_IMPORTED_MODULE_9__["QuoteCustomerPopupComponent"], dialogConfig).afterClosed().subscribe(res => {
            if (res !== '') {
                this.customerData = new _services_customer_model__WEBPACK_IMPORTED_MODULE_10__["Customer"]();
                this.customerData = res.x;
                this.quoteService.PropertyList = [];
                this.quoteService.getCustomerProperty(res.x.Id);
                this.OpenAddCustomerPropertyQuoteDialog();
                setTimeout(() => {
                    this.quoteService.refrestArrayofKeyslist(res.x.Id);
                }, 200);
            }
        });
    }
    OpenAddCustomerPropertyQuoteDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {};
        this.dialog.open(_quotecustomer_property_popup_quotecustomer_property_popup_component__WEBPACK_IMPORTED_MODULE_11__["QuotecustomerPropertyPopupComponent"], dialogConfig).afterClosed().subscribe(res => {
            if (res !== '') {
                if (res === undefined) {
                    this.router.navigate(['/properties/property-add/'], {
                        queryParams: { ' id': this.quoteService.QuoteData.CustomerId, ' name': this.quoteService.QuoteData.CustomerName }
                    });
                }
                else {
                    this.customerPropertyData = new _services_property_model__WEBPACK_IMPORTED_MODULE_7__["Property"]();
                    this.customerPropertyData = res.x;
                    this.quoteService.QuoteData.CompanyName = this.customerData.CompanyName;
                    this.quoteService.QuoteData.CustomerName = this.customerPropertyData.CustomerName;
                    this.quoteService.QuoteData.CustomerId = this.customerPropertyData.CustomerId;
                    this.quoteService.QuoteData.PropertyId = this.customerPropertyData.Id;
                    this.quoteService.QuoteData.CustomerAddress = res.x.AddressStreet1 + ' ' + res.x.AddressStreet2 + ' ' + res.x.AddressUnitNo + ' ' + res.x.AddressCountry + ' ' + res.x.AddressZipCode;
                }
            }
        });
    }
    customwarrantyShowMethor() {
        if (this.quoteService.QuoteItemData.WarrantyDays === undefined) {
            this.customwarrantyShow = false;
        }
        else {
            switch (this.quoteService.QuoteItemData.WarrantyDays.toString()) {
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
    enablewarrantchange() {
        if (this.customwarrantyShowEdit) {
            this.customwarrantyShowEdit = false;
        }
        else {
            this.customwarrantyShowEdit = true;
        }
    }
}
QuoteAddComponent.ɵfac = function QuoteAddComponent_Factory(t) { return new (t || QuoteAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quote_service__WEBPACK_IMPORTED_MODULE_13__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_15__["DocumentUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_invoice_service__WEBPACK_IMPORTED_MODULE_17__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userlog_service__WEBPACK_IMPORTED_MODULE_18__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_20__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_21__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_22__["NotificationService"])); };
QuoteAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteAddComponent, selectors: [["app-quote-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__["NgbDateToStringAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbTimeToStringAdapter"] }
        ])], decls: 352, vars: 59, consts: [["autocomplete", "off"], ["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/quotes", 1, "kt-subheader__breadcrumbs-link"], ["type", "hidden", "name", "Id", 3, "ngModel", "ngModelChange"], ["Id", "ngModel"], ["type", "hidden", "name", "CustomerId", 3, "ngModel", "ngModelChange"], ["CustomerId", "ngModel"], [1, "new-request-main-section", "jobs-for-client-section"], [1, "kt-container", "kt-container--fluid", "quote-head"], [1, "new-requst-filter_form"], [1, "quoteBody", "quote-edit-body"], [1, "col-md-12", "section-client-requst-form", "bodyTitle", "quote-edit-request"], [1, ""], [1, "kt-section"], [1, "kt-section__title"], ["href", "javascript:;"], ["data-toggle", "kt-tooltip", "data-width", "auto", "title", "", "data-original-title", "If different than the corresponding address", 1, "kt-section__help"], [1, "kt-section__content", "col-md-7", "requst-for-client-name"], [1, "row"], [1, "col-lg-11", "padd-left-0"], [1, "text-danger"], ["maxlength", "1024", "name", "JobTitle", "placeholder", "Subject", "rows", "1", 1, "form-control", 3, "ngClass", "ngModel", "keyup", "change", "ngModelChange"], ["JobTitle", "ngModel"], ["class", "spnError", 4, "ngIf"], [1, "row", "qtAddressSection"], [1, "col-md-6"], [1, "kt-widget4__sub"], [1, "col-md-5", "new-requst-client-name", "qtbdsecton"], [1, "kt-widget4", "kt-widget4--sticky"], [1, "kt-widget4__items", "kt-widget4__items--bottom", "kt-portlet__space-x", "kt-margin-b-20"], [1, "kt-widget4__item"], [1, "col-md-4"], [1, "kt-widget4__info"], ["href", "javascript:;", 1, "kt-widget4__title"], [1, "col-md-8"], ["class", "kt-widget4__ext", 4, "ngIf"], [1, "col-md-3", 2, "display", "none"], [1, "kt-widget4__ext"], [1, "kt-widget4__number", "kt-font-danger"], ["href", "javascript:;", 3, "click"], ["for", ""], ["type", "text", "placeholder", "Attention", "name", "Attention", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "kt-widget4__item", 2, "display", "none"], [1, "col-md-5"], [1, "col-md-7"], ["type", "text", "placeholder", "Prepared By", "name", "PreparedBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["_ngcontent-ndn-c4", "", 1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--brand", "check-ticket"], [1, "col-md-12", "new-request-service-details-form"], [1, "col-md-12", "job-for-tab-content"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "kt-portlet__body"], [1, "col-md-12"], [1, "table", "table-borderless", "table-sm"], ["colspan", "2", "width", "50%"], [1, "product-service-colun-name"], ["width", "15%"], ["width", "5%"], ["colspan", "6"], [1, "client-view-border-info"], ["class", "border", 4, "ngFor", "ngForOf"], ["colspan", "2"], [1, "row", "radio-service"], ["class", "col-md-4", 4, "ngIf"], ["colspan", "4"], ["class", "col-md-12", 4, "ngIf"], ["name", "QuoteItemData.Qty", "height", "30px", "type", "text", "min", "0", "maxlength", "3", "class", "form-control", "placeholder", "Quantity", 3, "ngModel", "ngClass", "ngModelChange", "keyup", "keypress", 4, "ngIf"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "fa", "fa-dollar-sign"], ["name", "QuoteItemData.UnitCost", "type", "number", "min", "0", "maxlength", "6", "placeholder", "Unit Cost", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "keyup", "keypress"], ["QuoteItemData.UnitCost", "ngModel"], ["name", "QuoteItemData.Total", "type", "number", "min", "0", "height", "30px", "placeholder", "Total Cost", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["QuoteItemData.Total", "ngModel"], ["name", "QuoteItemData.ItemDescription", "placeholder", "Description", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["QuoteItemData.ItemDescription", "ngModel"], ["class", "row", 4, "ngIf"], [1, "form-group", "form-group-last"], [1, "col-lg-4"], ["href", "javascript:;", 1, "btn", "btn-brand", "btn-sm", "add-line-item-btn", 3, "click"], [1, "la", "la-plus"], ["href", "javascript:;", 1, "btn", "btn-brand", "btn-sm", "add-line-item-btn", 2, "margin-left", "2px", 3, "click"], [1, "la", "la-times"], [1, "quots-client-view-border-info"], [1, "row", "kt-widget4", "total-job-price-client"], [1, "tab-content", 2, "overflow-x", "scroll", "overflow", "hidden"], ["id", "kt_widget11_tab1_content", 1, "tab-pane", "active"], [1, "kt-widget11"], ["id", "kt_repeater_1"], [1, "row", "col-md-12", 2, "padding", "0"], [1, "col-md-7", "col-sm-6", "col-xs-6", "qty-unit-total"], [1, "clientRemarkSection"], [1, "row--"], [1, "CLRemark"], ["name", "ClientRemark", "maxlength", "1024", "placeholder", "Client Remarks", "rows", "3", 1, "form-control", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["ClientRemark", "ngModel"], [1, "row--", 2, "display", "none"], [1, "clientViewSection"], [1, "form-group"], [1, "clView"], ["aria-hidden", "true", 1, "fa", "fa-eye"], [1, "kt-checkbox-inline"], [1, "kt-checkbox"], ["type", "checkbox", "name", "ClientViewQty", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "ClientViewUnitCost", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "ClientViewLineItemTotal", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "ClientViewTotal", 3, "ngModel", "ngModelChange"], [1, "col-md-5", "invoicing-list-view-border-left", 2, "padding", "0", "margin-top", "16px"], [1, "row", "slsbTotal"], [1, "subTOtal"], [1, "SubAmount"], [1, "row", 2, "margin", "33px 0 0 0", "padding", "0"], [1, "col-md-3"], [1, "disHead"], [1, "inputText"], ["type", "number", "placeholder", "Discount", "min", "0", "maxlength", "4", "name", "DiscountTextValue", 1, "form-control", 3, "ngModel", "change", "keydown", "keypress", "keyup", "ngModelChange"], [1, "selectionDrop"], ["name", "DiscountType", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["value", "0"], ["value", "1"], [1, "discountAmt"], [1, "row", 2, "padding", "0", "margin", "18px 0 0 0"], [1, "taxHead"], [1, "taxSectionHead"], ["name", "TaxRate", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "taxAmitHead"], [1, "row", "slFinalRow"], [1, "on-site-client-required"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19", "internal-notes-attachment"], [1, "kt-widget19__wrapper"], ["name", "QuoteTermsAndCondition", "id", "QuoteTermsAndCondition", "rows", "3", "maxlength", "1024", "placeholder", "Terms And Condition", 1, "form-control", 3, "ngModel", "ngModelChange"], ["data-container", "body", "data-toggle", "kt-popover", "data-placement", "top", "data-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "data-original-title", "", "title", "", 1, "tooltip-questionMark"], ["name", "InternalNotes", "id", "exampleTextarea", "rows", "3", "maxlength", "1024", "placeholder", "Additional Remarks", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col-md-1", 4, "ngFor", "ngForOf"], [1, "file-upload"], ["for", "upload", 1, "file-upload__label"], ["title", "Add Attachment", 1, "fa", "fa-paperclip"], ["id", "upload", "type", "file", "name", "file-upload", 1, "file-upload__input", 3, "change"], ["type", "checkbox", "name", "LinkToJob", 3, "ngModel", "ngModelChange"], ["LinkToJob", "ngModel"], ["class", "kt-checkbox", 4, "ngIf"], ["type", "checkbox", "name", "QuoteAdmin", 3, "ngModel", "ngModelChange"], ["QuoteAdmin", "ngModel"], ["type", "checkbox", "name", "QuoteCustomer", 3, "ngModel", "ngModelChange"], ["QuoteCustomer", "ngModel"], [3, "Id", "Token", "ReminderModule", "IdChange", "TokenChange"], [1, "row", "new-request-footer-bottom"], ["type", "hidden", "name", "QuoteId", 3, "ngModel", "ngModelChange"], ["type", "reset", "routerLink", "/quotes", 1, "btn", "btn-secondary"], ["class", "btn-group", 4, "ngIf"], [1, "spnError"], [1, "input-group-addon"], ["type", "number", "maxlength", "5", "name", "QuoteUniqueID", 1, "form-control", "btnChangeQuote", 2, "height", "33px !important", "width", "61px", "display", "inline-block", 3, "ngModel", "ngModelChange"], [1, "border"], [4, "ngIf"], [1, "btn-group", "btnOpp"], ["href", "javascript:;", "title", "edit", 1, "btn-Edit", 3, "click"], [1, "la", "la-edit"], ["href", "javascript:;", "title", "remove", 1, "btn-remove", 3, "click"], [1, "la", "la-trash-o"], [1, "radio-inline"], ["type", "radio", "name", "QuoteItemData.Type", "value", "Product", 3, "ngModel", "ngModelChange", "change"], ["QuoteItemData.Type", "ngModel"], ["type", "radio", "name", "QuoteItemData.Type", "value", "Service", 3, "ngModel", "ngModelChange", "change"], ["name", "product_formcontrol", "class", "select2customcss", 3, "options", "data", "valueChange", 4, "ngIf"], ["name", "product_formcontrol", 1, "select2customcss", 3, "options", "data", "valueChange"], [1, "form-control"], ["name", "QuoteItemData.Qty", "height", "30px", "type", "text", "min", "0", "maxlength", "3", "placeholder", "Quantity", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "keyup", "keypress"], ["QuoteItemData.Qty", "ngModel"], ["class", "col-lg-12 col-md-12", 4, "ngIf"], [1, "col-lg-12", "col-md-12"], [1, "col-lg-7", "col-md-7", "padd-top-10", 2, "margin", "auto"], [1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--brand"], ["type", "checkbox", "name", "quoteService.QuoteItemData.InWarranty", 3, "ngModel", "change", "ngModelChange"], ["quoteService.QuoteItemData.InWarranty", "ngModel"], ["class", "col-lg-5 col-md-5", "style", "margin:auto;", 4, "ngIf"], ["class", "col-lg-5 col-md-5", 4, "ngIf"], [1, "col-lg-5", "col-md-5", 2, "margin", "auto"], [1, "col-lg-5", "col-md-5"], [1, "col-lg-7", "col-md-7"], ["name", "quoteService.QuoteItemData.UniqId", "height", "30px", "type", "text", "min", "0", "maxlength", "64", "placeholder", "Serial No", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["quoteService.QuoteItemData.UniqId", "ngModel"], ["href", "javascript:void(0)", 1, "text-warning", "btnStockUpdate", 3, "click"], ["class", "kt-radio-list", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["aria-hidden", "true", 1, "fa", "fa-minus"], [1, "kt-radio-list"], [1, "kt-radio", "kt-radio--bold", "kt-radio--brand"], ["type", "radio", "value", "90", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["WarrantyDays", "ngModel"], ["type", "radio", "value", "180", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "270", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "365", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["class", "kt-radio kt-radio--bold kt-radio--brand", 4, "ngIf"], ["type", "radio", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "name", "WarrantyDays", "checked", "", 1, "custom-control-input", 3, "change"], ["name", "quoteService.QuoteItemData.WarrantyDays", "height", "30px", "type", "number", "min", "0", "maxlength", "4", "class", "form-control", "placeholder", "Days", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "quoteService.QuoteItemData.WarrantyDays", "height", "30px", "type", "number", "min", "0", "maxlength", "4", "placeholder", "Days", 1, "form-control", 3, "ngModel", "ngModelChange"], ["quoteService.QuoteItemData.WarrantyDays", "ngModel"], [3, "value"], [1, "col-md-1"], [3, "Name", "Path", "Status", "NameChange", "PathChange"], [1, "fa", "fa-trash", "text-danger"], ["target", "_blank", 3, "href"], [1, "fa", "fa-download", "text-success"], ["type", "checkbox", "name", "LinkToInvoice", 3, "ngModel", "ngModelChange"], ["LinkToInvoice", "ngModel"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-brand", 3, "click"], [1, "btn", "btn-brand"]], template: function QuoteAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Quotation's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Quotation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_19_listener($event) { return ctx.quoteService.QuoteData.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_21_listener($event) { return ctx.quoteService.QuoteData.CustomerId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " QUOTATION FOR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "textarea", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function QuoteAddComponent_Template_textarea_keyup_44_listener($event) { return ctx.validateInput($event); })("change", function QuoteAddComponent_Template_textarea_change_44_listener($event) { return ctx.validateInput($event); })("ngModelChange", function QuoteAddComponent_Template_textarea_ngModelChange_44_listener($event) { return ctx.quoteService.QuoteData.JobTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, QuoteAddComponent_span_46_Template, 2, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Address : \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Contact Details \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Quotation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Rate opportunity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, QuoteAddComponent_span_79_Template, 3, 1, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, QuoteAddComponent_span_80_Template, 5, 2, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteAddComponent_Template_a_click_84_listener() { return ctx.onQuoteNosChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Attention");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_91_listener($event) { return ctx.quoteService.QuoteData.Attention = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Prepared By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_97_listener($event) { return ctx.quoteService.QuoteData.PreparedBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h3", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " LINE ITEMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "table", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "QTY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "UNIT COST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "TOTAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "th", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, QuoteAddComponent_tr_131_Template, 19, 6, "tr", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, QuoteAddComponent_div_135_Template, 5, 2, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, QuoteAddComponent_div_136_Template, 5, 1, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "td", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, QuoteAddComponent_div_141_Template, 3, 2, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, QuoteAddComponent_div_142_Template, 3, 1, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, QuoteAddComponent_input_144_Template, 2, 4, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "input", 82, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_150_listener($event) { return ctx.quoteService.QuoteItemData.UnitCost = $event; })("keyup", function QuoteAddComponent_Template_input_keyup_150_listener() { return ctx.CalculateQuoteProductCost(); })("keypress", function QuoteAddComponent_Template_input_keypress_150_listener($event) { return ctx.numberwithDecimalOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "input", 84, 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_157_listener($event) { return ctx.quoteService.QuoteItemData.Total = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "textarea", 86, 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_textarea_ngModelChange_162_listener($event) { return ctx.quoteService.QuoteItemData.ItemDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, QuoteAddComponent_div_165_Template, 2, 1, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteAddComponent_Template_a_click_170_listener() { return ctx.addProductToQuote(ctx.quoteService.QuoteItemData.Id, ctx.quoteService.QuoteItemData.ItemName, ctx.quoteService.QuoteItemData.Qty, ctx.quoteService.QuoteItemData.UnitCost, ctx.quoteService.QuoteItemData.Total, ctx.quoteService.QuoteItemData.ItemDescription); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteAddComponent_Template_a_click_173_listener() { return ctx.CleareProductToQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " TOTAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h3", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Quotation value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "textarea", 106, 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_textarea_ngModelChange_205_listener($event) { return ctx.quoteService.QuoteData.ClientRemark = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "                                              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Client View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Adjust what your client will see on this quote. To change the default for \u200Ball future quotes, visit the PDF Configuration. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_219_listener($event) { return ctx.quoteService.QuoteData.ClientViewQty = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Quantities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "input", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_223_listener($event) { return ctx.quoteService.QuoteData.ClientViewUnitCost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Unit Cost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_227_listener($event) { return ctx.quoteService.QuoteData.ClientViewLineItemTotal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Line item totals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "input", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_231_listener($event) { return ctx.quoteService.QuoteData.ClientViewTotal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Sub Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "input", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_Template_input_change_251_listener() { return ctx.changeDiscountValue(); })("keydown", function QuoteAddComponent_Template_input_keydown_251_listener() { return ctx.changeDiscountValue(); })("keypress", function QuoteAddComponent_Template_input_keypress_251_listener($event) { return ctx.numberwithDecimalOnly($event); })("keyup", function QuoteAddComponent_Template_input_keyup_251_listener() { return ctx.changeDiscountValue(); })("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_251_listener($event) { return ctx.quoteService.QuoteData.DiscountTextValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "select", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_Template_select_change_254_listener() { return ctx.changeDiscountValue(); })("ngModelChange", function QuoteAddComponent_Template_select_ngModelChange_254_listener($event) { return ctx.quoteService.QuoteData.DiscountType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "option", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "SGD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "option", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "select", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_Template_select_change_270_listener() { return ctx.CalculateQuoteTax(); })("ngModelChange", function QuoteAddComponent_Template_select_ngModelChange_270_listener($event) { return ctx.quoteService.QuoteData.TaxRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "option", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "---Select Tax---");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](273, QuoteAddComponent_option_273_Template, 2, 2, "option", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "h3", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " TERMS & CONDITIONS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "textarea", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_textarea_ngModelChange_296_listener($event) { return ctx.quoteService.QuoteData.QuoteTermsAndCondition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "                      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h3", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " ADDITIONAL REMARKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "textarea", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_textarea_ngModelChange_309_listener($event) { return ctx.quoteService.QuoteData.InternalNotes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "                      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](312, QuoteAddComponent_div_312_Template, 11, 4, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "label", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "i", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "input", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteAddComponent_Template_input_change_317_listener($event) { return ctx.picked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Link note to related");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "input", 151, 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_324_listener($event) { return ctx.quoteService.QuoteData.LinkToJob = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " Ticket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](328, QuoteAddComponent_label_328_Template, 5, 1, "label", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Email Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "input", 154, 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_334_listener($event) { return ctx.notifyService.NotificationData.QuoteAdmin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "input", 156, 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_339_listener($event) { return ctx.notifyService.NotificationData.QuoteCustomer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, " Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "generic-reminder-module", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("IdChange", function QuoteAddComponent_Template_generic_reminder_module_IdChange_345_listener($event) { return ctx.quoteService.QuoteData.Id = $event; })("TokenChange", function QuoteAddComponent_Template_generic_reminder_module_TokenChange_345_listener($event) { return ctx.currentUser.Token = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "input", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteAddComponent_Template_input_ngModelChange_347_listener($event) { return ctx.quoteService.QuoteData.QuoteId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "button", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](350, QuoteAddComponent_div_350_Template, 6, 2, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](351, QuoteAddComponent_div_351_Template, 3, 0, "div", 162);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.CustomerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteService.QuoteData.CompanyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c0, ctx.isQuoteTitleValid === false))("ngModel", ctx.quoteService.QuoteData.JobTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isQuoteTitleValid === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteService.QuoteData.CustomerAddress, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteService.QuoteData.CustomerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteService.QuoteData.CustomerEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteService.QuoteData.CustomerContactNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.QuoteNosChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.QuoteNosChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.QuoteNosChangeBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.Attention);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.PreparedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Product.toUpperCase(), "/SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteService.QuoteItemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ItemBtn === "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ItemBtn === "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteItemData.Type === "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteItemData.UnitCost)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c0, ctx.ItemUnitCosttIsValid === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteItemData.Total);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteItemData.ItemDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.ProductWarranty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ItemBtn, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.quoteService.QuoteData.NetAmount.toFixed(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.ClientRemark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.ClientViewQty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.ClientViewUnitCost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.ClientViewLineItemTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.ClientViewTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.quoteService.QuoteData.SubTotal.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.DiscountTextValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.DiscountType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.quoteService.QuoteData.DiscountAmount.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.TaxRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteService.TextList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.quoteService.QuoteData.TaxAmount.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.quoteService.QuoteData.NetAmount.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.QuoteTermsAndCondition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.InternalNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteService.QuoteAttachmentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.LinkToJob);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.InvoiceView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.notifyService.NotificationData.QuoteAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.notifyService.NotificationData.QuoteCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Id", ctx.quoteService.QuoteData.Id)("Token", ctx.currentUser.Token)("ReminderModule", "quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quoteService.QuoteData.QuoteId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_x"], _generic_utils_Reminder_Module_ReminderModule_component__WEBPACK_IMPORTED_MODULE_25__["ReminderModuleComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["RadioControlValueAccessor"], ngx_select2__WEBPACK_IMPORTED_MODULE_26__["LSelect2Component"], _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_27__["TicketIconAttachmentComponent"]], styles: [".quote-edit-request[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:20px !important;}\r\n.quote-edit-request[_ngcontent-%COMP%]   .kt-section__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600;color:black;font-size:30px;}\r\n.quote-edit-request[_ngcontent-%COMP%]   .kt-section__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#0080c7;border-bottom:none;font-size:32px;}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-color:#FF8533 !important;}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-left:1px solid #ddd !important;border-right:1px solid #ddd !important;}\r\n.qtAddressSection[_ngcontent-%COMP%]{margin: 10px 0px !important;background: #ebebeb;padding: 5px;}\r\n.qtAddressSection[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:18px !important;font-weight:600 !important;color:black !important;}\r\n.qtAddressSection[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:grey !important;font-size:16px !important;}\r\n.qtAddressSection[_ngcontent-%COMP%]   .change-btn[_ngcontent-%COMP%]{text-align:right;}\r\n.qtAddressSection[_ngcontent-%COMP%]   .change-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0089cc !important;font-size:14px !important;font-weight:600 !important;}\r\n.quote-edit-request[_ngcontent-%COMP%]   .kt-widget4__title[_ngcontent-%COMP%]{font-size:18px !important;color:black;font-weight:600;}\r\n.col-md-5.new-requst-client-name[_ngcontent-%COMP%]{padding-top:10px !important;}\r\n.qtbdsecton[_ngcontent-%COMP%]{padding-bottom: 10px !important;}\r\n.kt-widget4__items[_ngcontent-%COMP%]{margin-bottom:10px !important;border-bottom:0px;}\r\n.check-ticket[_ngcontent-%COMP%]{font-size:16px;}\r\n.kt-widget4__item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin:0px 10px;}\r\n.kt-widget4__item[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{top:4px}\r\n.job-for-tab-content[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{padding-right:15px !important;padding-left:15px !important;}\r\n.add-data-table-form-jobs[_ngcontent-%COMP%]{margin-top:0px;}\r\n.col-md-2.right-side-doller-form-info[_ngcontent-%COMP%]{top:0 !important;}\r\n.qty-unit-total[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{height:50px !important;}\r\n.qty-unit-total[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:250px;}\r\n.on-site-client-required[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{padding-left:20px !important;padding-right:20px !important;}\r\n.clView[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#0089cc;}\r\n.clView[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#0089cc;}\r\n.invoicing-list-view-border-left[_ngcontent-%COMP%]   .kt-widget2__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px !important;font-weight:600 !important;color:black !important;}\r\n.invoicing-list-view-border-left[_ngcontent-%COMP%]   .kt-widget2__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px !important;font-weight:600 !important;color:black !important;}\r\n.invoicing-list-view-border-left[_ngcontent-%COMP%]   .kt-widget3__item[_ngcontent-%COMP%]   .discountSection[_ngcontent-%COMP%]{width:auto;}\r\n.kt-widget1__item.kt-widget2__item[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{font-size:20px;}\r\n.tax-block[_ngcontent-%COMP%]{width:auto !important;}\r\n.kt-widget1__item[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-top:none !important;}\r\n.kt-widget1__item[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:none !important;}\r\n.kt-widget1__item.kt-widget3__item[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%], .kt-widget1__item.kt-widget4__item[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{margin-bottom:0px;}\r\n.kt-widget1__item.kt-widget3__item[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .kt-widget1__item.kt-widget4__item[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:113px}\r\n.kt-widget1__item.kt-widget3__item[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2), .kt-widget1__item.kt-widget4__item[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){width:100px}\r\n.kt-widget1__number.kt-font-success[_ngcontent-%COMP%]{display:block;text-align:left;}\r\n.discountSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0px 0 0 0 !important;display:block;text-align:right;}\r\n.requestedSectionInput[_ngcontent-%COMP%]{width:100%;text-align:left;}\r\n.requestedSectionInput[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:113px}\r\n.requestedSectionInput[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child{width:103px}\r\n.requestedSectionInput[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width: 53% !important;height:40px !important;margin:0 0 0 0 !important;}\r\n.requestedSectionInput[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width: 47% !important;height:40px !important;display: inline-block !important;}\r\n.kt-widget1__item.kt-widget6__item[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){width:100px;}\r\n.requestedSectionInput[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin: 0 0 0 0  !important;}\r\n.kt-widget1__item.kt-widget2__item[_ngcontent-%COMP%]   .kt-widget1__number[_ngcontent-%COMP%]{width:39%}\r\n.kt-widget1__item.kt-widget6__item[_ngcontent-%COMP%]   .kt-widget1__number[_ngcontent-%COMP%]{width:39% !important;}\r\n.kt-widget1__item.kt-widget5__item[_ngcontent-%COMP%]   .kt-widget1-main[_ngcontent-%COMP%]{width:39% !important;}\r\n.kt-widget1[_ngcontent-%COMP%]   .kt-widget5__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{font-size:20px !important;}\r\n.kt-widget1__item.kt-widget5__item[_ngcontent-%COMP%]   .kt-widget1-main[_ngcontent-%COMP%]{font-size:20px;}\r\n.subTOtal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    color: black;\r\n}\r\n.SubAmount[_ngcontent-%COMP%] {\r\ntext-align: right;\r\n}\r\n.SubAmount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nfont-size: 17px;\r\nfont-weight: 600;\r\ncolor: black;\r\n}\r\n.disHead[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #988a8a;\r\n}\r\n.inputText[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 78%;\r\n    height: 31px !important;\r\n}\r\n.selectionDrop[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n    height: 31px;\r\n    width: 137%;\r\n    padding: 0px 0 0 0;\r\n}\r\n.discountAmt[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n.discountAmt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #988a8a;\r\n}\r\n.taxHead[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #988a8a;\r\n}\r\n.taxSectionHead[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n    width: 116%;\r\n    height: 31px;\r\n    color: #b38a8a;\r\n    padding: 0px 0 0 0;\r\n}\r\n.taxAmitHead[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n.taxAmitHead[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #988a8a;\r\n}\r\n.subTOtal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    color: black;\r\n}\r\n.SubAmount[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n.SubAmount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    color: black;\r\n}\r\n.slFinalRow[_ngcontent-%COMP%]{\r\n    padding: 7px 0 0 0;\r\n    margin: 46px 0 0 0;\r\n    border-top: 2px solid #e3e3e3;\r\n}\r\n.slsbTotal[_ngcontent-%COMP%]{\r\n    padding: 0 0 16px 0;\r\n    margin: 0;\r\n    border-bottom: 2px solid #80808038;\r\n}\r\n.tableLineshap[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #80808029 !important;\r\n}\r\n.tableLineshap[_ngcontent-%COMP%]:last-child{\r\n    border-bottom: 1px solid #e1dede !important;\r\n    margin-bottom: 23px\r\n}\r\n.radio-service[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    margin-right: 22px;\r\n    font-weight: 600;\r\n}\r\n.radio-service[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:10px;}\r\n.radio-service[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{height:50px !important;}\r\n.ticket-attachment-container[_ngcontent-%COMP%] { position: relative; width: 100%; }\r\n.ticket-attachment-image[_ngcontent-%COMP%] {display: block; width: 100%; height: auto; }\r\n.ticket-attachment-overlay[_ngcontent-%COMP%] {position: absolute;bottom: 0;left: 100%;right: 0;background-color: rgb(162, 176, 180);overflow: hidden; width: 0;height: 100%;transition: .5s ease;text-align: center;}\r\n.ticket-attachment-container[_ngcontent-%COMP%]:hover   .ticket-attachment-overlay[_ngcontent-%COMP%] {width: 100%;left: 0;}\r\n.ticket-attachment-text[_ngcontent-%COMP%] {white-space: nowrap; color: white; font-size: 20px; position: absolute; overflow: hidden;top: 50%; left: 50%; transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);}\r\n.ticket-attachment-remove-text[_ngcontent-%COMP%] {white-space: nowrap;color: white;font-size: 20px;position: absolute;overflow: hidden;bottom: 10%;left: 50%; transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);}\r\n.file-upload[_ngcontent-%COMP%] {position: relative;display: inline-block;margin-top: 6px;}\r\n.file-upload__label[_ngcontent-%COMP%] {display: block;padding: 0px 27px;color: #fff; background: #31a5f7; border-radius: .4em;font-size: 17px; height: 23px;transition: background .3s;}\r\n.file-upload__label[_ngcontent-%COMP%]:hover {cursor: pointer;background: rgb(204, 198, 198); }\r\n.file-upload__input[_ngcontent-%COMP%] {position: absolute;left: 0;top: 0;right: 0;bottom: 0;font-size: 1; width:0;height: 100%;opacity: 0;}\r\n.quoteBody[_ngcontent-%COMP%] {\r\n        padding: 0 24px;\r\n      }\r\n.quote-head[_ngcontent-%COMP%] {\r\n        padding: 0 !important;\r\n      }\r\n.bodyTitle[_ngcontent-%COMP%] {\r\n        padding: 20px 0 0 8px;\r\n      }\r\n.qtbdsecton[_ngcontent-%COMP%] {\r\n        \r\n        margin-top: 0px !important;\r\n      }\r\n.qtAddressSection[_ngcontent-%COMP%] {\r\n        margin: 0 5px;\r\n      }\r\n.qtAddressSection[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n          color: #48465b !important;\r\n          font-size: 15px !important;\r\n          margin-top: 10px;\r\n          font-weight: 600;\r\n        }\r\n.ttlQty[_ngcontent-%COMP%] {\r\n        margin: 40px 0 0 0;\r\n      }\r\n.btnremoveProduct[_ngcontent-%COMP%] {\r\n        margin: 5px 0 0 0;\r\n        float: right;\r\n      }\r\n.CLRemark[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n      }\r\ni.fa.fa-eye[_ngcontent-%COMP%] {\r\n        margin: 13px 0 0 0;\r\n        color: green;\r\n        padding: 0 10px 0 0;\r\n        font-size: 20px;\r\n      }\r\n.clView[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        font-size: 17px;\r\n        color: #258000;\r\n      }\r\n.requestedSectionInput[_ngcontent-%COMP%] {\r\n        text-align: right;\r\n        \r\n      }\r\n.requestedSectionInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n          width: 33%;\r\n          display: inline-block;\r\n        }\r\n.requestedSectionInput[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n          width: 22%;\r\n          display: inline-block;\r\n          height: 50px;\r\n          margin: 0 12px 0 0;\r\n        }\r\n.requestedSectionInput[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n          margin: 0 0 0 30px;\r\n          color: red;\r\n        }\r\n.discountSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: 0 0px 0 29px;\r\n        color: red;\r\n      }\r\n.discountInput[_ngcontent-%COMP%] {\r\n        text-align: right;\r\n      }\r\n.tax-block[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        text-align: right;\r\n      }\r\n.tax-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n          margin-left: 3px;\r\n        }\r\n.taxToshow[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n        width: 37%;\r\n        display: inline-block;\r\n        margin: 0 0 0 11px;\r\n      }\r\n.faxsection[_ngcontent-%COMP%]{padding: 0;}\r\n.faxsection[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding: 7px 0;\r\n        font-size: 13px !important;\r\n        font-weight: 500;}\r\n.switcher-customer[_ngcontent-%COMP%] { top:-15px;position: relative; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcXVvdGVzL3F1b3RlLWFkZC9xdW90ZS1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0Isd0JBQXdCLENBQUMsdUJBQXVCLENBQUM7QUFDckUseUNBQXlDLGVBQWUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ3BGLDhDQUE4QyxhQUFhLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDO0FBQzlGLHNDQUFzQywrQkFBK0IsQ0FBQztBQUN0RSxzQ0FBc0MscUNBQXFDLENBQUMsc0NBQXNDLENBQUM7QUFDbkgsa0JBQWtCLDJCQUEyQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQztBQUMvRSx3QkFBd0IseUJBQXlCLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUM7QUFDcEcsNkJBQTZCLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDO0FBQzdFLDhCQUE4QixnQkFBZ0IsQ0FBQztBQUMvQyxnQ0FBZ0Msd0JBQXdCLENBQUMseUJBQXlCLENBQUMsMEJBQTBCLENBQUM7QUFDOUcsdUNBQXVDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7QUFDN0YsaUNBQWlDLDJCQUEyQixDQUFDO0FBQzdELFlBQVksK0JBQStCLENBQUM7QUFDNUMsbUJBQW1CLDZCQUE2QixDQUFDLGlCQUFpQixDQUFDO0FBQ25FLGNBQWMsY0FBYyxDQUFDO0FBQzdCLHdCQUF3QixlQUFlLENBQUM7QUFDeEMsc0NBQXNDLE9BQU87QUFDN0MsdUNBQXVDLDZCQUE2QixDQUFDLDRCQUE0QixDQUFDO0FBQ2xHLDBCQUEwQixjQUFjLENBQUM7QUFDekMsc0NBQXNDLGdCQUFnQixDQUFDO0FBQ3ZELHVCQUF1QixzQkFBc0IsQ0FBQztBQUM5Qyx5QkFBeUIsWUFBWSxDQUFDO0FBQ3RDLDJDQUEyQyw0QkFBNEIsQ0FBQyw2QkFBNkIsQ0FBQztBQUN0RyxVQUFVLGFBQWEsQ0FBQztBQUN4QixjQUFjLGFBQWEsQ0FBQztBQUM1QixzREFBc0QseUJBQXlCLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUM7QUFDbEksd0RBQXdELHlCQUF5QixDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDO0FBQ3BJLG9FQUFvRSxVQUFVLENBQUM7QUFDL0Usc0RBQXNELGNBQWMsQ0FBQztBQUVyRSxXQUFXLHFCQUFxQixDQUFDO0FBQ2pDLDJCQUEyQiwwQkFBMEIsQ0FBQztBQUN0RCw4QkFBOEIsMEJBQTBCLENBQUM7QUFDekQscUZBQXFGLGlCQUFpQixDQUFDO0FBQ3ZHLHlIQUF5SCxXQUFXO0FBQ3BJLDJIQUEySCxXQUFXO0FBQ3RJLG9DQUFvQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQ2xFLG1CQUFtQiwyQkFBMkIsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUUsdUJBQXVCLFVBQVUsQ0FBQyxlQUFlLENBQUM7QUFDbEQsZ0RBQWdELFdBQVc7QUFDM0QsOENBQThDLFdBQVc7QUFDekQsOEJBQThCLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDO0FBQ3JHLGtDQUFrQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxnQ0FBZ0MsQ0FBQztBQUNoSCw2REFBNkQsV0FBVyxDQUFDO0FBQ3pFLHlCQUF5QiwyQkFBMkIsQ0FBQztBQUVyRCx1REFBdUQsU0FBUztBQUNoRSx1REFBdUQsb0JBQW9CLENBQUM7QUFDNUUsb0RBQW9ELG9CQUFvQixDQUFDO0FBQ3pFLG1FQUFtRSx5QkFBeUIsQ0FBQztBQUM3RixvREFBb0QsY0FBYyxDQUFDO0FBQ25FO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLDZDQUE2QztBQUNqRDtBQUNBO0lBQ0ksMkNBQTJDO0lBQzNDO0FBQ0o7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0EsMkJBQTJCLGlCQUFpQixDQUFDO0FBQzdDLHNCQUFzQixzQkFBc0IsQ0FBQztBQUU3QywrQkFBK0Isa0JBQWtCLEVBQUUsV0FBVyxFQUFFO0FBQzVELDBCQUEwQixjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtBQUNyRSw0QkFBNEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsb0NBQW9DLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUNsTSwrREFBK0QsV0FBVyxDQUFDLE9BQU8sQ0FBQztBQUNuRix5QkFBeUIsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFnQyxDQUFDLG9DQUFvQyxDQUFDO0FBQzdNLGdDQUFnQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsZ0NBQWdDLENBQUMsb0NBQW9DLENBQUM7QUFDbE4sY0FBYyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUM7QUFDdkUscUJBQXFCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQztBQUNySywyQkFBMkIsZUFBZSxDQUFDLDhCQUE4QixFQUFFO0FBQzNFLHFCQUFxQixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO0FBQ3hIO1FBQ0ksZUFBZTtNQUNqQjtBQUVBO1FBQ0UscUJBQXFCO01BQ3ZCO0FBRUE7UUFDRSxxQkFBcUI7TUFDdkI7QUFFQTtRQUNFLHFDQUFxQztRQUNyQywwQkFBMEI7TUFDNUI7QUFFQTtRQUNFLGFBQWE7TUFDZjtBQUVFO1VBQ0UseUJBQXlCO1VBQ3pCLDBCQUEwQjtVQUMxQixnQkFBZ0I7VUFDaEIsZ0JBQWdCO1FBQ2xCO0FBRUY7UUFDRSxrQkFBa0I7TUFDcEI7QUFFQTtRQUNFLGlCQUFpQjtRQUNqQixZQUFZO01BQ2Q7QUFFQTtRQUNFLFdBQVc7TUFDYjtBQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZUFBZTtNQUNqQjtBQUVBO1FBQ0UsZUFBZTtRQUNmLGNBQWM7TUFDaEI7QUFFQTtRQUNFLGlCQUFpQjtRQUNqQixnQkFBZ0I7TUFDbEI7QUFFRTtVQUNFLFVBQVU7VUFDVixxQkFBcUI7UUFDdkI7QUFFQTtVQUNFLFVBQVU7VUFDVixxQkFBcUI7VUFDckIsWUFBWTtVQUNaLGtCQUFrQjtRQUNwQjtBQUVBO1VBQ0Usa0JBQWtCO1VBQ2xCLFVBQVU7UUFDWjtBQUVGO1FBQ0Usb0JBQW9CO1FBQ3BCLFVBQVU7TUFDWjtBQUVBO1FBQ0UsaUJBQWlCO01BQ25CO0FBRUE7UUFDRSxXQUFXO1FBQ1gsaUJBQWlCO01BQ25CO0FBRUU7VUFDRSxnQkFBZ0I7UUFDbEI7QUFFRjtRQUNFLFVBQVU7UUFDVixxQkFBcUI7UUFDckIsa0JBQWtCO01BQ3BCO0FBQ0EsWUFBWSxVQUFVLENBQUM7QUFDdkIsa0JBQWtCLGNBQWM7UUFDOUIsMEJBQTBCO1FBQzFCLGdCQUFnQixDQUFDO0FBQ2pCLHFCQUFxQixTQUFTLENBQUMsa0JBQWtCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9xdW90ZXMvcXVvdGUtYWRkL3F1b3RlLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1b3RlLWVkaXQtcmVxdWVzdHtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7cGFkZGluZzoyMHB4ICFpbXBvcnRhbnQ7fVxyXG4ucXVvdGUtZWRpdC1yZXF1ZXN0IC5rdC1zZWN0aW9uX190aXRsZSBwe2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjaztmb250LXNpemU6MzBweDt9XHJcbi5xdW90ZS1lZGl0LXJlcXVlc3QgLmt0LXNlY3Rpb25fX3RpdGxlIHAgc3Bhbntjb2xvcjojMDA4MGM3O2JvcmRlci1ib3R0b206bm9uZTtmb250LXNpemU6MzJweDt9XHJcbi5jb2wtbWQtMTIuc2VjdGlvbi1jbGllbnQtcmVxdXN0LWZvcm17Ym9yZGVyLWNvbG9yOiNGRjg1MzMgIWltcG9ydGFudDt9XHJcbi5jb2wtbWQtMTIuc2VjdGlvbi1jbGllbnQtcmVxdXN0LWZvcm17Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDt9XHJcbi5xdEFkZHJlc3NTZWN0aW9ue21hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtiYWNrZ3JvdW5kOiAjZWJlYmViO3BhZGRpbmc6IDVweDt9XHJcbi5xdEFkZHJlc3NTZWN0aW9uIGxhYmVse2ZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NjAwICFpbXBvcnRhbnQ7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5xdEFkZHJlc3NTZWN0aW9uIGxhYmVsIHNwYW57Y29sb3I6Z3JleSAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7fVxyXG4ucXRBZGRyZXNzU2VjdGlvbiAuY2hhbmdlLWJ0bnt0ZXh0LWFsaWduOnJpZ2h0O31cclxuLnF0QWRkcmVzc1NlY3Rpb24gLmNoYW5nZS1idG4gYXtjb2xvcjojMDA4OWNjICFpbXBvcnRhbnQ7Zm9udC1zaXplOjE0cHggIWltcG9ydGFudDtmb250LXdlaWdodDo2MDAgIWltcG9ydGFudDt9XHJcbi5xdW90ZS1lZGl0LXJlcXVlc3QgLmt0LXdpZGdldDRfX3RpdGxle2ZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7Y29sb3I6YmxhY2s7Zm9udC13ZWlnaHQ6NjAwO31cclxuLmNvbC1tZC01Lm5ldy1yZXF1c3QtY2xpZW50LW5hbWV7cGFkZGluZy10b3A6MTBweCAhaW1wb3J0YW50O31cclxuLnF0YmRzZWN0b257cGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDt9XHJcbi5rdC13aWRnZXQ0X19pdGVtc3ttYXJnaW4tYm90dG9tOjEwcHggIWltcG9ydGFudDtib3JkZXItYm90dG9tOjBweDt9XHJcbi5jaGVjay10aWNrZXR7Zm9udC1zaXplOjE2cHg7fVxyXG4ua3Qtd2lkZ2V0NF9faXRlbSBsYWJlbHttYXJnaW46MHB4IDEwcHg7fVxyXG4ua3Qtd2lkZ2V0NF9faXRlbSAua3QtY2hlY2tib3ggPiBzcGFue3RvcDo0cHh9XHJcbi5qb2ItZm9yLXRhYi1jb250ZW50IC5rdC1wb3J0bGV0X19oZWFke3BhZGRpbmctcmlnaHQ6MTVweCAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDoxNXB4ICFpbXBvcnRhbnQ7fVxyXG4uYWRkLWRhdGEtdGFibGUtZm9ybS1qb2Jze21hcmdpbi10b3A6MHB4O31cclxuLmNvbC1tZC0yLnJpZ2h0LXNpZGUtZG9sbGVyLWZvcm0taW5mb3t0b3A6MCAhaW1wb3J0YW50O31cclxuLnF0eS11bml0LXRvdGFsIHNlbGVjdHtoZWlnaHQ6NTBweCAhaW1wb3J0YW50O31cclxuLnF0eS11bml0LXRvdGFsIHRleHRhcmVhe2hlaWdodDoyNTBweDt9XHJcbi5vbi1zaXRlLWNsaWVudC1yZXF1aXJlZCAua3QtcG9ydGxldF9faGVhZHtwYWRkaW5nLWxlZnQ6MjBweCAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6MjBweCAhaW1wb3J0YW50O31cclxuLmNsVmlldyBpe2NvbG9yOiMwMDg5Y2M7fVxyXG4uY2xWaWV3IGxhYmVse2NvbG9yOiMwMDg5Y2M7fVxyXG4uaW52b2ljaW5nLWxpc3Qtdmlldy1ib3JkZXItbGVmdCAua3Qtd2lkZ2V0Ml9faXRlbSBoM3tmb250LXNpemU6MThweCAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjYwMCAhaW1wb3J0YW50O2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7fVxyXG4uaW52b2ljaW5nLWxpc3Qtdmlldy1ib3JkZXItbGVmdCAua3Qtd2lkZ2V0Ml9faXRlbSBzcGFue2ZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NjAwICFpbXBvcnRhbnQ7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5pbnZvaWNpbmctbGlzdC12aWV3LWJvcmRlci1sZWZ0IC5rdC13aWRnZXQzX19pdGVtIC5kaXNjb3VudFNlY3Rpb257d2lkdGg6YXV0bzt9XHJcbi5rdC13aWRnZXQxX19pdGVtLmt0LXdpZGdldDJfX2l0ZW0gLmt0LXdpZGdldDFfX3RpdGxle2ZvbnQtc2l6ZToyMHB4O31cclxuXHJcbi50YXgtYmxvY2t7d2lkdGg6YXV0byAhaW1wb3J0YW50O31cclxuLmt0LXdpZGdldDFfX2l0ZW0gdGFibGUgdHJ7Ym9yZGVyLXRvcDpub25lICFpbXBvcnRhbnQ7fVxyXG4ua3Qtd2lkZ2V0MV9faXRlbSB0YWJsZSB0ciB0ZHtib3JkZXItdG9wOm5vbmUgIWltcG9ydGFudDt9XHJcbi5rdC13aWRnZXQxX19pdGVtLmt0LXdpZGdldDNfX2l0ZW0gLnRhYmxlLCAua3Qtd2lkZ2V0MV9faXRlbS5rdC13aWRnZXQ0X19pdGVtIC50YWJsZXttYXJnaW4tYm90dG9tOjBweDt9XHJcbi5rdC13aWRnZXQxX19pdGVtLmt0LXdpZGdldDNfX2l0ZW0gLnRhYmxlIHRyIHRkOmZpcnN0LWNoaWxkLCAua3Qtd2lkZ2V0MV9faXRlbS5rdC13aWRnZXQ0X19pdGVtIC50YWJsZSB0ciB0ZDpmaXJzdC1jaGlsZHt3aWR0aDoxMTNweH1cclxuLmt0LXdpZGdldDFfX2l0ZW0ua3Qtd2lkZ2V0M19faXRlbSAudGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpLCAua3Qtd2lkZ2V0MV9faXRlbS5rdC13aWRnZXQ0X19pdGVtIC50YWJsZSB0ciB0ZDpudGgtY2hpbGQoMil7d2lkdGg6MTAwcHh9XHJcbi5rdC13aWRnZXQxX19udW1iZXIua3QtZm9udC1zdWNjZXNze2Rpc3BsYXk6YmxvY2s7dGV4dC1hbGlnbjpsZWZ0O31cclxuLmRpc2NvdW50U2VjdGlvbiBhe21hcmdpbjowcHggMCAwIDAgIWltcG9ydGFudDtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246cmlnaHQ7fVxyXG4ucmVxdWVzdGVkU2VjdGlvbklucHV0e3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpsZWZ0O31cclxuLnJlcXVlc3RlZFNlY3Rpb25JbnB1dCAudGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGR7d2lkdGg6MTEzcHh9XHJcbi5yZXF1ZXN0ZWRTZWN0aW9uSW5wdXQgLnRhYmxlIHRyIHRkOm50aC1jaGlsZHt3aWR0aDoxMDNweH1cclxuLnJlcXVlc3RlZFNlY3Rpb25JbnB1dCBzZWxlY3R7d2lkdGg6IDUzJSAhaW1wb3J0YW50O2hlaWdodDo0MHB4ICFpbXBvcnRhbnQ7bWFyZ2luOjAgMCAwIDAgIWltcG9ydGFudDt9XHJcbi5yZXF1ZXN0ZWRTZWN0aW9uSW5wdXQgc3BhbiBpbnB1dHt3aWR0aDogNDclICFpbXBvcnRhbnQ7aGVpZ2h0OjQwcHggIWltcG9ydGFudDtkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDt9XHJcbi5rdC13aWRnZXQxX19pdGVtLmt0LXdpZGdldDZfX2l0ZW0gLnRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKXt3aWR0aDoxMDBweDt9XHJcbi5yZXF1ZXN0ZWRTZWN0aW9uSW5wdXQgYXttYXJnaW46IDAgMCAwIDAgICFpbXBvcnRhbnQ7fVxyXG5cclxuLmt0LXdpZGdldDFfX2l0ZW0ua3Qtd2lkZ2V0Ml9faXRlbSAua3Qtd2lkZ2V0MV9fbnVtYmVye3dpZHRoOjM5JX1cclxuLmt0LXdpZGdldDFfX2l0ZW0ua3Qtd2lkZ2V0Nl9faXRlbSAua3Qtd2lkZ2V0MV9fbnVtYmVye3dpZHRoOjM5JSAhaW1wb3J0YW50O31cclxuLmt0LXdpZGdldDFfX2l0ZW0ua3Qtd2lkZ2V0NV9faXRlbSAua3Qtd2lkZ2V0MS1tYWlue3dpZHRoOjM5JSAhaW1wb3J0YW50O31cclxuLmt0LXdpZGdldDEgLmt0LXdpZGdldDVfX2l0ZW0gLmt0LXdpZGdldDFfX2luZm8gLmt0LXdpZGdldDFfX3RpdGxle2ZvbnQtc2l6ZToyMHB4ICFpbXBvcnRhbnQ7fVxyXG4ua3Qtd2lkZ2V0MV9faXRlbS5rdC13aWRnZXQ1X19pdGVtIC5rdC13aWRnZXQxLW1haW57Zm9udC1zaXplOjIwcHg7fVxyXG4uc3ViVE90YWwgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLlN1YkFtb3VudCB7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5TdWJBbW91bnQgc3BhbntcclxuZm9udC1zaXplOiAxN3B4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuLmRpc0hlYWQgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzk4OGE4YTtcclxufVxyXG4uaW5wdXRUZXh0IGlucHV0e1xyXG4gICAgd2lkdGg6IDc4JTtcclxuICAgIGhlaWdodDogMzFweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWxlY3Rpb25Ecm9wIHNlbGVjdHtcclxuICAgIGhlaWdodDogMzFweDtcclxuICAgIHdpZHRoOiAxMzclO1xyXG4gICAgcGFkZGluZzogMHB4IDAgMCAwO1xyXG59XHJcbi5kaXNjb3VudEFtdHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5kaXNjb3VudEFtdCBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjOTg4YThhO1xyXG59XHJcbi50YXhIZWFkIHNwYW57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM5ODhhOGE7XHJcbn1cclxuLnRheFNlY3Rpb25IZWFkIHNlbGVjdHtcclxuICAgIHdpZHRoOiAxMTYlO1xyXG4gICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgY29sb3I6ICNiMzhhOGE7XHJcbiAgICBwYWRkaW5nOiAwcHggMCAwIDA7XHJcbn1cclxuLnRheEFtaXRIZWFke1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRheEFtaXRIZWFkIHNwYW57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM5ODhhOGE7XHJcbn1cclxuLnN1YlRPdGFsIHNwYW57XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5TdWJBbW91bnR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uU3ViQW1vdW50IHNwYW57XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zbEZpbmFsUm93e1xyXG4gICAgcGFkZGluZzogN3B4IDAgMCAwO1xyXG4gICAgbWFyZ2luOiA0NnB4IDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlM2UzZTM7XHJcbn1cclxuLnNsc2JUb3RhbHtcclxuICAgIHBhZGRpbmc6IDAgMCAxNnB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzgwODA4MDM4O1xyXG59XHJcbi50YWJsZUxpbmVzaGFwe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODAyOSAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZUxpbmVzaGFwOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZGVkZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjNweFxyXG59XHJcbi5yYWRpby1zZXJ2aWNlIGxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucmFkaW8tc2VydmljZSBsYWJlbCBpbnB1dHttYXJnaW4tcmlnaHQ6MTBweDt9XHJcbi5yYWRpby1zZXJ2aWNlIHNlbGVjdHtoZWlnaHQ6NTBweCAhaW1wb3J0YW50O31cclxuXHJcbi50aWNrZXQtYXR0YWNobWVudC1jb250YWluZXIgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOyB9XHJcbiAgICAudGlja2V0LWF0dGFjaG1lbnQtaW1hZ2Uge2Rpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyB9XHJcbiAgICAudGlja2V0LWF0dGFjaG1lbnQtb3ZlcmxheSB7cG9zaXRpb246IGFic29sdXRlO2JvdHRvbTogMDtsZWZ0OiAxMDAlO3JpZ2h0OiAwO2JhY2tncm91bmQtY29sb3I6IHJnYigxNjIsIDE3NiwgMTgwKTtvdmVyZmxvdzogaGlkZGVuOyB3aWR0aDogMDtoZWlnaHQ6IDEwMCU7dHJhbnNpdGlvbjogLjVzIGVhc2U7dGV4dC1hbGlnbjogY2VudGVyO31cclxuICAgIC50aWNrZXQtYXR0YWNobWVudC1jb250YWluZXI6aG92ZXIgLnRpY2tldC1hdHRhY2htZW50LW92ZXJsYXkge3dpZHRoOiAxMDAlO2xlZnQ6IDA7fVxyXG4gICAgLnRpY2tldC1hdHRhY2htZW50LXRleHQge3doaXRlLXNwYWNlOiBub3dyYXA7IGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiAyMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IG92ZXJmbG93OiBoaWRkZW47dG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO31cclxuICAgIC50aWNrZXQtYXR0YWNobWVudC1yZW1vdmUtdGV4dCB7d2hpdGUtc3BhY2U6IG5vd3JhcDtjb2xvcjogd2hpdGU7Zm9udC1zaXplOiAyMHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTtvdmVyZmxvdzogaGlkZGVuO2JvdHRvbTogMTAlO2xlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO31cclxuICAgIC5maWxlLXVwbG9hZCB7cG9zaXRpb246IHJlbGF0aXZlO2Rpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW4tdG9wOiA2cHg7fVxyXG4gICAgLmZpbGUtdXBsb2FkX19sYWJlbCB7ZGlzcGxheTogYmxvY2s7cGFkZGluZzogMHB4IDI3cHg7Y29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMzMWE1Zjc7IGJvcmRlci1yYWRpdXM6IC40ZW07Zm9udC1zaXplOiAxN3B4OyBoZWlnaHQ6IDIzcHg7dHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7fVxyXG4gICAgLmZpbGUtdXBsb2FkX19sYWJlbDpob3ZlciB7Y3Vyc29yOiBwb2ludGVyO2JhY2tncm91bmQ6IHJnYigyMDQsIDE5OCwgMTk4KTsgfSAgXHJcbiAgICAuZmlsZS11cGxvYWRfX2lucHV0IHtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMDt0b3A6IDA7cmlnaHQ6IDA7Ym90dG9tOiAwO2ZvbnQtc2l6ZTogMTsgd2lkdGg6MDtoZWlnaHQ6IDEwMCU7b3BhY2l0eTogMDt9XHJcbiAgICAucXVvdGVCb2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAucXVvdGUtaGVhZCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLmJvZHlUaXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwIDAgOHB4O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLnF0YmRzZWN0b24ge1xyXG4gICAgICAgIC8qIHBhZGRpbmctYm90dG9tOiAzOXB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAucXRBZGRyZXNzU2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnF0QWRkcmVzc1NlY3Rpb24gbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICM0ODQ2NWIgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC50dGxRdHkge1xyXG4gICAgICAgIG1hcmdpbjogNDBweCAwIDAgMDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5idG5yZW1vdmVQcm9kdWN0IHtcclxuICAgICAgICBtYXJnaW46IDVweCAwIDAgMDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuQ0xSZW1hcmsge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgaS5mYS5mYS1leWUge1xyXG4gICAgICAgIG1hcmdpbjogMTNweCAwIDAgMDtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuY2xWaWV3IGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgY29sb3I6ICMyNTgwMDA7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAucmVxdWVzdGVkU2VjdGlvbklucHV0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAvKiB3aWR0aDogNjMlOyAqL1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgICAucmVxdWVzdGVkU2VjdGlvbklucHV0IGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnJlcXVlc3RlZFNlY3Rpb25JbnB1dCBzZWxlY3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDIyJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAxMnB4IDAgMDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAucmVxdWVzdGVkU2VjdGlvbklucHV0IGEge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMCAzMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgLmRpc2NvdW50U2VjdGlvbiBhIHtcclxuICAgICAgICBtYXJnaW46IDAgMHB4IDAgMjlweDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLmRpc2NvdW50SW5wdXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLnRheC1ibG9jayB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC50YXgtYmxvY2sgYSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAudGF4VG9zaG93IHNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDM3JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAxMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mYXhzZWN0aW9ue3BhZGRpbmc6IDA7fVxyXG4gICAgICAuZmF4c2VjdGlvbiBsYWJlbHtwYWRkaW5nOiA3cHggMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO31cclxuICAgICAgICAuc3dpdGNoZXItY3VzdG9tZXIgeyB0b3A6LTE1cHg7cG9zaXRpb246IHJlbGF0aXZlOyB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-add',
                templateUrl: './quote-add.component.html',
                styleUrls: ['./quote-add.component.css'],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__["NgbDateToStringAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbTimeToStringAdapter"] }
                ],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Title"] }, { type: _services_quote_service__WEBPACK_IMPORTED_MODULE_13__["QuoteService"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"] }, { type: src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_15__["DocumentUploadService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_invoice_service__WEBPACK_IMPORTED_MODULE_17__["InvoiceService"] }, { type: _services_userlog_service__WEBPACK_IMPORTED_MODULE_18__["UserlogService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"] }, { type: _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_20__["GenicProfileService"] }, { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_21__["CustomerService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_22__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "8PM8":
/*!***********************************************************************!*\
  !*** ./src/app/application/quotes/quote-list/quote-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteListComponent", function() { return QuoteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_quote_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/quote.module */ "xcKa");
/* harmony import */ var _quote_customer_popup_quote_customer_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote-customer-popup/quote-customer-popup.component */ "wRCY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _quotecustomer_property_popup_quotecustomer_property_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quotecustomer-property-popup/quotecustomer-property-popup.component */ "WzcN");
/* harmony import */ var _quote_status_popup_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quote-status-popup/quote-status-popup.component */ "ImnT");
/* harmony import */ var _services_property_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/property.model */ "4ebh");
/* harmony import */ var _services_customer_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/customer.model */ "jG0A");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _quote_contact_person_popup_quote_contact_person_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quote-contact-person-popup/quote-contact-person-popup.component */ "Mhew");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ngb-date-to-string-adapter */ "x8Rg");
/* harmony import */ var _ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ngb-time-to-string-adapter */ "dRK5");
/* harmony import */ var _services_genicprofile_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/genicprofile.module */ "9u/L");
/* harmony import */ var _signature_quote_status_popup_signature_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../signature-quote-status-popup/signature-quote-status-popup.component */ "QfdM");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_quote_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/quote.service */ "uOqW");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../services/customer.service */ "0zL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_userlog_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../services/userlog.service */ "V05N");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _services_property_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../services/property.service */ "Pffd");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../services/ticket.service */ "KPvW");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../services/invoice.service */ "py7r");
/* harmony import */ var _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../services/genicprofile.service */ "bU6e");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../services/downloads.service */ "iHRC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-select-dropdown */ "8bGj");
/* harmony import */ var _generic_utils_Quote_Status_Component_QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../generic-utils/Quote-Status-Component/QuoteStatusComponent.component */ "sVpj");





































function QuoteListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_div_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.OpenAddCustomerToQuoteDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New Quotation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteListComponent_a_95_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_a_95_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.morefilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteListComponent_a_96_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_a_96_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.morefilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clear Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteListComponent_div_100_i_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteListComponent_div_100_i_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 75);
} }
function QuoteListComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "From : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteListComponent_div_100_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.genicprofileservice.TicketFilter.DateFrom = $event; })("click", function QuoteListComponent_div_100_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r12.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "To : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteListComponent_div_100_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.genicprofileservice.TicketFilter.DateTo = $event; })("click", function QuoteListComponent_div_100_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r14.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Customers : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-select-dropdown", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteListComponent_div_100_Template_ngx_select_dropdown_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onCustomerItemSelect($event); })("ngModelChange", function QuoteListComponent_div_100_Template_ngx_select_dropdown_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.CustomerselectedItems = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngx-select-dropdown", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteListComponent_div_100_Template_ngx_select_dropdown_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.onStatusItemSelect($event); })("ngModelChange", function QuoteListComponent_div_100_Template_ngx_select_dropdown_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.StatusselectedItems = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_div_100_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onDateChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, QuoteListComponent_div_100_i_26_Template, 2, 0, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, QuoteListComponent_div_100_i_27_Template, 1, 0, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.genicprofileservice.TicketFilter.DateFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.genicprofileservice.TicketFilter.DateTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("ngModel", ctx_r3.CustomerselectedItems)("config", ctx_r3.CustomerdropdownSettings)("options", ctx_r3.CustomerdropdownList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("ngModel", ctx_r3.StatusselectedItems)("config", ctx_r3.StatusdropdownSettings)("options", ctx_r3.StatusdropdownList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.OnDateSearchLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.OnDateSearchLoading);
} }
function QuoteListComponent_tr_121_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_tr_121_span_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const q_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.ViewInvoiceDetails(q_r27.InvoiceId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r27.InvoiceNo, "");
} }
function QuoteListComponent_tr_121_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_tr_121_span_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const q_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.viewTicketDetails(q_r27.TicketId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r27.TicketNo, "");
} }
function QuoteListComponent_tr_121_li_45_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_tr_121_li_45_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const q_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.popolateQuote(q_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteListComponent_tr_121_li_46_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_tr_121_li_46_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const q_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.getQuoteDetails(q_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteListComponent_tr_121_ng_container_47_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_tr_121_ng_container_47_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const q_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.populateStatusPopup(q_r27, q_r27.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteListComponent_tr_121_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuoteListComponent_tr_121_ng_container_47_li_1_Template, 3, 0, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.currentUser.Permissions.QuoteEdit);
} }
function QuoteListComponent_tr_121_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_tr_121_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const q_r27 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.getQuoteDetails(q_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteListComponent_tr_121_span_6_Template, 4, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuoteListComponent_tr_121_span_7_Template, 3, 1, "span", 79);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "generic-quote-status", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function QuoteListComponent_tr_121_Template_generic_quote_status_StatusChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const q_r27 = ctx.$implicit; return q_r27.Status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, QuoteListComponent_tr_121_li_45_Template, 3, 0, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, QuoteListComponent_tr_121_li_46_Template, 3, 0, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, QuoteListComponent_tr_121_ng_container_47_Template, 2, 1, "ng-container", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r27 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r27.QuoteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", q_r27.InvoiceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", q_r27.TicketNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, q_r27.CreatedUtcDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r27.JobTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r27.CustomerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r27.CompanyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r27.SubTotal.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r27.DiscountAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r27.TaxAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r27.NetAmount.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", q_r27.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.currentUser.Permissions.QuoteEdit && q_r27.Status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.currentUser.Permissions.QuoteView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", q_r27.Status === 1 || q_r27.Status === 2);
} }
class QuoteListComponent {
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
        this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
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
        this.QuoteSummary = new _services_quote_module__WEBPACK_IMPORTED_MODULE_1__["QuoteSummary"]();
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.TotalQuotation = 0;
        this.AcceptedQuotation = 0;
        this.PendingQuotation = 0;
        this.RejectedQuotation = 0;
        this.CancelledQuotation = 0;
    }
    ngOnInit() {
        if (this.currentUser.Type === 'Admin' || this.currentUser.Type === 'SubAdmin') {
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
                { Id: 2, Name: 'Pending' },
                { Id: 3, Name: 'Approved' },
                { Id: 4, Name: 'Accepted' },
                { Id: 5, Name: 'Rejected' },
                { Id: 6, Name: 'Cancelled' }
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
    OpenAddCustomerToQuoteDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {};
        this.dialog.open(_quote_customer_popup_quote_customer_popup_component__WEBPACK_IMPORTED_MODULE_2__["QuoteCustomerPopupComponent"], dialogConfig).afterClosed().subscribe(res => {
            if (res !== '') {
                this.customerData = new _services_customer_model__WEBPACK_IMPORTED_MODULE_7__["Customer"]();
                this.customerData = res.x;
                this.quoteService.QuoteData = new _services_quote_module__WEBPACK_IMPORTED_MODULE_1__["Quote"]();
                this.quoteService.QuoteData.CustomerId = res.x.Id;
                this.quoteService.QuoteData.CompanyName = res.x.CompanyName;
                setTimeout(() => {
                    this.quoteService.getCustomerProperty(res.x.Id);
                    this.OpenAddnContactPersionDialog();
                }, 500);
            }
        });
    }
    OpenAddnContactPersionDialog() {
        this.quoteService.postTempQuote(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.quoteService.QuoteData = response.result;
                }
                if (response.Message === 'failure') {
                }
            }
        }, error => console.log(error));
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {};
        this.dialog.open(_quote_contact_person_popup_quote_contact_person_popup_component__WEBPACK_IMPORTED_MODULE_9__["QuoteContactPersonPopupComponent"], dialogConfig).afterClosed().subscribe(res => {
            if (res !== '') {
                this.OpenAddCustomerPropertyQuoteDialog();
            }
        });
    }
    OpenAddCustomerPropertyQuoteDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {};
        this.dialog.open(_quotecustomer_property_popup_quotecustomer_property_popup_component__WEBPACK_IMPORTED_MODULE_4__["QuotecustomerPropertyPopupComponent"], dialogConfig).afterClosed().subscribe(res => {
            if (res !== '') {
                if (res === undefined) {
                    this.router.navigate(['/properties/property-add/'], {
                        queryParams: { 'id': this.quoteService.QuoteData.CustomerId,
                            'name': this.quoteService.QuoteData.CustomerName, 'companyname': this.quoteService.QuoteData.CompanyName }
                    });
                }
                else {
                    this.customerPropertyData = new _services_property_model__WEBPACK_IMPORTED_MODULE_6__["Property"]();
                    this.customerPropertyData = res.x;
                    //this.quoteService.QuoteData.CompanyName = this.customerData.CompanyName;
                    //this.quoteService.QuoteData.CustomerName = this.customerPropertyData.CustomerName;
                    this.quoteService.QuoteData.CustomerId = this.customerPropertyData.CustomerId;
                    this.quoteService.QuoteData.PropertyId = this.customerPropertyData.Id;
                    this.quoteService.QuoteData.CustomerAddress = res.x.AddressStreet1 + ' ' + res.x.AddressStreet2 + ', ' + res.x.AddressUnitNo + ' ' + res.x.AddressCountry + ' ' + res.x.AddressZipCode;
                    this.router.navigate(['/quotes/quote-Add']);
                }
            }
        });
    }
    popolateQuote(q) {
        this.quoteService.QuoteData = Object.assign({}, q);
        this.propertyService.getPropertyData(q.PropertyId);
        if (q.ModifiedUtcDate != null) {
            this.quoteService.QuoteData.ModifiedUtcDate = new Date(q.ModifiedUtcDate);
        }
        this.router.navigate(['/quotes/quote-Edit']);
    }
    getQuoteDetails(q) {
        this.quoteService.QuoteData = q;
        this.propertyService.getPropertyData(q.PropertyId);
        this.router.navigate(['/quotes/quote-Details']);
    }
    populateStatusPopup(q, Id) {
        this.quoteService.QuoteData = q;
        const dialogCon = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogCon.autoFocus = true;
        dialogCon.width = '600px';
        this.dialog.open(_quote_status_popup_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_5__["QuoteStatusPopupComponent"], dialogCon).afterClosed().subscribe(res => {
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
    addsignature(q) {
        this.quoteService.QuoteData = q;
        const dialogCon = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogCon.autoFocus = true;
        dialogCon.width = '600px';
        this.dialog.open(_signature_quote_status_popup_signature_quote_status_popup_component__WEBPACK_IMPORTED_MODULE_16__["SignatureQuoteStatusPopupComponent"], dialogCon).afterClosed().subscribe(res => {
            if (res !== undefined) {
                this.distroyAndReloadTable();
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
            this.StatusType = 'Approved';
        }
        else if (Status === 4) {
            this.StatusType = 'Accepted';
        }
        else if (Status === 5) {
            this.StatusType = 'Rejected';
        }
        else if (Status === 6) {
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
            Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(blob, 'quotation_' + new Date().getTime() + '.xlsx');
        });
    }
    viewTicketDetails(Id) {
        this.ticketService.getTicketById(this.currentUser.Token, Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.ticketService.formData = response.result;
                    this.router.navigate(['/tickets/ticket-view-detail']);
                }
            }
        }, error => console.log(error));
    }
    ViewInvoiceDetails(InvoiceId) {
        try {
            this.invoiceService.refreshInvoiceById(InvoiceId, this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    this.invoiceService.InvoiceData = response.result;
                    setTimeout(() => {
                        this.router.navigate(['/invoices/invoice-details']);
                    }, 200);
                }
            }, error => console.log(error));
        }
        catch (_a) { }
    }
    morefilters() {
        if (this.genicprofileservice.TicketFilter.IsReadyQuote) {
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.distroyAndReloadTable();
        }
        else {
            this.genicprofileservice.TicketFilter = new _services_genicprofile_module__WEBPACK_IMPORTED_MODULE_15__["TicketFilter"]();
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
    distroyAndReloadTableold() {
        if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            }).catch(err => console.error(err));
        }
        this.quoteService.QuoteLocalList = [];
        this.quoteService.getrefrestQuoteListSync(this.currentUser.Token).subscribe(res => {
            if (res) {
                this.quoteService.QuoteLocalList = res;
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
                this.TotalQuotation = this.quoteService.QuoteLocalList.length;
                this.AcceptedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 4).length;
                this.PendingQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 2).length;
                this.RejectedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 5).length;
                this.CancelledQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 6).length;
            }
        }, error => console.log(error));
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
                    setTimeout(() => {
                        this.TotalQuotation = this.quoteService.QuoteLocalList.length;
                        this.AcceptedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 4).length;
                        this.PendingQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 2).length;
                        this.RejectedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 5).length;
                        this.CancelledQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 6).length;
                    }, 500);
                }
            }
        }, error => console.log(error));
    }
    distroyAndReloadFilterTableold() {
        this.quoteService.QuoteLocalList = [];
        this.genicprofileservice.getFilterQuotationListSync(this.currentUser.Token).subscribe(res => {
            if (res) {
                this.quoteService.QuoteLocalList = res;
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
                this.TotalQuotation = this.quoteService.QuoteList.length;
                this.AcceptedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 4).length;
                this.PendingQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 2).length;
                this.RejectedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 5).length;
                this.CancelledQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 6).length;
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
                    setTimeout(() => {
                        this.TotalQuotation = this.quoteService.QuoteLocalList.length;
                        this.AcceptedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 4).length;
                        this.PendingQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 2).length;
                        this.RejectedQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 5).length;
                        this.CancelledQuotation = this.quoteService.QuoteLocalList.filter(x => x.Status === 6).length;
                    }, 500);
                }
            }
        }, error => console.log(error));
    }
}
QuoteListComponent.ɵfac = function QuoteListComponent_Factory(t) { return new (t || QuoteListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quote_service__WEBPACK_IMPORTED_MODULE_18__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_19__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userlog_service__WEBPACK_IMPORTED_MODULE_21__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_22__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_23__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_service__WEBPACK_IMPORTED_MODULE_24__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_invoice_service__WEBPACK_IMPORTED_MODULE_25__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_26__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_downloads_service__WEBPACK_IMPORTED_MODULE_27__["DownloadService"])); };
QuoteListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteListComponent, selectors: [["app-quote-list"]], viewQuery: function QuoteListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDateAdapter"], useClass: _ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_13__["NgbDateToStringAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTimeAdapter"], useClass: _ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_14__["NgbTimeToStringAdapter"] },
        ])], decls: 122, vars: 11, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid", "breadcud-kt-container"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], ["class", "kt-subheader__wrapper", 4, "ngIf"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "row", "mrg-top-10"], [1, "col-lg-3"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--brand", "kt-iconbox--animate-slower"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["id", "\u201C", "fill", "#000000", "transform", "translate(16.500000, 12.500000) rotate(-180.000000) translate(-16.500000, -12.500000) ", "points", "19 7 17 13 19 13 19 18 14 18 14 13 16 7"], ["id", "Path", "fill", "#000000", "opacity", "0.3", "transform", "translate(8.500000, 12.500000) rotate(-180.000000) translate(-8.500000, -12.500000) ", "points", "11 7 9 13 11 13 11 18 6 18 6 13 8 7"], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], ["href", "javascript:;", 1, "kt-link"], [1, "kt-iconbox__content"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--success", "kt-iconbox--animate-slow"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--warning", "kt-iconbox--animate-fast"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--danger", "kt-iconbox--animate-faster"], [1, "kt-section", "kt-drop-section"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "kt_table_1_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "row"], [1, "col-sm-12"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "scFilter"], ["href", "javascript:;", "class", "btnprimary", 3, "click", 4, "ngIf"], ["href", "javascript:;", "class", "btnexportToExcel", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], ["class", "row filterstrong", 4, "ngIf"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", "dataTable", "no-footer", "dtr-inline", 3, "dtOptions", "dtTrigger"], [2, "width", "5%"], [2, "width", "10%"], [2, "width", "15%"], [2, "width", "30%"], [2, "width", "25%"], ["class", "quote-list-view-info odd", 4, "ngFor", "ngForAsync", "ngForOf"], [1, "kt-subheader__wrapper"], ["href", "javascript:;", 1, "btn", "btn-brand", 3, "click"], [1, "fa", "fa-plus"], ["href", "javascript:;", 1, "btnprimary", 3, "click"], ["href", "javascript:;", 1, "btnexportToExcel", 3, "click"], [1, "row", "filterstrong"], [1, "col-md-2"], ["placeholder", "From: (dd-mm-yyyy)", "ngbDatepicker", "", "name", "genicprofileservice.TicketFilter.DateFrom", "dateFormat", "dd-MMM-yyyy", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["genicprofileservice.TicketFilter.DateFrom", "ngModel", "datePickerTicketStartDate", "ngbDatepicker"], ["type", "text", "ngbDatepicker", "", "name", "genicprofileservice.TicketFilter.DateTo", "dateFormat", "dd-MMM-yyyy", "placeholder", "To: (dd-mm-yyyy)", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["genicprofileservice.TicketFilter.DateTo", "ngModel", "datePickerTicketEndDate", "ngbDatepicker"], [1, "col"], ["name", "CustomerselectedItems", 1, "myselectClass", 3, "multiple", "ngModel", "config", "options", "change", "ngModelChange"], ["name", "StatusselectedItems", 1, "myselectClass", 3, "multiple", "ngModel", "config", "options", "change", "ngModelChange"], [1, "col-md-1"], [1, "cusbtn"], ["href", "javascript:;", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "fa fa-spinner fa-pulse", 4, "ngIf"], [1, "fa", "fa-spinner", "fa-pulse"], [1, "quote-list-view-info", "odd"], [1, "btn", "btn-label-primary"], ["href", "javascript:;", 3, "click"], ["class", "btn btn-label-danger btn-pill invoices-btn", 4, "ngIf"], [3, "Status", "StatusChange"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "border", "#1dc9b7"], [1, "caret"], [1, "dropdown-menu"], [1, "btn", "btn-label-danger", "btn-pill", "invoices-btn"], ["href", "javascript:void(0);", 3, "click"]], template: function QuoteListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuoteListComponent_div_13_Template, 4, 0, "div", 11);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, QuoteListComponent_a_95_Template, 2, 0, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, QuoteListComponent_a_96_Template, 2, 0, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteListComponent_Template_a_click_98_listener() { return ctx.exportAsXLSX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Export to Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, QuoteListComponent_div_100_Template, 28, 12, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "table", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Quotation\u00A0No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Customer Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, QuoteListComponent_tr_121_Template, 48, 17, "tr", 55);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.genicprofileservice.TicketFilter.IsReadyQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.genicprofileservice.TicketFilter.IsReadyQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.genicprofileservice.TicketFilter.IsReadyQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteService.QuoteLocalList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_28__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["NgModel"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_30__["SelectDropDownComponent"], _generic_utils_Quote_Status_Component_QuoteStatusComponent_component__WEBPACK_IMPORTED_MODULE_31__["QuoteStatusComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_28__["DatePipe"]], styles: [".QuoteAddSection[_ngcontent-%COMP%]{text-align: right;}\r\n.QuoteAddSection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height: 36px; margin-right: 4px; padding: 0 7px;border-radius: 22px; border: 1px solid gray;}\r\n.QuoteAddSection[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#FF8533;border-color:transparent;}\r\n.QuoteAddSection[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:focus, .QuoteAddSection[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover{background-color:#c3e7fa;color:#0084CA;}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-top: 3px solid #ff8533;padding-left:0px;padding-right: 0px;background-color:white !important;}\r\n.quote-detail-1-body[_ngcontent-%COMP%]{border-bottom:3px solid #f2f2f2;margin:0 15px 15px;}\r\n.new-requst-filter_form[_ngcontent-%COMP%]   h3.kt-section__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#22376c;}\r\n.customer-quote-details[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:15px;}\r\n.kt-widget4__title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;}\r\n.kt-portlet[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]   .kt-portlet__head-toolbar[_ngcontent-%COMP%]{font-size:14px;color:black;}\r\n.col-md-12.new-request-service-details-form[_ngcontent-%COMP%]{border:none;}\r\n.kt-portlet__head[_ngcontent-%COMP%]{padding:0px 0px !important;}\r\n.add-data-ticket-list-view[_ngcontent-%COMP%]{padding-top:0px !important;margin-top:0px !important;}\r\n.kt-portlet__body[_ngcontent-%COMP%]{padding:0px !important;}\r\n.kt-portlet-body-1[_ngcontent-%COMP%]{width:100%}\r\n.quote-row[_ngcontent-%COMP%]{padding: 10px;background: #eaeaea;margin: 0;}\r\n.add-invoicing-view-list-border[_ngcontent-%COMP%]{border-bottom:none;}\r\n.kt-widget1[_ngcontent-%COMP%]{padding:10px;}\r\n.kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{ padding: 0.7rem 0 !important;}\r\n.title-deposite[_ngcontent-%COMP%]{margin-bottom:0px;font-size:18px !important;font-weight:600 !important;}\r\n.invoicing-list-view-border-left[_ngcontent-%COMP%]   span.kt-widget1__number.kt-font-danger[_ngcontent-%COMP%]{font-size:18px !important;font-weight:600 !important;}\r\n.kt-widget4__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px !important;color:black !important;}\r\n.myshap[_ngcontent-%COMP%]{margin-bottom: 0px !important;}\r\n#kt_repeater_1[_ngcontent-%COMP%]   .row.col-md-12[_ngcontent-%COMP%]{margin-top:15px;}\r\n.kt-portlet__head[_ngcontent-%COMP%]{padding: 0px 15px !important;}\r\n.quote-top-right[_ngcontent-%COMP%]{text-align:right;}\r\n.quote-view-top[_ngcontent-%COMP%]{padding:0px 20px;}\r\n.quote-1-top[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;font-weight:600;margin-bottom:15px;color:black}\r\n.quote-1-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: 16px;color: black;margin-top: 15px;font-weight: 600;}\r\n.table-quote[_ngcontent-%COMP%]{margin-top:25px}\r\n.table-quote[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:16px;}\r\n.table-quote[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0px;margin-top:5px !important;}\r\n.table-quote[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:normal;}\r\n.quote-right-view[_ngcontent-%COMP%]{margin-top:62px;}\r\n.quote-right-view[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;font-weight:600;color:black;margin-bottom:15px;text-align:right;}\r\n.quote-right-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:16px;}\r\n.quote-right-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:50%;}\r\n.quote-view-top[_ngcontent-%COMP%]{border-bottom: 3px solid #f1f1f1;}\r\n.quote-edit-request[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:20px !important;}\r\n.quote-edit-request[_ngcontent-%COMP%]   .kt-section__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600;color:black;font-size:30px;}\r\n.quote-edit-request[_ngcontent-%COMP%]   .kt-section__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:black;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\n.dispaly-4[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    width: 100%;\r\n    margin: 0 0 24px 0;\r\n}\r\n.form-row[_ngcontent-%COMP%]{\r\n    margin: 0 auto !important;\r\n}\r\n.form-group[_ngcontent-%COMP%]{\r\n    margin: 0 auto !important;\r\n}\r\n\r\n.btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcXVvdGVzL3F1b3RlLWxpc3QvcXVvdGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixpQkFBaUIsQ0FBQztBQUNuQyx1QkFBdUIsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQztBQUNuSCxrQ0FBa0Msd0JBQXdCLENBQUMsd0JBQXdCLENBQUM7QUFDcEYsaUZBQWlGLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztBQUN4SCxzQ0FBc0MsNkJBQTZCLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsaUNBQWlDLENBQUM7QUFDMUkscUJBQXFCLCtCQUErQixDQUFDLGtCQUFrQixDQUFDO0FBQ3hFLCtDQUErQyxhQUFhLENBQUM7QUFDN0QscUNBQXFDLGNBQWMsQ0FBQztBQUNwRCxtQkFBbUIsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUNsRCx3REFBd0QsY0FBYyxDQUFDLFdBQVcsQ0FBQztBQUNuRiw0Q0FBNEMsV0FBVyxDQUFDO0FBQ3hELGtCQUFrQiwwQkFBMEIsQ0FBQztBQUM3QywyQkFBMkIsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7QUFDaEYsa0JBQWtCLHNCQUFzQixDQUFDO0FBQ3pDLG1CQUFtQixVQUFVO0FBQzdCLFdBQVcsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztBQUN2RCxnQ0FBZ0Msa0JBQWtCLENBQUM7QUFDbkQsWUFBWSxZQUFZLENBQUM7QUFDekIsK0JBQStCLDRCQUE0QixDQUFDO0FBQzVELGdCQUFnQixpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBQztBQUN2Rix3RUFBd0UseUJBQXlCLENBQUMsMEJBQTBCLENBQUM7QUFDN0gsb0JBQW9CLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDO0FBQ3JFLFFBQVEsNkJBQTZCLENBQUM7QUFDdEMsOEJBQThCLGVBQWUsQ0FBQztBQUM5QyxrQkFBa0IsNEJBQTRCLENBQUM7QUFDL0MsaUJBQWlCLGdCQUFnQixDQUFDO0FBQ2xDLGdCQUFnQixnQkFBZ0IsQ0FBQztBQUNqQyxnQkFBZ0IsY0FBYyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXO0FBQzdFLGVBQWUsZUFBZSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM5RSxhQUFhLGVBQWU7QUFDNUIsc0JBQXNCLGNBQWMsQ0FBQztBQUNyQyx3QkFBd0IsaUJBQWlCLENBQUMseUJBQXlCLENBQUM7QUFDcEUsNkJBQTZCLGtCQUFrQixDQUFDO0FBQ2hELGtCQUFrQixlQUFlLENBQUM7QUFDbEMscUJBQXFCLGNBQWMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDO0FBQ3BHLDJCQUEyQixjQUFjLENBQUM7QUFDMUMsOEJBQThCLFNBQVMsQ0FBQztBQUN4QyxnQkFBZ0IsZ0NBQWdDLENBQUM7QUFDakQsb0JBQW9CLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDO0FBQ3JFLHlDQUF5QyxlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztBQUNwRiw4Q0FBOEMsV0FBVyxDQUFDO0FBQzFELHFCQUFxQixtQkFBbUIsQ0FBQztBQUN6QztJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBOzs2SEFFNkg7QUFDN0gsV0FBVyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3F1b3Rlcy9xdW90ZS1saXN0L3F1b3RlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5RdW90ZUFkZFNlY3Rpb257dGV4dC1hbGlnbjogcmlnaHQ7fVxyXG4uUXVvdGVBZGRTZWN0aW9uIGlucHV0e2hlaWdodDogMzZweDsgbWFyZ2luLXJpZ2h0OiA0cHg7IHBhZGRpbmc6IDAgN3B4O2JvcmRlci1yYWRpdXM6IDIycHg7IGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7fVxyXG4uUXVvdGVBZGRTZWN0aW9uIC5idG4uYnRuLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojRkY4NTMzO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDt9XHJcbi5RdW90ZUFkZFNlY3Rpb24gLmJ0bi5idG4tcHJpbWFyeTpmb2N1cywgLlF1b3RlQWRkU2VjdGlvbiAuYnRuLmJ0bi1wcmltYXJ5OmhvdmVye2JhY2tncm91bmQtY29sb3I6I2MzZTdmYTtjb2xvcjojMDA4NENBO31cclxuLmNvbC1tZC0xMi5zZWN0aW9uLWNsaWVudC1yZXF1c3QtZm9ybXtib3JkZXItdG9wOiAzcHggc29saWQgI2ZmODUzMztwYWRkaW5nLWxlZnQ6MHB4O3BhZGRpbmctcmlnaHQ6IDBweDtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlICFpbXBvcnRhbnQ7fVxyXG4ucXVvdGUtZGV0YWlsLTEtYm9keXtib3JkZXItYm90dG9tOjNweCBzb2xpZCAjZjJmMmYyO21hcmdpbjowIDE1cHggMTVweDt9XHJcbi5uZXctcmVxdXN0LWZpbHRlcl9mb3JtIGgzLmt0LXNlY3Rpb25fX3RpdGxlIHB7Y29sb3I6IzIyMzc2Yzt9XHJcbi5jdXN0b21lci1xdW90ZS1kZXRhaWxzIC50YWJsZSB0ciB0ZHtmb250LXNpemU6MTVweDt9XHJcbi5rdC13aWRnZXQ0X190aXRsZXtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo2MDA7fVxyXG4ua3QtcG9ydGxldCAua3QtcG9ydGxldF9faGVhZCAua3QtcG9ydGxldF9faGVhZC10b29sYmFye2ZvbnQtc2l6ZToxNHB4O2NvbG9yOmJsYWNrO31cclxuLmNvbC1tZC0xMi5uZXctcmVxdWVzdC1zZXJ2aWNlLWRldGFpbHMtZm9ybXtib3JkZXI6bm9uZTt9XHJcbi5rdC1wb3J0bGV0X19oZWFke3BhZGRpbmc6MHB4IDBweCAhaW1wb3J0YW50O31cclxuLmFkZC1kYXRhLXRpY2tldC1saXN0LXZpZXd7cGFkZGluZy10b3A6MHB4ICFpbXBvcnRhbnQ7bWFyZ2luLXRvcDowcHggIWltcG9ydGFudDt9XHJcbi5rdC1wb3J0bGV0X19ib2R5e3BhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7fVxyXG4ua3QtcG9ydGxldC1ib2R5LTF7d2lkdGg6MTAwJX1cclxuLnF1b3RlLXJvd3twYWRkaW5nOiAxMHB4O2JhY2tncm91bmQ6ICNlYWVhZWE7bWFyZ2luOiAwO31cclxuLmFkZC1pbnZvaWNpbmctdmlldy1saXN0LWJvcmRlcntib3JkZXItYm90dG9tOm5vbmU7fVxyXG4ua3Qtd2lkZ2V0MXtwYWRkaW5nOjEwcHg7fSBcclxuLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW17IHBhZGRpbmc6IDAuN3JlbSAwICFpbXBvcnRhbnQ7fVxyXG4udGl0bGUtZGVwb3NpdGV7bWFyZ2luLWJvdHRvbTowcHg7Zm9udC1zaXplOjE4cHggIWltcG9ydGFudDtmb250LXdlaWdodDo2MDAgIWltcG9ydGFudDt9XHJcbi5pbnZvaWNpbmctbGlzdC12aWV3LWJvcmRlci1sZWZ0IHNwYW4ua3Qtd2lkZ2V0MV9fbnVtYmVyLmt0LWZvbnQtZGFuZ2Vye2ZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NjAwICFpbXBvcnRhbnQ7fVxyXG4ua3Qtd2lkZ2V0NF9faXRlbSBwe2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5teXNoYXB7bWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7fVxyXG4ja3RfcmVwZWF0ZXJfMSAucm93LmNvbC1tZC0xMnttYXJnaW4tdG9wOjE1cHg7fVxyXG4ua3QtcG9ydGxldF9faGVhZHtwYWRkaW5nOiAwcHggMTVweCAhaW1wb3J0YW50O31cclxuLnF1b3RlLXRvcC1yaWdodHt0ZXh0LWFsaWduOnJpZ2h0O31cclxuLnF1b3RlLXZpZXctdG9we3BhZGRpbmc6MHB4IDIwcHg7fVxyXG4ucXVvdGUtMS10b3AgaDJ7Zm9udC1zaXplOjMwcHg7Zm9udC13ZWlnaHQ6NjAwO21hcmdpbi1ib3R0b206MTVweDtjb2xvcjpibGFja31cclxuLnF1b3RlLTEtdG9wIHB7Zm9udC1zaXplOiAxNnB4O2NvbG9yOiBibGFjazttYXJnaW4tdG9wOiAxNXB4O2ZvbnQtd2VpZ2h0OiA2MDA7fVxyXG4udGFibGUtcXVvdGV7bWFyZ2luLXRvcDoyNXB4fVxyXG4udGFibGUtcXVvdGUgdGFibGUgdHJ7Zm9udC1zaXplOjE2cHg7fVxyXG4udGFibGUtcXVvdGUgdGFibGUgdHIgcHttYXJnaW4tYm90dG9tOjBweDttYXJnaW4tdG9wOjVweCAhaW1wb3J0YW50O31cclxuLnRhYmxlLXF1b3RlIHRhYmxlIHRyIHAgc3Bhbntmb250LXdlaWdodDpub3JtYWw7fVxyXG4ucXVvdGUtcmlnaHQtdmlld3ttYXJnaW4tdG9wOjYycHg7fVxyXG4ucXVvdGUtcmlnaHQtdmlldyBoMntmb250LXNpemU6MjJweDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2s7bWFyZ2luLWJvdHRvbToxNXB4O3RleHQtYWxpZ246cmlnaHQ7fVxyXG4ucXVvdGUtcmlnaHQtdmlldyB0YWJsZSB0cntmb250LXNpemU6MTZweDt9XHJcbi5xdW90ZS1yaWdodC12aWV3IHRhYmxlIHRyIHRke3dpZHRoOjUwJTt9XHJcbi5xdW90ZS12aWV3LXRvcHtib3JkZXItYm90dG9tOiAzcHggc29saWQgI2YxZjFmMTt9XHJcbi5xdW90ZS1lZGl0LXJlcXVlc3R7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO3BhZGRpbmc6MjBweCAhaW1wb3J0YW50O31cclxuLnF1b3RlLWVkaXQtcmVxdWVzdCAua3Qtc2VjdGlvbl9fdGl0bGUgcHtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2s7Zm9udC1zaXplOjMwcHg7fVxyXG4ucXVvdGUtZWRpdC1yZXF1ZXN0IC5rdC1zZWN0aW9uX190aXRsZSBwIHNwYW57Y29sb3I6YmxhY2s7fVxyXG4uZHJvcGRvd24tbWVudS5zaG93IHttYXJnaW4tbGVmdDogLTEwNXB4O31cclxuLmRpc3BhbHktNHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDAgMjRweCAwO1xyXG59XHJcbi5mb3JtLXJvd3tcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC5maWx0ZXJzdHJvbmcgeyBwYWRkaW5nOiA0cHg7IH1cclxuLmZpbHRlcnN0cm9uZyBkaXYgc3Ryb25nIHtwYWRkaW5nOiAxMHB4OyBmb250LXNpemU6IDEuMmVtO2Rpc3BsYXk6IG5vbmU7fVxyXG4gIC5maWx0ZXJzdHJvbmcgZGl2IGlucHV0IHsgIGJvcmRlcjogMnB4IHNvbGlkICNkMGQwZDM7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBib3JkZXItcmFkaXVzOiAwLjNlbTsgaGVpZ2h0OiAzNHB4O30gKi9cclxuLmJ0bi1icmFuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzM7Ym9yZGVyLWNvbG9yOiAjZmY4NTMzO30iXX0= */", ".QuoteAddSection[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .QuoteAddSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: right;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-list',
                templateUrl: './quote-list.component.html',
                styleUrls: ['./quote-list.component.css'],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDateAdapter"], useClass: _ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_13__["NgbDateToStringAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTimeAdapter"], useClass: _ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_14__["NgbTimeToStringAdapter"] },
                ],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["Title"] }, { type: _services_quote_service__WEBPACK_IMPORTED_MODULE_18__["QuoteService"] }, { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_19__["CustomerService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"] }, { type: _services_userlog_service__WEBPACK_IMPORTED_MODULE_21__["UserlogService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_22__["AuthenticationService"] }, { type: _services_property_service__WEBPACK_IMPORTED_MODULE_23__["PropertyService"] }, { type: _services_ticket_service__WEBPACK_IMPORTED_MODULE_24__["TicketService"] }, { type: _services_invoice_service__WEBPACK_IMPORTED_MODULE_25__["InvoiceService"] }, { type: _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_26__["GenicProfileService"] }, { type: _services_downloads_service__WEBPACK_IMPORTED_MODULE_27__["DownloadService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTableDirective"], { static: false }]
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

/***/ "A6Rf":
/*!*************************************************************************************!*\
  !*** ./src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TicketIconAttachmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketIconAttachmentModule", function() { return TicketIconAttachmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TicketIconAttachment.component */ "xJsc");





class TicketIconAttachmentModule {
}
TicketIconAttachmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TicketIconAttachmentModule });
TicketIconAttachmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TicketIconAttachmentModule_Factory(t) { return new (t || TicketIconAttachmentModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketIconAttachmentModule, { declarations: [_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_3__["TicketIconAttachmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_3__["TicketIconAttachmentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketIconAttachmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_3__["TicketIconAttachmentComponent"]],
                exports: [_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_3__["TicketIconAttachmentComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ImnT":
/*!***************************************************************************************!*\
  !*** ./src/app/application/quotes/quote-status-popup/quote-status-popup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: QuoteStatusPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteStatusPopupComponent", function() { return QuoteStatusPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/quote.service */ "uOqW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-signaturepad */ "HnZm");









const _c0 = ["SignaturePad1"];
function QuoteStatusPopupComponent_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function QuoteStatusPopupComponent_div_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function QuoteStatusPopupComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteStatusPopupComponent_div_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.SetStatus(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteStatusPopupComponent_div_8_ng_container_2_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuoteStatusPopupComponent_div_8_ng_container_3_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.temptQuoteStatus === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.temptQuoteStatus !== 2);
} }
function QuoteStatusPopupComponent_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function QuoteStatusPopupComponent_div_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function QuoteStatusPopupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteStatusPopupComponent_div_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.SetStatus(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteStatusPopupComponent_div_9_ng_container_2_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuoteStatusPopupComponent_div_9_ng_container_3_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.temptQuoteStatus === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.temptQuoteStatus !== 3);
} }
function QuoteStatusPopupComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\u00A0Sales Person Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "signature-pad", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteStatusPopupComponent_div_10_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.cleareSalesPersonSignature(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Clear signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r2.SalesPersonSignaturePadOption);
} }
function QuoteStatusPopupComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function QuoteStatusPopupComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function QuoteStatusPopupComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function QuoteStatusPopupComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class QuoteStatusPopupComponent {
    constructor(logService, loginservice, quoteService, dialogRef) {
        this.logService = logService;
        this.loginservice = loginservice;
        this.quoteService = quoteService;
        this.dialogRef = dialogRef;
        this.SalesPersonSignaturePadOption = { ' minWidth': 2, pecColor: 'rgb(66,133,244)', backgroundcolor: 'rgb(255,255,255)', canvasWidth: 500, canvasHeight: 150 };
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
            if (Status === 5 || Status === 6) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    // icon: 'warning',
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
        const SaleBase64 = this.SalesPersonSingnaturePad.toDataURL('image/png');
        this.quoteService.QuoteData.SalesPersonSignature = SaleBase64;
        this.quoteService.QuoteData.CustomerSignature = '';
        this.quoteService.updateQuoteSignature(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                this.dialogRef.close({ Status });
            }
        }, error => console.log(error));
    }
    cleareSalesPersonSignature() {
        this.SalesPersonSingnaturePad.clear();
    }
    close() {
        this.dialogRef.close();
    }
}
QuoteStatusPopupComponent.ɵfac = function QuoteStatusPopupComponent_Factory(t) { return new (t || QuoteStatusPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_2__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"])); };
QuoteStatusPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteStatusPopupComponent, selectors: [["app-quote-status-popup"]], viewQuery: function QuoteStatusPopupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.SalesPersonSingnaturePad = _t.first);
    } }, decls: 27, vars: 7, consts: [[1, "Container"], [1, "dispaly-4"], [1, "form-row"], [1, "form-group", "col-md-12"], [1, "kt-radio-list"], [1, "row"], ["class", "myStatus", 4, "ngIf"], ["class", "signature", 4, "ngIf"], [1, "myStatus"], ["href", "javascript:void(0)", 3, "click"], [4, "ngIf"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", "ml-1", 3, "click"], [1, "fa", "fa-close"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "AcceptStatus"], ["aria-hidden", "true", 1, "far", "fa-circle", "OtherStatus"], [1, "signature"], [1, "col"], ["id", "CloseSignarePad", 1, "m-signature-pad", "CloseSignarePad"], [1, "m-signature-pad-body"], [3, "options"], ["SignaturePad1", ""], [1, "btnRemoveSection", 2, "float", "right", 3, "click"]], template: function QuoteStatusPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Change Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteStatusPopupComponent_div_8_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuoteStatusPopupComponent_div_9_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuoteStatusPopupComponent_div_10_Template, 10, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteStatusPopupComponent_Template_a_click_12_listener() { return ctx.SetStatus(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuoteStatusPopupComponent_ng_container_13_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuoteStatusPopupComponent_ng_container_14_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Reject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteStatusPopupComponent_Template_a_click_17_listener() { return ctx.SetStatus(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, QuoteStatusPopupComponent_ng_container_18_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, QuoteStatusPopupComponent_ng_container_19_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteStatusPopupComponent_Template_button_click_22_listener() { return ctx.UpdateQuoteStatus(ctx.temptQuoteStatus); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Change Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteStatusPopupComponent_Template_button_click_24_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.Status === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type === "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temptQuoteStatus === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temptQuoteStatus === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temptQuoteStatus !== 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temptQuoteStatus === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.temptQuoteStatus !== 6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePad"]], styles: [".Container[_ngcontent-%COMP%] {overflow-y: auto !important;overflow-x: hidden;min-height: 22px;max-height: 100vh;}\n    .myStatus[_ngcontent-%COMP%] {width: 100%;background-color: cyan;padding: 6px 6px;margin: 0 0 1px 0;border: 1px solid #ad5a2242;}\n    .myStatus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {margin: 0px 0 0 11px;color: black;font-size: initial;}\n    .AcceptStatus[_ngcontent-%COMP%] {margin: 0 5px 0 0;color: green;}\n    .OtherStatus[_ngcontent-%COMP%] {margin: 0 5px 0 0;color: #847a74;}\n    .btnRemoveSection[_ngcontent-%COMP%] {background-color: #fcb822;color: black;padding: 2px 15px;float: right;cursor: pointer;margin: 1px 1px 0 0;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteStatusPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-status-popup',
                templateUrl: './quote-status-popup.component.html',
                styles: []
            }]
    }], function () { return [{ type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_2__["UserlogService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }]; }, { SalesPersonSingnaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['SignaturePad1', { static: false }]
        }] }); })();


/***/ }),

/***/ "Mhew":
/*!*******************************************************************************************************!*\
  !*** ./src/app/application/quotes/quote-contact-person-popup/quote-contact-person-popup.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: QuoteContactPersonPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteContactPersonPopupComponent", function() { return QuoteContactPersonPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "o0su");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/customer.service */ "0zL+");
/* harmony import */ var _services_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/quote.service */ "uOqW");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function QuoteContactPersonPopupComponent_div_9_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteContactPersonPopupComponent_div_9_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteContactPersonPopupComponent_div_9_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.redirect(ctx_r7.customerservice.formData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create new contact Person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteContactPersonPopupComponent_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteContactPersonPopupComponent_div_9_div_11_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const x_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onClick(x_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", x_r9.NameTitle, " ", x_r9.FirstName, " ", x_r9.LastName, " ");
} }
function QuoteContactPersonPopupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Which contact person would you like to create this quotation for?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function QuoteContactPersonPopupComponent_div_9_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onkeypress($event.target.value); })("keyup", function QuoteContactPersonPopupComponent_div_9_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onkeypress($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteContactPersonPopupComponent_div_9_div_6_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteContactPersonPopupComponent_div_9_a_8_Template, 3, 0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuoteContactPersonPopupComponent_div_9_div_11_Template, 7, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentUser.Permissions.CustomerCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentUser.Permissions.CustomerCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.LocalList);
} }
function QuoteContactPersonPopupComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Contact Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteContactPersonPopupComponent_div_10_Template_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.customerservice.CustomerContactPersonData.NameTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mrs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ms.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mss.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteContactPersonPopupComponent_div_10_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.customerservice.CustomerContactPersonData.FirstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteContactPersonPopupComponent_div_10_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.customerservice.CustomerContactPersonData.LastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteContactPersonPopupComponent_div_10_Template_input_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.customerservice.CustomerContactPersonData.Email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteContactPersonPopupComponent_div_10_Template_input_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.customerservice.CustomerContactPersonData.Phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteContactPersonPopupComponent_div_10_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteContactPersonPopupComponent_div_10_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r3.isValidTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.customerservice.CustomerContactPersonData.NameTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r3.isValidFirstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.customerservice.CustomerContactPersonData.FirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r3.isValidLastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.customerservice.CustomerContactPersonData.LastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.customerservice.CustomerContactPersonData.Email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.customerservice.CustomerContactPersonData.Phone);
} }
class QuoteContactPersonPopupComponent {
    constructor(dialogRef, loginservice, customerservice, quoteService, toastr) {
        this.dialogRef = dialogRef;
        this.loginservice = loginservice;
        this.customerservice = customerservice;
        this.quoteService = quoteService;
        this.toastr = toastr;
        this.isValidTitle = true;
        this.isValidFirstname = true;
        this.isValidLastname = true;
        this.IsContactPersonCreate = true;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
        setTimeout(() => {
            this.LocalList = this.customerservice.formData.CustomerContactPerson;
            this.customerservice.CustomerContactPersonData.CustomerId = this.customerservice.formData.Id;
        }, 500);
    }
    onClick(c) {
        if (c === null) {
            this.dialogRef.close();
        }
        else {
            this.quoteService.QuoteData.CustomerName = c.NameTitle + ' ' + c.FirstName + ' ' + c.LastName;
            this.quoteService.QuoteData.CustomerEmail = c.Email;
            this.quoteService.QuoteData.CustomerContactNo = c.Phone;
            this.quoteService.QuoteData.CompanyName = this.customerservice.formData.CompanyName;
            this.quoteService.QuoteData.CustomerId = this.customerservice.formData.Id;
            this.quoteService.QuoteData.Attention = '';
        }
        //  let x = this.customerservice.formData;
        setTimeout(() => {
            this.dialogRef.close();
        }, 100);
    }
    redirect(c) {
        this.customerservice.formData = Object.assign({}, c);
        // setTimeout(() => {
        //   this.router.navigate(['/customers/customer-edit/']);
        // }, 100);
        this.IsContactPersonCreate = false;
    }
    onBack() {
        this.IsContactPersonCreate = true;
    }
    onSubmit() {
        if (this.customerservice.CustomerContactPersonData.NameTitle === '' ||
            this.customerservice.CustomerContactPersonData.NameTitle === undefined) {
            this.isValidTitle = false;
            this.toastr.warning('', 'Title is required!');
            return false;
        }
        if (this.customerservice.CustomerContactPersonData.FirstName === '' ||
            this.customerservice.CustomerContactPersonData.FirstName === undefined) {
            this.isValidFirstname = false;
            this.toastr.warning('', 'First Name is required!');
            return false;
        }
        if (this.customerservice.CustomerContactPersonData.LastName === '' ||
            this.customerservice.CustomerContactPersonData.LastName === undefined) {
            this.isValidLastname = false;
            this.toastr.warning('', 'Last Name is required!');
            return false;
        }
        this.customerservice.AddNewContactPerson(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                    this.customerservice.formData.CustomerContactPerson = response.result;
                    this.LocalList = response.result;
                    this.IsContactPersonCreate = true;
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    onkeypress(value) {
        this.LocalList = this.customerservice.formData.CustomerContactPerson.filter(item => item.Phone.toLowerCase().match(value.toLowerCase()) ||
            item.Email.toLowerCase().match(value.toLowerCase()) ||
            item.FirstName.toLowerCase().match(value.toLowerCase()) ||
            item.LastName.toLowerCase().match(value.toLowerCase()));
    }
}
QuoteContactPersonPopupComponent.ɵfac = function QuoteContactPersonPopupComponent_Factory(t) { return new (t || QuoteContactPersonPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
QuoteContactPersonPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteContactPersonPopupComponent, selectors: [["app-quote-contact-person-popup"]], decls: 11, vars: 4, consts: [[1, "modal-header", "select-new-properties"], ["id", "exampleModalLabel", 1, "modal-title"], ["mat-dialog-close", "", 1, "btn", "btn-default", "pull-right"], ["type", "hidden", "name", "Id", 3, "ngModel", "ngModelChange"], ["Id", "ngModel"], ["type", "hidden", "name", "CustomerId", 3, "ngModel", "ngModelChange"], ["CustomerId", "ngModel"], ["class", "modal-body property-modal-body", 4, "ngIf"], [1, "modal-body", "property-modal-body"], [1, "row", "forn-group"], [1, "col-md-7"], ["type", "text", "placeholder", "Search Clients...", 1, "form-control", 3, "keydown", "keyup"], ["class", "col-md-1 text-center", 4, "ngIf"], [1, "col-md-4", "text-right"], ["on", "", "class", "btn btn-brand text-white ", 3, "click", 4, "ngIf"], [1, "kt-portlet__body", "new_clients_properties_body"], ["data-scroll", "true", "data-height", "220", "id", "style-3", 1, "kt-widget4", "kt-scroll", "ps", 2, "height", "220px", "overflow", "hidden"], ["class", "kt-widget4__item create-quote-client-item", 4, "ngFor", "ngForOf"], [1, "col-md-1", "text-center"], ["on", "", 1, "btn", "btn-brand", "text-white", 3, "click"], [1, "la", "la-plus"], [1, "kt-widget4__item", "create-quote-client-item"], [1, "kt-widget4__pic", "kt-widget4__pic--logo"], [1, "fa", "fa-user"], [1, "kt-widget4__info", 3, "click"], ["href", "javascript:;", 1, "kt-widget4__title"], [1, "row"], [1, "col-xl-2"], [1, "form-group"], ["for", "", 1, "label", "whole-text-required"], [1, "text-danger"], ["name", "NameTitle", 1, "form-control", 3, "ngModel", "ngModelChange"], ["NameTitle", "ngModel"], ["value", ""], ["value", "Mrs."], ["value", "Mr."], ["value", "Ms."], ["value", "Mss."], ["value", "Dr."], [1, "col-xl-5"], ["name", "FirstName", "placeholder", "First Name", "min", "0", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FirstName", "ngModel"], ["for", "", 1, "label"], ["name", "LastName", "placeholder", "Last Name", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["LastName", "ngModel"], [1, "col-xl-6"], ["name", "Email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Email", "ngModel"], ["name", "Phone", "placeholder", "Phone Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Phone", "ngModel"], [1, "col-xl-12"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-angle-double-left"], ["type", "submit", 1, "btn", "btn-brand", 3, "click"]], template: function QuoteContactPersonPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select or create a Contact Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteContactPersonPopupComponent_Template_input_ngModelChange_5_listener($event) { return ctx.customerservice.formData.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteContactPersonPopupComponent_Template_input_ngModelChange_7_listener($event) { return ctx.customerservice.CustomerContactPersonData.CustomerId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuoteContactPersonPopupComponent_div_9_Template, 12, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuoteContactPersonPopupComponent_div_10_Template, 61, 11, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customerservice.formData.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customerservice.CustomerContactPersonData.CustomerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsContactPersonCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsContactPersonCreate);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"]], styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcXVvdGVzL3F1b3RlLWNvbnRhY3QtcGVyc29uLXBvcHVwL3F1b3RlLWNvbnRhY3QtcGVyc29uLXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQztBQUMxRCxvQ0FBb0MsbUJBQW1CLENBQUM7QUFDeEQseUNBQXlDLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN0Ryx1Q0FBdUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztBQUNsRSxnQ0FBZ0Msd0JBQXdCLENBQUM7QUFDekQsa0NBQWtDLGNBQWMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBQzdFLGlDQUFpQyxrQkFBa0IsQ0FBQztBQUNwRCxpQ0FBaUMsd0JBQXdCLENBQUM7QUFDMUQsNkJBQTZCLHNCQUFzQixDQUFDLFdBQVcsQ0FBQztBQUNoRSwwQ0FBMEMsZ0JBQWdCLENBQUM7QUFDM0QsOENBQThDLDBCQUEwQixDQUFDO0FBQ3pFLHlCQUF5QiwwQkFBMEIsQ0FBQyxrQkFBa0IsQ0FBQztBQUN2RSxlQUFlLHdCQUF3QixDQUFDLHlCQUF5QixDQUFDO0FBQ2xFLDRCQUE0QixVQUFVLENBQUMseUJBQXlCLENBQUM7QUFDakUsa0NBQWtDLHlCQUF5QixDQUFDO0FBQzVELHdFQUF3RSx5QkFBeUIsQ0FBQyxjQUFjO0FBQ2hILHlHQUF5RyxrQkFBa0IsRUFBRTtBQUM3SCxrREFBa0Qsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3ZGLHdEQUF3RCx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7QUFDL0YscUVBQXFFLFdBQVcsQ0FBQztBQUNqRiw2Q0FBNkMsV0FBVyxDQUFDO0FBQ3pELDJEQUEyRCx3QkFBd0IsQ0FBQztBQUNwRixtRUFBbUUsZUFBZSxDQUFDO0FBQ25GLDJEQUEyRCxnQkFBZ0IsQ0FBQztBQUM1RSwyQ0FBMkMsY0FBYyxDQUFDO0FBQzFELGlDQUFpQyxjQUFjLENBQUM7QUFDaEQsdUJBQXVCLGdCQUFnQixDQUFDO0FBQ3hDLDJDQUEyQywrQkFBK0IsQ0FBQztBQUMzRSwyQkFBMkIsYUFBYSxDQUFDO0FBQ3pDLDZCQUE2QixpQkFBaUIsQ0FBQztBQUMvQyxpQ0FBaUMsaUNBQWlDLENBQUM7QUFDbkUsMkJBQTJCLHNCQUFzQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vcXVvdGVzL3F1b3RlLWNvbnRhY3QtcGVyc29uLXBvcHVwL3F1b3RlLWNvbnRhY3QtcGVyc29uLXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6ICNmZjg1MzM7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllc3tiYWNrZ3JvdW5kOiAjYzNlN2ZhO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgLmJ0bntwYWRkaW5nOiAwLjI1cmVtIDAuN3JlbTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7Y29sb3I6d2hpdGU7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllcyBoNXtjb2xvcjpibGFjaztmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkubW9kYWwtYm9keSBwe2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjazt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5IC5mb3JuLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5YSAuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRDQTt9XHJcbi5uZXdfY2xpZW50c19wcm9wZXJ0aWVzX2JvZHl7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXI6bm9uZTt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjE1cHg7fVxyXG4ua3Qtd2lkZ2V0NCAua3Qtd2lkZ2V0NF9faXRlbTpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhMzg7fVxyXG4ua3Qtd2lkZ2V0NC5rdC1zY3JvbGwucHN7b3ZlcmZsb3cteTphdXRvICFpbXBvcnRhbnQ7cGFkZGluZy1yaWdodDoxMHB4O31cclxuLmt0LWZvbnQtYnJhbmR7Y29sb3I6I2FlYWVhZSAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxMnB4ICFpbXBvcnRhbnQ7fVxyXG4jc3R5bGUtMzo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6IDZweDtiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O31cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JhY2tncm91bmQtY29sb3I6ICMwMDg0Q0E7fVxyXG4uY3VzdG9tZXItbGlzdC12aWV3LWluZm8ucHJvcGVydHktbGlzdC1keW5hbWljLWNsYXNzIC5idG4tbGFiZWwtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmEgO2NvbG9yOiAjMDA4NENBfVxyXG4uY3VzdG9tZXItbGlzdC1tYWluLXNlY3Rpb24gLmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0ua3QtaGVhZGVyX190b3BiYXItaXRlbS0tc2VhcmNoLmRyb3Bkb3duLmJvb3RtLWZpbHRlcnttYXJnaW4tYm90dG9tOjIwcHg7O31cclxuLmt0LXNlbGVjdHBpY2tlci5idG4uYnRuLWxhYmVsLXN1Y2Nlc3MucHVsbC1yaWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNGRjg1MzM7Y29sb3I6d2hpdGU7fVxyXG4ua3Qtc2VsZWN0cGlja2VyLmJ0bi5idG4tbGFiZWwtc3VjY2Vzcy5wdWxsLXJpZ2h0OmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2MzZTdmYTtjb2xvcjojMDA4NENBO31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLm5ldy1wcm9wZXJ0aWVzLXBvcHVwY3JlYXRlLXRleHR7Y29sb3I6d2hpdGU7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmFsZXJ0LWljb24gaXtjb2xvcjp3aGl0ZTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5hbGVydC5hbGVydC1zZWNvbmRhcnl7YmFja2dyb3VuZC1jb2xvcjojMDA4NGNhO31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3Jte3BhZGRpbmc6MHB4IDBweDt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5hbGVydC5hbGVydC1zZWNvbmRhcnl7cGFkZGluZzo4cHggMjBweDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuYWxlcnQtaWNvbntmb250LXNpemU6MjBweDt9XHJcbi5uZXctcHJvcGVydGllcy1wb3B1cGNyZWF0ZS10ZXh0e2ZvbnQtc2l6ZToyMHB4O31cclxuLnByb3BlcnR5LWFwcGxpY2F0aW9uc3twYWRkaW5nOjBweCAxNXB4O31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5mb3JtLWdyb3Vwe21hcmdpbi1ib3R0b206MC40cmVtICFpbXBvcnRhbnQ7fVxyXG4uY3VzdG9tZXItbGlzdC12aWV3LWluZm8gYXtkaXNwbGF5OmJsb2NrO31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIGEgaXt0ZXh0LWFsaWduOmNlbnRlcjt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybS0xe2JveC1zaGFkb3c6MTBweCAxMHB4IDEwcHggI2Q3ZDdkNzt9XHJcbi5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVye2hlaWdodDoxMDAlICFpbXBvcnRhbnQ7fVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteContactPersonPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-contact-person-popup',
                templateUrl: './quote-contact-person-popup.component.html',
                styleUrls: ['./quote-contact-person-popup.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }, { type: _services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "QfdM":
/*!***********************************************************************************************************!*\
  !*** ./src/app/application/quotes/signature-quote-status-popup/signature-quote-status-popup.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SignatureQuoteStatusPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureQuoteStatusPopupComponent", function() { return SignatureQuoteStatusPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/userlog.service */ "V05N");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/quote.service */ "uOqW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-signaturepad */ "HnZm");







const _c0 = ["SignaturePad2"];
class SignatureQuoteStatusPopupComponent {
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
    }
    UpdateQuoteStatus() {
        const CustBase64 = this.CustomerSingnaturePad.toDataURL('image/png');
        this.quoteService.QuoteData.SalesPersonSignature = CustBase64;
        this.quoteService.updateQuoteSignature(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                this.dialogRef.close();
            }
        }, error => console.log(error));
    }
    cleareCustomerCloserSignature() {
        this.CustomerSingnaturePad.clear();
    }
    close() {
        this.dialogRef.close();
    }
}
SignatureQuoteStatusPopupComponent.ɵfac = function SignatureQuoteStatusPopupComponent_Factory(t) { return new (t || SignatureQuoteStatusPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_1__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_3__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"])); };
SignatureQuoteStatusPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignatureQuoteStatusPopupComponent, selectors: [["app-quote-status-popup"]], viewQuery: function SignatureQuoteStatusPopupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.CustomerSingnaturePad = _t.first);
    } }, decls: 23, vars: 1, consts: [[1, "Container"], [1, "dispaly-4"], [1, "form-row"], [1, "form-group", "col-md-12"], [1, "kt-radio-list"], [1, "row"], [1, "signature"], [1, "row", "forn-group"], [1, "col"], ["id", "CloseSignarePad", 1, "m-signature-pad", "CloseSignarePad"], [1, "m-signature-pad-body"], [3, "options"], ["SignaturePad2", ""], [1, "btnRemoveSection", 3, "click"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", "ml-1", 3, "click"], [1, "fa", "fa-close"]], template: function SignatureQuoteStatusPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Sale Person Signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "signature-pad", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureQuoteStatusPopupComponent_Template_a_click_15_listener() { return ctx.cleareCustomerCloserSignature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Clear signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureQuoteStatusPopupComponent_Template_button_click_18_listener() { return ctx.UpdateQuoteStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Add Signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureQuoteStatusPopupComponent_Template_button_click_20_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.CustomerSignaturePadOption);
    } }, directives: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__["SignaturePad"]], styles: [".Container[_ngcontent-%COMP%] {\n        overflow-y: auto !important;\n        overflow-x: hidden;\n        min-height: 22px;\n        max-height: 100vh;\n    }\n\n    .myStatus[_ngcontent-%COMP%] {\n        width: 100%;\n        background-color: cyan;\n        padding: 6px 6px;\n        margin: 0 0 1px 0;\n        border: 1px solid #ad5a2242;\n    }\n\n    .myStatus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin: 0px 0 0 11px;\n        color: black;\n        font-size: initial;\n    }\n\n    .AcceptStatus[_ngcontent-%COMP%] {\n        margin: 0 5px 0 0;\n        color: green;\n    }\n\n    .OtherStatus[_ngcontent-%COMP%] {\n        margin: 0 8px 0 0;\n        color: #ad5a22;\n    }\n\n    .signature[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 280px;\n        border: 1px solid #ad5a2242;\n    }\n\n    .btnRemoveSection[_ngcontent-%COMP%] {\n        background-color: #fcb822;\n        color: black;\n        padding: 2px 15px;\n        float: left;\n        margin-top: 2px;\n        cursor: pointer;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignatureQuoteStatusPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-status-popup',
                templateUrl: 'signature-quote-status-popup.component.html',
                styles: []
            }]
    }], function () { return [{ type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_1__["UserlogService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_3__["QuoteService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }]; }, { CustomerSingnaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['SignaturePad2', { static: false }]
        }] }); })();


/***/ }),

/***/ "R0Vg":
/*!*******************************************!*\
  !*** ./src/app/services/ticket.module.ts ***!
  \*******************************************/
/*! exports provided: Ticket, TicketTeam, TicketItem, TicketAttachment, TicketIssueType, TicketWiseIssueType, TicketTimer, TicketReminder, TicketEquipment, TicketEquipmentMasterData, TicketRecurringHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketTeam", function() { return TicketTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketItem", function() { return TicketItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketAttachment", function() { return TicketAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketIssueType", function() { return TicketIssueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketWiseIssueType", function() { return TicketWiseIssueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketTimer", function() { return TicketTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketReminder", function() { return TicketReminder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketEquipment", function() { return TicketEquipment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketEquipmentMasterData", function() { return TicketEquipmentMasterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketRecurringHelper", function() { return TicketRecurringHelper; });
/* harmony import */ var _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommanExtendsClass.module */ "mbav");

class Ticket {
}
class TicketTeam {
}
class TicketItem {
}
class TicketAttachment {
}
class TicketIssueType {
}
class TicketWiseIssueType {
}
class TicketTimer {
}
class TicketReminder extends _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__["ReminderBase"] {
}
class TicketEquipment {
}
class TicketEquipmentMasterData {
}
class TicketRecurringHelper {
}


/***/ }),

/***/ "WzcN":
/*!***********************************************************************************************************!*\
  !*** ./src/app/application/quotes/quotecustomer-property-popup/quotecustomer-property-popup.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: QuotecustomerPropertyPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotecustomerPropertyPopupComponent", function() { return QuotecustomerPropertyPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/quote.service */ "uOqW");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/property.service */ "Pffd");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "7itd");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_11__);













function QuotecustomerPropertyPopupComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuotecustomerPropertyPopupComponent_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuotecustomerPropertyPopupComponent_div_5_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.redirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create new Property ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuotecustomerPropertyPopupComponent_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuotecustomerPropertyPopupComponent_div_5_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const x_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onClick(x_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r4.localPrependUrl, "/assets/media/client-logos/logo1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", x_r7.AddressStreet1, " ", x_r7.AddressStreet2, " ", x_r7.AddressUnitNo, " ", x_r7.AddressCountry, " ", x_r7.AddressZipCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r7.CustomerName, " ");
} }
function QuotecustomerPropertyPopupComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Which property would you like to select for quotation ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function QuotecustomerPropertyPopupComponent_div_5_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onkeypress($event.target.value); })("keyup", function QuotecustomerPropertyPopupComponent_div_5_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onkeypress($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuotecustomerPropertyPopupComponent_div_5_div_6_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuotecustomerPropertyPopupComponent_div_5_div_7_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuotecustomerPropertyPopupComponent_div_5_div_10_Template, 8, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.Permissions.PropertyCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.Permissions.PropertyCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.service.locallist);
} }
function QuotecustomerPropertyPopupComponent_div_6_a_55_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 76);
} }
function QuotecustomerPropertyPopupComponent_div_6_a_55_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 77);
} }
function QuotecustomerPropertyPopupComponent_div_6_a_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuotecustomerPropertyPopupComponent_div_6_a_55_i_1_Template, 1, 0, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuotecustomerPropertyPopupComponent_div_6_a_55_i_2_Template, 1, 0, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.IsPostalSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.IsPostalSearch);
} }
function QuotecustomerPropertyPopupComponent_div_6_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", x_r27.CountryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r27.CountryName, " ");
} }
function QuotecustomerPropertyPopupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuotecustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.service.formData.Id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuotecustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.service.formData.CustomerId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuotecustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.service.formData.CustomerName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuotecustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.service.formData.Latitude = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuotecustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.service.formData.Longitude = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Address Street 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAddressChange", function QuotecustomerPropertyPopupComponent_div_6_Template_input_onAddressChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.handleAddressChange($event); })("ngModelChange", function QuotecustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.service.formData.AddressStreet1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Address Street 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuotecustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.service.formData.AddressStreet2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Address Unit No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuotecustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.service.formData.AddressUnitNo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Postal Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuotecustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.service.formData.AddressZipCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, QuotecustomerPropertyPopupComponent_div_6_a_55_Template, 3, 2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuotecustomerPropertyPopupComponent_div_6_Template_select_ngModelChange_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.service.formData.AddressCountry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, QuotecustomerPropertyPopupComponent_div_6_option_64_Template, 2, 2, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuotecustomerPropertyPopupComponent_div_6_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuotecustomerPropertyPopupComponent_div_6_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.CustomerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.CustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.Latitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.Longitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Property for ", ctx_r1.service.formData.CustomerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.options)("ngModel", ctx_r1.service.formData.AddressStreet1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.AddressStreet2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.AddressUnitNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.AddressZipCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.service.formData.AddressZipCode.toString().length === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.AddressCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.countrylist);
} }
class QuotecustomerPropertyPopupComponent {
    constructor(toastr, dialogRef, quoterService, service, loginservice, customerservice, genicprofileservice) {
        this.toastr = toastr;
        this.dialogRef = dialogRef;
        this.quoterService = quoterService;
        this.service = service;
        this.loginservice = loginservice;
        this.customerservice = customerservice;
        this.genicprofileservice = genicprofileservice;
        this.isValidZipCode = true;
        this.isValidCountry = true;
        this.IsPropertyCreate = true;
        this.zoom = 8;
        this.options = { componentRestrictions: { country: ['SG'] } };
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
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    ngOnInit() {
        this.IsPropertyCreate = true;
        this.service.Propertylist = [];
        this.service.refrestPropertylistCustomerWise(this.currentUser.Token, this.customerservice.formData.Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.service.Propertylist = this.service.locallist = response.result;
                    this.service.locallist = this.service.Propertylist.filter(x => x.IsActive === true);
                    this.service.formData.CustomerId = this.customerservice.formData.Id;
                }
            }
        }, error => console.log(error));
    }
    onClick(x) {
        if (x === undefined) {
            this.dialogRef.close();
        }
        else {
            this.dialogRef.close({ x });
        }
    }
    onSubmit() {
        if (this.service.formData.AddressZipCode === '' ||
            this.service.formData.AddressZipCode === undefined) {
            this.isValidZipCode = false;
            this.toastr.warning('', 'ZipCode is required!');
            return false;
        }
        if (this.service.formData.AddressCountry === '' ||
            this.service.formData.AddressCountry === undefined) {
            this.isValidCountry = false;
            this.toastr.warning('', 'Country is required!');
            return false;
        }
        this.service.AddNewProperty()
            .subscribe(res => {
            if (res) {
                setTimeout(() => {
                    this.toastr.success('', 'Property is added');
                    this.service.Propertylist = res;
                }, 400);
                setTimeout(() => {
                    this.service.locallist = this.service.Propertylist.filter(x => x.IsActive === true);
                }, 1000);
                this.IsPropertyCreate = true;
                setTimeout(() => {
                    this.service.formData.AddressStreet1 = '';
                    this.service.formData.AddressStreet2 = '';
                    this.service.formData.AddressCity = '';
                    this.service.formData.AddressState = '';
                    this.service.formData.AddressUnitNo = '';
                    this.service.formData.AddressZipCode = '';
                }, 1500);
            }
        }, error => console.log(error));
    }
    redirect() {
        this.IsPropertyCreate = false;
        this.genicprofileservice.getCountryList(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.countrylist = response.result;
                }
            }
        }, error => console.log(error));
    }
    onBack() {
        this.IsPropertyCreate = true;
    }
    onkeypress(value) {
        this.LocalPropertyList = this.quoterService.PropertyList.filter(item => item.CustomerName.toLowerCase().match(value.toLowerCase()) ||
            item.AddressCity.toLowerCase().match(value.toLowerCase()) ||
            item.AddressCountry.toLowerCase().match(value.toLowerCase()) ||
            item.AddressStreet1.toLowerCase().match(value.toLowerCase()) ||
            item.AddressStreet1.toLowerCase().match(value.toLowerCase()) ||
            item.AddressUnitNo.toLowerCase().match(value.toLowerCase()) ||
            item.AddressZipCode.toLowerCase().match(value.toLowerCase()));
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
}
QuotecustomerPropertyPopupComponent.ɵfac = function QuotecustomerPropertyPopupComponent_Factory(t) { return new (t || QuotecustomerPropertyPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_5__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_8__["GenicProfileService"])); };
QuotecustomerPropertyPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuotecustomerPropertyPopupComponent, selectors: [["app-quotecustomer-property-popup"]], decls: 7, vars: 2, consts: [[1, "modal-header", "select-new-properties"], ["id", "exampleModalLabel", 1, "modal-title"], ["mat-dialog-close", "", 1, "btn", "btn-default", "pull-right"], ["class", "modal-body property-modal-body", 4, "ngIf"], [1, "modal-body", "property-modal-body"], [1, "row", "forn-group"], [1, "col-md-7"], ["type", "text", "placeholder", "Search Clients...", 1, "form-control", 3, "keydown", "keyup"], ["class", "col-md-1 text-center", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], [1, "kt-portlet__body", "new_clients_properties_body"], ["data-scroll", "true", "data-height", "220", 1, "kt-widget4", "kt-scroll", "ps", 2, "height", "220px", "overflow", "hidden"], ["class", "kt-widget4__item create-quote-client-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-1", "text-center"], [1, "col-md-4"], ["on", "", 1, "btn", "btn-brand", "text-white", 3, "click"], [1, "la", "la-plus"], [1, "kt-widget4__item", "create-quote-client-item", 3, "click"], [1, "kt-widget4__pic", "kt-widget4__pic--logo"], ["alt", "", 3, "src"], [1, "kt-widget4__info"], [1, "kt-widget4__text"], [1, "kt-widget4__title"], ["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["type", "hidden", "name", "Id", 3, "ngModel", "ngModelChange"], ["Id", "ngModel"], ["type", "hidden", "name", "CustomerId", 3, "ngModel", "ngModelChange"], ["CustomerId", "ngModel"], ["type", "hidden", "name", "CustomerName", 3, "ngModel", "ngModelChange"], ["CustomerName", "ngModel"], ["type", "hidden", "name", "Latitude", 3, "ngModel", "ngModelChange"], ["Latitude", "ngModel"], ["type", "hidden", "name", "Longitude", 3, "ngModel", "ngModelChange"], ["Longitude", "ngModel"], [1, "creat-properties-form-main-section"], [1, "kt-container", "kt-container--fluid"], [1, "create_properties-filter_form", "create_properties-filter_form-1"], [1, "form-group", "form-group-last"], ["role", "alert", 1, "alert", "alert-secondary"], [1, "alert-icon"], [1, "fa", "fa-building"], [1, "new-properties-popupcreate-text"], [1, "row", "property-applications"], [1, "col-md-12"], [1, "create_properties-filter_form"], [1, "form-group", "row", "creat-properties-form-group"], [1, "col-lg-12"], [1, "form-group"], ["for", "", 1, "label"], ["name", "AddressStreet1", "ngx-google-places-autocomplete", "", "placeholder", "Address Street 1", "maxlength", "128", 1, "form-control", 3, "options", "ngModel", "onAddressChange", "ngModelChange"], ["AddressStreet1", "ngModel"], ["name", "AddressStreet2", "placeholder", "Address Street 2", "maxlength", "128", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressStreet2", "ngModel"], ["name", "AddressUnitNo", "placeholder", "Address Unit No", "maxlength", "16", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressUnitNo", "ngModel"], [1, "form-group", "row", "creat-properties-form-group", 2, "display", "none"], [1, "col-lg-6", "padding-right-mo-10", 2, "padding-right", "0px"], [1, "input-group"], ["name", "AddressZipCode", "min", "5", "maxlength", "6", "placeholder", "Postal Code", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressZipCode", "ngModel"], [1, "input-group-prepend"], [1, "input-group-text"], ["href", "javascript:;", 4, "ngIf"], [1, "col-lg-6", "padding-left-mo-10", 2, "padding-left", "0px"], ["name", "AddressCountry", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressCountry", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xl-12"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-angle-double-left"], ["type", "submit", 1, "btn", "btn-brand", 3, "click"], ["href", "javascript:;"], ["class", "la la-refresh", 4, "ngIf"], ["class", "la la-spinner fa-spin", 4, "ngIf"], [1, "la", "la-refresh"], [1, "la", "la-spinner", "fa-spin"], [3, "value"]], template: function QuotecustomerPropertyPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select or create a Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuotecustomerPropertyPopupComponent_div_5_Template, 11, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuotecustomerPropertyPopupComponent_div_6_Template, 73, 14, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsPropertyCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsPropertyCreate);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_11__["GooglePlaceDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"]], styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#EAEAEA;color:black !important;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{background-color:white !important;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{color:black !important;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;bottom:0;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]   .btn.btn-brand[_ngcontent-%COMP%]{background-color:#2C77F4 !important;border:1px solid transparent !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcXVvdGVzL3F1b3RlY3VzdG9tZXItcHJvcGVydHktcG9wdXAvcXVvdGVjdXN0b21lci1wcm9wZXJ0eS1wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsd0JBQXdCLENBQUMscUJBQXFCLENBQUM7QUFDMUQsb0NBQW9DLG1CQUFtQixDQUFDO0FBQ3hELHlDQUF5Qyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUM7QUFDdEcsdUNBQXVDLFdBQVcsQ0FBQyxjQUFjLENBQUM7QUFDbEUsZ0NBQWdDLHdCQUF3QixDQUFDO0FBQ3pELGtDQUFrQyxjQUFjLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztBQUM3RSxpQ0FBaUMsa0JBQWtCLENBQUM7QUFDcEQsaUNBQWlDLHdCQUF3QixDQUFDO0FBQzFELDZCQUE2QixzQkFBc0IsQ0FBQyxXQUFXLENBQUM7QUFDaEUsMENBQTBDLGdCQUFnQixDQUFDO0FBQzNELDhDQUE4QywwQkFBMEIsQ0FBQztBQUN6RSx5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUM7QUFDdkUsZUFBZSx3QkFBd0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUNsRSw0QkFBNEIsVUFBVSxDQUFDLHlCQUF5QixDQUFDO0FBQ2pFLGtDQUFrQyx5QkFBeUIsQ0FBQztBQUM1RCx3RUFBd0UseUJBQXlCLENBQUMsY0FBYztBQUNoSCx5R0FBeUcsa0JBQWtCLEVBQUU7QUFDN0gsa0RBQWtELHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN2Rix3REFBd0Qsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQy9GLHFFQUFxRSxXQUFXLENBQUM7QUFDakYsNkNBQTZDLFdBQVcsQ0FBQztBQUN6RCwyREFBMkQsd0JBQXdCLENBQUM7QUFDcEYsbUVBQW1FLGVBQWUsQ0FBQztBQUNuRiwyREFBMkQsZ0JBQWdCLENBQUM7QUFDNUUsMkNBQTJDLGNBQWMsQ0FBQztBQUMxRCxpQ0FBaUMsY0FBYyxDQUFDO0FBQ2hELHVCQUF1QixnQkFBZ0IsQ0FBQztBQUN4QywyQ0FBMkMsK0JBQStCLENBQUM7QUFDM0UsMkJBQTJCLGFBQWEsQ0FBQztBQUN6Qyw2QkFBNkIsaUJBQWlCLENBQUM7QUFDL0MsaUNBQWlDLGlDQUFpQyxDQUFDO0FBQ25FLDJCQUEyQixzQkFBc0IsQ0FBQztBQUNsRCwyREFBMkQsd0JBQXdCLENBQUMsc0JBQXNCLENBQUM7QUFDM0csNkNBQTZDLHNCQUFzQixDQUFDO0FBQ3BFLG1FQUFtRSxpQ0FBaUMsQ0FBQztBQUNyRyxpQ0FBaUMsc0JBQXNCLENBQUM7QUFDeEQsMENBQTBDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7QUFDM0YseURBQXlELG1DQUFtQyxDQUFDLHVDQUF1QyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vcXVvdGVzL3F1b3RlY3VzdG9tZXItcHJvcGVydHktcG9wdXAvcXVvdGVjdXN0b21lci1wcm9wZXJ0eS1wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1icmFuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzM7Ym9yZGVyLWNvbG9yOiAjZmY4NTMzO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXN7YmFja2dyb3VuZDogI2MzZTdmYTt9XHJcbi5tb2RhbC1oZWFkZXIuc2VsZWN0LW5ldy1wcm9wZXJ0aWVzIC5idG57cGFkZGluZzogMC4yNXJlbSAwLjdyZW07YmFja2dyb3VuZC1jb2xvcjojMDA4NENBO2NvbG9yOndoaXRlO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgaDV7Y29sb3I6YmxhY2s7Zm9udC1zaXplOjIwcHg7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keS5tb2RhbC1ib2R5e2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHkgcHtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2s7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keSAuZm9ybi1ncm91cHttYXJnaW4tYm90dG9tOjE1cHg7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keWEgLmJ0bi1icmFuZHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7fVxyXG4ubmV3X2NsaWVudHNfcHJvcGVydGllc19ib2R5e2JhY2tncm91bmQtY29sb3I6d2hpdGU7Ym9yZGVyOm5vbmU7fVxyXG4ua3Qtd2lkZ2V0NCAua3Qtd2lkZ2V0NF9faXRlbTpmaXJzdC1jaGlsZHtwYWRkaW5nLXRvcDoxNXB4O31cclxuLmt0LXdpZGdldDQgLmt0LXdpZGdldDRfX2l0ZW06bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2MzZTdmYTM4O31cclxuLmt0LXdpZGdldDQua3Qtc2Nyb2xsLnBze292ZXJmbG93LXk6YXV0byAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6MTBweDt9XHJcbi5rdC1mb250LWJyYW5ke2NvbG9yOiNhZWFlYWUgIWltcG9ydGFudDtmb250LXNpemU6MTJweCAhaW1wb3J0YW50O31cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOiA2cHg7YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTt9XHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NENBO31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvLnByb3BlcnR5LWxpc3QtZHluYW1pYy1jbGFzcyAuYnRuLWxhYmVsLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhIDtjb2xvcjogIzAwODRDQX1cclxuLmN1c3RvbWVyLWxpc3QtbWFpbi1zZWN0aW9uIC5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0tLXNlYXJjaC5kcm9wZG93bi5ib290bS1maWx0ZXJ7bWFyZ2luLWJvdHRvbToyMHB4Ozt9XHJcbi5rdC1zZWxlY3RwaWNrZXIuYnRuLmJ0bi1sYWJlbC1zdWNjZXNzLnB1bGwtcmlnaHR7YmFja2dyb3VuZC1jb2xvcjojRkY4NTMzO2NvbG9yOndoaXRlO31cclxuLmt0LXNlbGVjdHBpY2tlci5idG4uYnRuLWxhYmVsLXN1Y2Nlc3MucHVsbC1yaWdodDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmE7Y29sb3I6IzAwODRDQTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5uZXctcHJvcGVydGllcy1wb3B1cGNyZWF0ZS10ZXh0e2NvbG9yOndoaXRlO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5hbGVydC1pY29uIGl7Y29sb3I6d2hpdGU7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwODRjYTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybXtwYWRkaW5nOjBweCAwcHg7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e3BhZGRpbmc6OHB4IDIwcHg7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmFsZXJ0LWljb257Zm9udC1zaXplOjIwcHg7fVxyXG4ubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1hcHBsaWNhdGlvbnN7cGFkZGluZzowcHggMTVweDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjAuNHJlbSAhaW1wb3J0YW50O31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIGF7ZGlzcGxheTpibG9jazt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyBhIGl7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0tMXtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNkN2Q3ZDc7fVxyXG4uc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcntoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNFQUVBRUE7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuYWxlcnQtaWNvbiBpe2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm17YmFja2dyb3VuZC1jb2xvcjp3aGl0ZSAhaW1wb3J0YW50O31cclxuLm5ldy1wcm9wZXJ0aWVzLXBvcHVwY3JlYXRlLXRleHR7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVye3Bvc2l0aW9uOnN0aWNreTtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtib3R0b206MDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVyIC5idG4uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzJDNzdGNCAhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuotecustomerPropertyPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quotecustomer-property-popup',
                templateUrl: './quotecustomer-property-popup.component.html',
                styleUrls: ['./quotecustomer-property-popup.component.css']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"] }, { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_5__["PropertyService"] }, { type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }, { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_8__["GenicProfileService"] }]; }, null); })();


/***/ }),

/***/ "c8zV":
/*!*****************************************************************************!*\
  !*** ./src/app/application/quotes/quote-details/quote-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_quote_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/quote.module */ "xcKa");
/* harmony import */ var _services_property_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/property.model */ "4ebh");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _quote_customer_popup_quote_customer_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quote-customer-popup/quote-customer-popup.component */ "wRCY");
/* harmony import */ var _services_customer_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/customer.model */ "jG0A");
/* harmony import */ var _quotecustomer_property_popup_quotecustomer_property_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../quotecustomer-property-popup/quotecustomer-property-popup.component */ "WzcN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_quote_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/quote.service */ "uOqW");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/product.service */ "Gdn9");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/invoice.service */ "py7r");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/ticket.service */ "KPvW");
/* harmony import */ var _services_userlog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/userlog.service */ "V05N");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/authentication.service */ "ej43");
/* harmony import */ var _services_property_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/property.service */ "Pffd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.component */ "xJsc");
























function QuoteDetailsComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteDetailsComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteDetailsComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteDetailsComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteDetailsComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteDetailsComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteDetailsComponent_em_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r27, " ");
} }
function QuoteDetailsComponent_li_101_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteDetailsComponent_li_101_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.popolateQuote(ctx_r29.quoteService.QuoteData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Quotation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteDetailsComponent_li_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuoteDetailsComponent_li_101_a_1_Template, 2, 0, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.currentUser.Permissions.QuoteEdit);
} }
function QuoteDetailsComponent_li_102_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteDetailsComponent_li_102_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.ConvertQuoteToTicket(ctx_r32.quoteService.QuoteData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Convert to ", ctx_r31.currentUser.Ticket, "");
} }
function QuoteDetailsComponent_li_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuoteDetailsComponent_li_102_a_1_Template, 2, 1, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.currentUser.Permissions.TicketCreate);
} }
function QuoteDetailsComponent_li_103_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 107, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteDetailsComponent_li_103_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.downloadQuote(ctx_r35.quoteService.QuoteData.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Download PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteDetailsComponent_li_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Send for Client Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteDetailsComponent_li_105_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteDetailsComponent_li_105_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.copyQuotation(ctx_r37.quoteService.QuoteData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copy Quotation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteDetailsComponent_tr_121_Template(rf, ctx) { if (rf & 1) {
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
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.currentUser.Ticket, " Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.quoteService.QuoteData.TicketNo, "");
} }
function QuoteDetailsComponent_div_148_div_7_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", p_r39.UniqId, ")");
} }
function QuoteDetailsComponent_div_148_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuoteDetailsComponent_div_148_div_7_small_3_Template, 2, 1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r39.WarrantyDays, " Days warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r39.UniqId.length > 0);
} }
function QuoteDetailsComponent_div_148_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r39.Qty, " ");
} }
function QuoteDetailsComponent_div_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuoteDetailsComponent_div_148_div_7_Template, 4, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuoteDetailsComponent_div_148_div_9_Template, 2, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r39.ItemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r39.ItemDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r39.InWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r39.Type === "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", p_r39.UnitCost.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", p_r39.Total.toFixed(2), " ");
} }
function QuoteDetailsComponent_i_200_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 114);
} }
function QuoteDetailsComponent_i_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 115);
} }
function QuoteDetailsComponent_i_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 114);
} }
function QuoteDetailsComponent_i_205_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 115);
} }
function QuoteDetailsComponent_i_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 114);
} }
function QuoteDetailsComponent_i_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 115);
} }
function QuoteDetailsComponent_i_212_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 114);
} }
function QuoteDetailsComponent_i_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 115);
} }
function QuoteDetailsComponent_div_239_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "generic-ticket-icon-attachment", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("NameChange", function QuoteDetailsComponent_div_239_Template_generic_ticket_icon_attachment_NameChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const x_r46 = ctx.$implicit; return x_r46.AttachmentExtension = $event; })("PathChange", function QuoteDetailsComponent_div_239_Template_generic_ticket_icon_attachment_PathChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const x_r46 = ctx.$implicit; return x_r46.Attachment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Name", x_r46.AttachmentExtension)("Path", x_r46.Attachment)("Status", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", x_r46.Attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function QuoteDetailsComponent_i_247_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 114);
} }
function QuoteDetailsComponent_i_248_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 115);
} }
function QuoteDetailsComponent_label_250_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 114);
} }
function QuoteDetailsComponent_label_250_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 115);
} }
function QuoteDetailsComponent_label_250_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuoteDetailsComponent_label_250_i_1_Template, 1, 0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteDetailsComponent_label_250_i_2_Template, 1, 0, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.quoteService.QuoteData.LinkToInvoice === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.quoteService.QuoteData.LinkToInvoice === false);
} }
function QuoteDetailsComponent_div_251_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sale Person Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r52.quoteService.QuoteData.SalesPersonSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function QuoteDetailsComponent_div_251_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customer Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r53.quoteService.QuoteData.CustomerSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function QuoteDetailsComponent_div_251_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0\u00A0\u00A0 Signature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuoteDetailsComponent_div_251_div_10_Template, 4, 1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuoteDetailsComponent_div_251_div_11_Template, 4, 1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r26.quoteService.QuoteData.SalesPersonSignature == null ? null : ctx_r26.quoteService.QuoteData.SalesPersonSignature.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r26.quoteService.QuoteData.CustomerSignature == null ? null : ctx_r26.quoteService.QuoteData.CustomerSignature.length) > 0);
} }
class QuoteDetailsComponent {
    constructor(titleService, quoteService, productservice, toastr, router, invoiceService, ticketService, logService, loginservice, propertyService, dialog) {
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
        this.dialog = dialog;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({});
        this.isValidEmailIdToSendPDF = true;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.emailIdToSendPDF = '';
    }
    ngOnInit() {
        this.localPropertyData = new _services_property_model__WEBPACK_IMPORTED_MODULE_4__["Property"]();
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
        setTimeout(() => {
            this.localPropertyData = Object.assign({}, this.propertyService.formData);
            // alert(this.quoteService.QuoteData.InvoiceNo + '-' + this.quoteService.QuoteData.Status);
        }, 500);
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item, response, status, headers) => {
            // console.log('FileUpload:uploaded:', item, status, response);
            this.toastr.info('info', 'file Add');
            const des = 'An attachment has been Added to the Quotation No ' +
                this.quoteService.QuoteData.QuoteId + ' of Customer ' + this.quoteService.QuoteData.CustomerName +
                ' by user ' + this.currentUser.UserName;
            const Activity = 'An attachment is added to the Quotation No : ' + this.quoteService.QuoteData.QuoteId;
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation', this.quoteService.QuoteData.Id, 'Added', des, Activity).subscribe();
            this.quoteService.getQuoteAttachments(this.quoteService.QuoteData.Id);
        };
        this.uploader.onBeforeUploadItem = (file) => file.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/UploadQuoteAttachment/' + this.quoteService.QuoteData.Id;
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
        this.propertyService.formData = new _services_property_model__WEBPACK_IMPORTED_MODULE_4__["Property"]();
        this.propertyService.getPropertyData(q.PropertyId);
        this.router.navigate(['/quotes/quote-Edit']);
    }
    ConvertQuoteToInvoice(q) {
        this.invoiceService.postTempInvoice(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.invoiceService.InvoiceData = response.result;
                    this.quoteService.QuoteData = Object.assign({}, q);
                    this.invoiceService.InvoiceData.InvoiceConvertedFrom = 'QUOTE';
                    this.invoiceService.InvoiceData.InvoiceConvertedID = q.Id;
                    this.invoiceService.InvoiceData.Status = 'Draft';
                    this.invoiceService.InvoiceData.InvoiceTitle = q.JobTitle;
                    this.invoiceService.InvoiceData.CustomerName = q.CustomerName;
                    this.invoiceService.InvoiceData.CustomerAddress = q.CustomerAddress;
                    this.invoiceService.InvoiceData.CustomerId = q.CustomerId;
                    this.invoiceService.InvoiceData.PropertyId = q.PropertyId;
                    this.invoiceService.InvoiceData.CustomerContactNo = q.CustomerContactNo;
                    this.invoiceService.InvoiceData.CustomerEmail = q.CustomerEmail;
                    this.invoiceService.InvoiceData.ClientRemark = q.ClientRemark;
                    this.invoiceService.InvoiceData.InternalNotes = q.InternalNotes;
                    this.invoiceService.InvoiceData.NetAmount = q.NetAmount;
                    this.invoiceService.InvoiceData.SubTotal = q.SubTotal;
                    this.invoiceService.InvoiceData.TaxAmount = q.TaxAmount;
                    this.invoiceService.InvoiceData.TaxId = q.TaxId;
                    this.invoiceService.InvoiceData.TaxRate = q.TaxRate;
                    this.invoiceService.InvoiceData.DiscountType = q.DiscountType;
                    this.invoiceService.InvoiceData.DiscountTextValue = q.DiscountAmount;
                    this.invoiceService.InvoiceData.DiscountAmount = q.DiscountAmount;
                    this.invoiceService.InvoiceData.ReqDepositeAmount = q.ReqDepositeAmount;
                    this.invoiceService.InvoiceData.ReqDepositeTextValue = q.ReqDepositeTextValue;
                    this.invoiceService.InvoiceData.ReqDepositeType = q.ReqDepositeType;
                    this.invoiceService.InvoiceData.QuoteId = q.QuoteId;
                    // setTimeout(() => {
                    this.invoiceService.posQuoteItemToInvoiceItem(this.quoteService.QuoteData.Id, this.invoiceService.InvoiceData.Id);
                    // }, 200);
                    this.router.navigate(['/invoices/invoice-from-quote']);
                }
            }
        }, error => console.log(error));
    }
    ConvertQuoteToTicket(q) {
        this.ticketService.formData.QuoteId = q.Id;
        localStorage.setItem("QuoteId", this.ticketService.formData.QuoteId);
        this.router.navigate(['/tickets/ticket-create-from-quote']);
    }
    ConvertToPDFQuote(i) {
        if (confirm('Are you sure want to download Quotation?')) {
            const des = 'An download requrest sent by : ' + this.currentUser.UserName + ' of Quotation No : '
                + i.QuoteId + ' for Customer : '
                + i.CustomerName + ' Quotation title " ' +
                i.JobTitle + ' Amount of $ ' + i.NetAmount + '0.00 on dated : ' + new Date();
            const Activity2 = 'PDF download request is received against Quotation No : ' + this.quoteService.QuoteData.QuoteId;
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation', this.quoteService.QuoteData.Id, 'download', des, Activity2).subscribe();
            this.toastr.success('success', 'Quotation copy is send to your registered email');
        }
    }
    copyQuotation(q) {
        this.OpenAddCustomerToQuoteDialog(q);
    }
    OpenAddCustomerToQuoteDialog(q) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {};
        this.dialog.open(_quote_customer_popup_quote_customer_popup_component__WEBPACK_IMPORTED_MODULE_6__["QuoteCustomerPopupComponent"], dialogConfig).afterClosed().subscribe(res => {
            if (res !== '') {
                this.customerData = new _services_customer_model__WEBPACK_IMPORTED_MODULE_7__["Customer"]();
                this.customerData = res.x;
                this.localQuoteData = new _services_quote_module__WEBPACK_IMPORTED_MODULE_3__["Quote"]();
                this.OpenAddCustomerPropertyQuoteDialog(q);
                this.quoteService.getCustomerProperty(res.x.Id);
                this.quoteService.QuoteData.CustomerId = res.x.Id;
                setTimeout(() => {
                    this.invoiceService.refrestArrayofKeyslist(res.x.Id);
                }, 200);
            }
        });
    }
    OpenAddCustomerPropertyQuoteDialog(q) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.data = {};
        this.dialog.open(_quotecustomer_property_popup_quotecustomer_property_popup_component__WEBPACK_IMPORTED_MODULE_8__["QuotecustomerPropertyPopupComponent"], dialogConfig).afterClosed().subscribe(res => {
            this.quoteService.setDetaultQuoteData();
            this.quoteService.QuoteData.CustomerId = this.customerData.Id;
            this.quoteService.QuoteData.CompanyName = this.customerData.CompanyName;
            if (this.invoiceService.ArrayofKeys.length > 0) {
                this.quoteService.QuoteData.CustomerEmail = this.invoiceService.ArrayofKeys.filter(d => d.IsDefault === true && d.Type === 'Email')[0].Value;
                this.quoteService.QuoteData.CustomerContactNo = this.invoiceService.ArrayofKeys.filter(d => d.IsDefault === true && d.Type === 'Phone')[0].Value;
            }
            this.quoteService.QuoteData.CustomerAddress = this.quoteService.PropertyList[0].AddressStreet1 + ' ' + this.quoteService.PropertyList[0].AddressStreet2 + ' ' + this.quoteService.PropertyList[0].AddressUnitNo + ' ' + this.quoteService.PropertyList[0].AddressCountry + ' ' + this.quoteService.PropertyList[0].AddressZipCode;
            this.quoteService.postTempQuote(this.currentUser.Token).subscribe(resq => {
                if (res) {
                    const response = resq;
                    if (response.Message === 'success') {
                        this.quoteService.QuoteData = response.result;
                    }
                    if (response.Message === 'failure') {
                    }
                }
            }, error => console.log(error));
            if (res !== '') {
                this.customerPropertyData = new _services_property_model__WEBPACK_IMPORTED_MODULE_4__["Property"]();
                this.customerPropertyData = res.x;
                this.localQuoteData.CompanyName = this.customerData.CompanyName;
                this.localQuoteData.CustomerName = this.customerPropertyData.CustomerName;
                this.localQuoteData.CustomerId = this.customerPropertyData.CustomerId;
                this.localQuoteData.PropertyId = this.customerPropertyData.Id;
                this.localQuoteData.CustomerEmail = this.quoteService.QuoteData.CustomerEmail;
                this.localQuoteData.CustomerAddress = this.customerPropertyData.AddressStreet1 + ' ' + this.customerPropertyData.AddressStreet2 + ' ' + this.customerPropertyData.AddressUnitNo + ' ' + this.customerPropertyData.AddressCountry + ' ' + this.customerPropertyData.AddressZipCode;
                this.propertyService.formData = res.x;
                setTimeout(() => {
                    this.quoteService.copyQuotation(this.quoteService.QuoteData.Id, q.Id);
                    this.quoteService.QuoteData.CompanyName = this.localQuoteData.CompanyName;
                    this.quoteService.QuoteData.CustomerName = this.localQuoteData.CustomerName;
                    this.quoteService.QuoteData.CustomerId = this.localQuoteData.CustomerId;
                    this.quoteService.QuoteData.PropertyId = this.localQuoteData.PropertyId;
                    this.quoteService.QuoteData.CustomerAddress = this.localQuoteData.CustomerAddress;
                    this.quoteService.QuoteData.CustomerEmail = this.localQuoteData.CustomerEmail;
                    this.quoteService.QuoteData.JobTitle = q.JobTitle;
                    this.quoteService.QuoteData.InternalNotes = q.InternalNotes;
                    this.quoteService.QuoteData.ClientRemark = q.ClientRemark;
                    this.quoteService.QuoteData.SubTotal = Number(q.SubTotal);
                    this.quoteService.QuoteData.DiscountType = q.DiscountType;
                    this.quoteService.QuoteData.DiscountTextValue = Number(q.DiscountTextValue);
                    this.quoteService.QuoteData.DiscountAmount = Number(q.DiscountAmount);
                    this.quoteService.QuoteData.TaxId = q.TaxId;
                    this.quoteService.QuoteData.TaxRate = Number(q.TaxRate);
                    this.quoteService.QuoteData.TaxAmount = Number(q.TaxAmount);
                    this.quoteService.QuoteData.NetAmount = (Number(q.SubTotal) + Number(q.TaxAmount) - Number(q.DiscountAmount));
                    this.quoteService.QuoteData.InternalNotes = q.InternalNotes;
                    this.quoteService.QuoteData.ClientViewQty = q.ClientViewQty;
                    this.quoteService.QuoteData.ClientViewUnitCost = q.ClientViewUnitCost;
                    this.quoteService.QuoteData.ClientViewLineItemTotal = q.ClientViewLineItemTotal;
                    this.quoteService.QuoteData.ClientViewTotal = q.ClientViewTotal;
                    this.quoteService.QuoteData.LinkToJob = q.LinkToJob;
                    this.quoteService.QuoteData.LinkToInvoice = q.LinkToInvoice;
                    this.quoteService.QuoteData.Rating = q.Rating;
                    this.quoteService.QuoteData.CCName = q.CCName;
                    this.quoteService.QuoteData.CCContact = q.CCContact;
                    this.quoteService.QuoteData.DID = q.DID;
                    this.quoteService.QuoteData.FAX = q.FAX;
                    this.quoteService.QuoteData.QuoteTermsAndCondition = q.QuoteTermsAndCondition;
                    this.quoteService.QuoteData.SalesRepresentative = q.SalesRepresentative;
                    this.quoteService.QuoteData.PreparedBy = q.PreparedBy;
                    this.quoteService.QuoteData.Attention = q.Attention;
                    this.router.navigate(['/quotes/quote-Add']);
                }, 1000);
            }
        });
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
    SendQuoteByMail(i) {
        let emailText = this.emailIdToSendPDF;
        if (emailText === '') {
            this.isValidEmailIdToSendPDF = false;
            alert('Email can not be emplty.');
            return false;
        }
        else {
            let element = document.getElementById('btnCLoseremail');
            element.click();
            this.isValidEmailIdToSendPDF = true;
            this.quoteService.sendForClientSign(this.quoteService.QuoteData.Id, emailText)
                .subscribe(res => {
                if (res) {
                    this.toastr.success('success', 'Quotation link is send to client email for signature');
                    const des = 'A Quotation send for signature , Quitation Id is  : '
                        + i.QuoteId + ' for Customer : '
                        + i.CustomerName + ' Quotation title " ' +
                        i.JobTitle + ' Amount of $ ' + i.NetAmount + '0.00 on dated : ' + new Date();
                    const Activity3 = 'An email request received against Quotation No : ' + this.quoteService.QuoteData.QuoteId +
                        ' on mail id : ' + this.quoteService.QuoteData.CustomerEmail;
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Quotation', this.quoteService.QuoteData.Id, 'Email', des, Activity3).subscribe();
                }
            }, error => console.log(error));
        }
    }
}
QuoteDetailsComponent.ɵfac = function QuoteDetailsComponent_Factory(t) { return new (t || QuoteDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quote_service__WEBPACK_IMPORTED_MODULE_10__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_invoice_service__WEBPACK_IMPORTED_MODULE_14__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_service__WEBPACK_IMPORTED_MODULE_15__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userlog_service__WEBPACK_IMPORTED_MODULE_16__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_18__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
QuoteDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteDetailsComponent, selectors: [["app-quote-details"]], decls: 269, vars: 48, consts: [["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid", "breadcud-kt-container"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/quotes", 1, "kt-subheader__breadcrumbs-link"], [1, "new-request-main-section", "jobs-for-client-section"], [1, "kt-container", "kt-container--fluid"], [1, "new-requst-filter_form"], [1, ""], [1, "col-md-12", "section-client-requst-form"], [1, "kt-section", "kt-customer-list-view-section", "uppercase"], [1, "flaticon-list", "pending-view-page-list"], ["class", "view-pending", 4, "ngIf"], [1, "quote-view-top"], [1, "row"], [1, "col-md-7"], [1, "quote-1-top"], [1, "table-quote"], [1, "table"], [1, "kt-widget4__sub"], ["target", "_blank", 3, "href"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "quote-right-view", "text-right"], [1, "table-right-quote", "text-right"], ["onclick", "window.history.back()", 1, "btn", "btn-primary", 2, "margin-right", "3px", "color", "white", "padding", "6px 10px 7px 10px", "cursor", "pointer"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:void(0);", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "line-height", "19px"], [1, "caret"], [1, "dropdown-menu", 2, "text-align", "center"], [4, "ngIf"], [1, "col-md-12", "new-request-service-details-form"], [1, "col-md-12", "job-for-tab-content"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "row--"], [1, "kt-portlet__body", 2, "padding", "0px !important"], [1, "col-md-12--", "kt-portlet-body-1", 2, "width", "100%"], [1, "tab-content"], ["id", "kt_widget11_tab1_content", 1, "tab-pane", "active"], [1, "kt-widget11"], ["id", "kt_repeater_1"], [1, "row", "quote-row", 2, "height", "50px"], [1, "col-md-6"], [1, "product-service-colun-name"], [1, "col-md-2"], [1, "product-service-colun-name", "kt-align-right"], [1, "add-data-ticket-list-view"], ["class", "row col-md-12", 4, "ngFor", "ngForOf"], ["data-repeater-list", "", 1, "col-lg-12"], [1, "add-invoicing-view-list-border"], [1, "kt-widget4"], [1, "kt-widget4__item"], [1, "col-md-5", "no-spacing"], [1, "col-md-7", "invoicing-list-view-border-left"], [1, "kt-widget1"], [1, "kt-widget1__item"], [1, "kt-widget1__info"], [1, "kt-widget1__title"], [1, "kt-widget1__number", "kt-font-success"], [1, "discountSection"], [1, "discountShow"], [1, "tax-block"], [1, "TaxToHide"], [1, "kt-widget1__item", "quotes-list-view-total-info"], [1, "kt-widget1__number", "kt-font-primary"], [1, "row--", 2, "display", "none"], [1, "clientViewSection"], [1, "form-group"], [1, "clView"], ["aria-hidden", "true", 1, "fa", "fa-eye"], [1, "kt-checkbox-inline"], [1, "kt-checkbox"], ["class", "fa fa-check", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-times", "aria-hidden", "true", 4, "ngIf"], [1, "on-site-client-required"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19", "internal-notes-attachment"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "kt-portlet__body"], [1, "kt-widget19__wrapper"], ["name", "QuoteTermsAndCondition", "readonly", "", "id", "QuoteTermsAndCondition", "rows", "3", "maxlength", "1024", "placeholder", "QuoteTerms And Condition", 1, "form-control", 3, "ngModel", "ngModelChange"], ["data-container", "body", "data-toggle", "kt-popover", "data-placement", "top", "data-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "data-original-title", "", "title", "", 1, "tooltip-questionMark"], ["readonly", "", "id", "exampleTextarea", "rows", "3", "placeholder", "Note details", "name", "InternalNotes", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col-md-1", 4, "ngFor", "ngForOf"], [1, "linkNote"], ["class", "kt-checkbox", 4, "ngIf"], ["class", "on-site-client-required", 4, "ngIf"], ["id", "emailConfirmPopup", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "myManFaContent"], [1, "modal-header", 2, "background-color", "aqua"], [1, "modal-title"], ["type", "button", "id", "btnCLoseremail", "data-dismiss", "modal", 1, "close"], [1, "modal-body", "my-Model-body"], [1, "col-md-12"], [1, "editableEmailSection"], ["type", "text", "required", "", "placeholder", "Email..", "name", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "submitSEction"], ["href", "javascript:void(0)", 1, "btn", "btn-success", 3, "click"], [1, "view-pending"], ["href", "javascript:void(0);", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", 3, "click"], ["pdfDownlad", ""], ["data-toggle", "modal", "data-target", "#emailConfirmPopup", "href", "javascript:void(0);"], [1, "row", "col-md-12"], [1, "product-service-colun-name", "invoice-list-view-product-service"], ["class", "product-service-colun-name kt-align-right", 4, "ngIf"], [1, "myshap"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "col-md-1"], [3, "Name", "Path", "Status", "NameChange", "PathChange"], [1, "col-md-4"], [1, "fa", "fa-download", "text-success"], ["class", "col-lg-6", 4, "ngIf"], [1, "col-lg-6"], [3, "src"]], template: function QuoteDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, QuoteDetailsComponent_span_25_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, QuoteDetailsComponent_span_26_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, QuoteDetailsComponent_span_27_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, QuoteDetailsComponent_span_28_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, QuoteDetailsComponent_span_29_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, QuoteDetailsComponent_span_30_Template, 2, 0, "span", 17);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, QuoteDetailsComponent_em_55_Template, 3, 1, "em", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Contact: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Attention: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Quote Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "More Action's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, QuoteDetailsComponent_li_101_Template, 2, 1, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, QuoteDetailsComponent_li_102_Template, 2, 1, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, QuoteDetailsComponent_li_103_Template, 4, 0, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, QuoteDetailsComponent_li_104_Template, 3, 0, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, QuoteDetailsComponent_li_105_Template, 3, 0, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Quote Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, QuoteDetailsComponent_tr_121_Template, 7, 2, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " SERVICES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " QTY. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " UNIT COST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " TOTAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, QuoteDetailsComponent_div_148_Template, 17, 6, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Client View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Adjust what your client will see on this quote. To change the default for \u200Ball future quotes, visit the PDF Configuration. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](200, QuoteDetailsComponent_i_200_Template, 1, 0, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](201, QuoteDetailsComponent_i_201_Template, 1, 0, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Quantities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](204, QuoteDetailsComponent_i_204_Template, 1, 0, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](205, QuoteDetailsComponent_i_205_Template, 1, 0, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Unit Cost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](208, QuoteDetailsComponent_i_208_Template, 1, 0, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](209, QuoteDetailsComponent_i_209_Template, 1, 0, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Line item totals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](212, QuoteDetailsComponent_i_212_Template, 1, 0, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](213, QuoteDetailsComponent_i_213_Template, 1, 0, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Total ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h3", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " \u00A0\u00A0\u00A0 TERMS & CONDITIONS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "textarea", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteDetailsComponent_Template_textarea_ngModelChange_224_listener($event) { return ctx.quoteService.QuoteData.QuoteTermsAndCondition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h3", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "\u00A0\u00A0\u00A0ADDITIONAL REMARKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "textarea", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteDetailsComponent_Template_textarea_ngModelChange_237_listener($event) { return ctx.quoteService.QuoteData.InternalNotes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](239, QuoteDetailsComponent_div_239_Template, 9, 4, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Link note to related");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](247, QuoteDetailsComponent_i_247_Template, 1, 0, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](248, QuoteDetailsComponent_i_248_Template, 1, 0, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](250, QuoteDetailsComponent_label_250_Template, 4, 2, "label", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](251, QuoteDetailsComponent_div_251_Template, 12, 2, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "EMAIL QUOTATION PDF!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "button", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Change mail here to send quotation pdf!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteDetailsComponent_Template_input_ngModelChange_265_listener($event) { return ctx.emailIdToSendPDF = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteDetailsComponent_Template_a_click_267_listener() { return ctx.SendQuoteByMail(ctx.quoteService.QuoteData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Send");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteService.QuoteData.JobTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://maps.google.com/?q=", ctx.quoteService.QuoteData.CustomerAddress, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteService.QuoteData.CustomerAddress == null ? null : ctx.quoteService.QuoteData.CustomerAddress.split(","));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteService.QuoteData.CustomerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteService.QuoteData.CustomerEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteService.QuoteData.CustomerContactNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteService.QuoteData.Attention, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.Status === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.TicketNo === null && ctx.quoteService.QuoteData.Status == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.Status === 3 || ctx.quoteService.QuoteData.Status === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.Status == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.QuoteCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteService.QuoteData.QuoteId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 46, ctx.quoteService.QuoteData.CreatedUtcDate), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.LinkToJob === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteService.QuoteData.LinkToJob === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.InvoiceView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.quoteService.QuoteData.SalesPersonSignature == null ? null : ctx.quoteService.QuoteData.SalesPersonSignature.length) > 0 || (ctx.quoteService.QuoteData.CustomerSignature == null ? null : ctx.quoteService.QuoteData.CustomerSignature.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailIdToSendPDF);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["RequiredValidator"], _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_21__["TicketIconAttachmentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]], styles: [".ticket-attachment-container[_ngcontent-%COMP%] { position: relative; width: 100%; }\r\n    .ticket-attachment-image[_ngcontent-%COMP%] {display: block; width: 100%; height: auto; }\r\n    .ticket-attachment-overlay[_ngcontent-%COMP%] {position: absolute;bottom: 0;left: 100%;right: 0;background-color: rgb(162, 176, 180);overflow: hidden; width: 0;height: 100%;transition: .5s ease;text-align: center;}\r\n    .ticket-attachment-container[_ngcontent-%COMP%]:hover   .ticket-attachment-overlay[_ngcontent-%COMP%] {width: 100%;left: 0;}\r\n    .ticket-attachment-text[_ngcontent-%COMP%] {white-space: nowrap; color: white; font-size: 20px; position: absolute; overflow: hidden;top: 50%; left: 50%; transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);}\r\n    .ticket-attachment-remove-text[_ngcontent-%COMP%] {white-space: nowrap;color: white;font-size: 20px;position: absolute;overflow: hidden;bottom: 10%;left: 50%; transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);}\r\n    .file-upload[_ngcontent-%COMP%] {position: relative;display: inline-block;}\r\n    .file-upload__label[_ngcontent-%COMP%] {display: block;padding: 1em 1em;color: #fff; background: #b1a4a4; border-radius: .4em;font-size: 22px; height: 100%;transition: background .3s;}\r\n    .file-upload__label[_ngcontent-%COMP%]:hover {cursor: pointer;background: rgb(204, 198, 198); }\r\n    .file-upload__input[_ngcontent-%COMP%] {position: absolute;left: 0;top: 0;right: 0;bottom: 0;font-size: 1; width:0;height: 100%;opacity: 0;}\r\n    i.fa.fa-eye[_ngcontent-%COMP%] {\r\n        margin: 13px 0 0 0;\r\n        color: green;\r\n        padding: 0 10px 0 0;\r\n        font-size: 20px;\r\n      }\r\n    .clView[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        font-size: 17px;\r\n        color: #258000;\r\n      }\r\n    .kt-checkbox-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding: 0 !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcXVvdGVzL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQixrQkFBa0IsRUFBRSxXQUFXLEVBQUU7SUFDNUQsMEJBQTBCLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFO0lBQ3JFLDRCQUE0QixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxvQ0FBb0MsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO0lBQ2xNLCtEQUErRCxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQ25GLHlCQUF5QixtQkFBbUIsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0NBQWdDLENBQUMsb0NBQW9DLENBQUM7SUFDN00sZ0NBQWdDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQyxvQ0FBb0MsQ0FBQztJQUNsTixjQUFjLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDO0lBQ3ZELHFCQUFxQixjQUFjLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsMEJBQTBCLENBQUM7SUFDcEssMkJBQTJCLGVBQWUsQ0FBQyw4QkFBOEIsRUFBRTtJQUMzRSxxQkFBcUIsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUN4SDtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGVBQWU7TUFDakI7SUFFQTtRQUNFLGVBQWU7UUFDZixjQUFjO01BQ2hCO0lBQ0EsMEJBQTBCLHFCQUFxQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vcXVvdGVzL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpY2tldC1hdHRhY2htZW50LWNvbnRhaW5lciB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDEwMCU7IH1cclxuICAgIC50aWNrZXQtYXR0YWNobWVudC1pbWFnZSB7ZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IH1cclxuICAgIC50aWNrZXQtYXR0YWNobWVudC1vdmVybGF5IHtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiAwO2xlZnQ6IDEwMCU7cmlnaHQ6IDA7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMTc2LCAxODApO292ZXJmbG93OiBoaWRkZW47IHdpZHRoOiAwO2hlaWdodDogMTAwJTt0cmFuc2l0aW9uOiAuNXMgZWFzZTt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gICAgLnRpY2tldC1hdHRhY2htZW50LWNvbnRhaW5lcjpob3ZlciAudGlja2V0LWF0dGFjaG1lbnQtb3ZlcmxheSB7d2lkdGg6IDEwMCU7bGVmdDogMDt9XHJcbiAgICAudGlja2V0LWF0dGFjaG1lbnQtdGV4dCB7d2hpdGUtc3BhY2U6IG5vd3JhcDsgY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDIwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgb3ZlcmZsb3c6IGhpZGRlbjt0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTstbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7fVxyXG4gICAgLnRpY2tldC1hdHRhY2htZW50LXJlbW92ZS10ZXh0IHt3aGl0ZS1zcGFjZTogbm93cmFwO2NvbG9yOiB3aGl0ZTtmb250LXNpemU6IDIwcHg7cG9zaXRpb246IGFic29sdXRlO292ZXJmbG93OiBoaWRkZW47Ym90dG9tOiAxMCU7bGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTstbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7fVxyXG4gICAgLmZpbGUtdXBsb2FkIHtwb3NpdGlvbjogcmVsYXRpdmU7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuICAgIC5maWxlLXVwbG9hZF9fbGFiZWwge2Rpc3BsYXk6IGJsb2NrO3BhZGRpbmc6IDFlbSAxZW07Y29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICNiMWE0YTQ7IGJvcmRlci1yYWRpdXM6IC40ZW07Zm9udC1zaXplOiAyMnB4OyBoZWlnaHQ6IDEwMCU7dHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7fVxyXG4gICAgLmZpbGUtdXBsb2FkX19sYWJlbDpob3ZlciB7Y3Vyc29yOiBwb2ludGVyO2JhY2tncm91bmQ6IHJnYigyMDQsIDE5OCwgMTk4KTsgfSAgXHJcbiAgICAuZmlsZS11cGxvYWRfX2lucHV0IHtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMDt0b3A6IDA7cmlnaHQ6IDA7Ym90dG9tOiAwO2ZvbnQtc2l6ZTogMTsgd2lkdGg6MDtoZWlnaHQ6IDEwMCU7b3BhY2l0eTogMDt9XHJcbiAgICBpLmZhLmZhLWV5ZSB7XHJcbiAgICAgICAgbWFyZ2luOiAxM3B4IDAgMCAwO1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5jbFZpZXcgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogIzI1ODAwMDtcclxuICAgICAgfVxyXG4gICAgICAua3QtY2hlY2tib3gtaW5saW5lIGxhYmVse3BhZGRpbmc6IDAgIWltcG9ydGFudDt9Il19 */", ".myshap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .job-for-tab-content[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--height-fluid.kt-widget19[_ngcontent-%COMP%] {\n    border: 1px solid #eaeaea;\n    padding: 14px 9px 0 10px !important;\n  }\n\n  .dropdown-menu.show[_ngcontent-%COMP%] {\n    transform: translate3d(-61px, 38px, 0px) !important;\n  }\n\n  .dropdown-menu.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-bottom: 1px solid gainsboro;\n  }\n\n  .dropdown-menu.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n\n  .dropdown-menu.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 6 0 6px 42px;\n  }\n\n  .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    background-color: #ff8533 !important;\n  }\n\n  .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #fff !important;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-details',
                templateUrl: './quote-details.component.html',
                styleUrls: ['./quote-details.component.css'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] }, { type: _services_quote_service__WEBPACK_IMPORTED_MODULE_10__["QuoteService"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }, { type: _services_invoice_service__WEBPACK_IMPORTED_MODULE_14__["InvoiceService"] }, { type: _services_ticket_service__WEBPACK_IMPORTED_MODULE_15__["TicketService"] }, { type: _services_userlog_service__WEBPACK_IMPORTED_MODULE_16__["UserlogService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"] }, { type: _services_property_service__WEBPACK_IMPORTED_MODULE_18__["PropertyService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "mbav":
/*!*******************************************************!*\
  !*** ./src/app/services/CommanExtendsClass.module.ts ***!
  \*******************************************************/
/*! exports provided: ReminderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderBase", function() { return ReminderBase; });
class ReminderBase {
}


/***/ }),

/***/ "wRCY":
/*!*******************************************************************************************!*\
  !*** ./src/app/application/quotes/quote-customer-popup/quote-customer-popup.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: QuoteCustomerPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteCustomerPopupComponent", function() { return QuoteCustomerPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "o0su");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/customer.service */ "0zL+");
/* harmony import */ var _services_quote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/quote.service */ "uOqW");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function QuoteCustomerPopupComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCustomerPopupComponent_div_5_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCustomerPopupComponent_div_5_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.redirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create new client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCustomerPopupComponent_div_5_div_11_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const x_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r8.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", x_r7.CompanyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r7.CompanyName);
} }
function QuoteCustomerPopupComponent_div_5_div_11_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const x_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r7.CustomerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", x_r7.CompanyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r7.CompanyName);
} }
function QuoteCustomerPopupComponent_div_5_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", x_r7.NameTitle, " ", x_r7.FirstName, " ", x_r7.LastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r7.CompanyName, " ");
} }
function QuoteCustomerPopupComponent_div_5_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r7.CompanyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", x_r7.NameTitle, " ", x_r7.FirstName, " ", x_r7.LastName, " ");
} }
function QuoteCustomerPopupComponent_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCustomerPopupComponent_div_5_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const x_r7 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onClick(x_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteCustomerPopupComponent_div_5_div_11_img_2_Template, 1, 3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuoteCustomerPopupComponent_div_5_div_11_img_3_Template, 1, 3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteCustomerPopupComponent_div_5_div_11_div_4_Template, 5, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuoteCustomerPopupComponent_div_5_div_11_div_5_Template, 5, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r7.CustomerLogo === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r7.CustomerLogo !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !x_r7.UseCompanyNameAsPrimaryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r7.UseCompanyNameAsPrimaryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r7.Properties.length, " Properties");
} }
function QuoteCustomerPopupComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Which Company would you like to create this quotation for?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function QuoteCustomerPopupComponent_div_5_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onkeypress($event.target.value); })("keyup", function QuoteCustomerPopupComponent_div_5_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onkeypress($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteCustomerPopupComponent_div_5_div_6_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteCustomerPopupComponent_div_5_a_8_Template, 3, 0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuoteCustomerPopupComponent_div_5_div_11_Template, 8, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.Permissions.CustomerCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.Permissions.CustomerCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.LocalList);
} }
function QuoteCustomerPopupComponent_div_6_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCustomerPopupComponent_div_6_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCustomerPopupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create New Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteCustomerPopupComponent_div_6_Template_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.customerservice.formData.NameTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mrs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ms.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mss.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteCustomerPopupComponent_div_6_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.customerservice.formData.FirstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteCustomerPopupComponent_div_6_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.customerservice.formData.LastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Company Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteCustomerPopupComponent_div_6_Template_input_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.customerservice.formData.CompanyName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteCustomerPopupComponent_div_6_Template_input_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.customerservice.formData.UseCompanyNameAsPrimaryName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Use company name as the primary name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteCustomerPopupComponent_div_6_Template_input_ngModelChange_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.customerservice.formData.AddressStreet1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteCustomerPopupComponent_div_6_Template_input_ngModelChange_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.customerservice.formData.AddressStreet2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCustomerPopupComponent_div_6_Template_button_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.onBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCustomerPopupComponent_div_6_Template_button_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, QuoteCustomerPopupComponent_div_6_div_81_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, QuoteCustomerPopupComponent_div_6_div_82_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r1.isValidTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.NameTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r1.isValidFirstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.FirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r1.isValidLastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.LastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r1.isValidCompanyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.CompanyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.UseCompanyNameAsPrimaryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r1.isValidEmailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.AddressStreet1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r1.isValidPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.AddressStreet2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isDone);
} }
class QuoteCustomerPopupComponent {
    constructor(dialogRef, loginservice, customerservice, quoteService, toastr) {
        this.dialogRef = dialogRef;
        this.loginservice = loginservice;
        this.customerservice = customerservice;
        this.quoteService = quoteService;
        this.toastr = toastr;
        this.IsCustomerCreate = true;
        this.isValidTitle = true;
        this.isValidFirstname = true;
        this.isValidLastname = true;
        this.isValidCompanyname = true;
        this.isValidEmailAddress = true;
        this.isValidPhoneNumber = true;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.isDone = false;
    }
    ngOnInit() {
        this.LocalList = [];
        this.refreshcustomerlist();
    }
    refreshcustomerlist() {
        this.customerservice.getCustomerListSync(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.customerservice.CustomerList = response.result;
                    setTimeout(() => {
                        this.customerservice.CustomerLocalList = [];
                        this.customerservice.CustomerLocalList = this.customerservice.CustomerList.filter(x => x.Status === true);
                        this.LocalList = this.customerservice.CustomerLocalList;
                    }, 200);
                }
            }
        }, error => console.log(error));
    }
    onClick(x) {
        if (x === undefined) {
            this.dialogRef.close();
        }
        else {
            this.dialogRef.close({ x });
            this.customerservice.formData = Object.assign({}, x);
        }
    }
    redirect() {
        this.customerservice.formData.NameTitle = '';
        this.customerservice.formData.FirstName = '';
        this.customerservice.formData.LastName = '';
        this.customerservice.formData.CompanyName = '';
        this.customerservice.formData.UseCompanyNameAsPrimaryName = true;
        this.customerservice.formData.AddressStreet1 = '';
        this.customerservice.formData.AddressStreet2 = '';
        this.IsCustomerCreate = false;
    }
    onBack() {
        this.IsCustomerCreate = true;
    }
    onSubmit() {
        this.isValidTitle = true;
        this.isValidFirstname = true;
        this.isValidLastname = true;
        this.isValidCompanyname = true;
        this.isValidEmailAddress = true;
        this.isValidPhoneNumber = true;
        if (this.customerservice.formData.NameTitle === '' || this.customerservice.formData.NameTitle === undefined) {
            this.isValidTitle = false;
            this.toastr.warning('', 'Title is required!');
            return false;
        }
        if (this.customerservice.formData.FirstName === '' || this.customerservice.formData.FirstName === undefined) {
            this.isValidFirstname = false;
            this.toastr.warning('', 'First Name is required!');
            return false;
        }
        if (this.customerservice.formData.LastName === '' || this.customerservice.formData.LastName === undefined) {
            this.isValidLastname = false;
            this.toastr.warning('', 'Last Name is required!');
            return false;
        }
        if (this.customerservice.formData.CompanyName === '' || this.customerservice.formData.CompanyName === undefined) {
            this.isValidCompanyname = false;
            this.toastr.warning('', 'Company Name is required!');
            return false;
        }
        if (this.customerservice.formData.AddressStreet1 === '' || this.customerservice.formData.AddressStreet1 === undefined) {
            this.isValidEmailAddress = false;
            this.toastr.warning('', 'Email Address is required!');
            return false;
        }
        if (this.customerservice.formData.AddressStreet2 === '' || this.customerservice.formData.AddressStreet2 === undefined) {
            this.isValidPhoneNumber = false;
            this.toastr.warning('', 'Phone Number is required!');
            return false;
        }
        this.isDone = true;
        this.customerservice.AddNewCustomer(this.currentUser.Token)
            .subscribe(res => {
            const response = res;
            if (response.Message === 'success') {
                this.toastr.success('success', 'User ' +
                    this.customerservice.formData.NameTitle + ' ' +
                    this.customerservice.formData.FirstName + ' ' +
                    this.customerservice.formData.LastName +
                    ' is added Successfully!');
                this.customerservice.formData = res;
                this.isDone = false;
                this.refreshcustomerlist();
                this.IsCustomerCreate = true;
            }
            if (response.Message === 'failure') {
                this.toastr.warning('warning', response.MessageDescription);
                this.isDone = false;
            }
        }, error => console.log(error));
    }
    onkeypress(value) {
        this.LocalList = this.customerservice.CustomerLocalList.filter(item => item.CompanyName.toLowerCase().match(value.toLowerCase()) ||
            item.FirstName.toLowerCase().match(value.toLowerCase()) ||
            item.LastName.toLowerCase().match(value.toLowerCase()));
    }
}
QuoteCustomerPopupComponent.ɵfac = function QuoteCustomerPopupComponent_Factory(t) { return new (t || QuoteCustomerPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quote_service__WEBPACK_IMPORTED_MODULE_5__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
QuoteCustomerPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteCustomerPopupComponent, selectors: [["app-quote-customer-popup"]], decls: 7, vars: 2, consts: [[1, "modal-header", "select-new-properties"], ["id", "exampleModalLabel", 1, "modal-title"], ["mat-dialog-close", "", 1, "btn", "btn-default", "pull-right"], ["class", "modal-body property-modal-body", 4, "ngIf"], [1, "modal-body", "property-modal-body"], [1, "row", "forn-group"], [1, "col-md-7"], ["type", "text", "placeholder", "Search Clients...", 1, "form-control", 3, "keydown", "keyup"], ["class", "col-md-1 text-center", 4, "ngIf"], [1, "col-md-4", "text-right"], ["on", "", "class", "btn btn-brand text-white ", 3, "click", 4, "ngIf"], [1, "kt-portlet__body", "new_clients_properties_body"], ["data-scroll", "true", "data-height", "220", "id", "style-3", 1, "kt-widget4", "kt-scroll", "ps", 2, "height", "220px", "overflow", "hidden"], ["class", "kt-widget4__item create-quote-client-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-1", "text-center"], ["on", "", 1, "btn", "btn-brand", "text-white", 3, "click"], [1, "la", "la-plus"], [1, "kt-widget4__item", "create-quote-client-item", 3, "click"], [1, "kt-widget4__pic", "kt-widget4__pic--logo"], ["width", "30px", 3, "src", "alt", "title", 4, "ngIf"], ["class", "kt-widget4__info", 4, "ngIf"], [1, "kt-widget4__number", "kt-font-brand"], ["width", "30px", 3, "src", "alt", "title"], [1, "kt-widget4__info"], ["href", "javascript:;", 1, "kt-widget4__title"], [1, ""], [1, "row"], [1, "col-xl-2"], [1, "form-group"], ["for", "", 1, "label", "whole-text-required"], [1, "text-danger"], ["name", "NameTitle", 1, "form-control", 3, "ngModel", "ngModelChange"], ["NameTitle", "ngModel"], ["value", ""], ["value", "Mrs."], ["value", "Mr."], ["value", "Ms."], ["value", "Mss."], ["value", "Dr."], [1, "col-xl-5"], ["name", "FirstName", "placeholder", "First Name", "min", "0", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FirstName", "ngModel"], ["for", "", 1, "label"], ["name", "LastName", "placeholder", "Last Name", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["LastName", "ngModel"], [1, "col-lg-12"], ["name", "CompanyName", "placeholder", "Company Name", "maxlength", "128", 1, "form-control", 3, "ngModel", "ngModelChange"], ["CompanyName", "ngModel"], [1, "kt-switch", "kt-switch--icon", "kt-switch--brand"], ["name", "customerservice.formData.UseCompanyNameAsPrimaryName", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["UseCompanyNameAsPrimaryName", "ngModel"], [1, "swither-bootstrap-learn", "switcher-customer"], [1, "ch-margin-top"], [1, "col-xl-6"], ["name", "AddressStreet1", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressStreet1", "ngModel"], ["name", "AddressStreet2", "placeholder", "Phone Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressStreet2", "ngModel"], [1, "col-xl-12"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-angle-double-left"], ["type", "submit", 1, "btn", "btn-brand", 3, "click"], [4, "ngIf"]], template: function QuoteCustomerPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select or create a Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuoteCustomerPopupComponent_div_5_Template, 12, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteCustomerPopupComponent_div_6_Template, 83, 21, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsCustomerCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsCustomerCreate);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"]], styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\r\n.ch-margin-top[_ngcontent-%COMP%] {display: ruby-text-container;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcXVvdGVzL3F1b3RlLWN1c3RvbWVyLXBvcHVwL3F1b3RlLWN1c3RvbWVyLXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQztBQUMxRCxvQ0FBb0MsbUJBQW1CLENBQUM7QUFDeEQseUNBQXlDLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN0Ryx1Q0FBdUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztBQUNsRSxnQ0FBZ0Msd0JBQXdCLENBQUM7QUFDekQsa0NBQWtDLGNBQWMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBQzdFLGlDQUFpQyxrQkFBa0IsQ0FBQztBQUNwRCxpQ0FBaUMsd0JBQXdCLENBQUM7QUFDMUQsNkJBQTZCLHNCQUFzQixDQUFDLFdBQVcsQ0FBQztBQUNoRSwwQ0FBMEMsZ0JBQWdCLENBQUM7QUFDM0QsOENBQThDLDBCQUEwQixDQUFDO0FBQ3pFLHlCQUF5QiwwQkFBMEIsQ0FBQyxrQkFBa0IsQ0FBQztBQUN2RSxlQUFlLHdCQUF3QixDQUFDLHlCQUF5QixDQUFDO0FBQ2xFLDRCQUE0QixVQUFVLENBQUMseUJBQXlCLENBQUM7QUFDakUsa0NBQWtDLHlCQUF5QixDQUFDO0FBQzVELHdFQUF3RSx5QkFBeUIsQ0FBQyxjQUFjO0FBQ2hILHlHQUF5RyxrQkFBa0IsRUFBRTtBQUM3SCxrREFBa0Qsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3ZGLHdEQUF3RCx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7QUFDL0YscUVBQXFFLFdBQVcsQ0FBQztBQUNqRiw2Q0FBNkMsV0FBVyxDQUFDO0FBQ3pELDJEQUEyRCx3QkFBd0IsQ0FBQztBQUNwRixtRUFBbUUsZUFBZSxDQUFDO0FBQ25GLDJEQUEyRCxnQkFBZ0IsQ0FBQztBQUM1RSwyQ0FBMkMsY0FBYyxDQUFDO0FBQzFELGlDQUFpQyxjQUFjLENBQUM7QUFDaEQsdUJBQXVCLGdCQUFnQixDQUFDO0FBQ3hDLDJDQUEyQywrQkFBK0IsQ0FBQztBQUMzRSwyQkFBMkIsYUFBYSxDQUFDO0FBQ3pDLDZCQUE2QixpQkFBaUIsQ0FBQztBQUMvQyxpQ0FBaUMsaUNBQWlDLENBQUM7QUFDbkUsMkJBQTJCLHNCQUFzQixDQUFDO0FBQ2xELGdCQUFnQiw0QkFBNEIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3F1b3Rlcy9xdW90ZS1jdXN0b21lci1wb3B1cC9xdW90ZS1jdXN0b21lci1wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1icmFuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzM7Ym9yZGVyLWNvbG9yOiAjZmY4NTMzO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXN7YmFja2dyb3VuZDogI2MzZTdmYTt9XHJcbi5tb2RhbC1oZWFkZXIuc2VsZWN0LW5ldy1wcm9wZXJ0aWVzIC5idG57cGFkZGluZzogMC4yNXJlbSAwLjdyZW07YmFja2dyb3VuZC1jb2xvcjojMDA4NENBO2NvbG9yOndoaXRlO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgaDV7Y29sb3I6YmxhY2s7Zm9udC1zaXplOjIwcHg7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keS5tb2RhbC1ib2R5e2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHkgcHtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2s7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keSAuZm9ybi1ncm91cHttYXJnaW4tYm90dG9tOjE1cHg7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keWEgLmJ0bi1icmFuZHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7fVxyXG4ubmV3X2NsaWVudHNfcHJvcGVydGllc19ib2R5e2JhY2tncm91bmQtY29sb3I6d2hpdGU7Ym9yZGVyOm5vbmU7fVxyXG4ua3Qtd2lkZ2V0NCAua3Qtd2lkZ2V0NF9faXRlbTpmaXJzdC1jaGlsZHtwYWRkaW5nLXRvcDoxNXB4O31cclxuLmt0LXdpZGdldDQgLmt0LXdpZGdldDRfX2l0ZW06bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2MzZTdmYTM4O31cclxuLmt0LXdpZGdldDQua3Qtc2Nyb2xsLnBze292ZXJmbG93LXk6YXV0byAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6MTBweDt9XHJcbi5rdC1mb250LWJyYW5ke2NvbG9yOiNhZWFlYWUgIWltcG9ydGFudDtmb250LXNpemU6MTJweCAhaW1wb3J0YW50O31cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOiA2cHg7YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTt9XHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NENBO31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvLnByb3BlcnR5LWxpc3QtZHluYW1pYy1jbGFzcyAuYnRuLWxhYmVsLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhIDtjb2xvcjogIzAwODRDQX1cclxuLmN1c3RvbWVyLWxpc3QtbWFpbi1zZWN0aW9uIC5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0tLXNlYXJjaC5kcm9wZG93bi5ib290bS1maWx0ZXJ7bWFyZ2luLWJvdHRvbToyMHB4Ozt9XHJcbi5rdC1zZWxlY3RwaWNrZXIuYnRuLmJ0bi1sYWJlbC1zdWNjZXNzLnB1bGwtcmlnaHR7YmFja2dyb3VuZC1jb2xvcjojRkY4NTMzO2NvbG9yOndoaXRlO31cclxuLmt0LXNlbGVjdHBpY2tlci5idG4uYnRuLWxhYmVsLXN1Y2Nlc3MucHVsbC1yaWdodDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmE7Y29sb3I6IzAwODRDQTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5uZXctcHJvcGVydGllcy1wb3B1cGNyZWF0ZS10ZXh0e2NvbG9yOndoaXRlO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5hbGVydC1pY29uIGl7Y29sb3I6d2hpdGU7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwODRjYTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybXtwYWRkaW5nOjBweCAwcHg7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e3BhZGRpbmc6OHB4IDIwcHg7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmFsZXJ0LWljb257Zm9udC1zaXplOjIwcHg7fVxyXG4ubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1hcHBsaWNhdGlvbnN7cGFkZGluZzowcHggMTVweDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjAuNHJlbSAhaW1wb3J0YW50O31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIGF7ZGlzcGxheTpibG9jazt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyBhIGl7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0tMXtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNkN2Q3ZDc7fVxyXG4uc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcntoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O31cclxuLmNoLW1hcmdpbi10b3Age2Rpc3BsYXk6IHJ1YnktdGV4dC1jb250YWluZXI7fVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteCustomerPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote-customer-popup',
                templateUrl: './quote-customer-popup.component.html',
                styleUrls: ['./quote-customer-popup.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }, { type: _services_quote_service__WEBPACK_IMPORTED_MODULE_5__["QuoteService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "xJsc":
/*!****************************************************************************************!*\
  !*** ./src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TicketIconAttachmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketIconAttachmentComponent", function() { return TicketIconAttachmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TicketIconAttachmentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.localPrependUrl, "/assets/svg/", ctx_r0.ext, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TicketIconAttachmentComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r2.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.Path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TicketIconAttachmentComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.Path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TicketIconAttachmentComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.Path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TicketIconAttachmentComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r5.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r5.localPrependUrl, "/assets/svg/", ctx_r5.ext, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TicketIconAttachmentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketIconAttachmentComponent_div_1_div_2_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketIconAttachmentComponent_div_1_div_3_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketIconAttachmentComponent_div_1_div_4_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketIconAttachmentComponent_div_1_div_5_Template, 2, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.ext);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "png");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "jpg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "jpeg");
} }
class TicketIconAttachmentComponent {
    constructor() {
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    ngOnInit() {
        var _a;
        if (((_a = this.Name) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.ext = this.Name.toLowerCase().split('.').pop();
        }
        else {
            this.ext = 'noimage';
        }
    }
}
TicketIconAttachmentComponent.ɵfac = function TicketIconAttachmentComponent_Factory(t) { return new (t || TicketIconAttachmentComponent)(); };
TicketIconAttachmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketIconAttachmentComponent, selectors: [["generic-ticket-icon-attachment"]], inputs: { Name: "Name", Path: "Path", Status: "Status" }, decls: 2, vars: 2, consts: [["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], [2, "width", "100px", 3, "title", "src"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]], template: function TicketIconAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TicketIconAttachmentComponent_div_0_Template, 2, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketIconAttachmentComponent_div_1_Template, 6, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketIconAttachmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'generic-ticket-icon-attachment',
                template: `
   	<div class="col-md-12" *ngIf="Status === 1">
        <img title="{{Name}}" style="width:100px;" src="{{localPrependUrl}}/assets/svg/{{ext}}.svg">
    </div>
    <div class="col-md-12" *ngIf="Status === 2">
        <div [ngSwitch]="ext">
              <div *ngSwitchCase="'png'"><img title="{{Name}}" style="width:100px;" src="{{Path}}"></div>
              <div *ngSwitchCase="'jpg'"><img title="{{Name}}" style="width:100px;" src="{{Path}}"></div>
              <div *ngSwitchCase="'jpeg'"><img title="{{Name}}" style="width:100px;" src="{{Path}}"></div>
              <div *ngSwitchDefault><img title="{{Name}}" style="width:100px;" src="{{localPrependUrl}}/assets/svg/{{ext}}.svg"></div>
        </div>
    </div>
  `
            }]
    }], function () { return []; }, { Name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], Path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], Status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=application-quotes-quotes-module-es2015.js.map