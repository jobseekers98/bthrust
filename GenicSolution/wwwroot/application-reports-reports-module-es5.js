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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-reports-reports-module"], {
    /***/
    "5z/u":
    /*!****************************************************************!*\
      !*** ./src/app/application/reports/visits/visits.component.ts ***!
      \****************************************************************/

    /*! exports provided: VisitsComponent */

    /***/
    function zU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitsComponent", function () {
        return VisitsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/ngb-date-to-string-adapter */
      "x8Rg");
      /* harmony import */


      var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/ngb-time-to-string-adapter */
      "dRK5");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var src_app_services_report_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/report.module */
      "JYEN");
      /* harmony import */


      var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/report.service */
      "ppW+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/downloads.service */
      "iHRC");
      /* harmony import */


      var src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/engineer.service */
      "+MZO");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */
      "X7qY");

      function VisitsComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function VisitsComponent_div_25_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", x_r12.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r12.EngineerName, " ");
        }
      }

      function VisitsComponent_div_25_option_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", x_r13.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r13.TicketId, " ");
        }
      }

      function VisitsComponent_div_25_tr_70_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "generic-ticket-status", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("StatusChange", function VisitsComponent_div_25_tr_70_Template_generic_ticket_status_StatusChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var x_r14 = ctx.$implicit;
            return x_r14.TicketDetails.Status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Start: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " End: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Duration: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Start: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " End: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](40, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Duration: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "td", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Company: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "td", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r14 = ctx.$implicit;
          var i_r15 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r15 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r11.currentUser.Ticket, " No: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r14.TicketDetails.TicketId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("Status", x_r14.TicketDetails.Status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r11.currentUser.Ticket, " Type: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r14.TicketDetails.TicketType, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](20, 17, x_r14.Scheduled.Start, "MMM d, y HH:mm", "+0000"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](25, 21, x_r14.Scheduled.End, "MMM d, y HH:mm", "+0000"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r14.Scheduled.Duration, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](35, 25, x_r14.VisitStart, "MMM d, y HH:mm", "+0000"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](40, 29, x_r14.VisitEnd, "MMM d, y HH:mm", "+0000"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r14.VisitDuration.substring(0, 8), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r14.TicketDetails.CustomerCompanyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r14.TicketDetails.CustomerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r14.TicketDetails.CustomerEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r14.TicketDetails.CustomerAddress, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r14.VisitEngineerName, " ");
        }
      }

      function VisitsComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Visit List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function VisitsComponent_div_25_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r18.exportAsXLSX();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Export to Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function VisitsComponent_div_25_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.service.ReportsFilter.StartDate = $event;
          })("click", function VisitsComponent_div_25_Template_input_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);

            return _r3.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function VisitsComponent_div_25_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.service.ReportsFilter.EndDate = $event;
          })("click", function VisitsComponent_div_25_Template_input_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](20);

            return _r5.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "select", 37, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function VisitsComponent_div_25_Template_select_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.service.ReportsFilter.Status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " ALL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "HOLD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "CLOSED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "select", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function VisitsComponent_div_25_Template_select_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.service.ReportsFilter.Engineer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, VisitsComponent_div_25_option_37_Template, 2, 2, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "select", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function VisitsComponent_div_25_Template_select_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r26.service.ReportsFilter.Id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, VisitsComponent_div_25_option_44_Template, 2, 2, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function VisitsComponent_div_25_Template_a_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.refreshVisitsList(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function VisitsComponent_div_25_Template_a_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r28.refreshVisitsList(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Clear Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "table", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Scheduled Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Visit Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Company Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, VisitsComponent_div_25_tr_70_Template, 63, 33, "tr", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.StartDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.EndDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.Status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.Engineer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ALL ", ctx_r1.currentUser.Engineer, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.engineerservice.Engineerlist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ALL ", ctx_r1.currentUser.Ticket, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.ticketlisttemp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.currentUser.Ticket, " Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.currentUser.Engineer, " Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.data);
        }
      }

      var VisitsComponent = /*#__PURE__*/function () {
        function VisitsComponent(service, titleService, downloadService, engineerservice, genicprofileservice, loginservice, router, toastr) {
          var _this = this;

          _classCallCheck(this, VisitsComponent);

          this.service = service;
          this.titleService = titleService;
          this.downloadService = downloadService;
          this.engineerservice = engineerservice;
          this.genicprofileservice = genicprofileservice;
          this.loginservice = loginservice;
          this.router = router;
          this.toastr = toastr;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.date = new Date();
          this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
          this.firstdate = this.firstDay.getFullYear().toString().padStart(4, '0') + '-' + (this.firstDay.getMonth() + 1).toString().padStart(2, '0') + '-' + this.firstDay.getDate().toString().padStart(2, '0');
          this.lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
          this.lastdate = this.lastDay.getFullYear().toString().padStart(4, '0') + '-' + (this.lastDay.getMonth() + 1).toString().padStart(2, '0') + '-' + this.lastDay.getDate().toString().padStart(2, '0');
          this.loginservice.currentUser.subscribe(function (x) {
            return _this.currentUser = x;
          });
          this.data = [];
          this.ticketlist = [];
          this.ticketlisttemp = [];
        }

        _createClass(VisitsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (!this.currentUser.Permissions.ReportVisit) {
              this.router.navigate(['/dashboard']);
            }

            this.titleService.setTitle('Report Visits | Genic Solution');
            this.genicprofileservice.TicketFilter.IsReady = false;
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
            this.dtOptions = {
              pagingType: 'full_numbers',
              paging: true,
              lengthMenu: [5, 10, 25, 50, 75, 100]
            };
            this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this2.engineerservice.Engineerlist = response.result;
                }

                if (response.Message === 'failure') {
                  _this2.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.service.ReportsFilter = new src_app_services_report_module__WEBPACK_IMPORTED_MODULE_6__["ReportsFilter"]();
            this.service.ReportsFilter.StartDate = this.firstdate;
            this.service.ReportsFilter.EndDate = this.lastdate;
            this.service.ReportsFilter.Status = 'ALL';
            this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
            this.service.ReportsFilter.Id = '00000000-0000-0000-0000-000000000000';
            var cursDate = this.service.ReportsFilter.StartDate;
            var cureDate = this.service.ReportsFilter.EndDate;
            var sDate = cursDate.split('T')[0].replace(/-/g, '');
            var eDate = cureDate.split('T')[0].replace(/-/g, '');
            this.loaddata(sDate, eDate, this.service.ReportsFilter.Status, this.service.ReportsFilter.Engineer, this.service.ReportsFilter.Id);
            setTimeout(function () {
              _this2.ticketlisttemp = _this2.ticketlist;
            }, 1000);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "loaddata",
          value: function loaddata(sdate, edate, type, eid, tid) {
            var _this3 = this;

            if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
              this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              })["catch"](function (err) {
                return console.error(err);
              });
            }

            this.service.refrestVisitsReports(this.currentUser.Token, sdate, edate, type, eid, tid).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this3.data = response.result;
                  _this3.ticketlist = response.ticketlist;

                  _this3.dtTrigger.next();
                }

                if (response.Message === 'failure') {
                  _this3.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "refreshVisitsList",
          value: function refreshVisitsList(isSearch) {
            var _this4 = this;

            if (isSearch) {
              if (this.service.ReportsFilter.StartDate === '00000000') {
                this.toastr.warning('Please select From date');
                return false;
              }

              if (this.service.ReportsFilter.EndDate === '00000000') {
                this.toastr.warning('Please select to date');
                return false;
              }

              var cursDate = this.service.ReportsFilter.StartDate;
              var cureDate = this.service.ReportsFilter.EndDate;
              var sDate = cursDate.split('T')[0].replace(/-/g, '');
              var eDate = cureDate.split('T')[0].replace(/-/g, '');
              this.loaddata(sDate, eDate, this.service.ReportsFilter.Status, this.service.ReportsFilter.Engineer, this.service.ReportsFilter.Id);
            } else {
              this.service.ReportsFilter = new src_app_services_report_module__WEBPACK_IMPORTED_MODULE_6__["ReportsFilter"]();
              this.service.ReportsFilter.StartDate = this.firstdate;
              this.service.ReportsFilter.EndDate = this.lastdate;
              this.service.ReportsFilter.Status = 'ALL';
              this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
              this.service.ReportsFilter.Id = '00000000-0000-0000-0000-000000000000';

              var _sDate = this.firstdate.split('T')[0].replace(/-/g, '');

              var _eDate = this.lastdate.split('T')[0].replace(/-/g, '');

              setTimeout(function () {
                _this4.loaddata(_sDate, _eDate, _this4.service.ReportsFilter.Status, _this4.service.ReportsFilter.Engineer, _this4.service.ReportsFilter.Id);
              }, 100);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var exceldata = [];
            this.data.forEach(function (element) {
              exceldata.push({
                'TicketId': element.TicketDetails.TicketId,
                'Status': element.TicketDetails.Status,
                'Ticket Type': element.TicketDetails.TicketType,
                'Scheduled Start': element.Scheduled.Start,
                'Scheduled End': element.Scheduled.End,
                'Scheduled Duration': element.Scheduled.Duration,
                'Visit Start': element.VisitStart,
                'Visit End': element.VisitEnd,
                'Visit Duration': element.VisitDuration,
                'Company': element.TicketDetails.CustomerCompanyName,
                'Company name': element.TicketDetails.CustomerName,
                'Company Email': element.TicketDetails.CustomerEmail,
                'Company Address': element.TicketDetails.CustomerAddress,
                'Engineers': element.VisitEngineerName
              });
            });
            this.downloadService.exportAsExcelFile(exceldata, 'report_visits');
          }
        }]);

        return VisitsComponent;
      }();

      VisitsComponent.??fac = function VisitsComponent_Factory(t) {
        return new (t || VisitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_10__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"]));
      };

      VisitsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: VisitsComponent,
        selectors: [["app-visits"]],
        viewQuery: function VisitsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"]
        }])],
        decls: 26,
        vars: 2,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-section", "kt-drop-section"], [1, "kt-portlet__body", "customer-listing-datatable"], ["class", "row", 4, "ngIf"], ["class", "panel panel-primary list-panel", "id", "list-panel", 4, "ngIf"], [1, "row"], [1, "col-sm-4", "col-md-4", "col-lg-4"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "btnexport"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "row", "filterstrong"], [1, "col-md-3"], [1, "col-md-6", "padd-right-0"], [1, "input-group"], ["readonly", "", "placeholder", "yyyy-mm-dd (From Date)", "name", "service.ReportsFilter.StartDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsFilter.StartDate", "ngModel", "datePickerfromdate", "ngbDatepicker"], ["readonly", "", "placeholder", "yyyy-mm-dd  (To Date)", "name", "service.ReportsFilter.EndDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsFilter.EndDate", "ngModel", "datePickertodate", "ngbDatepicker"], [1, "col-md-2", "padd-right-0"], ["name", "service.ReportsFilter.Status", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.ReportsFilter.Status", "ngModel"], ["value", "ALL"], ["value", "HOLD"], ["value", "CLOSED"], ["name", "service.ReportsFilter.Engineer", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.ReportsFilter.Engineer", "ngModel"], ["value", "00000000-0000-0000-0000-000000000000"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "service.ReportsFilter.Id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.ReportsFilter.Id", "ngModel"], [1, "col-md-1"], ["href", "javascript:;", 1, "btnprimary", 3, "click"], [1, "col-md-2", 2, "right", "0"], ["href", "javascript:;", 1, "btnexportToExcel", 3, "click"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], ["class", "ticket-list-view-info", 4, "ngFor", "ngForAsync", "ngForOf"], [3, "value"], [1, "ticket-list-view-info"], [2, "width", "2%"], [2, "width", "22%"], [3, "Status", "StatusChange"], [2, "width", "18%"], [2, "width", "30%"], [2, "width", "10%"]],
        template: function VisitsComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Reports ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Visits ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, VisitsComponent_div_24_Template, 7, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, VisitsComponent_div_25_Template, 71, 14, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_17__["TicketStatusComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VisitsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-visits',
            templateUrl: './visits.component.html',
            styles: [],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
              useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
              useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"]
            }]
          }]
        }], function () {
          return [{
            type: src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]
          }, {
            type: src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]
          }, {
            type: src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_10__["EngineerService"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__["GenicProfileService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

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
    "Bte7":
    /*!************************************************************************!*\
      !*** ./src/app/application/reports/tickets/report-ticket.component.ts ***!
      \************************************************************************/

    /*! exports provided: ReportTicketComponent */

    /***/
    function Bte7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportTicketComponent", function () {
        return ReportTicketComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_services_report_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/report.module */
      "JYEN");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
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
      /* harmony import */


      var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/report.service */
      "ppW+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/downloads.service */
      "iHRC");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ReportTicketComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ReportTicketComponent_div_32_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", x_r11.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"](" ", x_r11.Name, " ", x_r11.FirstName, " ", x_r11.LastName, " ");
        }
      }

      function ReportTicketComponent_div_32_tr_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r12.TicketId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 9, x_r12.Created), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r12.CustomerCompanyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r12.CustomerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r12.Title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](15, 11, x_r12.AppointmentStart, "MMM d, y HH:mm a", "+0000"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](16, 15, x_r12.AppointmentEnd, "HH:mm a", "+0000"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r12.Status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r12.EngineerName, " ");
        }
      }

      function ReportTicketComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportTicketComponent_div_32_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r14.exportAsXLSX();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Export to Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportTicketComponent_div_32_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.service.ReportsFilter.StartDate = $event;
          })("click", function ReportTicketComponent_div_32_Template_input_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

            return _r3.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportTicketComponent_div_32_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r18.service.ReportsFilter.EndDate = $event;
          })("click", function ReportTicketComponent_div_32_Template_input_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](18);

            return _r5.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "select", 40, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportTicketComponent_div_32_Template_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.service.ReportsFilter.Status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " ALL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "UPCOMING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "HOLD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "INPROGRESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "OVERDUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "CLOSED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "select", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportTicketComponent_div_32_Template_select_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r21.service.ReportsFilter.Engineer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " ALL Customer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, ReportTicketComponent_div_32_option_41_Template, 2, 4, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "select", 52, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportTicketComponent_div_32_Template_select_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.service.ReportsFilter.Type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportTicketComponent_div_32_Template_a_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.refreshVisitsList(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportTicketComponent_div_32_Template_a_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.refreshVisitsList(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Clear Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "table", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Created");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Company Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Scheduled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, ReportTicketComponent_div_32_tr_76_Template, 21, 19, "tr", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" One-off-", ctx_r1.currentUser.Ticket, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.StartDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.EndDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.Status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.Engineer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.customerlisttemp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.Type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" One-Off ", ctx_r1.currentUser.Ticket, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Recurring ", ctx_r1.currentUser.Ticket, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.currentUser.Ticket, " Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.currentUser.Engineer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.data);
        }
      }

      var ReportTicketComponent = /*#__PURE__*/function () {
        function ReportTicketComponent(service, titleService, downloadService, genicprofileservice, toastr, router, loginservice) {
          var _this5 = this;

          _classCallCheck(this, ReportTicketComponent);

          this.service = service;
          this.titleService = titleService;
          this.downloadService = downloadService;
          this.genicprofileservice = genicprofileservice;
          this.toastr = toastr;
          this.router = router;
          this.loginservice = loginservice;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.date = new Date();
          this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
          this.firstdate = this.firstDay.getFullYear().toString().padStart(4, '0') + '-' + (this.firstDay.getMonth() + 1).toString().padStart(2, '0') + '-' + this.firstDay.getDate().toString().padStart(2, '0');
          this.lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
          this.lastdate = this.lastDay.getFullYear().toString().padStart(4, '0') + '-' + (this.lastDay.getMonth() + 1).toString().padStart(2, '0') + '-' + this.lastDay.getDate().toString().padStart(2, '0');
          this.loginservice.currentUser.subscribe(function (x) {
            return _this5.currentUser = x;
          });
          this.data = [];
          this.customerlist = [];
        }

        _createClass(ReportTicketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            if (!this.currentUser.Permissions.ReportTicket) {
              this.router.navigate(['/dashboard']);
            }

            this.titleService.setTitle('Report ' + this.currentUser.Ticket + ' | Genic Solution');
            this.genicprofileservice.TicketFilter.IsReady = false;
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
            this.dtOptions = {
              pagingType: 'full_numbers',
              paging: true,
              lengthMenu: [5, 10, 25, 50, 75, 100]
            };
            this.service.ReportsFilter = new src_app_services_report_module__WEBPACK_IMPORTED_MODULE_2__["ReportsFilter"]();
            this.service.ReportsFilter.StartDate = this.firstdate;
            this.service.ReportsFilter.EndDate = this.lastdate;
            this.service.ReportsFilter.Status = 'ALL';
            this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
            this.service.ReportsFilter.Type = 'One-Off Ticket';
            this.service.ReportsFilter.Department = 0;
            var cursDate = this.service.ReportsFilter.StartDate;
            var cureDate = this.service.ReportsFilter.EndDate;
            var sDate = cursDate.split('T')[0].replace(/-/g, '');
            var eDate = cureDate.split('T')[0].replace(/-/g, '');
            this.loaddata(sDate, eDate, 'false', this.service.ReportsFilter.Engineer, this.service.ReportsFilter.Status);
            setTimeout(function () {
              _this6.customerlisttemp = _this6.customerlist;
            }, 1000);
          }
        }, {
          key: "loaddata",
          value: function loaddata(sdate, edate, type, eid, status) {
            var _this7 = this;

            if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
              this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              })["catch"](function (err) {
                return console.error(err);
              });
            }

            this.service.refrestTicketReports(this.currentUser.Token, sdate, edate, type, eid, status).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this7.data = response.result;
                  _this7.customerlist = response.customerlist;

                  _this7.dtTrigger.next();
                }

                if (response.Message === 'failure') {
                  _this7.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "refreshVisitsList",
          value: function refreshVisitsList(isSearch) {
            var _this8 = this;

            if (isSearch) {
              if (this.service.ReportsFilter.StartDate === '00000000') {
                this.toastr.warning('Please select From date');
                return false;
              }

              if (this.service.ReportsFilter.EndDate === '00000000') {
                this.toastr.warning('Please select to date');
                return false;
              }

              var cursDate = this.service.ReportsFilter.StartDate;
              var cureDate = this.service.ReportsFilter.EndDate;
              var sDate = cursDate.split('T')[0].replace(/-/g, '');
              var eDate = cureDate.split('T')[0].replace(/-/g, '');
              var ticketType;

              if (this.service.ReportsFilter.Type === 'One-Off Ticket') {
                ticketType = false;
              } else {
                ticketType = true;
              }

              this.loaddata(sDate, eDate, ticketType.toString(), this.service.ReportsFilter.Engineer, this.service.ReportsFilter.Status);
            } else {
              this.service.ReportsFilter = new src_app_services_report_module__WEBPACK_IMPORTED_MODULE_2__["ReportsFilter"]();
              this.service.ReportsFilter.StartDate = this.firstdate;
              this.service.ReportsFilter.EndDate = this.lastdate;
              this.service.ReportsFilter.Status = 'ALL';
              this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
              this.service.ReportsFilter.Type = 'One-Off Ticket';
              this.service.ReportsFilter.Department = 0;

              var _sDate2 = this.firstdate.split('T')[0].replace(/-/g, '');

              var _eDate2 = this.lastdate.split('T')[0].replace(/-/g, '');

              setTimeout(function () {
                _this8.loaddata(_sDate2, _eDate2, isSearch.toString(), _this8.service.ReportsFilter.Engineer, _this8.service.ReportsFilter.Status);
              }, 100);
            }
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
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            this.downloadService.exportAsExcelFile(this.data, 'report_' + this.currentUser.Ticket + '-oneoff');
          }
        }]);

        return ReportTicketComponent;
      }();

      ReportTicketComponent.??fac = function ReportTicketComponent_Factory(t) {
        return new (t || ReportTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_10__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]));
      };

      ReportTicketComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ReportTicketComponent,
        selectors: [["ng-component"]],
        viewQuery: function ReportTicketComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbTimeToStringAdapter"]
        }])],
        decls: 33,
        vars: 3,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-section", "kt-drop-section"], [1, "kt-section__content"], [1, "row"], [1, "col-md-12", "no-spacing"], [1, ""], [1, "col"], [1, "btn-group"], [1, "kt-portlet__body", "customer-listing-datatable"], ["class", "row", 4, "ngIf"], ["class", "panel panel-primary list-panel", "id", "list-panel", 4, "ngIf"], [1, "col-sm-4", "col-md-4", "col-lg-4"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "btnexport"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "row", "filterstrong"], [1, "col", "padd-right-0"], [1, "input-group"], ["readonly", "", "placeholder", "yyyy-mm-dd (From Date)", "name", "service.ReportsFilter.StartDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsFilter.StartDate", "ngModel", "datePickerfromdate", "ngbDatepicker"], ["readonly", "", "placeholder", "yyyy-mm-dd  (To Date)", "name", "service.ReportsFilter.EndDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsFilter.EndDate", "ngModel", "datePickertodate", "ngbDatepicker"], ["name", "service.ReportsFilter.Status", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.ReportsFilter.Status", "ngModel"], ["value", "ALL"], ["value", "UPCOMING"], ["value", "HOLD"], ["value", "INPROGRESS"], ["value", "OVERDUE"], ["value", "CLOSED"], ["name", "service.ReportsFilter.Engineer", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.ReportsFilter.Engineer", "ngModel"], ["value", "00000000-0000-0000-0000-000000000000"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "service.ReportsFilter.Type", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.ReportsFilter.Type", "ngModel"], ["value", "One-Off Ticket"], ["value", "Recurring Ticket"], ["href", "javascript:;", 1, "btnprimary", 3, "click"], ["href", "javascript:;", 1, "btnexportToExcel", 3, "click"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], ["class", "ticket-list-view-info", 4, "ngFor", "ngForAsync", "ngForOf"], [3, "value"], [1, "ticket-list-view-info"]],
        template: function ReportTicketComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Reports ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ReportTicketComponent_div_31_Template, 7, 0, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, ReportTicketComponent_div_32_Template, 77, 14, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Ticket, "s ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReportTicketComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './report-ticket.component.html',
            styles: [],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"],
              useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__["NgbDateToStringAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"],
              useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbTimeToStringAdapter"]
            }]
          }]
        }], function () {
          return [{
            type: src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]
          }, {
            type: src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_10__["GenicProfileService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "N+N3":
    /*!************************************************************************************!*\
      !*** ./src/app/application/reports/report-engineers/report-engineers.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ReportEngineersComponent */

    /***/
    function NN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportEngineersComponent", function () {
        return ReportEngineersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/ngb-date-to-string-adapter */
      "x8Rg");
      /* harmony import */


      var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/ngb-time-to-string-adapter */
      "dRK5");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_services_report_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/report.module */
      "JYEN");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/report.service */
      "ppW+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/downloads.service */
      "iHRC");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ReportEngineersComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

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

      function ReportEngineersComponent_div_28_tr_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Alloted: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Closed: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Total Time: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Average Time: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r8 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r6.currentUser.Engineer, " Id: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r7.EngineerId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r7.EngineerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", x_r7.TotalAlloted, " ", ctx_r6.currentUser.Ticket, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", x_r7.TotalCompleted, " ", ctx_r6.currentUser.Ticket, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r7.TotalTimeTaken, " Minutes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r7.AverageTimeTakenTicket, " Minutes ");
        }
      }

      function ReportEngineersComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportEngineersComponent_div_28_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r9.exportAsXLSX();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Export to Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportEngineersComponent_div_28_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.service.ReportsFilter.StartDate = $event;
          })("click", function ReportEngineersComponent_div_28_Template_input_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

            return _r3.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportEngineersComponent_div_28_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r13.service.ReportsFilter.EndDate = $event;
          })("click", function ReportEngineersComponent_div_28_Template_input_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](18);

            return _r5.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportEngineersComponent_div_28_Template_a_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r15.refreshEngineerData("datewise");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportEngineersComponent_div_28_Template_a_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.refreshEngineerData("alldata");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Clear Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "table", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Time Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, ReportEngineersComponent_div_28_tr_40_Template, 28, 10, "tr", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.currentUser.Engineer, "'s Report List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.StartDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.EndDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.currentUser.Engineer, " Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.currentUser.Ticket, " Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.data);
        }
      }

      var ReportEngineersComponent = /*#__PURE__*/function () {
        function ReportEngineersComponent(service, titleService, downloadService, loginservice, genicprofileservice, router, toastr) {
          var _this9 = this;

          _classCallCheck(this, ReportEngineersComponent);

          this.service = service;
          this.titleService = titleService;
          this.downloadService = downloadService;
          this.loginservice = loginservice;
          this.genicprofileservice = genicprofileservice;
          this.router = router;
          this.toastr = toastr;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.loginservice.currentUser.subscribe(function (x) {
            return _this9.currentUser = x;
          });
          this.data = [];
        }

        _createClass(ReportEngineersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.currentUser.Permissions.ReportEngineer) {
              this.router.navigate(['/dashboard']);
            }

            this.titleService.setTitle('Report Engineer | Genic Solution');
            this.genicprofileservice.TicketFilter.IsReady = false;
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
            this.dtOptions = {
              pagingType: 'full_numbers',
              paging: true,
              lengthMenu: [5, 10, 25, 50, 75, 100]
            };
            this.service.ReportsFilter = new src_app_services_report_module__WEBPACK_IMPORTED_MODULE_5__["ReportsFilter"]();
            this.service.ReportsFilter.Department = 0;
            this.loaddata('00000000', '00000000', 'alldata');
          }
        }, {
          key: "loaddata",
          value: function loaddata(sdate, edate, type) {
            var _this10 = this;

            if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
              this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              })["catch"](function (err) {
                return console.error(err);
              });
            }

            this.service.refrestEngineerReports(this.currentUser.Token, sdate, edate, type).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this10.data = response.result;

                  _this10.dtTrigger.next();
                }

                if (response.Message === 'failure') {
                  _this10.toastr.warning('warning', response.MessageDescription);
                }
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
          key: "refreshEngineerData",
          value: function refreshEngineerData(datewise) {
            if (datewise === 'datewise') {
              if (this.service.ReportsFilter.StartDate === undefined) {
                this.toastr.warning('Please select From date');
                return false;
              }

              if (this.service.ReportsFilter.EndDate === undefined) {
                this.toastr.warning('Please select to date');
                return false;
              }

              var cursDate = this.service.ReportsFilter.StartDate;
              var cureDate = this.service.ReportsFilter.EndDate;
              var sDate = cursDate.split('T')[0].replace(/-/g, '');
              var eDate = cureDate.split('T')[0].replace(/-/g, '');
              this.loaddata(sDate, eDate, datewise);
            } else {
              this.service.ReportsFilter = new src_app_services_report_module__WEBPACK_IMPORTED_MODULE_5__["ReportsFilter"]();
              this.loaddata('00000000', '00000000', 'alldata');
            }
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            this.downloadService.exportAsExcelFile(this.data, 'report_' + this.currentUser.Engineer + 's');
          }
        }]);

        return ReportEngineersComponent;
      }();

      ReportEngineersComponent.??fac = function ReportEngineersComponent_Factory(t) {
        return new (t || ReportEngineersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]));
      };

      ReportEngineersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ReportEngineersComponent,
        selectors: [["app-report-engineers"]],
        viewQuery: function ReportEngineersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"]
        }])],
        decls: 29,
        vars: 3,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-section", "kt-drop-section"], [1, "kt-section__content"], [1, "row"], [1, "col-md-12"], [1, "kt-portlet__body", "customer-listing-datatable"], ["class", "row", 4, "ngIf"], ["class", "panel panel-primary list-panel", "id", "list-panel", 4, "ngIf"], [1, "col-sm-4", "col-md-4", "col-lg-4"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "btnexport"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "row", "filterstrong"], [1, "col-md-2"], [1, "input-group"], ["readonly", "", "placeholder", "yyyy-mm-dd", "name", "service.ReportsFilter.StartDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsFilter.StartDate", "ngModel", "datePickerfromdate", "ngbDatepicker"], ["readonly", "", "placeholder", "yyyy-mm-dd", "name", "service.ReportsFilter.EndDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsFilter.EndDate", "ngModel", "datePickertodate", "ngbDatepicker"], [1, "col-md-1"], ["href", "javascript:;", 1, "btnprimary", 3, "click"], [1, "col-md-2", 2, "right", "0"], ["href", "javascript:;", 1, "btnexportToExcel", 3, "click"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], [2, "width", "2%"], ["class", "ticket-list-view-info", 4, "ngFor", "ngForAsync", "ngForOf"], [1, "ticket-list-view-info"]],
        template: function ReportEngineersComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Reports ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ReportEngineersComponent_div_27_Template, 7, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ReportEngineersComponent_div_28_Template, 41, 8, "div", 20);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Engineer, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReportEngineersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-report-engineers',
            templateUrl: './report-engineers.component.html',
            styles: [],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
              useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
              useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"]
            }]
          }]
        }], function () {
          return [{
            type: src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]
          }, {
            type: src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__["GenicProfileService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "PThb":
    /*!********************************************************************************************************!*\
      !*** ./src/app/application/reports/report-engineer-attendance/report-engineer-attendance.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ReportEngineerAttendanceComponent */

    /***/
    function PThb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportEngineerAttendanceComponent", function () {
        return ReportEngineerAttendanceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/ngb-date-to-string-adapter */
      "x8Rg");
      /* harmony import */


      var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/ngb-time-to-string-adapter */
      "dRK5");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_services_report_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/report.module */
      "JYEN");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/report.service */
      "ppW+");
      /* harmony import */


      var src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/engineer.service */
      "+MZO");
      /* harmony import */


      var src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/downloads.service */
      "iHRC");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["modalpopup"];

      function ReportEngineerAttendanceComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ReportEngineerAttendanceComponent_div_28_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", x_r11.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r11.EngineerName, " ");
        }
      }

      function ReportEngineerAttendanceComponent_div_28_tr_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "IP : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Date : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Address : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "IP : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Date : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Address : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportEngineerAttendanceComponent_div_28_tr_45_Template_a_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var x_r12 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r14.openimg(x_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r13 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r12.EngineerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r12.StartIP, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](13, 9, x_r12.StartDate, "MMM d, y h:mm a", "+0000"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r12.StartAddress, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r12.EndIP, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](26, 13, x_r12.EndDate, "MMM d, y h:mm a", "+0000"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r12.EndAddress, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r12.EngineerAttendanceImage.length, " Images");
        }
      }

      function ReportEngineerAttendanceComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportEngineerAttendanceComponent_div_28_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.exportAsXLSX();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Export to Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportEngineerAttendanceComponent_div_28_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r18.service.ReportsFilter.StartDate = $event;
          })("click", function ReportEngineerAttendanceComponent_div_28_Template_input_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

            return _r5.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportEngineerAttendanceComponent_div_28_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.service.ReportsFilter.EndDate = $event;
          })("click", function ReportEngineerAttendanceComponent_div_28_Template_input_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](18);

            return _r7.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "select", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportEngineerAttendanceComponent_div_28_Template_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.service.ReportsFilter.Engineer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ReportEngineerAttendanceComponent_div_28_option_25_Template, 2, 2, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportEngineerAttendanceComponent_div_28_Template_a_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.refreshEngineerData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "table", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Start info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Stop info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, ReportEngineerAttendanceComponent_div_28_tr_45_Template, 34, 17, "tr", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.currentUser.Engineer, " Attendance Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.StartDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.EndDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.Engineer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ALL ", ctx_r1.currentUser.Engineer, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.engineerservice.Engineerlist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.currentUser.Engineer, " Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.data);
        }
      }

      function ReportEngineerAttendanceComponent_ng_template_29_div_26_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 65);
        }

        if (rf & 2) {
          var x_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", x_r27.Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function ReportEngineerAttendanceComponent_ng_template_29_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ReportEngineerAttendanceComponent_ng_template_29_div_26_img_1_Template, 1, 1, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r27.Status === "Start");
        }
      }

      function ReportEngineerAttendanceComponent_ng_template_29_div_43_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 65);
        }

        if (rf & 2) {
          var x_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", x_r31.Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function ReportEngineerAttendanceComponent_ng_template_29_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ReportEngineerAttendanceComponent_ng_template_29_div_43_img_1_Template, 1, 1, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r31.Status === "Stop");
        }
      }

      function ReportEngineerAttendanceComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportEngineerAttendanceComponent_ng_template_29_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r35.closeimg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ReportEngineerAttendanceComponent_ng_template_29_div_26_Template, 2, 1, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, ReportEngineerAttendanceComponent_ng_template_29_div_43_Template, 2, 1, "div", 62);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.tempImg.EngineerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Start on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](17, 7, ctx_r3.tempImg.StartDate, "h:mm a", "+0000"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r3.tempImg.StartAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.tempImg.EngineerAttendanceImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("stop on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](34, 11, ctx_r3.tempImg.EndDate, "h:mm a", "+0000"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r3.tempImg.EndAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.tempImg.EngineerAttendanceImage);
        }
      }

      var ReportEngineerAttendanceComponent = /*#__PURE__*/function () {
        function ReportEngineerAttendanceComponent(service, engineerservice, downloadService, loginservice, genicprofileservice, router, modal, toastr) {
          var _this11 = this;

          _classCallCheck(this, ReportEngineerAttendanceComponent);

          this.service = service;
          this.engineerservice = engineerservice;
          this.downloadService = downloadService;
          this.loginservice = loginservice;
          this.genicprofileservice = genicprofileservice;
          this.router = router;
          this.modal = modal;
          this.toastr = toastr;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.loginservice.currentUser.subscribe(function (x) {
            return _this11.currentUser = x;
          });
          ;
          this.data = [];
        }

        _createClass(ReportEngineerAttendanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            if (!this.currentUser.Permissions.ReportEngineer) {
              this.router.navigate(['/dashboard']);
            }

            this.genicprofileservice.TicketFilter.IsReady = false;
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
            this.dtOptions = {
              pagingType: 'full_numbers',
              paging: true,
              ordering: false,
              lengthMenu: [5, 10, 25, 50, 75, 100]
            };
            this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this12.engineerservice.Engineerlist = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.service.ReportsFilter = new src_app_services_report_module__WEBPACK_IMPORTED_MODULE_5__["ReportsFilter"]();
            this.service.ReportsFilter.Department = 0;
            this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
            this.service.ReportsFilter.StartDate = this.genicprofileservice.TODAY_DATE_IN_STRING;
            this.service.ReportsFilter.EndDate = this.genicprofileservice.TODAY_DATE_IN_STRING;
          }
        }, {
          key: "loaddata",
          value: function loaddata(sdate, edate) {
            var _this13 = this;

            if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
              this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              })["catch"](function (err) {
                return console.error(err);
              });
            }

            this.service.refrestEngineerAttendanceReports(this.currentUser.Token, sdate, edate, this.service.ReportsFilter.Engineer).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this13.data = response.result;

                  _this13.dtTrigger.next();
                }

                if (response.Message === 'failure') {
                  _this13.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "refreshEngineerData",
          value: function refreshEngineerData() {
            if (this.service.ReportsFilter.StartDate === undefined) {
              this.toastr.warning('Please select From date');
              return false;
            }

            if (this.service.ReportsFilter.EndDate === undefined) {
              this.toastr.warning('Please select to date');
              return false;
            }

            var cursDate = this.service.ReportsFilter.StartDate;
            var cureDate = this.service.ReportsFilter.EndDate;
            var sDate = cursDate.split('T')[0].replace(/-/g, '');
            var eDate = cureDate.split('T')[0].replace(/-/g, '');
            this.loaddata(sDate, eDate);
          }
        }, {
          key: "openimg",
          value: function openimg(x) {
            this.tempImg = new Object();
            this.tempImg = x;
            this.modal.open(this.modalpopup, {
              size: 'xl'
            });
          }
        }, {
          key: "closeimg",
          value: function closeimg() {
            this.modal.dismissAll();
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            this.downloadService.exportAsExcelFile(this.data, 'report_' + this.currentUser.Engineer + 's');
          }
        }]);

        return ReportEngineerAttendanceComponent;
      }();

      ReportEngineerAttendanceComponent.??fac = function ReportEngineerAttendanceComponent_Factory(t) {
        return new (t || ReportEngineerAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_8__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]));
      };

      ReportEngineerAttendanceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ReportEngineerAttendanceComponent,
        selectors: [["app-report-engineer-attendance"]],
        viewQuery: function ReportEngineerAttendanceComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.modalpopup = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"]
        }])],
        decls: 31,
        vars: 3,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-section", "kt-drop-section"], [1, "kt-section__content"], [1, "row"], [1, "col-md-12"], [1, "kt-portlet__body", "customer-listing-datatable"], ["class", "row", 4, "ngIf"], ["class", "panel panel-primary list-panel", "id", "list-panel", 4, "ngIf"], ["modalpopup", ""], [1, "col-sm-4", "col-md-4", "col-lg-4"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "btnexport"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "row", "filterstrong"], [1, "col-md-2"], [1, "input-group"], ["readonly", "", "placeholder", "yyyy-mm-dd", "name", "service.ReportsFilter.StartDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsFilter.StartDate", "ngModel", "datePickerfromdate", "ngbDatepicker"], ["readonly", "", "placeholder", "yyyy-mm-dd", "name", "service.ReportsFilter.EndDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsFilter.EndDate", "ngModel", "datePickertodate", "ngbDatepicker"], [1, "col-md-2", "padd-right-0"], ["name", "service.ReportsFilter.Engineer", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.ReportsFilter.Engineer", "ngModel"], ["value", "00000000-0000-0000-0000-000000000000"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-1"], ["href", "javascript:;", 1, "btnprimary", 3, "click"], [1, "panel-body", 2, "overflow", "auto"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], [2, "width", "2%"], [4, "ngFor", "ngForAsync", "ngForOf"], [3, "value"], ["href", "javascript:;", 3, "click"], [1, "row", "cus-model-header", 2, "margin", "0"], [1, "col-md-9"], [1, "modal-title", 2, "font-size", "2em", "color", "black", "font-weight", "600"], [1, "col-md-3"], [1, "btn-group", 2, "float", "right"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "text-white", 3, "click"], ["aria-hidden", "true"], ["id", "month-2-modal", 1, "modal-body"], [1, "table", "table-bordered", 2, "font-size", "16px"], ["id", "wrapper"], ["id", "innerwrapper"], ["class", "wrapper-img", 4, "ngFor", "ngForAsync", "ngForOf"], [1, "wrapper-img"], [3, "src", 4, "ngIf"], [3, "src"]],
        template: function ReportEngineerAttendanceComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Reports ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ReportEngineerAttendanceComponent_div_27_Template, 7, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ReportEngineerAttendanceComponent_div_28_Template, 46, 10, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ReportEngineerAttendanceComponent_ng_template_29_Template, 44, 15, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Engineer, " Attendance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReportEngineerAttendanceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-report-engineer-attendance',
            templateUrl: './report-engineer-attendance.component.html',
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
              useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
              useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"]
            }]
          }]
        }], function () {
          return [{
            type: src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]
          }, {
            type: src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_8__["EngineerService"]
          }, {
            type: src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__["GenicProfileService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]
          }];
        }, {
          modalpopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalpopup', {
              "static": true
            }]
          }],
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "PeP9":
    /*!********************************************************************************************************!*\
      !*** ./src/app/application/reports/report-engineer-time-sheet/report-engineer-time-sheet.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ReportEngineerTimeSheetComponent */

    /***/
    function PeP9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportEngineerTimeSheetComponent", function () {
        return ReportEngineerTimeSheetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/ngb-date-to-string-adapter */
      "x8Rg");
      /* harmony import */


      var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/ngb-time-to-string-adapter */
      "dRK5");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_services_report_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/report.module */
      "JYEN");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/report.service */
      "ppW+");
      /* harmony import */


      var src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/engineer.service */
      "+MZO");
      /* harmony import */


      var src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/downloads.service */
      "iHRC");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ReportEngineerTimeSheetComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

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

      function ReportEngineerTimeSheetComponent_div_28_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", x_r10.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r10.EngineerName, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "InactiveBackColor2": a0
        };
      };

      function ReportEngineerTimeSheetComponent_div_28_tr_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportEngineerTimeSheetComponent_div_28_tr_58_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

            var x_r11 = ctx.$implicit;
            var i_r12 = ctx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r13.getEngineerWise2Reports(x_r11.EId, i_r12);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, i_r12 === ctx_r8.indx));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r12 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r11.EngineerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r11.TotalTicket, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r11.TotalTime, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r11.TBRegular, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r11.TBOT, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r11.WeekOffPHTime, " ");
        }
      }

      function ReportEngineerTimeSheetComponent_div_28_tfoot_59_thead_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "S No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Time-in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Time-out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Total Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Time Bifurcation (DD.HH:MM:SS)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "(DD.HH:MM:SS)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Regular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "OT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Weekly off/PH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r15.currentUser.Engineer, " Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r15.currentUser.Ticket, " # & Date");
        }
      }

      function ReportEngineerTimeSheetComponent_div_28_tfoot_59_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var f_r18 = ctx.$implicit;
          var ii_r19 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ii_r19 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](f_r18.EngineerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", f_r18.Ticket.TicketId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 12, f_r18.Ticket.OneOffAppointmentDate), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](f_r18.Ticket.CustomerCompanyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](f_r18.Ticket.CustomerAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](16, 14, f_r18.TimeInOut.StartDate, "MMMM d, y, h:mm:ss a", "+0000"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](19, 18, f_r18.TimeInOut.EndDate, "MMMM d, y, h:mm:ss a", "+0000"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](f_r18.TotalTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](f_r18.TBRegular);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](f_r18.TBOT);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](f_r18.WeekOffPHTime);
        }
      }

      function ReportEngineerTimeSheetComponent_div_28_tfoot_59_tfoot_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "record not inserted yet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ReportEngineerTimeSheetComponent_div_28_tfoot_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "td", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "tr", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "table", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ReportEngineerTimeSheetComponent_div_28_tfoot_59_thead_6_Template, 37, 2, "thead", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ReportEngineerTimeSheetComponent_div_28_tfoot_59_tr_8_Template, 28, 22, "tr", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ReportEngineerTimeSheetComponent_div_28_tfoot_59_tfoot_9_Template, 2, 0, "tfoot", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.datae.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r9.datae);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.datae.length === 0);
        }
      }

      function ReportEngineerTimeSheetComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportEngineerTimeSheetComponent_div_28_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.exportAsXLSX();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Export to Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportEngineerTimeSheetComponent_div_28_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.service.ReportsFilter.StartDate = $event;
          })("click", function ReportEngineerTimeSheetComponent_div_28_Template_input_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

            return _r3.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportEngineerTimeSheetComponent_div_28_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.service.ReportsFilter.EndDate = $event;
          })("click", function ReportEngineerTimeSheetComponent_div_28_Template_input_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](18);

            return _r5.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "select", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ReportEngineerTimeSheetComponent_div_28_Template_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r26.service.ReportsFilter.Engineer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ReportEngineerTimeSheetComponent_div_28_option_25_Template, 2, 2, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportEngineerTimeSheetComponent_div_28_Template_a_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.refreshEngineerData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "table", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Total Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Time Bifurcation (DD.HH:MM:SS)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "(DD.HH:MM:SS)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Regular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "OT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Weekly off/PH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, ReportEngineerTimeSheetComponent_div_28_tr_58_Template, 15, 10, "tr", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, ReportEngineerTimeSheetComponent_div_28_tfoot_59_Template, 10, 3, "tfoot", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.currentUser.Engineer, " Time Sheet Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.StartDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.EndDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.service.ReportsFilter.Engineer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ALL ", ctx_r1.currentUser.Engineer, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.engineerservice.Engineerlist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.currentUser.Engineer, " Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total ", ctx_r1.currentUser.Ticket, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.isClick);
        }
      }

      var ReportEngineerTimeSheetComponent = /*#__PURE__*/function () {
        function ReportEngineerTimeSheetComponent(service, engineerservice, downloadService, loginservice, genicprofileservice, router, toastr) {
          var _this14 = this;

          _classCallCheck(this, ReportEngineerTimeSheetComponent);

          this.service = service;
          this.engineerservice = engineerservice;
          this.downloadService = downloadService;
          this.loginservice = loginservice;
          this.genicprofileservice = genicprofileservice;
          this.router = router;
          this.toastr = toastr;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.indx = -1;
          this.isClick = false;
          this.date = new Date();
          this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
          this.firstdate = this.firstDay.getFullYear().toString().padStart(4, '0') + '-' + (this.firstDay.getMonth() + 1).toString().padStart(2, '0') + '-' + this.firstDay.getDate().toString().padStart(2, '0');
          this.lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
          this.lastdate = this.lastDay.getFullYear().toString().padStart(4, '0') + '-' + (this.lastDay.getMonth() + 1).toString().padStart(2, '0') + '-' + this.lastDay.getDate().toString().padStart(2, '0');
          this.loginservice.currentUser.subscribe(function (x) {
            return _this14.currentUser = x;
          });
          ;
          this.data = [];
          this.datae = [];
        }

        _createClass(ReportEngineerTimeSheetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            if (!this.currentUser.Permissions.ReportEngineer) {
              this.router.navigate(['/dashboard']);
            }

            this.genicprofileservice.TicketFilter.IsReady = false;
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
            this.dtOptions = {
              pagingType: 'full_numbers',
              paging: true,
              ordering: false,
              lengthMenu: [5, 10, 25, 50, 75, 100]
            };
            this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this15.engineerservice.Engineerlist = response.result;
                }

                if (response.Message === 'failure') {
                  _this15.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.service.ReportsFilter = new src_app_services_report_module__WEBPACK_IMPORTED_MODULE_5__["ReportsFilter"]();
            this.service.ReportsFilter.Department = 0;
            this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
            this.service.ReportsFilter.StartDate = this.firstdate;
            this.service.ReportsFilter.EndDate = this.lastdate;
          }
        }, {
          key: "loaddata",
          value: function loaddata(sdate, edate) {
            var _this16 = this;

            if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
              this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              })["catch"](function (err) {
                return console.error(err);
              });
            }

            this.service.refrestEngineerwiseReports(this.currentUser.Token, sdate, edate, this.service.ReportsFilter.Engineer).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this16.data = response.result;

                  _this16.dtTrigger.next();
                }

                if (response.Message === 'failure') {
                  _this16.toastr.warning('warning', response.MessageDescription);
                }
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
          key: "refreshEngineerData",
          value: function refreshEngineerData() {
            this.isClick = false;
            this.indx = -1;

            if (this.service.ReportsFilter.StartDate === undefined) {
              this.toastr.warning('Please select From date');
              return false;
            }

            if (this.service.ReportsFilter.EndDate === undefined) {
              this.toastr.warning('Please select to date');
              return false;
            }

            var cursDate = this.service.ReportsFilter.StartDate;
            var cureDate = this.service.ReportsFilter.EndDate;
            var sDate = cursDate.split('T')[0].replace(/-/g, '');
            var eDate = cureDate.split('T')[0].replace(/-/g, '');
            this.loaddata(sDate, eDate);
          }
        }, {
          key: "getEngineerWise2Reports",
          value: function getEngineerWise2Reports(EId, i) {
            var _this17 = this;

            if (this.service.ReportsFilter.StartDate === undefined) {
              this.toastr.warning('Please select From date');
              return false;
            }

            if (this.service.ReportsFilter.EndDate === undefined) {
              this.toastr.warning('Please select to date');
              return false;
            }

            this.indx = i;
            this.isClick = true;
            var cursDate = this.service.ReportsFilter.StartDate;
            var cureDate = this.service.ReportsFilter.EndDate;
            var sDate = cursDate.split('T')[0].replace(/-/g, '');
            var eDate = cureDate.split('T')[0].replace(/-/g, '');
            this.service.refrestEngineerwise2Reports(this.currentUser.Token, sDate, eDate, EId).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this17.datae = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            this.downloadService.exportAsExcelFile(this.data, 'report_' + this.currentUser.Engineer + 's');
          }
        }]);

        return ReportEngineerTimeSheetComponent;
      }();

      ReportEngineerTimeSheetComponent.??fac = function ReportEngineerTimeSheetComponent_Factory(t) {
        return new (t || ReportEngineerTimeSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_8__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]));
      };

      ReportEngineerTimeSheetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ReportEngineerTimeSheetComponent,
        selectors: [["app-report-engineer-time-sheet"]],
        viewQuery: function ReportEngineerTimeSheetComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"]
        }])],
        decls: 29,
        vars: 3,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-section", "kt-drop-section"], [1, "kt-section__content"], [1, "row"], [1, "col-md-12"], [1, "kt-portlet__body", "customer-listing-datatable"], ["class", "row", 4, "ngIf"], ["class", "panel panel-primary list-panel", "id", "list-panel", 4, "ngIf"], [1, "col-sm-4", "col-md-4", "col-lg-4"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "btnexport"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "row", "filterstrong"], [1, "col-md-2"], [1, "input-group"], ["readonly", "", "placeholder", "yyyy-mm-dd", "name", "service.ReportsFilter.StartDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsFilter.StartDate", "ngModel", "datePickerfromdate", "ngbDatepicker"], ["readonly", "", "placeholder", "yyyy-mm-dd", "name", "service.ReportsFilter.EndDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["service.ReportsFilter.EndDate", "ngModel", "datePickertodate", "ngbDatepicker"], [1, "col-md-2", "padd-right-0"], ["name", "service.ReportsFilter.Engineer", 1, "form-control", 3, "ngModel", "ngModelChange"], ["service.ReportsFilter.Engineer", "ngModel"], ["value", "00000000-0000-0000-0000-000000000000"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-1"], ["href", "javascript:;", 1, "btnprimary", 3, "click"], [1, "panel-body", 2, "overflow", "auto"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], [2, "width", "2%"], ["colspan", "3", 2, "text-align", "center"], ["style", "cursor: pointer;", "class", "ticket-list-view-info", 3, "ngClass", "click", 4, "ngFor", "ngForAsync", "ngForOf"], [4, "ngIf"], [3, "value"], [1, "ticket-list-view-info", 2, "cursor", "pointer", 3, "ngClass", "click"], ["colspan", "7"], [2, "background-color", "#e1bf3ab8"], [1, "table", "table-striped", "properies-table-info", "ng-star-inserted"], [4, "ngFor", "ngForOf"]],
        template: function ReportEngineerTimeSheetComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Reports ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ReportEngineerTimeSheetComponent_div_27_Template, 7, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ReportEngineerTimeSheetComponent_div_28_Template, 60, 12, "div", 20);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Engineer, " Time Sheet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReportEngineerTimeSheetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-report-engineer-time-sheet',
            templateUrl: './report-engineer-time-sheet.component.html',
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
              useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
              useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"]
            }]
          }]
        }], function () {
          return [{
            type: src_app_services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]
          }, {
            type: src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_8__["EngineerService"]
          }, {
            type: src_app_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_11__["GenicProfileService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
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
    "tqzf":
    /*!**********************************************************!*\
      !*** ./src/app/application/reports/reports.component.ts ***!
      \**********************************************************/

    /*! exports provided: ReportsComponent */

    /***/
    function tqzf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
        return ReportsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ReportsComponent = /*#__PURE__*/function () {
        function ReportsComponent() {
          _classCallCheck(this, ReportsComponent);
        }

        _createClass(ReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReportsComponent;
      }();

      ReportsComponent.??fac = function ReportsComponent_Factory(t) {
        return new (t || ReportsComponent)();
      };

      ReportsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ReportsComponent,
        selectors: [["ng-component"]],
        decls: 1,
        vars: 0,
        template: function ReportsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReportsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: '<router-outlet></router-outlet>'
          }]
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
          var _this19;

          _classCallCheck(this, NgbDateToStringAdapter);

          _this19 = _super2.apply(this, arguments);
          _this19.hour = 0;
          _this19.minute = 0;
          _this19.second = 0;
          return _this19;
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

    },

    /***/
    "yvTi":
    /*!*******************************************************!*\
      !*** ./src/app/application/reports/reports.module.ts ***!
      \*******************************************************/

    /*! exports provided: ReportsModule */

    /***/
    function yvTi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsModule", function () {
        return ReportsModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./reports.component */
      "tqzf");
      /* harmony import */


      var _report_engineers_report_engineers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./report-engineers/report-engineers.component */
      "N+N3");
      /* harmony import */


      var _tickets_report_ticket_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./tickets/report-ticket.component */
      "Bte7");
      /* harmony import */


      var _visits_visits_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./visits/visits.component */
      "5z/u");
      /* harmony import */


      var src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module */
      "7kmZ");
      /* harmony import */


      var _report_engineer_time_sheet_report_engineer_time_sheet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./report-engineer-time-sheet/report-engineer-time-sheet.component */
      "PeP9");
      /* harmony import */


      var _report_engineer_attendance_report_engineer_attendance_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./report-engineer-attendance/report-engineer-attendance.component */
      "PThb");

      var routes = [{
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"],
        children: [{
          path: 'report-engineer-time-sheet',
          component: _report_engineer_time_sheet_report_engineer_time_sheet_component__WEBPACK_IMPORTED_MODULE_17__["ReportEngineerTimeSheetComponent"]
        }, {
          path: 'report-engineer-attendance',
          component: _report_engineer_attendance_report_engineer_attendance_component__WEBPACK_IMPORTED_MODULE_18__["ReportEngineerAttendanceComponent"]
        }, {
          path: 'report-engineers',
          component: _report_engineers_report_engineers_component__WEBPACK_IMPORTED_MODULE_13__["ReportEngineersComponent"]
        }, {
          path: 'report-ticket',
          component: _tickets_report_ticket_component__WEBPACK_IMPORTED_MODULE_14__["ReportTicketComponent"]
        }, {
          path: 'visits',
          component: _visits_visits_component__WEBPACK_IMPORTED_MODULE_15__["VisitsComponent"]
        }]
      }];

      var ReportsModule = function ReportsModule() {
        _classCallCheck(this, ReportsModule);
      };

      ReportsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ReportsModule
      });
      ReportsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ReportsModule_Factory(t) {
          return new (t || ReportsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_16__["TicketStatusComponentModule"]], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ReportsModule, {
          declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"], _report_engineer_time_sheet_report_engineer_time_sheet_component__WEBPACK_IMPORTED_MODULE_17__["ReportEngineerTimeSheetComponent"], _report_engineer_attendance_report_engineer_attendance_component__WEBPACK_IMPORTED_MODULE_18__["ReportEngineerAttendanceComponent"], _report_engineers_report_engineers_component__WEBPACK_IMPORTED_MODULE_13__["ReportEngineersComponent"], _tickets_report_ticket_component__WEBPACK_IMPORTED_MODULE_14__["ReportTicketComponent"], _visits_visits_component__WEBPACK_IMPORTED_MODULE_15__["VisitsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_16__["TicketStatusComponentModule"]],
          exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReportsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"], _report_engineer_time_sheet_report_engineer_time_sheet_component__WEBPACK_IMPORTED_MODULE_17__["ReportEngineerTimeSheetComponent"], _report_engineer_attendance_report_engineer_attendance_component__WEBPACK_IMPORTED_MODULE_18__["ReportEngineerAttendanceComponent"], _report_engineers_report_engineers_component__WEBPACK_IMPORTED_MODULE_13__["ReportEngineersComponent"], _tickets_report_ticket_component__WEBPACK_IMPORTED_MODULE_14__["ReportTicketComponent"], _visits_visits_component__WEBPACK_IMPORTED_MODULE_15__["VisitsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_16__["TicketStatusComponentModule"]],
            exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=application-reports-reports-module-es5.js.map