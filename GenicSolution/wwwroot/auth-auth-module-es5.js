(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "+Vqv":
    /*!**********************************************!*\
      !*** ./src/app/auth/from-drive.component.ts ***!
      \**********************************************/

    /*! exports provided: FromDriveComponent */

    /***/
    function Vqv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FromDriveComponent", function () {
        return FromDriveComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FromDriveComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Authenticate... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var FromDriveComponent = /*#__PURE__*/function () {
        function FromDriveComponent(service, router, route1, toastr) {
          var _this = this;

          _classCallCheck(this, FromDriveComponent);

          this.service = service;
          this.router = router;
          this.route1 = route1;
          this.toastr = toastr;
          this.loading = false;
          this.service.currentUser.subscribe(function (x) {
            return _this.currentUser = x;
          });
        }

        _createClass(FromDriveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            try {
              var token = this.route1.snapshot.queryParamMap.get('t');
              var aut = this.route1.snapshot.queryParamMap.get('a');

              if (token === null) {
                this.router.navigate(['/auth/']);
              }

              if (aut === null) {
                this.router.navigate(['/auth/']);
              }

              if (this.currentUser === null) {
                this.login(aut);
              } else {
                if (this.currentUser.Token === token) {
                  this.router.navigate(['/dashboard/']);
                } else {
                  this.login(aut);
                }
              }
            } catch (_a) {
              this.router.navigate(['/auth/']);
            }
          }
        }, {
          key: "login",
          value: function login(Id) {
            var _this2 = this;

            this.loading = true;
            this.service.Drivelogin(Id).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this2.router.navigate(['/dashboard/']);

                  _this2.loading = false;
                }

                if (response.Message === 'failure') {
                  _this2.toastr.warning(response.MessageDescription);

                  _this2.loading = false;
                }
              }
            }, function (error) {
              console.log(error);
              _this2.loading = false;
            });
          }
        }]);

        return FromDriveComponent;
      }();

      FromDriveComponent.??fac = function FromDriveComponent_Factory(t) {
        return new (t || FromDriveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      FromDriveComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FromDriveComponent,
        selectors: [["ng-component"]],
        decls: 1,
        vars: 1,
        consts: [["class", "row", "style", "background-color: blue;font-size: 15px;color: white;", 4, "ngIf"], [1, "row", 2, "background-color", "blue", "font-size", "15px", "color", "white"], [1, "col", "text-center"], ["role", "status", 1, "spinner-grow", "text-success"], [1, "sr-only"]],
        template: function FromDriveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, FromDriveComponent_div_0_Template, 6, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FromDriveComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: "\n           <div *ngIf=\"loading\" class=\"row\" style=\"background-color: blue;font-size: 15px;color: white;\">\n              <div class=\"col text-center\">\n                <div class=\"spinner-grow text-success\" role=\"status\">\n                  <span class=\"sr-only\">Loading...</span>\n                </div>Authenticate...\n              </div>\n          </div>\n          ",
            styles: [""]
          }]
        }], function () {
          return [{
            type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LS6v":
    /*!****************************************!*\
      !*** ./src/app/auth/auth.component.ts ***!
      \****************************************/

    /*! exports provided: AuthComponent */

    /***/
    function LS6v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AuthComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.error);
        }
      }

      function AuthComponent_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Username is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AuthComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AuthComponent_div_16_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.UserName.errors.required);
        }
      }

      function AuthComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AuthComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AuthComponent_div_21_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.f.Password.errors.required);
        }
      }

      function AuthComponent_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 24);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent(titleService, service, formBuilder, route, router, toastr) {
          var _this3 = this;

          _classCallCheck(this, AuthComponent);

          this.titleService = titleService;
          this.service = service;
          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.toastr = toastr;
          this.title = 'ClientApp';
          this.loading = false;
          this.submitted = false;
          this.error = '';
          this.service.currentUser.subscribe(function (x) {
            return _this3.currentUser = x;
          });
          this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;

          if (this.service.currentUserValue) {// this.router.navigate(['/']);
          }
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.titleService.setTitle('Login | Genic Solution');
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            this.error = '';
            this.submitted = true;

            if (this.loginForm.invalid) {
              return;
            }

            this.loading = true;
            this.service.login(this.f.UserName.value, this.f.Password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (res) {
              _this4.router.navigate([_this4.returnUrl]);
            }, function (error) {
              switch (error.status) {
                case 404:
                  _this4.toastr.warning('warning', _this4.ErrorMessage(error.status));

                  _this4.error = _this4.ErrorMessage(error.status);
                  break;

                case 401:
                  _this4.toastr.warning('warning', _this4.ErrorMessage(error.status));

                  _this4.error = _this4.ErrorMessage(error.status);
                  break;

                case 400:
                  _this4.toastr.warning('warning', _this4.ErrorMessage(error.status));

                  _this4.error = _this4.ErrorMessage(error.status);
                  break;

                default:
                  _this4.toastr.error('error', error.statusText);

                  break;
              }
            });
            this.loading = false;
          }
        }, {
          key: "ErrorMessage",
          value: function ErrorMessage(code) {
            switch (code) {
              case 404:
                return 'Invalid username & password';

              case 401:
                return 'Your account is inactive';

              case 400:
                return 'Make sure your Username and Password should be Case Sensitive';
            }
          }
        }]);

        return AuthComponent;
      }();

      AuthComponent.??fac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]));
      };

      AuthComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 34,
        vars: 12,
        consts: [[1, "auth"], [1, "container"], [1, "row"], [1, "card"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card-body", "pt-0"], [1, "white-text", "text-left", "py-4"], ["action", "#!", 1, "text-left", 2, "color", "#757575", 3, "formGroup", "ngSubmit"], [1, "md-form"], ["for", "txtUserName"], ["type", "text", "formControlName", "UserName", "id", "txtUserName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "txtPassword"], ["type", "password", "formControlName", "Password", "id", "txtPassword", 1, "form-control", 3, "ngClass"], [1, "d-flex", "justify-content-between"], [1, "form-check"], ["type", "checkbox", "formControlName", "rememberMe", "id", "rememberMe", 1, "form-check-input"], ["for", "materialLoginFormRemember", 1, "form-check-label"], ["href", "javascript:;", "routerLink", "/auth/users/forgot-password"], ["type", "submit", 1, "btn", "btn-outline-info", "btn-rounded", "btn-block", "my-4", "waves-effect", "z-depth-0", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, AuthComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Enter your detail below to continue. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_11_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "E-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, AuthComponent_div_16_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, AuthComponent_div_21_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Remember me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, AuthComponent_span_32_Template, 1, 0, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, ctx.submitted && ctx.f.UserName.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.UserName.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, ctx.submitted && ctx.f.Password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.Password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        styles: [""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styles: [""]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }, {
            type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Wdrl":
    /*!************************************************************!*\
      !*** ./src/app/auth/customer-ticket-feedback.component.ts ***!
      \************************************************************/

    /*! exports provided: CustomerTicketFeedbackComponent */

    /***/
    function Wdrl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerTicketFeedbackComponent", function () {
        return CustomerTicketFeedbackComponent;
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


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _services_generic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/generic.service */
      "G5QB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.component */
      "Sh6L");

      function CustomerTicketFeedbackComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("(#", ctx_r0.tempdata.result.TicketId, ")");
        }
      }

      function CustomerTicketFeedbackComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "generic-ticket-feedback", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ratingcountChange", function CustomerTicketFeedbackComponent_div_8_Template_generic_ticket_feedback_ratingcountChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.ratingcount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "please let me know your feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keydown", function CustomerTicketFeedbackComponent_div_8_Template_textarea_keydown_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r6.onkeypress($event.target.value);
          })("keyup", function CustomerTicketFeedbackComponent_div_8_Template_textarea_keyup_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r7.onkeypress($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ratingcount", ctx_r1.ratingcount)("Editable", 1)("Status", "CLOSED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1._feedbackcount, "/500");
        }
      }

      function CustomerTicketFeedbackComponent_div_9_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerTicketFeedbackComponent_div_9_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r10.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomerTicketFeedbackComponent_div_9_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Loading... Please wait");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomerTicketFeedbackComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerTicketFeedbackComponent_div_9_button_1_Template, 3, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CustomerTicketFeedbackComponent_div_9_button_2_Template, 2, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.IsLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.IsLoading);
        }
      }

      function CustomerTicketFeedbackComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "generic-ticket-feedback", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ratingcountChange", function CustomerTicketFeedbackComponent_div_10_Template_generic_ticket_feedback_ratingcountChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r12.ratingcount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "textarea", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ratingcount", ctx_r3.ratingcount)("Editable", 0)("Status", "CLOSED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r3.val);
        }
      }

      var CustomerTicketFeedbackComponent = /*#__PURE__*/function () {
        function CustomerTicketFeedbackComponent(route1, loginservice, genericservice) {
          var _this5 = this;

          _classCallCheck(this, CustomerTicketFeedbackComponent);

          this.route1 = route1;
          this.loginservice = loginservice;
          this.genericservice = genericservice;
          this.isValid = false;
          this.IsLoading = false;
          this._feedbackcount = 0;
          this.ratingcount = 0;
          this.alreadyfeedback = false;
          this.val = '';
          this.loginservice.currentUser.subscribe(function (x) {
            return _this5.currentUser = x;
          });
        }

        _createClass(CustomerTicketFeedbackComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            var Id = this.route1.snapshot.queryParamMap.get('i');
            var rating = this.route1.snapshot.queryParamMap.get('r');
            var token = this.route1.snapshot.queryParamMap.get('t');

            if (Id === null || rating === null || token === null) {
              this.text1 = "We're sorry. We were not able to find a match.";
              this.class1 = 'alert alert-danger display-4';
            }

            var _rating = Number(rating);

            this.genericservice.ratingcount = _rating;
            this.genericservice.getTicketFreedback(Id, _rating, token).subscribe(function (res) {
              if (res) {
                var response = res;
                _this6.genericservice.ratingcount = response.result.Rating;
                _this6.ratingcount = _this6.genericservice.ratingcount;

                if (response.Message === 'success') {
                  _this6.tempdata = response;
                  _this6.isValid = true;
                }

                if (response.Message === 'failure') {
                  _this6.text1 = response.MessageDescription;
                  _this6.class1 = 'alert alert-warning display-5';
                  _this6.alreadyfeedback = true; //var description = <HTMLInputElement>document.getElementById('Description').valu;

                  _this6.val = response.result.RatingFeedback;
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this7 = this;

            this.IsLoading = true;
            var Id = this.route1.snapshot.queryParamMap.get('i');
            var token = this.route1.snapshot.queryParamMap.get('t');
            var _rating = this.genericservice.ratingcount;
            var description = document.getElementById('Description');
            this.genericservice.putTicketFreedback(Id, _rating, description.value, token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this7.text1 = response.MessageDescription;
                  _this7.class1 = 'alert alert-success display-4';
                  _this7.isValid = false;
                  _this7.IsLoading = false;
                }

                if (response.Message === 'failure') {
                  _this7.text1 = response.MessageDescription;
                  _this7.class1 = 'alert alert-warning display-4';
                  _this7.IsLoading = false;
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onkeypress",
          value: function onkeypress(v) {
            this._feedbackcount = v.length;
          }
        }, {
          key: "rating",
          value: function rating(r) {
            this.ratingcount = r;
          }
        }]);

        return CustomerTicketFeedbackComponent;
      }();

      CustomerTicketFeedbackComponent.??fac = function CustomerTicketFeedbackComponent_Factory(t) {
        return new (t || CustomerTicketFeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_generic_service__WEBPACK_IMPORTED_MODULE_3__["GenericService"]));
      };

      CustomerTicketFeedbackComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CustomerTicketFeedbackComponent,
        selectors: [["app-customer-ticket-feedback"]],
        decls: 16,
        vars: 8,
        consts: [[1, "Container"], [1, "row", "p-5"], [1, "col-sm-0", "col-md-1", "col-lg-2", "col-xl-3"], [1, "col-sm-12", "col-md-10", "col-lg-8", "col-xl-6", "border-1"], [1, "display-4", "text-center"], [4, "ngIf"], ["class", "form-row", 4, "ngIf"], [1, "form-row", "text-center"], [1, "col"], [1, "form-row"], [1, "form-group", "col-md-12"], [3, "ratingcount", "Editable", "Status", "ratingcountChange"], [1, "row", "mt-5"], ["rows", "4", "id", "Description", "maxlength", "500", "placeholder", "please let me know your feedback", 1, "form-control", 3, "keydown", "keyup"], [1, "ticket-feedback"], ["type", "submit", "class", "btn btn-primary btn-block", 3, "click", 4, "ngIf"], ["disabled", "", "class", "btn btn-success btn-block", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "click"], ["disabled", "", 1, "btn", "btn-success", "btn-block"], ["rows", "10", "id", "Description", "maxlength", "500", "placeholder", "please let me know your feedback", "disabled", "", 1, "form-control", 3, "value"]],
        template: function CustomerTicketFeedbackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Job Feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, CustomerTicketFeedbackComponent_span_6_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, CustomerTicketFeedbackComponent_div_8_Template, 10, 4, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, CustomerTicketFeedbackComponent_div_9_Template, 3, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, CustomerTicketFeedbackComponent_div_10_Template, 6, 4, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.alreadyfeedback);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.class1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.text1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_component__WEBPACK_IMPORTED_MODULE_5__["TicketFeedbackComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerTicketFeedbackComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-customer-ticket-feedback',
            templateUrl: 'customer-ticket-feedback.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }, {
            type: _services_generic_service__WEBPACK_IMPORTED_MODULE_3__["GenericService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
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


      var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.component */
      "LS6v");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _from_drive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./from-drive.component */
      "+Vqv");
      /* harmony import */


      var _customer_quote_for_signature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customer-quote-for-signature.component */
      "fgqT");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");
      /* harmony import */


      var _customer_ticket_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./customer-ticket-feedback.component */
      "Wdrl");
      /* harmony import */


      var _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../generic-utils/Ticket-Feedback-Component/TicketFeedbackComponent.module */
      "HdV0");

      var routes = [{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]
      }, {
        path: 'from-drive',
        component: _from_drive_component__WEBPACK_IMPORTED_MODULE_5__["FromDriveComponent"]
      }, {
        path: 'customer-quote-for-signature',
        component: _customer_quote_for_signature_component__WEBPACK_IMPORTED_MODULE_6__["CustomerQuoteForSignatureComponent"]
      }, {
        path: 'customer-ticket-feedback',
        component: _customer_ticket_feedback_component__WEBPACK_IMPORTED_MODULE_8__["CustomerTicketFeedbackComponent"]
      }];

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthModule
      });
      AuthModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"], _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_9__["TicketFeedbackComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthModule, {
          declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"], _from_drive_component__WEBPACK_IMPORTED_MODULE_5__["FromDriveComponent"], _customer_quote_for_signature_component__WEBPACK_IMPORTED_MODULE_6__["CustomerQuoteForSignatureComponent"], _customer_ticket_feedback_component__WEBPACK_IMPORTED_MODULE_8__["CustomerTicketFeedbackComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"], _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_9__["TicketFeedbackComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"], _from_drive_component__WEBPACK_IMPORTED_MODULE_5__["FromDriveComponent"], _customer_quote_for_signature_component__WEBPACK_IMPORTED_MODULE_6__["CustomerQuoteForSignatureComponent"], _customer_ticket_feedback_component__WEBPACK_IMPORTED_MODULE_8__["CustomerTicketFeedbackComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"], _generic_utils_Ticket_Feedback_Component_TicketFeedbackComponent_module__WEBPACK_IMPORTED_MODULE_9__["TicketFeedbackComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "fgqT":
    /*!****************************************************************!*\
      !*** ./src/app/auth/customer-quote-for-signature.component.ts ***!
      \****************************************************************/

    /*! exports provided: CustomerQuoteForSignatureComponent */

    /***/
    function fgqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerQuoteForSignatureComponent", function () {
        return CustomerQuoteForSignatureComponent;
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


      var src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/userlog.service */
      "V05N");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/quote.service */
      "uOqW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");

      var _c0 = ["SignaturePad2"];

      function CustomerQuoteForSignatureComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("(", ctx_r0.quoteService.QuoteData.QuoteId, ")");
        }
      }

      function CustomerQuoteForSignatureComponent_div_8_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function CustomerQuoteForSignatureComponent_div_8_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function CustomerQuoteForSignatureComponent_div_8_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\xA0\xA0\xA0\xA0Signature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "signature-pad", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerQuoteForSignatureComponent_div_8_div_9_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r9.cleareCustomerCloserSignature();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Clear signature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx_r5.CustomerSignaturePadOption);
        }
      }

      function CustomerQuoteForSignatureComponent_div_8_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function CustomerQuoteForSignatureComponent_div_8_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function CustomerQuoteForSignatureComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerQuoteForSignatureComponent_div_8_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.SetStatus(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, CustomerQuoteForSignatureComponent_div_8_ng_container_6_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, CustomerQuoteForSignatureComponent_div_8_ng_container_7_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Accept ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, CustomerQuoteForSignatureComponent_div_8_div_9_Template, 11, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerQuoteForSignatureComponent_div_8_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r13.SetStatus(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, CustomerQuoteForSignatureComponent_div_8_ng_container_12_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, CustomerQuoteForSignatureComponent_div_8_ng_container_13_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Reject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.temptQuoteStatus === 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.temptQuoteStatus !== 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.temptQuoteStatus === 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.temptQuoteStatus === 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.temptQuoteStatus !== 5);
        }
      }

      function CustomerQuoteForSignatureComponent_div_9_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerQuoteForSignatureComponent_div_9_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r16.InsertESignature(ctx_r16.temptQuoteStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Save & Send Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomerQuoteForSignatureComponent_div_9_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Loading... Please wait");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CustomerQuoteForSignatureComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerQuoteForSignatureComponent_div_9_button_1_Template, 2, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CustomerQuoteForSignatureComponent_div_9_button_2_Template, 2, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.IsLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.IsLoading);
        }
      }

      var CustomerQuoteForSignatureComponent = /*#__PURE__*/function () {
        function CustomerQuoteForSignatureComponent(route1, logService, loginservice, quoteService) {
          var _this8 = this;

          _classCallCheck(this, CustomerQuoteForSignatureComponent);

          this.route1 = route1;
          this.logService = logService;
          this.loginservice = loginservice;
          this.quoteService = quoteService;
          this.CustomerSignaturePadOption = {
            ' minWidth': 2,
            pecColor: 'rgb(66,133,244)',
            backgroundcolor: 'rgb(255,255,255)',
            canvasWidth: 500,
            canvasHeight: 200
          };
          this.temptQuoteStatus = 0;
          this.isValid = false;
          this.IsLoading = false;
          this.loginservice.currentUser.subscribe(function (x) {
            return _this8.currentUser = x;
          });
        }

        _createClass(CustomerQuoteForSignatureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            var Id = this.route1.snapshot.queryParamMap.get('i');
            var token = this.route1.snapshot.queryParamMap.get('t');

            if (Id === null) {
              this.text1 = 'This is invalid request.';
              this.class1 = 'alert alert-danger display-3';
            }

            this.quoteService.getQuoteDetailsForSign(Id, token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this9.quoteService.QuoteData = response.result;
                  _this9.temptQuoteStatus = Number(_this9.quoteService.QuoteData.Status);
                  _this9.isValid = true;
                }

                if (response.Message === 'failure') {
                  _this9.text1 = response.MessageDescription;
                  _this9.class1 = 'alert alert-warning display-3';
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "SetStatus",
          value: function SetStatus(Status) {
            this.temptQuoteStatus = Status;
          }
        }, {
          key: "InsertESignature",
          value: function InsertESignature(Status) {
            var _this10 = this;

            this.IsLoading = true;
            var token = this.route1.snapshot.queryParamMap.get('t');

            if (Status === 4) {
              var CustBase64 = this.CustomerSingnaturePad.toDataURL('image/png');
              this.quoteService.QuoteData.CustomerSignature = CustBase64;
              this.quoteService.QuoteData.Status = 4;
            }

            if (Status === 5) {
              this.quoteService.QuoteData.CustomerSignature = '';
              this.quoteService.QuoteData.Status = 5;
            }

            this.quoteService.updateQuoteSignaturewithRemark(token).subscribe(function (res) {
              if (res) {
                var response = res;

                if (response.Message === 'success') {
                  _this10.quoteService.QuoteData = response.result;
                  _this10.temptQuoteStatus = Number(_this10.quoteService.QuoteData.Status);
                  _this10.text1 = response.MessageDescription;
                  _this10.class1 = 'alert alert-success display-5';
                  _this10.isValid = false;
                  _this10.IsLoading = false;
                }

                if (response.Message === 'failure') {
                  _this10.text1 = response.MessageDescription;
                  _this10.class1 = 'alert alert-warning display-5';
                  _this10.IsLoading = false;
                }
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "cleareCustomerCloserSignature",
          value: function cleareCustomerCloserSignature() {
            this.CustomerSingnaturePad.clear();
          }
        }]);

        return CustomerQuoteForSignatureComponent;
      }();

      CustomerQuoteForSignatureComponent.??fac = function CustomerQuoteForSignatureComponent_Factory(t) {
        return new (t || CustomerQuoteForSignatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_2__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]));
      };

      CustomerQuoteForSignatureComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CustomerQuoteForSignatureComponent,
        selectors: [["app-customer-quote-for-signature"]],
        viewQuery: function CustomerQuoteForSignatureComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.CustomerSingnaturePad = _t.first);
          }
        },
        decls: 15,
        vars: 7,
        consts: [[1, "Container"], [1, "row"], [1, "col-sm-0", "col-md-3", "col-lg-3", "col-xl-3"], [1, "col-sm-12", "col-md-6", "col-lg-6", "col-xl-6"], [1, "display-4"], [4, "ngIf"], ["class", "form-row", 4, "ngIf"], [1, "form-row"], [1, "col"], [1, "form-group", "col-md-12"], [1, "kt-radio-list"], [1, "myStatus"], ["href", "javascript:void(0)", 3, "click"], ["class", "signature", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "AcceptStatus"], ["aria-hidden", "true", 1, "far", "fa-circle", "OtherStatus"], [1, "signature"], [1, "row", "forn-group"], ["id", "CloseSignarePad", 1, "m-signature-pad", "CloseSignarePad"], [1, "m-signature-pad-body"], [3, "options"], ["SignaturePad2", ""], [1, "btnRemoveSection", 3, "click"], ["type", "submit", "class", "btn btn-primary btn-block", 3, "click", 4, "ngIf"], ["disabled", "", "class", "btn btn-success btn-block", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "click"], ["disabled", "", 1, "btn", "btn-success", "btn-block"]],
        template: function CustomerQuoteForSignatureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Quotation for Signature ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, CustomerQuoteForSignatureComponent_span_6_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, CustomerQuoteForSignatureComponent_div_8_Template, 15, 5, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, CustomerQuoteForSignatureComponent_div_9_Template, 3, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isValid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.class1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.text1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__["SignaturePad"]],
        styles: [".Container[_ngcontent-%COMP%] {\n        overflow-y: auto !important;\n        overflow-x: hidden;\n        min-height: 22px;\n        max-height: 100vh;\n    }\n\n    .myStatus[_ngcontent-%COMP%] {\n        width: 100%;\n        background-color: cyan;\n        padding: 6px 6px;\n        margin: 0 0 1px 0;\n        border: 1px solid #ad5a2242;\n    }\n\n    .myStatus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin: 0px 0 0 11px;\n        color: black;\n        font-size: initial;\n    }\n\n    .AcceptStatus[_ngcontent-%COMP%] {\n        margin: 0 5px 0 0;\n        color: green;\n    }\n\n    .OtherStatus[_ngcontent-%COMP%] {\n        margin: 0 5px 0 0;\n        color: #847a74;\n    }\n\n    .signature[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 280px;\n        border: 1px solid #ad5a2242;\n    }\n\n    .btnRemoveSection[_ngcontent-%COMP%] {\n        background-color: #fcb822;\n        color: black;\n        padding: 2px 15px;\n        float: left;\n        margin-top: 2px;\n        cursor: pointer;\n    }\n    .wd-1024[_ngcontent-%COMP%] { width: 1024px; }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerQuoteForSignatureComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-customer-quote-for-signature',
            templateUrl: 'customer-quote-for-signature.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_app_services_userlog_service__WEBPACK_IMPORTED_MODULE_2__["UserlogService"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]
          }];
        }, {
          CustomerSingnaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['SignaturePad2', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map