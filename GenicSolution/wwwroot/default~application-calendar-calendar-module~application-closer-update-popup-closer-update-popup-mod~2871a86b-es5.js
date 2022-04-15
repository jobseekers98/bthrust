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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-calendar-calendar-module~application-closer-update-popup-closer-update-popup-mod~2871a86b"], {
    /***/
    "OC8m":
    /*!**************************************************!*\
      !*** ./src/app/services/notification.service.ts ***!
      \**************************************************/

    /*! exports provided: NotificationService */

    /***/
    function OC8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(http) {
          _classCallCheck(this, NotificationService);

          this.http = http;
          this.SetNotificationDefault();
          this.SetNotificationTemplateDefault();
          this.NotificationTemplateList = [];
        }

        _createClass(NotificationService, [{
          key: "SetNotificationDefault",
          value: function SetNotificationDefault() {
            this.NotificationData = {
              Id: '00000000-0000-0000-0000-000000000000',
              CreateTicketCustomer: false,
              CreateTicketEngineer: false,
              CreateTicketAdmin: false,
              AllocateTicketCustomer: false,
              AllocateTicketEngineer: false,
              AllocateTicketAdmin: false,
              ReAllocateTicketCustomer: false,
              ReAllocateTicketEngineer: false,
              ReAllocateTicketAdmin: false,
              RescheduleTicketCustomer: false,
              RescheduleTicketEngineer: false,
              RescheduleTicketAdmin: false,
              CompletionTicketCustomer: false,
              CompletionTicketAdmin: false,
              HoldTicketCustomer: false,
              HoldTicketAdmin: false,
              WorkOrderCustomer: false,
              WorkOrderAdmin: false,
              QuoteCustomer: false,
              QuoteAdmin: false,
              StartEndTicketCustomer: false,
              StartEndTicketAdmin: false,
              ReminRecurTicketCustomer: false,
              ReminRecurTicketEngineer: false,
              ReminRecurTicketAdmin: false,
              DailyNosOfTicketEngineer: false,
              CancelTicketCustomer: false,
              CancelTicketEngineer: false,
              CancelTicketAdmin: false,
              OnServiceDayCustomer: false,
              OnServiceDayEngineer: false,
              OnServiceDayAdmin: false,
              OnTheDayCustomer: false,
              OnTheDayTicketAdmin: false
            };
          }
        }, {
          key: "SetNotificationTemplateDefault",
          value: function SetNotificationTemplateDefault() {
            this.NotificationTemplateData = {
              Id: '00000000-0000-0000-0000-000000000000',
              TemplateName: '',
              ModuleName: '',
              CustomerMailBody: '',
              MobileNotification: '',
              IsRead: false,
              EngineerMailBody: '',
              AdminMailBody: '',
              IsActive: true
            };
          }
        }, {
          key: "getNotification",
          value: function getNotification(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/GetModuleNotification/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "putNotificationDetails",
          value: function putNotificationDetails(token) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/putModuleNotifications/' + token, this.NotificationData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } //-----------------------Email template Section ---------------------------------------------//
          //get template list

        }, {
          key: "getEmailTemplateList",
          value: function getEmailTemplateList() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/getEmailTemplateList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (Response) {
              return Response;
            }));
          } //get template details

        }, {
          key: "getEmailTemplate",
          value: function getEmailTemplate(Id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/getEmailTemplate/' + Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (Response) {
              return Response;
            }));
          } // Add Email template

        }, {
          key: "AddEmailTemplate",
          value: function AddEmailTemplate() {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/AddEmailTemplate', this.NotificationTemplateData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } // Update Email template

        }, {
          key: "UpdateEmailTemplate",
          value: function UpdateEmailTemplate() {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/UpdateEmailTemplate', this.NotificationTemplateData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "changeNotificationTemplateStatus",
          value: function changeNotificationTemplateStatus(Id, CurrStatus) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/changeNotificationTemplateStatus/' + Id + '/' + CurrStatus, null, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              observe: 'response'
            }).pipe();
          } // Send Quote Notification

        }, {
          key: "quoteEmailNotification",
          value: function quoteEmailNotification(QuoteId, isCust, isAdmin, AdminId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/quoteEmailNotification/' + QuoteId + '/' + isCust + '/' + isAdmin + '/' + AdminId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } // Send Quote Notification

        }, {
          key: "updateQuoteEmailNotification",
          value: function updateQuoteEmailNotification(QuoteId, isCust, isAdmin, AdminId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/UpdatequoteEmailNotification/' + QuoteId + '/' + isCust + '/' + isAdmin + '/' + AdminId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } //Send Work order Notification

        }, {
          key: "WorkOrderEmailNotification",
          value: function WorkOrderEmailNotification(CloserId, AdminId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/WorkOrderEmailNotification/' + CloserId + '/' + AdminId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } //Send New Ticket  Notification

        }, {
          key: "NewTicketEmailNotification",
          value: function NewTicketEmailNotification(TicketId, isCust, isAdmin, AdminId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/TicketEmailNotification/' + TicketId + '/' + isCust + '/' + isAdmin + '/' + AdminId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } //Re-Schedule ticket notification

        }, {
          key: "ReScheduleTicketEmailNotification",
          value: function ReScheduleTicketEmailNotification(oldEngList, TicketId, AdminId, OldDate, OldTime) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/ReScheduleTicketBodyTemplate/' + TicketId + '/' + AdminId + '/' + OldDate + '/' + OldTime, oldEngList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } //Completion ticket notification

        }, {
          key: "StartTicketEmailNotification",
          value: function StartTicketEmailNotification(TicketId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/StartTicketEmailNotification/' + TicketId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } //Completion ticket notification

        }, {
          key: "CompletionTicketEmailNotification",
          value: function CompletionTicketEmailNotification(CloserId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/CompletionTicketEmailNotification/' + CloserId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } //Completion ticket notification

        }, {
          key: "HoldTicketEmailNotification",
          value: function HoldTicketEmailNotification(CloserId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/HoldTicketEmailNotification/' + CloserId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } //Cancelled ticket notification

        }, {
          key: "CancelledTicketEmailNotification",
          value: function CancelledTicketEmailNotification(TicketId, AdminId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/CancelledTicketEmailNotification/' + TicketId + '/' + AdminId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } //Re-Allocation ticket notification

        }, {
          key: "ReAllocationTicketEmailNotification",
          value: function ReAllocationTicketEmailNotification(oldEngList, TicketId, isCust, isAdmin, AdminId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/ReAllocationTicketEmailNotificationss/' + TicketId + '/' + isCust + '/' + isAdmin + '/' + AdminId, oldEngList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dRK5":
    /*!***********************************************!*\
      !*** ./src/app/ngb-time-to-string-adapter.ts ***!
      \***********************************************/

    /*! exports provided: NgbTimeToStringAdapter */

    /***/
    function dRK5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbTimeToStringAdapter", function () {
        return NgbTimeToStringAdapter;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /** Outer dependencies */


      function isInteger(value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
      }

      function isString(value) {
        return typeof value === 'string';
      }

      var NgbTimeToStringAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
        _inherits(NgbTimeToStringAdapter, _ng_bootstrap_ng_boot);

        var _super = _createSuper(NgbTimeToStringAdapter);

        function NgbTimeToStringAdapter() {
          var _this;

          _classCallCheck(this, NgbTimeToStringAdapter);

          _this = _super.apply(this, arguments);
          _this.year = new Date().getUTCFullYear();
          _this.month = new Date().getUTCMonth() + 1;
          _this.day = new Date().getUTCDate();
          return _this;
        }
        /**
         * Converts user-model date into an NgbTimeStruct for internal use in the library
         */


        _createClass(NgbTimeToStringAdapter, [{
          key: "fromModel",
          value: function fromModel(dateString) {
            var date = new Date(dateString);
            var isValidDate = !isNaN(date.valueOf());

            if (!dateString || !isString(dateString) || !isValidDate) {
              return null;
            }

            this.year = date.getUTCFullYear();
            this.month = date.getUTCMonth() + 1;
            this.day = date.getUTCDate();
            return {
              hour: date.getUTCHours(),
              minute: date.getUTCMinutes(),
              second: date.getUTCSeconds()
            };
          }
          /**
           * Converts internal time value NgbTimeStruct to user-model date
           * The returned type is supposed to be of the same type as fromModel() input-value param
           */

        }, {
          key: "toModel",
          value: function toModel(time) {
            if (time && isInteger(time.hour) && isInteger(time.minute) && isInteger(time.second)) {
              var year = this.year.toString().padStart(2, '0');
              var month = this.month.toString().padStart(2, '0');
              var day = this.day.toString().padStart(2, '0');
              var hour = time.hour.toString().padStart(2, '0');
              var minute = time.minute.toString().padStart(2, '0');
              var second = time.second.toString().padStart(2, '0');
              return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second, "Z");
            }

            return null;
          }
        }]);

        return NgbTimeToStringAdapter;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"]);

      NgbTimeToStringAdapter.ɵfac = function NgbTimeToStringAdapter_Factory(t) {
        return ɵNgbTimeToStringAdapter_BaseFactory(t || NgbTimeToStringAdapter);
      };

      NgbTimeToStringAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgbTimeToStringAdapter,
        factory: NgbTimeToStringAdapter.ɵfac
      });

      var ɵNgbTimeToStringAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbTimeToStringAdapter);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimeToStringAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "x8Rg":
    /*!***********************************************!*\
      !*** ./src/app/ngb-date-to-string-adapter.ts ***!
      \***********************************************/

    /*! exports provided: NgbDateToStringAdapter */

    /***/
    function x8Rg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbDateToStringAdapter", function () {
        return NgbDateToStringAdapter;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /** Outer dependencies */


      function isInteger(value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
      }

      function isString(value) {
        return typeof value === 'string';
      }

      var NgbDateToStringAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot2) {
        _inherits(NgbDateToStringAdapter, _ng_bootstrap_ng_boot2);

        var _super2 = _createSuper(NgbDateToStringAdapter);

        function NgbDateToStringAdapter() {
          var _this2;

          _classCallCheck(this, NgbDateToStringAdapter);

          _this2 = _super2.apply(this, arguments);
          _this2.hour = 0;
          _this2.minute = 0;
          _this2.second = 0;
          return _this2;
        }
        /**
         * Converts user-model date into an NgbDateStruct for internal use in the library
         */


        _createClass(NgbDateToStringAdapter, [{
          key: "fromModel",
          value: function fromModel(dateString) {
            var date = new Date(dateString);
            var isValidDate = !isNaN(date.valueOf());

            if (!dateString || !isString(dateString) || !isValidDate) {
              return null;
            }

            this.hour = date.getUTCHours();
            this.minute = date.getUTCMinutes();
            this.second = date.getUTCSeconds();
            return {
              year: date.getUTCFullYear(),
              month: date.getUTCMonth() + 1,
              day: date.getUTCDate()
            };
          }
          /**
           * Converts internal date value NgbDateStruct to user-model date
           * The returned type is supposed to be of the same type as fromModel() input-value param
           */

        }, {
          key: "toModel",
          value: function toModel(date) {
            if (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) {
              var year = date.year.toString().padStart(2, '0');
              var month = date.month.toString().padStart(2, '0');
              var day = date.day.toString().padStart(2, '0');
              var hour = this.hour.toString().padStart(2, '0');
              var minute = this.minute.toString().padStart(2, '0');
              var second = this.second.toString().padStart(2, '0');
              return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second, "Z");
            }

            return null;
          }
        }]);

        return NgbDateToStringAdapter;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"]);

      NgbDateToStringAdapter.ɵfac = function NgbDateToStringAdapter_Factory(t) {
        return ɵNgbDateToStringAdapter_BaseFactory(t || NgbDateToStringAdapter);
      };

      NgbDateToStringAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgbDateToStringAdapter,
        factory: NgbDateToStringAdapter.ɵfac
      });

      var ɵNgbDateToStringAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateToStringAdapter);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateToStringAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~application-calendar-calendar-module~application-closer-update-popup-closer-update-popup-mod~2871a86b-es5.js.map