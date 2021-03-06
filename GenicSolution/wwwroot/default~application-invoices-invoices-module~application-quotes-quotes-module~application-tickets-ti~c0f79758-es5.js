(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-invoices-invoices-module~application-quotes-quotes-module~application-tickets-ti~c0f79758"], {
    /***/
    "1+cd":
    /*!**********************************************!*\
      !*** ./src/app/services/reminder.service.ts ***!
      \**********************************************/

    /*! exports provided: ReminderService */

    /***/
    function cd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReminderService", function () {
        return ReminderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ReminderService = /*#__PURE__*/function () {
        function ReminderService(http) {
          _classCallCheck(this, ReminderService);

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

        _createClass(ReminderService, [{
          key: "getReminder",
          value: function getReminder(t, r, type) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Reminder/GetReminders/' + t + '/' + r + '/' + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "getAllReminders",
          value: function getAllReminders(t, type) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Reminder/GetAllReminders/' + t + '/' + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "putReminderStatus",
          value: function putReminderStatus(t, id, type) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Reminder/PutReminderStatus/' + t + '/' + id + '/' + type, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "postQuoteReminder",
          value: function postQuoteReminder(t, type) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Reminder/PostReminder/' + t + '/' + type, this.QuoteReminder).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "removeQuoteReminder",
          value: function removeQuoteReminder(t, id, qid, type) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Reminder/DeleteQuotationReminder/' + t + '/' + id + '/' + qid + '/' + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }]);

        return ReminderService;
      }();

      ReminderService.??fac = function ReminderService_Factory(t) {
        return new (t || ReminderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ReminderService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ReminderService,
        factory: ReminderService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReminderService, [{
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
    "7Q/8":
    /*!***************************************************************************!*\
      !*** ./src/app/generic-utils/Reminder-Module/ReminderModule.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ReminderModuleComponent */

    /***/
    function Q8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReminderModuleComponent", function () {
        return ReminderModuleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_quote_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/quote.module */
      "xcKa");
      /* harmony import */


      var email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! email-validator */
      "H/qo");
      /* harmony import */


      var email_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/ticket.service */
      "KPvW");
      /* harmony import */


      var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/quote.service */
      "uOqW");
      /* harmony import */


      var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/invoice.service */
      "py7r");
      /* harmony import */


      var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/reminder.service */
      "1+cd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function ReminderModuleComponent_div_9_table_3_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "TicketId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ReminderModuleComponent_div_9_table_3_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "QuoteId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ReminderModuleComponent_div_9_table_3_th_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "InvoiceId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ReminderModuleComponent_div_9_table_3_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReminderModuleComponent_div_9_table_3_tr_15_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r49);

            var x_r46 = ctx.$implicit;

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r48.removeReminder(x_r46.Id, x_r46.RId, ctx_r48.ReminderModule);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r46.RNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r46.Subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r46.Body);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r46.MailTo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](11, 5, x_r46.ReminderDate, "EEEE, MMMM d, y", "+0000"));
        }
      }

      function ReminderModuleComponent_div_9_table_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ReminderModuleComponent_div_9_table_3_th_2_Template, 2, 0, "th", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ReminderModuleComponent_div_9_table_3_th_3_Template, 2, 0, "th", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ReminderModuleComponent_div_9_table_3_th_4_Template, 2, 0, "th", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Mail To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Reminder Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ReminderModuleComponent_div_9_table_3_tr_15_Template, 15, 9, "tr", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "td", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r41.ReminderModule === "ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r41.ReminderModule === "quote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r41.ReminderModule === "invoice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r41.data);
        }
      }

      function ReminderModuleComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ReminderModuleComponent_div_9_table_3_Template, 18, 4, "table", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.data.length > 0);
        }
      }

      function ReminderModuleComponent_div_10_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Reminder Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 98, 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReminderModuleComponent_div_10_div_22_Template_input_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61);

            var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

            return _r58.toggle();
          })("ngModelChange", function ReminderModuleComponent_div_10_div_22_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r62.reminderservice.QuoteReminder.ReminderDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx_r51.isReminderDateValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("minDate", ctx_r51.minDate)("ngModel", ctx_r51.reminderservice.QuoteReminder.ReminderDate);
        }
      }

      function ReminderModuleComponent_div_10_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 100, 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReminderModuleComponent_div_10_div_23_Template_input_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);

            return _r63.toggle();
          })("ngModelChange", function ReminderModuleComponent_div_10_div_23_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r67.reminderservice.QuoteReminder.RecurringStartDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("minDate", ctx_r52.minDate)("ngModel", ctx_r52.reminderservice.QuoteReminder.RecurringStartDate);
        }
      }

      function ReminderModuleComponent_div_10_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Frequency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 103, 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_div_10_div_24_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r69.reminderservice.QuoteReminder.VisitFrequency = $event;
          })("change", function ReminderModuleComponent_div_10_div_24_Template_input_change_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r71.RecurringTimeCalculator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r53.reminderservice.QuoteReminder.VisitFrequency);
        }
      }

      function ReminderModuleComponent_div_10_a_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Set Week Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ReminderModuleComponent_div_10_a_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Set Month Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ReminderModuleComponent_div_10_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "skip weekly/Public off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ReminderModuleComponent_div_10_div_31_Template_input_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r73);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r72.SetSkipOff($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r56.skippublickholiday);
        }
      }

      function ReminderModuleComponent_div_10_div_32_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var v_r75 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, v_r75), " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](3, 4, v_r75, "EEEE"), ")");
        }
      }

      function ReminderModuleComponent_div_10_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Total Reminder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReminderModuleComponent_div_10_div_32_Template_div_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r76.clickOntoolTip2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ReminderModuleComponent_div_10_div_32_span_6_Template, 5, 7, "span", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r57.tooltip2 ? "btooltiptext5-1" : "btooltiptext5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r57.recurringList2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r57.visit_total, " Reminder");
        }
      }

      function ReminderModuleComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Reminder Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "select", 89, 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_div_10_Template_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r78.reminderservice.QuoteReminder.Duration = $event;
          })("change", function ReminderModuleComponent_div_10_Template_select_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r79);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r80.ChangeReminderDuration();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "option", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "One Time Reminder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "option", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Daily Reminder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "option", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Weekly Reminder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "option", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Monthly Reminder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Quarterly Reminder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "option", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Half Yearly Reminder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ReminderModuleComponent_div_10_div_22_Template, 9, 4, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ReminderModuleComponent_div_10_div_23_Template, 9, 2, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ReminderModuleComponent_div_10_div_24_Template, 8, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ReminderModuleComponent_div_10_a_29_Template, 2, 0, "a", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, ReminderModuleComponent_div_10_a_30_Template, 2, 0, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ReminderModuleComponent_div_10_div_31_Template, 9, 1, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, ReminderModuleComponent_div_10_div_32_Template, 10, 3, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.reminderservice.QuoteReminder.Duration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration == 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration == 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.reminderservice.QuoteReminder.Duration > 0);
        }
      }

      function ReminderModuleComponent_div_11_a_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReminderModuleComponent_div_11_a_35_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r87);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r86.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Add Reminder ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ReminderModuleComponent_div_11_a_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ReminderModuleComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Mail To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Can send up to 5 emails, separated by comma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 118, 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_div_11_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r89);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r88.reminderservice.QuoteReminder.MailTo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 120, 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_div_11_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r89);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r90.reminderservice.QuoteReminder.Subject = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "textarea", 123, 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_div_11_Template_textarea_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r89);

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r91.reminderservice.QuoteReminder.Body = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, ReminderModuleComponent_div_11_a_35_Template, 2, 0, "a", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, ReminderModuleComponent_div_11_a_36_Template, 2, 0, "a", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx_r2.isMailValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.reminderservice.QuoteReminder.MailTo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx_r2.isSubjectValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.reminderservice.QuoteReminder.Subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx_r2.isBodyValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.reminderservice.QuoteReminder.Body);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.loading);
        }
      }

      var ReminderModuleComponent = /*#__PURE__*/function () {
        function ReminderModuleComponent(service, quoteservice, invoiceservice, reminderservice, toastr, genicservice) {
          _classCallCheck(this, ReminderModuleComponent);

          this.service = service;
          this.quoteservice = quoteservice;
          this.invoiceservice = invoiceservice;
          this.reminderservice = reminderservice;
          this.toastr = toastr;
          this.genicservice = genicservice;
          this.currentUTCDate = new Date();
          this.minDate = {
            year: Number(this.currentUTCDate.getFullYear()),
            month: Number(this.currentUTCDate.getMonth() + 1),
            day: Number(this.currentUTCDate.getDate())
          };
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

        _createClass(ReminderModuleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.InitiateObject();
            this.reminderservice.getReminder(this.Token, this.Id, this.ReminderModule).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this.data = [];
                  _this.data = response.result;
                  _this.reminderservice.TicketReminder.MailTo = _this.service.formData.CustomerEmail;
                  _this.reminderservice.QuoteReminder.MailTo = _this.quoteservice.QuoteData.CustomerEmail;
                  _this.reminderservice.InvoiceReminder.MailTo = _this.invoiceservice.QuoteData.CustomerEmail;

                  if (_this.data.length > 0) {
                    _this.IsVisibleContract = true;
                    var checkbox1 = null;
                    checkbox1 = document.querySelector('#addremindercheckbox');
                    checkbox1.checked = true;
                  }
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "SelectReminder",
          value: function SelectReminder() {
            if (this.IsVisibleContract) {
              return this.IsVisibleContract = false;
            } else {
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
        }, {
          key: "ChangeReminderDuration",
          value: function ChangeReminderDuration() {
            this.reminderservice.QuoteReminder.Duration = Number(this.reminderservice.QuoteReminder.Duration);

            if (this.reminderservice.QuoteReminder.Duration === 7) {
              this.reminderservice.QuoteReminder.VisitFrequency = 1;
            }

            if (this.reminderservice.QuoteReminder.Duration === 30) {
              this.reminderservice.QuoteReminder.VisitFrequency = 1;
            }

            var todaydate = this.genicservice.TODAY_DATE_IN_STRING + 'T00:00:00Z';
            this.reminderservice.QuoteReminder.ReminderDate = '';
            this.reminderservice.QuoteReminder.RecurringStartDate = '';
            this.reminderservice.QuoteReminder.RecurringEndDate = '';
            this.reminderservice.QuoteReminder.ReminderDate = todaydate;
            this.reminderservice.QuoteReminder.RecurringStartDate = todaydate;
            this.reminderservice.QuoteReminder.RecurringEndDate = todaydate;
          }
        }, {
          key: "RecurringTimeCalculator",
          value: function RecurringTimeCalculator() {
            var _this2 = this;

            var numdays = 0;
            var visitfruq = 0;
            var totalVisit = 0;
            var now = new Date(this.reminderservice.QuoteReminder.RecurringStartDate);
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
                setTimeout(function () {
                  _this2.TicketRecurringHelper(0);
                }, 500);
                break;

              case 7:
                this.visit_total = totalVisit = numdays * visitfruq;
                now.setDate(new Date(this.reminderservice.QuoteReminder.RecurringStartDate).getDate() + (totalVisit - 1));
                this.reminderservice.QuoteReminder.RecurringEndDate = now.toISOString();
                setTimeout(function () {
                  var el1 = document.getElementById('remindershowWeekModal');
                  el1.click();
                }, 500);
                break;

              case 30:
                this.visit_total = totalVisit = numdays * visitfruq;
                now.setDate(new Date(this.reminderservice.QuoteReminder.RecurringStartDate).getDate() + (totalVisit - 1));
                this.reminderservice.QuoteReminder.RecurringEndDate = now.toISOString();
                setTimeout(function () {
                  var el2 = document.getElementById('remindershowMonthModal');
                  el2.click();
                }, 500);
                break;

              case 90:
                this.visit_total = totalVisit = visitfruq;
                this.reminderservice.QuoteReminder.VisitFrequency = visitfruq;
                setTimeout(function () {
                  _this2.TicketRecurringHelper(3);
                }, 500);
                break;

              case 180:
                this.visit_total = totalVisit = visitfruq;
                this.reminderservice.QuoteReminder.VisitFrequency = visitfruq;
                setTimeout(function () {
                  _this2.TicketRecurringHelper(4);
                }, 500);
                break;
            }

            numdays = 0;
            visitfruq = 0;
            totalVisit = 0;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

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
              this.reminderservice.postQuoteReminder(this.Token, this.ReminderModule).subscribe(function (res) {
                if (res) {
                  var response = res;

                  if (response.Message === 'success') {
                    _this3.toastr.success(response.MessageDescription);

                    _this3.data = [];
                    _this3.data = response.result;
                    _this3.loading = false;

                    _this3.InitiateObject();
                  }

                  if (response.Message === 'failure') {
                    _this3.toastr.warning(response.MessageDescription);

                    _this3.loading = false;
                  }
                }
              }, function (error) {
                return console.log(error);
              });
            }
          }
        }, {
          key: "removeReminder",
          value: function removeReminder(rid, QuoteId, type) {
            var _this4 = this;

            this.reminderservice.removeQuoteReminder(this.Token, rid, QuoteId, type).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this4.toastr.success(response.MessageDescription);

                  _this4.data = [];
                  _this4.data = response.result;
                }

                if (response.Message === 'failure') {
                  _this4.toastr.warning(response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "TicketRecurringHelper",
          value: function TicketRecurringHelper(type) {
            var _this5 = this;

            if (this.Id === '00000000-0000-0000-0000-000000000000') {
              return false;
            }

            this.service.TicketRecurringHelper.Id = 0;
            this.service.TicketRecurringHelper.Type = type;
            this.service.TicketRecurringHelper.IsFor = 2; /// For Reminder Type

            this.service.TicketRecurringHelper.RecurringStartDate = this.reminderservice.QuoteReminder.RecurringStartDate;
            this.service.TicketRecurringHelper.RecurringDuration = Number(this.reminderservice.QuoteReminder.Duration);
            this.service.TicketRecurringHelper.RecurringVisitFrequency = Number(this.reminderservice.QuoteReminder.VisitFrequency);
            this.service.putTicketRecurringHelperDetails(this.Token, this.skippublickholiday).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this5.visit_total = response.result.Count;
                  _this5.recurringList2 = response.result.List; //this.service.formData.RecurringStartDate = response.result.FirstVisit;
                  //this.service.formData.RecurringEndDate = response.result.LastVisit;

                  var demoClasses = null;
                  demoClasses = document.querySelector('#reminderdetailModalWeekbutton');
                  demoClasses.click();
                  var demoClasses2 = null;
                  demoClasses2 = document.querySelector('#reminderdetailModalMonthbutton');
                  demoClasses2.click();
                }

                if (response.Message === 'failure') {
                  _this5.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "validateForm",
          value: function validateForm() {
            var _this6 = this;

            if (this.reminderservice.QuoteReminder.Duration === undefined || this.reminderservice.QuoteReminder.Duration === null) {
              this.reminderservice.QuoteReminder.Duration = 0;
            }

            if (this.reminderservice.QuoteReminder.VisitFrequency === undefined || this.reminderservice.QuoteReminder.VisitFrequency === null) {
              this.reminderservice.QuoteReminder.VisitFrequency = 1;
            }

            this.isValid = true;
            this.isReminderDateValid = true;

            if (this.reminderservice.QuoteReminder.ReminderDate === null || this.reminderservice.QuoteReminder.ReminderDate === undefined || this.reminderservice.QuoteReminder.ReminderDate === '') {
              this.isReminderDateValid = false;
              this.isValid = false;
              this.toastr.warning('warning', 'Please select reminder date!');
            }

            this.isMailValid = true;

            if (this.reminderservice.QuoteReminder.MailTo === null || this.reminderservice.QuoteReminder.MailTo === undefined || this.reminderservice.QuoteReminder.MailTo === '') {
              this.isMailValid = false;
              this.isValid = false;
              this.toastr.warning('Please enter mail address!');
            }

            var arrEmail = this.reminderservice.QuoteReminder.MailTo.split(',');

            if (arrEmail.length > 5) {
              this.isMailValid = false;
              this.isValid = false;
              this.toastr.warning('Can send up to 5 emails, separated by comma');
              this.toastr.error('current length is ' + arrEmail.length);
            }

            arrEmail.forEach(function (element) {
              if (!email_validator__WEBPACK_IMPORTED_MODULE_2__["validate"](element)) {
                _this6.toastr.warning('Warning', 'Please enter a valid email');

                _this6.toastr.error(element + ' Invalid email');

                _this6.isMailValid = false;
                _this6.isValid = false;
                return false;
              }
            });
            this.isSubjectValid = true;

            if (this.reminderservice.QuoteReminder.Subject === null || this.reminderservice.QuoteReminder.Subject === undefined || this.reminderservice.QuoteReminder.Subject === '') {
              this.isSubjectValid = false;
              this.isValid = false;
              this.toastr.warning('warning', 'Please enter mail subject!');
            }

            this.isBodyValid = true;

            if (this.reminderservice.QuoteReminder.Body === null || this.reminderservice.QuoteReminder.Body === undefined || this.reminderservice.QuoteReminder.Body === '') {
              this.isBodyValid = false;
              this.isValid = false;
              this.toastr.warning('warning', 'Please enter mail subject!');
            }

            return this.isValid;
          }
        }, {
          key: "InitiateObject",
          value: function InitiateObject() {
            var todaydate = this.genicservice.TODAY_DATE_IN_STRING + 'T00:00:00Z';
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
        }, {
          key: "SetSkipOff",
          value: function SetSkipOff(e) {
            var enb = Boolean(e.target.checked);

            if (enb) {
              this.skippublickholiday = true;
            } else {
              this.skippublickholiday = false;
            }
          }
        }, {
          key: "clickOntoolTip2",
          value: function clickOntoolTip2() {
            if (this.tooltip2) {
              this.tooltip2 = false;
            } else {
              this.tooltip2 = true;
            }
          }
        }]);

        return ReminderModuleComponent;
      }();

      ReminderModuleComponent.??fac = function ReminderModuleComponent_Factory(t) {
        return new (t || ReminderModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_6__["ReminderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_8__["GenicProfileService"]));
      };

      ReminderModuleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ReminderModuleComponent,
        selectors: [["generic-reminder-module"]],
        inputs: {
          Id: "Id",
          Token: "Token",
          ReminderModule: "ReminderModule"
        },
        decls: 334,
        vars: 43,
        consts: [[1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--brand", 2, "margin-top", "-12px"], ["type", "checkbox", "id", "addremindercheckbox", 3, "change"], ["class", "row", 4, "ngIf"], ["id", "reminderdetailModalWeek", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "id", "reminderdetailModalWeekbutton", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "detail-inner"], [1, "details-tabs"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#dtab1", 1, "nav-link", "active"], [1, "tab-content"], ["id", "dtab1", 1, "tab-pane", "active"], [1, "row"], [1, "col-md-12", "col-sm-12"], [1, "ticket-month"], [1, "table"], [1, "container-check"], ["type", "checkbox", "checked", "checked", "name", "SundayIsActive", 3, "ngModel", "ngModelChange"], ["SundayIsActive", "ngModel"], [1, "checkmark"], ["type", "checkbox", "checked", "checked", "name", "MondayIsActive", 3, "ngModel", "ngModelChange"], ["MondayIsActive", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "TuesdayIsActive", 3, "ngModel", "ngModelChange"], ["TuesdayIsActive", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "WednesdayIsActive", 3, "ngModel", "ngModelChange"], ["WednesdayIsActive", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "ThursdayIsActive", 3, "ngModel", "ngModelChange"], ["ThursdayIsActive", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "FridayIsActive", 3, "ngModel", "ngModelChange"], ["FridayIsActive", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "SaturdayIsActive", 3, "ngModel", "ngModelChange"], ["SaturdayIsActive", "ngModel"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["id", "reminderdetailModalMonth", 1, "modal", "fade"], ["type", "button", "id", "reminderdetailModalMonthbutton", "data-dismiss", "modal", 1, "close"], ["data-toggle", "tab", "href", "#dtab2", 1, "nav-link", "active"], ["id", "dtab2", 1, "tab-pane", "active"], [1, "row", "tickt-month-parent"], ["type", "checkbox", "checked", "checked", "name", "Date1", 3, "ngModel", "ngModelChange"], ["Date1", "ngModel"], ["type", "checkbox", "checked", "checked", "name", "Date2", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date3", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date4", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date5", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date6", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date7", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date8", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date9", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date10", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date11", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date12", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date13", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date14", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date15", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date16", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date17", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date18", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date19", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date20", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date21", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date22", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date24", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date25", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date26", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date27", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date28", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date29", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date30", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", "checked", "name", "Date31", 3, "ngModel", "ngModelChange"], [1, "kt-portlet__body"], [1, "col"], ["class", "table", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForAsync", "ngForOf"], ["colspan", "6"], ["href", "javascript:;", 3, "click"], [1, "far", "fa-trash-alt", "text-danger"], [1, "col-md-3"], [1, "text-danger"], [1, "kt-widget19__wrapper"], ["name", "country", "name", "Duration", "aria-describedby", "country-error", "aria-invalid", "false", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["Duration", "ngModel"], [3, "value"], ["class", "col-md-2", 4, "ngIf"], ["class", "col-md-1", 4, "ngIf"], [1, "col-md-2"], [1, "input-group"], ["href", "javascript:;", "class", "btn btn-brand", "data-toggle", "modal", "id", "remindershowWeekModal", "data-target", "#reminderdetailModalWeek", 4, "ngIf"], ["href", "javascript:;", "class", "btn btn-brand", "data-toggle", "modal", "id", "remindershowMonthModal", "data-target", "#reminderdetailModalMonth", 4, "ngIf"], ["type", "text", "ngbDatepicker", "", "dateFormat", "yyyy-MMM-dd", "name", "reminderservice.QuoteReminder.ReminderDate", "placeholder", "dd-MM-yyyy", 1, "form-control", 2, "height", "37px !important", 3, "minDate", "ngModel", "click", "ngModelChange"], ["dateReminderDate", "ngbDatepicker", "reminderservice.QuoteReminder.ReminderDate", "ngModel"], ["type", "text", "ngbDatepicker", "", "dateFormat", "yyyy-MMM-dd", "name", "quoteService.QuoteReminder.RecurringStartDate", "placeholder", "dd-MM-yyyy", 1, "form-control", 2, "height", "37px !important", 3, "minDate", "ngModel", "click", "ngModelChange"], ["dateRecurringStartDate", "ngbDatepicker", "reminderservice.QuoteReminder.RecurringStartDate", "ngModel"], [1, "col-md-1"], ["type", "text", "name", "VisitFrequency", 1, "form-control", 2, "height", "37px !important", 3, "ngModel", "ngModelChange", "change"], ["VisitFrequency", "ngModel"], ["href", "javascript:;", "data-toggle", "modal", "id", "remindershowWeekModal", "data-target", "#reminderdetailModalWeek", 1, "btn", "btn-brand"], ["href", "javascript:;", "data-toggle", "modal", "id", "remindershowMonthModal", "data-target", "#reminderdetailModalMonth", 1, "btn", "btn-brand"], [1, "kt-switch", "kt-switch--icon"], ["type", "checkbox", 3, "checked", "change"], [1, "swither-bootstrap-learn", "switcher-customer"], [1, "btooltip5", 3, "click"], [1, "fa", "fa-question-circle", "text-info", 2, "cursor", "pointer"], [3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "form-control", 2, "background-color", "#f7f8fa"], [1, "btooltip1"], [1, "fa", "fa-question-circle", "text-info", 2, "cursor", "help"], [1, "btooltip1text"], ["type", "text", "name", "reminderservice.QuoteReminder.MailTo", "placeholder", "someone@domain.com", 1, "form-control", 2, "height", "37px !important", 3, "ngModel", "ngModelChange"], ["reminderservice.QuoteReminder.MailTo", "ngModel"], ["type", "text", "name", "reminderservice.QuoteReminder.Subject", "placeholder", "Subject", 1, "form-control", 2, "height", "37px !important", 3, "ngModel", "ngModelChange"], ["reminderservice.QuoteReminder.Subject", "ngModel"], [1, "col-md-4"], ["name", "reminderservice.QuoteReminder.Body", "rows", "1", "placeholder", "Body", 1, "form-control", 3, "ngModel", "ngModelChange"], ["reminderservice.QuoteReminder.Body", "ngModel"], [1, "form-group"], ["href", "javascript:;", "class", "btn btn-brand btn-sm", 3, "click", 4, "ngIf"], ["href", "javascript:;", "class", "btn btn-brand btn-sm", 4, "ngIf"], ["href", "javascript:;", 1, "btn", "btn-brand", "btn-sm", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-brand", "btn-sm"], [1, "fa", "fa-spinner", "fa-spin"]],
        template: function ReminderModuleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Set Reminder ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ReminderModuleComponent_Template_input_change_7_listener() {
              return ctx.SelectReminder();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ReminderModuleComponent_div_9_Template, 4, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ReminderModuleComponent_div_10_Template, 33, 14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ReminderModuleComponent_div_11_Template, 37, 11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "WEEK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Sun");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "input", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_39_listener($event) {
              return ctx.service.TicketRecurringHelper.SundayIsActive = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Mon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "input", 29, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_46_listener($event) {
              return ctx.service.TicketRecurringHelper.MondayIsActive = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Tue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "input", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_53_listener($event) {
              return ctx.service.TicketRecurringHelper.TuesdayIsActive = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Wed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "input", 33, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_60_listener($event) {
              return ctx.service.TicketRecurringHelper.WednesdayIsActive = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Thu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "input", 35, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_67_listener($event) {
              return ctx.service.TicketRecurringHelper.ThursdayIsActive = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Fri");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "input", 37, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_74_listener($event) {
              return ctx.service.TicketRecurringHelper.FridayIsActive = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Sat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "input", 39, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_81_listener($event) {
              return ctx.service.TicketRecurringHelper.SaturdayIsActive = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReminderModuleComponent_Template_button_click_85_listener() {
              return ctx.TicketRecurringHelper(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Changes Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "MONTH");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "input", 47, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_114_listener($event) {
              return ctx.service.TicketRecurringHelper.Date1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "input", 49, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_121_listener($event) {
              return ctx.service.TicketRecurringHelper.Date2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "input", 50, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_128_listener($event) {
              return ctx.service.TicketRecurringHelper.Date3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "input", 51, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_135_listener($event) {
              return ctx.service.TicketRecurringHelper.Date4 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "input", 52, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_142_listener($event) {
              return ctx.service.TicketRecurringHelper.Date5 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "input", 53, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_149_listener($event) {
              return ctx.service.TicketRecurringHelper.Date6 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "input", 54, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_156_listener($event) {
              return ctx.service.TicketRecurringHelper.Date7 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "input", 55, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_164_listener($event) {
              return ctx.service.TicketRecurringHelper.Date8 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "input", 56, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_171_listener($event) {
              return ctx.service.TicketRecurringHelper.Date9 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "input", 57, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_178_listener($event) {
              return ctx.service.TicketRecurringHelper.Date10 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "11");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "input", 58, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_185_listener($event) {
              return ctx.service.TicketRecurringHelper.Date11 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "input", 59, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_192_listener($event) {
              return ctx.service.TicketRecurringHelper.Date12 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](194, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "13");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "input", 60, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_199_listener($event) {
              return ctx.service.TicketRecurringHelper.Date13 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](201, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "input", 61, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_206_listener($event) {
              return ctx.service.TicketRecurringHelper.Date14 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](208, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "input", 62, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_214_listener($event) {
              return ctx.service.TicketRecurringHelper.Date15 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "16");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "input", 63, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_221_listener($event) {
              return ctx.service.TicketRecurringHelper.Date16 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](223, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "17");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "input", 64, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_228_listener($event) {
              return ctx.service.TicketRecurringHelper.Date17 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](230, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "input", 65, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_235_listener($event) {
              return ctx.service.TicketRecurringHelper.Date18 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](237, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "19");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "input", 66, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_242_listener($event) {
              return ctx.service.TicketRecurringHelper.Date19 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](244, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "input", 67, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_249_listener($event) {
              return ctx.service.TicketRecurringHelper.Date20 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](251, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "input", 68, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_256_listener($event) {
              return ctx.service.TicketRecurringHelper.Date21 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](258, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "input", 69, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_264_listener($event) {
              return ctx.service.TicketRecurringHelper.Date22 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](266, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "23");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "input", 60, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_271_listener($event) {
              return ctx.service.TicketRecurringHelper.Date23 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](273, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "input", 70, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_278_listener($event) {
              return ctx.service.TicketRecurringHelper.Date24 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "input", 71, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_285_listener($event) {
              return ctx.service.TicketRecurringHelper.Date25 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](287, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "26");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "input", 72, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_292_listener($event) {
              return ctx.service.TicketRecurringHelper.Date26 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](294, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "27");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "input", 73, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_299_listener($event) {
              return ctx.service.TicketRecurringHelper.Date27 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](301, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "28");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "input", 74, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_306_listener($event) {
              return ctx.service.TicketRecurringHelper.Date28 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](308, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "29");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "input", 75, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_314_listener($event) {
              return ctx.service.TicketRecurringHelper.Date29 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](316, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "input", 76, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_321_listener($event) {
              return ctx.service.TicketRecurringHelper.Date30 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](323, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "31");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "input", 77, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReminderModuleComponent_Template_input_ngModelChange_328_listener($event) {
              return ctx.service.TicketRecurringHelper.Date31 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](330, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReminderModuleComponent_Template_button_click_332_listener() {
              return ctx.TicketRecurringHelper(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "Changes Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.IsVisibleContract);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.IsVisibleContract);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.IsVisibleContract);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.service.formData.TicketId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.SundayIsActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.MondayIsActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.TuesdayIsActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.WednesdayIsActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.ThursdayIsActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.FridayIsActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.SaturdayIsActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.service.formData.TicketId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.TicketRecurringHelper.Date31);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["??angular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
        styles: ["#reminderdetailModalMonth[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding: 0.65rem;}\n    #reminderdetailModalMonth[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background-clip: content-box;border:none;}\n    #reminderdetailModalMonth[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{background: #0191d2;color:white;}\n    .tickt-month-parent[_ngcontent-%COMP%]{padding:10px;}\n    .container-check[_ngcontent-%COMP%] {display: block;position: relative;padding-left:20px;margin-bottom: 12px;cursor: pointer;font-size: 22px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\n    .container-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;}\n    .checkmark[_ngcontent-%COMP%] {position: absolute;top: 0;left: 0;height:100%;width:100%;background-color: #0082c830;}\n    .container-check[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {background-color: #ccc;}\n    .container-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {background-color: #2196F3;border-bottom: 5px solid #1C5B8C;}\n    .checkmark[_ngcontent-%COMP%]:after {content: \"\";position: absolute;display: none; padding-right: 3px;}\n    .container-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {display: block;}\n    .container-check[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{ margin: 0;position: relative;display: inline-block;z-index: 1000;font-size:24px;color:black;}\n    #reminderdetailModalWeek[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#2C77F4;color:white}\n    #reminderdetailModalWeek[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding: 0.65rem;}\n    #reminderdetailModalWeek[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background-clip: content-box;border:none;}\n    #reminderdetailModalWeek[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{background: #0191d2;color:white;}\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {padding: 10px !important;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReminderModuleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'generic-reminder-module',
            template: "\n                  <div class=\"kt-portlet kt-portlet--height-fluid kt-widget19\">\n                    <div class=\"kt-portlet__head\">\n                      <div class=\"kt-portlet__head-label\">\n                        <h3 class=\"kt-portlet__head-title\">\n                        Set Reminder\n                        </h3> &nbsp; &nbsp;\n                        <label class=\"kt-checkbox kt-checkbox--solid kt-checkbox--brand\" style=\"margin-top: -12px;\">\n                        <input type=\"checkbox\" id=\"addremindercheckbox\"\n                             (change)=\"SelectReminder()\">\n                        <span></span>\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"IsVisibleContract\">\n                      <div class=\"kt-portlet__body\">\n                      <div class=\"col\">\n                        <table class=\"table\" *ngIf=\"data.length > 0\">\n                            <tr>\n                                <th *ngIf=\"this.ReminderModule === 'ticket'\">TicketId</th>\n                                <th *ngIf=\"this.ReminderModule === 'quote'\">QuoteId</th>\n                                <th *ngIf=\"this.ReminderModule === 'invoice'\">InvoiceId</th>\n                                <th>Subject</th><th>Body</th><th>Mail To</th><th>Reminder Date</th><th>Action</th>\n                            </tr>\n                            <tr *ngFor=\"let x of data; let i=index; async\">\n                                <td>{{x.RNo}}</td>\n                                <td>{{x.Subject}}</td>\n                                <td>{{x.Body}}</td>\n                                <td>{{x.MailTo}}</td>\n                                <td>{{x.ReminderDate | date:'EEEE, MMMM d, y':'+0000'}}</td>\n                                <td><a href=\"javascript:;\" (click)=\"removeReminder(x.Id, x.RId, this.ReminderModule)\"><i class=\"far fa-trash-alt text-danger\"></i></a></td>\n                            </tr>\n                            <tr><td colspan=\"6\"></td></tr>\n                        </table>\n                      </div>\n                     </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"IsVisibleContract\">\n                      <div class=\"kt-portlet__body\">\n                        <div class=\"col-md-3\">\n                          <label>Reminder Type<span class=\"text-danger\">*</span></label>\n                          <div class=\"kt-widget19__wrapper\">\n                            <select name=\"country\"\n                            class=\"form-control\"\n                            name=\"Duration\"\n                            #Duration=\"ngModel\"\n                            [(ngModel)]=\"reminderservice.QuoteReminder.Duration\"\n                            (change)=\"ChangeReminderDuration()\"\n                            aria-describedby=\"country-error\"\n                            aria-invalid=\"false\">\n                            <option value=\"{{0}}\">One Time Reminder</option>\n                            <option value=\"{{1}}\">Daily Reminder</option>\n                            <option value=\"{{7}}\">Weekly Reminder</option>\n                            <option value=\"{{30}}\">Monthly Reminder</option>\n                            <option value=\"{{90}}\">Quarterly Reminder</option>\n                            <option value=\"{{180}}\">Half Yearly Reminder</option>\n                        </select>\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\" *ngIf=\"reminderservice.QuoteReminder.Duration === 0\">\n                          <label>Reminder Date<span class=\"text-danger\">*</span></label>\n                              <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\" ngbDatepicker (click)=\"dateReminderDate.toggle()\"\n                                      style=\"height: 37px !important;\"\n                                      [minDate]=\"minDate\"\n                                      dateFormat=\"yyyy-MMM-dd\"\n                                      #dateReminderDate=\"ngbDatepicker\"\n                                      name=\"reminderservice.QuoteReminder.ReminderDate\"\n                                      #reminderservice.QuoteReminder.ReminderDate=\"ngModel\"\n                                      [(ngModel)]=\"reminderservice.QuoteReminder.ReminderDate\"\n                                      placeholder=\"dd-MM-yyyy\" [class.is-invalid]=\"!isReminderDateValid\"/>\n                                </div>\n                        </div>\n                        <div class=\"col-md-2\" *ngIf=\"reminderservice.QuoteReminder.Duration > 0\">\n                          <label>Start Date<span class=\"text-danger\">*</span></label>\n                              <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\" ngbDatepicker (click)=\"dateRecurringStartDate.toggle()\"\n                                      style=\"height: 37px !important;\"\n                                      [minDate]=\"minDate\"\n                                      dateFormat=\"yyyy-MMM-dd\"\n                                      #dateRecurringStartDate=\"ngbDatepicker\"\n                                      name=\"quoteService.QuoteReminder.RecurringStartDate\"\n                                      #reminderservice.QuoteReminder.RecurringStartDate=\"ngModel\"\n                                      [(ngModel)]=\"reminderservice.QuoteReminder.RecurringStartDate\"\n                                      placeholder=\"dd-MM-yyyy\"/>\n\n                              </div>\n                        </div>\n                        <div class=\"col-md-1\" *ngIf=\"reminderservice.QuoteReminder.Duration > 0\">\n                            <label>Frequency<span class=\"text-danger\">*</span></label>\n                              <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\"\n                                        style=\"height: 37px !important;\"\n                                        name=\"VisitFrequency\"\n                                        #VisitFrequency=\"ngModel\"\n                                        [(ngModel)]=\"reminderservice.QuoteReminder.VisitFrequency\"\n                                        (change)=\"RecurringTimeCalculator()\"/>\n                                </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                                <label>&nbsp;</label>\n                                <div class=\"input-group\">\n                              <a href=\"javascript:;\" class=\"btn btn-brand\"\n                                  *ngIf=\"reminderservice.QuoteReminder.Duration == 7\"\n                                  data-toggle=\"modal\"\n                                  id=\"remindershowWeekModal\"\n                                  data-target=\"#reminderdetailModalWeek\">\n                                 Set Week Days</a>\n                              <a href=\"javascript:;\" class=\"btn btn-brand\"\n                                  *ngIf=\"reminderservice.QuoteReminder.Duration == 30\"\n                                  data-toggle=\"modal\"\n                                  id=\"remindershowMonthModal\"\n                                  data-target=\"#reminderdetailModalMonth\">\n                                 Set Month Date</a>\n                                </div>\n                          </div>\n                        <div class=\"col-md-2\" *ngIf=\"reminderservice.QuoteReminder.Duration > 0\">\n                        <label>skip weekly/Public off</label>\n                        <div class=\"input-group\">\n                            <span class=\"kt-switch kt-switch--icon\"><label><input\n                                (change)=\"SetSkipOff($event)\" [checked]=\"skippublickholiday\"\n                                type=\"checkbox\"><span></span></label></span>\n                            <span class=\"swither-bootstrap-learn switcher-customer\">\n                            </span>\n                            </div>\n                        </div>\n                        <div class=\"col-md-2\" *ngIf=\"reminderservice.QuoteReminder.Duration > 0\">\n                            <label>Total Reminder</label>\n                            <div class=\"btooltip5\" (click)=\"clickOntoolTip2()\">\n                            <i class=\"fa fa-question-circle text-info\" style=\"cursor: pointer;\"></i>\n                                <span [ngClass]=\"this.tooltip2 ? 'btooltiptext5-1':'btooltiptext5'\" >\n                                    <span *ngFor=\"let v of recurringList2\">\n                                        {{v | date}} ({{v | date:'EEEE'}})<br>\n                                    </span>\n                                </span>\n                            </div>\n                              <div class=\"input-group\">\n                                <label class=\"form-control\" style=\"background-color: #f7f8fa;\" >{{visit_total}} Reminder</label>\n                                </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"IsVisibleContract\">\n                      <div class=\"kt-portlet__body\">\n                      <div class=\"col-md-3\">\n                        <label>Mail To<span class=\"text-danger\">*</span></label>&nbsp;\n                        <div class=\"btooltip1\"> <i\n                            class=\"fa fa-question-circle text-info\"\n                            style=\"cursor: help;\"></i>\n                        <span class=\"btooltip1text\">Can send up to 5 emails, separated by comma</span>\n                    </div>\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control\"\n                                style=\"height: 37px !important;\"\n                                name=\"reminderservice.QuoteReminder.MailTo\"\n                                #reminderservice.QuoteReminder.MailTo=\"ngModel\"\n                                [(ngModel)]=\"reminderservice.QuoteReminder.MailTo\"\n                                placeholder=\"someone@domain.com\" [class.is-invalid]=\"!isMailValid\"/>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3\">\n                        <label>Subject<span class=\"text-danger\">*</span></label>\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control\"\n                                style=\"height: 37px !important;\"\n                                name=\"reminderservice.QuoteReminder.Subject\"\n                                #reminderservice.QuoteReminder.Subject=\"ngModel\"\n                                [(ngModel)]=\"reminderservice.QuoteReminder.Subject\"\n                                placeholder=\"Subject\" [class.is-invalid]=\"!isSubjectValid\"/>\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label>Body<span class=\"text-danger\">*</span></label>\n                        <div class=\"input-group\">\n                          <textarea class=\"form-control\"  name=\"reminderservice.QuoteReminder.Body\"\n                          #reminderservice.QuoteReminder.Body=\"ngModel\"\n                          [(ngModel)]=\"reminderservice.QuoteReminder.Body\" rows=\"1\"\n                          placeholder=\"Body\" [class.is-invalid]=\"!isBodyValid\"></textarea>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <label>&nbsp;</label>\n                        <div class=\"form-group\">\n                          <a href=\"javascript:;\" *ngIf=\"!this.loading\"\n                          (click)=\"onSubmit()\"\n                              class=\"btn btn-brand btn-sm\">\n                            Add Reminder \n                          </a>\n                          <a href=\"javascript:;\" *ngIf=\"this.loading\"\n                              class=\"btn btn-brand btn-sm\">\n                              <i class=\"fa fa-spinner fa-spin\"></i>\n                          </a>\n                      </div>\n                      </div>\n                    </div>\n                    </div>\n                  </div>\n                  <div class=\"modal fade\" id=\"reminderdetailModalWeek\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <form>\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">{{service.formData.TicketId}}</h4>\n                    <button type=\"button\" class=\"close\" id=\"reminderdetailModalWeekbutton\" data-dismiss=\"modal\"></button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"detail-inner\">\n                        <div class=\"details-tabs\">\n                            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#dtab1\">WEEK</a>\n                                </li>\n                            </ul>\n                            <div class=\"tab-content\">\n                                <div id=\"dtab1\" class=\"tab-pane active\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 col-sm-12\">\n                                            <div class=\"ticket-month\">\n                                                <table class=\"table\">\n                                                    <tbody>\n                                                        <tr>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>Sun</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"SundayIsActive\" #SundayIsActive=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.SundayIsActive\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>Mon</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"MondayIsActive\" #MondayIsActive=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.MondayIsActive\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>Tue</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"TuesdayIsActive\"\n                                                                        #TuesdayIsActive=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.TuesdayIsActive\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>Wed</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"WednesdayIsActive\"\n                                                                        #WednesdayIsActive=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.WednesdayIsActive\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>Thu</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"ThursdayIsActive\"\n                                                                        #ThursdayIsActive=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.ThursdayIsActive\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>Fri</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"FridayIsActive\" #FridayIsActive=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.FridayIsActive\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>Sat</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"SaturdayIsActive\"\n                                                                        #SaturdayIsActive=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.SaturdayIsActive\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 col-sm-12\">\n                                        <button type=\"button\" (click)=\"TicketRecurringHelper(1)\"\n                                            class=\"btn btn-secondary\">Changes Apply</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n                  <div class=\"modal fade\" id=\"reminderdetailModalMonth\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <form>\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">{{service.formData.TicketId}}</h4>\n                    <button type=\"button\" class=\"close\" id=\"reminderdetailModalMonthbutton\" data-dismiss=\"modal\"></button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"detail-inner\">\n                        <div class=\"details-tabs\">\n                            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#dtab2\">MONTH</a>\n                                </li>\n                            </ul>\n                            <div class=\"tab-content\">\n                                <div id=\"dtab2\" class=\"tab-pane active\">\n                                    <div class=\"row tickt-month-parent\">\n                                        <div class=\"col-md-12 col-sm-12\">\n                                            <div class=\"ticket-month\">\n\n                                                <table class=\"table\">\n                                                    <tbody>\n                                                        <tr>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>1</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date1\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date1\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>2</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date2\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date2\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>3</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date3\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date3\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>4</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date4\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date4\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>5</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date5\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date5\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>6</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date6\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date6\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>7</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date7\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date7\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                        </tr>\n\n\n                                                        <tr>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>8</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date8\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date8\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>9</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date9\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date9\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>10</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date10\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date10\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>11</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date11\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date11\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>12</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date12\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date12\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>13</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date13\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date13\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>14</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date14\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date14\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                        </tr>\n\n\n                                                        <tr>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>15</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date15\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date15\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>16</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date16\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date16\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>17</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date17\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date17\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>18</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date18\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date18\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>19</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date19\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date19\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>20</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date20\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date20\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>21</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date21\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date21\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>22</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date22\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date22\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>23</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date13\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date23\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>24</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date24\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date24\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>25</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date25\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date25\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>26</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date26\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date26\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>27</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date27\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date27\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>28</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date28\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date28\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>29</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date29\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date29\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>30</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date30\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date30\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                            <td>\n                                                                <label class=\"container-check\">\n                                                                    <p>31</p>\n                                                                    <input type=\"checkbox\" checked=\"checked\"\n                                                                        name=\"Date31\" #Date1=\"ngModel\"\n                                                                        [(ngModel)]=\"service.TicketRecurringHelper.Date31\">\n                                                                    <span class=\"checkmark\"></span>\n                                                                </label>\n                                                            </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 col-sm-12\">\n                                        <button type=\"button\" (click)=\"TicketRecurringHelper(2)\"\n                                            class=\"btn btn-secondary\">Changes Apply</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n  ",
            styles: ["\n    #reminderdetailModalMonth .modal-header{padding: 0.65rem;}\n    #reminderdetailModalMonth .modal-content{background-clip: content-box;border:none;}\n    #reminderdetailModalMonth .modal-content .nav-tabs .nav-item .nav-link{background: #0191d2;color:white;}\n    .tickt-month-parent{padding:10px;}\n    .container-check {display: block;position: relative;padding-left:20px;margin-bottom: 12px;cursor: pointer;font-size: 22px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\n    .container-check input {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;}\n    .checkmark {position: absolute;top: 0;left: 0;height:100%;width:100%;background-color: #0082c830;}\n    .container-check:hover input ~ .checkmark {background-color: #ccc;}\n    .container-check input:checked ~ .checkmark {background-color: #2196F3;border-bottom: 5px solid #1C5B8C;}\n    .checkmark:after {content: \"\";position: absolute;display: none; padding-right: 3px;}\n    .container-check input:checked ~ .checkmark:after {display: block;}\n    .container-check p{ margin: 0;position: relative;display: inline-block;z-index: 1000;font-size:24px;color:black;}\n    #reminderdetailModalWeek .btn{background-color:#2C77F4;color:white}\n    #reminderdetailModalWeek .modal-header{padding: 0.65rem;}\n    #reminderdetailModalWeek .modal-content{background-clip: content-box;border:none;}\n    #reminderdetailModalWeek .modal-content .nav-tabs .nav-item .nav-link{background: #0191d2;color:white;}\n    .table th .table td {padding: 10px !important;}\n    "]
          }]
        }], function () {
          return [{
            type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"]
          }, {
            type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]
          }, {
            type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceService"]
          }, {
            type: src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_6__["ReminderService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_8__["GenicProfileService"]
          }];
        }, {
          Id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          Token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ReminderModule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "H/qo":
    /*!***********************************************!*\
      !*** ./node_modules/email-validator/index.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function HQo(module, exports, __webpack_require__) {
      "use strict";

      var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/; // Thanks to:
      // http://fightingforalostcause.net/misc/2006/compare-email-regex.php
      // http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
      // http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378

      exports.validate = function (email) {
        if (!email) return false;
        if (email.length > 254) return false;
        var valid = tester.test(email);
        if (!valid) return false; // Further checking of some things regex can't handle

        var parts = email.split("@");
        if (parts[0].length > 64) return false;
        var domainParts = parts[1].split(".");
        if (domainParts.some(function (part) {
          return part.length > 63;
        })) return false;
        return true;
      };
      /***/

    },

    /***/
    "wTVD":
    /*!************************************************************************!*\
      !*** ./src/app/generic-utils/Reminder-Module/ReminderModule.module.ts ***!
      \************************************************************************/

    /*! exports provided: ReminderModuleModule */

    /***/
    function wTVD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReminderModuleModule", function () {
        return ReminderModuleModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ReminderModule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ReminderModule.component */
      "7Q/8");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/ngb-date-to-string-adapter */
      "x8Rg");
      /* harmony import */


      var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/ngb-time-to-string-adapter */
      "dRK5");

      var ReminderModuleModule = function ReminderModuleModule() {
        _classCallCheck(this, ReminderModuleModule);
      };

      ReminderModuleModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ReminderModuleModule
      });
      ReminderModuleModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ReminderModuleModule_Factory(t) {
          return new (t || ReminderModuleModule)();
        },
        providers: [{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbTimeToStringAdapter"]
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ReminderModuleModule, {
          declarations: [_ReminderModule_component__WEBPACK_IMPORTED_MODULE_3__["ReminderModuleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
          exports: [_ReminderModule_component__WEBPACK_IMPORTED_MODULE_3__["ReminderModuleComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReminderModuleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
            declarations: [_ReminderModule_component__WEBPACK_IMPORTED_MODULE_3__["ReminderModuleComponent"]],
            exports: [_ReminderModule_component__WEBPACK_IMPORTED_MODULE_3__["ReminderModuleComponent"]],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"],
              useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__["NgbDateToStringAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"],
              useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbTimeToStringAdapter"]
            }]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~application-invoices-invoices-module~application-quotes-quotes-module~application-tickets-ti~c0f79758-es5.js.map