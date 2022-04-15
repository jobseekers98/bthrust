(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-engineer-engineer-module~application-profile-profiles-module~userprofile-userpro~1f3d59d8"], {
    /***/
    "/t3+":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js ***!
      \*************************************************************************/

    /*! exports provided: MatToolbar, MatToolbarModule, MatToolbarRow, throwToolbarMixedModesError */

    /***/
    function t3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbar", function () {
        return MatToolbar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function () {
        return MatToolbarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function () {
        return MatToolbarRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function () {
        return throwToolbarMixedModesError;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatToolbar.

      /** @docs-private */


      var _c0 = ["*", [["mat-toolbar-row"]]];
      var _c1 = ["*", "mat-toolbar-row"];

      var MatToolbarBase = function MatToolbarBase(_elementRef) {
        _classCallCheck(this, MatToolbarBase);

        this._elementRef = _elementRef;
      };

      var _MatToolbarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatToolbarBase);

      var MatToolbarRow = function MatToolbarRow() {
        _classCallCheck(this, MatToolbarRow);
      };

      MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
        return new (t || MatToolbarRow)();
      };

      MatToolbarRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatToolbarRow,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-toolbar-row',
            exportAs: 'matToolbarRow',
            host: {
              'class': 'mat-toolbar-row'
            }
          }]
        }], null, null);
      })();

      var MatToolbar = /*#__PURE__*/function (_MatToolbarMixinBase2) {
        _inherits(MatToolbar, _MatToolbarMixinBase2);

        var _super = _createSuper(MatToolbar);

        function MatToolbar(elementRef, _platform, document) {
          var _this;

          _classCallCheck(this, MatToolbar);

          _this = _super.call(this, elementRef);
          _this._platform = _platform; // TODO: make the document a required param when doing breaking changes.

          _this._document = document;
          return _this;
        }

        _createClass(MatToolbar, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            if (this._platform.isBrowser) {
              this._checkToolbarMixedModes();

              this._toolbarRows.changes.subscribe(function () {
                return _this2._checkToolbarMixedModes();
              });
            }
          }
          /**
           * Throws an exception when developers are attempting to combine the different toolbar row modes.
           */

        }, {
          key: "_checkToolbarMixedModes",
          value: function _checkToolbarMixedModes() {
            var _this3 = this;

            if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              // Check if there are any other DOM nodes that can display content but aren't inside of
              // a <mat-toolbar-row> element.
              var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(function (node) {
                return !(node.classList && node.classList.contains('mat-toolbar-row'));
              }).filter(function (node) {
                return node.nodeType !== (_this3._document ? _this3._document.COMMENT_NODE : 8);
              }).some(function (node) {
                return !!(node.textContent && node.textContent.trim());
              });

              if (isCombinedUsage) {
                throwToolbarMixedModesError();
              }
            }
          }
        }]);

        return MatToolbar;
      }(_MatToolbarMixinBase);

      MatToolbar.ɵfac = function MatToolbar_Factory(t) {
        return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      MatToolbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatToolbar,
        selectors: [["mat-toolbar"]],
        contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 4,
        hostBindings: function MatToolbar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matToolbar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 0,
        template: function MatToolbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatToolbar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      MatToolbar.propDecorators = {
        _toolbarRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatToolbarRow, {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-toolbar',
            exportAs: 'matToolbar',
            template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
            inputs: ['color'],
            host: {
              'class': 'mat-toolbar',
              '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
              '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          _toolbarRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatToolbarRow, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * Throws an exception when attempting to combine the different toolbar row modes.
       * @docs-private
       */


      function throwToolbarMixedModesError() {
        throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatToolbarModule = function MatToolbarModule() {
        _classCallCheck(this, MatToolbarModule);
      };

      MatToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatToolbarModule
      });
      MatToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatToolbarModule_Factory(t) {
          return new (t || MatToolbarModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatToolbarModule, {
          declarations: function declarations() {
            return [MatToolbar, MatToolbarRow];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatToolbar, MatToolbarRow]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=toolbar.js.map

      /***/

    },

    /***/
    "1jcm":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
      \******************************************************************************/

    /*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */

    /***/
    function jcm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function () {
        return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function () {
        return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function () {
        return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function () {
        return MatSlideToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function () {
        return MatSlideToggleChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function () {
        return MatSlideToggleModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function () {
        return MatSlideToggleRequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function () {
        return _MatSlideToggleRequiredValidatorModule;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for `mat-slide-toggle`. */


      var _c0 = ["thumbContainer"];
      var _c1 = ["toggleBar"];
      var _c2 = ["input"];

      var _c3 = function _c3() {
        return {
          enterDuration: 150
        };
      };

      var _c4 = ["*"];
      var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
        providedIn: 'root',
        factory: function factory() {
          return {
            disableToggleValue: false
          };
        }
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Increasing integer for generating unique ids for slide-toggle components.

      var nextUniqueId = 0;
      /** @docs-private */

      var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlideToggle;
        }),
        multi: true
      };
      /** Change event object emitted by a MatSlideToggle. */

      var MatSlideToggleChange = function MatSlideToggleChange(
      /** The source MatSlideToggle of the event. */
      source,
      /** The new `checked` value of the MatSlideToggle. */
      checked) {
        _classCallCheck(this, MatSlideToggleChange);

        this.source = source;
        this.checked = checked;
      }; // Boilerplate for applying mixins to MatSlideToggle.

      /** @docs-private */


      var MatSlideToggleBase = function MatSlideToggleBase(_elementRef) {
        _classCallCheck(this, MatSlideToggleBase);

        this._elementRef = _elementRef;
      };

      var _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
      /** Represents a slidable "switch" toggle that can be moved between on and off. */


      var MatSlideToggle = /*#__PURE__*/function (_MatSlideToggleMixinB) {
        _inherits(MatSlideToggle, _MatSlideToggleMixinB);

        var _super2 = _createSuper(MatSlideToggle);

        function MatSlideToggle(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, _animationMode) {
          var _this4;

          _classCallCheck(this, MatSlideToggle);

          _this4 = _super2.call(this, elementRef);
          _this4._focusMonitor = _focusMonitor;
          _this4._changeDetectorRef = _changeDetectorRef;
          _this4.defaults = defaults;
          _this4._animationMode = _animationMode;

          _this4._onChange = function (_) {};

          _this4._onTouched = function () {};

          _this4._uniqueId = "mat-slide-toggle-".concat(++nextUniqueId);
          _this4._required = false;
          _this4._checked = false;
          /** Name value will be applied to the input element if present. */

          _this4.name = null;
          /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */

          _this4.id = _this4._uniqueId;
          /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */

          _this4.labelPosition = 'after';
          /** Used to set the aria-label attribute on the underlying input element. */

          _this4.ariaLabel = null;
          /** Used to set the aria-labelledby attribute on the underlying input element. */

          _this4.ariaLabelledby = null;
          /** An event will be dispatched each time the slide-toggle changes its value. */

          _this4.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * An event will be dispatched each time the slide-toggle input is toggled.
           * This event is always emitted when the user toggles the slide toggle, but this does not mean
           * the slide toggle's value has changed.
           */

          _this4.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this4.tabIndex = parseInt(tabIndex) || 0;
          return _this4;
        }
        /** Whether the slide-toggle is required. */


        _createClass(MatSlideToggle, [{
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /** Whether the slide-toggle element is checked or not. */

        }, {
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            this._changeDetectorRef.markForCheck();
          }
          /** Returns the unique id for the visual hidden input. */

        }, {
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this._uniqueId, "-input");
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this5 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (focusOrigin) {
              // Only forward focus manually when it was received programmatically or through the
              // keyboard. We should not do this for mouse/touch focus for two reasons:
              // 1. It can prevent clicks from landing in Chrome (see #18269).
              // 2. They're already handled by the wrapping `label` element.
              if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                _this5._inputElement.nativeElement.focus();
              } else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then(function () {
                  return _this5._onTouched();
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Method being called whenever the underlying input emits a change event. */

        }, {
          key: "_onChangeEvent",
          value: function _onChangeEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the component's `change` output.
            event.stopPropagation();
            this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
            // `disableToggleValue: true`, the slide toggle's value does not change, and the
            // checked state of the underlying input needs to be changed back.

            if (this.defaults.disableToggleValue) {
              this._inputElement.nativeElement.checked = this.checked;
              return;
            } // Sync the value from the underlying input element with the component instance.


            this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
            // there is no change event, when the checked state changes programmatically.

            this._emitChangeEvent();
          }
          /** Method being called whenever the slide-toggle has been clicked. */

        }, {
          key: "_onInputClick",
          value: function _onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `slide-toggle` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.checked = !!value;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /** Implemented as a part of ControlValueAccessor. */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the slide-toggle. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
          }
          /** Toggles the checked state of the slide-toggle. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.checked = !this.checked;

            this._onChange(this.checked);
          }
          /**
           * Emits a change event on the `change` output. Also notifies the FormControl about the change.
           */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._onChange(this.checked);

            this.change.emit(new MatSlideToggleChange(this, this.checked));
          }
          /** Method being called whenever the label text changes. */

        }, {
          key: "_onLabelTextChange",
          value: function _onLabelTextChange() {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
            // slide-toggle component will be only marked for check, but no actual change detection runs
            // automatically. Instead of going back into the zone in order to trigger a change detection
            // which causes *all* components to be checked (if explicitly marked or not using OnPush),
            // we only trigger an explicit change detection for the slide-toggle view and its children.
            this._changeDetectorRef.detectChanges();
          }
        }]);

        return MatSlideToggle;
      }(_MatSlideToggleMixinBase);

      MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) {
        return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatSlideToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatSlideToggle,
        selectors: [["mat-slide-toggle"]],
        viewQuery: function MatSlideToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
          }
        },
        hostAttrs: [1, "mat-slide-toggle"],
        hostVars: 12,
        hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-labelledby", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color",
          tabIndex: "tabIndex",
          name: "name",
          id: "id",
          labelPosition: "labelPosition",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          required: "required",
          checked: "checked"
        },
        outputs: {
          change: "change",
          toggleChange: "toggleChange"
        },
        exportAs: ["matSlideToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c4,
        decls: 16,
        vars: 18,
        consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]],
        template: function MatSlideToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) {
              return ctx._onChangeEvent($event);
            })("click", function MatSlideToggle_Template_input_click_4_listener($event) {
              return ctx._onInputClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() {
              return ctx._onLabelTextChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
        styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSlideToggle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatSlideToggle.propDecorators = {
        _thumbEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['thumbContainer']
        }],
        _thumbBarEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['toggleBar']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-labelledby']
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        toggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-slide-toggle',
            exportAs: 'matSlideToggle',
            host: {
              'class': 'mat-slide-toggle',
              '[id]': 'id',
              // Needs to be `-1` so it can still receive programmatic focus.
              '[attr.tabindex]': 'disabled ? null : -1',
              '[attr.aria-label]': 'null',
              '[attr.aria-labelledby]': 'null',
              '[class.mat-checked]': 'checked',
              '[class.mat-disabled]': 'disabled',
              '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
            providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
            inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-labelledby']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          toggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _thumbEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['thumbContainer']
          }],
          _thumbBarEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['toggleBar']
          }],
          _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlideToggleRequiredValidator;
        }),
        multi: true
      };
      /**
       * Validator for Material slide-toggle components with the required attribute in a
       * template-driven form. The default validator for required form controls asserts
       * that the control value is not undefined but that is not appropriate for a slide-toggle
       * where the value is always defined.
       *
       * Required slide-toggle form controls are valid when checked.
       */

      var MatSlideToggleRequiredValidator = /*#__PURE__*/function (_angular_forms__WEBPA) {
        _inherits(MatSlideToggleRequiredValidator, _angular_forms__WEBPA);

        var _super3 = _createSuper(MatSlideToggleRequiredValidator);

        function MatSlideToggleRequiredValidator() {
          _classCallCheck(this, MatSlideToggleRequiredValidator);

          return _super3.apply(this, arguments);
        }

        return MatSlideToggleRequiredValidator;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxRequiredValidator"]);

      MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) {
        return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator);
      };

      MatSlideToggleRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatSlideToggleRequiredValidator,
        selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatSlideToggleRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
            providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** This module is used by both original and MDC-based slide-toggle implementations. */


      var _MatSlideToggleRequiredValidatorModule = function _MatSlideToggleRequiredValidatorModule() {
        _classCallCheck(this, _MatSlideToggleRequiredValidatorModule);
      };

      _MatSlideToggleRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _MatSlideToggleRequiredValidatorModule
      });
      _MatSlideToggleRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) {
          return new (t || _MatSlideToggleRequiredValidatorModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, {
          declarations: [MatSlideToggleRequiredValidator],
          exports: [MatSlideToggleRequiredValidator]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [MatSlideToggleRequiredValidator],
            declarations: [MatSlideToggleRequiredValidator]
          }]
        }], null, null);
      })();

      var MatSlideToggleModule = function MatSlideToggleModule() {
        _classCallCheck(this, MatSlideToggleModule);
      };

      MatSlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatSlideToggleModule
      });
      MatSlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatSlideToggleModule_Factory(t) {
          return new (t || MatSlideToggleModule)();
        },
        imports: [[_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSlideToggleModule, {
          declarations: function declarations() {
            return [MatSlideToggle];
          },
          imports: function imports() {
            return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
          },
          exports: function exports() {
            return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
            exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatSlideToggle]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=slide-toggle.js.map

      /***/

    },

    /***/
    "NFeN":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js ***!
      \**********************************************************************/

    /*! exports provided: ICON_REGISTRY_PROVIDER, ICON_REGISTRY_PROVIDER_FACTORY, MAT_ICON_LOCATION, MAT_ICON_LOCATION_FACTORY, MatIcon, MatIconModule, MatIconRegistry, getMatIconFailedToSanitizeLiteralError, getMatIconFailedToSanitizeUrlError, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, ɵ0 */

    /***/
    function NFeN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function () {
        return ICON_REGISTRY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function () {
        return ICON_REGISTRY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function () {
        return MAT_ICON_LOCATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function () {
        return MAT_ICON_LOCATION_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatIcon", function () {
        return MatIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatIconModule", function () {
        return MatIconModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function () {
        return MatIconRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function () {
        return getMatIconFailedToSanitizeLiteralError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function () {
        return getMatIconFailedToSanitizeUrlError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function () {
        return getMatIconNameNotFoundError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function () {
        return getMatIconNoHttpProviderError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an exception to be thrown in the case when attempting to
       * load an icon with a name that cannot be found.
       * @docs-private
       */


      var _c0 = ["*"];

      function getMatIconNameNotFoundError(iconName) {
        return Error("Unable to find icon with the name \"".concat(iconName, "\""));
      }
      /**
       * Returns an exception to be thrown when the consumer attempts to use
       * `<mat-icon>` without including @angular/common/http.
       * @docs-private
       */


      function getMatIconNoHttpProviderError() {
        return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
      }
      /**
       * Returns an exception to be thrown when a URL couldn't be sanitized.
       * @param url URL that was attempted to be sanitized.
       * @docs-private
       */


      function getMatIconFailedToSanitizeUrlError(url) {
        return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
      }
      /**
       * Returns an exception to be thrown when a HTML string couldn't be sanitized.
       * @param literal HTML that was attempted to be sanitized.
       * @docs-private
       */


      function getMatIconFailedToSanitizeLiteralError(literal) {
        return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
      }
      /**
       * Configuration for an icon, including the URL and possibly the cached SVG element.
       * @docs-private
       */


      var SvgIconConfig = function SvgIconConfig(url, svgText, options) {
        _classCallCheck(this, SvgIconConfig);

        this.url = url;
        this.svgText = svgText;
        this.options = options;
      };
      /**
       * Service to register and display icons used by the `<mat-icon>` component.
       * - Registers icon URLs by namespace and name.
       * - Registers icon set URLs by namespace.
       * - Registers aliases for CSS classes, for use with icon fonts.
       * - Loads icons from URLs and extracts individual icons from icon sets.
       */


      var MatIconRegistry = /*#__PURE__*/function () {
        function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
          _classCallCheck(this, MatIconRegistry);

          this._httpClient = _httpClient;
          this._sanitizer = _sanitizer;
          this._errorHandler = _errorHandler;
          /**
           * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
           */

          this._svgIconConfigs = new Map();
          /**
           * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
           * Multiple icon sets can be registered under the same namespace.
           */

          this._iconSetConfigs = new Map();
          /** Cache for icons loaded by direct URLs. */

          this._cachedIconsByUrl = new Map();
          /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */

          this._inProgressUrlFetches = new Map();
          /** Map from font identifiers to their CSS class names. Used for icon fonts. */

          this._fontCssClassesByAlias = new Map();
          /**
           * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
           * The default 'material-icons' value assumes that the material icon font has been loaded as
           * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
           */

          this._defaultFontSetClass = 'material-icons';
          this._document = document;
        }
        /**
         * Registers an icon by URL in the default namespace.
         * @param iconName Name under which the icon should be registered.
         * @param url
         */


        _createClass(MatIconRegistry, [{
          key: "addSvgIcon",
          value: function addSvgIcon(iconName, url, options) {
            return this.addSvgIconInNamespace('', iconName, url, options);
          }
          /**
           * Registers an icon using an HTML string in the default namespace.
           * @param iconName Name under which the icon should be registered.
           * @param literal SVG source of the icon.
           */

        }, {
          key: "addSvgIconLiteral",
          value: function addSvgIconLiteral(iconName, literal, options) {
            return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
          }
          /**
           * Registers an icon by URL in the specified namespace.
           * @param namespace Namespace in which the icon should be registered.
           * @param iconName Name under which the icon should be registered.
           * @param url
           */

        }, {
          key: "addSvgIconInNamespace",
          value: function addSvgIconInNamespace(namespace, iconName, url, options) {
            return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
          }
          /**
           * Registers an icon using an HTML string in the specified namespace.
           * @param namespace Namespace in which the icon should be registered.
           * @param iconName Name under which the icon should be registered.
           * @param literal SVG source of the icon.
           */

        }, {
          key: "addSvgIconLiteralInNamespace",
          value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
            var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal); // TODO: add an ngDevMode check


            if (!cleanLiteral) {
              throw getMatIconFailedToSanitizeLiteralError(literal);
            }

            return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
          }
          /**
           * Registers an icon set by URL in the default namespace.
           * @param url
           */

        }, {
          key: "addSvgIconSet",
          value: function addSvgIconSet(url, options) {
            return this.addSvgIconSetInNamespace('', url, options);
          }
          /**
           * Registers an icon set using an HTML string in the default namespace.
           * @param literal SVG source of the icon set.
           */

        }, {
          key: "addSvgIconSetLiteral",
          value: function addSvgIconSetLiteral(literal, options) {
            return this.addSvgIconSetLiteralInNamespace('', literal, options);
          }
          /**
           * Registers an icon set by URL in the specified namespace.
           * @param namespace Namespace in which to register the icon set.
           * @param url
           */

        }, {
          key: "addSvgIconSetInNamespace",
          value: function addSvgIconSetInNamespace(namespace, url, options) {
            return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
          }
          /**
           * Registers an icon set using an HTML string in the specified namespace.
           * @param namespace Namespace in which to register the icon set.
           * @param literal SVG source of the icon set.
           */

        }, {
          key: "addSvgIconSetLiteralInNamespace",
          value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
            var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);

            if (!cleanLiteral) {
              throw getMatIconFailedToSanitizeLiteralError(literal);
            }

            return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
          }
          /**
           * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
           * component with the alias as the fontSet input will cause the class name to be applied
           * to the `<mat-icon>` element.
           *
           * @param alias Alias for the font.
           * @param className Class name override to be used instead of the alias.
           */

        }, {
          key: "registerFontClassAlias",
          value: function registerFontClassAlias(alias) {
            var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

            this._fontCssClassesByAlias.set(alias, className);

            return this;
          }
          /**
           * Returns the CSS class name associated with the alias by a previous call to
           * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
           */

        }, {
          key: "classNameForFontAlias",
          value: function classNameForFontAlias(alias) {
            return this._fontCssClassesByAlias.get(alias) || alias;
          }
          /**
           * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
           * have a fontSet input value, and is not loading an icon by name or URL.
           *
           * @param className
           */

        }, {
          key: "setDefaultFontSetClass",
          value: function setDefaultFontSetClass(className) {
            this._defaultFontSetClass = className;
            return this;
          }
          /**
           * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
           * have a fontSet input value, and is not loading an icon by name or URL.
           */

        }, {
          key: "getDefaultFontSetClass",
          value: function getDefaultFontSetClass() {
            return this._defaultFontSetClass;
          }
          /**
           * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
           * The response from the URL may be cached so this will not always cause an HTTP request, but
           * the produced element will always be a new copy of the originally fetched icon. (That is,
           * it will not contain any modifications made to elements previously returned).
           *
           * @param safeUrl URL from which to fetch the SVG icon.
           */

        }, {
          key: "getSvgIconFromUrl",
          value: function getSvgIconFromUrl(safeUrl) {
            var _this6 = this;

            var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);

            if (!url) {
              throw getMatIconFailedToSanitizeUrlError(safeUrl);
            }

            var cachedIcon = this._cachedIconsByUrl.get(url);

            if (cachedIcon) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
            }

            return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svg) {
              return _this6._cachedIconsByUrl.set(url, svg);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (svg) {
              return cloneSvg(svg);
            }));
          }
          /**
           * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
           * and namespace. The icon must have been previously registered with addIcon or addIconSet;
           * if not, the Observable will throw an error.
           *
           * @param name Name of the icon to be retrieved.
           * @param namespace Namespace in which to look for the icon.
           */

        }, {
          key: "getNamedSvgIcon",
          value: function getNamedSvgIcon(name) {
            var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            // Return (copy of) cached icon if possible.
            var key = iconKey(namespace, name);

            var config = this._svgIconConfigs.get(key);

            if (config) {
              return this._getSvgFromConfig(config);
            } // See if we have any icon sets registered for the namespace.


            var iconSetConfigs = this._iconSetConfigs.get(namespace);

            if (iconSetConfigs) {
              return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._svgIconConfigs.clear();

            this._iconSetConfigs.clear();

            this._cachedIconsByUrl.clear();
          }
          /**
           * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
           */

        }, {
          key: "_getSvgFromConfig",
          value: function _getSvgFromConfig(config) {
            if (config.svgText) {
              // We already have the SVG element for this icon, return a copy.
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(this._svgElementFromConfig(config)));
            } else {
              // Fetch the icon from the config's URL, cache it, and return a copy.
              return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (svg) {
                return cloneSvg(svg);
              }));
            }
          }
          /**
           * Attempts to find an icon with the specified name in any of the SVG icon sets.
           * First searches the available cached icons for a nested element with a matching name, and
           * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
           * that have not been cached, and searches again after all fetches are completed.
           * The returned Observable produces the SVG element if possible, and throws
           * an error if no icon with the specified name can be found.
           */

        }, {
          key: "_getSvgFromIconSetConfigs",
          value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
            var _this7 = this;

            // For all the icon set SVG elements we've fetched, see if any contain an icon with the
            // requested name.
            var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

            if (namedIcon) {
              // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
              // time anyway, there's probably not much advantage compared to just always extracting
              // it from the icon set.
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
            } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
            // fetched, fetch them now and look for iconName in the results.


            var iconSetFetchRequests = iconSetConfigs.filter(function (iconSetConfig) {
              return !iconSetConfig.svgText;
            }).map(function (iconSetConfig) {
              return _this7._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                var url = _this7._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.


                var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message);

                _this7._errorHandler.handleError(new Error(errorMessage));

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
              }));
            }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
            // cached SVG element (unless the request failed), and we can check again for the icon.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              var foundIcon = _this7._extractIconWithNameFromAnySet(name, iconSetConfigs); // TODO: add an ngDevMode check


              if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
              }

              return foundIcon;
            }));
          }
          /**
           * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
           * tag matches the specified name. If found, copies the nested element to a new SVG element and
           * returns it. Returns null if no matching element is found.
           */

        }, {
          key: "_extractIconWithNameFromAnySet",
          value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
            // Iterate backwards, so icon sets added later have precedence.
            for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
              var config = iconSetConfigs[i]; // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
              // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
              // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
              // some of the parsing.

              if (config.svgText && config.svgText.indexOf(iconName) > -1) {
                var svg = this._svgElementFromConfig(config);

                var foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);

                if (foundIcon) {
                  return foundIcon;
                }
              }
            }

            return null;
          }
          /**
           * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
           * from it.
           */

        }, {
          key: "_loadSvgIconFromConfig",
          value: function _loadSvgIconFromConfig(config) {
            var _this8 = this;

            return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svgText) {
              return config.svgText = svgText;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              return _this8._svgElementFromConfig(config);
            }));
          }
          /**
           * Loads the content of the icon set URL specified in the
           * SvgIconConfig and attaches it to the config.
           */

        }, {
          key: "_loadSvgIconSetFromConfig",
          value: function _loadSvgIconSetFromConfig(config) {
            if (config.svgText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }

            return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svgText) {
              return config.svgText = svgText;
            }));
          }
          /**
           * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
           * tag matches the specified name. If found, copies the nested element to a new SVG element and
           * returns it. Returns null if no matching element is found.
           */

        }, {
          key: "_extractSvgIconFromSet",
          value: function _extractSvgIconFromSet(iconSet, iconName, options) {
            // Use the `id="iconName"` syntax in order to escape special
            // characters in the ID (versus using the #iconName syntax).
            var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

            if (!iconSource) {
              return null;
            } // Clone the element and remove the ID to prevent multiple elements from being added
            // to the page with the same ID.


            var iconElement = iconSource.cloneNode(true);
            iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
            // the content of a new <svg> node.

            if (iconElement.nodeName.toLowerCase() === 'svg') {
              return this._setSvgAttributes(iconElement, options);
            } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
            // that the same could be achieved by referring to it via <use href="#id">, however the <use>
            // tag is problematic on Firefox, because it needs to include the current page path.


            if (iconElement.nodeName.toLowerCase() === 'symbol') {
              return this._setSvgAttributes(this._toSvgElement(iconElement), options);
            } // createElement('SVG') doesn't work as expected; the DOM ends up with
            // the correct nodes, but the SVG content doesn't render. Instead we
            // have to create an empty SVG node using innerHTML and append its content.
            // Elements created using DOMParser.parseFromString have the same problem.
            // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display


            var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


            svg.appendChild(iconElement);
            return this._setSvgAttributes(svg, options);
          }
          /**
           * Creates a DOM element from the given SVG string.
           */

        }, {
          key: "_svgElementFromString",
          value: function _svgElementFromString(str) {
            var div = this._document.createElement('DIV');

            div.innerHTML = str;
            var svg = div.querySelector('svg'); // TODO: add an ngDevMode check

            if (!svg) {
              throw Error('<svg> tag not found');
            }

            return svg;
          }
          /**
           * Converts an element into an SVG node by cloning all of its children.
           */

        }, {
          key: "_toSvgElement",
          value: function _toSvgElement(element) {
            var svg = this._svgElementFromString('<svg></svg>');

            var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

            for (var i = 0; i < attributes.length; i++) {
              var _attributes$i = attributes[i],
                  name = _attributes$i.name,
                  value = _attributes$i.value;

              if (name !== 'id') {
                svg.setAttribute(name, value);
              }
            }

            for (var _i = 0; _i < element.childNodes.length; _i++) {
              if (element.childNodes[_i].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[_i].cloneNode(true));
              }
            }

            return svg;
          }
          /**
           * Sets the default attributes for an SVG element to be used as an icon.
           */

        }, {
          key: "_setSvgAttributes",
          value: function _setSvgAttributes(svg, options) {
            svg.setAttribute('fit', '');
            svg.setAttribute('height', '100%');
            svg.setAttribute('width', '100%');
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

            if (options && options.viewBox) {
              svg.setAttribute('viewBox', options.viewBox);
            }

            return svg;
          }
          /**
           * Returns an Observable which produces the string contents of the given icon. Results may be
           * cached, so future calls with the same URL may not cause another HTTP request.
           */

        }, {
          key: "_fetchIcon",
          value: function _fetchIcon(iconConfig) {
            var _this9 = this;

            var _a;

            var safeUrl = iconConfig.url,
                options = iconConfig.options;
            var withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;

            if (!this._httpClient) {
              throw getMatIconNoHttpProviderError();
            } // TODO: add an ngDevMode check


            if (safeUrl == null) {
              throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
            }

            var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl); // TODO: add an ngDevMode check


            if (!url) {
              throw getMatIconFailedToSanitizeUrlError(safeUrl);
            } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
            // already a request in progress for that URL. It's necessary to call share() on the
            // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.


            var inProgressFetch = this._inProgressUrlFetches.get(url);

            if (inProgressFetch) {
              return inProgressFetch;
            }

            var req = this._httpClient.get(url, {
              responseType: 'text',
              withCredentials: withCredentials
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this9._inProgressUrlFetches["delete"](url);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());

            this._inProgressUrlFetches.set(url, req);

            return req;
          }
          /**
           * Registers an icon config by name in the specified namespace.
           * @param namespace Namespace in which to register the icon config.
           * @param iconName Name under which to register the config.
           * @param config Config to be registered.
           */

        }, {
          key: "_addSvgIconConfig",
          value: function _addSvgIconConfig(namespace, iconName, config) {
            this._svgIconConfigs.set(iconKey(namespace, iconName), config);

            return this;
          }
          /**
           * Registers an icon set config in the specified namespace.
           * @param namespace Namespace in which to register the icon config.
           * @param config Config to be registered.
           */

        }, {
          key: "_addSvgIconSetConfig",
          value: function _addSvgIconSetConfig(namespace, config) {
            var configNamespace = this._iconSetConfigs.get(namespace);

            if (configNamespace) {
              configNamespace.push(config);
            } else {
              this._iconSetConfigs.set(namespace, [config]);
            }

            return this;
          }
          /** Parses a config's text into an SVG element. */

        }, {
          key: "_svgElementFromConfig",
          value: function _svgElementFromConfig(config) {
            if (!config.svgElement) {
              var svg = this._svgElementFromString(config.svgText);

              this._setSvgAttributes(svg, config.options);

              config.svgElement = svg;
            }

            return config.svgElement;
          }
        }]);

        return MatIconRegistry;
      }();

      MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
        return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));
      };

      MatIconRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MatIconRegistry_Factory() {
          return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));
        },
        token: MatIconRegistry,
        providedIn: "root"
      });

      MatIconRegistry.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
          }];
        }, null);
      })();
      /** @docs-private */


      function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
        return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
      }
      /** @docs-private */


      var ICON_REGISTRY_PROVIDER = {
        // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
        provide: MatIconRegistry,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]],
        useFactory: ICON_REGISTRY_PROVIDER_FACTORY
      };
      /** Clones an SVGElement while preserving type information. */

      function cloneSvg(svg) {
        return svg.cloneNode(true);
      }
      /** Returns the cache key to use for an icon namespace and name. */


      function iconKey(namespace, name) {
        return namespace + ':' + name;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatIcon.

      /** @docs-private */


      var MatIconBase = function MatIconBase(_elementRef) {
        _classCallCheck(this, MatIconBase);

        this._elementRef = _elementRef;
      };

      var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatIconBase);
      /**
       * Injection token used to provide the current location to `MatIcon`.
       * Used to handle server-side rendering and to stub out during unit tests.
       * @docs-private
       */


      var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-icon-location', {
        providedIn: 'root',
        factory: MAT_ICON_LOCATION_FACTORY
      });
      /** @docs-private */

      function MAT_ICON_LOCATION_FACTORY() {
        var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]);

        var _location = _document ? _document.location : null;

        return {
          // Note that this needs to be a function, rather than a property, because Angular
          // will only resolve it once, but we want the current path on each call.
          getPathname: function getPathname() {
            return _location ? _location.pathname + _location.search : '';
          }
        };
      }
      /** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */


      var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

      var ɵ0 = function ɵ0(attr) {
        return "[".concat(attr, "]");
      };
      /** Selector that can be used to find all elements that are using a `FuncIRI`. */


      var funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
      /** Regex that can be used to extract the id out of a FuncIRI. */

      var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
      /**
       * Component to display an icon. It can be used in the following ways:
       *
       * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
       *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
       *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
       *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
       *   Examples:
       *     `<mat-icon svgIcon="left-arrow"></mat-icon>
       *     <mat-icon svgIcon="animals:cat"></mat-icon>`
       *
       * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
       *   component. By default the Material icons font is used as described at
       *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
       *   alternate font by setting the fontSet input to either the CSS class to apply to use the
       *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
       *   Examples:
       *     `<mat-icon>home</mat-icon>
       *     <mat-icon fontSet="myfont">sun</mat-icon>`
       *
       * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
       *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
       *   CSS class which causes the glyph to be displayed via a :before selector, as in
       *   https://fortawesome.github.io/Font-Awesome/examples/
       *   Example:
       *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
       */

      var MatIcon = /*#__PURE__*/function (_MatIconMixinBase2) {
        _inherits(MatIcon, _MatIconMixinBase2);

        var _super4 = _createSuper(MatIcon);

        function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
          var _this10;

          _classCallCheck(this, MatIcon);

          _this10 = _super4.call(this, elementRef);
          _this10._iconRegistry = _iconRegistry;
          _this10._location = _location;
          _this10._errorHandler = _errorHandler;
          _this10._inline = false;
          /** Subscription to the current in-progress SVG icon request. */

          _this10._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
          // the right thing to do for the majority of icon use-cases.

          if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
          }

          return _this10;
        }
        /**
         * Whether the icon should be inlined, automatically sizing the icon to match the font size of
         * the element the icon is contained in.
         */


        _createClass(MatIcon, [{
          key: "inline",
          get: function get() {
            return this._inline;
          },
          set: function set(inline) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(inline);
          }
          /** Font set that the icon is a part of. */

        }, {
          key: "fontSet",
          get: function get() {
            return this._fontSet;
          },
          set: function set(value) {
            this._fontSet = this._cleanupFontValue(value);
          }
          /** Name of an icon within a font set. */

        }, {
          key: "fontIcon",
          get: function get() {
            return this._fontIcon;
          },
          set: function set(value) {
            this._fontIcon = this._cleanupFontValue(value);
          }
          /**
           * Splits an svgIcon binding value into its icon set and icon name components.
           * Returns a 2-element array of [(icon set), (icon name)].
           * The separator for the two fields is ':'. If there is no separator, an empty
           * string is returned for the icon set and the entire value is returned for
           * the icon name. If the argument is falsy, returns an array of two empty strings.
           * Throws an error if the name contains two or more ':' separators.
           * Examples:
           *   `'social:cake' -> ['social', 'cake']
           *   'penguin' -> ['', 'penguin']
           *   null -> ['', '']
           *   'a:b:c' -> (throws Error)`
           */

        }, {
          key: "_splitIconName",
          value: function _splitIconName(iconName) {
            if (!iconName) {
              return ['', ''];
            }

            var parts = iconName.split(':');

            switch (parts.length) {
              case 1:
                return ['', parts[0]];
              // Use default namespace.

              case 2:
                return parts;

              default:
                throw Error("Invalid icon name: \"".concat(iconName, "\""));
              // TODO: add an ngDevMode check
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this11 = this;

            // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
            var svgIconChanges = changes['svgIcon'];
            this._svgNamespace = null;
            this._svgName = null;

            if (svgIconChanges) {
              this._currentIconFetch.unsubscribe();

              if (this.svgIcon) {
                var _this$_splitIconName = this._splitIconName(this.svgIcon),
                    _this$_splitIconName2 = _slicedToArray(_this$_splitIconName, 2),
                    namespace = _this$_splitIconName2[0],
                    iconName = _this$_splitIconName2[1];

                if (namespace) {
                  this._svgNamespace = namespace;
                }

                if (iconName) {
                  this._svgName = iconName;
                }

                this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (svg) {
                  return _this11._setSvgElement(svg);
                }, function (err) {
                  var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message);

                  _this11._errorHandler.handleError(new Error(errorMessage));
                });
              } else if (svgIconChanges.previousValue) {
                this._clearSvgElement();
              }
            }

            if (this._usingFontIcon()) {
              this._updateFontIconClasses();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // Update font classes because ngOnChanges won't be called if none of the inputs are present,
            // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
            if (this._usingFontIcon()) {
              this._updateFontIconClasses();
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var cachedElements = this._elementsWithExternalReferences;

            if (cachedElements && cachedElements.size) {
              var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
              // the browser doesn't have an API that will let us react on link clicks and
              // we can't depend on the Angular router. The references need to be updated,
              // because while most browsers don't care whether the URL is correct after
              // the first render, Safari will break if the user navigates to a different
              // page and the SVG isn't re-rendered.


              if (newPath !== this._previousPath) {
                this._previousPath = newPath;

                this._prependPathToReferences(newPath);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._currentIconFetch.unsubscribe();

            if (this._elementsWithExternalReferences) {
              this._elementsWithExternalReferences.clear();
            }
          }
        }, {
          key: "_usingFontIcon",
          value: function _usingFontIcon() {
            return !this.svgIcon;
          }
        }, {
          key: "_setSvgElement",
          value: function _setSvgElement(svg) {
            this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
            // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
            // Do this before inserting the element into the DOM, in order to avoid a style recalculation.


            var styleTags = svg.querySelectorAll('style');

            for (var i = 0; i < styleTags.length; i++) {
              styleTags[i].textContent += ' ';
            } // Note: we do this fix here, rather than the icon registry, because the
            // references have to point to the URL at the time that the icon was created.


            var path = this._location.getPathname();

            this._previousPath = path;

            this._cacheChildrenWithExternalReferences(svg);

            this._prependPathToReferences(path);

            this._elementRef.nativeElement.appendChild(svg);
          }
        }, {
          key: "_clearSvgElement",
          value: function _clearSvgElement() {
            var layoutElement = this._elementRef.nativeElement;
            var childCount = layoutElement.childNodes.length;

            if (this._elementsWithExternalReferences) {
              this._elementsWithExternalReferences.clear();
            } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
            // we can't use innerHTML, because IE will throw if the element has a data binding.


            while (childCount--) {
              var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
              // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

              if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
              }
            }
          }
        }, {
          key: "_updateFontIconClasses",
          value: function _updateFontIconClasses() {
            if (!this._usingFontIcon()) {
              return;
            }

            var elem = this._elementRef.nativeElement;
            var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

            if (fontSetClass != this._previousFontSetClass) {
              if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
              }

              if (fontSetClass) {
                elem.classList.add(fontSetClass);
              }

              this._previousFontSetClass = fontSetClass;
            }

            if (this.fontIcon != this._previousFontIconClass) {
              if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
              }

              if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
              }

              this._previousFontIconClass = this.fontIcon;
            }
          }
          /**
           * Cleans up a value to be used as a fontIcon or fontSet.
           * Since the value ends up being assigned as a CSS class, we
           * have to trim the value and omit space-separated values.
           */

        }, {
          key: "_cleanupFontValue",
          value: function _cleanupFontValue(value) {
            return typeof value === 'string' ? value.trim().split(' ')[0] : value;
          }
          /**
           * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
           * reference. This is required because WebKit browsers require references to be prefixed with
           * the current path, if the page has a `base` tag.
           */

        }, {
          key: "_prependPathToReferences",
          value: function _prependPathToReferences(path) {
            var elements = this._elementsWithExternalReferences;

            if (elements) {
              elements.forEach(function (attrs, element) {
                attrs.forEach(function (attr) {
                  element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
                });
              });
            }
          }
          /**
           * Caches the children of an SVG element that have `url()`
           * references that we need to prefix with the current path.
           */

        }, {
          key: "_cacheChildrenWithExternalReferences",
          value: function _cacheChildrenWithExternalReferences(element) {
            var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
            var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

            var _loop = function _loop(i) {
              funcIriAttributes.forEach(function (attr) {
                var elementWithReference = elementsWithFuncIri[i];
                var value = elementWithReference.getAttribute(attr);
                var match = value ? value.match(funcIriPattern) : null;

                if (match) {
                  var attributes = elements.get(elementWithReference);

                  if (!attributes) {
                    attributes = [];
                    elements.set(elementWithReference, attributes);
                  }

                  attributes.push({
                    name: attr,
                    value: match[1]
                  });
                }
              });
            };

            for (var i = 0; i < elementsWithFuncIri.length; i++) {
              _loop(i);
            }
          }
        }]);

        return MatIcon;
      }(_MatIconMixinBase);

      MatIcon.ɵfac = function MatIcon_Factory(t) {
        return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));
      };

      MatIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatIcon,
        selectors: [["mat-icon"]],
        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
        hostVars: 7,
        hostBindings: function MatIcon_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
          }
        },
        inputs: {
          color: "color",
          inline: "inline",
          fontSet: "fontSet",
          fontIcon: "fontIcon",
          svgIcon: "svgIcon"
        },
        exportAs: ["matIcon"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatIcon_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatIcon.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: MatIconRegistry
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['aria-hidden']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_ICON_LOCATION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
        }];
      };

      MatIcon.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        svgIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: '<ng-content></ng-content>',
            selector: 'mat-icon',
            exportAs: 'matIcon',
            inputs: ['color'],
            host: {
              'role': 'img',
              'class': 'mat-icon notranslate',
              '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
              '[attr.data-mat-icon-name]': '_svgName || fontIcon',
              '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
              '[class.mat-icon-inline]': 'inline',
              '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: MatIconRegistry
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
              args: ['aria-hidden']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_ICON_LOCATION]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fontSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fontIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          svgIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatIconModule = function MatIconModule() {
        _classCallCheck(this, MatIconModule);
      };

      MatIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatIconModule
      });
      MatIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatIconModule_Factory(t) {
          return new (t || MatIconModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatIconModule, {
          declarations: function declarations() {
            return [MatIcon];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatIcon]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=icon.js.map

      /***/

    },

    /***/
    "Rw1y":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/@angular-material-extensions/password-strength/__ivy_ngcc__/fesm2015/angular-material-extensions-password-strength.js ***!
      \********************************************************************************************************************************************/

    /*! exports provided: Colors, Criteria, MatPassToggleVisibilityComponent, MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent, MatPasswordStrengthModule, MatPasswordStrengthValidator, RegExpValidator, flipIn, flipInX, flipInY, shake, ɵa */

    /***/
    function Rw1y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Colors", function () {
        return Colors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Criteria", function () {
        return Criteria;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPassToggleVisibilityComponent", function () {
        return MatPassToggleVisibilityComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPasswordStrengthComponent", function () {
        return MatPasswordStrengthComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPasswordStrengthInfoComponent", function () {
        return MatPasswordStrengthInfoComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPasswordStrengthModule", function () {
        return MatPasswordStrengthModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPasswordStrengthValidator", function () {
        return MatPasswordStrengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegExpValidator", function () {
        return RegExpValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flipIn", function () {
        return flipIn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flipInX", function () {
        return flipInX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flipInY", function () {
        return flipInY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "shake", function () {
        return shake;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return shake;
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


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function MatPasswordStrengthInfoComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flipY", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@positiveState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_2_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@negativeState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatPasswordStrengthInfoComponent_div_2_div_1_Template, 1, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPasswordStrengthInfoComponent_div_2_ng_template_2_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPasswordStrengthInfoComponent_div_2_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@items", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.passwordComponent.containAtLeastOneLowerCaseLetter)("ngIfThen", _r8)("ngIfElse", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.lowerCaseCriteriaMsg);
        }
      }

      function MatPasswordStrengthInfoComponent_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function MatPasswordStrengthInfoComponent_div_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@positiveState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_3_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@negativeState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatPasswordStrengthInfoComponent_div_3_div_1_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPasswordStrengthInfoComponent_div_3_ng_template_2_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPasswordStrengthInfoComponent_div_3_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@items", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passwordComponent.containAtLeastOneUpperCaseLetter)("ngIfThen", _r13)("ngIfElse", _r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.upperCaseCriteriaMsg);
        }
      }

      function MatPasswordStrengthInfoComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function MatPasswordStrengthInfoComponent_div_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@positiveState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_4_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@negativeState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatPasswordStrengthInfoComponent_div_4_div_1_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPasswordStrengthInfoComponent_div_4_ng_template_2_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPasswordStrengthInfoComponent_div_4_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@items", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.passwordComponent.containAtLeastOneDigit)("ngIfThen", _r18)("ngIfElse", _r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.digitsCriteriaMsg);
        }
      }

      function MatPasswordStrengthInfoComponent_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function MatPasswordStrengthInfoComponent_div_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@positiveState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@negativeState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatPasswordStrengthInfoComponent_div_5_div_1_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPasswordStrengthInfoComponent_div_5_ng_template_2_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPasswordStrengthInfoComponent_div_5_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@items", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.passwordComponent.containAtLeastOneSpecialChar)("ngIfThen", _r23)("ngIfElse", _r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.specialCharsCriteriaMsg);
        }
      }

      function MatPasswordStrengthInfoComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function MatPasswordStrengthInfoComponent_div_6_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@positiveState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_6_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@negativeState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatPasswordStrengthInfoComponent_div_6_div_1_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPasswordStrengthInfoComponent_div_6_ng_template_2_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPasswordStrengthInfoComponent_div_6_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@items", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passwordComponent.containAtLeastMinChars)("ngIfThen", _r28)("ngIfElse", _r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.minCharsCriteriaMsg);
        }
      }

      function MatPasswordStrengthInfoComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function MatPasswordStrengthInfoComponent_div_7_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@positiveState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_7_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@negativeState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatPasswordStrengthInfoComponent_div_7_div_1_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPasswordStrengthInfoComponent_div_7_ng_template_2_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPasswordStrengthInfoComponent_div_7_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@items", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.passwordComponent.containAtCustomChars)("ngIfThen", _r33)("ngIfElse", _r35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.customCharsCriteriaMsg);
        }
      }

      function MatPasswordStrengthInfoComponent_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function MatPasswordStrengthInfoComponent_div_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@positiveState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_8_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@negativeState", undefined);
        }
      }

      function MatPasswordStrengthInfoComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatPasswordStrengthInfoComponent_div_8_div_1_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPasswordStrengthInfoComponent_div_8_ng_template_2_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPasswordStrengthInfoComponent_div_8_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@items", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.passwordComponent.strength === 100)("ngIfThen", _r38)("ngIfElse", _r40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Password's strength = ", ctx_r6.passwordComponent.strength, " %100");
        }
      }

      var Colors;

      (function (Colors) {
        Colors["primary"] = "primary";
        Colors["accent"] = "accent";
        Colors["warn"] = "warn";
      })(Colors || (Colors = {}));

      var Criteria;

      (function (Criteria) {
        Criteria["at_least_eight_chars"] = "minChar";
        Criteria["at_least_one_lower_case_char"] = "lowerCase";
        Criteria["at_least_one_upper_case_char"] = "upperCase";
        Criteria["at_least_one_digit_char"] = "digit";
        Criteria["at_least_one_special_char"] = " specialChar";
        Criteria["at_custom_chars"] = "customChars";
      })(Criteria || (Criteria = {}));

      var MatPassToggleVisibilityComponent = /*#__PURE__*/function () {
        function MatPassToggleVisibilityComponent() {
          _classCallCheck(this, MatPassToggleVisibilityComponent);

          this._type = 'text';
        }

        _createClass(MatPassToggleVisibilityComponent, [{
          key: "type",
          get: function get() {
            return this.isVisible ? 'text' : 'password';
          }
        }]);

        return MatPassToggleVisibilityComponent;
      }();

      MatPassToggleVisibilityComponent.ɵfac = function MatPassToggleVisibilityComponent_Factory(t) {
        return new (t || MatPassToggleVisibilityComponent)();
      };

      MatPassToggleVisibilityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatPassToggleVisibilityComponent,
        selectors: [["mat-pass-toggle-visibility"]],
        inputs: {
          isVisible: "isVisible"
        },
        decls: 3,
        vars: 1,
        consts: [["mat-icon-button", "", "matRipple", "", "matRippleCentered", "true", "type", "button", 1, "mat-icon-button", "cdk-focused", "cdk-mouse-focused", 3, "click"]],
        template: function MatPassToggleVisibilityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPassToggleVisibilityComponent_Template_button_click_0_listener() {
              return ctx.isVisible = !ctx.isVisible;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isVisible ? "visibility" : "visibility_off");
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
        styles: [""],
        encapsulation: 2
      });
      MatPassToggleVisibilityComponent.propDecorators = {
        isVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPassToggleVisibilityComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-pass-toggle-visibility',
            template: "<button (click)=\"isVisible = !isVisible\"\n        class=\"mat-icon-button cdk-focused cdk-mouse-focused\"\n        mat-icon-button matRipple\n        matRippleCentered=\"true\"\n        type=\"button\">\n  <mat-icon>{{isVisible ? 'visibility' : 'visibility_off' }}</mat-icon>\n</button>\n\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [""]
          }]
        }], function () {
          return [];
        }, {
          isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var MatPasswordStrengthValidator = /*#__PURE__*/function () {
        function MatPasswordStrengthValidator() {
          _classCallCheck(this, MatPasswordStrengthValidator);
        }

        _createClass(MatPasswordStrengthValidator, [{
          key: "isUndefinedOrEmpty",
          value: function isUndefinedOrEmpty(control) {
            if (!control || !control.value || control.value.length === 0) {
              return undefined;
            }
          }
        }, {
          key: "validate",
          value: function validate(criteria, regex) {
            var _this12 = this;

            var validator = function validator(control) {
              _this12.isUndefinedOrEmpty(control);

              if (!regex.test(control.value)) {
                var failed = {};
                failed[criteria] = {
                  actualValue: control.value,
                  requiredPattern: regex
                };
                return failed;
              }

              return undefined;
            };

            return validator;
          }
        }, {
          key: "confirm",
          value: function confirm(password) {
            var _this13 = this;

            var validator = function validator(control) {
              _this13.isUndefinedOrEmpty(control);

              if (control.value !== password) {
                return {
                  notConfirmed: {
                    password: password,
                    passwordConfirmation: control.value
                  }
                };
              }

              return undefined;
            };

            return validator;
          }
        }]);

        return MatPasswordStrengthValidator;
      }();

      var RegExpValidator = {
        'lowerCase': RegExp(/^(?=.*?[a-z])/),
        'upperCase': RegExp(/^(?=.*?[A-Z])/),
        'digit': RegExp(/^(?=.*?[0-9])/),
        'specialChar': RegExp(/^(?=.*?[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])/)
      };

      var MatPasswordStrengthComponent = /*#__PURE__*/function () {
        function MatPasswordStrengthComponent() {
          _classCallCheck(this, MatPasswordStrengthComponent);

          this.enableLengthRule = true;
          this.enableLowerCaseLetterRule = true;
          this.enableUpperCaseLetterRule = true;
          this.enableDigitRule = true;
          this.enableSpecialCharRule = true;
          this.min = 8;
          this.max = 30;
          this.warnThreshold = 21;
          this.accentThreshold = 81;
          this.onStrengthChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.criteriaMap = new Map(); // TO ACCESS VIA CONTENT CHILD

          this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.passwordConfirmationFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.validatorsArray = [];
          this.matPasswordStrengthValidator = new MatPasswordStrengthValidator();
          this._strength = 0;

          this.propagateChange = function (_) {};
        }

        _createClass(MatPasswordStrengthComponent, [{
          key: "strength",
          get: function get() {
            return this._strength ? this._strength : 0;
          }
        }, {
          key: "color",
          get: function get() {
            if (this._strength < this.warnThreshold) {
              return Colors.warn;
            } else if (this._strength < this.accentThreshold) {
              return Colors.accent;
            } else {
              return Colors.primary;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setRulesAndValidators();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.externalError && changes.externalError.firstChange || changes.password.isFirstChange()) {
              return;
            } else if (changes.externalError && changes.externalError.currentValue) {
              this._color = Colors.warn;
              return;
            } else if (changes.password.previousValue === changes.password.currentValue && !changes.password.firstChange) {
              this.calculatePasswordStrength();
            } else {
              this.password && this.password.length > 0 ? this.calculatePasswordStrength() : this.reset();
            }
          }
        }, {
          key: "parseCustomValidatorsRegex",
          value: function parseCustomValidatorsRegex() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.customValidator;

            if (this.customValidator instanceof RegExp) {
              return this.customValidator;
            } else if (typeof this.customValidator === 'string') {
              return RegExp(this.customValidator);
            }
          }
        }, {
          key: "setRulesAndValidators",
          value: function setRulesAndValidators() {
            var _this14 = this;

            this.validatorsArray = [];
            this.criteriaMap = new Map();
            this.passwordConfirmationFormControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.matPasswordStrengthValidator.confirm(this.password)]));
            this.validatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);

            if (this.enableLengthRule) {
              this.criteriaMap.set(Criteria.at_least_eight_chars, RegExp("^.{".concat(this.min, ",").concat(this.max, "}$")));
              this.validatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.min));
              this.validatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.max));
            }

            if (this.enableLowerCaseLetterRule) {
              this.criteriaMap.set(Criteria.at_least_one_lower_case_char, RegExpValidator.lowerCase);
              this.validatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(RegExpValidator.lowerCase));
            }

            if (this.enableUpperCaseLetterRule) {
              this.criteriaMap.set(Criteria.at_least_one_upper_case_char, RegExpValidator.upperCase);
              this.validatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(RegExpValidator.upperCase));
            }

            if (this.enableDigitRule) {
              this.criteriaMap.set(Criteria.at_least_one_digit_char, RegExpValidator.digit);
              this.validatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(RegExpValidator.digit));
            }

            if (this.enableSpecialCharRule) {
              this.criteriaMap.set(Criteria.at_least_one_special_char, RegExpValidator.specialChar);
              this.validatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(RegExpValidator.specialChar));
            }

            if (this.customValidator) {
              this.criteriaMap.set(Criteria.at_custom_chars, this.parseCustomValidatorsRegex());
              this.validatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.parseCustomValidatorsRegex()));
            }

            this.criteriaMap.forEach(function (value, key) {
              _this14.validatorsArray.push(_this14.matPasswordStrengthValidator.validate(key, value));
            });
            this.passwordFormControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose(_toConsumableArray(this.validatorsArray)));
            this.Validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose(_toConsumableArray(this.validatorsArray));
          }
        }, {
          key: "calculatePasswordStrength",
          value: function calculatePasswordStrength() {
            var requirements = [];
            var unit = 100 / this.criteriaMap.size; // console.log('this.criteriaMap.size = ', this.criteriaMap.size);
            // console.log('unit = ', unit);

            requirements.push(this.enableLengthRule ? this._containAtLeastMinChars() : false, this.enableLowerCaseLetterRule ? this._containAtLeastOneLowerCaseLetter() : false, this.enableUpperCaseLetterRule ? this._containAtLeastOneUpperCaseLetter() : false, this.enableDigitRule ? this._containAtLeastOneDigit() : false, this.enableSpecialCharRule ? this._containAtLeastOneSpecialChar() : false, this.customValidator ? this._containCustomChars() : false);
            this._strength = requirements.filter(function (v) {
              return v;
            }).length * unit;
            this.propagateChange(this.strength); // console.log('length = ', this._strength / unit);

            this.onStrengthChanged.emit(this.strength);
            this.setRulesAndValidators();
          }
        }, {
          key: "reset",
          value: function reset() {
            this._strength = 0;
            this.containAtLeastMinChars = this.containAtLeastOneLowerCaseLetter = this.containAtLeastOneUpperCaseLetter = this.containAtLeastOneDigit = this.containAtCustomChars = this.containAtLeastOneSpecialChar = false;
          }
        }, {
          key: "writeValue",
          value: function writeValue(obj) {
            if (obj) {
              this._strength = obj;
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.propagateChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {// throw new Error("Method not implemented.");
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {// throw new Error("Method not implemented.");
          }
        }, {
          key: "_containAtLeastMinChars",
          value: function _containAtLeastMinChars() {
            this.containAtLeastMinChars = this.password.length >= this.min;
            return this.containAtLeastMinChars;
          }
        }, {
          key: "_containAtLeastOneLowerCaseLetter",
          value: function _containAtLeastOneLowerCaseLetter() {
            this.containAtLeastOneLowerCaseLetter = this.criteriaMap.get(Criteria.at_least_one_lower_case_char).test(this.password);
            return this.containAtLeastOneLowerCaseLetter;
          }
        }, {
          key: "_containAtLeastOneUpperCaseLetter",
          value: function _containAtLeastOneUpperCaseLetter() {
            this.containAtLeastOneUpperCaseLetter = this.criteriaMap.get(Criteria.at_least_one_upper_case_char).test(this.password);
            return this.containAtLeastOneUpperCaseLetter;
          }
        }, {
          key: "_containAtLeastOneDigit",
          value: function _containAtLeastOneDigit() {
            this.containAtLeastOneDigit = this.criteriaMap.get(Criteria.at_least_one_digit_char).test(this.password);
            return this.containAtLeastOneDigit;
          }
        }, {
          key: "_containAtLeastOneSpecialChar",
          value: function _containAtLeastOneSpecialChar() {
            this.containAtLeastOneSpecialChar = this.criteriaMap.get(Criteria.at_least_one_special_char).test(this.password);
            return this.containAtLeastOneSpecialChar;
          }
        }, {
          key: "_containCustomChars",
          value: function _containCustomChars() {
            this.containAtCustomChars = this.criteriaMap.get(Criteria.at_custom_chars).test(this.password);
            return this.containAtCustomChars;
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            if (this.password) {
              this.calculatePasswordStrength();
            }
          }
        }]);

        return MatPasswordStrengthComponent;
      }();

      MatPasswordStrengthComponent.ɵfac = function MatPasswordStrengthComponent_Factory(t) {
        return new (t || MatPasswordStrengthComponent)();
      };

      MatPasswordStrengthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatPasswordStrengthComponent,
        selectors: [["mat-password-strength"]],
        inputs: {
          enableLengthRule: "enableLengthRule",
          enableLowerCaseLetterRule: "enableLowerCaseLetterRule",
          enableUpperCaseLetterRule: "enableUpperCaseLetterRule",
          enableDigitRule: "enableDigitRule",
          enableSpecialCharRule: "enableSpecialCharRule",
          min: "min",
          max: "max",
          warnThreshold: "warnThreshold",
          accentThreshold: "accentThreshold",
          password: "password",
          externalError: "externalError",
          customValidator: "customValidator"
        },
        outputs: {
          onStrengthChanged: "onStrengthChanged"
        },
        exportAs: ["matPasswordStrength"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return MatPasswordStrengthComponent;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 2,
        consts: [["mode", "determinate", 3, "color", "value"]],
        template: function MatPasswordStrengthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("value", ctx.strength);
          }
        },
        directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"]],
        styles: [".green   [_nghost-%COMP%]  .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}"],
        changeDetection: 0
      });
      MatPasswordStrengthComponent.propDecorators = {
        password: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        externalError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableLengthRule: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableLowerCaseLetterRule: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableUpperCaseLetterRule: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableDigitRule: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableSpecialCharRule: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customValidator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        warnThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        accentThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onStrengthChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPasswordStrengthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-password-strength',
            exportAs: 'matPasswordStrength',
            template: "<mat-progress-bar [color]=\"color\"\n                  [value]=\"strength\"\n                  mode=\"determinate\">\n</mat-progress-bar>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
                return MatPasswordStrengthComponent;
              }),
              multi: true
            }],
            styles: [".green :host::ng-deep .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}"]
          }]
        }], function () {
          return [];
        }, {
          enableLengthRule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enableLowerCaseLetterRule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enableUpperCaseLetterRule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enableDigitRule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enableSpecialCharRule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          warnThreshold: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          accentThreshold: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onStrengthChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          externalError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customValidator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      function flipIn(timing, rotateX, rotateY) {
        var params = {
          timing: timing,
          delay: 0,
          rotateX: rotateX,
          rotateY: rotateY
        };
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          'backface-visibility': 'visible'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{ timing }}s {{ delay }}s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 0,
          transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 1,
          transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
          offset: 0.4
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
          offset: 0.6
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
          offset: 0.8
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
          offset: 1
        })]))], {
          params: params
        });
      }

      var flipInX = flipIn(1, 1, 0);
      var flipInY = flipIn(1, 0, 1);
      var shake = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animation"])(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{ timing }}s {{ delay }}s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(0, 0, 0)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(-10px, 0, 0)',
        offset: 0.1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(10px, 0, 0)',
        offset: 0.2
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(-10px, 0, 0)',
        offset: 0.3
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(10px, 0, 0)',
        offset: 0.4
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(-10px, 0, 0)',
        offset: 0.5
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(10px, 0, 0)',
        offset: 0.6
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(-10px, 0, 0)',
        offset: 0.7
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(10px, 0, 0)',
        offset: 0.8
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(-10px, 0, 0)',
        offset: 0.9
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate3d(0, 0, 0)',
        offset: 1
      })])), {
        params: {
          timing: 1,
          delay: 0
        }
      });

      var MatPasswordStrengthInfoComponent = /*#__PURE__*/function () {
        function MatPasswordStrengthInfoComponent() {
          _classCallCheck(this, MatPasswordStrengthInfoComponent);

          this.enableScoreInfo = false;
          this.lowerCaseCriteriaMsg = 'contains at least one lower character';
          this.upperCaseCriteriaMsg = 'contains at least one upper character';
          this.digitsCriteriaMsg = 'contains at least one digit character';
          this.specialCharsCriteriaMsg = 'contains at least one special character';
          this.customCharsCriteriaMsg = 'contains at least one custom character';
        }

        _createClass(MatPasswordStrengthInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.minCharsCriteriaMsg) {
              this.minCharsCriteriaMsg = "contains at least ".concat(this.passwordComponent.min, " characters");
            }
          }
        }]);

        return MatPasswordStrengthInfoComponent;
      }();

      MatPasswordStrengthInfoComponent.ɵfac = function MatPasswordStrengthInfoComponent_Factory(t) {
        return new (t || MatPasswordStrengthInfoComponent)();
      };

      MatPasswordStrengthInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatPasswordStrengthInfoComponent,
        selectors: [["mat-password-strength-info"]],
        inputs: {
          enableScoreInfo: "enableScoreInfo",
          lowerCaseCriteriaMsg: "lowerCaseCriteriaMsg",
          upperCaseCriteriaMsg: "upperCaseCriteriaMsg",
          digitsCriteriaMsg: "digitsCriteriaMsg",
          specialCharsCriteriaMsg: "specialCharsCriteriaMsg",
          customCharsCriteriaMsg: "customCharsCriteriaMsg",
          minCharsCriteriaMsg: "minCharsCriteriaMsg",
          passwordComponent: "passwordComponent"
        },
        exportAs: ["matPasswordStrengthInfo"],
        decls: 9,
        vars: 8,
        consts: [["class", "info-row", 4, "ngIf"], [1, "info-row"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["done", ""], ["error", ""], ["color", "primary"], ["color", "warn"]],
        template: function MatPasswordStrengthInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPasswordStrengthInfoComponent_div_2_Template, 8, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatPasswordStrengthInfoComponent_div_3_Template, 8, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPasswordStrengthInfoComponent_div_4_Template, 8, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatPasswordStrengthInfoComponent_div_5_Template, 8, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatPasswordStrengthInfoComponent_div_6_Template, 8, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatPasswordStrengthInfoComponent_div_7_Template, 8, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MatPasswordStrengthInfoComponent_div_8_Template, 8, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@list", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordComponent.enableLowerCaseLetterRule);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordComponent.enableUpperCaseLetterRule);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordComponent.enableDigitRule);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordComponent.enableSpecialCharRule);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordComponent.enableLengthRule);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordComponent.customValidator);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableScoreInfo);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
        styles: ["mat-card[_ngcontent-%COMP%]{flex:1 1 0;flex-direction:row;place-content:stretch center}mat-card[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{align-items:stretch;box-sizing:border-box;display:flex}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex-direction:column;max-width:100%;place-content:stretch flex-start}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{align-items:center;box-sizing:border-box;display:flex;flex-direction:row}"],
        data: {
          animation: [// nice stagger effect when showing existing elements
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('list', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [// child animation selector + stagger
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@items', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('items', [// cubic-bezier for a tiny bouncing feel
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'scale(0.5)',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s cubic-bezier(.8,-0.6,0.2,1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'scale(1)',
            opacity: 1
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'scale(1)',
            opacity: 1,
            height: '*'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s cubic-bezier(.8,-0.6,0.2,1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'scale(0.5)',
            opacity: 0,
            height: '0px',
            margin: '0px'
          }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('positiveState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            'backface-visibility': 'visible'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{ timing }}s {{ delay }}s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0,
            transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1,
            transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
            offset: 0.4
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
            offset: 0.6
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
            offset: 0.8
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
            offset: 1
          })]))], {
            params: {
              timing: 1,
              delay: 0,
              rotateX: 1,
              rotateY: 0
            }
          })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('negativeState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(shake))])]
        }
      });
      MatPasswordStrengthInfoComponent.propDecorators = {
        passwordComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableScoreInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lowerCaseCriteriaMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        upperCaseCriteriaMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        digitsCriteriaMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        specialCharsCriteriaMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customCharsCriteriaMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minCharsCriteriaMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPasswordStrengthInfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-password-strength-info',
            exportAs: 'matPasswordStrengthInfo',
            template: "<mat-card @list>\n  <mat-card-content>\n    <div *ngIf=\"passwordComponent.enableLowerCaseLetterRule\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtLeastOneLowerCaseLetter; then done else error\" @flipY>\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">done</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">error</mat-icon>\n      </ng-template>\n      <span>{{lowerCaseCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"passwordComponent.enableUpperCaseLetterRule\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtLeastOneUpperCaseLetter; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">done</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">error</mat-icon>\n      </ng-template>\n      <span>{{upperCaseCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"passwordComponent.enableDigitRule\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtLeastOneDigit; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">done</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">error</mat-icon>\n      </ng-template>\n      <span>{{digitsCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"passwordComponent.enableSpecialCharRule\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtLeastOneSpecialChar; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">done</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">error</mat-icon>\n      </ng-template>\n      <span>{{specialCharsCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"passwordComponent.enableLengthRule\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtLeastMinChars; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">done</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">error</mat-icon>\n      </ng-template>\n      <span>{{minCharsCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"passwordComponent.customValidator\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtCustomChars; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">done</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">error</mat-icon>\n      </ng-template>\n      <span>{{customCharsCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"enableScoreInfo\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.strength === 100; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">done</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">error</mat-icon>\n      </ng-template>\n      <span>Password's strength = {{passwordComponent.strength}} %100</span>\n    </div>\n\n  </mat-card-content>\n</mat-card>\n",
            animations: [// nice stagger effect when showing existing elements
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('list', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [// child animation selector + stagger
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@items', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('items', [// cubic-bezier for a tiny bouncing feel
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'scale(0.5)',
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s cubic-bezier(.8,-0.6,0.2,1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'scale(1)',
              opacity: 1
            }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'scale(1)',
              opacity: 1,
              height: '*'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s cubic-bezier(.8,-0.6,0.2,1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'scale(0.5)',
              opacity: 0,
              height: '0px',
              margin: '0px'
            }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('positiveState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              'backface-visibility': 'visible'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{ timing }}s {{ delay }}s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 0,
              transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
              offset: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              opacity: 1,
              transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
              offset: 0.4
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
              offset: 0.6
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
              offset: 0.8
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
              offset: 1
            })]))], {
              params: {
                timing: 1,
                delay: 0,
                rotateX: 1,
                rotateY: 0
              }
            })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('negativeState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(shake))])],
            styles: ["mat-card{flex:1 1 0;flex-direction:row;place-content:stretch center}mat-card,mat-card mat-card-content{align-items:stretch;box-sizing:border-box;display:flex}mat-card mat-card-content{flex-direction:column;max-width:100%;place-content:stretch flex-start}mat-card mat-card-content mat-icon{margin-right:10px}mat-card mat-card-content .info-row{align-items:center;box-sizing:border-box;display:flex;flex-direction:row}"]
          }]
        }], function () {
          return [];
        }, {
          enableScoreInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lowerCaseCriteriaMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          upperCaseCriteriaMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          digitsCriteriaMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          specialCharsCriteriaMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customCharsCriteriaMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minCharsCriteriaMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          passwordComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var MatPasswordStrengthModule = /*#__PURE__*/function () {
        function MatPasswordStrengthModule() {
          _classCallCheck(this, MatPasswordStrengthModule);
        }

        _createClass(MatPasswordStrengthModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: MatPasswordStrengthModule,
              providers: []
            };
          }
        }]);

        return MatPasswordStrengthModule;
      }();

      MatPasswordStrengthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatPasswordStrengthModule
      });
      MatPasswordStrengthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatPasswordStrengthModule_Factory(t) {
          return new (t || MatPasswordStrengthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPasswordStrengthModule, {
          declarations: function declarations() {
            return [MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent, MatPassToggleVisibilityComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
          },
          exports: function exports() {
            return [MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent, MatPassToggleVisibilityComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPasswordStrengthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
            exports: [MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent, MatPassToggleVisibilityComponent],
            declarations: [MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent, MatPassToggleVisibilityComponent],
            entryComponents: [MatPassToggleVisibilityComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of password-strength
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-material-extensions-password-strength.js.map

      /***/

    },

    /***/
    "Wp6s":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js ***!
      \**********************************************************************/

    /*! exports provided: MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardModule, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage */

    /***/
    function Wp6s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCard", function () {
        return MatCard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardActions", function () {
        return MatCardActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function () {
        return MatCardAvatar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardContent", function () {
        return MatCardContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardFooter", function () {
        return MatCardFooter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardHeader", function () {
        return MatCardHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardImage", function () {
        return MatCardImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function () {
        return MatCardLgImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function () {
        return MatCardMdImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardModule", function () {
        return MatCardModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function () {
        return MatCardSmImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function () {
        return MatCardSubtitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardTitle", function () {
        return MatCardTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function () {
        return MatCardTitleGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function () {
        return MatCardXlImage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Content of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var _c0 = ["*", [["mat-card-footer"]]];
      var _c1 = ["*", "mat-card-footer"];
      var _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
      var _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
      var _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
      var _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];

      var MatCardContent = function MatCardContent() {
        _classCallCheck(this, MatCardContent);
      };

      MatCardContent.ɵfac = function MatCardContent_Factory(t) {
        return new (t || MatCardContent)();
      };

      MatCardContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardContent,
        selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]],
        hostAttrs: [1, "mat-card-content"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-card-content, [mat-card-content], [matCardContent]',
            host: {
              'class': 'mat-card-content'
            }
          }]
        }], null, null);
      })();
      /**
       * Title of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardTitle = function MatCardTitle() {
        _classCallCheck(this, MatCardTitle);
      };

      MatCardTitle.ɵfac = function MatCardTitle_Factory(t) {
        return new (t || MatCardTitle)();
      };

      MatCardTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardTitle,
        selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
        hostAttrs: [1, "mat-card-title"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "mat-card-title, [mat-card-title], [matCardTitle]",
            host: {
              'class': 'mat-card-title'
            }
          }]
        }], null, null);
      })();
      /**
       * Sub-title of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardSubtitle = function MatCardSubtitle() {
        _classCallCheck(this, MatCardSubtitle);
      };

      MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) {
        return new (t || MatCardSubtitle)();
      };

      MatCardSubtitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardSubtitle,
        selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
        hostAttrs: [1, "mat-card-subtitle"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
            host: {
              'class': 'mat-card-subtitle'
            }
          }]
        }], null, null);
      })();
      /**
       * Action section of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardActions = function MatCardActions() {
        _classCallCheck(this, MatCardActions);

        /** Position of the actions inside the card. */
        this.align = 'start';
      };

      MatCardActions.ɵfac = function MatCardActions_Factory(t) {
        return new (t || MatCardActions)();
      };

      MatCardActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardActions,
        selectors: [["mat-card-actions"]],
        hostAttrs: [1, "mat-card-actions"],
        hostVars: 2,
        hostBindings: function MatCardActions_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
          }
        },
        inputs: {
          align: "align"
        },
        exportAs: ["matCardActions"]
      });
      MatCardActions.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-card-actions',
            exportAs: 'matCardActions',
            host: {
              'class': 'mat-card-actions',
              '[class.mat-card-actions-align-end]': 'align === "end"'
            }
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Footer of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardFooter = function MatCardFooter() {
        _classCallCheck(this, MatCardFooter);
      };

      MatCardFooter.ɵfac = function MatCardFooter_Factory(t) {
        return new (t || MatCardFooter)();
      };

      MatCardFooter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardFooter,
        selectors: [["mat-card-footer"]],
        hostAttrs: [1, "mat-card-footer"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-card-footer',
            host: {
              'class': 'mat-card-footer'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardImage = function MatCardImage() {
        _classCallCheck(this, MatCardImage);
      };

      MatCardImage.ɵfac = function MatCardImage_Factory(t) {
        return new (t || MatCardImage)();
      };

      MatCardImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardImage,
        selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
        hostAttrs: [1, "mat-card-image"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-image], [matCardImage]',
            host: {
              'class': 'mat-card-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardSmImage = function MatCardSmImage() {
        _classCallCheck(this, MatCardSmImage);
      };

      MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) {
        return new (t || MatCardSmImage)();
      };

      MatCardSmImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardSmImage,
        selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
        hostAttrs: [1, "mat-card-sm-image"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-sm-image], [matCardImageSmall]',
            host: {
              'class': 'mat-card-sm-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardMdImage = function MatCardMdImage() {
        _classCallCheck(this, MatCardMdImage);
      };

      MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) {
        return new (t || MatCardMdImage)();
      };

      MatCardMdImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardMdImage,
        selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
        hostAttrs: [1, "mat-card-md-image"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-md-image], [matCardImageMedium]',
            host: {
              'class': 'mat-card-md-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardLgImage = function MatCardLgImage() {
        _classCallCheck(this, MatCardLgImage);
      };

      MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) {
        return new (t || MatCardLgImage)();
      };

      MatCardLgImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardLgImage,
        selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
        hostAttrs: [1, "mat-card-lg-image"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-lg-image], [matCardImageLarge]',
            host: {
              'class': 'mat-card-lg-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Large image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardXlImage = function MatCardXlImage() {
        _classCallCheck(this, MatCardXlImage);
      };

      MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) {
        return new (t || MatCardXlImage)();
      };

      MatCardXlImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardXlImage,
        selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
        hostAttrs: [1, "mat-card-xl-image"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-xl-image], [matCardImageXLarge]',
            host: {
              'class': 'mat-card-xl-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Avatar image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardAvatar = function MatCardAvatar() {
        _classCallCheck(this, MatCardAvatar);
      };

      MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) {
        return new (t || MatCardAvatar)();
      };

      MatCardAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardAvatar,
        selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
        hostAttrs: [1, "mat-card-avatar"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-avatar], [matCardAvatar]',
            host: {
              'class': 'mat-card-avatar'
            }
          }]
        }], null, null);
      })();
      /**
       * A basic content container component that adds the styles of a Material design card.
       *
       * While this component can be used alone, it also provides a number
       * of preset styles for common card sections, including:
       * - mat-card-title
       * - mat-card-subtitle
       * - mat-card-content
       * - mat-card-actions
       * - mat-card-footer
       */


      var MatCard = // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
      function MatCard(_animationMode) {
        _classCallCheck(this, MatCard);

        this._animationMode = _animationMode;
      };

      MatCard.ɵfac = function MatCard_Factory(t) {
        return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatCard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCard,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-card", "mat-focus-indicator"],
        hostVars: 2,
        hostBindings: function MatCard_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        exportAs: ["matCard"],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 0,
        template: function MatCard_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCard.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-card',
            exportAs: 'matCard',
            template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              'class': 'mat-card mat-focus-indicator',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, null);
      })();
      /**
       * Component intended to be used within the `<mat-card>` component. It adds styles for a
       * preset header section (i.e. a title, subtitle, and avatar layout).
       * @docs-private
       */


      var MatCardHeader = function MatCardHeader() {
        _classCallCheck(this, MatCardHeader);
      };

      MatCardHeader.ɵfac = function MatCardHeader_Factory(t) {
        return new (t || MatCardHeader)();
      };

      MatCardHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCardHeader,
        selectors: [["mat-card-header"]],
        hostAttrs: [1, "mat-card-header"],
        ngContentSelectors: _c3,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-card-header-text"]],
        template: function MatCardHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-card-header',
            template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              'class': 'mat-card-header'
            }
          }]
        }], null, null);
      })();
      /**
       * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
       * layout that groups an image with a title section.
       * @docs-private
       */


      var MatCardTitleGroup = function MatCardTitleGroup() {
        _classCallCheck(this, MatCardTitleGroup);
      };

      MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) {
        return new (t || MatCardTitleGroup)();
      };

      MatCardTitleGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCardTitleGroup,
        selectors: [["mat-card-title-group"]],
        hostAttrs: [1, "mat-card-title-group"],
        ngContentSelectors: _c5,
        decls: 4,
        vars: 0,
        template: function MatCardTitleGroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-card-title-group',
            template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              'class': 'mat-card-title-group'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatCardModule = function MatCardModule() {
        _classCallCheck(this, MatCardModule);
      };

      MatCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCardModule
      });
      MatCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatCardModule_Factory(t) {
          return new (t || MatCardModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCardModule, {
          declarations: function declarations() {
            return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=card.js.map

      /***/

    },

    /***/
    "bv9b":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js ***!
      \******************************************************************************/

    /*! exports provided: MAT_PROGRESS_BAR_LOCATION, MAT_PROGRESS_BAR_LOCATION_FACTORY, MatProgressBar, MatProgressBarModule */

    /***/
    function bv9b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function () {
        return MAT_PROGRESS_BAR_LOCATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function () {
        return MAT_PROGRESS_BAR_LOCATION_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressBar", function () {
        return MatProgressBar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function () {
        return MatProgressBarModule;
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


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatProgressBar.

      /** @docs-private */


      var _c0 = ["primaryValueBar"];

      var MatProgressBarBase = function MatProgressBarBase(_elementRef) {
        _classCallCheck(this, MatProgressBarBase);

        this._elementRef = _elementRef;
      };

      var _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressBarBase, 'primary');
      /**
       * Injection token used to provide the current location to `MatProgressBar`.
       * Used to handle server-side rendering and to stub out during unit tests.
       * @docs-private
       */


      var MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-bar-location', {
        providedIn: 'root',
        factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
      });
      /** @docs-private */

      function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
        var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);

        var _location = _document ? _document.location : null;

        return {
          // Note that this needs to be a function, rather than a property, because Angular
          // will only resolve it once, but we want the current path on each call.
          getPathname: function getPathname() {
            return _location ? _location.pathname + _location.search : '';
          }
        };
      }
      /** Counter used to generate unique IDs for progress bars. */


      var progressbarId = 0;
      /**
       * `<mat-progress-bar>` component.
       */

      var MatProgressBar = /*#__PURE__*/function (_MatProgressBarMixinB) {
        _inherits(MatProgressBar, _MatProgressBarMixinB);

        var _super5 = _createSuper(MatProgressBar);

        function MatProgressBar(_elementRef, _ngZone, _animationMode,
        /**
         * @deprecated `location` parameter to be made required.
         * @breaking-change 8.0.0
         */
        location) {
          var _this15;

          _classCallCheck(this, MatProgressBar);

          _this15 = _super5.call(this, _elementRef);
          _this15._elementRef = _elementRef;
          _this15._ngZone = _ngZone;
          _this15._animationMode = _animationMode;
          /** Flag that indicates whether NoopAnimations mode is set to true. */

          _this15._isNoopAnimation = false;
          _this15._value = 0;
          _this15._bufferValue = 0;
          /**
           * Event emitted when animation of the primary progress bar completes. This event will not
           * be emitted when animations are disabled, nor will it be emitted for modes with continuous
           * animations (indeterminate and query).
           */

          _this15.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Reference to animation end subscription to be unsubscribed on destroy. */

          _this15._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /**
           * Mode of the progress bar.
           *
           * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
           * 'determinate'.
           * Mirrored to mode attribute.
           */

          _this15.mode = 'determinate';
          /** ID of the progress bar. */

          _this15.progressbarId = "mat-progress-bar-".concat(progressbarId++); // We need to prefix the SVG reference with the current path, otherwise they won't work
          // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
          // because named route URLs can contain parentheses (see #12338). Also we don't use since
          // we can't tell the difference between whether
          // the consumer is using the hash location strategy or not, because `Location` normalizes
          // both `/#/foo/bar` and `/foo/bar` to the same thing.

          var path = location ? location.getPathname().split('#')[0] : '';
          _this15._rectangleFillValue = "url('".concat(path, "#").concat(_this15.progressbarId, "')");
          _this15._isNoopAnimation = _animationMode === 'NoopAnimations';
          return _this15;
        }
        /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */


        _createClass(MatProgressBar, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(v) {
            this._value = clamp(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v) || 0);
          }
          /** Buffer value of the progress bar. Defaults to zero. */

        }, {
          key: "bufferValue",
          get: function get() {
            return this._bufferValue;
          },
          set: function set(v) {
            this._bufferValue = clamp(v || 0);
          }
          /** Gets the current transform value for the progress bar's primary indicator. */

        }, {
          key: "_primaryTransform",
          value: function _primaryTransform() {
            var scale = this.value / 100;
            return {
              transform: "scaleX(".concat(scale, ")")
            };
          }
          /**
           * Gets the current transform value for the progress bar's buffer indicator. Only used if the
           * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
           */

        }, {
          key: "_bufferTransform",
          value: function _bufferTransform() {
            if (this.mode === 'buffer') {
              var scale = this.bufferValue / 100;
              return {
                transform: "scaleX(".concat(scale, ")")
              };
            }

            return null;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this16 = this;

            // Run outside angular so change detection didn't get triggered on every transition end
            // instead only on the animation that we care about (primary value bar's transitionend)
            this._ngZone.runOutsideAngular(function () {
              var element = _this16._primaryValueBar.nativeElement;
              _this16._animationEndSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(element, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (e) {
                return e.target === element;
              })).subscribe(function () {
                if (_this16.mode === 'determinate' || _this16.mode === 'buffer') {
                  _this16._ngZone.run(function () {
                    return _this16.animationEnd.next({
                      value: _this16.value
                    });
                  });
                }
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._animationEndSubscription.unsubscribe();
          }
        }]);

        return MatProgressBar;
      }(_MatProgressBarMixinBase);

      MatProgressBar.ɵfac = function MatProgressBar_Factory(t) {
        return new (t || MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_LOCATION, 8));
      };

      MatProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatProgressBar,
        selectors: [["mat-progress-bar"]],
        viewQuery: function MatProgressBar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._primaryValueBar = _t.first);
          }
        },
        hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "mat-progress-bar"],
        hostVars: 4,
        hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation);
          }
        },
        inputs: {
          color: "color",
          mode: "mode",
          value: "value",
          bufferValue: "bufferValue"
        },
        outputs: {
          animationEnd: "animationEnd"
        },
        exportAs: ["matProgressBar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 9,
        vars: 4,
        consts: [["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]],
        template: function MatProgressBar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pattern", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.progressbarId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx._rectangleFillValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._bufferTransform());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._primaryTransform());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatProgressBar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_BAR_LOCATION]
          }]
        }];
      };

      MatProgressBar.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _primaryValueBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['primaryValueBar']
        }],
        animationEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-progress-bar',
            exportAs: 'matProgressBar',
            host: {
              'role': 'progressbar',
              'aria-valuemin': '0',
              'aria-valuemax': '100',
              '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
              '[attr.mode]': 'mode',
              'class': 'mat-progress-bar',
              '[class._mat-animation-noopable]': '_isNoopAnimation'
            },
            inputs: ['color'],
            template: "<!--\n  The background div is named as such because it appears below the other divs and is not sized based\n  on values.\n-->\n<svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n  <defs>\n    <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n    </pattern>\n  </defs>\n  <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n</svg>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_BAR_LOCATION]
            }]
          }];
        }, {
          animationEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bufferValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _primaryValueBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['primaryValueBar']
          }]
        });
      })();
      /** Clamps a value to be between two numbers, by default 0 and 100. */


      function clamp(v) {
        var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        return Math.max(min, Math.min(max, v));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatProgressBarModule = function MatProgressBarModule() {
        _classCallCheck(this, MatProgressBarModule);
      };

      MatProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatProgressBarModule
      });
      MatProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatProgressBarModule_Factory(t) {
          return new (t || MatProgressBarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressBarModule, {
          declarations: function declarations() {
            return [MatProgressBar];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatProgressBar]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=progress-bar.js.map

      /***/

    },

    /***/
    "wZkO":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_TABS_CONFIG, MAT_TAB_GROUP, MatInkBar, MatTab, MatTabBody, MatTabBodyPortal, MatTabChangeEvent, MatTabContent, MatTabGroup, MatTabHeader, MatTabLabel, MatTabLabelWrapper, MatTabLink, MatTabNav, MatTabsModule, _MAT_INK_BAR_POSITIONER, _MatTabBodyBase, _MatTabGroupBase, _MatTabHeaderBase, _MatTabLinkBase, _MatTabNavBase, matTabsAnimations, ɵangular_material_src_material_tabs_tabs_a, ɵangular_material_src_material_tabs_tabs_b, ɵangular_material_src_material_tabs_tabs_c, ɵangular_material_src_material_tabs_tabs_d */

    /***/
    function wZkO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function () {
        return MAT_TABS_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TAB_GROUP", function () {
        return MAT_TAB_GROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInkBar", function () {
        return MatInkBar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTab", function () {
        return MatTab;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabBody", function () {
        return MatTabBody;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function () {
        return MatTabBodyPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function () {
        return MatTabChangeEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabContent", function () {
        return MatTabContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabGroup", function () {
        return MatTabGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabHeader", function () {
        return MatTabHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabLabel", function () {
        return MatTabLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function () {
        return MatTabLabelWrapper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabLink", function () {
        return MatTabLink;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabNav", function () {
        return MatTabNav;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTabsModule", function () {
        return MatTabsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function () {
        return _MAT_INK_BAR_POSITIONER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function () {
        return _MatTabBodyBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function () {
        return _MatTabGroupBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function () {
        return _MatTabHeaderBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function () {
        return _MatTabLinkBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function () {
        return _MatTabNavBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function () {
        return matTabsAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_a", function () {
        return _MAT_INK_BAR_POSITIONER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_b", function () {
        return MAT_TAB_LABEL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_c", function () {
        return MAT_TAB_CONTENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_d", function () {
        return MatPaginatedTabHeader;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token for the MatInkBar's Positioner. */


      function MatTab_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
        }
      }

      var _c0 = ["*"];

      function MatTabBody_ng_template_2_Template(rf, ctx) {}

      var _c1 = function _c1(a0) {
        return {
          animationDuration: a0
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          value: a0,
          params: a1
        };
      };

      var _c3 = ["tabBodyWrapper"];
      var _c4 = ["tabHeader"];

      function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {}

      function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
        }

        if (rf & 2) {
          var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
        }
      }

      function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r4.textLabel);
        }
      }

      function MatTabGroup_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var tab_r4 = ctx.$implicit;
            var i_r5 = ctx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

            return ctx_r11._handleClick(tab_r4, _r0, i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
        }
      }

      function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-body", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r15._removeTabBodyWrapperHeight();
          })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17._setTabBodyWrapperHeight($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r13 = ctx.$implicit;
          var i_r14 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex == i_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r14))("content", tab_r13.content)("position", tab_r13.position)("origin", tab_r13.origin)("animationDuration", ctx_r3.animationDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-labelledby", ctx_r3._getTabLabelId(i_r14));
        }
      }

      var _c5 = ["tabListContainer"];
      var _c6 = ["tabList"];
      var _c7 = ["nextPaginator"];
      var _c8 = ["previousPaginator"];
      var _c9 = ["mat-tab-nav-bar", ""];

      var _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatInkBarPositioner', {
        providedIn: 'root',
        factory: _MAT_INK_BAR_POSITIONER_FACTORY
      });
      /**
       * The default positioner function for the MatInkBar.
       * @docs-private
       */


      function _MAT_INK_BAR_POSITIONER_FACTORY() {
        var method = function method(element) {
          return {
            left: element ? (element.offsetLeft || 0) + 'px' : '0',
            width: element ? (element.offsetWidth || 0) + 'px' : '0'
          };
        };

        return method;
      }
      /**
       * The ink-bar is used to display and animate the line underneath the current active tab label.
       * @docs-private
       */


      var MatInkBar = /*#__PURE__*/function () {
        function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
          _classCallCheck(this, MatInkBar);

          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          this._inkBarPositioner = _inkBarPositioner;
          this._animationMode = _animationMode;
        }
        /**
         * Calculates the styles from the provided element in order to align the ink-bar to that element.
         * Shows the ink bar if previously set as hidden.
         * @param element
         */


        _createClass(MatInkBar, [{
          key: "alignToElement",
          value: function alignToElement(element) {
            var _this17 = this;

            this.show();

            if (typeof requestAnimationFrame !== 'undefined') {
              this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                  return _this17._setStyles(element);
                });
              });
            } else {
              this._setStyles(element);
            }
          }
          /** Shows the ink bar. */

        }, {
          key: "show",
          value: function show() {
            this._elementRef.nativeElement.style.visibility = 'visible';
          }
          /** Hides the ink bar. */

        }, {
          key: "hide",
          value: function hide() {
            this._elementRef.nativeElement.style.visibility = 'hidden';
          }
          /**
           * Sets the proper styles to the ink bar element.
           * @param element
           */

        }, {
          key: "_setStyles",
          value: function _setStyles(element) {
            var positions = this._inkBarPositioner(element);

            var inkBar = this._elementRef.nativeElement;
            inkBar.style.left = positions.left;
            inkBar.style.width = positions.width;
          }
        }]);

        return MatInkBar;
      }();

      MatInkBar.ɵfac = function MatInkBar_Factory(t) {
        return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatInkBar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatInkBar,
        selectors: [["mat-ink-bar"]],
        hostAttrs: [1, "mat-ink-bar"],
        hostVars: 2,
        hostBindings: function MatInkBar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        }
      });

      MatInkBar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_MAT_INK_BAR_POSITIONER]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatInkBar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'mat-ink-bar',
            host: {
              'class': 'mat-ink-bar',
              '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_MAT_INK_BAR_POSITIONER]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatTabContent`. It serves as
       * alternative token to the actual `MatTabContent` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatTabContent');
      /** Decorates the `ng-template` tags and reads out the template from it. */

      var MatTabContent = function MatTabContent(template) {
        _classCallCheck(this, MatTabContent);

        this.template = template;
      };

      MatTabContent.ɵfac = function MatTabContent_Factory(t) {
        return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
      };

      MatTabContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatTabContent,
        selectors: [["", "matTabContent", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_CONTENT,
          useExisting: MatTabContent
        }])]
      });

      MatTabContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[matTabContent]',
            providers: [{
              provide: MAT_TAB_CONTENT,
              useExisting: MatTabContent
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
       * alternative token to the actual `MatTabLabel` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatTabLabel');
      /** Used to flag tab labels for use with the portal directive */

      var MatTabLabel = /*#__PURE__*/function (_angular_cdk_portal__) {
        _inherits(MatTabLabel, _angular_cdk_portal__);

        var _super6 = _createSuper(MatTabLabel);

        function MatTabLabel() {
          _classCallCheck(this, MatTabLabel);

          return _super6.apply(this, arguments);
        }

        return MatTabLabel;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"]);

      MatTabLabel.ɵfac = function MatTabLabel_Factory(t) {
        return ɵMatTabLabel_BaseFactory(t || MatTabLabel);
      };

      MatTabLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatTabLabel,
        selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_LABEL,
          useExisting: MatTabLabel
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatTabLabel_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatTabLabel);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[mat-tab-label], [matTabLabel]',
            providers: [{
              provide: MAT_TAB_LABEL,
              useExisting: MatTabLabel
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatTab.

      /** @docs-private */


      var MatTabBase = function MatTabBase() {
        _classCallCheck(this, MatTabBase);
      };

      var _MatTabMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabBase);
      /**
       * Used to provide a tab group to a tab without causing a circular dependency.
       * @docs-private
       */


      var MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TAB_GROUP');

      var MatTab = /*#__PURE__*/function (_MatTabMixinBase2) {
        _inherits(MatTab, _MatTabMixinBase2);

        var _super7 = _createSuper(MatTab);

        function MatTab(_viewContainerRef,
        /**
         * @deprecated `_closestTabGroup` parameter to become required.
         * @breaking-change 10.0.0
         */
        _closestTabGroup) {
          var _this18;

          _classCallCheck(this, MatTab);

          _this18 = _super7.call(this);
          _this18._viewContainerRef = _viewContainerRef;
          _this18._closestTabGroup = _closestTabGroup;
          /** Plain text label for the tab, used when there is no template label. */

          _this18.textLabel = '';
          /** Portal that will be the hosted content of the tab */

          _this18._contentPortal = null;
          /** Emits whenever the internal state of the tab changes. */

          _this18._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /**
           * The relatively indexed position where 0 represents the center, negative is left, and positive
           * represents the right.
           */

          _this18.position = null;
          /**
           * The initial relatively index origin of the tab if it was created and selected after there
           * was already a selected tab. Provides context of what position the tab should originate from.
           */

          _this18.origin = null;
          /**
           * Whether the tab is currently active.
           */

          _this18.isActive = false;
          return _this18;
        } // TODO: Remove cast once https://github.com/angular/angular/pull/37506 is available.

        /** Content for the tab label given by `<ng-template mat-tab-label>`. */


        _createClass(MatTab, [{
          key: "templateLabel",
          get: function get() {
            return this._templateLabel;
          },
          set: function set(value) {
            this._setTemplateLabelInput(value);
          }
          /** @docs-private */

        }, {
          key: "content",
          get: function get() {
            return this._contentPortal;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
              this._stateChanges.next();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this._explicitContent || this._implicitContent, this._viewContainerRef);
          }
          /**
           * This has been extracted to a util because of TS 4 and VE.
           * View Engine doesn't support property rename inheritance.
           * TS 4.0 doesn't allow properties to override accessors or vice-versa.
           * @docs-private
           */

        }, {
          key: "_setTemplateLabelInput",
          value: function _setTemplateLabelInput(value) {
            // Only update the templateLabel via query if there is actually
            // a MatTabLabel found. This works around an issue where a user may have
            // manually set `templateLabel` during creation mode, which would then get clobbered
            // by `undefined` when this query resolves.
            if (value) {
              this._templateLabel = value;
            }
          }
        }]);

        return MatTab;
      }(_MatTabMixinBase);

      MatTab.ɵfac = function MatTab_Factory(t) {
        return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8));
      };

      MatTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatTab,
        selectors: [["mat-tab"]],
        contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MAT_TAB_LABEL, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, MAT_TAB_CONTENT, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
          }
        },
        viewQuery: function MatTab_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
          }
        },
        inputs: {
          disabled: "disabled",
          textLabel: ["label", "textLabel"],
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"]
        },
        exportAs: ["matTab"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatTab_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2
      });

      MatTab.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TAB_GROUP]
          }]
        }];
      };

      MatTab.propDecorators = {
        templateLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MAT_TAB_LABEL]
        }],
        _explicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MAT_TAB_CONTENT, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
            "static": true
          }]
        }],
        _implicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], {
            "static": true
          }]
        }],
        textLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['label']
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['aria-labelledby']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTab, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-tab',
            template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
            inputs: ['disabled'],
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            exportAs: 'matTab'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_TAB_GROUP]
            }]
          }];
        }, {
          textLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['label']
          }],
          templateLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MAT_TAB_LABEL]
          }],
          _explicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MAT_TAB_CONTENT, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
              "static": true
            }]
          }],
          _implicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], {
              "static": true
            }]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-labelledby']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the Material tabs.
       * @docs-private
       */


      var matTabsAnimations = {
        /** Animation translates a tab along the X axis. */
        translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('translateTab', [// Note: transitions to `none` instead of 0, because some browsers might blur the content.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'none'
        })), // If the tab is either on the left or right, we additionally add a `min-height` of 1px
        // in order to ensure that the element has a height before its state changes. This is
        // necessary because Chrome does seem to skip the transition in RTL mode if the element does
        // not have a static height and is not rendered. See related issue: #9465
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'translate3d(-100%, 0, 0)',
          minHeight: '1px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'translate3d(100%, 0, 0)',
          minHeight: '1px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => left-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'translate3d(-100%, 0, 0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => right-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'translate3d(100%, 0, 0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The portal host directive for the contents of the tab.
       * @docs-private
       */

      var MatTabBodyPortal = /*#__PURE__*/function (_angular_cdk_portal__2) {
        _inherits(MatTabBodyPortal, _angular_cdk_portal__2);

        var _super8 = _createSuper(MatTabBodyPortal);

        function MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host,
        /**
         * @deprecated `_document` parameter to be made required.
         * @breaking-change 9.0.0
         */
        _document) {
          var _this19;

          _classCallCheck(this, MatTabBodyPortal);

          _this19 = _super8.call(this, componentFactoryResolver, viewContainerRef, _document);
          _this19._host = _host;
          /** Subscription to events for when the tab body begins centering. */

          _this19._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Subscription to events for when the tab body finishes leaving from center position. */

          _this19._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          return _this19;
        }
        /** Set initial visibility or set up subscription for changing visibility. */


        _createClass(MatTabBodyPortal, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            _get(_getPrototypeOf(MatTabBodyPortal.prototype), "ngOnInit", this).call(this);

            this._centeringSub = this._host._beforeCentering.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._host._isCenterPosition(this._host._position))).subscribe(function (isCentering) {
              if (isCentering && !_this20.hasAttached()) {
                _this20.attach(_this20._host._content);
              }
            });
            this._leavingSub = this._host._afterLeavingCenter.subscribe(function () {
              _this20.detach();
            });
          }
          /** Clean up centering subscription. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(MatTabBodyPortal.prototype), "ngOnDestroy", this).call(this);

            this._centeringSub.unsubscribe();

            this._leavingSub.unsubscribe();
          }
        }]);

        return MatTabBodyPortal;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]);

      MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
        return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatTabBody;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      MatTabBodyPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatTabBodyPortal,
        selectors: [["", "matTabBodyHost", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatTabBodyPortal.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: MatTabBody,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
              return MatTabBody;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBodyPortal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[matTabBodyHost]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
          }, {
            type: MatTabBody,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
                return MatTabBody;
              })]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * Base class with all of the `MatTabBody` functionality.
       * @docs-private
       */


      var _MatTabBodyBase = /*#__PURE__*/function () {
        function _MatTabBodyBase(_elementRef, _dir, changeDetectorRef) {
          var _this21 = this;

          _classCallCheck(this, _MatTabBodyBase);

          this._elementRef = _elementRef;
          this._dir = _dir;
          /** Subscription to the directionality change observable. */

          this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Emits when an animation on the tab is complete. */

          this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Event emitted when the tab begins to animate towards the center as the active tab. */

          this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted before the centering of the tab begins. */

          this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted before the centering of the tab begins. */

          this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted when the tab completes its animation towards the center. */

          this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true); // Note that the default value will always be overwritten by `MatTabBody`, but we need one
          // anyway to prevent the animations module from throwing an error if the body is used on its own.

          /** Duration for the tab's animation. */

          this.animationDuration = '500ms';

          if (_dir) {
            this._dirChangeSubscription = _dir.change.subscribe(function (dir) {
              _this21._computePositionAnimationState(dir);

              changeDetectorRef.markForCheck();
            });
          } // Ensure that we get unique animation events, because the `.done` callback can get
          // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.


          this._translateTabComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          })).subscribe(function (event) {
            // If the transition to the center is complete, emit an event.
            if (_this21._isCenterPosition(event.toState) && _this21._isCenterPosition(_this21._position)) {
              _this21._onCentered.emit();
            }

            if (_this21._isCenterPosition(event.fromState) && !_this21._isCenterPosition(_this21._position)) {
              _this21._afterLeavingCenter.emit();
            }
          });
        }
        /** The shifted index position of the tab body, where zero represents the active center tab. */


        _createClass(_MatTabBodyBase, [{
          key: "position",
          set: function set(position) {
            this._positionIndex = position;

            this._computePositionAnimationState();
          }
          /**
           * After initialized, check if the content is centered and has an origin. If so, set the
           * special position states that transition the tab from the left or right before centering.
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._position == 'center' && this.origin != null) {
              this._position = this._computePositionFromOrigin(this.origin);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._dirChangeSubscription.unsubscribe();

            this._translateTabComplete.complete();
          }
        }, {
          key: "_onTranslateTabStarted",
          value: function _onTranslateTabStarted(event) {
            var isCentering = this._isCenterPosition(event.toState);

            this._beforeCentering.emit(isCentering);

            if (isCentering) {
              this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
            }
          }
          /** The text direction of the containing app. */

        }, {
          key: "_getLayoutDirection",
          value: function _getLayoutDirection() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Whether the provided position state is considered center, regardless of origin. */

        }, {
          key: "_isCenterPosition",
          value: function _isCenterPosition(position) {
            return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
          }
          /** Computes the position state that will be used for the tab-body animation trigger. */

        }, {
          key: "_computePositionAnimationState",
          value: function _computePositionAnimationState() {
            var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getLayoutDirection();

            if (this._positionIndex < 0) {
              this._position = dir == 'ltr' ? 'left' : 'right';
            } else if (this._positionIndex > 0) {
              this._position = dir == 'ltr' ? 'right' : 'left';
            } else {
              this._position = 'center';
            }
          }
          /**
           * Computes the position state based on the specified origin position. This is used if the
           * tab is becoming visible immediately after creation.
           */

        }, {
          key: "_computePositionFromOrigin",
          value: function _computePositionFromOrigin(origin) {
            var dir = this._getLayoutDirection();

            if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
              return 'left-origin-center';
            }

            return 'right-origin-center';
          }
        }]);

        return _MatTabBodyBase;
      }();

      _MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) {
        return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      _MatTabBodyBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _MatTabBodyBase,
        inputs: {
          animationDuration: "animationDuration",
          position: "position",
          _content: ["content", "_content"],
          origin: "origin"
        },
        outputs: {
          _onCentering: "_onCentering",
          _beforeCentering: "_beforeCentering",
          _afterLeavingCenter: "_afterLeavingCenter",
          _onCentered: "_onCentered"
        }
      });

      _MatTabBodyBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      _MatTabBodyBase.propDecorators = {
        _onCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _beforeCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _afterLeavingCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _onCentered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['content']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabBodyBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          _onCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _beforeCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _afterLeavingCenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _onCentered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['content']
          }],
          origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Wrapper for the contents of a tab.
       * @docs-private
       */


      var MatTabBody = /*#__PURE__*/function (_MatTabBodyBase2) {
        _inherits(MatTabBody, _MatTabBodyBase2);

        var _super9 = _createSuper(MatTabBody);

        function MatTabBody(elementRef, dir, changeDetectorRef) {
          _classCallCheck(this, MatTabBody);

          return _super9.call(this, elementRef, dir, changeDetectorRef);
        }

        return MatTabBody;
      }(_MatTabBodyBase);

      MatTabBody.ɵfac = function MatTabBody_Factory(t) {
        return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      MatTabBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatTabBody,
        selectors: [["mat-tab-body"]],
        viewQuery: function MatTabBody_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-body"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 6,
        consts: [[1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
        template: function MatTabBody_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
              return ctx._onTranslateTabStarted($event);
            })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
              return ctx._translateTabComplete.next($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
          }
        },
        directives: [MatTabBodyPortal],
        styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],
        encapsulation: 2,
        data: {
          animation: [matTabsAnimations.translateTab]
        }
      });

      MatTabBody.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      MatTabBody.propDecorators = {
        _portalHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"]]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBody, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-tab-body',
            template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\">\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
            animations: [matTabsAnimations.translateTab],
            host: {
              'class': 'mat-tab-body'
            },
            styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          _portalHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"]]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to provide the default options the tabs module. */


      var MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TABS_CONFIG');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID's for each tab component */

      var nextId = 0;
      /** A simple change event emitted on focus or selection changes. */

      var MatTabChangeEvent = function MatTabChangeEvent() {
        _classCallCheck(this, MatTabChangeEvent);
      }; // Boilerplate for applying mixins to MatTabGroup.

      /** @docs-private */


      var MatTabGroupMixinBase = function MatTabGroupMixinBase(_elementRef) {
        _classCallCheck(this, MatTabGroupMixinBase);

        this._elementRef = _elementRef;
      };

      var _MatTabGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatTabGroupMixinBase), 'primary');
      /**
       * Base class with all of the `MatTabGroupBase` functionality.
       * @docs-private
       */


      var _MatTabGroupBase = /*#__PURE__*/function (_MatTabGroupMixinBase2) {
        _inherits(_MatTabGroupBase, _MatTabGroupMixinBase2);

        var _super10 = _createSuper(_MatTabGroupBase);

        function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
          var _this22;

          _classCallCheck(this, _MatTabGroupBase);

          _this22 = _super10.call(this, elementRef);
          _this22._changeDetectorRef = _changeDetectorRef;
          _this22._animationMode = _animationMode;
          /** All of the tabs that belong to the group. */

          _this22._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"]();
          /** The tab index that should be selected after the content has been checked. */

          _this22._indexToSelect = 0;
          /** Snapshot of the height of the tab body wrapper before another tab is activated. */

          _this22._tabBodyWrapperHeight = 0;
          /** Subscription to tabs being added/removed. */

          _this22._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Subscription to changes in the tab labels. */

          _this22._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          _this22._dynamicHeight = false;
          _this22._selectedIndex = null;
          /** Position of the tab header. */

          _this22.headerPosition = 'above';
          /** Output to enable support for two-way binding on `[(selectedIndex)]` */

          _this22.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted when focus has changed within a tab group. */

          _this22.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted when the body animation has completed */

          _this22.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted when the tab selection has changed. */

          _this22.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
          _this22._groupId = nextId++;
          _this22.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
          _this22.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
          return _this22;
        }
        /** Whether the tab group should grow to the size of the active tab. */


        _createClass(_MatTabGroupBase, [{
          key: "dynamicHeight",
          get: function get() {
            return this._dynamicHeight;
          },
          set: function set(value) {
            this._dynamicHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
          }
          /** The index of the active tab. */

        }, {
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(value) {
            this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value, null);
          }
          /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */

        }, {
          key: "animationDuration",
          get: function get() {
            return this._animationDuration;
          },
          set: function set(value) {
            this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
          }
          /** Background color of the tab group. */

        }, {
          key: "backgroundColor",
          get: function get() {
            return this._backgroundColor;
          },
          set: function set(value) {
            var nativeElement = this._elementRef.nativeElement;
            nativeElement.classList.remove("mat-background-".concat(this.backgroundColor));

            if (value) {
              nativeElement.classList.add("mat-background-".concat(value));
            }

            this._backgroundColor = value;
          }
          /**
           * After the content is checked, this component knows what tabs have been defined
           * and what the selected index should be. This is where we can know exactly what position
           * each tab should be in according to the new selected index, and additionally we know how
           * a new selected tab should transition in (from the left or right).
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            var _this23 = this;

            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.


            if (this._selectedIndex != indexToSelect) {
              var isFirstRun = this._selectedIndex == null;

              if (!isFirstRun) {
                this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
              } // Changing these values after change detection has run
              // since the checked content may contain references to them.


              Promise.resolve().then(function () {
                _this23._tabs.forEach(function (tab, index) {
                  return tab.isActive = index === indexToSelect;
                });

                if (!isFirstRun) {
                  _this23.selectedIndexChange.emit(indexToSelect);
                }
              });
            } // Setup the position for each tab and optionally setup an origin on the next selected tab.


            this._tabs.forEach(function (tab, index) {
              tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
              // if it doesn't have one already.

              if (_this23._selectedIndex != null && tab.position == 0 && !tab.origin) {
                tab.origin = indexToSelect - _this23._selectedIndex;
              }
            });

            if (this._selectedIndex !== indexToSelect) {
              this._selectedIndex = indexToSelect;

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this24 = this;

            this._subscribeToAllTabChanges();

            this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
            // able to re-render the content as new tabs are added or removed.


            this._tabsSubscription = this._tabs.changes.subscribe(function () {
              var indexToSelect = _this24._clampTabIndex(_this24._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
              // explicit change that selects a different tab.


              if (indexToSelect === _this24._selectedIndex) {
                var tabs = _this24._tabs.toArray();

                for (var i = 0; i < tabs.length; i++) {
                  if (tabs[i].isActive) {
                    // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                    // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                    // adding a tab within the `selectedIndexChange` event.
                    _this24._indexToSelect = _this24._selectedIndex = i;
                    break;
                  }
                }
              }

              _this24._changeDetectorRef.markForCheck();
            });
          }
          /** Listens to changes in all of the tabs. */

        }, {
          key: "_subscribeToAllTabChanges",
          value: function _subscribeToAllTabChanges() {
            var _this25 = this;

            // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
            // some that are inside of nested tab groups. We filter them out manually by checking that
            // the closest group to the tab is the current one.
            this._allTabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._allTabs)).subscribe(function (tabs) {
              _this25._tabs.reset(tabs.filter(function (tab) {
                // @breaking-change 10.0.0 Remove null check for `_closestTabGroup`
                // once it becomes a required parameter in MatTab.
                return !tab._closestTabGroup || tab._closestTabGroup === _this25;
              }));

              _this25._tabs.notifyOnChanges();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._tabs.destroy();

            this._tabsSubscription.unsubscribe();

            this._tabLabelSubscription.unsubscribe();
          }
          /** Re-aligns the ink bar to the selected tab element. */

        }, {
          key: "realignInkBar",
          value: function realignInkBar() {
            if (this._tabHeader) {
              this._tabHeader._alignInkBarToSelectedTab();
            }
          }
        }, {
          key: "_focusChanged",
          value: function _focusChanged(index) {
            this.focusChange.emit(this._createChangeEvent(index));
          }
        }, {
          key: "_createChangeEvent",
          value: function _createChangeEvent(index) {
            var event = new MatTabChangeEvent();
            event.index = index;

            if (this._tabs && this._tabs.length) {
              event.tab = this._tabs.toArray()[index];
            }

            return event;
          }
          /**
           * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
           * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
           * binding to be updated, we need to subscribe to changes in it and trigger change detection
           * manually.
           */

        }, {
          key: "_subscribeToTabLabels",
          value: function _subscribeToTabLabels() {
            var _this26 = this;

            if (this._tabLabelSubscription) {
              this._tabLabelSubscription.unsubscribe();
            }

            this._tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this._tabs.map(function (tab) {
              return tab._stateChanges;
            }))).subscribe(function () {
              return _this26._changeDetectorRef.markForCheck();
            });
          }
          /** Clamps the given index to the bounds of 0 and the tabs length. */

        }, {
          key: "_clampTabIndex",
          value: function _clampTabIndex(index) {
            // Note the `|| 0`, which ensures that values like NaN can't get through
            // and which would otherwise throw the component into an infinite loop
            // (since Math.max(NaN, 0) === NaN).
            return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
          }
          /** Returns a unique id for each tab label element */

        }, {
          key: "_getTabLabelId",
          value: function _getTabLabelId(i) {
            return "mat-tab-label-".concat(this._groupId, "-").concat(i);
          }
          /** Returns a unique id for each tab content element */

        }, {
          key: "_getTabContentId",
          value: function _getTabContentId(i) {
            return "mat-tab-content-".concat(this._groupId, "-").concat(i);
          }
          /**
           * Sets the height of the body wrapper to the height of the activating tab if dynamic
           * height property is true.
           */

        }, {
          key: "_setTabBodyWrapperHeight",
          value: function _setTabBodyWrapperHeight(tabHeight) {
            if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
              return;
            }

            var wrapper = this._tabBodyWrapper.nativeElement;
            wrapper.style.height = this._tabBodyWrapperHeight + 'px'; // This conditional forces the browser to paint the height so that
            // the animation to the new height can have an origin.

            if (this._tabBodyWrapper.nativeElement.offsetHeight) {
              wrapper.style.height = tabHeight + 'px';
            }
          }
          /** Removes the height of the tab body wrapper. */

        }, {
          key: "_removeTabBodyWrapperHeight",
          value: function _removeTabBodyWrapperHeight() {
            var wrapper = this._tabBodyWrapper.nativeElement;
            this._tabBodyWrapperHeight = wrapper.clientHeight;
            wrapper.style.height = '';
            this.animationDone.emit();
          }
          /** Handle click events, setting new selected index if appropriate. */

        }, {
          key: "_handleClick",
          value: function _handleClick(tab, tabHeader, index) {
            if (!tab.disabled) {
              this.selectedIndex = tabHeader.focusIndex = index;
            }
          }
          /** Retrieves the tabindex for the tab. */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex(tab, idx) {
            if (tab.disabled) {
              return null;
            }

            return this.selectedIndex === idx ? 0 : -1;
          }
        }]);

        return _MatTabGroupBase;
      }(_MatTabGroupMixinBase);

      _MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) {
        return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      _MatTabGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _MatTabGroupBase,
        inputs: {
          headerPosition: "headerPosition",
          animationDuration: "animationDuration",
          disablePagination: "disablePagination",
          dynamicHeight: "dynamicHeight",
          selectedIndex: "selectedIndex",
          backgroundColor: "backgroundColor"
        },
        outputs: {
          selectedIndexChange: "selectedIndexChange",
          focusChange: "focusChange",
          animationDone: "animationDone",
          selectedTabChange: "selectedTabChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabGroupBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      _MatTabGroupBase.propDecorators = {
        dynamicHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        headerPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        focusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        selectedTabChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabGroupBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_TABS_CONFIG]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          headerPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          focusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          selectedTabChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dynamicHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Material design tab-group component. Supports basic tab pairs (label + content) and includes
       * animated ink-bar, keyboard navigation, and screen reader.
       * See: https://material.io/design/components/tabs.html
       */


      var MatTabGroup = /*#__PURE__*/function (_MatTabGroupBase2) {
        _inherits(MatTabGroup, _MatTabGroupBase2);

        var _super11 = _createSuper(MatTabGroup);

        function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
          _classCallCheck(this, MatTabGroup);

          return _super11.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode);
        }

        return MatTabGroup;
      }(_MatTabGroupBase);

      MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
        return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatTabGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatTabGroup,
        selectors: [["mat-tab-group"]],
        contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTab, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
          }
        },
        viewQuery: function MatTabGroup_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-group"],
        hostVars: 4,
        hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
          }
        },
        inputs: {
          color: "color",
          disableRipple: "disableRipple"
        },
        exportAs: ["matTabGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_GROUP,
          useExisting: MatTabGroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 6,
        vars: 7,
        consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "disabled", "matRippleDisabled", "click"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]],
        template: function MatTabGroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
              return ctx._focusChanged($event);
            })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
              return ctx.selectedIndex = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);
          }
        },
        directives: function directives() {
          return [MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], MatTabBody];
        },
        styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],
        encapsulation: 2
      });

      MatTabGroup.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatTabGroup.propDecorators = {
        _allTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [MatTab, {
            descendants: true
          }]
        }],
        _tabBodyWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabBodyWrapper']
        }],
        _tabHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabHeader']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-tab-group',
            exportAs: 'matTabGroup',
            template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
            inputs: ['color', 'disableRipple'],
            providers: [{
              provide: MAT_TAB_GROUP,
              useExisting: MatTabGroup
            }],
            host: {
              'class': 'mat-tab-group',
              '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
              '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
            },
            styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_TABS_CONFIG]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          _allTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [MatTab, {
              descendants: true
            }]
          }],
          _tabBodyWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabBodyWrapper']
          }],
          _tabHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabHeader']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatTabLabelWrapper.

      /** @docs-private */


      var MatTabLabelWrapperBase = function MatTabLabelWrapperBase() {
        _classCallCheck(this, MatTabLabelWrapperBase);
      };

      var _MatTabLabelWrapperMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLabelWrapperBase);
      /**
       * Used in the `mat-tab-group` view to display tab labels.
       * @docs-private
       */


      var MatTabLabelWrapper = /*#__PURE__*/function (_MatTabLabelWrapperMi) {
        _inherits(MatTabLabelWrapper, _MatTabLabelWrapperMi);

        var _super12 = _createSuper(MatTabLabelWrapper);

        function MatTabLabelWrapper(elementRef) {
          var _this27;

          _classCallCheck(this, MatTabLabelWrapper);

          _this27 = _super12.call(this);
          _this27.elementRef = elementRef;
          return _this27;
        }
        /** Sets focus on the wrapper element */


        _createClass(MatTabLabelWrapper, [{
          key: "focus",
          value: function focus() {
            this.elementRef.nativeElement.focus();
          }
        }, {
          key: "getOffsetLeft",
          value: function getOffsetLeft() {
            return this.elementRef.nativeElement.offsetLeft;
          }
        }, {
          key: "getOffsetWidth",
          value: function getOffsetWidth() {
            return this.elementRef.nativeElement.offsetWidth;
          }
        }]);

        return MatTabLabelWrapper;
      }(_MatTabLabelWrapperMixinBase);

      MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) {
        return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      MatTabLabelWrapper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatTabLabelWrapper,
        selectors: [["", "matTabLabelWrapper", ""]],
        hostVars: 3,
        hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatTabLabelWrapper.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[matTabLabelWrapper]',
            inputs: ['disabled'],
            host: {
              '[class.mat-tab-disabled]': 'disabled',
              '[attr.aria-disabled]': '!!disabled'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Config used to bind passive event listeners */


      var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
       * provide a small affordance to the label next to it.
       */

      var EXAGGERATED_OVERSCROLL = 60;
      /**
       * Amount of milliseconds to wait before starting to scroll the header automatically.
       * Set a little conservatively in order to handle fake events dispatched on touch devices.
       */

      var HEADER_SCROLL_DELAY = 650;
      /**
       * Interval in milliseconds at which to scroll the header
       * while the user is holding their pointer.
       */

      var HEADER_SCROLL_INTERVAL = 100;
      /**
       * Base class for a tab header that supported pagination.
       * @docs-private
       */

      var MatPaginatedTabHeader = /*#__PURE__*/function () {
        function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone,
        /**
         * @deprecated @breaking-change 9.0.0 `_platform` and `_animationMode`
         * parameters to become required.
         */
        _platform, _animationMode) {
          var _this28 = this;

          _classCallCheck(this, MatPaginatedTabHeader);

          this._elementRef = _elementRef;
          this._changeDetectorRef = _changeDetectorRef;
          this._viewportRuler = _viewportRuler;
          this._dir = _dir;
          this._ngZone = _ngZone;
          this._platform = _platform;
          this._animationMode = _animationMode;
          /** The distance in pixels that the tab labels should be translated to the left. */

          this._scrollDistance = 0;
          /** Whether the header should scroll to the selected index after the view has been checked. */

          this._selectedIndexChanged = false;
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Whether the controls for pagination should be displayed */

          this._showPaginationControls = false;
          /** Whether the tab list can be scrolled more towards the end of the tab label list. */

          this._disableScrollAfter = true;
          /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */

          this._disableScrollBefore = true;
          /** Stream that will stop the automated scrolling. */

          this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /**
           * Whether pagination should be disabled. This can be used to avoid unnecessary
           * layout recalculations if it's known that pagination won't be required.
           */

          this.disablePagination = false;
          this._selectedIndex = 0;
          /** Event emitted when the option is selected. */

          this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Event emitted when a label is focused. */

          this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

          _ngZone.runOutsideAngular(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(_elementRef.nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this28._destroyed)).subscribe(function () {
              _this28._stopInterval();
            });
          });
        }
        /** The index of the active tab. */


        _createClass(MatPaginatedTabHeader, [{
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value);

            if (this._selectedIndex != value) {
              this._selectedIndexChanged = true;
              this._selectedIndex = value;

              if (this._keyManager) {
                this._keyManager.updateActiveItem(value);
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this29 = this;

            // We need to handle these events manually, because we want to bind passive event listeners.
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this29._handlePaginatorPress('before');
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this29._handlePaginatorPress('after');
            });
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this30 = this;

            var dirChange = this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);

            var resize = this._viewportRuler.change(150);

            var realign = function realign() {
              _this30.updatePagination();

              _this30._alignInkBarToSelectedTab();
            };

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap();

            this._keyManager.updateActiveItem(0); // Defer the first call in order to allow for slower browsers to lay out the elements.
            // This helps in cases where the user lands directly on a page with paginated tabs.


            typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign(); // On dir change or window resize, realign the ink bar and update the orientation of
            // the key manager if the direction has changed.

            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(dirChange, resize, this._items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              // We need to defer this to give the browser some time to recalculate the element dimensions.
              Promise.resolve().then(realign);

              _this30._keyManager.withHorizontalOrientation(_this30._getLayoutDirection());
            }); // If there is a change in the focus key manager we need to emit the `indexFocused`
            // event in order to provide a public event that notifies about focus changes. Also we realign
            // the tabs container by scrolling the new focused tab into the visible section.

            this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (newFocusIndex) {
              _this30.indexFocused.emit(newFocusIndex);

              _this30._setTabFocus(newFocusIndex);
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            // If the number of tab labels have changed, check if scrolling should be enabled
            if (this._tabLabelCount != this._items.length) {
              this.updatePagination();
              this._tabLabelCount = this._items.length;

              this._changeDetectorRef.markForCheck();
            } // If the selected index has changed, scroll to the label and check if the scrolling controls
            // should be disabled.


            if (this._selectedIndexChanged) {
              this._scrollToLabel(this._selectedIndex);

              this._checkScrollingControls();

              this._alignInkBarToSelectedTab();

              this._selectedIndexChanged = false;

              this._changeDetectorRef.markForCheck();
            } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
            // then translate the header to reflect this.


            if (this._scrollDistanceChanged) {
              this._updateTabScrollPosition();

              this._scrollDistanceChanged = false;

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();

            this._stopScrolling.complete();
          }
          /** Handles keyboard events on the header. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            // We don't handle any key bindings with a modifier key.
            if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event)) {
              return;
            }

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["SPACE"]:
                if (this.focusIndex !== this.selectedIndex) {
                  this.selectFocusedIndex.emit(this.focusIndex);

                  this._itemSelected(event);
                }

                break;

              default:
                this._keyManager.onKeydown(event);

            }
          }
          /**
           * Callback for when the MutationObserver detects that the content has changed.
           */

        }, {
          key: "_onContentChanges",
          value: function _onContentChanges() {
            var _this31 = this;

            var textContent = this._elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
            // will fire even if the text content didn't change which is inefficient and is prone
            // to infinite loops if a poorly constructed expression is passed in (see #14249).

            if (textContent !== this._currentTextContent) {
              this._currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
              // means that we need to bring the callback back in ourselves.

              this._ngZone.run(function () {
                _this31.updatePagination();

                _this31._alignInkBarToSelectedTab();

                _this31._changeDetectorRef.markForCheck();
              });
            }
          }
          /**
           * Updates the view whether pagination should be enabled or not.
           *
           * WARNING: Calling this method can be very costly in terms of performance. It should be called
           * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
           * page.
           */

        }, {
          key: "updatePagination",
          value: function updatePagination() {
            this._checkPaginationEnabled();

            this._checkScrollingControls();

            this._updateTabScrollPosition();
          }
          /** Tracks which element has focus; used for keyboard navigation */

        }, {
          key: "focusIndex",
          get: function get() {
            return this._keyManager ? this._keyManager.activeItemIndex : 0;
          }
          /** When the focus index is set, we must manually send focus to the correct label */
          ,
          set: function set(value) {
            if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
              return;
            }

            this._keyManager.setActiveItem(value);
          }
          /**
           * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
           * providing a valid index and return true.
           */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            if (!this._items) {
              return true;
            }

            var tab = this._items ? this._items.toArray()[index] : null;
            return !!tab && !tab.disabled;
          }
          /**
           * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
           * scrolling is enabled.
           */

        }, {
          key: "_setTabFocus",
          value: function _setTabFocus(tabIndex) {
            if (this._showPaginationControls) {
              this._scrollToLabel(tabIndex);
            }

            if (this._items && this._items.length) {
              this._items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
              // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
              // should be the full width minus the offset width.


              var containerEl = this._tabListContainer.nativeElement;

              var dir = this._getLayoutDirection();

              if (dir == 'ltr') {
                containerEl.scrollLeft = 0;
              } else {
                containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
              }
            }
          }
          /** The layout direction of the containing app. */

        }, {
          key: "_getLayoutDirection",
          value: function _getLayoutDirection() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Performs the CSS transformation on the tab list that will cause the list to scroll. */

        }, {
          key: "_updateTabScrollPosition",
          value: function _updateTabScrollPosition() {
            if (this.disablePagination) {
              return;
            }

            var scrollDistance = this.scrollDistance;
            var platform = this._platform;
            var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
            // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
            // and ripples will exceed the boundaries of the visible tab bar.
            // See: https://github.com/angular/components/issues/10276
            // We round the `transform` here, because transforms with sub-pixel precision cause some
            // browsers to blur the content of the element.

            this._tabList.nativeElement.style.transform = "translateX(".concat(Math.round(translateX), "px)"); // Setting the `transform` on IE will change the scroll offset of the parent, causing the
            // position to be thrown off in some cases. We have to reset it ourselves to ensure that
            // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
            // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
            // @breaking-change 9.0.0 Remove null check for `platform` after it can no longer be undefined.

            if (platform && (platform.TRIDENT || platform.EDGE)) {
              this._tabListContainer.nativeElement.scrollLeft = 0;
            }
          }
          /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */

        }, {
          key: "scrollDistance",
          get: function get() {
            return this._scrollDistance;
          },
          set: function set(value) {
            this._scrollTo(value);
          }
          /**
           * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
           * the end of the list, respectively). The distance to scroll is computed to be a third of the
           * length of the tab list view window.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_scrollHeader",
          value: function _scrollHeader(direction) {
            var viewLength = this._tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

            var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
            return this._scrollTo(this._scrollDistance + scrollAmount);
          }
          /** Handles click events on the pagination arrows. */

        }, {
          key: "_handlePaginatorClick",
          value: function _handlePaginatorClick(direction) {
            this._stopInterval();

            this._scrollHeader(direction);
          }
          /**
           * Moves the tab list such that the desired tab label (marked by index) is moved into view.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_scrollToLabel",
          value: function _scrollToLabel(labelIndex) {
            if (this.disablePagination) {
              return;
            }

            var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;

            if (!selectedLabel) {
              return;
            } // The view length is the visible width of the tab labels.


            var viewLength = this._tabListContainer.nativeElement.offsetWidth;
            var _selectedLabel$elemen = selectedLabel.elementRef.nativeElement,
                offsetLeft = _selectedLabel$elemen.offsetLeft,
                offsetWidth = _selectedLabel$elemen.offsetWidth;
            var labelBeforePos, labelAfterPos;

            if (this._getLayoutDirection() == 'ltr') {
              labelBeforePos = offsetLeft;
              labelAfterPos = labelBeforePos + offsetWidth;
            } else {
              labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
              labelBeforePos = labelAfterPos - offsetWidth;
            }

            var beforeVisiblePos = this.scrollDistance;
            var afterVisiblePos = this.scrollDistance + viewLength;

            if (labelBeforePos < beforeVisiblePos) {
              // Scroll header to move label to the before direction
              this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            } else if (labelAfterPos > afterVisiblePos) {
              // Scroll header to move label to the after direction
              this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
          }
          /**
           * Evaluate whether the pagination controls should be displayed. If the scroll width of the
           * tab list is wider than the size of the header container, then the pagination controls should
           * be shown.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_checkPaginationEnabled",
          value: function _checkPaginationEnabled() {
            if (this.disablePagination) {
              this._showPaginationControls = false;
            } else {
              var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

              if (!isEnabled) {
                this.scrollDistance = 0;
              }

              if (isEnabled !== this._showPaginationControls) {
                this._changeDetectorRef.markForCheck();
              }

              this._showPaginationControls = isEnabled;
            }
          }
          /**
           * Evaluate whether the before and after controls should be enabled or disabled.
           * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
           * before button. If the header is at the end of the list (scroll distance is equal to the
           * maximum distance we can scroll), then disable the after button.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_checkScrollingControls",
          value: function _checkScrollingControls() {
            if (this.disablePagination) {
              this._disableScrollAfter = this._disableScrollBefore = true;
            } else {
              // Check if the pagination arrows should be activated.
              this._disableScrollBefore = this.scrollDistance == 0;
              this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Determines what is the maximum length in pixels that can be set for the scroll distance. This
           * is equal to the difference in width between the tab list container and tab header container.
           *
           * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
           * should be called sparingly.
           */

        }, {
          key: "_getMaxScrollDistance",
          value: function _getMaxScrollDistance() {
            var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
            var viewLength = this._tabListContainer.nativeElement.offsetWidth;
            return lengthOfTabList - viewLength || 0;
          }
          /** Tells the ink-bar to align itself to the current label wrapper */

        }, {
          key: "_alignInkBarToSelectedTab",
          value: function _alignInkBarToSelectedTab() {
            var selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
            var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;

            if (selectedLabelWrapper) {
              this._inkBar.alignToElement(selectedLabelWrapper);
            } else {
              this._inkBar.hide();
            }
          }
          /** Stops the currently-running paginator interval.  */

        }, {
          key: "_stopInterval",
          value: function _stopInterval() {
            this._stopScrolling.next();
          }
          /**
           * Handles the user pressing down on one of the paginators.
           * Starts scrolling the header after a certain amount of time.
           * @param direction In which direction the paginator should be scrolled.
           */

        }, {
          key: "_handlePaginatorPress",
          value: function _handlePaginatorPress(direction, mouseEvent) {
            var _this32 = this;

            // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
            // null check the `button`, but we do it so we don't break tests that use fake events.
            if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
              return;
            } // Avoid overlapping timers.


            this._stopInterval(); // Start a timer after the delay and keep firing based on the interval.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this._stopScrolling, this._destroyed))).subscribe(function () {
              var _this32$_scrollHeader = _this32._scrollHeader(direction),
                  maxScrollDistance = _this32$_scrollHeader.maxScrollDistance,
                  distance = _this32$_scrollHeader.distance; // Stop the timer if we've reached the start or the end.


              if (distance === 0 || distance >= maxScrollDistance) {
                _this32._stopInterval();
              }
            });
          }
          /**
           * Scrolls the header to a given position.
           * @param position Position to which to scroll.
           * @returns Information on the current scroll distance and the maximum.
           */

        }, {
          key: "_scrollTo",
          value: function _scrollTo(position) {
            if (this.disablePagination) {
              return {
                maxScrollDistance: 0,
                distance: 0
              };
            }

            var maxScrollDistance = this._getMaxScrollDistance();

            this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.

            this._scrollDistanceChanged = true;

            this._checkScrollingControls();

            return {
              maxScrollDistance: maxScrollDistance,
              distance: this._scrollDistance
            };
          }
        }]);

        return MatPaginatedTabHeader;
      }();

      MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
        return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatPaginatedTabHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatPaginatedTabHeader,
        inputs: {
          disablePagination: "disablePagination"
        }
      });

      MatPaginatedTabHeader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatPaginatedTabHeader.propDecorators = {
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base class with all of the `MatTabHeader` functionality.
       * @docs-private
       */


      var _MatTabHeaderBase = /*#__PURE__*/function (_MatPaginatedTabHeade) {
        _inherits(_MatTabHeaderBase, _MatPaginatedTabHeade);

        var _super13 = _createSuper(_MatTabHeaderBase);

        function _MatTabHeaderBase(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
        animationMode) {
          var _this33;

          _classCallCheck(this, _MatTabHeaderBase);

          _this33 = _super13.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
          _this33._disableRipple = false;
          return _this33;
        }
        /** Whether the ripple effect is disabled or not. */


        _createClass(_MatTabHeaderBase, [{
          key: "disableRipple",
          get: function get() {
            return this._disableRipple;
          },
          set: function set(value) {
            this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "_itemSelected",
          value: function _itemSelected(event) {
            event.preventDefault();
          }
        }]);

        return _MatTabHeaderBase;
      }(MatPaginatedTabHeader);

      _MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) {
        return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      _MatTabHeaderBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _MatTabHeaderBase,
        inputs: {
          disableRipple: "disableRipple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabHeaderBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      _MatTabHeaderBase.propDecorators = {
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabHeaderBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * The header of the tab group which displays a list of all the tabs in the tab group. Includes
       * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
       * width of the header container, then arrows will be displayed to allow the user to scroll
       * left and right across the header.
       * @docs-private
       */


      var MatTabHeader = /*#__PURE__*/function (_MatTabHeaderBase2) {
        _inherits(MatTabHeader, _MatTabHeaderBase2);

        var _super14 = _createSuper(MatTabHeader);

        function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
        animationMode) {
          _classCallCheck(this, MatTabHeader);

          return _super14.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        }

        return MatTabHeader;
      }(_MatTabHeaderBase);

      MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
        return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatTabHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatTabHeader,
        selectors: [["mat-tab-header"]],
        contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
          }
        },
        viewQuery: function MatTabHeader_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-header"],
        hostVars: 4,
        hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
          }
        },
        inputs: {
          selectedIndex: "selectedIndex"
        },
        outputs: {
          selectFocusedIndex: "selectFocusedIndex",
          indexFocused: "indexFocused"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 13,
        vars: 8,
        consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
        template: function MatTabHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() {
              return ctx._handlePaginatorClick("before");
            })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
              return ctx._handlePaginatorPress("before", $event);
            })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
              return ctx._handleKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
              return ctx._onContentChanges();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
              return ctx._handlePaginatorPress("after", $event);
            })("click", function MatTabHeader_Template_div_click_10_listener() {
              return ctx._handlePaginatorClick("after");
            })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar],
        styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"],
        encapsulation: 2
      });

      MatTabHeader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatTabHeader.propDecorators = {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [MatTabLabelWrapper, {
            descendants: false
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatInkBar, {
            "static": true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabListContainer', {
            "static": true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabList', {
            "static": true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['previousPaginator']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-tab-header',
            template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
            inputs: ['selectedIndex'],
            outputs: ['selectFocusedIndex', 'indexFocused'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
            host: {
              'class': 'mat-tab-header',
              '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
              '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
            },
            styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [MatTabLabelWrapper, {
              descendants: false
            }]
          }],
          _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatInkBar, {
              "static": true
            }]
          }],
          _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabListContainer', {
              "static": true
            }]
          }],
          _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabList', {
              "static": true
            }]
          }],
          _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['nextPaginator']
          }],
          _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['previousPaginator']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base class with all of the `MatTabNav` functionality.
       * @docs-private
       */


      var _MatTabNavBase = /*#__PURE__*/function (_MatPaginatedTabHeade2) {
        _inherits(_MatTabNavBase, _MatPaginatedTabHeade2);

        var _super15 = _createSuper(_MatTabNavBase);

        function _MatTabNavBase(elementRef, dir, ngZone, changeDetectorRef, viewportRuler,
        /**
         * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
         */
        platform, animationMode) {
          var _this34;

          _classCallCheck(this, _MatTabNavBase);

          _this34 = _super15.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
          _this34._disableRipple = false;
          /** Theme color of the nav bar. */

          _this34.color = 'primary';
          return _this34;
        }
        /** Background color of the tab nav. */


        _createClass(_MatTabNavBase, [{
          key: "backgroundColor",
          get: function get() {
            return this._backgroundColor;
          },
          set: function set(value) {
            var classList = this._elementRef.nativeElement.classList;
            classList.remove("mat-background-".concat(this.backgroundColor));

            if (value) {
              classList.add("mat-background-".concat(value));
            }

            this._backgroundColor = value;
          }
          /** Whether the ripple effect is disabled or not. */

        }, {
          key: "disableRipple",
          get: function get() {
            return this._disableRipple;
          },
          set: function set(value) {
            this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "_itemSelected",
          value: function _itemSelected() {// noop
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this35 = this;

            // We need this to run before the `changes` subscription in parent to ensure that the
            // selectedIndex is up-to-date by the time the super class starts looking for it.
            this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this35.updateActiveLink();
            });

            _get(_getPrototypeOf(_MatTabNavBase.prototype), "ngAfterContentInit", this).call(this);
          }
          /**
           * Notifies the component that the active link has been changed.
           * @breaking-change 8.0.0 `element` parameter to be removed.
           */

        }, {
          key: "updateActiveLink",
          value: function updateActiveLink(_element) {
            if (!this._items) {
              return;
            }

            var items = this._items.toArray();

            for (var i = 0; i < items.length; i++) {
              if (items[i].active) {
                this.selectedIndex = i;

                this._changeDetectorRef.markForCheck();

                return;
              }
            } // The ink bar should hide itself if no items are active.


            this.selectedIndex = -1;

            this._inkBar.hide();
          }
        }]);

        return _MatTabNavBase;
      }(MatPaginatedTabHeader);

      _MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) {
        return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      _MatTabNavBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _MatTabNavBase,
        inputs: {
          color: "color",
          backgroundColor: "backgroundColor",
          disableRipple: "disableRipple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabNavBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      _MatTabNavBase.propDecorators = {
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabNavBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Navigation component matching the styles of the tab group header.
       * Provides anchored navigation with animated ink bar.
       */


      var MatTabNav = /*#__PURE__*/function (_MatTabNavBase2) {
        _inherits(MatTabNav, _MatTabNavBase2);

        var _super16 = _createSuper(MatTabNav);

        function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler,
        /**
         * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
         */
        platform, animationMode) {
          _classCallCheck(this, MatTabNav);

          return _super16.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
        }

        return MatTabNav;
      }(_MatTabNavBase);

      MatTabNav.ɵfac = function MatTabNav_Factory(t) {
        return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatTabNav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatTabNav,
        selectors: [["", "mat-tab-nav-bar", ""]],
        contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLink, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
          }
        },
        viewQuery: function MatTabNav_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
          }
        },
        hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"],
        hostVars: 10,
        hostBindings: function MatTabNav_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matTabNavBar", "matTabNav"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        attrs: _c9,
        ngContentSelectors: _c0,
        decls: 13,
        vars: 8,
        consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
        template: function MatTabNav_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() {
              return ctx._handlePaginatorClick("before");
            })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
              return ctx._handlePaginatorPress("before", $event);
            })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
              return ctx._handleKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
              return ctx._onContentChanges();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
              return ctx._handlePaginatorPress("after", $event);
            })("click", function MatTabNav_Template_div_click_10_listener() {
              return ctx._handlePaginatorClick("after");
            })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
              return ctx._stopInterval();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar],
        styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"],
        encapsulation: 2
      });

      MatTabNav.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatTabNav.propDecorators = {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
            return MatTabLink;
          }), {
            descendants: true
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatInkBar, {
            "static": true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabListContainer', {
            "static": true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabList', {
            "static": true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['previousPaginator']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabNav, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: '[mat-tab-nav-bar]',
            exportAs: 'matTabNavBar, matTabNav',
            inputs: ['color'],
            template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    #tabList\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
            host: {
              'class': 'mat-tab-nav-bar mat-tab-header',
              '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
              '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
              '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
              '[class.mat-accent]': 'color === "accent"',
              '[class.mat-warn]': 'color === "warn"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
            styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
              return MatTabLink;
            }), {
              descendants: true
            }]
          }],
          _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatInkBar, {
              "static": true
            }]
          }],
          _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabListContainer', {
              "static": true
            }]
          }],
          _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabList', {
              "static": true
            }]
          }],
          _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['nextPaginator']
          }],
          _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['previousPaginator']
          }]
        });
      })(); // Boilerplate for applying mixins to MatTabLink.


      var MatTabLinkMixinBase = function MatTabLinkMixinBase() {
        _classCallCheck(this, MatTabLinkMixinBase);
      };

      var _MatTabLinkMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLinkMixinBase)));
      /** Base class with all of the `MatTabLink` functionality. */


      var _MatTabLinkBase = /*#__PURE__*/function (_MatTabLinkMixinBase2) {
        _inherits(_MatTabLinkBase, _MatTabLinkMixinBase2);

        var _super17 = _createSuper(_MatTabLinkBase);

        function _MatTabLinkBase(_tabNavBar, elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
          var _this36;

          _classCallCheck(this, _MatTabLinkBase);

          _this36 = _super17.call(this);
          _this36._tabNavBar = _tabNavBar;
          _this36.elementRef = elementRef;
          _this36._focusMonitor = _focusMonitor;
          /** Whether the tab link is active or not. */

          _this36._isActive = false;
          _this36.rippleConfig = globalRippleOptions || {};
          _this36.tabIndex = parseInt(tabIndex) || 0;

          if (animationMode === 'NoopAnimations') {
            _this36.rippleConfig.animation = {
              enterDuration: 0,
              exitDuration: 0
            };
          }

          return _this36;
        }
        /** Whether the link is active. */


        _createClass(_MatTabLinkBase, [{
          key: "active",
          get: function get() {
            return this._isActive;
          },
          set: function set(value) {
            if (value !== this._isActive) {
              this._isActive = value;

              this._tabNavBar.updateActiveLink(this.elementRef);
            }
          }
          /**
           * Whether ripples are disabled on interaction.
           * @docs-private
           */

        }, {
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
          }
        }, {
          key: "focus",
          value: function focus() {
            this.elementRef.nativeElement.focus();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this.elementRef);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this.elementRef);
          }
        }]);

        return _MatTabLinkBase;
      }(_MatTabLinkMixinBase);

      _MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) {
        return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      _MatTabLinkBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _MatTabLinkBase,
        inputs: {
          active: "active"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTabLinkBase.ctorParameters = function () {
        return [{
          type: _MatTabNavBase
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      _MatTabLinkBase.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabLinkBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _MatTabNavBase
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Link inside of a `mat-tab-nav-bar`.
       */


      var MatTabLink = /*#__PURE__*/function (_MatTabLinkBase2) {
        _inherits(MatTabLink, _MatTabLinkBase2);

        var _super18 = _createSuper(MatTabLink);

        function MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
          var _this37;

          _classCallCheck(this, MatTabLink);

          _this37 = _super18.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
          _this37._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["RippleRenderer"](_assertThisInitialized(_this37), ngZone, elementRef, platform);

          _this37._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);

          return _this37;
        }

        _createClass(MatTabLink, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(MatTabLink.prototype), "ngOnDestroy", this).call(this);

            this._tabLinkRipple._removeTriggerEvents();
          }
        }]);

        return MatTabLink;
      }(_MatTabLinkBase);

      MatTabLink.ɵfac = function MatTabLink_Factory(t) {
        return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatTabLink.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatTabLink,
        selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
        hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"],
        hostVars: 7,
        hostBindings: function MatTabLink_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex"
        },
        exportAs: ["matTabLink"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatTabLink.ctorParameters = function () {
        return [{
          type: MatTabNav
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLink, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[mat-tab-link], [matTabLink]',
            exportAs: 'matTabLink',
            inputs: ['disabled', 'disableRipple', 'tabIndex'],
            host: {
              'class': 'mat-tab-link mat-focus-indicator',
              '[attr.aria-current]': 'active ? "page" : null',
              '[attr.aria-disabled]': 'disabled',
              '[attr.tabIndex]': 'tabIndex',
              '[class.mat-tab-disabled]': 'disabled',
              '[class.mat-tab-label-active]': 'active'
            }
          }]
        }], function () {
          return [{
            type: MatTabNav
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatTabsModule = function MatTabsModule() {
        _classCallCheck(this, MatTabsModule);
      };

      MatTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: MatTabsModule
      });
      MatTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function MatTabsModule_Factory(t) {
          return new (t || MatTabsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatTabsModule, {
          declarations: function declarations() {
            return [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]],
            // Don't export all components because some are only to be used internally.
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent],
            declarations: [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=tabs.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~application-engineer-engineer-module~application-profile-profiles-module~userprofile-userpro~1f3d59d8-es5.js.map