(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-closer-update-popup-closer-update-popup-module"], {
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
    "Ih+R":
    /*!*******************************************************************************!*\
      !*** ./src/app/application/closer-update-popup/closer-update-popup.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: CloserUpdatePopupModule */

    /***/
    function IhR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloserUpdatePopupModule", function () {
        return CloserUpdatePopupModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _closer_update_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./closer-update-popup.component */
      "ko/b");
      /* harmony import */


      var src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/generic-utils/Ticket-Icon-Attachment/TicketIconAttachment.module */
      "A6Rf");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");

      var CloserUpdatePopupModule = function CloserUpdatePopupModule() {
        _classCallCheck(this, CloserUpdatePopupModule);
      };

      CloserUpdatePopupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CloserUpdatePopupModule
      });
      CloserUpdatePopupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CloserUpdatePopupModule_Factory(t) {
          return new (t || CloserUpdatePopupModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_6__["TicketIconAttachmentModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CloserUpdatePopupModule, {
          declarations: [_closer_update_popup_component__WEBPACK_IMPORTED_MODULE_5__["CloserUpdatePopupComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_6__["TicketIconAttachmentModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloserUpdatePopupModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_closer_update_popup_component__WEBPACK_IMPORTED_MODULE_5__["CloserUpdatePopupComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], src_app_generic_utils_Ticket_Icon_Attachment_TicketIconAttachment_module__WEBPACK_IMPORTED_MODULE_6__["TicketIconAttachmentModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"]],
            exports: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "nXz1":
    /*!****************************************************!*\
      !*** ./src/app/services/DocumentUpload.service.ts ***!
      \****************************************************/

    /*! exports provided: DocumentUploadService */

    /***/
    function nXz1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentUploadService", function () {
        return DocumentUploadService;
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

      var DocumentUploadService = /*#__PURE__*/function () {
        function DocumentUploadService(http) {
          _classCallCheck(this, DocumentUploadService);

          this.http = http;
        }

        _createClass(DocumentUploadService, [{
          key: "uploadDocument",
          value: function uploadDocument(token, access_type, guid, id, remark, file) {
            if (guid === '') {
              guid = '00000000-0000-0000-0000-000000000000';
            }

            if (id === '') {
              id = '0';
            }

            var formData = new FormData();
            formData.append('file', file);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api-aws-doc-upload', formData, {
              reportProgress: true,
              headers: {
                "ACCESS_KEY": src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].Accesskey,
                "ACCESS_TYPE": access_type,
                "ACCESS_TOKEN": token,
                "ACCESS_GUID": guid,
                "ACCESS_Id": id,
                "Remark": remark
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "RemoveDocument",
          value: function RemoveDocument(token, access_type, guid, id, remark) {
            if (guid === '') {
              guid = '00000000-0000-0000-0000-000000000000';
            }

            if (id === '') {
              id = '0';
            }

            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api-aws-doc-remove', {
              reportProgress: true,
              headers: {
                "ACCESS_KEY": src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].Accesskey,
                "ACCESS_TYPE": access_type,
                "ACCESS_TOKEN": token,
                "ACCESS_GUID": guid,
                "ACCESS_Id": id,
                "Remark": remark
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "uploadDocuments",
          value: function uploadDocuments(token, access_type, guid, id, remark, file) {
            if (guid === '') {
              guid = '00000000-0000-0000-0000-000000000000';
            }

            if (id === '') {
              id = '0';
            }

            var formData = new FormData();
            formData.append('file', file);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api-aws-doc-uploads', formData, {
              reportProgress: true,
              headers: {
                "ACCESS_KEY": src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].Accesskey,
                "ACCESS_TYPE": access_type,
                "ACCESS_TOKEN": token,
                "ACCESS_GUID": guid,
                "ACCESS_Id": id,
                "Remark": remark
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "uploadBase64Document",
          value: function uploadBase64Document(token, access_type, guid, id, base64, name, size) {
            if (guid === '') {
              guid = '00000000-0000-0000-0000-000000000000';
            }

            if (id === '') {
              id = '0';
            }

            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api-aws-doc-base64-upload', {
              "Base64": base64
            }, {
              reportProgress: true,
              headers: {
                "ACCESS_KEY": src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].Accesskey,
                "ACCESS_TYPE": access_type,
                "ACCESS_TOKEN": token,
                "ACCESS_GUID": guid,
                "ACCESS_Id": id,
                "Base64Name": name,
                "Base64Size": size,
                'Content-Type': 'application/json'
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }]);

        return DocumentUploadService;
      }();

      DocumentUploadService.ɵfac = function DocumentUploadService_Factory(t) {
        return new (t || DocumentUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      DocumentUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DocumentUploadService,
        factory: DocumentUploadService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentUploadService, [{
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
//# sourceMappingURL=application-closer-update-popup-closer-update-popup-module-es5.js.map