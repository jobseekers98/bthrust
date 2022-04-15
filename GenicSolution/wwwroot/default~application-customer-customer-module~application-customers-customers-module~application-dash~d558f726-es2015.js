(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-customer-customer-module~application-customers-customers-module~application-dash~d558f726"],{

/***/ "py7r":
/*!*********************************************!*\
  !*** ./src/app/services/invoice.service.ts ***!
  \*********************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _invoice_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.module */ "wxdm");
/* harmony import */ var _quote_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote.module */ "xcKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ticket_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket.module */ "R0Vg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









class InvoiceService {
    constructor(http) {
        this.http = http;
        this.SetAsDefaultValue();
    }
    SetAsDefaultValue() {
        this.InvoiceList = [];
        this.InvoiceItemList = [];
        this.InvoiceAttachmentList = [];
        this.TaxList = [];
        this.InvoiceData = {
            Id: '00000000-0000-0000-0000-000000000000',
            InvoiceId: '',
            InvoiceTitle: '',
            Description: '',
            RefranceNo: '',
            InvoiceUniqueID: 0,
            CustomerId: '00000000-0000-0000-0000-000000000000',
            CustomerName: '',
            CompanyName: '',
            PropertyId: '00000000-0000-0000-0000-000000000000',
            CustomerContactNo: '',
            CustomerEmail: '',
            CustomerAddress: '',
            ClientRemark: '',
            SubTotal: 0,
            DiscountType: 0,
            DiscountTextValue: 0,
            DiscountAmount: 0,
            TaxId: 0,
            TaxName: '',
            TaxRate: 0,
            TaxAmount: 0,
            ReqDepositeType: 0,
            ReqDepositeTextValue: 0,
            ReqDepositeAmount: 0,
            NetAmount: 0,
            InternalNotes: '',
            ClientViewQty: true,
            ClientViewUnitCost: true,
            ClientViewLineItemTotal: true,
            ClientAccountBalance: true,
            LateStamp: true,
            Status: '',
            SendOutStatus: '',
            InvoiceConvertedFrom: '',
            InvoiceConvertedID: '00000000-0000-0000-0000-000000000000',
            InvoiceDate: null,
            InvoiceDueDate: null,
            CreatedUtcDate: null,
            ModifiedUtcDate: null,
            IsReady: false,
            TicketId: '',
            QuoteId: '',
            RequestId: '',
            Tickets: null,
            Customers: null,
            Properties: null,
            InvoiceItemList: [],
            InvoiceAttachmentList: []
        };
        this.InvoiceItemData = {
            Id: 0,
            InvoiceId: '',
            Type: 'Product',
            ItemName: '',
            Qty: null,
            UnitCost: null,
            Total: null,
            ItemDescription: '',
            UniqId: '',
            InWarranty: true,
            WarrantyDays: 0,
            CreatedUtcDate: new Date(Date.parse(Date())),
            ModifiedUtcDate: new Date(Date.parse(Date())),
        };
        this.TaxData = {
            Id: 0,
            TaxName: '',
            TaxRate: 0,
            Status: true
        };
        this.InvoiceAttachmentData = {
            Id: 0,
            InvoiceId: '',
            AttachmentExtension: '',
            Attachment: '',
            AttachmentSize: 0,
            CreatedUtcDate: new Date(Date.parse(Date())),
            ModifiedUtcDate: new Date(Date.parse(Date())),
        };
        this.TaxList = [];
        this.InvoiceTicketData = new _ticket_module__WEBPACK_IMPORTED_MODULE_4__["Ticket"]();
        this.QuoteData = new _quote_module__WEBPACK_IMPORTED_MODULE_2__["Quote"]();
        this.QuoteList = [];
        this.ArrayofKeys = [];
        this.PaymentData = {
            Id: '00000000-0000-0000-0000-000000000000',
            InvoiceId: '00000000-0000-0000-0000-000000000000',
            InvoiceNo: '',
            PaymentAmount: 0,
            BalanceAmount: 0,
            PaymentDate: new Date(Date.parse(Date())),
            PModeId: 0,
            PaymentMethod: '',
            TransactionId: '',
            PaymentNote: '',
            CreatedDate: new Date(Date.parse(Date())),
            UpdatedDate: new Date(Date.parse(Date())),
            Status: '',
            SendOutStatus: '',
            PaymentModeList: []
        };
        this.TotalPaymentData = {
            Id: '00000000-0000-0000-0000-000000000000',
            InvoiceId: '00000000-0000-0000-0000-000000000000',
            InvoiceNo: '',
            PaymentAmount: 0,
            BalanceAmount: 0,
            PaymentDate: new Date(Date.parse(Date())),
            PModeId: 0,
            PaymentMethod: '',
            TransactionId: '',
            PaymentNote: '',
            CreatedDate: new Date(Date.parse(Date())),
            UpdatedDate: new Date(Date.parse(Date())),
            Status: '',
            SendOutStatus: '',
            PaymentModeList: []
        };
        this.PaymentList = [];
        this.PaymentModeList = [];
        this.PaymentSummary = new _invoice_module__WEBPACK_IMPORTED_MODULE_1__["PaymentSummary"]();
    }
    // Get invoice list by customer id
    refreshInvoiceList(token) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/Get/' + token).toPromise().then(res => this.InvoiceList = res);
    }
    refreshInvoiceBtId(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    refreshInvoiceById(invoiceId, t) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/GetInvoice/' + invoiceId + '/' + t).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    refrestInvoiceListByCustomer(id) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Customers/GetInvoiceByCustomer/' + id).toPromise().then(res => this.InvoiceList = res);
    }
    // Get invoice list by customer id
    getInvoiceTicketList(CustomerId, token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getInvoiceTicketList/' + CustomerId + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    // Get Quote list by customer id
    getInvoiceQuoteList(CustomerId, token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getInvoiceQuoteList/' + CustomerId + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    // post quote attachment
    postInvoiceAttachment() {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/UploadInvoiceAttachment', this.InvoiceAttachmentData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).pipe();
    }
    // Get: List of Quote Items
    getInvoiceAttachments(id, t) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getInvoiceAttachments/' + id + '/' + t).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    // post temperaty invoice
    postTempInvoice(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/postInvoice/' + token, this.InvoiceData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    refrestArrayofKeyslist(id) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/GetArrayofKey/' + id).toPromise().then(res => this.ArrayofKeys = res);
    }
    // Insert ticket item list to invoice item list
    posTciketitemToInvoiceItemTicketId(TicketId, InvoiceId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/postTicketItemToInvoiceItem/' + TicketId + '/' + InvoiceId, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).toPromise();
    }
    // Insert ticket Attachment list to invoice Attachment list
    posTciketAttachmentToInvoiceAttachment(TicketId, InvoiceId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/postTicketAttachmentToInvoiceAttachment/' + TicketId + '/' + InvoiceId, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).toPromise();
    }
    // Insert ticket item list to invoice item list
    posQuoteItemToInvoiceItem(QuoteId, InvoiceId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/posQuoteItemToInvoiceItem/' + QuoteId + '/' + InvoiceId, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).toPromise();
    }
    // Ticket Team methods (api) Begin
    postInvoiceItemDetails(t) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/posInvoiceItem/' + t, this.InvoiceItemData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    putInvoiceItemDetails() {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/putInvoiceItem/' + this.InvoiceItemData.Id, this.InvoiceItemData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).pipe();
    }
    // Get: List of Quote Items
    getInvoiceItems(id, t) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/GetInvoiceItems/' + id + '/' + t).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    deleteInvoiceItems(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/deleteInvoiceItem/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).toPromise();
    }
    // remove quote attachment
    deleteInvoiceAttachment(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/deleteInvoiceAttachment/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).toPromise();
    }
    downoadInvoicePDF(QuoteId, token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getInvoicePDF/' + QuoteId + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(Response => Response));
    }
    // post invoice
    putInvoice(t) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/putInvoice/' + t, this.InvoiceData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    UpdateInvoiceStatus(Id, Status) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/UpdateInvoiceStatus/' + Id + '/' + Status, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    // Get: List of Payment Mode
    getPaymentModeDetails(t) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getPaymentMode/' + t).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    // post payment
    postPayment(t) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/postPayment/' + t, this.PaymentData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    // post temperaty invoice
    getPaymentDetailsByInvoiceNo(InvoiceId, t) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getPaymentDetailsByInvoiceNo/' + InvoiceId + '/' + t).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    // Edit payment
    getEditPaymentByInvoiceNo(InvoiceId) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getEditPaymentByInvoiceNo/' + InvoiceId).toPromise().then(res => this.PaymentData = res);
    }
    // Get payment summary
    getPaymentSummary(InvoiceId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getPaymentSummary/' + InvoiceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response; }));
    }
    // email payment receipt
    emailPaymentReceipt(id) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/EmailPaymentReceipt/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).toPromise();
    }
    emailInvoiceCopy(Id) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/emailInvoiceCopy/' + Id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).toPromise();
    }
    // validate Invoice no on change
    ValidateInvoiceNo(InvoiceUniqueID) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/ValidateInvoiceNo/' + InvoiceUniqueID, null, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).pipe();
    }
}
InvoiceService.ɵfac = function InvoiceService_Factory(t) { return new (t || InvoiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
InvoiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InvoiceService, factory: InvoiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "wxdm":
/*!********************************************!*\
  !*** ./src/app/services/invoice.module.ts ***!
  \********************************************/
/*! exports provided: Invoice, InvoiceItem, InvoiceAttachment, InvociceSummary, PaymentSummary, InvoiceReminder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceItem", function() { return InvoiceItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceAttachment", function() { return InvoiceAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvociceSummary", function() { return InvociceSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSummary", function() { return PaymentSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceReminder", function() { return InvoiceReminder; });
/* harmony import */ var _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommanExtendsClass.module */ "mbav");

class Invoice {
}
class InvoiceItem {
}
class InvoiceAttachment {
}
class InvociceSummary {
}
class PaymentSummary {
}
class InvoiceReminder extends _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__["ReminderBase"] {
}


/***/ }),

/***/ "xcKa":
/*!******************************************!*\
  !*** ./src/app/services/quote.module.ts ***!
  \******************************************/
/*! exports provided: Quote, QuoteItem, QuoteAttachment, QuoteSummary, Tax, QuoteReminder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteItem", function() { return QuoteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteAttachment", function() { return QuoteAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteSummary", function() { return QuoteSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tax", function() { return Tax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteReminder", function() { return QuoteReminder; });
/* harmony import */ var _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommanExtendsClass.module */ "mbav");

class Quote {
}
class QuoteItem {
}
class QuoteAttachment {
}
class QuoteSummary {
}
class Tax {
}
class QuoteReminder extends _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__["ReminderBase"] {
}


/***/ })

}]);
//# sourceMappingURL=default~application-customer-customer-module~application-customers-customers-module~application-dash~d558f726-es2015.js.map