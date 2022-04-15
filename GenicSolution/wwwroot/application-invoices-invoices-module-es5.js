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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-invoices-invoices-module"], {
    /***/
    "/pTQ":
    /*!***********************************************************************************************************************************************!*\
      !*** ./src/app/application/invoices/invoice-plane-invoice-customer-property-popup/invoice-plane-invoice-customer-property-popup.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: InvoicePlaneInvoiceCustomerPropertyPopupComponent */

    /***/
    function pTQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicePlaneInvoiceCustomerPropertyPopupComponent", function () {
        return InvoicePlaneInvoiceCustomerPropertyPopupComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/invoice.service */
      "py7r");
      /* harmony import */


      var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/property.service */
      "Pffd");
      /* harmony import */


      var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/customer.service */
      "0zL+");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "7itd");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__);

      function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_div_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.redirect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create new Property ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_div_10_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var x_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.onClick(x_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r7 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r4.localPrependUrl, "/assets/media/client-logos/logo1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", x_r7.AddressStreet1, " ", x_r7.AddressStreet2, " ", x_r7.AddressUnitNo, " ", x_r7.AddressCountry, " ", x_r7.AddressZipCode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r7.CustomerName, " ");
        }
      }

      function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Which property would you like to select for ticket ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_Template_input_keydown_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onkeypress($event.target.value);
          })("keyup", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_Template_input_keyup_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.onkeypress($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_div_6_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_div_7_Template, 4, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_div_10_Template, 8, 7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.Permissions.PropertyCreate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.Permissions.PropertyCreate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.service.locallist);
        }
      }

      function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_a_54_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 75);
        }
      }

      function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_a_54_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 76);
        }
      }

      function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_a_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_a_54_i_1_Template, 1, 0, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_a_54_i_2_Template, 1, 0, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.IsPostalSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.IsPostalSearch);
        }
      }

      function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_option_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", x_r27.CountryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r27.CountryName, " ");
        }
      }

      function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.service.formData.Id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.service.formData.CustomerId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.service.formData.CustomerName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.service.formData.Latitude = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.service.formData.Longitude = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Address Street 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 49, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAddressChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_input_onAddressChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.handleAddressChange($event);
          })("ngModelChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.service.formData.AddressStreet1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Address Street 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 51, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.service.formData.AddressStreet2 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Address Unit No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 53, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.service.formData.AddressUnitNo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Postal Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 57, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_input_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.service.formData.AddressZipCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_a_54_Template, 3, 2, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 63, 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_select_ngModelChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.service.formData.AddressCountry = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_option_63_Template, 2, 2, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_button_click_66_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.onBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template_button_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Create ");

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
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.CustomerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.CustomerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.Latitude);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.Longitude);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Property for ", ctx_r1.invoiceService.InvoiceData.CustomerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.options)("ngModel", ctx_r1.service.formData.AddressStreet1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.AddressStreet2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.AddressUnitNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.AddressZipCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.service.formData.AddressZipCode.toString().length === 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.service.formData.AddressCountry);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.countrylist);
        }
      }

      var InvoicePlaneInvoiceCustomerPropertyPopupComponent = /*#__PURE__*/function () {
        function InvoicePlaneInvoiceCustomerPropertyPopupComponent(router, rout, genicprofileservice, http, toastr, dialogRef, invoiceService, service, customerService, loginservice) {
          var _this = this;

          _classCallCheck(this, InvoicePlaneInvoiceCustomerPropertyPopupComponent);

          this.router = router;
          this.rout = rout;
          this.genicprofileservice = genicprofileservice;
          this.http = http;
          this.toastr = toastr;
          this.dialogRef = dialogRef;
          this.invoiceService = invoiceService;
          this.service = service;
          this.customerService = customerService;
          this.loginservice = loginservice;
          this.isValidZipCode = true;
          this.isValidCountry = true;
          this.IsPropertyCreate = true;
          this.zoom = 8;
          this.options = {
            componentRestrictions: {
              country: ['SG']
            }
          };
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
          this.loginservice.currentUser.subscribe(function (x) {
            return _this.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        }

        _createClass(InvoicePlaneInvoiceCustomerPropertyPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.IsPropertyCreate = true;
            this.service.Propertylist = [];
            this.service.refrestPropertylistCustomerWise(this.currentUser.Token, this.customerService.formData.Id).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this2.service.Propertylist = _this2.service.locallist = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
            setTimeout(function () {
              _this2.service.locallist = _this2.service.Propertylist.filter(function (x) {
                return x.IsActive === true;
              });
            }, 1000);
            this.service.formData.CustomerId = this.customerService.formData.Id;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            if (this.service.formData.AddressZipCode === '' || this.service.formData.AddressZipCode === undefined) {
              this.isValidZipCode = false;
              this.toastr.warning('', 'ZipCode is required!');
              return false;
            }

            if (this.service.formData.AddressCountry === '' || this.service.formData.AddressCountry === undefined) {
              this.isValidCountry = false;
              this.toastr.warning('', 'Country is required!');
              return false;
            }

            this.service.AddNewProperty().subscribe(function (res) {
              if (res) {
                setTimeout(function () {
                  _this3.toastr.success('', 'Property is added');

                  _this3.service.Propertylist = res;
                }, 400);
                setTimeout(function () {
                  _this3.service.locallist = _this3.service.Propertylist.filter(function (x) {
                    return x.IsActive === true;
                  });
                }, 1000);
                _this3.IsPropertyCreate = true;
                setTimeout(function () {
                  _this3.service.formData.AddressStreet1 = '';
                  _this3.service.formData.AddressStreet2 = '';
                  _this3.service.formData.AddressCity = '';
                  _this3.service.formData.AddressState = '';
                  _this3.service.formData.AddressUnitNo = '';
                  _this3.service.formData.AddressZipCode = '';
                }, 1500);
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onClick",
          value: function onClick(a) {
            var _this4 = this;

            if (a === undefined) {
              this.dialogRef.close();
            } else {
              this.dialogRef.close({
                a: a
              });
              this.invoiceService.InvoiceData.CustomerAddress = a.AddressStreet1 + ' ' + a.AddressStreet2 + ' ' + a.AddressUnitNo + ' ' + a.AddressCountry + ' ' + a.AddressZipCode;

              try {
                this.invoiceService.InvoiceData.CustomerEmail = this.customerService.formData.ArrayofKeys.filter(function (s) {
                  return s.IsDefault === true && s.Type === 'Email';
                })[0].Value;
              } catch (_a) {}

              try {
                this.invoiceService.InvoiceData.CustomerContactNo = this.customerService.formData.ArrayofKeys.filter(function (s) {
                  return s.IsDefault === true && s.Type === 'Phone';
                })[0].Value;
              } catch (_b) {}

              setTimeout(function () {
                _this4.router.navigate(['/invoices/invoice-add-plane-url']);
              }, 500);
            }
          }
        }, {
          key: "redirect",
          value: function redirect() {
            var _this5 = this;

            this.IsPropertyCreate = false;
            this.genicprofileservice.getCountryList(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this5.countrylist = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onBack",
          value: function onBack() {
            this.IsPropertyCreate = true;
          }
        }, {
          key: "onkeypress",
          value: function onkeypress(value) {
            this.service.locallist = this.service.Propertylist.filter(function (item) {
              return item.AddressStreet1.toLowerCase().match(value.toLowerCase()) || item.AddressStreet2.toLowerCase().match(value.toLowerCase()) || item.AddressCity.toLowerCase().match(value.toLowerCase()) || item.AddressState.toLowerCase().match(value.toLowerCase()) || item.AddressZipCode.toLowerCase().match(value.toLowerCase()) || item.AddressCountry.toLowerCase().match(value.toLowerCase());
            });
          }
        }, {
          key: "handleAddressChange",
          value: function handleAddressChange(address) {
            var _this6 = this;

            this.service.formData.AddressStreet1 = '';
            this.service.formData.AddressStreet2 = '';
            this.service.formData.AddressCity = '';
            this.service.formData.AddressState = '';
            this.service.formData.AddressUnitNo = '';
            this.service.formData.AddressZipCode = '';
            this.service.formData.AddressCountry = '';
            this.lat = address.geometry.location.lat();
            this.lng = address.geometry.location.lng();
            address.address_components.forEach(function (element) {
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

                case 'sublocality_level_1':
                  {
                    _this6.sublocality_level_1 = element.long_name + ' ';
                    break;
                  }

                case 'sublocality_level_2':
                  {
                    _this6.sublocality_level_2 = element.long_name + ' ';
                    break;
                  }

                case 'sublocality_level_3':
                  {
                    _this6.sublocality_level_3 = element.long_name + ' ';
                    break;
                  }

                case 'neighborhood':
                  {
                    _this6.neighborhood = element.long_name + ' ';
                    break;
                  }

                case 'route':
                  {
                    _this6.route = element.long_name + ' ';
                    break;
                  }

                case 'street_number':
                  {
                    _this6.street_number = element.long_name + ' ';
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
        }]);

        return InvoicePlaneInvoiceCustomerPropertyPopupComponent;
      }();

      InvoicePlaneInvoiceCustomerPropertyPopupComponent.ɵfac = function InvoicePlaneInvoiceCustomerPropertyPopupComponent_Factory(t) {
        return new (t || InvoicePlaneInvoiceCustomerPropertyPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_3__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_8__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]));
      };

      InvoicePlaneInvoiceCustomerPropertyPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvoicePlaneInvoiceCustomerPropertyPopupComponent,
        selectors: [["app-invoice-plane-invoice-customer-property-popup"]],
        decls: 7,
        vars: 2,
        consts: [[1, "modal-header", "select-new-properties"], ["id", "exampleModalLabel", 1, "modal-title"], ["mat-dialog-close", "", 1, "btn", "btn-default", "pull-right"], ["class", "modal-body property-modal-body", 4, "ngIf"], [1, "modal-body", "property-modal-body"], [1, "row", "forn-group"], [1, "col-md-7"], ["type", "text", "placeholder", "Search Clients...", 1, "form-control", 3, "keydown", "keyup"], ["class", "col-md-1 text-center", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], [1, "kt-portlet__body", "new_clients_properties_body"], ["data-scroll", "true", "data-height", "220", 1, "kt-widget4", "kt-scroll", "ps", 2, "height", "220px", "overflow", "hidden"], ["class", "kt-widget4__item create-quote-client-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-1", "text-center"], [1, "col-md-4"], ["on", "", 1, "btn", "btn-brand", "text-white", 3, "click"], [1, "la", "la-plus"], [1, "kt-widget4__item", "create-quote-client-item", 3, "click"], [1, "kt-widget4__pic", "kt-widget4__pic--logo"], ["alt", "", 3, "src"], [1, "kt-widget4__info"], [1, "kt-widget4__text"], [1, "kt-widget4__title"], ["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["type", "hidden", "name", "Id", 3, "ngModel", "ngModelChange"], ["Id", "ngModel"], ["type", "hidden", "name", "CustomerId", 3, "ngModel", "ngModelChange"], ["CustomerId", "ngModel"], ["type", "hidden", "name", "CustomerName", 3, "ngModel", "ngModelChange"], ["CustomerName", "ngModel"], ["type", "hidden", "name", "Latitude", 3, "ngModel", "ngModelChange"], ["Latitude", "ngModel"], ["type", "hidden", "name", "Longitude", 3, "ngModel", "ngModelChange"], ["Longitude", "ngModel"], [1, "creat-properties-form-main-section"], [1, "kt-container", "kt-container--fluid"], [1, "create_properties-filter_form", "create_properties-filter_form-1"], [1, "form-group", "form-group-last"], ["role", "alert", 1, "alert", "alert-secondary"], [1, "alert-icon"], [1, "fa", "fa-building"], [1, "new-properties-popupcreate-text"], [1, "row", "property-applications"], [1, "col-md-12"], [1, "create_properties-filter_form"], [1, "form-group", "row", "creat-properties-form-group"], [1, "col-lg-12"], [1, "form-group"], ["for", "", 1, "label"], ["name", "AddressStreet1", "ngx-google-places-autocomplete", "", "placeholder", "Address Street 1", "maxlength", "128", 1, "form-control", 3, "options", "ngModel", "onAddressChange", "ngModelChange"], ["AddressStreet1", "ngModel"], ["name", "AddressStreet2", "placeholder", "Address Street 2", "maxlength", "128", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressStreet2", "ngModel"], ["name", "AddressUnitNo", "placeholder", "Address Unit No", "maxlength", "16", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressUnitNo", "ngModel"], [1, "col-lg-6", "padding-right-mo-10", 2, "padding-right", "0px"], [1, "input-group"], ["name", "AddressZipCode", "min", "5", "maxlength", "6", "placeholder", "Postal Code", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressZipCode", "ngModel"], [1, "input-group-prepend"], [1, "input-group-text"], ["href", "javascript:;", 4, "ngIf"], [1, "col-lg-6", "padding-left-mo-10", 2, "padding-left", "0px"], ["name", "AddressCountry", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressCountry", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xl-12"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-angle-double-left"], ["type", "submit", 1, "btn", "btn-brand", 3, "click"], ["href", "javascript:;"], ["class", "la la-refresh", 4, "ngIf"], ["class", "la la-spinner fa-spin", 4, "ngIf"], [1, "la", "la-refresh"], [1, "la", "la-spinner", "fa-spin"], [3, "value"]],
        template: function InvoicePlaneInvoiceCustomerPropertyPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select or create a Property");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_5_Template, 11, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InvoicePlaneInvoiceCustomerPropertyPopupComponent_div_6_Template, 72, 14, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsPropertyCreate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsPropertyCreate);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"]],
        styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vaW52b2ljZXMvaW52b2ljZS1wbGFuZS1pbnZvaWNlLWN1c3RvbWVyLXByb3BlcnR5LXBvcHVwL2ludm9pY2UtcGxhbmUtaW52b2ljZS1jdXN0b21lci1wcm9wZXJ0eS1wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsd0JBQXdCLENBQUMscUJBQXFCLENBQUM7QUFDMUQsb0NBQW9DLG1CQUFtQixDQUFDO0FBQ3hELHlDQUF5Qyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUM7QUFDdEcsdUNBQXVDLFdBQVcsQ0FBQyxjQUFjLENBQUM7QUFDbEUsZ0NBQWdDLHdCQUF3QixDQUFDO0FBQ3pELGtDQUFrQyxjQUFjLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztBQUM3RSxpQ0FBaUMsa0JBQWtCLENBQUM7QUFDcEQsaUNBQWlDLHdCQUF3QixDQUFDO0FBQzFELDZCQUE2QixzQkFBc0IsQ0FBQyxXQUFXLENBQUM7QUFDaEUsMENBQTBDLGdCQUFnQixDQUFDO0FBQzNELDhDQUE4QywwQkFBMEIsQ0FBQztBQUN6RSx5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUM7QUFDdkUsZUFBZSx3QkFBd0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUNsRSw0QkFBNEIsVUFBVSxDQUFDLHlCQUF5QixDQUFDO0FBQ2pFLGtDQUFrQyx5QkFBeUIsQ0FBQztBQUM1RCx3RUFBd0UseUJBQXlCLENBQUMsY0FBYztBQUNoSCx5R0FBeUcsa0JBQWtCLEVBQUU7QUFDN0gsa0RBQWtELHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN2Rix3REFBd0Qsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQy9GLHFFQUFxRSxXQUFXLENBQUM7QUFDakYsNkNBQTZDLFdBQVcsQ0FBQztBQUN6RCwyREFBMkQsd0JBQXdCLENBQUM7QUFDcEYsbUVBQW1FLGVBQWUsQ0FBQztBQUNuRiwyREFBMkQsZ0JBQWdCLENBQUM7QUFDNUUsMkNBQTJDLGNBQWMsQ0FBQztBQUMxRCxpQ0FBaUMsY0FBYyxDQUFDO0FBQ2hELHVCQUF1QixnQkFBZ0IsQ0FBQztBQUN4QywyQ0FBMkMsK0JBQStCLENBQUM7QUFDM0UsMkJBQTJCLGFBQWEsQ0FBQztBQUN6Qyw2QkFBNkIsaUJBQWlCLENBQUM7QUFDL0MsaUNBQWlDLGlDQUFpQyxDQUFDO0FBQ25FLDJCQUEyQixzQkFBc0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2ludm9pY2VzL2ludm9pY2UtcGxhbmUtaW52b2ljZS1jdXN0b21lci1wcm9wZXJ0eS1wb3B1cC9pbnZvaWNlLXBsYW5lLWludm9pY2UtY3VzdG9tZXItcHJvcGVydHktcG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYnJhbmR7YmFja2dyb3VuZC1jb2xvcjojZmY4NTMzO2JvcmRlci1jb2xvcjogI2ZmODUzMzt9XHJcbi5tb2RhbC1oZWFkZXIuc2VsZWN0LW5ldy1wcm9wZXJ0aWVze2JhY2tncm91bmQ6ICNjM2U3ZmE7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllcyAuYnRue3BhZGRpbmc6IDAuMjVyZW0gMC43cmVtO2JhY2tncm91bmQtY29sb3I6IzAwODRDQTtjb2xvcjp3aGl0ZTt9XHJcbi5tb2RhbC1oZWFkZXIuc2VsZWN0LW5ldy1wcm9wZXJ0aWVzIGg1e2NvbG9yOmJsYWNrO2ZvbnQtc2l6ZToyMHB4O31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkubW9kYWwtYm9keXtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keS5tb2RhbC1ib2R5IHB7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOmJsYWNrO31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkgLmZvcm4tZ3JvdXB7bWFyZ2luLWJvdHRvbToxNXB4O31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHlhIC5idG4tYnJhbmR7YmFja2dyb3VuZC1jb2xvcjojMDA4NENBO31cclxuLm5ld19jbGllbnRzX3Byb3BlcnRpZXNfYm9keXtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2JvcmRlcjpub25lO31cclxuLmt0LXdpZGdldDQgLmt0LXdpZGdldDRfX2l0ZW06Zmlyc3QtY2hpbGR7cGFkZGluZy10b3A6MTVweDt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmEzODt9XHJcbi5rdC13aWRnZXQ0Lmt0LXNjcm9sbC5wc3tvdmVyZmxvdy15OmF1dG8gIWltcG9ydGFudDtwYWRkaW5nLXJpZ2h0OjEwcHg7fVxyXG4ua3QtZm9udC1icmFuZHtjb2xvcjojYWVhZWFlICFpbXBvcnRhbnQ7Zm9udC1zaXplOjEycHggIWltcG9ydGFudDt9XHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDogNnB4O2JhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7fVxyXG4jc3R5bGUtMzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjogIzAwODRDQTt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mby5wcm9wZXJ0eS1saXN0LWR5bmFtaWMtY2xhc3MgLmJ0bi1sYWJlbC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6I2MzZTdmYSA7Y29sb3I6ICMwMDg0Q0F9XHJcbi5jdXN0b21lci1saXN0LW1haW4tc2VjdGlvbiAua3QtaGVhZGVyX190b3BiYXItaXRlbS5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLS1zZWFyY2guZHJvcGRvd24uYm9vdG0tZmlsdGVye21hcmdpbi1ib3R0b206MjBweDs7fVxyXG4ua3Qtc2VsZWN0cGlja2VyLmJ0bi5idG4tbGFiZWwtc3VjY2Vzcy5wdWxsLXJpZ2h0e2JhY2tncm91bmQtY29sb3I6I0ZGODUzMztjb2xvcjp3aGl0ZTt9XHJcbi5rdC1zZWxlY3RwaWNrZXIuYnRuLmJ0bi1sYWJlbC1zdWNjZXNzLnB1bGwtcmlnaHQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhO2NvbG9yOiMwMDg0Q0E7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtjb2xvcjp3aGl0ZTt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuYWxlcnQtaWNvbiBpe2NvbG9yOndoaXRlO31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Y2E7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm17cGFkZGluZzowcHggMHB4O31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeXtwYWRkaW5nOjhweCAyMHB4O31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5hbGVydC1pY29ue2ZvbnQtc2l6ZToyMHB4O31cclxuLm5ldy1wcm9wZXJ0aWVzLXBvcHVwY3JlYXRlLXRleHR7Zm9udC1zaXplOjIwcHg7fVxyXG4ucHJvcGVydHktYXBwbGljYXRpb25ze3BhZGRpbmc6MHB4IDE1cHg7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmZvcm0tZ3JvdXB7bWFyZ2luLWJvdHRvbTowLjRyZW0gIWltcG9ydGFudDt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyBhe2Rpc3BsYXk6YmxvY2s7fVxyXG4uY3VzdG9tZXItbGlzdC12aWV3LWluZm8gYSBpe3RleHQtYWxpZ246Y2VudGVyO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtLTF7Ym94LXNoYWRvdzoxMHB4IDEwcHggMTBweCAjZDdkN2Q3O31cclxuLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXJ7aGVpZ2h0OjEwMCUgIWltcG9ydGFudDt9XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoicePlaneInvoiceCustomerPropertyPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invoice-plane-invoice-customer-property-popup',
            templateUrl: './invoice-plane-invoice-customer-property-popup.component.html',
            styleUrls: ['./invoice-plane-invoice-customer-property-popup.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_3__["GenicProfileService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
          }, {
            type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"]
          }, {
            type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_8__["PropertyService"]
          }, {
            type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "A6Rf":
    /*!*************************************************************************************!*\
      !*** ./src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: TicketIconAttachmentModule */

    /***/
    function A6Rf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketIconAttachmentModule", function () {
        return TicketIconAttachmentModule;
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


      var _TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./TicketIconAttachment.component */
      "xJsc");

      var TicketIconAttachmentModule = function TicketIconAttachmentModule() {
        _classCallCheck(this, TicketIconAttachmentModule);
      };

      TicketIconAttachmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TicketIconAttachmentModule
      });
      TicketIconAttachmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TicketIconAttachmentModule_Factory(t) {
          return new (t || TicketIconAttachmentModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketIconAttachmentModule, {
          declarations: [_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_3__["TicketIconAttachmentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_3__["TicketIconAttachmentComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketIconAttachmentModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_3__["TicketIconAttachmentComponent"]],
            exports: [_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_3__["TicketIconAttachmentComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "EhMi":
    /*!*************************************************************************************************!*\
      !*** ./src/app/application/invoices/invoice-customer-popup/invoice-customer-popup.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: InvoiceCustomerPopupComponent */

    /***/
    function EhMi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceCustomerPopupComponent", function () {
        return InvoiceCustomerPopupComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/customer.service */
      "0zL+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function InvoiceCustomerPopupComponent_div_5_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceCustomerPopupComponent_div_5_a_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceCustomerPopupComponent_div_5_a_9_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.redirect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create new client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceCustomerPopupComponent_div_5_div_12_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
        }

        if (rf & 2) {
          var x_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r8.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", x_r7.CompanyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r7.CompanyName);
        }
      }

      function InvoiceCustomerPopupComponent_div_5_div_12_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
        }

        if (rf & 2) {
          var x_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r7.CustomerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", x_r7.CompanyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r7.CompanyName);
        }
      }

      function InvoiceCustomerPopupComponent_div_5_div_12_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", x_r7.NameTitle, " ", x_r7.FirstName, " ", x_r7.LastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r7.CompanyName, " ");
        }
      }

      function InvoiceCustomerPopupComponent_div_5_div_12_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r7.CompanyName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", x_r7.NameTitle, " ", x_r7.FirstName, " ", x_r7.LastName, " ");
        }
      }

      function InvoiceCustomerPopupComponent_div_5_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceCustomerPopupComponent_div_5_div_12_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var x_r7 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.onClick(x_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvoiceCustomerPopupComponent_div_5_div_12_img_2_Template, 1, 3, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InvoiceCustomerPopupComponent_div_5_div_12_img_3_Template, 1, 3, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InvoiceCustomerPopupComponent_div_5_div_12_div_4_Template, 5, 4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InvoiceCustomerPopupComponent_div_5_div_12_div_5_Template, 5, 4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r7.CustomerLogo === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r7.CustomerLogo !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !x_r7.UseCompanyNameAsPrimaryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r7.UseCompanyNameAsPrimaryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r7.Properties.length, " Properties");
        }
      }

      function InvoiceCustomerPopupComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Which client would you like to create this invoice for?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function InvoiceCustomerPopupComponent_div_5_Template_input_keydown_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.onkeypress($event.target.value);
          })("keyup", function InvoiceCustomerPopupComponent_div_5_Template_input_keyup_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.onkeypress($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InvoiceCustomerPopupComponent_div_5_div_7_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InvoiceCustomerPopupComponent_div_5_a_9_Template, 3, 0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvoiceCustomerPopupComponent_div_5_div_12_Template, 8, 5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.Permissions.CustomerCreate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.Permissions.CustomerCreate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.LocalList);
        }
      }

      function InvoiceCustomerPopupComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create New Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceCustomerPopupComponent_div_6_Template_select_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.customerservice.formData.NameTitle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mrs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mr.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ms.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mss.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dr.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 40, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceCustomerPopupComponent_div_6_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.customerservice.formData.FirstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceCustomerPopupComponent_div_6_Template_input_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.customerservice.formData.LastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Company Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceCustomerPopupComponent_div_6_Template_input_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.customerservice.formData.CompanyName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 50, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceCustomerPopupComponent_div_6_Template_input_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.customerservice.formData.UseCompanyNameAsPrimaryName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Use company name as the primary name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 53, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceCustomerPopupComponent_div_6_Template_input_ngModelChange_60_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.customerservice.formData.AddressStreet1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Phone Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 55, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceCustomerPopupComponent_div_6_Template_input_ngModelChange_66_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.customerservice.formData.AddressStreet2 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceCustomerPopupComponent_div_6_Template_button_click_72_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r1.isValidTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.NameTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r1.isValidFirstname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.FirstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r1.isValidLastname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.LastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r1.isValidCompanyname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.CompanyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.UseCompanyNameAsPrimaryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.AddressStreet1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customerservice.formData.AddressStreet2);
        }
      }

      var InvoiceCustomerPopupComponent = /*#__PURE__*/function () {
        function InvoiceCustomerPopupComponent(router, http, dialog, toastr, loginservice, dialogRef, customerservice) {
          var _this7 = this;

          _classCallCheck(this, InvoiceCustomerPopupComponent);

          this.router = router;
          this.http = http;
          this.dialog = dialog;
          this.toastr = toastr;
          this.loginservice = loginservice;
          this.dialogRef = dialogRef;
          this.customerservice = customerservice;
          this.IsCustomerCreate = true;
          this.isValidTitle = true;
          this.isValidFirstname = true;
          this.isValidLastname = true;
          this.isValidCompanyname = true;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this7.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
          this.isDone = false;
        }

        _createClass(InvoiceCustomerPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.LocalList = [];
            this.customerservice.getCustomerListSync(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this8.customerservice.CustomerList = response.result;
                  setTimeout(function () {
                    _this8.customerservice.CustomerLocalList = [];
                    _this8.customerservice.CustomerLocalList = _this8.customerservice.CustomerList.filter(function (x) {
                      return x.Status === true;
                    });
                    _this8.LocalList = _this8.customerservice.CustomerLocalList;
                  }, 200);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onClick",
          value: function onClick(c) {
            if (c === undefined) {
              this.dialogRef.close();
            } else {
              this.dialogRef.close({
                c: c
              });
              this.customerservice.formData = Object.assign({}, c);
            }
          }
        }, {
          key: "CreateNewClient",
          value: function CreateNewClient() {
            this.dialogRef.close();
          }
        }, {
          key: "onkeypress",
          value: function onkeypress(value) {
            this.LocalList = this.customerservice.CustomerList.filter(function (item) {
              return item.CompanyName.toLowerCase().match(value.toLowerCase()) || item.FirstName.toLowerCase().match(value.toLowerCase()) || item.LastName.toLowerCase().match(value.toLowerCase());
            });
          }
        }, {
          key: "redirect",
          value: function redirect() {
            this.customerservice.formData.NameTitle = '';
            this.customerservice.formData.FirstName = '';
            this.customerservice.formData.LastName = '';
            this.customerservice.formData.CompanyName = '';
            this.customerservice.formData.UseCompanyNameAsPrimaryName = true;
            this.customerservice.formData.AddressStreet1 = '';
            this.customerservice.formData.AddressStreet2 = '';
            this.IsCustomerCreate = false;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            if (this.customerservice.formData.FirstName === '' || this.customerservice.formData.FirstName === undefined) {
              this.isValidFirstname = false;
              this.toastr.warning('', 'First Name is required!');
              return false;
            }

            if (this.customerservice.formData.LastName === '' || this.customerservice.formData.LastName === undefined) {
              this.isValidLastname = false;
              this.toastr.warning('', 'Last Name is required!');
              return false;
            }

            if (this.customerservice.formData.CompanyName === '' || this.customerservice.formData.CompanyName === undefined) {
              this.isValidCompanyname = false;
              this.toastr.warning('', 'Company Name is required!');
              return false;
            }

            this.customerservice.AddNewCustomer(this.currentUser.Token).subscribe(function (res) {
              var response = res;

              if (response.Message === 'success') {
                _this9.toastr.success('success', 'User ' + _this9.customerservice.formData.NameTitle + ' ' + _this9.customerservice.formData.FirstName + ' ' + _this9.customerservice.formData.LastName + ' is added Successfully!');

                _this9.customerservice.formData = res;
                _this9.isDone = false;

                _this9.refreshcustomerlist();

                _this9.IsCustomerCreate = true;
              }

              if (response.Message === 'failure') {
                _this9.toastr.warning('warning', response.MessageDescription);

                _this9.isDone = false;
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "refreshcustomerlist",
          value: function refreshcustomerlist() {
            var _this10 = this;

            this.customerservice.refrestCustomerList(this.currentUser.Token);
            setTimeout(function () {
              _this10.customerservice.CustomerLocalList = [];
              _this10.customerservice.CustomerLocalList = _this10.customerservice.CustomerList.filter(function (x) {
                return x.Status === true;
              });
              _this10.LocalList = _this10.customerservice.CustomerLocalList;
            }, 1000);
          }
        }]);

        return InvoiceCustomerPopupComponent;
      }();

      InvoiceCustomerPopupComponent.ɵfac = function InvoiceCustomerPopupComponent_Factory(t) {
        return new (t || InvoiceCustomerPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]));
      };

      InvoiceCustomerPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvoiceCustomerPopupComponent,
        selectors: [["app-invoice-customer-popup"]],
        decls: 7,
        vars: 2,
        consts: [[1, "modal-header", "select-new-properties"], ["id", "exampleModalLabel", 1, "modal-title"], ["mat-dialog-close", "", 1, "btn", "btn-default", "pull-right"], ["class", "modal-body property-modal-body", 4, "ngIf"], [1, "modal-body", "property-modal-body"], [1, "row", "forn-group"], [1, "col-md-7"], ["type", "text", "placeholder", "Search Clients...", 1, "form-control", 3, "keydown", "keyup"], ["class", "col-md-1 text-center", 4, "ngIf"], [1, "col-md-4", "text-right"], ["on", "", "class", "btn btn-brand text-white ", 3, "click", 4, "ngIf"], [1, "kt-portlet__body", "new_clients_properties_body"], ["data-scroll", "true", "data-height", "220", "id", "style-3", 1, "kt-widget4", "kt-scroll", "ps", 2, "height", "220px", "overflow", "hidden"], ["class", "kt-widget4__item create-quote-client-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-1", "text-center"], ["on", "", 1, "btn", "btn-brand", "text-white", 3, "click"], [1, "la", "la-plus"], [1, "kt-widget4__item", "create-quote-client-item", 3, "click"], [1, "kt-widget4__pic", "kt-widget4__pic--logo"], ["width", "30px", 3, "src", "alt", "title", 4, "ngIf"], ["class", "kt-widget4__info", 4, "ngIf"], [1, "kt-widget4__number", "kt-font-brand"], ["width", "30px", 3, "src", "alt", "title"], [1, "kt-widget4__info"], ["href", "javascript:;", 1, "kt-widget4__title"], [1, ""], [1, "form-group", "row"], [1, "col-xl-2", "no-spacing"], [1, "form-group"], ["for", "", 1, "label", "whole-text-required"], [1, "text-danger"], ["name", "NameTitle", 1, "form-control", 3, "ngModel", "ngModelChange"], ["NameTitle", "ngModel"], ["value", ""], ["value", "Mrs."], ["value", "Mr."], ["value", "Ms."], ["value", "Mss."], ["value", "Dr."], [1, "col-xl-5", "no-spacing"], ["name", "FirstName", "placeholder", "First Name", "min", "0", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FirstName", "ngModel"], ["for", "", 1, "label"], ["name", "LastName", "placeholder", "Last Name", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], ["LastName", "ngModel"], [1, "col-lg-12", "no-spacing"], ["name", "CompanyName", "placeholder", "Company Name", "maxlength", "128", 1, "form-control", 3, "ngModel", "ngModelChange"], ["CompanyName", "ngModel"], [1, "col-lg-12"], [1, "kt-switch", "kt-switch--sm", "kt-switch--brand"], ["name", "customerservice.formData.UseCompanyNameAsPrimaryName", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["UseCompanyNameAsPrimaryName", "ngModel"], [1, "col-xl-6", "no-spacing"], ["name", "AddressStreet1", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressStreet1", "ngModel"], ["name", "AddressStreet2", "placeholder", "Phone Number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["AddressStreet2", "ngModel"], [1, "row"], [1, "modal-footer", "create-proprty-model-footer"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-brand", 3, "click"]],
        template: function InvoiceCustomerPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select or create a Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InvoiceCustomerPopupComponent_div_5_Template, 13, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InvoiceCustomerPopupComponent_div_6_Template, 74, 15, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsCustomerCreate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsCustomerCreate);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"]],
        styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vaW52b2ljZXMvaW52b2ljZS1jdXN0b21lci1wb3B1cC9pbnZvaWNlLWN1c3RvbWVyLXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQztBQUMxRCxvQ0FBb0MsbUJBQW1CLENBQUM7QUFDeEQseUNBQXlDLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN0Ryx1Q0FBdUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztBQUNsRSxnQ0FBZ0Msd0JBQXdCLENBQUM7QUFDekQsa0NBQWtDLGNBQWMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBQzdFLGlDQUFpQyxrQkFBa0IsQ0FBQztBQUNwRCxpQ0FBaUMsd0JBQXdCLENBQUM7QUFDMUQsNkJBQTZCLHNCQUFzQixDQUFDLFdBQVcsQ0FBQztBQUNoRSwwQ0FBMEMsZ0JBQWdCLENBQUM7QUFDM0QsOENBQThDLDBCQUEwQixDQUFDO0FBQ3pFLHlCQUF5QiwwQkFBMEIsQ0FBQyxrQkFBa0IsQ0FBQztBQUN2RSxlQUFlLHdCQUF3QixDQUFDLHlCQUF5QixDQUFDO0FBQ2xFLDRCQUE0QixVQUFVLENBQUMseUJBQXlCLENBQUM7QUFDakUsa0NBQWtDLHlCQUF5QixDQUFDO0FBQzVELHdFQUF3RSx5QkFBeUIsQ0FBQyxjQUFjO0FBQ2hILHlHQUF5RyxrQkFBa0IsRUFBRTtBQUM3SCxrREFBa0Qsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3ZGLHdEQUF3RCx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7QUFDL0YscUVBQXFFLFdBQVcsQ0FBQztBQUNqRiw2Q0FBNkMsV0FBVyxDQUFDO0FBQ3pELDJEQUEyRCx3QkFBd0IsQ0FBQztBQUNwRixtRUFBbUUsZUFBZSxDQUFDO0FBQ25GLDJEQUEyRCxnQkFBZ0IsQ0FBQztBQUM1RSwyQ0FBMkMsY0FBYyxDQUFDO0FBQzFELGlDQUFpQyxjQUFjLENBQUM7QUFDaEQsdUJBQXVCLGdCQUFnQixDQUFDO0FBQ3hDLDJDQUEyQywrQkFBK0IsQ0FBQztBQUMzRSwyQkFBMkIsYUFBYSxDQUFDO0FBQ3pDLDZCQUE2QixpQkFBaUIsQ0FBQztBQUMvQyxpQ0FBaUMsaUNBQWlDLENBQUM7QUFDbkUsMkJBQTJCLHNCQUFzQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vaW52b2ljZXMvaW52b2ljZS1jdXN0b21lci1wb3B1cC9pbnZvaWNlLWN1c3RvbWVyLXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMztib3JkZXItY29sb3I6ICNmZjg1MzM7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllc3tiYWNrZ3JvdW5kOiAjYzNlN2ZhO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgLmJ0bntwYWRkaW5nOiAwLjI1cmVtIDAuN3JlbTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7Y29sb3I6d2hpdGU7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllcyBoNXtjb2xvcjpibGFjaztmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHl7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkubW9kYWwtYm9keSBwe2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjpibGFjazt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5IC5mb3JuLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5YSAuYnRuLWJyYW5ke2JhY2tncm91bmQtY29sb3I6IzAwODRDQTt9XHJcbi5uZXdfY2xpZW50c19wcm9wZXJ0aWVzX2JvZHl7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXI6bm9uZTt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjE1cHg7fVxyXG4ua3Qtd2lkZ2V0NCAua3Qtd2lkZ2V0NF9faXRlbTpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhMzg7fVxyXG4ua3Qtd2lkZ2V0NC5rdC1zY3JvbGwucHN7b3ZlcmZsb3cteTphdXRvICFpbXBvcnRhbnQ7cGFkZGluZy1yaWdodDoxMHB4O31cclxuLmt0LWZvbnQtYnJhbmR7Y29sb3I6I2FlYWVhZSAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxMnB4ICFpbXBvcnRhbnQ7fVxyXG4jc3R5bGUtMzo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6IDZweDtiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O31cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JhY2tncm91bmQtY29sb3I6ICMwMDg0Q0E7fVxyXG4uY3VzdG9tZXItbGlzdC12aWV3LWluZm8ucHJvcGVydHktbGlzdC1keW5hbWljLWNsYXNzIC5idG4tbGFiZWwtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmEgO2NvbG9yOiAjMDA4NENBfVxyXG4uY3VzdG9tZXItbGlzdC1tYWluLXNlY3Rpb24gLmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0ua3QtaGVhZGVyX190b3BiYXItaXRlbS0tc2VhcmNoLmRyb3Bkb3duLmJvb3RtLWZpbHRlcnttYXJnaW4tYm90dG9tOjIwcHg7O31cclxuLmt0LXNlbGVjdHBpY2tlci5idG4uYnRuLWxhYmVsLXN1Y2Nlc3MucHVsbC1yaWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNGRjg1MzM7Y29sb3I6d2hpdGU7fVxyXG4ua3Qtc2VsZWN0cGlja2VyLmJ0bi5idG4tbGFiZWwtc3VjY2Vzcy5wdWxsLXJpZ2h0OmZvY3Vze2JhY2tncm91bmQtY29sb3I6I2MzZTdmYTtjb2xvcjojMDA4NENBO31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLm5ldy1wcm9wZXJ0aWVzLXBvcHVwY3JlYXRlLXRleHR7Y29sb3I6d2hpdGU7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmFsZXJ0LWljb24gaXtjb2xvcjp3aGl0ZTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5hbGVydC5hbGVydC1zZWNvbmRhcnl7YmFja2dyb3VuZC1jb2xvcjojMDA4NGNhO31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3Jte3BhZGRpbmc6MHB4IDBweDt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5hbGVydC5hbGVydC1zZWNvbmRhcnl7cGFkZGluZzo4cHggMjBweDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuYWxlcnQtaWNvbntmb250LXNpemU6MjBweDt9XHJcbi5uZXctcHJvcGVydGllcy1wb3B1cGNyZWF0ZS10ZXh0e2ZvbnQtc2l6ZToyMHB4O31cclxuLnByb3BlcnR5LWFwcGxpY2F0aW9uc3twYWRkaW5nOjBweCAxNXB4O31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5mb3JtLWdyb3Vwe21hcmdpbi1ib3R0b206MC40cmVtICFpbXBvcnRhbnQ7fVxyXG4uY3VzdG9tZXItbGlzdC12aWV3LWluZm8gYXtkaXNwbGF5OmJsb2NrO31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIGEgaXt0ZXh0LWFsaWduOmNlbnRlcjt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybS0xe2JveC1zaGFkb3c6MTBweCAxMHB4IDEwcHggI2Q3ZDdkNzt9XHJcbi5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVye2hlaWdodDoxMDAlICFpbXBvcnRhbnQ7fVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceCustomerPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invoice-customer-popup',
            templateUrl: './invoice-customer-popup.component.html',
            styleUrls: ['./invoice-customer-popup.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
          }, {
            type: _services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IEzf":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/application/invoices/invoice-change-status-popup/invoice-change-status-popup.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: InvoiceChangeStatusPopupComponent */

    /***/
    function IEzf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceChangeStatusPopupComponent", function () {
        return InvoiceChangeStatusPopupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/invoice.service */
      "py7r");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function InvoiceChangeStatusPopupComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_div_28_Template_input_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.byInvoiceStatusChange(ctx_r1.invoiceService.InvoiceData.Id, "SendOutPaid");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_div_28_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.byInvoiceStatusChange(ctx_r3.invoiceService.InvoiceData.Id, "SendOutPaid");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Mark as Paid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_div_28_Template_input_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.byInvoiceStatusChange(ctx_r4.invoiceService.InvoiceData.Id, "PartiallyPaid");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_div_28_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.byInvoiceStatusChange(ctx_r5.invoiceService.InvoiceData.Id, "PartiallyPaid");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Mark as Partially Paid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_div_28_Template_input_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.byInvoiceStatusChange(ctx_r6.invoiceService.InvoiceData.Id, "SendOutUnPaid");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_div_28_Template_a_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.byInvoiceStatusChange(ctx_r7.invoiceService.InvoiceData.Id, "SendOutUnPaid");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Mark as Un paid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_div_28_Template_input_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.byInvoiceStatusChange(ctx_r8.invoiceService.InvoiceData.Id, "SendOutOverDue");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_div_28_Template_a_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.byInvoiceStatusChange(ctx_r9.invoiceService.InvoiceData.Id, "SendOutOverDue");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Mark as Over due ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.invoiceService.InvoiceData.Status == "SendOutPaid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.invoiceService.InvoiceData.Status == "PartiallyPaid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.invoiceService.InvoiceData.Status == "SendOutUnPaid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.invoiceService.InvoiceData.Status == "SendOutOverDue");
        }
      }

      var InvoiceChangeStatusPopupComponent = /*#__PURE__*/function () {
        function InvoiceChangeStatusPopupComponent(router, rout, http, invoiceService, toastr, dialogRef, logService, loginservice) {
          _classCallCheck(this, InvoiceChangeStatusPopupComponent);

          this.router = router;
          this.rout = rout;
          this.http = http;
          this.invoiceService = invoiceService;
          this.toastr = toastr;
          this.dialogRef = dialogRef;
          this.logService = logService;
          this.loginservice = loginservice;
        }

        _createClass(InvoiceChangeStatusPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.invoiceService.getPaymentSummary(this.invoiceService.InvoiceData.Id);
            this.tempPaymentlist = this.invoiceService.PaymentSummary;
            this.IsShowPaymentSection = 'false';
            this.loginservice.currentUser.subscribe(function (x) {
              return _this11.currentUser = x;
            });
            this.IsShowInvStatus = 'true';
          }
        }, {
          key: "byInvoiceStatusChange",
          value: function byInvoiceStatusChange(Id, Status) {
            var _this12 = this;

            this.invoiceService.UpdateInvoiceStatus(Id, Status).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this12.invoiceService.InvoiceData.Status = Status;

                  _this12.toastr.success('success', response.MessageDescription);

                  var des = 'Status of Invoice No : ' + _this12.invoiceService.InvoiceData.InvoiceId + ' has been changed as :' + Status + ', of Customer : ' + _this12.invoiceService.InvoiceData.CustomerName + ', by user : ' + _this12.currentUser.UserName + ', on dated : ' + new Date();
                  var Activity = 'Invoice Status changed as : ' + Status + ', against Invoice no : ' + _this12.invoiceService.InvoiceData.InvoiceId;

                  _this12.logService.postUserLog(_this12.currentUser.Id, _this12.currentUser.UserName, 'Invoice', _this12.invoiceService.InvoiceData.Id, 'Modify', des, Activity).subscribe();

                  _this12.dialogRef.close();
                }

                if (response.Message === 'failure') {
                  _this12.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "CollapseInvStatus",
          value: function CollapseInvStatus() {
            if (this.IsShowInvStatus === 'true') {
              this.IsShowInvStatus = 'false';
            } else {
              this.IsShowInvStatus = 'true';
            }
          }
        }]);

        return InvoiceChangeStatusPopupComponent;
      }();

      InvoiceChangeStatusPopupComponent.ɵfac = function InvoiceChangeStatusPopupComponent_Factory(t) {
        return new (t || InvoiceChangeStatusPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_6__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]));
      };

      InvoiceChangeStatusPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvoiceChangeStatusPopupComponent,
        selectors: [["app-invoice-change-status-popup"]],
        decls: 37,
        vars: 4,
        consts: [[1, "modal-header", "select-new-properties"], ["id", "exampleModalLabel", 1, "modal-title"], ["mat-dialog-close", "", 1, "btn", "btn-default", "pull-right"], [1, "modal-body"], [1, "kt-portlet__body"], [1, "tab-content"], ["id", "kt_widget2_tab1_content", 1, "tab-pane", "active"], [1, "kt-widget2"], ["autocomplete", "off"], [1, "kt-widget2__item", "kt-widget2__item--primary"], [1, "kt-widget2__checkbox"], [1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--single"], ["type", "checkbox", "value", "Draft", 3, "checked", "click"], [1, "kt-widget2__info", "status-Info"], ["href", "javascript:void(0)", 1, "kt-widget2__title", 3, "click"], ["type", "checkbox", "readonly", "", 3, "checked", "click"], ["class", "collapse-status", 4, "ngIf"], ["type", "checkbox", "value", "cancelled", 3, "checked", "click"], [1, "collapse-status"], ["type", "checkbox", "value", "SendOutUnPaid", 3, "checked", "click"], ["type", "checkbox", "value", "PartiallyPaid", 3, "checked", "click"], ["type", "checkbox", "value", "SendOutOverDue", 3, "checked", "click"]],
        template: function InvoiceChangeStatusPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Change Invoice Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_Template_input_click_15_listener() {
              return ctx.byInvoiceStatusChange(ctx.invoiceService.InvoiceData.Id, "Draft");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_Template_a_click_18_listener() {
              return ctx.byInvoiceStatusChange(ctx.invoiceService.InvoiceData.Id, "Draft");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Mark as Draft ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_Template_input_click_23_listener() {
              return ctx.CollapseInvStatus();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_Template_a_click_26_listener() {
              return ctx.CollapseInvStatus();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Mark as Send out ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, InvoiceChangeStatusPopupComponent_div_28_Template, 33, 4, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_Template_input_click_32_listener() {
              return ctx.byInvoiceStatusChange(ctx.invoiceService.InvoiceData.Id, "cancelled");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceChangeStatusPopupComponent_Template_a_click_35_listener() {
              return ctx.byInvoiceStatusChange(ctx.invoiceService.InvoiceData.Id, "cancelled");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Mark as Cancelled ");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.invoiceService.InvoiceData.Status == "Draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.invoiceService.InvoiceData.Status == "SendOutPaid" || ctx.invoiceService.InvoiceData.Status == "PartiallyPaid" || ctx.invoiceService.InvoiceData.Status == "SendOutUnPaid" || ctx.invoiceService.InvoiceData.Status == "SendOutOverDue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsShowInvStatus === "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.invoiceService.InvoiceData.Status == "cancelled");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
        styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vaW52b2ljZXMvaW52b2ljZS1jaGFuZ2Utc3RhdHVzLXBvcHVwL2ludm9pY2UtY2hhbmdlLXN0YXR1cy1wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsd0JBQXdCLENBQUMscUJBQXFCLENBQUM7QUFDMUQsb0NBQW9DLG1CQUFtQixDQUFDO0FBQ3hELHlDQUF5Qyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUM7QUFDdEcsdUNBQXVDLFdBQVcsQ0FBQyxjQUFjLENBQUM7QUFDbEUsZ0NBQWdDLHdCQUF3QixDQUFDO0FBQ3pELGtDQUFrQyxjQUFjLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztBQUM3RSxpQ0FBaUMsa0JBQWtCLENBQUM7QUFDcEQsaUNBQWlDLHdCQUF3QixDQUFDO0FBQzFELDZCQUE2QixzQkFBc0IsQ0FBQyxXQUFXLENBQUM7QUFDaEUsMENBQTBDLGdCQUFnQixDQUFDO0FBQzNELDhDQUE4QywwQkFBMEIsQ0FBQztBQUN6RSx5QkFBeUIsMEJBQTBCLENBQUMsa0JBQWtCLENBQUM7QUFDdkUsZUFBZSx3QkFBd0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUNsRSw0QkFBNEIsVUFBVSxDQUFDLHlCQUF5QixDQUFDO0FBQ2pFLGtDQUFrQyx5QkFBeUIsQ0FBQztBQUM1RCx3RUFBd0UseUJBQXlCLENBQUMsY0FBYztBQUNoSCx5R0FBeUcsa0JBQWtCLEVBQUU7QUFDN0gsa0RBQWtELHdCQUF3QixDQUFDLFdBQVcsQ0FBQztBQUN2Rix3REFBd0Qsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQy9GLHFFQUFxRSxXQUFXLENBQUM7QUFDakYsNkNBQTZDLFdBQVcsQ0FBQztBQUN6RCwyREFBMkQsd0JBQXdCLENBQUM7QUFDcEYsbUVBQW1FLGVBQWUsQ0FBQztBQUNuRiwyREFBMkQsZ0JBQWdCLENBQUM7QUFDNUUsMkNBQTJDLGNBQWMsQ0FBQztBQUMxRCxpQ0FBaUMsY0FBYyxDQUFDO0FBQ2hELHVCQUF1QixnQkFBZ0IsQ0FBQztBQUN4QywyQ0FBMkMsK0JBQStCLENBQUM7QUFDM0UsMkJBQTJCLGFBQWEsQ0FBQztBQUN6Qyw2QkFBNkIsaUJBQWlCLENBQUM7QUFDL0MsaUNBQWlDLGlDQUFpQyxDQUFDO0FBQ25FLDJCQUEyQixzQkFBc0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2ludm9pY2VzL2ludm9pY2UtY2hhbmdlLXN0YXR1cy1wb3B1cC9pbnZvaWNlLWNoYW5nZS1zdGF0dXMtcG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYnJhbmR7YmFja2dyb3VuZC1jb2xvcjojZmY4NTMzO2JvcmRlci1jb2xvcjogI2ZmODUzMzt9XHJcbi5tb2RhbC1oZWFkZXIuc2VsZWN0LW5ldy1wcm9wZXJ0aWVze2JhY2tncm91bmQ6ICNjM2U3ZmE7fVxyXG4ubW9kYWwtaGVhZGVyLnNlbGVjdC1uZXctcHJvcGVydGllcyAuYnRue3BhZGRpbmc6IDAuMjVyZW0gMC43cmVtO2JhY2tncm91bmQtY29sb3I6IzAwODRDQTtjb2xvcjp3aGl0ZTt9XHJcbi5tb2RhbC1oZWFkZXIuc2VsZWN0LW5ldy1wcm9wZXJ0aWVzIGg1e2NvbG9yOmJsYWNrO2ZvbnQtc2l6ZToyMHB4O31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkubW9kYWwtYm9keXtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keS5tb2RhbC1ib2R5IHB7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOmJsYWNrO31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHkgLmZvcm4tZ3JvdXB7bWFyZ2luLWJvdHRvbToxNXB4O31cclxuLnByb3BlcnR5LW1vZGFsLWJvZHlhIC5idG4tYnJhbmR7YmFja2dyb3VuZC1jb2xvcjojMDA4NENBO31cclxuLm5ld19jbGllbnRzX3Byb3BlcnRpZXNfYm9keXtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2JvcmRlcjpub25lO31cclxuLmt0LXdpZGdldDQgLmt0LXdpZGdldDRfX2l0ZW06Zmlyc3QtY2hpbGR7cGFkZGluZy10b3A6MTVweDt9XHJcbi5rdC13aWRnZXQ0IC5rdC13aWRnZXQ0X19pdGVtOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmEzODt9XHJcbi5rdC13aWRnZXQ0Lmt0LXNjcm9sbC5wc3tvdmVyZmxvdy15OmF1dG8gIWltcG9ydGFudDtwYWRkaW5nLXJpZ2h0OjEwcHg7fVxyXG4ua3QtZm9udC1icmFuZHtjb2xvcjojYWVhZWFlICFpbXBvcnRhbnQ7Zm9udC1zaXplOjEycHggIWltcG9ydGFudDt9XHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDogNnB4O2JhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7fVxyXG4jc3R5bGUtMzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjogIzAwODRDQTt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mby5wcm9wZXJ0eS1saXN0LWR5bmFtaWMtY2xhc3MgLmJ0bi1sYWJlbC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6I2MzZTdmYSA7Y29sb3I6ICMwMDg0Q0F9XHJcbi5jdXN0b21lci1saXN0LW1haW4tc2VjdGlvbiAua3QtaGVhZGVyX190b3BiYXItaXRlbS5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLS1zZWFyY2guZHJvcGRvd24uYm9vdG0tZmlsdGVye21hcmdpbi1ib3R0b206MjBweDs7fVxyXG4ua3Qtc2VsZWN0cGlja2VyLmJ0bi5idG4tbGFiZWwtc3VjY2Vzcy5wdWxsLXJpZ2h0e2JhY2tncm91bmQtY29sb3I6I0ZGODUzMztjb2xvcjp3aGl0ZTt9XHJcbi5rdC1zZWxlY3RwaWNrZXIuYnRuLmJ0bi1sYWJlbC1zdWNjZXNzLnB1bGwtcmlnaHQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhO2NvbG9yOiMwMDg0Q0E7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtjb2xvcjp3aGl0ZTt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuYWxlcnQtaWNvbiBpe2NvbG9yOndoaXRlO31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Y2E7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm17cGFkZGluZzowcHggMHB4O31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeXtwYWRkaW5nOjhweCAyMHB4O31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5hbGVydC1pY29ue2ZvbnQtc2l6ZToyMHB4O31cclxuLm5ldy1wcm9wZXJ0aWVzLXBvcHVwY3JlYXRlLXRleHR7Zm9udC1zaXplOjIwcHg7fVxyXG4ucHJvcGVydHktYXBwbGljYXRpb25ze3BhZGRpbmc6MHB4IDE1cHg7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmZvcm0tZ3JvdXB7bWFyZ2luLWJvdHRvbTowLjRyZW0gIWltcG9ydGFudDt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyBhe2Rpc3BsYXk6YmxvY2s7fVxyXG4uY3VzdG9tZXItbGlzdC12aWV3LWluZm8gYSBpe3RleHQtYWxpZ246Y2VudGVyO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtLTF7Ym94LXNoYWRvdzoxMHB4IDEwcHggMTBweCAjZDdkN2Q3O31cclxuLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXJ7aGVpZ2h0OjEwMCUgIWltcG9ydGFudDt9XHJcbiJdfQ== */", ".collapse-status[_ngcontent-%COMP%]{\n    margin: 0 0 0 59px;\n  }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceChangeStatusPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invoice-change-status-popup',
            templateUrl: './invoice-change-status-popup.component.html',
            styleUrls: ['./invoice-change-status-popup.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
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
    "PtHM":
    /*!************************************************************!*\
      !*** ./src/app/application/invoices/invoices.component.ts ***!
      \************************************************************/

    /*! exports provided: InvoicesComponent */

    /***/
    function PtHM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function () {
        return InvoicesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var InvoicesComponent = /*#__PURE__*/function () {
        function InvoicesComponent() {
          _classCallCheck(this, InvoicesComponent);
        }

        _createClass(InvoicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InvoicesComponent;
      }();

      InvoicesComponent.ɵfac = function InvoicesComponent_Factory(t) {
        return new (t || InvoicesComponent)();
      };

      InvoicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvoicesComponent,
        selectors: [["ng-component"]],
        decls: 1,
        vars: 0,
        template: function InvoicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoicesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: '<router-outlet></router-outlet>'
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
    "bi+q":
    /*!***************************************************************************!*\
      !*** ./src/app/application/invoices/invoice-add/invoice-add.component.ts ***!
      \***************************************************************************/

    /*! exports provided: InvoiceAddComponent */

    /***/
    function biQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceAddComponent", function () {
        return InvoiceAddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "1yaQ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/ngb-date-to-string-adapter */
      "x8Rg");
      /* harmony import */


      var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/ngb-time-to-string-adapter */
      "dRK5");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/invoice.service */
      "py7r");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/quote.service */
      "uOqW");
      /* harmony import */


      var src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/DocumentUpload.service */
      "nXz1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/services/userlog.service */
      "V05N");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/services/property.service */
      "Pffd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_select2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-select2 */
      "u1nn");
      /* harmony import */


      var _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../../generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.component */
      "xJsc");

      function InvoiceAddComponent_div_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.invoiceService.InvoiceData.InvoiceId);
        }
      }

      function InvoiceAddComponent_div_90_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_div_90_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.invoiceService.InvoiceData.InvoiceUniqueID = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.genicProfile.formData.InvoicePrefix);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.invoiceService.InvoiceData.InvoiceUniqueID);
        }
      }

      function InvoiceAddComponent_tr_142_div_6_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", x_r26.UniqId, ")");
        }
      }

      function InvoiceAddComponent_tr_142_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvoiceAddComponent_tr_142_div_6_span_2_Template, 2, 1, "span", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r26.WarrantyDays, " Days warranty ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r26.UniqId.length > 0);
        }
      }

      function InvoiceAddComponent_tr_142_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r26.Qty, "");
        }
      }

      function InvoiceAddComponent_tr_142_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InvoiceAddComponent_tr_142_div_6_Template, 3, 2, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InvoiceAddComponent_tr_142_div_8_Template, 2, 1, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceAddComponent_tr_142_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var x_r26 = ctx.$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.PupulateInvoiceProductList(x_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceAddComponent_tr_142_Template_a_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var x_r26 = ctx.$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.RemoveInvoiceItem(x_r26.Id, x_r26.ItemName, x_r26.Qty, x_r26.UnitCost);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r26.ItemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r26.ItemDescription, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r26.InWarranty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r26.Type === "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", x_r26.UnitCost, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r26.Total);
        }
      }

      function InvoiceAddComponent_div_146_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 165, 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_div_146_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.invoiceService.InvoiceItemData.Type = $event;
          })("change", function InvoiceAddComponent_div_146_Template_input_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.OnInvoiceItemTypeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.invoiceService.InvoiceItemData.Type);
        }
      }

      function InvoiceAddComponent_div_147_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 167, 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_div_147_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.invoiceService.InvoiceItemData.Type = $event;
          })("change", function InvoiceAddComponent_div_147_Template_input_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.OnInvoiceItemTypeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.invoiceService.InvoiceItemData.Type);
        }
      }

      function InvoiceAddComponent_div_152_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "l-select2", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InvoiceAddComponent_div_152_Template_l_select2_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.WhenSelectProductChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r14.productdata);
        }
      }

      function InvoiceAddComponent_div_153_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.invoiceService.InvoiceItemData.ItemName, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "InvalidInput": a0
        };
      };

      function InvoiceAddComponent_input_155_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 170, 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_input_155_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.invoiceService.InvoiceItemData.Qty = $event;
          })("keyup", function InvoiceAddComponent_input_155_Template_input_keyup_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.CalculateInvoiceProductCost();
          })("keypress", function InvoiceAddComponent_input_155_Template_input_keypress_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.invoiceService.InvoiceItemData.Qty)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r16.isQtyValid === false));
        }
      }

      function InvoiceAddComponent_div_176_div_1_i_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Product ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceAddComponent_div_176_div_1_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Service ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceAddComponent_div_176_div_1_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r56.invoiceService.InvoiceItemData.WarrantyDays, " Days Warranty ");
        }
      }

      function InvoiceAddComponent_div_176_div_1_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 181);
        }
      }

      function InvoiceAddComponent_div_176_div_1_div_12_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit Warranty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceAddComponent_div_176_div_1_div_12_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hide ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceAddComponent_div_176_div_1_div_12_div_8_label_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 197, 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_div_176_div_1_div_12_div_8_label_21_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

            return ctx_r71.customwarrantyShowMethor();
          })("ngModelChange", function InvoiceAddComponent_div_176_div_1_div_12_div_8_label_21_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

            return ctx_r73.invoiceService.InvoiceItemData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r68.invoiceService.InvoiceItemData.WarrantyDays);
        }
      }

      function InvoiceAddComponent_div_176_div_1_div_12_div_8_label_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_div_176_div_1_div_12_div_8_label_22_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

            return ctx_r74.customwarrantyShowMethor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceAddComponent_div_176_div_1_div_12_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 191, 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_div_176_div_1_div_12_div_8_Template_input_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r76.customwarrantyShowMethor();
          })("ngModelChange", function InvoiceAddComponent_div_176_div_1_div_12_div_8_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r78.invoiceService.InvoiceItemData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 90 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 193, 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_div_176_div_1_div_12_div_8_Template_input_change_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r79.customwarrantyShowMethor();
          })("ngModelChange", function InvoiceAddComponent_div_176_div_1_div_12_div_8_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r80.invoiceService.InvoiceItemData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 180 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 194, 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_div_176_div_1_div_12_div_8_Template_input_change_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r81.customwarrantyShowMethor();
          })("ngModelChange", function InvoiceAddComponent_div_176_div_1_div_12_div_8_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r82.invoiceService.InvoiceItemData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 270 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 195, 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_div_176_div_1_div_12_div_8_Template_input_change_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r83.customwarrantyShowMethor();
          })("ngModelChange", function InvoiceAddComponent_div_176_div_1_div_12_div_8_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r84.invoiceService.InvoiceItemData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " 365 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, InvoiceAddComponent_div_176_div_1_div_12_div_8_label_21_Template, 5, 1, "label", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InvoiceAddComponent_div_176_div_1_div_12_div_8_label_22_Template, 4, 0, "label", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.invoiceService.InvoiceItemData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.invoiceService.InvoiceItemData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.invoiceService.InvoiceItemData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.invoiceService.InvoiceItemData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r62.customwarrantyShow);
        }
      }

      function InvoiceAddComponent_div_176_div_1_div_12_div_9_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 200, 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_div_176_div_1_div_12_div_9_input_1_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

            return ctx_r87.invoiceService.InvoiceItemData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r85.invoiceService.InvoiceItemData.WarrantyDays);
        }
      }

      function InvoiceAddComponent_div_176_div_1_div_12_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvoiceAddComponent_div_176_div_1_div_12_div_9_input_1_Template, 2, 1, "input", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.customwarrantyShowEdit);
        }
      }

      function InvoiceAddComponent_div_176_div_1_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 183, 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_div_176_div_1_div_12_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r89.invoiceService.InvoiceItemData.UniqId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceAddComponent_div_176_div_1_div_12_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r91.enablewarrantchange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InvoiceAddComponent_div_176_div_1_div_12_span_6_Template, 3, 0, "span", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InvoiceAddComponent_div_176_div_1_div_12_span_7_Template, 3, 0, "span", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InvoiceAddComponent_div_176_div_1_div_12_div_8_Template, 23, 6, "div", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InvoiceAddComponent_div_176_div_1_div_12_div_9_Template, 2, 1, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r58.invoiceService.InvoiceItemData.UniqId)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r58.ItemUniqueIsValid === false));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r58.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r58.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r58.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r58.customwarrantyShow);
        }
      }

      function InvoiceAddComponent_div_176_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 176, 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_div_176_div_1_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r92.GenerateUniqueRandom();
          })("ngModelChange", function InvoiceAddComponent_div_176_div_1_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r94.invoiceService.InvoiceItemData.InWarranty = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " want to give Warranty on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InvoiceAddComponent_div_176_div_1_i_7_Template, 2, 0, "i", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InvoiceAddComponent_div_176_div_1_i_8_Template, 2, 0, "i", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InvoiceAddComponent_div_176_div_1_div_10_Template, 2, 1, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InvoiceAddComponent_div_176_div_1_div_11_Template, 1, 0, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvoiceAddComponent_div_176_div_1_div_12_Template, 10, 8, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r52.invoiceService.InvoiceItemData.InWarranty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.invoiceService.InvoiceItemData.Type === "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.invoiceService.InvoiceItemData.Type === "Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.invoiceService.InvoiceItemData.InWarranty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r52.invoiceService.InvoiceItemData.InWarranty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.invoiceService.InvoiceItemData.InWarranty);
        }
      }

      function InvoiceAddComponent_div_176_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvoiceAddComponent_div_176_div_1_Template, 13, 6, "div", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.tempInWarranty);
        }
      }

      function InvoiceAddComponent_option_282_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var t_r95 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", t_r95.TaxRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", t_r95.TaxName, "");
        }
      }

      function InvoiceAddComponent_div_318_Template(rf, ctx) {
        if (rf & 1) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "generic-ticket-icon-attachment", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("NameChange", function InvoiceAddComponent_div_318_Template_generic_ticket_icon_attachment_NameChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

            var x_r96 = ctx.$implicit;
            return x_r96.AttachmentExtension = $event;
          })("PathChange", function InvoiceAddComponent_div_318_Template_generic_ticket_icon_attachment_PathChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

            var x_r96 = ctx.$implicit;
            return x_r96.Attachment = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceAddComponent_div_318_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

            var x_r96 = ctx.$implicit;

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r100.RemoveInvoiceAttachement(x_r96.Id, x_r96.Attachment);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r96 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Name", x_r96.AttachmentExtension)("Path", x_r96.Attachment)("Status", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", x_r96.Attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var InvoiceAddComponent = /*#__PURE__*/function () {
        function InvoiceAddComponent(titleService, invoiceService, productservice, quoteService, docservice, router, toastr, logService, loginservice, genicProfile, propertyService) {
          var _this13 = this;

          _classCallCheck(this, InvoiceAddComponent);

          this.titleService = titleService;
          this.invoiceService = invoiceService;
          this.productservice = productservice;
          this.quoteService = quoteService;
          this.docservice = docservice;
          this.router = router;
          this.toastr = toastr;
          this.logService = logService;
          this.loginservice = loginservice;
          this.genicProfile = genicProfile;
          this.propertyService = propertyService;
          this.fileToUpload = null;
          this.InvoiceDateIsValid = true;
          this.InvoiceDueDateIsValid = true;
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({});
          this.ProductItemArray = [];
          this.tempArray = [];
          this.ItemBtn = 'Add';
          this.ItemIsValid = true;
          this.ItemProductIsValid = true;
          this.ItemQuantityIsValid = true;
          this.ItemUnitCosttIsValid = true;
          this.ItemUniqueIsValid = true;
          this.InvoiceNosChange = false;
          this.InvoiceNosChangeBtn = 'Change';
          this.loader = false;
          this.tempIndexQty = 0;
          this.IshowStockSection = true;
          this.tempInWarranty = false;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this13.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
          this.locateInvoiceUniqueID = this.invoiceService.InvoiceData.InvoiceUniqueID;
          this.isQtyValid = true;
          this.isUnitCostValid = true;
          this.productdata = [];
        }

        _createClass(InvoiceAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.btnloader = false;
            this.newUniqueID = 0;
            this.genicProfile.getGenicProfile(this.currentUser.Token);
            this.quoteService.getTaxList(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;
                _this14.quoteService.TextList = response.result;
              }
            }, function (error) {
              return console.log(error);
            });

            if (this.invoiceService.InvoiceData.InvoiceId === '' || this.invoiceService.InvoiceData.InvoiceId === undefined) {
              this.router.navigate(['/invoices/']);
            }

            if (this.router.url === '/invoices/invoice-add') {
              if (!this.currentUser.Permissions.InvoiceCreate) {
                this.router.navigate(['/dashboard']);
              }

              this.titleService.setTitle('Invoice Create | Genic Solution');
              this.createbuttontext = 'Create';
              this.invoiceService.InvoiceData.InvoiceDate = this.genicProfile.TODAY_DATE_IN_STRING;
              this.invoiceService.InvoiceData.InvoiceDueDate = this.genicProfile.NEXT_MONTH_DATE_IN_STRING;
            } else if (this.router.url === '/invoices/invoice-add-plane-url') {
              if (!this.currentUser.Permissions.InvoiceCreate) {
                this.router.navigate(['/dashboard']);
              }

              this.createbuttontext = 'Create';
              this.invoiceService.InvoiceData.InvoiceDate = this.genicProfile.TODAY_DATE_IN_STRING;
              this.invoiceService.InvoiceData.InvoiceDueDate = this.genicProfile.NEXT_MONTH_DATE_IN_STRING;
            } else if (this.router.url === '/invoices/invoice-edit') {
              if (!this.currentUser.Permissions.InvoiceEdit) {
                this.router.navigate(['/dashboard']);
              }

              this.createbuttontext = 'Update';
              this.titleService.setTitle('Invoice Edit | Genic Solution');
            } else if (this.router.url === '/invoices/invoice-from-quote') {
              if (!this.currentUser.Permissions.InvoiceCreate) {
                this.router.navigate(['/dashboard']);
              }

              this.createbuttontext = 'Create';
              this.invoiceService.InvoiceData.InvoiceDate = this.genicProfile.TODAY_DATE_IN_STRING;
              this.invoiceService.InvoiceData.InvoiceDueDate = this.genicProfile.NEXT_MONTH_DATE_IN_STRING;
              setTimeout(function () {
                _this14.setlocalcount();
              }, 1000);
            } else {
              if (!this.currentUser.Permissions.InvoiceCreate) {
                this.router.navigate(['/dashboard']);
              }

              this.createbuttontext = 'Create';
              this.invoiceService.InvoiceData.InvoiceDate = this.genicProfile.TODAY_DATE_IN_STRING;
              this.invoiceService.InvoiceData.InvoiceDueDate = this.genicProfile.NEXT_MONTH_DATE_IN_STRING;
              setTimeout(function () {
                _this14.setlocalcount();
              }, 1000);
            }

            this.productservice.refrestServicesList(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;
                _this14.productservice.serviceformList = response.result;
              }
            }, function (error) {
              return console.log(error);
            });
            this.productservice.refrestProductsList(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;
                _this14.productservice.Productlist = response.result;
                console.log(_this14.productservice.Productlist);
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this15 = this;

            setTimeout(function () {
              _this15.getInvoiceItems();
            }, 1000);
            setTimeout(function () {
              _this15.InitialazeProductDropdown();
            }, 3000);
          }
        }, {
          key: "InitialazeProductDropdown",
          value: function InitialazeProductDropdown() {
            var tempurl = '';

            if (this.invoiceService.InvoiceItemData.Type === 'Product') {
              tempurl = '/api/products/GetProductsForSelect2Dropdown/';
            }

            if (this.invoiceService.InvoiceItemData.Type === 'Service') {
              tempurl = '/api/products/GetServicesForSelect2Dropdown/';
            }

            var prod = this.invoiceService.InvoiceItemData.Type;

            if (this.invoiceService.InvoiceItemData.Type === 'Product') {
              prod = this.currentUser.Product;
            }

            this.productdata = {
              multiple: false,
              placeholder: 'Select ' + prod,
              minimumInputLength: 1,
              ajax: {
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + tempurl + this.currentUser.Token,
                dataType: 'json',
                delay: 250,
                data: function data(params) {
                  return {
                    q: params.term,
                    page: params.page
                  };
                },
                processResults: function processResults(data, params) {
                  params.page = params.page || 1;
                  return {
                    results: data.items,
                    pagination: {
                      more: params.page * 30 < data.total_count
                    }
                  };
                },
                cache: true
              },
              escapeMarkup: function escapeMarkup(markup) {
                return markup;
              },
              templateResult: this.templateResult,
              templateSelection: this.templateSelection
            };
          } // function for result template

        }, {
          key: "templateResult",
          value: function templateResult(repo) {
            if (repo.loading) {
              return repo.text;
            }

            return '<div class="select2-result-repository clearfix"><div class="select2-result-repository__meta">' + '<div class="select2-result-repository__title"><strong>' + repo.full_name + '</strong></div>' + '<div class="select2-result-repository__description">' + repo.description + '</div></div></div>';
          }
        }, {
          key: "templateSelection",
          value: function templateSelection(repo) {
            return repo.full_name || repo.text;
          }
        }, {
          key: "picked",
          value: function picked(event) {
            var _this16 = this;

            this.loader = true;
            var t = this.currentUser.Token;
            var type = 'invoiceattachment';
            var moduleid = this.invoiceService.InvoiceData.Id;
            var remark = '';
            var Files = event.target.files;
            var file = Files.item(0);
            this.docservice.uploadDocument(t, type, moduleid, '', remark, file).subscribe(function (res) {
              if (res) {
                var response = res;
                console.log(response);

                if (response.Message === 'success') {
                  _this16.toastr.info('upload successfully');

                  _this16.getInvoiceAttachments();

                  _this16.loader = false;
                }

                if (response.Message === 'failure') {
                  _this16.toastr.warning(response.MessageDescription);

                  _this16.loader = false;
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.loader = false;
          } // remove invice attachment

        }, {
          key: "RemoveInvoiceAttachement",
          value: function RemoveInvoiceAttachement(QuoteAttamentId, Attachment) {
            var _this17 = this;

            if (confirm('Are you sure to delete this attachment?')) {
              this.invoiceService.deleteInvoiceAttachment(QuoteAttamentId).then(function (res) {
                if (res.status === 204) {
                  _this17.getInvoiceAttachments();

                  var des = 'An attachment : ' + Attachment + ', has been Removed from the Invoice No : ' + _this17.invoiceService.InvoiceData.InvoiceId + ' of Customer : ' + _this17.invoiceService.InvoiceData.CustomerName + ' by user : ' + _this17.currentUser.UserName;
                  var Activity1 = 'An attachment ' + Attachment + ' has been removed from the Invoice No : ' + _this17.invoiceService.InvoiceData.InvoiceId;

                  _this17.logService.postUserLog(_this17.currentUser.Id, _this17.currentUser.UserName, 'Invoice', _this17.invoiceService.InvoiceData.Id, 'Removed', des, Activity1).subscribe();

                  _this17.toastr.info('info', 'Deleted successfully');
                } else if (res.status === 404) {
                  _this17.toastr.warning('Warning', 'Record Not Found');
                } else {
                  _this17.toastr.error('Error', res.statusText);
                }
              }, function (err) {
                _this17.toastr.error('Error', err.statusText);

                console.log(err.error);
              });
            }
          }
        }, {
          key: "getInvoiceItems",
          value: function getInvoiceItems() {
            var _this18 = this;

            this.invoiceService.getInvoiceItems(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this18.invoiceService.InvoiceItemList = [];
                  _this18.invoiceService.InvoiceItemList = response.result;

                  _this18.setlocalcount();
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "getInvoiceAttachments",
          value: function getInvoiceAttachments() {
            var _this19 = this;

            this.invoiceService.getInvoiceAttachments(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this19.invoiceService.InvoiceAttachmentList = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "setlocalcount",
          value: function setlocalcount() {
            this.ItemSubTotalByArry = [];
            this.ItemSubTotalByArry = this.invoiceService.InvoiceItemList.map(function (element) {
              return element.Total;
            });

            if (this.ItemSubTotalByArry.length < 0) {
              this.invoiceService.InvoiceData.SubTotal = 0;
              this.invoiceService.InvoiceData.NetAmount = 0;
              this.invoiceService.InvoiceData.TaxAmount = 0;
              this.invoiceService.InvoiceData.TaxRate = 0;
              this.invoiceService.InvoiceData.DiscountAmount = 0;
              this.invoiceService.InvoiceData.DiscountTextValue = 0;
            } else {
              this.invoiceService.InvoiceData.SubTotal = this.ItemSubTotalByArry.reduce(function (a, b) {
                return a + b;
              }, 0);
              var EditSubTotalValue = Number(this.ItemSubTotalByArry.reduce(function (a, b) {
                return a + b;
              }, 0));
              var EditTaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
              var EditTaxAmt = Number(EditSubTotalValue * EditTaxRate) / 100;
              this.invoiceService.InvoiceData.TaxAmount = EditTaxAmt;
              this.invoiceService.InvoiceData.SubTotal = EditSubTotalValue;

              if (Number(this.invoiceService.InvoiceData.DiscountType) === 0) {
                var EditDisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);

                if (Number(EditSubTotalValue) < EditDisTextValue) {
                  this.invoiceService.InvoiceData.DiscountAmount = 0;
                } else {
                  this.invoiceService.InvoiceData.DiscountAmount = Number(EditDisTextValue);
                  this.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - EditDisTextValue);
                }
              } else if (Number(this.invoiceService.InvoiceData.DiscountType) === 1) {
                var _EditDisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);

                var z = Number(EditSubTotalValue * _EditDisTextValue / 100);

                if (Number(EditSubTotalValue) < z) {
                  this.invoiceService.InvoiceData.DiscountAmount = 0;
                } else {
                  this.invoiceService.InvoiceData.DiscountAmount = Number(z);
                  this.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - z);
                }
              }
            }
          }
        }, {
          key: "RemoveInvoiceItem",
          value: function RemoveInvoiceItem(id, ItemName, Qty, UnitCost) {
            var _this20 = this;

            this.invoiceService.deleteInvoiceItems(id).then(function (res) {
              switch (res.status) {
                case 204:
                  _this20.toastr.info('success', 'Item removed from invoice');

                  _this20.getInvoiceItems();

                  var des = 'An Item : ' + ItemName + ', Qty : ' + Qty + ', Amount of $: ' + Qty * UnitCost + ', has been Removed from the Invoice No: ' + _this20.invoiceService.InvoiceData.InvoiceId + ' of Customer : ' + _this20.invoiceService.InvoiceData.CustomerName + ', by user : ' + _this20.currentUser.UserName;
                  var Activity2 = 'An item : ' + ItemName + ' Amount of :$ ' + Qty * UnitCost + 'has been removed from the Invoice No : ' + _this20.invoiceService.InvoiceData.InvoiceId;

                  _this20.logService.postUserLog(_this20.currentUser.Id, _this20.currentUser.UserName, 'Invoice', _this20.invoiceService.InvoiceData.Id, 'Removed', des, Activity2).subscribe(); // calculate invoice total value start


                  setTimeout(function () {
                    _this20.ItemSubTotalByArry = [];
                    _this20.ItemSubTotalByArry = _this20.invoiceService.InvoiceItemList.map(function (element) {
                      return element.Total;
                    });
                    _this20.invoiceService.InvoiceData.SubTotal = _this20.ItemSubTotalByArry.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                    var EditSubTotalValue = Number(_this20.ItemSubTotalByArry.reduce(function (a, b) {
                      return a + b;
                    }, 0));
                    var EditTaxRate = Number(_this20.invoiceService.InvoiceData.TaxRate);
                    var EditTaxAmt = Number(EditSubTotalValue * EditTaxRate) / 100;
                    _this20.invoiceService.InvoiceData.TaxAmount = EditTaxAmt;
                    _this20.invoiceService.InvoiceData.SubTotal = EditSubTotalValue;

                    if (Number(_this20.invoiceService.InvoiceData.DiscountType) === 0) {
                      var EditDisTextValue = Number(_this20.invoiceService.InvoiceData.DiscountTextValue);

                      if (Number(EditSubTotalValue) < EditDisTextValue) {
                        _this20.invoiceService.InvoiceData.DiscountAmount = 0;
                      } else {
                        _this20.invoiceService.InvoiceData.DiscountAmount = Number(EditDisTextValue);
                        _this20.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - EditDisTextValue);
                      }
                    } else if (Number(_this20.invoiceService.InvoiceData.DiscountType) === 1) {
                      var _EditDisTextValue2 = Number(_this20.invoiceService.InvoiceData.DiscountTextValue);

                      var z = Number(EditSubTotalValue * _EditDisTextValue2 / 100);

                      if (Number(EditSubTotalValue) < z) {
                        _this20.invoiceService.InvoiceData.DiscountAmount = 0;
                      } else {
                        _this20.invoiceService.InvoiceData.DiscountAmount = Number(z);
                        _this20.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - z);
                      }
                    }
                  }, 1000); // calculate invoice total value end

                  break;

                case 404:
                  break;

                default:
                  _this20.toastr.error('error', res.statusText);

                  break;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "CalculateInvoiceProductCost",
          value: function CalculateInvoiceProductCost() {
            var tempqty = Number(this.invoiceService.InvoiceItemData.Qty);
            var temcost = Number(this.invoiceService.InvoiceItemData.UnitCost).toFixed(2);
            var total = Number(tempqty * temcost);
            this.invoiceService.InvoiceItemData.Total = total.toFixed(2).toString();
          } // Id,InvoiceId,ItemName,Qty,UnitCost,Total,ItemDescription

        }, {
          key: "addProductToInvoice",
          value: function addProductToInvoice(Id, InvoiceId, ItemName, Qty, UnitCost, Total, ItemDescription) {
            var _this21 = this;

            this.ItemIsValid = true;

            if (this.invoiceService.InvoiceData.Id === undefined || this.invoiceService.InvoiceData.Id === '00000000-0000-0000-0000-000000000000') {
              this.router.navigate(['/invoices/invoice-add']);
              return false;
            }

            if (ItemName === undefined || ItemName === 'select') {
              this.toastr.warning('Warning', 'Please select a product');
              this.ItemProductIsValid = false;
              this.ItemIsValid = false;
              return false;
            }

            if (Qty === undefined || Qty === 0) {
              this.toastr.warning('Warning', 'Please enter quantity');
              this.ItemQuantityIsValid = false;
              this.ItemIsValid = false;
              return false;
            }

            if (UnitCost === undefined || UnitCost === 0) {
              this.toastr.warning('Warning', 'Please enter unit cost');
              this.ItemUnitCosttIsValid = false;
              this.ItemIsValid = false;
              return false;
            }

            if (this.currentUser.Permissions.ProductWarranty) {
              if (this.invoiceService.InvoiceItemData.InWarranty) {
                if (this.invoiceService.InvoiceItemData.UniqId === '' || this.invoiceService.InvoiceItemData.UniqId.length === 0) {
                  this.toastr.warning('Warning', 'Please enter a unique id');
                  this.ItemUniqueIsValid = false;
                  this.ItemIsValid = false;
                  return false;
                }
              }
            }

            this.invoiceService.InvoiceItemData.Id = Id;
            this.invoiceService.InvoiceItemData.InvoiceId = InvoiceId;
            this.invoiceService.InvoiceItemData.ItemName = ItemName;
            this.invoiceService.InvoiceItemData.Qty = Number(Qty);
            this.invoiceService.InvoiceItemData.UnitCost = Number(UnitCost);
            this.invoiceService.InvoiceItemData.Total = Number(Total);
            this.invoiceService.InvoiceItemData.ItemDescription = ItemDescription;
            this.invoiceService.InvoiceItemData.WarrantyDays = Number(this.invoiceService.InvoiceItemData.WarrantyDays);
            var des = 'A Product : ' + this.invoiceService.InvoiceItemData.ItemName + ', has been Added to the Invoice No : ' + this.invoiceService.InvoiceData.InvoiceId + ' of Customer ' + this.invoiceService.InvoiceData.CustomerName + ' and Qty ' + this.invoiceService.InvoiceItemData.Qty + ' Amount of : $ ' + this.invoiceService.InvoiceItemData.Total + ' by user ' + this.currentUser.UserName;
            var Activity3 = 'An item : ' + ItemName + ' Amount of :$ ' + Qty * UnitCost + ' is added to the Invoice No : ' + this.invoiceService.InvoiceData.InvoiceId;
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice', this.invoiceService.InvoiceData.Id, 'Added', des, Activity3).subscribe();

            if (Id === 0) {
              this.invoiceService.postInvoiceItemDetails(this.currentUser.Token).subscribe(function (res) {
                if (res) {
                  var response = res;

                  if (response.Message === 'success') {
                    _this21.getInvoiceItems();
                  }
                }
              }, function (error) {
                return console.log(error);
              });
            } else {
              this.invoiceService.putInvoiceItemDetails().subscribe(function (res) {
                switch (res.status) {
                  case 202:
                    _this21.getInvoiceItems();

                    setTimeout(function () {
                      _this21.ItemSubTotalByArry = [];
                      _this21.ItemSubTotalByArry = _this21.invoiceService.InvoiceItemList.map(function (element) {
                        return element.Total;
                      });
                      _this21.invoiceService.InvoiceData.SubTotal = _this21.ItemSubTotalByArry.reduce(function (a, b) {
                        return a + b;
                      }, 0);
                      var EditSubTotalValue = Number(_this21.ItemSubTotalByArry.reduce(function (a, b) {
                        return a + b;
                      }, 0));
                      var EditTaxRate = Number(_this21.invoiceService.InvoiceData.TaxRate);
                      var EditTaxAmt = Number(EditSubTotalValue * EditTaxRate) / 100;
                      _this21.invoiceService.InvoiceData.TaxAmount = EditTaxAmt;
                      _this21.invoiceService.InvoiceData.SubTotal = EditSubTotalValue;

                      if (Number(_this21.invoiceService.InvoiceData.DiscountType) === 0) {
                        var EditDisTextValue = Number(_this21.invoiceService.InvoiceData.DiscountTextValue);

                        if (Number(EditSubTotalValue) < EditDisTextValue) {
                          _this21.invoiceService.InvoiceData.DiscountAmount = 0;
                        } else {
                          _this21.invoiceService.InvoiceData.DiscountAmount = Number(EditDisTextValue);
                          _this21.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - EditDisTextValue);
                        }
                      } else if (Number(_this21.invoiceService.InvoiceData.DiscountType) === 1) {
                        var _EditDisTextValue3 = Number(_this21.invoiceService.InvoiceData.DiscountTextValue);

                        var z = Number(EditSubTotalValue * _EditDisTextValue3 / 100);

                        if (Number(EditSubTotalValue) < z) {
                          _this21.invoiceService.InvoiceData.DiscountAmount = 0;
                        } else {
                          _this21.invoiceService.InvoiceData.DiscountAmount = Number(z);
                          _this21.invoiceService.InvoiceData.NetAmount = Number(EditSubTotalValue + EditTaxAmt - z);
                        }
                      }
                    }, 200);
                    var descc = 'A Product : ' + _this21.invoiceService.InvoiceItemData.ItemName + ', has been Modify to the Invoice No : ' + _this21.invoiceService.InvoiceData.InvoiceId + ' of Customer ' + _this21.invoiceService.InvoiceData.CustomerName + ' and Qty ' + _this21.invoiceService.InvoiceItemData.Qty + ' Amount of : $ ' + _this21.invoiceService.InvoiceItemData.Total + ' by user ' + _this21.currentUser.UserName;
                    var Activity4 = 'An item : ' + _this21.invoiceService.InvoiceItemData.ItemName + ' Amount of :$ ' + _this21.invoiceService.InvoiceItemData.Total + ' is updated against Invoice No : ' + +_this21.invoiceService.InvoiceData.InvoiceId;

                    _this21.logService.postUserLog(_this21.currentUser.Id, _this21.currentUser.UserName, 'Invoice', _this21.invoiceService.InvoiceData.Id, 'Modify', descc, Activity4).subscribe();

                    break;

                  case 208:
                    _this21.toastr.warning('Unique id already exist. use an other');

                    break;

                  case 404:
                    break;

                  default:
                    _this21.toastr.error('error', res.statusText);

                    break;
                }
              }, function (err) {
                console.log(err);
              });
              this.ItemBtn = 'Add';
            }

            this.ItemUnitCosttIsValid = true;
            this.invoiceService.InvoiceItemData.Id = 0;
            this.invoiceService.InvoiceItemData.InvoiceId = '00000000-0000-0000-0000-000000000000';
            this.invoiceService.InvoiceItemData.ItemName = '';
            this.invoiceService.InvoiceItemData.Qty = null;
            this.invoiceService.InvoiceItemData.UnitCost = null;
            this.invoiceService.InvoiceItemData.Total = null;
            this.invoiceService.InvoiceItemData.ItemDescription = '';
            this.invoiceService.InvoiceItemData.UniqId = '';
            this.invoiceService.InvoiceItemData.InWarranty = false;
            this.invoiceService.InvoiceItemData.WarrantyDays = 365;

            if (this.quoteService.QuoteItemData.Type === 'Product') {
              this.quoteService.QuoteItemData.Type = 'Service';
              this.InitialazeProductDropdown();
              setTimeout(function () {
                _this21.quoteService.QuoteItemData.Type = 'Product';

                _this21.InitialazeProductDropdown();
              }, 200);
            } else {
              this.quoteService.QuoteItemData.Type = 'Product';
              this.InitialazeProductDropdown();
              setTimeout(function () {
                _this21.quoteService.QuoteItemData.Type = 'Service';

                _this21.InitialazeProductDropdown();
              }, 200);
            }

            setTimeout(function () {
              _this21.invoiceService.InvoiceData.NetAmount = 0;

              _this21.invoiceService.InvoiceItemList.forEach(function (element) {
                _this21.invoiceService.InvoiceData.NetAmount += element.Total;
              });
            }, 1000);
          }
        }, {
          key: "PupulateInvoiceProductList",
          value: function PupulateInvoiceProductList(x) {
            var _this22 = this;

            this.invoiceService.InvoiceItemData = Object.assign({}, x);

            if (x.InWarranty) {
              this.tempInWarranty = true;
            } else {
              this.tempInWarranty = false;
            }

            this.ItemBtn = 'Update';
            setTimeout(function () {
              _this22.invoiceService.InvoiceItemData.Qty = x.Qty;
            }, 800);
          }
        }, {
          key: "OnInvoiceItemTypeChange",
          value: function OnInvoiceItemTypeChange() {
            this.ItemQuantityIsValid = true;
            this.ItemUnitCosttIsValid = true;

            if (this.currentUser.Permissions.ProductWarranty) {
              if (this.invoiceService.InvoiceItemData.InWarranty) {
                this.ItemUniqueIsValid = true;
              }
            }

            if (this.invoiceService.InvoiceItemData.Type === 'Service') {
              this.invoiceService.InvoiceItemData.Qty = 1;
              this.invoiceService.InvoiceItemData.UnitCost = null;
              this.invoiceService.InvoiceItemData.Total = null;
              this.invoiceService.InvoiceItemData.InWarranty = false;
              this.invoiceService.InvoiceItemData.UniqId = null;
              this.invoiceService.InvoiceItemData.WarrantyDays = 365;
            }

            if (this.invoiceService.InvoiceItemData.Type === 'Product') {
              this.invoiceService.InvoiceItemData.Qty = null;
              this.invoiceService.InvoiceItemData.UnitCost = null;
              this.invoiceService.InvoiceItemData.Total = null;
              this.invoiceService.InvoiceItemData.InWarranty = false;
              this.invoiceService.InvoiceItemData.UniqId = null;
              this.invoiceService.InvoiceItemData.WarrantyDays = 365;
            }

            this.InitialazeProductDropdown();
            this.invoiceService.InvoiceItemData.ItemDescription = null;
          } // change deposite value

        }, {
          key: "changeInvoiceDepositeValue",
          value: function changeInvoiceDepositeValue() {
            if (Number(this.invoiceService.InvoiceData.ReqDepositeType) === 0) {
              //const v = this.invoiceService.InvoiceData.NetAmount;
              var x = Number(this.invoiceService.InvoiceData.ReqDepositeTextValue);

              if (Number(this.invoiceService.InvoiceData.NetAmount) < x) {
                this.invoiceService.InvoiceData.ReqDepositeAmount = Number(0);
                this.toastr.info('Deposit amount is always less than from total amount.');
              } else {
                this.invoiceService.InvoiceData.ReqDepositeAmount = Number(x);
              }
            } else if (Number(this.invoiceService.InvoiceData.ReqDepositeType) === 1) {
              var v = Number(this.invoiceService.InvoiceData.NetAmount);

              var _x = Number(this.invoiceService.InvoiceData.ReqDepositeTextValue);

              var z = v * _x / 100;

              if (Number(this.invoiceService.InvoiceData.NetAmount) < z) {
                this.invoiceService.InvoiceData.ReqDepositeAmount = Number(0);
                this.toastr.info('Deposit amount is always less than from total amount.');
              } else {
                this.invoiceService.InvoiceData.ReqDepositeAmount = Number(z);
              }
            }
          }
        }, {
          key: "changeDiscountValue",
          value: function changeDiscountValue() {
            if (this.invoiceService.InvoiceData.DiscountType == null || this.invoiceService.InvoiceData.DiscountType == undefined) {
              this.invoiceService.InvoiceData.DiscountType = 0;
            }

            if (Number(this.invoiceService.InvoiceData.DiscountType) === 0) {
              var SubTotalValue = Number(this.invoiceService.InvoiceData.SubTotal);
              var DisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);

              if (Number(SubTotalValue) < DisTextValue) {
                this.invoiceService.InvoiceData.DiscountAmount = 0;
                var TempTaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
                var tempTaxAmt = Number(SubTotalValue) * TempTaxRate / 100;
                this.invoiceService.InvoiceData.TaxAmount = tempTaxAmt;
                this.invoiceService.InvoiceData.NetAmount = Number(SubTotalValue + tempTaxAmt);
              } else {
                this.invoiceService.InvoiceData.DiscountAmount = Number(DisTextValue);

                var _TempTaxRate = Number(this.invoiceService.InvoiceData.TaxRate);

                var _tempTaxAmt = (Number(SubTotalValue) - Number(DisTextValue)) * _TempTaxRate / 100;

                this.invoiceService.InvoiceData.TaxAmount = _tempTaxAmt;
                var z = SubTotalValue - DisTextValue + _tempTaxAmt;
                this.invoiceService.InvoiceData.NetAmount = Number(z);
              }
            } else if (Number(this.invoiceService.InvoiceData.DiscountType) === 1) {
              var _SubTotalValue = Number(this.invoiceService.InvoiceData.SubTotal);

              var _DisTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);

              var tempDiscAmount = Number(_SubTotalValue * _DisTextValue / 100);

              if (Number(_SubTotalValue) < tempDiscAmount) {
                this.invoiceService.InvoiceData.DiscountAmount = 0;

                var _TempTaxRate2 = Number(this.invoiceService.InvoiceData.TaxRate);

                var _tempTaxAmt2 = Number(_SubTotalValue) * Number(_TempTaxRate2) / 100;

                this.invoiceService.InvoiceData.TaxAmount = Number(_tempTaxAmt2);
                this.invoiceService.InvoiceData.NetAmount = Number(_SubTotalValue + _tempTaxAmt2);
              } else {
                this.invoiceService.InvoiceData.DiscountAmount = Number(tempDiscAmount);

                var _TempTaxRate3 = Number(this.invoiceService.InvoiceData.TaxRate);

                var _tempTaxAmt3 = (Number(_SubTotalValue) - Number(tempDiscAmount)) * _TempTaxRate3 / 100;

                this.invoiceService.InvoiceData.TaxAmount = _tempTaxAmt3;
                var zz = _SubTotalValue - tempDiscAmount + _tempTaxAmt3;
                this.invoiceService.InvoiceData.NetAmount = Number(zz);
              }
            }
          } // calculate tax

        }, {
          key: "CalculateInvoiceTax",
          value: function CalculateInvoiceTax() {
            var SubTotalValue = Number(this.invoiceService.InvoiceData.SubTotal);
            var DisctAmt = Number(this.invoiceService.InvoiceData.DiscountAmount);
            var TaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
            var z = SubTotalValue - DisctAmt;
            var TaxAmt = Number(z * TaxRate) / 100;
            this.invoiceService.InvoiceData.TaxAmount = TaxAmt;
            this.invoiceService.InvoiceData.NetAmount = z + TaxAmt;
          } // post invoice

        }, {
          key: "putInvoice",
          value: function putInvoice() {
            var _this23 = this;

            if (this.invoiceService.InvoiceData.InvoiceDate === undefined || this.invoiceService.InvoiceData.InvoiceDate === null) {
              this.toastr.warning('Warning', 'Please select Invoice date');
              this.InvoiceDateIsValid = false;
              return this.InvoiceDateIsValid;
            }

            if (this.invoiceService.InvoiceData.InvoiceDueDate === undefined || this.invoiceService.InvoiceData.InvoiceDueDate === null) {
              this.toastr.warning('Warning', 'Please select Invoice due date');
              this.InvoiceDueDateIsValid = false;
              return this.InvoiceDueDateIsValid;
            }

            if (this.invoiceService.InvoiceData.InvoiceTitle === null || this.invoiceService.InvoiceData.InvoiceTitle === '' || this.invoiceService.InvoiceData.InvoiceTitle === undefined) {
              this.toastr.warning('warning', 'Add Invoice title.');
            } else if (this.invoiceService.InvoiceItemList.length === 0 || this.invoiceService.InvoiceItemList === [] || this.invoiceService.InvoiceItemList === undefined) {
              this.toastr.warning('warning', 'Add product to the Invoice.');
            } else {
              this.btnloader = true;
              this.createbuttontext = 'Loading...';
              this.invoiceService.InvoiceData.DiscountType = Number(this.invoiceService.InvoiceData.DiscountType);
              this.invoiceService.InvoiceData.DiscountAmount = Number(this.invoiceService.InvoiceData.DiscountAmount);
              this.invoiceService.InvoiceData.DiscountTextValue = Number(this.invoiceService.InvoiceData.DiscountTextValue);
              this.invoiceService.InvoiceData.SubTotal = Number(this.invoiceService.InvoiceData.SubTotal);
              this.invoiceService.InvoiceData.TaxRate = Number(this.invoiceService.InvoiceData.TaxRate);
              this.invoiceService.InvoiceData.TaxAmount = Number(this.invoiceService.InvoiceData.TaxAmount);
              this.invoiceService.InvoiceData.ReqDepositeType = Number(this.invoiceService.InvoiceData.ReqDepositeType);
              this.invoiceService.InvoiceData.ReqDepositeTextValue = Number(this.invoiceService.InvoiceData.ReqDepositeTextValue);
              this.invoiceService.InvoiceData.ReqDepositeAmount = Number(this.invoiceService.InvoiceData.ReqDepositeAmount);
              this.invoiceService.InvoiceData.NetAmount = Number(this.invoiceService.InvoiceData.NetAmount);
              this.invoiceService.putInvoice(this.currentUser.Token).subscribe(function (res) {
                if (res) {
                  var response = res;

                  if (response.Message === 'success') {
                    _this23.toastr.success('success', response.MessageDescription);

                    if (response.type === 'insert') {
                      var des1 = 'Invoice No : ' + _this23.invoiceService.InvoiceData.InvoiceId + ' is Added :  by user : ' + _this23.currentUser.UserName + ' for Customer : ' + _this23.invoiceService.InvoiceData.CustomerName + 'invoice title : ' + ', Client Description : ' + _this23.invoiceService.InvoiceData.ClientRemark + ',Internal note : ' + _this23.invoiceService.InvoiceData.InternalNotes + _this23.invoiceService.InvoiceData.InvoiceTitle + ', Amount of : $ ' + _this23.invoiceService.InvoiceData.NetAmount + '0.00' + ', Discount : $ ' + _this23.invoiceService.InvoiceData.DiscountAmount + ', Tax : $ ' + _this23.invoiceService.InvoiceData.TaxAmount + ', and required to deposite amount : $' + _this23.invoiceService.InvoiceData.ReqDepositeAmount + ', on dated : ' + new Date(Date.parse(Date()));
                      var Activity5 = 'New invoice No : ' + _this23.invoiceService.InvoiceData.InvoiceId + ' , Amount :$ ' + _this23.invoiceService.InvoiceData.NetAmount + '0.00' + ' is created';

                      _this23.logService.postUserLog(_this23.currentUser.Id, _this23.currentUser.UserName, 'Invoice', _this23.invoiceService.InvoiceData.Id, 'Added', des1, Activity5).subscribe();

                      _this23.btnloader = false;

                      _this23.router.navigate(['/invoices/']);
                    }

                    if (response.type === 'update') {
                      var des = 'Invoice No : ' + _this23.invoiceService.InvoiceData.InvoiceId + ' is modified :  by user : ' + _this23.currentUser.UserName + ' for Customer : ' + _this23.invoiceService.InvoiceData.CustomerName + 'invoice title : ' + ', Client Description : ' + _this23.invoiceService.InvoiceData.ClientRemark + ',Internal note : ' + _this23.invoiceService.InvoiceData.InternalNotes + _this23.invoiceService.InvoiceData.InvoiceTitle + ', Amount of : $ ' + _this23.invoiceService.InvoiceData.NetAmount + '0.00' + ', Discount : $ ' + _this23.invoiceService.InvoiceData.DiscountAmount + ', Tax : $ ' + _this23.invoiceService.InvoiceData.TaxAmount + ', and required to deposite amount : $' + _this23.invoiceService.InvoiceData.ReqDepositeAmount + ', on dated : ' + new Date(Date.parse(Date()));
                      var Activity6 = 'Invoice No : ' + _this23.invoiceService.InvoiceData.InvoiceId + ' , Amount :$ ' + _this23.invoiceService.InvoiceData.NetAmount + '0.00' + ' is updated';

                      _this23.logService.postUserLog(_this23.currentUser.Id, _this23.currentUser.UserName, 'Invoice', _this23.invoiceService.InvoiceData.Id, 'Modify', des, Activity6);

                      _this23.btnloader = false;

                      _this23.router.navigate(['/invoices/']);
                    }
                  }

                  if (response.Message === 'failure') {
                    _this23.toastr.warning('warning', response.MessageDescription);
                  }
                }
              }, function (error) {
                return console.log(error);
              });
            }
          }
        }, {
          key: "CleareProductToInvoice",
          value: function CleareProductToInvoice() {
            this.invoiceService.InvoiceItemData.ItemName = null;
            this.invoiceService.InvoiceItemData.Qty = null;
            this.invoiceService.InvoiceItemData.ItemDescription = null;
            this.invoiceService.InvoiceItemData.UnitCost = null;
            this.invoiceService.InvoiceItemData.Total = null;
            this.invoiceService.InvoiceItemData.UniqId = '';
            this.invoiceService.InvoiceItemData.InWarranty = false;
            this.invoiceService.InvoiceItemData.WarrantyDays = 0;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.invoiceService.SetAsDefaultValue();
          }
        }, {
          key: "onInvoiceNosChange",
          value: function onInvoiceNosChange() {
            if (this.InvoiceNosChange) {
              this.InvoiceNosChange = false;
              this.InvoiceNosChangeBtn = 'Change';

              if (this.locateInvoiceUniqueID === this.quoteService.QuoteData.QuoteUniqueID) {} else {
                this.ValidateInvoiceNo();
              }
            } else {
              this.InvoiceNosChange = true;
              this.InvoiceNosChangeBtn = 'Save';
            }
          }
        }, {
          key: "ValidateInvoiceNo",
          value: function ValidateInvoiceNo() {
            var _this24 = this;

            this.invoiceService.ValidateInvoiceNo(this.invoiceService.InvoiceData.InvoiceUniqueID).subscribe(function (res) {
              switch (res.status) {
                case 201:
                  _this24.newUniqueID = res.body;
                  _this24.invoiceService.InvoiceData.InvoiceId = _this24.genicProfile.formData.InvoicePrefix + _this24.newUniqueID;

                  _this24.toastr.success('success', 'Invoice number available.');

                  break;

                case 202:
                  _this24.toastr.warning('warning', 'Invoice number already taken, choose another.');

                  break;

                default:
                  _this24.toastr.error('error', res.statusText);

                  break;
              }
            }, function (err) {
              console.log(err);
            });
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
          key: "numberwithDecimalOnly",
          value: function numberwithDecimalOnly(event) {
            if (event.target.value === 0 || event.target.value === '') {
              this.isUnitCostValid = false;
            } else {
              this.isUnitCostValid = true;
            }

            if (Number(event.target.value) === 0) {
              event.target.value = null;
            }

            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              if (charCode === 46) {
                return true;
              } else {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "WhenSelectProductChange",
          value: function WhenSelectProductChange(event) {
            if (this.invoiceService.InvoiceItemData.Type === 'Product') {
              var titem = this.productservice.Productlist.filter(function (x) {
                return x.Id === event.id;
              });
              var warrantyvalue = titem[0].InWarranty;
              this.ItemQuantityIsValid = true;
              this.ItemUnitCosttIsValid = true;

              if (titem.length === 0) {
                this.invoiceService.InvoiceItemData.Qty = 0;
                this.invoiceService.InvoiceItemData.Total = 0;
                this.invoiceService.InvoiceItemData.UnitCost = 0;
                this.invoiceService.InvoiceItemData.ItemDescription = '';
                this.invoiceService.InvoiceItemData.WarrantyDays = 0;
                this.IshowStockSection = false;
                this.tempInWarranty = false;
              } else {
                this.tempAvailableStock = Number(titem[0].Quantity);
                this.tempSalePrice = Number(titem[0].SalePrice);
                this.invoiceService.InvoiceItemData.WarrantyDays = Number(titem[0].WarrantyDays);
                this.IshowStockSection = true;
                this.invoiceService.InvoiceItemData.Qty = 1;
                this.invoiceService.InvoiceItemData.ItemName = titem[0].ProductName;
                this.invoiceService.InvoiceItemData.UnitCost = Number(titem[0].SalePrice);
                this.invoiceService.InvoiceItemData.Total = this.tempSalePrice * this.invoiceService.InvoiceItemData.Qty;
                this.invoiceService.InvoiceItemData.ItemDescription = titem[0].Description;
                this.ItemQuantityIsValid = true;
                this.ItemUnitCosttIsValid = true;
              }

              if (warrantyvalue === true) {
                this.tempInWarranty = true;
              } else {
                this.tempInWarranty = false;
              }
            }

            if (this.invoiceService.InvoiceItemData.Type === 'Service') {
              var _titem = this.productservice.serviceformList.filter(function (x) {
                return x.Id === event.id;
              });

              var _warrantyvalue = _titem[0].InWarranty;

              if (_titem.length === 0) {
                this.invoiceService.InvoiceItemData.ItemDescription = '';
                this.invoiceService.InvoiceItemData.WarrantyDays = 0;
                this.tempInWarranty = false;
              } else {
                this.invoiceService.InvoiceItemData.Qty = 1;
                this.invoiceService.InvoiceItemData.ItemName = _titem[0].ServiceName;
                this.invoiceService.InvoiceItemData.ItemDescription = _titem[0].ServiceDescription;
                this.invoiceService.InvoiceItemData.WarrantyDays = _titem[0].WarrantyDays;
                this.invoiceService.InvoiceItemData.UnitCost = 0;
                this.invoiceService.InvoiceItemData.Total = 0;
                this.ItemUnitCosttIsValid = true;
              }

              if (_warrantyvalue === true) {
                this.tempInWarranty = true;
              } else {
                this.tempInWarranty = false;
              }
            }

            if (this.currentUser.Permissions.ProductWarranty) {
              if (this.invoiceService.InvoiceItemData.InWarranty) {
                this.ItemUniqueIsValid = true;
                this.GenerateUniqueRandom();
              }
            }

            this.InitialazeProductDropdown();
          }
        }, {
          key: "GenerateUniqueRandom",
          value: function GenerateUniqueRandom() {
            var _this25 = this;

            if (this.ItemBtn === 'Add') {
              this.productservice.GetRandamUniqueId(this.currentUser.Token).subscribe(function (res) {
                if (res) {
                  var response = res;

                  if (response.Message === 'success') {
                    _this25.invoiceService.InvoiceItemData.UniqId = response.MessageDescription;
                  }
                }
              }, function (error) {
                return console.log(error);
              });
            }
          }
        }, {
          key: "customwarrantyShowMethor",
          value: function customwarrantyShowMethor() {
            if (this.invoiceService.InvoiceItemData.WarrantyDays === undefined) {
              this.customwarrantyShow = false;
            } else {
              switch (this.invoiceService.InvoiceItemData.WarrantyDays.toString()) {
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
        }]);

        return InvoiceAddComponent;
      }();

      InvoiceAddComponent.ɵfac = function InvoiceAddComponent_Factory(t) {
        return new (t || InvoiceAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_11__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_12__["DocumentUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_15__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_17__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_18__["PropertyService"]));
      };

      InvoiceAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvoiceAddComponent,
        selectors: [["app-invoice-add"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
          useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"],
          deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]]
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],
          useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MAT_MOMENT_DATE_FORMATS"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_7__["NgbTimeToStringAdapter"]
        }])],
        decls: 331,
        vars: 55,
        consts: [["autocomplete", "off", 3, "submit"], ["form", "ngForm"], ["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid", "breadcud-kt-container"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/invoices", 1, "kt-subheader__breadcrumbs-link"], ["type", "hidden", "name", "Id", 3, "ngModel", "ngModelChange"], ["Id", "ngModel"], ["type", "hidden", "name", "CustomerId", 3, "ngModel", "ngModelChange"], ["CustomerId", "ngModel"], [1, "new-request-main-section", "jobs-for-client-section"], [1, "kt-container", "kt-container--fluid"], [1, "new-requst-filter_form"], [1, "container"], [1, "col-md-12", "section-client-requst-form"], [1, ""], [1, "kt-section"], [1, "kt-section__title"], ["data-toggle", "kt-tooltip", "data-width", "auto", "title", "", "data-original-title", "If different than the corresponding address", 1, "kt-section__help"], [1, "kt-section__content", "col-md-7", "requst-for-client-name"], [1, "row"], [1, "col-lg-11", "padd-left-0"], ["type", "text", "name", "billing_address_1", "name", "InvoiceTitle", "placeholder", "Title", "maxlength", "64", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-lg-6", "property-addres-info"], [1, "kt-widget4--sticky"], [1, "kt-widget4__items", "kt-widget4__items--bottom", "kt-portlet__space-x", "kt-margin-b-20"], [1, "kt-widget4__item"], [1, "kt-widget4__info"], [1, "kt-widget4__title"], [1, "kt-widget4__sub"], [1, "kt-widget4", "kt-widget4--sticky"], [1, "col-md-12"], ["for", ""], ["name", "Description", "rows", "3", "placeholder", "Description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Description", "ngModel"], [1, "col-md-5", "new-requst-client-name"], [1, "table", "table-bordered", "service-form-table-border", "service-form-table-border", "htBorder"], ["colspan", "2"], [1, "row", 2, "padding", "0", "margin", "0"], [1, "col-md-9"], ["class", "InvoiceNN", 4, "ngIf"], ["class", "InviceCC", 4, "ngIf"], ["placeholder", "mm-dd-yyyy", "name", "InvoiceDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["InvoiceDate", "ngModel", "datePickerInvoiceDate", "ngbDatepicker"], ["placeholder", "mm-dd-yyyy", "name", "InvoiceDueDate", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["InvoiceDueDate", "ngModel", "datePickerInvoiceDueDate", "ngbDatepicker"], ["placeholder", "Refrance No", "name", "RefranceNo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["RefranceNo", "ngModel"], [1, "col-md-12", "new-request-service-details-form"], [1, "col-md-12", "job-for-tab-content"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "text-danger"], [1, "kt-portlet__body"], [1, "table", "table-borderless", "table-sm"], ["colspan", "2", "width", "50%"], [1, "product-service-colun-name"], ["width", "15%"], ["width", "5%"], ["colspan", "6"], [1, "client-view-border-info"], ["class", "border", 4, "ngFor", "ngForOf"], [1, "row", "radio-service"], ["class", "col-md-4", 4, "ngIf"], ["colspan", "4"], ["class", "col-md-12", 4, "ngIf"], ["name", "InvoiceItemData.Qty", "height", "30px", "type", "text", "min", "0", "maxlength", "3", "class", "form-control", "placeholder", "Quantity", 3, "ngModel", "ngClass", "ngModelChange", "keyup", "keypress", 4, "ngIf"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "fa", "fa-dollar-sign"], ["name", "InvoiceItemData.UnitCost", "type", "text", "min", "0", "maxlength", "6", "placeholder", "Unit Cost", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "keyup", "keypress"], ["InvoiceItemData.UnitCost", "ngModel"], ["name", "invoiceService.InvoiceItemData.Total", "type", "text", "min", "0", "height", "30px", "placeholder", "Total Cost", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["invoiceService.InvoiceItemData.Total", "ngModel"], ["name", "invoiceService.InvoiceItemData.ItemDescription", "placeholder", "Description", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["invoiceService.InvoiceItemData.ItemDescription", "ngModel"], ["class", "row", 4, "ngIf"], [1, "form-group", "form-group-last"], [1, "col-lg-4"], ["href", "javascript:;", 1, "btn", "btn-brand", "btn-sm", "add-line-item-btn", 3, "click"], [1, "la", "la-plus"], ["href", "javascript:;", 1, "btn", "btn-brand", "btn-sm", "add-line-item-btn", 2, "margin-left", "2px", 3, "click"], [1, "la", "la-times"], [1, "quots-client-view-border-info"], [1, "row", "kt-widget4", "total-job-price-client"], [1, "tab-content", 2, "overflow-x", "scroll", "overflow", "hidden"], ["id", "kt_widget11_tab1_content", 1, "tab-pane", "active"], [1, "kt-widget11"], ["id", "kt_repeater_1"], [1, "row", "col-md-12"], [1, "col-md-6", "col-sm-6", "col-xs-6", "qty-unit-total"], [1, "clientRemarkSection"], [1, "CLRemark"], ["name", "ClientRemark", "placeholder", "Client Message", "maxlength", "1024", "rows", "12", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ClientRemark", "ngModel"], [1, "row", 2, "display", "none"], [1, "clientViewSection"], [1, "form-group"], [1, "clView"], ["aria-hidden", "true", 1, "fa", "fa-eye"], [1, "kt-checkbox-inline"], [1, "kt-checkbox"], ["type", "checkbox", "name", "ClientViewQty", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "ClientViewUnitCost", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "ClientViewLineItemTotal", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "ClientAccountBalance", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "LateStamp", 3, "ngModel", "ngModelChange"], [1, "col-md-6", "invoicing-list-view-border-left"], [1, "kt-widget1"], [1, "kt-widget1__item"], [1, "kt-widget1__info"], [1, "kt-widget1__title"], [1, "kt-widget1__number", "kt-font-success"], [1, "discountSection"], [1, "discountInput", 2, "display", "block"], ["min", "0", "type", "number", "maxlength", "4", "name", "DiscountTextValue", 1, "form-control", 3, "ngModel", "keyup", "keydown", "change", "keypress", "ngModelChange"], ["name", "DiscountType", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["value", "0"], ["value", "1"], [1, "tax-block"], [1, "taxToshow", 2, "display", "block"], ["name", "TaxRate", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "kt-widget1__item", "quotes-list-view-total-info"], [1, "kt-widget1__number", "kt-font-primary"], [1, "requestedSectionInput"], ["min", "0", "maxlength", "4", "type", "number", "name", "ReqDepositeTextValue", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["name", "ReqDepositeType", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["value", "0", "selected", ""], [1, "on-site-client-required"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19", "internal-notes-attachment"], [1, "kt-widget19__wrapper"], ["name", "InternalNotes", "id", "exampleTextarea", "rows", "3", "maxlength", "1024", "placeholder", "Internal Notes", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col-md-1", 4, "ngFor", "ngForOf"], [1, "file-upload"], ["for", "upload", 1, "file-upload__label"], ["title", "Add Attachment", 1, "fa", "fa-paperclip"], ["id", "upload", "type", "file", "name", "file-upload", 1, "file-upload__input", 3, "change"], [1, "row", "new-request-footer-bottom"], ["type", "reset", "routerLink", "/invoices", 1, "btn", "btn-secondary"], [1, "btn-group"], ["type", "submit", 1, "btn", "btn-brand", 3, "disabled"], [1, "InvoiceNN"], [1, "btn", "btn-label-primary"], [1, "InviceCC"], ["type", "number", "min", "0", "maxlength", "5", "name", "InvoiceUniqueID", 1, "form-control", "btnChangeQuote", 2, "height", "32px !important", "width", "66px", "text-align", "right", "display", "inline-block", 3, "ngModel", "ngModelChange"], [1, "border"], [4, "ngIf"], [1, "btn-group", "btnOpp"], ["href", "javascript:;", "title", "edit", 1, "btn-Edit", 3, "click"], [1, "la", "la-edit"], ["href", "javascript:;", "title", "remove", 1, "btn-remove", 3, "click"], [1, "la", "la-trash-o"], [1, "col-md-4"], [1, "radio-inline"], ["type", "radio", "name", "InvoiceItemData.Type", "value", "Product", 3, "ngModel", "ngModelChange", "change"], ["InvoiceItemData.Type", "ngModel"], ["type", "radio", "name", "InvoiceItemData.Type", "value", "Service", 3, "ngModel", "ngModelChange", "change"], ["name", "product_formcontrol", 1, "select2customcss", 3, "options", "valueChange"], [1, "form-control"], ["name", "InvoiceItemData.Qty", "height", "30px", "type", "text", "min", "0", "maxlength", "3", "placeholder", "Quantity", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "keyup", "keypress"], ["InvoiceItemData.Qty", "ngModel"], ["class", "col-lg-12 col-md-12", 4, "ngIf"], [1, "col-lg-12", "col-md-12"], [1, "col-lg-7", "col-md-7", "padd-top-10", 2, "margin", "auto"], [1, "kt-checkbox", "kt-checkbox--solid", "kt-checkbox--brand"], ["type", "checkbox", "name", "invoiceService.InvoiceItemData.InWarranty", 3, "ngModel", "change", "ngModelChange"], ["invoiceService.InvoiceItemData.InWarranty", "ngModel"], ["class", "col-lg-5 col-md-5", "style", "margin:auto;", 4, "ngIf"], ["class", "col-lg-5 col-md-5", 4, "ngIf"], [1, "col-lg-5", "col-md-5", 2, "margin", "auto"], [1, "col-lg-5", "col-md-5"], [1, "col-lg-7", "col-md-7"], ["name", "invoiceService.InvoiceItemData.UniqId", "height", "30px", "type", "text", "min", "0", "maxlength", "64", "placeholder", "Unique Id", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["invoiceService.InvoiceItemData.UniqId", "ngModel"], ["href", "javascript:void(0)", 1, "text-warning", "btnStockUpdate", 3, "click"], ["class", "kt-radio-list", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["aria-hidden", "true", 1, "fa", "fa-minus"], [1, "kt-radio-list"], [1, "kt-radio", "kt-radio--bold", "kt-radio--brand"], ["type", "radio", "value", "90", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["WarrantyDays", "ngModel"], ["type", "radio", "value", "180", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "270", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "365", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["class", "kt-radio kt-radio--bold kt-radio--brand", 4, "ngIf"], ["type", "radio", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "name", "WarrantyDays", "checked", "", 1, "custom-control-input", 3, "change"], ["name", "invoiceService.InvoiceItemData.WarrantyDays", "height", "30px", "type", "text", "min", "0", "maxlength", "3", "class", "form-control", "placeholder", "Days", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "invoiceService.InvoiceItemData.WarrantyDays", "height", "30px", "type", "text", "min", "0", "maxlength", "3", "placeholder", "Days", 1, "form-control", 3, "ngModel", "ngModelChange"], ["invoiceService.InvoiceItemData.WarrantyDays", "ngModel"], [3, "value"], [1, "col-md-1"], [3, "Name", "Path", "Status", "NameChange", "PathChange"], [1, "col-md-3"], ["href", "javascript:;", 3, "click"], [1, "fa", "fa-trash", "text-danger"], ["target", "_blank", 3, "href"], [1, "fa", "fa-download", "text-success"]],
        template: function InvoiceAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function InvoiceAddComponent_Template_form_submit_0_listener() {
              return ctx.putInvoice();
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Invoices ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Invoice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.invoiceService.InvoiceData.Id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " `");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.invoiceService.InvoiceData.CustomerId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "INVOICE FOR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_41_listener($event) {
              return ctx.invoiceService.InvoiceData.InvoiceTitle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Property address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Contact Details \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "textarea", 40, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_textarea_ngModelChange_73_listener($event) {
              return ctx.invoiceService.InvoiceData.Description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "table", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Invoice Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Invoice No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, InvoiceAddComponent_div_89_Template, 3, 1, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, InvoiceAddComponent_div_90_Template, 4, 2, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Invoice Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 49, 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceAddComponent_Template_input_click_95_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](97);

              return _r7.toggle();
            })("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_95_listener($event) {
              return ctx.invoiceService.InvoiceData.InvoiceDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 51, 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceAddComponent_Template_input_click_102_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

              var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](104);

              return _r9.toggle();
            })("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_102_listener($event) {
              return ctx.invoiceService.InvoiceData.InvoiceDueDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Refrance No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 53, 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_109_listener($event) {
              return ctx.invoiceService.InvoiceData.RefranceNo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h3", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " LINE ITEMS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "table", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "PRODUCT / SERVICE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "th", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "QTY ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "th", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "UNIT COST");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "TOTAL ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "th", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, InvoiceAddComponent_tr_142_Template, 19, 6, "tr", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, InvoiceAddComponent_div_146_Template, 5, 1, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, InvoiceAddComponent_div_147_Template, 5, 1, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "td", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, InvoiceAddComponent_div_152_Template, 2, 1, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, InvoiceAddComponent_div_153_Template, 3, 1, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, InvoiceAddComponent_input_155_Template, 2, 4, "input", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "input", 80, 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_161_listener($event) {
              return ctx.invoiceService.InvoiceItemData.UnitCost = $event;
            })("keyup", function InvoiceAddComponent_Template_input_keyup_161_listener() {
              return ctx.CalculateInvoiceProductCost();
            })("keypress", function InvoiceAddComponent_Template_input_keypress_161_listener($event) {
              return ctx.numberwithDecimalOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "input", 82, 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_168_listener($event) {
              return ctx.invoiceService.InvoiceItemData.Total = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "textarea", 84, 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_textarea_ngModelChange_173_listener($event) {
              return ctx.invoiceService.InvoiceItemData.ItemDescription = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](176, InvoiceAddComponent_div_176_Template, 2, 1, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceAddComponent_Template_a_click_181_listener() {
              return ctx.addProductToInvoice(ctx.invoiceService.InvoiceItemData.Id, ctx.invoiceService.InvoiceData.Id, ctx.invoiceService.InvoiceItemData.ItemName, ctx.invoiceService.InvoiceItemData.Qty, ctx.invoiceService.InvoiceItemData.UnitCost, ctx.invoiceService.InvoiceItemData.Total, ctx.invoiceService.InvoiceItemData.ItemDescription);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceAddComponent_Template_a_click_184_listener() {
              return ctx.CleareProductToInvoice();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " TOTAL ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h3", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Invoice value ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "textarea", 103, 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_textarea_ngModelChange_216_listener($event) {
              return ctx.invoiceService.InvoiceData.ClientRemark = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "                                              ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Client View");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Adjust what your client will see on this quote. To change the default for \u200Ball future quotes, visit the PDF Configuration. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "label", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "input", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_230_listener($event) {
              return ctx.invoiceService.InvoiceData.ClientViewQty = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Quantities ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "label", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "input", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_234_listener($event) {
              return ctx.invoiceService.InvoiceData.ClientViewUnitCost = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " Unit Cost ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "label", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "input", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_238_listener($event) {
              return ctx.invoiceService.InvoiceData.ClientViewLineItemTotal = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " Line item totals ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "label", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "input", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_242_listener($event) {
              return ctx.invoiceService.InvoiceData.ClientAccountBalance = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " Account balance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "label", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "input", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_246_listener($event) {
              return ctx.invoiceService.InvoiceData.LateStamp = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " Late stamp (if overdue) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h3", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Subtotal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h3", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Discount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "input", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InvoiceAddComponent_Template_input_keyup_263_listener() {
              return ctx.changeDiscountValue();
            })("keydown", function InvoiceAddComponent_Template_input_keydown_263_listener() {
              return ctx.changeDiscountValue();
            })("change", function InvoiceAddComponent_Template_input_change_263_listener() {
              return ctx.changeDiscountValue();
            })("keypress", function InvoiceAddComponent_Template_input_keypress_263_listener($event) {
              return ctx.numberwithDecimalOnly($event);
            })("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_263_listener($event) {
              return ctx.invoiceService.InvoiceData.DiscountTextValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "select", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_Template_select_change_264_listener() {
              return ctx.changeDiscountValue();
            })("ngModelChange", function InvoiceAddComponent_Template_select_ngModelChange_264_listener($event) {
              return ctx.invoiceService.InvoiceData.DiscountType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "option", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "SGD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "option", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h3", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Tax");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "span", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "select", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_Template_select_change_279_listener() {
              return ctx.CalculateInvoiceTax();
            })("ngModelChange", function InvoiceAddComponent_Template_select_ngModelChange_279_listener($event) {
              return ctx.invoiceService.InvoiceData.TaxRate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "option", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "---Select Tax---");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](282, InvoiceAddComponent_option_282_Template, 2, 2, "option", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h3", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "h3", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Require to deposit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "input", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InvoiceAddComponent_Template_input_keyup_297_listener() {
              return ctx.changeInvoiceDepositeValue();
            })("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_297_listener($event) {
              return ctx.invoiceService.InvoiceData.ReqDepositeTextValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "select", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_Template_select_change_299_listener() {
              return ctx.changeInvoiceDepositeValue();
            })("ngModelChange", function InvoiceAddComponent_Template_select_ngModelChange_299_listener($event) {
              return ctx.invoiceService.InvoiceData.ReqDepositeType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "option", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "option", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "span", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "h3", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " \xA0\xA0 INTERNAL NOTES & ATTACHMENTS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 141);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "textarea", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_textarea_ngModelChange_315_listener($event) {
              return ctx.invoiceService.InvoiceData.InternalNotes = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "                      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](318, InvoiceAddComponent_div_318_Template, 11, 4, "div", 143);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 144);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "label", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "i", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "input", 147);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceAddComponent_Template_input_change_323_listener($event) {
              return ctx.picked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 148);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_325_listener($event) {
              return ctx.invoiceService.InvoiceData.Id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "button", 149);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "CANCEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "button", 151);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.Id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.CustomerId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.invoiceService.InvoiceData.CustomerName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.InvoiceTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.invoiceService.InvoiceData.CustomerAddress, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invoiceService.InvoiceData.CustomerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invoiceService.InvoiceData.CustomerEmail);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invoiceService.InvoiceData.CustomerContactNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.Description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.InvoiceNosChange);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.InvoiceNosChange);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.InvoiceDateIsValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.InvoiceDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx.InvoiceDueDateIsValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.InvoiceDueDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.RefranceNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoiceService.InvoiceItemList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ItemBtn === "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ItemBtn === "update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceItemData.Type === "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceItemData.UnitCost)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c0, ctx.ItemUnitCosttIsValid === false));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceItemData.Total);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceItemData.ItemDescription);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.ProductWarranty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ItemBtn, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.invoiceService.InvoiceData.SubTotal.toFixed(2), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.ClientRemark);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.ClientViewQty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.ClientViewUnitCost);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.ClientViewLineItemTotal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.ClientAccountBalance);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.LateStamp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.invoiceService.InvoiceData.SubTotal.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.DiscountTextValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.DiscountType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.invoiceService.InvoiceData.DiscountAmount.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.invoiceService.InvoiceData.TaxAmount.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.TaxRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteService.TextList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.invoiceService.InvoiceData.NetAmount.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.ReqDepositeTextValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.ReqDepositeType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.invoiceService.InvoiceData.ReqDepositeAmount.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.InternalNotes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoiceService.InvoiceAttachmentList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.Id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.btnloader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.createbuttontext);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RadioControlValueAccessor"], ngx_select2__WEBPACK_IMPORTED_MODULE_21__["LSelect2Component"], _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_22__["TicketIconAttachmentComponent"]],
        styles: [".col-md-2.right-side-doller-form-info[_ngcontent-%COMP%]{\r\n    top: 0 !important;\r\n  }\r\n    .quoteBody[_ngcontent-%COMP%] {\r\n      padding: 0 24px;\r\n    }\r\n    .quote-head[_ngcontent-%COMP%] {\r\n      padding: 0 !important;\r\n    }\r\n    .bodyTitle[_ngcontent-%COMP%] {\r\n      padding: 20px 0 0 8px;\r\n    }\r\n    .qtbdsecton[_ngcontent-%COMP%] {\r\n      padding-bottom: 39px !important;\r\n      margin-top: 0px !important;\r\n    }\r\n    .qtAddressSection[_ngcontent-%COMP%] {\r\n      margin: 0 5px;\r\n    }\r\n    .qtAddressSection[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        color: #48465b !important;\r\n        font-size: 15px !important;\r\n        margin-top: 10px;\r\n        font-weight: 600;\r\n      }\r\n    .ttlQty[_ngcontent-%COMP%] {\r\n      margin: 40px 0 0 0;\r\n    }\r\n    .btnremoveProduct[_ngcontent-%COMP%] {\r\n      margin: 5px 0 0 0;\r\n      float: right;\r\n    }\r\n    .CLRemark[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n    i.fa.fa-eye[_ngcontent-%COMP%] {\r\n      margin: 13px 0 0 0;\r\n      color: green;\r\n      padding: 0 10px 0 0;\r\n      font-size: 20px;\r\n    }\r\n    .clView[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n      font-size: 17px;\r\n      color: #258000;\r\n    }\r\n    .requestedSectionInput[_ngcontent-%COMP%] {\r\n      text-align: right;\r\n      width: 100%;\r\n    }\r\n    .requestedSectionInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        width: 33%;\r\n        display: inline-block;\r\n      }\r\n    .requestedSectionInput[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n        width: 22%;\r\n        display: inline-block;\r\n        height: 50px;\r\n        margin: 0 12px 0 0;\r\n      }\r\n    .requestedSectionInput[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: 0 0 0 30px;\r\n        color: red;\r\n      }\r\n    .discountSection[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n    .discountSection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        width: 25%;\r\n        display: inline-block;\r\n        margin: 0 0 0 23px;\r\n      }\r\n    .discountSection[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n        width: 20%;\r\n        display: inline-block;\r\n        height: 50px;\r\n        margin: 0 20px 0 10px;\r\n      }\r\n    .discountSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: 0 0px 0 29px;\r\n        color: red;\r\n      }\r\n    .discountInput[_ngcontent-%COMP%] {\r\n      text-align: right;\r\n    }\r\n    .tax-block[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      text-align: right;\r\n    }\r\n    .tax-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin-left: 3px;\r\n      }\r\n    .taxToshow[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n        width: 44%;\r\n        display: inline-block;\r\n        margin: 0 0 0 11px;\r\n    }\r\n    .btbtb[_ngcontent-%COMP%]{\r\n      line-height: 24px;\r\n      margin: 0 0 0 4px;\r\n      font-size: 15px;\r\n      color: white;\r\n    }\r\n    .radio-service[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n      font-size: 18px;\r\n      color: #4e2d2d;\r\n      margin-right: 22px;\r\n      font-weight: 600;\r\n  }\r\n    .radio-service[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:10px;}\r\n    .radio-service[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{height:50px !important;}\r\n    .form-group.row.align-items-center.quote-for-client-alig-item-center[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #80808029 !important;\r\n  }\r\n    .htBorder[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 1px solid #22366b29;\r\n  }\r\n    .htBorder[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border: 1px solid #dbdfe7 !important;\r\n  }\r\n    .htBorder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    color: #48465b;\r\n    text-transform: uppercase;\r\n  }\r\n    .htBorder[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 34px !important;\r\n  }\r\n    .ticket-attachment-container[_ngcontent-%COMP%] { position: relative; width: 100%; }\r\n    .ticket-attachment-image[_ngcontent-%COMP%] {display: block; width: 100%; height: auto; }\r\n    .ticket-attachment-overlay[_ngcontent-%COMP%] {position: absolute;bottom: 0;left: 100%;right: 0;background-color: rgb(162, 176, 180);overflow: hidden; width: 0;height: 100%;transition: .5s ease;text-align: center;}\r\n    .ticket-attachment-container[_ngcontent-%COMP%]:hover   .ticket-attachment-overlay[_ngcontent-%COMP%] {width: 100%;left: 0;}\r\n    .ticket-attachment-text[_ngcontent-%COMP%] {white-space: nowrap; color: white; font-size: 20px; position: absolute; overflow: hidden;top: 50%; left: 50%; transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);}\r\n    .ticket-attachment-remove-text[_ngcontent-%COMP%] {white-space: nowrap;color: white;font-size: 20px;position: absolute;overflow: hidden;bottom: 10%;left: 50%; transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);}\r\n    .file-upload[_ngcontent-%COMP%] {position: relative;display: inline-block;}\r\n    .file-upload__label[_ngcontent-%COMP%] {display: block;padding: 0.2em 1.8em;color: #fff; background: #b1a4a4; border-radius: .4em;font-size: 22px; height: 40px;transition: background .3s;}\r\n    .file-upload__label[_ngcontent-%COMP%]:hover {cursor: pointer;background: rgb(204, 198, 198); }\r\n    .file-upload__input[_ngcontent-%COMP%] {position: absolute;left: 0;top: 0;right: 0;bottom: 0;font-size: 1; width:0;height: 100%;opacity: 0;}\r\n    .switcher-customer[_ngcontent-%COMP%] { top:-15px;position: relative; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vaW52b2ljZXMvaW52b2ljZS1hZGQvaW52b2ljZS1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtFQUNuQjtJQUNFO01BQ0UsZUFBZTtJQUNqQjtJQUVBO01BQ0UscUJBQXFCO0lBQ3ZCO0lBRUE7TUFDRSxxQkFBcUI7SUFDdkI7SUFFQTtNQUNFLCtCQUErQjtNQUMvQiwwQkFBMEI7SUFDNUI7SUFFQTtNQUNFLGFBQWE7SUFDZjtJQUVFO1FBQ0UseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO01BQ2xCO0lBRUY7TUFDRSxrQkFBa0I7SUFDcEI7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixZQUFZO0lBQ2Q7SUFFQTtNQUNFLFdBQVc7SUFDYjtJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsZUFBZTtJQUNqQjtJQUVBO01BQ0UsZUFBZTtNQUNmLGNBQWM7SUFDaEI7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixXQUFXO0lBQ2I7SUFFRTtRQUNFLFVBQVU7UUFDVixxQkFBcUI7TUFDdkI7SUFFQTtRQUNFLFVBQVU7UUFDVixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGtCQUFrQjtNQUNwQjtJQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLFVBQVU7TUFDWjtJQUVGO01BQ0UsV0FBVztJQUNiO0lBRUU7UUFDRSxVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLGtCQUFrQjtNQUNwQjtJQUVBO1FBQ0UsVUFBVTtRQUNWLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1oscUJBQXFCO01BQ3ZCO0lBRUE7UUFDRSxvQkFBb0I7UUFDcEIsVUFBVTtNQUNaO0lBRUY7TUFDRSxpQkFBaUI7SUFDbkI7SUFFQTtNQUNFLFdBQVc7TUFDWCxpQkFBaUI7SUFDbkI7SUFFRTtRQUNFLGdCQUFnQjtNQUNsQjtJQUNBO1FBQ0UsVUFBVTtRQUNWLHFCQUFxQjtRQUNyQixrQkFBa0I7SUFDdEI7SUFDQTtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLFlBQVk7SUFDZDtJQUVGO01BQ0ksZUFBZTtNQUNmLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsZ0JBQWdCO0VBQ3BCO0lBQ0EsMkJBQTJCLGlCQUFpQixDQUFDO0lBQzdDLHNCQUFzQixzQkFBc0IsQ0FBQztJQUM3QztJQUNFLDZDQUE2QztFQUMvQztJQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0lBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7SUFDQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0VBQzNCO0lBQ0E7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0VBQ3pCO0lBR0EsK0JBQStCLGtCQUFrQixFQUFFLFdBQVcsRUFBRTtJQUM5RCwwQkFBMEIsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUU7SUFDckUsNEJBQTRCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLG9DQUFvQyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7SUFDbE0sK0RBQStELFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDbkYseUJBQXlCLG1CQUFtQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQyxvQ0FBb0MsQ0FBQztJQUM3TSxnQ0FBZ0MsbUJBQW1CLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGdDQUFnQyxDQUFDLG9DQUFvQyxDQUFDO0lBQ2xOLGNBQWMsa0JBQWtCLENBQUMscUJBQXFCLENBQUM7SUFDdkQscUJBQXFCLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQztJQUN4SywyQkFBMkIsZUFBZSxDQUFDLDhCQUE4QixFQUFFO0lBQzNFLHFCQUFxQixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO0lBQ3hILHFCQUFxQixTQUFTLENBQUMsa0JBQWtCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9pbnZvaWNlcy9pbnZvaWNlLWFkZC9pbnZvaWNlLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC0yLnJpZ2h0LXNpZGUtZG9sbGVyLWZvcm0taW5mb3tcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAgIC5xdW90ZUJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucXVvdGUtaGVhZCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5ib2R5VGl0bGUge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDAgMCA4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucXRiZHNlY3RvbiB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnF0QWRkcmVzc1NlY3Rpb24ge1xyXG4gICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgICAucXRBZGRyZXNzU2VjdGlvbiBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICM0ODQ2NWIgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgIC50dGxRdHkge1xyXG4gICAgICBtYXJnaW46IDQwcHggMCAwIDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYnRucmVtb3ZlUHJvZHVjdCB7XHJcbiAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuQ0xSZW1hcmsge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIGkuZmEuZmEtZXllIHtcclxuICAgICAgbWFyZ2luOiAxM3B4IDAgMCAwO1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jbFZpZXcgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGNvbG9yOiAjMjU4MDAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJlcXVlc3RlZFNlY3Rpb25JbnB1dCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgICAgLnJlcXVlc3RlZFNlY3Rpb25JbnB1dCBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnJlcXVlc3RlZFNlY3Rpb25JbnB1dCBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAyMiU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW46IDAgMTJweCAwIDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnJlcXVlc3RlZFNlY3Rpb25JbnB1dCBhIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAwIDMwcHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgLmRpc2NvdW50U2VjdGlvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgICAuZGlzY291bnRTZWN0aW9uIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMCAwIDIzcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmRpc2NvdW50U2VjdGlvbiBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW46IDAgMjBweCAwIDEwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmRpc2NvdW50U2VjdGlvbiBhIHtcclxuICAgICAgICBtYXJnaW46IDAgMHB4IDAgMjlweDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAuZGlzY291bnRJbnB1dCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRheC1ibG9jayB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICBcclxuICAgICAgLnRheC1ibG9jayBhIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC50YXhUb3Nob3cgc2VsZWN0e1xyXG4gICAgICAgIHdpZHRoOiA0NCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDAgMTFweDtcclxuICAgIH1cclxuICAgIC5idGJ0YntcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIG1hcmdpbjogMCAwIDAgNHB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gIC5yYWRpby1zZXJ2aWNlIGxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjNGUyZDJkO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5yYWRpby1zZXJ2aWNlIGxhYmVsIGlucHV0e21hcmdpbi1yaWdodDoxMHB4O31cclxuICAucmFkaW8tc2VydmljZSBzZWxlY3R7aGVpZ2h0OjUwcHggIWltcG9ydGFudDt9XHJcbiAgLmZvcm0tZ3JvdXAucm93LmFsaWduLWl0ZW1zLWNlbnRlci5xdW90ZS1mb3ItY2xpZW50LWFsaWctaXRlbS1jZW50ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODAyOSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaHRCb3JkZXIgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIyMzY2YjI5O1xyXG4gIH1cclxuICAuaHRCb3JkZXIgdGR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJkZmU3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5odEJvcmRlciBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM0ODQ2NWI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAuaHRCb3JkZXIgaW5wdXR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRpY2tldC1hdHRhY2htZW50LWNvbnRhaW5lciB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDEwMCU7IH1cclxuICAgIC50aWNrZXQtYXR0YWNobWVudC1pbWFnZSB7ZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IH1cclxuICAgIC50aWNrZXQtYXR0YWNobWVudC1vdmVybGF5IHtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiAwO2xlZnQ6IDEwMCU7cmlnaHQ6IDA7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMTc2LCAxODApO292ZXJmbG93OiBoaWRkZW47IHdpZHRoOiAwO2hlaWdodDogMTAwJTt0cmFuc2l0aW9uOiAuNXMgZWFzZTt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gICAgLnRpY2tldC1hdHRhY2htZW50LWNvbnRhaW5lcjpob3ZlciAudGlja2V0LWF0dGFjaG1lbnQtb3ZlcmxheSB7d2lkdGg6IDEwMCU7bGVmdDogMDt9XHJcbiAgICAudGlja2V0LWF0dGFjaG1lbnQtdGV4dCB7d2hpdGUtc3BhY2U6IG5vd3JhcDsgY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDIwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgb3ZlcmZsb3c6IGhpZGRlbjt0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTstbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7fVxyXG4gICAgLnRpY2tldC1hdHRhY2htZW50LXJlbW92ZS10ZXh0IHt3aGl0ZS1zcGFjZTogbm93cmFwO2NvbG9yOiB3aGl0ZTtmb250LXNpemU6IDIwcHg7cG9zaXRpb246IGFic29sdXRlO292ZXJmbG93OiBoaWRkZW47Ym90dG9tOiAxMCU7bGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTstbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7fVxyXG4gICAgLmZpbGUtdXBsb2FkIHtwb3NpdGlvbjogcmVsYXRpdmU7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuICAgIC5maWxlLXVwbG9hZF9fbGFiZWwge2Rpc3BsYXk6IGJsb2NrO3BhZGRpbmc6IDAuMmVtIDEuOGVtO2NvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjYjFhNGE0OyBib3JkZXItcmFkaXVzOiAuNGVtO2ZvbnQtc2l6ZTogMjJweDsgaGVpZ2h0OiA0MHB4O3RyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO31cclxuICAgIC5maWxlLXVwbG9hZF9fbGFiZWw6aG92ZXIge2N1cnNvcjogcG9pbnRlcjtiYWNrZ3JvdW5kOiByZ2IoMjA0LCAxOTgsIDE5OCk7IH0gIFxyXG4gICAgLmZpbGUtdXBsb2FkX19pbnB1dCB7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDA7dG9wOiAwO3JpZ2h0OiAwO2JvdHRvbTogMDtmb250LXNpemU6IDE7IHdpZHRoOjA7aGVpZ2h0OiAxMDAlO29wYWNpdHk6IDA7fVxyXG4gICAgLnN3aXRjaGVyLWN1c3RvbWVyIHsgdG9wOi0xNXB4O3Bvc2l0aW9uOiByZWxhdGl2ZTsgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceAddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invoice-add',
            templateUrl: './invoice-add.component.html',
            styleUrls: ['./invoice-add.component.css'],
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
              useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"],
              deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]]
            }, {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],
              useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MAT_MOMENT_DATE_FORMATS"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"],
              useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbDateToStringAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimeAdapter"],
              useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_7__["NgbTimeToStringAdapter"]
            }]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]
          }, {
            type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"]
          }, {
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"]
          }, {
            type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_11__["QuoteService"]
          }, {
            type: src_app_services_DocumentUpload_service__WEBPACK_IMPORTED_MODULE_12__["DocumentUploadService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"]
          }, {
            type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_15__["UserlogService"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationService"]
          }, {
            type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_17__["GenicProfileService"]
          }, {
            type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_18__["PropertyService"]
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

        var _super2 = _createSuper(NgbTimeToStringAdapter);

        function NgbTimeToStringAdapter() {
          var _this26;

          _classCallCheck(this, NgbTimeToStringAdapter);

          _this26 = _super2.apply(this, arguments);
          _this26.year = new Date().getUTCFullYear();
          _this26.month = new Date().getUTCMonth() + 1;
          _this26.day = new Date().getUTCDate();
          return _this26;
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
    "lzB+":
    /*!***********************************************************************************!*\
      !*** ./src/app/application/invoices/invoice-details/invoice-details.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: InvoiceDetailsComponent */

    /***/
    function lzB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceDetailsComponent", function () {
        return InvoiceDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
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


      var _invoice_change_status_popup_invoice_change_status_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../invoice-change-status-popup/invoice-change-status-popup.component */
      "IEzf");
      /* harmony import */


      var _invoice_payment_and_receipt_invoice_payment_and_receipt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../invoice-payment-and-receipt/invoice-payment-and-receipt.component */
      "redt");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/invoice.service */
      "py7r");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/userlog.service */
      "V05N");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.component */
      "xJsc");

      function InvoiceDetailsComponent_span_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_span_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SEND OUT(PAID)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_span_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SEND OUT(UN PAID)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_span_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SEND OUT(OVER DUE)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PARTIALLY PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_span_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CANCELLED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_a_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceDetailsComponent_a_41_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.getInvoicePayment(ctx_r17.invoiceService.InvoiceData);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment & Receipt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_li_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceDetailsComponent_li_47_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.popolateInvoice(ctx_r19.invoiceService.InvoiceData);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Invoice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_li_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceDetailsComponent_li_48_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.UpdateInvoiceStatus(ctx_r21.invoiceService.InvoiceData);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_em_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subCategory_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r23, " ");
        }
      }

      function InvoiceDetailsComponent_span_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r24.Value);
        }
      }

      function InvoiceDetailsComponent_div_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.currentUser.Ticket, " Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.invoiceService.InvoiceData.TicketId, " ");
        }
      }

      function InvoiceDetailsComponent_div_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quotation Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.invoiceService.InvoiceData.QuoteId, " ");
        }
      }

      function InvoiceDetailsComponent_div_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Refrance Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.invoiceService.InvoiceData.RefranceNo, " ");
        }
      }

      function InvoiceDetailsComponent_div_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Request Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.invoiceService.InvoiceData.RequestId, " ");
        }
      }

      function InvoiceDetailsComponent_div_150_div_7_small_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", p_r25.UniqId, ")");
        }
      }

      function InvoiceDetailsComponent_div_150_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InvoiceDetailsComponent_div_150_div_7_small_3_Template, 2, 1, "small", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r25.WarrantyDays, " Days warranty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r25.UniqId.length > 0);
        }
      }

      function InvoiceDetailsComponent_div_150_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r25.Qty, " ");
        }
      }

      function InvoiceDetailsComponent_div_150_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InvoiceDetailsComponent_div_150_div_7_Template, 4, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InvoiceDetailsComponent_div_150_div_9_Template, 2, 1, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r25.ItemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r25.ItemDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r25.InWarranty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r25.Type === "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", p_r25.UnitCost.toFixed(2), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", p_r25.Total.toFixed(2), " ");
        }
      }

      function InvoiceDetailsComponent_div_207_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "generic-ticket-icon-attachment", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("NameChange", function InvoiceDetailsComponent_div_207_Template_generic_ticket_icon_attachment_NameChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var x_r32 = ctx.$implicit;
            return x_r32.AttachmentExtension = $event;
          })("PathChange", function InvoiceDetailsComponent_div_207_Template_generic_ticket_icon_attachment_PathChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var x_r32 = ctx.$implicit;
            return x_r32.Attachment = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Name", x_r32.AttachmentExtension)("Path", x_r32.Attachment)("Status", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", x_r32.Attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      ;

      var InvoiceDetailsComponent = /*#__PURE__*/function () {
        function InvoiceDetailsComponent(titleService, invoiceService, productservice, toastr, router, dialog, logService, loginservice) {
          var _this27 = this;

          _classCallCheck(this, InvoiceDetailsComponent);

          this.titleService = titleService;
          this.invoiceService = invoiceService;
          this.productservice = productservice;
          this.toastr = toastr;
          this.router = router;
          this.dialog = dialog;
          this.logService = logService;
          this.loginservice = loginservice;
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({});
          this.loginservice.currentUser.subscribe(function (x) {
            return _this27.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }

        _createClass(InvoiceDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            if (!this.currentUser.Permissions.InvoiceView) {
              this.router.navigate(['/dashboard']);
              this.toastr.info('Permission Not Granted');
            }

            this.loginservice.currentUser.subscribe(function (x) {
              return _this28.currentUser = x;
            });

            if (this.invoiceService.InvoiceData.InvoiceId === '' || this.invoiceService.InvoiceData.InvoiceId === undefined) {
              this.router.navigate(['/invoices/']);
            } else {
              this.invoiceService.getPaymentDetailsByInvoiceNo(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe(function (res) {
                if (res) {
                  var response = res;

                  if (response.Message === 'success') {
                    _this28.invoiceService.TotalPaymentData = response.result;
                  }
                }
              }, function (error) {
                return console.log(error);
              });
              this.titleService.setTitle('Invoice Details | Genic Solution');
              this.iAmount = this.invoiceService.InvoiceData.NetAmount;
              this.pAmount = this.invoiceService.TotalPaymentData.PaymentAmount;

              if (this.iAmount > this.pAmount) {
                this.IsShowPaymentSection = 'true';
                this.invoiceService.PaymentData.PaymentAmount = this.iAmount - this.pAmount;
              } else {
                this.invoiceService.PaymentData.PaymentAmount = 0;
                setTimeout(function () {
                  _this28.invoiceService.getPaymentSummary(_this28.invoiceService.InvoiceData.Id);

                  _this28.tempPaymentlist = _this28.invoiceService.PaymentSummary;
                  _this28.IsShowPaymentSection = 'false';
                }, 100);
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this29 = this;

            setTimeout(function () {
              _this29.getInvoiceItems();

              _this29.getInvoiceAttachments();

              _this29.invoiceService.refrestArrayofKeyslist(_this29.invoiceService.InvoiceData.CustomerId);
            }, 200);
          }
        }, {
          key: "getInvoiceItems",
          value: function getInvoiceItems() {
            var _this30 = this;

            this.invoiceService.getInvoiceItems(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this30.invoiceService.InvoiceItemList = [];
                  _this30.invoiceService.InvoiceItemList = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "getInvoiceAttachments",
          value: function getInvoiceAttachments() {
            var _this31 = this;

            this.invoiceService.getInvoiceAttachments(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this31.invoiceService.InvoiceAttachmentList = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "RemoveInvoiceAttachement",
          value: function RemoveInvoiceAttachement(InvoiceAttamentId, Attachment) {
            var _this32 = this;

            if (confirm('Are you sure to delete this attachment?')) {
              this.invoiceService.deleteInvoiceAttachment(InvoiceAttamentId).then(function (res) {
                if (res.status === 204) {
                  _this32.getInvoiceAttachments();

                  var des = 'An attachment : ' + Attachment + ',has been Removed from the Invoice No : ' + _this32.invoiceService.InvoiceData.InvoiceId + ', of Customer : ' + _this32.invoiceService.InvoiceData.CustomerName + ', by user : ' + _this32.currentUser.UserName;
                  var Activity1 = 'An attachment : ' + Attachment + ', is removed from the Invoice no : ' + _this32.invoiceService.InvoiceData.InvoiceId;

                  _this32.logService.postUserLog(_this32.currentUser.Id, _this32.currentUser.UserName, 'Invoice', _this32.invoiceService.InvoiceData.Id, 'Removed', des, Activity1).subscribe();

                  _this32.toastr.info('info', 'Deleted successfully');
                } else if (res.status === 404) {
                  _this32.toastr.warning('Warning', 'Record Not Found');
                } else {
                  _this32.toastr.error('Error', res.statusText);
                }
              }, function (err) {
                _this32.toastr.error('Error', err.statusText);

                console.log(err.error);
              });
            }
          }
        }, {
          key: "popolateInvoice",
          value: function popolateInvoice(i) {
            this.invoiceService.InvoiceData = Object.assign({}, i);
            this.router.navigate(['/invoices/invoice-edit']);
          }
        }, {
          key: "CollapseInvStatus",
          value: function CollapseInvStatus() {
            if (this.IsShowInvStatus === 'true') {
              this.IsShowInvStatus = 'false';
            } else {
              this.IsShowInvStatus = 'true';
            }
          }
        }, {
          key: "UpdateInvoiceStatus",
          value: function UpdateInvoiceStatus(i) {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.width = '30%';
            dialogConfig.data = {};
            this.dialog.open(_invoice_change_status_popup_invoice_change_status_popup_component__WEBPACK_IMPORTED_MODULE_7__["InvoiceChangeStatusPopupComponent"], dialogConfig).afterClosed().subscribe(function (res) {});
          }
        }, {
          key: "getInvoicePayment",
          value: function getInvoicePayment(i) {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.width = '40%';
            dialogConfig.data = {};
            this.dialog.open(_invoice_payment_and_receipt_invoice_payment_and_receipt_component__WEBPACK_IMPORTED_MODULE_8__["InvoicePaymentAndReceiptComponent"], dialogConfig).afterClosed().subscribe(function (res) {});
          }
        }, {
          key: "downloadInvoice",
          value: function downloadInvoice(id) {
            var _this33 = this;

            this.invoiceService.downoadInvoicePDF(id, this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this33.toastr.success('success', response.MessageDescription);

                  var a = $("<a>").attr("href", response.Path).attr("target", "_blank").attr("download", _this33.invoiceService.InvoiceData.InvoiceId + '.pdf').appendTo("body");
                  a[0].click();
                  a.remove();
                }

                if (response.Message === 'failure') {
                  _this33.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "SendInvoiceByMail",
          value: function SendInvoiceByMail(i) {
            var des = 'An email requrest sent by : ' + this.currentUser.UserName + ', of Invoice No : ' + i.InvoiceId + ', for Customer : ' + i.CustomerName + ', invoice title " ' + i.InvoiceTitle + ', Amount of $ ' + i.NetAmount + '0.00, on dated : ' + new Date();
            var Activity3 = ' Invoice no : ' + this.invoiceService.InvoiceData.InvoiceId + ' is emailed on :' + this.invoiceService.InvoiceData.CustomerEmail + ' dated : ' + new Date();
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Invoice', i.Id, 'Email', des, Activity3).subscribe();
            this.invoiceService.emailInvoiceCopy(this.invoiceService.InvoiceData.Id);
            this.toastr.success('success', 'Invoice copy is send to client ' + this.invoiceService.InvoiceData.CustomerEmail + ' registered email');
          }
        }]);

        return InvoiceDetailsComponent;
      }();

      InvoiceDetailsComponent.ɵfac = function InvoiceDetailsComponent_Factory(t) {
        return new (t || InvoiceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_14__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]));
      };

      InvoiceDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvoiceDetailsComponent,
        selectors: [["app-invoice-details"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_5__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_6__["NgbTimeToStringAdapter"]
        }])],
        decls: 208,
        vars: 36,
        consts: [["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid", "breadcud-kt-container"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/invoices", 1, "kt-subheader__breadcrumbs-link"], [1, "kt-subheader__toolbar"], [1, "new-request-main-section", "jobs-for-client-section"], [1, "kt-container", "kt-container--fluid"], [1, "new-requst-filter_form"], [1, ""], [1, "col-md-12", "section-client-requst-form"], [1, "row"], [1, "col-md-6"], [1, "kt-section", "kt-customer-list-view-section"], [1, "flaticon-list", "pending-view-page-list"], ["class", "view-pending", 4, "ngIf"], [1, "kt-section__title1"], ["data-toggle", "kt-tooltip", "data-width", "auto", "title", "", "data-original-title", "If different than the corresponding address", 1, "kt-section__help"], [1, "kt-section", "kt-customer-list-view-section", 2, "float", "right"], ["href", "javascript:void(0);", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:void(0);", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "line-height", "21px"], [1, "caret"], [1, "dropdown-menu", 2, "text-align", "center"], [4, "ngIf"], ["href", "javascript:void(0);", 3, "click"], [1, "col-md-7", "requsted-property-addres"], [1, "kt-section__content", "col-md-12", "requst-for-client-name"], [1, "form-group", "row"], [1, "col-lg-6", "padd-left-0"], [1, "customer-view-full-title-name"], [1, "col-md-6", "property-addres-info"], [1, "kt-widget4", "kt-widget4--sticky"], [1, "kt-widget4__items", "kt-widget4__items--bottom", "kt-portlet__space-x", "kt-margin-b-20"], [1, "kt-widget4__item"], [1, "kt-widget4__info"], [1, "kt-widget4__title"], [1, "kt-widget4__sub"], ["target", "_blank", 3, "href"], [4, "ngFor", "ngForOf"], ["class", "kt-widget4__sub", 4, "ngFor", "ngForOf"], [1, "col-md-12", "property-addres-info"], [1, "col-md-5", "new-requst-address-contact"], [1, "kt-widget4"], [1, "kt-widget4__items", "kt-widget4__items--bottom", "kt-portlet__space-x"], ["width", "100%;", 1, "kt-widget4__info"], ["href", "javascript:;", 1, "kt-widget4__title"], [1, "kt-portlet", "invoice-for-client-kt-portal"], [1, "kt-portlet__head", "padd-left-0", "padd-right-0"], [1, "kt-portlet__head-label", "col-md-6"], [1, "kt-portlet__head-title"], [1, "kt-portlet__head-toolbar", "col-md-6"], ["class", "kt-portlet invoice-for-client-kt-portal", 4, "ngIf"], [1, "col-md-12", "new-request-service-details-form"], [1, "col-md-12", "job-for-tab-content"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__body"], [1, "col-md-12"], [1, "tab-content"], ["id", "kt_widget11_tab1_content", 1, "tab-pane", "active"], [1, "kt-widget11"], ["id", "kt_repeater_1"], [1, "row", "col-md-12"], [1, "product-service-colun-name"], [1, "col-md-2"], [1, "product-service-colun-name", "kt-align-right"], [1, "add-data-ticket-list-view"], ["class", "row col-md-12", 4, "ngFor", "ngForOf"], ["data-repeater-list", "", 1, "col-lg-12"], [1, "add-invoicing-view-list-border"], [1, "col-md-6", "no-spacing"], [1, "col-md-6", "invoicing-list-view-border-left"], [1, "kt-widget1"], [1, "kt-widget1__item"], [1, "kt-widget1__info"], [1, "kt-widget1__title"], [1, "kt-widget1__number", "kt-font-success"], [1, "discountSection"], [1, "discountShow"], [1, "tax-block"], [1, "TaxToHide"], [1, "kt-widget1__item", "quotes-list-view-total-info"], [1, "kt-widget1__number", "kt-font-primary"], [1, "kt-widget1__number", "kt-font-danger"], [1, "on-site-client-required"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19", "internal-notes-attachment"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-widget19__wrapper"], ["readonly", "", "id", "exampleTextarea", "rows", "3", "placeholder", "Note details", "name", "InternalNotes", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col-md-1", 4, "ngFor", "ngForOf"], [1, "view-pending"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", 3, "click"], [1, "product-service-colun-name", "invoice-list-view-product-service"], ["class", "product-service-colun-name kt-align-right", 4, "ngIf"], [1, "myshap"], [1, "col-md-1"], [3, "Name", "Path", "Status", "NameChange", "PathChange"], [1, "col-md-3"], [1, "fa", "fa-download", "text-success"]],
        template: function InvoiceDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Invoices ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Invoice Details & Payment Section ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, InvoiceDetailsComponent_span_28_Template, 2, 0, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, InvoiceDetailsComponent_span_29_Template, 2, 0, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, InvoiceDetailsComponent_span_30_Template, 2, 0, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InvoiceDetailsComponent_span_31_Template, 2, 0, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, InvoiceDetailsComponent_span_32_Template, 2, 0, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, InvoiceDetailsComponent_span_33_Template, 2, 0, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, InvoiceDetailsComponent_a_41_Template, 2, 0, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "More Action's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, InvoiceDetailsComponent_li_47_Template, 3, 0, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, InvoiceDetailsComponent_li_48_Template, 3, 0, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceDetailsComponent_Template_a_click_50_listener() {
              return ctx.downloadInvoice(ctx.invoiceService.InvoiceData.Id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Download PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceDetailsComponent_Template_a_click_53_listener() {
              return ctx.SendInvoiceByMail(ctx.invoiceService.InvoiceData);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Send by Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Billing address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, InvoiceDetailsComponent_em_72_Template, 3, 1, "em", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Contact details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, InvoiceDetailsComponent_span_79_Template, 4, 1, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Description ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Invoice details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Invoice Number:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Invoice Date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](111, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Invoice Due Date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](119, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, InvoiceDetailsComponent_div_120_Template, 7, 2, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, InvoiceDetailsComponent_div_121_Template, 7, 1, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, InvoiceDetailsComponent_div_122_Template, 7, 1, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, InvoiceDetailsComponent_div_123_Template, 7, 1, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " PRODUCT / SERVICE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " QTY. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " UNIT COST ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " TOTAL ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, InvoiceDetailsComponent_div_150_Template, 17, 6, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h3", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Subtotal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h3", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Discount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h3", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Tax");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h3", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h3", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Deposite balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h3", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\xA0\xA0 INTERNAL NOTES & ATTACHMENTS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "textarea", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceDetailsComponent_Template_textarea_ngModelChange_205_listener($event) {
              return ctx.invoiceService.InvoiceData.InternalNotes = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](207, InvoiceDetailsComponent_div_207_Template, 11, 4, "div", 95);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceData.Status === "Draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceData.Status === "SendOutPaid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceData.Status === "SendOutUnPaid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceData.Status === "SendOutOverDue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceData.Status === "PartiallyPaid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceData.Status === "cancelled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.invoiceService.InvoiceData.CompanyName, " (", ctx.invoiceService.InvoiceData.CustomerName, ") ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.InvoiceEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.InvoiceEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.InvoiceEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.invoiceService.InvoiceData.InvoiceTitle, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://maps.google.com/?q=", ctx.invoiceService.InvoiceData.CustomerAddress, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoiceService.InvoiceData.CustomerAddress == null ? null : ctx.invoiceService.InvoiceData.CustomerAddress.split(","));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoiceService.ArrayofKeys);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invoiceService.InvoiceData.Description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.invoiceService.InvoiceData.InvoiceId, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](111, 32, ctx.invoiceService.InvoiceData.InvoiceDate), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](119, 34, ctx.invoiceService.InvoiceData.InvoiceDueDate), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceData.TicketId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceData.QuoteId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceData.RefranceNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoiceService.InvoiceData.RequestId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoiceService.InvoiceItemList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.invoiceService.InvoiceData.ClientRemark);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.invoiceService.InvoiceData.SubTotal.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.invoiceService.InvoiceData.DiscountAmount.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.invoiceService.InvoiceData.TaxAmount.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.invoiceService.InvoiceData.NetAmount.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.invoiceService.InvoiceData.ReqDepositeAmount.toFixed(2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceService.InvoiceData.InternalNotes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoiceService.InvoiceAttachmentList);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_component__WEBPACK_IMPORTED_MODULE_18__["TicketIconAttachmentComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]],
        styles: [".ticket-attachment-container[_ngcontent-%COMP%] { position: relative; width: 100%; }\r\n.ticket-attachment-image[_ngcontent-%COMP%] {display: block; width: 100%; height: auto; }\r\n.ticket-attachment-overlay[_ngcontent-%COMP%] {position: absolute;bottom: 0;left: 100%;right: 0;background-color: rgb(162, 176, 180);overflow: hidden; width: 0;height: 100%;transition: .5s ease;text-align: center;}\r\n.ticket-attachment-container[_ngcontent-%COMP%]:hover   .ticket-attachment-overlay[_ngcontent-%COMP%] {width: 100%;left: 0;}\r\n.ticket-attachment-text[_ngcontent-%COMP%] {white-space: nowrap; color: white; font-size: 20px; position: absolute; overflow: hidden;top: 50%; left: 50%; transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);}\r\n.ticket-attachment-remove-text[_ngcontent-%COMP%] {white-space: nowrap;color: white;font-size: 20px;position: absolute;overflow: hidden;bottom: 10%;left: 50%; transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);}\r\n.file-upload[_ngcontent-%COMP%] {position: relative;display: inline-block;}\r\n.file-upload__label[_ngcontent-%COMP%] {display: block;padding: 0.2em 1.8em;color: #fff; background: #b1a4a4; border-radius: .4em;font-size: 22px; height: 40px;transition: background .3s;}\r\n.file-upload__label[_ngcontent-%COMP%]:hover {cursor: pointer;background: rgb(204, 198, 198); }\r\n.file-upload__input[_ngcontent-%COMP%] {position: absolute;left: 0;top: 0;right: 0;bottom: 0;font-size: 1; width:0;height: 100%;opacity: 0;}\r\n.myshap[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n      }\r\n.status-Info[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n      }\r\n.collapse-status[_ngcontent-%COMP%]{\r\n        margin: 0 0 0 59px;\r\n      }\r\n.paywidth-section[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n      }\r\n.payButtonSection[_ngcontent-%COMP%]{\r\n        margin: 0 40px 0 0;\r\n        text-align: right;\r\n      }\r\n.receiptsection[_ngcontent-%COMP%]{\r\n        padding: 4px 5px 4px 5px;\r\n      }\r\n.paymnetprintsection[_ngcontent-%COMP%]{\r\n        text-align: right;\r\n      }\r\n.paymentHeadingSection[_ngcontent-%COMP%]{\r\n      margin: 80px 0 31px 0;\r\n    }\r\n.paymentHeadingSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n      font-size: 25px;\r\n    }\r\n.totalAmountSection[_ngcontent-%COMP%]{\r\n      background: #84c529;\r\n        padding: 15px;\r\n        text-align: center;\r\n        color: #fff;\r\n        margin-top: 25px;\r\n        font-size: 16px;\r\n    }\r\n.invoiceDtSection[_ngcontent-%COMP%]{\r\n      margin: 32px 0 0 -15px;\r\n    }\r\n.invoiceDtSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n      font-size: 17px;\r\n        margin: 2px 0 12px 7px;\r\n    }\r\n.paymnetprintsection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .paymnetprintsection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n      background-color: black;\r\n        padding: 3px 8px;\r\n        margin: 0 4px 0 0;\r\n        color: white;\r\n        cursor: pointer;\r\n    }\r\n.kt-section__title1[_ngcontent-%COMP%]{\r\n        margin-top: 0px;\r\n        top: 0;\r\n        color: #48465b;\r\n      }\r\n.kt-section__title1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 17px;\r\n        font-weight: 600;\r\n      }\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n        min-width: 14rem !important;\r\n        left: -31px !important;\r\n      }\r\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        border-bottom: 1px solid gainsboro;\r\n      }\r\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{\r\n        border-bottom: none;\r\n      }\r\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n        background-color: #ff8533 !important;\r\n      }\r\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n        color: #fff !important;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vaW52b2ljZXMvaW52b2ljZS1kZXRhaWxzL2ludm9pY2UtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQixrQkFBa0IsRUFBRSxXQUFXLEVBQUU7QUFDaEUsMEJBQTBCLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFO0FBQ3JFLDRCQUE0QixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxvQ0FBb0MsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO0FBQ2xNLCtEQUErRCxXQUFXLENBQUMsT0FBTyxDQUFDO0FBQ25GLHlCQUF5QixtQkFBbUIsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0NBQWdDLENBQUMsb0NBQW9DLENBQUM7QUFDN00sZ0NBQWdDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQyxvQ0FBb0MsQ0FBQztBQUNsTixjQUFjLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDO0FBQ25ELHFCQUFxQixjQUFjLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsMEJBQTBCLENBQUM7QUFDeEssMkJBQTJCLGVBQWUsQ0FBQyw4QkFBOEIsRUFBRTtBQUMzRSxxQkFBcUIsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUN4SDtRQUNJLFdBQVc7TUFDYjtBQUNBO1FBQ0UsVUFBVTtNQUNaO0FBQ0E7UUFDRSxrQkFBa0I7TUFDcEI7QUFDQTtRQUNFLFVBQVU7TUFDWjtBQUNBO1FBQ0Usa0JBQWtCO1FBQ2xCLGlCQUFpQjtNQUNuQjtBQUNBO1FBQ0Usd0JBQXdCO01BQzFCO0FBQ0E7UUFDRSxpQkFBaUI7TUFDbkI7QUFDRjtNQUNFLHFCQUFxQjtJQUN2QjtBQUNBO01BQ0UsZUFBZTtJQUNqQjtBQUNBO01BQ0UsbUJBQW1CO1FBQ2pCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25CO0FBQ0E7TUFDRSxzQkFBc0I7SUFDeEI7QUFDQTtNQUNFLGVBQWU7UUFDYixzQkFBc0I7SUFDMUI7QUFDQTtNQUNFLHVCQUF1QjtRQUNyQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixlQUFlO0lBQ25CO0FBQ0U7UUFDRSxlQUFlO1FBQ2YsTUFBTTtRQUNOLGNBQWM7TUFDaEI7QUFDQTtRQUNFLGVBQWU7UUFDZixnQkFBZ0I7TUFDbEI7QUFDQTtRQUNFLDJCQUEyQjtRQUMzQixzQkFBc0I7TUFDeEI7QUFDQTtRQUNFLGtDQUFrQztNQUNwQztBQUNBO1FBQ0UsbUJBQW1CO01BQ3JCO0FBQ0E7UUFDRSxvQ0FBb0M7TUFDdEM7QUFDQTtRQUNFLHNCQUFzQjtNQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2ludm9pY2VzL2ludm9pY2UtZGV0YWlscy9pbnZvaWNlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWNrZXQtYXR0YWNobWVudC1jb250YWluZXIgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOyB9XHJcbi50aWNrZXQtYXR0YWNobWVudC1pbWFnZSB7ZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IH1cclxuLnRpY2tldC1hdHRhY2htZW50LW92ZXJsYXkge3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDA7bGVmdDogMTAwJTtyaWdodDogMDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYyLCAxNzYsIDE4MCk7b3ZlcmZsb3c6IGhpZGRlbjsgd2lkdGg6IDA7aGVpZ2h0OiAxMDAlO3RyYW5zaXRpb246IC41cyBlYXNlO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi50aWNrZXQtYXR0YWNobWVudC1jb250YWluZXI6aG92ZXIgLnRpY2tldC1hdHRhY2htZW50LW92ZXJsYXkge3dpZHRoOiAxMDAlO2xlZnQ6IDA7fVxyXG4udGlja2V0LWF0dGFjaG1lbnQtdGV4dCB7d2hpdGUtc3BhY2U6IG5vd3JhcDsgY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDIwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgb3ZlcmZsb3c6IGhpZGRlbjt0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTstbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7fVxyXG4udGlja2V0LWF0dGFjaG1lbnQtcmVtb3ZlLXRleHQge3doaXRlLXNwYWNlOiBub3dyYXA7Y29sb3I6IHdoaXRlO2ZvbnQtc2l6ZTogMjBweDtwb3NpdGlvbjogYWJzb2x1dGU7b3ZlcmZsb3c6IGhpZGRlbjtib3R0b206IDEwJTtsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOy1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTt9XHJcbi5maWxlLXVwbG9hZCB7cG9zaXRpb246IHJlbGF0aXZlO2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbiAgICAuZmlsZS11cGxvYWRfX2xhYmVsIHtkaXNwbGF5OiBibG9jaztwYWRkaW5nOiAwLjJlbSAxLjhlbTtjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogI2IxYTRhNDsgYm9yZGVyLXJhZGl1czogLjRlbTtmb250LXNpemU6IDIycHg7IGhlaWdodDogNDBweDt0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zczt9XHJcbiAgICAuZmlsZS11cGxvYWRfX2xhYmVsOmhvdmVyIHtjdXJzb3I6IHBvaW50ZXI7YmFja2dyb3VuZDogcmdiKDIwNCwgMTk4LCAxOTgpOyB9ICBcclxuICAgIC5maWxlLXVwbG9hZF9faW5wdXQge3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwO3RvcDogMDtyaWdodDogMDtib3R0b206IDA7Zm9udC1zaXplOiAxOyB3aWR0aDowO2hlaWdodDogMTAwJTtvcGFjaXR5OiAwO31cclxuICAgIC5teXNoYXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5zdGF0dXMtSW5mb3tcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb2xsYXBzZS1zdGF0dXN7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCA1OXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wYXl3aWR0aC1zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIH1cclxuICAgICAgLnBheUJ1dHRvblNlY3Rpb257XHJcbiAgICAgICAgbWFyZ2luOiAwIDQwcHggMCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWNlaXB0c2VjdGlvbntcclxuICAgICAgICBwYWRkaW5nOiA0cHggNXB4IDRweCA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnBheW1uZXRwcmludHNlY3Rpb257XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIC5wYXltZW50SGVhZGluZ1NlY3Rpb257XHJcbiAgICAgIG1hcmdpbjogODBweCAwIDMxcHggMDtcclxuICAgIH1cclxuICAgIC5wYXltZW50SGVhZGluZ1NlY3Rpb24gaDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIC50b3RhbEFtb3VudFNlY3Rpb257XHJcbiAgICAgIGJhY2tncm91bmQ6ICM4NGM1Mjk7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuaW52b2ljZUR0U2VjdGlvbntcclxuICAgICAgbWFyZ2luOiAzMnB4IDAgMCAtMTVweDtcclxuICAgIH1cclxuICAgIC5pbnZvaWNlRHRTZWN0aW9uIGgye1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMCAxMnB4IDdweDtcclxuICAgIH1cclxuICAgIC5wYXltbmV0cHJpbnRzZWN0aW9uIGEsIC5wYXltbmV0cHJpbnRzZWN0aW9uIGJ1dHRvbntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgICAgICBtYXJnaW46IDAgNHB4IDAgMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgICAua3Qtc2VjdGlvbl9fdGl0bGUxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICM0ODQ2NWI7XHJcbiAgICAgIH1cclxuICAgICAgLmt0LXNlY3Rpb25fX3RpdGxlMSBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgIG1pbi13aWR0aDogMTRyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAtMzFweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5kcm9wZG93bi1tZW51IGxpe1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgICAgIH1cclxuICAgICAgLmRyb3Bkb3duLW1lbnUgbGk6bGFzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5kcm9wZG93bi1tZW51IGxpOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjg1MzMgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuZHJvcGRvd24tbWVudSBsaSBhOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invoice-details',
            templateUrl: './invoice-details.component.html',
            styleUrls: ['./invoice-details.component.css'],
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
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]
          }, {
            type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"]
          }, {
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_14__["UserlogService"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]
          }];
        }, null);
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
    "redt":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/application/invoices/invoice-payment-and-receipt/invoice-payment-and-receipt.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: InvoicePaymentAndReceiptComponent */

    /***/
    function redt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicePaymentAndReceiptComponent", function () {
        return InvoicePaymentAndReceiptComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/invoice.service */
      "py7r");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/userlog.service */
      "V05N");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function InvoicePaymentAndReceiptComponent_div_8_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " envalid amount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvoicePaymentAndReceiptComponent_div_8_div_10_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvoicePaymentAndReceiptComponent_div_8_div_10_div_2_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_div_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Payment date is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_div_18_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Envalid payment date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_div_18_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Envalid payment date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvoicePaymentAndReceiptComponent_div_8_div_18_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvoicePaymentAndReceiptComponent_div_8_div_18_div_2_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InvoicePaymentAndReceiptComponent_div_8_div_18_div_3_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.touched);
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", p_r16.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.ModeName);
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Payment Mathod is Required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_div_31_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Payment Pethod. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvoicePaymentAndReceiptComponent_div_8_div_31_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvoicePaymentAndReceiptComponent_div_8_div_31_div_2_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.minlength);
        }
      }

      function InvoicePaymentAndReceiptComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function InvoicePaymentAndReceiptComponent_div_8_Template_form_submit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.onPaymentSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Amount Received");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePaymentAndReceiptComponent_div_8_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.invoiceService.PaymentData.PaymentAmount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InvoicePaymentAndReceiptComponent_div_8_div_10_Template, 3, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Payment Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoicePaymentAndReceiptComponent_div_8_Template_input_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            return _r6.toggle();
          })("ngModelChange", function InvoicePaymentAndReceiptComponent_div_8_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.invoiceService.PaymentData.PaymentDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InvoicePaymentAndReceiptComponent_div_8_div_18_Template, 4, 3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Payment Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePaymentAndReceiptComponent_div_8_Template_select_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.invoiceService.PaymentData.PModeId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InvoicePaymentAndReceiptComponent_div_8_option_24_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Payment Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePaymentAndReceiptComponent_div_8_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.invoiceService.PaymentData.PaymentMethod = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InvoicePaymentAndReceiptComponent_div_8_div_31_Template, 3, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Transaction ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePaymentAndReceiptComponent_div_8_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.invoiceService.PaymentData.TransactionId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Ramark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "textarea", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicePaymentAndReceiptComponent_div_8_Template_textarea_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.invoiceService.PaymentData.PaymentNote = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoicePaymentAndReceiptComponent_div_8_Template_button_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.setClearPaymentData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.invoiceService.PaymentData.PaymentAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.invoiceService.PaymentData.PaymentDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.invoiceService.PaymentData.PModeId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.invoiceService.PaymentModeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.invoiceService.PaymentData.PaymentMethod);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.invoiceService.PaymentData.TransactionId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.invoiceService.PaymentData.PaymentNote);
        }
      }

      function InvoicePaymentAndReceiptComponent_div_9_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PAYMENT RECEIPT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Payment Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Payment Mode: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Total Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Payment For");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Invoice Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Invoice Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Invoice Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Payment Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, p_r30.PaymentDate), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r30.PaymentMode, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", p_r30.InvoiceAmount, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r30.InvoiceNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 9, p_r30.InvoiceDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", p_r30.InvoiceAmount, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", p_r30.PaymentAmount, ".00");
        }
      }

      function InvoicePaymentAndReceiptComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoicePaymentAndReceiptComponent_div_9_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.EmailReciptPDF();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InvoicePaymentAndReceiptComponent_div_9_div_20_Template, 54, 11, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tempPaymentlist.paymentSummary);
        }
      }

      var InvoicePaymentAndReceiptComponent = /*#__PURE__*/function () {
        function InvoicePaymentAndReceiptComponent(invoiceService, dialog, dialogRef, toastr, logService, loginservice) {
          var _this34 = this;

          _classCallCheck(this, InvoicePaymentAndReceiptComponent);

          this.invoiceService = invoiceService;
          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.toastr = toastr;
          this.logService = logService;
          this.loginservice = loginservice;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this34.currentUser = x;
          });
        }

        _createClass(InvoicePaymentAndReceiptComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this35 = this;

            this.invoiceService.getPaymentModeDetails(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  console.log(response.result);
                  _this35.invoiceService.PaymentModeList = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.invoiceService.getPaymentDetailsByInvoiceNo(this.invoiceService.InvoiceData.Id, this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this35.invoiceService.TotalPaymentData = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.iAmount = this.invoiceService.InvoiceData.NetAmount;
            this.pAmount = this.invoiceService.TotalPaymentData.PaymentAmount;

            if (this.iAmount > this.pAmount) {
              this.IsShowPaymentSection = 'true';
              this.invoiceService.PaymentData.PaymentAmount = this.iAmount - this.pAmount;
            } else {
              this.invoiceService.PaymentData.PaymentAmount = 0;
              this.invoiceService.getPaymentSummary(this.invoiceService.InvoiceData.Id).subscribe(function (res) {
                if (res) {
                  var response = res;

                  if (response.Message === 'success') {
                    _this35.tempPaymentlist = response.result;
                    _this35.IsShowPaymentSection = 'false';
                  }
                }
              }, function (error) {
                return console.log(error);
              });
            }
          }
        }, {
          key: "setClearPaymentData",
          value: function setClearPaymentData() {
            this.invoiceService.PaymentData.PaymentAmount = 0;
            this.invoiceService.PaymentData.PaymentMethod = '';
            this.invoiceService.PaymentData.PaymentNote = '';
            this.invoiceService.PaymentData.TransactionId = '';
            this.invoiceService.PaymentData.PModeId = 0;
            this.invoiceService.PaymentData.PaymentDate = null;
          }
        }, {
          key: "onPaymentSubmit",
          value: function onPaymentSubmit() {
            var _this36 = this;

            if (this.invoiceService.PaymentData.PaymentAmount > this.invoiceService.InvoiceData.NetAmount) {
              this.toastr.warning('warning', 'Invalid amount.');
            } else {
              this.invoiceService.PaymentData.InvoiceId = this.invoiceService.InvoiceData.Id;
              this.invoiceService.PaymentData.InvoiceNo = this.invoiceService.InvoiceData.InvoiceId;

              if (this.invoiceService.PaymentData.PModeId === 0) {
                this.toastr.warning('warning', 'Select Payment mode');
              } else if (this.invoiceService.PaymentData.PaymentAmount === 0) {
                this.toastr.warning('warning', 'Invalid Amount');
              } else if (this.invoiceService.PaymentData.PaymentDate === null || this.invoiceService.PaymentData.PaymentDate === undefined) {
                this.toastr.warning('warning', 'Invalid payment date');
              } else {
                this.invoiceService.PaymentData.PaymentDate = new Date(Date.parse(Date()));
                this.invoiceService.PaymentData.PModeId = Number(this.invoiceService.PaymentData.PModeId);
                this.invoiceService.postPayment(this.currentUser.Token).subscribe(function (res) {
                  if (res) {
                    var response = res;

                    if (response.Message === 'success') {
                      var des = 'Amount of : $ ' + _this36.invoiceService.PaymentData.PaymentAmount + '0.00, received against Invoice No : ' + _this36.invoiceService.InvoiceData.InvoiceId + ', from Customer : ' + _this36.invoiceService.InvoiceData.CustomerName + ', by user : ' + _this36.currentUser.UserName + ', on dated : ' + new Date();
                      var Activity = ' Payment of : $ ' + _this36.invoiceService.PaymentData.PaymentAmount + 'received against invoice no : ' + _this36.invoiceService.InvoiceData.InvoiceId;

                      _this36.logService.postUserLog(_this36.currentUser.Id, _this36.currentUser.UserName, 'Payment', 'Added', _this36.invoiceService.InvoiceData.Id, des, Activity).subscribe();

                      _this36.invoiceService.PaymentData = {
                        Id: '00000000-0000-0000-0000-000000000000',
                        InvoiceId: '00000000-0000-0000-0000-000000000000',
                        InvoiceNo: '',
                        PaymentAmount: 0,
                        BalanceAmount: 0,
                        PaymentDate: new Date(),
                        PModeId: 0,
                        PaymentMethod: '',
                        TransactionId: '',
                        PaymentNote: '',
                        CreatedDate: new Date(),
                        UpdatedDate: new Date(),
                        Status: '',
                        SendOutStatus: '',
                        PaymentModeList: []
                      };
                      _this36.IsShowPaymentSection = 'false';

                      _this36.invoiceService.getPaymentDetailsByInvoiceNo(_this36.invoiceService.InvoiceData.Id, _this36.currentUser.Token).subscribe(function (res) {
                        if (res) {
                          var _response = res;

                          if (_response.Message === 'success') {
                            _this36.invoiceService.TotalPaymentData = _response.result;
                          }
                        }
                      }, function (error) {
                        return console.log(error);
                      });

                      _this36.invoiceService.getPaymentSummary(_this36.invoiceService.InvoiceData.Id);

                      _this36.dialogRef.close();
                    }

                    if (response.Message === 'failure') {
                      _this36.toastr.warning(response.MessageDescription);
                    }
                  }
                }, function (error) {
                  return console.log(error);
                });
              }
            }
          }
        }, {
          key: "EmailReciptPDF",
          value: function EmailReciptPDF() {
            if (confirm('Are you sure want to send payment slip on email.')) {
              this.invoiceService.emailPaymentReceipt(this.invoiceService.InvoiceData.Id);
              this.toastr.success('success', 'Payment receipt send to your registered email');
            }
          }
        }]);

        return InvoicePaymentAndReceiptComponent;
      }();

      InvoicePaymentAndReceiptComponent.ɵfac = function InvoicePaymentAndReceiptComponent_Factory(t) {
        return new (t || InvoicePaymentAndReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_4__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]));
      };

      InvoicePaymentAndReceiptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvoicePaymentAndReceiptComponent,
        selectors: [["app-invoice-payment-and-receipt"]],
        decls: 10,
        vars: 2,
        consts: [[1, "modal-header", "select-new-properties"], ["id", "exampleModalLabel", 1, "modal-title"], ["mat-dialog-close", "", 1, "btn", "btn-default", "pull-right"], [1, "modal-body"], ["id", "kt_widget2_tab3_content", 1, "tab-pane"], ["class", "paymentsection", 4, "ngIf"], ["class", "receiptsection", 4, "ngIf"], [1, "paymentsection"], ["autocomplete", "off", 3, "submit"], ["form", "ngForm"], [1, "kt-widget2"], [1, "kt-widget2__item", "kt-widget2__item--warning", "ppp"], [1, "kt-widget2__checkbox", "paywidth-section"], ["type", "number", "min", "0", "minlength", "0", "name", "PaymentAmount", "placeholder", "Amount", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["PaymentAmount", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "text", "ngbDatepicker", "", "name", "PaymentDate", "placeholder", "dd/MM/yyyy", "required", "", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["PaymentDate", "ngModel", "datePickerPaymentDate", "ngbDatepicker"], ["name", "PModeId", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "PaymentMethod", "required", "", "placeholder", "Payment Method", 1, "form-control", 3, "ngModel", "ngModelChange"], ["PaymentMethod", "ngModel"], ["name", "TransactionId", "placeholder", "Transaction ID", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "PaymentNote", "placeholder", "Payment Note", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "payButtonSection"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"], [1, "receiptsection"], [1, "row"], [1, "col-md-3"], [1, "paymentreceiptSection"], [1, "col-md-9"], [1, "paymnetprintsection"], [1, "PrintSerction"], ["printSectionId", "frmPrintReceipt", "ngxPrint", ""], ["aria-hidden", "true", 1, "fa", "fa-print"], [1, "PDFSerction"], ["href", "javascript:void(0);", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], [1, "CloseSerction"], ["href", "javascript:void(0);", "mat-dialog-close", ""], ["aria-hidden", "true", 1, "fa", "fa-times"], ["id", "frmPrintReceipt", 1, "row", "frmPrintReceipt"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "payrmentPrintSection"], [1, "paymentHeadingSection"], [1, "paymentDateSection"], [1, "col-md-6"], [1, "totalAmountSection"], [1, "invoiceDtSection"], [1, "InvoiceDtTable"], [1, "table", "table-striped", "table-hover"]],
        template: function InvoicePaymentAndReceiptComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Payment & Receipt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InvoicePaymentAndReceiptComponent_div_8_Template, 48, 10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InvoicePaymentAndReceiptComponent_div_9_Template, 21, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsShowPaymentSection === "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsShowPaymentSection === "false");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: [".paymnetprintsection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .paymnetprintsection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  border: none;\n    background-color: #3c4596;\n    color: white;\n    padding: 5px 10px;\n    margin: 0 3px 0 0;\n    cursor: pointer;\n}\n  .paywidth-section[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .payButtonSection[_ngcontent-%COMP%] {\n    margin: 0 40px 0 0;\n    text-align: right;\n  }\n\n  .receiptsection[_ngcontent-%COMP%] {\n    padding: 4px 5px 4px 5px;\n  }\n\n  .paymnetprintsection[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n\n  .paymentHeadingSection[_ngcontent-%COMP%] {\n    margin: 34px 0 54px 0;\n  }\n\n    .paymentHeadingSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 17px;\n    }\n\n  .totalAmountSection[_ngcontent-%COMP%] {\n    background: #84c529;\n    padding: 4px 26px;\n    text-align: center;\n    color: #fff;\n    margin-top: 25px;\n    font-size: 16px;\n  }\n  .mat-dialog-container[_ngcontent-%COMP%]{\n    padding: 6px 6px 4px 12px !important;\n  }\n  .modal-header.select-new-properties[_ngcontent-%COMP%]{\n    padding: 0 !important;\n  }\n  .kt-widget2__checkbox.paywidth-section[_ngcontent-%COMP%]{\n    padding: 4px 0px 0px 35px !important;\n  }\n  .ppp[_ngcontent-%COMP%]{\n    padding: 0px 0px 0px 0px !important;\n    margin-bottom: 9px !important;\n  }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoicePaymentAndReceiptComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invoice-payment-and-receipt',
            templateUrl: './invoice-payment-and-receipt.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__["InvoiceService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }, {
            type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_4__["UserlogService"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "w7eF":
    /*!*****************************************************************************!*\
      !*** ./src/app/application/invoices/invoice-list/invoice-list.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: InvoiceListComponent */

    /***/
    function w7eF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function () {
        return InvoiceListComponent;
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


      var _invoice_customer_popup_invoice_customer_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../invoice-customer-popup/invoice-customer-popup.component */
      "EhMi");
      /* harmony import */


      var _invoice_ticket_popup_invoice_ticket_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../invoice-ticket-popup/invoice-ticket-popup.component */
      "wvCZ");
      /* harmony import */


      var _services_customer_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/customer.model */
      "jG0A");
      /* harmony import */


      var _services_property_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/property.model */
      "4ebh");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../services/customer.service */
      "0zL+");
      /* harmony import */


      var _services_ticket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../services/ticket.service */
      "KPvW");
      /* harmony import */


      var _services_invoice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../services/invoice.service */
      "py7r");
      /* harmony import */


      var _services_property_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../services/property.service */
      "Pffd");
      /* harmony import */


      var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/userlog.service */
      "V05N");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _services_quote_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../services/quote.service */
      "uOqW");
      /* harmony import */


      var _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");

      function InvoiceListComponent_div_111_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceListComponent_div_111_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.OpenAddCustomerToInvoiceDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Invoice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceListComponent_tr_140_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceListComponent_tr_140_span_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.OnTicketDetails(i_r4.InvoiceConvertedID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4.TicketId);
        }
      }

      function InvoiceListComponent_tr_140_span_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceListComponent_tr_140_span_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.viewQuoteDetails(i_r4.InvoiceConvertedID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4.QuoteId);
        }
      }

      function InvoiceListComponent_tr_140_span_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Draft ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceListComponent_tr_140_span_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Paid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceListComponent_tr_140_span_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Un Paid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceListComponent_tr_140_span_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Over Due ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceListComponent_tr_140_span_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Partially Paid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceListComponent_tr_140_span_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cancelled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceListComponent_tr_140_li_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceListComponent_tr_140_li_60_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.popolateInvoice(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceListComponent_tr_140_li_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceListComponent_tr_140_li_61_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.getInvoiceDetails(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvoiceListComponent_tr_140_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceListComponent_tr_140_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var i_r4 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.getInvoiceDetails(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InvoiceListComponent_tr_140_span_6_Template, 4, 1, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InvoiceListComponent_tr_140_span_7_Template, 3, 1, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Invoice Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Due Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Company: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Total: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Tax: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Net Amount: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Deposite: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, InvoiceListComponent_tr_140_span_47_Template, 3, 0, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, InvoiceListComponent_tr_140_span_48_Template, 3, 0, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, InvoiceListComponent_tr_140_span_49_Template, 3, 0, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, InvoiceListComponent_tr_140_span_50_Template, 3, 0, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, InvoiceListComponent_tr_140_span_51_Template, 3, 0, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, InvoiceListComponent_tr_140_span_52_Template, 3, 0, "span", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, InvoiceListComponent_tr_140_li_60_Template, 3, 0, "li", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, InvoiceListComponent_tr_140_li_61_Template, 3, 0, "li", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4.InvoiceId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4.TicketId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4.QuoteId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, i_r4.InvoiceDate), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 22, i_r4.InvoiceDueDate), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4.InvoiceTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4.CustomerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4.CompanyName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", i_r4.SubTotal, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", i_r4.TaxAmount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", i_r4.SubTotal, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", i_r4.ReqDepositeAmount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4.Status === "Draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4.Status === "SendOutPaid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4.Status === "SendOutUnPaid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4.Status === "SendOutOverDue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4.Status === "PartiallyPaid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4.Status === "cancelled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.Permissions.InvoiceEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.Permissions.InvoiceView);
        }
      }

      var InvoiceListComponent = /*#__PURE__*/function () {
        function InvoiceListComponent(titleService, dialog, router, customerService, ticketService, invoiceService, propertyservice, logService, loginservice, quoteService, propertyService, genicprofileservice) {
          var _this37 = this;

          _classCallCheck(this, InvoiceListComponent);

          this.titleService = titleService;
          this.dialog = dialog;
          this.router = router;
          this.customerService = customerService;
          this.ticketService = ticketService;
          this.invoiceService = invoiceService;
          this.propertyservice = propertyservice;
          this.logService = logService;
          this.loginservice = loginservice;
          this.quoteService = quoteService;
          this.propertyService = propertyService;
          this.genicprofileservice = genicprofileservice;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this.loginservice.currentUser.subscribe(function (x) {
            return _this37.currentUser = x;
          });
        }

        _createClass(InvoiceListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.currentUser.Permissions.InvoiceView) {
              this.router.navigate(['/dashboard']);
            }

            this.genicprofileservice.TicketFilter.IsReady = false;
            this.genicprofileservice.TicketFilter.IsReadyQuote = false;
            this.dtOptions = {
              pagingType: 'full_numbers',
              paging: true,
              ordering: false,
              lengthMenu: [5, 10, 25, 50, 75, 100]
            };
            this.invoiceService.refreshInvoiceList(this.currentUser.Token);
            this.titleService.setTitle('Invoices | Genic Solution');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this38 = this;

            setTimeout(function () {
              _this38.TotalInvoice = _this38.invoiceService.InvoiceList.length;
              _this38.TotalDraftInvoice = _this38.invoiceService.InvoiceList.filter(function (a) {
                return a.Status === 'Draft';
              }).length;
              _this38.TotalCancelledInvoice = _this38.invoiceService.InvoiceList.filter(function (a) {
                return a.Status === 'cancelled';
              }).length;
              _this38.TotalSendOutParticalPaidInvoice = _this38.invoiceService.InvoiceList.filter(function (a) {
                return a.Status === 'PartiallyPaid';
              }).length;
              _this38.TotalPaidInvoices = _this38.invoiceService.InvoiceList.filter(function (a) {
                return a.Status === 'SendOutPaid';
              }).length;
              _this38.TotalUnpaidInvoice = _this38.invoiceService.InvoiceList.filter(function (a) {
                return a.Status === 'SendOutUnPaid';
              }).length;
              _this38.TotalOverDueInvoice = _this38.invoiceService.InvoiceList.filter(function (a) {
                return a.Status === 'SendOutOverDue';
              }).length;
            }, 100);
            setTimeout(function () {
              _this38.dtTrigger.next();
            }, 1000);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "OpenAddCustomerToInvoiceDialog",
          value: function OpenAddCustomerToInvoiceDialog() {
            var _this39 = this;

            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.width = '50%';
            dialogConfig.data = {};
            this.dialog.open(_invoice_customer_popup_invoice_customer_popup_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceCustomerPopupComponent"], dialogConfig).afterClosed().subscribe(function (res) {
              if (res !== '') {
                _this39.customerService.formData.Id = res.c.Id;
                _this39.customerService.formData.CustomerId = res.c.CustomerId;
                _this39.customerService.formData.NameTitle = res.c.NameTitle;
                _this39.customerService.formData.FirstName = res.c.FirstName;
                _this39.customerService.formData.LastName = res.c.LastName;
                _this39.customerService.formData.CompanyName = res.c.CompanyName;
                _this39.customerData = new _services_customer_model__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
                _this39.customerData = res.c;

                _this39.OpenAddTicketToInvoiceDialog();
              }
            });
          }
        }, {
          key: "OpenAddTicketToInvoiceDialog",
          value: function OpenAddTicketToInvoiceDialog() {
            var _this40 = this;

            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.width = '60%';
            dialogConfig.data = {};
            this.dialog.open(_invoice_ticket_popup_invoice_ticket_popup_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceTicketPopupComponent"], dialogConfig).afterClosed().subscribe(function (res) {
              if (res !== undefined) {
                if (res !== '') {
                  if (res.x) {
                    _this40.invoiceService.postTempInvoice(_this40.currentUser.Token).subscribe(function (res0) {
                      if (res0) {
                        var response = res0;

                        if (response.Message === 'success') {
                          _this40.invoiceService.InvoiceData = response.result;
                          _this40.ticketService.formData = Object.assign({}, res.x);
                          _this40.invoiceService.InvoiceData.InvoiceConvertedFrom = 'TICKET';
                          _this40.invoiceService.InvoiceData.InvoiceConvertedID = res.x.Id;
                          _this40.invoiceService.InvoiceData.Status = 'Draft';
                          _this40.invoiceService.InvoiceData.InvoiceTitle = res.x.Title;
                          _this40.invoiceService.InvoiceData.Description = res.x.Description;
                          _this40.invoiceService.InvoiceData.CustomerName = res.x.CustomerName;
                          _this40.invoiceService.InvoiceData.CustomerId = res.x.CustomerId;
                          _this40.invoiceService.InvoiceData.PropertyId = res.x.PropertyId;
                          _this40.invoiceService.InvoiceData.CustomerContactNo = res.x.CustomerContactNo;
                          _this40.invoiceService.InvoiceData.CustomerEmail = res.x.CustomerEmail;
                          _this40.invoiceService.InvoiceData.CustomerAddress = res.x.CustomerAddress;
                          _this40.invoiceService.InvoiceData.ClientRemark = res.x.Description;
                          _this40.invoiceService.InvoiceData.InternalNotes = res.x.InternalNoteDescription;
                          _this40.invoiceService.InvoiceData.NetAmount = res.x.NetAmount;
                          _this40.invoiceService.InvoiceData.SubTotal = 0;
                          _this40.invoiceService.InvoiceData.TicketId = res.x.TicketId;
                          _this40.invoiceService.InvoiceData.TaxAmount = 0;
                          _this40.invoiceService.InvoiceData.TaxId = 0;
                          _this40.invoiceService.InvoiceData.TaxRate = 0;
                          _this40.invoiceService.InvoiceData.DiscountType = 0;
                          _this40.invoiceService.InvoiceData.DiscountTextValue = 0;
                          _this40.invoiceService.InvoiceData.DiscountAmount = 0;
                          _this40.invoiceService.InvoiceData.ReqDepositeAmount = 0;
                          _this40.invoiceService.InvoiceData.ReqDepositeTextValue = 0;
                          _this40.invoiceService.InvoiceData.ReqDepositeType = 0;

                          _this40.invoiceService.posTciketitemToInvoiceItemTicketId(res.x.Id, _this40.invoiceService.InvoiceData.Id);

                          _this40.propertyService.formData = new _services_property_model__WEBPACK_IMPORTED_MODULE_5__["Property"]();

                          _this40.propertyService.getPropertyData(res.x.PropertyId);

                          _this40.router.navigate(['/invoices/invoice-from-ticket']);
                        }
                      }
                    }, function (error) {
                      return console.log(error);
                    });
                  } else if (res.q) {
                    _this40.invoiceService.postTempInvoice(_this40.currentUser.Token).subscribe(function (res1) {
                      if (res1) {
                        var response = res1;

                        if (response.Message === 'success') {
                          _this40.invoiceService.InvoiceData = response.result;
                          _this40.quoteService.QuoteData = Object.assign({}, res.q);
                          _this40.invoiceService.InvoiceData.InvoiceConvertedFrom = 'QUOTE';
                          _this40.invoiceService.InvoiceData.InvoiceConvertedID = res.q.Id;
                          _this40.invoiceService.InvoiceData.Status = 'Draft';
                          _this40.invoiceService.InvoiceData.InvoiceTitle = res.q.JobTitle;
                          _this40.invoiceService.InvoiceData.Description = res.q.Attention;
                          _this40.invoiceService.InvoiceData.RefranceNo = res.q.SalesRepresentative;
                          _this40.invoiceService.InvoiceData.CustomerName = res.q.CustomerName;
                          _this40.invoiceService.InvoiceData.CustomerId = res.q.CustomerId;
                          _this40.invoiceService.InvoiceData.PropertyId = res.q.PropertyId;
                          _this40.invoiceService.InvoiceData.CustomerContactNo = res.q.CustomerContactNo;
                          _this40.invoiceService.InvoiceData.CustomerEmail = res.q.CustomerEmail;
                          _this40.invoiceService.InvoiceData.CustomerAddress = res.q.CustomerAddress;
                          _this40.invoiceService.InvoiceData.ClientRemark = res.q.ClientRemark;
                          _this40.invoiceService.InvoiceData.InternalNotes = res.q.InternalNotes;
                          _this40.invoiceService.InvoiceData.NetAmount = res.q.NetAmount;
                          _this40.invoiceService.InvoiceData.SubTotal = res.q.SubTotal;
                          _this40.invoiceService.InvoiceData.TaxAmount = res.q.TaxAmount;
                          _this40.invoiceService.InvoiceData.TaxId = res.q.TaxId;
                          _this40.invoiceService.InvoiceData.TaxRate = res.q.TaxRate;
                          _this40.invoiceService.InvoiceData.DiscountType = res.q.DiscountType;
                          _this40.invoiceService.InvoiceData.DiscountTextValue = res.q.DiscountTextValue;
                          _this40.invoiceService.InvoiceData.DiscountAmount = res.q.DiscountAmount;
                          _this40.invoiceService.InvoiceData.ReqDepositeAmount = res.q.ReqDepositeAmount;
                          _this40.invoiceService.InvoiceData.ReqDepositeTextValue = res.q.ReqDepositeTextValue;
                          _this40.invoiceService.InvoiceData.ReqDepositeType = res.q.ReqDepositeType;
                          _this40.invoiceService.InvoiceData.QuoteId = res.q.QuoteId;

                          _this40.invoiceService.posQuoteItemToInvoiceItem(res.q.Id, _this40.invoiceService.InvoiceData.Id);

                          _this40.propertyService.formData = new _services_property_model__WEBPACK_IMPORTED_MODULE_5__["Property"]();

                          _this40.propertyService.getPropertyData(res.q.PropertyId);

                          _this40.router.navigate(['/invoices/invoice-from-quote']);
                        }
                      }
                    }, function (error) {
                      return console.log(error);
                    });
                  }
                }
              }
            });
          }
        }, {
          key: "popolateInvoice",
          value: function popolateInvoice(i) {
            this.invoiceService.InvoiceData = Object.assign({}, i);
            this.propertyService.formData = new _services_property_model__WEBPACK_IMPORTED_MODULE_5__["Property"]();
            this.propertyService.getPropertyData(i.PropertyId);
            this.router.navigate(['/invoices/invoice-edit']);
          }
        }, {
          key: "getInvoiceDetails",
          value: function getInvoiceDetails(i) {
            this.invoiceService.InvoiceData = i;
            this.router.navigate(['/invoices/invoice-details']);
          }
        }, {
          key: "viewQuoteDetails",
          value: function viewQuoteDetails(Id) {
            var _this41 = this;

            this.quoteService.getQuoteDetails(Id).subscribe(function (res) {
              if (res) {
                var obj = new Object();
                obj = res;
                _this41.quoteService.QuoteData = obj;

                _this41.quoteService.getQuoteItems(_this41.currentUser.Token, _this41.quoteService.QuoteData.Id).subscribe(function (res) {
                  if (res) {
                    var response = res;

                    if (response.Message === 'success') {
                      _this41.quoteService.QuoteItemList = response.result;
                    }
                  }
                }, function (error) {
                  return console.log(error);
                });

                _this41.quoteService.getQuoteAttachments(Id);

                setTimeout(function () {
                  _this41.router.navigate(['/quotes/quote-Details']);
                }, 1000);
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "OnTicketDetails",
          value: function OnTicketDetails(Id) {
            var _this42 = this;

            this.ticketService.getTicketById(this.currentUser.Token, Id).subscribe(function (res) {
              if (res) {
                var response = res;
                _this42.ticketService.formData = response.result;

                _this42.router.navigate(['/tickets/ticket-view-detail/']);
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return InvoiceListComponent;
      }();

      InvoiceListComponent.ɵfac = function InvoiceListComponent_Factory(t) {
        return new (t || InvoiceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_service__WEBPACK_IMPORTED_MODULE_10__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_invoice_service__WEBPACK_IMPORTED_MODULE_11__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_12__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_13__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quote_service__WEBPACK_IMPORTED_MODULE_15__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_12__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_16__["GenicProfileService"]));
      };

      InvoiceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvoiceListComponent,
        selectors: [["app-invoice-list"]],
        decls: 141,
        vars: 8,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid", "breadcud-kt-container"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], [1, "kt-subheader__wrapper"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__stats"], [1, "row", "mrg-top-10"], [1, "col-lg-3"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--brand", "kt-iconbox--animate-slower"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z", "id", "Combined-Shape", "fill", "#000000", "opacity", "0.3"], ["d", "M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z", "id", "Combined-Shape", "fill", "#000000"], ["id", "Rectangle-152", "fill", "#000000", "opacity", "0.3", "x", "10", "y", "9", "width", "7", "height", "2", "rx", "1"], ["id", "Rectangle-152-Copy-2", "fill", "#000000", "opacity", "0.3", "x", "7", "y", "9", "width", "2", "height", "2", "rx", "1"], ["id", "Rectangle-152-Copy-3", "fill", "#000000", "opacity", "0.3", "x", "7", "y", "13", "width", "2", "height", "2", "rx", "1"], ["id", "Rectangle-152-Copy", "fill", "#000000", "opacity", "0.3", "x", "10", "y", "13", "width", "7", "height", "2", "rx", "1"], ["id", "Rectangle-152-Copy-5", "fill", "#000000", "opacity", "0.3", "x", "7", "y", "17", "width", "2", "height", "2", "rx", "1"], ["id", "Rectangle-152-Copy-4", "fill", "#000000", "opacity", "0.3", "x", "10", "y", "17", "width", "7", "height", "2", "rx", "1"], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], [1, "kt-link"], [1, "kt-iconbox__content"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--success", "kt-iconbox--animate-slow"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--warning", "kt-iconbox--animate-fast"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--danger", "kt-iconbox--animate-faster"], [1, "kt-section", "kt-drop-section"], [1, "kt-section__content"], [1, "row"], [1, "col-md-12", "no-spacing"], [1, ""], ["class", "col", "style", "margin: 0;padding: 0;", 4, "ngIf"], [1, "kt-portlet__body", "customer-listing-datatable"], [1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "col-sm-12"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "panel-body"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", "dataTable", "no-footer", "dtr-inline", 2, "width", "1064px", 3, "dtOptions", "dtTrigger"], ["role", "row"], [2, "width", "5%"], [2, "width", "15%"], [2, "width", "10%"], [2, "width", "30%"], [2, "width", "20%"], ["class", "invoice-list-view-info odd", "role", "row", 4, "ngFor", "ngForOf"], [1, "col", 2, "margin", "0", "padding", "0"], [1, "addInvoiceSection"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", 3, "click"], ["role", "row", 1, "invoice-list-view-info", "odd"], ["tabindex", "0", 1, "sorting_1"], [1, "btn", "btn-label-danger", "btn-pill", "invoices-btn"], ["href", "javascript:;", 3, "click"], ["class", "btn btn-label-primary", 4, "ngIf"], ["class", "btn btn-label-success btn-pill reallocated-one", 4, "ngIf"], [4, "ngIf"], ["nowrap", ""], [1, "dropdown"], [1, "btn-group", "btn-group-sm"], ["data-toggle", "dropdown", 1, "btn", "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"], [1, "btn", "btn-label-primary"], [1, "btn", "btn-label-success", "btn-pill", "reallocated-one"], [1, "btn", "btn-label-info"], [1, "btn", "btn-label-warning"], ["href", "javascript:void(0);", 3, "click"]],
        template: function InvoiceListComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Invoices ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "rect", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "rect", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "rect", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "rect", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "rect", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "rect", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Total Invoices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "rect", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "rect", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "rect", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "rect", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "rect", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "rect", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "rect", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Draft Invoices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "svg", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "g", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "rect", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "rect", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "rect", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "rect", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "rect", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "rect", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "rect", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Paid Invoices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "svg", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "g", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "rect", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "rect", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "rect", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "rect", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "rect", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "rect", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "rect", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Unpaid Invoices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, InvoiceListComponent_div_111_Template, 4, 0, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h1", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Invoice List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "table", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Invoice\xA0No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "th", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "th", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Customer Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "th", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, InvoiceListComponent_tr_140_Template, 62, 24, "tr", 60);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalInvoice, " Total Invoices ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalDraftInvoice, " Draft Invoices ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalPaidInvoices, " Paid Invoices ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TotalUnpaidInvoice, " Unpaid Invoices ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.InvoiceCreate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.invoiceService.InvoiceList);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_18__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]],
        styles: [".addInvoiceSection[_ngcontent-%COMP%] {\n    text-align: right;\n    \n  }\n\n  .invoice-summary[_ngcontent-%COMP%] {\n    margin: 66px 0 0 0;\n  }\n\n  .summary-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #ccc3c3;\n    width: 59%;\n    margin: 0 0px 18px 2px;\n    font-size: 17px;\n  }\n  .dropdown-menu[_ngcontent-%COMP%]{\n    min-width: 80px !important;\n  }\n  .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    border-bottom: 1px solid gainsboro;\n  }\n  .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{\n    border-bottom: none;\n  }\n  .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\n    background-color: #ff8533 !important;\n  }\n  .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{  \n    color: #fff !important;\n  }\n .btn.btn-primary[_ngcontent-%COMP%]{background-color:#FF8533;border-color:transparent;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invoice-list',
            templateUrl: './invoice-list.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"]
          }, {
            type: _services_ticket_service__WEBPACK_IMPORTED_MODULE_10__["TicketService"]
          }, {
            type: _services_invoice_service__WEBPACK_IMPORTED_MODULE_11__["InvoiceService"]
          }, {
            type: _services_property_service__WEBPACK_IMPORTED_MODULE_12__["PropertyService"]
          }, {
            type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_13__["UserlogService"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]
          }, {
            type: _services_quote_service__WEBPACK_IMPORTED_MODULE_15__["QuoteService"]
          }, {
            type: _services_property_service__WEBPACK_IMPORTED_MODULE_12__["PropertyService"]
          }, {
            type: _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_16__["GenicProfileService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wsfL":
    /*!*********************************************************!*\
      !*** ./src/app/application/invoices/invoices.module.ts ***!
      \*********************************************************/

    /*! exports provided: InvoicesModule */

    /***/
    function wsfL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicesModule", function () {
        return InvoicesModule;
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


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "7itd");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var ngx_select2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-select2 */
      "u1nn");
      /* harmony import */


      var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-select-dropdown */
      "8bGj");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./invoice-add/invoice-add.component */
      "bi+q");
      /* harmony import */


      var _invoice_change_status_popup_invoice_change_status_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./invoice-change-status-popup/invoice-change-status-popup.component */
      "IEzf");
      /* harmony import */


      var _invoice_customer_popup_invoice_customer_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./invoice-customer-popup/invoice-customer-popup.component */
      "EhMi");
      /* harmony import */


      var _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./invoice-details/invoice-details.component */
      "lzB+");
      /* harmony import */


      var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./invoice-list/invoice-list.component */
      "w7eF");
      /* harmony import */


      var _invoice_payment_and_receipt_invoice_payment_and_receipt_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./invoice-payment-and-receipt/invoice-payment-and-receipt.component */
      "redt");
      /* harmony import */


      var _invoice_plane_invoice_customer_property_popup_invoice_plane_invoice_customer_property_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./invoice-plane-invoice-customer-property-popup/invoice-plane-invoice-customer-property-popup.component */
      "/pTQ");
      /* harmony import */


      var _invoice_ticket_popup_invoice_ticket_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./invoice-ticket-popup/invoice-ticket-popup.component */
      "wvCZ");
      /* harmony import */


      var _invoices_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./invoices.component */
      "PtHM");
      /* harmony import */


      var src_app_generic_utils_Reminder_Module_ReminderModule_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! src/app/generic-utils/Reminder-Module/ReminderModule.module */
      "wTVD");
      /* harmony import */


      var src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module */
      "A6Rf");

      var routes = [{
        path: '',
        component: _invoices_component__WEBPACK_IMPORTED_MODULE_25__["InvoicesComponent"],
        children: [{
          path: '',
          component: _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_21__["InvoiceListComponent"]
        }, {
          path: 'invoice-add',
          component: _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceAddComponent"]
        }, {
          path: 'invoice-edit',
          component: _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceAddComponent"]
        }, {
          path: 'invoice-details',
          component: _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_20__["InvoiceDetailsComponent"]
        }, {
          path: 'invoice-add-customer',
          component: _invoice_customer_popup_invoice_customer_popup_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceCustomerPopupComponent"]
        }, {
          path: 'invoice-add-ticket',
          component: _invoice_ticket_popup_invoice_ticket_popup_component__WEBPACK_IMPORTED_MODULE_24__["InvoiceTicketPopupComponent"]
        }, {
          path: 'invoice-add-Plane-Invoice-cust-property',
          component: _invoice_plane_invoice_customer_property_popup_invoice_plane_invoice_customer_property_popup_component__WEBPACK_IMPORTED_MODULE_23__["InvoicePlaneInvoiceCustomerPropertyPopupComponent"]
        }, {
          path: 'invoice-add-plane-url',
          component: _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceAddComponent"]
        }, {
          path: 'invoice-change-status',
          component: _invoice_change_status_popup_invoice_change_status_popup_component__WEBPACK_IMPORTED_MODULE_18__["InvoiceChangeStatusPopupComponent"]
        }, {
          path: 'invoice-from-quote',
          component: _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceAddComponent"]
        }, {
          path: 'invoice-from-ticket',
          component: _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceAddComponent"]
        }, {
          path: 'invoice-payment-and-receipt',
          component: _invoice_payment_and_receipt_invoice_payment_and_receipt_component__WEBPACK_IMPORTED_MODULE_22__["InvoicePaymentAndReceiptComponent"]
        }]
      }];

      var InvoicesModule = function InvoicesModule() {
        _classCallCheck(this, InvoicesModule);
      };

      InvoicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InvoicesModule
      });
      InvoicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InvoicesModule_Factory(t) {
          return new (t || InvoicesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"], ngx_select2__WEBPACK_IMPORTED_MODULE_14__["LSelect2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__["SelectDropDownModule"], src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_27__["TicketIconAttachmentModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_generic_utils_Reminder_Module_ReminderModule_module__WEBPACK_IMPORTED_MODULE_26__["ReminderModuleModule"]], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoicesModule, {
          declarations: [_invoices_component__WEBPACK_IMPORTED_MODULE_25__["InvoicesComponent"], _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_21__["InvoiceListComponent"], _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceAddComponent"], _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_20__["InvoiceDetailsComponent"], _invoice_customer_popup_invoice_customer_popup_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceCustomerPopupComponent"], _invoice_ticket_popup_invoice_ticket_popup_component__WEBPACK_IMPORTED_MODULE_24__["InvoiceTicketPopupComponent"], _invoice_plane_invoice_customer_property_popup_invoice_plane_invoice_customer_property_popup_component__WEBPACK_IMPORTED_MODULE_23__["InvoicePlaneInvoiceCustomerPropertyPopupComponent"], _invoice_change_status_popup_invoice_change_status_popup_component__WEBPACK_IMPORTED_MODULE_18__["InvoiceChangeStatusPopupComponent"], _invoice_payment_and_receipt_invoice_payment_and_receipt_component__WEBPACK_IMPORTED_MODULE_22__["InvoicePaymentAndReceiptComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"], ngx_select2__WEBPACK_IMPORTED_MODULE_14__["LSelect2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__["SelectDropDownModule"], src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_27__["TicketIconAttachmentModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_generic_utils_Reminder_Module_ReminderModule_module__WEBPACK_IMPORTED_MODULE_26__["ReminderModuleModule"]],
          exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoicesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_invoices_component__WEBPACK_IMPORTED_MODULE_25__["InvoicesComponent"], _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_21__["InvoiceListComponent"], _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceAddComponent"], _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_20__["InvoiceDetailsComponent"], _invoice_customer_popup_invoice_customer_popup_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceCustomerPopupComponent"], _invoice_ticket_popup_invoice_ticket_popup_component__WEBPACK_IMPORTED_MODULE_24__["InvoiceTicketPopupComponent"], _invoice_plane_invoice_customer_property_popup_invoice_plane_invoice_customer_property_popup_component__WEBPACK_IMPORTED_MODULE_23__["InvoicePlaneInvoiceCustomerPropertyPopupComponent"], _invoice_change_status_popup_invoice_change_status_popup_component__WEBPACK_IMPORTED_MODULE_18__["InvoiceChangeStatusPopupComponent"], _invoice_payment_and_receipt_invoice_payment_and_receipt_component__WEBPACK_IMPORTED_MODULE_22__["InvoicePaymentAndReceiptComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"], ngx_select2__WEBPACK_IMPORTED_MODULE_14__["LSelect2Module"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_15__["SelectDropDownModule"], src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_27__["TicketIconAttachmentModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_generic_utils_Reminder_Module_ReminderModule_module__WEBPACK_IMPORTED_MODULE_26__["ReminderModuleModule"]],
            exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wvCZ":
    /*!*********************************************************************************************!*\
      !*** ./src/app/application/invoices/invoice-ticket-popup/invoice-ticket-popup.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: InvoiceTicketPopupComponent */

    /***/
    function wvCZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceTicketPopupComponent", function () {
        return InvoiceTicketPopupComponent;
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


      var _invoice_plane_invoice_customer_property_popup_invoice_plane_invoice_customer_property_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../invoice-plane-invoice-customer-property-popup/invoice-plane-invoice-customer-property-popup.component */
      "/pTQ");
      /* harmony import */


      var src_app_services_property_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/property.model */
      "4ebh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/invoice.service */
      "py7r");
      /* harmony import */


      var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/customer.service */
      "0zL+");
      /* harmony import */


      var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/property.service */
      "Pffd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function InvoiceTicketPopupComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceTicketPopupComponent_div_12_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var x_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onTicketClick(x_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceTicketPopupComponent_div_12_Template_p_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var x_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onTicketClick(x_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", x_r2.CustomerName, " (", x_r2.TicketId, ") | ", x_r2.Status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r2.Title, " ");
        }
      }

      function InvoiceTicketPopupComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceTicketPopupComponent_div_17_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var q_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onQuoteClick(q_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var q_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", q_r6.CustomerName, " (", q_r6.QuoteId, ") | Accepted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r6.JobTitle, " ");
        }
      }

      var InvoiceTicketPopupComponent = /*#__PURE__*/function () {
        function InvoiceTicketPopupComponent(router, rout, http, dialog, loginservice, dialogRef, invoiceService, customerService, propertyservice) {
          var _this43 = this;

          _classCallCheck(this, InvoiceTicketPopupComponent);

          this.router = router;
          this.rout = rout;
          this.http = http;
          this.dialog = dialog;
          this.loginservice = loginservice;
          this.dialogRef = dialogRef;
          this.invoiceService = invoiceService;
          this.customerService = customerService;
          this.propertyservice = propertyservice;
          this.PropertyAdrresssVisible = false;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this43.currentUser = x;
          });
        }

        _createClass(InvoiceTicketPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this44 = this;

            this.invoiceService.getInvoiceTicketList(this.customerService.formData.Id, this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this44.LocalTicketList = [];
                  _this44.LocalTicketList = _this44.invoiceService.InvoiceTicketList = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
            this.invoiceService.getInvoiceQuoteList(this.customerService.formData.Id, this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this44.LocalQuoteList = [];
                  _this44.LocalQuoteList = _this44.invoiceService.QuoteList = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onTicketClick",
          value: function onTicketClick(x) {
            if (x === undefined) {
              this.dialogRef.close();
            } else {
              this.dialogRef.close({
                x: x
              });
            }
          }
        }, {
          key: "onQuoteClick",
          value: function onQuoteClick(q) {
            if (q === undefined) {
              this.dialogRef.close();
            } else {
              this.dialogRef.close({
                q: q
              });
            }
          }
        }, {
          key: "OpenAddClienPropertyForPlaneInvoiceDialog",
          value: function OpenAddClienPropertyForPlaneInvoiceDialog() {
            var _this45 = this;

            this.invoiceService.postTempInvoice(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this45.invoiceService.InvoiceData = response.result;

                  _this45.dialogRef.close();
                }
              }
            }, function (error) {
              return console.log(error);
            });
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.width = '50%';
            dialogConfig.data = {};
            this.dialog.open(_invoice_plane_invoice_customer_property_popup_invoice_plane_invoice_customer_property_popup_component__WEBPACK_IMPORTED_MODULE_2__["InvoicePlaneInvoiceCustomerPropertyPopupComponent"], dialogConfig).afterClosed().subscribe(function (res) {
              if (res !== '') {
                if (res === undefined) {
                  _this45.router.navigate(['/properties/property-add/'], {
                    queryParams: {
                      ' id': _this45.invoiceService.InvoiceData.CustomerId,
                      ' name': _this45.invoiceService.InvoiceData.CustomerName
                    }
                  });
                } else {
                  _this45.PropertyAdrresssVisible = true;
                  _this45.invoiceService.InvoiceData.CustomerName = _this45.customerService.formData.NameTitle + ' ' + _this45.customerService.formData.FirstName + ' ' + _this45.customerService.formData.LastName;
                  _this45.invoiceService.InvoiceData.CustomerId = res.a.CustomerId;
                  _this45.invoiceService.InvoiceData.PropertyId = res.a.Id; // this.invoiceService.InvoiceData.CustomerAddress = res.a.Id;
                  // this.invoiceService.InvoiceData.CustomerEmail = res.a.Id;
                  // this.invoiceService.InvoiceData.CustomerContactNo = res.a.Id;

                  _this45.propertyservice.formData = new src_app_services_property_model__WEBPACK_IMPORTED_MODULE_3__["Property"]();
                  _this45.propertyservice.formData = Object.assign({}, res.a);
                }
              }
            });
          }
        }, {
          key: "onQuoteKeypress",
          value: function onQuoteKeypress(value) {
            this.LocalQuoteList = this.invoiceService.QuoteList.filter(function (item) {
              return item.JobTitle.toLowerCase().match(value.toLowerCase()) || item.CompanyName.toLowerCase().match(value.toLowerCase()) || item.CustomerName.toLowerCase().match(value.toLowerCase()) || item.CustomerEmail.toLowerCase().match(value.toLowerCase()) || item.CustomerContactNo.toLowerCase().match(value.toLowerCase()) || item.QuoteId.toLowerCase().match(value.toLowerCase());
            });
          }
        }, {
          key: "onTicketKeypress",
          value: function onTicketKeypress(value) {
            this.LocalTicketList = this.invoiceService.InvoiceTicketList.filter(function (item) {
              return item.Title.toLowerCase().match(value.toLowerCase()) || item.CustomerName.toLowerCase().match(value.toLowerCase()) || item.CustomerEmail.toLowerCase().match(value.toLowerCase()) || item.CustomerAddress.toLowerCase().match(value.toLowerCase());
            });
          }
        }]);

        return InvoiceTicketPopupComponent;
      }();

      InvoiceTicketPopupComponent.ɵfac = function InvoiceTicketPopupComponent_Factory(t) {
        return new (t || InvoiceTicketPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_9__["PropertyService"]));
      };

      InvoiceTicketPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvoiceTicketPopupComponent,
        selectors: [["app-invoice-ticket-popup"]],
        decls: 22,
        vars: 4,
        consts: [[1, "modal-header", "select-new-properties"], ["id", "exampleModalLabel", 1, "modal-title"], ["mat-dialog-close", "", 1, "btn", "btn-default", "pull-right"], [1, "modal-body"], [1, "row"], [1, "col-md-5"], [1, "row", "col-md-12"], ["type", "email", "placeholder", "Search ticket...", 1, "form-control", 3, "keydown", "keyup"], ["class", "kt-widget4__info ticketDetailsInfo", 4, "ngFor", "ngForOf"], ["type", "email", "placeholder", "Search Quote...", 1, "form-control", 3, "keydown", "keyup"], ["class", "kt-widget4__info ticketDetailsInfo invoice-select-text", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["on", "", 1, "btn", "btn-brand", "text-white", 3, "click"], [1, "la", "la-plus"], [1, "kt-widget4__info", "ticketDetailsInfo"], [1, "kt-widget4__title", 3, "click"], [1, "kt-widget4__text", 2, "cursor", "pointer", 3, "click"], [1, "kt-widget4__info", "ticketDetailsInfo", "invoice-select-text"], [1, "kt-widget4__text"]],
        template: function InvoiceTicketPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function InvoiceTicketPopupComponent_Template_input_keydown_11_listener($event) {
              return ctx.onTicketKeypress($event.target.value);
            })("keyup", function InvoiceTicketPopupComponent_Template_input_keyup_11_listener($event) {
              return ctx.onTicketKeypress($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvoiceTicketPopupComponent_div_12_Template, 5, 4, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Which quote would you like to select for invoice ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function InvoiceTicketPopupComponent_Template_input_keydown_16_listener($event) {
              return ctx.onQuoteKeypress($event.target.value);
            })("keyup", function InvoiceTicketPopupComponent_Template_input_keyup_16_listener($event) {
              return ctx.onQuoteKeypress($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InvoiceTicketPopupComponent_div_17_Template, 6, 3, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceTicketPopupComponent_Template_a_click_19_listener() {
              return ctx.OpenAddClienPropertyForPlaneInvoiceDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Create new Invoice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select Quote or ", ctx.currentUser.Ticket, " or create new Invoice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Which ", ctx.currentUser.Ticket, " would you like to select for invoice ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.LocalTicketList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.LocalQuoteList);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
        styles: [".btn-brand[_ngcontent-%COMP%]{background-color:#ff8533;border-color: #ff8533;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]{background: #c3e7fa;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.7rem;background-color:#0084CA;color:white;}\r\n.modal-header.select-new-properties[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:black;font-size:20px;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]{background-color:#f1f1f1;}\r\n.property-modal-body.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;}\r\n.property-modal-body[_ngcontent-%COMP%]   .forn-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.property-modal-bodya[_ngcontent-%COMP%]   .btn-brand[_ngcontent-%COMP%]{background-color:#0084CA;}\r\n.new_clients_properties_body[_ngcontent-%COMP%]{background-color:white;border:none;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:first-child{padding-top:15px;}\r\n.kt-widget4[_ngcontent-%COMP%]   .kt-widget4__item[_ngcontent-%COMP%]:nth-child(even){background-color:#c3e7fa38;}\r\n.kt-widget4.kt-scroll.ps[_ngcontent-%COMP%]{overflow-y:auto !important;padding-right:10px;}\r\n.kt-font-brand[_ngcontent-%COMP%]{color:#aeaeae !important;font-size:12px !important;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar{width: 6px;background-color: #F5F5F5;}\r\n#style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color: #0084CA;}\r\n.customer-list-view-info.property-list-dynamic-class[_ngcontent-%COMP%]   .btn-label-primary[_ngcontent-%COMP%]{background-color:#c3e7fa ;color: #0084CA}\r\n.customer-list-main-section[_ngcontent-%COMP%]   .kt-header__topbar-item.kt-header__topbar-item--search.dropdown.bootm-filter[_ngcontent-%COMP%]{margin-bottom:20px;;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]{background-color:#FF8533;color:white;}\r\n.kt-selectpicker.btn.btn-label-success.pull-right[_ngcontent-%COMP%]:focus{background-color:#c3e7fa;color:#0084CA;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .new-properties-popupcreate-text[_ngcontent-%COMP%]{color:white;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:white;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{background-color:#0084ca;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{padding:0px 0px;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{padding:8px 20px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]{font-size:20px;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{font-size:20px;}\r\n.property-applications[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0.4rem !important;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;}\r\n.customer-list-view-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;}\r\n.create_properties-filter_form-1[_ngcontent-%COMP%]{box-shadow:10px 10px 10px #d7d7d7;}\r\n.sebm-google-map-container[_ngcontent-%COMP%]{height:100% !important;}\r\n.invoice-select-text[_ngcontent-%COMP%] { cursor: pointer;}\r\n.invoice-select-text[_ngcontent-%COMP%]:hover { background-color: #ecf7fd; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vaW52b2ljZXMvaW52b2ljZS10aWNrZXQtcG9wdXAvaW52b2ljZS10aWNrZXQtcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDO0FBQzFELG9DQUFvQyxtQkFBbUIsQ0FBQztBQUN4RCx5Q0FBeUMsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3RHLHVDQUF1QyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ2xFLGdDQUFnQyx3QkFBd0IsQ0FBQztBQUN6RCxrQ0FBa0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDN0UsaUNBQWlDLGtCQUFrQixDQUFDO0FBQ3BELGlDQUFpQyx3QkFBd0IsQ0FBQztBQUMxRCw2QkFBNkIsc0JBQXNCLENBQUMsV0FBVyxDQUFDO0FBQ2hFLDBDQUEwQyxnQkFBZ0IsQ0FBQztBQUMzRCw4Q0FBOEMsMEJBQTBCLENBQUM7QUFDekUseUJBQXlCLDBCQUEwQixDQUFDLGtCQUFrQixDQUFDO0FBQ3ZFLGVBQWUsd0JBQXdCLENBQUMseUJBQXlCLENBQUM7QUFDbEUsNEJBQTRCLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztBQUNqRSxrQ0FBa0MseUJBQXlCLENBQUM7QUFDNUQsd0VBQXdFLHlCQUF5QixDQUFDLGNBQWM7QUFDaEgseUdBQXlHLGtCQUFrQixFQUFFO0FBQzdILGtEQUFrRCx3QkFBd0IsQ0FBQyxXQUFXLENBQUM7QUFDdkYsd0RBQXdELHdCQUF3QixDQUFDLGFBQWEsQ0FBQztBQUMvRixxRUFBcUUsV0FBVyxDQUFDO0FBQ2pGLDZDQUE2QyxXQUFXLENBQUM7QUFDekQsMkRBQTJELHdCQUF3QixDQUFDO0FBQ3BGLG1FQUFtRSxlQUFlLENBQUM7QUFDbkYsMkRBQTJELGdCQUFnQixDQUFDO0FBQzVFLDJDQUEyQyxjQUFjLENBQUM7QUFDMUQsaUNBQWlDLGNBQWMsQ0FBQztBQUNoRCx1QkFBdUIsZ0JBQWdCLENBQUM7QUFDeEMsMkNBQTJDLCtCQUErQixDQUFDO0FBQzNFLDJCQUEyQixhQUFhLENBQUM7QUFDekMsNkJBQTZCLGlCQUFpQixDQUFDO0FBQy9DLGlDQUFpQyxpQ0FBaUMsQ0FBQztBQUNuRSwyQkFBMkIsc0JBQXNCLENBQUM7QUFDbEQsdUJBQXVCLGVBQWUsQ0FBQztBQUN2Qyw2QkFBNkIseUJBQXlCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9pbnZvaWNlcy9pbnZvaWNlLXRpY2tldC1wb3B1cC9pbnZvaWNlLXRpY2tldC1wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1icmFuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjg1MzM7Ym9yZGVyLWNvbG9yOiAjZmY4NTMzO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXN7YmFja2dyb3VuZDogI2MzZTdmYTt9XHJcbi5tb2RhbC1oZWFkZXIuc2VsZWN0LW5ldy1wcm9wZXJ0aWVzIC5idG57cGFkZGluZzogMC4yNXJlbSAwLjdyZW07YmFja2dyb3VuZC1jb2xvcjojMDA4NENBO2NvbG9yOndoaXRlO31cclxuLm1vZGFsLWhlYWRlci5zZWxlY3QtbmV3LXByb3BlcnRpZXMgaDV7Y29sb3I6YmxhY2s7Zm9udC1zaXplOjIwcHg7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keS5tb2RhbC1ib2R5e2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt9XHJcbi5wcm9wZXJ0eS1tb2RhbC1ib2R5Lm1vZGFsLWJvZHkgcHtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2s7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keSAuZm9ybi1ncm91cHttYXJnaW4tYm90dG9tOjE1cHg7fVxyXG4ucHJvcGVydHktbW9kYWwtYm9keWEgLmJ0bi1icmFuZHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7fVxyXG4ubmV3X2NsaWVudHNfcHJvcGVydGllc19ib2R5e2JhY2tncm91bmQtY29sb3I6d2hpdGU7Ym9yZGVyOm5vbmU7fVxyXG4ua3Qtd2lkZ2V0NCAua3Qtd2lkZ2V0NF9faXRlbTpmaXJzdC1jaGlsZHtwYWRkaW5nLXRvcDoxNXB4O31cclxuLmt0LXdpZGdldDQgLmt0LXdpZGdldDRfX2l0ZW06bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2MzZTdmYTM4O31cclxuLmt0LXdpZGdldDQua3Qtc2Nyb2xsLnBze292ZXJmbG93LXk6YXV0byAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6MTBweDt9XHJcbi5rdC1mb250LWJyYW5ke2NvbG9yOiNhZWFlYWUgIWltcG9ydGFudDtmb250LXNpemU6MTJweCAhaW1wb3J0YW50O31cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOiA2cHg7YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTt9XHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NENBO31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvLnByb3BlcnR5LWxpc3QtZHluYW1pYy1jbGFzcyAuYnRuLWxhYmVsLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojYzNlN2ZhIDtjb2xvcjogIzAwODRDQX1cclxuLmN1c3RvbWVyLWxpc3QtbWFpbi1zZWN0aW9uIC5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0tLXNlYXJjaC5kcm9wZG93bi5ib290bS1maWx0ZXJ7bWFyZ2luLWJvdHRvbToyMHB4Ozt9XHJcbi5rdC1zZWxlY3RwaWNrZXIuYnRuLmJ0bi1sYWJlbC1zdWNjZXNzLnB1bGwtcmlnaHR7YmFja2dyb3VuZC1jb2xvcjojRkY4NTMzO2NvbG9yOndoaXRlO31cclxuLmt0LXNlbGVjdHBpY2tlci5idG4uYnRuLWxhYmVsLXN1Y2Nlc3MucHVsbC1yaWdodDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiNjM2U3ZmE7Y29sb3I6IzAwODRDQTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5uZXctcHJvcGVydGllcy1wb3B1cGNyZWF0ZS10ZXh0e2NvbG9yOndoaXRlO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5hbGVydC1pY29uIGl7Y29sb3I6d2hpdGU7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwODRjYTt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybXtwYWRkaW5nOjBweCAwcHg7fVxyXG4uY3JlYXQtcHJvcGVydGllcy1mb3JtLW1haW4tc2VjdGlvbiAuYWxlcnQuYWxlcnQtc2Vjb25kYXJ5e3BhZGRpbmc6OHB4IDIwcHg7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0gLmFsZXJ0LWljb257Zm9udC1zaXplOjIwcHg7fVxyXG4ubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtmb250LXNpemU6MjBweDt9XHJcbi5wcm9wZXJ0eS1hcHBsaWNhdGlvbnN7cGFkZGluZzowcHggMTVweDt9XHJcbi5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybSAuZm9ybS1ncm91cHttYXJnaW4tYm90dG9tOjAuNHJlbSAhaW1wb3J0YW50O31cclxuLmN1c3RvbWVyLWxpc3Qtdmlldy1pbmZvIGF7ZGlzcGxheTpibG9jazt9XHJcbi5jdXN0b21lci1saXN0LXZpZXctaW5mbyBhIGl7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uY3JlYXRlX3Byb3BlcnRpZXMtZmlsdGVyX2Zvcm0tMXtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4ICNkN2Q3ZDc7fVxyXG4uc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcntoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O31cclxuLmludm9pY2Utc2VsZWN0LXRleHQgeyBjdXJzb3I6IHBvaW50ZXI7fVxyXG4uaW52b2ljZS1zZWxlY3QtdGV4dDpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICNlY2Y3ZmQ7IH1cclxuIl19 */", ".ticketDetailsInfo[_ngcontent-%COMP%]{\n  width: 100%;\n    border: 1px solid #2c77f41c;\n    padding: 5px 0 0 5px;\n}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceTicketPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invoice-ticket-popup',
            templateUrl: './invoice-ticket-popup.component.html',
            styleUrls: ['./invoice-ticket-popup.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: src_app_services_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"]
          }, {
            type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"]
          }, {
            type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_9__["PropertyService"]
          }];
        }, null);
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

        var _super3 = _createSuper(NgbDateToStringAdapter);

        function NgbDateToStringAdapter() {
          var _this46;

          _classCallCheck(this, NgbDateToStringAdapter);

          _this46 = _super3.apply(this, arguments);
          _this46.hour = 0;
          _this46.minute = 0;
          _this46.second = 0;
          return _this46;
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

    },

    /***/
    "xJsc":
    /*!****************************************************************************************!*\
      !*** ./src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: TicketIconAttachmentComponent */

    /***/
    function xJsc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketIconAttachmentComponent", function () {
        return TicketIconAttachmentComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TicketIconAttachmentComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.localPrependUrl, "/assets/svg/", ctx_r0.ext, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketIconAttachmentComponent_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r2.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.Path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketIconAttachmentComponent_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r3.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.Path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketIconAttachmentComponent_div_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.Path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketIconAttachmentComponent_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r5.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r5.localPrependUrl, "/assets/svg/", ctx_r5.ext, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function TicketIconAttachmentComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketIconAttachmentComponent_div_1_div_2_Template, 2, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketIconAttachmentComponent_div_1_div_3_Template, 2, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketIconAttachmentComponent_div_1_div_4_Template, 2, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketIconAttachmentComponent_div_1_div_5_Template, 2, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.ext);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "jpg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "jpeg");
        }
      }

      var TicketIconAttachmentComponent = /*#__PURE__*/function () {
        function TicketIconAttachmentComponent() {
          _classCallCheck(this, TicketIconAttachmentComponent);

          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        }

        _createClass(TicketIconAttachmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a;

            if (((_a = this.Name) === null || _a === void 0 ? void 0 : _a.length) > 0) {
              this.ext = this.Name.toLowerCase().split('.').pop();
            } else {
              this.ext = 'noimage';
            }
          }
        }]);

        return TicketIconAttachmentComponent;
      }();

      TicketIconAttachmentComponent.ɵfac = function TicketIconAttachmentComponent_Factory(t) {
        return new (t || TicketIconAttachmentComponent)();
      };

      TicketIconAttachmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TicketIconAttachmentComponent,
        selectors: [["generic-ticket-icon-attachment"]],
        inputs: {
          Name: "Name",
          Path: "Path",
          Status: "Status"
        },
        decls: 2,
        vars: 2,
        consts: [["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], [2, "width", "100px", 3, "title", "src"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]],
        template: function TicketIconAttachmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TicketIconAttachmentComponent_div_0_Template, 2, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketIconAttachmentComponent_div_1_Template, 6, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === 2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketIconAttachmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'generic-ticket-icon-attachment',
            template: "\n   \t<div class=\"col-md-12\" *ngIf=\"Status === 1\">\n        <img title=\"{{Name}}\" style=\"width:100px;\" src=\"{{localPrependUrl}}/assets/svg/{{ext}}.svg\">\n    </div>\n    <div class=\"col-md-12\" *ngIf=\"Status === 2\">\n        <div [ngSwitch]=\"ext\">\n              <div *ngSwitchCase=\"'png'\"><img title=\"{{Name}}\" style=\"width:100px;\" src=\"{{Path}}\"></div>\n              <div *ngSwitchCase=\"'jpg'\"><img title=\"{{Name}}\" style=\"width:100px;\" src=\"{{Path}}\"></div>\n              <div *ngSwitchCase=\"'jpeg'\"><img title=\"{{Name}}\" style=\"width:100px;\" src=\"{{Path}}\"></div>\n              <div *ngSwitchDefault><img title=\"{{Name}}\" style=\"width:100px;\" src=\"{{localPrependUrl}}/assets/svg/{{ext}}.svg\"></div>\n        </div>\n    </div>\n  "
          }]
        }], function () {
          return [];
        }, {
          Name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          Path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          Status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=application-invoices-invoices-module-es5.js.map