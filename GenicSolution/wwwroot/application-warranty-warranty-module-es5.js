(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-warranty-warranty-module"], {
    /***/
    "7kmZ":
    /*!***************************************************************************************!*\
      !*** ./src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: TicketStatusComponentModule */

    /***/
    function kmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketStatusComponentModule", function () {
        return TicketStatusComponentModule;
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


      var _TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./TicketStatusComponent.component */
      "X7qY");

      var TicketStatusComponentModule = function TicketStatusComponentModule() {
        _classCallCheck(this, TicketStatusComponentModule);
      };

      TicketStatusComponentModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TicketStatusComponentModule
      });
      TicketStatusComponentModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TicketStatusComponentModule_Factory(t) {
          return new (t || TicketStatusComponentModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TicketStatusComponentModule, {
          declarations: [_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketStatusComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketStatusComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TicketStatusComponentModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketStatusComponent"]],
            exports: [_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketStatusComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "BT+e":
    /*!************************************************************!*\
      !*** ./src/app/application/warranty/warranty.component.ts ***!
      \************************************************************/

    /*! exports provided: WarrantyComponent */

    /***/
    function BTE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WarrantyComponent", function () {
        return WarrantyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_report_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/report.module */
      "JYEN");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/ngb-date-to-string-adapter */
      "x8Rg");
      /* harmony import */


      var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/ngb-time-to-string-adapter */
      "dRK5");
      /* harmony import */


      var _services_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/report.service */
      "ppW+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _services_userlog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/userlog.service */
      "V05N");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _services_downloads_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/downloads.service */
      "iHRC");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services */
      "o0su");
      /* harmony import */


      var _services_ticket_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/ticket.service */
      "KPvW");
      /* harmony import */


      var _services_customer_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/customer.service */
      "0zL+");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../services/product.service */
      "Gdn9");
      /* harmony import */


      var src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/services/engineer.service */
      "+MZO");
      /* harmony import */


      var _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-select-dropdown */
      "8bGj");

      var _c0 = ["modalContent1"];
      var _c1 = ["modalContent2"];

      function WarrantyComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_div_13_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r15.AddProductWarranty();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Add Warranty Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ul_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ul_25_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r17.FilterCustomers("All");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ul_25_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.FilterCustomers("Active");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Active ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ul_25_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.FilterCustomers("Expired");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Expired");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ul", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Bulk Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ul_25_Template_a_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r21.exportAsXLSX();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Without Warranty List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.dropdownbtnavgrev, " ");
        }
      }

      function WarrantyComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ngx-select-dropdown", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_div_27_Template_ngx_select_dropdown_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.onItemSelect($event, "SC");
          })("ngModelChange", function WarrantyComponent_div_27_Template_ngx_select_dropdown_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.SCustomerselectedItems = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("multiple", false)("ngModel", ctx_r2.SCustomerselectedItems)("config", ctx_r2.SCustomerdropdownSettings)("options", ctx_r2.SCustomerdropdownList);
        }
      }

      function WarrantyComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ngx-select-dropdown", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_div_28_Template_ngx_select_dropdown_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.onItemSelect($event, "SP");
          })("ngModelChange", function WarrantyComponent_div_28_Template_ngx_select_dropdown_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.SProductselectedItems = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("multiple", false)("ngModel", ctx_r3.SProductselectedItems)("config", ctx_r3.SProductdropdownSettings)("options", ctx_r3.SProductdropdownList);
        }
      }

      function WarrantyComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 83, 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WarrantyComponent_div_41_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r32.service.ReportsWarranty.InstallationDate = $event;
          })("click", function WarrantyComponent_div_41_Template_input_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

            return _r29.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 85, 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WarrantyComponent_div_41_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r35.service.ReportsWarranty.ExpiryDate = $event;
          })("click", function WarrantyComponent_div_41_Template_input_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);

            return _r31.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.service.ReportsWarranty.InstallationDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.service.ReportsWarranty.ExpiryDate);
        }
      }

      function WarrantyComponent_tr_70_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Type: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r37.Type);
        }
      }

      function WarrantyComponent_tr_70_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r37.Status);
        }
      }

      function WarrantyComponent_tr_70_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r37.Status);
        }
      }

      function WarrantyComponent_tr_70_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, WarrantyComponent_tr_70_div_10_Template, 5, 1, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, WarrantyComponent_tr_70_span_17_Template, 2, 1, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, WarrantyComponent_tr_70_span_18_Template, 2, 1, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](21, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ul", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_tr_70_Template_a_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r46);

            var x_r37 = ctx.$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r45.pupulatewarranty(x_r37);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_tr_70_Template_a_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r46);

            var x_r37 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r47.removewarranty(x_r37);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r37 = ctx.$implicit;
          var i_r38 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r38 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r37.Customer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r37.ItemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r37.TicketId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (x_r37.Type == null ? null : x_r37.Type.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r37.UniqId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 10, x_r37.InstallationDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r37.Status === "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r37.Status === "Expired");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](21, 12, x_r37.ExpiryDate));
        }
      }

      function WarrantyComponent_ng_template_71_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Edit terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ng_template_71_span_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Hide terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ng_template_71_div_34_label_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 125, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_71_div_34_label_22_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r65);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r64.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_71_div_34_label_22_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r65);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r66.ticketService.TicketItem.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r61.ticketService.TicketItem.WarrantyDays);
        }
      }

      function WarrantyComponent_ng_template_71_div_34_label_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_71_div_34_label_23_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r67.customwarrantyShowMethor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ng_template_71_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 119, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_71_div_34_Template_input_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r69.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_71_div_34_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r71.ticketService.TicketItem.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 90 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 121, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_71_div_34_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r72.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_71_div_34_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r73.ticketService.TicketItem.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " 180 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 122, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_71_div_34_Template_input_change_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r74.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_71_div_34_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r75.ticketService.TicketItem.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " 270 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 123, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_71_div_34_Template_input_change_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r76.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_71_div_34_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r77.ticketService.TicketItem.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " 365 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, WarrantyComponent_ng_template_71_div_34_label_22_Template, 5, 1, "label", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, WarrantyComponent_ng_template_71_div_34_label_23_Template, 4, 0, "label", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r52.ticketService.TicketItem.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r52.ticketService.TicketItem.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r52.ticketService.TicketItem.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r52.ticketService.TicketItem.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r52.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r52.customwarrantyShow);
        }
      }

      function WarrantyComponent_ng_template_71_div_35_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 130, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function WarrantyComponent_ng_template_71_div_35_div_1_Template_input_keyup_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r82);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r81.customwarrantyShowMethor();
          })("keydown", function WarrantyComponent_ng_template_71_div_35_div_1_Template_input_keydown_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r82);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r83.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_71_div_35_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r82);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r84.ticketService.TicketItem.WarrantyDays = $event;
          })("keypress", function WarrantyComponent_ng_template_71_div_35_div_1_Template_input_keypress_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r82);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r85.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r78.ticketService.TicketItem.WarrantyDays);
        }
      }

      function WarrantyComponent_ng_template_71_div_35_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " (in number of days) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ng_template_71_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, WarrantyComponent_ng_template_71_div_35_div_1_Template, 3, 1, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, WarrantyComponent_ng_template_71_div_35_div_2_Template, 2, 0, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r53.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r53.customwarrantyShow);
        }
      }

      function WarrantyComponent_ng_template_71_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ng_template_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ng_template_71_Template_button_click_1_listener() {
            var close_r48 = ctx.close;
            return close_r48();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Unique Id:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 105, 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WarrantyComponent_ng_template_71_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r88);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r87.ticketService.TicketItem.UniqId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ng_template_71_Template_a_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r88);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r89.enablewarrantchange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, WarrantyComponent_ng_template_71_span_32_Template, 3, 0, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, WarrantyComponent_ng_template_71_span_33_Template, 3, 0, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, WarrantyComponent_ng_template_71_div_34_Template, 24, 6, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, WarrantyComponent_ng_template_71_div_35_Template, 3, 2, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Installation Date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 111, 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ng_template_71_Template_input_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r88);

            var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](42);

            return _r55.toggle();
          })("ngModelChange", function WarrantyComponent_ng_template_71_Template_input_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r88);

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r91.ticketService.TicketItem.InstallationDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, WarrantyComponent_ng_template_71_div_45_Template, 3, 0, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ng_template_71_Template_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r88);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r92.UpdateItemInstallation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Save");

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
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r9.currentUser.Product, " Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r9.ticketService.TicketItem.ItemName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r9.ticketService.TicketItem.UniqId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r9.currentUser.Product, " Warranty:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r9.ticketService.TicketItem.WarrantyDays, " Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r9.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r9.ticketService.TicketItem.InstallationDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.isShowSpinner);
        }
      }

      function WarrantyComponent_ng_template_73_span_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Edit terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ng_template_73_span_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Hide terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ng_template_73_div_40_label_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 146, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_73_div_40_label_22_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r111);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r110.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_73_div_40_label_22_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r111);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r112.service.ProductWarranty.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r107.service.ProductWarranty.WarrantyDays);
        }
      }

      function WarrantyComponent_ng_template_73_div_40_label_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_73_div_40_label_23_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r114);

            var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r113.customwarrantyShowMethor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ng_template_73_div_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 142, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_73_div_40_Template_input_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r116);

            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r115.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_73_div_40_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r116);

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r117.service.ProductWarranty.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 90 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 143, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_73_div_40_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r116);

            var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r118.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_73_div_40_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r116);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r119.service.ProductWarranty.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " 180 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 144, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_73_div_40_Template_input_change_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r116);

            var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r120.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_73_div_40_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r116);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r121.service.ProductWarranty.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " 270 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 145, 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_73_div_40_Template_input_change_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r116);

            var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r122.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_73_div_40_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r116);

            var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r123.service.ProductWarranty.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " 365 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, WarrantyComponent_ng_template_73_div_40_label_22_Template, 5, 1, "label", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, WarrantyComponent_ng_template_73_div_40_label_23_Template, 4, 0, "label", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r98.service.ProductWarranty.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r98.service.ProductWarranty.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r98.service.ProductWarranty.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r98.service.ProductWarranty.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r98.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r98.customwarrantyShow);
        }
      }

      function WarrantyComponent_ng_template_73_div_41_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 147, 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function WarrantyComponent_ng_template_73_div_41_div_1_Template_input_keyup_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r128);

            var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r127.customwarrantyShowMethor();
          })("keydown", function WarrantyComponent_ng_template_73_div_41_div_1_Template_input_keydown_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r128);

            var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r129.customwarrantyShowMethor();
          })("ngModelChange", function WarrantyComponent_ng_template_73_div_41_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r128);

            var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r130.service.ProductWarranty.WarrantyDays = $event;
          })("keypress", function WarrantyComponent_ng_template_73_div_41_div_1_Template_input_keypress_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r128);

            var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r131.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r124.service.ProductWarranty.WarrantyDays);
        }
      }

      function WarrantyComponent_ng_template_73_div_41_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " (in number of days) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ng_template_73_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, WarrantyComponent_ng_template_73_div_41_div_1_Template, 3, 1, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, WarrantyComponent_ng_template_73_div_41_div_2_Template, 2, 0, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r99.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r99.customwarrantyShow);
        }
      }

      function WarrantyComponent_ng_template_73_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WarrantyComponent_ng_template_73_Template(rf, ctx) {
        if (rf & 1) {
          var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ng_template_73_Template_button_click_1_listener() {
            var close_r93 = ctx.close;
            return close_r93();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 134, 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WarrantyComponent_ng_template_73_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r133.service.ProductWarranty.Id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Customer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ngx-select-dropdown", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_73_Template_ngx_select_dropdown_change_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r135.onItemSelect($event, "C");
          })("ngModelChange", function WarrantyComponent_ng_template_73_Template_ngx_select_dropdown_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r136.CustomerselectedItems = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "ngx-select-dropdown", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_ng_template_73_Template_ngx_select_dropdown_change_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r137.onItemSelect($event, "P");
          })("ngModelChange", function WarrantyComponent_ng_template_73_Template_ngx_select_dropdown_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r138.ProductselectedItems = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Unique Id:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 138, 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WarrantyComponent_ng_template_73_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r139.service.ProductWarranty.UniqId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ng_template_73_Template_a_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r140.enablewarrantchange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, WarrantyComponent_ng_template_73_span_38_Template, 3, 0, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, WarrantyComponent_ng_template_73_span_39_Template, 3, 0, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, WarrantyComponent_ng_template_73_div_40_Template, 24, 6, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, WarrantyComponent_ng_template_73_div_41_Template, 3, 2, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Installation Date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "input", 140, 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ng_template_73_Template_input_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](48);

            return _r101.toggle();
          })("ngModelChange", function WarrantyComponent_ng_template_73_Template_input_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r142.service.ProductWarranty.InstallationDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, WarrantyComponent_ng_template_73_div_51_Template, 3, 0, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_ng_template_73_Template_button_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r134);

            var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r143.AddProductWarrantyInDB();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Save");

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
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r11.service.ProductWarranty.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("multiple", false)("ngModel", ctx_r11.CustomerselectedItems)("config", ctx_r11.CustomerdropdownSettings)("options", ctx_r11.CustomerdropdownList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r11.currentUser.Product, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("multiple", false)("ngModel", ctx_r11.ProductselectedItems)("config", ctx_r11.ProductdropdownSettings)("options", ctx_r11.ProductdropdownList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r11.service.ProductWarranty.UniqId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r11.currentUser.Product, " Warranty:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r11.service.ProductWarranty.WarrantyDays, " Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r11.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r11.service.ProductWarranty.InstallationDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.isShowSpinner);
        }
      }

      function WarrantyComponent_ng_container_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var s_r144 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", s_r144, " ");
        }
      }

      function WarrantyComponent_ng_container_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var e_r145 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", e_r145, " ");
        }
      }

      var WarrantyComponent = /*#__PURE__*/function () {
        function WarrantyComponent(service, router, titleService, modal, logService, toastr, downloadService, loginservice, ticketService, customerservice, productService, engineerservice, genicprofileservice) {
          var _this = this;

          _classCallCheck(this, WarrantyComponent);

          this.service = service;
          this.router = router;
          this.titleService = titleService;
          this.modal = modal;
          this.logService = logService;
          this.toastr = toastr;
          this.downloadService = downloadService;
          this.loginservice = loginservice;
          this.ticketService = ticketService;
          this.customerservice = customerservice;
          this.productService = productService;
          this.engineerservice = engineerservice;
          this.genicprofileservice = genicprofileservice;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.isDtInitialized = false;
          this.date = new Date();
          this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
          this.firstdate = this.firstDay.getFullYear().toString().padStart(4, '0') + '-' + (this.firstDay.getMonth() + 1).toString().padStart(2, '0') + '-' + this.firstDay.getDate().toString().padStart(2, '0');
          this.lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
          this.lastdate = this.lastDay.getFullYear().toString().padStart(4, '0') + '-' + (this.lastDay.getMonth() + 1).toString().padStart(2, '0') + '-' + this.lastDay.getDate().toString().padStart(2, '0');
          this.isShowSpinner = false;
          this.ErrorRes = [];
          this.SuccessRes = [];
          this.CustomerdropdownList = [];
          this.CustomerselectedItems = [];
          this.CustomerdropdownSettings = {
            displayKey: 'Name',
            search: true,
            height: '300px',
            placeholder: 'Select Customer'
          };
          this.ProductdropdownList = [];
          this.ProductselectedItems = [];
          this.ProductdropdownSettings = {
            displayKey: 'Name',
            search: true,
            height: '300px',
            placeholder: 'Select Product'
          };
          this.EngineerdropdownList = [];
          this.EngineerselectedItems = [];
          this.EngineerdropdownSettings = {
            displayKey: 'Name',
            search: true,
            limitTo: 5,
            height: '260',
            placeholder: 'Technician'
          };
          this.SCustomerdropdownList = [];
          this.SCustomerselectedItems = [];
          this.SCustomerdropdownSettings = {
            displayKey: 'Name',
            search: true,
            height: '300px',
            placeholder: 'Select Customer'
          };
          this.SProductdropdownList = [];
          this.SProductselectedItems = [];
          this.SProductdropdownSettings = {
            displayKey: 'Name',
            search: true,
            height: '300px',
            placeholder: 'Select Product'
          };
          this.tempCust = '';
          this.tempProd = '';
          this.loginservice.currentUser.subscribe(function (x) {
            return _this.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
          this.dtOptions = {
            pagingType: 'full_numbers',
            paging: true,
            ordering: false,
            lengthMenu: [5, 10, 25, 50, 75, 100]
          };
          this.dropdownbtnavgrev = 'All';
          this.service.ReportsWarrantyListActive = [];
        }

        _createClass(WarrantyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.EngineerdropdownSettings = {
              displayKey: 'Name',
              search: true,
              limitTo: 5,
              height: '260',
              placeholder: this.currentUser.Engineer
            };
            this.ProductdropdownSettings = {
              displayKey: 'Name',
              search: true,
              height: '300px',
              placeholder: 'Select ' + this.currentUser.Product
            };
            this.SProductdropdownSettings = {
              displayKey: 'Name',
              search: true,
              height: '300px',
              placeholder: 'Select ' + this.currentUser.Product
            };
            this.service.ReportsWarranty = new _services_report_module__WEBPACK_IMPORTED_MODULE_1__["ReportsWarranty"]();
            this.service.ReportsWarranty.InstallationDate = this.firstdate;
            this.service.ReportsWarranty.ExpiryDate = this.lastdate;
            this.service.ReportsWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
            this.service.ReportsWarranty.ProductId = '00000000-0000-0000-0000-000000000000';
            this.service.ReportsWarranty.UniqId = '';
            this.service.ReportsWarranty.IsDateActive = false;
            this.excelDataTemplatePath = this.localPrependUrl + '/assets/ExcelDataTemplate/ProductWarrantyDatabaseSheet.xlsx';

            if (!this.currentUser.Permissions.ProductWarranty) {
              this.router.navigate(['/dashboard']);
            }

            this.titleService.setTitle('Warranty | Genic Solution');
            this.genicprofileservice.TicketFilter.IsReady = false;
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
            this.customerservice.GetCustomerList(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;
                _this2.tempCustList = [];
                _this2.tempCustList = response.result;
                var items = response.result.sort(function (a, b) {
                  return a.Name.localeCompare(b.Name);
                });
                items.forEach(function (w) {
                  _this2.SCustomerdropdownList.push({
                    Id: w.Id,
                    Name: w.Name,
                    IsAssigned: false
                  });
                });

                _this2.productService.refrestProductlistSync(_this2.currentUser.Token).subscribe(function (res) {
                  if (res) {
                    var responsep = res;
                    _this2.tempProdList = responsep.result;

                    var _items = responsep.result.sort(function (a, b) {
                      return a.Name.localeCompare(b.Name);
                    });

                    _items.forEach(function (w) {
                      _this2.SProductdropdownList.push({
                        Id: w.Id,
                        Name: w.Name,
                        IsAssigned: false
                      });
                    });

                    _this2.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
                  }
                }, function (error) {
                  return console.log(error);
                });

                _this2.engineerservice.refrestEngineerTableList(_this2.currentUser.Token).subscribe(function (res) {
                  if (res) {
                    var _response = res;
                    _this2.engineerservice.EngineerLocalList = _response.result;
                  }
                }, function (error) {
                  return console.log(error);
                });
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "distroyAndReloadTable",
          value: function distroyAndReloadTable(SDate, EDate, CustometId, ProductId, UniqId) {
            var _this3 = this;

            this.service.refrestWarrantyList(this.currentUser.Token, SDate, EDate, CustometId, ProductId, UniqId).subscribe(function (res) {
              if (res) {
                var response = res;
                _this3.service.ReportsWarrantyList = [];
                _this3.service.ReportsWarrantyListActive = [];
                _this3.service.ReportsWarrantyList = response.result;
                _this3.service.ReportsWarrantyListActive = response.result;

                if (_this3.isDtInitialized) {
                  _this3.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.destroy();

                    _this3.dtTrigger.next();
                  });
                } else {
                  _this3.isDtInitialized = true;

                  _this3.dtTrigger.next();
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "refreshWarrantyList",
          value: function refreshWarrantyList(isSearch) {
            this.dropdownbtnavgrev = 'All';

            if (isSearch) {
              if (this.service.ReportsWarranty.InstallationDate === '00000000') {
                this.service.ReportsWarranty.ExpiryDate === '00000000';
              }

              if (this.service.ReportsWarranty.ExpiryDate === '00000000') {
                this.service.ReportsWarranty.InstallationDate === '00000000';
              }

              var cursDate = this.service.ReportsWarranty.InstallationDate;
              var cureDate = this.service.ReportsWarranty.ExpiryDate;
              var sDate = cursDate.split('T')[0].replace(/-/g, '');
              var eDate = cureDate.split('T')[0].replace(/-/g, '');
              var uid = 'ALL';

              if (this.service.ReportsWarranty.UniqId.length > 0) {
                uid = this.service.ReportsWarranty.UniqId;
              }

              if (!this.service.ReportsWarranty.IsDateActive) {
                sDate = '00000000';
                eDate = '00000000';
              }

              this.distroyAndReloadTable(sDate, eDate, this.service.ReportsWarranty.CustomerId, this.service.ReportsWarranty.ProductId, uid);
            } else {
              this.SCustomerselectedItems = [];
              this.SProductselectedItems = [];
              this.service.ReportsWarranty = new _services_report_module__WEBPACK_IMPORTED_MODULE_1__["ReportsWarranty"]();
              this.service.ReportsWarranty.InstallationDate = this.firstdate;
              this.service.ReportsWarranty.ExpiryDate = this.lastdate;
              this.service.ReportsWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
              this.service.ReportsWarranty.ProductId = '00000000-0000-0000-0000-000000000000';
              this.service.ReportsWarranty.UniqId = '';
              this.service.ReportsWarranty.IsDateActive = false;
              this.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "FilterCustomers",
          value: function FilterCustomers(value) {
            var _this4 = this;

            this.service.ReportsWarrantyListActive = [];
            this.dtElement.dtInstance.then(function (dtInstance) {
              dtInstance.destroy();
            })["catch"](function (err) {
              return console.error('error', err);
            });

            switch (value) {
              case 'Expired':
                this.service.ReportsWarrantyListActive = this.service.ReportsWarrantyList.filter(function (x) {
                  return x.Status === 'Expired';
                });
                this.dropdownbtnavgrev = 'Expired';
                break;

              case 'Active':
                this.service.ReportsWarrantyListActive = this.service.ReportsWarrantyList.filter(function (x) {
                  return x.Status === 'Active';
                });
                this.dropdownbtnavgrev = 'Active';
                break;

              default:
                this.service.ReportsWarrantyListActive = this.service.ReportsWarrantyList;
                this.dropdownbtnavgrev = 'All';
            }

            setTimeout(function () {
              _this4.dtTrigger.next();
            }, 100);
          }
        }, {
          key: "OpenWarrantyModel",
          value: function OpenWarrantyModel(Id) {
            var _this5 = this;

            this.service.getproductById(this.currentUser.Token, Id).subscribe(function (res) {
              if (res) {
                _this5.ticketService.TicketItem = res;

                _this5.modal.open(_this5.modalContent2, {
                  size: 'lg'
                });
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "customwarrantyShowMethor",
          value: function customwarrantyShowMethor() {
            if (this.service.ProductWarranty.WarrantyDays === undefined) {
              this.customwarrantyShow = false;
            } else {
              switch (this.service.ProductWarranty.WarrantyDays.toString()) {
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
        }, {
          key: "enablewarrantchange",
          value: function enablewarrantchange() {
            if (this.customwarrantyShowEdit) {
              this.customwarrantyShowEdit = false;
            } else {
              this.customwarrantyShowEdit = true;
            }
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            if (Number(event.target.value) === 0) {
              event.target.value = null;
            }

            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }, {
          key: "UpdateItemInstallation",
          value: function UpdateItemInstallation() {
            var _this6 = this;

            this.isShowSpinner = true;
            this.ticketService.TicketItem.InWarranty = true;
            this.ticketService.TicketItem.WarrantyDays = Number(this.ticketService.TicketItem.WarrantyDays);
            this.ticketService.putTicketItemDetails(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  var des7 = 'A ' + _this6.currentUser.Product + ' : ' + _this6.ticketService.TicketItem.ItemName + ', is updated from the ' + _this6.currentUser.Ticket + ' No ' + _this6.ticketService.formData.TicketId + ', of Customer : ' + _this6.ticketService.formData.CustomerName + ', and Uniq No ' + _this6.ticketService.TicketItem.UniqId + ', Warranty :  ' + _this6.ticketService.TicketItem.WarrantyDays + ' Days by user ' + _this6.currentUser.FullName;
                  var Activity7 = 'An ' + _this6.currentUser.Product + ' : ' + _this6.ticketService.TicketItem.ItemName + ' Installation Date Update : ' + _this6.ticketService.TicketItem.InstallationDate + ' is updated from the ' + _this6.currentUser.Ticket + ' No : ' + _this6.ticketService.formData.TicketId;

                  _this6.logService.postUserLog(_this6.currentUser.Id, _this6.currentUser.FullName, _this6.currentUser.Ticket, _this6.ticketService.formData.Id, 'Modify', des7, Activity7).subscribe();

                  _this6.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');

                  setTimeout(function () {
                    _this6.modal.dismissAll();

                    _this6.isShowSpinner = false;
                  }, 500);
                }

                if (response.Message === 'failure') {
                  _this6.isShowSpinner = false;

                  _this6.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "AddProductWarranty",
          value: function AddProductWarranty() {
            var _this7 = this;

            //this.isEdit = false;
            this.modal.open(this.modalContent1, {
              size: 'lg'
            });
            this.service.ProductWarranty.Id = 0;
            this.service.ProductWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
            this.service.ProductWarranty.ProductId = '00000000-0000-0000-0000-000000000000';
            this.service.ProductWarranty.UniqId = '';
            this.service.ProductWarranty.InstallationDate = null;

            if (this.service.ProductWarranty.WarrantyDays == null || this.service.ProductWarranty.WarrantyDays === 0 || this.service.ProductWarranty.WarrantyDays === undefined) {
              this.service.ProductWarranty.WarrantyDays = 365;
            }

            this.CustomerselectedItems = [];
            this.ProductselectedItems = [];
            this.EngineerselectedItems = [];
            this.CustomerdropdownList = [];
            this.ProductdropdownList = [];
            this.EngineerdropdownList = [];

            try {
              this.tempCustList.forEach(function (w) {
                _this7.CustomerdropdownList.push({
                  Id: w.Id,
                  Name: w.Name,
                  IsAssigned: false
                });
              });
            } catch (_a) {}

            try {
              this.tempProdList.forEach(function (w) {
                {
                  _this7.ProductdropdownList.push({
                    Id: w.Id,
                    Name: w.Name,
                    IsAssigned: false
                  });
                }
              });
            } catch (_b) {}

            try {
              this.engineerservice.EngineerLocalList.forEach(function (w) {
                {
                  _this7.EngineerdropdownList.push({
                    Id: w.Id,
                    Name: w.EngineerName,
                    IsAssigned: false
                  });
                }
              });
            } catch (_c) {}
          }
        }, {
          key: "AddProductWarrantyInDB",
          value: function AddProductWarrantyInDB() {
            var _this8 = this;

            //this.isEdit = false;
            this.service.ProductWarranty.WarrantyDays = Number(this.service.ProductWarranty.WarrantyDays);

            if (this.service.ProductWarranty.CustomerId === '00000000-0000-0000-0000-000000000000') {
              this.toastr.warning('Please select a Customer');
              return false;
            }

            if (this.service.ProductWarranty.ProductId === '00000000-0000-0000-0000-000000000000') {
              this.toastr.warning('Please select a ' + this.currentUser.Product);
              return false;
            }

            if (this.service.ProductWarranty.InstallationDate === null) {
              this.toastr.warning('Please select a Installation Date');
              return false;
            }

            if (this.service.ProductWarranty.Id === 0) {
              this.service.postProductWarranty(this.currentUser.Token).subscribe(function (res) {
                switch (res.status) {
                  case 201:
                    _this8.toastr.success(_this8.currentUser.Product = ' added successfully');

                    _this8.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');

                    setTimeout(function () {
                      _this8.modal.dismissAll();

                      _this8.CustomerselectedItems = [];
                      _this8.ProductselectedItems = [];
                      _this8.isShowSpinner = false;
                    }, 500);
                    break;

                  case 206:
                    _this8.toastr.warning('Token Expire');

                    _this8.isShowSpinner = false;
                    break;

                  case 208:
                    _this8.toastr.warning('Unique id already exist. use an other');

                    _this8.isShowSpinner = false;
                    break;

                  case 404:
                    break;

                  default:
                    _this8.toastr.error('error', res.statusText);

                    break;
                }
              }, function (err) {
                console.log(err);
              });
            } else {
              this.service.putProductWarranty(this.currentUser.Token).subscribe(function (res) {
                switch (res.status) {
                  case 202:
                    _this8.toastr.success('Update successfully');

                    _this8.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');

                    setTimeout(function () {
                      _this8.modal.dismissAll();

                      _this8.CustomerselectedItems = [];
                      _this8.ProductselectedItems = [];
                      _this8.isShowSpinner = false;
                    }, 500);
                    break;

                  case 206:
                    _this8.toastr.warning('Token Expire');

                    _this8.isShowSpinner = false;
                    break;

                  case 208:
                    _this8.toastr.warning('Unique id already exist. use an other');

                    _this8.isShowSpinner = false;
                    break;

                  case 404:
                    break;

                  default:
                    _this8.toastr.error('error', res.statusText);

                    break;
                }
              }, function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this9 = this;

            this.downloadService.downloadFromServer('productwarranty', this.currentUser.Token).then(function (blob) {
              Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, _this9.currentUser.Product + 'warranty_' + new Date().getTime() + '.xlsx');
            });
          }
        }, {
          key: "pupulatewarranty",
          value: function pupulatewarranty(x) {
            var _this10 = this;

            if (x.IsFrom === 'TicketItem') {
              this.service.getproductById(this.currentUser.Token, x.Id).subscribe(function (res) {
                if (res) {
                  var response = res;
                  _this10.ticketService.TicketItem = response.result;

                  _this10.modal.open(_this10.modalContent2, {
                    size: 'lg'
                  });
                }
              }, function (error) {
                return console.log(error);
              });
            }

            if (x.IsFrom === 'ProductWarranty') {
              this.service.getproductwarrantyById(this.currentUser.Token, x.Id).subscribe(function (res) {
                if (res) {
                  _this10.service.ProductWarranty = res;
                  _this10.CustomerselectedItems = [];
                  _this10.ProductselectedItems = [];
                  _this10.EngineerselectedItems = [];
                  _this10.CustomerdropdownList = [];
                  _this10.ProductdropdownList = [];
                  _this10.EngineerdropdownList = [];

                  try {
                    var cid = '00000000-0000-0000-0000-000000000000';

                    var eitem = _this10.tempCustList.filter(function (x) {
                      return x.Id === _this10.service.ProductWarranty.CustomerId;
                    });

                    cid = eitem[0].Id;

                    _this10.tempCustList.forEach(function (w) {
                      if (w.Id === cid) {
                        _this10.CustomerselectedItems.push({
                          Id: w.Id,
                          Name: w.Name,
                          IsAssigned: true
                        });
                      } else {
                        _this10.CustomerdropdownList.push({
                          Id: w.Id,
                          Name: w.Name,
                          IsAssigned: false
                        });
                      }
                    });
                  } catch (_a) {}

                  try {
                    var pid = '00000000-0000-0000-0000-000000000000';

                    var _eitem = _this10.tempProdList.filter(function (x) {
                      return x.Id === _this10.service.ProductWarranty.ProductId;
                    });

                    pid = _eitem[0].Id;

                    _this10.tempProdList.forEach(function (w) {
                      if (w.Id === pid) {
                        _this10.ProductselectedItems.push({
                          Id: w.Id,
                          Name: w.Name,
                          IsAssigned: true
                        });
                      } else {
                        _this10.ProductdropdownList.push({
                          Id: w.Id,
                          Name: w.Name,
                          IsAssigned: false
                        });
                      }
                    });
                  } catch (_b) {}

                  _this10.modal.open(_this10.modalContent1, {
                    size: 'lg'
                  });
                }
              }, function (error) {
                return console.log(error);
              });
            }
          }
        }, {
          key: "removewarranty",
          value: function removewarranty(x) {
            var _this11 = this;

            if (x.IsFrom === 'TicketItem') {
              if (confirm('Are you sure to remove this warranty ' + this.currentUser.Product.toLowerCase() + '?')) {
                this.ticketService.deleteTicketItemDetails(this.currentUser.Token, x.Id).subscribe(function (res) {
                  if (res) {
                    var response = res;

                    if (response.Message === 'success') {
                      _this11.service.ReportsWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
                      _this11.service.ReportsWarranty.ProductId = '00000000-0000-0000-0000-000000000000';

                      _this11.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
                    }

                    if (response.Message === 'failure') {
                      _this11.toastr.warning('warning', response.MessageDescription);
                    }
                  }
                }, function (error) {
                  return console.log(error);
                });
              }
            }

            if (x.IsFrom === 'ProductWarranty') {
              if (confirm('Are you sure to remove this warranty ' + this.currentUser.Product.toLowerCase() + '?')) {
                this.service.deleteProductWarranty(this.currentUser.Token, x.Id).then(function (res) {
                  switch (res.status) {
                    case 204:
                      _this11.toastr.success('Removed successfully');

                      _this11.service.ReportsWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
                      _this11.service.ReportsWarranty.ProductId = '00000000-0000-0000-0000-000000000000';

                      _this11.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');

                      break;

                    case 404:
                      break;

                    default:
                      _this11.toastr.error('error', res.statusText);

                      break;
                  }
                }, function (err) {
                  console.log(err);
                });
              }
            }
          }
        }, {
          key: "onItemSelect",
          value: function onItemSelect(e, t) {
            if (t === 'C') {
              if (e.value === undefined) {
                this.service.ProductWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
              }

              this.service.ProductWarranty.CustomerId = e.value.Id;
            }

            if (t === 'P') {
              var titem = this.tempProdList.filter(function (x) {
                return x.Id === e.value.Id;
              });
              this.service.ProductWarranty.UniqId = titem[0].SerialNo;

              if (e.value === undefined) {
                this.service.ProductWarranty.ProductId = '00000000-0000-0000-0000-000000000000';
              }

              this.service.ProductWarranty.ProductId = e.value.Id;
            }

            if (t === 'SC') {
              if (e.value === undefined) {
                this.service.ReportsWarranty.CustomerId = '00000000-0000-0000-0000-000000000000';
              }

              this.service.ReportsWarranty.CustomerId = e.value.Id;
            }

            if (t === 'SP') {
              if (e.value === undefined) {
                this.service.ReportsWarranty.ProductId = '00000000-0000-0000-0000-000000000000';
              }

              this.service.ReportsWarranty.ProductId = e.value.Id;
            }
          }
        }, {
          key: "BuldWarrantyUpload",
          value: function BuldWarrantyUpload(file) {
            var _this12 = this;

            var ExcelfileToUpload = file.item(0);
            var filExt = ExcelfileToUpload.name.split('.');
            var Ext1 = filExt[1];

            if (Ext1 === 'xls' || Ext1 === 'xlsx') {
              var reader = new FileReader();

              reader.onload = function (event) {
                var ExcelLocalURL = event.target.result;

                _this12.customerservice.SetAsDefaultValues();

                _this12.customerservice.formData.Latitude = Ext1;
                _this12.customerservice.formData.CustomerLogo = ExcelLocalURL.split(',')[1];

                _this12.customerservice.ProductWarrantyBulkUpload(_this12.currentUser.Id).subscribe(function (res) {
                  if (res) {
                    var TResponse = new Object();
                    TResponse = res;
                    _this12.ErrorRes = TResponse.ErrorResponse;
                    _this12.SuccessRes = TResponse.SuccessResponse;
                    setTimeout(function () {
                      _this12.distroyAndReloadTable('00000000', '00000000', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'ALL');
                    }, 1000);
                  }
                }, function (error) {
                  return console.log(error);
                });
              };

              reader.readAsDataURL(ExcelfileToUpload);
            } else {
              this.toastr.warning('', 'Invalid file format, select excel sheet!');
              return false;
            }
          }
        }]);

        return WarrantyComponent;
      }();

      WarrantyComponent.??fac = function WarrantyComponent_Factory(t) {
        return new (t || WarrantyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_report_service__WEBPACK_IMPORTED_MODULE_9__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_userlog_service__WEBPACK_IMPORTED_MODULE_12__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_downloads_service__WEBPACK_IMPORTED_MODULE_14__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_ticket_service__WEBPACK_IMPORTED_MODULE_16__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_17__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_18__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_19__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_20__["GenicProfileService"]));
      };

      WarrantyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: WarrantyComponent,
        selectors: [["app-warranty"]],
        viewQuery: function WarrantyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.modalContent1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.modalContent2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_7__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_8__["NgbTimeToStringAdapter"]
        }])],
        decls: 117,
        vars: 19,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], ["class", "kt-subheader__wrapper", 4, "ngIf"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-section", "kt-drop-section"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], ["class", "scFilter", 4, "ngIf"], [1, "row", "filterstrong"], ["class", "col-md-3 padd-right-0", 4, "ngIf"], [1, "col-md-2"], [1, "input-group"], ["placeholder", "Search", "name", "service.ReportsWarranty.UniqId", 1, "form-control", 3, "ngModel", "keyup.enter", "ngModelChange"], ["service.ReportsWarranty.UniqId", "ngModel"], [1, "col-md-2", "padd-right-0", 3, "ngClass"], [1, "row", "col"], [1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--brand"], ["type", "checkbox", "name", "service.ReportsWarranty.IsDateActive", 3, "ngModel", "ngModelChange"], ["service.ReportsWarranty.IsDateActive", "ngModel"], ["class", "row col", 4, "ngIf"], ["href", "javascript:;", 1, "btnprimary", 3, "click"], ["href", "javascript:;", 1, "btnexportToExcel", 3, "click"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], ["class", "ticket-list-view-info", 4, "ngFor", "ngForAsync", "ngForOf"], ["modalContent2", ""], ["modalContent1", ""], ["id", "BuidUploadPop", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "myManFaContent"], [1, "modal-header", 2, "background-color", "aqua"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body", "my-Model-body"], [1, "row"], [1, "ExcelUpladRule"], [1, "col-md-6", "llf"], [1, "uploaddd"], ["on", "", "target", "_blank", 1, "btn", "btn-brand", "text-white", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "col-md-6", "rrd"], ["on", "", "data-toggle", "modal", 1, "btn", "btn-brand", "text-white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-file"], ["type", "file", 2, "display", "none", 3, "change"], ["BulkUpload", ""], [1, "SuccessSection"], [4, "ngFor", "ngForOf"], [1, "errorSection"], [1, "kt-subheader__wrapper"], ["href", "javascript:void(0)", 1, "btn", "btn-brand", "text-white", 3, "click"], [1, "la", "la-plus"], [1, "scFilter"], [2, "display", "none"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu", 2, "text-align", "left", "padding", "0"], [2, "width", "100%"], ["href", "javascript:;", 3, "click"], [1, "dropdown-menu", "width100", 2, "text-align", "left", "padding", "0"], ["href", "javascript:void(0)", "data-toggle", "modal", "data-target", "#BuidUploadPop", 1, "btnexportToExcel"], ["aria-hidden", "true", 1, "fa", "fa-file", "text-white"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download", "text-white"], ["href", "javascript:void(0)", "routerLink", "/warranty/withoutwarranty", 1, "btnexportToExcel"], [1, "col-md-3", "padd-right-0"], ["name", "SCustomerselectedItems", 1, "myselectClass", 3, "multiple", "ngModel", "config", "options", "change", "ngModelChange"], ["name", "SProductselectedItems", 1, "myselectClass", 3, "multiple", "ngModel", "config", "options", "change", "ngModelChange"], ["readonly", "", "placeholder", "yyyy-mm-dd", "name", "service.ReportsWarranty.InstallationDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsWarranty.InstallationDate", "ngModel", "datePickerfromdate", "ngbDatepicker"], ["readonly", "", "placeholder", "yyyy-mm-dd", "name", "service.ReportsWarranty.ExpiryDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsWarranty.ExpiryDate", "ngModel", "datePickertodate", "ngbDatepicker"], [1, "ticket-list-view-info"], [2, "width", "2%"], [4, "ngIf"], ["class", "kt-badge kt-badge--success kt-badge--inline kt-badge--pill", 4, "ngIf"], ["class", "kt-badge kt-badge--warning kt-badge--inline kt-badge--pill", 4, "ngIf"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "border", "#1dc9b7"], [1, "dropdown-menu"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "kt-badge--pill"], [1, "kt-badge", "kt-badge--warning", "kt-badge--inline", "kt-badge--pill"], [1, "modal-header"], ["type", "button", 1, "close", 2, "color", "red", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "kt-widget19__content"], [1, "col-md-12"], [1, "kt-section", "ktrSection"], [1, "kt-section__content"], [1, "table", "table-bordered", "service-form-table-border"], ["type", "text", "name", "ticketService.TicketItem.UniqId", "placeholder", "Search", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ticketService.TicketItem.UniqId", "ngModel"], [1, "col"], ["href", "javascript:void(0)", 1, "text-warning", "btnStockUpdate", 3, "click"], ["class", "row", 4, "ngIf"], ["class", "row", "class", "row", 4, "ngIf"], ["readonly", "", "placeholder", "mm-dd-yyyy", "name", "ticketService.TicketItem.InstallationDate", "ngbDatepicker", "", "dateFormat", "MMM-dd-yyyy", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["ticketService.TicketItem.InstallationDate", "ngModel", "datePickerInvoiceDate", "ngbDatepicker"], ["class", "spinner-border text-warning", "role", "status", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["aria-hidden", "true", 1, "fa", "fa-minus"], [1, "kt-radio-list"], [1, "kt-radio", "kt-radio--bold", "kt-radio--brand"], ["type", "radio", "value", "90", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["WarrantyDays", "ngModel"], ["type", "radio", "value", "180", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "270", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "365", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["class", "kt-radio kt-radio--bold kt-radio--brand", 4, "ngIf"], ["type", "radio", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "name", "WarrantyDays", "checked", "", 1, "custom-control-input", 3, "change"], ["class", "col-md-4", 4, "ngIf"], ["class", "col-md-8 padd-top-10", 4, "ngIf"], [1, "col-md-4"], ["type", "text", "name", "WarrantyDays", "placeholder", "Custom", "maxlength", "4", 1, "form-control", 3, "ngModel", "keyup", "keydown", "ngModelChange", "keypress"], [1, "col-md-8", "padd-top-10"], ["role", "status", 1, "spinner-border", "text-warning"], [1, "sr-only"], ["type", "hidden", "name", "service.ProductWarranty.Id", 3, "ngModel", "ngModelChange"], ["service.ProductWarranty.Id", "ngModel"], ["name", "CustomerselectedItems", 1, "myselectClass", 3, "multiple", "ngModel", "config", "options", "change", "ngModelChange"], ["name", "ProductselectedItems", 1, "myselectClass", 3, "multiple", "ngModel", "config", "options", "change", "ngModelChange"], ["type", "text", "name", "service.ProductWarranty.UniqId", "placeholder", "Unique Id", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.ProductWarranty.UniqId", "ngModel"], ["readonly", "", "placeholder", "mm-dd-yyyy", "name", "service.ProductWarranty.InstallationDate", "ngbDatepicker", "", "dateFormat", "MMM-dd-yyyy", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["service.ProductWarranty.InstallationDate", "ngModel", "datePickerInvoiceDate2", "ngbDatepicker"], ["type", "radio", "value", "90", "name", "service.ProductWarranty.WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "180", "name", "service.ProductWarranty.WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "270", "name", "service.ProductWarranty.WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "365", "name", "service.ProductWarranty.WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "name", "service.ProductWarranty.WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "text", "name", "service.ProductWarranty.WarrantyDays", "placeholder", "Custom", "maxlength", "4", 1, "form-control", 3, "ngModel", "keyup", "keydown", "ngModelChange", "keypress"], ["service.ProductWarranty.WarrantyDays", "ngModel"], ["role", "alert", 1, "alert-alert-success"], ["role", "alert", 1, "alert-alert-danger"]],
        template: function WarrantyComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Warranty ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, WarrantyComponent_div_13_Template, 4, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h1", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Warranty List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, WarrantyComponent_ul_25_Template, 33, 1, "ul", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, WarrantyComponent_div_27_Template, 2, 4, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, WarrantyComponent_div_28_Template, 2, 4, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function WarrantyComponent_Template_input_keyup_enter_31_listener() {
              return ctx.refreshWarrantyList(true);
            })("ngModelChange", function WarrantyComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.service.ReportsWarranty.UniqId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "input", 32, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WarrantyComponent_Template_input_ngModelChange_37_listener($event) {
              return ctx.service.ReportsWarranty.IsDateActive = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " \xA0\xA0\xA0\xA0\xA0\xA0Include with date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, WarrantyComponent_div_41_Template, 13, 2, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_Template_a_click_44_listener() {
              return ctx.refreshWarrantyList(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_Template_a_click_47_listener() {
              return ctx.refreshWarrantyList(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Clear Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "table", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Unique Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Warranty Start Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Warranty End Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, WarrantyComponent_tr_70_Template, 34, 14, "tr", 39);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, WarrantyComponent_ng_template_71_Template, 48, 11, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, WarrantyComponent_ng_template_73_Template, 54, 19, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h4", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "1.) All * fields are mendatory.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "2.) Do not remove first row header of template file.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "3.) Do not change header name.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Download sample data template...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " Sample Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Select Excel sheet and upload...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WarrantyComponent_Template_a_click_107_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r146);

              var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](111);

              return _r12.click();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "i", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " Bulk Upload ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "input", 58, 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WarrantyComponent_Template_input_change_110_listener($event) {
              return ctx.BuldWarrantyUpload($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](114, WarrantyComponent_ng_container_114_Template, 3, 1, "ng-container", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](116, WarrantyComponent_ng_container_116_Template, 3, 1, "ng-container", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Type === "Admin" || ctx.currentUser.Type === "SubAdmin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Type === "Admin" || ctx.currentUser.Type === "SubAdmin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.SCustomerdropdownList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.SProductdropdownList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.ReportsWarranty.UniqId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.service.ReportsWarranty.IsDateActive === true ? "col-md-2 padd-right-0 isdateactive" : "col-md-2 padd-right-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.ReportsWarranty.IsDateActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.ReportsWarranty.IsDateActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.currentUser.Product);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.service.ReportsWarrantyListActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Product, " Warranty Bulk Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Product, " Warranty upload rules as follows:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("4.) Please make sure before uploading, Customer/", ctx.currentUser.Product, " mentioned in template are already added in Customer/", ctx.currentUser.Product, " master data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", ctx.excelDataTemplatePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.SuccessRes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.ErrorRes);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["CheckboxControlValueAccessor"], angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_23__["SelectDropDownComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["RadioControlValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DatePipe"]],
        styles: [".isdateactive[_ngcontent-%COMP%] {border: 2px solid; padding: 4px;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\nul.width100[_ngcontent-%COMP%]{transform: translate3d(0px, 31px, 0px) !important; overflow-x: hidden;}\r\n.date-view[_ngcontent-%COMP%] { font-size: 60px; font-weight: 900; }\r\n.btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0px;;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:black;display: inline-block;padding: 8px 8px;background-color: #eaeaea;margin: 0px 3px 5px;border-radius: 5px;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ border-radius:40%; height: 20;width: 20; }\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size: 10px;\r\n    padding-left: 8px;\r\n    padding-top: 6px;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;border-bottom:none;padding:20px 15px;background-color:#f1f1f1;margin-bottom:0px;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(100%/5);border-right:1px solid #d6d6d6;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child(){border-right:0px;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#e7e7e7;color:black;font-size:14px;padding:10px 18px;text-align:center;display:block;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black;margin-right:10px;font-size:18px;text-align:center;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color: #21366b;color:white;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.tab-content[_ngcontent-%COMP%]{background-color:white;margin:15px;padding:15px;box-shadow:10px 10px 10px #e7e7e7;margin-top:0px;}\r\nngx-select-dropdown.myselectClass.ng-valid.ng-touched.ng-dirty[_ngcontent-%COMP%]   .ngx-dropdown-list-container.ng-star-inserted[_ngcontent-%COMP%] {height: 240px;width: 294px !important;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {\r\n      margin-left: -105px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vd2FycmFudHkvd2FycmFudHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLGlCQUFpQixFQUFFLFlBQVksQ0FBQztBQUMvQyxxQkFBcUIsbUJBQW1CLENBQUM7QUFDekMsWUFBWSxpREFBaUQsRUFBRSxrQkFBa0IsQ0FBQztBQUNsRixhQUFhLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTtBQUNoRCxXQUFXLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO0FBQzFELGlCQUFpQixjQUFjLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUU7QUFDeEUsb0JBQW9CLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQztBQUN4SSx5QkFBeUIsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRTtBQUNsRSwyQkFBMkIsZUFBZTtJQUN0QyxpQkFBaUI7SUFDakIsZ0JBQWdCLENBQUM7QUFDakIsa0JBQWtCLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQztBQUM3RyxxQkFBcUIsa0JBQWtCLENBQUMsOEJBQThCLENBQUM7QUFDdkUsa0NBQWtDLGdCQUFnQixDQUFDO0FBQ25ELHVCQUF1QixrQkFBa0IsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztBQUN2SCx5QkFBeUIsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztBQUN4Riw0REFBNEQseUJBQXlCLENBQUMsV0FBVyxDQUFDO0FBQ2xHLGdFQUFnRSxXQUFXLENBQUM7QUFDNUUsYUFBYSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGlDQUFpQyxDQUFDLGNBQWMsQ0FBQztBQUM5Ryw4R0FBOEcsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQ3BKO01BQ0UsbUJBQW1CO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vd2FycmFudHkvd2FycmFudHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc2RhdGVhY3RpdmUge2JvcmRlcjogMnB4IHNvbGlkOyBwYWRkaW5nOiA0cHg7fVxyXG4uZHJvcGRvd24tbWVudS5zaG93IHttYXJnaW4tbGVmdDogLTEwNXB4O31cclxudWwud2lkdGgxMDB7dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDMxcHgsIDBweCkgIWltcG9ydGFudDsgb3ZlcmZsb3cteDogaGlkZGVuO31cclxuLmRhdGUtdmlldyB7IGZvbnQtc2l6ZTogNjBweDsgZm9udC13ZWlnaHQ6IDkwMDsgfVxyXG4uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6ICNmZjg1MzM7fVxyXG4udGVhbS1pbm5lci0xIHVse3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1ib3R0b206MHB4Ozt9XHJcbi50ZWFtLWlubmVyLTEgdWwgbGl7Y29sb3I6YmxhY2s7ZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6IDhweCA4cHg7YmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTttYXJnaW46IDBweCAzcHggNXB4O2JvcmRlci1yYWRpdXM6IDVweDt9XHJcbi50ZWFtLWlubmVyLTEgdWwgbGkgaW1neyBib3JkZXItcmFkaXVzOjQwJTsgaGVpZ2h0OiAyMDt3aWR0aDogMjA7IH1cclxuLnRlYW0taW5uZXItMSB1bCBsaSAuY2xvc2V7Zm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O31cclxuICAgIC5jdXN0b21lci1mb3JtIHVse3dpZHRoOjEwMCU7Ym9yZGVyLWJvdHRvbTpub25lO3BhZGRpbmc6MjBweCAxNXB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTttYXJnaW4tYm90dG9tOjBweDt9XHJcbiAgICAuY3VzdG9tZXItZm9ybSB1bCBsaXt3aWR0aDpjYWxjKDEwMCUvNSk7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZDZkNmQ2O31cclxuICAgIC5jdXN0b21lci1mb3JtIHVsIGxpOmxhc3QtY2hpbGQoKXtib3JkZXItcmlnaHQ6MHB4O31cclxuICAgIC5jdXN0b21lci1mb3JtIHVsIGxpIGF7YmFja2dyb3VuZDojZTdlN2U3O2NvbG9yOmJsYWNrO2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmc6MTBweCAxOHB4O3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6YmxvY2s7fVxyXG4gICAgLmN1c3RvbWVyLWZvcm0gdWwgbGkgYSBpe2NvbG9yOmJsYWNrO21hcmdpbi1yaWdodDoxMHB4O2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyO31cclxuICAgIC5jdXN0b21lci1mb3JtIHVsIGxpIGE6aG92ZXIsIC5jdXN0b21lci1mb3JtIHVsIGxpIGEuYWN0aXZle2JhY2tncm91bmQtY29sb3I6ICMyMTM2NmI7Y29sb3I6d2hpdGU7fVxyXG4gICAgLmN1c3RvbWVyLWZvcm0gdWwgbGkgYTpob3ZlciBpLCAuY3VzdG9tZXItZm9ybSB1bCBsaSBhLmFjdGl2ZSBpe2NvbG9yOndoaXRlO31cclxuICAgIC50YWItY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO21hcmdpbjoxNXB4O3BhZGRpbmc6MTVweDtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNlN2U3ZTc7bWFyZ2luLXRvcDowcHg7fVxyXG4gICAgbmd4LXNlbGVjdC1kcm9wZG93bi5teXNlbGVjdENsYXNzLm5nLXZhbGlkLm5nLXRvdWNoZWQubmctZGlydHkgLm5neC1kcm9wZG93bi1saXN0LWNvbnRhaW5lci5uZy1zdGFyLWluc2VydGVkIHtoZWlnaHQ6IDI0MHB4O3dpZHRoOiAyOTRweCAhaW1wb3J0YW50O31cclxuICAgIC5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEwNXB4O1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WarrantyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-warranty',
            templateUrl: './warranty.component.html',
            styleUrls: ['./warranty.component.css'],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"],
              useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_7__["NgbDateToStringAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"],
              useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_8__["NgbTimeToStringAdapter"]
            }]
          }]
        }], function () {
          return [{
            type: _services_report_service__WEBPACK_IMPORTED_MODULE_9__["ReportService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
          }, {
            type: _services_userlog_service__WEBPACK_IMPORTED_MODULE_12__["UserlogService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]
          }, {
            type: _services_downloads_service__WEBPACK_IMPORTED_MODULE_14__["DownloadService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]
          }, {
            type: _services_ticket_service__WEBPACK_IMPORTED_MODULE_16__["TicketService"]
          }, {
            type: _services_customer_service__WEBPACK_IMPORTED_MODULE_17__["CustomerService"]
          }, {
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_18__["ProductService"]
          }, {
            type: src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_19__["EngineerService"]
          }, {
            type: _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_20__["GenicProfileService"]
          }];
        }, {
          modalContent1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalContent1', {
              "static": true
            }]
          }],
          modalContent2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalContent2', {
              "static": true
            }]
          }],
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "Gdn9":
    /*!*********************************************!*\
      !*** ./src/app/services/product.service.ts ***!
      \*********************************************/

    /*! exports provided: ProductService */

    /***/
    function Gdn9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
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

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
          this.SetAsDefaultValue();
          this.setDefaultProductMovement();
          this.setDefaultProductBatch();
          this.ProductMovementList = [];
          this.locatProductMovmentList = [];
          this.Productlist = [];
          this.ItemofLists = [];
        }

        _createClass(ProductService, [{
          key: "SetAsDefaultValue",
          value: function SetAsDefaultValue() {
            this.formData = {
              Id: '00000000-0000-0000-0000-000000000000',
              ProductLogo: '',
              ProductId: '',
              ProductName: '',
              ProductBrand: '',
              ProductCategory: '',
              PurchasePrice: 0,
              SalePrice: 0,
              Quantity: 0,
              LowStockTriggerQuantity: 0,
              Description: '',
              RuleType: 'LEFO',
              Status: true,
              InWarranty: true,
              WarrantyDays: 365,
              ItemofLists: [],
              ProductMovementList: []
            };
          }
        }, {
          key: "setDefaultProductBatch",
          value: function setDefaultProductBatch() {
            this.ItemofList = {
              Id: 0,
              ProductId: '00000000-0000-0000-0000-000000000000',
              BatchNo: '',
              AvailableQuantity: 0,
              ManufacturingDate: null,
              ExpiryDate: null,
              UsedQty: 0,
              TotalQty: 0,
              HoldQty: 0,
              ProductUnit: 'PCS',
              tempQty: 0,
              Remarks: ''
            };
          }
        }, {
          key: "setDefaultProductMovement",
          value: function setDefaultProductMovement() {
            this.ProductMovementData = {
              Id: 0,
              ProductId: '',
              ProductCode: '',
              ProductName: '',
              TicketId: '',
              QuoteId: '',
              InvoiceId: '',
              JobDate: new Date(),
              CustomerName: '',
              CustomerAddress: '',
              UsedQty: 0,
              QtyAvailable: 0,
              QtyHold: 0,
              QtyTotal: 0,
              MovementDate: new Date()
            };
          }
        }, {
          key: "postProductDetails",
          value: function postProductDetails(t) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostProduct/' + t, this.formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "putProductDetails",
          value: function putProductDetails(t) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutProduct/' + t, this.formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "getAllProductList",
          value: function getAllProductList(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetAllProduct/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestProductsList",
          value: function refrestProductsList(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProducts/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "getProductById",
          value: function getProductById(token, PId) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProductById/' + token + '/' + PId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestProductlistSync",
          value: function refrestProductlistSync(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProductListForWarranty/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "onProductStatusChange",
          value: function onProductStatusChange(token, PId) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/onProductStatusChange/' + token + '/' + PId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          } //#region service

        }, {
          key: "postServiceDetails",
          value: function postServiceDetails(token) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostService/' + token, this.serviceformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "putServiceDetails",
          value: function putServiceDetails(token) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutService/' + token, this.serviceformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestServicesList",
          value: function refrestServicesList(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetService/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "onServiceStatusChange",
          value: function onServiceStatusChange(token, ServiceId) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/onServiceStatusChange/' + token + '/' + ServiceId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "GetRandamUniqueId",
          value: function GetRandamUniqueId(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetWarrantyUniqueKey/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          } //#endregion
          /// *******************************************************************************/
          // Brands methods (api) Begin

        }, {
          key: "postBrandDetails",
          value: function postBrandDetails(token) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostBrand/' + token, this.BrandformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "putBrandDetails",
          value: function putBrandDetails(token) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutBrand/' + token, this.BrandformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestBrand",
          value: function refrestBrand(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetBrand/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          } // Brands methods (api) End
          /// *******************************************************************************/
          /// *******************************************************************************/
          // Category methods (api) Begin

        }, {
          key: "postCategoryDetails",
          value: function postCategoryDetails(token) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostCategory/' + token, this.CategoryformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "putCategoryDetails",
          value: function putCategoryDetails(token) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutCategory/' + token, this.CategoryformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestCategory",
          value: function refrestCategory(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetCategory/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }]);

        return ProductService;
      }();

      ProductService.??fac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ProductService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ProductService,
        factory: ProductService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductService, [{
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
    "X7qY":
    /*!******************************************************************************************!*\
      !*** ./src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: TicketStatusComponent */

    /***/
    function X7qY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketStatusComponent", function () {
        return TicketStatusComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TicketStatusComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "NEW\xA0JOB\xA0REQUEST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "DEFECT\xA0JOB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "CANCELLED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "UPCOMING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "CLOSED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "CLOSED & QUOTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "CLOSED & INVOICED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "OVERDUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_8_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0Day");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_8_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TicketStatusComponent_span_8_span_2_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TicketStatusComponent_span_8_span_3_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("By ", ctx_r8.OverDueDays, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.OverDueDays === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.OverDueDays > 1);
        }
      }

      function TicketStatusComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "HOLD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "INPROGRESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TicketStatusComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "UNSCHEDULED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var TicketStatusComponent = function TicketStatusComponent() {
        _classCallCheck(this, TicketStatusComponent);
      };

      TicketStatusComponent.??fac = function TicketStatusComponent_Factory(t) {
        return new (t || TicketStatusComponent)();
      };

      TicketStatusComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TicketStatusComponent,
        selectors: [["generic-ticket-status"]],
        inputs: {
          Status: "Status",
          OverDueDays: "OverDueDays"
        },
        decls: 12,
        vars: 12,
        consts: [["class", "ticketstatus statusnewjobrequest", 4, "ngIf"], ["class", "ticketstatus statuscancelled", 4, "ngIf"], ["class", "ticketstatus statusupcoming", 4, "ngIf"], ["class", "ticketstatus statusclosed", 4, "ngIf"], ["class", "ticketstatus statusclosednQuoted", 4, "ngIf"], ["class", "ticketstatus statusclosednInvoised", 4, "ngIf"], ["class", "ticketstatus statusoverdue", 4, "ngIf"], ["class", "ticketstatus statusoverdueday", 4, "ngIf"], ["class", "ticketstatus statushold", 4, "ngIf"], ["class", "ticketstatus statusinprogress", 4, "ngIf"], ["class", "ticketstatus statusunschedulled", 4, "ngIf"], [1, "ticketstatus", "statusnewjobrequest"], [1, "ticketstatus", "statuscancelled"], [1, "ticketstatus", "statusupcoming"], [1, "ticketstatus", "statusclosed"], [1, "ticketstatus", "statusclosednQuoted"], [1, "ticketstatus", "statusclosednInvoised"], [1, "ticketstatus", "statusoverdue"], [1, "ticketstatus", "statusoverdueday"], [4, "ngIf"], [1, "ticketstatus", "statushold"], [1, "ticketstatus", "statusinprogress"], [1, "ticketstatus", "statusunschedulled"]],
        template: function TicketStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, TicketStatusComponent_span_0_Template, 2, 0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TicketStatusComponent_span_1_Template, 2, 0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TicketStatusComponent_span_2_Template, 2, 0, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TicketStatusComponent_span_3_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TicketStatusComponent_span_4_Template, 2, 0, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, TicketStatusComponent_span_5_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, TicketStatusComponent_span_6_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TicketStatusComponent_span_7_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, TicketStatusComponent_span_8_Template, 4, 3, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, TicketStatusComponent_span_9_Template, 2, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, TicketStatusComponent_span_10_Template, 2, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, TicketStatusComponent_span_11_Template, 2, 0, "span", 10);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "NEW JOB REQUEST");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "DEFECT JOB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "CANCELLED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "UPCOMING");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "CLOSED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "CLOSEDQUOTED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "CLOSEDINVOICED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "OVERDUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "OVERDUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "HOLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "INPROGRESS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.Status === "UNSCHEDULED");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TicketStatusComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line: component-selector
            selector: 'generic-ticket-status',
            template: "\n     <span *ngIf=\"Status ==='NEW JOB REQUEST'\" class=\"ticketstatus statusnewjobrequest\">NEW&nbsp;JOB&nbsp;REQUEST</span>\n     <span *ngIf=\"Status ==='DEFECT JOB'\" class=\"ticketstatus statusnewjobrequest\">DEFECT&nbsp;JOB</span>\n    <span *ngIf=\"Status ==='CANCELLED'\" class=\"ticketstatus statuscancelled\">CANCELLED</span>\n    <span *ngIf=\"Status ==='UPCOMING'\" class=\"ticketstatus statusupcoming\">UPCOMING</span>\n    <span *ngIf=\"Status ==='CLOSED'\" class=\"ticketstatus statusclosed\">CLOSED</span>\n    <span *ngIf=\"Status ==='CLOSEDQUOTED'\" class=\"ticketstatus statusclosednQuoted\">CLOSED & QUOTED</span>\n    <span *ngIf=\"Status ==='CLOSEDINVOICED'\" class=\"ticketstatus statusclosednInvoised\">CLOSED & INVOICED</span>\n    <span *ngIf=\"Status ==='OVERDUE'\" class=\"ticketstatus statusoverdue\">OVERDUE</span>\n    <span *ngIf=\"Status ==='OVERDUE'\" class=\"ticketstatus statusoverdueday\">By {{OverDueDays}}\n\t<span *ngIf=\"OverDueDays === 1\">&nbsp;Day</span>\n\t<span *ngIf=\"OverDueDays > 1\">&nbsp;Days</span></span>\n    <span *ngIf=\"Status ==='HOLD'\" class=\"ticketstatus statushold\">HOLD</span>\n    <span *ngIf=\"Status ==='INPROGRESS'\" class=\"ticketstatus statusinprogress\">INPROGRESS</span>\n    <span *ngIf=\"Status === 'UNSCHEDULED'\" class=\"ticketstatus statusunschedulled\">UNSCHEDULED</span>\n  "
          }]
        }], null, {
          Status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          OverDueDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "dIrY":
    /*!*******************************************************************!*\
      !*** ./src/app/application/warranty/withoutwarranty.component.ts ***!
      \*******************************************************************/

    /*! exports provided: WithoutWarrantyComponent */

    /***/
    function dIrY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WithoutWarrantyComponent", function () {
        return WithoutWarrantyComponent;
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


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/report.service */
      "ppW+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _services_userlog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/userlog.service */
      "V05N");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services */
      "o0su");
      /* harmony import */


      var _services_ticket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/ticket.service */
      "KPvW");
      /* harmony import */


      var _services_customer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/customer.service */
      "0zL+");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/product.service */
      "Gdn9");
      /* harmony import */


      var _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */
      "X7qY");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["modalContent2"];

      function WithoutWarrantyComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WithoutWarrantyComponent_div_20_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 34);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "generic-ticket-status", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("StatusChange", function WithoutWarrantyComponent_div_20_tr_29_Template_generic_ticket_status_StatusChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var x_r5 = ctx.$implicit;
            return x_r5.Status = $event;
          })("OverDueDays", function WithoutWarrantyComponent_div_20_tr_29_Template_generic_ticket_status_OverDueDays_16_listener() {
            return "0";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WithoutWarrantyComponent_div_20_tr_29_Template_a_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var x_r5 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r10.OpenWarrantyModel(x_r5.Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Add Warranty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r5 = ctx.$implicit;
          var i_r6 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r6 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r5.ItemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r5.TicketId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 7, x_r5.OneOffAppointmentDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 9, x_r5.TicketClosedDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r5.Customer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("Status", x_r5.Status);
        }
      }

      function WithoutWarrantyComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Without Warranty List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Back to warranty list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, WithoutWarrantyComponent_div_20_tr_29_Template, 21, 11, "tr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.currentUser.Product);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.currentUser.Ticket, " Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.currentUser.Ticket, " Appointment Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.currentUser.Ticket, " Closed Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.service.ReportsUnWarrantyList);
        }
      }

      function WithoutWarrantyComponent_ng_template_21_span_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Edit terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WithoutWarrantyComponent_ng_template_21_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Hide terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WithoutWarrantyComponent_ng_template_21_div_33_label_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 67, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WithoutWarrantyComponent_ng_template_21_div_33_label_22_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r27.customwarrantyShowMethor();
          })("ngModelChange", function WithoutWarrantyComponent_ng_template_21_div_33_label_22_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r29.ticketService.TicketItem.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r24.ticketService.TicketItem.WarrantyDays);
        }
      }

      function WithoutWarrantyComponent_ng_template_21_div_33_label_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WithoutWarrantyComponent_ng_template_21_div_33_label_23_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r30.customwarrantyShowMethor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WithoutWarrantyComponent_ng_template_21_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 61, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WithoutWarrantyComponent_ng_template_21_div_33_Template_input_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r32.customwarrantyShowMethor();
          })("ngModelChange", function WithoutWarrantyComponent_ng_template_21_div_33_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r34.ticketService.TicketItem.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 90 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 63, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WithoutWarrantyComponent_ng_template_21_div_33_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r35.customwarrantyShowMethor();
          })("ngModelChange", function WithoutWarrantyComponent_ng_template_21_div_33_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r36.ticketService.TicketItem.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " 180 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 64, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WithoutWarrantyComponent_ng_template_21_div_33_Template_input_change_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r37.customwarrantyShowMethor();
          })("ngModelChange", function WithoutWarrantyComponent_ng_template_21_div_33_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r38.ticketService.TicketItem.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " 270 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 65, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WithoutWarrantyComponent_ng_template_21_div_33_Template_input_change_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r39.customwarrantyShowMethor();
          })("ngModelChange", function WithoutWarrantyComponent_ng_template_21_div_33_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r40.ticketService.TicketItem.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " 365 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, WithoutWarrantyComponent_ng_template_21_div_33_label_22_Template, 5, 1, "label", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, WithoutWarrantyComponent_ng_template_21_div_33_label_23_Template, 4, 0, "label", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r15.ticketService.TicketItem.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r15.ticketService.TicketItem.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r15.ticketService.TicketItem.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r15.ticketService.TicketItem.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r15.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r15.customwarrantyShow);
        }
      }

      function WithoutWarrantyComponent_ng_template_21_div_34_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 72, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function WithoutWarrantyComponent_ng_template_21_div_34_div_1_Template_input_keyup_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r44.customwarrantyShowMethor();
          })("keydown", function WithoutWarrantyComponent_ng_template_21_div_34_div_1_Template_input_keydown_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r46.customwarrantyShowMethor();
          })("ngModelChange", function WithoutWarrantyComponent_ng_template_21_div_34_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r47.ticketService.TicketItem.WarrantyDays = $event;
          })("keypress", function WithoutWarrantyComponent_ng_template_21_div_34_div_1_Template_input_keypress_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r48.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r41.ticketService.TicketItem.WarrantyDays);
        }
      }

      function WithoutWarrantyComponent_ng_template_21_div_34_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " (in number of days) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WithoutWarrantyComponent_ng_template_21_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, WithoutWarrantyComponent_ng_template_21_div_34_div_1_Template, 3, 1, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, WithoutWarrantyComponent_ng_template_21_div_34_div_2_Template, 2, 0, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r16.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r16.customwarrantyShow);
        }
      }

      function WithoutWarrantyComponent_ng_template_21_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WithoutWarrantyComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WithoutWarrantyComponent_ng_template_21_Template_button_click_1_listener() {
            var close_r11 = ctx.close;
            return close_r11();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Unique Id:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 47, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WithoutWarrantyComponent_ng_template_21_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r50.ticketService.TicketItem.UniqId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WithoutWarrantyComponent_ng_template_21_Template_a_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r52.enablewarrantchange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, WithoutWarrantyComponent_ng_template_21_span_31_Template, 3, 0, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, WithoutWarrantyComponent_ng_template_21_span_32_Template, 3, 0, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, WithoutWarrantyComponent_ng_template_21_div_33_Template, 24, 6, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, WithoutWarrantyComponent_ng_template_21_div_34_Template, 3, 2, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Installation Date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "input", 53, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WithoutWarrantyComponent_ng_template_21_Template_input_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](41);

            return _r18.toggle();
          })("ngModelChange", function WithoutWarrantyComponent_ng_template_21_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r54.ticketService.TicketItem.InstallationDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, WithoutWarrantyComponent_ng_template_21_div_44_Template, 3, 0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WithoutWarrantyComponent_ng_template_21_Template_button_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r55.UpdateItemInstallation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Save");

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
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r3.currentUser.Product, " Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.ticketService.TicketItem.ItemName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.ticketService.TicketItem.UniqId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r3.currentUser.Product, " Warranty:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.ticketService.TicketItem.WarrantyDays, " Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r3.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.ticketService.TicketItem.InstallationDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.isShowSpinner);
        }
      }

      var WithoutWarrantyComponent = /*#__PURE__*/function () {
        function WithoutWarrantyComponent(service, titleService, router, modal, logService, toastr, loginservice, ticketService, customerservice, productService, genicprofileservice) {
          var _this13 = this;

          _classCallCheck(this, WithoutWarrantyComponent);

          this.service = service;
          this.titleService = titleService;
          this.router = router;
          this.modal = modal;
          this.logService = logService;
          this.toastr = toastr;
          this.loginservice = loginservice;
          this.ticketService = ticketService;
          this.customerservice = customerservice;
          this.productService = productService;
          this.genicprofileservice = genicprofileservice;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.isShowSpinner = false;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this13.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        }

        _createClass(WithoutWarrantyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            if (!this.currentUser.Permissions.ProductWarranty) {
              this.router.navigate(['/dashboard']);
            }

            this.titleService.setTitle('Without Warranty | Genic Solution');
            this.genicprofileservice.TicketFilter.IsReady = false;
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
            this.dtOptions = {
              pagingType: 'full_numbers',
              paging: true,
              ordering: false,
              lengthMenu: [5, 10, 25, 50, 75, 100]
            };
            this.service.refrestUnWarrantyList(this.currentUser.Token, 'ALL').subscribe(function (res) {
              if (res) {
                _this14.service.ReportsUnWarrantyList = res;

                _this14.dtTrigger.next();
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "distroyAndReloadTable2",
          value: function distroyAndReloadTable2(strSearch) {
            var _this15 = this;

            if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
              this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              })["catch"](function (err) {
                return console.error(err);
              });
            }

            this.service.refrestUnWarrantyList(this.currentUser.Token, strSearch).subscribe(function (res) {
              if (res) {
                _this15.service.ReportsUnWarrantyList = res;

                _this15.dtTrigger.next();
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "OpenWarrantyModel",
          value: function OpenWarrantyModel(Id) {
            var _this16 = this;

            this.service.getproductById(this.currentUser.Token, Id).subscribe(function (res) {
              if (res) {
                var response = res;
                _this16.ticketService.TicketItem = response.result;

                _this16.modal.open(_this16.modalContent2, {
                  size: 'lg'
                });
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "customwarrantyShowMethor",
          value: function customwarrantyShowMethor() {
            if (this.ticketService.TicketItem.WarrantyDays === undefined) {
              this.customwarrantyShow = false;
            } else {
              switch (this.ticketService.TicketItem.WarrantyDays.toString()) {
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
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            if (Number(event.target.value) === 0) {
              event.target.value = null;
            }

            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }, {
          key: "enablewarrantchange",
          value: function enablewarrantchange() {
            if (this.customwarrantyShowEdit) {
              this.customwarrantyShowEdit = false;
            } else {
              this.customwarrantyShowEdit = true;
            }
          }
        }, {
          key: "UpdateItemInstallation",
          value: function UpdateItemInstallation() {
            var _this17 = this;

            this.isShowSpinner = true;
            this.ticketService.TicketItem.InWarranty = true;
            this.ticketService.TicketItem.WarrantyDays = Number(this.ticketService.TicketItem.WarrantyDays);
            this.ticketService.putTicketItemDetails(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  var des7 = 'A ' + _this17.currentUser.Product + ' : ' + _this17.ticketService.TicketItem.ItemName + ', is updated from the ' + _this17.currentUser.Ticket + ' No ' + _this17.ticketService.formData.TicketId + ', of Customer : ' + _this17.ticketService.formData.CustomerName + ', and Uniq No ' + _this17.ticketService.TicketItem.UniqId + ', Warranty :  ' + _this17.ticketService.TicketItem.WarrantyDays + ' Days by user ' + _this17.currentUser.FullName;
                  var Activity7 = 'An ' + _this17.currentUser.Product + ' : ' + _this17.ticketService.TicketItem.ItemName + ' Installation Date Update : ' + _this17.ticketService.TicketItem.InstallationDate + ' is updated from the ' + _this17.currentUser.Ticket + ' No : ' + _this17.ticketService.formData.TicketId;

                  _this17.logService.postUserLog(_this17.currentUser.Id, _this17.currentUser.FullName, _this17.currentUser.Ticket, _this17.ticketService.formData.Id, 'Modify', des7, Activity7).subscribe();

                  _this17.distroyAndReloadTable2('ALL');

                  setTimeout(function () {
                    _this17.modal.dismissAll();

                    _this17.isShowSpinner = false;
                  }, 500);
                }

                if (response.Message === 'failure') {
                  _this17.isShowSpinner = false;

                  _this17.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return WithoutWarrantyComponent;
      }();

      WithoutWarrantyComponent.??fac = function WithoutWarrantyComponent_Factory(t) {
        return new (t || WithoutWarrantyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_userlog_service__WEBPACK_IMPORTED_MODULE_8__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_ticket_service__WEBPACK_IMPORTED_MODULE_11__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_12__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_13__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_14__["GenicProfileService"]));
      };

      WithoutWarrantyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: WithoutWarrantyComponent,
        selectors: [["app-withoutwarranty"]],
        viewQuery: function WithoutWarrantyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.modalContent2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 23,
        vars: 2,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-section", "kt-drop-section"], [1, "kt-portlet__body", "customer-listing-datatable"], ["class", "row", 4, "ngIf"], ["class", "panel panel-primary list-panel", "id", "list-panel", 4, "ngIf"], ["modalContent2", ""], [1, "row"], [1, "col-sm-4", "col-md-4", "col-lg-4"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "btnexport"], ["href", "javascript:void(0)", "routerLink", "/warranty/withwarranty", 1, "btnexportToExcel"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], ["class", "ticket-list-view-info", 4, "ngFor", "ngForAsync", "ngForOf"], [1, "ticket-list-view-info"], [2, "width", "2%"], [3, "Status", "StatusChange", "OverDueDays"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:;", 1, "btn", "btn-primary", 2, "background-color", "#1dc9b7", "border", "#1dc9b7", 3, "click"], [1, "modal-header"], ["type", "button", 1, "close", 2, "color", "red", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "kt-widget19__content"], [1, "col-md-12"], [1, "kt-section", "ktrSection"], [1, "kt-section__content"], [1, "table", "table-bordered", "service-form-table-border"], ["type", "text", "name", "ticketService.TicketItem.UniqId", "placeholder", "Uniq Id", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ticketService.TicketItem.UniqId", "ngModel"], [1, "col"], ["href", "javascript:void(0)", 1, "text-warning", "btnStockUpdate", 3, "click"], [4, "ngIf"], ["class", "row", "class", "row", 4, "ngIf"], ["readonly", "", "placeholder", "mm-dd-yyyy", "name", "ticketService.TicketItem.InstallationDate", "ngbDatepicker", "", "dateFormat", "MMM-dd-yyyy", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["ticketService.TicketItem.InstallationDate", "ngModel", "datePickerInvoiceDate", "ngbDatepicker"], ["class", "spinner-border text-warning", "role", "status", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["aria-hidden", "true", 1, "fa", "fa-minus"], [1, "kt-radio-list"], [1, "kt-radio", "kt-radio--bold", "kt-radio--brand"], ["type", "radio", "value", "90", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["WarrantyDays", "ngModel"], ["type", "radio", "value", "180", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "270", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "365", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["class", "kt-radio kt-radio--bold kt-radio--brand", 4, "ngIf"], ["type", "radio", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "name", "WarrantyDays", "checked", "", 1, "custom-control-input", 3, "change"], ["class", "col-md-4", 4, "ngIf"], ["class", "col-md-8 padd-top-10", 4, "ngIf"], [1, "col-md-4"], ["type", "number", "name", "WarrantyDays", "placeholder", "Custom", "maxlength", "4", 1, "form-control", 3, "ngModel", "keyup", "keydown", "ngModelChange", "keypress"], [1, "col-md-8", "padd-top-10"], ["role", "status", 1, "spinner-border", "text-warning"], [1, "sr-only"]],
        template: function WithoutWarrantyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Without Warranty ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, WithoutWarrantyComponent_div_19_Template, 7, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, WithoutWarrantyComponent_div_20_Template, 30, 7, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, WithoutWarrantyComponent_ng_template_21_Template, 47, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.service.ReportsUnWarrantyList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.ReportsUnWarrantyList);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_16__["TicketStatusComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NumberValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
        styles: [".isdateactive[_ngcontent-%COMP%] {border: 2px solid; padding: 4px;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\nul.width100[_ngcontent-%COMP%]{transform: translate3d(0px, 31px, 0px) !important; overflow-x: hidden;}\r\n.date-view[_ngcontent-%COMP%] { font-size: 60px; font-weight: 900; }\r\n.btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0px;;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:black;display: inline-block;padding: 8px 8px;background-color: #eaeaea;margin: 0px 3px 5px;border-radius: 5px;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ border-radius:40%; height: 20;width: 20; }\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size: 10px;\r\n    padding-left: 8px;\r\n    padding-top: 6px;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;border-bottom:none;padding:20px 15px;background-color:#f1f1f1;margin-bottom:0px;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(100%/5);border-right:1px solid #d6d6d6;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child(){border-right:0px;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#e7e7e7;color:black;font-size:14px;padding:10px 18px;text-align:center;display:block;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black;margin-right:10px;font-size:18px;text-align:center;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color: #21366b;color:white;}\r\n.customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.tab-content[_ngcontent-%COMP%]{background-color:white;margin:15px;padding:15px;box-shadow:10px 10px 10px #e7e7e7;margin-top:0px;}\r\nngx-select-dropdown.myselectClass.ng-valid.ng-touched.ng-dirty[_ngcontent-%COMP%]   .ngx-dropdown-list-container.ng-star-inserted[_ngcontent-%COMP%] {height: 240px;width: 294px !important;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {\r\n      margin-left: -105px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vd2FycmFudHkvd2FycmFudHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLGlCQUFpQixFQUFFLFlBQVksQ0FBQztBQUMvQyxxQkFBcUIsbUJBQW1CLENBQUM7QUFDekMsWUFBWSxpREFBaUQsRUFBRSxrQkFBa0IsQ0FBQztBQUNsRixhQUFhLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTtBQUNoRCxXQUFXLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO0FBQzFELGlCQUFpQixjQUFjLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUU7QUFDeEUsb0JBQW9CLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQztBQUN4SSx5QkFBeUIsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRTtBQUNsRSwyQkFBMkIsZUFBZTtJQUN0QyxpQkFBaUI7SUFDakIsZ0JBQWdCLENBQUM7QUFDakIsa0JBQWtCLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQztBQUM3RyxxQkFBcUIsa0JBQWtCLENBQUMsOEJBQThCLENBQUM7QUFDdkUsa0NBQWtDLGdCQUFnQixDQUFDO0FBQ25ELHVCQUF1QixrQkFBa0IsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztBQUN2SCx5QkFBeUIsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztBQUN4Riw0REFBNEQseUJBQXlCLENBQUMsV0FBVyxDQUFDO0FBQ2xHLGdFQUFnRSxXQUFXLENBQUM7QUFDNUUsYUFBYSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGlDQUFpQyxDQUFDLGNBQWMsQ0FBQztBQUM5Ryw4R0FBOEcsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQ3BKO01BQ0UsbUJBQW1CO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vd2FycmFudHkvd2FycmFudHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc2RhdGVhY3RpdmUge2JvcmRlcjogMnB4IHNvbGlkOyBwYWRkaW5nOiA0cHg7fVxyXG4uZHJvcGRvd24tbWVudS5zaG93IHttYXJnaW4tbGVmdDogLTEwNXB4O31cclxudWwud2lkdGgxMDB7dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDMxcHgsIDBweCkgIWltcG9ydGFudDsgb3ZlcmZsb3cteDogaGlkZGVuO31cclxuLmRhdGUtdmlldyB7IGZvbnQtc2l6ZTogNjBweDsgZm9udC13ZWlnaHQ6IDkwMDsgfVxyXG4uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6ICNmZjg1MzM7fVxyXG4udGVhbS1pbm5lci0xIHVse3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1ib3R0b206MHB4Ozt9XHJcbi50ZWFtLWlubmVyLTEgdWwgbGl7Y29sb3I6YmxhY2s7ZGlzcGxheTogaW5saW5lLWJsb2NrO3BhZGRpbmc6IDhweCA4cHg7YmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTttYXJnaW46IDBweCAzcHggNXB4O2JvcmRlci1yYWRpdXM6IDVweDt9XHJcbi50ZWFtLWlubmVyLTEgdWwgbGkgaW1neyBib3JkZXItcmFkaXVzOjQwJTsgaGVpZ2h0OiAyMDt3aWR0aDogMjA7IH1cclxuLnRlYW0taW5uZXItMSB1bCBsaSAuY2xvc2V7Zm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O31cclxuICAgIC5jdXN0b21lci1mb3JtIHVse3dpZHRoOjEwMCU7Ym9yZGVyLWJvdHRvbTpub25lO3BhZGRpbmc6MjBweCAxNXB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTttYXJnaW4tYm90dG9tOjBweDt9XHJcbiAgICAuY3VzdG9tZXItZm9ybSB1bCBsaXt3aWR0aDpjYWxjKDEwMCUvNSk7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZDZkNmQ2O31cclxuICAgIC5jdXN0b21lci1mb3JtIHVsIGxpOmxhc3QtY2hpbGQoKXtib3JkZXItcmlnaHQ6MHB4O31cclxuICAgIC5jdXN0b21lci1mb3JtIHVsIGxpIGF7YmFja2dyb3VuZDojZTdlN2U3O2NvbG9yOmJsYWNrO2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmc6MTBweCAxOHB4O3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6YmxvY2s7fVxyXG4gICAgLmN1c3RvbWVyLWZvcm0gdWwgbGkgYSBpe2NvbG9yOmJsYWNrO21hcmdpbi1yaWdodDoxMHB4O2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyO31cclxuICAgIC5jdXN0b21lci1mb3JtIHVsIGxpIGE6aG92ZXIsIC5jdXN0b21lci1mb3JtIHVsIGxpIGEuYWN0aXZle2JhY2tncm91bmQtY29sb3I6ICMyMTM2NmI7Y29sb3I6d2hpdGU7fVxyXG4gICAgLmN1c3RvbWVyLWZvcm0gdWwgbGkgYTpob3ZlciBpLCAuY3VzdG9tZXItZm9ybSB1bCBsaSBhLmFjdGl2ZSBpe2NvbG9yOndoaXRlO31cclxuICAgIC50YWItY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO21hcmdpbjoxNXB4O3BhZGRpbmc6MTVweDtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNlN2U3ZTc7bWFyZ2luLXRvcDowcHg7fVxyXG4gICAgbmd4LXNlbGVjdC1kcm9wZG93bi5teXNlbGVjdENsYXNzLm5nLXZhbGlkLm5nLXRvdWNoZWQubmctZGlydHkgLm5neC1kcm9wZG93bi1saXN0LWNvbnRhaW5lci5uZy1zdGFyLWluc2VydGVkIHtoZWlnaHQ6IDI0MHB4O3dpZHRoOiAyOTRweCAhaW1wb3J0YW50O31cclxuICAgIC5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEwNXB4O1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WithoutWarrantyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-withoutwarranty',
            templateUrl: './withoutwarranty.component.html',
            styleUrls: ['./warranty.component.css']
          }]
        }], function () {
          return [{
            type: _services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
          }, {
            type: _services_userlog_service__WEBPACK_IMPORTED_MODULE_8__["UserlogService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
          }, {
            type: _services_ticket_service__WEBPACK_IMPORTED_MODULE_11__["TicketService"]
          }, {
            type: _services_customer_service__WEBPACK_IMPORTED_MODULE_12__["CustomerService"]
          }, {
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_13__["ProductService"]
          }, {
            type: _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_14__["GenicProfileService"]
          }];
        }, {
          modalContent2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalContent2', {
              "static": true
            }]
          }],
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
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
          var _this18;

          _classCallCheck(this, NgbTimeToStringAdapter);

          _this18 = _super.apply(this, arguments);
          _this18.year = new Date().getUTCFullYear();
          _this18.month = new Date().getUTCMonth() + 1;
          _this18.day = new Date().getUTCDate();
          return _this18;
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

      NgbTimeToStringAdapter.??fac = function NgbTimeToStringAdapter_Factory(t) {
        return ??NgbTimeToStringAdapter_BaseFactory(t || NgbTimeToStringAdapter);
      };

      NgbTimeToStringAdapter.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: NgbTimeToStringAdapter,
        factory: NgbTimeToStringAdapter.??fac
      });

      var ??NgbTimeToStringAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](NgbTimeToStringAdapter);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbTimeToStringAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "n832":
    /*!*********************************************************!*\
      !*** ./src/app/application/warranty/warranty.module.ts ***!
      \*********************************************************/

    /*! exports provided: WarrantyModule */

    /***/
    function n832(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WarrantyModule", function () {
        return WarrantyModule;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _warranty_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./warranty.component */
      "BT+e");
      /* harmony import */


      var _withoutwarranty_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./withoutwarranty.component */
      "dIrY");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module */
      "7kmZ");
      /* harmony import */


      var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/ngb-date-to-string-adapter */
      "x8Rg");
      /* harmony import */


      var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/ngb-time-to-string-adapter */
      "dRK5");
      /* harmony import */


      var ngx_select2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-select2 */
      "u1nn");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-select-dropdown */
      "8bGj");

      var routes = [{
        path: 'warranty',
        component: _warranty_component__WEBPACK_IMPORTED_MODULE_11__["WarrantyComponent"]
      }, {
        path: 'withwarranty',
        component: _warranty_component__WEBPACK_IMPORTED_MODULE_11__["WarrantyComponent"]
      }, {
        path: 'withoutwarranty',
        component: _withoutwarranty_component__WEBPACK_IMPORTED_MODULE_12__["WithoutWarrantyComponent"]
      }];

      var WarrantyModule = function WarrantyModule() {
        _classCallCheck(this, WarrantyModule);
      };

      WarrantyModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: WarrantyModule
      });
      WarrantyModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function WarrantyModule_Factory(t) {
          return new (t || WarrantyModule)();
        },
        providers: [{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_15__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_16__["NgbTimeToStringAdapter"]
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], ngx_select2__WEBPACK_IMPORTED_MODULE_17__["LSelect2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_19__["SelectDropDownModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_14__["TicketStatusComponentModule"]], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](WarrantyModule, {
          declarations: [_warranty_component__WEBPACK_IMPORTED_MODULE_11__["WarrantyComponent"], _withoutwarranty_component__WEBPACK_IMPORTED_MODULE_12__["WithoutWarrantyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], ngx_select2__WEBPACK_IMPORTED_MODULE_17__["LSelect2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_19__["SelectDropDownModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_14__["TicketStatusComponentModule"]],
          exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WarrantyModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_warranty_component__WEBPACK_IMPORTED_MODULE_11__["WarrantyComponent"], _withoutwarranty_component__WEBPACK_IMPORTED_MODULE_12__["WithoutWarrantyComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], ngx_select2__WEBPACK_IMPORTED_MODULE_17__["LSelect2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_19__["SelectDropDownModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_14__["TicketStatusComponentModule"]],
            exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDateAdapter"],
              useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_15__["NgbDateToStringAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTimeAdapter"],
              useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_16__["NgbTimeToStringAdapter"]
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "u1nn":
    /*!***********************************************************************!*\
      !*** ./node_modules/ngx-select2/__ivy_ngcc__/fesm2015/ngx-select2.js ***!
      \***********************************************************************/

    /*! exports provided: LSelect2Component, LSelect2Module */

    /***/
    function u1nn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LSelect2Component", function () {
        return LSelect2Component;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LSelect2Module", function () {
        return LSelect2Module;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["selectControll"];
      var _c1 = [[["option"], ["optgroup"]]];
      var _c2 = ["option, optgroup"];
      var LSelect2Component_1;

      var LSelect2Component = LSelect2Component_1 = /*#__PURE__*/function () {
        function LSelect2Component(_renderer) {
          _classCallCheck(this, LSelect2Component);

          this._renderer = _renderer;
          this.options = {};
          this.required = false;
          this.maxCount = Number.MAX_SAFE_INTEGER;
          this.minCount = Number.MIN_SAFE_INTEGER;
          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          this._onChange = function (_) {};

          this._onTouched = function () {};
        }

        _createClass(LSelect2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this19 = this;

            this._jqueryElement = $(this.selectControll.nativeElement);
            this.initSelect2();

            this._jqueryElement.on('select2:select select2:unselect', function (e) {
              var data = _this19._jqueryElement.select2('data');

              var _iterator = _createForOfIteratorHelper(data),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;
                  delete item.element;
                  delete item.disabled;
                  delete item.selected;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!_this19.options.multiple) {
                data = e.type == 'select2:unselect' ? null : data[0];
              }

              _this19.selectedValue = data;

              _this19._onChange(data);

              _this19.valueChange.emit(data);
            });

            if (this.selectedValue) {
              this.setSelect2Value(this.selectedValue);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._jqueryElement) return;

            if (this.hasChanged(changes)) {
              this.initSelect2();

              if (this.selectedValue) {
                this.setSelect2Value(this.selectedValue);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._jqueryElement.select2('destroy');
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.selectedValue = value;
            if (value !== null && value !== undefined) this.setSelect2Value(value);
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "validate",
          value: function validate(c) {
            if (this.disabled) {
              return null;
            }

            var length = this.selectedValue ? this.selectedValue.length : 0;

            if (this.required === true && length === 0) {
              return {
                required: true
              };
            }

            if (this.minCount > 0 && length < this.minCount) {
              return {
                minCount: true
              };
            }

            if (this.maxCount > 0 && length > this.maxCount) {
              return {
                maxCount: true
              };
            }

            return null;
          }
        }, {
          key: "initSelect2",
          value: function initSelect2() {
            if (this._jqueryElement.hasClass('select2-hidden-accessible') == true) {
              this._jqueryElement.select2('destroy');

              this._renderer.setProperty(this.selectControll.nativeElement, 'innerHTML', '');
            }

            var options = {
              data: this.data
            };
            Object.assign(options, this.options);

            this._jqueryElement.select2(options);
          }
        }, {
          key: "setSelect2Value",
          value: function setSelect2Value(value) {
            if (!this._jqueryElement || !value) {
              this.selectedValue = value;
              return;
            }

            ;
            var targetVal = value['id'] || value;

            if (Array.isArray(value)) {
              targetVal = value.map(function (x) {
                return x['id'];
              });
            }

            this._jqueryElement.val(targetVal).trigger('change');
          }
        }, {
          key: "hasChanged",
          value: function hasChanged(changes) {
            if (changes['data'] && JSON.stringify(changes['data'].previousValue) !== JSON.stringify(changes['data'].currentValue)) {
              return true;
            }

            if (changes['options'] && JSON.stringify(changes['options'].previousValue) !== JSON.stringify(changes['options'].currentValue)) {
              return true;
            }

            return false;
          }
        }]);

        return LSelect2Component;
      }();

      LSelect2Component.??fac = function LSelect2Component_Factory(t) {
        return new (t || LSelect2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
      };

      LSelect2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: LSelect2Component,
        selectors: [["l-select2"]],
        viewQuery: function LSelect2Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.selectControll = _t.first);
          }
        },
        inputs: {
          options: "options",
          required: "required",
          maxCount: "maxCount",
          minCount: "minCount",
          disabled: "disabled",
          data: "data"
        },
        outputs: {
          valueChange: "valueChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return LSelect2Component_1;
          }),
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return LSelect2Component_1;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 3,
        vars: 1,
        consts: [[2, "width", "100%", 3, "disabled"], ["selectControll", ""]],
        template: function LSelect2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "select", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", ctx.disabled);
          }
        },
        encapsulation: 2
      });

      LSelect2Component.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectControll'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], LSelect2Component.prototype, "selectControll", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], LSelect2Component.prototype, "data", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], LSelect2Component.prototype, "disabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LSelect2Component.prototype, "options", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], LSelect2Component.prototype, "required", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], LSelect2Component.prototype, "maxCount", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], LSelect2Component.prototype, "minCount", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], LSelect2Component.prototype, "valueChange", void 0);
      LSelect2Component = LSelect2Component_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], LSelect2Component);

      var LSelect2Module = function LSelect2Module() {
        _classCallCheck(this, LSelect2Module);
      };

      LSelect2Module.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: LSelect2Module
      });
      LSelect2Module.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function LSelect2Module_Factory(t) {
          return new (t || LSelect2Module)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LSelect2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'l-select2',
            template: "<select #selectControll [disabled]=\"disabled\" style=\"width: 100%\">\r\n  <ng-content select=\"option, optgroup\">\r\n  </ng-content>\r\n</select>",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return LSelect2Component_1;
              }),
              multi: true
            }, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return LSelect2Component_1;
              }),
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }];
        }, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectControll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['selectControll']
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](LSelect2Module, {
          declarations: function declarations() {
            return [LSelect2Component];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]];
          },
          exports: function exports() {
            return [LSelect2Component];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LSelect2Module, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [LSelect2Component],
            exports: [LSelect2Component]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-select2.js.map

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
          var _this20;

          _classCallCheck(this, NgbDateToStringAdapter);

          _this20 = _super2.apply(this, arguments);
          _this20.hour = 0;
          _this20.minute = 0;
          _this20.second = 0;
          return _this20;
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

      NgbDateToStringAdapter.??fac = function NgbDateToStringAdapter_Factory(t) {
        return ??NgbDateToStringAdapter_BaseFactory(t || NgbDateToStringAdapter);
      };

      NgbDateToStringAdapter.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: NgbDateToStringAdapter,
        factory: NgbDateToStringAdapter.??fac
      });

      var ??NgbDateToStringAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](NgbDateToStringAdapter);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbDateToStringAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=application-warranty-warranty-module-es5.js.map