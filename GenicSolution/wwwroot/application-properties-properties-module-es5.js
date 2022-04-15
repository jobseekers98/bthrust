(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-properties-properties-module"], {
    /***/
    "/2zj":
    /*!****************************************************************!*\
      !*** ./src/app/application/properties/properties.component.ts ***!
      \****************************************************************/

    /*! exports provided: propertiesComponent */

    /***/
    function zj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "propertiesComponent", function () {
        return propertiesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var propertiesComponent = /*#__PURE__*/function () {
        function propertiesComponent() {
          _classCallCheck(this, propertiesComponent);
        }

        _createClass(propertiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return propertiesComponent;
      }();

      propertiesComponent.ɵfac = function propertiesComponent_Factory(t) {
        return new (t || propertiesComponent)();
      };

      propertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: propertiesComponent,
        selectors: [["ng-component"]],
        decls: 1,
        vars: 0,
        template: function propertiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](propertiesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: '<router-outlet></router-outlet>'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "G0yR":
    /*!***************************************************************************************************!*\
      !*** ./src/app/application/properties/ticket-history-details/ticket-history-details.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: TicketHistoryDetailsComponent */

    /***/
    function G0yR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketHistoryDetailsComponent", function () {
        return TicketHistoryDetailsComponent;
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


      var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/property.service */
      "Pffd");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_serviceform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/serviceform.service */
      "y96C");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.component */
      "xJsc");

      function TicketHistoryDetailsComponent_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryDetailsComponent_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryDetailsComponent_a_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " properties ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryDetailsComponent_a_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.webParms.WebsiteParam.UrlPath, " ");
        }
      }

      function TicketHistoryDetailsComponent_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
        }
      }

      function TicketHistoryDetailsComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Client History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryDetailsComponent_li_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15.IssueTypeName);
        }
      }

      function TicketHistoryDetailsComponent_li_101_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 52);
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r17.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketHistoryDetailsComponent_li_101_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 52);
        }

        if (rf & 2) {
          var item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r16.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketHistoryDetailsComponent_li_101_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Supervisor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryDetailsComponent_li_101_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Foreman");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryDetailsComponent_li_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketHistoryDetailsComponent_li_101_img_1_Template, 1, 1, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketHistoryDetailsComponent_li_101_img_2_Template, 1, 1, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketHistoryDetailsComponent_li_101_span_4_Template, 2, 0, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketHistoryDetailsComponent_li_101_span_5_Template, 2, 0, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r16.EngineerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.EngineerLogo.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.EngineerLogo.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.EngineerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.Type === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.Type === 2);
        }
      }

      function TicketHistoryDetailsComponent_th_118_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unit Cost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryDetailsComponent_th_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Cost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryDetailsComponent_tr_121_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r22.ItemName, " ");
        }
      }

      function TicketHistoryDetailsComponent_tr_121_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r22.ItemName, " ");
        }
      }

      function TicketHistoryDetailsComponent_tr_121_div_6_div_1_small_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", p_r22.UniqId, ")");
        }
      }

      function TicketHistoryDetailsComponent_tr_121_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketHistoryDetailsComponent_tr_121_div_6_div_1_small_3_Template, 2, 1, "small", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r22.WarrantyDays, " Days warranty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r22.UniqId.length > 0);
        }
      }

      function TicketHistoryDetailsComponent_tr_121_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketHistoryDetailsComponent_tr_121_div_6_div_1_Template, 4, 2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r22.InWarranty);
        }
      }

      function TicketHistoryDetailsComponent_tr_121_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r22.ItemQuantity);
        }
      }

      function TicketHistoryDetailsComponent_tr_121_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r22.ItemUnitCost);
        }
      }

      function TicketHistoryDetailsComponent_tr_121_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r22.ItemTotalCost);
        }
      }

      function TicketHistoryDetailsComponent_tr_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketHistoryDetailsComponent_tr_121_div_4_Template, 4, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketHistoryDetailsComponent_tr_121_div_5_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketHistoryDetailsComponent_tr_121_div_6_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TicketHistoryDetailsComponent_tr_121_div_10_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TicketHistoryDetailsComponent_tr_121_td_11_Template, 2, 1, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TicketHistoryDetailsComponent_tr_121_td_12_Template, 2, 1, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r22 = ctx.$implicit;
          var i_r23 = ctx.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r23 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r22.ItemAddredBy === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r22.ItemAddredBy === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentUser.Permissions.ProductWarranty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r22.ItemDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r22.Type === "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.currentUser.Permissions.IsProductOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.currentUser.Permissions.IsProductOnly);
        }
      }

      function TicketHistoryDetailsComponent_tr_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.ResposeResult.CustomerDetails.NetAmount);
        }
      }

      function TicketHistoryDetailsComponent_div_141_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "generic-ticket-icon-attachment", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("NameChange", function TicketHistoryDetailsComponent_div_141_Template_generic_ticket_icon_attachment_NameChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var x_r40 = ctx.$implicit;
            return x_r40.AttachmentName = $event;
          })("PathChange", function TicketHistoryDetailsComponent_div_141_Template_generic_ticket_icon_attachment_PathChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var x_r40 = ctx.$implicit;
            return x_r40.AttachmentPath = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Name", x_r40.AttachmentName)("Path", x_r40.AttachmentPath)("Status", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", x_r40.AttachmentPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketHistoryDetailsComponent_div_142_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No Attachment Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryDetailsComponent_div_148_tr_20_div_6_audio_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var b_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", b_r57.AudioAttachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketHistoryDetailsComponent_div_148_tr_20_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketHistoryDetailsComponent_div_148_tr_20_div_6_audio_1_Template, 2, 1, "audio", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var d_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", d_r52.CloserAttachmentAudioList);
        }
      }

      function TicketHistoryDetailsComponent_div_148_tr_20_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No audio available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryDetailsComponent_div_148_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "generic-ticket-icon-attachment", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("NameChange", function TicketHistoryDetailsComponent_div_148_tr_20_Template_generic_ticket_icon_attachment_NameChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var d_r52 = ctx.$implicit;
            return d_r52.AttachmentExtenstion = $event;
          })("PathChange", function TicketHistoryDetailsComponent_div_148_tr_20_Template_generic_ticket_icon_attachment_PathChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var d_r52 = ctx.$implicit;
            return d_r52.AttachmentFile = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketHistoryDetailsComponent_div_148_tr_20_div_6_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketHistoryDetailsComponent_div_148_tr_20_span_7_Template, 2, 0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Download File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var d_r52 = ctx.$implicit;
          var ii_r53 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ii_r53 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Name", d_r52.AttachmentExtenstion)("Path", d_r52.AttachmentFile)("Status", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r52.CloserAttachmentAudioList.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r52.CloserAttachmentAudioList.length <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r52.Remarks, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", d_r52.AttachmentFile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketHistoryDetailsComponent_div_148_div_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rc_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", rc_r44.CloserAmount, "");
        }
      }

      function TicketHistoryDetailsComponent_div_148_div_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tax");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rc_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", rc_r44.CloserGSTAmount, "");
        }
      }

      function TicketHistoryDetailsComponent_div_148_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rc_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", rc_r44.CloserTotalAmount, "");
        }
      }

      function TicketHistoryDetailsComponent_div_148_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Payment Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rc_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", rc_r44.PaymentMode, "");
        }
      }

      function TicketHistoryDetailsComponent_div_148_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Amount Paid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rc_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", rc_r44.AmountPaid, "");
        }
      }

      function TicketHistoryDetailsComponent_div_148_div_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketHistoryDetailsComponent_div_148_div_69_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

            var rc_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r67.serviceFormDownload(rc_r44.CloserID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rc_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Download Service Form (", rc_r44.ServiceForm, ")");
        }
      }

      function TicketHistoryDetailsComponent_div_148_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Attachment's");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Audio Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Remark's");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TicketHistoryDetailsComponent_div_148_tr_20_Template, 13, 8, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Total Duration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, TicketHistoryDetailsComponent_div_148_div_63_Template, 7, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, TicketHistoryDetailsComponent_div_148_div_64_Template, 7, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, TicketHistoryDetailsComponent_div_148_div_65_Template, 7, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, TicketHistoryDetailsComponent_div_148_div_66_Template, 7, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, TicketHistoryDetailsComponent_div_148_div_67_Template, 7, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, TicketHistoryDetailsComponent_div_148_div_69_Template, 5, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Customer Signature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rc_r44 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Closer details (", rc_r44.CloserPrefix, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rc_r44.CloserAttachmentList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r14.currentUser.Engineer, " Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", rc_r44.EngineerName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](40, 17, rc_r44.StartDate, "MMM dd, yyyy HH:mm"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 20, rc_r44.EndDate, "MMM dd, yyyy HH:mm"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", rc_r44.TotalDuration, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", rc_r44.Remarks, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rc_r44.CloserTotalAmount.PaymentCollected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rc_r44.CloserTotalAmount.PaymentCollected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rc_r44.CloserTotalAmount.PaymentCollected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rc_r44.CloserTotalAmount.PaymentCollected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rc_r44.CloserTotalAmount.PaymentCollected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rc_r44.ServiceForm !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r14.currentUser.Engineer, " Signature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", rc_r44.EngineerSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", rc_r44.CustomerSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var TicketHistoryDetailsComponent = /*#__PURE__*/function () {
        function TicketHistoryDetailsComponent(service, titleService, loginservice, serviceform, webParms) {
          var _this = this;

          _classCallCheck(this, TicketHistoryDetailsComponent);

          this.service = service;
          this.titleService = titleService;
          this.loginservice = loginservice;
          this.serviceform = serviceform;
          this.webParms = webParms;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        }

        _createClass(TicketHistoryDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.ResposeResult = {};
            this.ResposeResult.TicketAttachment = [];
            this.ResposeResult.CustomerDetails = {};
            var Id = window.location.pathname.split('/').pop();
            this.service.ClientTicketHistory(Id).subscribe(function (res) {
              _this2.ResposeResult = res;
            }, function (error) {
              return console.log(error);
            });
            this.titleService.setTitle(this.currentUser.Ticket + ' History Details | Genic Solution');
          }
        }, {
          key: "serviceFormDownload",
          value: function serviceFormDownload(CloserId) {
            this.serviceform.downoadServiceFormPDF(CloserId).subscribe(function (res) {
              var response = res;

              if (response.Message === 'success') {
                var a = $('<a>').attr('href', response.Path).attr("target", "_blank").attr('download', 'Service.pdf').appendTo('body');
                a[0].click();
                a.remove();
              }

              if (response.Message === 'failure') {
                console.log(response.MessageDescription);
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return TicketHistoryDetailsComponent;
      }();

      TicketHistoryDetailsComponent.ɵfac = function TicketHistoryDetailsComponent_Factory(t) {
        return new (t || TicketHistoryDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_serviceform_service__WEBPACK_IMPORTED_MODULE_5__["ServiceformService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_6__["GenicProfileService"]));
      };

      TicketHistoryDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TicketHistoryDetailsComponent,
        selectors: [["app-ticket-history-details"]],
        decls: 149,
        vars: 39,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard", 4, "ngIf"], ["href", "javascript:;", "routerLink", "/engineer/engineer-dashboard", 4, "ngIf"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/properties", "class", "kt-subheader__breadcrumbs-link", 4, "ngIf"], ["href", "javascript:;", "onclick", "window.history.back()", "class", "kt-subheader__breadcrumbs-link", 4, "ngIf"], ["class", "kt-subheader__separator kt-hidden", 4, "ngIf"], ["class", "kt-subheader__breadcrumbs", 4, "ngIf"], ["href", "javascript:;", 1, "kt-subheader__breadcrumbs-home"], ["href", "javascript:;", 1, "kt-subheader__breadcrumbs-link"], [1, "kt-subheader__toolbar"], [1, "kt-subheader__wrapper"], ["onclick", "window.history.back()", 1, "btn", "btn-primary", 2, "margin-right", "3px", "color", "white", "padding", "6px 10px 7px 10px", "cursor", "pointer"], [1, "customer-listing-detail-section"], [1, "col-md-12"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "col-xl-12", "col-lg-12"], [1, "closerDetailsSection-top"], [1, "table", "table-bordered", "table-stripped"], ["colspan", "2"], [1, "btn", "btn-label-primary", "ticket-cirle-red"], [1, "scTicketissueType"], [4, "ngFor", "ngForOf"], [1, "engineer_sec"], [1, "team-inner-1"], [3, "title", 4, "ngFor", "ngForOf"], [1, "closerDetailsSection"], [1, "table", "table-striped", "properies-table-info", "ng-star-inserted"], [4, "ngIf"], [4, "ngFor", "ngForAsync", "ngForOf"], [1, "row"], [1, "support-service-incident-form", "cmtImage"], [1, "ticketImgBox"], ["class", "col-md-1", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], ["href", "javascript:;", "routerLink", "/dashboard"], ["href", "javascript:;", "routerLink", "/engineer/engineer-dashboard"], ["href", "javascript:;", "routerLink", "/properties", 1, "kt-subheader__breadcrumbs-link"], ["href", "javascript:;", "onclick", "window.history.back()", 1, "kt-subheader__breadcrumbs-link"], ["href", "javascript:;", "routerLink", "/properties/ticket-history-property-wise", 1, "kt-subheader__breadcrumbs-link"], [3, "title"], ["width", "20px", "height", "20px", 3, "src", 4, "ngIf"], ["class", "kt-badge kt-badge--success kt-badge--inline kt-badge--pill", 4, "ngIf"], ["class", "kt-badge kt-badge--warning kt-badge--inline kt-badge--pill", 4, "ngIf"], ["width", "20px", "height", "20px", 3, "src"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "kt-badge--pill"], [1, "kt-badge", "kt-badge--warning", "kt-badge--inline", "kt-badge--pill"], ["colspan", "4"], [1, "col-md-1"], [3, "Name", "Path", "Status", "NameChange", "PathChange"], [1, "col-md-4"], ["target", "_blank", 3, "href"], [1, "fa", "fa-download", "text-success"], [1, "singleBox"], [2, "width", "18%"], ["colspan", "5"], [1, "col-md-6", "col-lg-6"], [1, "col-md-4", "col-lg-4"], [1, "col-md-8", "col-lg-8"], ["width", "300px", 3, "src"], [2, "text-align", "center"], [2, "width", "65%"], ["target", "_blank", 1, "btn", "btn-primary", 3, "href"], ["controls", "", 4, "ngFor", "ngForOf"], ["controls", ""], ["type", "audio/webm", 3, "src"], [1, "col-md-12", "col-lg-12"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "btn-block", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download"]],
        template: function TicketHistoryDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketHistoryDetailsComponent_a_5_Template, 2, 0, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketHistoryDetailsComponent_a_6_Template, 2, 0, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TicketHistoryDetailsComponent_a_11_Template, 2, 0, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TicketHistoryDetailsComponent_a_12_Template, 2, 1, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TicketHistoryDetailsComponent_span_13_Template, 1, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TicketHistoryDetailsComponent_div_14_Template, 5, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Closer detail's Info ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Customer Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Company Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Contact Person Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Contact Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Service Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Issue Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, TicketHistoryDetailsComponent_li_70_Template, 3, 1, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "td", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Job Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Appointment Start");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Appointment End");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, TicketHistoryDetailsComponent_li_101_Template, 6, 6, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "table", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Discription");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, TicketHistoryDetailsComponent_th_118_Template, 2, 0, "th", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, TicketHistoryDetailsComponent_th_119_Template, 2, 0, "th", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, TicketHistoryDetailsComponent_tr_121_Template, 13, 8, "tr", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, TicketHistoryDetailsComponent_tr_122_Template, 8, 1, "tr", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Note: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Comments & Images");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, TicketHistoryDetailsComponent_div_141_Template, 8, 4, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, TicketHistoryDetailsComponent_div_142_Template, 5, 0, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Service Form / Work Order & Closer Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, TicketHistoryDetailsComponent_div_148_Template, 84, 23, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type === "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type === "Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type === "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type === "Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type === "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type === "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Ticket, " #");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ResposeResult.CustomerDetails.TicketId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ResposeResult.CustomerDetails.CustomerCompanyName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ResposeResult.CustomerDetails.CustomerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Contact No : ", ctx.ResposeResult.CustomerDetails.CustomerContactNo, " Email : ", ctx.ResposeResult.CustomerDetails.CustomerEmail, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ResposeResult.CustomerDetails.CustomerAddress);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ResposeResult.IssueType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ResposeResult.CustomerDetails.Title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ResposeResult.CustomerDetails.Description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](88, 31, ctx.ResposeResult.CustomerDetails.AppointmentStart, "MMM d, y HH:mm", "+0000"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](94, 35, ctx.ResposeResult.CustomerDetails.AppointmentEnd, "MMM d, y HH:mm", "+0000"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.Engineer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ResposeResult.TicketTeam);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Product, " & Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Product, " Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ResposeResult.TicketItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(*)Added by an ", ctx.currentUser.Engineer, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ResposeResult.CustomerDetails.InternalNoteDescription, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ResposeResult.TicketAttachment);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ResposeResult.TicketAttachment.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ResposeResult.CloserDetails);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_9__["TicketIconAttachmentComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: [".engineer_sec[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0px !important;padding-left:0px !important;}\r\n.engineer_sec[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding:0px 5px;}\r\n.team-inner-1[_ngcontent-%COMP%] {margin-top:0px;padding:0px 15px;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style-type:none;margin-bottom:0px;;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:black;display: inline-block;padding: 8px 8px;background-color: #eaeaea;margin: 0px 3px 5px;border-radius: 5px;}\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ border-radius:40%; height: 20;width: 20; }\r\n.team-inner-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{font-size: 10px;\r\npadding-left: 8px;\r\npadding-top: 6px;}\r\n.kt-portlet.kt-portlet--height-fluid.kt-widget19[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { padding-top:10px; }\r\n.closerDetailsSection[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] { padding-top:10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydGllcy90aWNrZXQtaGlzdG9yeS1kZXRhaWxzL3RpY2tldC1oaXN0b3J5LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsNEJBQTRCLENBQUMsMkJBQTJCLENBQUM7QUFDMUUsb0JBQW9CLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztBQUN6RCxlQUFlLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMvQyxpQkFBaUIsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixFQUFFO0FBQ3hFLG9CQUFvQixXQUFXLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUM7QUFDeEkseUJBQXlCLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxTQUFTLEVBQUU7QUFDbEUsMkJBQTJCLGVBQWU7QUFDMUMsaUJBQWlCO0FBQ2pCLGdCQUFnQixDQUFDO0FBQ2pCLHNEQUFzRCxnQkFBZ0IsRUFBRTtBQUN4RSwyQkFBMkIsZ0JBQWdCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9wcm9wZXJ0aWVzL3RpY2tldC1oaXN0b3J5LWRldGFpbHMvdGlja2V0LWhpc3RvcnktZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVuZ2luZWVyX3NlYyB1bHttYXJnaW4tYm90dG9tOjBweCAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDowcHggIWltcG9ydGFudDt9XHJcbi5lbmdpbmVlcl9zZWMgdWwgbGl7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzowcHggNXB4O31cclxuLnRlYW0taW5uZXItMSB7bWFyZ2luLXRvcDowcHg7cGFkZGluZzowcHggMTVweDt9XHJcbi50ZWFtLWlubmVyLTEgdWx7cGFkZGluZy1sZWZ0OjA7bGlzdC1zdHlsZS10eXBlOm5vbmU7bWFyZ2luLWJvdHRvbTowcHg7O31cclxuLnRlYW0taW5uZXItMSB1bCBsaXtjb2xvcjpibGFjaztkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzogOHB4IDhweDtiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO21hcmdpbjogMHB4IDNweCA1cHg7Ym9yZGVyLXJhZGl1czogNXB4O31cclxuLnRlYW0taW5uZXItMSB1bCBsaSBpbWd7IGJvcmRlci1yYWRpdXM6NDAlOyBoZWlnaHQ6IDIwO3dpZHRoOiAyMDsgfVxyXG4udGVhbS1pbm5lci0xIHVsIGxpIC5jbG9zZXtmb250LXNpemU6IDEwcHg7XHJcbnBhZGRpbmctbGVmdDogOHB4O1xyXG5wYWRkaW5nLXRvcDogNnB4O31cclxuLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVpZ2h0LWZsdWlkLmt0LXdpZGdldDE5IGg0IHsgcGFkZGluZy10b3A6MTBweDsgfVxyXG4uY2xvc2VyRGV0YWlsc1NlY3Rpb24gaDUgeyBwYWRkaW5nLXRvcDoxMHB4OyB9Il19 */", ".imgCloserAttchmetList[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 80px;\n  }\n\n  .closerDetailsSection-top[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: 20% !important;\n  }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketHistoryDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ticket-history-details',
            templateUrl: './ticket-history-details.component.html',
            styleUrls: ['./ticket-history-details.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }, {
            type: src_app_services_serviceform_service__WEBPACK_IMPORTED_MODULE_5__["ServiceformService"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_6__["GenicProfileService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PR44":
    /*!*******************************************************************************!*\
      !*** ./src/app/application/properties/property-add/property-add.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: PropertyAddComponent */

    /***/
    function PR44(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyAddComponent", function () {
        return PropertyAddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/property.service */
      "Pffd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/userlog.service */
      "V05N");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "7itd");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");

      function PropertyAddComponent_a_73_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 65);
        }
      }

      function PropertyAddComponent_a_73_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 66);
        }
      }

      function PropertyAddComponent_a_73_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyAddComponent_a_73_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.findAddressByPostalCode(ctx_r18.service.formData.AddressZipCode);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropertyAddComponent_a_73_i_1_Template, 1, 0, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PropertyAddComponent_a_73_i_2_Template, 1, 0, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.IsPostalSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.IsPostalSearch);
        }
      }

      function PropertyAddComponent_option_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", x_r20.CountryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r20.CountryName, " ");
        }
      }

      function PropertyAddComponent_div_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.service.formData.AddressZipCode.length !== 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.createbuttontext, " ");
        }
      }

      function PropertyAddComponent_div_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PropertyAddComponent = /*#__PURE__*/function () {
        function PropertyAddComponent(titleService, route1, service, toastr, genicprofileservice, router, logService, loginservice) {
          var _this3 = this;

          _classCallCheck(this, PropertyAddComponent);

          this.titleService = titleService;
          this.route1 = route1;
          this.service = service;
          this.toastr = toastr;
          this.genicprofileservice = genicprofileservice;
          this.router = router;
          this.logService = logService;
          this.loginservice = loginservice;
          this.options = {
            componentRestrictions: {
              country: ['SG']
            }
          };
          this.zoom = 8;
          this.street_number = '';
          this.route = '';
          this.neighborhood = '';
          this.sublocality_level_3 = '';
          this.sublocality_level_2 = '';
          this.sublocality_level_1 = '';
          this.locality = '';
          this.administrative_area_level_2 = '';
          this.administrative_area_level_1 = '';
          this.country = '';
          this.postal_code = '';
          this.btnText = 'Add';
          this.loader = false;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this3.currentUser = x;
          });
        }

        _createClass(PropertyAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.genicprofileservice.getCountryList(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this4.countrylist = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.IsPostalSearch = false;

            if (this.router.url === '/properties/property-edit') {
              if (!this.currentUser.Permissions.PropertyEdit) {
                this.router.navigate(['/dashboard']);
              }

              this.titleService.setTitle('Propert Edit | Genic Solution');

              if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
                this.router.navigate(['/properties']);
              }

              if (this.service.formData.Latitude === null) {
                this.lat = 0;
              } else {
                this.lat = Number(this.service.formData.Latitude);
              }

              if (this.service.formData.Longitude === null) {
                this.lng = 0;
              } else {
                this.lng = Number(this.service.formData.Longitude);
              }

              this.createbuttontext = 'Update';
              this.btnText = 'Edit';
            } else {
              if (!this.currentUser.Permissions.PropertyCreate) {
                this.router.navigate(['/dashboard']);
              }

              var id = this.route1.snapshot.queryParamMap.get('id');
              var name = this.route1.snapshot.queryParamMap.get('name');
              var companyName = this.route1.snapshot.queryParamMap.get('companyname');
              this.createbuttontext = 'Create';
              this.btnText = 'Add';
              this.service.formData.CustomerId = id;
              this.service.formData.CustomerName = name;
              this.service.formData.CompanyName = companyName;
              this.service.formData.PropertyId = 'PRO';
              this.lat = 1.3521;
              this.lng = 103.8198;
              this.titleService.setTitle('Propert Create | Genic Solution');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.service.SetAsDefaultValue();
          }
        }, {
          key: "handleAddressChange",
          value: function handleAddressChange(address) {
            var _this5 = this;

            this.service.formData.AddressStreet1 = '';
            this.service.formData.AddressStreet2 = '';
            this.service.formData.AddressCity = '';
            this.service.formData.AddressUnitNo = '';
            this.service.formData.AddressState = '';
            this.service.formData.AddressZipCode = '';
            this.service.formData.AddressCountry = '';
            this.lat = address.geometry.location.lat();
            this.lng = address.geometry.location.lng();
            address.address_components.forEach(function (element) {
              switch (element.types[0]) {
                case 'postal_code':
                  {
                    _this5.postal_code = element.long_name;
                    break;
                  }

                case 'country':
                  {
                    _this5.country = element.long_name;
                    break;
                  }

                case 'administrative_area_level_1':
                  {
                    _this5.administrative_area_level_1 = element.long_name + ' ';
                    break;
                  }

                case 'administrative_area_level_2':
                  {
                    _this5.administrative_area_level_2 = element.long_name + ' ';
                    break;
                  }

                case 'locality':
                  {
                    _this5.locality = element.long_name + ' ';
                    break;
                  }

                case 'sublocality_level_1':
                  {
                    _this5.sublocality_level_1 = element.long_name + ' ';
                    break;
                  }

                case 'sublocality_level_2':
                  {
                    _this5.sublocality_level_2 = element.long_name + ' ';
                    break;
                  }

                case 'sublocality_level_3':
                  {
                    _this5.sublocality_level_3 = element.long_name + ' ';
                    break;
                  }

                case 'neighborhood':
                  {
                    _this5.neighborhood = element.long_name + ' ';
                    break;
                  }

                case 'route':
                  {
                    _this5.route = element.long_name + ' ';
                    break;
                  }

                case 'street_number':
                  {
                    _this5.street_number = element.long_name + ' ';
                    break;
                  }
              }
            });
            this.service.formData.Latitude = this.lat.toString();
            this.service.formData.Longitude = this.lng.toString();
            this.service.formData.AddressStreet1 = this.street_number + this.route;
            this.service.formData.AddressStreet2 = this.administrative_area_level_2 + this.sublocality_level_3 + this.sublocality_level_2 + this.sublocality_level_1 + this.neighborhood + this.administrative_area_level_1;
            this.service.formData.AddressCity = '';
            this.service.formData.AddressState = '';
            this.service.formData.AddressZipCode = this.postal_code;
            this.service.formData.AddressCountry = this.country;
            this.street_number = '';
            this.route = '';
            this.administrative_area_level_2 = '';
            this.sublocality_level_3 = '';
            this.sublocality_level_2 = '';
            this.sublocality_level_1 = '';
            this.neighborhood = '';
            this.administrative_area_level_1 = '';
            this.locality = '';
            this.postal_code = '';
            this.country = '';
          }
        }, {
          key: "findAddressByPostalCode",
          value: function findAddressByPostalCode(pc) {
            var _this6 = this;

            this.IsPostalSearch = true;

            if (pc.length === 6) {
              this.service.getAddressUsingPostalCode(Number(pc)).then(function (res) {
                _this6.addressresult = res.results;
              });
              setTimeout(function () {
                if (_this6.addressresult.length > 0) {
                  _this6.lat = _this6.addressresult[0].geometry.location.lat;
                  _this6.lng = _this6.addressresult[0].geometry.location.lng;

                  _this6.addressresult[0].address_components.forEach(function (element) {
                    switch (element.types[0]) {
                      case 'postal_code':
                        {
                          _this6.postal_code = element.long_name;
                          break;
                        }

                      case 'country':
                        {
                          _this6.country = element.long_name;
                          break;
                        }

                      case 'administrative_area_level_1':
                        {
                          _this6.administrative_area_level_1 = element.long_name + ' ';
                          break;
                        }

                      case 'administrative_area_level_2':
                        {
                          _this6.administrative_area_level_2 = element.long_name + ' ';
                          break;
                        }

                      case 'locality':
                        {
                          _this6.locality = element.long_name + ' ';
                          break;
                        }

                      case 'neighborhood':
                        {
                          _this6.neighborhood = element.long_name + ' ';
                          break;
                        }
                    }
                  });

                  _this6.service.formData.Latitude = _this6.lat.toString();
                  _this6.service.formData.Longitude = _this6.lng.toString();
                  _this6.service.formData.AddressStreet2 = _this6.administrative_area_level_2 + _this6.sublocality_level_3 + _this6.sublocality_level_2 + _this6.sublocality_level_1 + _this6.neighborhood + _this6.administrative_area_level_1 + _this6.locality;
                  _this6.service.formData.AddressCity = '';
                  _this6.service.formData.AddressState = '';
                  _this6.service.formData.AddressZipCode = _this6.postal_code;
                  _this6.service.formData.AddressCountry = _this6.country;
                }

                _this6.IsPostalSearch = false;
              }, 1000);
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            this.loader = true;

            if (this.service.formData.Latitude === '' || this.service.formData.Latitude === null || this.service.formData.Longitude === '' || this.service.formData.Longitude === null) {
              this.service.getLatLongUsingZipCode(Number(this.service.formData.AddressZipCode)).subscribe(function (res) {
                _this7.latlngOnZip = res.results;
                _this7.service.formData.Latitude = _this7.latlngOnZip[0].geometry.location.lat;
                _this7.service.formData.Longitude = _this7.latlngOnZip[0].geometry.location.lng;
              });
            }

            setTimeout(function () {
              if (_this7.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
                _this7.insertrecord();
              } else {
                _this7.updaterecord();
              }
            }, 1000);
            setTimeout(function () {
              _this7.loader = false;
            }, 2000);
          }
        }, {
          key: "insertrecord",
          value: function insertrecord() {
            var _this8 = this;

            this.service.postPropertyDetails(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this8.toastr.success('success', response.MessageDescription);

                  var des = 'Property of customer : ' + _this8.service.formData.CustomerName + ', is Added as : ' + _this8.service.formData.AddressStreet1 + ' ' + _this8.service.formData.AddressStreet2 + ' ' + _this8.service.formData.AddressUnitNo + +_this8.service.formData.AddressCountry + _this8.service.formData.AddressZipCode + ' , by user : ' + _this8.currentUser.UserName;
                  var Activity = 'New propery added : ' + _this8.service.formData.AddressStreet1 + ' ' + _this8.service.formData.AddressStreet2 + ' ' + _this8.service.formData.AddressUnitNo + +_this8.service.formData.AddressCountry + _this8.service.formData.AddressZipCode;

                  _this8.logService.postUserLog(_this8.currentUser.Id, _this8.currentUser.UserName, 'Property', _this8.service.formData.Id, 'Added', des, Activity).subscribe();

                  _this8.router.navigate(['/properties']);
                }

                if (response.Message === 'failure') {
                  _this8.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "updaterecord",
          value: function updaterecord() {
            var _this9 = this;

            this.service.putPropertyDetails(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this9.toastr.success('success', response.MessageDescription);

                  var des = 'Property of customer : ' + _this9.service.formData.CustomerName + ', is modified as : ' + _this9.service.formData.AddressStreet1 + ' ' + _this9.service.formData.AddressStreet2 + ' ' + _this9.service.formData.AddressUnitNo + +_this9.service.formData.AddressCountry + _this9.service.formData.AddressZipCode + ' , by user : ' + _this9.currentUser.UserName;
                  var Activity1 = 'Propery modified : ' + _this9.service.formData.AddressStreet1 + ' ' + _this9.service.formData.AddressStreet2 + ' ' + _this9.service.formData.AddressUnitNo + +_this9.service.formData.AddressCountry + _this9.service.formData.AddressZipCode + ' on dated : ' + new Date();

                  _this9.logService.postUserLog(_this9.currentUser.Id, _this9.currentUser.UserName, 'Property', _this9.service.formData.Id, 'Modify', des, Activity1).subscribe();

                  _this9.router.navigate(['/properties']);
                }

                if (response.Message === 'failure') {
                  _this9.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return PropertyAddComponent;
      }();

      PropertyAddComponent.ɵfac = function PropertyAddComponent_Factory(t) {
        return new (t || PropertyAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_5__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_6__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]));
      };

      PropertyAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyAddComponent,
        selectors: [["app-property-add"]],
        decls: 92,
        vars: 23,
        consts: [["autocomplete", "off", 3, "submit"], ["form", "ngForm"], ["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["routerLink", "/properties", 1, "kt-subheader__breadcrumbs-link"], ["type", "hidden", "name", "Id", 3, "ngModel", "ngModelChange"], ["Id", "ngModel"], ["type", "hidden", "name", "CustomerId", 3, "ngModel", "ngModelChange"], ["CustomerId", "ngModel"], ["type", "hidden", "name", "CustomerName", 3, "ngModel", "ngModelChange"], ["CustomerName", "ngModel"], ["type", "hidden", "name", "Latitude", 3, "ngModel", "ngModelChange"], ["Latitude", "ngModel"], ["type", "hidden", "name", "Longitude", 3, "ngModel", "ngModelChange"], ["Longitude", "ngModel"], [1, "creat-properties-form-main-section"], [1, "create_properties-filter_form", "create_properties-filter_form-1"], [1, "form-group", "form-group-last"], ["role", "alert", 1, "alert", "alert-secondary"], [1, "alert-icon"], [1, "fa", "fa-building"], [1, "new-properties-popupcreate-text"], [1, "row", "property-applications"], [1, "col-md-6"], [1, "create_properties-filter_form"], [1, "form-group", "row", "creat-properties-form-group"], [1, "col-lg-12"], [1, "form-group"], ["for", "", 1, "label"], ["name", "AddressStreet1", "ngx-google-places-autocomplete", "", "placeholder", "Address Street 1", "maxlength", "128", "autocomplete", "false", 1, "form-control", 3, "options", "ngModel", "onAddressChange", "ngModelChange"], ["AddressStreet1", "ngModel"], ["name", "AddressStreet2", "placeholder", "Address Street 2", "maxlength", "128", "autocomplete", "false", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressStreet2", "ngModel"], ["name", "AddressUnitNo", "placeholder", "Address Unit No", "maxlength", "16", "autocomplete", "false", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressUnitNo", "ngModel"], [1, "form-group", "row", "creat-properties-form-group", 2, "display", "none"], [1, "col-lg-6", "padding-right-mo-10", 2, "padding-right", "0px"], [1, "input-group"], ["name", "AddressZipCode", "min", "5", "maxlength", "6", "autocomplete", "false", "placeholder", "Postal Code", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressZipCode", "ngModel"], [1, "input-group-prepend"], [1, "input-group-text"], ["href", "javascript:;", 3, "click", 4, "ngIf"], [1, "col-lg-6", "padding-left-mo-10", 2, "padding-left", "0px"], ["name", "AddressCountry", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressCountry", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "Remarks", "cols", "30", "rows", "10", "maxlength", "1024", "placeholder", "Remarks", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Remarks", "ngModel"], [1, "col-md-6", "map-property"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude"], ["class", "modal-footer create-proprty-model-footer", 4, "ngIf"], ["href", "javascript:;", 3, "click"], ["class", "la la-refresh", 4, "ngIf"], ["class", "la la-spinner fa-spin", 4, "ngIf"], [1, "la", "la-refresh"], [1, "la", "la-spinner", "fa-spin"], [3, "value"], [1, "modal-footer", "create-proprty-model-footer"], ["type", "button", "routerLink", "/properties", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-brand", 3, "disabled"], ["type", "submit", "disabled", "disabled", 1, "btn", "btn-brand"]],
        template: function PropertyAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PropertyAddComponent_Template_form_submit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Properties ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyAddComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.service.formData.Id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyAddComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.service.formData.CustomerId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyAddComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.service.formData.CustomerName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyAddComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.service.formData.Latitude = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyAddComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.service.formData.Longitude = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Address Street 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 37, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAddressChange", function PropertyAddComponent_Template_input_onAddressChange_47_listener($event) {
              return ctx.handleAddressChange($event);
            })("ngModelChange", function PropertyAddComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.service.formData.AddressStreet1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Address Street 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 39, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyAddComponent_Template_input_ngModelChange_54_listener($event) {
              return ctx.service.formData.AddressStreet2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Address Unit No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 41, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyAddComponent_Template_input_ngModelChange_61_listener($event) {
              return ctx.service.formData.AddressUnitNo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Postal Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 46, 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyAddComponent_Template_input_ngModelChange_69_listener($event) {
              return ctx.service.formData.AddressZipCode = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, PropertyAddComponent_a_73_Template, 3, 2, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 52, 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyAddComponent_Template_select_ngModelChange_78_listener($event) {
              return ctx.service.formData.AddressCountry = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, PropertyAddComponent_option_82_Template, 2, 2, "option", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "textarea", 56, 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropertyAddComponent_Template_textarea_ngModelChange_84_listener($event) {
              return ctx.service.formData.Remarks = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "agm-map", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "agm-marker", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, PropertyAddComponent_div_90_Template, 5, 2, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, PropertyAddComponent_div_91_Template, 3, 0, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.btnText, " property ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.CustomerId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.CustomerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Latitude);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Longitude);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Property for ", ctx.service.formData.CustomerName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options)("ngModel", ctx.service.formData.AddressStreet1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressStreet2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressUnitNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressZipCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.AddressZipCode.toString().length === 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.AddressCountry);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countrylist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.Remarks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmMarker"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;padding: 10px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;padding: 10px;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#EAEAEA;color:black !important;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{background-color:white !important;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{color:black !important;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;bottom:0;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]   .btn.btn-brand[_ngcontent-%COMP%]{background-color:#2C77F4 !important;border:1px solid transparent !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c3e7fa !important;}\r\n.kt-iconbox--wave[_ngcontent-%COMP%]{background-color: #ff853329;border: 1px solid #ff8533;}\r\n.kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{fill: #ff8533;}\r\n.btn-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%], .btn-group-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%]    > .btn[_ngcontent-xmv-c1][_ngcontent-%COMP%]{padding:0.5rem 0.7rem;}\r\n.table-checkable[_ngcontent-%COMP%]   .customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:0.5rem 0.7rem;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\n.myselectClass[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color: #fff !important;background-color: #ff8533 !important;}\r\n.switcher-customer[_ngcontent-%COMP%]{top:-15px;position:relative}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-color:#FF8533 !important;}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-left:1px solid #ddd !important;border-right:1px solid #ddd !important;}\r\n.cust-border[_ngcontent-%COMP%] { border: 1px solid rgb(192, 183, 183); text-align: center;}\r\n.cust-border-1[_ngcontent-%COMP%] { text-align: center;}\r\n.cust-border-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 60px; color: #959191; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydGllcy9wcm9wZXJ0eS1saXN0L3Byb3BlcnR5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO0FBQzFELG9DQUFvQyxtQkFBbUIsQ0FBQztBQUN4RCx5Q0FBeUMsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3RHLHVDQUF1QyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ2xFLGdDQUFnQyx3QkFBd0IsQ0FBQztBQUN6RCxrQ0FBa0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDN0UsaUNBQWlDLGtCQUFrQixDQUFDO0FBQ3BELGlDQUFpQyx3QkFBd0IsQ0FBQztBQUMxRCw2QkFBNkIsc0JBQXNCLENBQUMsV0FBVyxDQUFDO0FBQ2hFLDBDQUEwQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7QUFDekUsOENBQThDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQztBQUN2Rix5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUM7QUFDdkUsZUFBZSx3QkFBd0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUNsRSw0QkFBNEIsVUFBVSxDQUFDLHlCQUF5QixDQUFDO0FBQ2pFLGtDQUFrQyx5QkFBeUIsQ0FBQztBQUM1RCx3RUFBd0UseUJBQXlCLENBQUMsY0FBYztBQUNoSCx5R0FBeUcsa0JBQWtCLEVBQUU7QUFDN0gsa0RBQWtELHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN2Rix3REFBd0Qsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQy9GLHFFQUFxRSxXQUFXLENBQUM7QUFDakYsNkNBQTZDLFdBQVcsQ0FBQztBQUN6RCwyREFBMkQsd0JBQXdCLENBQUM7QUFDcEYsbUVBQW1FLGVBQWUsQ0FBQztBQUNuRiwyREFBMkQsZ0JBQWdCLENBQUM7QUFDNUUsMkNBQTJDLGNBQWMsQ0FBQztBQUMxRCxpQ0FBaUMsY0FBYyxDQUFDO0FBQ2hELHVCQUF1QixnQkFBZ0IsQ0FBQztBQUN4QywyQ0FBMkMsK0JBQStCLENBQUM7QUFDM0UsMkJBQTJCLGFBQWEsQ0FBQztBQUN6Qyw2QkFBNkIsaUJBQWlCLENBQUM7QUFDL0MsaUNBQWlDLGlDQUFpQyxDQUFDO0FBQ25FLDJCQUEyQixzQkFBc0IsQ0FBQztBQUNsRCwyREFBMkQsd0JBQXdCLENBQUMsc0JBQXNCLENBQUM7QUFDM0csNkNBQTZDLHNCQUFzQixDQUFDO0FBQ3BFLG1FQUFtRSxpQ0FBaUMsQ0FBQztBQUNyRyxpQ0FBaUMsc0JBQXNCLENBQUM7QUFDeEQsMENBQTBDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7QUFDM0YseURBQXlELG1DQUFtQyxDQUFDLHVDQUF1QyxDQUFDO0FBQ3JJLDJDQUEyQyx3QkFBd0IsQ0FBQztBQUNwRSxrQkFBa0IsMkJBQTJCLENBQUMseUJBQXlCLENBQUM7QUFDeEUsc0JBQXNCLGFBQWEsQ0FBQztBQUNwQyx1RkFBdUYscUJBQXFCLENBQUM7QUFDN0csMERBQTBELHFCQUFxQixDQUFDO0FBQ2hGLHFCQUFxQixtQkFBbUIsQ0FBQztBQUN6QyxzQkFBc0Isc0JBQXNCLENBQUMsb0NBQW9DLENBQUM7QUFDbEYsbUJBQW1CLFNBQVMsQ0FBQyxpQkFBaUI7QUFDOUMsc0NBQXNDLCtCQUErQixDQUFDO0FBQ3RFLHNDQUFzQyxxQ0FBcUMsQ0FBQyxzQ0FBc0MsQ0FBQztBQUNuSCxlQUFlLG9DQUFvQyxFQUFFLGtCQUFrQixDQUFDO0FBQ3hFLGlCQUFpQixrQkFBa0IsQ0FBQztBQUNwQyxxQkFBcUIsZUFBZSxFQUFFLGNBQWMsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb3BlcnRpZXMvcHJvcGVydHktbGlzdC9wcm9wZXJ0eS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6ICNmZjg1MzM7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllc3tiYWNrZ3JvdW5kOiAjYzNlN2ZhO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgLmJ0bntwYWRkaW5nOiAwLjI1cmVtIDAuN3JlbTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7Y29sb3I6d2hpdGU7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllcyBoNXtjb2xvcjpibGFjaztmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkubW9kYWwtYm9keSBwe2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjazt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5IC5mb3JuLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5YSAuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRDQTt9XHJcbi5uZXdfY2xpZW50c19wcm9wZXJ0aWVzX2JvZHl7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXI6bm9uZTt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjE1cHg7cGFkZGluZzogMTBweDt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmEzODtwYWRkaW5nOiAxMHB4O31cclxuLmt0LXdpZGdldDQua3Qtc2Nyb2xsLnBze292ZXJmbG93LXk6YXV0byAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6MTBweDt9XHJcbi5rdC1mb250LWJyYW5ke2NvbG9yOiNhZWFlYWUgIWltcG9ydGFudDtmb250LXNpemU6MTJweCAhaW1wb3J0YW50O31cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOiA2cHg7YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTt9XHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NENBO31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvLnByb3BlcnR5LWxpc3QtZHluYW1pYy1jbGFzcyAuYnRuLWxhYmVsLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhIDtjb2xvcjogIzAwODRDQX1cclxuLmN1c3RvbWVyLWxpc3QtbWFpbi1zZWN0aW9uIC5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0tLXNlYXJjaC5kcm9wZG93bi5ib290bS1maWx0ZXJ7bWFyZ2luLWJvdHRvbToyMHB4Ozt9XHJcbi5rdC1zZWxlY3RwaWNrZXIuYnRuLmJ0bi1sYWJlbC1zdWNjZXNzLnB1bGwtcmlnaHR7YmFja2dyb3VuZC1jb2xvcjojRkY4NTMzO2NvbG9yOndoaXRlO31cclxuLmt0LXNlbGVjdHBpY2tlci5idG4uYnRuLWxhYmVsLXN1Y2Nlc3MucHVsbC1yaWdodDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmE7Y29sb3I6IzAwODRDQTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5uZXctcHJvcGVydGllcy1wb3B1cGNyZWF0ZS10ZXh0e2NvbG9yOndoaXRlO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5hbGVydC1pY29uIGl7Y29sb3I6d2hpdGU7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwODRjYTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybXtwYWRkaW5nOjBweCAwcHg7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e3BhZGRpbmc6OHB4IDIwcHg7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmFsZXJ0LWljb257Zm9udC1zaXplOjIwcHg7fVxyXG4ubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1hcHBsaWNhdGlvbnN7cGFkZGluZzowcHggMTVweDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjAuNHJlbSAhaW1wb3J0YW50O31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIGF7ZGlzcGxheTpibG9jazt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyBhIGl7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0tMXtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNkN2Q3ZDc7fVxyXG4uc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcntoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNFQUVBRUE7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuYWxlcnQtaWNvbiBpe2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm17YmFja2dyb3VuZC1jb2xvcjp3aGl0ZSAhaW1wb3J0YW50O31cclxuLm5ldy1wcm9wZXJ0aWVzLXBvcHVwY3JlYXRlLXRleHR7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVye3Bvc2l0aW9uOnN0aWNreTtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtib3R0b206MDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVyIC5idG4uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzJDNzdGNCAhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyAuYnRuLWdyb3VwIC5idG4gaXtjb2xvcjojYzNlN2ZhICFpbXBvcnRhbnQ7fVxyXG4ua3QtaWNvbmJveC0td2F2ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzMjk7Ym9yZGVyOiAxcHggc29saWQgI2ZmODUzMzt9XHJcbi5rdC1zdmctaWNvbiBnIFtmaWxsXXtmaWxsOiAjZmY4NTMzO31cclxuLmJ0bi1zbVtfbmdjb250ZW50LXhtdi1jMV0sIC5idG4tZ3JvdXAtc21bX25nY29udGVudC14bXYtYzFdID4gLmJ0bltfbmdjb250ZW50LXhtdi1jMV17cGFkZGluZzowLjVyZW0gMC43cmVtO31cclxuLnRhYmxlLWNoZWNrYWJsZSAuY3VzdG9tZXItbGlzdC12aWV3LWluZm8gLmJ0bi1ncm91cCAuYnRue3BhZGRpbmc6MC41cmVtIDAuN3JlbTt9XHJcbi5kcm9wZG93bi1tZW51LnNob3cge21hcmdpbi1sZWZ0OiAtMTA1cHg7fVxyXG4ubXlzZWxlY3RDbGFzcyBidXR0b257Y29sb3I6ICNmZmYgIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzICFpbXBvcnRhbnQ7fVxyXG4uc3dpdGNoZXItY3VzdG9tZXJ7dG9wOi0xNXB4O3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG4uY29sLW1kLTEyLnNlY3Rpb24tY2xpZW50LXJlcXVzdC1mb3Jte2JvcmRlci1jb2xvcjojRkY4NTMzICFpbXBvcnRhbnQ7fVxyXG4uY29sLW1kLTEyLnNlY3Rpb24tY2xpZW50LXJlcXVzdC1mb3Jte2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7fVxyXG4uY3VzdC1ib3JkZXIgeyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkyLCAxODMsIDE4Myk7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5jdXN0LWJvcmRlci0xIHsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLmN1c3QtYm9yZGVyLTEgYSBpIHsgZm9udC1zaXplOiA2MHB4OyBjb2xvcjogIzk1OTE5MTsgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyAddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-property-add',
            templateUrl: './property-add.component.html',
            styleUrls: ['../property-list/property-list.component.css']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_5__["GenicProfileService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_6__["UserlogService"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Qxq0":
    /*!*************************************************************!*\
      !*** ./src/app/application/properties/properties.module.ts ***!
      \*************************************************************/

    /*! exports provided: PropertiesModule */

    /***/
    function Qxq0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertiesModule", function () {
        return PropertiesModule;
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


      var ngx_select2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-select2 */
      "u1nn");
      /* harmony import */


      var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-select-dropdown */
      "8bGj");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _property_add_property_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./property-add/property-add.component */
      "PR44");
      /* harmony import */


      var _property_details_property_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./property-details/property-details.component */
      "ZIf9");
      /* harmony import */


      var _properties_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./properties.component */
      "/2zj");
      /* harmony import */


      var _property_list_property_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./property-list/property-list.component */
      "YE/Z");
      /* harmony import */


      var _property_popup_property_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./property-popup/property-popup.component */
      "anw1");
      /* harmony import */


      var _ticket_history_ticket_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./ticket-history/ticket-history.component */
      "xShS");
      /* harmony import */


      var _ticket_history_details_ticket_history_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./ticket-history-details/ticket-history-details.component */
      "G0yR");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "7itd");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__);
      /* harmony import */


      var src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module */
      "7kmZ");
      /* harmony import */


      var src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Team-List/TicketTeamList.module */
      "5ngV");
      /* harmony import */


      var src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.module */
      "3jFn");
      /* harmony import */


      var src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module */
      "A6Rf");

      var routes = [{
        path: '',
        component: _properties_component__WEBPACK_IMPORTED_MODULE_17__["propertiesComponent"],
        children: [{
          path: '',
          component: _property_list_property_list_component__WEBPACK_IMPORTED_MODULE_18__["PropertyListComponent"]
        }, {
          path: 'property-add',
          component: _property_add_property_add_component__WEBPACK_IMPORTED_MODULE_15__["PropertyAddComponent"]
        }, {
          path: 'property-edit',
          component: _property_add_property_add_component__WEBPACK_IMPORTED_MODULE_15__["PropertyAddComponent"]
        }, {
          path: 'property-popup',
          component: _property_popup_property_popup_component__WEBPACK_IMPORTED_MODULE_19__["PropertyPopupComponent"]
        }, {
          path: 'property-details',
          component: _property_details_property_details_component__WEBPACK_IMPORTED_MODULE_16__["PropertyDetailsComponent"]
        }, {
          path: 'ticket-history-property-wise',
          component: _ticket_history_ticket_history_component__WEBPACK_IMPORTED_MODULE_20__["TicketHistoryComponent"]
        }, {
          path: 'ticket-history-view-details/:Id',
          component: _ticket_history_details_ticket_history_details_component__WEBPACK_IMPORTED_MODULE_21__["TicketHistoryDetailsComponent"]
        }]
      }];

      var PropertiesModule = function PropertiesModule() {
        _classCallCheck(this, PropertiesModule);
      };

      PropertiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PropertiesModule
      });
      PropertiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PropertiesModule_Factory(t) {
          return new (t || PropertiesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], ngx_select2__WEBPACK_IMPORTED_MODULE_6__["LSelect2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_7__["SelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__["GooglePlaceModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_23__["TicketStatusComponentModule"], src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_26__["TicketIconAttachmentModule"], src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_24__["TicketTeamListModule"], src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_25__["TicketDateTimeFormatModule"]], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PropertiesModule, {
          declarations: [_properties_component__WEBPACK_IMPORTED_MODULE_17__["propertiesComponent"], _property_list_property_list_component__WEBPACK_IMPORTED_MODULE_18__["PropertyListComponent"], _property_add_property_add_component__WEBPACK_IMPORTED_MODULE_15__["PropertyAddComponent"], _property_details_property_details_component__WEBPACK_IMPORTED_MODULE_16__["PropertyDetailsComponent"], _property_popup_property_popup_component__WEBPACK_IMPORTED_MODULE_19__["PropertyPopupComponent"], _ticket_history_ticket_history_component__WEBPACK_IMPORTED_MODULE_20__["TicketHistoryComponent"], _ticket_history_details_ticket_history_details_component__WEBPACK_IMPORTED_MODULE_21__["TicketHistoryDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], ngx_select2__WEBPACK_IMPORTED_MODULE_6__["LSelect2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_7__["SelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__["GooglePlaceModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_23__["TicketStatusComponentModule"], src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_26__["TicketIconAttachmentModule"], src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_24__["TicketTeamListModule"], src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_25__["TicketDateTimeFormatModule"]],
          exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertiesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_properties_component__WEBPACK_IMPORTED_MODULE_17__["propertiesComponent"], _property_list_property_list_component__WEBPACK_IMPORTED_MODULE_18__["PropertyListComponent"], _property_add_property_add_component__WEBPACK_IMPORTED_MODULE_15__["PropertyAddComponent"], _property_details_property_details_component__WEBPACK_IMPORTED_MODULE_16__["PropertyDetailsComponent"], _property_popup_property_popup_component__WEBPACK_IMPORTED_MODULE_19__["PropertyPopupComponent"], _ticket_history_ticket_history_component__WEBPACK_IMPORTED_MODULE_20__["TicketHistoryComponent"], _ticket_history_details_ticket_history_details_component__WEBPACK_IMPORTED_MODULE_21__["TicketHistoryDetailsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], ngx_select2__WEBPACK_IMPORTED_MODULE_6__["LSelect2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_7__["SelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__["GooglePlaceModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_23__["TicketStatusComponentModule"], src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_26__["TicketIconAttachmentModule"], src_app_generic_utils_Ticket_Team_List_TicketTeamList_module__WEBPACK_IMPORTED_MODULE_24__["TicketTeamListModule"], src_app_generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_module__WEBPACK_IMPORTED_MODULE_25__["TicketDateTimeFormatModule"]],
            exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "YE/Z":
    /*!*********************************************************************************!*\
      !*** ./src/app/application/properties/property-list/property-list.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: PropertyListComponent */

    /***/
    function YEZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyListComponent", function () {
        return PropertyListComponent;
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


      var _property_popup_property_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../property-popup/property-popup.component */
      "anw1");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/customer.service */
      "0zL+");
      /* harmony import */


      var _services_property_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../services/property.service */
      "Pffd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _services_ticket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../services/ticket.service */
      "KPvW");
      /* harmony import */


      var _services_downloads_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../services/downloads.service */
      "iHRC");
      /* harmony import */


      var _services_userlog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../services/userlog.service */
      "V05N");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../services */
      "o0su");
      /* harmony import */


      var _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-select-dropdown */
      "8bGj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function PropertyListComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyListComponent_div_13_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.OpenAddClienDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Property");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PropertyListComponent_div_99_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Now ", ctx_r8.propertySyncFor, " address is synchronize");
        }
      }

      function PropertyListComponent_div_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Check Address for synchronize ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PropertyListComponent_div_99_div_2_Template, 3, 1, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.propertySyncFor !== "");
        }
      }

      function PropertyListComponent_div_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PropertyListComponent_table_115_tr_16_li_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyListComponent_table_115_tr_16_li_29_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var x_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.pupulatecustomer(x_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PropertyListComponent_table_115_tr_16_li_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyListComponent_table_115_tr_16_li_30_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var x_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.detailsproperty(x_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "InactiveBackColor": a0
        };
      };

      function PropertyListComponent_table_115_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Company Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact Person: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyListComponent_table_115_tr_16_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var x_r11 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.OnTicketHistory(x_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 91, 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PropertyListComponent_table_115_tr_16_Template_input_change_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var x_r11 = ctx.$implicit;
            var i_r12 = ctx.index;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.onPropertyStatusChange($event, x_r11.Id, i_r12);
          })("ngModelChange", function PropertyListComponent_table_115_tr_16_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var x_r11 = ctx.$implicit;
            return x_r11.IsActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "label", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PropertyListComponent_table_115_tr_16_li_29_Template, 3, 0, "li", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PropertyListComponent_table_115_tr_16_li_30_Template, 3, 0, "li", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", x_r11.CustomerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, x_r11.IsActive === false));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r11.PropertyId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r11.CompanyName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r11.CustomerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", x_r11.AddressStreet1, " ", x_r11.AddressStreet2, " ", x_r11.AddressUnitNo, " ", x_r11.AddressCountry, " ", x_r11.AddressZipCode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", x_r11.TotalTicket, " ", ctx_r9.currentUser.Ticket, "s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "example_", i_r12, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r11.IsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "example_", i_r12, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.currentUser.Permissions.PropertyEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.currentUser.Permissions.PropertyView);
        }
      }

      function PropertyListComponent_table_115_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Record!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PropertyListComponent_table_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Property\xA0Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Company Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PropertyListComponent_table_115_tr_16_Template, 31, 19, "tr", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PropertyListComponent_table_115_td_19_Template, 3, 0, "td", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r3.dtOptions)("dtTrigger", ctx_r3.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total ", ctx_r3.currentUser.Ticket, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.service.locallist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.service.locallist.length === 0);
        }
      }

      function PropertyListComponent_ng_container_153_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var s_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r26, " ");
        }
      }

      function PropertyListComponent_ng_container_155_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var e_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r27, " ");
        }
      }

      var PropertyListComponent = /*#__PURE__*/function () {
        function PropertyListComponent(titleService, customerservice, service, dialog, router, toastr, ticketService, downloadService, logService, loginservice, genicprofileservice) {
          var _this10 = this;

          _classCallCheck(this, PropertyListComponent);

          this.titleService = titleService;
          this.customerservice = customerservice;
          this.service = service;
          this.dialog = dialog;
          this.router = router;
          this.toastr = toastr;
          this.ticketService = ticketService;
          this.downloadService = downloadService;
          this.logService = logService;
          this.loginservice = loginservice;
          this.genicprofileservice = genicprofileservice;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.localCustomerId = null;
          this.config = {
            displayKey: 'FirstName',
            search: true,
            limitTo: 10,
            height: '400px'
          };
          this.PropertyOptions = [];
          this.ErrorRes = [];
          this.SuccessRes = [];
          this.loginservice.currentUser.subscribe(function (x) {
            return _this10.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
          this.customerservice.CustomerList = [];
          this.propertySync = false;
          this.dtOptions = {
            pagingType: 'full_numbers',
            paging: true,
            ordering: false,
            lengthMenu: [5, 10, 25, 50, 75, 100]
          };
        }

        _createClass(PropertyListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            if (!this.currentUser.Permissions.PropertyView) {
              this.router.navigate(['/dashboard']);
            }

            this.titleService.setTitle('Properties | Genic Solution');
            this.genicprofileservice.TicketFilter.IsReady = false;
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
            this.excelDataTemplatePath = this.localPrependUrl + '/assets/ExcelDataTemplate/PropertyDatabaseSheet.xlsx';
            this.dtOptions = {
              pagingType: 'full_numbers',
              paging: true,
              ordering: false,
              lengthMenu: [5, 10, 25, 50, 75, 100]
            };
            this.dropdownbtnavgrev = 'All Customers';
            this.service.refrestPropertylist(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this11.service.Propertylist = _this11.service.locallist = response.result;
                  setTimeout(function () {
                    _this11.dtTrigger.next();
                  }, 200);
                }

                if (response.Message === 'failure') {
                  _this11.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.customerservice.getCustomerListSync(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this11.customerservice.CustomerList = _this11.customerservice.CustomerLocalList = response.result;
                }

                if (response.Message === 'failure') {
                  _this11.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.customerservice.getCustomerListOnProperty(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this11.customerservice.LocalCustList = _this11.customerservice.CustomerList = response.result;
                  setTimeout(function () {
                    _this11.PropertyOptions = _this11.customerservice.LocalCustList;
                  }, 200);
                }

                if (response.Message === 'failure') {
                  _this11.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
            setTimeout(function () {
              _this11.LatLongSync();
            }, 5000);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this12 = this;

            setTimeout(function () {
              _this12.refreshCount();
            }, 5000);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "refreshCount",
          value: function refreshCount() {
            var _this13 = this;

            this.TotalCustomerCount = this.customerservice.CustomerList.length;
            this.TotalPropertyCount = this.service.Propertylist.length;
            var activecustomerlist = this.customerservice.CustomerList.filter(function (x) {
              return x.Status === true;
            });
            var custCount = this.service.Propertylist.filter(function (x) {
              return activecustomerlist.map(function (y) {
                return y.Id;
              }).includes(x.CustomerId) && x.IsActive === true;
            }).length;
            this.TotalActiveProperty = custCount;
            var suspendedlist = this.customerservice.CustomerList.filter(function (x) {
              return x.Status === false;
            });
            var suspendedlistCount = this.service.Propertylist.filter(function (x) {
              return suspendedlist.map(function (y) {
                return y.Id;
              }).includes(x.CustomerId) && x.IsActive === true;
            });
            this.privatlist = suspendedlistCount;
            this.TotalSuspendedOrCancelled = this.TotalPropertyCount - custCount;
            var demoClasses = null;
            demoClasses = document.querySelectorAll('.property-list-dynamic-class');
            demoClasses.forEach(function (element) {
              _this13.privatlist.forEach(function (el) {
                if (element.id === el.CustomerId) {
                  element.style.color = '#fd397a';
                  element.style.background = '#f9c5d6';
                }
              });
            });
          }
        }, {
          key: "loadPropertyOnCustomerChange",
          value: function loadPropertyOnCustomerChange(event) {
            if (event.value === undefined) {
              this.service.locallist = this.service.Propertylist;
            } else {
              var activecustomerlist = this.customerservice.LocalCustList.filter(function (x) {
                return x.Id === event.value.Id;
              });
              this.service.locallist = this.service.Propertylist.filter(function (x) {
                return activecustomerlist.map(function (y) {
                  return y.Id;
                }).includes(x.CustomerId);
              });
            }
          }
        }, {
          key: "OpenAddClienDialog",
          value: function OpenAddClienDialog() {
            var _this14 = this;

            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.width = '50%';
            dialogConfig.data = {};
            this.dialog.open(_property_popup_property_popup_component__WEBPACK_IMPORTED_MODULE_2__["PropertyPopupComponent"], dialogConfig).afterClosed().subscribe(function (res) {
              if (res === '') {} else {
                if (res === undefined) {
                  _this14.router.navigate(['/customers/customer-add/']);
                } else {
                  _this14.router.navigate(['/properties/property-add/'], {
                    queryParams: {
                      'id': res.id,
                      'name': res.name,
                      'companyname': res.companyName
                    }
                  });
                }
              }
            });
          }
        }, {
          key: "pupulatecustomer",
          value: function pupulatecustomer(x) {
            this.service.formData = Object.assign({}, x);
            this.router.navigate(['/properties/property-edit/']);
          }
        }, {
          key: "detailsproperty",
          value: function detailsproperty(x) {
            this.service.formData = Object.assign([], x);
            this.router.navigate(['/properties/property-details/']);
          }
        }, {
          key: "onPropertyStatusChange",
          value: function onPropertyStatusChange(e, id, index) {
            var _this15 = this;

            this.service.putPropertyUpdateStatus(id).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this15.toastr.success('success', response.MessageDescription);

                  var des = 'Property of Customer ' + _this15.service.formData.CustomerName + 'is modified by user : ' + _this15.currentUser.UserName;
                  var Activity4 = 'Property of Customer ' + _this15.service.formData.CustomerName + 'is modified by user : ' + _this15.currentUser.UserName;

                  _this15.logService.postUserLog(_this15.currentUser.Id, _this15.currentUser.UserName, 'Property', _this15.service.formData.Id, 'Modify', des, Activity4).subscribe();

                  _this15.service.locallist[index].IsActive = e.target.checked;
                }

                if (response.Message === 'failure') {
                  _this15.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "OnTicketHistory",
          value: function OnTicketHistory(x) {
            this.ticketService.formData.CustomerId = x.CustomerId;
            this.ticketService.formData.PropertyId = x.Id;
            this.router.navigate(['/properties/ticket-history-property-wise']);
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            this.downloadService.downloadFromServer('property', this.currentUser.Token).then(function (blob) {
              Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, 'property_' + new Date().getTime() + '.xlsx');
            });
          } // open file upload dialog

        }, {
          key: "openPopToUploadPro",
          value: function openPopToUploadPro() {
            var element = document.getElementById('PropBulkUpload');
            element.click();
          } // build upload customer property

        }, {
          key: "BuldCustomerUpload",
          value: function BuldCustomerUpload(file) {
            var _this16 = this;

            var ExcelfileToUpload = file.item(0);
            var filExt = ExcelfileToUpload.name.split('.');
            var Ext1 = filExt[1];

            if (Ext1 === 'xls' || Ext1 === 'xlsx') {
              var reader = new FileReader();

              reader.onload = function (event) {
                var ExcelLocalURL = event.target.result;

                _this16.customerservice.SetAsDefaultValues();

                _this16.customerservice.formData.Latitude = Ext1;
                _this16.customerservice.formData.CustomerLogo = ExcelLocalURL.split(',')[1];

                _this16.customerservice.CustomerPropertyBulkUpload(_this16.currentUser.Id).subscribe(function (res) {
                  if (res) {
                    var TResponse = new Object();
                    TResponse = res;
                    _this16.ErrorRes = TResponse.ErrorResponse;
                    _this16.SuccessRes = TResponse.SuccessResponse;
                    setTimeout(function () {
                      _this16.service.refrestPropertylist(_this16.currentUser.Token);

                      _this16.refreshCount();
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
        }, {
          key: "LatLongSync",
          value: function LatLongSync() {
            var _this17 = this;

            var propertyModue = ['Customer', 'Property', 'Engineer'];
            propertyModue.forEach(function (pm) {
              _this17.propertySync = true;

              _this17.service.CustomerAddressLatLongGet(pm).subscribe(function (res) {
                _this17.propertySync = true;

                if (res) {
                  var propList = res;
                  _this17.propertySyncFor = pm;
                  propList.forEach(function (w) {
                    _this17.propertySync = true;

                    _this17.service.getAddressUsingPostalCodeSync(Number(w.AddressZipCode)).subscribe(function (res1) {
                      if (res1) {
                        var addressresult = res1;
                        var addressresult1 = addressresult.results;

                        if (addressresult1.length > 0) {
                          _this17.service.formData.Id = w.Id;
                          _this17.service.formData.CustomerId = '00000000-0000-0000-0000-000000000000';
                          _this17.service.formData.AddressZipCode = w.AddressZipCode;
                          _this17.service.formData.Latitude = addressresult1[0].geometry.location.lat;
                          _this17.service.formData.Longitude = addressresult1[0].geometry.location.lng;

                          _this17.service.CustomerAddressLatLongGetUpdate(pm).subscribe(function (res2) {
                            if (res2) {
                              var updaterespone = res2;
                              _this17.service.formData.Id = '00000000-0000-0000-0000-000000000000';
                              _this17.service.formData.CustomerId = '00000000-0000-0000-0000-000000000000';
                              _this17.service.formData.AddressZipCode = '';
                              _this17.service.formData.Latitude = '';
                              _this17.service.formData.Longitude = '';
                              _this17.propertySync = false;
                            }
                          }, function (error) {
                            return console.log(error);
                          });

                          _this17.propertySyncFor = '';
                          _this17.propertySync = false;
                        }
                      }
                    }, function (error) {
                      return console.log(error);
                    });

                    _this17.propertySync = false;
                  });
                  _this17.propertySyncFor = '';
                  _this17.propertySync = false;
                }
              }, function (error) {
                return console.log(error);
              });

              _this17.propertySync = false;
            });
          }
        }]);

        return PropertyListComponent;
      }();

      PropertyListComponent.ɵfac = function PropertyListComponent_Factory(t) {
        return new (t || PropertyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_9__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_service__WEBPACK_IMPORTED_MODULE_12__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_downloads_service__WEBPACK_IMPORTED_MODULE_13__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userlog_service__WEBPACK_IMPORTED_MODULE_14__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_16__["GenicProfileService"]));
      };

      PropertyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyListComponent,
        selectors: [["app-property-list"]],
        viewQuery: function PropertyListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 156,
        vars: 14,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], ["class", "kt-subheader__wrapper", 4, "ngIf"], [1, "kt-subheader__wrapper"], ["on", "", "id", "ddPropertyId", "data-toggle", "modal", "data-target", "#BuidUploadPropertyPop", 1, "btn", "btn-brand", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-file"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-widget17__items"], [1, "row", "mrg-top-10"], [1, "col-lg-3", "col-md-3"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--brand", "kt-iconbox--animate-slower"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M13.5,21 L13.5,18 C13.5,17.4477153 13.0522847,17 12.5,17 L11.5,17 C10.9477153,17 10.5,17.4477153 10.5,18 L10.5,21 L5,21 L5,4 C5,2.8954305 5.8954305,2 7,2 L17,2 C18.1045695,2 19,2.8954305 19,4 L19,21 L13.5,21 Z M9,4 C8.44771525,4 8,4.44771525 8,5 L8,6 C8,6.55228475 8.44771525,7 9,7 L10,7 C10.5522847,7 11,6.55228475 11,6 L11,5 C11,4.44771525 10.5522847,4 10,4 L9,4 Z M14,4 C13.4477153,4 13,4.44771525 13,5 L13,6 C13,6.55228475 13.4477153,7 14,7 L15,7 C15.5522847,7 16,6.55228475 16,6 L16,5 C16,4.44771525 15.5522847,4 15,4 L14,4 Z M9,8 C8.44771525,8 8,8.44771525 8,9 L8,10 C8,10.5522847 8.44771525,11 9,11 L10,11 C10.5522847,11 11,10.5522847 11,10 L11,9 C11,8.44771525 10.5522847,8 10,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 L8,14 C8,14.5522847 8.44771525,15 9,15 L10,15 C10.5522847,15 11,14.5522847 11,14 L11,13 C11,12.4477153 10.5522847,12 10,12 L9,12 Z M14,12 C13.4477153,12 13,12.4477153 13,13 L13,14 C13,14.5522847 13.4477153,15 14,15 L15,15 C15.5522847,15 16,14.5522847 16,14 L16,13 C16,12.4477153 15.5522847,12 15,12 L14,12 Z", "id", "Combined-Shape", "fill", "#000000"], ["id", "Rectangle-Copy-2", "fill", "#FFFFFF", "x", "13", "y", "8", "width", "3", "height", "3", "rx", "1"], ["d", "M4,21 L20,21 C20.5522847,21 21,21.4477153 21,22 L21,22.4 C21,22.7313708 20.7313708,23 20.4,23 L3.6,23 C3.26862915,23 3,22.7313708 3,22.4 L3,22 C3,21.4477153 3.44771525,21 4,21 Z", "id", "Rectangle-2", "fill", "#000000", "opacity", "0.3"], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], ["href", "javascript:;", 1, "kt-link"], [1, "kt-iconbox__content"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--success", "kt-iconbox--animate-slow"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--warning", "kt-iconbox--animate-fast"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--danger", "kt-iconbox--animate-faster"], [1, "kt-section", "kt-drop-section"], [1, "kt-section__content"], [1, "row"], [1, "col-md-12"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "dropdown"], [1, "kt-header__topbar-wrapper"], [1, "kt-input-icon", "kt-input-icon--right", "kt-subheader__search"], ["class", "alert alert-warning", 4, "ngIf"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "scFilter"], [2, "width", "256px"], ["tabindex", "0", "name", "PropertyOptions", 1, "myselectClass", 3, "multiple", "config", "options", "change"], [1, "btnexport1"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "panel-body"], ["class", " col-md-12 alert alert-info", 4, "ngIf"], ["datatable", "", "class", "table table-striped- table-bordered table-hover table-checkable", 3, "dtOptions", "dtTrigger", 4, "ngIf"], ["id", "BuidUploadPropertyPop", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "myManFaContent"], [1, "modal-header", 2, "background-color", "aqua"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body", "my-Model-body"], [1, "ExcelUpladRule"], [1, "col-md-6", "llf"], [1, "uploaddd"], ["on", "", "target", "_blank", 1, "btn", "btn-brand", "text-white", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "col-md-6", "rrd"], [1, "proSEction"], ["on", "", 1, "btn", "btn-brand", "text-white", 3, "click"], ["id", "PropBulkUpload", "type", "file", 2, "display", "none", 3, "change"], [1, "SuccessSection"], [4, "ngFor", "ngForOf"], [1, "errorSection"], ["href", "javascript:;", 1, "btn", "btn-brand", 3, "click"], [1, "fa", "fa-plus"], [1, "alert", "alert-warning"], [4, "ngIf"], [1, "col-md-12", "alert", "alert-info"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", 3, "dtOptions", "dtTrigger"], ["class", "customer-list-view-info property-list-dynamic-class", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], ["colspan", "5", "style", "text-align: center;", 4, "ngIf"], [1, "customer-list-view-info", "property-list-dynamic-class", 3, "id", "ngClass"], [1, "btn", "btn-label-primary"], ["href", "javascript:;", 3, "click"], [1, "custom-switch", "custom-switch-label-yesno", "pl-0"], ["name", "x.IsActive", "type", "checkbox", 1, "custom-switch-input", "ng-valid", "ng-dirty", "ng-touched", 3, "id", "ngModel", "change", "ngModelChange"], ["x.IsActive", "ngModel"], [1, "custom-switch-btn", 3, "for"], [1, "padd-top-0"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "border", "#1dc9b7"], [1, "caret"], [1, "dropdown-menu"], ["colspan", "5", 2, "text-align", "center"], ["role", "alert", 1, "alert-alert-success"], ["role", "alert", 1, "alert-alert-danger"]],
        template: function PropertyListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " properties ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PropertyListComponent_div_13_Template, 4, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Bulk Upload ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "g", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "rect", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Total Customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "rect", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "rect", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Total Properties");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "g", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "rect", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "rect", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Active Properties");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "g", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "rect", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "rect", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Suspended Properties");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, PropertyListComponent_div_99_Template, 3, 1, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h1", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Property List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ngx-select-dropdown", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PropertyListComponent_Template_ngx_select_dropdown_change_108_listener($event) {
              return ctx.loadPropertyOnCustomerChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyListComponent_Template_a_click_111_listener() {
              return ctx.exportAsXLSX();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Export to Excel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, PropertyListComponent_div_114_Template, 2, 0, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, PropertyListComponent_table_115_Template, 20, 5, "table", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h4", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Property Bulk Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Property upload rules as follows:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "1.) All * fields are mendatory.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "2.) Do not remove first row header of template file.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "3.) Do not change header name.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Download sample data template...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Sample Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Select Excel sheet and upload...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyListComponent_Template_a_click_147_listener() {
              return ctx.openPopToUploadPro();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Bulk Upload ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "input", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PropertyListComponent_Template_input_change_150_listener($event) {
              return ctx.BuldCustomerUpload($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, PropertyListComponent_ng_container_153_Template, 3, 1, "ng-container", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, PropertyListComponent_ng_container_155_Template, 3, 1, "ng-container", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.PropertyCreate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalCustomerCount, " Total Customers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalPropertyCount, " Total Properties ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalActiveProperty, " Active Properties ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalSuspendedOrCancelled, " Suspended Properties ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.propertySync);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false)("config", ctx.config)("options", ctx.PropertyOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.locallist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.locallist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.excelDataTemplatePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SuccessRes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ErrorRes);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_18__["SelectDropDownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"]],
        styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;padding: 10px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;padding: 10px;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#EAEAEA;color:black !important;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{background-color:white !important;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{color:black !important;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;bottom:0;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]   .btn.btn-brand[_ngcontent-%COMP%]{background-color:#2C77F4 !important;border:1px solid transparent !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c3e7fa !important;}\r\n.kt-iconbox--wave[_ngcontent-%COMP%]{background-color: #ff853329;border: 1px solid #ff8533;}\r\n.kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{fill: #ff8533;}\r\n.btn-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%], .btn-group-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%]    > .btn[_ngcontent-xmv-c1][_ngcontent-%COMP%]{padding:0.5rem 0.7rem;}\r\n.table-checkable[_ngcontent-%COMP%]   .customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:0.5rem 0.7rem;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\n.myselectClass[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color: #fff !important;background-color: #ff8533 !important;}\r\n.switcher-customer[_ngcontent-%COMP%]{top:-15px;position:relative}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-color:#FF8533 !important;}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-left:1px solid #ddd !important;border-right:1px solid #ddd !important;}\r\n.cust-border[_ngcontent-%COMP%] { border: 1px solid rgb(192, 183, 183); text-align: center;}\r\n.cust-border-1[_ngcontent-%COMP%] { text-align: center;}\r\n.cust-border-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 60px; color: #959191; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydGllcy9wcm9wZXJ0eS1saXN0L3Byb3BlcnR5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO0FBQzFELG9DQUFvQyxtQkFBbUIsQ0FBQztBQUN4RCx5Q0FBeUMsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3RHLHVDQUF1QyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ2xFLGdDQUFnQyx3QkFBd0IsQ0FBQztBQUN6RCxrQ0FBa0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDN0UsaUNBQWlDLGtCQUFrQixDQUFDO0FBQ3BELGlDQUFpQyx3QkFBd0IsQ0FBQztBQUMxRCw2QkFBNkIsc0JBQXNCLENBQUMsV0FBVyxDQUFDO0FBQ2hFLDBDQUEwQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7QUFDekUsOENBQThDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQztBQUN2Rix5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUM7QUFDdkUsZUFBZSx3QkFBd0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUNsRSw0QkFBNEIsVUFBVSxDQUFDLHlCQUF5QixDQUFDO0FBQ2pFLGtDQUFrQyx5QkFBeUIsQ0FBQztBQUM1RCx3RUFBd0UseUJBQXlCLENBQUMsY0FBYztBQUNoSCx5R0FBeUcsa0JBQWtCLEVBQUU7QUFDN0gsa0RBQWtELHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN2Rix3REFBd0Qsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQy9GLHFFQUFxRSxXQUFXLENBQUM7QUFDakYsNkNBQTZDLFdBQVcsQ0FBQztBQUN6RCwyREFBMkQsd0JBQXdCLENBQUM7QUFDcEYsbUVBQW1FLGVBQWUsQ0FBQztBQUNuRiwyREFBMkQsZ0JBQWdCLENBQUM7QUFDNUUsMkNBQTJDLGNBQWMsQ0FBQztBQUMxRCxpQ0FBaUMsY0FBYyxDQUFDO0FBQ2hELHVCQUF1QixnQkFBZ0IsQ0FBQztBQUN4QywyQ0FBMkMsK0JBQStCLENBQUM7QUFDM0UsMkJBQTJCLGFBQWEsQ0FBQztBQUN6Qyw2QkFBNkIsaUJBQWlCLENBQUM7QUFDL0MsaUNBQWlDLGlDQUFpQyxDQUFDO0FBQ25FLDJCQUEyQixzQkFBc0IsQ0FBQztBQUNsRCwyREFBMkQsd0JBQXdCLENBQUMsc0JBQXNCLENBQUM7QUFDM0csNkNBQTZDLHNCQUFzQixDQUFDO0FBQ3BFLG1FQUFtRSxpQ0FBaUMsQ0FBQztBQUNyRyxpQ0FBaUMsc0JBQXNCLENBQUM7QUFDeEQsMENBQTBDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7QUFDM0YseURBQXlELG1DQUFtQyxDQUFDLHVDQUF1QyxDQUFDO0FBQ3JJLDJDQUEyQyx3QkFBd0IsQ0FBQztBQUNwRSxrQkFBa0IsMkJBQTJCLENBQUMseUJBQXlCLENBQUM7QUFDeEUsc0JBQXNCLGFBQWEsQ0FBQztBQUNwQyx1RkFBdUYscUJBQXFCLENBQUM7QUFDN0csMERBQTBELHFCQUFxQixDQUFDO0FBQ2hGLHFCQUFxQixtQkFBbUIsQ0FBQztBQUN6QyxzQkFBc0Isc0JBQXNCLENBQUMsb0NBQW9DLENBQUM7QUFDbEYsbUJBQW1CLFNBQVMsQ0FBQyxpQkFBaUI7QUFDOUMsc0NBQXNDLCtCQUErQixDQUFDO0FBQ3RFLHNDQUFzQyxxQ0FBcUMsQ0FBQyxzQ0FBc0MsQ0FBQztBQUNuSCxlQUFlLG9DQUFvQyxFQUFFLGtCQUFrQixDQUFDO0FBQ3hFLGlCQUFpQixrQkFBa0IsQ0FBQztBQUNwQyxxQkFBcUIsZUFBZSxFQUFFLGNBQWMsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb3BlcnRpZXMvcHJvcGVydHktbGlzdC9wcm9wZXJ0eS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6ICNmZjg1MzM7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllc3tiYWNrZ3JvdW5kOiAjYzNlN2ZhO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgLmJ0bntwYWRkaW5nOiAwLjI1cmVtIDAuN3JlbTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7Y29sb3I6d2hpdGU7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllcyBoNXtjb2xvcjpibGFjaztmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkubW9kYWwtYm9keSBwe2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjazt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5IC5mb3JuLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5YSAuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRDQTt9XHJcbi5uZXdfY2xpZW50c19wcm9wZXJ0aWVzX2JvZHl7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXI6bm9uZTt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjE1cHg7cGFkZGluZzogMTBweDt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmEzODtwYWRkaW5nOiAxMHB4O31cclxuLmt0LXdpZGdldDQua3Qtc2Nyb2xsLnBze292ZXJmbG93LXk6YXV0byAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6MTBweDt9XHJcbi5rdC1mb250LWJyYW5ke2NvbG9yOiNhZWFlYWUgIWltcG9ydGFudDtmb250LXNpemU6MTJweCAhaW1wb3J0YW50O31cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOiA2cHg7YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTt9XHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NENBO31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvLnByb3BlcnR5LWxpc3QtZHluYW1pYy1jbGFzcyAuYnRuLWxhYmVsLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhIDtjb2xvcjogIzAwODRDQX1cclxuLmN1c3RvbWVyLWxpc3QtbWFpbi1zZWN0aW9uIC5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0tLXNlYXJjaC5kcm9wZG93bi5ib290bS1maWx0ZXJ7bWFyZ2luLWJvdHRvbToyMHB4Ozt9XHJcbi5rdC1zZWxlY3RwaWNrZXIuYnRuLmJ0bi1sYWJlbC1zdWNjZXNzLnB1bGwtcmlnaHR7YmFja2dyb3VuZC1jb2xvcjojRkY4NTMzO2NvbG9yOndoaXRlO31cclxuLmt0LXNlbGVjdHBpY2tlci5idG4uYnRuLWxhYmVsLXN1Y2Nlc3MucHVsbC1yaWdodDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmE7Y29sb3I6IzAwODRDQTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5uZXctcHJvcGVydGllcy1wb3B1cGNyZWF0ZS10ZXh0e2NvbG9yOndoaXRlO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5hbGVydC1pY29uIGl7Y29sb3I6d2hpdGU7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwODRjYTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybXtwYWRkaW5nOjBweCAwcHg7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e3BhZGRpbmc6OHB4IDIwcHg7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmFsZXJ0LWljb257Zm9udC1zaXplOjIwcHg7fVxyXG4ubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1hcHBsaWNhdGlvbnN7cGFkZGluZzowcHggMTVweDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjAuNHJlbSAhaW1wb3J0YW50O31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIGF7ZGlzcGxheTpibG9jazt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyBhIGl7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0tMXtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNkN2Q3ZDc7fVxyXG4uc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcntoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNFQUVBRUE7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuYWxlcnQtaWNvbiBpe2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm17YmFja2dyb3VuZC1jb2xvcjp3aGl0ZSAhaW1wb3J0YW50O31cclxuLm5ldy1wcm9wZXJ0aWVzLXBvcHVwY3JlYXRlLXRleHR7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVye3Bvc2l0aW9uOnN0aWNreTtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtib3R0b206MDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVyIC5idG4uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzJDNzdGNCAhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyAuYnRuLWdyb3VwIC5idG4gaXtjb2xvcjojYzNlN2ZhICFpbXBvcnRhbnQ7fVxyXG4ua3QtaWNvbmJveC0td2F2ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzMjk7Ym9yZGVyOiAxcHggc29saWQgI2ZmODUzMzt9XHJcbi5rdC1zdmctaWNvbiBnIFtmaWxsXXtmaWxsOiAjZmY4NTMzO31cclxuLmJ0bi1zbVtfbmdjb250ZW50LXhtdi1jMV0sIC5idG4tZ3JvdXAtc21bX25nY29udGVudC14bXYtYzFdID4gLmJ0bltfbmdjb250ZW50LXhtdi1jMV17cGFkZGluZzowLjVyZW0gMC43cmVtO31cclxuLnRhYmxlLWNoZWNrYWJsZSAuY3VzdG9tZXItbGlzdC12aWV3LWluZm8gLmJ0bi1ncm91cCAuYnRue3BhZGRpbmc6MC41cmVtIDAuN3JlbTt9XHJcbi5kcm9wZG93bi1tZW51LnNob3cge21hcmdpbi1sZWZ0OiAtMTA1cHg7fVxyXG4ubXlzZWxlY3RDbGFzcyBidXR0b257Y29sb3I6ICNmZmYgIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzICFpbXBvcnRhbnQ7fVxyXG4uc3dpdGNoZXItY3VzdG9tZXJ7dG9wOi0xNXB4O3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG4uY29sLW1kLTEyLnNlY3Rpb24tY2xpZW50LXJlcXVzdC1mb3Jte2JvcmRlci1jb2xvcjojRkY4NTMzICFpbXBvcnRhbnQ7fVxyXG4uY29sLW1kLTEyLnNlY3Rpb24tY2xpZW50LXJlcXVzdC1mb3Jte2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7fVxyXG4uY3VzdC1ib3JkZXIgeyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkyLCAxODMsIDE4Myk7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5jdXN0LWJvcmRlci0xIHsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLmN1c3QtYm9yZGVyLTEgYSBpIHsgZm9udC1zaXplOiA2MHB4OyBjb2xvcjogIzk1OTE5MTsgfSJdfQ== */", "@media (min-width:1360px) {\n        .kt-iconbox__title[_ngcontent-%COMP%]   a.kt-link[_ngcontent-%COMP%] {\n            font-size: 12px !important;\n        }\n\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-property-list',
            templateUrl: './property-list.component.html',
            styleUrls: ['./property-list.component.css']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]
          }, {
            type: _services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"]
          }, {
            type: _services_property_service__WEBPACK_IMPORTED_MODULE_9__["PropertyService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]
          }, {
            type: _services_ticket_service__WEBPACK_IMPORTED_MODULE_12__["TicketService"]
          }, {
            type: _services_downloads_service__WEBPACK_IMPORTED_MODULE_13__["DownloadService"]
          }, {
            type: _services_userlog_service__WEBPACK_IMPORTED_MODULE_14__["UserlogService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]
          }, {
            type: _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_16__["GenicProfileService"]
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
    "ZIf9":
    /*!***************************************************************************************!*\
      !*** ./src/app/application/properties/property-details/property-details.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: PropertyDetailsComponent */

    /***/
    function ZIf9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyDetailsComponent", function () {
        return PropertyDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/property.service */
      "Pffd");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");

      function PropertyDetailsComponent_ng_template_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Active ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PropertyDetailsComponent_ng_template_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PropertyDetailsComponent = /*#__PURE__*/function () {
        function PropertyDetailsComponent(titleService, router, service, loginservice) {
          var _this18 = this;

          _classCallCheck(this, PropertyDetailsComponent);

          this.titleService = titleService;
          this.router = router;
          this.service = service;
          this.loginservice = loginservice;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this18.currentUser = x;
          });
        }

        _createClass(PropertyDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
              this.router.navigate(['/properties']);

              if (!this.currentUser.Permissions.PropertyView) {
                this.router.navigate(['/dashboard']);
              }
            }

            this.titleService.setTitle('Propert Details | Genic Solution');
            this.lat = 0;
            this.lng = 0;
            setTimeout(function () {
              _this19.lat = Number(_this19.service.formData.Latitude);
              _this19.lng = Number(_this19.service.formData.Longitude);
            }, 100);
          }
        }]);

        return PropertyDetailsComponent;
      }();

      PropertyDetailsComponent.ɵfac = function PropertyDetailsComponent_Factory(t) {
        return new (t || PropertyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      PropertyDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyDetailsComponent,
        selectors: [["app-property-details"]],
        decls: 88,
        vars: 14,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["routerLink", "/properties", 1, "kt-subheader__breadcrumbs-link"], [1, "kt-subheader__toolbar"], [1, "kt-subheader__wrapper"], ["on", "", "onclick", "window.history.back()", 1, "btn", "btn-primary", "text-white"], [1, "creat-properties-form-main-section"], [1, "create_properties-filter_form", "create_properties-filter_form-1"], [1, "form-group", "form-group-last"], ["role", "alert", 1, "alert", "alert-secondary"], [1, "alert-icon"], [1, "la", "la-map-marker", 2, "color", "#ff8533"], [1, "new-properties-popupcreate-text"], [1, "row", "property-applications"], [1, "col-md-5"], [1, "row"], [1, "col-md-12"], [1, "kt-portlet"], [1, "table", "table-bodered", "tbl-cust-dt"], [2, "background-color", "#eaeaea"], ["colspan", "2"], [1, "kt-portlet__head-title"], [1, "btn", "btn-label-primary"], [3, "ngIf"], [1, "col-md-7", "map-property"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude"], [1, "btn", "btn-label-success", "btn-pill", "reallocated-one"], [1, "btn", "btn-label-danger", "btn-pill", "invoices-btn"]],
        template: function PropertyDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " properties ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " property Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Property Address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Property Id: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Address Street 1: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Address Street 2: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Address Unit No: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Postal Code: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Country: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Status: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, PropertyDetailsComponent_ng_template_83_Template, 2, 0, "ng-template", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, PropertyDetailsComponent_ng_template_84_Template, 2, 0, "ng-template", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "agm-map", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "agm-marker", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Property Details ", ctx.service.formData.CustomerName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.formData.PropertyId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.AddressStreet1, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.AddressStreet2, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.AddressUnitNo, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.AddressZipCode, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.formData.AddressCountry, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.formData.IsActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.formData.IsActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMarker"]],
        styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;padding: 10px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;padding: 10px;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#EAEAEA;color:black !important;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{background-color:white !important;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{color:black !important;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;bottom:0;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]   .btn.btn-brand[_ngcontent-%COMP%]{background-color:#2C77F4 !important;border:1px solid transparent !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c3e7fa !important;}\r\n.kt-iconbox--wave[_ngcontent-%COMP%]{background-color: #ff853329;border: 1px solid #ff8533;}\r\n.kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{fill: #ff8533;}\r\n.btn-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%], .btn-group-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%]    > .btn[_ngcontent-xmv-c1][_ngcontent-%COMP%]{padding:0.5rem 0.7rem;}\r\n.table-checkable[_ngcontent-%COMP%]   .customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:0.5rem 0.7rem;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\n.myselectClass[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color: #fff !important;background-color: #ff8533 !important;}\r\n.switcher-customer[_ngcontent-%COMP%]{top:-15px;position:relative}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-color:#FF8533 !important;}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-left:1px solid #ddd !important;border-right:1px solid #ddd !important;}\r\n.cust-border[_ngcontent-%COMP%] { border: 1px solid rgb(192, 183, 183); text-align: center;}\r\n.cust-border-1[_ngcontent-%COMP%] { text-align: center;}\r\n.cust-border-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 60px; color: #959191; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydGllcy9wcm9wZXJ0eS1saXN0L3Byb3BlcnR5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO0FBQzFELG9DQUFvQyxtQkFBbUIsQ0FBQztBQUN4RCx5Q0FBeUMsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3RHLHVDQUF1QyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ2xFLGdDQUFnQyx3QkFBd0IsQ0FBQztBQUN6RCxrQ0FBa0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDN0UsaUNBQWlDLGtCQUFrQixDQUFDO0FBQ3BELGlDQUFpQyx3QkFBd0IsQ0FBQztBQUMxRCw2QkFBNkIsc0JBQXNCLENBQUMsV0FBVyxDQUFDO0FBQ2hFLDBDQUEwQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7QUFDekUsOENBQThDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQztBQUN2Rix5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUM7QUFDdkUsZUFBZSx3QkFBd0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUNsRSw0QkFBNEIsVUFBVSxDQUFDLHlCQUF5QixDQUFDO0FBQ2pFLGtDQUFrQyx5QkFBeUIsQ0FBQztBQUM1RCx3RUFBd0UseUJBQXlCLENBQUMsY0FBYztBQUNoSCx5R0FBeUcsa0JBQWtCLEVBQUU7QUFDN0gsa0RBQWtELHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN2Rix3REFBd0Qsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQy9GLHFFQUFxRSxXQUFXLENBQUM7QUFDakYsNkNBQTZDLFdBQVcsQ0FBQztBQUN6RCwyREFBMkQsd0JBQXdCLENBQUM7QUFDcEYsbUVBQW1FLGVBQWUsQ0FBQztBQUNuRiwyREFBMkQsZ0JBQWdCLENBQUM7QUFDNUUsMkNBQTJDLGNBQWMsQ0FBQztBQUMxRCxpQ0FBaUMsY0FBYyxDQUFDO0FBQ2hELHVCQUF1QixnQkFBZ0IsQ0FBQztBQUN4QywyQ0FBMkMsK0JBQStCLENBQUM7QUFDM0UsMkJBQTJCLGFBQWEsQ0FBQztBQUN6Qyw2QkFBNkIsaUJBQWlCLENBQUM7QUFDL0MsaUNBQWlDLGlDQUFpQyxDQUFDO0FBQ25FLDJCQUEyQixzQkFBc0IsQ0FBQztBQUNsRCwyREFBMkQsd0JBQXdCLENBQUMsc0JBQXNCLENBQUM7QUFDM0csNkNBQTZDLHNCQUFzQixDQUFDO0FBQ3BFLG1FQUFtRSxpQ0FBaUMsQ0FBQztBQUNyRyxpQ0FBaUMsc0JBQXNCLENBQUM7QUFDeEQsMENBQTBDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7QUFDM0YseURBQXlELG1DQUFtQyxDQUFDLHVDQUF1QyxDQUFDO0FBQ3JJLDJDQUEyQyx3QkFBd0IsQ0FBQztBQUNwRSxrQkFBa0IsMkJBQTJCLENBQUMseUJBQXlCLENBQUM7QUFDeEUsc0JBQXNCLGFBQWEsQ0FBQztBQUNwQyx1RkFBdUYscUJBQXFCLENBQUM7QUFDN0csMERBQTBELHFCQUFxQixDQUFDO0FBQ2hGLHFCQUFxQixtQkFBbUIsQ0FBQztBQUN6QyxzQkFBc0Isc0JBQXNCLENBQUMsb0NBQW9DLENBQUM7QUFDbEYsbUJBQW1CLFNBQVMsQ0FBQyxpQkFBaUI7QUFDOUMsc0NBQXNDLCtCQUErQixDQUFDO0FBQ3RFLHNDQUFzQyxxQ0FBcUMsQ0FBQyxzQ0FBc0MsQ0FBQztBQUNuSCxlQUFlLG9DQUFvQyxFQUFFLGtCQUFrQixDQUFDO0FBQ3hFLGlCQUFpQixrQkFBa0IsQ0FBQztBQUNwQyxxQkFBcUIsZUFBZSxFQUFFLGNBQWMsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb3BlcnRpZXMvcHJvcGVydHktbGlzdC9wcm9wZXJ0eS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6ICNmZjg1MzM7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllc3tiYWNrZ3JvdW5kOiAjYzNlN2ZhO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgLmJ0bntwYWRkaW5nOiAwLjI1cmVtIDAuN3JlbTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7Y29sb3I6d2hpdGU7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllcyBoNXtjb2xvcjpibGFjaztmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkubW9kYWwtYm9keSBwe2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjazt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5IC5mb3JuLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5YSAuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRDQTt9XHJcbi5uZXdfY2xpZW50c19wcm9wZXJ0aWVzX2JvZHl7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXI6bm9uZTt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjE1cHg7cGFkZGluZzogMTBweDt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmEzODtwYWRkaW5nOiAxMHB4O31cclxuLmt0LXdpZGdldDQua3Qtc2Nyb2xsLnBze292ZXJmbG93LXk6YXV0byAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6MTBweDt9XHJcbi5rdC1mb250LWJyYW5ke2NvbG9yOiNhZWFlYWUgIWltcG9ydGFudDtmb250LXNpemU6MTJweCAhaW1wb3J0YW50O31cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOiA2cHg7YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTt9XHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NENBO31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvLnByb3BlcnR5LWxpc3QtZHluYW1pYy1jbGFzcyAuYnRuLWxhYmVsLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhIDtjb2xvcjogIzAwODRDQX1cclxuLmN1c3RvbWVyLWxpc3QtbWFpbi1zZWN0aW9uIC5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0tLXNlYXJjaC5kcm9wZG93bi5ib290bS1maWx0ZXJ7bWFyZ2luLWJvdHRvbToyMHB4Ozt9XHJcbi5rdC1zZWxlY3RwaWNrZXIuYnRuLmJ0bi1sYWJlbC1zdWNjZXNzLnB1bGwtcmlnaHR7YmFja2dyb3VuZC1jb2xvcjojRkY4NTMzO2NvbG9yOndoaXRlO31cclxuLmt0LXNlbGVjdHBpY2tlci5idG4uYnRuLWxhYmVsLXN1Y2Nlc3MucHVsbC1yaWdodDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmE7Y29sb3I6IzAwODRDQTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5uZXctcHJvcGVydGllcy1wb3B1cGNyZWF0ZS10ZXh0e2NvbG9yOndoaXRlO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5hbGVydC1pY29uIGl7Y29sb3I6d2hpdGU7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwODRjYTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybXtwYWRkaW5nOjBweCAwcHg7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e3BhZGRpbmc6OHB4IDIwcHg7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmFsZXJ0LWljb257Zm9udC1zaXplOjIwcHg7fVxyXG4ubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1hcHBsaWNhdGlvbnN7cGFkZGluZzowcHggMTVweDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjAuNHJlbSAhaW1wb3J0YW50O31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIGF7ZGlzcGxheTpibG9jazt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyBhIGl7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0tMXtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNkN2Q3ZDc7fVxyXG4uc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcntoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNFQUVBRUE7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuYWxlcnQtaWNvbiBpe2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm17YmFja2dyb3VuZC1jb2xvcjp3aGl0ZSAhaW1wb3J0YW50O31cclxuLm5ldy1wcm9wZXJ0aWVzLXBvcHVwY3JlYXRlLXRleHR7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVye3Bvc2l0aW9uOnN0aWNreTtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtib3R0b206MDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVyIC5idG4uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzJDNzdGNCAhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyAuYnRuLWdyb3VwIC5idG4gaXtjb2xvcjojYzNlN2ZhICFpbXBvcnRhbnQ7fVxyXG4ua3QtaWNvbmJveC0td2F2ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzMjk7Ym9yZGVyOiAxcHggc29saWQgI2ZmODUzMzt9XHJcbi5rdC1zdmctaWNvbiBnIFtmaWxsXXtmaWxsOiAjZmY4NTMzO31cclxuLmJ0bi1zbVtfbmdjb250ZW50LXhtdi1jMV0sIC5idG4tZ3JvdXAtc21bX25nY29udGVudC14bXYtYzFdID4gLmJ0bltfbmdjb250ZW50LXhtdi1jMV17cGFkZGluZzowLjVyZW0gMC43cmVtO31cclxuLnRhYmxlLWNoZWNrYWJsZSAuY3VzdG9tZXItbGlzdC12aWV3LWluZm8gLmJ0bi1ncm91cCAuYnRue3BhZGRpbmc6MC41cmVtIDAuN3JlbTt9XHJcbi5kcm9wZG93bi1tZW51LnNob3cge21hcmdpbi1sZWZ0OiAtMTA1cHg7fVxyXG4ubXlzZWxlY3RDbGFzcyBidXR0b257Y29sb3I6ICNmZmYgIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzICFpbXBvcnRhbnQ7fVxyXG4uc3dpdGNoZXItY3VzdG9tZXJ7dG9wOi0xNXB4O3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG4uY29sLW1kLTEyLnNlY3Rpb24tY2xpZW50LXJlcXVzdC1mb3Jte2JvcmRlci1jb2xvcjojRkY4NTMzICFpbXBvcnRhbnQ7fVxyXG4uY29sLW1kLTEyLnNlY3Rpb24tY2xpZW50LXJlcXVzdC1mb3Jte2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7fVxyXG4uY3VzdC1ib3JkZXIgeyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkyLCAxODMsIDE4Myk7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5jdXN0LWJvcmRlci0xIHsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLmN1c3QtYm9yZGVyLTEgYSBpIHsgZm9udC1zaXplOiA2MHB4OyBjb2xvcjogIzk1OTE5MTsgfSJdfQ== */", ".map-property[_ngcontent-%COMP%]   agm-map[_ngcontent-%COMP%]{ height: 430px;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-property-details',
            templateUrl: './property-details.component.html',
            styleUrls: ['../property-list/property-list.component.css'],
            styles: [".map-property agm-map{ height: 430px;}"]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "anw1":
    /*!***********************************************************************************!*\
      !*** ./src/app/application/properties/property-popup/property-popup.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: PropertyPopupComponent */

    /***/
    function anw1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyPopupComponent", function () {
        return PropertyPopupComponent;
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


      var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/property.service */
      "Pffd");
      /* harmony import */


      var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/customer.service */
      "0zL+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PropertyPopupComponent_div_20_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
        }

        if (rf & 2) {
          var x_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r2.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", x_r1.CompanyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r1.CompanyName);
        }
      }

      function PropertyPopupComponent_div_20_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
        }

        if (rf & 2) {
          var x_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r1.CustomerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r1.CompanyName);
        }
      }

      function PropertyPopupComponent_div_20_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", x_r1.NameTitle, " ", x_r1.FirstName, " ", x_r1.LastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r1.CompanyName, " ");
        }
      }

      function PropertyPopupComponent_div_20_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r1.CompanyName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", x_r1.NameTitle, " ", x_r1.FirstName, " ", x_r1.LastName, " ");
        }
      }

      function PropertyPopupComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyPopupComponent_div_20_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var x_r1 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onClick(x_r1.Id, x_r1.NameTitle + " " + x_r1.FirstName + " " + x_r1.LastName, x_r1.CompanyName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PropertyPopupComponent_div_20_img_2_Template, 1, 3, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PropertyPopupComponent_div_20_img_3_Template, 1, 2, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PropertyPopupComponent_div_20_div_4_Template, 5, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PropertyPopupComponent_div_20_div_5_Template, 5, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r1.CustomerLogo === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r1.CustomerLogo !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !x_r1.UseCompanyNameAsPrimaryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r1.UseCompanyNameAsPrimaryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r1.Properties.length, " Properties");
        }
      }

      var PropertyPopupComponent = /*#__PURE__*/function () {
        function PropertyPopupComponent(loginservice, dialogRef, propertyservice, service) {
          var _this20 = this;

          _classCallCheck(this, PropertyPopupComponent);

          this.loginservice = loginservice;
          this.dialogRef = dialogRef;
          this.propertyservice = propertyservice;
          this.service = service;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this20.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        }

        _createClass(PropertyPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.LocalList = [];
            this.service.CustomerList = [];
            this.service.getCustomerListSync(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this21.service.CustomerList = response.result;
                  setTimeout(function () {
                    _this21.LocalList = _this21.service.CustomerList.filter(function (x) {
                      return x.Status === true;
                    });
                  }, 200);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onClick",
          value: function onClick(id, name, companyName) {
            var _this22 = this;

            this.propertyservice.SetAsDefaultValue();
            setTimeout(function () {
              if (id === undefined) {
                _this22.dialogRef.close();
              } else {
                _this22.dialogRef.close({
                  id: id,
                  name: name,
                  companyName: companyName
                });
              }
            }, 200);
          }
        }, {
          key: "onkeypress",
          value: function onkeypress(value) {
            this.LocalList = this.service.CustomerList.filter(function (item) {
              return item.CompanyName.toLowerCase().match(value.toLowerCase()) || item.FirstName.toLowerCase().match(value.toLowerCase()) || item.LastName.toLowerCase().match(value.toLowerCase());
            });
          }
        }]);

        return PropertyPopupComponent;
      }();

      PropertyPopupComponent.ɵfac = function PropertyPopupComponent_Factory(t) {
        return new (t || PropertyPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]));
      };

      PropertyPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyPopupComponent,
        selectors: [["app-property-popup"]],
        decls: 21,
        vars: 1,
        consts: [[1, "modal-header", "select-new-properties"], ["id", "exampleModalLabel", 1, "modal-title"], ["mat-dialog-close", "", 1, "btn", "btn-default", "pull-right"], [1, "modal-body", "property-modal-body"], [1, "row", "forn-group"], [1, "col-md-7"], ["type", "text", "placeholder", "Search Clients...", 1, "form-control", 3, "keydown", "keyup"], [1, "col-md-1", "text-center"], [1, "col-md-4", "text-right"], ["on", "", 1, "btn", "btn-brand", "text-white", 3, "click"], [1, "la", "la-plus"], [1, "kt-portlet__body", "new_clients_properties_body"], ["data-scroll", "true", "data-height", "220", "id", "style-3", 1, "kt-widget4", "kt-scroll", "ps", 2, "height", "220px", "overflow", "hidden"], ["class", "kt-widget4__item create-quote-client-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "kt-widget4__item", "create-quote-client-item", 3, "click"], [1, "kt-widget4__pic", "kt-widget4__pic--logo"], ["width", "30px", 3, "src", "alt", "title", 4, "ngIf"], ["width", "30px", "alt", "pic", 3, "src", "title", 4, "ngIf"], ["class", "kt-widget4__info", 4, "ngIf"], [1, "kt-widget4__number", "kt-font-brand"], ["width", "30px", 3, "src", "alt", "title"], ["width", "30px", "alt", "pic", 3, "src", "title"], [1, "kt-widget4__info"], ["href", "javascript:;", 1, "kt-widget4__title"], [1, ""]],
        template: function PropertyPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select or create a Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Which client would you like to create this property for?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PropertyPopupComponent_Template_input_keydown_11_listener($event) {
              return ctx.onkeypress($event.target.value);
            })("keyup", function PropertyPopupComponent_Template_input_keyup_11_listener($event) {
              return ctx.onkeypress($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyPopupComponent_Template_a_click_15_listener() {
              return ctx.onClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Create new client ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PropertyPopupComponent_div_20_Template, 8, 5, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.LocalList);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;padding: 10px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;padding: 10px;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#EAEAEA;color:black !important;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{background-color:white !important;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{color:black !important;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;bottom:0;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]   .btn.btn-brand[_ngcontent-%COMP%]{background-color:#2C77F4 !important;border:1px solid transparent !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c3e7fa !important;}\r\n.kt-iconbox--wave[_ngcontent-%COMP%]{background-color: #ff853329;border: 1px solid #ff8533;}\r\n.kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{fill: #ff8533;}\r\n.btn-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%], .btn-group-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%]    > .btn[_ngcontent-xmv-c1][_ngcontent-%COMP%]{padding:0.5rem 0.7rem;}\r\n.table-checkable[_ngcontent-%COMP%]   .customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:0.5rem 0.7rem;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\n.myselectClass[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color: #fff !important;background-color: #ff8533 !important;}\r\n.switcher-customer[_ngcontent-%COMP%]{top:-15px;position:relative}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-color:#FF8533 !important;}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-left:1px solid #ddd !important;border-right:1px solid #ddd !important;}\r\n.cust-border[_ngcontent-%COMP%] { border: 1px solid rgb(192, 183, 183); text-align: center;}\r\n.cust-border-1[_ngcontent-%COMP%] { text-align: center;}\r\n.cust-border-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 60px; color: #959191; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydGllcy9wcm9wZXJ0eS1saXN0L3Byb3BlcnR5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO0FBQzFELG9DQUFvQyxtQkFBbUIsQ0FBQztBQUN4RCx5Q0FBeUMsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3RHLHVDQUF1QyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ2xFLGdDQUFnQyx3QkFBd0IsQ0FBQztBQUN6RCxrQ0FBa0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDN0UsaUNBQWlDLGtCQUFrQixDQUFDO0FBQ3BELGlDQUFpQyx3QkFBd0IsQ0FBQztBQUMxRCw2QkFBNkIsc0JBQXNCLENBQUMsV0FBVyxDQUFDO0FBQ2hFLDBDQUEwQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7QUFDekUsOENBQThDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQztBQUN2Rix5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUM7QUFDdkUsZUFBZSx3QkFBd0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUNsRSw0QkFBNEIsVUFBVSxDQUFDLHlCQUF5QixDQUFDO0FBQ2pFLGtDQUFrQyx5QkFBeUIsQ0FBQztBQUM1RCx3RUFBd0UseUJBQXlCLENBQUMsY0FBYztBQUNoSCx5R0FBeUcsa0JBQWtCLEVBQUU7QUFDN0gsa0RBQWtELHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN2Rix3REFBd0Qsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQy9GLHFFQUFxRSxXQUFXLENBQUM7QUFDakYsNkNBQTZDLFdBQVcsQ0FBQztBQUN6RCwyREFBMkQsd0JBQXdCLENBQUM7QUFDcEYsbUVBQW1FLGVBQWUsQ0FBQztBQUNuRiwyREFBMkQsZ0JBQWdCLENBQUM7QUFDNUUsMkNBQTJDLGNBQWMsQ0FBQztBQUMxRCxpQ0FBaUMsY0FBYyxDQUFDO0FBQ2hELHVCQUF1QixnQkFBZ0IsQ0FBQztBQUN4QywyQ0FBMkMsK0JBQStCLENBQUM7QUFDM0UsMkJBQTJCLGFBQWEsQ0FBQztBQUN6Qyw2QkFBNkIsaUJBQWlCLENBQUM7QUFDL0MsaUNBQWlDLGlDQUFpQyxDQUFDO0FBQ25FLDJCQUEyQixzQkFBc0IsQ0FBQztBQUNsRCwyREFBMkQsd0JBQXdCLENBQUMsc0JBQXNCLENBQUM7QUFDM0csNkNBQTZDLHNCQUFzQixDQUFDO0FBQ3BFLG1FQUFtRSxpQ0FBaUMsQ0FBQztBQUNyRyxpQ0FBaUMsc0JBQXNCLENBQUM7QUFDeEQsMENBQTBDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7QUFDM0YseURBQXlELG1DQUFtQyxDQUFDLHVDQUF1QyxDQUFDO0FBQ3JJLDJDQUEyQyx3QkFBd0IsQ0FBQztBQUNwRSxrQkFBa0IsMkJBQTJCLENBQUMseUJBQXlCLENBQUM7QUFDeEUsc0JBQXNCLGFBQWEsQ0FBQztBQUNwQyx1RkFBdUYscUJBQXFCLENBQUM7QUFDN0csMERBQTBELHFCQUFxQixDQUFDO0FBQ2hGLHFCQUFxQixtQkFBbUIsQ0FBQztBQUN6QyxzQkFBc0Isc0JBQXNCLENBQUMsb0NBQW9DLENBQUM7QUFDbEYsbUJBQW1CLFNBQVMsQ0FBQyxpQkFBaUI7QUFDOUMsc0NBQXNDLCtCQUErQixDQUFDO0FBQ3RFLHNDQUFzQyxxQ0FBcUMsQ0FBQyxzQ0FBc0MsQ0FBQztBQUNuSCxlQUFlLG9DQUFvQyxFQUFFLGtCQUFrQixDQUFDO0FBQ3hFLGlCQUFpQixrQkFBa0IsQ0FBQztBQUNwQyxxQkFBcUIsZUFBZSxFQUFFLGNBQWMsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb3BlcnRpZXMvcHJvcGVydHktbGlzdC9wcm9wZXJ0eS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6ICNmZjg1MzM7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllc3tiYWNrZ3JvdW5kOiAjYzNlN2ZhO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgLmJ0bntwYWRkaW5nOiAwLjI1cmVtIDAuN3JlbTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7Y29sb3I6d2hpdGU7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllcyBoNXtjb2xvcjpibGFjaztmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkubW9kYWwtYm9keSBwe2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjazt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5IC5mb3JuLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5YSAuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRDQTt9XHJcbi5uZXdfY2xpZW50c19wcm9wZXJ0aWVzX2JvZHl7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXI6bm9uZTt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjE1cHg7cGFkZGluZzogMTBweDt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmEzODtwYWRkaW5nOiAxMHB4O31cclxuLmt0LXdpZGdldDQua3Qtc2Nyb2xsLnBze292ZXJmbG93LXk6YXV0byAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6MTBweDt9XHJcbi5rdC1mb250LWJyYW5ke2NvbG9yOiNhZWFlYWUgIWltcG9ydGFudDtmb250LXNpemU6MTJweCAhaW1wb3J0YW50O31cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOiA2cHg7YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTt9XHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NENBO31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvLnByb3BlcnR5LWxpc3QtZHluYW1pYy1jbGFzcyAuYnRuLWxhYmVsLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhIDtjb2xvcjogIzAwODRDQX1cclxuLmN1c3RvbWVyLWxpc3QtbWFpbi1zZWN0aW9uIC5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0tLXNlYXJjaC5kcm9wZG93bi5ib290bS1maWx0ZXJ7bWFyZ2luLWJvdHRvbToyMHB4Ozt9XHJcbi5rdC1zZWxlY3RwaWNrZXIuYnRuLmJ0bi1sYWJlbC1zdWNjZXNzLnB1bGwtcmlnaHR7YmFja2dyb3VuZC1jb2xvcjojRkY4NTMzO2NvbG9yOndoaXRlO31cclxuLmt0LXNlbGVjdHBpY2tlci5idG4uYnRuLWxhYmVsLXN1Y2Nlc3MucHVsbC1yaWdodDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmE7Y29sb3I6IzAwODRDQTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5uZXctcHJvcGVydGllcy1wb3B1cGNyZWF0ZS10ZXh0e2NvbG9yOndoaXRlO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5hbGVydC1pY29uIGl7Y29sb3I6d2hpdGU7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwODRjYTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybXtwYWRkaW5nOjBweCAwcHg7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e3BhZGRpbmc6OHB4IDIwcHg7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmFsZXJ0LWljb257Zm9udC1zaXplOjIwcHg7fVxyXG4ubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1hcHBsaWNhdGlvbnN7cGFkZGluZzowcHggMTVweDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjAuNHJlbSAhaW1wb3J0YW50O31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIGF7ZGlzcGxheTpibG9jazt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyBhIGl7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0tMXtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNkN2Q3ZDc7fVxyXG4uc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcntoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNFQUVBRUE7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuYWxlcnQtaWNvbiBpe2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm17YmFja2dyb3VuZC1jb2xvcjp3aGl0ZSAhaW1wb3J0YW50O31cclxuLm5ldy1wcm9wZXJ0aWVzLXBvcHVwY3JlYXRlLXRleHR7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVye3Bvc2l0aW9uOnN0aWNreTtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtib3R0b206MDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVyIC5idG4uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzJDNzdGNCAhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyAuYnRuLWdyb3VwIC5idG4gaXtjb2xvcjojYzNlN2ZhICFpbXBvcnRhbnQ7fVxyXG4ua3QtaWNvbmJveC0td2F2ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzMjk7Ym9yZGVyOiAxcHggc29saWQgI2ZmODUzMzt9XHJcbi5rdC1zdmctaWNvbiBnIFtmaWxsXXtmaWxsOiAjZmY4NTMzO31cclxuLmJ0bi1zbVtfbmdjb250ZW50LXhtdi1jMV0sIC5idG4tZ3JvdXAtc21bX25nY29udGVudC14bXYtYzFdID4gLmJ0bltfbmdjb250ZW50LXhtdi1jMV17cGFkZGluZzowLjVyZW0gMC43cmVtO31cclxuLnRhYmxlLWNoZWNrYWJsZSAuY3VzdG9tZXItbGlzdC12aWV3LWluZm8gLmJ0bi1ncm91cCAuYnRue3BhZGRpbmc6MC41cmVtIDAuN3JlbTt9XHJcbi5kcm9wZG93bi1tZW51LnNob3cge21hcmdpbi1sZWZ0OiAtMTA1cHg7fVxyXG4ubXlzZWxlY3RDbGFzcyBidXR0b257Y29sb3I6ICNmZmYgIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzICFpbXBvcnRhbnQ7fVxyXG4uc3dpdGNoZXItY3VzdG9tZXJ7dG9wOi0xNXB4O3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG4uY29sLW1kLTEyLnNlY3Rpb24tY2xpZW50LXJlcXVzdC1mb3Jte2JvcmRlci1jb2xvcjojRkY4NTMzICFpbXBvcnRhbnQ7fVxyXG4uY29sLW1kLTEyLnNlY3Rpb24tY2xpZW50LXJlcXVzdC1mb3Jte2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7fVxyXG4uY3VzdC1ib3JkZXIgeyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkyLCAxODMsIDE4Myk7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5jdXN0LWJvcmRlci0xIHsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLmN1c3QtYm9yZGVyLTEgYSBpIHsgZm9udC1zaXplOiA2MHB4OyBjb2xvcjogIzk1OTE5MTsgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-property-popup',
            templateUrl: './property-popup.component.html',
            styleUrls: ['../property-list/property-list.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]
          }, {
            type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]
          }];
        }, null);
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
            var _this23 = this;

            this._jqueryElement = $(this.selectControll.nativeElement);
            this.initSelect2();

            this._jqueryElement.on('select2:select select2:unselect', function (e) {
              var data = _this23._jqueryElement.select2('data');

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

              if (!_this23.options.multiple) {
                data = e.type == 'select2:unselect' ? null : data[0];
              }

              _this23.selectedValue = data;

              _this23._onChange(data);

              _this23.valueChange.emit(data);
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

      LSelect2Component.ɵfac = function LSelect2Component_Factory(t) {
        return new (t || LSelect2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
      };

      LSelect2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LSelect2Component,
        selectors: [["l-select2"]],
        viewQuery: function LSelect2Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selectControll = _t.first);
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
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
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 3,
        vars: 1,
        consts: [[2, "width", "100%", 3, "disabled"], ["selectControll", ""]],
        template: function LSelect2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled);
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

      LSelect2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: LSelect2Module
      });
      LSelect2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function LSelect2Module_Factory(t) {
          return new (t || LSelect2Module)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LSelect2Component, [{
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
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LSelect2Module, {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LSelect2Module, [{
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
    "xShS":
    /*!***********************************************************************************!*\
      !*** ./src/app/application/properties/ticket-history/ticket-history.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: TicketHistoryComponent */

    /***/
    function xShS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketHistoryComponent", function () {
        return TicketHistoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/property.service */
      "Pffd");
      /* harmony import */


      var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/ticket.service */
      "KPvW");
      /* harmony import */


      var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/userlog.service */
      "V05N");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_select2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-select2 */
      "u1nn");
      /* harmony import */


      var _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../generic-utils/Ticket-Date-Time-Format/TicketDateTimeFormat.component */
      "myuM");
      /* harmony import */


      var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */
      "X7qY");
      /* harmony import */


      var _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../generic-utils/Ticket-Team-List/TicketTeamList.component */
      "U6ah");

      function TicketHistoryComponent_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryComponent_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 9);
        }
      }

      function TicketHistoryComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " properties ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryComponent_table_95_tr_14_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r8.InvoiceNo, "");
        }
      }

      function TicketHistoryComponent_table_95_tr_14_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r8.QuoteId, "");
        }
      }

      function TicketHistoryComponent_table_95_tr_14_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r8.RequestId, " ");
        }
      }

      function TicketHistoryComponent_table_95_tr_14_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recurring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryComponent_table_95_tr_14_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UNALLOCATED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryComponent_table_95_tr_14_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RESECHEDULED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryComponent_table_95_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketHistoryComponent_table_95_tr_14_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var x_r8 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.ViewTicketDetails(x_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketHistoryComponent_table_95_tr_14_span_6_Template, 3, 1, "span", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketHistoryComponent_table_95_tr_14_span_7_Template, 3, 1, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TicketHistoryComponent_table_95_tr_14_span_8_Template, 2, 1, "span", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TicketHistoryComponent_table_95_tr_14_span_9_Template, 2, 0, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "generic-ticket-date-time-format", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("AChange", function TicketHistoryComponent_table_95_tr_14_Template_generic_ticket_date_time_format_AChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var x_r8 = ctx.$implicit;
            return x_r8.AppointmentStart = $event;
          })("BChange", function TicketHistoryComponent_table_95_tr_14_Template_generic_ticket_date_time_format_BChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var x_r8 = ctx.$implicit;
            return x_r8.AppointmentEnd = $event;
          })("CChange", function TicketHistoryComponent_table_95_tr_14_Template_generic_ticket_date_time_format_CChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var x_r8 = ctx.$implicit;
            return x_r8.CreatedUtcDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TicketHistoryComponent_table_95_tr_14_span_12_Template, 2, 0, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TicketHistoryComponent_table_95_tr_14_span_13_Template, 2, 0, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "generic-ticket-status", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function TicketHistoryComponent_table_95_tr_14_Template_generic_ticket_status_StatusChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var x_r8 = ctx.$implicit;
            return x_r8.Status = $event;
          })("OverDueDaysChange", function TicketHistoryComponent_table_95_tr_14_Template_generic_ticket_status_OverDueDaysChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var x_r8 = ctx.$implicit;
            return x_r8.OverDueDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "generic-ticket-team-list", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("TicketTeamsChange", function TicketHistoryComponent_table_95_tr_14_Template_generic_ticket_team_list_TicketTeamsChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var x_r8 = ctx.$implicit;
            return x_r8.TicketTeams = $event;
          })("localPrependUrlChange", function TicketHistoryComponent_table_95_tr_14_Template_generic_ticket_team_list_localPrependUrlChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r27.localPrependUrl = $event;
          })("ReallocateChange", function TicketHistoryComponent_table_95_tr_14_Template_generic_ticket_team_list_ReallocateChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var x_r8 = ctx.$implicit;
            return x_r8.Reallocate = $event;
          })("IdChange", function TicketHistoryComponent_table_95_tr_14_Template_generic_ticket_team_list_IdChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var x_r8 = ctx.$implicit;
            return x_r8.Id = $event;
          })("TicketIdChange", function TicketHistoryComponent_table_95_tr_14_Template_generic_ticket_team_list_TicketIdChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var x_r8 = ctx.$implicit;
            return x_r8.TicketId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r8 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r8.TicketId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r8.InvoiceNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r8.QuoteId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r8.RequestId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r8.TicketType === "Recurring Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("A", x_r8.AppointmentStart)("B", x_r8.AppointmentEnd)("C", x_r8.CreatedUtcDate)("T", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r8.OneOffAppointmentDate === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r8.Rescheduled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r8.CustomerAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", x_r8.Status)("OverDueDays", x_r8.OverDueDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("TicketTeams", x_r8.TicketTeams)("localPrependUrl", ctx_r6.localPrependUrl)("Reallocate", x_r8.Reallocate)("Id", x_r8.Id)("TicketId", x_r8.TicketId);
        }
      }

      function TicketHistoryComponent_table_95_td_17_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Record!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TicketHistoryComponent_table_95_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketHistoryComponent_table_95_td_17_i_1_Template, 2, 0, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.ticketService.TicketLocalList);
        }
      }

      function TicketHistoryComponent_table_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TicketHistoryComponent_table_95_tr_14_Template, 20, 19, "tr", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TicketHistoryComponent_table_95_td_17_Template, 2, 1, "td", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currentUser.Ticket, "\xA0No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currentUser.Ticket, " Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currentUser.Engineer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.ticketService.TicketLocalList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.ticketService.TicketLocalList.length === 0);
        }
      }

      function TicketHistoryComponent_i_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 81);
        }
      }

      var TicketHistoryComponent = /*#__PURE__*/function () {
        function TicketHistoryComponent(titleService, propertyService, ticketService, logService, loginservice, router) {
          var _this24 = this;

          _classCallCheck(this, TicketHistoryComponent);

          this.titleService = titleService;
          this.propertyService = propertyService;
          this.ticketService = ticketService;
          this.logService = logService;
          this.loginservice = loginservice;
          this.router = router;
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.loginservice.currentUser.subscribe(function (x) {
            return _this24.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
          this.propertyService.Propertylist = [];
          this.ticketService.Ticketlist = [];
          this.ticketService.TicketLocalList = [];
          this.TotalOpenCount = 0;
          this.TotalClosedCount = 0;
          this.TotalOverdueCount = 0;
          this.TotalDuein15DaysCount = 0;
          this.tempProId = 'All Property';
          this.PropOptions = [];
          this.optVar = new Object();
          this.data = [];
          this.tempIndex = 1;
        }

        _createClass(TicketHistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.ClientName = '';

            if (this.ticketService.formData.PropertyId === '00000000-0000-0000-0000-000000000000' || this.ticketService.formData.PropertyId === null) {
              this.router.navigate(['/tickets']);
            }

            if (this.ticketService.formData.CustomerId === '00000000-0000-0000-0000-000000000000' || this.ticketService.formData.CustomerId === null) {
              this.router.navigate(['/tickets']);
            }

            this.titleService.setTitle('Ticket History | Genic Solution');
            this.propertyService.refrestPropertylistCustomerWise(this.currentUser.Token, this.ticketService.formData.CustomerId).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this25.propertyService.Propertylist = _this25.propertyService.locallist = response.result;
                  _this25.propertyService.locallist = _this25.propertyService.Propertylist.filter(function (x) {
                    return x.IsActive === true;
                  });
                  setTimeout(function () {
                    _this25.ticketService.TicketLocalList = _this25.ticketService.Ticketlist.filter(function (u) {
                      return u.PropertyId === _this25.ticketService.formData.PropertyId;
                    });
                  }, 1000);
                  _this25.tempProId = _this25.ticketService.formData.PropertyId;

                  _this25.data.push(_this25.optVar.text = 'All Property');

                  _this25.propertyService.Propertylist.forEach(function (el) {
                    _this25.optVar.id = el.Id;
                    _this25.optVar.text = el.AddressStreet1 + ' ' + el.AddressStreet2 + ' ' + el.AddressUnitNo + ' ' + el.AddressCity + ' ' + el.AddressState + ' ' + el.AddressCountry + ' ' + el.AddressZipCode;

                    _this25.data.push(_this25.optVar);

                    _this25.optVar = new Object();
                    _this25.options = {
                      placeholder: 'en-us'
                    };
                    var tempOpt = JSON.parse(JSON.stringify(_this25.options));
                    tempOpt.placeholder = 'Không tìm thấy';
                    _this25.options = tempOpt;
                  });

                  _this25.data.forEach(function (s) {
                    if (s.id === _this25.ticketService.formData.PropertyId) {
                      _this25.data[_this25.tempIndex - 1].selected = true;
                    }

                    _this25.tempIndex++;
                  });
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.ticketService.refrestTicketListByCustomer(this.ticketService.formData.CustomerId);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.CalculateTicketCount();
          }
        }, {
          key: "CalculateTicketCount",
          value: function CalculateTicketCount() {
            var _this26 = this;

            setTimeout(function () {
              var currentUTCDate = new Date();
              var todaydate = new Date(Date.UTC(currentUTCDate.getFullYear(), currentUTCDate.getMonth(), currentUTCDate.getDate(), 0, 0, 0));
              var date15DayEarly = new Date(Date.UTC(currentUTCDate.getFullYear(), currentUTCDate.getMonth(), currentUTCDate.getDate() - 15, 0, 0, 0));
              _this26.TotalOpenCount = _this26.ticketService.TicketLocalList.filter(function (x) {
                return x.Status === 'UPCOMING' || x.Status === 'OVERDUE' || x.Status === 'INPROGRESS' || x.Status === 'HOLD';
              }).length;
              _this26.TotalClosedCount = _this26.ticketService.TicketLocalList.filter(function (x) {
                return x.Status === 'CLOSED';
              }).length;
              _this26.TotalOverdueCount = _this26.ticketService.TicketLocalList.filter(function (x) {
                return new Date(x.OneOffAppointmentDate) < new Date(todaydate) && x.Status === 'OVERDUE';
              }).length;
              _this26.TotalDuein15DaysCount = _this26.ticketService.TicketLocalList.filter(function (x) {
                return new Date(x.OneOffAppointmentDate) < new Date(date15DayEarly) && x.Status !== 'CLOSED';
              }).length;
              _this26.ClientName = _this26.propertyService.Propertylist[0].CustomerName;
            }, 1500);
          }
        }, {
          key: "ViewTicketDetails",
          value: function ViewTicketDetails(x) {
            this.router.navigate(['/properties/ticket-history-view-details/' + x.Id]);
          }
        }, {
          key: "OpenAssinedEngineerDialog",
          value: function OpenAssinedEngineerDialog() {}
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {}
        }, {
          key: "valueChange",
          value: function valueChange(event) {
            var _this27 = this;

            this.tempProId = event.id;
            this.ticketService.TicketLocalList = [];

            if (this.tempProId === 'All Property') {
              this.ticketService.TicketLocalList = this.ticketService.Ticketlist;
            } else {
              this.ticketService.TicketLocalList = this.ticketService.Ticketlist.filter(function (el) {
                return el.PropertyId === _this27.tempProId;
              });
            }

            this.CalculateTicketCount();
          }
        }]);

        return TicketHistoryComponent;
      }();

      TicketHistoryComponent.ɵfac = function TicketHistoryComponent_Factory(t) {
        return new (t || TicketHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_6__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
      };

      TicketHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TicketHistoryComponent,
        selectors: [["app-ticket-history"]],
        decls: 98,
        vars: 16,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard", 4, "ngIf"], ["href", "javascript:;", "routerLink", "/engineer/engineer-dashboard", 4, "ngIf"], ["class", "kt-subheader__separator kt-hidden", 4, "ngIf"], ["class", "kt-subheader__breadcrumbs", 4, "ngIf"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], [1, "kt-subheader__wrapper"], ["on", "", "onclick", "window.history.back()", 1, "btn", "btn-primary", "text-white"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__visual", "kt-widget17__visual--chart", "kt-portlet-fit--top", "kt-portlet-fit--sides", 2, "background-color", "#fd397a"], [1, "kt-widget17__stats"], [1, "kt-widget17__items"], [1, "row", "mrg-top-10"], [1, "col-lg-3"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--brand", "kt-iconbox--animate-slower"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z", "id", "Combined-Shape-Copy", "fill", "#000000", "opacity", "0.3", "transform", "translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) "], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], [1, "kt-link"], [1, "kt-iconbox__content"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--success", "kt-iconbox--animate-slow"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--warning", "kt-iconbox--animate-fast"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--danger", "kt-iconbox--animate-faster"], [1, "kt-section", "kt-drop-section"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading", 2, "padding", "12px 8px"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "scFilter"], [2, "width", "330px"], [1, "mysearchprop", 3, "data", "options", "valueChange"], [1, "panel-body"], ["class", "table table-striped- table-bordered table-hover table-checkable", 4, "ngIf"], [1, "row"], ["class", "fa fa-spinner fa-spin", 4, "ngIf"], ["href", "javascript:;", "routerLink", "/dashboard"], ["href", "javascript:;", "routerLink", "/engineer/engineer-dashboard"], ["href", "javascript:;", "routerLink", "/properties", 1, "kt-subheader__breadcrumbs-link"], [1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable"], [2, "width", "5%"], [2, "width", "23%"], [2, "width", "27%"], [2, "width", "3%"], [2, "width", "17%"], ["class", "quote-list-view-info odd", "role", "row", 4, "ngFor", "ngForAsync", "ngForOf"], ["colspan", "10", "style", "text-align: center;", 4, "ngIf"], ["role", "row", 1, "quote-list-view-info", "odd"], [1, "btn", "btn-label-primary"], ["href", "javascript:;", 3, "click"], ["class", "btn btn-label-danger btn-pill invoices-btn", 4, "ngIf"], ["class", "btn btn-label-success btn-pill reallocated-one", 4, "ngIf"], ["class", "recurring-ticket", 4, "ngIf"], [3, "A", "B", "C", "T", "AChange", "BChange", "CChange"], ["class", "ticketstatus statusunallocated", 4, "ngIf"], ["class", "ticketstatus statusrescheduled", 4, "ngIf"], [1, "text-center"], [3, "Status", "OverDueDays", "StatusChange", "OverDueDaysChange"], [3, "TicketTeams", "localPrependUrl", "Reallocate", "Id", "TicketId", "TicketTeamsChange", "localPrependUrlChange", "ReallocateChange", "IdChange", "TicketIdChange"], [1, "btn", "btn-label-danger", "btn-pill", "invoices-btn"], [1, "btn", "btn-label-success", "btn-pill", "reallocated-one"], [1, "recurring-ticket"], [1, "ticketstatus", "statusunallocated"], [1, "ticketstatus", "statusrescheduled"], ["colspan", "10", 2, "text-align", "center"], [4, "ngIf"], [1, "fa", "fa-spinner", "fa-spin"]],
        template: function TicketHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketHistoryComponent_a_5_Template, 2, 0, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketHistoryComponent_a_6_Template, 2, 0, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketHistoryComponent_span_7_Template, 1, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TicketHistoryComponent_div_8_Template, 5, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Client History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "g", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "rect", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "g", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rect", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "svg", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "g", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "rect", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Due in 15 days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h1", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "l-select2", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TicketHistoryComponent_Template_l_select2_valueChange_93_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, TicketHistoryComponent_table_95_Template, 18, 5, "table", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, TicketHistoryComponent_i_97_Template, 1, 0, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type !== "Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type === "Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type !== "Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Type !== "Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Open ", ctx.currentUser.Ticket, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalOpenCount, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Closed ", ctx.currentUser.Ticket, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalClosedCount, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Overdue ", ctx.currentUser.Ticket, "s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalOverdueCount, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalDuein15DaysCount, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Client History (", ctx.ClientName, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketService.TicketLocalList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ticketService.TicketLocalList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_select2__WEBPACK_IMPORTED_MODULE_10__["LSelect2Component"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _generic_utils_Ticket_Date_Time_Format_TicketDateTimeFormat_component__WEBPACK_IMPORTED_MODULE_11__["TicketDateTimeFormatComponent"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_12__["TicketStatusComponent"], _generic_utils_Ticket_Team_List_TicketTeamList_component__WEBPACK_IMPORTED_MODULE_13__["TicketTeamListComponent"]],
        styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;padding: 10px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;padding: 10px;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#EAEAEA;color:black !important;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{background-color:white !important;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{color:black !important;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;bottom:0;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]   .btn.btn-brand[_ngcontent-%COMP%]{background-color:#2C77F4 !important;border:1px solid transparent !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c3e7fa !important;}\r\n.kt-iconbox--wave[_ngcontent-%COMP%]{background-color: #ff853329;border: 1px solid #ff8533;}\r\n.kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{fill: #ff8533;}\r\n.btn-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%], .btn-group-sm[_ngcontent-xmv-c1][_ngcontent-%COMP%]    > .btn[_ngcontent-xmv-c1][_ngcontent-%COMP%]{padding:0.5rem 0.7rem;}\r\n.table-checkable[_ngcontent-%COMP%]   .customer-list-view-info[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:0.5rem 0.7rem;}\r\n.dropdown-menu.show[_ngcontent-%COMP%] {margin-left: -105px;}\r\n.myselectClass[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color: #fff !important;background-color: #ff8533 !important;}\r\n.switcher-customer[_ngcontent-%COMP%]{top:-15px;position:relative}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-color:#FF8533 !important;}\r\n.col-md-12.section-client-requst-form[_ngcontent-%COMP%]{border-left:1px solid #ddd !important;border-right:1px solid #ddd !important;}\r\n.cust-border[_ngcontent-%COMP%] { border: 1px solid rgb(192, 183, 183); text-align: center;}\r\n.cust-border-1[_ngcontent-%COMP%] { text-align: center;}\r\n.cust-border-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 60px; color: #959191; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydGllcy9wcm9wZXJ0eS1saXN0L3Byb3BlcnR5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO0FBQzFELG9DQUFvQyxtQkFBbUIsQ0FBQztBQUN4RCx5Q0FBeUMsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3RHLHVDQUF1QyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ2xFLGdDQUFnQyx3QkFBd0IsQ0FBQztBQUN6RCxrQ0FBa0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDN0UsaUNBQWlDLGtCQUFrQixDQUFDO0FBQ3BELGlDQUFpQyx3QkFBd0IsQ0FBQztBQUMxRCw2QkFBNkIsc0JBQXNCLENBQUMsV0FBVyxDQUFDO0FBQ2hFLDBDQUEwQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7QUFDekUsOENBQThDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQztBQUN2Rix5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUM7QUFDdkUsZUFBZSx3QkFBd0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUNsRSw0QkFBNEIsVUFBVSxDQUFDLHlCQUF5QixDQUFDO0FBQ2pFLGtDQUFrQyx5QkFBeUIsQ0FBQztBQUM1RCx3RUFBd0UseUJBQXlCLENBQUMsY0FBYztBQUNoSCx5R0FBeUcsa0JBQWtCLEVBQUU7QUFDN0gsa0RBQWtELHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN2Rix3REFBd0Qsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQy9GLHFFQUFxRSxXQUFXLENBQUM7QUFDakYsNkNBQTZDLFdBQVcsQ0FBQztBQUN6RCwyREFBMkQsd0JBQXdCLENBQUM7QUFDcEYsbUVBQW1FLGVBQWUsQ0FBQztBQUNuRiwyREFBMkQsZ0JBQWdCLENBQUM7QUFDNUUsMkNBQTJDLGNBQWMsQ0FBQztBQUMxRCxpQ0FBaUMsY0FBYyxDQUFDO0FBQ2hELHVCQUF1QixnQkFBZ0IsQ0FBQztBQUN4QywyQ0FBMkMsK0JBQStCLENBQUM7QUFDM0UsMkJBQTJCLGFBQWEsQ0FBQztBQUN6Qyw2QkFBNkIsaUJBQWlCLENBQUM7QUFDL0MsaUNBQWlDLGlDQUFpQyxDQUFDO0FBQ25FLDJCQUEyQixzQkFBc0IsQ0FBQztBQUNsRCwyREFBMkQsd0JBQXdCLENBQUMsc0JBQXNCLENBQUM7QUFDM0csNkNBQTZDLHNCQUFzQixDQUFDO0FBQ3BFLG1FQUFtRSxpQ0FBaUMsQ0FBQztBQUNyRyxpQ0FBaUMsc0JBQXNCLENBQUM7QUFDeEQsMENBQTBDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7QUFDM0YseURBQXlELG1DQUFtQyxDQUFDLHVDQUF1QyxDQUFDO0FBQ3JJLDJDQUEyQyx3QkFBd0IsQ0FBQztBQUNwRSxrQkFBa0IsMkJBQTJCLENBQUMseUJBQXlCLENBQUM7QUFDeEUsc0JBQXNCLGFBQWEsQ0FBQztBQUNwQyx1RkFBdUYscUJBQXFCLENBQUM7QUFDN0csMERBQTBELHFCQUFxQixDQUFDO0FBQ2hGLHFCQUFxQixtQkFBbUIsQ0FBQztBQUN6QyxzQkFBc0Isc0JBQXNCLENBQUMsb0NBQW9DLENBQUM7QUFDbEYsbUJBQW1CLFNBQVMsQ0FBQyxpQkFBaUI7QUFDOUMsc0NBQXNDLCtCQUErQixDQUFDO0FBQ3RFLHNDQUFzQyxxQ0FBcUMsQ0FBQyxzQ0FBc0MsQ0FBQztBQUNuSCxlQUFlLG9DQUFvQyxFQUFFLGtCQUFrQixDQUFDO0FBQ3hFLGlCQUFpQixrQkFBa0IsQ0FBQztBQUNwQyxxQkFBcUIsZUFBZSxFQUFFLGNBQWMsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb3BlcnRpZXMvcHJvcGVydHktbGlzdC9wcm9wZXJ0eS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6ICNmZjg1MzM7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllc3tiYWNrZ3JvdW5kOiAjYzNlN2ZhO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgLmJ0bntwYWRkaW5nOiAwLjI1cmVtIDAuN3JlbTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7Y29sb3I6d2hpdGU7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllcyBoNXtjb2xvcjpibGFjaztmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkubW9kYWwtYm9keSBwe2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjazt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5IC5mb3JuLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5YSAuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRDQTt9XHJcbi5uZXdfY2xpZW50c19wcm9wZXJ0aWVzX2JvZHl7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXI6bm9uZTt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjE1cHg7cGFkZGluZzogMTBweDt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmEzODtwYWRkaW5nOiAxMHB4O31cclxuLmt0LXdpZGdldDQua3Qtc2Nyb2xsLnBze292ZXJmbG93LXk6YXV0byAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6MTBweDt9XHJcbi5rdC1mb250LWJyYW5ke2NvbG9yOiNhZWFlYWUgIWltcG9ydGFudDtmb250LXNpemU6MTJweCAhaW1wb3J0YW50O31cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOiA2cHg7YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTt9XHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NENBO31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvLnByb3BlcnR5LWxpc3QtZHluYW1pYy1jbGFzcyAuYnRuLWxhYmVsLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhIDtjb2xvcjogIzAwODRDQX1cclxuLmN1c3RvbWVyLWxpc3QtbWFpbi1zZWN0aW9uIC5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0tLXNlYXJjaC5kcm9wZG93bi5ib290bS1maWx0ZXJ7bWFyZ2luLWJvdHRvbToyMHB4Ozt9XHJcbi5rdC1zZWxlY3RwaWNrZXIuYnRuLmJ0bi1sYWJlbC1zdWNjZXNzLnB1bGwtcmlnaHR7YmFja2dyb3VuZC1jb2xvcjojRkY4NTMzO2NvbG9yOndoaXRlO31cclxuLmt0LXNlbGVjdHBpY2tlci5idG4uYnRuLWxhYmVsLXN1Y2Nlc3MucHVsbC1yaWdodDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmE7Y29sb3I6IzAwODRDQTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5uZXctcHJvcGVydGllcy1wb3B1cGNyZWF0ZS10ZXh0e2NvbG9yOndoaXRlO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5hbGVydC1pY29uIGl7Y29sb3I6d2hpdGU7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwODRjYTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybXtwYWRkaW5nOjBweCAwcHg7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e3BhZGRpbmc6OHB4IDIwcHg7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmFsZXJ0LWljb257Zm9udC1zaXplOjIwcHg7fVxyXG4ubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1hcHBsaWNhdGlvbnN7cGFkZGluZzowcHggMTVweDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjAuNHJlbSAhaW1wb3J0YW50O31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIGF7ZGlzcGxheTpibG9jazt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyBhIGl7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0tMXtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNkN2Q3ZDc7fVxyXG4uc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcntoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNFQUVBRUE7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuYWxlcnQtaWNvbiBpe2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm17YmFja2dyb3VuZC1jb2xvcjp3aGl0ZSAhaW1wb3J0YW50O31cclxuLm5ldy1wcm9wZXJ0aWVzLXBvcHVwY3JlYXRlLXRleHR7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVye3Bvc2l0aW9uOnN0aWNreTtwb3NpdGlvbjotd2Via2l0LXN0aWNreTtib3R0b206MDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVyIC5idG4uYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzJDNzdGNCAhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyAuYnRuLWdyb3VwIC5idG4gaXtjb2xvcjojYzNlN2ZhICFpbXBvcnRhbnQ7fVxyXG4ua3QtaWNvbmJveC0td2F2ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzMjk7Ym9yZGVyOiAxcHggc29saWQgI2ZmODUzMzt9XHJcbi5rdC1zdmctaWNvbiBnIFtmaWxsXXtmaWxsOiAjZmY4NTMzO31cclxuLmJ0bi1zbVtfbmdjb250ZW50LXhtdi1jMV0sIC5idG4tZ3JvdXAtc21bX25nY29udGVudC14bXYtYzFdID4gLmJ0bltfbmdjb250ZW50LXhtdi1jMV17cGFkZGluZzowLjVyZW0gMC43cmVtO31cclxuLnRhYmxlLWNoZWNrYWJsZSAuY3VzdG9tZXItbGlzdC12aWV3LWluZm8gLmJ0bi1ncm91cCAuYnRue3BhZGRpbmc6MC41cmVtIDAuN3JlbTt9XHJcbi5kcm9wZG93bi1tZW51LnNob3cge21hcmdpbi1sZWZ0OiAtMTA1cHg7fVxyXG4ubXlzZWxlY3RDbGFzcyBidXR0b257Y29sb3I6ICNmZmYgIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NTMzICFpbXBvcnRhbnQ7fVxyXG4uc3dpdGNoZXItY3VzdG9tZXJ7dG9wOi0xNXB4O3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG4uY29sLW1kLTEyLnNlY3Rpb24tY2xpZW50LXJlcXVzdC1mb3Jte2JvcmRlci1jb2xvcjojRkY4NTMzICFpbXBvcnRhbnQ7fVxyXG4uY29sLW1kLTEyLnNlY3Rpb24tY2xpZW50LXJlcXVzdC1mb3Jte2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7fVxyXG4uY3VzdC1ib3JkZXIgeyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkyLCAxODMsIDE4Myk7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5jdXN0LWJvcmRlci0xIHsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLmN1c3QtYm9yZGVyLTEgYSBpIHsgZm9udC1zaXplOiA2MHB4OyBjb2xvcjogIzk1OTE5MTsgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketHistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ticket-history',
            templateUrl: './ticket-history.component.html',
            styleUrls: ['../property-list/property-list.component.css']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }, {
            type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]
          }, {
            type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"]
          }, {
            type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_6__["UserlogService"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=application-properties-properties-module-es5.js.map