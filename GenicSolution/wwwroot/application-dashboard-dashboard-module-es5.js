(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-dashboard-dashboard-module"], {
    /***/
    "0AbP":
    /*!***********************************************!*\
      !*** ./src/app/services/dashboard.service.ts ***!
      \***********************************************/

    /*! exports provided: DashboardService */

    /***/
    function AbP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
        return DashboardService;
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

      var DashboardService = /*#__PURE__*/function () {
        function DashboardService(http) {
          _classCallCheck(this, DashboardService);

          this.http = http;
          this.SetAsDefaultValues();
        }

        _createClass(DashboardService, [{
          key: "SetAsDefaultValues",
          value: function SetAsDefaultValues() {
            this.DashBoardCustomer = {
              CustomerCount: 0,
              CustomerPer: 0,
              CustomerAll: 0,
              CustomerActive: 0,
              CustomerTotalAmount: 0,
              CustomerStatus: 'success'
            };
            this.DashBoardTicket = {
              TicketCount: 0,
              TicketPer: 0,
              TicketAll: 0,
              TicketRecurring: 0,
              TicketTotalAmount: 0,
              TicketStatus: ''
            };
            this.DashboardTotal = {
              TotalTicketOpen: 0,
              TotalTicketTodayNew: 0,
              TotalTicketClosedToday: 0,
              TotalTicketOverDue: 0,
              TotalEngneer: 0
            };
            this.DashboardAverage = {
              AvegareCount: 0,
              AvegarePer: 0,
              AvegarePerTicket: 0,
              AverageStatus: ''
            };
            this.DashboardTicketDue = {
              TicketDueTimeToday: 0,
              TicketDueTimeTomarrow: 0,
              TicketDueTimeThisWeek: 0,
              TicketDueTimeNextWeek: 0,
              TicketDueTimeNextMonth: 0
            };
            this.DashboardTicketChart = {
              TicketChartTodayHeigh: 0,
              TicketChartTodayMedium: 0,
              TicketChartTodayLow: 0,
              TicketChartTomarrowHeigh: 0,
              TicketChartTomarrowMedium: 0,
              TicketChartTomarrowLow: 0,
              TicketChartThisWeekHeigh: 0,
              TicketChartThisWeekMedium: 0,
              TicketChartThisWeekLow: 0
            };
            this.DashboardTicketPieChart = {
              Count: 0,
              TicketIssueTypeId: 0,
              Name: ''
            };
            this.EDTicket = {
              TotalTicket: 0,
              TotalOpenTicket: 0,
              TotalNewTicketToday: 0,
              TotalTicketClosedToday: 0,
              TotalTicketOverDue: 0,
              TotalUpcoming: 0
            };
            this.EDTicketDue = {
              TicketOverDue: 0,
              TicketDueTimeToday: 0,
              TicketDueTimeTomarrow: 0,
              TicketDueTimeThisWeek: 0,
              TicketDueTimeNextWeek: 0,
              TicketDueTimeNextMonth: 0
            };
            this.EDTicketChart = {
              TicketChartTodayHeigh: 0,
              TicketChartTodayMedium: 0,
              TicketChartTodayLow: 0,
              TicketChartTomarrowHeigh: 0,
              TicketChartTomarrowMedium: 0,
              TicketChartTomarrowLow: 0,
              TicketChartThisWeekHeigh: 0,
              TicketChartThisWeekMedium: 0,
              TicketChartThisWeekLow: 0
            };
            this.CDTicket = {
              TotalTicket: 0,
              TotalOpenTicket: 0,
              TotalNewTicketToday: 0,
              TotalTicketClosedToday: 0,
              TotalTicketOverDue: 0,
              TotalUpcoming: 0
            };
            this.CDTicketDue = {
              TicketOverDue: 0,
              TicketDueTimeToday: 0,
              TicketDueTimeTomarrow: 0,
              TicketDueTimeThisWeek: 0,
              TicketDueTimeNextWeek: 0,
              TicketDueTimeNextMonth: 0
            };
            this.CDTicketChart = {
              TicketChartTodayHeigh: 0,
              TicketChartTodayMedium: 0,
              TicketChartTodayLow: 0,
              TicketChartTomarrowHeigh: 0,
              TicketChartTomarrowMedium: 0,
              TicketChartTomarrowLow: 0,
              TicketChartThisWeekHeigh: 0,
              TicketChartThisWeekMedium: 0,
              TicketChartThisWeekLow: 0
            };
          } //#region Admin Dashboard methods (api) Begin

        }, {
          key: "refrestDashboardCustomer",
          value: function refrestDashboardCustomer(token, key) {
            var _this = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/Customer/' + token + '/' + key).toPromise().then(function (res) {
              return _this.DashBoardCustomer = res;
            });
          }
        }, {
          key: "refrestDashboardTicket",
          value: function refrestDashboardTicket(token, key) {
            var _this2 = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/Ticket/' + token + '/' + key).toPromise().then(function (res) {
              return _this2.DashBoardTicket = res;
            });
          }
        }, {
          key: "refrestDashboardTotal",
          value: function refrestDashboardTotal(token) {
            var _this3 = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/Total/' + token).toPromise().then(function (res) {
              return _this3.DashboardTotal = res;
            });
          }
        }, {
          key: "refrestDashboardAvegareRevenue",
          value: function refrestDashboardAvegareRevenue(token, key) {
            var _this4 = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/AvegareRevenue/' + token + '/' + key).toPromise().then(function (res) {
              return _this4.DashboardAverage = res;
            });
          }
        }, {
          key: "refrestDashboardTicketDue",
          value: function refrestDashboardTicketDue(token) {
            var _this5 = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/TicketDue/' + token).toPromise().then(function (res) {
              return _this5.DashboardTicketDue = res;
            });
          }
        }, {
          key: "refrestDashboardTicketColumnChart",
          value: function refrestDashboardTicketColumnChart(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/TicketColumnChart/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestDashboardTicketPieChartList",
          value: function refrestDashboardTicketPieChartList(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/TicketPieChart/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          } //#endregion Admin Dashboard methods (api) Begin
          //#region Engineer Dashboard methods (api) Begin

        }, {
          key: "refrestEDTotal",
          value: function refrestEDTotal(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/EDTotal/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestEDTicketDue",
          value: function refrestEDTicketDue(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/EDTicketDue/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestEDTicketColumnChart",
          value: function refrestEDTicketColumnChart(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/EDTicketColumnChart/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestEDTicketPieChartList",
          value: function refrestEDTicketPieChartList(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/EDTicketPieChart/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          } //#endregion Engineer Dashboard methods (api) Begin
          //#region Customer Dashboard methods (api) Begin

        }, {
          key: "refrestCDTotal",
          value: function refrestCDTotal(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/CDTotal/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestCDTicketDue",
          value: function refrestCDTicketDue(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/CDTicketDue/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestCDTicketColumnChart",
          value: function refrestCDTicketColumnChart(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/CDTicketColumnChart/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestCDTicketPieChartList",
          value: function refrestCDTicketPieChartList(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/CDTicketPieChart/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          } //#endregion Engineer Dashboard methods (api) Begin
          //#region 

        }, {
          key: "getTicketheaderCount",
          value: function getTicketheaderCount(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/GetTicketHeaderCount/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }]);

        return DashboardService;
      }();

      DashboardService.??fac = function DashboardService_Factory(t) {
        return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      DashboardService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: DashboardService,
        factory: DashboardService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardService, [{
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
    "aBbQ":
    /*!***********************************************************!*\
      !*** ./src/app/application/dashboard/dashboard.module.ts ***!
      \***********************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function aBbQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component */
      "yn/t");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var angular_highcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-highcharts */
      "a0Xn");
      /* harmony import */


      var src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module */
      "7kmZ");
      /* harmony import */


      var src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Team-List/TicketTeamList.module */
      "5ngV");
      /* harmony import */


      var src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module */
      "3jFn");
      /* harmony import */


      var src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module */
      "HdV0");

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }, {
        path: 'dashboard',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }];

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_6__["ChartModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_7__["TicketStatusComponentModule"], src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_8__["TicketTeamListModule"], src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_9__["TicketDateTimeFormatModule"], src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_10__["TicketFeedbackComponentModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_6__["ChartModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_7__["TicketStatusComponentModule"], src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_8__["TicketTeamListModule"], src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_9__["TicketDateTimeFormatModule"], src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_10__["TicketFeedbackComponentModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_6__["ChartModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_7__["TicketStatusComponentModule"], src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_8__["TicketTeamListModule"], src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_9__["TicketDateTimeFormatModule"], src_app_generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_10__["TicketFeedbackComponentModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "yn/t":
    /*!**************************************************************!*\
      !*** ./src/app/application/dashboard/dashboard.component.ts ***!
      \**************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function ynT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-highcharts */
      "a0Xn");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/ticket.service */
      "KPvW");
      /* harmony import */


      var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/quote.service */
      "uOqW");
      /* harmony import */


      var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/invoice.service */
      "py7r");
      /* harmony import */


      var src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/engineer.service */
      "+MZO");
      /* harmony import */


      var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/dashboard.service */
      "0AbP");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.component */
      "Sh6L");
      /* harmony import */


      var _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.component */
      "myuM");
      /* harmony import */


      var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */
      "X7qY");
      /* harmony import */


      var _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../generic-utils/Ticket-Team-List/TicketTeamList.component */
      "U6ah");

      function DashboardComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_div_12_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.addcustomer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "polygon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "path", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "path", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Add Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "rect", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "path", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "path", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "path", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "svg", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "rect", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "path", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Add ", ctx_r2.currentUser.Ticket, "s");
        }
      }

      function DashboardComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "svg", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "rect", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "polygon", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "polygon", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Add Quotes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "polygon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "path", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "path", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Add Invoices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_span_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r5.service.DashBoardCustomer.CustomerPer.toFixed(2), "% ");
        }
      }

      function DashboardComponent_label_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" more than last ", ctx_r6.CustomerDurationType, "");
        }
      }

      function DashboardComponent_span_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r7.service.DashBoardCustomer.CustomerPer.toFixed(2), "% ");
        }
      }

      function DashboardComponent_label_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" less than last ", ctx_r8.CustomerDurationType, "");
        }
      }

      function DashboardComponent_span_118_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r9.service.DashBoardTicket.TicketPer.toFixed(2), "% ");
        }
      }

      function DashboardComponent_label_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" more than last ", ctx_r10.TicketDurationType, "");
        }
      }

      function DashboardComponent_span_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r11.service.DashBoardTicket.TicketPer.toFixed(2), "% ");
        }
      }

      function DashboardComponent_label_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" less than last ", ctx_r12.TicketDurationType, "");
        }
      }

      function DashboardComponent_p_169_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r13.service.DashboardAverage.AvegarePer.toFixed(2), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" more than last ", ctx_r13.AverageRevenueType, " ");
        }
      }

      function DashboardComponent_p_170_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r14.service.DashboardAverage.AvegarePer.toFixed(2).substring(1, 10), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" less than last ", ctx_r14.AverageRevenueType, " ");
        }
      }

      function DashboardComponent_span_174_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" up by ", ctx_r15.service.DashboardAverage.AvegarePerTicket.toFixed(2), "");
        }
      }

      function DashboardComponent_span_175_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" down by ", ctx_r16.service.DashboardAverage.AvegarePer.toFixed(2).substring(1, 10), "");
        }
      }

      function DashboardComponent_tr_390_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_tr_390_span_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var x_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r29.viewQuoteDetails(x_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r22.QuoteId, "");
        }
      }

      function DashboardComponent_tr_390_span_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_tr_390_span_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r35);

            var x_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r33.ViewInvoiceDetails(x_r22.InvoiceId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r22.InvoiceNo, "");
        }
      }

      function DashboardComponent_tr_390_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Recurring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_tr_390_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "UNALLOCATED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_tr_390_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "RESECHEDULED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_tr_390_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_tr_390_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r37.ViewTicketDetails(x_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DashboardComponent_tr_390_span_6_Template, 4, 1, "span", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, DashboardComponent_tr_390_span_7_Template, 4, 1, "span", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, DashboardComponent_tr_390_span_8_Template, 2, 0, "span", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "generic-ticket-feedback", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ratingcountChange", function DashboardComponent_tr_390_Template_generic_ticket_feedback_ratingcountChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.Rating = $event;
          })("StatusChange", function DashboardComponent_tr_390_Template_generic_ticket_feedback_StatusChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.Status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "generic-ticket-date-time-format", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("AChange", function DashboardComponent_tr_390_Template_generic_ticket_date_time_format_AChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.AppointmentStart = $event;
          })("BChange", function DashboardComponent_tr_390_Template_generic_ticket_date_time_format_BChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.AppointmentEnd = $event;
          })("CChange", function DashboardComponent_tr_390_Template_generic_ticket_date_time_format_CChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.CreatedUtcDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, DashboardComponent_tr_390_span_12_Template, 2, 0, "span", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, DashboardComponent_tr_390_span_13_Template, 2, 0, "span", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Company: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "generic-ticket-status", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("StatusChange", function DashboardComponent_tr_390_Template_generic_ticket_status_StatusChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.Status = $event;
          })("OverDueDaysChange", function DashboardComponent_tr_390_Template_generic_ticket_status_OverDueDaysChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.OverDueDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "generic-ticket-team-list", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("TicketTeamsChange", function DashboardComponent_tr_390_Template_generic_ticket_team_list_TicketTeamsChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.TicketTeams = $event;
          })("localPrependUrlChange", function DashboardComponent_tr_390_Template_generic_ticket_team_list_localPrependUrlChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r47.localPrependUrl = $event;
          })("ReallocateChange", function DashboardComponent_tr_390_Template_generic_ticket_team_list_ReallocateChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.Reallocate = $event;
          })("IdChange", function DashboardComponent_tr_390_Template_generic_ticket_team_list_IdChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.Id = $event;
          })("TicketIdChange", function DashboardComponent_tr_390_Template_generic_ticket_team_list_TicketIdChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var x_r22 = ctx.$implicit;
            return x_r22.TicketId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r22 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r22.TicketId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r22.QuoteId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (x_r22.InvoiceNo == null ? null : x_r22.InvoiceNo.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r22.TicketType === "Recurring Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ratingcount", x_r22.Rating)("Editable", 2)("Status", x_r22.Status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("A", x_r22.AppointmentStart)("B", x_r22.AppointmentEnd)("C", x_r22.CreatedUtcDate)("T", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r22.OneOffAppointmentDate === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r22.Rescheduled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r22.CustomerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r22.CustomerCompanyName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r22.CustomerAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("Status", x_r22.Status)("OverDueDays", x_r22.OverDueDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("TicketTeams", x_r22.TicketTeams)("localPrependUrl", ctx_r17.localPrependUrl)("Reallocate", x_r22.Reallocate)("Id", x_r22.Id)("TicketId", x_r22.TicketId);
        }
      }

      function DashboardComponent_div_393_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Loading... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_table_400_tr_14_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 152);
        }

        if (rf & 2) {
          var x_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", x_r52.EngineerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "", ctx_r54.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function DashboardComponent_table_400_tr_14_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 152);
        }

        if (rf & 2) {
          var x_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", x_r52.EngineerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", x_r52.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function DashboardComponent_table_400_tr_14_span_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_table_400_tr_14_span_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_table_400_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DashboardComponent_table_400_tr_14_img_2_Template, 1, 2, "img", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DashboardComponent_table_400_tr_14_img_3_Template, 1, 2, "img", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_table_400_tr_14_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61);

            var x_r52 = ctx.$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r60.detailsengineer(x_r52.Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, DashboardComponent_table_400_tr_14_span_35_Template, 2, 0, "span", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, DashboardComponent_table_400_tr_14_span_36_Template, 2, 0, "span", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r52 = ctx.$implicit;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r52.EngineerLogo.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r52.EngineerLogo.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r52.EngineerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", x_r52.IsActive === true ? "online" : "offline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", x_r52.IsActive ? "dot red" : "dot yellow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r52.EngineerName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r52.EngineerPhone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r52.EngineerEmail, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Open ", ctx_r51.currentUser.Ticket, " :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r52.OpenTicket);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Closed ", ctx_r51.currentUser.Ticket, " :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r52.ClosedTicket, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Over Due ", ctx_r51.currentUser.Ticket, " :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r52.OverDueTicket, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r52.Working === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r52.Working === false);
        }
      }

      function DashboardComponent_table_400_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Working");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, DashboardComponent_table_400_tr_14_Template, 37, 16, "tr", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx_r19.dtOptions2)("dtTrigger", ctx_r19.dtTrigger2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r19.currentUser.Engineer, "\xA0Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r19.currentUser.Engineer, " Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r19.currentUser.Ticket, "'s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r19.tempEngineerList);
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(titleService, ticketservice, quoteService, invoiceservice, engineerservice, service, loginservice, genicprofileservice, router) {
          var _this6 = this;

          _classCallCheck(this, DashboardComponent);

          this.titleService = titleService;
          this.ticketservice = ticketservice;
          this.quoteService = quoteService;
          this.invoiceservice = invoiceservice;
          this.engineerservice = engineerservice;
          this.service = service;
          this.loginservice = loginservice;
          this.genicprofileservice = genicprofileservice;
          this.router = router;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.dtOptions2 = {};
          this.dtTrigger2 = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.loginservice.currentUser.subscribe(function (x) {
            return _this6.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
          this.tempEngineerList = [];
          this.tempEngineerList2 = [];
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.validateUser()) {
              if (!this.currentUser.Permissions.DashboardAdmin) {
                this.router.navigate(['/drive/my-drive']);
              }

              this.titleService.setTitle('Dashboard | Genic Solution');
              this.genicprofileservice.TicketFilter.IsReady = false;
              this.genicprofileservice.TicketFilter.IsReadyQuote = false;
              this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
              this.dtOptions = {
                pagingType: 'full_numbers',
                paging: true,
                pageLength: 5,
                ordering: false,
                lengthMenu: [5, 10, 25, 50, 75, 100]
              };
              this.dtOptions2 = {
                pagingType: 'full_numbers',
                paging: true,
                pageLength: 5,
                ordering: false,
                lengthMenu: [5, 10, 25, 50, 75, 100]
              };
              this.dropdownbtncustomer = 'THIS MONTH';
              this.dropdownbtnticket = 'THIS MONTH';
              this.dropdownbtnavgrev = 'THIS MONTH';
              this.piechart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({}); // ** Dashboard Customer Data Get */

              this.service.refrestDashboardCustomer(this.currentUser.Token);
              this.CustomerDurationType = 'month'; // ** Dashboard Customer Data Get */

              this.service.refrestDashboardTicket(this.currentUser.Token);
              this.TicketDurationType = 'month'; // ** Dashboard Total Data Get */

              this.service.refrestDashboardTotal(this.currentUser.Token); // ** Dashboard Average Revenue Data Get */

              this.service.refrestDashboardAvegareRevenue(this.currentUser.Token);
              this.AverageRevenueType = 'month'; // ** Dashboard TicketDue Data Get */

              this.service.refrestDashboardTicketDue(this.currentUser.Token);
              this.loadcolumnchart();
              this.loadPiechart();
              this.loadticketlist();
              this.distroyAndReloadTable();
            } // ** engineer list initialize */
            // this.engineerservice.refrestEngineerTableList(this.currentUser.Token);

          }
        }, {
          key: "loadticketlist",
          value: function loadticketlist() {
            var _this7 = this;

            this.ticketservice.Ticketlist = [];
            this.ticketservice.getTickets(this.currentUser.Token, 1).subscribe(function (res) {
              var response = res;
              _this7.ticketservice.Ticketlist = response.result;

              _this7.dtTrigger.next();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "loadcolumnchart",
          value: function loadcolumnchart() {
            var _this8 = this;

            this.service.DashboardTicketChart = null;
            this.service.refrestDashboardTicketColumnChart(this.currentUser.Token).subscribe(function (res) {
              _this8.service.DashboardTicketChart = res;

              _this8.createColumnChart();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "loadPiechart",
          value: function loadPiechart() {
            var _this9 = this;

            this.service.DashboardTicketPieChartList = [];
            this.service.refrestDashboardTicketPieChartList(this.currentUser.Token).subscribe(function (res) {
              _this9.service.DashboardTicketPieChartList = res;
              _this9.pieChartData = _this9.service.DashboardTicketPieChartList;
              _this9.piedata = [];

              _this9.pieChartData.DashboardTicketPieChart.forEach(function (element) {
                {
                  _this9.piedata.push({
                    name: element.Name + ' (' + element.Count + ')',
                    y: element.Count
                  });
                }
              });

              _this9.createpiechart();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "distroyAndReloadTable",
          value: function distroyAndReloadTable() {
            var _this10 = this;

            this.engineerservice.refrestEngineerTableList(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;
                _this10.tempEngineerList = _this10.tempEngineerList2 = response.result;

                _this10.dtTrigger2.next();
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "ViewTicketDetails",
          value: function ViewTicketDetails(x) {
            this.ticketservice.formData = Object.assign({}, x);
            this.router.navigate(['/tickets/ticket-view-detail/']);
          }
        }, {
          key: "ViewInvoiceDetails",
          value: function ViewInvoiceDetails(InvoiceId) {
            var _this11 = this;

            try {
              this.invoiceservice.refreshInvoiceById(InvoiceId, this.currentUser.Token).subscribe(function (res) {
                if (res) {
                  var response = res;
                  _this11.invoiceservice.InvoiceData = response.result;
                  setTimeout(function () {
                    _this11.router.navigate(['/invoices/invoice-details']);
                  }, 200);
                }
              }, function (error) {
                return console.log(error);
              });
            } catch (_a) {}
          } // View Quote Details

        }, {
          key: "viewQuoteDetails",
          value: function viewQuoteDetails(x) {
            var _this12 = this;

            this.quoteService.getQuoteDetails(x.TicketConvertedID).subscribe(function (res) {
              if (res) {
                var obj = new Object();
                obj = res;
                _this12.quoteService.QuoteData = obj;

                _this12.quoteService.getQuoteItems(_this12.currentUser.Token, x.TicketConvertedID).subscribe(function (res) {
                  if (res) {
                    var response = res;

                    if (response.Message === 'success') {
                      _this12.quoteService.QuoteItemList = response.result;
                    }
                  }
                }, function (error) {
                  return console.log(error);
                });

                _this12.quoteService.getQuoteAttachments(x.TicketConvertedID);

                setTimeout(function () {
                  _this12.router.navigate(['/quotes/quote-Details']);
                }, 1000);
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "CalculateCustomer",
          value: function CalculateCustomer(value) {
            this.service.refrestDashboardCustomer(this.currentUser.Token, value);
            this.dropdownbtncustomer = 'THIS ' + value;
            this.CustomerDurationType = value.toLowerCase();
          }
        }, {
          key: "CalculateTicket",
          value: function CalculateTicket(value) {
            this.dropdownbtnticket = 'THIS ' + value;
            this.service.refrestDashboardTicket(this.currentUser.Token, value);
            this.TicketDurationType = value.toLowerCase();
          }
        }, {
          key: "CalculateAverage",
          value: function CalculateAverage(value) {
            this.dropdownbtnavgrev = 'THIS ' + value;
            this.service.refrestDashboardAvegareRevenue(this.currentUser.Token, value);
            this.AverageRevenueType = value.toLowerCase();
          }
        }, {
          key: "onHyperlinkClick",
          value: function onHyperlinkClick(t) {
            this.router.navigate(['/tickets/'], {
              queryParams: {
                't': t
              }
            });
          }
        }, {
          key: "createColumnChart",
          value: function createColumnChart() {
            this.columnchart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
              chart: {
                renderTo: 'container',
                width: 500
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
                floating: true,
                squareSymbol: true,
                backgroundColor: 'transparent'
              },
              responsive: {
                rules: [{
                  condition: {
                    minWidth: 500
                  }
                }]
              },
              series: [{
                type: 'column',
                name: 'High',
                data: [this.service.DashboardTicketChart.TicketChartTodayHeigh, this.service.DashboardTicketChart.TicketChartTomarrowHeigh, this.service.DashboardTicketChart.TicketChartThisWeekHeigh]
              }, {
                type: 'column',
                name: 'Medium',
                data: [this.service.DashboardTicketChart.TicketChartTodayMedium, this.service.DashboardTicketChart.TicketChartTomarrowMedium, this.service.DashboardTicketChart.TicketChartThisWeekMedium]
              }, {
                type: 'column',
                name: 'Low',
                data: [this.service.DashboardTicketChart.TicketChartTodayLow, this.service.DashboardTicketChart.TicketChartTomarrowLow, this.service.DashboardTicketChart.TicketChartThisWeekLow]
              }]
            });
          }
        }, {
          key: "createpiechart",
          value: function createpiechart() {
            this.piechart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
              chart: {
                renderTo: 'container',
                plotShadow: false,
                width: 500,
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
                    enabled: false
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
                    minWidth: 200
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
        }, {
          key: "detailsengineer",
          value: function detailsengineer(x) {
            this.router.navigate(['/engineers/engineer-details/' + x]);
          }
        }, {
          key: "addcustomer",
          value: function addcustomer() {
            this.router.navigate(['/customers/customer-add/']);
          }
        }, {
          key: "validateUser",
          value: function validateUser() {
            switch (this.currentUser.Type) {
              case 'Admin':
              case 'SubAdmin':
                this.router.navigate(['/dashboard']);
                return true;

              case 'Engineer':
                this.router.navigate(['/engineer/engineer-dashboard']);
                return false;

              case 'Customer':
                this.router.navigate(['/customer/customer-dashboard']);
                return false;

              default:
                this.loginservice.logout();
                return false;
            }
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.??fac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_7__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_8__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_9__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_12__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]));
      };

      DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 402,
        vars: 70,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], [1, "kt-subheader__breadcrumbs-home"], [1, "home-dashboard-metr-info", "mrg-left-5", "mrg-right-5"], [1, "col-md-12", "row", "mrg-bottom-10"], ["class", "col col-xs-12", 4, "ngIf"], [1, "col", "col-xs-12"], ["type", "button", "routerLink", "/engineers/engineer-add", 1, "btn", "btn-outline-brand", "btn-elevate", "btn-pill", "top-add-btn-home"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-add-svn-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Shape", "points", "0 0 24 0 24 24 0 24"], ["d", "M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z", "id", "Mask", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], ["d", "M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z", "id", "Mask-Copy", "fill", "#000000", "fill-rule", "nonzero"], [1, "col-md-12"], [1, "border-home-divide-info"], [1, "col-lg-12"], [1, "row", "home-dashboard-metr-info", "job-for-tab-content"], [1, "col"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "kt-portlet__head-toolbar", "right-customer-select-box"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:void(0);", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "line-height", "19px", "background-color", "#1dc9b7", "border", "#1dc9b7"], [1, "caret"], [1, "dropdown-menu", 2, "text-align", "center"], ["href", "javascript:void(0);", 3, "click"], [1, "kt-portlet__body", "new-home-customer-job"], [1, "kt-widget19__wrapper"], [1, "kt-widget19__content"], [1, "kt-widget3"], [1, "kt-widget3__item"], [1, "kt-widget3__header"], [1, "kt-widget3__user-img"], [1, "kt-widget3__info"], [1, "kt-widget3__username"], [4, "ngIf"], ["style", "color:#ff8533 !important;", 4, "ngIf"], ["href", "javascript:;"], [1, "kt-widget29"], [1, "kt-widget29__content"], [1, "kt-widget29__item"], [1, "kt-widget29__info"], [1, "kt-widget29__subtitle"], [1, "kt-widget29__stats", "kt-font-success"], [1, "kt-widget29__stats", "kt-font-brand"], ["class", "kt-widget3__username", 4, "ngIf"], [1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], [1, "row"], [1, "col-lg-8", "padd-left-0"], [1, "row", "home-dashboard-metr-info"], [1, "col-lg-6"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--animate-fast"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon1"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z", "id", "Combined-Shape-Copy", "fill", "#000000", "opacity", "0.3", "transform", "translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) "], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], ["href", "javascript:;", 1, "kt-link", 3, "click"], [1, "kt-iconbox__content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon2"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon3"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon4"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon5"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-ticket-icon6"], ["href", "javascript:;", "routerLink", "/engineers", 1, "kt-link"], [1, "col-lg-4", "home-dashboard-metr-info", "job-for-tab-content"], [1, "kt-widget4"], [1, "kt-widget4__item"], [1, "kt-widget4__info"], ["href", "javascript:;", 1, "kt-widget4__username"], [1, "kt-user-card-v2"], [1, "kt-user-card-v2__pic"], [1, "kt-badge", "kt-badge--xl", "kt-badge--warning", "today"], [1, "col-lg-12", "padd-top-5"], [1, "col-lg-6", "col-md-6"], [3, "chart"], [1, "home-dashboard-metr-info", "table-dashboard", 2, "width", "100%"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], [2, "width", "5%"], [2, "width", "25%"], [2, "width", "26%"], [2, "width", "2%"], [2, "width", "15%"], ["class", "quote-list-view-info odd", "role", "row", 4, "ngFor", "ngForAsync", "ngForOf"], [1, "kt-portlet__body", "customer-listing-datatable", 2, "width", "100%"], ["class", " col-md-12 alert alert-info", 4, "ngIf"], ["datatable", "", "class", "table table-striped- table-bordered table-hover table-checkable", 3, "dtOptions", "dtTrigger", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-brand", "btn-elevate", "btn-pill", "top-add-btn-home", 3, "click"], ["d", "M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z", "id", "Combined-Shape", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], ["d", "M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z", "id", "Mask-Copy", "fill", "#000000", "fill-rule", "nonzero"], ["type", "button", "routerLink", "/settings", 1, "btn", "btn-outline-brand", "btn-elevate", "btn-pill", "top-add-btn-home"], ["d", "M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z", "id", "Combined-Shape", "fill", "#000000", "opacity", "0.3"], ["d", "M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z", "id", "check-path", "fill", "#000000"], ["d", "M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z", "id", "Combined-Shape", "fill", "#000000"], ["type", "button", "routerLink", "/tickets/ticket-create", 1, "btn", "btn-outline-brand", "btn-elevate", "btn-pill", "top-add-btn-home"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "45px", "height", "45px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-add-svn-icon", "tickets"], ["id", "bound", "x", "0", "y", "0", "width", "45", "height", "45"], ["type", "button", "routerLink", "/quotes", 1, "btn", "btn-outline-brand", "btn-elevate", "btn-pill", "top-add-btn-home"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "home-add-svn-icon", "quotes"], ["id", "\u201C", "fill", "#000000", "points", "11 7 9 13 11 13 11 18 6 18 6 13 8 7"], ["id", "Path", "fill", "#000000", "opacity", "0.3", "points", "19 7 17 13 19 13 19 18 14 18 14 13 16 7"], ["type", "button", "routerLink", "/invoices", 1, "btn", "btn-outline-brand", "btn-elevate", "btn-pill", "top-add-btn-home"], ["d", "M4.85714286,1 L11.7364114,1 C12.0910962,1 12.4343066,1.12568431 12.7051108,1.35473959 L17.4686994,5.3839416 C17.8056532,5.66894833 18,6.08787823 18,6.52920201 L18,19.0833333 C18,20.8738751 17.9795521,21 16.1428571,21 L4.85714286,21 C3.02044787,21 3,20.8738751 3,19.0833333 L3,2.91666667 C3,1.12612489 3.02044787,1 4.85714286,1 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z", "id", "Combined-Shape-Copy", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], ["d", "M6.85714286,3 L14.7364114,3 C15.0910962,3 15.4343066,3.12568431 15.7051108,3.35473959 L20.4686994,7.3839416 C20.8056532,7.66894833 21,8.08787823 21,8.52920201 L21,21.0833333 C21,22.8738751 20.9795521,23 19.1428571,23 L6.85714286,23 C5.02044787,23 5,22.8738751 5,21.0833333 L5,4.91666667 C5,3.12612489 5.02044787,3 6.85714286,3 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z", "id", "Combined-Shape", "fill", "#000000", "fill-rule", "nonzero"], [2, "color", "#ff8533 !important"], ["role", "row", 1, "quote-list-view-info", "odd"], [1, "btn", "btn-label-primary"], ["href", "javascript:;", 3, "click"], ["class", "btn btn-label-success btn-pill reallocated-one", 4, "ngIf"], ["class", "btn btn-label-danger", "title", "Defect Job", 4, "ngIf"], ["class", "recurring-ticket", 4, "ngIf"], [3, "ratingcount", "Editable", "Status", "ratingcountChange", "StatusChange"], [3, "A", "B", "C", "T", "AChange", "BChange", "CChange"], ["class", "ticketstatus statusunallocated", 4, "ngIf"], ["class", "ticketstatus statusrescheduled", 4, "ngIf"], [1, "text-center"], [3, "Status", "OverDueDays", "StatusChange", "OverDueDaysChange"], [3, "TicketTeams", "localPrependUrl", "Reallocate", "Id", "TicketId", "TicketTeamsChange", "localPrependUrlChange", "ReallocateChange", "IdChange", "TicketIdChange"], [1, "btn", "btn-label-success", "btn-pill", "reallocated-one"], ["href", "javascript:void(0)", 3, "click"], ["title", "Defect Job", 1, "btn", "btn-label-danger"], [1, "recurring-ticket"], [1, "ticketstatus", "statusunallocated"], [1, "ticketstatus", "statusrescheduled"], [1, "col-md-12", "alert", "alert-info"], ["width", "10%"], ["width", "20%"], ["width", "5%"], ["class", "customer-list-view-info", 4, "ngFor", "ngForOf"], [1, "customer-list-view-info"], ["width", "60px", "class", "img-thumbnail", "alt", "pic", 3, "title", "src", 4, "ngIf"], [1, "btn-group"], [1, "btn", "btn-label-primary", 2, "width", "110px !important"], [3, "ngClass", "title"], ["class", "ticketstatus statusclosed", 4, "ngIf"], ["class", "ticketstatus statusoverdue", 4, "ngIf"], ["width", "60px", "alt", "pic", 1, "img-thumbnail", 3, "title", "src"], [1, "ticketstatus", "statusclosed"], [1, "ticketstatus", "statusoverdue"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, DashboardComponent_div_12_Template, 8, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, DashboardComponent_div_13_Template, 9, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, DashboardComponent_div_14_Template, 7, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, DashboardComponent_div_15_Template, 8, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, DashboardComponent_div_16_Template, 8, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "svg", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "g", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "polygon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "path", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "path", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h3", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " NEW CUSTOMERS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_43_listener() {
              return ctx.CalculateCustomer("WEEK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "THIS WEEK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_46_listener() {
              return ctx.CalculateCustomer("MONTH");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "THIS MONTH");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_49_listener() {
              return ctx.CalculateCustomer("YEAR");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "THIS YEAR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, DashboardComponent_span_63_Template, 2, 1, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, DashboardComponent_label_64_Template, 2, 1, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, DashboardComponent_span_65_Template, 2, 1, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, DashboardComponent_label_66_Template, 2, 1, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "You have");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "ALL CUSTOMER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "ACTIVE CUSTOMER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h3", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_98_listener() {
              return ctx.CalculateTicket("WEEK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "THIS WEEK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_101_listener() {
              return ctx.CalculateTicket("MONTH");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "THIS MONTH");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_104_listener() {
              return ctx.CalculateTicket("YEAR");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "THIS YEAR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](118, DashboardComponent_span_118_Template, 2, 1, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](119, DashboardComponent_label_119_Template, 2, 1, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](120, DashboardComponent_span_120_Template, 2, 1, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](121, DashboardComponent_label_121_Template, 2, 1, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "You have");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "h3", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " AVERAGE QUOTATION VALUE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_153_listener() {
              return ctx.CalculateAverage("WEEK");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "THIS WEEK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_156_listener() {
              return ctx.CalculateAverage("MONTH");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "THIS MONTH");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_159_listener() {
              return ctx.CalculateAverage("YEAR");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "THIS YEAR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](169, DashboardComponent_p_169_Template, 4, 2, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](170, DashboardComponent_p_170_Template, 4, 2, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](174, DashboardComponent_span_174_Template, 2, 1, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](175, DashboardComponent_span_175_Template, 2, 1, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, " %");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "AVERAGE REVENUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "svg", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "g", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "rect", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](200, "path", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "h3", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "a", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_203_listener() {
              return ctx.onHyperlinkClick(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "svg", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "g", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "rect", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](215, "path", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "h3", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "a", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_218_listener() {
              return ctx.onHyperlinkClick(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "svg", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "g", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](229, "rect", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](230, "path", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "h3", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "a", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_233_listener() {
              return ctx.onHyperlinkClick(4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "svg", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "g", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](244, "rect", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](245, "path", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "h3", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "a", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_248_listener() {
              return ctx.onHyperlinkClick(8);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "Total Closed Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "svg", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "g", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](259, "rect", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](260, "path", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "h3", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "a", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_a_click_263_listener() {
              return ctx.onHyperlinkClick(10);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "svg", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "g", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](274, "rect", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "path", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "h3", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "a", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](282, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "h3", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, " Overdue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, " Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, " Tomorrow ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, " This Week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, " Next Week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, " Next Month ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "h3", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](354, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "h3", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](363, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "h1", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](371, "i", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "table", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "th", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "th", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "th", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "Customer Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "th", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "th", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "th", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](390, DashboardComponent_tr_390_Template, 28, 23, "tr", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](393, DashboardComponent_div_393_Template, 2, 0, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "h1", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](397, "i", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](400, DashboardComponent_table_400_Template, 15, 6, "table", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](401, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.CustomerView);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.SettingView);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.TicketView);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.QuoteView);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.InvoiceView);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Add ", ctx.currentUser.Engineer, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.dropdownbtncustomer, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.service.DashBoardCustomer.CustomerCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashBoardCustomer.CustomerStatus === "success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashBoardCustomer.CustomerStatus === "success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashBoardCustomer.CustomerStatus === "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashBoardCustomer.CustomerStatus === "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashBoardCustomer.CustomerCount, " new customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" this ", ctx.CustomerDurationType, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.service.DashBoardCustomer.CustomerAll);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashBoardCustomer.CustomerActive, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Ticket.toUpperCase(), "S ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.dropdownbtnticket, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.service.DashBoardTicket.TicketCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashBoardTicket.TicketStatus === "success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashBoardTicket.TicketStatus === "success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashBoardTicket.TicketStatus === "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashBoardTicket.TicketStatus === "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.service.DashBoardTicket.TicketCount, " new ", ctx.currentUser.Ticket, "s scheduled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" this ", ctx.TicketDurationType, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("ALL ", ctx.currentUser.Ticket.toUpperCase(), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.service.DashBoardTicket.TicketCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("RECURRING ", ctx.currentUser.Ticket.toUpperCase(), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.service.DashBoardTicket.TicketRecurring);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.dropdownbtnavgrev, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashboardAverage.AverageStatus === "success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashboardAverage.AverageStatus === "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Your average revenue per ", ctx.currentUser.Ticket, "s is");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashboardAverage.AverageStatus === "success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.DashboardAverage.AverageStatus === "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" this ", ctx.AverageRevenueType, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("$", ctx.service.DashboardAverage.AvegareCount.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total ", ctx.currentUser.Ticket, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashBoardTicket.TicketAll, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total Open ", ctx.currentUser.Ticket, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTotal.TotalTicketOpen, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Today New ", ctx.currentUser.Ticket, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTotal.TotalTicketTodayNew, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTotal.TotalTicketClosedToday, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total Overdue ", ctx.currentUser.Ticket, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTotal.TotalTicketOverDue, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total ", ctx.currentUser.Engineer, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTotal.TotalEngneer, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Ticket.toUpperCase(), " DUE TIMES ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTotal.TotalTicketOverDue, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTicketDue.TicketDueTimeToday, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTicketDue.TicketDueTimeTomarrow, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTicketDue.TicketDueTimeThisWeek, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTicketDue.TicketDueTimeNextWeek, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.DashboardTicketDue.TicketDueTimeNextMonth, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" PRIORITY-WISE ", ctx.currentUser.Ticket.toUpperCase(), "S ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chart", ctx.columnchart);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ISSUE-WISE ", ctx.currentUser.Ticket.toUpperCase(), "S ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chart", ctx.piechart);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Ticket, " List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Ticket, "\xA0No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Ticket, " Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.currentUser.Engineer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.ticketservice.Ticketlist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.tempEngineerList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Engineer, " List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.tempEngineerList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["??b"], angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_15__["TicketFeedbackComponent"], _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_16__["TicketDateTimeFormatComponent"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_17__["TicketStatusComponent"], _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_18__["TicketTeamListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"]],
        styles: [".home-dashboard-metr-info.table-dashboard[_ngcontent-%COMP%]{width:100%;}\r\n.row.home-dashboard-metr-info[_ngcontent-%COMP%]   .kt-link[_ngcontent-%COMP%]{font-size:20px !important;}\r\n.job-for-tab-content[_ngcontent-%COMP%]   .kt-portlet[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{padding:0px 15px !important;}\r\n.kt-portlet.kt-portlet--height-fluid[_ngcontent-%COMP%]   .btn-group.btn-group-sm[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle[_ngcontent-%COMP%]{background-color: #ff8533 !important;border:none !important;}\r\n.team-inner-1[_ngcontent-%COMP%] {margin-top:15px;padding:0px 15px;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0px;;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:black;display: inline-block;padding: 8px 8px;background-color: #eaeaea;margin: 0px 3px 5px;border-radius: 5px;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ border-radius:40%; height: 20;width: 20; }\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size: 10px;\r\n    padding-left: 8px;\r\n    padding-top: 6px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQyxVQUFVLENBQUM7QUFDckQsdUNBQXVDLHlCQUF5QixDQUFDO0FBQ2pFLG1EQUFtRCwyQkFBMkIsQ0FBQztBQUMvRSw4RkFBOEYsb0NBQW9DLENBQUMsc0JBQXNCLENBQUM7QUFDMUosZUFBZSxlQUFlLENBQUMsZ0JBQWdCLENBQUM7QUFDaEQsaUJBQWlCLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBRTtBQUN4RSxvQkFBb0IsV0FBVyxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO0FBQ3hJLHlCQUF5QixpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFFO0FBQ2xFLDJCQUEyQixlQUFlO0lBQ3RDLGlCQUFpQjtJQUNqQixnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWRhc2hib2FyZC1tZXRyLWluZm8udGFibGUtZGFzaGJvYXJke3dpZHRoOjEwMCU7fVxyXG4ucm93LmhvbWUtZGFzaGJvYXJkLW1ldHItaW5mbyAua3QtbGlua3tmb250LXNpemU6MjBweCAhaW1wb3J0YW50O31cclxuLmpvYi1mb3ItdGFiLWNvbnRlbnQgLmt0LXBvcnRsZXQgLmt0LXBvcnRsZXRfX2hlYWR7cGFkZGluZzowcHggMTVweCAhaW1wb3J0YW50O31cclxuLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVpZ2h0LWZsdWlkIC5idG4tZ3JvdXAuYnRuLWdyb3VwLXNtIC5idG4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xle2JhY2tncm91bmQtY29sb3I6ICNmZjg1MzMgIWltcG9ydGFudDtib3JkZXI6bm9uZSAhaW1wb3J0YW50O31cclxuLnRlYW0taW5uZXItMSB7bWFyZ2luLXRvcDoxNXB4O3BhZGRpbmc6MHB4IDE1cHg7fVxyXG4udGVhbS1pbm5lci0xIHVse3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1ib3R0b206MHB4Ozt9XHJcbi50ZWFtLWlubmVyLTEgdWwgbGl7Y29sb3I6YmxhY2s7ZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6IDhweCA4cHg7YmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTttYXJnaW46IDBweCAzcHggNXB4O2JvcmRlci1yYWRpdXM6IDVweDt9XHJcbi50ZWFtLWlubmVyLTEgdWwgbGkgaW1neyBib3JkZXItcmFkaXVzOjQwJTsgaGVpZ2h0OiAyMDt3aWR0aDogMjA7IH1cclxuLnRlYW0taW5uZXItMSB1bCBsaSAuY2xvc2V7Zm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O30iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
          }, {
            type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
          }, {
            type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_7__["QuoteService"]
          }, {
            type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_8__["InvoiceService"]
          }, {
            type: src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_9__["EngineerService"]
          }, {
            type: src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_12__["GenicProfileService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=application-dashboard-dashboard-module-es5.js.map