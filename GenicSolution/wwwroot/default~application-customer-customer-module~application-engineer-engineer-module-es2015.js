(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-customer-customer-module~application-engineer-engineer-module"],{

/***/ "0AbP":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class DashboardService {
    constructor(http) {
        this.http = http;
        this.SetAsDefaultValues();
    }
    SetAsDefaultValues() {
        this.DashBoardCustomer = { CustomerCount: 0, CustomerPer: 0, CustomerAll: 0, CustomerActive: 0, CustomerTotalAmount: 0, CustomerStatus: 'success' };
        this.DashBoardTicket = { TicketCount: 0, TicketPer: 0, TicketAll: 0, TicketRecurring: 0, TicketTotalAmount: 0, TicketStatus: '' };
        this.DashboardTotal = { TotalTicketOpen: 0, TotalTicketTodayNew: 0, TotalTicketClosedToday: 0, TotalTicketOverDue: 0, TotalEngneer: 0, };
        this.DashboardAverage = { AvegareCount: 0, AvegarePer: 0, AvegarePerTicket: 0, AverageStatus: '' };
        this.DashboardTicketDue = { TicketDueTimeToday: 0, TicketDueTimeTomarrow: 0, TicketDueTimeThisWeek: 0, TicketDueTimeNextWeek: 0, TicketDueTimeNextMonth: 0 };
        this.DashboardTicketChart = { TicketChartTodayHeigh: 0, TicketChartTodayMedium: 0, TicketChartTodayLow: 0, TicketChartTomarrowHeigh: 0, TicketChartTomarrowMedium: 0, TicketChartTomarrowLow: 0, TicketChartThisWeekHeigh: 0, TicketChartThisWeekMedium: 0, TicketChartThisWeekLow: 0 };
        this.DashboardTicketPieChart = { Count: 0, TicketIssueTypeId: 0, Name: '' };
        this.EDTicket = { TotalTicket: 0, TotalOpenTicket: 0, TotalNewTicketToday: 0, TotalTicketClosedToday: 0, TotalTicketOverDue: 0, TotalUpcoming: 0 };
        this.EDTicketDue = { TicketOverDue: 0, TicketDueTimeToday: 0, TicketDueTimeTomarrow: 0, TicketDueTimeThisWeek: 0, TicketDueTimeNextWeek: 0, TicketDueTimeNextMonth: 0 };
        this.EDTicketChart = { TicketChartTodayHeigh: 0, TicketChartTodayMedium: 0, TicketChartTodayLow: 0, TicketChartTomarrowHeigh: 0, TicketChartTomarrowMedium: 0, TicketChartTomarrowLow: 0, TicketChartThisWeekHeigh: 0, TicketChartThisWeekMedium: 0, TicketChartThisWeekLow: 0 };
        this.CDTicket = { TotalTicket: 0, TotalOpenTicket: 0, TotalNewTicketToday: 0, TotalTicketClosedToday: 0, TotalTicketOverDue: 0, TotalUpcoming: 0 };
        this.CDTicketDue = { TicketOverDue: 0, TicketDueTimeToday: 0, TicketDueTimeTomarrow: 0, TicketDueTimeThisWeek: 0, TicketDueTimeNextWeek: 0, TicketDueTimeNextMonth: 0 };
        this.CDTicketChart = { TicketChartTodayHeigh: 0, TicketChartTodayMedium: 0, TicketChartTodayLow: 0, TicketChartTomarrowHeigh: 0, TicketChartTomarrowMedium: 0, TicketChartTomarrowLow: 0, TicketChartThisWeekHeigh: 0, TicketChartThisWeekMedium: 0, TicketChartThisWeekLow: 0 };
    }
    //#region Admin Dashboard methods (api) Begin
    refrestDashboardCustomer(token, key) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/Customer/' + token + '/' + key).toPromise().then(res => this.DashBoardCustomer = res);
    }
    refrestDashboardTicket(token, key) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/Ticket/' + token + '/' + key).toPromise().then(res => this.DashBoardTicket = res);
    }
    refrestDashboardTotal(token) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/Total/' + token).toPromise().then(res => this.DashboardTotal = res);
    }
    refrestDashboardAvegareRevenue(token, key) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/AvegareRevenue/' + token + '/' + key).toPromise().then(res => this.DashboardAverage = res);
    }
    refrestDashboardTicketDue(token) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/TicketDue/' + token).toPromise().then(res => this.DashboardTicketDue = res);
    }
    refrestDashboardTicketColumnChart(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/TicketColumnChart/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestDashboardTicketPieChartList(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/TicketPieChart/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    //#endregion Admin Dashboard methods (api) Begin
    //#region Engineer Dashboard methods (api) Begin
    refrestEDTotal(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/EDTotal/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestEDTicketDue(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/EDTicketDue/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestEDTicketColumnChart(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/EDTicketColumnChart/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestEDTicketPieChartList(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/EDTicketPieChart/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    //#endregion Engineer Dashboard methods (api) Begin
    //#region Customer Dashboard methods (api) Begin
    refrestCDTotal(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/CDTotal/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestCDTicketDue(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/CDTicketDue/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestCDTicketColumnChart(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/CDTicketColumnChart/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestCDTicketPieChartList(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/CDTicketPieChart/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    //#endregion Engineer Dashboard methods (api) Begin
    //#region 
    getTicketheaderCount(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/DashBoard/GetTicketHeaderCount/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "GkDo":
/*!*******************************************************************************!*\
  !*** ./src/app/generic-utils/Ticket-Header-Count/TicketHeaderCount.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TicketHeaderCountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketHeaderCountModule", function() { return TicketHeaderCountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TicketHeaderCount.component */ "wjE4");





class TicketHeaderCountModule {
}
TicketHeaderCountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TicketHeaderCountModule });
TicketHeaderCountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TicketHeaderCountModule_Factory(t) { return new (t || TicketHeaderCountModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketHeaderCountModule, { declarations: [_TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_3__["TicketHeaderCountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_3__["TicketHeaderCountComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketHeaderCountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [_TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_3__["TicketHeaderCountComponent"]],
                exports: [_TicketHeaderCount_component__WEBPACK_IMPORTED_MODULE_3__["TicketHeaderCountComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QejX":
/*!**************************************!*\
  !*** ./src/app/demo-utils/module.ts ***!
  \**************************************/
/*! exports provided: DemoUtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUtilsModule", function() { return DemoUtilsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var _calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-header.component */ "Ynfx");






class DemoUtilsModule {
}
DemoUtilsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoUtilsModule });
DemoUtilsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoUtilsModule_Factory(t) { return new (t || DemoUtilsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoUtilsModule, { declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]], exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoUtilsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]],
                declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]],
                exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "X9o6":
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js ***!
  \*************************************************************************************/
/*! exports provided: DOC_ORIENTATION, NgxImageCompressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOC_ORIENTATION", function() { return DOC_ORIENTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxImageCompressService", function() { return NgxImageCompressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */

const DOC_ORIENTATION = {
    Up: 1,
    Down: 3,
    Right: 6,
    Left: 8,
    UpMirrored: 2,
    DownMirrored: 4,
    LeftMirrored: 5,
    RightMirrored: 7,
    NotJpeg: -1,
    NotDefined: -2,
};
DOC_ORIENTATION[DOC_ORIENTATION.Up] = 'Up';
DOC_ORIENTATION[DOC_ORIENTATION.Down] = 'Down';
DOC_ORIENTATION[DOC_ORIENTATION.Right] = 'Right';
DOC_ORIENTATION[DOC_ORIENTATION.Left] = 'Left';
DOC_ORIENTATION[DOC_ORIENTATION.UpMirrored] = 'UpMirrored';
DOC_ORIENTATION[DOC_ORIENTATION.DownMirrored] = 'DownMirrored';
DOC_ORIENTATION[DOC_ORIENTATION.LeftMirrored] = 'LeftMirrored';
DOC_ORIENTATION[DOC_ORIENTATION.RightMirrored] = 'RightMirrored';
DOC_ORIENTATION[DOC_ORIENTATION.NotJpeg] = 'NotJpeg';
DOC_ORIENTATION[DOC_ORIENTATION.NotDefined] = 'NotDefined';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageCompress {
    /**
     * Get the correct Orientation value from tags, in order to write correctly in our canvas
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    static getOrientation(file, callback) {
        /** @type {?} */
        const reader = new FileReader();
        try {
            reader.onload = (/**
             * @param {?} $event
             * @return {?}
             */
            function ($event) {
                /** @type {?} */
                const view = new DataView((/** @type {?} */ (reader.result)));
                if (view.getUint16(0, false) !== 0xFFD8) {
                    return callback(-2);
                }
                /** @type {?} */
                const length = view.byteLength;
                /** @type {?} */
                let offset = 2;
                while (offset < length) {
                    /** @type {?} */
                    const marker = view.getUint16(offset, false);
                    offset += 2;
                    if (marker === 0xFFE1) {
                        if (view.getUint32(offset += 2, false) !== 0x45786966) {
                            return callback(-1);
                        }
                        /** @type {?} */
                        const little = view.getUint16(offset += 6, false) === 0x4949;
                        offset += view.getUint32(offset + 4, little);
                        /** @type {?} */
                        const tags = view.getUint16(offset, little);
                        offset += 2;
                        for (let i = 0; i < tags; i++) {
                            if (view.getUint16(offset + (i * 12), little) === 0x0112) {
                                return callback(view.getUint16(offset + (i * 12) + 8, little));
                            }
                        }
                    }
                    else if ((marker & 0xFF00) !== 0xFF00) {
                        break;
                    }
                    else {
                        offset += view.getUint16(offset, false);
                    }
                }
                return callback(-1);
            });
            reader.readAsArrayBuffer(file);
        }
        catch (e) {
            return callback(0);
        }
    }
    /**
     * return a promise with the new image data and image orientation
     * @param {?} render
     * @return {?}
     */
    static uploadFile(render) {
        /** @type {?} */
        const promise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            const inputElement = render.createElement('input');
            render.setStyle(inputElement, 'display', 'none');
            render.setProperty(inputElement, 'type', 'file');
            render.setProperty(inputElement, 'accept', 'image/*');
            render.listen(inputElement, 'click', (/**
             * @param {?} $event
             * @return {?}
             */
            ($event) => {
                //console.log('MouseEvent:', $event);
                //console.log('Input:', $event.target);
                $event.target.value = null;
            }));
            render.listen(inputElement, 'change', (/**
             * @param {?} $event
             * @return {?}
             */
            ($event) => {
                /** @type {?} */
                const file = $event.target.files[0];
                /** @type {?} */
                const myReader = new FileReader();
                myReader.onloadend = (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    try {
                        ImageCompress.getOrientation(file, (/**
                         * @param {?} orientation
                         * @return {?}
                         */
                        orientation => {
                            resolve({ image: (/** @type {?} */ (myReader.result)), orientation });
                        }));
                    }
                    catch (e) {
                        //console.log(`ngx-image-compress error ${e}`);
                        reject(e);
                    }
                });
                try {
                    myReader.readAsDataURL(file);
                }
                catch (e) {
                    console.warn(`ngx-image-compress - probably no file have been selected: ${e}`);
                    reject("No file selected");
                }
            }));
            inputElement.click();
        }));
        return promise;
    }
    /**
     * @param {?} imageDataUrlSource
     * @param {?} orientation
     * @param {?} render
     * @param {?=} ratio
     * @param {?=} quality
     * @return {?}
     */
    static compress(imageDataUrlSource, orientation, render, ratio = 50, quality = 50) {
        /** @type {?} */
        const promise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            quality = quality / 100;
            ratio = ratio / 100;
            /** @type {?} */
            const sourceImage = new Image();
            // important for safari: we need to wait for onload event
            sourceImage.onload = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                const canvas = render.createElement('canvas');
                /** @type {?} */
                const ctx = canvas.getContext('2d');
                /** @type {?} */
                let w;
                /** @type {?} */
                let h;
                w = sourceImage.naturalWidth;
                h = sourceImage.naturalHeight;
                if (orientation === DOC_ORIENTATION.Right || orientation === DOC_ORIENTATION.Left) {
                    /** @type {?} */
                    const t = w;
                    w = h;
                    h = t;
                }
                canvas.width = w * ratio;
                canvas.height = h * ratio;
                /** @type {?} */
                const TO_RADIANS = Math.PI / 180;
                if (orientation === DOC_ORIENTATION.Up) {
                    ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
                }
                else if (orientation === DOC_ORIENTATION.Right) {
                    ctx.save();
                    ctx.rotate(90 * TO_RADIANS);
                    ctx.translate(0, -canvas.width);
                    ctx.drawImage(sourceImage, 0, 0, canvas.height, canvas.width);
                    ctx.restore();
                }
                else if (orientation === DOC_ORIENTATION.Left) {
                    ctx.save();
                    ctx.rotate(-90 * TO_RADIANS);
                    ctx.translate(-canvas.width, 0);
                    ctx.drawImage(sourceImage, 0, 0, canvas.height, canvas.width);
                    ctx.restore();
                }
                else if (orientation === DOC_ORIENTATION.Down) {
                    ctx.save();
                    ctx.rotate(180 * TO_RADIANS);
                    ctx.translate(-canvas.width, -canvas.height);
                    ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
                    ctx.restore();
                }
                else {
                    //console.warn('ngx-image-compress - no orientation value found');
                    // same as default UP
                    ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
                }
                /** @type {?} */
                const mime = imageDataUrlSource.substr(5, imageDataUrlSource.split(';')[0].length - 5);
                // TODO test on mime
                /** @type {?} */
                const result = canvas.toDataURL(mime, quality);
                resolve(result);
            });
            sourceImage.src = imageDataUrlSource;
        }));
        return promise;
    }
    /**
     * helper to evaluate the compression rate
     * @param {?} s the image in base64 string format
     * @return {?}
     */
    static byteCount(s) {
        return encodeURI(s).split(/%..|./).length - 1;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxImageCompressService {
    /**
     * @param {?} rendererFactory
     */
    constructor(rendererFactory) {
        this.DOC_ORIENTATION = DOC_ORIENTATION;
        this.render = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} image
     * @return {?}
     */
    byteCount(image) {
        return ImageCompress.byteCount(image);
    }
    /**
     * @return {?}
     */
    uploadFile() {
        return ImageCompress.uploadFile(this.render);
    }
    /**
     * @param {?} image
     * @param {?} orientation
     * @param {?=} ratio
     * @param {?=} quality
     * @return {?}
     */
    compressFile(image, orientation, ratio = 50, quality = 50) {
        return ImageCompress.compress(image, orientation, this.render, ratio, quality);
    }
}
NgxImageCompressService.ɵfac = function NgxImageCompressService_Factory(t) { return new (t || NgxImageCompressService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); };
NgxImageCompressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxImageCompressService, factory: NgxImageCompressService.ɵfac });
/** @nocollapse */
NgxImageCompressService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxImageCompressService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-image-compress.js.map

/***/ }),

/***/ "Ynfx":
/*!*********************************************************!*\
  !*** ./src/app/demo-utils/calendar-header.component.ts ***!
  \*********************************************************/
/*! exports provided: CalendarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarHeaderComponent", function() { return CalendarHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ "kRoH");



class CalendarHeaderComponent {
    constructor() {
        this.locale = 'en';
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) { return new (t || CalendarHeaderComponent)(); };
CalendarHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarHeaderComponent, selectors: [["mwl-demo-utils-calendar-header"]], inputs: { view: "view", viewDate: "viewDate", locale: "locale" }, outputs: { viewChange: "viewChange", viewDateChange: "viewDateChange" }, decls: 22, vars: 16, consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"]], template: function CalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_3_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_3_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_5_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_5_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_15_listener() { return ctx.viewChange.emit("month"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_17_listener() { return ctx.viewChange.emit("week"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_19_listener() { return ctx.viewChange.emit("day"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 12, ctx.viewDate, ctx.view + "ViewTitle", ctx.locale));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "day");
    } }, directives: [angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵg"]], pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵi"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mwl-demo-utils-calendar-header',
                template: `
    <div class="row text-center">
      <div class="col-md-4">
        <div class="btn-group">
          <div
            class="btn btn-primary"
            mwlCalendarPreviousView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Previous
          </div>
          <div
            class="btn btn-outline-secondary"
            mwlCalendarToday
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Today
          </div>
          <div
            class="btn btn-primary"
            mwlCalendarNextView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Next
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>
      </div>
      <div class="col-md-4">
        <div class="btn-group">
          <div
            class="btn btn-primary"
            (click)="viewChange.emit('month')"
            [class.active]="view === 'month'"
          >
            Month
          </div>
          <div
            class="btn btn-primary"
            (click)="viewChange.emit('week')"
            [class.active]="view === 'week'"
          >
            Week
          </div>
          <div
            class="btn btn-primary"
            (click)="viewChange.emit('day')"
            [class.active]="view === 'day'"
          >
            Day
          </div>
        </div>
      </div>
    </div>
    <br />
  `
            }]
    }], null, { view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], viewDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "wjE4":
/*!**********************************************************************************!*\
  !*** ./src/app/generic-utils/Ticket-Header-Count/TicketHeaderCount.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TicketHeaderCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketHeaderCountComponent", function() { return TicketHeaderCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dashboard.service */ "0AbP");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "o0su");




class TicketHeaderCountComponent {
    constructor(service, loginservice) {
        this.service = service;
        this.loginservice = loginservice;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.Open = 0;
        this.Closed = 0;
        this.OverDue = 0;
    }
    ngOnInit() {
        this.service.getTicketheaderCount(this.Token).subscribe(res => {
            const response = res;
            this.Open = Number(response.OpenTicket);
            this.Closed = Number(response.ClosedTicket);
            this.OverDue = Number(response.OverDueTicket);
        }, error => console.log(error));
    }
}
TicketHeaderCountComponent.ɵfac = function TicketHeaderCountComponent_Factory(t) { return new (t || TicketHeaderCountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
TicketHeaderCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketHeaderCountComponent, selectors: [["generic-ticket-header-count"]], inputs: { Token: "Token" }, decls: 46, vars: 6, consts: [[1, "row", "mrg-top-10"], [1, "col-lg-4"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--brand", "kt-iconbox--animate-slower"], [1, "kt-portlet__body"], [1, "kt-iconbox__body"], [1, "kt-iconbox__icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z", "id", "Combined-Shape-Copy", "fill", "#000000", "opacity", "0.3", "transform", "translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) "], [1, "kt-iconbox__desc"], [1, "kt-iconbox__title"], ["href", "javascript:;", 1, "kt-link"], [1, "kt-iconbox__content"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--success", "kt-iconbox--animate-slow"], [1, "kt-portlet", "kt-iconbox", "kt-iconbox--warning", "kt-iconbox--animate-fast"]], template: function TicketHeaderCountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Open ", ctx.currentUser.Ticket, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Open, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Closed ", ctx.currentUser.Ticket, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Closed, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Overdue ", ctx.currentUser.Ticket, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.OverDue, " ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketHeaderCountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'generic-ticket-header-count',
                template: `
          <div class="row mrg-top-10">
          <div class="col-lg-4">
            <div class="kt-portlet kt-iconbox kt-iconbox--brand kt-iconbox--animate-slower">
              <div class="kt-portlet__body">
                <div class="kt-iconbox__body">
                  <div class="kt-iconbox__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <path d="M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z" id="Combined-Shape-Copy" fill="#000000" opacity="0.3" transform="translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) " />
                      </g>
                    </svg>
                  </div>
                  <div class="kt-iconbox__desc">
                    <h3 class="kt-iconbox__title">
                      <a class="kt-link" href="javascript:;">Open {{this.currentUser.Ticket}}s</a>
                    </h3>
                    <div class="kt-iconbox__content">
                      {{Open}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="kt-portlet kt-iconbox kt-iconbox--success kt-iconbox--animate-slow">
              <div class="kt-portlet__body">
                <div class="kt-iconbox__body">
                  <div class="kt-iconbox__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <path d="M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z" id="Combined-Shape-Copy" fill="#000000" opacity="0.3" transform="translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) " />
                      </g>
                    </svg>
                  </div>
                  <div class="kt-iconbox__desc">
                    <h3 class="kt-iconbox__title">
                      <a class="kt-link" href="javascript:;">Closed {{this.currentUser.Ticket}}s</a>
                    </h3>
                    <div class="kt-iconbox__content">
                      {{Closed}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="kt-portlet kt-iconbox kt-iconbox--warning kt-iconbox--animate-fast">
              <div class="kt-portlet__body">
                <div class="kt-iconbox__body">
                  <div class="kt-iconbox__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <path d="M3,10.0500091 L3,8 C3,7.44771525 3.44771525,7 4,7 L9,7 L9,9 C9,9.55228475 9.44771525,10 10,10 C10.5522847,10 11,9.55228475 11,9 L11,7 L21,7 C21.5522847,7 22,7.44771525 22,8 L22,10.0500091 C20.8588798,10.2816442 20,11.290521 20,12.5 C20,13.709479 20.8588798,14.7183558 22,14.9499909 L22,17 C22,17.5522847 21.5522847,18 21,18 L11,18 L11,16 C11,15.4477153 10.5522847,15 10,15 C9.44771525,15 9,15.4477153 9,16 L9,18 L4,18 C3.44771525,18 3,17.5522847 3,17 L3,14.9499909 C4.14112016,14.7183558 5,13.709479 5,12.5 C5,11.290521 4.14112016,10.2816442 3,10.0500091 Z M10,11 C9.44771525,11 9,11.4477153 9,12 L9,13 C9,13.5522847 9.44771525,14 10,14 C10.5522847,14 11,13.5522847 11,13 L11,12 C11,11.4477153 10.5522847,11 10,11 Z" id="Combined-Shape-Copy" fill="#000000" opacity="0.3" transform="translate(12.500000, 12.500000) rotate(-45.000000) translate(-12.500000, -12.500000) " />
                      </g>
                    </svg>
                  </div>
                  <div class="kt-iconbox__desc">
                    <h3 class="kt-iconbox__title">
                      <a class="kt-link" href="javascript:;">Overdue {{this.currentUser.Ticket}}s</a>
                    </h3>
                    <div class="kt-iconbox__content">
                      {{OverDue}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
  `
            }]
    }], function () { return [{ type: src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"] }, { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, { Token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~application-customer-customer-module~application-engineer-engineer-module-es2015.js.map