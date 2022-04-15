(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-application-module~auth-auth-module"],{

/***/ "HnZm":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js ***!
  \*******************************************************************************************/
/*! exports provided: SignaturePad, SignaturePadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignaturePad", function() { return SignaturePad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignaturePadModule", function() { return SignaturePadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! signature_pad */ "cCNl");




class SignaturePad {
    constructor(elementRef) {
        // no op
        this.elementRef = elementRef;
        this.options = this.options || {};
        this.onBeginEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEndEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterContentInit() {
        const canvas = this.elementRef.nativeElement.querySelector('canvas');
        if (this.options.canvasHeight) {
            canvas.height = this.options.canvasHeight;
        }
        if (this.options.canvasWidth) {
            canvas.width = this.options.canvasWidth;
        }
        this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, this.options);
        this.signaturePad.onBegin = this.onBegin.bind(this);
        this.signaturePad.onEnd = this.onEnd.bind(this);
    }
    ngOnDestroy() {
        const canvas = this.elementRef.nativeElement.querySelector('canvas');
        canvas.width = 0;
        canvas.height = 0;
    }
    resizeCanvas() {
        // When zoomed out to less than 100%, for some very strange reason,
        // some browsers report devicePixelRatio as less than 1
        // and only part of the canvas is cleared then.
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        const canvas = this.signaturePad.canvas;
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext('2d').scale(ratio, ratio);
        this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }
    // Returns signature image as an array of point groups
    toData() {
        if (this.signaturePad) {
            return this.signaturePad.toData();
        }
        else {
            return [];
        }
    }
    // Draws signature image from an array of point groups
    fromData(points) {
        this.signaturePad.fromData(points);
    }
    // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible paramters)
    toDataURL(imageType, quality) {
        return this.signaturePad.toDataURL(imageType, quality); // save image as data URL
    }
    // Draws signature image from data URL
    fromDataURL(dataURL, options = {}) {
        // set default height and width on read data from URL
        if (!options.hasOwnProperty('height') &&
            this.options.canvasHeight) {
            options.height = this.options.canvasHeight;
        }
        if (!options.hasOwnProperty('width') && this.options.canvasWidth) {
            options.width = this.options.canvasWidth;
        }
        this.signaturePad.fromDataURL(dataURL, options);
    }
    // Clears the canvas
    clear() {
        this.signaturePad.clear();
    }
    // Returns true if canvas is empty, otherwise returns false
    isEmpty() {
        return this.signaturePad.isEmpty();
    }
    // Unbinds all event handlers
    off() {
        this.signaturePad.off();
    }
    // Rebinds all event handlers
    on() {
        this.signaturePad.on();
    }
    // set an option on the signaturePad - e.g. set('minWidth', 50);
    set(option, value) {
        switch (option) {
            case 'canvasHeight':
                this.signaturePad.canvas.height = value;
                break;
            case 'canvasWidth':
                this.signaturePad.canvas.width = value;
                break;
            default:
                this.signaturePad[option] = value;
        }
    }
    // notify subscribers on signature begin
    onBegin() {
        this.onBeginEvent.emit(true);
    }
    // notify subscribers on signature end
    onEnd() {
        this.onEndEvent.emit(true);
    }
    queryPad() {
        return this.signaturePad;
    }
}
SignaturePad.ɵfac = function SignaturePad_Factory(t) { return new (t || SignaturePad)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SignaturePad.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignaturePad, selectors: [["signature-pad"]], inputs: { options: "options" }, outputs: { onBeginEvent: "onBeginEvent", onEndEvent: "onEndEvent" }, decls: 1, vars: 0, template: function SignaturePad_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas");
    } }, encapsulation: 2 });
SignaturePad.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
SignaturePad.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onBeginEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onEndEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignaturePad, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: '<canvas></canvas>',
                selector: 'signature-pad'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onBeginEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onEndEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

class SignaturePadModule {
}
SignaturePadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignaturePadModule });
SignaturePadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignaturePadModule_Factory(t) { return new (t || SignaturePadModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignaturePadModule, { declarations: [SignaturePad], exports: [SignaturePad] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignaturePadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [SignaturePad],
                imports: [],
                exports: [SignaturePad]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular2-signaturepad
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angular2-signaturepad.js.map

/***/ }),

/***/ "V05N":
/*!*********************************************!*\
  !*** ./src/app/services/userlog.service.ts ***!
  \*********************************************/
/*! exports provided: UserlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlogService", function() { return UserlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class UserlogService {
    constructor(http) {
        this.http = http;
        this.UserLogData = {
            Id: '00000000-0000-0000-0000-000000000000',
            IP: '',
            UserId: '00000000-0000-0000-0000-000000000000',
            UserName: '',
            Module: '',
            ModuleId: '00000000-0000-0000-0000-000000000000',
            ActionType: '',
            Description: '',
            RecentDescription: '',
            LogDate: new Date(Date.parse(Date())),
            CreatedDate: new Date(Date.parse(Date())),
            ActivityTimeSpan: null
        };
        this.UserLogList = [];
        this.LogParam = {
            User: 'All',
            Module: 'All',
            Action: 'All',
            FromDate: new Date(Date.parse(Date())),
            ToDate: new Date(Date.parse(Date()))
        };
        this.TicketTimeSheetList = [];
    }
    // Get: userlog list Start now
    getUserLog(Token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Log/getUserLogs/' + Token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => { return response; }));
    }
    getTicketLogs(TicketId, Module, Token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Log/getTicketLogs/' + TicketId + '/' + Module + '/' + Token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => { return response; }));
    }
    // post user log
    postUserLog(UserId, UserName, Module, ModuleId, ActionType, Description, RecentDescription) {
        this.UserLogData.UserId = UserId;
        this.UserLogData.UserName = UserName;
        this.UserLogData.LogDate = new Date(Date.parse(Date()));
        this.UserLogData.CreatedDate = new Date(Date.parse(Date()));
        this.UserLogData.Module = Module;
        this.UserLogData.ModuleId = ModuleId;
        this.UserLogData.ActionType = ActionType;
        this.UserLogData.Description = Description;
        this.UserLogData.RecentDescription = RecentDescription;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Log/postUserLog', this.UserLogData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        }).pipe();
    }
    // Get: Recent activity
    getRecentActivities(Token) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Log/getRecentActivities/' + Token).toPromise().then(res => this.UserLogList = res);
    }
    // Get: time sheet
    getTicketTimeSheet(TicketId, Token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Log/GetTicketTimesheet/' + TicketId + '/' + Token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    // Get: Engineer time sheet
    GetEngineerTicketTimesheet(EngineerId, Token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Log/GetEngineerTicketTimesheet/' + EngineerId + '/' + Token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
}
UserlogService.ɵfac = function UserlogService_Factory(t) { return new (t || UserlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserlogService, factory: UserlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "cCNl":
/*!***********************************************************!*\
  !*** ./node_modules/signature_pad/dist/signature_pad.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */

function Point(x, y, time) {
  this.x = x;
  this.y = y;
  this.time = time || new Date().getTime();
}

Point.prototype.velocityFrom = function (start) {
  return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
};

Point.prototype.distanceTo = function (start) {
  return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
};

Point.prototype.equals = function (other) {
  return this.x === other.x && this.y === other.y && this.time === other.time;
};

function Bezier(startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;
}

// Returns approximated length.
Bezier.prototype.length = function () {
  var steps = 10;
  var length = 0;
  var px = void 0;
  var py = void 0;

  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
    var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (i > 0) {
      var xdiff = cx - px;
      var ydiff = cy - py;
      length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }
    px = cx;
    py = cy;
  }

  return length;
};

/* eslint-disable no-multi-spaces, space-in-parens */
Bezier.prototype._point = function (t, start, c1, c2, end) {
  return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
};

/* eslint-disable */

// http://stackoverflow.com/a/27078401/815507
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function later() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

function SignaturePad(canvas, options) {
  var self = this;
  var opts = options || {};

  this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
  this.minWidth = opts.minWidth || 0.5;
  this.maxWidth = opts.maxWidth || 2.5;
  this.throttle = 'throttle' in opts ? opts.throttle : 16; // in miliseconds
  this.minDistance = 'minDistance' in opts ? opts.minDistance : 5;

  if (this.throttle) {
    this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
  } else {
    this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
  }

  this.dotSize = opts.dotSize || function () {
    return (this.minWidth + this.maxWidth) / 2;
  };
  this.penColor = opts.penColor || 'black';
  this.backgroundColor = opts.backgroundColor || 'rgba(0,0,0,0)';
  this.onBegin = opts.onBegin;
  this.onEnd = opts.onEnd;

  this._canvas = canvas;
  this._ctx = canvas.getContext('2d');
  this.clear();

  // We need add these inline so they are available to unbind while still having
  // access to 'self' we could use _.bind but it's not worth adding a dependency.
  this._handleMouseDown = function (event) {
    if (event.which === 1) {
      self._mouseButtonDown = true;
      self._strokeBegin(event);
    }
  };

  this._handleMouseMove = function (event) {
    if (self._mouseButtonDown) {
      self._strokeMoveUpdate(event);
    }
  };

  this._handleMouseUp = function (event) {
    if (event.which === 1 && self._mouseButtonDown) {
      self._mouseButtonDown = false;
      self._strokeEnd(event);
    }
  };

  this._handleTouchStart = function (event) {
    if (event.targetTouches.length === 1) {
      var touch = event.changedTouches[0];
      self._strokeBegin(touch);
    }
  };

  this._handleTouchMove = function (event) {
    // Prevent scrolling.
    event.preventDefault();

    var touch = event.targetTouches[0];
    self._strokeMoveUpdate(touch);
  };

  this._handleTouchEnd = function (event) {
    var wasCanvasTouched = event.target === self._canvas;
    if (wasCanvasTouched) {
      event.preventDefault();
      self._strokeEnd(event);
    }
  };

  // Enable mouse and touch event handlers
  this.on();
}

// Public methods
SignaturePad.prototype.clear = function () {
  var ctx = this._ctx;
  var canvas = this._canvas;

  ctx.fillStyle = this.backgroundColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  this._data = [];
  this._reset();
  this._isEmpty = true;
};

SignaturePad.prototype.fromDataURL = function (dataUrl) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var image = new Image();
  var ratio = options.ratio || window.devicePixelRatio || 1;
  var width = options.width || this._canvas.width / ratio;
  var height = options.height || this._canvas.height / ratio;

  this._reset();
  image.src = dataUrl;
  image.onload = function () {
    _this._ctx.drawImage(image, 0, 0, width, height);
  };
  this._isEmpty = false;
};

SignaturePad.prototype.toDataURL = function (type) {
  var _canvas;

  switch (type) {
    case 'image/svg+xml':
      return this._toSVG();
    default:
      for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        options[_key - 1] = arguments[_key];
      }

      return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
  }
};

SignaturePad.prototype.on = function () {
  this._handleMouseEvents();
  this._handleTouchEvents();
};

SignaturePad.prototype.off = function () {
  this._canvas.removeEventListener('mousedown', this._handleMouseDown);
  this._canvas.removeEventListener('mousemove', this._handleMouseMove);
  document.removeEventListener('mouseup', this._handleMouseUp);

  this._canvas.removeEventListener('touchstart', this._handleTouchStart);
  this._canvas.removeEventListener('touchmove', this._handleTouchMove);
  this._canvas.removeEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype.isEmpty = function () {
  return this._isEmpty;
};

// Private methods
SignaturePad.prototype._strokeBegin = function (event) {
  this._data.push([]);
  this._reset();
  this._strokeUpdate(event);

  if (typeof this.onBegin === 'function') {
    this.onBegin(event);
  }
};

SignaturePad.prototype._strokeUpdate = function (event) {
  var x = event.clientX;
  var y = event.clientY;

  var point = this._createPoint(x, y);
  var lastPointGroup = this._data[this._data.length - 1];
  var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
  var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;

  // Skip this point if it's too close to the previous one
  if (!(lastPoint && isLastPointTooClose)) {
    var _addPoint = this._addPoint(point),
        curve = _addPoint.curve,
        widths = _addPoint.widths;

    if (curve && widths) {
      this._drawCurve(curve, widths.start, widths.end);
    }

    this._data[this._data.length - 1].push({
      x: point.x,
      y: point.y,
      time: point.time,
      color: this.penColor
    });
  }
};

SignaturePad.prototype._strokeEnd = function (event) {
  var canDrawCurve = this.points.length > 2;
  var point = this.points[0]; // Point instance

  if (!canDrawCurve && point) {
    this._drawDot(point);
  }

  if (point) {
    var lastPointGroup = this._data[this._data.length - 1];
    var lastPoint = lastPointGroup[lastPointGroup.length - 1]; // plain object

    // When drawing a dot, there's only one point in a group, so without this check
    // such group would end up with exactly the same 2 points.
    if (!point.equals(lastPoint)) {
      lastPointGroup.push({
        x: point.x,
        y: point.y,
        time: point.time,
        color: this.penColor
      });
    }
  }

  if (typeof this.onEnd === 'function') {
    this.onEnd(event);
  }
};

SignaturePad.prototype._handleMouseEvents = function () {
  this._mouseButtonDown = false;

  this._canvas.addEventListener('mousedown', this._handleMouseDown);
  this._canvas.addEventListener('mousemove', this._handleMouseMove);
  document.addEventListener('mouseup', this._handleMouseUp);
};

SignaturePad.prototype._handleTouchEvents = function () {
  // Pass touch events to canvas element on mobile IE11 and Edge.
  this._canvas.style.msTouchAction = 'none';
  this._canvas.style.touchAction = 'none';

  this._canvas.addEventListener('touchstart', this._handleTouchStart);
  this._canvas.addEventListener('touchmove', this._handleTouchMove);
  this._canvas.addEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype._reset = function () {
  this.points = [];
  this._lastVelocity = 0;
  this._lastWidth = (this.minWidth + this.maxWidth) / 2;
  this._ctx.fillStyle = this.penColor;
};

SignaturePad.prototype._createPoint = function (x, y, time) {
  var rect = this._canvas.getBoundingClientRect();

  return new Point(x - rect.left, y - rect.top, time || new Date().getTime());
};

SignaturePad.prototype._addPoint = function (point) {
  var points = this.points;
  var tmp = void 0;

  points.push(point);

  if (points.length > 2) {
    // To reduce the initial lag make it work with 3 points
    // by copying the first point to the beginning.
    if (points.length === 3) points.unshift(points[0]);

    tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
    var c2 = tmp.c2;
    tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
    var c3 = tmp.c1;
    var curve = new Bezier(points[1], c2, c3, points[2]);
    var widths = this._calculateCurveWidths(curve);

    // Remove the first element from the list,
    // so that we always have no more than 4 points in points array.
    points.shift();

    return { curve: curve, widths: widths };
  }

  return {};
};

SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
  var dx1 = s1.x - s2.x;
  var dy1 = s1.y - s2.y;
  var dx2 = s2.x - s3.x;
  var dy2 = s2.y - s3.y;

  var m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 };
  var m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 };

  var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

  var dxm = m1.x - m2.x;
  var dym = m1.y - m2.y;

  var k = l2 / (l1 + l2);
  var cm = { x: m2.x + dxm * k, y: m2.y + dym * k };

  var tx = s2.x - cm.x;
  var ty = s2.y - cm.y;

  return {
    c1: new Point(m1.x + tx, m1.y + ty),
    c2: new Point(m2.x + tx, m2.y + ty)
  };
};

SignaturePad.prototype._calculateCurveWidths = function (curve) {
  var startPoint = curve.startPoint;
  var endPoint = curve.endPoint;
  var widths = { start: null, end: null };

  var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;

  var newWidth = this._strokeWidth(velocity);

  widths.start = this._lastWidth;
  widths.end = newWidth;

  this._lastVelocity = velocity;
  this._lastWidth = newWidth;

  return widths;
};

SignaturePad.prototype._strokeWidth = function (velocity) {
  return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
};

SignaturePad.prototype._drawPoint = function (x, y, size) {
  var ctx = this._ctx;

  ctx.moveTo(x, y);
  ctx.arc(x, y, size, 0, 2 * Math.PI, false);
  this._isEmpty = false;
};

SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
  var ctx = this._ctx;
  var widthDelta = endWidth - startWidth;
  var drawSteps = Math.floor(curve.length());

  ctx.beginPath();

  for (var i = 0; i < drawSteps; i += 1) {
    // Calculate the Bezier (x, y) coordinate for this step.
    var t = i / drawSteps;
    var tt = t * t;
    var ttt = tt * t;
    var u = 1 - t;
    var uu = u * u;
    var uuu = uu * u;

    var x = uuu * curve.startPoint.x;
    x += 3 * uu * t * curve.control1.x;
    x += 3 * u * tt * curve.control2.x;
    x += ttt * curve.endPoint.x;

    var y = uuu * curve.startPoint.y;
    y += 3 * uu * t * curve.control1.y;
    y += 3 * u * tt * curve.control2.y;
    y += ttt * curve.endPoint.y;

    var width = startWidth + ttt * widthDelta;
    this._drawPoint(x, y, width);
  }

  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._drawDot = function (point) {
  var ctx = this._ctx;
  var width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;

  ctx.beginPath();
  this._drawPoint(point.x, point.y, width);
  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._fromData = function (pointGroups, drawCurve, drawDot) {
  for (var i = 0; i < pointGroups.length; i += 1) {
    var group = pointGroups[i];

    if (group.length > 1) {
      for (var j = 0; j < group.length; j += 1) {
        var rawPoint = group[j];
        var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);
        var color = rawPoint.color;

        if (j === 0) {
          // First point in a group. Nothing to draw yet.

          // All points in the group have the same color, so it's enough to set
          // penColor just at the beginning.
          this.penColor = color;
          this._reset();

          this._addPoint(point);
        } else if (j !== group.length - 1) {
          // Middle point in a group.
          var _addPoint2 = this._addPoint(point),
              curve = _addPoint2.curve,
              widths = _addPoint2.widths;

          if (curve && widths) {
            drawCurve(curve, widths, color);
          }
        } else {
          // Last point in a group. Do nothing.
        }
      }
    } else {
      this._reset();
      var _rawPoint = group[0];
      drawDot(_rawPoint);
    }
  }
};

SignaturePad.prototype._toSVG = function () {
  var _this2 = this;

  var pointGroups = this._data;
  var canvas = this._canvas;
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  var minX = 0;
  var minY = 0;
  var maxX = canvas.width / ratio;
  var maxY = canvas.height / ratio;
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttributeNS(null, 'width', canvas.width);
  svg.setAttributeNS(null, 'height', canvas.height);

  this._fromData(pointGroups, function (curve, widths, color) {
    var path = document.createElement('path');

    // Need to check curve for NaN values, these pop up when drawing
    // lines on the canvas that are not continuous. E.g. Sharp corners
    // or stopping mid-stroke and than continuing without lifting mouse.
    if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
      var attr = 'M ' + curve.startPoint.x.toFixed(3) + ',' + curve.startPoint.y.toFixed(3) + ' ' + ('C ' + curve.control1.x.toFixed(3) + ',' + curve.control1.y.toFixed(3) + ' ') + (curve.control2.x.toFixed(3) + ',' + curve.control2.y.toFixed(3) + ' ') + (curve.endPoint.x.toFixed(3) + ',' + curve.endPoint.y.toFixed(3));

      path.setAttribute('d', attr);
      path.setAttribute('stroke-width', (widths.end * 2.25).toFixed(3));
      path.setAttribute('stroke', color);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');

      svg.appendChild(path);
    }
  }, function (rawPoint) {
    var circle = document.createElement('circle');
    var dotSize = typeof _this2.dotSize === 'function' ? _this2.dotSize() : _this2.dotSize;
    circle.setAttribute('r', dotSize);
    circle.setAttribute('cx', rawPoint.x);
    circle.setAttribute('cy', rawPoint.y);
    circle.setAttribute('fill', rawPoint.color);

    svg.appendChild(circle);
  });

  var prefix = 'data:image/svg+xml;base64,';
  var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + ' ' + minY + ' ' + maxX + ' ' + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + '>';
  var body = svg.innerHTML;

  // IE hack for missing innerHTML property on SVGElement
  if (body === undefined) {
    var dummy = document.createElement('dummy');
    var nodes = svg.childNodes;
    dummy.innerHTML = '';

    for (var i = 0; i < nodes.length; i += 1) {
      dummy.appendChild(nodes[i].cloneNode(true));
    }

    body = dummy.innerHTML;
  }

  var footer = '</svg>';
  var data = header + body + footer;

  return prefix + btoa(data);
};

SignaturePad.prototype.fromData = function (pointGroups) {
  var _this3 = this;

  this.clear();

  this._fromData(pointGroups, function (curve, widths) {
    return _this3._drawCurve(curve, widths.start, widths.end);
  }, function (rawPoint) {
    return _this3._drawDot(rawPoint);
  });

  this._data = pointGroups;
};

SignaturePad.prototype.toData = function () {
  return this._data;
};

/* harmony default export */ __webpack_exports__["default"] = (SignaturePad);


/***/ }),

/***/ "uOqW":
/*!*******************************************!*\
  !*** ./src/app/services/quote.service.ts ***!
  \*******************************************/
/*! exports provided: QuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return QuoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class QuoteService {
    constructor(http) {
        this.http = http;
        this.SetAsDefaultValue();
    }
    SetAsDefaultValue() {
        this.QuoteList = [];
        this.QuoteItemList = [];
        this.QuoteAttachmentList = [];
        this.PropertyList = [];
        this.QuoteData = {
            Id: '00000000-0000-0000-0000-000000000000',
            QuoteId: '',
            JobTitle: '',
            QuoteUniqueID: 0,
            CustomerId: '00000000-0000-0000-0000-000000000000',
            CustomerName: 'Customer Name?',
            CompanyName: 'COMPANY NAME?',
            PropertyId: '00000000-0000-0000-0000-000000000000',
            CustomerContactNo: '',
            CustomerEmail: '',
            CustomerAddress: '',
            ClientRemark: '',
            SubTotal: 0,
            DiscountType: 0,
            DiscountTextValue: 0,
            DiscountAmount: 0,
            TaxId: 0,
            TaxRate: 0,
            TaxAmount: 0,
            ReqDepositeType: 0,
            ReqDepositeTextValue: 0,
            ReqDepositeAmount: 0,
            NetAmount: 0,
            InternalNotes: 'Should there be further clarifications required, please do not hesitate to contact the undersigned' +
                'We will gladly do our best to help you.' +
                'Yours faithfully',
            ClientViewQty: true,
            ClientViewUnitCost: true,
            ClientViewLineItemTotal: true,
            ClientViewTotal: true,
            LinkToJob: true,
            LinkToInvoice: true,
            Status: 1,
            InvoiceId: '00000000-0000-0000-0000-000000000000',
            InvoiceNo: '',
            TicketId: '00000000-0000-0000-0000-000000000000',
            TicketNo: '',
            Rating: 0,
            CreatedUtcDate: new Date(Date.parse(Date())),
            ModifiedUtcDate: new Date(Date.parse(Date())),
            IsReady: false,
            SalesRepresentative: '',
            PreparedBy: '',
            DID: '',
            FAX: '',
            CCName: '',
            CCContact: '',
            CreatedBy: null,
            QuoteTermsAndCondition: '',
            Attention: '',
            SalesPersonSignature: '',
            CustomerSignature: '',
            CustomerSignatureRemark: '',
            QuoteItemList: [],
            QuoteAttachmentList: [],
            TaxList: [],
            SMTPId: 0
        };
        this.QuoteItemData = {
            Id: 0,
            Type: 'Product',
            QuoteId: '00000000-0000-0000-0000-000000000000',
            ItemName: '',
            Qty: null,
            UnitCost: null,
            Total: null,
            ItemDescription: '',
            UniqId: '',
            InWarranty: true,
            WarrantyDays: 365,
            CreatedUtcDate: new Date(Date.parse(Date())),
            ModifiedUtcDate: new Date(Date.parse(Date())),
        };
        this.TextData = {
            Id: 0,
            TaxName: '',
            TaxRate: 0,
            Status: true,
            Description: '',
            IsDefault: false
        };
        this.QuoteAttachmentData = {
            Id: 0,
            QuoteId: '',
            AttachmentExtension: '',
            Attachment: '',
            AttachmentSize: 0,
            CreatedUtcDate: new Date(),
            ModifiedUtcDate: new Date()
        };
        this.TextList = [];
    }
    setDetaultQuoteData() {
        this.QuoteData = {
            Id: '00000000-0000-0000-0000-000000000000',
            QuoteId: '',
            JobTitle: '',
            QuoteUniqueID: 0,
            CustomerId: '00000000-0000-0000-0000-000000000000',
            CustomerName: 'Customer Name?',
            CompanyName: '',
            PropertyId: '00000000-0000-0000-0000-000000000000',
            CustomerContactNo: '',
            CustomerEmail: '',
            ClientRemark: '',
            SubTotal: 0,
            DiscountType: 0,
            DiscountTextValue: 0,
            DiscountAmount: 0,
            TaxId: 0,
            TaxRate: 0,
            TaxAmount: 0,
            ReqDepositeType: 0,
            ReqDepositeTextValue: 0,
            ReqDepositeAmount: 0,
            NetAmount: 0,
            InternalNotes: '',
            ClientViewQty: true,
            ClientViewUnitCost: true,
            ClientViewLineItemTotal: true,
            ClientViewTotal: true,
            LinkToJob: true,
            LinkToInvoice: true,
            Status: 1,
            InvoiceId: '00000000-0000-0000-0000-000000000000',
            InvoiceNo: '',
            TicketId: '00000000-0000-0000-0000-000000000000',
            TicketNo: '',
            Rating: 0,
            CreatedUtcDate: new Date(Date.parse(Date())),
            ModifiedUtcDate: new Date(Date.parse(Date())),
            IsReady: false,
            Attention: '',
            AttachmentPDF: '',
            CreatedBy: null,
            QuoteItemList: [],
            QuoteAttachmentList: [],
        };
    }
    getTaxList(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/GetTaxes/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => { return response; }));
    }
    // Get: List of Quotes
    getQuotes(token) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/GetQuotes/' + token).toPromise().then(res => this.QuoteList = this.QuoteLocalList = res);
    }
    getrefrestQuoteListSync(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/GetQuotes/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => { return response; }));
    }
    refrestQuoteListByCustomer(id) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Customers/GetQuotesByCustomer/' + id).toPromise().then(res => this.QuoteList = this.QuoteLocalList = res);
    }
    // Get: List of Quote Items
    getQuoteItems(token, id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/GetQuoteItems/' + token + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response));
    }
    // Get: List of Quote Items
    getQuoteAttachments(id) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/getQuoteAttachments/' + id).toPromise()
            .then(res => this.QuoteAttachmentList = res);
    }
    // Get: Customer property
    getCustomerProperty(id) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/getCustomerProperty/' + id).toPromise().then(res => this.PropertyList = res);
    }
    postTempQuote(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/postQuote/' + token, this.QuoteData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response));
    }
    deleteTemporaryQuote(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).toPromise();
    }
    putQuote(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/putQuote/' + token, this.QuoteData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response));
    }
    // Insert ticket item list to invoice item list
    copyQuotation(tempQuoteId, fromQuoteId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/copyQuotation/' + tempQuoteId + '/' + fromQuoteId, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).toPromise();
    }
    putQuoteItemDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/putQuoteItem/' + token, this.QuoteItemData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response));
    }
    // remove quote items
    deleteQuoteItem(token, id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/deleteQuoteItem/' + token + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response));
    }
    // post quotation attachment
    postQuoteItemDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/postQuoteItem/' + token, this.QuoteItemData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response));
    }
    UpdateQuoteStatus(Id, Status, token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/UpdateQuoteStatus/' + Id + '/' + Status + '/' + token, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response));
    }
    // Insert Quote item list to Ticket item list
    posQuoteItemToTicketItem(token, QuoteId, TicketId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/posQuoteItemToTicketItem/' + token + '/' + QuoteId + '/' + TicketId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => { return Response; }));
    }
    emailQuoteCopy(Id, emailText) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/emailQuoteCopy/' + Id + '/' + emailText, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => { return Response; }));
    }
    sendForClientSign(Id, emailText) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/SentQuoteLinkForSignature/' + Id + '/' + emailText, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => { return Response; }));
    }
    // validate quote no on change
    ValidateQuoteNo(QuoteUniqueID) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/ValidateQuoteNo/' + QuoteUniqueID, null, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).pipe();
    }
    refrestArrayofKeyslist(id) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/GetArrayofKey/' + id).toPromise().then(res => this.ArrayofKeys = res);
    }
    downoadQuotationPDF(QuoteId, token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/getQuotaionPDF/' + QuoteId + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => Response));
    }
    getQuoteDetails(Id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/GetQuote/' + Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => { return Response; }));
    }
    getQuoteDetailsForSign(Id, token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/GetQuoteForSign/' + Id + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => { return Response; }));
    }
    updateQuoteSignature(Token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/putQuoteSignature/' + Token, this.QuoteData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => { return Response; }));
    }
    updateQuoteSignaturewithRemark(Token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Quotes/putQuoteSignatureWithRemarks/' + Token, this.QuoteData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => { return Response; }));
    }
}
QuoteService.ɵfac = function QuoteService_Factory(t) { return new (t || QuoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuoteService, factory: QuoteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~application-application-module~auth-auth-module-es2015.js.map