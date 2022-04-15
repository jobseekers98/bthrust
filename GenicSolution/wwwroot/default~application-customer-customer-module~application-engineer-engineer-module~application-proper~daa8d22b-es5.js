(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-customer-customer-module~application-engineer-engineer-module~application-proper~daa8d22b"], {
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
    "wyZL":
    /*!**************************************************!*\
      !*** ./src/app/services/closerDetails.module.ts ***!
      \**************************************************/

    /*! exports provided: CloserDetails, CloserAttachment, CloserAttachmentAduio */

    /***/
    function wyZL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloserDetails", function () {
        return CloserDetails;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloserAttachment", function () {
        return CloserAttachment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloserAttachmentAduio", function () {
        return CloserAttachmentAduio;
      });

      var CloserDetails = function CloserDetails() {
        _classCallCheck(this, CloserDetails);
      };

      var CloserAttachment = function CloserAttachment() {
        _classCallCheck(this, CloserAttachment);
      };

      var CloserAttachmentAduio = function CloserAttachmentAduio() {
        _classCallCheck(this, CloserAttachmentAduio);
      };
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

    },

    /***/
    "y96C":
    /*!*************************************************!*\
      !*** ./src/app/services/serviceform.service.ts ***!
      \*************************************************/

    /*! exports provided: ServiceformService */

    /***/
    function y96C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceformService", function () {
        return ServiceformService;
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


      var _closerDetails_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./closerDetails.module */
      "wyZL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");

      var ServiceformService = /*#__PURE__*/function () {
        function ServiceformService(http, loginservice) {
          _classCallCheck(this, ServiceformService);

          this.http = http;
          this.loginservice = loginservice;
          this.TicketWiseServiceFormData = {
            TicketServiceID: 0,
            MasterServiceFormID: 0,
            ServicePrefix: '',
            ServiceFormName: '',
            Description: '',
            TicketId: '00000000-0000-0000-0000-000000000000',
            TicketNo: '',
            IsActive: false,
            IsPreview: true,
            ServiceFormSequenceId: 0,
            ServiceDate: new Date(),
            TicketDate: new Date(),
            EngineerId: '00000000-0000-0000-0000-000000000000',
            EngineerName: '',
            IsHTML: false,
            ClientformIdOnSave: 0,
            CloserId: '00000000-0000-0000-0000-000000000000'
          };
          this.CloserDetailsData = new _closerDetails_module__WEBPACK_IMPORTED_MODULE_2__["CloserDetails"]();
          this.SetBlankServiceFormValue();
        }

        _createClass(ServiceformService, [{
          key: "SetBlankServiceFormValue",
          value: function SetBlankServiceFormValue() {
            this.FSMServiceFormData = {
              Id: 0,
              SelectOne: 'Service Call',
              MaintenanceContract: 'No',
              Request: '',
              Diagnose: '',
              JobDone: '',
              Remark: '',
              ServiceTicketStatus: 'Pending',
              CloserId: ''
            };
          }
        }, {
          key: "removeAssignedServiceForm",
          value: function removeAssignedServiceForm(token, Id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Services/DeleteAssignedServiceForm/' + token + '/' + Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "asignServiceformToTicket",
          value: function asignServiceformToTicket(token) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Services/asignServiceformToTicket/' + token, this.tempTicketwiseServiceFormList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "getAssignedServiceFormListByTicket",
          value: function getAssignedServiceFormListByTicket(token, TicketId) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Services/GetAssignedServiceFormByTicket/' + token + '/' + TicketId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          } // GET: Closer Details form cliend service form

        }, {
          key: "getCloserDetailsFormServiceForm",
          value: function getCloserDetailsFormServiceForm(TicketId) {
            var _this = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Services/getCloserDetailsFormServiceForm/' + TicketId).toPromise().then(function (res) {
              return _this.CloserDetailsData = res;
            });
          }
        }, {
          key: "downoadServiceFormPDF",
          value: function downoadServiceFormPDF(CloserId) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Services/getServiceFormPDF/' + CloserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (Response) {
              return Response;
            }));
          } // downloadFileXHR(filePath, fileName) {
          //   var xhh = new XMLHttpRequest()
          //   xhh.setRequestHeader('Accept', '*/*');
          //   xhh.open('get', filePath)
          //   xhh.responseType = 'blob'
          //   xhh.onreadystatechange = function () {
          //     if (xhh.readyState === 4 && xhh.status === 200) {
          //       var blob = new Blob([xhh.response])
          //       var csvUrl = URL.createObjectURL(blob)
          //       var link = document.createElement('a')
          //       link.href = csvUrl
          //       link.download = fileName
          //       link.click()
          //     }
          //   }
          //   xhh.send()
          // }
          // //#region Hypercom Service Form
          // postServiceformData(token: string, TicketId: string, EngineerId: string, ServiceFormSequenceId: number) {
          //   return this.http.post(environment.apiUrl + '/api/Services/postServiceForm/' + token + '/'
          //   + TicketId + '/' + EngineerId + '/' + ServiceFormSequenceId, this.formDataList, {
          //     headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
          //     observe: 'response' }).pipe();
          // }
          // viewServiceFormDetails(MasterServiceFormId: number, ServiceFormSequenceId: number, TicketId: string, EngineerId: string) {
          //   return this.http.get(environment.apiUrl + '/api/Services/viewServiceFormDetails/' + MasterServiceFormId + '/' + ServiceFormSequenceId + '/' + TicketId + '/' + EngineerId).pipe(map(Response => Response));
          // }
          // getServiceForm(id: number) {
          //   return this.http.get(environment.apiUrl + '/api/Services/getServiceForm/' + id).pipe(map(Response => Response));
          // }
          // getMasterServiceformList(token: string) {
          //   return this.http.get(environment.apiUrl + '/api/Services/GetMasterServiceForm/' + token).pipe(map(Response => Response));
          // }

        }, {
          key: "CheckServiceFormStatus",
          value: function CheckServiceFormStatus(token, closerid) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Services/CheckServiceFormStatus/' + token + '/' + closerid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (Response) {
              return Response;
            }));
          } // //#endregion
          //#region FSM Service Form

        }, {
          key: "getFSMServiceFormById",
          value: function getFSMServiceFormById(token, Id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Services/GetServiceFormById/' + token + '/' + Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "putFSMServiceFormDetails",
          value: function putFSMServiceFormDetails(token, TicketId, ispreview) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Services/PutServiceForm/' + token + '/' + TicketId + '/' + ispreview, this.FSMServiceFormData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "postFSMServiceFormDetails",
          value: function postFSMServiceFormDetails(token, TicketId, SequenceId, ispreview) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Services/PostServiceForm/' + token + '/' + TicketId + '/' + SequenceId + '/' + ispreview, this.FSMServiceFormData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            }));
          }
        }]);

        return ServiceformService;
      }();

      ServiceformService.ɵfac = function ServiceformService_Factory(t) {
        return new (t || ServiceformService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]));
      };

      ServiceformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ServiceformService,
        factory: ServiceformService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceformService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~application-customer-customer-module~application-engineer-engineer-module~application-proper~daa8d22b-es5.js.map