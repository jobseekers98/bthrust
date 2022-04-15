(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-calendar-calendar-module~application-closer-update-popup-closer-update-popup-mod~2871a86b"],{

/***/ "OC8m":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class NotificationService {
    constructor(http) {
        this.http = http;
        this.SetNotificationDefault();
        this.SetNotificationTemplateDefault();
        this.NotificationTemplateList = [];
    }
    SetNotificationDefault() {
        this.NotificationData = {
            Id: '00000000-0000-0000-0000-000000000000',
            CreateTicketCustomer: false,
            CreateTicketEngineer: false,
            CreateTicketAdmin: false,
            AllocateTicketCustomer: false,
            AllocateTicketEngineer: false,
            AllocateTicketAdmin: false,
            ReAllocateTicketCustomer: false,
            ReAllocateTicketEngineer: false,
            ReAllocateTicketAdmin: false,
            RescheduleTicketCustomer: false,
            RescheduleTicketEngineer: false,
            RescheduleTicketAdmin: false,
            CompletionTicketCustomer: false,
            CompletionTicketAdmin: false,
            HoldTicketCustomer: false,
            HoldTicketAdmin: false,
            WorkOrderCustomer: false,
            WorkOrderAdmin: false,
            QuoteCustomer: false,
            QuoteAdmin: false,
            StartEndTicketCustomer: false,
            StartEndTicketAdmin: false,
            ReminRecurTicketCustomer: false,
            ReminRecurTicketEngineer: false,
            ReminRecurTicketAdmin: false,
            DailyNosOfTicketEngineer: false,
            CancelTicketCustomer: false,
            CancelTicketEngineer: false,
            CancelTicketAdmin: false,
            OnServiceDayCustomer: false,
            OnServiceDayEngineer: false,
            OnServiceDayAdmin: false,
            OnTheDayCustomer: false,
            OnTheDayTicketAdmin: false
        };
    }
    SetNotificationTemplateDefault() {
        this.NotificationTemplateData = {
            Id: '00000000-0000-0000-0000-000000000000',
            TemplateName: '',
            ModuleName: '',
            CustomerMailBody: '',
            MobileNotification: '',
            IsRead: false,
            EngineerMailBody: '',
            AdminMailBody: '',
            IsActive: true
        };
    }
    getNotification(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/GetModuleNotification/' + token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => {
            return Response;
        }));
    }
    putNotificationDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/putModuleNotifications/' + token, this.NotificationData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    //-----------------------Email template Section ---------------------------------------------//
    //get template list
    getEmailTemplateList() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/getEmailTemplateList')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => {
            return Response;
        }));
    }
    //get template details
    getEmailTemplate(Id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/getEmailTemplate/' + Id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Response => {
            return Response;
        }));
    }
    // Add Email template
    AddEmailTemplate() {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/AddEmailTemplate', this.NotificationTemplateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    // Update Email template
    UpdateEmailTemplate() {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/UpdateEmailTemplate', this.NotificationTemplateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    changeNotificationTemplateStatus(Id, CurrStatus) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/changeNotificationTemplateStatus/' + Id + '/' + CurrStatus, null, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }), observe: 'response'
        }).pipe();
    }
    // Send Quote Notification
    quoteEmailNotification(QuoteId, isCust, isAdmin, AdminId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/quoteEmailNotification/' + QuoteId + '/' +
            isCust + '/' + isAdmin + '/' + AdminId, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    // Send Quote Notification
    updateQuoteEmailNotification(QuoteId, isCust, isAdmin, AdminId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/UpdatequoteEmailNotification/' + QuoteId + '/' +
            isCust + '/' + isAdmin + '/' + AdminId, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    //Send Work order Notification
    WorkOrderEmailNotification(CloserId, AdminId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/WorkOrderEmailNotification/' + CloserId + '/' + AdminId, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    //Send New Ticket  Notification
    NewTicketEmailNotification(TicketId, isCust, isAdmin, AdminId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/TicketEmailNotification/' + TicketId + '/' +
            isCust + '/' + isAdmin + '/' + AdminId, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    //Re-Schedule ticket notification
    ReScheduleTicketEmailNotification(oldEngList, TicketId, AdminId, OldDate, OldTime) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/ReScheduleTicketBodyTemplate/' + TicketId + '/' + AdminId + '/' + OldDate + '/' + OldTime, oldEngList)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    //Completion ticket notification
    StartTicketEmailNotification(TicketId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/StartTicketEmailNotification/' + TicketId, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    //Completion ticket notification
    CompletionTicketEmailNotification(CloserId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/CompletionTicketEmailNotification/' + CloserId, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    //Completion ticket notification
    HoldTicketEmailNotification(CloserId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/HoldTicketEmailNotification/' + CloserId, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    //Cancelled ticket notification
    CancelledTicketEmailNotification(TicketId, AdminId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/CancelledTicketEmailNotification/' + TicketId + '/' + AdminId, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    //Re-Allocation ticket notification
    ReAllocationTicketEmailNotification(oldEngList, TicketId, isCust, isAdmin, AdminId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Notifications/ReAllocationTicketEmailNotificationss/'
            + TicketId + '/' + isCust + '/' + isAdmin + '/' + AdminId, oldEngList)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "dRK5":
/*!***********************************************!*\
  !*** ./src/app/ngb-time-to-string-adapter.ts ***!
  \***********************************************/
/*! exports provided: NgbTimeToStringAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimeToStringAdapter", function() { return NgbTimeToStringAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/** Outer dependencies */



function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isString(value) {
    return typeof value === 'string';
}
class NgbTimeToStringAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"] {
    constructor() {
        super(...arguments);
        this.year = new Date().getUTCFullYear();
        this.month = new Date().getUTCMonth() + 1;
        this.day = new Date().getUTCDate();
    }
    /**
     * Converts user-model date into an NgbTimeStruct for internal use in the library
     */
    fromModel(dateString) {
        const date = new Date(dateString);
        const isValidDate = !isNaN(date.valueOf());
        if (!dateString || !isString(dateString) || !isValidDate) {
            return null;
        }
        this.year = date.getUTCFullYear();
        this.month = date.getUTCMonth() + 1;
        this.day = date.getUTCDate();
        return { hour: date.getUTCHours(), minute: date.getUTCMinutes(), second: date.getUTCSeconds() };
    }
    /**
     * Converts internal time value NgbTimeStruct to user-model date
     * The returned type is supposed to be of the same type as fromModel() input-value param
     */
    toModel(time) {
        if (time && isInteger(time.hour) && isInteger(time.minute) && isInteger(time.second)) {
            const year = this.year.toString().padStart(2, '0');
            const month = this.month.toString().padStart(2, '0');
            const day = this.day.toString().padStart(2, '0');
            const hour = time.hour.toString().padStart(2, '0');
            const minute = time.minute.toString().padStart(2, '0');
            const second = time.second.toString().padStart(2, '0');
            return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
        }
        return null;
    }
}
NgbTimeToStringAdapter.ɵfac = function NgbTimeToStringAdapter_Factory(t) { return ɵNgbTimeToStringAdapter_BaseFactory(t || NgbTimeToStringAdapter); };
NgbTimeToStringAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgbTimeToStringAdapter, factory: NgbTimeToStringAdapter.ɵfac });
const ɵNgbTimeToStringAdapter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbTimeToStringAdapter);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTimeToStringAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "x8Rg":
/*!***********************************************!*\
  !*** ./src/app/ngb-date-to-string-adapter.ts ***!
  \***********************************************/
/*! exports provided: NgbDateToStringAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateToStringAdapter", function() { return NgbDateToStringAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/** Outer dependencies */



function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isString(value) {
    return typeof value === 'string';
}
class NgbDateToStringAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"] {
    constructor() {
        super(...arguments);
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    }
    /**
     * Converts user-model date into an NgbDateStruct for internal use in the library
     */
    fromModel(dateString) {
        const date = new Date(dateString);
        const isValidDate = (!isNaN(date.valueOf()));
        if (!dateString || !isString(dateString) || !isValidDate) {
            return null;
        }
        this.hour = date.getUTCHours();
        this.minute = date.getUTCMinutes();
        this.second = date.getUTCSeconds();
        return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
    }
    /**
     * Converts internal date value NgbDateStruct to user-model date
     * The returned type is supposed to be of the same type as fromModel() input-value param
     */
    toModel(date) {
        if (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) {
            const year = date.year.toString().padStart(2, '0');
            const month = date.month.toString().padStart(2, '0');
            const day = date.day.toString().padStart(2, '0');
            const hour = this.hour.toString().padStart(2, '0');
            const minute = this.minute.toString().padStart(2, '0');
            const second = this.second.toString().padStart(2, '0');
            return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
        }
        return null;
    }
}
NgbDateToStringAdapter.ɵfac = function NgbDateToStringAdapter_Factory(t) { return ɵNgbDateToStringAdapter_BaseFactory(t || NgbDateToStringAdapter); };
NgbDateToStringAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgbDateToStringAdapter, factory: NgbDateToStringAdapter.ɵfac });
const ɵNgbDateToStringAdapter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateToStringAdapter);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateToStringAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~application-calendar-calendar-module~application-closer-update-popup-closer-update-popup-mod~2871a86b-es2015.js.map