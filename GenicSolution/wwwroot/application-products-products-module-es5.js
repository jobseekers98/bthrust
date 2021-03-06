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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-products-products-module"], {
    /***/
    "1TFY":
    /*!*****************************************************************************!*\
      !*** ./src/app/application/products/product-list/product-list.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ProductListComponent */

    /***/
    function TFY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
        return ProductListComponent;
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


      var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/product.service */
      "Gdn9");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_downloads_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../services/downloads.service */
      "iHRC");
      /* harmony import */


      var _services_userlog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../services/userlog.service */
      "V05N");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../services/authentication.service */
      "ej43");
      /* harmony import */


      var _services_customer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../services/customer.service */
      "0zL+");
      /* harmony import */


      var _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../services/genicprofile.service */
      "bU6e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ProductListComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductListComponent_div_13_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r6.OpenAddProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Add ", ctx_r0.currentUser.Product, "");
        }
      }

      function ProductListComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Loading... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductListComponent_table_42_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductListComponent_table_42_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductListComponent_table_42_tr_18_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 85);
        }

        if (rf & 2) {
          var x_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", x_r11.ProductName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "", ctx_r13.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function ProductListComponent_table_42_tr_18_img_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 85);
        }

        if (rf & 2) {
          var x_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("title", x_r11.ProductName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", x_r11.ProductLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function ProductListComponent_table_42_tr_18_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r11.Description);
        }
      }

      function ProductListComponent_table_42_tr_18_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
        }

        if (rf & 2) {
          var x_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r11.Description.substring(0, 50), "...");
        }
      }

      function ProductListComponent_table_42_tr_18_td_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Purchase : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Sale : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" $", x_r11.PurchasePrice, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" $", x_r11.SalePrice, " ");
        }
      }

      function ProductListComponent_table_42_tr_18_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r11.Quantity);
        }
      }

      function ProductListComponent_table_42_tr_18_li_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductListComponent_table_42_tr_18_li_41_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var x_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r29.pupulateproduct(x_r11.Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductListComponent_table_42_tr_18_li_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductListComponent_table_42_tr_18_li_42_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r34);

            var x_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r32.detailsproduct(x_r11.Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "InactiveBackColor": a0
        };
      };

      function ProductListComponent_table_42_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ProductListComponent_table_42_tr_18_img_4_Template, 1, 2, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ProductListComponent_table_42_tr_18_img_5_Template, 1, 2, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Code: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductListComponent_table_42_tr_18_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var x_r11 = ctx.$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r35.detailsproduct(x_r11.Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Brand: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Category: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ProductListComponent_table_42_tr_18_div_25_Template, 2, 1, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ProductListComponent_table_42_tr_18_ng_template_26_Template, 1, 1, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ProductListComponent_table_42_tr_18_td_28_Template, 9, 2, "td", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ProductListComponent_table_42_tr_18_td_29_Template, 2, 1, "td", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "input", 77, 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductListComponent_table_42_tr_18_Template_input_change_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var x_r11 = ctx.$implicit;
            var i_r12 = ctx.index;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r37.onProductStatusChange(x_r11.Id, i_r12);
          })("ngModelChange", function ProductListComponent_table_42_tr_18_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var x_r11 = ctx.$implicit;
            return x_r11.Status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "label", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "td", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "ul", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, ProductListComponent_table_42_tr_18_li_41_Template, 3, 0, "li", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, ProductListComponent_table_42_tr_18_li_42_Template, 3, 0, "li", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](27);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](17, _c0, x_r11.Status === false));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r12 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r11.ProductLogo.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r11.ProductLogo.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r11.ProductId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r11.ProductName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r11.ProductBrand, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r11.ProductCategory, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r11.Description.length < 50)("ngIfElse", _r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r10.currentUser.Permissions.IsProductOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r10.currentUser.Permissions.IsProductOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "example_pm", i_r12, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", x_r11.Status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("for", "example_pm", i_r12, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.currentUser.Permissions.ProductEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.currentUser.Permissions.ProductView);
        }
      }

      function ProductListComponent_table_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Decsription");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ProductListComponent_table_42_th_11_Template, 2, 0, "th", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ProductListComponent_table_42_th_12_Template, 2, 0, "th", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ProductListComponent_table_42_tr_18_Template, 43, 19, "tr", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r2.currentUser.Product, "\xA0Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.currentUser.Permissions.IsProductOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.currentUser.Permissions.IsProductOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.service.Productlist);
        }
      }

      function ProductListComponent_ng_container_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var s_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", s_r39, " ");
        }
      }

      function ProductListComponent_ng_container_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var e_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", e_r40, " ");
        }
      }

      var ProductListComponent = /*#__PURE__*/function () {
        function ProductListComponent(titleService, service, toastr, router, downloadService, logService, loginservice, customerService, genicprofileservice) {
          var _this = this;

          _classCallCheck(this, ProductListComponent);

          this.titleService = titleService;
          this.service = service;
          this.toastr = toastr;
          this.router = router;
          this.downloadService = downloadService;
          this.logService = logService;
          this.loginservice = loginservice;
          this.customerService = customerService;
          this.genicprofileservice = genicprofileservice;
          this.dtOptions = {};
          this.dtTrigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.isDtInitialized = false;
          this.ErrorRes = [];
          this.SuccessRes = [];
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this.currentUser = x;
          });
          this.genicprofileservice.TicketFilter.IsReady = false;
          this.genicprofileservice.TicketFilter.IsReadyQuote = false;
          this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
          this.excelDataTemplatePath = this.localPrependUrl + '/assets/ExcelDataTemplate/ProductDatabaseSheet.xlsx';
          this.dtOptions = {
            pagingType: 'full_numbers',
            paging: true,
            ordering: false,
            lengthMenu: [10, 25, 50, 75, 100]
          };
        }

        _createClass(ProductListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (!this.currentUser.Permissions.ProductView) {
              this.router.navigate(['/dashboard']);
            }

            this.titleService.setTitle(this.currentUser.Product + 's | Genic Solution');
            this.service.getAllProductList(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this2.service.Productlist = response.result;

                  _this2.dtTrigger.next();
                }

                if (response.Message === 'failure') {
                  _this2.toastr.warning('warning', response.MessageDescription);
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
          key: "OpenAddProduct",
          value: function OpenAddProduct() {
            this.router.navigate(['/products/product-add/']);
          }
        }, {
          key: "pupulateproduct",
          value: function pupulateproduct(Id) {
            this.router.navigate(['/products/product-edit/' + Id]);
          }
        }, {
          key: "detailsproduct",
          value: function detailsproduct(Id) {
            this.router.navigate(['/products/product-details/' + Id]);
          }
        }, {
          key: "deleteproduct",
          value: function deleteproduct(Id, ProductName) {// if (confirm('Are you sure to delete this record?')) {
            //     this.service.deleteProductDetails(Id).then(
            //       res => {
            //         if (res.status === 204) {
            //           this.service.refrestProductlist();
            //           this.toastr.info('info', 'Deleted Successfully');
            //           const des = 'Product : ' + ProductName + 'has been removed ' +
            //           ', by user : ' + this.currentUser.UserName + ', on dated : ' + new Date();
            //           const Activity =  'Product : ' + ProductName + 'has been removed.';
            //           this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Product',
            //           Id, 'Removed', des, Activity ).subscribe();
            //          } else if (res.status === 404) {
            //           this.toastr.info('Not found', 'Record Not Found');
            //          }  else {
            //           this.toastr.error('Error', res.statusText);
            //          }
            //   },
            //   err => {
            //         this.toastr.error('error', err.statusText);
            //         console.log(err.error);
            //       });
            // }
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this3 = this;

            this.downloadService.downloadFromServer('product', this.currentUser.Token).then(function (blob) {
              Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, _this3.currentUser.Product + '_' + new Date().getTime() + '.xlsx');
            });
          } // bulk upload Product

        }, {
          key: "BulkProductUpload",
          value: function BulkProductUpload(file) {
            var _this4 = this;

            var ExcelfileToUpload = file.item(0);
            var filExt = ExcelfileToUpload.name.split('.');
            var Ext1 = filExt[1];

            if (Ext1 === 'xls' || Ext1 === 'xlsx') {
              var reader = new FileReader();

              reader.onload = function (event) {
                var ExcelLocalURL = event.target.result;

                _this4.customerService.SetAsDefaultValues();

                _this4.customerService.formData.Latitude = Ext1;
                _this4.customerService.formData.CustomerLogo = ExcelLocalURL.split(',')[1];

                _this4.customerService.ProductBulkUpload(_this4.currentUser.Id).subscribe(function (res) {
                  if (res) {
                    var TResponse = new Object();
                    TResponse = res;
                    _this4.ErrorRes = TResponse.ErrorResponse;
                    _this4.SuccessRes = TResponse.SuccessResponse;
                    var element = document.getElementById('openProductPop');
                    element.click(); // this.service.refrestProductlist(this.currentUser.Token);
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
          } //Product Status change

        }, {
          key: "onProductStatusChange",
          value: function onProductStatusChange(Id, index) {
            var _this5 = this;

            this.service.Productlist[index].Status;
            this.service.onProductStatusChange(this.currentUser.Token, Id).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this5.toastr.info(response.MessageDescription);
                }

                if (response.Message === 'failure') {
                  _this5.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return ProductListComponent;
      }();

      ProductListComponent.??fac = function ProductListComponent_Factory(t) {
        return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_userlog_service__WEBPACK_IMPORTED_MODULE_10__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_12__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__["GenicProfileService"]));
      };

      ProductListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductListComponent,
        selectors: [["app-products"]],
        viewQuery: function ProductListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 83,
        vars: 10,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__toolbar"], ["class", "kt-subheader__wrapper", 4, "ngIf"], [1, "kt-subheader__wrapper"], ["on", "", "id", "openProductPop", "data-toggle", "modal", "data-target", "#BuidUploadPop", 1, "btn", "btn-brand", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-file"], [1, "customer-list-main-section"], [1, "kt-widget17"], [1, "kt-widget17__stats"], [1, "kt-section", "kt-drop-section"], [1, "kt-section__content"], [1, "row"], [1, "col-md-12", "no-spacing"], [1, ""], [1, "col"], [1, "btn-group"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "dropdown", "bootm-filter"], [1, "kt-header__topbar-wrapper"], [1, "kt-portlet__body", "customer-listing-datatable"], ["id", "list-panel", 1, "panel", "panel-primary", "list-panel"], [1, "panel-heading", "list-panel-heading"], [1, "panel-title", "list-panel-title"], [1, "fa", "fa-list"], [1, "btnexport"], ["href", "javascript:void(0)", 1, "btnexportToExcel", 3, "click"], [1, "panel-body"], ["class", " col-md-12 alert alert-info", 4, "ngIf"], ["datatable", "", "class", "table table-striped- table-bordered table-hover table-checkable", 4, "ngIf"], ["id", "BuidUploadPop", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "myManFaContent"], [1, "modal-header", 2, "background-color", "aqua"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body", "my-Model-body"], [1, "ExcelUpladRule"], [1, "col-md-6", "llf"], [1, "uploaddd"], ["on", "", "target", "_blank", 1, "btn", "btn-brand", "text-white", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "col-md-6", "rrd"], ["on", "", "data-toggle", "modal", "data-target", "#BuidUploadPop", 1, "btn", "btn-brand", "text-white", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], ["BulkUpload", ""], [1, "SuccessSection"], [4, "ngFor", "ngForOf"], [1, "errorSection"], ["href", "javascript:;", 1, "btn", "btn-brand", 2, "background-color", "#ff8533", "border-color", "#ff8533", 3, "click"], [1, "fa", "fa-plus"], [1, "col-md-12", "alert", "alert-info"], ["datatable", "", 1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable"], [2, "width", "2%"], [2, "width", "7%"], [2, "width", "30%"], [2, "width", "25%"], ["style", "width: 15%;", 4, "ngIf"], ["style", "width: 5%;", 4, "ngIf"], [2, "width", "15%"], ["class", "customer-list-view-info", 3, "ngClass", 4, "ngFor", "ngForSync", "ngForOf"], [2, "width", "5%"], [1, "customer-list-view-info", 3, "ngClass"], ["width", "60px", "class", "img-thumbnail", "alt", "pic", 3, "title", "src", 4, "ngIf"], [1, "btn", "btn-label-primary"], ["href", "javascript:;", 3, "click"], [4, "ngIf", "ngIfElse"], ["descriptioncontent", ""], [4, "ngIf"], [1, "custom-switch", "custom-switch-label-yesno", "pl-0"], ["name", "x.Status", "type", "checkbox", 1, "custom-switch-input", "ng-valid", "ng-dirty", "ng-touched", 3, "id", "ngModel", "change", "ngModelChange"], ["u.IsActive", "ngModel"], [1, "custom-switch-btn", 3, "for"], [1, "padd-top-0"], [1, "btn-group", "btn-group-sm"], ["href", "javascript:;", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", 2, "border", "#1dc9b7"], [1, "caret"], [1, "dropdown-menu"], ["width", "60px", "alt", "pic", 1, "img-thumbnail", 3, "title", "src"], ["role", "alert", 1, "alert-alert-success"], ["role", "alert", 1, "alert-alert-danger"]],
        template: function ProductListComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ProductListComponent_div_13_Template, 4, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Bulk Upload ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h1", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductListComponent_Template_a_click_38_listener() {
              return ctx.exportAsXLSX();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Export to Excel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, ProductListComponent_div_41_Template, 2, 0, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, ProductListComponent_table_42_Template, 19, 4, "table", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "1.) All * fields are mendatory.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "2.) Do not remove first row header of template file.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "3.) Do not change header name.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Download sample data template...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Sample Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Select Excel sheet and upload...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductListComponent_Template_a_click_73_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](77);

              return _r3.click();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " Bulk Upload ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "input", 51, 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductListComponent_Template_input_change_76_listener($event) {
              return ctx.BulkProductUpload($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, ProductListComponent_ng_container_80_Template, 3, 1, "ng-container", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, ProductListComponent_ng_container_82_Template, 3, 1, "ng-container", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Product, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.ProductCreate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Product, " List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.service.Productlist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.Productlist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Product, " Bulk Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Product, " upload rules as follows:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", ctx.excelDataTemplatePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.SuccessRes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.ErrorRes);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"]],
        styles: [".btn-sm[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]{font-size: 0.875rem;line-height: 1.5;border-radius: 0;background: #0084CA !important;color: white !important;}\n    ul.myprodOptions[_ngcontent-%COMP%]{transform: translate3d(-111px, -118px, 0px) !important;}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-products',
            templateUrl: './product-list.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
          }, {
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _services_downloads_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"]
          }, {
            type: _services_userlog_service__WEBPACK_IMPORTED_MODULE_10__["UserlogService"]
          }, {
            type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]
          }, {
            type: _services_customer_service__WEBPACK_IMPORTED_MODULE_12__["CustomerService"]
          }, {
            type: _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_13__["GenicProfileService"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], {
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
    "HoCQ":
    /*!*********************************************************!*\
      !*** ./src/app/application/products/products.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProductsModule */

    /***/
    function HoCQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
        return ProductsModule;
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


      var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./product-add/product-add.component */
      "o+B/");
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./product-details/product-details.component */
      "RMnP");
      /* harmony import */


      var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./product-list/product-list.component */
      "1TFY");
      /* harmony import */


      var _products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./products.component */
      "SVph");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/ngb-date-to-string-adapter */
      "x8Rg");
      /* harmony import */


      var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/ngb-time-to-string-adapter */
      "dRK5");

      var routes = [{
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
        children: [{
          path: '',
          component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"]
        }, {
          path: 'product-add',
          component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"]
        }, {
          path: 'product-edit/:Id',
          component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"]
        }, {
          path: 'product-details/:Id',
          component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"]
        }]
      }];

      var ProductsModule = function ProductsModule() {
        _classCallCheck(this, ProductsModule);
      };

      ProductsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ProductsModule
      });
      ProductsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ProductsModule_Factory(t) {
          return new (t || ProductsModule)();
        },
        providers: [{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDateAdapter"],
          useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_16__["NgbDateToStringAdapter"]
        }, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTimeAdapter"],
          useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_17__["NgbTimeToStringAdapter"]
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProductsModule, {
          declarations: [_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"], _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"], _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"]],
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDateAdapter"],
              useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_16__["NgbDateToStringAdapter"]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTimeAdapter"],
              useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_17__["NgbTimeToStringAdapter"]
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RMnP":
    /*!***********************************************************************************!*\
      !*** ./src/app/application/products/product-details/product-details.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ProductDetailsComponent */

    /***/
    function RMnP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
        return ProductDetailsComponent;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["BatchItemManfacDateModalContent"];

      function ProductDetailsComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailsComponent_div_19_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r14.OpenAddProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Add ", ctx_r0.currentUser.Product, "");
        }
      }

      function ProductDetailsComponent_img_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 82);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "", ctx_r1.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function ProductDetailsComponent_div_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r2.service.formData.ProductLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function ProductDetailsComponent_tr_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Purchase Price:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.service.formData.PurchasePrice, " ");
        }
      }

      function ProductDetailsComponent_tr_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Sale Price:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r4.service.formData.SalePrice, " ");
        }
      }

      function ProductDetailsComponent_tr_99_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailsComponent_tr_99_ng_container_4_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r18.enableStockUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r16.service.formData.Quantity, "");
        }
      }

      function ProductDetailsComponent_tr_99_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductDetailsComponent_tr_99_ng_container_5_Template_input_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r20.numberOnly($event);
          })("keypress", function ProductDetailsComponent_tr_99_ng_container_5_Template_input_keypress_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r22.numberOnly($event);
          })("keyup", function ProductDetailsComponent_tr_99_ng_container_5_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r23.numberOnly($event);
          })("ngModelChange", function ProductDetailsComponent_tr_99_ng_container_5_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r24.service.formData.Quantity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailsComponent_tr_99_ng_container_5_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r25.updateStockQty();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r17.service.formData.Quantity);
        }
      }

      function ProductDetailsComponent_tr_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Stock Qty:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ProductDetailsComponent_tr_99_ng_container_4_Template, 6, 1, "ng-container", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ProductDetailsComponent_tr_99_ng_container_5_Template, 5, 1, "ng-container", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.StockQtyUpdate === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.StockQtyUpdate === true);
        }
      }

      function ProductDetailsComponent_tr_100_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailsComponent_tr_100_ng_container_4_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r28.enableLowStockUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r26.service.formData.LowStockTriggerQuantity, "");
        }
      }

      function ProductDetailsComponent_tr_100_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductDetailsComponent_tr_100_ng_container_5_Template_input_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r30.numberOnly($event);
          })("keypress", function ProductDetailsComponent_tr_100_ng_container_5_Template_input_keypress_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r32.numberOnly($event);
          })("keyup", function ProductDetailsComponent_tr_100_ng_container_5_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r33.numberOnly($event);
          })("ngModelChange", function ProductDetailsComponent_tr_100_ng_container_5_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r34.service.formData.LowStockTriggerQuantity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailsComponent_tr_100_ng_container_5_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r35.updateLowStock();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r27.service.formData.LowStockTriggerQuantity);
        }
      }

      function ProductDetailsComponent_tr_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Low Stock Trigger Quantity:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ProductDetailsComponent_tr_100_ng_container_4_Template, 6, 1, "ng-container", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ProductDetailsComponent_tr_100_ng_container_5_Template, 5, 1, "ng-container", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.LowStockQtyUpdate === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.LowStockQtyUpdate === true);
        }
      }

      function ProductDetailsComponent_tr_101_td_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailsComponent_tr_101_td_3_ng_container_1_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r40.enableWarrantyUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r38.service.formData.WarrantyDays, " Days ");
        }
      }

      function ProductDetailsComponent_tr_101_td_3_ng_container_2_label_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 99, 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductDetailsComponent_tr_101_td_3_ng_container_2_label_22_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

            return ctx_r51.customwarrantyShowMethor();
          })("ngModelChange", function ProductDetailsComponent_tr_101_td_3_ng_container_2_label_22_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r52);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

            return ctx_r53.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r46.service.formData.WarrantyDays);
        }
      }

      function ProductDetailsComponent_tr_101_td_3_ng_container_2_label_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductDetailsComponent_tr_101_td_3_ng_container_2_label_23_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

            return ctx_r54.customwarrantyShowMethor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_tr_101_td_3_ng_container_2_input_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function ProductDetailsComponent_tr_101_td_3_ng_container_2_input_24_Template_input_keyup_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

            return ctx_r56.customwarrantyShowMethor();
          })("keydown", function ProductDetailsComponent_tr_101_td_3_ng_container_2_input_24_Template_input_keydown_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r57);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

            return ctx_r58.customwarrantyShowMethor();
          })("change", function ProductDetailsComponent_tr_101_td_3_ng_container_2_input_24_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r57);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

            return ctx_r59.numberOnly($event);
          })("keypress", function ProductDetailsComponent_tr_101_td_3_ng_container_2_input_24_Template_input_keypress_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r57);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

            return ctx_r60.numberOnly($event);
          })("keyup", function ProductDetailsComponent_tr_101_td_3_ng_container_2_input_24_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r57);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

            return ctx_r61.numberOnly($event);
          })("ngModelChange", function ProductDetailsComponent_tr_101_td_3_ng_container_2_input_24_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r57);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

            return ctx_r62.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r48.service.formData.WarrantyDays);
        }
      }

      function ProductDetailsComponent_tr_101_td_3_ng_container_2_span_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "(in number of days)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_tr_101_td_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 92, 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductDetailsComponent_tr_101_td_3_ng_container_2_Template_input_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r63.customwarrantyShowMethor();
          })("ngModelChange", function ProductDetailsComponent_tr_101_td_3_ng_container_2_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r65.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 90 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 94, 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductDetailsComponent_tr_101_td_3_ng_container_2_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r66.customwarrantyShowMethor();
          })("ngModelChange", function ProductDetailsComponent_tr_101_td_3_ng_container_2_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r67.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " 180 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 95, 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductDetailsComponent_tr_101_td_3_ng_container_2_Template_input_change_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r68.customwarrantyShowMethor();
          })("ngModelChange", function ProductDetailsComponent_tr_101_td_3_ng_container_2_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r69.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " 270 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 96, 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductDetailsComponent_tr_101_td_3_ng_container_2_Template_input_change_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r70.customwarrantyShowMethor();
          })("ngModelChange", function ProductDetailsComponent_tr_101_td_3_ng_container_2_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r71.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " 365 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ProductDetailsComponent_tr_101_td_3_ng_container_2_label_22_Template, 5, 1, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ProductDetailsComponent_tr_101_td_3_ng_container_2_label_23_Template, 4, 0, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ProductDetailsComponent_tr_101_td_3_ng_container_2_input_24_Template, 1, 1, "input", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ProductDetailsComponent_tr_101_td_3_ng_container_2_span_25_Template, 2, 0, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailsComponent_tr_101_td_3_ng_container_2_Template_a_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r72.updateWarranty();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r39.service.formData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r39.service.formData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r39.service.formData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r39.service.formData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r39.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r39.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r39.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r39.customwarrantyShow);
        }
      }

      function ProductDetailsComponent_tr_101_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductDetailsComponent_tr_101_td_3_ng_container_1_Template, 6, 1, "ng-container", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductDetailsComponent_tr_101_td_3_ng_container_2_Template, 29, 8, "ng-container", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r36.WarrantyUpdate === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r36.WarrantyUpdate === true);
        }
      }

      function ProductDetailsComponent_tr_101_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_tr_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Warranty:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductDetailsComponent_tr_101_td_3_Template, 3, 2, "td", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ProductDetailsComponent_tr_101_td_4_Template, 2, 0, "td", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r7.service.formData.InWarranty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r7.service.formData.InWarranty);
        }
      }

      function ProductDetailsComponent_td_108_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDetailsComponent_td_108_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r73.SaveStockQty();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Save Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_div_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Loading... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_table_112_tr_14_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, x_r76.ExpiryDate, "MMM d, y"), "");
        }
      }

      function ProductDetailsComponent_table_112_tr_14_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Not available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_table_112_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ProductDetailsComponent_table_112_tr_14_td_13_Template, 3, 4, "td", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ProductDetailsComponent_table_112_tr_14_td_14_Template, 2, 0, "td", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r76 = ctx.$implicit;
          var i_r77 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r77 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r76.BatchNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r76.AvailableQuantity, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", x_r76.ProductUnit, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](12, 7, x_r76.ManufacturingDate, "MMM d, y"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r76.ExpiryDate !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r76.ExpiryDate === null);
        }
      }

      function ProductDetailsComponent_table_112_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Batch Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Batch Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Manufacturing Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Expiry Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ProductDetailsComponent_table_112_tr_14_Template, 15, 10, "tr", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r10.service.formData.ItemofLists);
        }
      }

      function ProductDetailsComponent_a_158_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var ProductDetailsComponent = /*#__PURE__*/function () {
        function ProductDetailsComponent(titleService, service, router, toastr, loginservice) {
          var _this6 = this;

          _classCallCheck(this, ProductDetailsComponent);

          this.titleService = titleService;
          this.service = service;
          this.router = router;
          this.toastr = toastr;
          this.loginservice = loginservice;
          this.IsValid = true;
          this.BatchNoIsValid = true;
          this.QuantityIsValid = true;
          this.ManufacturingDateIsValid = true;
          this.ExpiryDateIsValid = true;
          this.StockQtyUpdate = false;
          this.LowStockQtyUpdate = false;
          this.WarrantyUpdate = false;
          this.customwarrantyShow = false;
          this.currentUTCDate = new Date();
          this.ManufacminDate = new Date(1990, 0, 1);
          this.ManufacmaxDate = new Date(Date.UTC(this.currentUTCDate.getFullYear(), this.currentUTCDate.getMonth(), this.currentUTCDate.getDate(), 0, 0, 0));
          this.ExpiryminDate = new Date(Date.UTC(this.currentUTCDate.getFullYear(), this.currentUTCDate.getMonth(), this.currentUTCDate.getDate(), 0, 0, 0));
          this.ExpirymaxDate = new Date(Date.UTC(this.currentUTCDate.getFullYear() + 20, this.currentUTCDate.getMonth(), this.currentUTCDate.getDate(), 0, 0, 0));
          this.loginservice.currentUser.subscribe(function (x) {
            return _this6.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
          this.service.locatProductMovmentList = [];
          this.tempLoopQty = 0;
          this.tempExpiryDate = null;
          this.tempUsableQty = 0;
          this.tempManfacDateTochange = null;
          this.tempExpDateTochange = null;
          this.tempIndexToChangeDate = null;
        }

        _createClass(ProductDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            var Id = window.location.pathname.split('/').pop();

            if (!this.currentUser.Permissions.ProductView) {
              this.router.navigate(['/dashboard']);
            }

            this.titleService.setTitle(this.currentUser.Product + ' details | Genic Solution');
            this.service.getProductById(this.currentUser.Token, Id).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this7.service.formData = response.result;
                }
              }
            }, function (error) {
              return console.log(error);
            });
            setTimeout(function () {
              _this7.customwarrantyShowMethor();
            }, 1000);
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {}
        }, {
          key: "OpenAddProduct",
          value: function OpenAddProduct() {
            this.service.SetAsDefaultValue();
            this.router.navigate(['/products/product-add/']);
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
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
          key: "enableStockUpdate",
          value: function enableStockUpdate() {
            this.StockQtyUpdate = true;
          }
        }, {
          key: "enableLowStockUpdate",
          value: function enableLowStockUpdate() {
            this.LowStockQtyUpdate = true;
          }
        }, {
          key: "enableWarrantyUpdate",
          value: function enableWarrantyUpdate() {
            this.WarrantyUpdate = true;
          }
        }, {
          key: "updateStockQty",
          value: function updateStockQty() {
            this.StockQtyUpdate = false;
          }
        }, {
          key: "updateLowStock",
          value: function updateLowStock() {
            this.LowStockQtyUpdate = false;
          }
        }, {
          key: "updateWarranty",
          value: function updateWarranty() {
            this.WarrantyUpdate = false;
          }
        }, {
          key: "customwarrantyShowMethor",
          value: function customwarrantyShowMethor() {
            if (this.service.formData.WarrantyDays === undefined) {
              this.customwarrantyShow = false;
            } else {
              switch (this.service.formData.WarrantyDays.toString()) {
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
          key: "SaveStockQty",
          value: function SaveStockQty() {
            var _this8 = this;

            this.service.formData.ProductLogo = '';
            this.service.formData.WarrantyDays = Number(this.service.formData.WarrantyDays);
            this.service.putProductDetails(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this8.toastr.success('success', response.MessageDescription);

                  _this8.service.SetAsDefaultValue();

                  _this8.router.navigate(['/products/']);
                }

                if (response.Message === 'failure') {
                  _this8.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return ProductDetailsComponent;
      }();

      ProductDetailsComponent.??fac = function ProductDetailsComponent_Factory(t) {
        return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]));
      };

      ProductDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductDetailsComponent,
        selectors: [["app-product-details"]],
        viewQuery: function ProductDetailsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.BatchItemManfacDateModalContent = _t.first);
          }
        },
        decls: 228,
        vars: 52,
        consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/products", 1, "kt-subheader__breadcrumbs-link"], [1, "kt-subheader__toolbar"], ["class", "kt-subheader__wrapper", 4, "ngIf"], [1, "kt-subheader__wrapper"], ["_ngcontent-nqf-c9", "", "onclick", "window.history.back()", 1, "btn", "btn-primary", 2, "margin-right", "3px", "color", "white", "padding", "6px 10px 7px 10px", "cursor", "pointer"], [1, "customer-listing-detail-section"], [1, "col-md-12"], [1, "kt-portlet", "kt-portlet--height-fluid", "kt-widget19"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, ""], [1, "kt-widget19__wrapper"], [1, "kt-widget19__content"], [1, "kt-widget19__userpic"], [1, "row", "job-client-tabbing"], ["id", "product-detail-tabs", "role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-line", "nav-tabs-bold", "nav-tabs-line-3x", "nav-tabs-line-brand", "tabbing-jobs-client"], [1, "prod-custoTab", "nav-item", "service-nav-item"], ["data-toggle", "tab", "href", "#product_information", "id", "activeTab1", 1, "nav-link", "active"], [1, "kt-switch", "kt-switch--lg"], [1, "prod-", "nav-item", "service-nav-item", 2, "display", "none"], ["data-toggle", "tab", "href", "#product_AddStock", "id", "activeTab3", 1, "nav-link"], ["data-toggle", "tab", "href", "#product_returntodendor", "id", "activeTab4", 1, "nav-link"], ["id", "Idd", 1, "tab-content", "job-for-tab-content"], ["id", "product_information", "role", "tabpanel", 1, "tab-pane", "active"], [1, "row", "service-supports-heading", "padd-top-15", "custInfo"], [1, "col-md-6", "col-sm-6", "colxs-12"], [1, "support-service-incident-form"], [1, "support-service-serial-number"], [1, "kt-portlet__body"], [1, "kt-section", "ktrSection"], [1, "kt-section__content"], [1, "row"], [1, "col-sm-4", "col-md-4", "col-xl-4"], [1, "col-sm-12", "col-md-12", "col-xl-12"], [1, "form-group"], ["width", "320px", 3, "src", 4, "ngIf"], ["class", "upload-image img-thumbnail", 4, "ngIf"], [1, "col-sm-8", "col-md-8", "col-xl-8"], [1, "kt-wizard-v2__form"], [1, "table", "table-bordered", "tblproduct-info"], ["colspan", "3"], [1, "btn", "btn-label-primary"], [4, "ngIf"], ["colspan", "4", "style", "text-align: right;", 4, "ngIf"], [1, "row", 2, "display", "none"], ["class", " col-md-12 alert alert-info", 4, "ngIf"], ["class", "table table-striped- table-bordered table-hover table-checkable", 4, "ngIf"], ["id", "product_AddStock", "role", "tabpanel", 1, "tab-pane", 2, "display", "none"], ["width", "100%", 1, "client-server-table", "tbl-add-stock"], ["colspan", "1", "width", "20%"], ["colspan", "1"], ["colspan", ""], [1, "kt-badge", "kt-badge--brand", "kt-badge--inline", "kt-badge--pill"], [1, "btupdateBach"], ["hre", "javascript:void(0)", 4, "ngIf"], ["id", "product_returntodendor", "role", "tabpanel", 1, "tab-pane", 2, "display", "none"], ["hre", "javascript:void(0)"], ["id", "BatchManFacPopup", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "myManFaContent"], [1, "modal-header", 2, "background-color", "aqua"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body", "my-Model-body"], ["dateFormat", "yyyy-MMM-dd", "name", "CalendarResourceData.Date", 3, "minDate", "maxDate", "ngModel", "ngModelChange", "navigate"], ["CalendarResourceData.Date", "ngModel"], ["id", "BatchExpPopup", 1, "modal", "fade"], ["dateFormat", "yyyy-MMM-dd", "name", "CalendarExpResourceData.Date", 3, "minDate", "maxDate", "ngModel", "ngModelChange", "navigate"], ["CalendarExpResourceData.Date", "ngModel"], ["href", "javascript:;", 1, "btn", "btn-brand", 2, "background-color", "#ff8533", "border-color", "#ff8533", 3, "click"], [1, "fa", "fa-plus"], ["width", "320px", 3, "src"], [1, "upload-image", "img-thumbnail"], ["href", "javascript:void(0)", 1, "btnStockUpdate", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-external-link"], ["type", "number", "placeholder", "Qty", 1, "stockInput", 3, "ngModel", "change", "keypress", "keyup", "ngModelChange"], ["href", "javascript:void(0)", 1, "btnStockSave", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], ["colspan", "3", 4, "ngIf"], [1, "kt-radio-list"], [1, "kt-radio", "kt-radio--bold", "kt-radio--brand"], ["type", "radio", "value", "90", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["WarrantyDays", "ngModel"], ["type", "radio", "value", "180", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "270", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "365", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["class", "kt-radio kt-radio--bold kt-radio--brand", 4, "ngIf"], ["type", "text", "placeholder", "Days", "maxlength", "4", "class", "stockInput", 3, "ngModel", "keyup", "keydown", "change", "keypress", "ngModelChange", 4, "ngIf"], ["type", "radio", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "name", "WarrantyDays", "checked", "", 1, "custom-control-input", 3, "change"], ["type", "text", "placeholder", "Days", "maxlength", "4", 1, "stockInput", 3, "ngModel", "keyup", "keydown", "change", "keypress", "ngModelChange"], ["colspan", "4", 2, "text-align", "right"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", 3, "click"], [1, "col-md-12", "alert", "alert-info"], [1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable"], ["class", "customer-list-view-info", 4, "ngFor", "ngForOf"], [1, "customer-list-view-info"]],
        template: function ProductDetailsComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ProductDetailsComponent_div_19_Template, 4, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Add To Stock ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Stock Adjustment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, ProductDetailsComponent_img_69_Template, 1, 1, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, ProductDetailsComponent_div_70_Template, 2, 1, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "table", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "span", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Produt Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Brand:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Category:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](97, ProductDetailsComponent_tr_97_Template, 5, 1, "tr", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](98, ProductDetailsComponent_tr_98_Template, 5, 1, "tr", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](99, ProductDetailsComponent_tr_99_Template, 6, 2, "tr", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](100, ProductDetailsComponent_tr_100_Template, 6, 2, "tr", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](101, ProductDetailsComponent_tr_101_Template, 5, 2, "tr", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](108, ProductDetailsComponent_td_108_Template, 3, 0, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](111, ProductDetailsComponent_div_111_Template, 2, 0, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](112, ProductDetailsComponent_table_112_Template, 15, 1, "table", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Add Stock items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "table", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "td", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Code:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "span", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "td", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "td", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Brand:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "td", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Category:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Total Qty:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Stock Lock Qty:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](158, ProductDetailsComponent_a_158_Template, 2, 0, "a", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Stock Adjustment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "table", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "td", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Code:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "span", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "td", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "td", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Brand:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "td", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Category:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Total Qty:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Stock Lock Qty:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "a", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " Adjust ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "h4", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](212, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](213, "button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "ngb-datepicker", 75, 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductDetailsComponent_Template_ngb_datepicker_ngModelChange_215_listener($event) {
              return ctx.tempManfacDateTochange = $event;
            })("navigate", function ProductDetailsComponent_Template_ngb_datepicker_navigate_215_listener($event) {
              return ctx.date = $event.next;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "h4", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](223, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](224, "button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "ngb-datepicker", 78, 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductDetailsComponent_Template_ngb_datepicker_ngModelChange_226_listener($event) {
              return ctx.tempExpDateTochange = $event;
            })("navigate", function ProductDetailsComponent_Template_ngb_datepicker_navigate_226_listener($event) {
              return ctx.date = $event.next;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Product, "s ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Product, " Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.ProductCreate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.service.formData.ProductName, " (", ctx.service.formData.ProductId, ") ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Product, " Information ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Product, " Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.formData.ProductLogo.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.formData.ProductLogo.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Product, " Code:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductBrand, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductCategory, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.ProductWarranty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.Description, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.ProductEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.service.Productlist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.formData.ItemofLists);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Product, " Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductBrand, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductCategory, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.Quantity, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.LowStockTriggerQuantity, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.ProductEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Product, " Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductBrand, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.ProductCategory, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.Quantity, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.service.formData.LowStockTriggerQuantity, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("M.D : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](212, 46, ctx.tempManfacDateTochange, "MMM d, y"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("minDate", ctx.ManufacminDate)("maxDate", ctx.ManufacmaxDate)("ngModel", ctx.tempManfacDateTochange);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("E.D : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](223, 49, ctx.tempExpDateTochange, "MMM d, y"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("minDate", ctx.ExpiryminDate)("maxDate", ctx.ExpirymaxDate)("ngModel", ctx.tempExpDateTochange);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: [".kt-portlet__head[_ngcontent-%COMP%]{padding:0px 15px !important;background-color:#eaeaea !important;}\r\n.customer-listing-detail-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px !important;font-weight:600;color:black !important;}\r\n.service-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background: #dedede  !important;border: none !important;text-align: center !important;border-bottom:3px solid transparent !important;}\r\n.new-requst-filter_form[_ngcontent-%COMP%]   span.kt-switch.kt-switch--lg[_ngcontent-%COMP%]{display:block !important;}\r\n.new-requst-filter_form[_ngcontent-%COMP%]   span.kt-switch.kt-switch--lg[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;}\r\n.service-found-form-info[_ngcontent-%COMP%]   li.nav-item.service-nav-item[_ngcontent-%COMP%]{border-right: 1px solid #bfbfbf;}\r\n.service-found-form-info[_ngcontent-%COMP%]   li.nav-item.service-nav-item[_ngcontent-%COMP%]:last-child{border-right:0px !important;}\r\n.service-nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .service-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#21366B !important;border:none !important;color:white !important;text-align:center;border-bottom:none !important;}\r\nul#product-detail-tabs[_ngcontent-%COMP%]{width: 100% !important; border-bottom: none; padding: 0 1px;}\r\nul#product-detail-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {width: 25% !important;}\r\nul#product-detail-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size: 13px;}\r\n.customer-listing-detail-section[_ngcontent-%COMP%]   .kt-portlet[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #d9d7d7;\r\n    margin-bottom: 6px;\r\n}\r\ntable.table.table-bordered.tblproduct-info[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width: 28%; color: #000000; font-size: 13px; font-weight: 500;}\r\ndiv#list-panel[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\ntable.tbl-add-stock[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border: 1px solid #dedede;}\r\ntable.tbl-add-stock[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{border-right: 1px solid #dedede;\r\n}\r\n.lbl-left[_ngcontent-%COMP%]{text-align: left;}\r\n.btupdateBach[_ngcontent-%COMP%]{ text-align: right; margin: 11px 18px;}\r\n.btupdateBach[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color: #0084ca;color: white; padding: 3px 27px;}\r\n.btupdateBach[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor: pointer;}\r\n.undertd_text-Text[_ngcontent-%COMP%]{border-bottom: 1px solid #012939; border: 2px solid #ebe6e2; padding: 6px 10px; background: #f0f1f7;}\r\n.changeBachQty1[_ngcontent-%COMP%]{text-align: right !important; WIDTH: 50% !important;}\r\n.qtyErorrClass[_ngcontent-%COMP%]{border: 1px solid red !important; box-shadow: 4px 4px 0px red;}\r\n.myManFaContent[_ngcontent-%COMP%]{width: 50% !important;}\r\n.my-Model-body[_ngcontent-%COMP%]{margin: 0 auto !important;}\r\ntd[_ngcontent-%COMP%]   .sect-batch-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border-bottom: 1px solid gray; color: #ffb822;}\r\ninput.stockInput[_ngcontent-%COMP%]{\r\n    width: 13%;\r\n    text-align: center;\r\n    border: none;\r\n    border-bottom: 1px solid #ff8533;\r\n    border-left: 1px solid #ff8533;\r\n    border-right: 1px solid #ff8533;\r\n    margin-right: 5px;\r\n}\r\n.btnStockUpdate[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    padding: 1px 5px;\r\n    color: #ff8533;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQiwyQkFBMkIsQ0FBQyxtQ0FBbUMsQ0FBQztBQUNsRix1Q0FBdUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDO0FBR3hHLG9CQUFvQiwrQkFBK0IsQ0FBQyx1QkFBdUIsQ0FBQyw2QkFBNkIsQ0FBQyw4Q0FBOEMsQ0FBQztBQUN6SixxREFBcUQsd0JBQXdCLENBQUM7QUFDOUUsd0RBQXdELGNBQWMsQ0FBQztBQUN2RSxzREFBc0QsK0JBQStCLENBQUM7QUFDdEYsaUVBQWlFLDJCQUEyQixDQUFDO0FBQzdGLHNEQUFzRCxtQ0FBbUMsQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBNkIsQ0FBQztBQUN4TCx1QkFBdUIsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxDQUFDO0FBQ25GLDJCQUEyQixxQkFBcUIsQ0FBQztBQUNqRCxvQ0FBb0MsZUFBZSxDQUFDO0FBQ3BEO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0QjtBQUNBLG1FQUFtRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztBQUNqSTtJQUNJLFdBQVc7QUFDZjtBQUNBLDZCQUE2Qix5QkFBeUIsQ0FBQztBQUN2RCw0Q0FBNEMsK0JBQStCO0FBQzNFO0FBQ0EsVUFBVSxnQkFBZ0IsQ0FBQztBQUMzQixlQUFlLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO0FBQ3BELGdCQUFnQix5QkFBeUIsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7QUFDMUUsc0JBQXNCLGVBQWUsQ0FBQztBQUN0QyxtQkFBbUIsZ0NBQWdDLEVBQUUseUJBQXlCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7QUFDdkgsZ0JBQWdCLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO0FBQ3BFLGVBQWUsZ0NBQWdDLEVBQUUsMkJBQTJCLENBQUM7QUFDN0UsZ0JBQWdCLHFCQUFxQixDQUFDO0FBQ3RDLGVBQWUseUJBQXlCLENBQUM7QUFDekMsNEJBQTRCLDZCQUE2QixFQUFFLGNBQWMsQ0FBQztBQUMxRTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmt0LXBvcnRsZXRfX2hlYWR7cGFkZGluZzowcHggMTVweCAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2VhZWFlYSAhaW1wb3J0YW50O31cclxuLmN1c3RvbWVyLWxpc3RpbmctZGV0YWlsLXNlY3Rpb24gbGFiZWx7Zm9udC1zaXplOjE0cHggIWltcG9ydGFudDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcblxyXG5cclxuLnNlcnZpY2UtbmF2LWl0ZW0gYXtiYWNrZ3JvdW5kOiAjZGVkZWRlICAhaW1wb3J0YW50O2JvcmRlcjogbm9uZSAhaW1wb3J0YW50O3RleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O2JvcmRlci1ib3R0b206M3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7fVxyXG4ubmV3LXJlcXVzdC1maWx0ZXJfZm9ybSBzcGFuLmt0LXN3aXRjaC5rdC1zd2l0Y2gtLWxne2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudDt9XHJcbi5uZXctcmVxdXN0LWZpbHRlcl9mb3JtIHNwYW4ua3Qtc3dpdGNoLmt0LXN3aXRjaC0tbGcgaDR7Zm9udC1zaXplOjE2cHg7fVxyXG4uc2VydmljZS1mb3VuZC1mb3JtLWluZm8gbGkubmF2LWl0ZW0uc2VydmljZS1uYXYtaXRlbXtib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmZiZmJmO31cclxuLnNlcnZpY2UtZm91bmQtZm9ybS1pbmZvIGxpLm5hdi1pdGVtLnNlcnZpY2UtbmF2LWl0ZW06bGFzdC1jaGlsZHtib3JkZXItcmlnaHQ6MHB4ICFpbXBvcnRhbnQ7fVxyXG4uc2VydmljZS1uYXYtaXRlbSBhLmFjdGl2ZSwgLnNlcnZpY2UtbmF2LWl0ZW0gYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyMTM2NkIgIWltcG9ydGFudDtib3JkZXI6bm9uZSAhaW1wb3J0YW50O2NvbG9yOndoaXRlICFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLWJvdHRvbTpub25lICFpbXBvcnRhbnQ7fSBcclxudWwjcHJvZHVjdC1kZXRhaWwtdGFic3t3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBib3JkZXItYm90dG9tOiBub25lOyBwYWRkaW5nOiAwIDFweDt9XHJcbnVsI3Byb2R1Y3QtZGV0YWlsLXRhYnMgbGkge3dpZHRoOiAyNSUgIWltcG9ydGFudDt9XHJcbnVsI3Byb2R1Y3QtZGV0YWlsLXRhYnMgbGkgYSBzcGFuIGg0e2ZvbnQtc2l6ZTogMTNweDt9XHJcbi5jdXN0b21lci1saXN0aW5nLWRldGFpbC1zZWN0aW9uIC5rdC1wb3J0bGV0IC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkN2Q3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbnRhYmxlLnRhYmxlLnRhYmxlLWJvcmRlcmVkLnRibHByb2R1Y3QtaW5mbyB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZHt3aWR0aDogMjglOyBjb2xvcjogIzAwMDAwMDsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwO31cclxuZGl2I2xpc3QtcGFuZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxudGFibGUudGJsLWFkZC1zdG9jayB0Ym9keSB0cntib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO31cclxudGFibGUudGJsLWFkZC1zdG9jayB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZHtib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbi5sYmwtbGVmdHt0ZXh0LWFsaWduOiBsZWZ0O31cclxuLmJ0dXBkYXRlQmFjaHsgdGV4dC1hbGlnbjogcmlnaHQ7IG1hcmdpbjogMTFweCAxOHB4O31cclxuLmJ0dXBkYXRlQmFjaCBhe2JhY2tncm91bmQtY29sb3I6ICMwMDg0Y2E7Y29sb3I6IHdoaXRlOyBwYWRkaW5nOiAzcHggMjdweDt9XHJcbi5idHVwZGF0ZUJhY2ggYTpob3ZlcntjdXJzb3I6IHBvaW50ZXI7fVxyXG4udW5kZXJ0ZF90ZXh0LVRleHR7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMTI5Mzk7IGJvcmRlcjogMnB4IHNvbGlkICNlYmU2ZTI7IHBhZGRpbmc6IDZweCAxMHB4OyBiYWNrZ3JvdW5kOiAjZjBmMWY3O31cclxuLmNoYW5nZUJhY2hRdHkxe3RleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7IFdJRFRIOiA1MCUgIWltcG9ydGFudDt9XHJcbi5xdHlFcm9yckNsYXNze2JvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50OyBib3gtc2hhZG93OiA0cHggNHB4IDBweCByZWQ7fVxyXG4ubXlNYW5GYUNvbnRlbnR7d2lkdGg6IDUwJSAhaW1wb3J0YW50O31cclxuLm15LU1vZGVsLWJvZHl7bWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDt9XHJcbnRkIC5zZWN0LWJhdGNoLWRhdGUgYTpob3Zlcntib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTsgY29sb3I6ICNmZmI4MjI7fVxyXG5pbnB1dC5zdG9ja0lucHV0e1xyXG4gICAgd2lkdGg6IDEzJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY4NTMzO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmY4NTMzO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmODUzMztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5idG5TdG9ja1VwZGF0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDVweDtcclxuICAgIGNvbG9yOiAjZmY4NTMzO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.css']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
          }, {
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
          }];
        }, {
          BatchItemManfacDateModalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['BatchItemManfacDateModalContent', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "SVph":
    /*!************************************************************!*\
      !*** ./src/app/application/products/products.component.ts ***!
      \************************************************************/

    /*! exports provided: ProductsComponent */

    /***/
    function SVph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent() {
          _classCallCheck(this, ProductsComponent);
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.??fac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)();
      };

      ProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductsComponent,
        selectors: [["ng-component"]],
        decls: 1,
        vars: 0,
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: '<router-outlet></router-outlet>'
          }]
        }], null, null);
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
          var _this9;

          _classCallCheck(this, NgbTimeToStringAdapter);

          _this9 = _super.apply(this, arguments);
          _this9.year = new Date().getUTCFullYear();
          _this9.month = new Date().getUTCMonth() + 1;
          _this9.day = new Date().getUTCDate();
          return _this9;
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
    "o+B/":
    /*!***************************************************************************!*\
      !*** ./src/app/application/products/product-add/product-add.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ProductAddComponent */

    /***/
    function oB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function () {
        return ProductAddComponent;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductAddComponent_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Add ", ctx_r20.currentUser.Product, " ");
        }
      }

      function ProductAddComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductAddComponent_div_16_div_1_Template, 4, 1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.createbuttontext == "Create");
        }
      }

      function ProductAddComponent_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Edit ", ctx_r21.currentUser.Product, " ");
        }
      }

      function ProductAddComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductAddComponent_div_17_div_1_Template, 4, 1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.createbuttontext == "Update");
        }
      }

      function ProductAddComponent_option_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", x_r22.BrandName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r22.BrandName, " ");
        }
      }

      function ProductAddComponent_option_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", x_r23.CategoryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", x_r23.CategoryName, " ");
        }
      }

      function ProductAddComponent_tr_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Purchase Price:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 60, 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_tr_74_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r26.service.formData.PurchasePrice = $event;
          })("keypress", function ProductAddComponent_tr_74_Template_input_keypress_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r28.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Sale Price*:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 62, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_tr_74_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r29.service.formData.SalePrice = $event;
          })("keypress", function ProductAddComponent_tr_74_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r30.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx_r11.IsProductPurchasePriceValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r11.service.formData.PurchasePrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx_r11.IsProductSalePriseValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r11.service.formData.SalePrice);
        }
      }

      function ProductAddComponent_tr_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Stock Qty*:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 64, 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_tr_75_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r33.service.formData.Quantity = $event;
          })("keypress", function ProductAddComponent_tr_75_Template_input_keypress_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r34);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r35.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Lock Stock Qty:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 66, 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_tr_75_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r34);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r36.service.formData.LowStockTriggerQuantity = $event;
          })("keypress", function ProductAddComponent_tr_75_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r34);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r37.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx_r12.IsProductQuentityValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r12.service.formData.Quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx_r12.IsProductLowStockQuentityValid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r12.service.formData.LowStockTriggerQuantity);
        }
      }

      function ProductAddComponent_tr_80_tr_13_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Edit terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductAddComponent_tr_80_tr_13_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Hide terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductAddComponent_tr_80_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Warrant terms:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductAddComponent_tr_80_tr_13_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r43.enablewarrantchange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ProductAddComponent_tr_80_tr_13_span_7_Template, 3, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ProductAddComponent_tr_80_tr_13_span_8_Template, 3, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r39.service.formData.WarrantyDays, " Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r39.customwarrantyShowEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r39.customwarrantyShowEdit);
        }
      }

      function ProductAddComponent_tr_80_tr_14_label_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 88, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductAddComponent_tr_80_tr_14_label_24_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r54.customwarrantyShowMethor();
          })("ngModelChange", function ProductAddComponent_tr_80_tr_14_label_24_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r55);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r56.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r49.service.formData.WarrantyDays);
        }
      }

      function ProductAddComponent_tr_80_tr_14_label_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductAddComponent_tr_80_tr_14_label_25_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r57.customwarrantyShowMethor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductAddComponent_tr_80_tr_14_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 91, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function ProductAddComponent_tr_80_tr_14_div_28_Template_input_keyup_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r60.customwarrantyShowMethor();
          })("keydown", function ProductAddComponent_tr_80_tr_14_div_28_Template_input_keydown_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r62.customwarrantyShowMethor();
          })("ngModelChange", function ProductAddComponent_tr_80_tr_14_div_28_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r63.service.formData.WarrantyDays = $event;
          })("keypress", function ProductAddComponent_tr_80_tr_14_div_28_Template_input_keypress_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r64.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r51.service.formData.WarrantyDays);
        }
      }

      function ProductAddComponent_tr_80_tr_14_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " (in number of days) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductAddComponent_tr_80_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 79, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductAddComponent_tr_80_tr_14_Template_input_change_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r65.customwarrantyShowMethor();
          })("ngModelChange", function ProductAddComponent_tr_80_tr_14_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r67.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " 90 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 81, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductAddComponent_tr_80_tr_14_Template_input_change_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r68.customwarrantyShowMethor();
          })("ngModelChange", function ProductAddComponent_tr_80_tr_14_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r69.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " 180 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 82, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductAddComponent_tr_80_tr_14_Template_input_change_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r70.customwarrantyShowMethor();
          })("ngModelChange", function ProductAddComponent_tr_80_tr_14_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r71.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " 270 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 83, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductAddComponent_tr_80_tr_14_Template_input_change_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r72.customwarrantyShowMethor();
          })("ngModelChange", function ProductAddComponent_tr_80_tr_14_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r73.service.formData.WarrantyDays = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " 365 Days ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ProductAddComponent_tr_80_tr_14_label_24_Template, 5, 1, "label", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ProductAddComponent_tr_80_tr_14_label_25_Template, 4, 0, "label", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ProductAddComponent_tr_80_tr_14_div_28_Template, 3, 1, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ProductAddComponent_tr_80_tr_14_div_29_Template, 2, 0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r40.service.formData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r40.service.formData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r40.service.formData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r40.service.formData.WarrantyDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r40.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r40.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r40.customwarrantyShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r40.customwarrantyShow);
        }
      }

      function ProductAddComponent_tr_80_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 70, 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_tr_80_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r74.service.formData.InWarranty = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ProductAddComponent_tr_80_tr_13_Template, 9, 3, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ProductAddComponent_tr_80_tr_14_Template, 30, 8, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r14.service.formData.InWarranty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r14.currentUser.Product, " warranty ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.service.formData.InWarranty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.customwarrantyShowEdit);
        }
      }

      function ProductAddComponent_img_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 93);
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "", ctx_r15.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function ProductAddComponent_div_84_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 93);
        }

        if (rf & 2) {
          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r76.service.formData.ProductLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function ProductAddComponent_div_84_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 93);
        }

        if (rf & 2) {
          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "data:image/png;base64,", ctx_r77.service.formData.ProductLogo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function ProductAddComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductAddComponent_div_84_img_1_Template, 1, 1, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductAddComponent_div_84_img_2_Template, 1, 1, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.isUrlPart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r16.isUrlPart);
        }
      }

      function ProductAddComponent_p_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r18.filename);
        }
      }

      function ProductAddComponent_p_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var ProductAddComponent = /*#__PURE__*/function () {
        function ProductAddComponent(titleService, service, router, toastr, loginservice) {
          var _this10 = this;

          _classCallCheck(this, ProductAddComponent);

          this.titleService = titleService;
          this.service = service;
          this.router = router;
          this.toastr = toastr;
          this.loginservice = loginservice;
          this.IsItemAdd = true;
          this.ItemBtn = 'Add';
          this.IsProductNameValid = true;
          this.IsProductIdValid = true;
          this.IsProductBrandValid = true;
          this.IsProductCategoryValid = true;
          this.IsProductPurchasePriceValid = true;
          this.IsProductSalePriseValid = true;
          this.IsProductQuentityValid = true;
          this.IsProductLowStockQuentityValid = true;
          this.IsValid = true;
          this.BatchNoIsValid = true;
          this.QuantityIsValid = true;
          this.ManufacturingDateIsValid = true;
          this.ExpiryDateIsValid = true;
          this.currentUTCDate = new Date();
          this.ManufacminDate = new Date(1990, 0, 1);
          this.ManufacmaxDate = new Date(Date.UTC(this.currentUTCDate.getFullYear(), this.currentUTCDate.getMonth(), this.currentUTCDate.getDate(), 0, 0, 0));
          this.ExpiryminDate = new Date(Date.UTC(this.currentUTCDate.getFullYear(), this.currentUTCDate.getMonth(), this.currentUTCDate.getDate(), 0, 0, 0));
          this.ExpirymaxDate = new Date(Date.UTC(this.currentUTCDate.getFullYear() + 20, this.currentUTCDate.getMonth(), this.currentUTCDate.getDate(), 0, 0, 0));
          this.loginservice.currentUser.subscribe(function (x) {
            return _this10.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
          this.tempLoopQty = 0;
          this.tempExpiryDate = null;
          this.customwarrantyShowEdit = false;
          this.service.SetAsDefaultValue();
        }

        _createClass(ProductAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            if (this.router.url === '/products/product-add') {
              if (!this.currentUser.Permissions.ProductCreate) {
                this.router.navigate(['/dashboard']);
              }

              this.titleService.setTitle(this.currentUser.Product + ' Create | Genic Solution');
              this.whenAddProduct();

              if (!this.currentUser.Permissions.ProductWarranty) {
                this.service.formData.InWarranty = false;
                this.service.formData.WarrantyDays = 0;
              } else {
                this.service.formData.InWarranty = true;
              }
            }

            var Id = window.location.pathname.split('/').pop();

            if (Id !== 'product-add') {
              if (!this.currentUser.Permissions.ProductEdit) {
                this.router.navigate(['/dashboard']);
              }

              this.titleService.setTitle(this.currentUser.Product + ' Edit | Genic Solution');
              this.service.refrestBrand(this.currentUser.Token).subscribe(function (res) {
                if (res) {
                  var response = res;
                  _this11.service.BrandList = response.result;

                  _this11.service.refrestCategory(_this11.currentUser.Token).subscribe(function (res) {
                    if (res) {
                      var response2 = res;
                      _this11.service.CategoryList = response2.result;

                      _this11.service.getProductById(_this11.currentUser.Token, Id).subscribe(function (res) {
                        if (res) {
                          var response3 = res;

                          if (response3.Message === 'success') {
                            _this11.service.formData = response3.result;

                            _this11.customwarrantyShowMethor();

                            _this11.createbuttontext = 'Update';
                            _this11.isUrlPart = true;
                          }
                        }
                      }, function (error) {
                        return console.log(error);
                      });
                    }
                  }, function (error) {
                    return console.log(error);
                  });
                }
              }, function (error) {
                return console.log(error);
              });
            }
          }
        }, {
          key: "whenAddProduct",
          value: function whenAddProduct() {
            var _this12 = this;

            this.service.refrestBrand(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;
                _this12.service.BrandList = response.result;

                _this12.service.refrestCategory(_this12.currentUser.Token).subscribe(function (res) {
                  if (res) {
                    var _response = res;
                    _this12.service.CategoryList = _response.result;

                    _this12.customwarrantyShowMethor();

                    _this12.createbuttontext = 'Create';
                    _this12.isUrlPart = true;
                    var count = _this12.service.Productlist.length + 1;
                    _this12.service.formData.ProductId = _this12.currentUser.Product.toUpperCase().slice(0, 3) + count;
                    _this12.service.ItemofList.BatchNo = _this12.currentUser.Product.toUpperCase().slice(0, 3) + count;
                    _this12.service.formData.WarrantyDays = 30;

                    if (_this12.currentUser.Permissions.IsProductOnly) {
                      _this12.service.formData.PurchasePrice = 0;
                      _this12.service.formData.SalePrice = 0;
                      _this12.service.formData.Quantity = 1;
                      _this12.service.formData.LowStockTriggerQuantity = 0;
                    }
                  }
                }, function (error) {
                  return console.log(error);
                });
              }
            }, function (error) {
              return console.log(error);
            });
          } /// Convert base64strin image Begin

        }, {
          key: "_handleReaderLoaded",
          value: function _handleReaderLoaded(e) {
            var reader = e.target;
            var Base64String = reader.result.substr(reader.result);
            this.service.formData.ProductLogo = Base64String.split(',')[1];
          }
        }, {
          key: "handleInputChange",
          value: function handleInputChange(files) {
            var file = files;
            var pattern = /image-*/;
            var reader = new FileReader();

            if (!file.type.match(pattern)) {
              alert('invalid format');
              return;
            }

            reader.onloadend = this._handleReaderLoaded.bind(this);
            reader.readAsDataURL(file);
          }
        }, {
          key: "picked",
          value: function picked(event) {
            this.isUrlPart = false;
            var fileList = event.target.files;
            var file = fileList[0];
            this.productLogoFile = file;
            this.handleInputChange(file);
          }
        }, {
          key: "customwarrantyShowMethor",
          value: function customwarrantyShowMethor() {
            if (this.service.formData.WarrantyDays === undefined) {
              this.customwarrantyShow = false;
            } else {
              switch (this.service.formData.WarrantyDays.toString()) {
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
          key: "onSubmit",
          value: function onSubmit() {
            this.IsProductNameValid = true;
            this.IsProductIdValid = true;
            this.IsProductBrandValid = true;
            this.IsProductCategoryValid = true;
            this.IsProductPurchasePriceValid = true;
            this.IsProductSalePriseValid = true;
            this.IsProductQuentityValid = true;
            this.IsProductLowStockQuentityValid = true;

            if (this.service.formData.ProductName === '') {
              this.toastr.warning('warning', 'Please enter ' + this.currentUser.Product.toLowerCase() + ' name');
              this.IsProductNameValid = false;
              this.IsValid = false;
              return false;
            }

            if (this.service.formData.ProductId === '') {
              this.toastr.warning('warning', 'Please enter ' + this.currentUser.Product.toLowerCase() + ' id');
              this.IsProductIdValid = false;
              this.IsValid = false;
              return false;
            }

            if (this.service.formData.LowStockTriggerQuantity > this.service.formData.Quantity) {
              this.toastr.warning('warning', 'Low stock trigger quantity is always less then or equal to total quantity');
              this.IsProductLowStockQuentityValid = false;
              this.IsValid = false;
              return false;
            }

            if (this.productLogoFile !== undefined) {
              if (this.productLogoFile.size >= 2000000) {
                this.toastr.info('size too large', 'Maximum logo size is 2MB');
                return false;
              }
            }

            if (this.productLogoFile === undefined) {
              this.service.formData.ProductLogo = '';
            }

            if (this.service.formData.Quantity < this.service.formData.LowStockTriggerQuantity) {
              this.toastr.warning('warning', 'Low quantity is lessthen to total quantity');
              return false;
            }

            if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
              this.insertrecord();
            } else {
              this.updaterecord();
            }
          }
        }, {
          key: "insertrecord",
          value: function insertrecord() {
            var _this13 = this;

            this.service.formData.WarrantyDays = Number(this.service.formData.WarrantyDays);
            this.service.postProductDetails(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this13.toastr.success('success', response.MessageDescription);

                  _this13.service.SetAsDefaultValue();

                  _this13.router.navigate(['/products/']);
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
          key: "updaterecord",
          value: function updaterecord() {
            var _this14 = this;

            this.service.formData.WarrantyDays = Number(this.service.formData.WarrantyDays);
            this.service.putProductDetails(this.currentUser.Token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this14.toastr.success('success', response.MessageDescription);

                  _this14.service.SetAsDefaultValue();

                  _this14.router.navigate(['/products/']);
                }

                if (response.Message === 'failure') {
                  _this14.toastr.warning('warning', response.MessageDescription);
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "RemoveItemList",
          value: function RemoveItemList(i) {
            return this.service.formData.ItemofLists.splice(i, 1);
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
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
        }]);

        return ProductAddComponent;
      }();

      ProductAddComponent.??fac = function ProductAddComponent_Factory(t) {
        return new (t || ProductAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]));
      };

      ProductAddComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductAddComponent,
        selectors: [["app-product-add"]],
        decls: 96,
        vars: 33,
        consts: [["autocomplete", "off", 3, "submit"], ["form", "ngForm"], ["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], ["href", "javascript:;", "routerLink", "/products", 1, "kt-subheader__breadcrumbs-link"], [4, "ngIf"], ["type", "hidden", "name", "Id", 3, "ngModel", "ngModelChange"], ["Id", "ngModel"], [1, "creat-properties-form-main-section"], [1, "row"], [1, "col-md-9", "create_properties-filter_form"], [1, "create_properties-filter_form"], [1, "col-md-12", "col-sm-12", "col-xs-12", "service-founds-detail-form"], [1, "tab-content", "job-for-tab-content"], ["id", "kt_tabs_3_2", "role", "tabpanel", 1, "tab-pane", "active"], [1, "row", "service-supports-heading", "pdn-top"], [1, "kt-portlet__body", "padd-top-0", 2, "width", "100%"], [1, "kt-section"], [1, "kt-section__content"], ["width", "100%", 1, "client-server-table", "ttl"], ["colspan", "3"], ["name", "ProductId", "maxlength", "10", 1, "undertd_text", 3, "ngModel", "placeholder", "ngModelChange"], ["ProductId", "ngModel"], ["type", "text", "name", "ProductName", "maxlength", "64", 1, "undertd_text", 3, "ngModel", "placeholder", "ngModelChange"], ["ProductName", "ngModel"], ["name", "ProductBrand", 1, "form-control", "undertd_text", "undertd_text-select", 3, "ngModel", "ngModelChange"], ["ProductBrand", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "ProductCategory", 1, "form-control", "undertd_text", "undertd_text-select", 3, "ngModel", "ngModelChange"], ["ProductCategory", "ngModel"], [2, "display", "none"], ["name", "RuleType", 1, "form-control", "undertd_text", "undertd_text-select", 3, "ngModel", "ngModelChange"], ["RuleType", "ngModel"], ["value", "FIFO"], ["value", "LIFO"], ["colspan", "4"], ["rows", "4", "name", "Description", "placeholder", "Description", "maxlength", "1024", 1, "undertd_text", "undertd_text-textarea", 3, "ngModel", "ngModelChange"], ["Description", "ngModel"], [1, "col-md-3"], [1, "img-section-"], ["width", "250px", "class", "img-thumbnail", 3, "src", 4, "ngIf"], ["class", "upload-image", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile01", "aria-describedby", "inputGroupFileAddon01", 1, "custom-file-input", 3, "change"], ["File", ""], ["for", "inputGroupFile01", 1, "custom-file-label"], [1, "modal-footer", "create-proprty-model-footer", "row--"], ["type", "button", "routerLink", "/products", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-brand", 3, "disabled"], ["class", "kt-subheader__breadcrumbs", 4, "ngIf"], [3, "value"], ["type", "number", "name", "PurchasePrice", "placeholder", "Purchase Price", "maxlength", "8", 1, "undertd_text", 3, "ngModel", "ngModelChange", "keypress"], ["PurchasePrice", "ngModel"], ["type", "number", "name", "SalePrice", "placeholder", "Sale Price", "maxlength", "8", 1, "undertd_text", 3, "ngModel", "ngModelChange", "keypress"], ["SalePrice", "ngModel"], ["type", "number", "name", "Quantity", "placeholder", "Stock Qty", "maxlength", "8", 1, "undertd_text", 3, "ngModel", "ngModelChange", "keypress"], ["Quantity", "ngModel"], ["type", "number", "name", "LowStockTriggerQuantity", "placeholder", "Lock Stock Qty", "maxlength", "8", 1, "undertd_text", 3, "ngModel", "ngModelChange", "keypress"], ["LowStockTriggerQuantity", "ngModel"], [1, "col-md-12", "padd-top-10", "padd-left-0", "padd-right-0"], [1, "kt-switch", "kt-switch--icon"], ["name", "service.formData.InWarranty", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["InWarranty", "ngModel"], [1, "swither-bootstrap-learn", "switcher-customer"], ["colspan", "2"], ["href", "javascript:void(0)", 1, "text-warning", "btnStockUpdate", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["aria-hidden", "true", 1, "fa", "fa-minus"], [1, "kt-radio-list"], [1, "kt-radio", "kt-radio--bold", "kt-radio--brand"], ["type", "radio", "value", "90", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["WarrantyDays", "ngModel"], ["type", "radio", "value", "180", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "270", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "value", "365", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["class", "kt-radio kt-radio--bold kt-radio--brand", 4, "ngIf"], ["colspan", "2", 2, "vertical-align", "bottom"], ["class", "col-md-4", 4, "ngIf"], ["class", "col-md-8 padd-top-10", 4, "ngIf"], ["type", "radio", "name", "WarrantyDays", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["type", "radio", "name", "WarrantyDays", "checked", "", 1, "custom-control-input", 3, "change"], [1, "col-md-4"], ["type", "text", "name", "WarrantyDays", "placeholder", "Custom", "maxlength", "4", 1, "undertd_text", 3, "ngModel", "keyup", "keydown", "ngModelChange", "keypress"], [1, "col-md-8", "padd-top-10"], ["width", "250px", 1, "img-thumbnail", 3, "src"], [1, "upload-image"]],
        template: function ProductAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function ProductAddComponent_Template_form_submit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ProductAddComponent_div_16_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ProductAddComponent_div_17_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.service.formData.Id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "table", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Code*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "input", 29, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_Template_input_ngModelChange_38_listener($event) {
              return ctx.service.formData.ProductId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "input", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_Template_input_ngModelChange_44_listener($event) {
              return ctx.service.formData.ProductName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Select Brand:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "select", 33, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_Template_select_ngModelChange_50_listener($event) {
              return ctx.service.formData.ProductBrand = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, ProductAddComponent_option_54_Template, 2, 2, "option", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Select Category:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "select", 37, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_Template_select_ngModelChange_59_listener($event) {
              return ctx.service.formData.ProductCategory = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Select Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, ProductAddComponent_option_63_Template, 2, 2, "option", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "tr", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Rule Type*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "select", 40, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_Template_select_ngModelChange_68_listener($event) {
              return ctx.service.formData.RuleType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "option", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "FIFO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "option", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "LIFO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, ProductAddComponent_tr_74_Template, 11, 6, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, ProductAddComponent_tr_75_Template, 11, 6, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "textarea", 45, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductAddComponent_Template_textarea_ngModelChange_78_listener($event) {
              return ctx.service.formData.Description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, ProductAddComponent_tr_80_Template, 15, 4, "tr", 13);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](83, ProductAddComponent_img_83_Template, 1, 1, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](84, ProductAddComponent_div_84_Template, 3, 2, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "input", 52, 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductAddComponent_Template_input_change_86_listener($event) {
              return ctx.picked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](89, ProductAddComponent_p_89_Template, 2, 1, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](90, ProductAddComponent_p_90_Template, 2, 0, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "CANCEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "button", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Product, "s ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.ProductCreate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.ProductEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.formData.Id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx.IsProductIdValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("placeholder", "", ctx.currentUser.Product, " Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.formData.ProductId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.currentUser.Product, " Name*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx.IsProductNameValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("placeholder", "", ctx.currentUser.Product, " Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.formData.ProductName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx.IsProductBrandValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.formData.ProductBrand);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Select ", ctx.currentUser.Product, " Brand ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.service.BrandList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", !ctx.IsProductCategoryValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.formData.ProductCategory);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.service.CategoryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.formData.RuleType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.currentUser.Permissions.IsProductOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.formData.Description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.currentUser.Permissions.ProductWarranty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.formData.ProductLogo === null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.formData.ProductLogo !== null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.filename);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.filename);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.createbuttontext, " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"]],
        styles: [".creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{background-color:WHITE !important;padding:0px !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]{border:none !important;background-color:#eaeaea !important;color:white;padding:15px !important;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .alert.alert-secondary[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:black !important;font-size:35px !important;}\r\n.new-properties-popupcreate-text[_ngcontent-%COMP%]{color:black;width:100%;}\r\n.create_properties-filter_form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:15px;}\r\n.custom-file-label[_ngcontent-%COMP%]::after{background-color:#112860;color:white;padding:0.65rem 4rem;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   .create_properties-filter_form[_ngcontent-%COMP%]{margin:0 0 ;}\r\n.creat-properties-form-main-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px !important;font-weight:600;color:black !important;}\r\n.input-group-prepend[_ngcontent-%COMP%]{background-color:#ff8533 !important;color:white !important;height:36px !important;line-height:36px !important;}\r\n.btn-sm.btn-label-info.btn-bold[_ngcontent-%COMP%]{margin-top: 26px;padding: 10px 36px;background:#2c77f4;color: white;width:100%;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]{border:none;}\r\n.propert-field[_ngcontent-%COMP%]{padding:0px 20px;}\r\n.input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]{margin-bottom:50px;}\r\n.propert-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:16px;color:black;}\r\n.table-custom[_ngcontent-%COMP%]{padding:0px 15px;}\r\n.table-custom[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background: #eaeaea !important;font-size:14px !important;color:black !important;font-weight:600}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]{position:sticky;bottom:0px;}\r\n.modal-footer.create-proprty-model-footer[_ngcontent-%COMP%]{padding-right:100px;}\r\n.undertd_text-textarea[_ngcontent-%COMP%]{border-bottom: 1px solid #012939 !important; border: 2px solid #ebe6e2 !important; padding: 6px 10px !important; background: #f0f1f7 !important;}\r\n.undertd_text-select[_ngcontent-%COMP%]{border-bottom: 1px solid #012939 !important;border: 2px solid #ebe6e2 !important; padding: 6px 10px !important; background: #f0f1f7 !important;}\r\n.my-batch[_ngcontent-%COMP%]{margin-top: 16px !important;border-bottom: 1px solid #ddd; margin-bottom: 13px !important;}\r\n.my-batch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin: 0 0px 7px 3px;}\r\n.pdn-top[_ngcontent-%COMP%]{border-bottom: 1px solid #ddd;}\r\n.my-spacing[_ngcontent-%COMP%]{border: 1px solid #dddddd; padding: 15px 17px !important;}\r\ntable.ttl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding: 2px 8px !important;}\r\n.switcher-customer[_ngcontent-%COMP%] { top:-15px;position: relative; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvZHVjdHMvcHJvZHVjdC1hZGQvcHJvZHVjdC1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUUsaUNBQWlDLENBQUMsc0JBQXNCLENBQUM7QUFDNUgsMkRBQTJELHNCQUFzQixDQUFDLG1DQUFtQyxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztBQUMxSix5RUFBeUUsc0JBQXNCLENBQUMseUJBQXlCLENBQUM7QUFDMUgsaUNBQWlDLFdBQVcsQ0FBQyxVQUFVLENBQUM7QUFDeEQsMkNBQTJDLGtCQUFrQixDQUFDO0FBQzlELDBCQUEwQix3QkFBd0IsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFDcEYsbUVBQW1FLFdBQVcsQ0FBQztBQUMvRSwwQ0FBMEMseUJBQXlCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDO0FBQzNHLHFCQUFxQixtQ0FBbUMsQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FBQztBQUNuSSxnQ0FBZ0MsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUMvRywwQ0FBMEMsV0FBVyxDQUFDO0FBQ3RELGVBQWUsZ0JBQWdCLENBQUM7QUFDaEMsNEJBQTRCLGtCQUFrQixDQUFDO0FBQy9DLGlCQUFpQixVQUFVLENBQUMsV0FBVyxDQUFDO0FBQ3hDLGNBQWMsZ0JBQWdCLENBQUM7QUFDL0IsMEJBQTBCLDhCQUE4QixDQUFDLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDLGVBQWU7QUFDekgsMENBQTBDLGVBQWUsQ0FBQyxVQUFVLENBQUM7QUFDckUsMENBQTBDLG1CQUFtQixDQUFDO0FBQzlELHVCQUF1QiwyQ0FBMkMsRUFBRSxvQ0FBb0MsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsQ0FBQztBQUN2SyxxQkFBcUIsMkNBQTJDLENBQUMsb0NBQW9DLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLENBQUM7QUFDcEssVUFBVSwyQkFBMkIsQ0FBQyw2QkFBNkIsRUFBRSw4QkFBOEIsQ0FBQztBQUNwRyxnQkFBZ0IscUJBQXFCLENBQUM7QUFDdEMsU0FBUyw2QkFBNkIsQ0FBQztBQUN2QyxZQUFZLHlCQUF5QixFQUFFLDZCQUE2QixDQUFDO0FBQ3JFLHNCQUFzQiwyQkFBMkIsQ0FBQztBQUNsRCxxQkFBcUIsU0FBUyxDQUFDLGtCQUFrQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vcHJvZHVjdHMvcHJvZHVjdC1hZGQvcHJvZHVjdC1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5jcmVhdGVfcHJvcGVydGllcy1maWx0ZXJfZm9ybXtiYWNrZ3JvdW5kLWNvbG9yOldISVRFICFpbXBvcnRhbnQ7cGFkZGluZzowcHggIWltcG9ydGFudDt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5hbGVydC5hbGVydC1zZWNvbmRhcnl7Ym9yZGVyOm5vbmUgIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNlYWVhZWEgIWltcG9ydGFudDtjb2xvcjp3aGl0ZTtwYWRkaW5nOjE1cHggIWltcG9ydGFudDt9XHJcbi5jcmVhdC1wcm9wZXJ0aWVzLWZvcm0tbWFpbi1zZWN0aW9uIC5hbGVydC5hbGVydC1zZWNvbmRhcnkgLmFsZXJ0LWljb24gaXtjb2xvcjpibGFjayAhaW1wb3J0YW50O2ZvbnQtc2l6ZTozNXB4ICFpbXBvcnRhbnQ7fVxyXG4ubmV3LXByb3BlcnRpZXMtcG9wdXBjcmVhdGUtdGV4dHtjb2xvcjpibGFjazt3aWR0aDoxMDAlO31cclxuLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3JtIC5mb3JtLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5jdXN0b20tZmlsZS1sYWJlbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMTEyODYwO2NvbG9yOndoaXRlO3BhZGRpbmc6MC42NXJlbSA0cmVtO31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gLmNyZWF0ZV9wcm9wZXJ0aWVzLWZpbHRlcl9mb3Jte21hcmdpbjowIDAgO31cclxuLmNyZWF0LXByb3BlcnRpZXMtZm9ybS1tYWluLXNlY3Rpb24gbGFiZWx7Zm9udC1zaXplOjE0cHggIWltcG9ydGFudDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2sgIWltcG9ydGFudDt9XHJcbi5pbnB1dC1ncm91cC1wcmVwZW5ke2JhY2tncm91bmQtY29sb3I6I2ZmODUzMyAhaW1wb3J0YW50O2NvbG9yOndoaXRlICFpbXBvcnRhbnQ7aGVpZ2h0OjM2cHggIWltcG9ydGFudDtsaW5lLWhlaWdodDozNnB4ICFpbXBvcnRhbnQ7fVxyXG4uYnRuLXNtLmJ0bi1sYWJlbC1pbmZvLmJ0bi1ib2xke21hcmdpbi10b3A6IDI2cHg7cGFkZGluZzogMTBweCAzNnB4O2JhY2tncm91bmQ6IzJjNzdmNDtjb2xvcjogd2hpdGU7d2lkdGg6MTAwJTt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVye2JvcmRlcjpub25lO31cclxuLnByb3BlcnQtZmllbGR7cGFkZGluZzowcHggMjBweDt9XHJcbi5pbnB1dC1ncm91cCA+IC5jdXN0b20tZmlsZXttYXJnaW4tYm90dG9tOjUwcHg7fVxyXG4ucHJvcGVydC1maWVsZCBwe2NvbG9yOjE2cHg7Y29sb3I6YmxhY2s7fVxyXG4udGFibGUtY3VzdG9te3BhZGRpbmc6MHB4IDE1cHg7fVxyXG4udGFibGUtY3VzdG9tIHRhYmxlIHRyIHRoe2JhY2tncm91bmQ6ICNlYWVhZWEgIWltcG9ydGFudDtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O2NvbG9yOmJsYWNrICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NjAwfVxyXG4ubW9kYWwtZm9vdGVyLmNyZWF0ZS1wcm9wcnR5LW1vZGVsLWZvb3Rlcntwb3NpdGlvbjpzdGlja3k7Ym90dG9tOjBweDt9XHJcbi5tb2RhbC1mb290ZXIuY3JlYXRlLXByb3BydHktbW9kZWwtZm9vdGVye3BhZGRpbmctcmlnaHQ6MTAwcHg7fVxyXG4udW5kZXJ0ZF90ZXh0LXRleHRhcmVhe2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDEyOTM5ICFpbXBvcnRhbnQ7IGJvcmRlcjogMnB4IHNvbGlkICNlYmU2ZTIgIWltcG9ydGFudDsgcGFkZGluZzogNnB4IDEwcHggIWltcG9ydGFudDsgYmFja2dyb3VuZDogI2YwZjFmNyAhaW1wb3J0YW50O31cclxuLnVuZGVydGRfdGV4dC1zZWxlY3R7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMTI5MzkgIWltcG9ydGFudDtib3JkZXI6IDJweCBzb2xpZCAjZWJlNmUyICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDZweCAxMHB4ICFpbXBvcnRhbnQ7IGJhY2tncm91bmQ6ICNmMGYxZjcgIWltcG9ydGFudDt9XHJcbi5teS1iYXRjaHttYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IG1hcmdpbi1ib3R0b206IDEzcHggIWltcG9ydGFudDt9XHJcbi5teS1iYXRjaCBsYWJlbHttYXJnaW46IDAgMHB4IDdweCAzcHg7fVxyXG4ucGRuLXRvcHtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDt9XHJcbi5teS1zcGFjaW5ne2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7IHBhZGRpbmc6IDE1cHggMTdweCAhaW1wb3J0YW50O31cclxudGFibGUudHRsIHRib2R5IHRyIHRke3BhZGRpbmc6IDJweCA4cHggIWltcG9ydGFudDt9XHJcbi5zd2l0Y2hlci1jdXN0b21lciB7IHRvcDotMTVweDtwb3NpdGlvbjogcmVsYXRpdmU7IH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductAddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-add',
            templateUrl: './product-add.component.html',
            styleUrls: ['./product-add.component.css']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
          }, {
            type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
          }, {
            type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
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

        var _super2 = _createSuper(NgbDateToStringAdapter);

        function NgbDateToStringAdapter() {
          var _this15;

          _classCallCheck(this, NgbDateToStringAdapter);

          _this15 = _super2.apply(this, arguments);
          _this15.hour = 0;
          _this15.minute = 0;
          _this15.second = 0;
          return _this15;
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
//# sourceMappingURL=application-products-products-module-es5.js.map