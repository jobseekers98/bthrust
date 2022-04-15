(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-customer-customer-module~application-customers-customers-module~application-dash~1bb82fc1"], {
    /***/
    "3jFn":
    /*!**************************************************************************************!*\
      !*** ./src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: TicketDateTimeFormatModule */

    /***/
    function jFn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketDateTimeFormatModule", function () {
        return TicketDateTimeFormatModule;
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


      var _TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./TicketDateTimeFormat.component */
      "myuM");

      var TicketDateTimeFormatModule = function TicketDateTimeFormatModule() {
        _classCallCheck(this, TicketDateTimeFormatModule);
      };

      TicketDateTimeFormatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TicketDateTimeFormatModule
      });
      TicketDateTimeFormatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TicketDateTimeFormatModule_Factory(t) {
          return new (t || TicketDateTimeFormatModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketDateTimeFormatModule, {
          declarations: [_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_3__["TicketDateTimeFormatComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_3__["TicketDateTimeFormatComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketDateTimeFormatModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_3__["TicketDateTimeFormatComponent"]],
            exports: [_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_3__["TicketDateTimeFormatComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "5ngV":
    /*!*************************************************************************!*\
      !*** ./src/app/generic-utils/Ticket-Team-List/TicketTeamList.module.ts ***!
      \*************************************************************************/

    /*! exports provided: TicketTeamListModule */

    /***/
    function ngV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketTeamListModule", function () {
        return TicketTeamListModule;
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


      var _TicketTeamList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./TicketTeamList.component */
      "U6ah");

      var TicketTeamListModule = function TicketTeamListModule() {
        _classCallCheck(this, TicketTeamListModule);
      };

      TicketTeamListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TicketTeamListModule
      });
      TicketTeamListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TicketTeamListModule_Factory(t) {
          return new (t || TicketTeamListModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketTeamListModule, {
          declarations: [_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_3__["TicketTeamListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_3__["TicketTeamListComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketTeamListModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_3__["TicketTeamListComponent"]],
            exports: [_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_3__["TicketTeamListComponent"]]
          }]
        }], null, null);
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

      TicketStatusComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TicketStatusComponentModule
      });
      TicketStatusComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TicketStatusComponentModule_Factory(t) {
          return new (t || TicketStatusComponentModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketStatusComponentModule, {
          declarations: [_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketStatusComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketStatusComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketStatusComponentModule, [{
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
    "R0Vg":
    /*!*******************************************!*\
      !*** ./src/app/services/ticket.module.ts ***!
      \*******************************************/

    /*! exports provided: Ticket, TicketTeam, TicketItem, TicketAttachment, TicketIssueType, TicketWiseIssueType, TicketTimer, TicketReminder, TicketEquipment, TicketEquipmentMasterData, TicketRecurringHelper */

    /***/
    function R0Vg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ticket", function () {
        return Ticket;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketTeam", function () {
        return TicketTeam;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketItem", function () {
        return TicketItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketAttachment", function () {
        return TicketAttachment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketIssueType", function () {
        return TicketIssueType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketWiseIssueType", function () {
        return TicketWiseIssueType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketTimer", function () {
        return TicketTimer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketReminder", function () {
        return TicketReminder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketEquipment", function () {
        return TicketEquipment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketEquipmentMasterData", function () {
        return TicketEquipmentMasterData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketRecurringHelper", function () {
        return TicketRecurringHelper;
      });
      /* harmony import */


      var _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./CommanExtendsClass.module */
      "mbav");

      var Ticket = function Ticket() {
        _classCallCheck(this, Ticket);
      };

      var TicketTeam = function TicketTeam() {
        _classCallCheck(this, TicketTeam);
      };

      var TicketItem = function TicketItem() {
        _classCallCheck(this, TicketItem);
      };

      var TicketAttachment = function TicketAttachment() {
        _classCallCheck(this, TicketAttachment);
      };

      var TicketIssueType = function TicketIssueType() {
        _classCallCheck(this, TicketIssueType);
      };

      var TicketWiseIssueType = function TicketWiseIssueType() {
        _classCallCheck(this, TicketWiseIssueType);
      };

      var TicketTimer = function TicketTimer() {
        _classCallCheck(this, TicketTimer);
      };

      var TicketReminder = /*#__PURE__*/function (_CommanExtendsClass_m) {
        _inherits(TicketReminder, _CommanExtendsClass_m);

        var _super = _createSuper(TicketReminder);

        function TicketReminder() {
          _classCallCheck(this, TicketReminder);

          return _super.apply(this, arguments);
        }

        return TicketReminder;
      }(_CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__["ReminderBase"]);

      var TicketEquipment = function TicketEquipment() {
        _classCallCheck(this, TicketEquipment);
      };

      var TicketEquipmentMasterData = function TicketEquipmentMasterData() {
        _classCallCheck(this, TicketEquipmentMasterData);
      };

      var TicketRecurringHelper = function TicketRecurringHelper() {
        _classCallCheck(this, TicketRecurringHelper);
      };
      /***/

    },

    /***/
    "U6ah":
    /*!****************************************************************************!*\
      !*** ./src/app/generic-utils/Ticket-Team-List/TicketTeamList.component.ts ***!
      \****************************************************************************/

    /*! exports provided: TicketTeamListComponent */

    /***/
    function U6ah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketTeamListComponent", function () {
        return TicketTeamListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_application_ticket_engineer_ticket_engineer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/application/ticket-engineer/ticket-engineer.component */
      "wqP9");
      /* harmony import */


      var src_app_services_ticket_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/ticket.module */
      "R0Vg");
      /* harmony import */


      var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/ticket.service */
      "KPvW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TicketTeamListComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not\xA0Assigned");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketTeamListComponent_div_1_li_2_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r6.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketTeamListComponent_div_1_li_2_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.TicketTeams[0].EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketTeamListComponent_div_1_li_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r8.TicketTeams[0].EngineerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.TicketTeams[0].EngineerName.substring(0, 5), "...");
        }
      }

      function TicketTeamListComponent_div_1_li_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.TicketTeams[0].EngineerName, "");
        }
      }

      function TicketTeamListComponent_div_1_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketTeamListComponent_div_1_li_2_img_1_Template, 1, 1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketTeamListComponent_div_1_li_2_img_2_Template, 1, 1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketTeamListComponent_div_1_li_2_span_3_Template, 2, 2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketTeamListComponent_div_1_li_2_span_4_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.TicketTeams[0].EngineerLogo.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.TicketTeams[0].EngineerLogo.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.TicketTeams[0].EngineerName.length > 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.TicketTeams[0].EngineerName.length <= 5);
        }
      }

      function TicketTeamListComponent_div_1_li_3_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r10.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketTeamListComponent_div_1_li_3_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.TicketTeams[0].EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketTeamListComponent_div_1_li_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r12.TicketTeams[0].EngineerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.TicketTeams[0].EngineerName.substring(0, 5), "...");
        }
      }

      function TicketTeamListComponent_div_1_li_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.TicketTeams[0].EngineerName, "");
        }
      }

      function TicketTeamListComponent_div_1_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketTeamListComponent_div_1_li_3_img_1_Template, 1, 1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketTeamListComponent_div_1_li_3_img_2_Template, 1, 1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketTeamListComponent_div_1_li_3_span_3_Template, 2, 2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketTeamListComponent_div_1_li_3_span_4_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.TicketTeams[0].EngineerLogo.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.TicketTeams[0].EngineerLogo.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.TicketTeams[0].EngineerName.length > 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.TicketTeams[0].EngineerName.length <= 5);
        }
      }

      function TicketTeamListComponent_div_1_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketTeamListComponent_div_1_li_4_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.OpenAssinedEngineerDialog(ctx_r14.Id, ctx_r14.TicketId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", ctx_r5.TicketTeams.length - 1, "");
        }
      }

      function TicketTeamListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketTeamListComponent_div_1_li_2_Template, 5, 4, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketTeamListComponent_div_1_li_3_Template, 5, 4, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketTeamListComponent_div_1_li_4_Template, 3, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.TicketTeams.length === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.TicketTeams.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.TicketTeams.length > 1);
        }
      }

      function TicketTeamListComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "REALLOCATED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TicketTeamListComponent = /*#__PURE__*/function () {
        function TicketTeamListComponent(service, dialog) {
          _classCallCheck(this, TicketTeamListComponent);

          this.service = service;
          this.dialog = dialog;
          this.TicketTeams = new src_app_services_ticket_module__WEBPACK_IMPORTED_MODULE_3__["Ticket"]();
        }

        _createClass(TicketTeamListComponent, [{
          key: "OpenAssinedEngineerDialog",
          value: function OpenAssinedEngineerDialog(Id, TicketId) {
            this.service.formData.Id = Id;
            this.service.formData.TicketId = TicketId;
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.width = '640px';
            dialogConfig.height = '460px';
            dialogConfig.data = {};
            this.dialog.open(src_app_application_ticket_engineer_ticket_engineer_component__WEBPACK_IMPORTED_MODULE_2__["TicketEngineerComponent"], dialogConfig);
          }
        }]);

        return TicketTeamListComponent;
      }();

      TicketTeamListComponent.ɵfac = function TicketTeamListComponent_Factory(t) {
        return new (t || TicketTeamListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
      };

      TicketTeamListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TicketTeamListComponent,
        selectors: [["generic-ticket-team-list"]],
        inputs: {
          TicketTeams: "TicketTeams",
          localPrependUrl: "localPrependUrl",
          Reallocate: "Reallocate",
          Id: "Id",
          TicketId: "TicketId"
        },
        decls: 3,
        vars: 3,
        consts: [["class", "ticketstatus statusnotassigned", 4, "ngIf"], ["class", "team-inner-1", 4, "ngIf"], ["class", "ticketstatus statusreallocated", 4, "ngIf"], [1, "ticketstatus", "statusnotassigned"], [1, "team-inner-1"], [1, "btn-group"], [4, "ngIf"], ["width", "20pTicketTeams", "height", "20pTicketTeams", 3, "src", 4, "ngIf"], [3, "title", 4, "ngIf"], ["width", "20pTicketTeams", "height", "20pTicketTeams", 3, "src"], [3, "title"], ["href", "javascript:;", 1, "moreenglisthover", 3, "click"], [1, "ticketstatus", "statusreallocated"]],
        template: function TicketTeamListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TicketTeamListComponent_span_0_Template, 2, 0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketTeamListComponent_div_1_Template, 5, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketTeamListComponent_span_2_Template, 2, 0, "span", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.TicketTeams.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.TicketTeams.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Reallocate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0px;;}\n    .team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:black;display: inline-block;padding: 8px 8px;}\n    .team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ border-radius:40%; height: 20;width: 20; }\n    .team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size: 10px; padding-left: 8px; padding-top: 6px;}\n    .moreenglisthover[_ngcontent-%COMP%]:hover {color: red;background-color: #e4d4c0;border-radius: 50%;padding: 2px;}\n    .btn-group[_ngcontent-%COMP%] {background-color: rgba(77,89,149,.06);}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketTeamListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'generic-ticket-team-list',
            template: "\n    <span *ngIf=\"TicketTeams.length === 0\"\n        class=\"ticketstatus statusnotassigned\">Not&nbsp;Assigned</span>\n    <div *ngIf=\"TicketTeams.length > 0\" class=\"team-inner-1\">\n        <ul class=\"btn-group\">\n\n            <li *ngIf=\"TicketTeams.length === 1\">\n                <img *ngIf=\"TicketTeams[0].EngineerLogo.length === 0\"\n                    width=\"20pTicketTeams\" height=\"20pTicketTeams\"\n                    src=\"{{localPrependUrl}}/assets/svg/noimage.svg\" />\n                <img *ngIf=\"TicketTeams[0].EngineerLogo.length > 0\"\n                    width=\"20pTicketTeams\" height=\"20pTicketTeams\"\n                    src=\"{{TicketTeams[0].EngineerLogo}}\">\n                <span *ngIf=\"TicketTeams[0].EngineerName.length > 5\" title=\"{{TicketTeams[0].EngineerName}}\">\n                    {{(TicketTeams[0].EngineerName).substring(0,5)}}...</span>\n                <span *ngIf=\"TicketTeams[0].EngineerName.length <= 5\">\n                    {{TicketTeams[0].EngineerName}}</span>\n            </li>\n            <li *ngIf=\"TicketTeams.length > 1\">\n                <img *ngIf=\"TicketTeams[0].EngineerLogo.length === 0\"\n                    width=\"20pTicketTeams\" height=\"20pTicketTeams\"\n                    src=\"{{localPrependUrl}}/assets/svg/noimage.svg\" />\n                <img *ngIf=\"TicketTeams[0].EngineerLogo.length > 0\"\n                    width=\"20pTicketTeams\" height=\"20pTicketTeams\"\n                    src=\"{{TicketTeams[0].EngineerLogo}}\">\n                <span *ngIf=\"TicketTeams[0].EngineerName.length > 5\" title=\"{{TicketTeams[0].EngineerName}}\">\n                    {{(TicketTeams[0].EngineerName).substring(0,5)}}...</span>\n                <span *ngIf=\"TicketTeams[0].EngineerName.length <= 5\">\n                    {{TicketTeams[0].EngineerName}}</span>\n            </li>\n            <li *ngIf=\"TicketTeams.length > 1\">\n                <a href=\"javascript:;\" class=\"moreenglisthover\"\n                    (click)=\"OpenAssinedEngineerDialog(Id, TicketId)\">\n                    +{{TicketTeams.length - 1}}</a>\n            </li>\n\n        </ul>\n    </div>\n    <span *ngIf=\"Reallocate\" class=\"ticketstatus statusreallocated\">REALLOCATED</span>\n  ",
            styles: ["\n    .team-inner-1 ul{padding-left:0;list-style-type:none;margin-bottom:0px;;}\n    .team-inner-1 ul li{color:black;display: inline-block;padding: 8px 8px;}\n    .team-inner-1 ul li img{ border-radius:40%; height: 20;width: 20; }\n    .team-inner-1 ul li .close{font-size: 10px; padding-left: 8px; padding-top: 6px;}\n    .moreenglisthover:hover {color: red;background-color: #e4d4c0;border-radius: 50%;padding: 2px;}\n    .btn-group {background-color: rgba(77,89,149,.06);}\n    "]
          }]
        }], function () {
          return [{
            type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }];
        }, {
          TicketTeams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          localPrependUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          Reallocate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          Id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          TicketId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NEW\xA0JOB\xA0REQUEST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DEFECT\xA0JOB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CANCELLED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UPCOMING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLOSED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLOSED & QUOTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLOSED & INVOICED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OVERDUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_8_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0Day");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_8_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketStatusComponent_span_8_span_2_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketStatusComponent_span_8_span_3_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx_r8.OverDueDays, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.OverDueDays === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.OverDueDays > 1);
        }
      }

      function TicketStatusComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "HOLD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "INPROGRESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketStatusComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UNSCHEDULED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TicketStatusComponent = function TicketStatusComponent() {
        _classCallCheck(this, TicketStatusComponent);
      };

      TicketStatusComponent.ɵfac = function TicketStatusComponent_Factory(t) {
        return new (t || TicketStatusComponent)();
      };

      TicketStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TicketStatusComponent_span_0_Template, 2, 0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketStatusComponent_span_1_Template, 2, 0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketStatusComponent_span_2_Template, 2, 0, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketStatusComponent_span_3_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketStatusComponent_span_4_Template, 2, 0, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketStatusComponent_span_5_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketStatusComponent_span_6_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketStatusComponent_span_7_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TicketStatusComponent_span_8_Template, 4, 3, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TicketStatusComponent_span_9_Template, 2, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TicketStatusComponent_span_10_Template, 2, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TicketStatusComponent_span_11_Template, 2, 0, "span", 10);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "NEW JOB REQUEST");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "DEFECT JOB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "CANCELLED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "UPCOMING");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "CLOSED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "CLOSEDQUOTED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "CLOSEDINVOICED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "OVERDUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "OVERDUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "HOLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "INPROGRESS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "UNSCHEDULED");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketStatusComponent, [{
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
    "mbav":
    /*!*******************************************************!*\
      !*** ./src/app/services/CommanExtendsClass.module.ts ***!
      \*******************************************************/

    /*! exports provided: ReminderBase */

    /***/
    function mbav(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReminderBase", function () {
        return ReminderBase;
      });

      var ReminderBase = function ReminderBase() {
        _classCallCheck(this, ReminderBase);
      };
      /***/

    },

    /***/
    "myuM":
    /*!*****************************************************************************************!*\
      !*** ./src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TicketDateTimeFormatComponent */

    /***/
    function myuM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketDateTimeFormatComponent", function () {
        return TicketDateTimeFormatComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TicketDateTimeFormatComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Appointment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Start:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "End:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.currentUser.Ticket, " Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 4, ctx_r0.C, "MMM d, y", "+0000"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 8, ctx_r0.A, "MMM d, y HH:mm", "+0000"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](17, 12, ctx_r0.B, "MMM d, y HH:mm", "+0000"), " ");
        }
      }

      function TicketDateTimeFormatComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r1.C, "MMM d, y", "+0000"), " ");
        }
      }

      function TicketDateTimeFormatComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx_r2.A, "MMM d, y h:mm a", "+0000"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 6, ctx_r2.B, "h:mm a", "+0000"), " ");
        }
      }

      var TicketDateTimeFormatComponent = function TicketDateTimeFormatComponent(loginservice) {
        var _this = this;

        _classCallCheck(this, TicketDateTimeFormatComponent);

        this.loginservice = loginservice;
        this.loginservice.currentUser.subscribe(function (x) {
          return _this.currentUser = x;
        });

        if (this.T === null) {
          this.T = 1;
        }
      };

      TicketDateTimeFormatComponent.ɵfac = function TicketDateTimeFormatComponent_Factory(t) {
        return new (t || TicketDateTimeFormatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      TicketDateTimeFormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TicketDateTimeFormatComponent,
        selectors: [["generic-ticket-date-time-format"]],
        inputs: {
          A: "A",
          B: "B",
          C: "C",
          T: "T"
        },
        decls: 3,
        vars: 3,
        consts: [[4, "ngIf"]],
        template: function TicketDateTimeFormatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TicketDateTimeFormatComponent_div_0_Template, 18, 16, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketDateTimeFormatComponent_div_1_Template, 3, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketDateTimeFormatComponent_div_2_Template, 4, 10, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.T === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.T === 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.T === 12);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketDateTimeFormatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'generic-ticket-date-time-format',
            template: "\n  <div *ngIf=\"T === 1\">\n  <strong>{{this.currentUser.Ticket}} Date: </strong> {{ C | date:'MMM d, y':'+0000' }} <br>\n    <strong>Appointment</strong><br>\n    <strong>Start:</strong> {{ A | date:'MMM d, y HH:mm':'+0000' }}<br>\n    <strong>End:</strong> {{ B | date:'MMM d, y HH:mm':'+0000' }}\n  </div>\n  <div *ngIf=\"T === 11\">\n    {{ C | date:'MMM d, y':'+0000' }}\n  </div>\n  <div *ngIf=\"T === 12\">\n  {{ A | date:'MMM d, y h:mm a':'+0000' }} - {{ B | date:'h:mm a':'+0000' }}\n  </div>\n  "
          }]
        }], function () {
          return [{
            type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }];
        }, {
          A: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          B: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          C: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          T: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "wqP9":
    /*!**************************************************************************!*\
      !*** ./src/app/application/ticket-engineer/ticket-engineer.component.ts ***!
      \**************************************************************************/

    /*! exports provided: TicketEngineerComponent */

    /***/
    function wqP9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketEngineerComponent", function () {
        return TicketEngineerComponent;
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


      var src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/engineer.service */
      "+MZO");
      /* harmony import */


      var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/ticket.service */
      "KPvW");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TicketEngineerComponent_table_12_tr_14_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r5.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketEngineerComponent_table_12_tr_14_img_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
        }

        if (rf & 2) {
          var x_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r3.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketEngineerComponent_table_12_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketEngineerComponent_table_12_tr_14_img_4_Template, 1, 1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketEngineerComponent_table_12_tr_14_img_5_Template, 1, 1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r3.EngineerLogo.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r3.EngineerLogo.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.EngineerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.EngineerPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.EngineerEmail);
        }
      }

      function TicketEngineerComponent_table_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SNo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TicketEngineerComponent_table_12_tr_14_Template, 13, 6, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.service.Engineerlist);
        }
      }

      function TicketEngineerComponent_i_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
        }
      }

      var TicketEngineerComponent = /*#__PURE__*/function () {
        function TicketEngineerComponent(service, ticketservice, loginservice) {
          var _this2 = this;

          _classCallCheck(this, TicketEngineerComponent);

          this.service = service;
          this.ticketservice = ticketservice;
          this.loginservice = loginservice;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this2.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        }

        _createClass(TicketEngineerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.service.Engineerlist = [];
            setTimeout(function () {
              _this3.service.refrestAssinedEngineersList(_this3.currentUser.Token, _this3.ticketservice.formData.Id);
            }, 200);
          }
        }]);

        return TicketEngineerComponent;
      }();

      TicketEngineerComponent.ɵfac = function TicketEngineerComponent_Factory(t) {
        return new (t || TicketEngineerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_2__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      TicketEngineerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TicketEngineerComponent,
        selectors: [["app-ticket-engineer"]],
        decls: 16,
        vars: 5,
        consts: [[2, "color", "#ff0909"], [1, "btn", "text-danger", "pull-right", 3, "mat-dialog-close"], [1, "form-row"], [1, "form-group", "col-md-12"], ["class", "table", 4, "ngIf"], [1, "row"], ["class", "fa fa-spinner fa-spin", 4, "ngIf"], [1, "table"], [2, "width", "5%"], [2, "width", "10%"], [2, "width", "40%"], [2, "width", "20%"], [2, "width", "25%"], [4, "ngFor", "ngForAsync", "ngForOf"], [1, "engineer-list-class"], ["width", "30px", 3, "src", 4, "ngIf"], ["width", "30px", 3, "src"], [1, "fa", "fa-spinner", "fa-spin"]],
        template: function TicketEngineerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "|");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TicketEngineerComponent_table_12_Template, 15, 1, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TicketEngineerComponent_i_15_Template, 1, 0, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.Ticket, " Team \xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \xA0\xA0 ", ctx.currentUser.Ticket, ": # ", ctx.ticketservice.formData.TicketId, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.Engineerlist.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.Engineerlist);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: [".model-header[_ngcontent-%COMP%]{background: #c3e7fa;padding: 5px;}\n.model-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.25rem;}\n.tableBodyScroll[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n \n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.tableBodyScroll[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketEngineerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ticket-engineer',
            templateUrl: './ticket-engineer.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_2__["EngineerService"]
          }, {
            type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~application-customer-customer-module~application-customers-customers-module~application-dash~1bb82fc1-es5.js.map