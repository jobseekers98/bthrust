(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-customer-customer-module~application-engineer-engineer-module"], {
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

      DashboardService.ɵfac = function DashboardService_Factory(t) {
        return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DashboardService,
        factory: DashboardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
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
    "GkDo":
    /*!*******************************************************************************!*\
      !*** ./src/app/generic-utils/Ticket-Header-Count/TicketHeaderCount.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: TicketHeaderCountModule */

    /***/
    function GkDo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketHeaderCountModule", function () {
        return TicketHeaderCountModule;
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


      var _TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./TicketHeaderCount.component */
      "wjE4");

      var TicketHeaderCountModule = function TicketHeaderCountModule() {
        _classCallCheck(this, TicketHeaderCountModule);
      };

      TicketHeaderCountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TicketHeaderCountModule
      });
      TicketHeaderCountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TicketHeaderCountModule_Factory(t) {
          return new (t || TicketHeaderCountModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketHeaderCountModule, {
          declarations: [_TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_3__["TicketHeaderCountComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_3__["TicketHeaderCountComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketHeaderCountModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_3__["TicketHeaderCountComponent"]],
            exports: [_TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_3__["TicketHeaderCountComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "QejX":
    /*!**************************************!*\
      !*** ./src/app/demo-utils/module.ts ***!
      \**************************************/

    /*! exports provided: DemoUtilsModule */

    /***/
    function QejX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoUtilsModule", function () {
        return DemoUtilsModule;
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


      var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-calendar */
      "kRoH");
      /* harmony import */


      var _calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar-header.component */
      "Ynfx");

      var DemoUtilsModule = function DemoUtilsModule() {
        _classCallCheck(this, DemoUtilsModule);
      };

      DemoUtilsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DemoUtilsModule
      });
      DemoUtilsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DemoUtilsModule_Factory(t) {
          return new (t || DemoUtilsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoUtilsModule, {
          declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]],
          exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoUtilsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]],
            declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]],
            exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "X9o6":
    /*!*************************************************************************************!*\
      !*** ./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js ***!
      \*************************************************************************************/

    /*! exports provided: DOC_ORIENTATION, NgxImageCompressService */

    /***/
    function X9o6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOC_ORIENTATION", function () {
        return DOC_ORIENTATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxImageCompressService", function () {
        return NgxImageCompressService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @enum {number} */


      var DOC_ORIENTATION = {
        Up: 1,
        Down: 3,
        Right: 6,
        Left: 8,
        UpMirrored: 2,
        DownMirrored: 4,
        LeftMirrored: 5,
        RightMirrored: 7,
        NotJpeg: -1,
        NotDefined: -2
      };
      DOC_ORIENTATION[DOC_ORIENTATION.Up] = 'Up';
      DOC_ORIENTATION[DOC_ORIENTATION.Down] = 'Down';
      DOC_ORIENTATION[DOC_ORIENTATION.Right] = 'Right';
      DOC_ORIENTATION[DOC_ORIENTATION.Left] = 'Left';
      DOC_ORIENTATION[DOC_ORIENTATION.UpMirrored] = 'UpMirrored';
      DOC_ORIENTATION[DOC_ORIENTATION.DownMirrored] = 'DownMirrored';
      DOC_ORIENTATION[DOC_ORIENTATION.LeftMirrored] = 'LeftMirrored';
      DOC_ORIENTATION[DOC_ORIENTATION.RightMirrored] = 'RightMirrored';
      DOC_ORIENTATION[DOC_ORIENTATION.NotJpeg] = 'NotJpeg';
      DOC_ORIENTATION[DOC_ORIENTATION.NotDefined] = 'NotDefined';
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var ImageCompress = /*#__PURE__*/function () {
        function ImageCompress() {
          _classCallCheck(this, ImageCompress);
        }

        _createClass(ImageCompress, null, [{
          key: "getOrientation",
          value:
          /**
           * Get the correct Orientation value from tags, in order to write correctly in our canvas
           * @param {?} file
           * @param {?} callback
           * @return {?}
           */
          function getOrientation(file, callback) {
            /** @type {?} */
            var reader = new FileReader();

            try {
              reader.onload =
              /**
              * @param {?} $event
              * @return {?}
              */
              function ($event) {
                /** @type {?} */
                var view = new DataView(
                /** @type {?} */
                reader.result);

                if (view.getUint16(0, false) !== 0xFFD8) {
                  return callback(-2);
                }
                /** @type {?} */


                var length = view.byteLength;
                /** @type {?} */

                var offset = 2;

                while (offset < length) {
                  /** @type {?} */
                  var marker = view.getUint16(offset, false);
                  offset += 2;

                  if (marker === 0xFFE1) {
                    if (view.getUint32(offset += 2, false) !== 0x45786966) {
                      return callback(-1);
                    }
                    /** @type {?} */


                    var little = view.getUint16(offset += 6, false) === 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    /** @type {?} */

                    var tags = view.getUint16(offset, little);
                    offset += 2;

                    for (var i = 0; i < tags; i++) {
                      if (view.getUint16(offset + i * 12, little) === 0x0112) {
                        return callback(view.getUint16(offset + i * 12 + 8, little));
                      }
                    }
                  } else if ((marker & 0xFF00) !== 0xFF00) {
                    break;
                  } else {
                    offset += view.getUint16(offset, false);
                  }
                }

                return callback(-1);
              };

              reader.readAsArrayBuffer(file);
            } catch (e) {
              return callback(0);
            }
          }
          /**
           * return a promise with the new image data and image orientation
           * @param {?} render
           * @return {?}
           */

        }, {
          key: "uploadFile",
          value: function uploadFile(render) {
            /** @type {?} */
            var promise = new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              /** @type {?} */
              var inputElement = render.createElement('input');
              render.setStyle(inputElement, 'display', 'none');
              render.setProperty(inputElement, 'type', 'file');
              render.setProperty(inputElement, 'accept', 'image/*');
              render.listen(inputElement, 'click',
              /**
              * @param {?} $event
              * @return {?}
              */
              function ($event) {
                //console.log('MouseEvent:', $event);
                //console.log('Input:', $event.target);
                $event.target.value = null;
              });
              render.listen(inputElement, 'change',
              /**
              * @param {?} $event
              * @return {?}
              */
              function ($event) {
                /** @type {?} */
                var file = $event.target.files[0];
                /** @type {?} */

                var myReader = new FileReader();

                myReader.onloadend =
                /**
                * @param {?} e
                * @return {?}
                */
                function (e) {
                  try {
                    ImageCompress.getOrientation(file,
                    /**
                    * @param {?} orientation
                    * @return {?}
                    */
                    function (orientation) {
                      resolve({
                        image:
                        /** @type {?} */
                        myReader.result,
                        orientation: orientation
                      });
                    });
                  } catch (e) {
                    //console.log(`ngx-image-compress error ${e}`);
                    reject(e);
                  }
                };

                try {
                  myReader.readAsDataURL(file);
                } catch (e) {
                  console.warn("ngx-image-compress - probably no file have been selected: ".concat(e));
                  reject("No file selected");
                }
              });
              inputElement.click();
            });
            return promise;
          }
          /**
           * @param {?} imageDataUrlSource
           * @param {?} orientation
           * @param {?} render
           * @param {?=} ratio
           * @param {?=} quality
           * @return {?}
           */

        }, {
          key: "compress",
          value: function compress(imageDataUrlSource, orientation, render) {
            var ratio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
            var quality = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 50;

            /** @type {?} */
            var promise = new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              quality = quality / 100;
              ratio = ratio / 100;
              /** @type {?} */

              var sourceImage = new Image(); // important for safari: we need to wait for onload event

              sourceImage.onload =
              /**
              * @return {?}
              */
              function () {
                /** @type {?} */
                var canvas = render.createElement('canvas');
                /** @type {?} */

                var ctx = canvas.getContext('2d');
                /** @type {?} */

                var w;
                /** @type {?} */

                var h;
                w = sourceImage.naturalWidth;
                h = sourceImage.naturalHeight;

                if (orientation === DOC_ORIENTATION.Right || orientation === DOC_ORIENTATION.Left) {
                  /** @type {?} */
                  var t = w;
                  w = h;
                  h = t;
                }

                canvas.width = w * ratio;
                canvas.height = h * ratio;
                /** @type {?} */

                var TO_RADIANS = Math.PI / 180;

                if (orientation === DOC_ORIENTATION.Up) {
                  ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
                } else if (orientation === DOC_ORIENTATION.Right) {
                  ctx.save();
                  ctx.rotate(90 * TO_RADIANS);
                  ctx.translate(0, -canvas.width);
                  ctx.drawImage(sourceImage, 0, 0, canvas.height, canvas.width);
                  ctx.restore();
                } else if (orientation === DOC_ORIENTATION.Left) {
                  ctx.save();
                  ctx.rotate(-90 * TO_RADIANS);
                  ctx.translate(-canvas.width, 0);
                  ctx.drawImage(sourceImage, 0, 0, canvas.height, canvas.width);
                  ctx.restore();
                } else if (orientation === DOC_ORIENTATION.Down) {
                  ctx.save();
                  ctx.rotate(180 * TO_RADIANS);
                  ctx.translate(-canvas.width, -canvas.height);
                  ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
                  ctx.restore();
                } else {
                  //console.warn('ngx-image-compress - no orientation value found');
                  // same as default UP
                  ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
                }
                /** @type {?} */


                var mime = imageDataUrlSource.substr(5, imageDataUrlSource.split(';')[0].length - 5); // TODO test on mime

                /** @type {?} */

                var result = canvas.toDataURL(mime, quality);
                resolve(result);
              };

              sourceImage.src = imageDataUrlSource;
            });
            return promise;
          }
          /**
           * helper to evaluate the compression rate
           * @param {?} s the image in base64 string format
           * @return {?}
           */

        }, {
          key: "byteCount",
          value: function byteCount(s) {
            return encodeURI(s).split(/%..|./).length - 1;
          }
        }]);

        return ImageCompress;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxImageCompressService = /*#__PURE__*/function () {
        /**
         * @param {?} rendererFactory
         */
        function NgxImageCompressService(rendererFactory) {
          _classCallCheck(this, NgxImageCompressService);

          this.DOC_ORIENTATION = DOC_ORIENTATION;
          this.render = rendererFactory.createRenderer(null, null);
        }
        /**
         * @param {?} image
         * @return {?}
         */


        _createClass(NgxImageCompressService, [{
          key: "byteCount",
          value: function byteCount(image) {
            return ImageCompress.byteCount(image);
          }
          /**
           * @return {?}
           */

        }, {
          key: "uploadFile",
          value: function uploadFile() {
            return ImageCompress.uploadFile(this.render);
          }
          /**
           * @param {?} image
           * @param {?} orientation
           * @param {?=} ratio
           * @param {?=} quality
           * @return {?}
           */

        }, {
          key: "compressFile",
          value: function compressFile(image, orientation) {
            var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
            var quality = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
            return ImageCompress.compress(image, orientation, this.render, ratio, quality);
          }
        }]);

        return NgxImageCompressService;
      }();

      NgxImageCompressService.ɵfac = function NgxImageCompressService_Factory(t) {
        return new (t || NgxImageCompressService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]));
      };

      NgxImageCompressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgxImageCompressService,
        factory: NgxImageCompressService.ɵfac
      });
      /** @nocollapse */

      NgxImageCompressService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxImageCompressService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-image-compress.js.map

      /***/

    },

    /***/
    "Ynfx":
    /*!*********************************************************!*\
      !*** ./src/app/demo-utils/calendar-header.component.ts ***!
      \*********************************************************/

    /*! exports provided: CalendarHeaderComponent */

    /***/
    function Ynfx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarHeaderComponent", function () {
        return CalendarHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-calendar */
      "kRoH");

      var CalendarHeaderComponent = function CalendarHeaderComponent() {
        _classCallCheck(this, CalendarHeaderComponent);

        this.locale = 'en';
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      };

      CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) {
        return new (t || CalendarHeaderComponent)();
      };

      CalendarHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CalendarHeaderComponent,
        selectors: [["mwl-demo-utils-calendar-header"]],
        inputs: {
          view: "view",
          viewDate: "viewDate",
          locale: "locale"
        },
        outputs: {
          viewChange: "viewChange",
          viewDateChange: "viewDateChange"
        },
        decls: 22,
        vars: 16,
        consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"]],
        template: function CalendarHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_3_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_3_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Previous ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_5_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_5_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "calendarDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_15_listener() {
              return ctx.viewChange.emit("month");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Month ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_17_listener() {
              return ctx.viewChange.emit("week");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_19_listener() {
              return ctx.viewChange.emit("day");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Day ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 12, ctx.viewDate, ctx.view + "ViewTitle", ctx.locale));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "day");
          }
        },
        directives: [angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵg"]],
        pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵi"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mwl-demo-utils-calendar-header',
            template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\"\n          >\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\"\n          >\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\"\n          >\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n  "
          }]
        }], null, {
          view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          viewChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          viewDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "wjE4":
    /*!**********************************************************************************!*\
      !*** ./src/app/generic-utils/Ticket-Header-Count/TicketHeaderCount.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: TicketHeaderCountComponent */

    /***/
    function wjE4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketHeaderCountComponent", function () {
        return TicketHeaderCountComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/dashboard.service */
      "0AbP");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var TicketHeaderCountComponent = /*#__PURE__*/function () {
        function TicketHeaderCountComponent(service, loginservice) {
          var _this6 = this;

          _classCallCheck(this, TicketHeaderCountComponent);

          this.service = service;
          this.loginservice = loginservice;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this6.currentUser = x;
          });
          this.Open = 0;
          this.Closed = 0;
          this.OverDue = 0;
        }

        _createClass(TicketHeaderCountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.service.getTicketheaderCount(this.Token).subscribe(function (res) {
              var response = res;
              _this7.Open = Number(response.OpenTicket);
              _this7.Closed = Number(response.ClosedTicket);
              _this7.OverDue = Number(response.OverDueTicket);
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return TicketHeaderCountComponent;
      }();

      TicketHeaderCountComponent.ɵfac = function TicketHeaderCountComponent_Factory(t) {
        return new (t || TicketHeaderCountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      TicketHeaderCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TicketHeaderCountComponent,
        selectors: [["generic-ticket-header-count"]],
        inputs: {
          Token: "Token"
        },
        decls: 46,
        vars: 6,
        consts: [[1, "row", "mrg-top-10"], [1, "col-lg-4"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--brand", "kt-iconbox--animate-slower"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z", "id", "Combined-Shape-Copy", "fill", "#000000", "opacity", "0.3", "transform", "translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) "], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], ["href", "javascript:;", 1, "kt-link"], [1, "kt-iconbox__content"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--success", "kt-iconbox--animate-slow"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--warning", "kt-iconbox--animate-fast"]],
        template: function TicketHeaderCountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "rect", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Open ", ctx.currentUser.Ticket, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Open, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Closed ", ctx.currentUser.Ticket, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Closed, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Overdue ", ctx.currentUser.Ticket, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.OverDue, " ");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketHeaderCountComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'generic-ticket-header-count',
            template: "\n          <div class=\"row mrg-top-10\">\n          <div class=\"col-lg-4\">\n            <div class=\"kt-portlet kt-iconbox kt-iconbox--brand kt-iconbox--animate-slower\">\n              <div class=\"kt-portlet__body\">\n                <div class=\"kt-iconbox__body\">\n                  <div class=\"kt-iconbox__icon\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"kt-svg-icon\">\n                      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <rect id=\"bound\" x=\"0\" y=\"0\" width=\"24\" height=\"24\" />\n                        <path d=\"M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z\" id=\"Combined-Shape-Copy\" fill=\"#000000\" opacity=\"0.3\" transform=\"translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) \" />\n                      </g>\n                    </svg>\n                  </div>\n                  <div class=\"kt-iconbox__desc\">\n                    <h3 class=\"kt-iconbox__title\">\n                      <a class=\"kt-link\" href=\"javascript:;\">Open {{this.currentUser.Ticket}}s</a>\n                    </h3>\n                    <div class=\"kt-iconbox__content\">\n                      {{Open}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"kt-portlet kt-iconbox kt-iconbox--success kt-iconbox--animate-slow\">\n              <div class=\"kt-portlet__body\">\n                <div class=\"kt-iconbox__body\">\n                  <div class=\"kt-iconbox__icon\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"kt-svg-icon\">\n                      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <rect id=\"bound\" x=\"0\" y=\"0\" width=\"24\" height=\"24\" />\n                        <path d=\"M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z\" id=\"Combined-Shape-Copy\" fill=\"#000000\" opacity=\"0.3\" transform=\"translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) \" />\n                      </g>\n                    </svg>\n                  </div>\n                  <div class=\"kt-iconbox__desc\">\n                    <h3 class=\"kt-iconbox__title\">\n                      <a class=\"kt-link\" href=\"javascript:;\">Closed {{this.currentUser.Ticket}}s</a>\n                    </h3>\n                    <div class=\"kt-iconbox__content\">\n                      {{Closed}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"kt-portlet kt-iconbox kt-iconbox--warning kt-iconbox--animate-fast\">\n              <div class=\"kt-portlet__body\">\n                <div class=\"kt-iconbox__body\">\n                  <div class=\"kt-iconbox__icon\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"kt-svg-icon\">\n                      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <rect id=\"bound\" x=\"0\" y=\"0\" width=\"24\" height=\"24\" />\n                        <path d=\"M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z\" id=\"Combined-Shape-Copy\" fill=\"#000000\" opacity=\"0.3\" transform=\"translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) \" />\n                      </g>\n                    </svg>\n                  </div>\n                  <div class=\"kt-iconbox__desc\">\n                    <h3 class=\"kt-iconbox__title\">\n                      <a class=\"kt-link\" href=\"javascript:;\">Overdue {{this.currentUser.Ticket}}s</a>\n                    </h3>\n                    <div class=\"kt-iconbox__content\">\n                      {{OverDue}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> \n  "
          }]
        }], function () {
          return [{
            type: src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, {
          Token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~application-customer-customer-module~application-engineer-engineer-module-es5.js.map