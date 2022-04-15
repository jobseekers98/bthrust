(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-calendar-calendar-module~application-ticket-reschedule-popup-ticket-reschedule-p~a3e4bb1e"], {
    /***/
    "uOhu":
    /*!******************************************************************************************!*\
      !*** ./src/app/application/ticket-reschedule-popup/ticket-reschedule-popup.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: TicketReschedulePopupComponent */

    /***/
    function uOhu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketReschedulePopupComponent", function () {
        return TicketReschedulePopupComponent;
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/ticket.service */
      "KPvW");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/engineer.service */
      "+MZO");
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/notification.service */
      "OC8m");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function TicketReschedulePopupComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (One-Off ", ctx_r0.currentUser.Ticket, ")");
        }
      }

      function TicketReschedulePopupComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (Recurring ", ctx_r1.currentUser.Ticket, ")");
        }
      }

      function TicketReschedulePopupComponent_div_22_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r18 = ctx.$implicit;
          var currentMonth_r19 = ctx.currentMonth;
          var selected_r20 = ctx.selected;
          var disabled_r21 = ctx.disabled;
          var focused_r22 = ctx.focused;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r22)("bg-primary", selected_r20)("hidden", date_r18.month !== currentMonth_r19)("isDisabledDate", disabled_r21)("isHoliday", ctx_r6.isDisabledCss(date_r18));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r18.day, " ");
        }
      }

      function TicketReschedulePopupComponent_div_22_div_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketReschedulePopupComponent_div_22_div_42_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.OnGetAvailableEngineers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Get available ", ctx_r8.currentUser.Engineer, "s ");
        }
      }

      function TicketReschedulePopupComponent_div_22_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketReschedulePopupComponent_div_22_div_60_table_1_tr_6_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Supervisor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketReschedulePopupComponent_div_22_div_60_table_1_tr_6_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Foreman");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketReschedulePopupComponent_div_22_div_60_table_1_tr_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketReschedulePopupComponent_div_22_div_60_table_1_tr_6_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var i_r29 = ctx.index;
            var x_r28 = ctx.$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r32.AddEngineersToTicket(i_r29, true, x_r28.Id, x_r28.EngineerName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketReschedulePopupComponent_div_22_div_60_table_1_tr_6_span_6_Template, 2, 0, "span", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketReschedulePopupComponent_div_22_div_60_table_1_tr_6_span_7_Template, 2, 0, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", x_r28.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r28.EngineerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r28.Type === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r28.Type === 2);
        }
      }

      function TicketReschedulePopupComponent_div_22_div_60_table_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketReschedulePopupComponent_div_22_div_60_table_1_tr_6_Template, 8, 4, "tr", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Available ", ctx_r25.currentUser.Engineer, "s List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.engineerservice.Engineerlist);
        }
      }

      function TicketReschedulePopupComponent_div_22_div_60_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r26.currentUser.Engineer, " not available at this time. ");
        }
      }

      function TicketReschedulePopupComponent_div_22_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketReschedulePopupComponent_div_22_div_60_table_1_Template, 7, 2, "table", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketReschedulePopupComponent_div_22_div_60_div_2_Template, 2, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.engineerservice.Engineerlist.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.engineerservice.Engineerlist.length === 0);
        }
      }

      function TicketReschedulePopupComponent_div_22_div_70_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r35.EngineerName, " ");
        }
      }

      function TicketReschedulePopupComponent_div_22_div_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketReschedulePopupComponent_div_22_div_70_tr_3_Template, 3, 1, "tr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.oldTicketTeam);
        }
      }

      function TicketReschedulePopupComponent_div_22_tr_72_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketReschedulePopupComponent_div_22_tr_72_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var i_r38 = ctx.index;
            var x_r37 = ctx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r39.AddEngineersToTicket(i_r38, false, x_r37.EngineerId, x_r37.EngineerName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r37.EngineerName, " ");
        }
      }

      function TicketReschedulePopupComponent_div_22_div_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.currentUser.Engineer, "s not assigned yet!");
        }
      }

      function TicketReschedulePopupComponent_div_22_div_74_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TicketReschedulePopupComponent_div_22_div_74_div_1_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r42.radioData = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TicketReschedulePopupComponent_div_22_div_74_div_1_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r44.radioData = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.radioData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" update only ", ctx_r41.service.formData.TicketId, " ", ctx_r41.currentUser.Ticket, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.radioData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" update all upcoming ", ctx_r41.currentUser.Ticket, " link to ", ctx_r41.service.formData.TicketId, " ", ctx_r41.currentUser.Ticket, " ");
        }
      }

      function TicketReschedulePopupComponent_div_22_div_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketReschedulePopupComponent_div_22_div_74_div_1_Template, 11, 7, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.currentUser.Type !== "Engineer");
        }
      }

      function TicketReschedulePopupComponent_div_22_i_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 70);
        }
      }

      function TicketReschedulePopupComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Appointment Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Red Highlighted date is National Holiday, to make it Working Day please go to Settings - Business Hours - Holiday - Enable Working");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TicketReschedulePopupComponent_div_22_ng_template_12_Template, 2, 11, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngb-datepicker", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function TicketReschedulePopupComponent_div_22_Template_ngb_datepicker_select_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.onAppointmentDateTimeSelect();
          })("ngModelChange", function TicketReschedulePopupComponent_div_22_Template_ngb_datepicker_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.service.formData.AppointmentStart = $event;
          })("navigate", function TicketReschedulePopupComponent_div_22_Template_ngb_datepicker_navigate_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.date = $event.next;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Start Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngb-timepicker", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketReschedulePopupComponent_div_22_Template_ngb_timepicker_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49.onAppointmentTimeSelect();
          })("ngModelChange", function TicketReschedulePopupComponent_div_22_Template_ngb_timepicker_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.service.formData.AppointmentStart = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "End Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngb-timepicker", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketReschedulePopupComponent_div_22_Template_ngb_timepicker_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.onAppointmentTimeSelect();
          })("ngModelChange", function TicketReschedulePopupComponent_div_22_Template_ngb_timepicker_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r52.service.formData.AppointmentEnd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TicketReschedulePopupComponent_div_22_div_42_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TicketReschedulePopupComponent_div_22_div_43_Template, 3, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TicketReschedulePopupComponent_div_22_Template_input_ngModelChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.service.formData.Rescheduled = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Mark as Rescheduled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TicketReschedulePopupComponent_div_22_Template_input_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r54.service.formData.Reallocate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Mark as Reallocated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, TicketReschedulePopupComponent_div_22_div_60_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "table", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketReschedulePopupComponent_div_22_Template_a_click_68_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r55.showcalendar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, TicketReschedulePopupComponent_div_22_div_70_Template, 4, 1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, TicketReschedulePopupComponent_div_22_tr_72_Template, 6, 1, "tr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, TicketReschedulePopupComponent_div_22_div_73_Template, 2, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, TicketReschedulePopupComponent_div_22_div_74_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, TicketReschedulePopupComponent_div_22_i_79_Template, 1, 0, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minDate", ctx_r3.minDate)("maxDate", ctx_r3.maxDate)("markDisabled", ctx_r3.isDisabled)("dayTemplate", _r5)("ngModel", ctx_r3.service.formData.AppointmentStart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meridian", ctx_r3.meridian)("readonlyInputs", true)("ngModel", ctx_r3.service.formData.AppointmentStart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meridian", ctx_r3.meridian)("readonlyInputs", true)("ngModel", ctx_r3.service.formData.AppointmentEnd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](33, 26, ctx_r3.service.formData.AppointmentStart, "EEEE, MMMM d, y", "+0000"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](37, 30, ctx_r3.service.formData.AppointmentStart, "HH:mm" + " to ", "+0000"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](40, 34, ctx_r3.service.formData.AppointmentEnd, "HH:mm", "+0000"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.loader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.service.formData.Rescheduled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.service.formData.Reallocate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.ShowEngineerList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Assigned ", ctx_r3.currentUser.Engineer, "s List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "Assigned ", ctx_r3.currentUser.Engineer, "s List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.Iscalendarshow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.service.formData == null ? null : ctx_r3.service.formData.TicketTeams);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.service.formData == null ? null : ctx_r3.service.formData.TicketTeams.length) === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.service.formData.TicketType === "Recurring Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.spinnerShow);
        }
      }

      function TicketReschedulePopupComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r4.currentUser.Ticket, " Can't reschedule when ", ctx_r4.currentUser.Ticket, " Status is ", ctx_r4.service.formData.Status, " ");
        }
      }

      var TicketReschedulePopupComponent = /*#__PURE__*/function () {
        function TicketReschedulePopupComponent(dialogRef, service, toastr, router, genicProfile, loginservice, engineerservice, notifyService) {
          var _this = this;

          _classCallCheck(this, TicketReschedulePopupComponent);

          this.dialogRef = dialogRef;
          this.service = service;
          this.toastr = toastr;
          this.router = router;
          this.genicProfile = genicProfile;
          this.loginservice = loginservice;
          this.engineerservice = engineerservice;
          this.notifyService = notifyService;
          this.refresh = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.savechanges = false;
          this.currentUTCDate = new Date(); // Notification Param

          this.oldScheduleDate = Date();
          this.oldScheduleTime = ''; // Notification Param

          this.meridian = true;
          this.localdate = new Date(Date.UTC(this.currentUTCDate.getFullYear(), this.currentUTCDate.getMonth(), this.currentUTCDate.getDate(), 0, 0, 0));
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
          this.oldTicketTeam = [];
          this.disabledDates = [];

          this.isDisabled = function (date, current) {
            return _this.disabledDates.find(function (x) {
              return _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(x).equals(date);
            }) ? true : false;
          };

          this.isDisabledCss = function (date) {
            return _this.disabledDates.find(function (x) {
              return _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(x).equals(date);
            }) ? true : false;
          };

          this.loginservice.currentUser.subscribe(function (x) {
            return _this.currentUser = x;
          });
          this.IsEditable = true;
        }

        _createClass(TicketReschedulePopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.radioData = 'O';
            this.loader = false;
            this.ShowEngineerList = false;
            this.spinnerShow = false; // Notification Param

            this.oldScheduleDate = this.service.formData.OneOffAppointmentDate;
            this.oldScheduleTime = this.service.formData.OneOffStartTime; // Notification Param

            this.service.getTicketById(this.currentUser.Token, this.service.formData.Id).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this2.service.formData = response.result;
                  _this2.oldTicketTeam = _this2.service.formData.TicketTeams;
                  _this2.LastAppointmentDateStart = _this2.service.formData.AppointmentStart;
                  _this2.LastAppointmentDateEnd = _this2.service.formData.AppointmentEnd;
                }

                if (response.Message === 'failure') {
                  _this2.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;
                _this2.engineerservice.Engineerlist = response.result;
              }
            }, function (error) {
              return console.log(error);
            });
            this.refrestTicketTeamlist();
            this.BindEngineerList(); // Disabled Dates

            this.disabledSelectDate();
            setTimeout(function () {
              if (_this2.currentUser.Type === 'Engineer') {
                if (_this2.engineerservice.formData.CreateForAllDate === 'SameDate') {
                  _this2.maxDate = {
                    year: Number(_this2.currentUTCDate.getFullYear()),
                    month: Number(_this2.currentUTCDate.getMonth() + 1),
                    day: Number(_this2.currentUTCDate.getDate())
                  };
                }
              }
            }, 500);
            setTimeout(function () {
              switch (_this2.service.formData.Status) {
                case 'UPCOMING':
                case 'OVERDUE':
                case 'HOLD':
                  _this2.IsEditable = true;
                  break;

                default:
                  _this2.IsEditable = false;
                  break;
              }
            }, 1000);
          }
        }, {
          key: "refrestTicketTeamlist",
          value: function refrestTicketTeamlist() {
            var _this3 = this;

            this.service.refrestTicketTeamlist(this.service.formData.Id, this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this3.service.TicketTeamList = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            this.spinnerShow = true;

            if (this.service.formData.AppointmentStart !== null && this.service.formData.AppointmentEnd !== null) {
              if (new Date(this.service.formData.AppointmentStart) > new Date(this.service.formData.AppointmentEnd)) {
                this.toastr.warning('warning', 'Start Time is lessthen end time');
                this.spinnerShow = false;
                return false;
              }
            }

            this.service.formData.OneOffAppointmentDate = this.service.formData.AppointmentStart;
            var sTime = new Date(this.service.formData.AppointmentStart);
            var eTime = new Date(this.service.formData.AppointmentEnd);
            this.service.formData.OneOffStartTime = sTime.getUTCHours().toString().padStart(2, '0') + ':' + sTime.getUTCMinutes().toString().padStart(2, '0') + ':' + sTime.getUTCSeconds().toString().padStart(2, '0') + '.' + sTime.getUTCMilliseconds().toString().padStart(3, '0');
            this.service.formData.OneOffEndTime = eTime.getUTCHours().toString().padStart(2, '0') + ':' + eTime.getUTCMinutes().toString().padStart(2, '0') + ':' + eTime.getUTCSeconds().toString().padStart(2, '0') + '.' + eTime.getUTCMilliseconds().toString().padStart(3, '0');

            if (this.radioData === 'R') {
              this.service.AssignedEngineerForAllTickets(this.currentUser.Token).then(function (res) {
                if (res.status === 202) {
                  _this4.toastr.success('Selected Engineers is assigned to all ' + _this4.currentUser.Ticket + 's');

                  _this4.SendReScheduleTicketEmailNotification(_this4.service.formData.Id);
                }
              });
            } else {
              this.service.RescheduledTicket(this.currentUser.Token).subscribe(function (res) {
                if (res) {
                  var response = res;

                  if (response.Message === 'success') {
                    _this4.SendReScheduleTicketEmailNotification(_this4.service.formData.Id);
                  }

                  if (response.Message === 'failure') {
                    _this4.toastr.warning('warning', response.MessageDescription);
                  }
                }
              }, function (error) {
                return console.log(error);
              });
            }

            setTimeout(function () {
              var s = _this4.savechanges;

              _this4.dialogRef.close({
                s: s
              });

              _this4.spinnerShow = false;

              _this4.toastr.success('Update successfully');
            }, 1000);
          } // Send ReSchedule notification

        }, {
          key: "SendReScheduleTicketEmailNotification",
          value: function SendReScheduleTicketEmailNotification(TicketId) {
            this.notifyService.ReScheduleTicketEmailNotification(this.oldTicketTeam, TicketId, this.currentUser.Id, this.oldScheduleDate, this.oldScheduleTime).subscribe(function (resp) {}, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "AddEngineersToTicket",
          value: function AddEngineersToTicket(index, checked, engineerid, engineername) {
            if (this.service.formData.TicketId === undefined || this.service.formData.TicketId === '') {
              this.router.navigate(['/tickets/ticket-create']);
              return false;
            }

            if (checked) {
              this.service.formData.TicketTeams.push({
                Id: 0,
                TicketId: this.service.formData.Id,
                EngineerId: engineerid,
                EngineerName: engineername,
                EngineerLogo: null
              });
            } else {
              this.service.formData.TicketTeams.splice(index, 1);
              this.engineerservice.Engineerlist.push({
                Id: engineerid,
                EngineerName: engineername
              });
            }

            this.service.formData.Reallocate = true;
            this.BindEngineerList();
          }
        }, {
          key: "onAppointmentDateTimeSelect",
          value: function onAppointmentDateTimeSelect() {
            this.ShowEngineerList = false;
            this.service.formData.Rescheduled = true;
            this.service.formData.AppointmentEnd = this.service.formData.AppointmentStart;
            this.service.formData.AppointmentStart = this.service.formData.AppointmentStart.split('T')[0] + 'T10:00:00Z';
            this.service.formData.AppointmentEnd = this.service.formData.AppointmentStart.split('T')[0] + 'T11:00:00Z';
          }
        }, {
          key: "onAppointmentTimeSelect",
          value: function onAppointmentTimeSelect() {
            this.ShowEngineerList = false;
            this.service.formData.Rescheduled = true;
          }
        }, {
          key: "OnGetAvailableEngineers",
          value: function OnGetAvailableEngineers() {
            var _this5 = this;

            this.loader = true;

            if (new Date(this.service.formData.AppointmentStart) >= new Date(this.service.formData.AppointmentEnd)) {
              this.toastr.warning('warning', 'Start Time is lessthen end time');
              this.loader = false;
              return false;
            }

            if (this.service.formData.AppointmentStart === undefined || this.service.formData.AppointmentStart === null || this.service.formData.AppointmentEnd === undefined || this.service.formData.AppointmentEnd === null) {
              this.toastr.warning('Warning', 'Please select appointment date & time!');
              this.loader = false;
              return false;
            }

            this.ShowEngineerList = true;
            var stime = this.service.formData.AppointmentStart.replace('-', '').replace('-', '');
            stime = stime.replace(':', '').replace(':', '').replace('T', '').replace('Z', '');
            var etime = this.service.formData.AppointmentEnd.replace('-', '').replace('-', '');
            etime = etime.replace(':', '').replace(':', '').replace('T', '').replace('Z', '');
            this.engineerservice.releseTemporaryEngineerFromTicket(this.service.formData.Id, this.currentUser.Token, 'relese').subscribe(function (res) {
              _this5.engineerservice.refrestUnallocatedTimeEngineerList(stime, etime, _this5.currentUser.Token);

              _this5.loader = false;
            }, function (error) {
              return console.log(error);
            });
            this.service.formData.TicketTeams = [];
          }
        }, {
          key: "disabledSelectDate",
          value: function disabledSelectDate() {
            var _this6 = this;

            this.genicProfile.DisabledDateList(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var obj;
                obj = res;
                obj.forEach(function (element) {
                  _this6.disabledDates.push({
                    year: element.year,
                    month: element.month,
                    day: element.day
                  });
                });

                _this6.isDisabled = function (date, current) {
                  return _this6.disabledDates.find(function (x) {
                    return _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(x).equals(date);
                  }) ? true : false;
                };
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "showcalendar",
          value: function showcalendar() {
            if (this.Iscalendarshow) {
              this.Iscalendarshow = false;
            } else {
              this.Iscalendarshow = true;
            }
          }
        }, {
          key: "BindEngineerList",
          value: function BindEngineerList() {
            var _this7 = this;

            setTimeout(function () {
              var demoClasses = null;
              demoClasses = document.querySelectorAll('.engineer-list-class');
              demoClasses.forEach(function (element) {
                _this7.service.formData.TicketTeams.forEach(function (el) {
                  if (element.id === el.EngineerId) {
                    element.innerHTML = '';
                  }
                });
              });

              _this7.refresh.next();
            }, 100);
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return TicketReschedulePopupComponent;
      }();

      TicketReschedulePopupComponent.ɵfac = function TicketReschedulePopupComponent_Factory(t) {
        return new (t || TicketReschedulePopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_9__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_11__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]));
      };

      TicketReschedulePopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TicketReschedulePopupComponent,
        selectors: [["app-ticket-reschedule-popup"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_2__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_3__["NgbTimeToStringAdapter"]
        }])],
        decls: 24,
        vars: 23,
        consts: [[1, "dispaly-4"], ["mat-dialog-close", "", 1, "btn", "btn-outline-danger", "pull-right", 3, "click"], [4, "ngIf"], ["autocomplete", "off", 3, "submit"], ["form", "ngForm"], [1, "form-row"], [1, "form-group", "col-md-12"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], [1, "form-group", "row"], [1, "col-md-4"], [1, "text-danger"], [1, "btooltip"], [1, "fa", "fa-question-circle", "text-info", 2, "cursor", "help"], [1, "btooltiptext"], [1, "input-group"], ["customDay", ""], ["name", "AppointmentStart", 3, "minDate", "maxDate", "markDisabled", "dayTemplate", "ngModel", "select", "ngModelChange", "navigate"], ["AppointmentStart", "ngModel"], [1, "col-md-8"], [1, "col-md-6", "padd-right-0"], ["name", "AppointmentStart", 3, "meridian", "readonlyInputs", "ngModel", "click", "ngModelChange"], [1, "col-md-6", "padd-left-0"], ["name", "AppointmentEnd", 3, "meridian", "readonlyInputs", "ngModel", "click", "ngModelChange"], [1, "col-md-12", "text-center"], [1, "row", 2, "display", "none"], [1, "col-md-6"], [1, "padd-top-10"], [1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--brand"], ["type", "checkbox", "name", "Rescheduled", 3, "ngModel", "ngModelChange"], ["Rescheduled", "ngModel"], ["type", "checkbox", "name", "Reallocate", 3, "ngModel", "ngModelChange"], ["Reallocate", "ngModel"], [1, "row"], [1, "table", "table-striped", "properies-table-info", "ng-star-inserted", "table-bordered", "table-hover", "table-checkable", "tableBodyScroll", "ng-star-inserted"], [2, "text-align", "right"], ["href", "javascript:;", 1, "btn", "btn-secondary", "calendar", 3, "title", "click"], [1, "fa", "fa-users"], ["style", "position: absolute; z-index: 99999; background-color: white;right: 0px;", 4, "ngIf"], [4, "ngFor", "ngForAsync", "ngForOf"], ["class", "alert alert-warning", 4, "ngIf"], [1, "col-md-12", "text-right"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "la la-spinner fa-spin", 4, "ngIf"], [1, "custom-day"], ["href", "javascript:;", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "progress", 2, "height", "40px"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"], ["class", "table table-striped properies-table-info ng-star-inserted table-bordered table-hover table-checkable tableBodyScroll ng-star-inserted", 4, "ngIf"], ["colspan", "2"], ["class", "engineer-list-class", 3, "id", 4, "ngFor", "ngForAsync", "ngForOf"], [1, "engineer-list-class", 3, "id"], ["width", "10%"], ["href", "javascript:;", 3, "click"], [1, "fa", "fa-plus", "text-success"], ["width", "90%"], ["class", "kt-badge kt-badge--success kt-badge--inline kt-badge--pill", 4, "ngIf"], ["class", "kt-badge kt-badge--warning kt-badge--inline kt-badge--pill", 4, "ngIf"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "kt-badge--pill"], [1, "kt-badge", "kt-badge--warning", "kt-badge--inline", "kt-badge--pill"], [1, "alert", "alert-warning"], [2, "position", "absolute", "z-index", "99999", "background-color", "white", "right", "0px"], [1, "table", "table-striped", "properies-table-info", 2, "width", "210px"], [1, "fa", "fa-minus", "text-danger"], ["class", "row", 4, "ngIf"], [1, "container"], [1, "kt-radio-list", "text-color-red"], [1, "kt-radio", "kt-radio--bold", "kt-radio--brand"], ["type", "radio", "value", "O", "name", "radioData", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["type", "radio", "value", "R", "name", "radioData", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], [1, "la", "la-spinner", "fa-spin"]],
        template: function TicketReschedulePopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reschedule & Reallocate\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketReschedulePopupComponent_Template_button_click_2_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketReschedulePopupComponent_span_6_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketReschedulePopupComponent_span_7_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TicketReschedulePopupComponent_Template_form_submit_18_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TicketReschedulePopupComponent_div_22_Template, 80, 38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TicketReschedulePopupComponent_div_23_Template, 3, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.currentUser.Ticket, " # ", ctx.service.formData.TicketId, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.TicketType === "One-Off Ticket");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.TicketType === "Recurring Ticket");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 11, ctx.LastAppointmentDateStart, "EEEE, MMMM d, y", "+0000"), "\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 15, ctx.LastAppointmentDateStart, "HH:mm" + " to ", "+0000"), "\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 19, ctx.LastAppointmentDateEnd, "HH:mm", "+0000"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.CustomerCompanyName, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.CustomerAddress, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsEditable);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
        styles: [".custom-day[_ngcontent-%COMP%] { text-align: center; padding: 0.185rem 0.25rem; border-radius: 0.25rem; display: inline-block; width: 2rem; }\n  .custom-day[_ngcontent-%COMP%]:hover, .custom-day.focused[_ngcontent-%COMP%] { background-color: #e6e6e6; color: #fff; }\n  .isHoliday[_ngcontent-%COMP%] { background-color: #eae6e6 !important;color: red !important; cursor: alias; }\n  .hidden[_ngcontent-%COMP%] { display: none; }\n  .isDisabledDate[_ngcontent-%COMP%] {color: #eae7e7;}", ".tableBodyScroll[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n    max-height: 200px;\n    overflow-y: scroll;\n  }\n  \n  .tableBodyScroll[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketReschedulePopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ticket-reschedule-popup',
            templateUrl: './ticket-reschedule-popup.component.html',
            styles: [".custom-day { text-align: center; padding: 0.185rem 0.25rem; border-radius: 0.25rem; display: inline-block; width: 2rem; }\n  .custom-day:hover, .custom-day.focused { background-color: #e6e6e6; color: #fff; }\n  .isHoliday { background-color: #eae6e6 !important;color: red !important; cursor: alias; }\n  .hidden { display: none; }\n  .isDisabledDate {color: #eae7e7;}"],
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
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
          }, {
            type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_9__["GenicProfileService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
          }, {
            type: src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_11__["EngineerService"]
          }, {
            type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~application-calendar-calendar-module~application-ticket-reschedule-popup-ticket-reschedule-p~a3e4bb1e-es5.js.map