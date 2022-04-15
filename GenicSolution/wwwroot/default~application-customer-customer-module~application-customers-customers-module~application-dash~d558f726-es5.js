(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-customer-customer-module~application-customers-customers-module~application-dash~d558f726"], {
    /***/
    "py7r":
    /*!*********************************************!*\
      !*** ./src/app/services/invoice.service.ts ***!
      \*********************************************/

    /*! exports provided: InvoiceService */

    /***/
    function py7r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceService", function () {
        return InvoiceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _invoice_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invoice.module */
      "wxdm");
      /* harmony import */


      var _quote_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./quote.module */
      "xcKa");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ticket_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ticket.module */
      "R0Vg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var InvoiceService = /*#__PURE__*/function () {
        function InvoiceService(http) {
          _classCallCheck(this, InvoiceService);

          this.http = http;
          this.SetAsDefaultValue();
        }

        _createClass(InvoiceService, [{
          key: "SetAsDefaultValue",
          value: function SetAsDefaultValue() {
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
              ModifiedUtcDate: new Date(Date.parse(Date()))
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
              ModifiedUtcDate: new Date(Date.parse(Date()))
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
          } // Get invoice list by customer id

        }, {
          key: "refreshInvoiceList",
          value: function refreshInvoiceList(token) {
            var _this = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/Get/' + token).toPromise().then(function (res) {
              return _this.InvoiceList = res;
            });
          }
        }, {
          key: "refreshInvoiceBtId",
          value: function refreshInvoiceBtId(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "refreshInvoiceById",
          value: function refreshInvoiceById(invoiceId, t) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/GetInvoice/' + invoiceId + '/' + t).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "refrestInvoiceListByCustomer",
          value: function refrestInvoiceListByCustomer(id) {
            var _this2 = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Customers/GetInvoiceByCustomer/' + id).toPromise().then(function (res) {
              return _this2.InvoiceList = res;
            });
          } // Get invoice list by customer id

        }, {
          key: "getInvoiceTicketList",
          value: function getInvoiceTicketList(CustomerId, token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getInvoiceTicketList/' + CustomerId + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          } // Get Quote list by customer id

        }, {
          key: "getInvoiceQuoteList",
          value: function getInvoiceQuoteList(CustomerId, token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getInvoiceQuoteList/' + CustomerId + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          } // post quote attachment

        }, {
          key: "postInvoiceAttachment",
          value: function postInvoiceAttachment() {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/UploadInvoiceAttachment', this.InvoiceAttachmentData, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).pipe();
          } // Get: List of Quote Items

        }, {
          key: "getInvoiceAttachments",
          value: function getInvoiceAttachments(id, t) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getInvoiceAttachments/' + id + '/' + t).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          } // post temperaty invoice

        }, {
          key: "postTempInvoice",
          value: function postTempInvoice(token) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/postInvoice/' + token, this.InvoiceData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "refrestArrayofKeyslist",
          value: function refrestArrayofKeyslist(id) {
            var _this3 = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/GetArrayofKey/' + id).toPromise().then(function (res) {
              return _this3.ArrayofKeys = res;
            });
          } // Insert ticket item list to invoice item list

        }, {
          key: "posTciketitemToInvoiceItemTicketId",
          value: function posTciketitemToInvoiceItemTicketId(TicketId, InvoiceId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/postTicketItemToInvoiceItem/' + TicketId + '/' + InvoiceId, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).toPromise();
          } // Insert ticket Attachment list to invoice Attachment list

        }, {
          key: "posTciketAttachmentToInvoiceAttachment",
          value: function posTciketAttachmentToInvoiceAttachment(TicketId, InvoiceId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/postTicketAttachmentToInvoiceAttachment/' + TicketId + '/' + InvoiceId, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).toPromise();
          } // Insert ticket item list to invoice item list

        }, {
          key: "posQuoteItemToInvoiceItem",
          value: function posQuoteItemToInvoiceItem(QuoteId, InvoiceId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/posQuoteItemToInvoiceItem/' + QuoteId + '/' + InvoiceId, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).toPromise();
          } // Ticket Team methods (api) Begin

        }, {
          key: "postInvoiceItemDetails",
          value: function postInvoiceItemDetails(t) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/posInvoiceItem/' + t, this.InvoiceItemData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "putInvoiceItemDetails",
          value: function putInvoiceItemDetails() {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/putInvoiceItem/' + this.InvoiceItemData.Id, this.InvoiceItemData, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).pipe();
          } // Get: List of Quote Items

        }, {
          key: "getInvoiceItems",
          value: function getInvoiceItems(id, t) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/GetInvoiceItems/' + id + '/' + t).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "deleteInvoiceItems",
          value: function deleteInvoiceItems(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/deleteInvoiceItem/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).toPromise();
          } // remove quote attachment

        }, {
          key: "deleteInvoiceAttachment",
          value: function deleteInvoiceAttachment(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/deleteInvoiceAttachment/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).toPromise();
          }
        }, {
          key: "downoadInvoicePDF",
          value: function downoadInvoicePDF(QuoteId, token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getInvoicePDF/' + QuoteId + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (Response) {
              return Response;
            }));
          } // post invoice

        }, {
          key: "putInvoice",
          value: function putInvoice(t) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/putInvoice/' + t, this.InvoiceData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "UpdateInvoiceStatus",
          value: function UpdateInvoiceStatus(Id, Status) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/UpdateInvoiceStatus/' + Id + '/' + Status, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          } // Get: List of Payment Mode

        }, {
          key: "getPaymentModeDetails",
          value: function getPaymentModeDetails(t) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getPaymentMode/' + t).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          } // post payment

        }, {
          key: "postPayment",
          value: function postPayment(t) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/postPayment/' + t, this.PaymentData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          } // post temperaty invoice

        }, {
          key: "getPaymentDetailsByInvoiceNo",
          value: function getPaymentDetailsByInvoiceNo(InvoiceId, t) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getPaymentDetailsByInvoiceNo/' + InvoiceId + '/' + t).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          } // Edit payment

        }, {
          key: "getEditPaymentByInvoiceNo",
          value: function getEditPaymentByInvoiceNo(InvoiceId) {
            var _this4 = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getEditPaymentByInvoiceNo/' + InvoiceId).toPromise().then(function (res) {
              return _this4.PaymentData = res;
            });
          } // Get payment summary

        }, {
          key: "getPaymentSummary",
          value: function getPaymentSummary(InvoiceId) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/getPaymentSummary/' + InvoiceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return response;
            }));
          } // email payment receipt

        }, {
          key: "emailPaymentReceipt",
          value: function emailPaymentReceipt(id) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/EmailPaymentReceipt/' + id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).toPromise();
          }
        }, {
          key: "emailInvoiceCopy",
          value: function emailInvoiceCopy(Id) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/emailInvoiceCopy/' + Id, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).toPromise();
          } // validate Invoice no on change

        }, {
          key: "ValidateInvoiceNo",
          value: function ValidateInvoiceNo(InvoiceUniqueID) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/Invoices/ValidateInvoiceNo/' + InvoiceUniqueID, null, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).pipe();
          }
        }]);

        return InvoiceService;
      }();

      InvoiceService.ɵfac = function InvoiceService_Factory(t) {
        return new (t || InvoiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      InvoiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InvoiceService,
        factory: InvoiceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wxdm":
    /*!********************************************!*\
      !*** ./src/app/services/invoice.module.ts ***!
      \********************************************/

    /*! exports provided: Invoice, InvoiceItem, InvoiceAttachment, InvociceSummary, PaymentSummary, InvoiceReminder */

    /***/
    function wxdm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Invoice", function () {
        return Invoice;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceItem", function () {
        return InvoiceItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceAttachment", function () {
        return InvoiceAttachment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvociceSummary", function () {
        return InvociceSummary;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentSummary", function () {
        return PaymentSummary;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceReminder", function () {
        return InvoiceReminder;
      });
      /* harmony import */


      var _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./CommanExtendsClass.module */
      "mbav");

      var Invoice = function Invoice() {
        _classCallCheck(this, Invoice);
      };

      var InvoiceItem = function InvoiceItem() {
        _classCallCheck(this, InvoiceItem);
      };

      var InvoiceAttachment = function InvoiceAttachment() {
        _classCallCheck(this, InvoiceAttachment);
      };

      var InvociceSummary = function InvociceSummary() {
        _classCallCheck(this, InvociceSummary);
      };

      var PaymentSummary = function PaymentSummary() {
        _classCallCheck(this, PaymentSummary);
      };

      var InvoiceReminder = /*#__PURE__*/function (_CommanExtendsClass_m) {
        _inherits(InvoiceReminder, _CommanExtendsClass_m);

        var _super = _createSuper(InvoiceReminder);

        function InvoiceReminder() {
          _classCallCheck(this, InvoiceReminder);

          return _super.apply(this, arguments);
        }

        return InvoiceReminder;
      }(_CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__["ReminderBase"]);
      /***/

    },

    /***/
    "xcKa":
    /*!******************************************!*\
      !*** ./src/app/services/quote.module.ts ***!
      \******************************************/

    /*! exports provided: Quote, QuoteItem, QuoteAttachment, QuoteSummary, Tax, QuoteReminder */

    /***/
    function xcKa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Quote", function () {
        return Quote;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteItem", function () {
        return QuoteItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteAttachment", function () {
        return QuoteAttachment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteSummary", function () {
        return QuoteSummary;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tax", function () {
        return Tax;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteReminder", function () {
        return QuoteReminder;
      });
      /* harmony import */


      var _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./CommanExtendsClass.module */
      "mbav");

      var Quote = function Quote() {
        _classCallCheck(this, Quote);
      };

      var QuoteItem = function QuoteItem() {
        _classCallCheck(this, QuoteItem);
      };

      var QuoteAttachment = function QuoteAttachment() {
        _classCallCheck(this, QuoteAttachment);
      };

      var QuoteSummary = function QuoteSummary() {
        _classCallCheck(this, QuoteSummary);
      };

      var Tax = function Tax() {
        _classCallCheck(this, Tax);
      };

      var QuoteReminder = /*#__PURE__*/function (_CommanExtendsClass_m2) {
        _inherits(QuoteReminder, _CommanExtendsClass_m2);

        var _super2 = _createSuper(QuoteReminder);

        function QuoteReminder() {
          _classCallCheck(this, QuoteReminder);

          return _super2.apply(this, arguments);
        }

        return QuoteReminder;
      }(_CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__["ReminderBase"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~application-customer-customer-module~application-customers-customers-module~application-dash~d558f726-es5.js.map