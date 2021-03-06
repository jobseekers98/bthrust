(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-ticket-engineer-ticket-engineer-module"], {
    /***/
    "dPrp":
    /*!***********************************************************************!*\
      !*** ./src/app/application/ticket-engineer/ticket-engineer.module.ts ***!
      \***********************************************************************/

    /*! exports provided: TicketEngineerModule */

    /***/
    function dPrp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketEngineerModule", function () {
        return TicketEngineerModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ticket_engineer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ticket-engineer.component */
      "wqP9");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var TicketEngineerModule = function TicketEngineerModule() {
        _classCallCheck(this, TicketEngineerModule);
      };

      TicketEngineerModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TicketEngineerModule
      });
      TicketEngineerModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TicketEngineerModule_Factory(t) {
          return new (t || TicketEngineerModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TicketEngineerModule, {
          declarations: [_ticket_engineer_component__WEBPACK_IMPORTED_MODULE_4__["TicketEngineerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]],
          exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TicketEngineerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_ticket_engineer_component__WEBPACK_IMPORTED_MODULE_4__["TicketEngineerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]],
            exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]]
          }]
        }], null, null);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 16);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "", ctx_r5.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function TicketEngineerComponent_table_12_tr_14_img_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 16);
        }

        if (rf & 2) {
          var x_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", x_r3.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function TicketEngineerComponent_table_12_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TicketEngineerComponent_table_12_tr_14_img_4_Template, 1, 1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, TicketEngineerComponent_table_12_tr_14_img_5_Template, 1, 1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var x_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r4 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r3.EngineerLogo.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", x_r3.EngineerLogo.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r3.EngineerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r3.EngineerPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r3.EngineerEmail);
        }
      }

      function TicketEngineerComponent_table_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "SNo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, TicketEngineerComponent_table_12_tr_14_Template, 13, 6, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.service.Engineerlist);
        }
      }

      function TicketEngineerComponent_i_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 17);
        }
      }

      var TicketEngineerComponent = /*#__PURE__*/function () {
        function TicketEngineerComponent(service, ticketservice, loginservice) {
          var _this = this;

          _classCallCheck(this, TicketEngineerComponent);

          this.service = service;
          this.ticketservice = ticketservice;
          this.loginservice = loginservice;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        }

        _createClass(TicketEngineerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.service.Engineerlist = [];
            setTimeout(function () {
              _this2.service.refrestAssinedEngineersList(_this2.currentUser.Token, _this2.ticketservice.formData.Id);
            }, 200);
          }
        }]);

        return TicketEngineerComponent;
      }();

      TicketEngineerComponent.??fac = function TicketEngineerComponent_Factory(t) {
        return new (t || TicketEngineerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_engineer_service__WEBPACK_IMPORTED_MODULE_2__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      TicketEngineerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TicketEngineerComponent,
        selectors: [["app-ticket-engineer"]],
        decls: 16,
        vars: 5,
        consts: [[2, "color", "#ff0909"], [1, "btn", "text-danger", "pull-right", 3, "mat-dialog-close"], [1, "form-row"], [1, "form-group", "col-md-12"], ["class", "table", 4, "ngIf"], [1, "row"], ["class", "fa fa-spinner fa-spin", 4, "ngIf"], [1, "table"], [2, "width", "5%"], [2, "width", "10%"], [2, "width", "40%"], [2, "width", "20%"], [2, "width", "25%"], [4, "ngFor", "ngForAsync", "ngForOf"], [1, "engineer-list-class"], ["width", "30px", 3, "src", 4, "ngIf"], ["width", "30px", 3, "src"], [1, "fa", "fa-spinner", "fa-spin"]],
        template: function TicketEngineerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "|");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, TicketEngineerComponent_table_12_Template, 15, 1, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, TicketEngineerComponent_i_15_Template, 1, 0, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.currentUser.Ticket, " Team \xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" \xA0\xA0 ", ctx.currentUser.Ticket, ": # ", ctx.ticketservice.formData.TicketId, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.service.Engineerlist.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.service.Engineerlist);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: [".model-header[_ngcontent-%COMP%]{background: #c3e7fa;padding: 5px;}\n.model-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding: 0.25rem 0.25rem;}\n.tableBodyScroll[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n \n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.tableBodyScroll[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TicketEngineerComponent, [{
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
//# sourceMappingURL=application-ticket-engineer-ticket-engineer-module-es5.js.map