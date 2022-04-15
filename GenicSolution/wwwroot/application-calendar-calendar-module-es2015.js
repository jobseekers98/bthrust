(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-calendar-calendar-module"],{

/***/ "0yvR":
/*!****************************************************************!*\
  !*** ./node_modules/@fullcalendar/resource-common/main.esm.js ***!
  \****************************************************************/
/*! exports provided: default, AbstractResourceDayTable, DayResourceTable, ResourceApi, ResourceDayHeader, ResourceDayTable, ResourceSplitter, VResourceJoiner, VResourceSplitter, buildResourceFields, buildResourceTextFunc, buildRowNodes, flattenResources, isGroupsEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractResourceDayTable", function() { return AbstractResourceDayTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayResourceTable", function() { return DayResourceTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceApi", function() { return ResourceApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDayHeader", function() { return ResourceDayHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDayTable", function() { return ResourceDayTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceSplitter", function() { return ResourceSplitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VResourceJoiner", function() { return VResourceJoiner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VResourceSplitter", function() { return VResourceSplitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildResourceFields", function() { return buildResourceFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildResourceTextFunc", function() { return buildResourceTextFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildRowNodes", function() { return buildRowNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenResources", function() { return flattenResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGroupsEqual", function() { return isGroupsEqual; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "SZB9");
/*!
FullCalendar Resources Common Plugin v4.4.2
Docs & License: https://fullcalendar.io/scheduler
(c) 2019 Adam Shaw
*/



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function massageEventDragMutation(eventMutation, hit0, hit1) {
    var resource0 = hit0.dateSpan.resourceId;
    var resource1 = hit1.dateSpan.resourceId;
    if (resource0 && resource1 &&
        resource0 !== resource1) {
        eventMutation.resourceMutation = {
            matchResourceId: resource0,
            setResourceId: resource1
        };
    }
}
/*
TODO: all this would be much easier if we were using a hash!
*/
function applyEventDefMutation(eventDef, mutation, calendar) {
    var resourceMutation = mutation.resourceMutation;
    if (resourceMutation && computeResourceEditable(eventDef, calendar)) {
        var index = eventDef.resourceIds.indexOf(resourceMutation.matchResourceId);
        if (index !== -1) {
            var resourceIds = eventDef.resourceIds.slice(); // copy
            resourceIds.splice(index, 1); // remove
            if (resourceIds.indexOf(resourceMutation.setResourceId) === -1) { // not already in there
                resourceIds.push(resourceMutation.setResourceId); // add
            }
            eventDef.resourceIds = resourceIds;
        }
    }
}
/*
HACK
TODO: use EventUi system instead of this
*/
function computeResourceEditable(eventDef, calendar) {
    var resourceEditable = eventDef.resourceEditable;
    if (resourceEditable == null) {
        var source = eventDef.sourceId && calendar.state.eventSources[eventDef.sourceId];
        if (source) {
            resourceEditable = source.extendedProps.resourceEditable; // used the Source::extendedProps hack
        }
        if (resourceEditable == null) {
            resourceEditable = calendar.opt('eventResourceEditable');
            if (resourceEditable == null) {
                resourceEditable = calendar.opt('editable'); // TODO: use defaults system instead
            }
        }
    }
    return resourceEditable;
}
function transformEventDrop(mutation, calendar) {
    var resourceMutation = mutation.resourceMutation;
    if (resourceMutation) {
        return {
            oldResource: calendar.getResourceById(resourceMutation.matchResourceId),
            newResource: calendar.getResourceById(resourceMutation.setResourceId)
        };
    }
    else {
        return {
            oldResource: null,
            newResource: null
        };
    }
}

var ResourceDataAdder = /** @class */ (function () {
    function ResourceDataAdder() {
        this.filterResources = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(filterResources);
    }
    ResourceDataAdder.prototype.transform = function (viewProps, viewSpec, calendarProps, allOptions) {
        if (viewSpec.class.needsResourceData) {
            return {
                resourceStore: this.filterResources(calendarProps.resourceStore, allOptions.filterResourcesWithEvents, calendarProps.eventStore, calendarProps.dateProfile.activeRange),
                resourceEntityExpansions: calendarProps.resourceEntityExpansions
            };
        }
    };
    return ResourceDataAdder;
}());
function filterResources(resourceStore, doFilterResourcesWithEvents, eventStore, activeRange) {
    if (doFilterResourcesWithEvents) {
        var instancesInRange = filterEventInstancesInRange(eventStore.instances, activeRange);
        var hasEvents_1 = computeHasEvents(instancesInRange, eventStore.defs);
        __assign(hasEvents_1, computeAncestorHasEvents(hasEvents_1, resourceStore));
        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["filterHash"])(resourceStore, function (resource, resourceId) {
            return hasEvents_1[resourceId];
        });
    }
    else {
        return resourceStore;
    }
}
function filterEventInstancesInRange(eventInstances, activeRange) {
    return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["filterHash"])(eventInstances, function (eventInstance) {
        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangesIntersect"])(eventInstance.range, activeRange);
    });
}
function computeHasEvents(eventInstances, eventDefs) {
    var hasEvents = {};
    for (var instanceId in eventInstances) {
        var instance = eventInstances[instanceId];
        for (var _i = 0, _a = eventDefs[instance.defId].resourceIds; _i < _a.length; _i++) {
            var resourceId = _a[_i];
            hasEvents[resourceId] = true;
        }
    }
    return hasEvents;
}
/*
mark resources as having events if any of their ancestors have them
NOTE: resourceStore might not have all the resources that hasEvents{} has keyed
*/
function computeAncestorHasEvents(hasEvents, resourceStore) {
    var res = {};
    for (var resourceId in hasEvents) {
        var resource = void 0;
        while ((resource = resourceStore[resourceId])) {
            resourceId = resource.parentId; // now functioning as the parentId
            if (resourceId) {
                res[resourceId] = true;
            }
            else {
                break;
            }
        }
    }
    return res;
}
// for when non-resource view should be given EventUi info (for event coloring/constraints based off of resource data)
var ResourceEventConfigAdder = /** @class */ (function () {
    function ResourceEventConfigAdder() {
        this.buildResourceEventUis = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeOutput"])(buildResourceEventUis, _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isPropsEqual"]);
        this.injectResourceEventUis = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(injectResourceEventUis);
    }
    ResourceEventConfigAdder.prototype.transform = function (viewProps, viewSpec, calendarProps) {
        if (!viewSpec.class.needsResourceData) { // is a non-resource view?
            return {
                eventUiBases: this.injectResourceEventUis(viewProps.eventUiBases, viewProps.eventStore.defs, this.buildResourceEventUis(calendarProps.resourceStore))
            };
        }
    };
    return ResourceEventConfigAdder;
}());
function buildResourceEventUis(resourceStore) {
    return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(resourceStore, function (resource) {
        return resource.ui;
    });
}
function injectResourceEventUis(eventUiBases, eventDefs, resourceEventUis) {
    return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(eventUiBases, function (eventUi, defId) {
        if (defId) { // not the '' key
            return injectResourceEventUi(eventUi, eventDefs[defId], resourceEventUis);
        }
        else {
            return eventUi;
        }
    });
}
function injectResourceEventUi(origEventUi, eventDef, resourceEventUis) {
    var parts = [];
    // first resource takes precedence, which fights with the ordering of combineEventUis, thus the unshifts
    for (var _i = 0, _a = eventDef.resourceIds; _i < _a.length; _i++) {
        var resourceId = _a[_i];
        if (resourceEventUis[resourceId]) {
            parts.unshift(resourceEventUis[resourceId]);
        }
    }
    parts.unshift(origEventUi);
    return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["combineEventUis"])(parts);
}
// for making sure events that have editable resources are always draggable in resource views
function transformIsDraggable(val, eventDef, eventUi, view) {
    if (!val) {
        if (view.viewSpec.class.needsResourceData) {
            if (computeResourceEditable(eventDef, view.context.calendar)) { // yuck
                return true;
            }
        }
    }
    return val;
}

var RESOURCE_SOURCE_PROPS = {
    id: String
};
var defs = [];
var uid = 0;
function registerResourceSourceDef(def) {
    defs.push(def);
}
function getResourceSourceDef(id) {
    return defs[id];
}
function doesSourceIgnoreRange(source) {
    return Boolean(defs[source.sourceDefId].ignoreRange);
}
function parseResourceSource(input) {
    for (var i = defs.length - 1; i >= 0; i--) { // later-added plugins take precedence
        var def = defs[i];
        var meta = def.parseMeta(input);
        if (meta) {
            var res = parseResourceSourceProps((typeof input === 'object' && input) ? input : {}, meta, i);
            res._raw = input;
            return res;
        }
    }
    return null;
}
function parseResourceSourceProps(input, meta, sourceDefId) {
    var props = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["refineProps"])(input, RESOURCE_SOURCE_PROPS);
    props.sourceId = String(uid++);
    props.sourceDefId = sourceDefId;
    props.meta = meta;
    props.publicId = props.id;
    props.isFetching = false;
    props.latestFetchId = '';
    props.fetchRange = null;
    delete props.id;
    return props;
}

function reduceResourceSource (source, action, dateProfile, calendar) {
    switch (action.type) {
        case 'INIT':
            return createSource(calendar.opt('resources'), calendar);
        case 'RESET_RESOURCE_SOURCE':
            return createSource(action.resourceSourceInput, calendar, true);
        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
        case 'NEXT':
        case 'SET_DATE':
        case 'SET_VIEW_TYPE':
            return handleRange(source, dateProfile.activeRange, calendar);
        case 'RECEIVE_RESOURCES':
        case 'RECEIVE_RESOURCE_ERROR':
            return receiveResponse(source, action.fetchId, action.fetchRange);
        case 'REFETCH_RESOURCES':
            return fetchSource(source, dateProfile.activeRange, calendar);
        default:
            return source;
    }
}
var uid$1 = 0;
function createSource(input, calendar, forceFetch) {
    if (input) {
        var source = parseResourceSource(input);
        if (forceFetch || !calendar.opt('refetchResourcesOnNavigate')) { // because assumes handleRange will do it later
            source = fetchSource(source, null, calendar);
        }
        return source;
    }
    return null;
}
function handleRange(source, activeRange, calendar) {
    if (calendar.opt('refetchResourcesOnNavigate') &&
        !doesSourceIgnoreRange(source) &&
        (!source.fetchRange || !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangesEqual"])(source.fetchRange, activeRange))) {
        return fetchSource(source, activeRange, calendar);
    }
    else {
        return source;
    }
}
function fetchSource(source, fetchRange, calendar) {
    var sourceDef = getResourceSourceDef(source.sourceDefId);
    var fetchId = String(uid$1++);
    sourceDef.fetch({
        resourceSource: source,
        calendar: calendar,
        range: fetchRange
    }, function (res) {
        // HACK
        // do before calling dispatch in case dispatch renders synchronously
        calendar.afterSizingTriggers._resourcesRendered = [null]; // fire once
        calendar.dispatch({
            type: 'RECEIVE_RESOURCES',
            fetchId: fetchId,
            fetchRange: fetchRange,
            rawResources: res.rawResources
        });
    }, function (error) {
        calendar.dispatch({
            type: 'RECEIVE_RESOURCE_ERROR',
            fetchId: fetchId,
            fetchRange: fetchRange,
            error: error
        });
    });
    return __assign({}, source, { isFetching: true, latestFetchId: fetchId });
}
function receiveResponse(source, fetchId, fetchRange) {
    if (fetchId === source.latestFetchId) {
        return __assign({}, source, { isFetching: false, fetchRange: fetchRange });
    }
    return source;
}

var RESOURCE_PROPS = {
    id: String,
    title: String,
    parentId: String,
    businessHours: null,
    children: null,
    extendedProps: null
};
var PRIVATE_ID_PREFIX = '_fc:';
var uid$2 = 0;
/*
needs a full store so that it can populate children too
*/
function parseResource(input, parentId, store, calendar) {
    if (parentId === void 0) { parentId = ''; }
    var leftovers0 = {};
    var props = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["refineProps"])(input, RESOURCE_PROPS, {}, leftovers0);
    var leftovers1 = {};
    var ui = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["processScopedUiProps"])('event', leftovers0, calendar, leftovers1);
    if (!props.id) {
        props.id = PRIVATE_ID_PREFIX + (uid$2++);
    }
    if (!props.parentId) { // give precedence to the parentId property
        props.parentId = parentId;
    }
    props.businessHours = props.businessHours ? Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseBusinessHours"])(props.businessHours, calendar) : null;
    props.ui = ui;
    props.extendedProps = __assign({}, leftovers1, props.extendedProps);
    // help out ResourceApi from having user modify props
    Object.freeze(ui.classNames);
    Object.freeze(props.extendedProps);
    if (store[props.id]) ;
    else {
        store[props.id] = props;
        if (props.children) {
            for (var _i = 0, _a = props.children; _i < _a.length; _i++) {
                var childInput = _a[_i];
                parseResource(childInput, props.id, store, calendar);
            }
            delete props.children;
        }
    }
    return props;
}
/*
TODO: use this in more places
*/
function getPublicId(id) {
    if (id.indexOf(PRIVATE_ID_PREFIX) === 0) {
        return '';
    }
    return id;
}

function reduceResourceStore (store, action, source, calendar) {
    switch (action.type) {
        case 'INIT':
            return {};
        case 'RECEIVE_RESOURCES':
            return receiveRawResources(store, action.rawResources, action.fetchId, source, calendar);
        case 'ADD_RESOURCE':
            return addResource(store, action.resourceHash);
        case 'REMOVE_RESOURCE':
            return removeResource(store, action.resourceId);
        case 'SET_RESOURCE_PROP':
            return setResourceProp(store, action.resourceId, action.propName, action.propValue);
        case 'RESET_RESOURCES':
            // must make the calendar think each resource is a new object :/
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(store, function (resource) {
                return __assign({}, resource);
            });
        default:
            return store;
    }
}
function receiveRawResources(existingStore, inputs, fetchId, source, calendar) {
    if (source.latestFetchId === fetchId) {
        var nextStore = {};
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            parseResource(input, '', nextStore, calendar);
        }
        return nextStore;
    }
    else {
        return existingStore;
    }
}
function addResource(existingStore, additions) {
    // TODO: warn about duplicate IDs
    return __assign({}, existingStore, additions);
}
function removeResource(existingStore, resourceId) {
    var newStore = __assign({}, existingStore);
    delete newStore[resourceId];
    // promote children
    for (var childResourceId in newStore) { // a child, *maybe* but probably not
        if (newStore[childResourceId].parentId === resourceId) {
            newStore[childResourceId] = __assign({}, newStore[childResourceId], { parentId: '' });
        }
    }
    return newStore;
}
function setResourceProp(existingStore, resourceId, name, value) {
    var _a, _b;
    var existingResource = existingStore[resourceId];
    // TODO: sanitization
    if (existingResource) {
        return __assign({}, existingStore, (_a = {}, _a[resourceId] = __assign({}, existingResource, (_b = {}, _b[name] = value, _b)), _a));
    }
    else {
        return existingStore;
    }
}

function reduceResourceEntityExpansions(expansions, action) {
    var _a;
    switch (action.type) {
        case 'INIT':
            return {};
        case 'SET_RESOURCE_ENTITY_EXPANDED':
            return __assign({}, expansions, (_a = {}, _a[action.id] = action.isExpanded, _a));
        default:
            return expansions;
    }
}

function resourcesReducers (state, action, calendar) {
    var resourceSource = reduceResourceSource(state.resourceSource, action, state.dateProfile, calendar);
    var resourceStore = reduceResourceStore(state.resourceStore, action, resourceSource, calendar);
    var resourceEntityExpansions = reduceResourceEntityExpansions(state.resourceEntityExpansions, action);
    var loadingLevel = state.loadingLevel + ((resourceSource && resourceSource.isFetching) ? 1 : 0);
    return __assign({}, state, { resourceSource: resourceSource,
        resourceStore: resourceStore,
        resourceEntityExpansions: resourceEntityExpansions,
        loadingLevel: loadingLevel });
}

var RESOURCE_RELATED_PROPS = {
    resourceId: String,
    resourceIds: function (items) {
        return (items || []).map(function (item) {
            return String(item);
        });
    },
    resourceEditable: Boolean
};
function parseEventDef(def, props, leftovers) {
    var resourceRelatedProps = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["refineProps"])(props, RESOURCE_RELATED_PROPS, {}, leftovers);
    var resourceIds = resourceRelatedProps.resourceIds;
    if (resourceRelatedProps.resourceId) {
        resourceIds.push(resourceRelatedProps.resourceId);
    }
    def.resourceIds = resourceIds;
    def.resourceEditable = resourceRelatedProps.resourceEditable;
}

function transformDateSelectionJoin(hit0, hit1) {
    var resourceId0 = hit0.dateSpan.resourceId;
    var resourceId1 = hit1.dateSpan.resourceId;
    if (resourceId0 && resourceId1) {
        if (hit0.component.allowAcrossResources === false &&
            resourceId0 !== resourceId1) {
            return false;
        }
        else {
            return { resourceId: resourceId0 };
        }
    }
}

var ResourceApi = /** @class */ (function () {
    function ResourceApi(calendar, rawResource) {
        this._calendar = calendar;
        this._resource = rawResource;
    }
    ResourceApi.prototype.setProp = function (name, value) {
        this._calendar.dispatch({
            type: 'SET_RESOURCE_PROP',
            resourceId: this._resource.id,
            propName: name,
            propValue: value
        });
    };
    ResourceApi.prototype.remove = function () {
        this._calendar.dispatch({
            type: 'REMOVE_RESOURCE',
            resourceId: this._resource.id
        });
    };
    ResourceApi.prototype.getParent = function () {
        var calendar = this._calendar;
        var parentId = this._resource.parentId;
        if (parentId) {
            return new ResourceApi(calendar, calendar.state.resourceSource[parentId]);
        }
        else {
            return null;
        }
    };
    ResourceApi.prototype.getChildren = function () {
        var thisResourceId = this._resource.id;
        var calendar = this._calendar;
        var resourceStore = calendar.state.resourceStore;
        var childApis = [];
        for (var resourceId in resourceStore) {
            if (resourceStore[resourceId].parentId === thisResourceId) {
                childApis.push(new ResourceApi(calendar, resourceStore[resourceId]));
            }
        }
        return childApis;
    };
    /*
    this is really inefficient!
    TODO: make EventApi::resourceIds a hash or keep an index in the Calendar's state
    */
    ResourceApi.prototype.getEvents = function () {
        var thisResourceId = this._resource.id;
        var calendar = this._calendar;
        var _a = calendar.state.eventStore, defs = _a.defs, instances = _a.instances;
        var eventApis = [];
        for (var instanceId in instances) {
            var instance = instances[instanceId];
            var def = defs[instance.defId];
            if (def.resourceIds.indexOf(thisResourceId) !== -1) { // inefficient!!!
                eventApis.push(new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](calendar, def, instance));
            }
        }
        return eventApis;
    };
    Object.defineProperty(ResourceApi.prototype, "id", {
        get: function () { return this._resource.id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceApi.prototype, "title", {
        get: function () { return this._resource.title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceApi.prototype, "eventConstraint", {
        get: function () { return this._resource.ui.constraints[0] || null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceApi.prototype, "eventOverlap", {
        get: function () { return this._resource.ui.overlap; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceApi.prototype, "eventAllow", {
        get: function () { return this._resource.ui.allows[0] || null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceApi.prototype, "eventBackgroundColor", {
        get: function () { return this._resource.ui.backgroundColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceApi.prototype, "eventBorderColor", {
        get: function () { return this._resource.ui.borderColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceApi.prototype, "eventTextColor", {
        get: function () { return this._resource.ui.textColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceApi.prototype, "eventClassNames", {
        // NOTE: user can't modify these because Object.freeze was called in event-def parsing
        get: function () { return this._resource.ui.classNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceApi.prototype, "extendedProps", {
        get: function () { return this._resource.extendedProps; },
        enumerable: true,
        configurable: true
    });
    return ResourceApi;
}());

_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"].prototype.addResource = function (input, scrollTo) {
    var _a;
    if (scrollTo === void 0) { scrollTo = true; }
    var resourceHash;
    var resource;
    if (input instanceof ResourceApi) {
        resource = input._resource;
        resourceHash = (_a = {}, _a[resource.id] = resource, _a);
    }
    else {
        resourceHash = {};
        resource = parseResource(input, '', resourceHash, this);
    }
    // HACK
    if (scrollTo) {
        this.component.view.addScroll({ forcedRowId: resource.id });
    }
    this.dispatch({
        type: 'ADD_RESOURCE',
        resourceHash: resourceHash
    });
    return new ResourceApi(this, resource);
};
_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"].prototype.getResourceById = function (id) {
    id = String(id);
    if (this.state.resourceStore) { // guard against calendar with no resource functionality
        var rawResource = this.state.resourceStore[id];
        if (rawResource) {
            return new ResourceApi(this, rawResource);
        }
    }
    return null;
};
_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"].prototype.getResources = function () {
    var resourceStore = this.state.resourceStore;
    var resourceApis = [];
    if (resourceStore) { // guard against calendar with no resource functionality
        for (var resourceId in resourceStore) {
            resourceApis.push(new ResourceApi(this, resourceStore[resourceId]));
        }
    }
    return resourceApis;
};
_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"].prototype.getTopLevelResources = function () {
    var resourceStore = this.state.resourceStore;
    var resourceApis = [];
    if (resourceStore) { // guard against calendar with no resource functionality
        for (var resourceId in resourceStore) {
            if (!resourceStore[resourceId].parentId) {
                resourceApis.push(new ResourceApi(this, resourceStore[resourceId]));
            }
        }
    }
    return resourceApis;
};
_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"].prototype.rerenderResources = function () {
    this.dispatch({
        type: 'RESET_RESOURCES'
    });
};
_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"].prototype.refetchResources = function () {
    this.dispatch({
        type: 'REFETCH_RESOURCES'
    });
};
function transformDatePoint(dateSpan, calendar) {
    return dateSpan.resourceId ?
        { resource: calendar.getResourceById(dateSpan.resourceId) } :
        {};
}
function transformDateSpan(dateSpan, calendar) {
    return dateSpan.resourceId ?
        { resource: calendar.getResourceById(dateSpan.resourceId) } :
        {};
}

/*
splits things BASED OFF OF which resources they are associated with.
creates a '' entry which is when something has NO resource.
*/
var ResourceSplitter = /** @class */ (function (_super) {
    __extends(ResourceSplitter, _super);
    function ResourceSplitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceSplitter.prototype.getKeyInfo = function (props) {
        return __assign({ '': {} }, props.resourceStore // already has `ui` and `businessHours` keys!
        );
    };
    ResourceSplitter.prototype.getKeysForDateSpan = function (dateSpan) {
        return [dateSpan.resourceId || ''];
    };
    ResourceSplitter.prototype.getKeysForEventDef = function (eventDef) {
        var resourceIds = eventDef.resourceIds;
        if (!resourceIds.length) {
            return [''];
        }
        return resourceIds;
    };
    return ResourceSplitter;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Splitter"]));

function isPropsValidWithResources(props, calendar) {
    var splitter = new ResourceSplitter();
    var sets = splitter.splitProps(__assign({}, props, { resourceStore: calendar.state.resourceStore }));
    for (var resourceId in sets) {
        var props_1 = sets[resourceId];
        // merge in event data from the non-resource segment
        if (resourceId && sets['']) { // current segment is not the non-resource one, and there IS a non-resource one
            props_1 = __assign({}, props_1, { eventStore: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["mergeEventStores"])(sets[''].eventStore, props_1.eventStore), eventUiBases: __assign({}, sets[''].eventUiBases, props_1.eventUiBases) });
        }
        if (!Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isPropsValid"])(props_1, calendar, { resourceId: resourceId }, filterConfig.bind(null, resourceId))) {
            return false;
        }
    }
    return true;
}
function filterConfig(resourceId, config) {
    return __assign({}, config, { constraints: filterConstraints(resourceId, config.constraints) });
}
function filterConstraints(resourceId, constraints) {
    return constraints.map(function (constraint) {
        var defs = constraint.defs;
        if (defs) { // we are dealing with an EventStore
            // if any of the events define constraints to resources that are NOT this resource,
            // then this resource is unconditionally prohibited, which is what a `false` value does.
            for (var defId in defs) {
                var resourceIds = defs[defId].resourceIds;
                if (resourceIds.length && resourceIds.indexOf(resourceId) === -1) { // TODO: use a hash?!!! (for other reasons too)
                    return false;
                }
            }
        }
        return constraint;
    });
}

function transformExternalDef(dateSpan) {
    return dateSpan.resourceId ?
        { resourceId: dateSpan.resourceId } :
        {};
}

function transformEventResizeJoin(hit0, hit1) {
    var component = hit0.component;
    if (component.allowAcrossResources === false &&
        hit0.dateSpan.resourceId !== hit1.dateSpan.resourceId) {
        return false;
    }
}

_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"].prototype.getResources = function () {
    var calendar = this._calendar;
    return this._def.resourceIds.map(function (resourceId) {
        return calendar.getResourceById(resourceId);
    });
};
_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"].prototype.setResources = function (resources) {
    var resourceIds = [];
    // massage resources -> resourceIds
    for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
        var resource = resources_1[_i];
        var resourceId = null;
        if (typeof resource === 'string') {
            resourceId = resource;
        }
        else if (typeof resource === 'number') {
            resourceId = String(resource);
        }
        else if (resource instanceof ResourceApi) {
            resourceId = resource.id; // guaranteed to always have an ID. hmmm
        }
        else {
            console.warn('unknown resource type: ' + resource);
        }
        if (resourceId) {
            resourceIds.push(resourceId);
        }
    }
    this.mutate({
        standardProps: {
            resourceIds: resourceIds
        }
    });
};

var RELEASE_DATE = '2020-05-28'; // for Scheduler
var UPGRADE_WINDOW = 365 + 7; // days. 1 week leeway, for tz shift reasons too
var LICENSE_INFO_URL = 'http://fullcalendar.io/scheduler/license/';
var PRESET_LICENSE_KEYS = [
    'GPL-My-Project-Is-Open-Source',
    'CC-Attribution-NonCommercial-NoDerivatives'
];
var CSS = {
    position: 'absolute',
    'z-index': 99999,
    bottom: '1px',
    left: '1px',
    background: '#eee',
    'border-color': '#ddd',
    'border-style': 'solid',
    'border-width': '1px 1px 0 0',
    padding: '2px 4px',
    'font-size': '12px',
    'border-top-right-radius': '3px'
};
function injectLicenseWarning(containerEl, calendar) {
    var key = calendar.opt('schedulerLicenseKey');
    if (!isImmuneUrl(window.location.href) && !isValidKey(key)) {
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(containerEl, '<div class="fc-license-message" style="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["cssToStr"])(CSS)) + '">' +
            'Please use a valid license key. <a href="' + LICENSE_INFO_URL + '">More Info</a>' +
            '</div>');
    }
}
/*
This decryption is not meant to be bulletproof. Just a way to remind about an upgrade.
*/
function isValidKey(key) {
    if (PRESET_LICENSE_KEYS.indexOf(key) !== -1) {
        return true;
    }
    var parts = (key || '').match(/^(\d+)\-fcs\-(\d+)$/);
    if (parts && (parts[1].length === 10)) {
        var purchaseDate = new Date(parseInt(parts[2], 10) * 1000);
        var releaseDate = new Date(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].mockSchedulerReleaseDate || RELEASE_DATE);
        if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isValidDate"])(releaseDate)) { // token won't be replaced in dev mode
            var minPurchaseDate = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(releaseDate, -UPGRADE_WINDOW);
            if (minPurchaseDate < purchaseDate) {
                return true;
            }
        }
    }
    return false;
}
function isImmuneUrl(url) {
    return /\w+\:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(url);
}

var optionChangeHandlers = {
    resources: handleResources
};
function handleResources(newSourceInput, calendar, deepEqual) {
    var oldSourceInput = calendar.state.resourceSource._raw;
    if (!deepEqual(oldSourceInput, newSourceInput)) {
        calendar.dispatch({
            type: 'RESET_RESOURCE_SOURCE',
            resourceSourceInput: newSourceInput
        });
    }
}

registerResourceSourceDef({
    ignoreRange: true,
    parseMeta: function (raw) {
        if (Array.isArray(raw)) {
            return raw;
        }
        else if (Array.isArray(raw.resources)) {
            return raw.resources;
        }
        return null;
    },
    fetch: function (arg, successCallback) {
        successCallback({
            rawResources: arg.resourceSource.meta
        });
    }
});

registerResourceSourceDef({
    parseMeta: function (raw) {
        if (typeof raw === 'function') {
            return raw;
        }
        else if (typeof raw.resources === 'function') {
            return raw.resources;
        }
        return null;
    },
    fetch: function (arg, success, failure) {
        var dateEnv = arg.calendar.dateEnv;
        var func = arg.resourceSource.meta;
        var publicArg = {};
        if (arg.range) {
            publicArg = {
                start: dateEnv.toDate(arg.range.start),
                end: dateEnv.toDate(arg.range.end),
                startStr: dateEnv.formatIso(arg.range.start),
                endStr: dateEnv.formatIso(arg.range.end),
                timeZone: dateEnv.timeZone
            };
        }
        // TODO: make more dry with EventSourceFunc
        // TODO: accept a response?
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["unpromisify"])(func.bind(null, publicArg), function (rawResources) {
            success({ rawResources: rawResources }); // needs an object response
        }, failure // send errorObj directly to failure callback
        );
    }
});

registerResourceSourceDef({
    parseMeta: function (raw) {
        if (typeof raw === 'string') {
            raw = { url: raw };
        }
        else if (!raw || typeof raw !== 'object' || !raw.url) {
            return null;
        }
        return {
            url: raw.url,
            method: (raw.method || 'GET').toUpperCase(),
            extraParams: raw.extraParams
        };
    },
    fetch: function (arg, successCallback, failureCallback) {
        var meta = arg.resourceSource.meta;
        var requestParams = buildRequestParams(meta, arg.range, arg.calendar);
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["requestJson"])(meta.method, meta.url, requestParams, function (rawResources, xhr) {
            successCallback({ rawResources: rawResources, xhr: xhr });
        }, function (message, xhr) {
            failureCallback({ message: message, xhr: xhr });
        });
    }
});
// TODO: somehow consolidate with event json feed
function buildRequestParams(meta, range, calendar) {
    var dateEnv = calendar.dateEnv;
    var startParam;
    var endParam;
    var timeZoneParam;
    var customRequestParams;
    var params = {};
    if (range) {
        // startParam = meta.startParam
        // if (startParam == null) {
        startParam = calendar.opt('startParam');
        // }
        // endParam = meta.endParam
        // if (endParam == null) {
        endParam = calendar.opt('endParam');
        // }
        // timeZoneParam = meta.timeZoneParam
        // if (timeZoneParam == null) {
        timeZoneParam = calendar.opt('timeZoneParam');
        // }
        params[startParam] = dateEnv.formatIso(range.start);
        params[endParam] = dateEnv.formatIso(range.end);
        if (dateEnv.timeZone !== 'local') {
            params[timeZoneParam] = dateEnv.timeZone;
        }
    }
    // retrieve any outbound GET/POST data from the options
    if (typeof meta.extraParams === 'function') {
        // supplied as a function that returns a key/value object
        customRequestParams = meta.extraParams();
    }
    else {
        // probably supplied as a straight key/value object
        customRequestParams = meta.extraParams || {};
    }
    __assign(params, customRequestParams);
    return params;
}

function buildResourceTextFunc(resourceTextSetting, calendar) {
    if (typeof resourceTextSetting === 'function') {
        return function (resource) {
            return resourceTextSetting(new ResourceApi(calendar, resource));
        };
    }
    else {
        return function (resource) {
            return resource.title || getPublicId(resource.id);
        };
    }
}

var ResourceDayHeader = /** @class */ (function (_super) {
    __extends(ResourceDayHeader, _super);
    function ResourceDayHeader(parentEl) {
        var _this = _super.call(this) || this;
        _this.processOptions = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_this._processOptions);
        _this.parentEl = parentEl;
        return _this;
    }
    ResourceDayHeader.prototype._processOptions = function (options, calendar) {
        this.datesAboveResources = options.datesAboveResources;
        this.resourceTextFunc = buildResourceTextFunc(options.resourceText, calendar);
    };
    ResourceDayHeader.prototype.render = function (props, context) {
        var options = context.options, calendar = context.calendar, theme = context.theme;
        this.processOptions(options, calendar);
        this.parentEl.innerHTML = ''; // because might be nbsp
        this.parentEl.appendChild(this.el = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-row ' + theme.getClass('headerRow') + '">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            '<thead></thead>' +
            '</table>' +
            '</div>'));
        this.thead = this.el.querySelector('thead');
        var html;
        this.dateFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(options.columnHeaderFormat ||
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeFallbackHeaderFormat"])(props.datesRepDistinctDays, props.dates.length));
        if (props.dates.length === 1) {
            html = this.renderResourceRow(props.resources);
        }
        else {
            if (this.datesAboveResources) {
                html = this.renderDayAndResourceRows(props.dates, props.resources);
            }
            else {
                html = this.renderResourceAndDayRows(props.resources, props.dates);
            }
        }
        this.thead.innerHTML = html;
        this.processResourceEls(props.resources);
    };
    ResourceDayHeader.prototype.destroy = function () {
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.el);
    };
    ResourceDayHeader.prototype.renderResourceRow = function (resources) {
        var _this = this;
        var cellHtmls = resources.map(function (resource) {
            return _this.renderResourceCell(resource, 1);
        });
        return this.buildTr(cellHtmls);
    };
    ResourceDayHeader.prototype.renderDayAndResourceRows = function (dates, resources) {
        var dateHtmls = [];
        var resourceHtmls = [];
        for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
            var date = dates_1[_i];
            dateHtmls.push(this.renderDateCell(date, resources.length));
            for (var _a = 0, resources_1 = resources; _a < resources_1.length; _a++) {
                var resource = resources_1[_a];
                resourceHtmls.push(this.renderResourceCell(resource, 1, date));
            }
        }
        return this.buildTr(dateHtmls) +
            this.buildTr(resourceHtmls);
    };
    ResourceDayHeader.prototype.renderResourceAndDayRows = function (resources, dates) {
        var resourceHtmls = [];
        var dateHtmls = [];
        for (var _i = 0, resources_2 = resources; _i < resources_2.length; _i++) {
            var resource = resources_2[_i];
            resourceHtmls.push(this.renderResourceCell(resource, dates.length));
            for (var _a = 0, dates_2 = dates; _a < dates_2.length; _a++) {
                var date = dates_2[_a];
                dateHtmls.push(this.renderDateCell(date, 1, resource));
            }
        }
        return this.buildTr(resourceHtmls) +
            this.buildTr(dateHtmls);
    };
    // Cell Rendering Utils
    // ----------------------------------------------------------------------------------------------
    // a cell with the resource name. might be associated with a specific day
    ResourceDayHeader.prototype.renderResourceCell = function (resource, colspan, date) {
        var dateEnv = this.context.dateEnv;
        return '<th class="fc-resource-cell"' +
            ' data-resource-id="' + resource.id + '"' +
            (date ?
                ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
                '') +
            (colspan > 1 ?
                ' colspan="' + colspan + '"' :
                '') +
            '>' +
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(this.resourceTextFunc(resource)) +
            '</th>';
    };
    // a cell with date text. might have a resource associated with it
    ResourceDayHeader.prototype.renderDateCell = function (date, colspan, resource) {
        var props = this.props;
        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["renderDateCell"])(date, props.dateProfile, props.datesRepDistinctDays, props.dates.length * props.resources.length, this.dateFormat, this.context, colspan, resource ? 'data-resource-id="' + resource.id + '"' : '');
    };
    ResourceDayHeader.prototype.buildTr = function (cellHtmls) {
        if (!cellHtmls.length) {
            cellHtmls = ['<td>&nbsp;</td>'];
        }
        if (this.props.renderIntroHtml) {
            cellHtmls = [this.props.renderIntroHtml()].concat(cellHtmls);
        }
        if (this.context.isRtl) {
            cellHtmls.reverse();
        }
        return '<tr>' +
            cellHtmls.join('') +
            '</tr>';
    };
    // Post-rendering
    // ----------------------------------------------------------------------------------------------
    // given a container with already rendered resource cells
    ResourceDayHeader.prototype.processResourceEls = function (resources) {
        var _a = this.context, calendar = _a.calendar, isRtl = _a.isRtl, view = _a.view;
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.thead, '.fc-resource-cell').forEach(function (node, col) {
            col = col % resources.length;
            if (isRtl) {
                col = resources.length - 1 - col;
            }
            var resource = resources[col];
            calendar.publiclyTrigger('resourceRender', [
                {
                    resource: new ResourceApi(calendar, resource),
                    el: node,
                    view: view
                }
            ]);
        });
    };
    return ResourceDayHeader;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var AbstractResourceDayTable = /** @class */ (function () {
    function AbstractResourceDayTable(dayTable, resources) {
        this.dayTable = dayTable;
        this.resources = resources;
        this.resourceIndex = new ResourceIndex(resources);
        this.rowCnt = dayTable.rowCnt;
        this.colCnt = dayTable.colCnt * resources.length;
        this.cells = this.buildCells();
    }
    AbstractResourceDayTable.prototype.buildCells = function () {
        var _a = this, rowCnt = _a.rowCnt, dayTable = _a.dayTable, resources = _a.resources;
        var rows = [];
        for (var row = 0; row < rowCnt; row++) {
            var rowCells = [];
            for (var dateCol = 0; dateCol < dayTable.colCnt; dateCol++) {
                for (var resourceCol = 0; resourceCol < resources.length; resourceCol++) {
                    var resource = resources[resourceCol];
                    var htmlAttrs = 'data-resource-id="' + resource.id + '"';
                    rowCells[this.computeCol(dateCol, resourceCol)] = {
                        date: dayTable.cells[row][dateCol].date,
                        resource: resource,
                        htmlAttrs: htmlAttrs
                    };
                }
            }
            rows.push(rowCells);
        }
        return rows;
    };
    return AbstractResourceDayTable;
}());
/*
resources over dates
*/
var ResourceDayTable = /** @class */ (function (_super) {
    __extends(ResourceDayTable, _super);
    function ResourceDayTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceDayTable.prototype.computeCol = function (dateI, resourceI) {
        return resourceI * this.dayTable.colCnt + dateI;
    };
    /*
    all date ranges are intact
    */
    ResourceDayTable.prototype.computeColRanges = function (dateStartI, dateEndI, resourceI) {
        return [
            {
                firstCol: this.computeCol(dateStartI, resourceI),
                lastCol: this.computeCol(dateEndI, resourceI),
                isStart: true,
                isEnd: true
            }
        ];
    };
    return ResourceDayTable;
}(AbstractResourceDayTable));
/*
dates over resources
*/
var DayResourceTable = /** @class */ (function (_super) {
    __extends(DayResourceTable, _super);
    function DayResourceTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayResourceTable.prototype.computeCol = function (dateI, resourceI) {
        return dateI * this.resources.length + resourceI;
    };
    /*
    every single day is broken up
    */
    DayResourceTable.prototype.computeColRanges = function (dateStartI, dateEndI, resourceI) {
        var segs = [];
        for (var i = dateStartI; i <= dateEndI; i++) {
            var col = this.computeCol(i, resourceI);
            segs.push({
                firstCol: col,
                lastCol: col,
                isStart: i === dateStartI,
                isEnd: i === dateEndI
            });
        }
        return segs;
    };
    return DayResourceTable;
}(AbstractResourceDayTable));
var ResourceIndex = /** @class */ (function () {
    function ResourceIndex(resources) {
        var indicesById = {};
        var ids = [];
        for (var i = 0; i < resources.length; i++) {
            var id = resources[i].id;
            ids.push(id);
            indicesById[id] = i;
        }
        this.ids = ids;
        this.indicesById = indicesById;
        this.length = resources.length;
    }
    return ResourceIndex;
}());
/*
TODO: just use ResourceHash somehow? could then use the generic ResourceSplitter
*/
var VResourceSplitter = /** @class */ (function (_super) {
    __extends(VResourceSplitter, _super);
    function VResourceSplitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VResourceSplitter.prototype.getKeyInfo = function (props) {
        var resourceDayTable = props.resourceDayTable;
        var hash = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(resourceDayTable.resourceIndex.indicesById, function (i) {
            return resourceDayTable.resources[i]; // has `ui` AND `businessHours` keys!
        }); // :(
        hash[''] = {};
        return hash;
    };
    VResourceSplitter.prototype.getKeysForDateSpan = function (dateSpan) {
        return [dateSpan.resourceId || ''];
    };
    VResourceSplitter.prototype.getKeysForEventDef = function (eventDef) {
        var resourceIds = eventDef.resourceIds;
        if (!resourceIds.length) {
            return [''];
        }
        return resourceIds;
    };
    return VResourceSplitter;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Splitter"]));
// joiner
var NO_SEGS = []; // for memoizing
var VResourceJoiner = /** @class */ (function () {
    function VResourceJoiner() {
        this.joinDateSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinSegs);
        this.joinBusinessHours = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinSegs);
        this.joinFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinSegs);
        this.joinBgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinSegs);
        this.joinEventDrags = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinInteractions);
        this.joinEventResizes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinInteractions);
    }
    /*
    propSets also has a '' key for things with no resource
    */
    VResourceJoiner.prototype.joinProps = function (propSets, resourceDayTable) {
        var dateSelectionSets = [];
        var businessHoursSets = [];
        var fgEventSets = [];
        var bgEventSets = [];
        var eventDrags = [];
        var eventResizes = [];
        var eventSelection = '';
        var keys = resourceDayTable.resourceIndex.ids.concat(['']); // add in the all-resource key
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var props = propSets[key];
            dateSelectionSets.push(props.dateSelectionSegs);
            businessHoursSets.push(key ? props.businessHourSegs : NO_SEGS); // don't include redundant all-resource businesshours
            fgEventSets.push(key ? props.fgEventSegs : NO_SEGS); // don't include fg all-resource segs
            bgEventSets.push(props.bgEventSegs);
            eventDrags.push(props.eventDrag);
            eventResizes.push(props.eventResize);
            eventSelection = eventSelection || props.eventSelection;
        }
        return {
            dateSelectionSegs: this.joinDateSelection.apply(this, [resourceDayTable].concat(dateSelectionSets)),
            businessHourSegs: this.joinBusinessHours.apply(this, [resourceDayTable].concat(businessHoursSets)),
            fgEventSegs: this.joinFgEvents.apply(this, [resourceDayTable].concat(fgEventSets)),
            bgEventSegs: this.joinBgEvents.apply(this, [resourceDayTable].concat(bgEventSets)),
            eventDrag: this.joinEventDrags.apply(this, [resourceDayTable].concat(eventDrags)),
            eventResize: this.joinEventResizes.apply(this, [resourceDayTable].concat(eventResizes)),
            eventSelection: eventSelection
        };
    };
    VResourceJoiner.prototype.joinSegs = function (resourceDayTable) {
        var segGroups = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            segGroups[_i - 1] = arguments[_i];
        }
        var resourceCnt = resourceDayTable.resources.length;
        var transformedSegs = [];
        for (var i = 0; i < resourceCnt; i++) {
            for (var _a = 0, _b = segGroups[i]; _a < _b.length; _a++) {
                var seg = _b[_a];
                transformedSegs.push.apply(transformedSegs, this.transformSeg(seg, resourceDayTable, i));
            }
            for (var _c = 0, _d = segGroups[resourceCnt]; _c < _d.length; _c++) { // one beyond. the all-resource
                var seg = _d[_c];
                transformedSegs.push.apply(// one beyond. the all-resource
                transformedSegs, this.transformSeg(seg, resourceDayTable, i));
            }
        }
        return transformedSegs;
    };
    /*
    for expanding non-resource segs to all resources.
    only for public use.
    no memoizing.
    */
    VResourceJoiner.prototype.expandSegs = function (resourceDayTable, segs) {
        var resourceCnt = resourceDayTable.resources.length;
        var transformedSegs = [];
        for (var i = 0; i < resourceCnt; i++) {
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                transformedSegs.push.apply(transformedSegs, this.transformSeg(seg, resourceDayTable, i));
            }
        }
        return transformedSegs;
    };
    VResourceJoiner.prototype.joinInteractions = function (resourceDayTable) {
        var interactions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interactions[_i - 1] = arguments[_i];
        }
        var resourceCnt = resourceDayTable.resources.length;
        var affectedInstances = {};
        var transformedSegs = [];
        var isEvent = false;
        var sourceSeg = null;
        for (var i = 0; i < resourceCnt; i++) {
            var interaction = interactions[i];
            if (interaction) {
                for (var _a = 0, _b = interaction.segs; _a < _b.length; _a++) {
                    var seg = _b[_a];
                    transformedSegs.push.apply(transformedSegs, this.transformSeg(seg, resourceDayTable, i) // TODO: templateify Interaction::segs
                    );
                }
                __assign(affectedInstances, interaction.affectedInstances);
                isEvent = isEvent || interaction.isEvent;
                sourceSeg = sourceSeg || interaction.sourceSeg;
            }
            if (interactions[resourceCnt]) { // one beyond. the all-resource
                for (var _c = 0, _d = interactions[resourceCnt].segs; _c < _d.length; _c++) {
                    var seg = _d[_c];
                    transformedSegs.push.apply(transformedSegs, this.transformSeg(seg, resourceDayTable, i) // TODO: templateify Interaction::segs
                    );
                }
            }
        }
        return {
            affectedInstances: affectedInstances,
            segs: transformedSegs,
            isEvent: isEvent,
            sourceSeg: sourceSeg
        };
    };
    return VResourceJoiner;
}());

/*
doesn't accept grouping
*/
function flattenResources(resourceStore, orderSpecs) {
    return buildRowNodes(resourceStore, [], orderSpecs, false, {}, true)
        .map(function (node) {
        return node.resource;
    });
}
function buildRowNodes(resourceStore, groupSpecs, orderSpecs, isVGrouping, expansions, expansionDefault) {
    var complexNodes = buildHierarchy(resourceStore, isVGrouping ? -1 : 1, groupSpecs, orderSpecs);
    var flatNodes = [];
    flattenNodes(complexNodes, flatNodes, isVGrouping, [], 0, expansions, expansionDefault);
    return flatNodes;
}
function flattenNodes(complexNodes, res, isVGrouping, rowSpans, depth, expansions, expansionDefault) {
    for (var i = 0; i < complexNodes.length; i++) {
        var complexNode = complexNodes[i];
        var group = complexNode.group;
        if (group) {
            if (isVGrouping) {
                var firstRowIndex = res.length;
                var rowSpanIndex = rowSpans.length;
                flattenNodes(complexNode.children, res, isVGrouping, rowSpans.concat(0), depth, expansions, expansionDefault);
                if (firstRowIndex < res.length) {
                    var firstRow = res[firstRowIndex];
                    var firstRowSpans = firstRow.rowSpans = firstRow.rowSpans.slice();
                    firstRowSpans[rowSpanIndex] = res.length - firstRowIndex;
                }
            }
            else {
                var id = group.spec.field + ':' + group.value;
                var isExpanded = expansions[id] != null ? expansions[id] : expansionDefault;
                res.push({ id: id, group: group, isExpanded: isExpanded });
                if (isExpanded) {
                    flattenNodes(complexNode.children, res, isVGrouping, rowSpans, depth + 1, expansions, expansionDefault);
                }
            }
        }
        else if (complexNode.resource) {
            var id = complexNode.resource.id;
            var isExpanded = expansions[id] != null ? expansions[id] : expansionDefault;
            res.push({
                id: id,
                rowSpans: rowSpans,
                depth: depth,
                isExpanded: isExpanded,
                hasChildren: Boolean(complexNode.children.length),
                resource: complexNode.resource,
                resourceFields: complexNode.resourceFields
            });
            if (isExpanded) {
                flattenNodes(complexNode.children, res, isVGrouping, rowSpans, depth + 1, expansions, expansionDefault);
            }
        }
    }
}
function buildHierarchy(resourceStore, maxDepth, groupSpecs, orderSpecs) {
    var resourceNodes = buildResourceNodes(resourceStore, orderSpecs);
    var builtNodes = [];
    for (var resourceId in resourceNodes) {
        var resourceNode = resourceNodes[resourceId];
        if (!resourceNode.resource.parentId) {
            insertResourceNode(resourceNode, builtNodes, groupSpecs, 0, maxDepth, orderSpecs);
        }
    }
    return builtNodes;
}
function buildResourceNodes(resourceStore, orderSpecs) {
    var nodeHash = {};
    for (var resourceId in resourceStore) {
        var resource = resourceStore[resourceId];
        nodeHash[resourceId] = {
            resource: resource,
            resourceFields: buildResourceFields(resource),
            children: []
        };
    }
    for (var resourceId in resourceStore) {
        var resource = resourceStore[resourceId];
        if (resource.parentId) {
            var parentNode = nodeHash[resource.parentId];
            if (parentNode) {
                insertResourceNodeInSiblings(nodeHash[resourceId], parentNode.children, orderSpecs);
            }
        }
    }
    return nodeHash;
}
function insertResourceNode(resourceNode, nodes, groupSpecs, depth, maxDepth, orderSpecs) {
    if (groupSpecs.length && (maxDepth === -1 || depth <= maxDepth)) {
        var groupNode = ensureGroupNodes(resourceNode, nodes, groupSpecs[0]);
        insertResourceNode(resourceNode, groupNode.children, groupSpecs.slice(1), depth + 1, maxDepth, orderSpecs);
    }
    else {
        insertResourceNodeInSiblings(resourceNode, nodes, orderSpecs);
    }
}
function ensureGroupNodes(resourceNode, nodes, groupSpec) {
    var groupValue = resourceNode.resourceFields[groupSpec.field];
    var groupNode;
    var newGroupIndex;
    // find an existing group that matches, or determine the position for a new group
    if (groupSpec.order) {
        for (newGroupIndex = 0; newGroupIndex < nodes.length; newGroupIndex++) {
            var node = nodes[newGroupIndex];
            if (node.group) {
                var cmp = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["flexibleCompare"])(groupValue, node.group.value) * groupSpec.order;
                if (cmp === 0) {
                    groupNode = node;
                    break;
                }
                else if (cmp < 0) {
                    break;
                }
            }
        }
    }
    else { // the groups are unordered
        for (newGroupIndex = 0; newGroupIndex < nodes.length; newGroupIndex++) {
            var node = nodes[newGroupIndex];
            if (node.group && groupValue === node.group.value) {
                groupNode = node;
                break;
            }
        }
    }
    if (!groupNode) {
        groupNode = {
            group: {
                value: groupValue,
                spec: groupSpec
            },
            children: []
        };
        nodes.splice(newGroupIndex, 0, groupNode);
    }
    return groupNode;
}
function insertResourceNodeInSiblings(resourceNode, siblings, orderSpecs) {
    var i;
    for (i = 0; i < siblings.length; i++) {
        var cmp = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compareByFieldSpecs"])(siblings[i].resourceFields, resourceNode.resourceFields, orderSpecs);
        if (cmp > 0) { // went 1 past. insert at i
            break;
        }
    }
    siblings.splice(i, 0, resourceNode);
}
function buildResourceFields(resource) {
    var obj = __assign({}, resource.extendedProps, resource.ui, resource);
    delete obj.ui;
    delete obj.extendedProps;
    return obj;
}
function isGroupsEqual(group0, group1) {
    return group0.spec === group1.spec && group0.value === group1.value;
}

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    reducers: [resourcesReducers],
    eventDefParsers: [parseEventDef],
    isDraggableTransformers: [transformIsDraggable],
    eventDragMutationMassagers: [massageEventDragMutation],
    eventDefMutationAppliers: [applyEventDefMutation],
    dateSelectionTransformers: [transformDateSelectionJoin],
    datePointTransforms: [transformDatePoint],
    dateSpanTransforms: [transformDateSpan],
    viewPropsTransformers: [ResourceDataAdder, ResourceEventConfigAdder],
    isPropsValid: isPropsValidWithResources,
    externalDefTransforms: [transformExternalDef],
    eventResizeJoinTransforms: [transformEventResizeJoin],
    viewContainerModifiers: [injectLicenseWarning],
    eventDropTransformers: [transformEventDrop],
    optionChangeHandlers: optionChangeHandlers
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "3D42":
/*!*****************************************************************************!*\
  !*** ./src/app/application/calendar/month-ticket/month-ticket.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MonthTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthTicketComponent", function() { return MonthTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _demo_utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../demo-utils/colors */ "qwtT");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "NAv5");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ticket_reschedule_popup_ticket_reschedule_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ticket-reschedule-popup/ticket-reschedule-popup.component */ "uOhu");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/customer.service */ "0zL+");
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/calendar.service */ "3WFG");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/ticket.service */ "KPvW");
/* harmony import */ var _services_engineer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/engineer.service */ "+MZO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_userlog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/userlog.service */ "V05N");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services */ "o0su");
/* harmony import */ var _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/genicprofile.service */ "bU6e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../demo-utils/calendar-header.component */ "Ynfx");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-draggable-droppable */ "3x2b");
/* harmony import */ var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */ "X7qY");


























const _c0 = ["modalTender"];
const _c1 = ["viewmodalContent"];
function MonthTicketComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-datepicker", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function MonthTicketComponent_div_41_Template_ngb_datepicker_select_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onDateSelect($event); })("navigate", function MonthTicketComponent_div_41_Template_ngb_datepicker_navigate_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.date = $event.next; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Awarded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Require Attention");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "To Participate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Not Participating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Upcoming SiteSurvey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Inprogress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "CLOSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "OVERDUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resource");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_ng_template_55_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_ng_template_55_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_55_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const day_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.monthcellvisitslist(day_r23.events[0].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", day_r23.badgeTotal, " Visits ");
} }
function MonthTicketComponent_ng_template_55_div_6_div_6_a_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
} }
function MonthTicketComponent_ng_template_55_div_6_div_6_a_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 70);
} }
function MonthTicketComponent_ng_template_55_div_6_div_6_a_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 72);
} }
function MonthTicketComponent_ng_template_55_div_6_div_6_a_1_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 106);
} }
function MonthTicketComponent_ng_template_55_div_6_div_6_a_1_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 107);
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", ctx_r41.currentUser.Engineer, " not assigne yet!");
} }
function MonthTicketComponent_ng_template_55_div_6_div_6_a_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", t_r43.EngineerName, "");
} }
function MonthTicketComponent_ng_template_55_div_6_div_6_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_55_div_6_div_6_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const x_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r44.openpopup(x_r34.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthTicketComponent_ng_template_55_div_6_div_6_a_1_i_3_Template, 1, 0, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthTicketComponent_ng_template_55_div_6_div_6_a_1_i_4_Template, 1, 0, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthTicketComponent_ng_template_55_div_6_div_6_a_1_i_5_Template, 1, 0, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MonthTicketComponent_ng_template_55_div_6_div_6_a_1_i_14_Template, 1, 0, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MonthTicketComponent_ng_template_55_div_6_div_6_a_1_i_15_Template, 1, 1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MonthTicketComponent_ng_template_55_div_6_div_6_a_1_div_19_Template, 2, 1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r34.meta.Priority === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r34.meta.Priority === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r34.meta.Priority === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r34.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r34.title.substring(0, 15), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r34.meta.Subject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r34.meta.Status === "CLOSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r34.meta.TicketTeams.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", x_r34.meta.TicketTeams);
} }
function MonthTicketComponent_ng_template_55_div_6_div_6_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_55_div_6_div_6_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const x_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r48.opentenderpopup(x_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r34.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 2, x_r34.start, "h:mm a"));
} }
function MonthTicketComponent_ng_template_55_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthTicketComponent_ng_template_55_div_6_div_6_a_1_Template, 20, 9, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MonthTicketComponent_ng_template_55_div_6_div_6_a_2_Template, 10, 5, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("calendar-ticket-status status-", x_r34.meta.StatusTemp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r34.meta.IsTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !x_r34.meta.IsTicket);
} }
function MonthTicketComponent_ng_template_55_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_55_div_6_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.monthcellvisitslistclose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MonthTicketComponent_ng_template_55_div_6_div_6_Template, 3, 5, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "agent-row-inner-", day_r23.events[0].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r23.events);
} }
function MonthTicketComponent_ng_template_55_small_7_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
} }
function MonthTicketComponent_ng_template_55_small_7_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 70);
} }
function MonthTicketComponent_ng_template_55_small_7_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 72);
} }
function MonthTicketComponent_ng_template_55_small_7_div_1_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 106);
} }
function MonthTicketComponent_ng_template_55_small_7_div_1_i_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 107);
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", ctx_r61.currentUser.Engineer, " not assigne yet!");
} }
function MonthTicketComponent_ng_template_55_small_7_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", t_r63.EngineerName, "");
} }
function MonthTicketComponent_ng_template_55_small_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_55_small_7_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const day_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).day; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.openpopup(day_r23.events[0].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthTicketComponent_ng_template_55_small_7_div_1_i_4_Template, 1, 0, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthTicketComponent_ng_template_55_small_7_div_1_i_5_Template, 1, 0, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MonthTicketComponent_ng_template_55_small_7_div_1_i_6_Template, 1, 0, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MonthTicketComponent_ng_template_55_small_7_div_1_i_15_Template, 1, 0, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MonthTicketComponent_ng_template_55_small_7_div_1_i_16_Template, 1, 1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MonthTicketComponent_ng_template_55_small_7_div_1_div_20_Template, 2, 1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).day;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.events[0].meta.Priority === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.events[0].meta.Priority === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.events[0].meta.Priority === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", day_r23.events[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", day_r23.events[0].title.substring(0, 15), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r23.events[0].meta.Subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.events[0].meta.Status === "CLOSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.events[0].meta.TicketTeams.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r23.events[0].meta.TicketTeams);
} }
function MonthTicketComponent_ng_template_55_small_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_55_small_7_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const day_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).day; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.opentenderpopup(day_r23.events[0]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).day;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r23.events[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 2, day_r23.events[0].start, "h:mm a"));
} }
function MonthTicketComponent_ng_template_55_small_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthTicketComponent_ng_template_55_small_7_div_1_Template, 21, 9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MonthTicketComponent_ng_template_55_small_7_div_2_Template, 11, 5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("calendar-ticket-status status-", day_r23.events[0].meta.StatusTemp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.events[0].meta.IsTicket === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.events[0].meta.IsTicket === false);
} }
function MonthTicketComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthTicketComponent_ng_template_55_span_4_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthTicketComponent_ng_template_55_span_5_Template, 2, 1, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MonthTicketComponent_ng_template_55_div_6_Template, 7, 2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MonthTicketComponent_ng_template_55_small_7_Template, 3, 5, "small", 84);
} if (rf & 2) {
    const day_r23 = ctx.day;
    const locale_r24 = ctx.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 5, day_r23.date, "monthViewDayNumber", locale_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.badgeTotal === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.badgeTotal > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.badgeTotal > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r23.events.length > 0);
} }
function MonthTicketComponent_ng_template_57_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
} }
function MonthTicketComponent_ng_template_57_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 70);
} }
function MonthTicketComponent_ng_template_57_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 72);
} }
function MonthTicketComponent_ng_template_57_div_1_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 106);
} }
function MonthTicketComponent_ng_template_57_div_1_i_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 107);
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", ctx_r81.currentUser.Engineer, " not assigne yet!");
} }
function MonthTicketComponent_ng_template_57_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", t_r83.EngineerName, "");
} }
function MonthTicketComponent_ng_template_57_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_57_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const weekEvent_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().weekEvent; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.openpopup(weekEvent_r73.event.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthTicketComponent_ng_template_57_div_1_i_4_Template, 1, 0, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthTicketComponent_ng_template_57_div_1_i_5_Template, 1, 0, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MonthTicketComponent_ng_template_57_div_1_i_6_Template, 1, 0, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MonthTicketComponent_ng_template_57_div_1_i_15_Template, 1, 0, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MonthTicketComponent_ng_template_57_div_1_i_16_Template, 1, 1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MonthTicketComponent_ng_template_57_div_1_div_20_Template, 2, 1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weekEvent_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().weekEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", weekEvent_r73.event.meta.Priority === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", weekEvent_r73.event.meta.Priority === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", weekEvent_r73.event.meta.Priority === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", weekEvent_r73.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", weekEvent_r73.event.title.substring(0, 15), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](weekEvent_r73.event.meta.Subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", weekEvent_r73.event.meta.Status === "CLOSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", weekEvent_r73.event.meta.TicketTeams.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", weekEvent_r73.event.meta.TicketTeams);
} }
function MonthTicketComponent_ng_template_57_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_57_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const weekEvent_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().weekEvent; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.opentenderpopup(weekEvent_r73.event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weekEvent_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().weekEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](weekEvent_r73.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](weekEvent_r73.event.meta.Subject);
} }
function MonthTicketComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthTicketComponent_ng_template_57_div_1_Template, 21, 9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MonthTicketComponent_ng_template_57_div_2_Template, 10, 2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weekEvent_r73 = ctx.weekEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("calendar-ticket-status status-", weekEvent_r73.event.meta.StatusTemp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", weekEvent_r73.event.meta.IsTicket === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", weekEvent_r73.event.meta.IsTicket === false);
} }
function MonthTicketComponent_ng_template_59_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
} }
function MonthTicketComponent_ng_template_59_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 70);
} }
function MonthTicketComponent_ng_template_59_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 72);
} }
function MonthTicketComponent_ng_template_59_div_1_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 106);
} }
function MonthTicketComponent_ng_template_59_div_1_i_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 107);
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", ctx_r100.currentUser.Engineer, " not assigne yet!");
} }
function MonthTicketComponent_ng_template_59_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", t_r102.EngineerName, "");
} }
function MonthTicketComponent_ng_template_59_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_59_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const dayEvent_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dayEvent; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.openpopup(dayEvent_r92.event.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthTicketComponent_ng_template_59_div_1_i_4_Template, 1, 0, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthTicketComponent_ng_template_59_div_1_i_5_Template, 1, 0, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MonthTicketComponent_ng_template_59_div_1_i_6_Template, 1, 0, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MonthTicketComponent_ng_template_59_div_1_i_15_Template, 1, 0, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MonthTicketComponent_ng_template_59_div_1_i_16_Template, 1, 1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MonthTicketComponent_ng_template_59_div_1_div_20_Template, 2, 1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dayEvent_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dayEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dayEvent_r92.event.meta.Priority === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dayEvent_r92.event.meta.Priority === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dayEvent_r92.event.meta.Priority === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", dayEvent_r92.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dayEvent_r92.event.title.substring(0, 15), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dayEvent_r92.event.meta.Subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dayEvent_r92.event.meta.Status === "CLOSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dayEvent_r92.event.meta.TicketTeams.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", dayEvent_r92.event.meta.TicketTeams);
} }
function MonthTicketComponent_ng_template_59_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_59_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const dayEvent_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dayEvent; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.opentenderpopup(dayEvent_r92.event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dayEvent_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dayEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dayEvent_r92.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dayEvent_r92.event.meta.Subject);
} }
function MonthTicketComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthTicketComponent_ng_template_59_div_1_Template, 21, 9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MonthTicketComponent_ng_template_59_div_2_Template, 10, 2, "div", 50);
} if (rf & 2) {
    const dayEvent_r92 = ctx.dayEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("calendar-ticket-status status-", dayEvent_r92.event.meta.StatusTemp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dayEvent_r92.event.meta.IsTicket === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dayEvent_r92.event.meta.IsTicket === false);
} }
function MonthTicketComponent_mwl_calendar_month_view_63_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventTimesChanged", function MonthTicketComponent_mwl_calendar_month_view_63_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.eventDropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r10.viewDate)("events", ctx_r10.events)("activeDayIsOpen", ctx_r10.activeDayIsOpen)("refresh", ctx_r10.refresh)("cellTemplate", _r4);
} }
function MonthTicketComponent_mwl_calendar_week_view_64_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventTimesChanged", function MonthTicketComponent_mwl_calendar_week_view_64_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.eventDropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r11.viewDate)("events", ctx_r11.events)("refresh", ctx_r11.refresh)("eventTemplate", _r6);
} }
function MonthTicketComponent_mwl_calendar_day_view_65_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventTimesChanged", function MonthTicketComponent_mwl_calendar_day_view_65_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.eventDropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r12.viewDate)("events", ctx_r12.events)("refresh", ctx_r12.refresh)("eventTemplate", _r8);
} }
function MonthTicketComponent_p_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No unschedule ", ctx_r13.currentUser.Ticket, "");
} }
function MonthTicketComponent_p_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unschedule this.currentUser.Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_h6_71_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_h6_71_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const event_r117 = ctx.$implicit; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.openpopup(event_r117.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", event_r117.color.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r117.title, " ");
} }
function MonthTicketComponent_ng_template_72_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Visit | One-Off ", ctx_r121.currentUser.Ticket, "");
} }
function MonthTicketComponent_ng_template_72_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Visit | Recurring ", ctx_r122.currentUser.Ticket, "");
} }
function MonthTicketComponent_ng_template_72_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_72_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r133.openeditticket(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_ng_template_72_em_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r135 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r135, " ");
} }
function MonthTicketComponent_ng_template_72_i_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
} }
function MonthTicketComponent_ng_template_72_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " High Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_ng_template_72_i_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 70);
} }
function MonthTicketComponent_ng_template_72_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Medium Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_ng_template_72_i_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 72);
} }
function MonthTicketComponent_ng_template_72_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Low Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_ng_template_72_div_71_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_ng_template_72_div_71_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Foreman");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthTicketComponent_ng_template_72_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MonthTicketComponent_ng_template_72_div_71_span_2_Template, 2, 0, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthTicketComponent_ng_template_72_div_71_span_3_Template, 2, 0, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r136.EngineerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r136.Type === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r136.Type === 2);
} }
function MonthTicketComponent_ng_template_72_tr_84_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itm_r139.ItemQuantity);
} }
function MonthTicketComponent_ng_template_72_tr_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthTicketComponent_ng_template_72_tr_84_div_4_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itm_r139.ItemName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itm_r139.Type === "Product");
} }
function MonthTicketComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthTicketComponent_ng_template_72_span_3_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthTicketComponent_ng_template_72_span_4_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MonthTicketComponent_ng_template_72_button_7_Template, 3, 0, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_72_Template_button_click_8_listener() { const close_r120 = ctx.close; return close_r120(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MonthTicketComponent_ng_template_72_em_19_Template, 3, 1, "em", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Direction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MonthTicketComponent_ng_template_72_i_30_Template, 1, 0, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MonthTicketComponent_ng_template_72_span_31_Template, 2, 0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MonthTicketComponent_ng_template_72_i_32_Template, 1, 0, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MonthTicketComponent_ng_template_72_span_33_Template, 2, 0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MonthTicketComponent_ng_template_72_i_34_Template, 1, 0, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MonthTicketComponent_ng_template_72_span_35_Template, 2, 0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "generic-ticket-status", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function MonthTicketComponent_ng_template_72_Template_generic_ticket_status_StatusChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r143.ticketservice.formData.Status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, MonthTicketComponent_ng_template_72_div_71_Template, 4, 3, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Line Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "table", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Product/Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "QTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, MonthTicketComponent_ng_template_72_tr_84_Template, 5, 2, "tr", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Client Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "table", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_72_Template_a_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r145.detailscustomer(ctx_r145.ticketservice.formData.Customers); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Property ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.ticketservice.formData.TicketType === "One-Off Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.ticketservice.formData.TicketType === "Recurring Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.ticketservice.formData.Status === "UPCOMING" || ctx_r17.ticketservice.formData.Status === "OVERDUE" || ctx_r17.ticketservice.formData.Status === "UNSCHEDULED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.ticketservice.formData.CustomerCompanyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.ticketservice.formData.CustomerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.ticketservice.formData.CustomerAddress == null ? null : ctx_r17.ticketservice.formData.CustomerAddress.split(","));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 30, ctx_r17.ticketservice.formData.OneOffAppointmentDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](24, 32, ctx_r17.ticketservice.formData.AppointmentStart, "h:mm a", "+0000"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](25, 36, ctx_r17.ticketservice.formData.AppointmentEnd, "h:mm a", "+0000"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.google.com/maps/place/", ctx_r17.ticketservice.formData.CustomerAddress, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.ticketservice.formData.Priority === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.ticketservice.formData.Priority === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.ticketservice.formData.Priority === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.ticketservice.formData.Priority === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.ticketservice.formData.Priority === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.ticketservice.formData.Priority === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", ctx_r17.ticketservice.formData.Status)("OverDueDays", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.ticketservice.formData.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.ticketservice.formData.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.ticketservice.formData.TicketId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.ticketservice.formData.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.ticketservice.formData.TicketTeams);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.ticketservice.formData.TicketItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.ticketservice.formData.CustomerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.ticketservice.formData.CustomerEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:@", ctx_r17.ticketservice.formData.CustomerEmail, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.ticketservice.formData.CustomerAddress, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.google.com/maps/place/", ctx_r17.ticketservice.formData.CustomerAddress, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.ticketservice.formData.InternalNoteDescription, " ");
} }
function MonthTicketComponent_ng_template_74_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tender Closing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Buyer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tender Ref No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tender Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx_r147.tenderData.meta.data.TenderClosing), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 11, ctx_r147.tenderData.meta.data.TenderClosing, "h:mm a", "+0000"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tenderstatus ", ctx_r147.tenderData.meta.Status.toString().replace(" ", "").replace(" ", ""), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r147.tenderData.meta.data.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r147.tenderData.meta.data.Buyer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r147.tenderData.meta.data.TenderRefNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r147.tenderData.meta.data.TenderName);
} }
function MonthTicketComponent_ng_template_74_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SiteWalk Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Buyer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tender Ref No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tender Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "POC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, ctx_r148.tenderData.meta.data.SitewalkDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 13, ctx_r148.tenderData.meta.data.SitewalkDate, "h:mm a", "+0000"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tenderstatus ", ctx_r148.tenderData.meta.Status.toString().replace(" ", "").replace(" ", ""), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r148.tenderData.meta.data.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r148.tenderData.meta.data.Buyer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r148.tenderData.meta.data.TenderRefNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r148.tenderData.meta.data.TenderName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r148.tenderData.meta.data.SitewalkAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r148.tenderData.meta.data.SitewalkPOC);
} }
function MonthTicketComponent_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_ng_template_74_Template_button_click_6_listener() { const close_r146 = ctx.close; return close_r146(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MonthTicketComponent_ng_template_74_table_11_Template, 30, 15, "table", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MonthTicketComponent_ng_template_74_table_12_Template, 40, 17, "table", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.tenderData.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.tenderData.title === "Tender Closing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.tenderData.title === "SiteWalk");
} }
class MonthTicketComponent {
    constructor(titleService, modal, customerservice, calendarservice, ticketservice, engineerservice, router, dialog, toastr, logService, loginservice, genicprofileservice) {
        this.titleService = titleService;
        this.modal = modal;
        this.customerservice = customerservice;
        this.calendarservice = calendarservice;
        this.ticketservice = ticketservice;
        this.engineerservice = engineerservice;
        this.router = router;
        this.dialog = dialog;
        this.toastr = toastr;
        this.logService = logService;
        this.loginservice = loginservice;
        this.genicprofileservice = genicprofileservice;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarView"];
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarView"].Month;
        this.viewDate = new Date();
        this.activeDayIsOpen = false;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.OneOffIsVisible = true;
        this.Iscalendarshow = false;
        this.IsTeamShow = false;
        this.currentUTCDate = new Date();
        this.monthcellvisits = false;
        this.Islegendshow = false;
        this.IsTenderlegendshow = false;
        this.localdate1 = new Date(Date.UTC(this.currentUTCDate.getFullYear(), this.currentUTCDate.getMonth(), this.currentUTCDate.getDate(), 0, 0, 0));
        this.minDate = {
            year: Number(this.currentUTCDate.getFullYear()),
            month: Number(this.currentUTCDate.getMonth() + 1),
            day: Number(this.currentUTCDate.getDate())
        };
        this.maxDate = {
            year: Number(this.currentUTCDate.getFullYear()) + 2,
            month: Number(this.currentUTCDate.getMonth() + 1),
            day: Number(this.currentUTCDate.getDate())
        };
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
        // console.log('dayClicked');
    }
    eventDropped({ event, newStart, newEnd, allDay }) {
        const externalIndex = this.externalEvents.indexOf(event);
        if (typeof allDay !== 'undefined') {
            event.allDay = allDay;
        }
        if (externalIndex > -1) {
            this.externalEvents.splice(externalIndex, 1);
            this.events.push(event);
        }
        event.start = newStart;
        if (newEnd) {
            event.end = newEnd;
        }
        if (this.view === 'month') {
            this.viewDate = newStart;
            this.activeDayIsOpen = true;
        }
        this.events = [...this.events];
        if (!this.ticketservice.formData.OneOffScheduled) {
            this.ticketservice.formData.OneOffAppointmentDate = event.start.toLocaleString();
            this.ticketservice.formData.Id = event.id.toString();
            const sdate = this.utcdate(JSON.stringify(event.start).slice(1, -1));
            const edate = this.utcdate(JSON.stringify(event.end).slice(1, -1));
            this.ticketservice.formData.AppointmentStart = sdate;
            this.ticketservice.formData.AppointmentEnd = edate;
            this.ticketservice.formData.OneOffStartTime = (sdate.split('T')[1]).slice(0, -1).toString();
            this.ticketservice.formData.OneOffEndTime = (edate.split('T')[1]).slice(0, -1).toString();
        }
        setTimeout(() => {
            this.DateDragAction();
        }, 200);
    }
    externalDrop(event) {
        if (this.externalEvents.indexOf(event) === -1) {
            this.events = this.events.filter(iEvent => iEvent !== event);
            this.externalEvents.push(event);
            this.DateDragActionExternal(event.id.toString());
        }
        // console.log('externalDrop');
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter(event => event !== eventToDelete);
        // console.log('deleteEvent');
    }
    setView(view) {
        this.view = view;
        // console.log('setView');
    }
    ngOnInit() {
        this.titleService.setTitle('Calendar Month | Genic Solution');
        this.genicprofileservice.TicketFilter.IsReady = false;
        this.genicprofileservice.TicketFilter.IsReadyQuote = false;
        this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
        this.externalEvents = [];
        this.ticketservice.Ticketlist = [];
        this.ticketservice.TicketTeamList = [];
        this.engineerservice.Engineerlist = [];
        this.RefreshCalendar();
    }
    DateDragAction() {
        this.openpopup(this.ticketservice.formData.Id);
    }
    DateDragActionExternal(Id) {
    }
    RefreshCalendar() {
        this.ticketservice.Ticketlist = [];
        this.ticketservice.refreshCalendarTicketList(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.TicketUnscheduledList = this.ticketservice.Ticketlist = response.result;
                    this.TicketUnscheduledList = [];
                    this.TicketScheduledList = [];
                    this.TicketUnscheduledList = this.ticketservice.Ticketlist.filter(x => x.OneOffScheduled === true && x.Status !== 'CANCELLED');
                    this.externalEvents = [];
                    this.TicketUnscheduledList.forEach(element1 => {
                        this.externalEvents.push({
                            id: element1.Id,
                            start: new Date(),
                            end: new Date(),
                            title: element1.CustomerCompanyName,
                            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].blue,
                            resizable: { beforeStart: false, afterEnd: false },
                            draggable: true,
                            meta: { Priority: this.ticketservice.formData.Priority, Status: this.ticketservice.formData.Status,
                                StatusTemp: this.ticketservice.formData.Status,
                                TicketTeams: this.ticketservice.formData.TicketTeams, Subject: this.ticketservice.formData.Title, IsTicket: true }
                        });
                    });
                    this.TicketScheduledList = this.ticketservice.Ticketlist.filter(x => x.OneOffScheduled === false && x.Status !== 'CANCELLED');
                    this.events = [];
                    this.TicketScheduledList.forEach(element2 => {
                        this.events.push({
                            id: element2.Id,
                            start: this.localdate(element2.AppointmentStart),
                            end: this.localdate(element2.AppointmentEnd),
                            title: element2.CustomerCompanyName,
                            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].blue,
                            resizable: { beforeStart: false, afterEnd: false },
                            draggable: true,
                            meta: { Priority: element2.Priority, Status: element2.Status, StatusTemp: element2.Status,
                                TicketTeams: element2.TicketTeams, Subject: element2.Title, IsTicket: true }
                        });
                    });
                    // this.tenderservice.getTenderListForCalendar(this.currentUser.Token).subscribe( tenderres => {
                    //   if (tenderres) { const tenderresponse = tenderres as any;
                    //                    if (tenderresponse.Message === 'success') {
                    //                       tenderresponse.item1.forEach(el => {
                    //                         this.events.push({
                    //                           id: el.Id,
                    //                           start: this.localdate(el.TenderClosing),
                    //                           end: this.localdate(el.TenderClosing),
                    //                           title: 'Tender Closing',
                    //                           color: colors.blue,
                    //                           resizable: { beforeStart: false, afterEnd: false },
                    //                           draggable: true,
                    //                           meta: { data: el, Status: el.Status , StatusTemp: el.StatusTemp, IsTicket: false }
                    //                         });
                    //                       });
                    //                       tenderresponse.item2.forEach(el => {
                    //                         this.events.push({
                    //                           id: el.Id,
                    //                           start: this.localdate(el.SitewalkDate),
                    //                           end: this.localdate(el.SitewalkDate),
                    //                           title: 'SiteWalk',
                    //                           color: colors.blue,
                    //                           resizable: { beforeStart: false, afterEnd: false },
                    //                           draggable: true,
                    //                           meta: { data: el, Status: el.Status , StatusTemp: el.StatusTemp, IsTicket: false }
                    //                         });
                    //                       });
                    //                       this.refresh.next();
                    //               }
                    //   }}, error =>  console.log(error));
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    OneOffScheduledLater() {
        if (this.ticketservice.formData.OneOffScheduled === true) {
            this.OneOffIsVisible = false;
        }
        else {
            this.OneOffIsVisible = true;
        }
    }
    showcalendar() {
        if (this.Iscalendarshow) {
            this.Iscalendarshow = false;
        }
        else {
            this.Iscalendarshow = true;
        }
    }
    showlegendpopup() {
        if (this.Islegendshow) {
            this.Islegendshow = false;
        }
        else {
            this.Islegendshow = true;
        }
    }
    showtenderlegendpopup() {
        if (this.IsTenderlegendshow) {
            this.IsTenderlegendshow = false;
        }
        else {
            this.IsTenderlegendshow = true;
        }
    }
    onDateSelect(e) {
        this.Iscalendarshow = false;
        this.viewDate = new Date(e.year, e.month - 1, e.day, 0, 0, 0, 0);
    }
    localdate(locatdate) {
        let date = new Date(locatdate);
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    }
    utcdate(locatdate) {
        let date = new Date(locatdate);
        return JSON.stringify(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()))).slice(1, -1);
    }
    openpopup(id) {
        this.engineerservice.Engineerlist = [];
        this.ticketservice.getTicketById(this.currentUser.Token, id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.ticketservice.formData = response.result;
                    this.loadEngineerList();
                    this.modal.open(this.viewmodalContent, { size: 'lg' });
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    opentenderpopup(x) {
        this.tenderData = new Object();
        this.tenderData = x;
        this.modal.open(this.modalTender, { size: 'md' });
    }
    openeditticket() {
        this.modal.dismissAll();
        setTimeout(() => {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.width = '720px';
            dialogConfig.height = '720px';
            dialogConfig.data = {};
            this.dialog.open(_ticket_reschedule_popup_ticket_reschedule_popup_component__WEBPACK_IMPORTED_MODULE_7__["TicketReschedulePopupComponent"], dialogConfig).afterClosed().subscribe(res => {
                this.engineerservice.releseTemporaryEngineerFromTicket(this.ticketservice.formData.Id, this.currentUser.Token, 'revert').subscribe(res => {
                    this.RefreshCalendar();
                }, error => console.log(error));
            });
        }, 200);
    }
    detailscustomer(x) {
        this.modal.dismissAll();
        setTimeout(() => {
            this.customerservice.formData = Object.assign({}, x);
            this.router.navigate(['/customers/customer-details/']);
        }, 200);
    }
    loadEngineerList() {
        setTimeout(() => {
            let stime = this.ticketservice.formData.AppointmentStart.replace('-', '').replace('-', '');
            stime = stime.replace(':', '').replace(':', '').replace('T', '').replace('Z', '');
            let etime = this.ticketservice.formData.AppointmentEnd.replace('-', '').replace('-', '');
            etime = etime.replace(':', '').replace(':', '').replace('T', '').replace('Z', '');
            this.engineerservice.refrestUnallocatedTimeEngineerList(stime, etime, this.currentUser.Token);
            // console.log(this.ticketservice.formData);
        }, 200);
    }
    monthcellvisitslist(index) {
        let demoClasseslist = null;
        demoClasseslist = document.querySelectorAll('.agent-row-inner');
        demoClasseslist.forEach(element => {
            element.style.display = 'none';
        });
        let demoClasses = null;
        demoClasses = document.querySelectorAll('#agent-row-inner-' + index);
        demoClasses.forEach(element2 => {
            element2.style.display = 'block';
        });
    }
    monthcellvisitslistclose() {
        let demoClasseslist = null;
        demoClasseslist = document.querySelectorAll('.agent-row-inner');
        demoClasseslist.forEach(element => {
            element.style.display = 'none';
        });
    }
}
MonthTicketComponent.ɵfac = function MonthTicketComponent_Factory(t) { return new (t || MonthTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_calendar_service__WEBPACK_IMPORTED_MODULE_11__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_service__WEBPACK_IMPORTED_MODULE_12__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_engineer_service__WEBPACK_IMPORTED_MODULE_13__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userlog_service__WEBPACK_IMPORTED_MODULE_16__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_18__["GenicProfileService"])); };
MonthTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthTicketComponent, selectors: [["ng-component"]], viewQuery: function MonthTicketComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalTender = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewmodalContent = _t.first);
    } }, decls: 76, vars: 13, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid", "breadcud-kt-container"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__breadcrumbs-link"], [1, "kt-subheader__toolbar"], [1, "kt-subheader__wrapper"], [1, "new-quote-main-section"], [1, "kt-container", "kt-container--fluid"], [1, "new-requst-filter_form", "create-new-client-popup"], [1, "accordion", "accordion-solid"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-xs-12", "no-spacing"], [1, "col-lg-12", "left-enlarge"], ["id", "kt_portlet", 1, "kt-portlet"], [1, "kt-portlet__head"], [1, "col-sm-12", "col-md-12"], [1, "col-sm-5", "col-md-5", "col-lg-5"], [1, "btn"], [1, "flaticon-map-location"], [2, "font-size", "1.2rem", "font-weight", "500", "color", "#48465b"], [1, "col-sm-1", "col-md-1", "col-lg-1"], ["href", "javascript:;", 3, "click"], [1, "fa", "fa-calendar"], ["style", "position: absolute; z-index: 99999; background-color: white;", 4, "ngIf"], [1, "col-sm-6", "col-md-6", "col-lg-6"], [1, "kt-portlet__head-toolbar", 2, "float", "right"], ["href", "javascript:;", 1, "btn", 2, "display", "none", 3, "click"], ["title", "Tender Legend", "aria-hidden", "true", 1, "fa", "text-warning"], ["href", "javascript:;", 1, "btn", 3, "click"], ["title", "Legend", "aria-hidden", "true", 1, "fa", "text-warning"], ["style", "position: absolute; z-index: 99999; background-color: white;right: 0;", 4, "ngIf"], ["class", "btn btn-group", 4, "ngIf"], [1, "col-md-10"], ["customCellTemplate", ""], ["customCellWeekTemplate", ""], ["customCellDayTemplate", ""], [3, "view", "viewDate", "viewChange", "viewDateChange"], [3, "ngSwitch"], [3, "viewDate", "events", "activeDayIsOpen", "refresh", "cellTemplate", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventTemplate", "eventTimesChanged", 4, "ngSwitchCase"], [1, "col-md-2"], ["mwlDroppable", "", "dragOverClass", "drag-over", 1, "card", 3, "drop"], [1, "card-body"], [4, "ngIf"], ["mwlDraggable", "", "dragActiveClass", "drag-active", 4, "ngFor", "ngForOf"], ["viewmodalContent", ""], ["modalTender", ""], [2, "position", "absolute", "z-index", "99999", "background-color", "white"], ["name", "CalendarResourceData", 3, "select", "navigate"], [1, "kt-portlet"], [1, "table", "table-striped-", "table-bordered", "table-hover", "table-checkable", "dataTable", "no-footer", "dtr-inline"], [1, "calendar-ticket-status", "status-Submitted", 2, "color", "#000", "font-weight", "bold"], [1, "calendar-ticket-status", "status-Awarded", 2, "color", "#000", "font-weight", "bold"], [1, "calendar-ticket-status", "status-RequireAttention", 2, "color", "#000", "font-weight", "bold"], [1, "calendar-ticket-status", "status-ToParticipate", 2, "color", "#000", "font-weight", "bold"], [1, "calendar-ticket-status", "status-NotParticipating", 2, "color", "#000", "font-weight", "bold"], [1, "calendar-ticket-status", "status-UpcomingSiteSurvey", 2, "color", "#000", "font-weight", "bold"], [2, "position", "absolute", "z-index", "99999", "background-color", "white", "right", "0"], [1, "calendar-ticket-status", "status-UPCOMING", 2, "color", "#000", "font-weight", "bold"], [1, "col-sm-3"], ["title", "High Priority", 1, "fas", "fa-circle", "text-danger"], [1, "col-sm-9", 2, "text-align", "left"], [1, "calendar-ticket-status", "status-INPROGRESS", 2, "color", "#000", "font-weight", "bold"], ["title", "Medium Priority", 1, "fas", "fa-circle", "text-info"], [1, "calendar-ticket-status", "status-HOLD", 2, "color", "#000", "font-weight", "bold"], ["title", "Low Priority", 1, "fas", "fa-circle", "text-success"], [1, "calendar-ticket-status", "status-CLOSED", 2, "color", "#000", "font-weight", "bold"], [1, "fas", "fa-check-double", 2, "font-size", "12px"], [1, "calendar-ticket-status", "status-OVERDUE", 2, "color", "#000", "font-weight", "bold"], [1, "btn", "btn-group"], ["routerLink", "/calendar/month-tickets", "href", "javascript:;", 1, "btn", "btn-primary"], ["routerLink", "/calendar/month-resource", "href", "javascript:;", 1, "btn", "btn-secondary"], [1, "cal-cell-top"], [1, "cal-day-number"], ["class", "calendar-ticket-priority-visit", 4, "ngIf"], ["class", "calendar-ticket-priority-visit", 3, "click", 4, "ngIf"], ["class", "agent-row-inner", 3, "id", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "calendar-ticket-priority-visit"], [1, "calendar-ticket-priority-visit", 3, "click"], [1, "agent-row-inner", 3, "id"], [1, "close-btn"], [1, "agent-header", "clearfix"], [1, "agent-image-info"], [3, "class", 4, "ngFor", "ngForOf"], ["href", "javascript:;", 3, "click", 4, "ngIf"], [1, "col-sm-2", "col-md-2"], ["class", "fas fa-circle text-danger", "title", "High Priority", 4, "ngIf"], ["class", "fas fa-circle text-info", "title", "Medium Priority", 4, "ngIf"], ["class", "fas fa-circle text-success", "title", "Low Priority", 4, "ngIf"], [1, "col-sm-10", "col-md-10", 2, "padding", "0px"], [3, "title"], [1, "col-sm-10", "col-md-10"], ["class", "fas fa-check-double closed-text", 4, "ngIf"], ["class", "fa fa-user-times right-text", 3, "title", 4, "ngIf"], [1, "btooltipTeam"], [1, "fa", "fa-user", "text-info"], [1, "btooltipTeamtext"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-check-double", "closed-text"], [1, "fa", "fa-user-times", "right-text", 3, "title"], [3, "viewDate", "events", "activeDayIsOpen", "refresh", "cellTemplate", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventTemplate", "eventTimesChanged"], ["mwlDraggable", "", "dragActiveClass", "drag-active"], ["aria-hidden", "true", 1, "fa", "fa-plug"], [1, "row", "cus-model-header", 2, "margin", "0"], [1, "col-md-9"], [1, "modal-title", 2, "font-size", "2em", "color", "black", "font-weight", "600"], [1, "col-md-3"], [1, "btn-group", 2, "float", "right"], ["class", "btn btn-brand btn-sm text-white ", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "text-white", 3, "click"], ["aria-hidden", "true"], ["id", "month-1-modal", 1, "modal-body"], [1, "col-md-6", 2, "border-right", "1px solid #e1dfdf"], [1, "client-header"], [1, "client-address"], [1, "col-md-6", "client-header-appoinmenttime"], ["href", "javascript:;", "target", "_blank", 3, "href"], [1, "fas", "fa-map-marker", "text-success"], ["class", "text-danger", 4, "ngIf"], ["class", "text-info", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], [3, "Status", "OverDueDays", "StatusChange"], [1, "col-md-12", "col-sm-12"], [1, "details-tabs", "width100"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#dtab1", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#dtab2", 1, "nav-link"], ["data-toggle", "tab", "href", "#dtab3", 1, "nav-link"], [1, "tab-content"], ["id", "dtab1", 1, "tab-pane", "active"], [1, "row", "row-border"], [1, "client-info-title"], [1, "client-info-desc"], [1, "col-md-6", "col-sm-6"], ["class", "client-info-desc", 4, "ngFor", "ngForOf"], [1, "width100"], ["id", "dtab2", 1, "tab-pane", "fade"], [1, "fa", "fa-angle-double-right"], [3, "href"], [1, "fa", "fa-envelope"], ["colspan", "3"], ["target", "_blank", 3, "href"], ["id", "dtab3", 1, "tab-pane", "fade"], [1, "btn", "btn-brand", "btn-sm", "text-white", 3, "click"], [1, "la", "la-edit"], [1, "text-danger"], [1, "text-info"], [1, "text-success"], ["class", "kt-badge kt-badge--success kt-badge--inline kt-badge--pill", 4, "ngIf"], ["class", "kt-badge kt-badge--warning kt-badge--inline kt-badge--pill", 4, "ngIf"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "kt-badge--pill"], [1, "kt-badge", "kt-badge--warning", "kt-badge--inline", "kt-badge--pill"], ["id", "month-2-modal", 1, "modal-body"], ["class", "table table-bordered", "style", "font-size: 16px;", 4, "ngIf"], [1, "table", "table-bordered", 2, "font-size", "16px"], [1, "modal-tender-lable"]], template: function MonthTicketComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_Template_a_click_39_listener() { return ctx.showcalendar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MonthTicketComponent_div_41_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_Template_a_click_44_listener() { return ctx.showtenderlegendpopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Tender Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MonthTicketComponent_div_47_Template, 34, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTicketComponent_Template_a_click_48_listener() { return ctx.showlegendpopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Ticket Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, MonthTicketComponent_div_51_Template, 53, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MonthTicketComponent_div_52_Template, 5, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, MonthTicketComponent_ng_template_55_Template, 8, 9, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, MonthTicketComponent_ng_template_57_Template, 3, 5, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, MonthTicketComponent_ng_template_59_Template, 3, 5, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mwl-demo-utils-calendar-header", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewChange", function MonthTicketComponent_Template_mwl_demo_utils_calendar_header_viewChange_61_listener($event) { return ctx.view = $event; })("viewDateChange", function MonthTicketComponent_Template_mwl_demo_utils_calendar_header_viewDateChange_61_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, MonthTicketComponent_mwl_calendar_month_view_63_Template, 1, 5, "mwl-calendar-month-view", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, MonthTicketComponent_mwl_calendar_week_view_64_Template, 1, 4, "mwl-calendar-week-view", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, MonthTicketComponent_mwl_calendar_day_view_65_Template, 1, 4, "mwl-calendar-day-view", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function MonthTicketComponent_Template_div_drop_67_listener($event) { return ctx.externalDrop($event.dropData.event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, MonthTicketComponent_p_69_Template, 3, 1, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, MonthTicketComponent_p_70_Template, 3, 0, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, MonthTicketComponent_h6_71_Template, 4, 3, "h6", 51);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, MonthTicketComponent_ng_template_72_Template, 127, 40, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, MonthTicketComponent_ng_template_74_Template, 13, 3, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Iscalendarshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsTenderlegendshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Islegendshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.ResourceView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Day);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.externalEvents.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.externalEvents.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.externalEvents);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_20__["CalendarHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchCase"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_21__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepicker"], angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarMonthViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarWeekViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarDayViewComponent"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_21__["ɵb"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_22__["TicketStatusComponent"]], pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵi"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]], styles: [".box-item[_ngcontent-%COMP%] {width: 100%;z-index: 1000}\r\n.calendar-ticket-status[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .calendar-ticket-status[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .calendar-ticket-status[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {color: #000;}\r\n.calendar-ticket-status[_ngcontent-%COMP%] {padding: 2px;margin: 1px;border-radius: 2px;width: 100%;height: 100%; }\r\n.status-UPCOMING[_ngcontent-%COMP%] {background-color:rgba(174, 189, 212, 0.13);border: 2px solid#3C78D8;border-left: 5px solid#3C78D8;color:#fff;}\r\n.status-INPROGRESS[_ngcontent-%COMP%] {background-color:rgba(0, 255, 0, 0.10);border: 2px solid#00FF00;border-left: 5px solid#00FF00;color:#000;}\r\n.status-HOLD[_ngcontent-%COMP%] {background-color:rgba(255, 255, 0, 0.10);border: 2px solid#FFFF00;border-left: 5px solid#FFFF00;color:#000;}\r\n.status-CLOSED[_ngcontent-%COMP%] {background-color:rgba(136, 212, 103, 0.58);border: 2px solid#6AA84F;border-left: 5px solid#6AA84F;color:#fff;}\r\n.status-OVERDUE[_ngcontent-%COMP%] {background-color:rgba(255, 0, 0, 0.06);border: 2px solid#FF0000;border-left: 5px solid#FF0000;color:#fff;}\r\n.status-CANCELLED[_ngcontent-%COMP%] {background-color:rgba(204, 204, 204, 0.10);border: 2px solid#CCCCCC;border-left: 5px solid#CCCCCC;color:#fff;}\r\n.status-UNSCHEDULED[_ngcontent-%COMP%] {background-color:rgba(255, 153, 0, 0.10);border: 2px solid#FF9900;border-left: 5px solid#FF9900;color:#fff;}\r\n.status-Submitted[_ngcontent-%COMP%] {background-color:#00b04f3a;border: 2px dotted #00b050;border-left: 2px dotted #00b050;color:#fff;}\r\n.status-Awarded[_ngcontent-%COMP%] {background-color:rgba(255, 255, 0, 0.137);border: 2px dotted #ff0;border-left: 2px dotted #ff0;color:#fff;}\r\n.status-RequireAttention[_ngcontent-%COMP%] {background-color:rgba(255, 0, 0, 0.308);border: 2px dotted #f00;border-left: 2px dotted #f00;color:#fff;}\r\n.status-ToParticipate[_ngcontent-%COMP%] {background-color:rgba(255, 255, 255, 0.699);border: 2px dotted rgb(148, 148, 148);border-left: 2px dotted rgb(148, 148, 148);color:#fff;}\r\n.status-NotParticipating[_ngcontent-%COMP%] {background-color:#bfbfbf80;border: 2px dotted #474747;border-left: 2px dotted #bfbfbf;color:#fff;}\r\n.status-UpcomingSiteSurvey[_ngcontent-%COMP%] {background-color:#ffbf0050;border: 2px dotted #ffc000;border-left: 2px dotted #ffc000;color:#fff;}\r\n.priority-right[_ngcontent-%COMP%] {float: right;padding-top: 4px;}\r\n.calendar-ticket-priority-visit[_ngcontent-%COMP%]{padding: 5px;font-weight: 800;}\r\n.right-text[_ngcontent-%COMP%] {position: relative;float: right;color: red;padding-top: 4px;}\r\n.closed-text[_ngcontent-%COMP%] {position: relative;float: right;color: green;padding-top: 4px;}\r\n.client-header[_ngcontent-%COMP%] {font-size: 24px;font-weight: 800;color: black;}\r\n.client-address[_ngcontent-%COMP%] {font-size: 16px;font-weight: 400;color:#424e56;}\r\n.cus-model-header[_ngcontent-%COMP%] {padding: 18px;}\r\n.client-header-appoinmenttime[_ngcontent-%COMP%] {font-size: 16px;font-weight: 500;padding: 20px;color: #424e56 ;}\r\n.client-info-title[_ngcontent-%COMP%] {font-size: 18px;font-weight: 600;color: rgb(20, 20, 20);}\r\n.client-info-desc[_ngcontent-%COMP%] {font-size: 14px;font-weight: 600;color: rgb(20, 20, 20);}\r\n.width100[_ngcontent-%COMP%] {width:100%;}\r\n.padding-10[_ngcontent-%COMP%] { margin: 10px; }\r\n.padding-10[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{ margin: 5px; }\r\n.statusdot[_ngcontent-%COMP%]{padding: 0px;margin: 0;display: inline-flex;justify-content: center;align-items: center;height: 18px;width: 18px;border-radius: 2rem;font-size: 0.8rem;font-weight: bold;}\r\n.innercalendarclass[_ngcontent-%COMP%] { position: absolute;\r\n    background-color: burlywood;\r\n    width: 100%;\r\n    height: 30px;\r\n cursor: pointer; }\r\n.agent-row-inner[_ngcontent-%COMP%]{width:200px;float: left;max-width: 100%;display:none;position: absolute;z-index: 99;background:\r\n    white;box-shadow: -1px 0px 10px -4px;transition: 400ms;}\r\n.agent-header[_ngcontent-%COMP%]{background:#f2f3f8;padding-top: 20px;width: 100%; max-height: 400px;overflow-y: auto;}\r\n.agent-image[_ngcontent-%COMP%]{width: 50px;height: 50px;line-height: 58px;float: left;text-align: center;background-color: #f1f1f1;border-radius: 50%;}\r\n.agent-image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px;color:black;}\r\n.agent-image-info[_ngcontent-%COMP%]{width: 100%;display: inline-block; padding: 8px;position: relative;}\r\n.agent-image-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size: 16px;font-weight:600;color:white;padding-bottom:5px;margin-bottom:0px;}\r\n.agent-image-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:white;margin-bottom:0px;}\r\n.close-btn[_ngcontent-%COMP%]{width: 20px;height: 20px;line-height: 20px;color: #f74822;position: absolute;background: white;top: 0;right: 0;\r\nfont-weight: 600;z-index: 9999;border-radius: 50%;text-align: center;}\r\n.drag-active[_ngcontent-%COMP%] {position: relative;z-index: 1;pointer-events: none;}\r\n.drag-over[_ngcontent-%COMP%] {background-color: #eee;}\r\n[_nghost-%COMP%]     .popover { color: #000; max-width: 100%};\r\n.modal-tender-lable[_ngcontent-%COMP%] { font-size: 13px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vY2FsZW5kYXIvbW9udGgtdGlja2V0L21vbnRoLXRpY2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsV0FBVyxDQUFDLGFBQWE7QUFDcEMsZ0ZBQWdGLFdBQVcsQ0FBQztBQUM1Rix5QkFBeUIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO0FBQy9GLGtCQUFrQiwwQ0FBMEMsQ0FBQyx3QkFBd0IsQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUM7QUFDL0gsb0JBQW9CLHNDQUFzQyxDQUFDLHdCQUF3QixDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQztBQUM3SCxjQUFjLHdDQUF3QyxDQUFDLHdCQUF3QixDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQztBQUN6SCxnQkFBZ0IsMENBQTBDLENBQUMsd0JBQXdCLENBQUMsNkJBQTZCLENBQUMsVUFBVSxDQUFDO0FBQzdILGlCQUFpQixzQ0FBc0MsQ0FBQyx3QkFBd0IsQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUM7QUFDMUgsbUJBQW1CLDBDQUEwQyxDQUFDLHdCQUF3QixDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQztBQUNoSSxxQkFBcUIsd0NBQXdDLENBQUMsd0JBQXdCLENBQUMsNkJBQTZCLENBQUMsVUFBVSxDQUFDO0FBRWhJLG1CQUFtQiwwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQywrQkFBK0IsQ0FBQyxVQUFVLENBQUM7QUFDcEgsaUJBQWlCLHlDQUF5QyxDQUFDLHVCQUF1QixDQUFDLDRCQUE0QixDQUFDLFVBQVUsQ0FBQztBQUMzSCwwQkFBMEIsdUNBQXVDLENBQUMsdUJBQXVCLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDO0FBQ2xJLHVCQUF1QiwyQ0FBMkMsQ0FBQyxxQ0FBcUMsQ0FBQywwQ0FBMEMsQ0FBQyxVQUFVLENBQUM7QUFDL0osMEJBQTBCLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLCtCQUErQixDQUFDLFVBQVUsQ0FBQztBQUMzSCw0QkFBNEIsMEJBQTBCLENBQUMsMEJBQTBCLENBQUMsK0JBQStCLENBQUMsVUFBVSxDQUFDO0FBRTdILGlCQUFpQixZQUFZLENBQUMsZ0JBQWdCLENBQUM7QUFDL0MsZ0NBQWdDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztBQUM5RCxhQUFhLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7QUFDekUsY0FBYyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0FBQzVFLGdCQUFnQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0FBQzlELGlCQUFpQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0FBQ2hFLG1CQUFtQixhQUFhLENBQUM7QUFDakMsK0JBQStCLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQzlGLG9CQUFvQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7QUFDNUUsbUJBQW1CLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztBQUMzRSxXQUFXLFVBQVUsQ0FBQztBQUN0QixjQUFjLFlBQVksRUFBRTtBQUM1QixrQkFBa0IsV0FBVyxFQUFFO0FBQy9CLFdBQVcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQ3BMLHNCQUFzQixrQkFBa0I7SUFDcEMsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0NBQ2YsZUFBZSxFQUFFO0FBSWpCLGlCQUFpQixXQUFXLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO1NBQzdGLENBQUMsOEJBQThCLENBQUMsaUJBQWlCLENBQUM7QUFDM0QsY0FBYyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7QUFDbkcsYUFBYSxXQUFXLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxrQkFBa0IsQ0FBQztBQUNwSSxlQUFlLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDMUMsa0JBQWtCLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsa0JBQWtCLENBQUM7QUFDckYscUJBQXFCLGVBQWUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO0FBQ3RHLG9CQUFvQixjQUFjLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDO0FBQ2pFLFdBQVcsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVE7QUFDekgsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDO0FBQ3JFLGNBQWMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO0FBQy9ELFlBQVksc0JBQXNCLENBQUM7QUFDbkMscUJBQXFCLFdBQVcsRUFBRSxlQUFlLENBQUE7QUFDakQsc0JBQXNCLGVBQWUsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2NhbGVuZGFyL21vbnRoLXRpY2tldC9tb250aC10aWNrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtaXRlbSB7d2lkdGg6IDEwMCU7ei1pbmRleDogMTAwMH1cclxuLmNhbGVuZGFyLXRpY2tldC1zdGF0dXMgYSwuY2FsZW5kYXItdGlja2V0LXN0YXR1cyBhLCAuY2FsZW5kYXItdGlja2V0LXN0YXR1cyBhIHtjb2xvcjogIzAwMDt9XHJcbi5jYWxlbmRhci10aWNrZXQtc3RhdHVzIHtwYWRkaW5nOiAycHg7bWFyZ2luOiAxcHg7Ym9yZGVyLXJhZGl1czogMnB4O3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTsgfVxyXG4uc3RhdHVzLVVQQ09NSU5HIHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTc0LCAxODksIDIxMiwgMC4xMyk7Ym9yZGVyOiAycHggc29saWQjM0M3OEQ4O2JvcmRlci1sZWZ0OiA1cHggc29saWQjM0M3OEQ4O2NvbG9yOiNmZmY7fVxyXG4uc3RhdHVzLUlOUFJPR1JFU1Mge2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAyNTUsIDAsIDAuMTApO2JvcmRlcjogMnB4IHNvbGlkIzAwRkYwMDtib3JkZXItbGVmdDogNXB4IHNvbGlkIzAwRkYwMDtjb2xvcjojMDAwO31cclxuLnN0YXR1cy1IT0xEIHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDAsIDAuMTApO2JvcmRlcjogMnB4IHNvbGlkI0ZGRkYwMDtib3JkZXItbGVmdDogNXB4IHNvbGlkI0ZGRkYwMDtjb2xvcjojMDAwO31cclxuLnN0YXR1cy1DTE9TRUQge2JhY2tncm91bmQtY29sb3I6cmdiYSgxMzYsIDIxMiwgMTAzLCAwLjU4KTtib3JkZXI6IDJweCBzb2xpZCM2QUE4NEY7Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCM2QUE4NEY7Y29sb3I6I2ZmZjt9XHJcbi5zdGF0dXMtT1ZFUkRVRSB7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMCwgMCwgMC4wNik7Ym9yZGVyOiAycHggc29saWQjRkYwMDAwO2JvcmRlci1sZWZ0OiA1cHggc29saWQjRkYwMDAwO2NvbG9yOiNmZmY7fVxyXG4uc3RhdHVzLUNBTkNFTExFRCB7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMTApO2JvcmRlcjogMnB4IHNvbGlkI0NDQ0NDQztib3JkZXItbGVmdDogNXB4IHNvbGlkI0NDQ0NDQztjb2xvcjojZmZmO31cclxuLnN0YXR1cy1VTlNDSEVEVUxFRCB7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMTUzLCAwLCAwLjEwKTtib3JkZXI6IDJweCBzb2xpZCNGRjk5MDA7Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCNGRjk5MDA7Y29sb3I6I2ZmZjt9XHJcblxyXG4uc3RhdHVzLVN1Ym1pdHRlZCB7YmFja2dyb3VuZC1jb2xvcjojMDBiMDRmM2E7Ym9yZGVyOiAycHggZG90dGVkICMwMGIwNTA7Ym9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgIzAwYjA1MDtjb2xvcjojZmZmO31cclxuLnN0YXR1cy1Bd2FyZGVkIHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDAsIDAuMTM3KTtib3JkZXI6IDJweCBkb3R0ZWQgI2ZmMDtib3JkZXItbGVmdDogMnB4IGRvdHRlZCAjZmYwO2NvbG9yOiNmZmY7fVxyXG4uc3RhdHVzLVJlcXVpcmVBdHRlbnRpb24ge2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDAsIDAsIDAuMzA4KTtib3JkZXI6IDJweCBkb3R0ZWQgI2YwMDtib3JkZXItbGVmdDogMnB4IGRvdHRlZCAjZjAwO2NvbG9yOiNmZmY7fVxyXG4uc3RhdHVzLVRvUGFydGljaXBhdGUge2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5OSk7Ym9yZGVyOiAycHggZG90dGVkIHJnYigxNDgsIDE0OCwgMTQ4KTtib3JkZXItbGVmdDogMnB4IGRvdHRlZCByZ2IoMTQ4LCAxNDgsIDE0OCk7Y29sb3I6I2ZmZjt9XHJcbi5zdGF0dXMtTm90UGFydGljaXBhdGluZyB7YmFja2dyb3VuZC1jb2xvcjojYmZiZmJmODA7Ym9yZGVyOiAycHggZG90dGVkICM0NzQ3NDc7Ym9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgI2JmYmZiZjtjb2xvcjojZmZmO31cclxuLnN0YXR1cy1VcGNvbWluZ1NpdGVTdXJ2ZXkge2JhY2tncm91bmQtY29sb3I6I2ZmYmYwMDUwO2JvcmRlcjogMnB4IGRvdHRlZCAjZmZjMDAwO2JvcmRlci1sZWZ0OiAycHggZG90dGVkICNmZmMwMDA7Y29sb3I6I2ZmZjt9XHJcblxyXG4ucHJpb3JpdHktcmlnaHQge2Zsb2F0OiByaWdodDtwYWRkaW5nLXRvcDogNHB4O31cclxuLmNhbGVuZGFyLXRpY2tldC1wcmlvcml0eS12aXNpdHtwYWRkaW5nOiA1cHg7Zm9udC13ZWlnaHQ6IDgwMDt9XHJcbi5yaWdodC10ZXh0IHtwb3NpdGlvbjogcmVsYXRpdmU7ZmxvYXQ6IHJpZ2h0O2NvbG9yOiByZWQ7cGFkZGluZy10b3A6IDRweDt9XHJcbi5jbG9zZWQtdGV4dCB7cG9zaXRpb246IHJlbGF0aXZlO2Zsb2F0OiByaWdodDtjb2xvcjogZ3JlZW47cGFkZGluZy10b3A6IDRweDt9XHJcbi5jbGllbnQtaGVhZGVyIHtmb250LXNpemU6IDI0cHg7Zm9udC13ZWlnaHQ6IDgwMDtjb2xvcjogYmxhY2s7fVxyXG4uY2xpZW50LWFkZHJlc3Mge2ZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogNDAwO2NvbG9yOiM0MjRlNTY7fVxyXG4uY3VzLW1vZGVsLWhlYWRlciB7cGFkZGluZzogMThweDt9XHJcbi5jbGllbnQtaGVhZGVyLWFwcG9pbm1lbnR0aW1lIHtmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IDUwMDtwYWRkaW5nOiAyMHB4O2NvbG9yOiAjNDI0ZTU2IDt9XHJcbi5jbGllbnQtaW5mby10aXRsZSB7Zm9udC1zaXplOiAxOHB4O2ZvbnQtd2VpZ2h0OiA2MDA7Y29sb3I6IHJnYigyMCwgMjAsIDIwKTt9XHJcbi5jbGllbnQtaW5mby1kZXNjIHtmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDYwMDtjb2xvcjogcmdiKDIwLCAyMCwgMjApO31cclxuLndpZHRoMTAwIHt3aWR0aDoxMDAlO31cclxuLnBhZGRpbmctMTAgeyBtYXJnaW46IDEwcHg7IH1cclxuLnBhZGRpbmctMTAgc3BhbnsgbWFyZ2luOiA1cHg7IH1cclxuLnN0YXR1c2RvdHtwYWRkaW5nOiAwcHg7bWFyZ2luOiAwO2Rpc3BsYXk6IGlubGluZS1mbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7aGVpZ2h0OiAxOHB4O3dpZHRoOiAxOHB4O2JvcmRlci1yYWRpdXM6IDJyZW07Zm9udC1zaXplOiAwLjhyZW07Zm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG4uaW5uZXJjYWxlbmRhcmNsYXNzIHsgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiBjdXJzb3I6IHBvaW50ZXI7IH1cclxuXHJcblxyXG5cclxuIC5hZ2VudC1yb3ctaW5uZXJ7d2lkdGg6MjAwcHg7ZmxvYXQ6IGxlZnQ7bWF4LXdpZHRoOiAxMDAlO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjogYWJzb2x1dGU7ei1pbmRleDogOTk7YmFja2dyb3VuZDpcclxuICAgIHdoaXRlO2JveC1zaGFkb3c6IC0xcHggMHB4IDEwcHggLTRweDt0cmFuc2l0aW9uOiA0MDBtczt9XHJcbi5hZ2VudC1oZWFkZXJ7YmFja2dyb3VuZDojZjJmM2Y4O3BhZGRpbmctdG9wOiAyMHB4O3dpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiA0MDBweDtvdmVyZmxvdy15OiBhdXRvO31cclxuLmFnZW50LWltYWdle3dpZHRoOiA1MHB4O2hlaWdodDogNTBweDtsaW5lLWhlaWdodDogNThweDtmbG9hdDogbGVmdDt0ZXh0LWFsaWduOiBjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG4uYWdlbnQtaW1hZ2UgaXtmb250LXNpemU6MzBweDtjb2xvcjpibGFjazt9XHJcbi5hZ2VudC1pbWFnZS1pbmZve3dpZHRoOiAxMDAlO2Rpc3BsYXk6IGlubGluZS1ibG9jazsgcGFkZGluZzogOHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5hZ2VudC1pbWFnZS1pbmZvIGgye2ZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDo2MDA7Y29sb3I6d2hpdGU7cGFkZGluZy1ib3R0b206NXB4O21hcmdpbi1ib3R0b206MHB4O31cclxuLmFnZW50LWltYWdlLWluZm8gcHtmb250LXNpemU6MTRweDtjb2xvcjp3aGl0ZTttYXJnaW4tYm90dG9tOjBweDt9XHJcbi5jbG9zZS1idG57d2lkdGg6IDIwcHg7aGVpZ2h0OiAyMHB4O2xpbmUtaGVpZ2h0OiAyMHB4O2NvbG9yOiAjZjc0ODIyO3Bvc2l0aW9uOiBhYnNvbHV0ZTtiYWNrZ3JvdW5kOiB3aGl0ZTt0b3A6IDA7cmlnaHQ6IDA7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7ei1pbmRleDogOTk5OTtib3JkZXItcmFkaXVzOiA1MCU7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmRyYWctYWN0aXZlIHtwb3NpdGlvbjogcmVsYXRpdmU7ei1pbmRleDogMTtwb2ludGVyLWV2ZW50czogbm9uZTt9XHJcbiAgLmRyYWctb3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2VlZTt9XHJcbiAgOmhvc3QgPj4+IC5wb3BvdmVyIHsgY29sb3I6ICMwMDA7IG1heC13aWR0aDogMTAwJX07XHJcbiAgLm1vZGFsLXRlbmRlci1sYWJsZSB7IGZvbnQtc2l6ZTogMTNweDt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthTicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './month-ticket.component.html',
                styleUrls: ['./month-ticket.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }, { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"] }, { type: _services_calendar_service__WEBPACK_IMPORTED_MODULE_11__["CalendarService"] }, { type: _services_ticket_service__WEBPACK_IMPORTED_MODULE_12__["TicketService"] }, { type: _services_engineer_service__WEBPACK_IMPORTED_MODULE_13__["EngineerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrService"] }, { type: _services_userlog_service__WEBPACK_IMPORTED_MODULE_16__["UserlogService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"] }, { type: _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_18__["GenicProfileService"] }]; }, { modalTender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalTender', { static: true }]
        }], viewmodalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['viewmodalContent', { static: true }]
        }] }); })();


/***/ }),

/***/ "3WFG":
/*!**********************************************!*\
  !*** ./src/app/services/calendar.service.ts ***!
  \**********************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CalendarService {
    constructor(http) {
        this.http = http;
        this.SetAsDefaultValues();
    }
    SetAsDefaultValues() {
        this.EngineerLocation = [];
        this.ResourceParamData = {
            TokenNo: '00000000-0000-0000-0000-000000000000',
            CustomerId: [],
            EngineerId: [],
            Priority: [],
            Status: []
        };
    }
    refrestEngineerMapList(Token, date) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Calendar/GetEngineerList/' + Token + '/' + date).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    refrestGetEngineerLeftTaskList(Token, e, date) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Calendar/GetEngineerLeftTaskList/' + Token + '/' + e + '/' + date).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    refrestTicketMapList(Token, date) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Calendar/GetTicketList/' + Token + '/' + date).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    refrestTicketDetailsMapList(token, TicketId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Calendar/GetTicketDetails/' + token + '/' + TicketId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestResourceViewList1(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Calendar/GetResourceViewList/' + token, this.ResourceParamData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestResourceViewList(token, obj) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Calendar/GetResourceViewList/' + token, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    engineerlocation(Token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Calendar/GetEngineerHistory/' + Token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalendarService, factory: CalendarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "7kmZ":
/*!***************************************************************************************!*\
  !*** ./src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module.ts ***!
  \***************************************************************************************/
/*! exports provided: TicketStatusComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketStatusComponentModule", function() { return TicketStatusComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TicketStatusComponent.component */ "X7qY");





class TicketStatusComponentModule {
}
TicketStatusComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TicketStatusComponentModule });
TicketStatusComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TicketStatusComponentModule_Factory(t) { return new (t || TicketStatusComponentModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketStatusComponentModule, { declarations: [_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketStatusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketStatusComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketStatusComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketStatusComponent"]],
                exports: [_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_3__["TicketStatusComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "AYvY":
/*!************************************************************!*\
  !*** ./src/app/application/calendar/calendar.component.ts ***!
  \************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CalendarComponent {
    ngOnInit() { }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ template: '<router-outlet></router-outlet>' }]
    }], null, null); })();


/***/ }),

/***/ "DdIF":
/*!***********************************************************!*\
  !*** ./src/app/application/calendar/map/map.component.ts ***!
  \***********************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ticket.service */ "KPvW");
/* harmony import */ var src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/property.service */ "Pffd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_generic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/generic.service */ "G5QB");
/* harmony import */ var src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/genicprofile.service */ "bU6e");
/* harmony import */ var src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/calendar.service */ "3WFG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
















const _c0 = ["modalContent"];
function MapComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Calendar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_div_33_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.hidecalendar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-datepicker", 96, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapComponent_div_33_Template_ngb_datepicker_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.propertyservice.InternalObject.TodayDate = $event; })("select", function MapComponent_div_33_Template_ngb_datepicker_select_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onDateSelect(); })("navigate", function MapComponent_div_33_Template_ngb_datepicker_navigate_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.date = $event.next; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.propertyservice.InternalObject.TodayDate);
} }
function MapComponent_div_47_div_12_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 114);
} if (rf & 2) {
    const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r16.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r18.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MapComponent_div_47_div_12_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 114);
} if (rf & 2) {
    const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r16.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r16.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MapComponent_div_47_div_12_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 82);
} }
function MapComponent_div_47_div_12_i_14_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 116);
} if (rf & 2) {
    const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r16.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r25.localPrependUrl, "/", x_r16.EngineerLogo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MapComponent_div_47_div_12_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapComponent_div_47_div_12_i_14_img_1_Template, 1, 3, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r16.EngineerLogo.length > 0);
} }
function MapComponent_div_47_div_12_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r28, "");
} }
function MapComponent_div_47_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapComponent_div_47_div_12_img_2_Template, 1, 2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapComponent_div_47_div_12_img_3_Template, 1, 2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_div_47_div_12_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const index_r17 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.showinnerlistlive(index_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MapComponent_div_47_div_12_i_13_Template, 1, 0, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MapComponent_div_47_div_12_i_14_Template, 2, 1, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_div_47_div_12_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.showinnerlistlive(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MapComponent_div_47_div_12_p_26_Template, 3, 1, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r16 = ctx.$implicit;
    const index_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r16.EngineerLogo.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r16.EngineerLogo.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r16.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r16.LocationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "agent-row-inner-live-", index_r17, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r16.EngineerLogo.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r16.EngineerLogo.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r16.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r16.LocationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", x_r16.LocationAddress == null ? null : x_r16.LocationAddress.split(","));
} }
function MapComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Live Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MapComponent_div_47_div_12_Template, 27, 10, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.service.EngineerLocation);
} }
function MapComponent_div_80_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r35, "");
} }
function MapComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "c");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_div_80_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const x_r32 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.pupulateticket(x_r32.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "P", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MapComponent_div_80_Template_a_mouseover_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const x_r32 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.OnMouseUp(x_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MapComponent_div_80_span_18_Template, 3, 1, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r32.TicketId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r32.CustomerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("t-staus ", x_r32.Status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r32.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", x_r32.CustomerAddress == null ? null : x_r32.CustomerAddress.split(","));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", x_r32.OneOffStartTime.split(":")[0] + ":" + x_r32.OneOffStartTime.split(":")[1], " - ", x_r32.OneOffEndTime.split(":")[0] + ":" + x_r32.OneOffEndTime.split(":")[1], " ");
} }
function MapComponent_div_82_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r42, "");
} }
function MapComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "c");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_div_82_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const x_r39 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.pupulateticket(x_r39.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "P", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MapComponent_div_82_span_17_Template, 3, 1, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r39.TicketId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r39.CustomerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("t-staus ", x_r39.Status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r39.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", x_r39.CustomerAddress == null ? null : x_r39.CustomerAddress.split(","));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", x_r39.OneOffStartTime.split(":")[0] + ":" + x_r39.OneOffStartTime.split(":")[1], " - ", x_r39.OneOffEndTime.split(":")[0] + ":" + x_r39.OneOffEndTime.split(":")[1], " ");
} }
function MapComponent_div_84_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r48, "");
} }
function MapComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "c");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_div_84_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const x_r45 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.pupulateticket(x_r45.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "P", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MapComponent_div_84_span_17_Template, 3, 1, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r45.TicketId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r45.CustomerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("t-staus ", x_r45.Status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r45.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", x_r45.CustomerAddress == null ? null : x_r45.CustomerAddress.split(","));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", x_r45.OneOffStartTime.split(":")[0] + ":" + x_r45.OneOffStartTime.split(":")[1], " - ", x_r45.OneOffEndTime.split(":")[0] + ":" + x_r45.OneOffEndTime.split(":")[1], " ");
} }
function MapComponent_agm_marker_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", m_r51.lat)("longitude", m_r51.lng);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r51.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r51.address, " ");
} }
function MapComponent_div_99_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 114);
} if (rf & 2) {
    const x_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r53.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r55.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MapComponent_div_99_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 114);
} if (rf & 2) {
    const x_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r53.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r53.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MapComponent_div_99_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 82);
} }
function MapComponent_div_99_i_14_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 134);
} if (rf & 2) {
    const x_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", x_r53.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r53.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MapComponent_div_99_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapComponent_div_99_i_14_img_1_Template, 1, 2, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r53.EngineerLogo.length > 0);
} }
function MapComponent_div_99_div_28_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r68, "");
} }
function MapComponent_div_99_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_div_99_div_28_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const item_r65 = ctx.$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.openmodelpopupticketdetails(item_r65.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MapComponent_div_99_div_28_p_13_Template, 3, 1, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("agent-task-top ", item_r65.Status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r65.TicketId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r65.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, item_r65.OneOffAppointmentDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r65.CustomerAddress == null ? null : item_r65.CustomerAddress.split(","));
} }
function MapComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapComponent_div_99_img_2_Template, 1, 2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapComponent_div_99_img_3_Template, 1, 2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_div_99_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const index_r54 = ctx.index; const x_r53 = ctx.$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.showinnerlist(index_r54, x_r53.EngineerId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MapComponent_div_99_i_13_Template, 1, 0, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MapComponent_div_99_i_14_Template, 2, 1, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_div_99_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const x_r53 = ctx.$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.showinnerlist(x_r53.EngineerId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MapComponent_div_99_div_28_Template, 14, 9, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r53 = ctx.$implicit;
    const index_r54 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r53.EngineerLogo.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r53.EngineerLogo.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r53.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r53.Count, " Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "agent-row-inner-", index_r54, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r53.EngineerLogo.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r53.EngineerLogo.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r53.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r53.RemaningTask, " Task Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mob.: ", x_r53.EngineerMobile, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.locallist);
} }
function MapComponent_ul_179_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 140);
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r74.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r76.localPrependUrl, "/assets/svg/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MapComponent_ul_179_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 140);
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r74.EngineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r74.EngineerLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MapComponent_ul_179_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapComponent_ul_179_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Foreman");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapComponent_ul_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapComponent_ul_179_img_2_Template, 1, 2, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapComponent_ul_179_img_3_Template, 1, 2, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapComponent_ul_179_span_5_Template, 2, 0, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MapComponent_ul_179_span_6_Template, 2, 0, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r74.EngineerLogo.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r74.EngineerLogo.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r74.EngineerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r74.Type === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r74.Type === 2);
} }
function MapComponent_div_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, item_r82.LogDate, "yyyy MMM dd HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r82.RecentDescription);
} }
class MapComponent {
    constructor(titleService, ticketservice, propertyservice, router, toastr, loginservice, genericservice, genicprofileservice, service) {
        this.titleService = titleService;
        this.ticketservice = ticketservice;
        this.propertyservice = propertyservice;
        this.router = router;
        this.toastr = toastr;
        this.loginservice = loginservice;
        this.genericservice = genericservice;
        this.genicprofileservice = genicprofileservice;
        this.service = service;
        this.TotalClosed = 0;
        this.TotalInprogress = 0;
        this.TotalClosedList = [];
        this.TotalInprogressList = [];
        this.Iscalendarshow = false;
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.locallist = [];
        this.CalendarTicketDetailsData = [];
    }
    ngOnInit() {
        if (this.currentUser.Permissions.MapView === false) {
            this.router.navigate(['/dashboard']);
        }
        this.titleService.setTitle('Map | Genic Solution');
        this.genicprofileservice.TicketFilter.IsReady = false;
        this.genicprofileservice.TicketFilter.IsReadyQuote = false;
        this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
        this.IsLeftSection = true;
        this.IsRightSection = true;
        this.IsLeftSectionLive = false;
        this.lat = 1.3817199;
        this.lng = 103.8450399;
        this.zoom = 12;
        this.markers = [];
        const currentUTCDate = new Date();
        this.CalenderList = [];
        this.CalendarTicketList = [];
        this.propertyservice.InternalObject.TodayDate = this.genicprofileservice.TODAY_DATE_IN_STRING;
        let _date = this.propertyservice.InternalObject.TodayDate.toString().split('T')[0].replace('-', '').replace('-', '');
        this.loadData(_date);
    }
    loadData(date) {
        this.service.refrestEngineerMapList(this.currentUser.Token, date).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.CalenderList = response.result;
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
        this.service.refrestTicketMapList(this.currentUser.Token, date).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.CalendarTicketList = response.result;
                    this.TotalClosed = response.result.filter(e => e.Status === 'CLOSED').length;
                    this.TotalInprogress = response.result.filter(e => e.Status === 'INPROGRESS').length;
                    this.TotalClosedList = response.result.filter(e => e.Status === 'CLOSED');
                    this.TotalInprogressList = response.result.filter(e => e.Status === 'INPROGRESS');
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    openmodelpopupticketdetails(TicketId) {
        this.service.refrestTicketDetailsMapList(this.currentUser.Token, TicketId).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.CalendarTicketDetailsData = response.result;
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
        //this.service.refrestTicketDetailsMapList(this.currentUser.Token, TicketId);
    }
    showcalendar() {
        if (this.Iscalendarshow) {
            this.Iscalendarshow = false;
        }
        else {
            this.Iscalendarshow = true;
        }
    }
    hidecalendar() {
        this.Iscalendarshow = false;
    }
    IsLeftSectionMethod() {
        if (this.IsLeftSection) {
            this.IsLeftSection = false;
        }
        else {
            this.IsLeftSection = true;
        }
    }
    IsRightSectionMethod() {
        if (this.IsRightSection) {
            this.IsRightSection = false;
        }
        else {
            this.IsRightSection = true;
        }
    }
    IsLeftLiveSectionMethod() {
        if (this.IsLeftSectionLive) {
            this.IsLeftSectionLive = false;
            this.service.EngineerLocation = [];
        }
        else {
            if (this.currentUser.Permissions.LiveTracking) {
                this.IsLeftSectionLive = true;
                this.service.engineerlocation(this.currentUser.Token).subscribe(res => {
                    if (res) {
                        const response = res;
                        this.service.EngineerLocation = response.result;
                        this.markers = [];
                        this.service.EngineerLocation.forEach(el => {
                            this.markers.push({
                                Id: el.EngineerId,
                                lat: el.Latitude,
                                lng: el.Longitude,
                                name: el.EngineerName,
                                address: el.LocationAddress
                            });
                        });
                    }
                }, error => console.log(error));
            }
            else {
                this.toastr.warning('Permission not granted');
            }
        }
    }
    onDateSelect() {
        this.propertyservice.InternalObject.Type = 'ALL';
        this.propertyservice.InternalObject.DateFrom = '';
        this.propertyservice.InternalObject.DateTo = '';
        const datetime = this.propertyservice.InternalObject.TodayDate;
        const date = datetime.toString().split('T')[0];
        const newdate = date.split('-').filter(function (item) { item = item ? item.replace(/-/g, '') : item; return item; }).join('');
        this.loadData(newdate);
        setTimeout(() => {
            this.Iscalendarshow = false;
        }, 200);
    }
    pupulateticket(Id) {
        this.ticketservice.getTicketById(this.currentUser.Token, Id).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.ticketservice.formData = response.result;
                    this.router.navigate(['/tickets/ticket-view-detail']);
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    OnMouseUp(x) {
        this.markers = [];
        this.markers.push({
            Id: '0',
            lat: x.Latitude,
            lng: x.Longitude,
            name: x.CustomerName,
            address: x.CustomerAddress
        });
    }
    // leftpopup() {
    //   let parent1 = null;
    //   parent1 = document.querySelector('leftpopup');
    //   parent1.parent('.left-section').toggleClass('closeClass-left');
    // }
    showinnerlist(index, EngineerId) {
        if (EngineerId !== undefined) {
            //this.propertyservice.InternalObject.TodayDate = this.propertyservice.InternalObject.TodayDate;
            let _date = this.propertyservice.InternalObject.TodayDate.toString().split('T')[0].replace('-', '').replace('-', '');
            this.service.refrestGetEngineerLeftTaskList(this.currentUser.Token, EngineerId, _date).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.locallist = response.result;
                    }
                    if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                }
            }, error => console.log(error));
        }
        if (index == null) {
            let demoClasseslist = null;
            demoClasseslist = document.querySelectorAll('.agent-row-inner');
            demoClasseslist.forEach(element => {
                element.style.display = 'none';
            });
        }
        else {
            let demoClasseslist = null;
            demoClasseslist = document.querySelectorAll('.agent-row-inner');
            demoClasseslist.forEach(element => {
                element.style.display = 'none';
            });
            let demoClasses = null;
            demoClasses = document.querySelectorAll('#agent-row-inner-' + index);
            demoClasses.forEach(element2 => {
                element2.style.display = 'block';
            });
        }
    }
    showinnerlistlive(index) {
        if (index == null) {
            let demoClasseslist = null;
            demoClasseslist = document.querySelectorAll('.agent-row-inner-live');
            demoClasseslist.forEach(element => {
                element.style.display = 'none';
            });
        }
        else {
            let demoClasseslist = null;
            demoClasseslist = document.querySelectorAll('.agent-row-inner-live');
            demoClasseslist.forEach(element => {
                element.style.display = 'none';
            });
            let demoClasses = null;
            demoClasses = document.querySelectorAll('#agent-row-inner-live-' + index);
            demoClasses.forEach(element2 => {
                element2.style.display = 'block';
            });
        }
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_generic_service__WEBPACK_IMPORTED_MODULE_8__["GenericService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_9__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_10__["CalendarService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["ng-component"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, decls: 182, vars: 40, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid", "breadcud-kt-container"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__breadcrumbs-link"], [1, "kt-subheader__toolbar"], [1, "kt-subheader__wrapper"], ["href", "javascript:;", "id", "kt_dashboard_daterangepicker", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "title", "Select dashboard daterange", "data-placement", "left", 1, "btn", "kt-subheader__btn-daterange"], ["id", "kt_dashboard_daterangepicker_title", 1, "kt-subheader__btn-daterange-title"], ["id", "kt_dashboard_daterangepicker_date", 1, "kt-subheader__btn-daterange-date"], ["href", "javascript:;", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1", 1, "kt-svg-icon", "kt-svg-icon--sm"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "bound", "x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M4.875,20.75 C4.63541667,20.75 4.39583333,20.6541667 4.20416667,20.4625 L2.2875,18.5458333 C1.90416667,18.1625 1.90416667,17.5875 2.2875,17.2041667 C2.67083333,16.8208333 3.29375,16.8208333 3.62916667,17.2041667 L4.875,18.45 L8.0375,15.2875 C8.42083333,14.9041667 8.99583333,14.9041667 9.37916667,15.2875 C9.7625,15.6708333 9.7625,16.2458333 9.37916667,16.6291667 L5.54583333,20.4625 C5.35416667,20.6541667 5.11458333,20.75 4.875,20.75 Z", "id", "check", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], ["d", "M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z", "id", "Combined-Shape", "fill", "#000000"], ["style", "position: absolute; z-index: 99999; background-color: white;", 4, "ngIf"], [1, "new-quote-main-section"], [1, "kt-container", "kt-container--fluid"], [1, "new-requst-filter_form", "create-new-client-popup"], [1, "accordion", "accordion-solid"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-xs-12", "no-spacing"], [1, ""], [1, "col-lg-12", "left-enlarge"], [1, "map-inner"], [3, "ngClass"], ["title", "Live Location", 1, "left_slide", 3, "click"], [1, "fas", "fa-angle-right"], ["class", "inner-section", 4, "ngIf"], ["title", "tasks", 1, "left_slide", 3, "click"], [1, "inner-section"], [1, "inner-header", "clearfix"], [1, "title"], [1, "calendar"], [1, "inner-body"], [1, "inner-tabs"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#tab1", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#tab2", 1, "nav-link"], ["data-toggle", "tab", "href", "#tab3", 1, "nav-link"], [1, "inner-tabcontent"], [1, "tab-content", "style-1"], ["id", "tab1", 1, "tab-pane", "active"], ["class", "ticket-detail-row strip-1", 4, "ngFor", "ngForAsync", "ngForOf"], ["id", "tab2", 1, "tab-pane", "fade"], ["id", "tab3", 1, "tab-pane", "fade"], [1, "map-section"], [2, "width", "100%", "height", "600px", 3, "latitude", "longitude", "zoom", "minZoom", "disableDefaultUI"], [3, "latitude", "longitude", 4, "ngFor", "ngForOf"], ["title", "tasks", 1, "right_slide", 3, "click"], ["id", "atab1", 1, "tab-pane", "active"], ["class", "agent-row clearfix", 4, "ngFor", "ngForAsync", "ngForOf"], ["id", "detailModal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "detail-inner"], [1, "details-tabs"], ["role", "tablist", 1, "nav", "nav-tabs"], ["data-toggle", "tab", "href", "#dtab1", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#dtab2", 1, "nav-link"], [1, "tab-content"], ["id", "dtab1", 1, "tab-pane", "active"], [1, "task-detail-4-box"], [1, "col-md-6", "col-sm-12"], [1, "task-detail-1-box"], [1, "table"], ["colspan", "2"], [1, "fas", "fa-list"], [1, "fas", "fa-clock"], [1, "task-detail-2-box"], [1, "fas", "fa-user"], [1, "fas", "fa-phone"], [1, "fas", "fa-envelope"], [1, "fas", "fa-map-marker"], [1, "task-detail-3-box"], [4, "ngFor", "ngForAsync", "ngForOf"], ["id", "dtab2", 1, "tab-pane", "fade"], ["class", "activity-timeline", 4, "ngFor", "ngForAsync", "ngForOf"], [2, "position", "absolute", "z-index", "99999", "background-color", "white"], [1, "kt-nav"], [1, "kt-nav__head"], ["href", "javascript:void(0);", 3, "click"], [1, "kt-nav__separator"], [1, "kt-nav__item"], ["name", "TodayDate", 3, "ngModel", "ngModelChange", "select", "navigate"], ["TodayDate", "ngModel"], [1, "agent-row", "clearfix"], [1, "agent-name"], ["class", "engineer-icon", "width", "30px", "alt", " ", 3, "title", "src", 4, "ngIf"], [1, "nagent"], [1, "LocationDate"], [1, "agent-row-inner-live", 3, "id"], [1, "agent-header", "clearfix"], [1, "agent-image"], ["class", "fas fa-user", 4, "ngIf"], [4, "ngIf"], [1, "agent-image-info"], [1, "close-btn"], [1, "agent-task", "style-1"], [1, "agent-task-row", "strip-2"], [1, "agent-task-bottom"], [4, "ngFor", "ngForOf"], ["width", "30px", "alt", " ", 1, "engineer-icon", 3, "title", "src"], ["class", "fas fa-user", "width", "60px", "alt", " ", 3, "title", "src", 4, "ngIf"], ["width", "60px", "alt", " ", 1, "fas", "fa-user", 3, "title", "src"], [1, "ticket-detail-row", "strip-1"], [1, "ticket-number", "clearfix"], [1, "t-icon"], [1, "t-staus"], [1, "ticket-info", "clearfix"], [1, "cust-name"], [1, "cust-address"], ["href", "javascript:;", 3, "mouseover"], [1, "time"], ["href", "javascript:;", 1, "detail-btn", "btn"], [3, "latitude", "longitude"], [1, "task"], [1, "agent-row-inner", 3, "id"], [1, "agent-info"], [1, "agent-id"], ["class", "agent-task-row strip-2", 4, "ngFor", "ngForAsync", "ngForOf"], ["width", "60px", "height", "61px", "alt", " ", 3, "title", "src", 4, "ngIf"], ["width", "60px", "height", "61px", "alt", " ", 3, "title", "src"], [1, "agent-task-mid"], ["href", "javascript:;", "data-toggle", "modal", "data-target", "#detailModal", 1, "at-detail", 3, "click"], ["width", "20", "height", "20px", "class", "img-thumbnail", "alt", "", 3, "title", "src", 4, "ngIf"], ["class", "kt-badge kt-badge--success kt-badge--inline kt-badge--pill", 4, "ngIf"], ["class", "kt-badge kt-badge--warning kt-badge--inline kt-badge--pill", 4, "ngIf"], ["width", "20", "height", "20px", "alt", "", 1, "img-thumbnail", 3, "title", "src"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "kt-badge--pill"], [1, "kt-badge", "kt-badge--warning", "kt-badge--inline", "kt-badge--pill"], [1, "activity-timeline"], [1, "activity-timeline-row", "clearfix"], [1, "delivery-status"], [1, "fa", "fa-clock"], [1, "delivery-name"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Today:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_Template_a_click_25_listener() { return ctx.showcalendar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "rect", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MapComponent_div_33_Template, 10, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_Template_span_click_45_listener() { return ctx.IsLeftLiveSectionMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MapComponent_div_47_Template, 13, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_Template_span_click_49_listener() { return ctx.IsLeftSectionMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Inprogress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, MapComponent_div_80_Template, 22, 9, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, MapComponent_div_82_Template, 23, 9, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, MapComponent_div_84_Template, 23, 9, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "agm-map", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, MapComponent_agm_marker_87_Template, 7, 4, "agm-marker", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_Template_span_click_89_listener() { return ctx.IsRightSectionMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, MapComponent_div_99_Template, 29, 11, "div", 59);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "ul", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "TASK DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "ACTIVITY TIMELINE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "table", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Ticket Start Time :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Ticket End Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Ticket Generate Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](158, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, MapComponent_ul_179_Template, 7, 5, "ul", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](181, MapComponent_div_181_Template, 10, 5, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 35, ctx.propertyservice.InternalObject.TodayDate), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Iscalendarshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.IsLeftSectionLive === true ? "left-section-live" : "left-section-live closeClass-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.LiveTracking);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.IsLeftSection === true ? "left-section" : "left-section closeClass-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Ticket, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CalendarTicketList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TotalClosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TotalInprogress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.CalendarTicketList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.TotalClosedList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.TotalInprogressList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("minZoom", 10)("disableDefaultUI", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.IsRightSection === true ? "right-section" : "right-section closeClass-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentUser.Engineer, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.CalenderList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CalendarTicketDetailsData.TicketId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CalendarTicketDetailsData.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.CalendarTicketDetailsData.Description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.Ticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CalendarTicketDetailsData.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CalendarTicketDetailsData.OneOffStartTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CalendarTicketDetailsData.OneOffEndTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](158, 37, ctx.CalendarTicketDetailsData.GenerateDate, "MMM dd yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.CalendarTicketDetailsData.CustomerName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.CalendarTicketDetailsData.CustomerContactNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.CalendarTicketDetailsData.CustomerEmail, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.CalendarTicketDetailsData.CustomerAddress, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.CalendarTicketDetailsData.List);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.CalendarTicketDetailsData == null ? null : ctx.CalendarTicketDetailsData.Logs);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmMap"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmInfoWindow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".map-head[_ngcontent-%COMP%]{background-color:#EAEAEA;color:black !important;padding: 10px 20px;}\r\n.map-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-right:10px;}\r\n.map-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;font-weight:600;color:black;display:inline-block;margin-bottom:0px;margin-top:6px;}\r\n.map-head[_ngcontent-%COMP%]   .map-btn[_ngcontent-%COMP%]{border:2px solid #FA3913;color:#FA3913;background-color:transparent;float:right;}\r\n.map-head[_ngcontent-%COMP%]   .map-btn[_ngcontent-%COMP%]:hover{border:2px solid transparent;background-color:#FA3913;color:white;}\r\n.map-inner[_ngcontent-%COMP%]{position: relative;}\r\n.right-section[_ngcontent-%COMP%]{width:320px;float: right;max-width: 100%;display: block;position: absolute;top: 0;right: 0;z-index: 99;background:#fff;height: 100%;box-shadow: -1px 0px 10px -4px;transition: 400ms;}\r\n.left-section[_ngcontent-%COMP%]{width:320px;float: left;max-width: 100%;display: block;position: absolute;top: 0;left: 0;z-index: 99;background:\r\n    #fff;height: 100%;box-shadow: -1px 0px 10px -4px;transition: 400ms;}\r\n.left-section-live[_ngcontent-%COMP%]{width:320px;float: left;max-width: 100%;display: block;position: absolute;top: 45px;left: 0;z-index: 99;background:\r\n        #fff;height: 100%;box-shadow: -1px 0px 10px -4px;transition: 400ms;}\r\n.map-section[_ngcontent-%COMP%]{width: 100%;max-width: 100%;}\r\n.map-inner[_ngcontent-%COMP%]{height:600px;}\r\n.left_slide[_ngcontent-%COMP%]{background: #0091d2;;color:#fff;top: 0;right: -35px;position: absolute;padding: 11px 16px 11px 12px;border-radius: 0 5px 5px 0 !important;\r\ncursor: pointer;transition: 300ms;}\r\n.inner-header[_ngcontent-%COMP%]{padding:10px 10px;background-color:#FC6F31;}\r\n.inner-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display: inline-block;font-size:16px;color:white;}\r\n.inner-header[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{margin-right:20px;}\r\n.inner-header[_ngcontent-%COMP%]   span.calendar[_ngcontent-%COMP%]{width:200px;}\r\n.inner-header[_ngcontent-%COMP%]   span.calendar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:25px;border-radius:30px;}\r\n.inner-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;float:right;color:white;font-size:22px;}\r\n.inner-header[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder{text-align:center;}\r\n.inner-header[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{text-align:center;}\r\n.inner-body[_ngcontent-%COMP%]{padding:10px;height:455px;}\r\n.inner-body[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border:none;}\r\n.inner-body[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:0.75rem 14px;border:none;text-align:center;color:black;border-bottom:2px solid transparent;}\r\n.inner-body[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;font-size:17px;}\r\n.inner-body[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0px;}\r\n.inner-body[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .inner-body[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#FC6F31;border-bottom:2px solid #FC6F31;}\r\n.tab-search[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{position: relative;}\r\n.tab-content[_ngcontent-%COMP%]{height:400px;overflow-y:auto;overflow-x:hidden;}\r\n.tab-search[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position: absolute;color:#FC6F31;right: 20px;top: 5px;}\r\n.ticket-detail-row[_ngcontent-%COMP%]{padding:10px;margin-bottom:15px;}\r\n.strip-1[_ngcontent-%COMP%]{background-color:#f7f7f7;}\r\n.strip-2[_ngcontent-%COMP%]{background-color:#ffffff;}\r\n.ticket-number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;color:black;font-weight:600;display:inline-block;}\r\n.ticket-number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]{vertical-align:middle;width:20px;height:20px;line-height:20px;border-radius:50px;text-align:center;background-color:#FC6F31;color:white;display:inline-block;font-size:12px !important;font-weight:normal !important;}\r\n.t-staus[_ngcontent-%COMP%]{float: right;font-size: 11px;font-weight: 600;display: inline-block;color: #6a9840;padding: 5px 12px;border-radius: 30px;border: 1px solid #6b9941;}\r\n.ticket-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:5px;color:black;position: relative;padding-left:20px;}\r\n.ticket-info[_ngcontent-%COMP%]   p.cust-name[_ngcontent-%COMP%]{font-size:16px;font-weight:600;}\r\n.ticket-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: gainsboro;}\r\n.ticket-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#FC6F31;margin-right:8px;position: absolute;left:0;top:3px;}\r\n.detail-btn[_ngcontent-%COMP%]{display: inline-block;float:right;border:1px solid #FC6F31;color:#FC6F31;border-radius:2px;padding:2px 5px;}\r\n.detail-btn[_ngcontent-%COMP%]:hover{background-color:#FC6F31;color:white !important;border:1px solid transparent;}\r\n.style-1[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);border-radius: 10px;background-color: #fff;}\r\n.style-1[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;background-color: #F5F5F5;}\r\n.style-1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius: 10px;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);background-color:#fc6f31;}\r\n.agent-row[_ngcontent-%COMP%]{padding:5px 10px 10px;border-bottom:1px solid #d8d8d8;}\r\n.agent-name[_ngcontent-%COMP%]{width:80%;float:left;padding-left:15px;position: relative;}\r\n.agent-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0px;}\r\n.nagent[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#FC6F31;padding-bottom:0px !important;padding-left: 12px;}\r\n.status-active[_ngcontent-%COMP%]{width:8px;height:8px;line-height:8px;display:inline-block;background:green;border-radius:50px;position: absolute;left:0;top:8px;}\r\n.engineer-icon[_ngcontent-%COMP%]{width: 30px;\r\n    height: 30px;\r\n    line-height: 8px;\r\n    display: inline-block;\r\n    background:\r\n    #eaeaea;\r\n    border-radius: 50px;\r\n    position: absolute;\r\n    left: -8px;\r\n    top: 3px;}\r\n.atime[_ngcontent-%COMP%]{color:grey;font-size:12px;}\r\n.task[_ngcontent-%COMP%]{float:right;width:20%;text-align:center;}\r\n.task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0px;font-weight:600;color:black;}\r\n.agent-row-inner[_ngcontent-%COMP%], .agent-row-inner-live[_ngcontent-%COMP%]{width:320px;float: left;max-width: 100%;display:none;position: absolute;top: 0;left:0;z-index: 99;background:\r\n    white;height: 100%;box-shadow: -1px 0px 10px -4px;transition: 400ms;}\r\n.agent-header[_ngcontent-%COMP%]{background:#007ec4;padding: 8px 10px;width: 100%;}\r\n.agent-image[_ngcontent-%COMP%]{width: 50px;height: 50px;line-height: 58px;float: left;text-align: center;background-color: transparent;border-radius: 50%;}\r\n.agent-image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px;color:black;}\r\n.agent-image-info[_ngcontent-%COMP%]{width: 246px;display: inline-block;float: left;padding-left: 20px;position: relative;}\r\n.agent-image-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size: 16px;font-weight:600;color:white;padding-bottom:5px;margin-bottom:0px;}\r\n.agent-image-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:white;margin-bottom:0px;}\r\n.close-btn[_ngcontent-%COMP%]{width: 20px;height: 20px;line-height: 20px;color: #f74822;position: absolute;background: white;top: 0;right: 0;\r\nfont-weight: 600;z-index: 9999;border-radius: 50%;text-align: center;}\r\n.agent-info[_ngcontent-%COMP%]{background:#78b8dc;padding: 8px 10px;width: 100%;position: relative;}\r\n.agent-info[_ngcontent-%COMP%]   .agent-id[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0px;padding-bottom:5px;font-size:12px;color:white;font-weight:600;}\r\n.agent-info[_ngcontent-%COMP%]   .agent-id[_ngcontent-%COMP%]   p.agent-address[_ngcontent-%COMP%]{position: relative;padding-left:20px;font-size:12px;margin-bottom:0px;color:white;font-weight:normal;}\r\n.agent-info[_ngcontent-%COMP%]   .agent-id[_ngcontent-%COMP%]   p.agent-address[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position: absolute;left:0;top:3px;color:white;}\r\n.agent-info-status[_ngcontent-%COMP%]{display: inline-block;padding: 3px 9px;background: green;border-radius: 5px;position: absolute;top: 6px;right: 11px;}\r\n.agent-task[_ngcontent-%COMP%]{height: 388px;overflow-y: auto;padding:10px;}\r\n.agent-task-row[_ngcontent-%COMP%]{border-bottom:1px solid #d8d8d8;;padding-bottom:10px;margin-bottom:10px;}\r\n.agent-task-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .agent-task-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:0px;}\r\n.agent-task-top[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display: inline-block;font-size: 16px;font-weight: 600;color: #fc6f31;padding-bottom:8px;}\r\n.agent-task-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display: inline-block;float: right;color: red;font-weight:600;font-size:12px;}\r\n.agent-task-mid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display: inline-block;color: black;font-size: 14px;padding-bottom:8px;font-weight:600;}\r\n.at-detail[_ngcontent-%COMP%]{float: right;padding: 3px 8px;color: white;background: #fc6f31;border-radius: 30px;font-size: 12px;display: inline-block;cursor: pointer;}\r\n.at-detail[_ngcontent-%COMP%]:hover { background-color:blue; }\r\n.agent-task-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:black;}\r\n.modal-backdrop.show[_ngcontent-%COMP%]{opacity: 0 !important;}\r\n#detailModal[_ngcontent-%COMP%]{background-color:rgba(0,0,0,0.4);}\r\n#detailModal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{z-index:999999;border:none;}\r\n#detailModal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding: 0.85rem;}\r\n#detailModal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{max-width:650px}\r\n#detailModal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px !important;font-weight:600;color:black;}\r\n.details-tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{height:auto !important;}\r\n.details-tabs[_ngcontent-%COMP%]   .nav.nav-tabs[_ngcontent-%COMP%]{BACKGROUND: #E7E7E7;margin-bottom:10px !important;}\r\n.details-tabs[_ngcontent-%COMP%]   .nav.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-right:1px solid #d6d6d6}\r\n.details-tabs[_ngcontent-%COMP%]   .nav.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-right:none;}\r\n.details-tabs[_ngcontent-%COMP%]   .nav.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .details-tabs[_ngcontent-%COMP%]   .nav.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color: white !important;border-bottom: 2px solid #21366B !important;background: #21366B;}\r\n.task-detail-1-box[_ngcontent-%COMP%], .task-detail-2-box[_ngcontent-%COMP%]{height:200px;}\r\n.task-detail-1-box[_ngcontent-%COMP%], .task-detail-2-box[_ngcontent-%COMP%], .task-detail-3-box[_ngcontent-%COMP%], .task-detail-4-box[_ngcontent-%COMP%]{background-color:#e7e7e7;padding:12px 8px;margin-bottom:15px;}\r\n.task-detail-1-box[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{margin-bottom:0px;}\r\n.task-detail-1-box[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding: 0.35rem;border-top:none;}\r\n.task-detail-1-box[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{font-weight:600;width:60%;}\r\n.task-detail-2-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .task-detail-3-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .task-detail-4-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:black;padding-bottom:10px;}\r\n.task-detail-2-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style:none;}\r\n.task-detail-2-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position: relative;padding-left:20px;color:black;font-size:14px;padding-bottom:5px;}\r\n.task-detail-2-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fc6f31;position: absolute;top:3px;left:0px;}\r\n.task-detail-3-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{-moz-column-count:2;column-count:2;list-style-type:none;padding-left:0;}\r\n.task-detail-3-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:black;padding-bottom:5px;}\r\n.task-detail-4-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:normal;}\r\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#0084CA;color:white;}\r\n.activity-timeline-row[_ngcontent-%COMP%]{background-color:#dcdcdc;padding:10px;border-radius:5px;margin-bottom:15px;}\r\n.activity-timeline-row[_ngcontent-%COMP%]   .delivery-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:3px 12px;color:white;font-size:12px;background-color:#FF7900;border-radius:3px;}\r\n.activity-timeline-row[_ngcontent-%COMP%]   .delivery-status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;color:black;}\r\n.delivery-status[_ngcontent-%COMP%]{margin-bottom:10px;}\r\n#myModal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0px;}\r\n#myModal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom: 5px;margin-bottom: 5px;border-bottom: 1px solid #ece7e7;}\r\n#myModal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-right:10px;}\r\n#myModal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-bottom:0px;font-size:15px;color:black;}\r\n.kt-content[_ngcontent-%COMP%]{padding:0px 0px 25px;}\r\n.agent-task-top.CANCELED[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display: inline-block; float: right; color: red;font-weight:600;font-size:12px;}\r\n.agent-task-top.UPCOMING[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display: inline-block; float: right; color: blue;font-weight:600;font-size:12px;}\r\n.agent-task-top.CLOSED[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display: inline-block; float: right; color: green;font-weight:600;font-size:12px;}\r\n.agent-task-top.OVERDUE[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display: inline-block; float: right; color: orangered;font-weight:600;font-size:12px;}\r\n.agent-task-top.HOLD[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display: inline-block; float: right; color: yellowgreen;font-weight:600;font-size:12px;}\r\n.agent-task-top.INPROGRESS[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display: inline-block; float: right; color: green;font-weight:600;font-size:12px;}\r\n.agent-task-top.UNSECHEDULED[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display: inline-block; float: right; color: lightpink;font-weight:600;font-size:12px;}\r\n.closeClass-left[_ngcontent-%COMP%]{transform: translateX(-100%);}\r\n.closeClass-right[_ngcontent-%COMP%]{transform: translateX(100%);}\r\n.right_slide[_ngcontent-%COMP%]{    background: #0091d2;color: #fff;top: 0;left: -35px;position: absolute;padding: 11px 16px 11px 12px;border-radius: 5px 0px 0px 5px !important;cursor: pointer;transition: 300ms;}\r\n.map-inner[_ngcontent-%COMP%]{overflow:hidden;}\r\n.LocationDate[_ngcontent-%COMP%]{ width: 100%; }\r\n.LocationDate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{ font-size: 10px;padding: 0px 0px 0px 10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vY2FsZW5kYXIvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7QUFDN0UsWUFBWSxrQkFBa0IsQ0FBQztBQUMvQixhQUFhLGNBQWMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztBQUM5RyxtQkFBbUIsd0JBQXdCLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQztBQUNuRyx5QkFBeUIsNEJBQTRCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQzNGLFdBQVcsa0JBQWtCLENBQUM7QUFDOUIsZUFBZSxXQUFXLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxpQkFBaUIsQ0FBQztBQUNwTSxjQUFjLFdBQVcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUMzRyxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxpQkFBaUIsQ0FBQztBQUN2RSxtQkFBbUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQy9HLENBQUMsWUFBWSxDQUFDLDhCQUE4QixDQUFDLGlCQUFpQixDQUFDO0FBQzNFLGFBQWEsV0FBVyxDQUFDLGVBQWUsQ0FBQztBQUN6QyxXQUFXLFlBQVksQ0FBQztBQUN4QixZQUFZLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixDQUFDLHFDQUFxQztBQUNySixlQUFlLENBQUMsaUJBQWlCLENBQUM7QUFDbEMsY0FBYyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQztBQUN6RCxtQkFBbUIscUJBQXFCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztBQUNwRSx5QkFBeUIsaUJBQWlCLENBQUM7QUFDM0MsNEJBQTRCLFdBQVcsQ0FBQztBQUN4QywwQ0FBMEMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0FBQ3pFLGlCQUFpQixvQkFBb0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztBQUM3RSwrQ0FBMEMsaUJBQWlCLENBQUM7QUFBNUQsMENBQTBDLGlCQUFpQixDQUFDO0FBQzVELFlBQVksWUFBWSxDQUFDLFlBQVksQ0FBQztBQUN0QyxzQkFBc0IsV0FBVyxDQUFDO0FBQ2xDLDBDQUEwQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLG1DQUFtQyxDQUFDO0FBRTdJLCtDQUErQyxlQUFlLENBQUMsY0FBYyxDQUFDO0FBQzlFLDRDQUE0QyxpQkFBaUIsQ0FBQztBQUM5RCxrR0FBa0csYUFBYSxDQUFDLCtCQUErQixDQUFDO0FBQ2hKLHdCQUF3QixrQkFBa0IsQ0FBQztBQUMzQyxhQUFhLFlBQVksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7QUFDNUQsNkJBQTZCLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0FBQ25GLG1CQUFtQixZQUFZLENBQUMsa0JBQWtCLENBQUM7QUFDbkQsU0FBUyx3QkFBd0IsQ0FBQztBQUNsQyxTQUFTLHdCQUF3QixDQUFDO0FBQ2xDLGlCQUFpQixjQUFjLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztBQUNqRix5QkFBeUIscUJBQXFCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMseUJBQXlCLENBQUMsNkJBQTZCLENBQUM7QUFDOU8sU0FBUyxZQUFZLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQztBQUM1SixlQUFlLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQztBQUNsRix5QkFBeUIsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUN4RCxzQkFBc0IsMkJBQTJCLENBQUM7QUFFbEQsaUJBQWlCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ2xGLFlBQVkscUJBQXFCLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUM7QUFDdkgsa0JBQWtCLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixDQUFDO0FBQy9GLGtDQUFrQyxpREFBaUQsQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQztBQUMvSCw0QkFBNEIsU0FBUyxDQUFDLHlCQUF5QixDQUFDO0FBQ2hFLGtDQUFrQyxtQkFBbUIsQ0FBQyxnREFBZ0QsQ0FBQyx3QkFBd0IsQ0FBQztBQUNoSSxXQUFXLHFCQUFxQixDQUFDLCtCQUErQixDQUFDO0FBQ2pFLFlBQVksU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztBQUN0RSxjQUFjLGlCQUFpQixDQUFDO0FBQ2hDLFFBQVEsY0FBYyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsa0JBQWtCLENBQUM7QUFDdEcsZUFBZSxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQy9JLGVBQWUsV0FBVztJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQjtXQUNPO0lBQ1AsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUSxDQUFDO0FBQ2IsT0FBTyxVQUFVLENBQUMsY0FBYyxDQUFDO0FBQ2pDLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztBQUM5QyxRQUFRLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDdEQsd0NBQXdDLFdBQVcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUNqSSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxpQkFBaUIsQ0FBQztBQUN4RSxjQUFjLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztBQUMvRCxhQUFhLFdBQVcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLGtCQUFrQixDQUFDO0FBQ3hJLGVBQWUsY0FBYyxDQUFDLFdBQVcsQ0FBQztBQUMxQyxrQkFBa0IsWUFBWSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUN2RyxxQkFBcUIsZUFBZSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUM7QUFDdEcsb0JBQW9CLGNBQWMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7QUFDakUsV0FBVyxXQUFXLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUTtBQUN6SCxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7QUFDckUsWUFBWSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7QUFDaEYsd0JBQXdCLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO0FBQ3hHLHNDQUFzQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0FBQzNJLHdDQUF3QyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUN0RixtQkFBbUIscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztBQUN2SSxZQUFZLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7QUFDeEQsZ0JBQWdCLCtCQUErQixFQUFFLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO0FBQ3hGLHNDQUFzQyxpQkFBaUIsQ0FBQztBQUN4RCxtQkFBbUIscUJBQXFCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQUM1RyxrQkFBa0IscUJBQXFCLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDO0FBQy9GLGtCQUFrQixxQkFBcUIsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQztBQUN4RyxXQUFXLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQztBQUNwSixtQkFBbUIscUJBQXFCLEVBQUU7QUFDMUMscUJBQXFCLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDaEQscUJBQXFCLHFCQUFxQixDQUFDO0FBQzNDLGFBQWEsZ0NBQWdDLENBQUM7QUFDOUMsNEJBQTRCLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDdkQsMkJBQTJCLGdCQUFnQixDQUFDO0FBQzVDLDJCQUEyQixlQUFlO0FBQzFDLDBCQUEwQix5QkFBeUIsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBRWhGLDJCQUEyQixzQkFBc0IsQ0FBQztBQUNsRCw0QkFBNEIsbUJBQW1CLENBQUMsNkJBQTZCLENBQUM7QUFDOUUsK0JBQStCLDhCQUE4QjtBQUM3RCwwQ0FBMEMsaUJBQWlCLENBQUM7QUFDNUQsZ0ZBQWdGLHVCQUF1QixDQUFDLDJDQUEyQyxDQUFDLG1CQUFtQixDQUFDO0FBQ3hLLHVDQUF1QyxZQUFZLENBQUM7QUFDcEQsK0VBQStFLHdCQUF3QixDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0FBQzVJLDBCQUEwQixpQkFBaUIsQ0FBQztBQUM1QyxnQ0FBZ0MsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0FBQ2pFLDRDQUE0QyxlQUFlLENBQUMsU0FBUyxDQUFDO0FBQ3RFLG9FQUFvRSxjQUFjLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztBQUNuSSxzQkFBc0IsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUNyRCx5QkFBeUIsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQUM1RywyQkFBMkIsYUFBYSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFDN0Usc0JBQXNCLG1CQUFjLENBQWQsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztBQUN6RSx5QkFBeUIsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0FBQ3hELHFCQUFxQixrQkFBa0IsQ0FBQztBQUN4QyxtQkFBbUIsd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBQ3hELHVCQUF1Qix3QkFBd0IsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7QUFDbEcsMENBQTBDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUM7QUFDakksNkNBQTZDLFdBQVcsQ0FBQyxXQUFXLENBQUM7QUFDckUsaUJBQWlCLGtCQUFrQixDQUFDO0FBQ3BDLFlBQVksZUFBZSxDQUFDLGdCQUFnQixDQUFDO0FBQzdDLGVBQWUsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLENBQUM7QUFDdkYsbUJBQW1CLGtCQUFrQixDQUFDO0FBQ3RDLG9CQUFvQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO0FBQ2pFLFlBQVksb0JBQW9CLENBQUM7QUFFakMsMkJBQTJCLHFCQUFxQixFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQztBQUMxRywyQkFBMkIscUJBQXFCLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDO0FBQzNHLHlCQUF5QixxQkFBcUIsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUM7QUFDMUcsMEJBQTBCLHFCQUFxQixFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDO0FBQy9HLHVCQUF1QixxQkFBcUIsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQztBQUM5Ryw2QkFBNkIscUJBQXFCLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDO0FBQzlHLCtCQUErQixxQkFBcUIsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQztBQUVwSCxpQkFBaUIsNEJBQTRCLENBQUM7QUFDOUMsa0JBQWtCLDJCQUEyQixDQUFDO0FBQzlDLGlCQUFpQixtQkFBbUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyx5Q0FBeUMsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7QUFDaE0sV0FBVyxlQUFlLENBQUM7QUFDM0IsZUFBZSxXQUFXLEVBQUU7QUFBQyxvQkFBb0IsZUFBZSxDQUFDLHlCQUF5QixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vY2FsZW5kYXIvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1oZWFke2JhY2tncm91bmQtY29sb3I6I0VBRUFFQTtjb2xvcjpibGFjayAhaW1wb3J0YW50O3BhZGRpbmc6IDEwcHggMjBweDt9XHJcbi5tYXAtaGVhZCBpe3BhZGRpbmctcmlnaHQ6MTBweDt9XHJcbi5tYXAtaGVhZCBoMntmb250LXNpemU6MjJweDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2s7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWJvdHRvbTowcHg7bWFyZ2luLXRvcDo2cHg7fVxyXG4ubWFwLWhlYWQgLm1hcC1idG57Ym9yZGVyOjJweCBzb2xpZCAjRkEzOTEzO2NvbG9yOiNGQTM5MTM7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmbG9hdDpyaWdodDt9XHJcbi5tYXAtaGVhZCAubWFwLWJ0bjpob3Zlcntib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O2JhY2tncm91bmQtY29sb3I6I0ZBMzkxMztjb2xvcjp3aGl0ZTt9XHJcbi5tYXAtaW5uZXJ7cG9zaXRpb246IHJlbGF0aXZlO31cclxuLnJpZ2h0LXNlY3Rpb257d2lkdGg6MzIwcHg7ZmxvYXQ6IHJpZ2h0O21heC13aWR0aDogMTAwJTtkaXNwbGF5OiBibG9jaztwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO3JpZ2h0OiAwO3otaW5kZXg6IDk5O2JhY2tncm91bmQ6I2ZmZjtoZWlnaHQ6IDEwMCU7Ym94LXNoYWRvdzogLTFweCAwcHggMTBweCAtNHB4O3RyYW5zaXRpb246IDQwMG1zO31cclxuLmxlZnQtc2VjdGlvbnt3aWR0aDozMjBweDtmbG9hdDogbGVmdDttYXgtd2lkdGg6IDEwMCU7ZGlzcGxheTogYmxvY2s7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDtsZWZ0OiAwO3otaW5kZXg6IDk5O2JhY2tncm91bmQ6XHJcbiAgICAjZmZmO2hlaWdodDogMTAwJTtib3gtc2hhZG93OiAtMXB4IDBweCAxMHB4IC00cHg7dHJhbnNpdGlvbjogNDAwbXM7fVxyXG4ubGVmdC1zZWN0aW9uLWxpdmV7d2lkdGg6MzIwcHg7ZmxvYXQ6IGxlZnQ7bWF4LXdpZHRoOiAxMDAlO2Rpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDQ1cHg7bGVmdDogMDt6LWluZGV4OiA5OTtiYWNrZ3JvdW5kOlxyXG4gICAgICAgICNmZmY7aGVpZ2h0OiAxMDAlO2JveC1zaGFkb3c6IC0xcHggMHB4IDEwcHggLTRweDt0cmFuc2l0aW9uOiA0MDBtczt9XHJcbi5tYXAtc2VjdGlvbnt3aWR0aDogMTAwJTttYXgtd2lkdGg6IDEwMCU7fVxyXG4ubWFwLWlubmVye2hlaWdodDo2MDBweDt9XHJcbi5sZWZ0X3NsaWRle2JhY2tncm91bmQ6ICMwMDkxZDI7O2NvbG9yOiNmZmY7dG9wOiAwO3JpZ2h0OiAtMzVweDtwb3NpdGlvbjogYWJzb2x1dGU7cGFkZGluZzogMTFweCAxNnB4IDExcHggMTJweDtib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMCAhaW1wb3J0YW50O1xyXG5jdXJzb3I6IHBvaW50ZXI7dHJhbnNpdGlvbjogMzAwbXM7fVxyXG4uaW5uZXItaGVhZGVye3BhZGRpbmc6MTBweCAxMHB4O2JhY2tncm91bmQtY29sb3I6I0ZDNkYzMTt9XHJcbi5pbm5lci1oZWFkZXIgc3BhbntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Zm9udC1zaXplOjE2cHg7Y29sb3I6d2hpdGU7fVxyXG4uaW5uZXItaGVhZGVyIHNwYW4udGl0bGV7bWFyZ2luLXJpZ2h0OjIwcHg7fVxyXG4uaW5uZXItaGVhZGVyIHNwYW4uY2FsZW5kYXJ7d2lkdGg6MjAwcHg7fVxyXG4uaW5uZXItaGVhZGVyIHNwYW4uY2FsZW5kYXIgLmZvcm0tY29udHJvbHtoZWlnaHQ6MjVweDtib3JkZXItcmFkaXVzOjMwcHg7fVxyXG4uaW5uZXItaGVhZGVyICBhe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0OnJpZ2h0O2NvbG9yOndoaXRlO2ZvbnQtc2l6ZToyMnB4O31cclxuLmlubmVyLWhlYWRlciAgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXJ7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uaW5uZXItYm9keXtwYWRkaW5nOjEwcHg7aGVpZ2h0OjQ1NXB4O31cclxuLmlubmVyLWJvZHkgLm5hdi10YWJze2JvcmRlcjpub25lO31cclxuLmlubmVyLWJvZHkgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmt7cGFkZGluZzowLjc1cmVtIDE0cHg7Ym9yZGVyOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6YmxhY2s7Ym9yZGVyLWJvdHRvbToycHggc29saWQgdHJhbnNwYXJlbnQ7fVxyXG5cclxuLmlubmVyLWJvZHkgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsgc3Bhbntmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE3cHg7fVxyXG4uaW5uZXItYm9keSAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluayBwe21hcmdpbi1ib3R0b206MHB4O31cclxuLmlubmVyLWJvZHkgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLCAuaW5uZXItYm9keSAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluazpob3Zlcntjb2xvcjojRkM2RjMxO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNGQzZGMzE7fVxyXG4udGFiLXNlYXJjaCAuZm9ybS1ncm91cHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4udGFiLWNvbnRlbnR7aGVpZ2h0OjQwMHB4O292ZXJmbG93LXk6YXV0bztvdmVyZmxvdy14OmhpZGRlbjt9XHJcbi50YWItc2VhcmNoIC5mb3JtLWdyb3VwIHNwYW57cG9zaXRpb246IGFic29sdXRlO2NvbG9yOiNGQzZGMzE7cmlnaHQ6IDIwcHg7dG9wOiA1cHg7fVxyXG4udGlja2V0LWRldGFpbC1yb3d7cGFkZGluZzoxMHB4O21hcmdpbi1ib3R0b206MTVweDt9XHJcbi5zdHJpcC0xe2JhY2tncm91bmQtY29sb3I6I2Y3ZjdmNzt9XHJcbi5zdHJpcC0ye2JhY2tncm91bmQtY29sb3I6I2ZmZmZmZjt9XHJcbi50aWNrZXQtbnVtYmVyIHB7Zm9udC1zaXplOjIwcHg7Y29sb3I6YmxhY2s7Zm9udC13ZWlnaHQ6NjAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO31cclxuLnRpY2tldC1udW1iZXIgcCAudC1pY29ue3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjIwcHg7Ym9yZGVyLXJhZGl1czo1MHB4O3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQtY29sb3I6I0ZDNkYzMTtjb2xvcjp3aGl0ZTtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6MTJweCAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0Om5vcm1hbCAhaW1wb3J0YW50O31cclxuLnQtc3RhdXN7ZmxvYXQ6IHJpZ2h0O2ZvbnQtc2l6ZTogMTFweDtmb250LXdlaWdodDogNjAwO2Rpc3BsYXk6IGlubGluZS1ibG9jaztjb2xvcjogIzZhOTg0MDtwYWRkaW5nOiA1cHggMTJweDtib3JkZXItcmFkaXVzOiAzMHB4O2JvcmRlcjogMXB4IHNvbGlkICM2Yjk5NDE7fVxyXG4udGlja2V0LWluZm8gcHttYXJnaW4tYm90dG9tOjVweDtjb2xvcjpibGFjaztwb3NpdGlvbjogcmVsYXRpdmU7cGFkZGluZy1sZWZ0OjIwcHg7fVxyXG4udGlja2V0LWluZm8gcC5jdXN0LW5hbWV7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NjAwO31cclxuLnRpY2tldC1pbmZvIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybzt9XHJcblxyXG4udGlja2V0LWluZm8gcCBpe2NvbG9yOiNGQzZGMzE7bWFyZ2luLXJpZ2h0OjhweDtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDowO3RvcDozcHg7fVxyXG4uZGV0YWlsLWJ0bntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ZmxvYXQ6cmlnaHQ7Ym9yZGVyOjFweCBzb2xpZCAjRkM2RjMxO2NvbG9yOiNGQzZGMzE7Ym9yZGVyLXJhZGl1czoycHg7cGFkZGluZzoycHggNXB4O31cclxuLmRldGFpbC1idG46aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojRkM2RjMxO2NvbG9yOndoaXRlICFpbXBvcnRhbnQ7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDt9XHJcbi5zdHlsZS0xOjotd2Via2l0LXNjcm9sbGJhci10cmFja3std2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO2JvcmRlci1yYWRpdXM6IDEwcHg7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9XHJcbi5zdHlsZS0xOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDo1cHg7YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTt9XHJcbi5zdHlsZS0xOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntib3JkZXItcmFkaXVzOiAxMHB4Oy13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtiYWNrZ3JvdW5kLWNvbG9yOiNmYzZmMzE7fVxyXG4uYWdlbnQtcm93e3BhZGRpbmc6NXB4IDEwcHggMTBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZDhkOGQ4O31cclxuLmFnZW50LW5hbWV7d2lkdGg6ODAlO2Zsb2F0OmxlZnQ7cGFkZGluZy1sZWZ0OjE1cHg7cG9zaXRpb246IHJlbGF0aXZlO31cclxuLmFnZW50LW5hbWUgcHttYXJnaW4tYm90dG9tOjBweDt9XHJcbi5uYWdlbnR7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOiNGQzZGMzE7cGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OiAxMnB4O31cclxuLnN0YXR1cy1hY3RpdmV7d2lkdGg6OHB4O2hlaWdodDo4cHg7bGluZS1oZWlnaHQ6OHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JhY2tncm91bmQ6Z3JlZW47Ym9yZGVyLXJhZGl1czo1MHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OjA7dG9wOjhweDt9XHJcbi5lbmdpbmVlci1pY29ue3dpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6XHJcbiAgICAjZWFlYWVhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC04cHg7XHJcbiAgICB0b3A6IDNweDt9XHJcbi5hdGltZXtjb2xvcjpncmV5O2ZvbnQtc2l6ZToxMnB4O31cclxuLnRhc2t7ZmxvYXQ6cmlnaHQ7d2lkdGg6MjAlO3RleHQtYWxpZ246Y2VudGVyO31cclxuLnRhc2sgcHttYXJnaW4tYm90dG9tOjBweDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2s7fVxyXG4uYWdlbnQtcm93LWlubmVyLCAuYWdlbnQtcm93LWlubmVyLWxpdmV7d2lkdGg6MzIwcHg7ZmxvYXQ6IGxlZnQ7bWF4LXdpZHRoOiAxMDAlO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6MDt6LWluZGV4OiA5OTtiYWNrZ3JvdW5kOlxyXG4gICAgd2hpdGU7aGVpZ2h0OiAxMDAlO2JveC1zaGFkb3c6IC0xcHggMHB4IDEwcHggLTRweDt0cmFuc2l0aW9uOiA0MDBtczt9XHJcbi5hZ2VudC1oZWFkZXJ7YmFja2dyb3VuZDojMDA3ZWM0O3BhZGRpbmc6IDhweCAxMHB4O3dpZHRoOiAxMDAlO31cclxuLmFnZW50LWltYWdle3dpZHRoOiA1MHB4O2hlaWdodDogNTBweDtsaW5lLWhlaWdodDogNThweDtmbG9hdDogbGVmdDt0ZXh0LWFsaWduOiBjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czogNTAlO31cclxuLmFnZW50LWltYWdlIGl7Zm9udC1zaXplOjMwcHg7Y29sb3I6YmxhY2s7fVxyXG4uYWdlbnQtaW1hZ2UtaW5mb3t3aWR0aDogMjQ2cHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO2Zsb2F0OiBsZWZ0O3BhZGRpbmctbGVmdDogMjBweDtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4uYWdlbnQtaW1hZ2UtaW5mbyBoMntmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOndoaXRlO3BhZGRpbmctYm90dG9tOjVweDttYXJnaW4tYm90dG9tOjBweDt9XHJcbi5hZ2VudC1pbWFnZS1pbmZvIHB7Zm9udC1zaXplOjE0cHg7Y29sb3I6d2hpdGU7bWFyZ2luLWJvdHRvbTowcHg7fVxyXG4uY2xvc2UtYnRue3dpZHRoOiAyMHB4O2hlaWdodDogMjBweDtsaW5lLWhlaWdodDogMjBweDtjb2xvcjogI2Y3NDgyMjtwb3NpdGlvbjogYWJzb2x1dGU7YmFja2dyb3VuZDogd2hpdGU7dG9wOiAwO3JpZ2h0OiAwO1xyXG5mb250LXdlaWdodDogNjAwO3otaW5kZXg6IDk5OTk7Ym9yZGVyLXJhZGl1czogNTAlO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5hZ2VudC1pbmZve2JhY2tncm91bmQ6Izc4YjhkYztwYWRkaW5nOiA4cHggMTBweDt3aWR0aDogMTAwJTtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4uYWdlbnQtaW5mbyAuYWdlbnQtaWQgcHttYXJnaW4tYm90dG9tOjBweDtwYWRkaW5nLWJvdHRvbTo1cHg7Zm9udC1zaXplOjEycHg7Y29sb3I6d2hpdGU7Zm9udC13ZWlnaHQ6NjAwO31cclxuLmFnZW50LWluZm8gLmFnZW50LWlkIHAuYWdlbnQtYWRkcmVzc3twb3NpdGlvbjogcmVsYXRpdmU7cGFkZGluZy1sZWZ0OjIwcHg7Zm9udC1zaXplOjEycHg7bWFyZ2luLWJvdHRvbTowcHg7Y29sb3I6d2hpdGU7Zm9udC13ZWlnaHQ6bm9ybWFsO31cclxuLmFnZW50LWluZm8gLmFnZW50LWlkIHAuYWdlbnQtYWRkcmVzcyBpe3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OjA7dG9wOjNweDtjb2xvcjp3aGl0ZTt9XHJcbi5hZ2VudC1pbmZvLXN0YXR1c3tkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzogM3B4IDlweDtiYWNrZ3JvdW5kOiBncmVlbjtib3JkZXItcmFkaXVzOiA1cHg7cG9zaXRpb246IGFic29sdXRlO3RvcDogNnB4O3JpZ2h0OiAxMXB4O31cclxuLmFnZW50LXRhc2t7aGVpZ2h0OiAzODhweDtvdmVyZmxvdy15OiBhdXRvO3BhZGRpbmc6MTBweDt9XHJcbi5hZ2VudC10YXNrLXJvd3tib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZDhkOGQ4OztwYWRkaW5nLWJvdHRvbToxMHB4O21hcmdpbi1ib3R0b206MTBweDt9XHJcbi5hZ2VudC10YXNrLXJvdyBwLCAuYWdlbnQtdGFzay1yb3cgaDJ7bWFyZ2luLWJvdHRvbTowcHg7fVxyXG4uYWdlbnQtdGFzay10b3AgaDJ7ZGlzcGxheTogaW5saW5lLWJsb2NrO2ZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogNjAwO2NvbG9yOiAjZmM2ZjMxO3BhZGRpbmctYm90dG9tOjhweDt9XHJcbi5hZ2VudC10YXNrLXRvcCBwe2Rpc3BsYXk6IGlubGluZS1ibG9jaztmbG9hdDogcmlnaHQ7Y29sb3I6IHJlZDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7fVxyXG4uYWdlbnQtdGFzay1taWQgcHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Y29sb3I6IGJsYWNrO2ZvbnQtc2l6ZTogMTRweDtwYWRkaW5nLWJvdHRvbTo4cHg7Zm9udC13ZWlnaHQ6NjAwO31cclxuLmF0LWRldGFpbHtmbG9hdDogcmlnaHQ7cGFkZGluZzogM3B4IDhweDtjb2xvcjogd2hpdGU7YmFja2dyb3VuZDogI2ZjNmYzMTtib3JkZXItcmFkaXVzOiAzMHB4O2ZvbnQtc2l6ZTogMTJweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Y3Vyc29yOiBwb2ludGVyO31cclxuLmF0LWRldGFpbDpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6Ymx1ZTsgfVxyXG4uYWdlbnQtdGFzay1ib3R0b20gcHtmb250LXNpemU6MTRweDtjb2xvcjpibGFjazt9XHJcbi5tb2RhbC1iYWNrZHJvcC5zaG93e29wYWNpdHk6IDAgIWltcG9ydGFudDt9XHJcbiNkZXRhaWxNb2RhbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC40KTt9XHJcbiNkZXRhaWxNb2RhbCAubW9kYWwtY29udGVudHt6LWluZGV4Ojk5OTk5OTtib3JkZXI6bm9uZTt9XHJcbiNkZXRhaWxNb2RhbCAubW9kYWwtaGVhZGVye3BhZGRpbmc6IDAuODVyZW07fVxyXG4jZGV0YWlsTW9kYWwgLm1vZGFsLWRpYWxvZ3ttYXgtd2lkdGg6NjUwcHh9XHJcbiNkZXRhaWxNb2RhbCAubW9kYWwtdGl0bGV7Zm9udC1zaXplOjIycHggIWltcG9ydGFudDtmb250LXdlaWdodDo2MDA7Y29sb3I6YmxhY2s7fVxyXG5cclxuLmRldGFpbHMtdGFicyAudGFiLWNvbnRlbnR7aGVpZ2h0OmF1dG8gIWltcG9ydGFudDt9XHJcbi5kZXRhaWxzLXRhYnMgLm5hdi5uYXYtdGFic3tCQUNLR1JPVU5EOiAjRTdFN0U3O21hcmdpbi1ib3R0b206MTBweCAhaW1wb3J0YW50O31cclxuLmRldGFpbHMtdGFicyAubmF2Lm5hdi10YWJzIGxpe2JvcmRlci1yaWdodDoxcHggc29saWQgI2Q2ZDZkNn1cclxuLmRldGFpbHMtdGFicyAubmF2Lm5hdi10YWJzIGxpOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0Om5vbmU7fVxyXG4uZGV0YWlscy10YWJzIC5uYXYubmF2LXRhYnMgbGkgYS5hY3RpdmUsIC5kZXRhaWxzLXRhYnMgLm5hdi5uYXYtdGFicyBsaSBhOmhvdmVye2NvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2JvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjEzNjZCICFpbXBvcnRhbnQ7YmFja2dyb3VuZDogIzIxMzY2Qjt9XHJcbi50YXNrLWRldGFpbC0xLWJveCwgLnRhc2stZGV0YWlsLTItYm94e2hlaWdodDoyMDBweDt9XHJcbi50YXNrLWRldGFpbC0xLWJveCwgLnRhc2stZGV0YWlsLTItYm94LCAudGFzay1kZXRhaWwtMy1ib3gsIC50YXNrLWRldGFpbC00LWJveHtiYWNrZ3JvdW5kLWNvbG9yOiNlN2U3ZTc7cGFkZGluZzoxMnB4IDhweDttYXJnaW4tYm90dG9tOjE1cHg7fVxyXG4udGFzay1kZXRhaWwtMS1ib3ggLnRhYmxle21hcmdpbi1ib3R0b206MHB4O31cclxuLnRhc2stZGV0YWlsLTEtYm94IC50YWJsZSB0ciB0ZHtwYWRkaW5nOiAwLjM1cmVtO2JvcmRlci10b3A6bm9uZTt9XHJcbi50YXNrLWRldGFpbC0xLWJveCAudGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGR7Zm9udC13ZWlnaHQ6NjAwO3dpZHRoOjYwJTt9XHJcbi50YXNrLWRldGFpbC0yLWJveCBoMiwgLnRhc2stZGV0YWlsLTMtYm94IGgyLCAudGFzay1kZXRhaWwtNC1ib3ggaDJ7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOmJsYWNrO3BhZGRpbmctYm90dG9tOjEwcHg7fVxyXG4udGFzay1kZXRhaWwtMi1ib3ggdWx7cGFkZGluZy1sZWZ0OjA7bGlzdC1zdHlsZTpub25lO31cclxuLnRhc2stZGV0YWlsLTItYm94IHVsIGxpe3Bvc2l0aW9uOiByZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6MjBweDtjb2xvcjpibGFjaztmb250LXNpemU6MTRweDtwYWRkaW5nLWJvdHRvbTo1cHg7fVxyXG4udGFzay1kZXRhaWwtMi1ib3ggdWwgbGkgaXtjb2xvcjojZmM2ZjMxO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6M3B4O2xlZnQ6MHB4O31cclxuLnRhc2stZGV0YWlsLTMtYm94IHVse2NvbHVtbi1jb3VudDoyO2xpc3Qtc3R5bGUtdHlwZTpub25lO3BhZGRpbmctbGVmdDowO31cclxuLnRhc2stZGV0YWlsLTMtYm94IHVsIGxpe2NvbG9yOmJsYWNrO3BhZGRpbmctYm90dG9tOjVweDt9XHJcbi50YXNrLWRldGFpbC00LWJveCBwe2ZvbnQtd2VpZ2h0Om5vcm1hbDt9XHJcbi5tb2RhbC1mb290ZXIgLmJ0bntiYWNrZ3JvdW5kLWNvbG9yOiMwMDg0Q0E7Y29sb3I6d2hpdGU7fVxyXG4uYWN0aXZpdHktdGltZWxpbmUtcm93e2JhY2tncm91bmQtY29sb3I6I2RjZGNkYztwYWRkaW5nOjEwcHg7Ym9yZGVyLXJhZGl1czo1cHg7bWFyZ2luLWJvdHRvbToxNXB4O31cclxuLmFjdGl2aXR5LXRpbWVsaW5lLXJvdyAuZGVsaXZlcnktc3RhdHVzIHB7cGFkZGluZzozcHggMTJweDtjb2xvcjp3aGl0ZTtmb250LXNpemU6MTJweDtiYWNrZ3JvdW5kLWNvbG9yOiNGRjc5MDA7Ym9yZGVyLXJhZGl1czozcHg7fVxyXG4uYWN0aXZpdHktdGltZWxpbmUtcm93IC5kZWxpdmVyeS1zdGF0dXMgc3BhbntmbG9hdDpyaWdodDtjb2xvcjpibGFjazt9XHJcbi5kZWxpdmVyeS1zdGF0dXN7bWFyZ2luLWJvdHRvbToxMHB4O31cclxuI215TW9kYWwgdWx7bGlzdC1zdHlsZTpub25lO3BhZGRpbmctbGVmdDowcHg7fVxyXG4jbXlNb2RhbCB1bCBsaXtwYWRkaW5nLWJvdHRvbTogNXB4O21hcmdpbi1ib3R0b206IDVweDtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZTdlNzt9XHJcbiNteU1vZGFsIHVsIGxpIGltZ3twYWRkaW5nLXJpZ2h0OjEwcHg7fVxyXG4jbXlNb2RhbCB1bCBsaSBzcGFue21hcmdpbi1ib3R0b206MHB4O2ZvbnQtc2l6ZToxNXB4O2NvbG9yOmJsYWNrO31cclxuLmt0LWNvbnRlbnR7cGFkZGluZzowcHggMHB4IDI1cHg7fVxyXG5cclxuLmFnZW50LXRhc2stdG9wLkNBTkNFTEVEIHB7ZGlzcGxheTogaW5saW5lLWJsb2NrOyBmbG9hdDogcmlnaHQ7IGNvbG9yOiByZWQ7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxMnB4O31cclxuLmFnZW50LXRhc2stdG9wLlVQQ09NSU5HIHB7ZGlzcGxheTogaW5saW5lLWJsb2NrOyBmbG9hdDogcmlnaHQ7IGNvbG9yOiBibHVlO2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTJweDt9XHJcbi5hZ2VudC10YXNrLXRvcC5DTE9TRUQgcHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZsb2F0OiByaWdodDsgY29sb3I6IGdyZWVuO2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTJweDt9XHJcbi5hZ2VudC10YXNrLXRvcC5PVkVSRFVFIHB7ZGlzcGxheTogaW5saW5lLWJsb2NrOyBmbG9hdDogcmlnaHQ7IGNvbG9yOiBvcmFuZ2VyZWQ7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxMnB4O31cclxuLmFnZW50LXRhc2stdG9wLkhPTEQgcHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZsb2F0OiByaWdodDsgY29sb3I6IHllbGxvd2dyZWVuO2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTJweDt9XHJcbi5hZ2VudC10YXNrLXRvcC5JTlBST0dSRVNTIHB7ZGlzcGxheTogaW5saW5lLWJsb2NrOyBmbG9hdDogcmlnaHQ7IGNvbG9yOiBncmVlbjtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7fVxyXG4uYWdlbnQtdGFzay10b3AuVU5TRUNIRURVTEVEIHB7ZGlzcGxheTogaW5saW5lLWJsb2NrOyBmbG9hdDogcmlnaHQ7IGNvbG9yOiBsaWdodHBpbms7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxMnB4O31cclxuXHJcbi5jbG9zZUNsYXNzLWxlZnR7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTt9XHJcbi5jbG9zZUNsYXNzLXJpZ2h0e3RyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTt9XHJcbi5yaWdodF9zbGlkZXsgICAgYmFja2dyb3VuZDogIzAwOTFkMjtjb2xvcjogI2ZmZjt0b3A6IDA7bGVmdDogLTM1cHg7cG9zaXRpb246IGFic29sdXRlO3BhZGRpbmc6IDExcHggMTZweCAxMXB4IDEycHg7Ym9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4ICFpbXBvcnRhbnQ7Y3Vyc29yOiBwb2ludGVyO3RyYW5zaXRpb246IDMwMG1zO31cclxuLm1hcC1pbm5lcntvdmVyZmxvdzpoaWRkZW47fVxyXG4uTG9jYXRpb25EYXRleyB3aWR0aDogMTAwJTsgfS5Mb2NhdGlvbkRhdGUgc3BhbnsgZm9udC1zaXplOiAxMHB4O3BhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7IH1cclxuXHJcblxyXG4iXX0= */", ".box-item[_ngcontent-%COMP%] {\n      width: 100%;\n      z-index: 1000\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"] }, { type: src_app_services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }, { type: src_app_services_generic_service__WEBPACK_IMPORTED_MODULE_8__["GenericService"] }, { type: src_app_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_9__["GenicProfileService"] }, { type: src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_10__["CalendarService"] }]; }, { modalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalContent', { static: true }]
        }] }); })();


/***/ }),

/***/ "Gbwi":
/*!************************************************************!*\
  !*** ./node_modules/@fullcalendar/interaction/main.esm.js ***!
  \************************************************************/
/*! exports provided: default, Draggable, FeaturefulElementDragging, PointerDragging, ThirdPartyDraggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return ExternalDraggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturefulElementDragging", function() { return FeaturefulElementDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerDragging", function() { return PointerDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyDraggable", function() { return ThirdPartyDraggable; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "SZB9");
/*!
FullCalendar Interaction Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].touchMouseIgnoreWait = 500;
var ignoreMouseDepth = 0;
var listenerCnt = 0;
var isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/
var PointerDragging = /** @class */ (function () {
    function PointerDragging(containerEl) {
        var _this = this;
        this.subjectEl = null;
        this.downEl = null;
        // options that can be directly assigned by caller
        this.selector = ''; // will cause subjectEl in all emitted events to be this element
        this.handleSelector = '';
        this.shouldIgnoreMove = false;
        this.shouldWatchScroll = true; // for simulating pointermove on scroll
        // internal states
        this.isDragging = false;
        this.isTouchDragging = false;
        this.wasTouchScroll = false;
        // Mouse
        // ----------------------------------------------------------------------------------------------------
        this.handleMouseDown = function (ev) {
            if (!_this.shouldIgnoreMouse() &&
                isPrimaryMouseButton(ev) &&
                _this.tryStart(ev)) {
                var pev = _this.createEventFromMouse(ev, true);
                _this.emitter.trigger('pointerdown', pev);
                _this.initScrollWatch(pev);
                if (!_this.shouldIgnoreMove) {
                    document.addEventListener('mousemove', _this.handleMouseMove);
                }
                document.addEventListener('mouseup', _this.handleMouseUp);
            }
        };
        this.handleMouseMove = function (ev) {
            var pev = _this.createEventFromMouse(ev);
            _this.recordCoords(pev);
            _this.emitter.trigger('pointermove', pev);
        };
        this.handleMouseUp = function (ev) {
            document.removeEventListener('mousemove', _this.handleMouseMove);
            document.removeEventListener('mouseup', _this.handleMouseUp);
            _this.emitter.trigger('pointerup', _this.createEventFromMouse(ev));
            _this.cleanup(); // call last so that pointerup has access to props
        };
        // Touch
        // ----------------------------------------------------------------------------------------------------
        this.handleTouchStart = function (ev) {
            if (_this.tryStart(ev)) {
                _this.isTouchDragging = true;
                var pev = _this.createEventFromTouch(ev, true);
                _this.emitter.trigger('pointerdown', pev);
                _this.initScrollWatch(pev);
                // unlike mouse, need to attach to target, not document
                // https://stackoverflow.com/a/45760014
                var target = ev.target;
                if (!_this.shouldIgnoreMove) {
                    target.addEventListener('touchmove', _this.handleTouchMove);
                }
                target.addEventListener('touchend', _this.handleTouchEnd);
                target.addEventListener('touchcancel', _this.handleTouchEnd); // treat it as a touch end
                // attach a handler to get called when ANY scroll action happens on the page.
                // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
                // http://stackoverflow.com/a/32954565/96342
                window.addEventListener('scroll', _this.handleTouchScroll, true // useCapture
                );
            }
        };
        this.handleTouchMove = function (ev) {
            var pev = _this.createEventFromTouch(ev);
            _this.recordCoords(pev);
            _this.emitter.trigger('pointermove', pev);
        };
        this.handleTouchEnd = function (ev) {
            if (_this.isDragging) { // done to guard against touchend followed by touchcancel
                var target = ev.target;
                target.removeEventListener('touchmove', _this.handleTouchMove);
                target.removeEventListener('touchend', _this.handleTouchEnd);
                target.removeEventListener('touchcancel', _this.handleTouchEnd);
                window.removeEventListener('scroll', _this.handleTouchScroll, true); // useCaptured=true
                _this.emitter.trigger('pointerup', _this.createEventFromTouch(ev));
                _this.cleanup(); // call last so that pointerup has access to props
                _this.isTouchDragging = false;
                startIgnoringMouse();
            }
        };
        this.handleTouchScroll = function () {
            _this.wasTouchScroll = true;
        };
        this.handleScroll = function (ev) {
            if (!_this.shouldIgnoreMove) {
                var pageX = (window.pageXOffset - _this.prevScrollX) + _this.prevPageX;
                var pageY = (window.pageYOffset - _this.prevScrollY) + _this.prevPageY;
                _this.emitter.trigger('pointermove', {
                    origEvent: ev,
                    isTouch: _this.isTouchDragging,
                    subjectEl: _this.subjectEl,
                    pageX: pageX,
                    pageY: pageY,
                    deltaX: pageX - _this.origPageX,
                    deltaY: pageY - _this.origPageY
                });
            }
        };
        this.containerEl = containerEl;
        this.emitter = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EmitterMixin"]();
        containerEl.addEventListener('mousedown', this.handleMouseDown);
        containerEl.addEventListener('touchstart', this.handleTouchStart, { passive: true });
        listenerCreated();
    }
    PointerDragging.prototype.destroy = function () {
        this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
        this.containerEl.removeEventListener('touchstart', this.handleTouchStart, { passive: true });
        listenerDestroyed();
    };
    PointerDragging.prototype.tryStart = function (ev) {
        var subjectEl = this.querySubjectEl(ev);
        var downEl = ev.target;
        if (subjectEl &&
            (!this.handleSelector || Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(downEl, this.handleSelector))) {
            this.subjectEl = subjectEl;
            this.downEl = downEl;
            this.isDragging = true; // do this first so cancelTouchScroll will work
            this.wasTouchScroll = false;
            return true;
        }
        return false;
    };
    PointerDragging.prototype.cleanup = function () {
        isWindowTouchMoveCancelled = false;
        this.isDragging = false;
        this.subjectEl = null;
        this.downEl = null;
        // keep wasTouchScroll around for later access
        this.destroyScrollWatch();
    };
    PointerDragging.prototype.querySubjectEl = function (ev) {
        if (this.selector) {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(ev.target, this.selector);
        }
        else {
            return this.containerEl;
        }
    };
    PointerDragging.prototype.shouldIgnoreMouse = function () {
        return ignoreMouseDepth || this.isTouchDragging;
    };
    // can be called by user of this class, to cancel touch-based scrolling for the current drag
    PointerDragging.prototype.cancelTouchScroll = function () {
        if (this.isDragging) {
            isWindowTouchMoveCancelled = true;
        }
    };
    // Scrolling that simulates pointermoves
    // ----------------------------------------------------------------------------------------------------
    PointerDragging.prototype.initScrollWatch = function (ev) {
        if (this.shouldWatchScroll) {
            this.recordCoords(ev);
            window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
        }
    };
    PointerDragging.prototype.recordCoords = function (ev) {
        if (this.shouldWatchScroll) {
            this.prevPageX = ev.pageX;
            this.prevPageY = ev.pageY;
            this.prevScrollX = window.pageXOffset;
            this.prevScrollY = window.pageYOffset;
        }
    };
    PointerDragging.prototype.destroyScrollWatch = function () {
        if (this.shouldWatchScroll) {
            window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
        }
    };
    // Event Normalization
    // ----------------------------------------------------------------------------------------------------
    PointerDragging.prototype.createEventFromMouse = function (ev, isFirst) {
        var deltaX = 0;
        var deltaY = 0;
        // TODO: repeat code
        if (isFirst) {
            this.origPageX = ev.pageX;
            this.origPageY = ev.pageY;
        }
        else {
            deltaX = ev.pageX - this.origPageX;
            deltaY = ev.pageY - this.origPageY;
        }
        return {
            origEvent: ev,
            isTouch: false,
            subjectEl: this.subjectEl,
            pageX: ev.pageX,
            pageY: ev.pageY,
            deltaX: deltaX,
            deltaY: deltaY
        };
    };
    PointerDragging.prototype.createEventFromTouch = function (ev, isFirst) {
        var touches = ev.touches;
        var pageX;
        var pageY;
        var deltaX = 0;
        var deltaY = 0;
        // if touch coords available, prefer,
        // because FF would give bad ev.pageX ev.pageY
        if (touches && touches.length) {
            pageX = touches[0].pageX;
            pageY = touches[0].pageY;
        }
        else {
            pageX = ev.pageX;
            pageY = ev.pageY;
        }
        // TODO: repeat code
        if (isFirst) {
            this.origPageX = pageX;
            this.origPageY = pageY;
        }
        else {
            deltaX = pageX - this.origPageX;
            deltaY = pageY - this.origPageY;
        }
        return {
            origEvent: ev,
            isTouch: true,
            subjectEl: this.subjectEl,
            pageX: pageX,
            pageY: pageY,
            deltaX: deltaX,
            deltaY: deltaY
        };
    };
    return PointerDragging;
}());
// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
    return ev.button === 0 && !ev.ctrlKey;
}
// Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------
function startIgnoringMouse() {
    ignoreMouseDepth++;
    setTimeout(function () {
        ignoreMouseDepth--;
    }, _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].touchMouseIgnoreWait);
}
// We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------
function listenerCreated() {
    if (!(listenerCnt++)) {
        window.addEventListener('touchmove', onWindowTouchMove, { passive: false });
    }
}
function listenerDestroyed() {
    if (!(--listenerCnt)) {
        window.removeEventListener('touchmove', onWindowTouchMove, { passive: false });
    }
}
function onWindowTouchMove(ev) {
    if (isWindowTouchMoveCancelled) {
        ev.preventDefault();
    }
}

/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/
var ElementMirror = /** @class */ (function () {
    function ElementMirror() {
        this.isVisible = false; // must be explicitly enabled
        this.sourceEl = null;
        this.mirrorEl = null;
        this.sourceElRect = null; // screen coords relative to viewport
        // options that can be set directly by caller
        this.parentNode = document.body;
        this.zIndex = 9999;
        this.revertDuration = 0;
    }
    ElementMirror.prototype.start = function (sourceEl, pageX, pageY) {
        this.sourceEl = sourceEl;
        this.sourceElRect = this.sourceEl.getBoundingClientRect();
        this.origScreenX = pageX - window.pageXOffset;
        this.origScreenY = pageY - window.pageYOffset;
        this.deltaX = 0;
        this.deltaY = 0;
        this.updateElPosition();
    };
    ElementMirror.prototype.handleMove = function (pageX, pageY) {
        this.deltaX = (pageX - window.pageXOffset) - this.origScreenX;
        this.deltaY = (pageY - window.pageYOffset) - this.origScreenY;
        this.updateElPosition();
    };
    // can be called before start
    ElementMirror.prototype.setIsVisible = function (bool) {
        if (bool) {
            if (!this.isVisible) {
                if (this.mirrorEl) {
                    this.mirrorEl.style.display = '';
                }
                this.isVisible = bool; // needs to happen before updateElPosition
                this.updateElPosition(); // because was not updating the position while invisible
            }
        }
        else {
            if (this.isVisible) {
                if (this.mirrorEl) {
                    this.mirrorEl.style.display = 'none';
                }
                this.isVisible = bool;
            }
        }
    };
    // always async
    ElementMirror.prototype.stop = function (needsRevertAnimation, callback) {
        var _this = this;
        var done = function () {
            _this.cleanup();
            callback();
        };
        if (needsRevertAnimation &&
            this.mirrorEl &&
            this.isVisible &&
            this.revertDuration && // if 0, transition won't work
            (this.deltaX || this.deltaY) // if same coords, transition won't work
        ) {
            this.doRevertAnimation(done, this.revertDuration);
        }
        else {
            setTimeout(done, 0);
        }
    };
    ElementMirror.prototype.doRevertAnimation = function (callback, revertDuration) {
        var mirrorEl = this.mirrorEl;
        var finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
        mirrorEl.style.transition =
            'top ' + revertDuration + 'ms,' +
                'left ' + revertDuration + 'ms';
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(mirrorEl, {
            left: finalSourceElRect.left,
            top: finalSourceElRect.top
        });
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["whenTransitionDone"])(mirrorEl, function () {
            mirrorEl.style.transition = '';
            callback();
        });
    };
    ElementMirror.prototype.cleanup = function () {
        if (this.mirrorEl) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.mirrorEl);
            this.mirrorEl = null;
        }
        this.sourceEl = null;
    };
    ElementMirror.prototype.updateElPosition = function () {
        if (this.sourceEl && this.isVisible) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(this.getMirrorEl(), {
                left: this.sourceElRect.left + this.deltaX,
                top: this.sourceElRect.top + this.deltaY
            });
        }
    };
    ElementMirror.prototype.getMirrorEl = function () {
        var sourceElRect = this.sourceElRect;
        var mirrorEl = this.mirrorEl;
        if (!mirrorEl) {
            mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
            // we don't want long taps or any mouse interaction causing selection/menus.
            // would use preventSelection(), but that prevents selectstart, causing problems.
            mirrorEl.classList.add('fc-unselectable');
            mirrorEl.classList.add('fc-dragging');
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(mirrorEl, {
                position: 'fixed',
                zIndex: this.zIndex,
                visibility: '',
                boxSizing: 'border-box',
                width: sourceElRect.right - sourceElRect.left,
                height: sourceElRect.bottom - sourceElRect.top,
                right: 'auto',
                bottom: 'auto',
                margin: 0
            });
            this.parentNode.appendChild(mirrorEl);
        }
        return mirrorEl;
    };
    return ElementMirror;
}());

/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/
var ScrollGeomCache = /** @class */ (function (_super) {
    __extends(ScrollGeomCache, _super);
    function ScrollGeomCache(scrollController, doesListening) {
        var _this = _super.call(this) || this;
        _this.handleScroll = function () {
            _this.scrollTop = _this.scrollController.getScrollTop();
            _this.scrollLeft = _this.scrollController.getScrollLeft();
            _this.handleScrollChange();
        };
        _this.scrollController = scrollController;
        _this.doesListening = doesListening;
        _this.scrollTop = _this.origScrollTop = scrollController.getScrollTop();
        _this.scrollLeft = _this.origScrollLeft = scrollController.getScrollLeft();
        _this.scrollWidth = scrollController.getScrollWidth();
        _this.scrollHeight = scrollController.getScrollHeight();
        _this.clientWidth = scrollController.getClientWidth();
        _this.clientHeight = scrollController.getClientHeight();
        _this.clientRect = _this.computeClientRect(); // do last in case it needs cached values
        if (_this.doesListening) {
            _this.getEventTarget().addEventListener('scroll', _this.handleScroll);
        }
        return _this;
    }
    ScrollGeomCache.prototype.destroy = function () {
        if (this.doesListening) {
            this.getEventTarget().removeEventListener('scroll', this.handleScroll);
        }
    };
    ScrollGeomCache.prototype.getScrollTop = function () {
        return this.scrollTop;
    };
    ScrollGeomCache.prototype.getScrollLeft = function () {
        return this.scrollLeft;
    };
    ScrollGeomCache.prototype.setScrollTop = function (top) {
        this.scrollController.setScrollTop(top);
        if (!this.doesListening) {
            // we are not relying on the element to normalize out-of-bounds scroll values
            // so we need to sanitize ourselves
            this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
            this.handleScrollChange();
        }
    };
    ScrollGeomCache.prototype.setScrollLeft = function (top) {
        this.scrollController.setScrollLeft(top);
        if (!this.doesListening) {
            // we are not relying on the element to normalize out-of-bounds scroll values
            // so we need to sanitize ourselves
            this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
            this.handleScrollChange();
        }
    };
    ScrollGeomCache.prototype.getClientWidth = function () {
        return this.clientWidth;
    };
    ScrollGeomCache.prototype.getClientHeight = function () {
        return this.clientHeight;
    };
    ScrollGeomCache.prototype.getScrollWidth = function () {
        return this.scrollWidth;
    };
    ScrollGeomCache.prototype.getScrollHeight = function () {
        return this.scrollHeight;
    };
    ScrollGeomCache.prototype.handleScrollChange = function () {
    };
    return ScrollGeomCache;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollController"]));
var ElementScrollGeomCache = /** @class */ (function (_super) {
    __extends(ElementScrollGeomCache, _super);
    function ElementScrollGeomCache(el, doesListening) {
        return _super.call(this, new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ElementScrollController"](el), doesListening) || this;
    }
    ElementScrollGeomCache.prototype.getEventTarget = function () {
        return this.scrollController.el;
    };
    ElementScrollGeomCache.prototype.computeClientRect = function () {
        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeInnerRect"])(this.scrollController.el);
    };
    return ElementScrollGeomCache;
}(ScrollGeomCache));
var WindowScrollGeomCache = /** @class */ (function (_super) {
    __extends(WindowScrollGeomCache, _super);
    function WindowScrollGeomCache(doesListening) {
        return _super.call(this, new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["WindowScrollController"](), doesListening) || this;
    }
    WindowScrollGeomCache.prototype.getEventTarget = function () {
        return window;
    };
    WindowScrollGeomCache.prototype.computeClientRect = function () {
        return {
            left: this.scrollLeft,
            right: this.scrollLeft + this.clientWidth,
            top: this.scrollTop,
            bottom: this.scrollTop + this.clientHeight
        };
    };
    // the window is the only scroll object that changes it's rectangle relative
    // to the document's topleft as it scrolls
    WindowScrollGeomCache.prototype.handleScrollChange = function () {
        this.clientRect = this.computeClientRect();
    };
    return WindowScrollGeomCache;
}(ScrollGeomCache));

// If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
var getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/
var AutoScroller = /** @class */ (function () {
    function AutoScroller() {
        var _this = this;
        // options that can be set by caller
        this.isEnabled = true;
        this.scrollQuery = [window, '.fc-scroller'];
        this.edgeThreshold = 50; // pixels
        this.maxVelocity = 300; // pixels per second
        // internal state
        this.pointerScreenX = null;
        this.pointerScreenY = null;
        this.isAnimating = false;
        this.scrollCaches = null;
        // protect against the initial pointerdown being too close to an edge and starting the scroll
        this.everMovedUp = false;
        this.everMovedDown = false;
        this.everMovedLeft = false;
        this.everMovedRight = false;
        this.animate = function () {
            if (_this.isAnimating) { // wasn't cancelled between animation calls
                var edge = _this.computeBestEdge(_this.pointerScreenX + window.pageXOffset, _this.pointerScreenY + window.pageYOffset);
                if (edge) {
                    var now = getTime();
                    _this.handleSide(edge, (now - _this.msSinceRequest) / 1000);
                    _this.requestAnimation(now);
                }
                else {
                    _this.isAnimating = false; // will stop animation
                }
            }
        };
    }
    AutoScroller.prototype.start = function (pageX, pageY) {
        if (this.isEnabled) {
            this.scrollCaches = this.buildCaches();
            this.pointerScreenX = null;
            this.pointerScreenY = null;
            this.everMovedUp = false;
            this.everMovedDown = false;
            this.everMovedLeft = false;
            this.everMovedRight = false;
            this.handleMove(pageX, pageY);
        }
    };
    AutoScroller.prototype.handleMove = function (pageX, pageY) {
        if (this.isEnabled) {
            var pointerScreenX = pageX - window.pageXOffset;
            var pointerScreenY = pageY - window.pageYOffset;
            var yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
            var xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
            if (yDelta < 0) {
                this.everMovedUp = true;
            }
            else if (yDelta > 0) {
                this.everMovedDown = true;
            }
            if (xDelta < 0) {
                this.everMovedLeft = true;
            }
            else if (xDelta > 0) {
                this.everMovedRight = true;
            }
            this.pointerScreenX = pointerScreenX;
            this.pointerScreenY = pointerScreenY;
            if (!this.isAnimating) {
                this.isAnimating = true;
                this.requestAnimation(getTime());
            }
        }
    };
    AutoScroller.prototype.stop = function () {
        if (this.isEnabled) {
            this.isAnimating = false; // will stop animation
            for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
                var scrollCache = _a[_i];
                scrollCache.destroy();
            }
            this.scrollCaches = null;
        }
    };
    AutoScroller.prototype.requestAnimation = function (now) {
        this.msSinceRequest = now;
        requestAnimationFrame(this.animate);
    };
    AutoScroller.prototype.handleSide = function (edge, seconds) {
        var scrollCache = edge.scrollCache;
        var edgeThreshold = this.edgeThreshold;
        var invDistance = edgeThreshold - edge.distance;
        var velocity = // the closer to the edge, the faster we scroll
         (invDistance * invDistance) / (edgeThreshold * edgeThreshold) * // quadratic
            this.maxVelocity * seconds;
        var sign = 1;
        switch (edge.name) {
            case 'left':
                sign = -1;
            // falls through
            case 'right':
                scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
                break;
            case 'top':
                sign = -1;
            // falls through
            case 'bottom':
                scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
                break;
        }
    };
    // left/top are relative to document topleft
    AutoScroller.prototype.computeBestEdge = function (left, top) {
        var edgeThreshold = this.edgeThreshold;
        var bestSide = null;
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            var rect = scrollCache.clientRect;
            var leftDist = left - rect.left;
            var rightDist = rect.right - left;
            var topDist = top - rect.top;
            var bottomDist = rect.bottom - top;
            // completely within the rect?
            if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
                if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() &&
                    (!bestSide || bestSide.distance > topDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'top', distance: topDist };
                }
                if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() &&
                    (!bestSide || bestSide.distance > bottomDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'bottom', distance: bottomDist };
                }
                if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() &&
                    (!bestSide || bestSide.distance > leftDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'left', distance: leftDist };
                }
                if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() &&
                    (!bestSide || bestSide.distance > rightDist)) {
                    bestSide = { scrollCache: scrollCache, name: 'right', distance: rightDist };
                }
            }
        }
        return bestSide;
    };
    AutoScroller.prototype.buildCaches = function () {
        return this.queryScrollEls().map(function (el) {
            if (el === window) {
                return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
            }
            else {
                return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
            }
        });
    };
    AutoScroller.prototype.queryScrollEls = function () {
        var els = [];
        for (var _i = 0, _a = this.scrollQuery; _i < _a.length; _i++) {
            var query = _a[_i];
            if (typeof query === 'object') {
                els.push(query);
            }
            else {
                els.push.apply(els, Array.prototype.slice.call(document.querySelectorAll(query)));
            }
        }
        return els;
    };
    return AutoScroller;
}());

/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/
var FeaturefulElementDragging = /** @class */ (function (_super) {
    __extends(FeaturefulElementDragging, _super);
    function FeaturefulElementDragging(containerEl) {
        var _this = _super.call(this, containerEl) || this;
        // options that can be directly set by caller
        // the caller can also set the PointerDragging's options as well
        _this.delay = null;
        _this.minDistance = 0;
        _this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
        _this.mirrorNeedsRevert = false;
        _this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
        _this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
        _this.isDelayEnded = false;
        _this.isDistanceSurpassed = false;
        _this.delayTimeoutId = null;
        _this.onPointerDown = function (ev) {
            if (!_this.isDragging) { // so new drag doesn't happen while revert animation is going
                _this.isInteracting = true;
                _this.isDelayEnded = false;
                _this.isDistanceSurpassed = false;
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["preventSelection"])(document.body);
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["preventContextMenu"])(document.body);
                // prevent links from being visited if there's an eventual drag.
                // also prevents selection in older browsers (maybe?).
                // not necessary for touch, besides, browser would complain about passiveness.
                if (!ev.isTouch) {
                    ev.origEvent.preventDefault();
                }
                _this.emitter.trigger('pointerdown', ev);
                if (!_this.pointer.shouldIgnoreMove) {
                    // actions related to initiating dragstart+dragmove+dragend...
                    _this.mirror.setIsVisible(false); // reset. caller must set-visible
                    _this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
                    _this.startDelay(ev);
                    if (!_this.minDistance) {
                        _this.handleDistanceSurpassed(ev);
                    }
                }
            }
        };
        _this.onPointerMove = function (ev) {
            if (_this.isInteracting) { // if false, still waiting for previous drag's revert
                _this.emitter.trigger('pointermove', ev);
                if (!_this.isDistanceSurpassed) {
                    var minDistance = _this.minDistance;
                    var distanceSq = void 0; // current distance from the origin, squared
                    var deltaX = ev.deltaX, deltaY = ev.deltaY;
                    distanceSq = deltaX * deltaX + deltaY * deltaY;
                    if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
                        _this.handleDistanceSurpassed(ev);
                    }
                }
                if (_this.isDragging) {
                    // a real pointer move? (not one simulated by scrolling)
                    if (ev.origEvent.type !== 'scroll') {
                        _this.mirror.handleMove(ev.pageX, ev.pageY);
                        _this.autoScroller.handleMove(ev.pageX, ev.pageY);
                    }
                    _this.emitter.trigger('dragmove', ev);
                }
            }
        };
        _this.onPointerUp = function (ev) {
            if (_this.isInteracting) { // if false, still waiting for previous drag's revert
                _this.isInteracting = false;
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["allowSelection"])(document.body);
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["allowContextMenu"])(document.body);
                _this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
                if (_this.isDragging) {
                    _this.autoScroller.stop();
                    _this.tryStopDrag(ev); // which will stop the mirror
                }
                if (_this.delayTimeoutId) {
                    clearTimeout(_this.delayTimeoutId);
                    _this.delayTimeoutId = null;
                }
            }
        };
        var pointer = _this.pointer = new PointerDragging(containerEl);
        pointer.emitter.on('pointerdown', _this.onPointerDown);
        pointer.emitter.on('pointermove', _this.onPointerMove);
        pointer.emitter.on('pointerup', _this.onPointerUp);
        _this.mirror = new ElementMirror();
        _this.autoScroller = new AutoScroller();
        return _this;
    }
    FeaturefulElementDragging.prototype.destroy = function () {
        this.pointer.destroy();
    };
    FeaturefulElementDragging.prototype.startDelay = function (ev) {
        var _this = this;
        if (typeof this.delay === 'number') {
            this.delayTimeoutId = setTimeout(function () {
                _this.delayTimeoutId = null;
                _this.handleDelayEnd(ev);
            }, this.delay); // not assignable to number!
        }
        else {
            this.handleDelayEnd(ev);
        }
    };
    FeaturefulElementDragging.prototype.handleDelayEnd = function (ev) {
        this.isDelayEnded = true;
        this.tryStartDrag(ev);
    };
    FeaturefulElementDragging.prototype.handleDistanceSurpassed = function (ev) {
        this.isDistanceSurpassed = true;
        this.tryStartDrag(ev);
    };
    FeaturefulElementDragging.prototype.tryStartDrag = function (ev) {
        if (this.isDelayEnded && this.isDistanceSurpassed) {
            if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
                this.isDragging = true;
                this.mirrorNeedsRevert = false;
                this.autoScroller.start(ev.pageX, ev.pageY);
                this.emitter.trigger('dragstart', ev);
                if (this.touchScrollAllowed === false) {
                    this.pointer.cancelTouchScroll();
                }
            }
        }
    };
    FeaturefulElementDragging.prototype.tryStopDrag = function (ev) {
        // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
        // that come from the document to fire beforehand. much more convenient this way.
        this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev) // bound with args
        );
    };
    FeaturefulElementDragging.prototype.stopDrag = function (ev) {
        this.isDragging = false;
        this.emitter.trigger('dragend', ev);
    };
    // fill in the implementations...
    FeaturefulElementDragging.prototype.setIgnoreMove = function (bool) {
        this.pointer.shouldIgnoreMove = bool;
    };
    FeaturefulElementDragging.prototype.setMirrorIsVisible = function (bool) {
        this.mirror.setIsVisible(bool);
    };
    FeaturefulElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
        this.mirrorNeedsRevert = bool;
    };
    FeaturefulElementDragging.prototype.setAutoScrollEnabled = function (bool) {
        this.autoScroller.isEnabled = bool;
    };
    return FeaturefulElementDragging;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ElementDragging"]));

/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/
var OffsetTracker = /** @class */ (function () {
    function OffsetTracker(el) {
        this.origRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(el);
        // will work fine for divs that have overflow:hidden
        this.scrollCaches = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getClippingParents"])(el).map(function (el) {
            return new ElementScrollGeomCache(el, true); // listen=true
        });
    }
    OffsetTracker.prototype.destroy = function () {
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            scrollCache.destroy();
        }
    };
    OffsetTracker.prototype.computeLeft = function () {
        var left = this.origRect.left;
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
        }
        return left;
    };
    OffsetTracker.prototype.computeTop = function () {
        var top = this.origRect.top;
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            top += scrollCache.origScrollTop - scrollCache.getScrollTop();
        }
        return top;
    };
    OffsetTracker.prototype.isWithinClipping = function (pageX, pageY) {
        var point = { left: pageX, top: pageY };
        for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            if (!isIgnoredClipping(scrollCache.getEventTarget()) &&
                !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["pointInsideRect"])(point, scrollCache.clientRect)) {
                return false;
            }
        }
        return true;
    };
    return OffsetTracker;
}());
// certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615
function isIgnoredClipping(node) {
    var tagName = node.tagName;
    return tagName === 'HTML' || tagName === 'BODY';
}

/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/
var HitDragging = /** @class */ (function () {
    function HitDragging(dragging, droppableStore) {
        var _this = this;
        // options that can be set by caller
        this.useSubjectCenter = false;
        this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
        this.initialHit = null;
        this.movingHit = null;
        this.finalHit = null; // won't ever be populated if shouldIgnoreMove
        this.handlePointerDown = function (ev) {
            var dragging = _this.dragging;
            _this.initialHit = null;
            _this.movingHit = null;
            _this.finalHit = null;
            _this.prepareHits();
            _this.processFirstCoord(ev);
            if (_this.initialHit || !_this.requireInitial) {
                dragging.setIgnoreMove(false);
                _this.emitter.trigger('pointerdown', ev); // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
            }
            else {
                dragging.setIgnoreMove(true);
            }
        };
        this.handleDragStart = function (ev) {
            _this.emitter.trigger('dragstart', ev);
            _this.handleMove(ev, true); // force = fire even if initially null
        };
        this.handleDragMove = function (ev) {
            _this.emitter.trigger('dragmove', ev);
            _this.handleMove(ev);
        };
        this.handlePointerUp = function (ev) {
            _this.releaseHits();
            _this.emitter.trigger('pointerup', ev);
        };
        this.handleDragEnd = function (ev) {
            if (_this.movingHit) {
                _this.emitter.trigger('hitupdate', null, true, ev);
            }
            _this.finalHit = _this.movingHit;
            _this.movingHit = null;
            _this.emitter.trigger('dragend', ev);
        };
        this.droppableStore = droppableStore;
        dragging.emitter.on('pointerdown', this.handlePointerDown);
        dragging.emitter.on('dragstart', this.handleDragStart);
        dragging.emitter.on('dragmove', this.handleDragMove);
        dragging.emitter.on('pointerup', this.handlePointerUp);
        dragging.emitter.on('dragend', this.handleDragEnd);
        this.dragging = dragging;
        this.emitter = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EmitterMixin"]();
    }
    // sets initialHit
    // sets coordAdjust
    HitDragging.prototype.processFirstCoord = function (ev) {
        var origPoint = { left: ev.pageX, top: ev.pageY };
        var adjustedPoint = origPoint;
        var subjectEl = ev.subjectEl;
        var subjectRect;
        if (subjectEl !== document) {
            subjectRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(subjectEl);
            adjustedPoint = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["constrainPoint"])(adjustedPoint, subjectRect);
        }
        var initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
        if (initialHit) {
            if (this.useSubjectCenter && subjectRect) {
                var slicedSubjectRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRects"])(subjectRect, initialHit.rect);
                if (slicedSubjectRect) {
                    adjustedPoint = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getRectCenter"])(slicedSubjectRect);
                }
            }
            this.coordAdjust = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffPoints"])(adjustedPoint, origPoint);
        }
        else {
            this.coordAdjust = { left: 0, top: 0 };
        }
    };
    HitDragging.prototype.handleMove = function (ev, forceHandle) {
        var hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
        if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
            this.movingHit = hit;
            this.emitter.trigger('hitupdate', hit, false, ev);
        }
    };
    HitDragging.prototype.prepareHits = function () {
        this.offsetTrackers = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(this.droppableStore, function (interactionSettings) {
            interactionSettings.component.buildPositionCaches();
            return new OffsetTracker(interactionSettings.el);
        });
    };
    HitDragging.prototype.releaseHits = function () {
        var offsetTrackers = this.offsetTrackers;
        for (var id in offsetTrackers) {
            offsetTrackers[id].destroy();
        }
        this.offsetTrackers = {};
    };
    HitDragging.prototype.queryHitForOffset = function (offsetLeft, offsetTop) {
        var _a = this, droppableStore = _a.droppableStore, offsetTrackers = _a.offsetTrackers;
        var bestHit = null;
        for (var id in droppableStore) {
            var component = droppableStore[id].component;
            var offsetTracker = offsetTrackers[id];
            if (offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
                var originLeft = offsetTracker.computeLeft();
                var originTop = offsetTracker.computeTop();
                var positionLeft = offsetLeft - originLeft;
                var positionTop = offsetTop - originTop;
                var origRect = offsetTracker.origRect;
                var width = origRect.right - origRect.left;
                var height = origRect.bottom - origRect.top;
                if (
                // must be within the element's bounds
                positionLeft >= 0 && positionLeft < width &&
                    positionTop >= 0 && positionTop < height) {
                    var hit = component.queryHit(positionLeft, positionTop, width, height);
                    if (hit &&
                        (
                        // make sure the hit is within activeRange, meaning it's not a deal cell
                        !component.props.dateProfile || // hack for DayTile
                            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangeContainsRange"])(component.props.dateProfile.activeRange, hit.dateSpan.range)) &&
                        (!bestHit || hit.layer > bestHit.layer)) {
                        // TODO: better way to re-orient rectangle
                        hit.rect.left += originLeft;
                        hit.rect.right += originLeft;
                        hit.rect.top += originTop;
                        hit.rect.bottom += originTop;
                        bestHit = hit;
                    }
                }
            }
        }
        return bestHit;
    };
    return HitDragging;
}());
function isHitsEqual(hit0, hit1) {
    if (!hit0 && !hit1) {
        return true;
    }
    if (Boolean(hit0) !== Boolean(hit1)) {
        return false;
    }
    return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isDateSpansEqual"])(hit0.dateSpan, hit1.dateSpan);
}

/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/
var DateClicking = /** @class */ (function (_super) {
    __extends(DateClicking, _super);
    function DateClicking(settings) {
        var _this = _super.call(this, settings) || this;
        _this.handlePointerDown = function (ev) {
            var dragging = _this.dragging;
            // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
            dragging.setIgnoreMove(!_this.component.isValidDateDownEl(dragging.pointer.downEl));
        };
        // won't even fire if moving was ignored
        _this.handleDragEnd = function (ev) {
            var component = _this.component;
            var _a = component.context, calendar = _a.calendar, view = _a.view;
            var pointer = _this.dragging.pointer;
            if (!pointer.wasTouchScroll) {
                var _b = _this.hitDragging, initialHit = _b.initialHit, finalHit = _b.finalHit;
                if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
                    calendar.triggerDateClick(initialHit.dateSpan, initialHit.dayEl, view, ev.origEvent);
                }
            }
        };
        var component = settings.component;
        // we DO want to watch pointer moves because otherwise finalHit won't get populated
        _this.dragging = new FeaturefulElementDragging(component.el);
        _this.dragging.autoScroller.isEnabled = false;
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragend', _this.handleDragEnd);
        return _this;
    }
    DateClicking.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return DateClicking;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]));

/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/
var DateSelecting = /** @class */ (function (_super) {
    __extends(DateSelecting, _super);
    function DateSelecting(settings) {
        var _this = _super.call(this, settings) || this;
        _this.dragSelection = null;
        _this.handlePointerDown = function (ev) {
            var _a = _this, component = _a.component, dragging = _a.dragging;
            var options = component.context.options;
            var canSelect = options.selectable &&
                component.isValidDateDownEl(ev.origEvent.target);
            // don't bother to watch expensive moves if component won't do selection
            dragging.setIgnoreMove(!canSelect);
            // if touch, require user to hold down
            dragging.delay = ev.isTouch ? getComponentTouchDelay(component) : null;
        };
        _this.handleDragStart = function (ev) {
            _this.component.context.calendar.unselect(ev); // unselect previous selections
        };
        _this.handleHitUpdate = function (hit, isFinal) {
            var calendar = _this.component.context.calendar;
            var dragSelection = null;
            var isInvalid = false;
            if (hit) {
                dragSelection = joinHitsIntoSelection(_this.hitDragging.initialHit, hit, calendar.pluginSystem.hooks.dateSelectionTransformers);
                if (!dragSelection || !_this.component.isDateSelectionValid(dragSelection)) {
                    isInvalid = true;
                    dragSelection = null;
                }
            }
            if (dragSelection) {
                calendar.dispatch({ type: 'SELECT_DATES', selection: dragSelection });
            }
            else if (!isFinal) { // only unselect if moved away while dragging
                calendar.dispatch({ type: 'UNSELECT_DATES' });
            }
            if (!isInvalid) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }
            if (!isFinal) {
                _this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
            }
        };
        _this.handlePointerUp = function (pev) {
            if (_this.dragSelection) {
                // selection is already rendered, so just need to report selection
                _this.component.context.calendar.triggerDateSelect(_this.dragSelection, pev);
                _this.dragSelection = null;
            }
        };
        var component = settings.component;
        var options = component.context.options;
        var dragging = _this.dragging = new FeaturefulElementDragging(component.el);
        dragging.touchScrollAllowed = false;
        dragging.minDistance = options.selectMinDistance || 0;
        dragging.autoScroller.isEnabled = options.dragScroll;
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragstart', _this.handleDragStart);
        hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
        hitDragging.emitter.on('pointerup', _this.handlePointerUp);
        return _this;
    }
    DateSelecting.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return DateSelecting;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]));
function getComponentTouchDelay(component) {
    var options = component.context.options;
    var delay = options.selectLongPressDelay;
    if (delay == null) {
        delay = options.longPressDelay;
    }
    return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
    var dateSpan0 = hit0.dateSpan;
    var dateSpan1 = hit1.dateSpan;
    var ms = [
        dateSpan0.range.start,
        dateSpan0.range.end,
        dateSpan1.range.start,
        dateSpan1.range.end
    ];
    ms.sort(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compareNumbers"]);
    var props = {};
    for (var _i = 0, dateSelectionTransformers_1 = dateSelectionTransformers; _i < dateSelectionTransformers_1.length; _i++) {
        var transformer = dateSelectionTransformers_1[_i];
        var res = transformer(hit0, hit1);
        if (res === false) {
            return null;
        }
        else if (res) {
            __assign(props, res);
        }
    }
    props.range = { start: ms[0], end: ms[3] };
    props.allDay = dateSpan0.allDay;
    return props;
}

var EventDragging = /** @class */ (function (_super) {
    __extends(EventDragging, _super);
    function EventDragging(settings) {
        var _this = _super.call(this, settings) || this;
        // internal state
        _this.subjectSeg = null; // the seg being selected/dragged
        _this.isDragging = false;
        _this.eventRange = null;
        _this.relevantEvents = null; // the events being dragged
        _this.receivingCalendar = null;
        _this.validMutation = null;
        _this.mutatedRelevantEvents = null;
        _this.handlePointerDown = function (ev) {
            var origTarget = ev.origEvent.target;
            var _a = _this, component = _a.component, dragging = _a.dragging;
            var mirror = dragging.mirror;
            var options = component.context.options;
            var initialCalendar = component.context.calendar;
            var subjectSeg = _this.subjectSeg = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getElSeg"])(ev.subjectEl);
            var eventRange = _this.eventRange = subjectSeg.eventRange;
            var eventInstanceId = eventRange.instance.instanceId;
            _this.relevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getRelevantEvents"])(initialCalendar.state.eventStore, eventInstanceId);
            dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
            dragging.delay =
                // only do a touch delay if touch and this event hasn't been selected yet
                (ev.isTouch && eventInstanceId !== component.props.eventSelection) ?
                    getComponentTouchDelay$1(component) :
                    null;
            mirror.parentNode = initialCalendar.el;
            mirror.revertDuration = options.dragRevertDuration;
            var isValid = component.isValidSegDownEl(origTarget) &&
                !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(origTarget, '.fc-resizer'); // NOT on a resizer
            dragging.setIgnoreMove(!isValid);
            // disable dragging for elements that are resizable (ie, selectable)
            // but are not draggable
            _this.isDragging = isValid &&
                ev.subjectEl.classList.contains('fc-draggable');
        };
        _this.handleDragStart = function (ev) {
            var context = _this.component.context;
            var initialCalendar = context.calendar;
            var eventRange = _this.eventRange;
            var eventInstanceId = eventRange.instance.instanceId;
            if (ev.isTouch) {
                // need to select a different event?
                if (eventInstanceId !== _this.component.props.eventSelection) {
                    initialCalendar.dispatch({ type: 'SELECT_EVENT', eventInstanceId: eventInstanceId });
                }
            }
            else {
                // if now using mouse, but was previous touch interaction, clear selected event
                initialCalendar.dispatch({ type: 'UNSELECT_EVENT' });
            }
            if (_this.isDragging) {
                initialCalendar.unselect(ev); // unselect *date* selection
                initialCalendar.publiclyTrigger('eventDragStart', [
                    {
                        el: _this.subjectSeg.el,
                        event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](initialCalendar, eventRange.def, eventRange.instance),
                        jsEvent: ev.origEvent,
                        view: context.view
                    }
                ]);
            }
        };
        _this.handleHitUpdate = function (hit, isFinal) {
            if (!_this.isDragging) {
                return;
            }
            var relevantEvents = _this.relevantEvents;
            var initialHit = _this.hitDragging.initialHit;
            var initialCalendar = _this.component.context.calendar;
            // states based on new hit
            var receivingCalendar = null;
            var mutation = null;
            var mutatedRelevantEvents = null;
            var isInvalid = false;
            var interaction = {
                affectedEvents: relevantEvents,
                mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                isEvent: true,
                origSeg: _this.subjectSeg
            };
            if (hit) {
                var receivingComponent = hit.component;
                receivingCalendar = receivingComponent.context.calendar;
                var receivingOptions = receivingComponent.context.options;
                if (initialCalendar === receivingCalendar ||
                    receivingOptions.editable && receivingOptions.droppable) {
                    mutation = computeEventMutation(initialHit, hit, receivingCalendar.pluginSystem.hooks.eventDragMutationMassagers);
                    if (mutation) {
                        mutatedRelevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyMutationToEventStore"])(relevantEvents, receivingCalendar.eventUiBases, mutation, receivingCalendar);
                        interaction.mutatedEvents = mutatedRelevantEvents;
                        if (!receivingComponent.isInteractionValid(interaction)) {
                            isInvalid = true;
                            mutation = null;
                            mutatedRelevantEvents = null;
                            interaction.mutatedEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])();
                        }
                    }
                }
                else {
                    receivingCalendar = null;
                }
            }
            _this.displayDrag(receivingCalendar, interaction);
            if (!isInvalid) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }
            if (!isFinal) {
                if (initialCalendar === receivingCalendar && // TODO: write test for this
                    isHitsEqual(initialHit, hit)) {
                    mutation = null;
                }
                _this.dragging.setMirrorNeedsRevert(!mutation);
                // render the mirror if no already-rendered mirror
                // TODO: wish we could somehow wait for dispatch to guarantee render
                _this.dragging.setMirrorIsVisible(!hit || !document.querySelector('.fc-mirror'));
                // assign states based on new hit
                _this.receivingCalendar = receivingCalendar;
                _this.validMutation = mutation;
                _this.mutatedRelevantEvents = mutatedRelevantEvents;
            }
        };
        _this.handlePointerUp = function () {
            if (!_this.isDragging) {
                _this.cleanup(); // because handleDragEnd won't fire
            }
        };
        _this.handleDragEnd = function (ev) {
            if (_this.isDragging) {
                var context = _this.component.context;
                var initialCalendar_1 = context.calendar;
                var initialView = context.view;
                var _a = _this, receivingCalendar = _a.receivingCalendar, validMutation = _a.validMutation;
                var eventDef = _this.eventRange.def;
                var eventInstance = _this.eventRange.instance;
                var eventApi = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](initialCalendar_1, eventDef, eventInstance);
                var relevantEvents_1 = _this.relevantEvents;
                var mutatedRelevantEvents = _this.mutatedRelevantEvents;
                var finalHit = _this.hitDragging.finalHit;
                _this.clearDrag(); // must happen after revert animation
                initialCalendar_1.publiclyTrigger('eventDragStop', [
                    {
                        el: _this.subjectSeg.el,
                        event: eventApi,
                        jsEvent: ev.origEvent,
                        view: initialView
                    }
                ]);
                if (validMutation) {
                    // dropped within same calendar
                    if (receivingCalendar === initialCalendar_1) {
                        initialCalendar_1.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: mutatedRelevantEvents
                        });
                        var transformed = {};
                        for (var _i = 0, _b = initialCalendar_1.pluginSystem.hooks.eventDropTransformers; _i < _b.length; _i++) {
                            var transformer = _b[_i];
                            __assign(transformed, transformer(validMutation, initialCalendar_1));
                        }
                        var eventDropArg = __assign({}, transformed, { el: ev.subjectEl, delta: validMutation.datesDelta, oldEvent: eventApi, event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](// the data AFTER the mutation
                            initialCalendar_1, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null), revert: function () {
                                initialCalendar_1.dispatch({
                                    type: 'MERGE_EVENTS',
                                    eventStore: relevantEvents_1
                                });
                            }, jsEvent: ev.origEvent, view: initialView });
                        initialCalendar_1.publiclyTrigger('eventDrop', [eventDropArg]);
                        // dropped in different calendar
                    }
                    else if (receivingCalendar) {
                        initialCalendar_1.publiclyTrigger('eventLeave', [
                            {
                                draggedEl: ev.subjectEl,
                                event: eventApi,
                                view: initialView
                            }
                        ]);
                        initialCalendar_1.dispatch({
                            type: 'REMOVE_EVENT_INSTANCES',
                            instances: _this.mutatedRelevantEvents.instances
                        });
                        receivingCalendar.dispatch({
                            type: 'MERGE_EVENTS',
                            eventStore: _this.mutatedRelevantEvents
                        });
                        if (ev.isTouch) {
                            receivingCalendar.dispatch({
                                type: 'SELECT_EVENT',
                                eventInstanceId: eventInstance.instanceId
                            });
                        }
                        var dropArg = __assign({}, receivingCalendar.buildDatePointApi(finalHit.dateSpan), { draggedEl: ev.subjectEl, jsEvent: ev.origEvent, view: finalHit.component // should this be finalHit.component.view? See #4644
                         });
                        receivingCalendar.publiclyTrigger('drop', [dropArg]);
                        receivingCalendar.publiclyTrigger('eventReceive', [
                            {
                                draggedEl: ev.subjectEl,
                                event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](// the data AFTER the mutation
                                receivingCalendar, mutatedRelevantEvents.defs[eventDef.defId], mutatedRelevantEvents.instances[eventInstance.instanceId]),
                                view: finalHit.component // should this be finalHit.component.view? See #4644
                            }
                        ]);
                    }
                }
                else {
                    initialCalendar_1.publiclyTrigger('_noEventDrop');
                }
            }
            _this.cleanup();
        };
        var component = _this.component;
        var options = component.context.options;
        var dragging = _this.dragging = new FeaturefulElementDragging(component.el);
        dragging.pointer.selector = EventDragging.SELECTOR;
        dragging.touchScrollAllowed = false;
        dragging.autoScroller.isEnabled = options.dragScroll;
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsStore"]);
        hitDragging.useSubjectCenter = settings.useEventCenter;
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragstart', _this.handleDragStart);
        hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
        hitDragging.emitter.on('pointerup', _this.handlePointerUp);
        hitDragging.emitter.on('dragend', _this.handleDragEnd);
        return _this;
    }
    EventDragging.prototype.destroy = function () {
        this.dragging.destroy();
    };
    // render a drag state on the next receivingCalendar
    EventDragging.prototype.displayDrag = function (nextCalendar, state) {
        var initialCalendar = this.component.context.calendar;
        var prevCalendar = this.receivingCalendar;
        // does the previous calendar need to be cleared?
        if (prevCalendar && prevCalendar !== nextCalendar) {
            // does the initial calendar need to be cleared?
            // if so, don't clear all the way. we still need to to hide the affectedEvents
            if (prevCalendar === initialCalendar) {
                prevCalendar.dispatch({
                    type: 'SET_EVENT_DRAG',
                    state: {
                        affectedEvents: state.affectedEvents,
                        mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                        isEvent: true,
                        origSeg: state.origSeg
                    }
                });
                // completely clear the old calendar if it wasn't the initial
            }
            else {
                prevCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
            }
        }
        if (nextCalendar) {
            nextCalendar.dispatch({ type: 'SET_EVENT_DRAG', state: state });
        }
    };
    EventDragging.prototype.clearDrag = function () {
        var initialCalendar = this.component.context.calendar;
        var receivingCalendar = this.receivingCalendar;
        if (receivingCalendar) {
            receivingCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
        // the initial calendar might have an dummy drag state from displayDrag
        if (initialCalendar !== receivingCalendar) {
            initialCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
    };
    EventDragging.prototype.cleanup = function () {
        this.subjectSeg = null;
        this.isDragging = false;
        this.eventRange = null;
        this.relevantEvents = null;
        this.receivingCalendar = null;
        this.validMutation = null;
        this.mutatedRelevantEvents = null;
    };
    EventDragging.SELECTOR = '.fc-draggable, .fc-resizable'; // TODO: test this in IE11
    return EventDragging;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]));
function computeEventMutation(hit0, hit1, massagers) {
    var dateSpan0 = hit0.dateSpan;
    var dateSpan1 = hit1.dateSpan;
    var date0 = dateSpan0.range.start;
    var date1 = dateSpan1.range.start;
    var standardProps = {};
    if (dateSpan0.allDay !== dateSpan1.allDay) {
        standardProps.allDay = dateSpan1.allDay;
        standardProps.hasEnd = hit1.component.context.options.allDayMaintainDuration;
        if (dateSpan1.allDay) {
            // means date1 is already start-of-day,
            // but date0 needs to be converted
            date0 = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(date0);
        }
    }
    var delta = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffDates"])(date0, date1, hit0.component.context.dateEnv, hit0.component === hit1.component ?
        hit0.component.largeUnit :
        null);
    if (delta.milliseconds) { // has hours/minutes/seconds
        standardProps.allDay = false;
    }
    var mutation = {
        datesDelta: delta,
        standardProps: standardProps
    };
    for (var _i = 0, massagers_1 = massagers; _i < massagers_1.length; _i++) {
        var massager = massagers_1[_i];
        massager(mutation, hit0, hit1);
    }
    return mutation;
}
function getComponentTouchDelay$1(component) {
    var options = component.context.options;
    var delay = options.eventLongPressDelay;
    if (delay == null) {
        delay = options.longPressDelay;
    }
    return delay;
}

var EventDragging$1 = /** @class */ (function (_super) {
    __extends(EventDragging, _super);
    function EventDragging(settings) {
        var _this = _super.call(this, settings) || this;
        // internal state
        _this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?
        _this.eventRange = null;
        _this.relevantEvents = null;
        _this.validMutation = null;
        _this.mutatedRelevantEvents = null;
        _this.handlePointerDown = function (ev) {
            var component = _this.component;
            var seg = _this.querySeg(ev);
            var eventRange = _this.eventRange = seg.eventRange;
            _this.dragging.minDistance = component.context.options.eventDragMinDistance;
            // if touch, need to be working with a selected event
            _this.dragging.setIgnoreMove(!_this.component.isValidSegDownEl(ev.origEvent.target) ||
                (ev.isTouch && _this.component.props.eventSelection !== eventRange.instance.instanceId));
        };
        _this.handleDragStart = function (ev) {
            var _a = _this.component.context, calendar = _a.calendar, view = _a.view;
            var eventRange = _this.eventRange;
            _this.relevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getRelevantEvents"])(calendar.state.eventStore, _this.eventRange.instance.instanceId);
            _this.draggingSeg = _this.querySeg(ev);
            calendar.unselect();
            calendar.publiclyTrigger('eventResizeStart', [
                {
                    el: _this.draggingSeg.el,
                    event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](calendar, eventRange.def, eventRange.instance),
                    jsEvent: ev.origEvent,
                    view: view
                }
            ]);
        };
        _this.handleHitUpdate = function (hit, isFinal, ev) {
            var calendar = _this.component.context.calendar;
            var relevantEvents = _this.relevantEvents;
            var initialHit = _this.hitDragging.initialHit;
            var eventInstance = _this.eventRange.instance;
            var mutation = null;
            var mutatedRelevantEvents = null;
            var isInvalid = false;
            var interaction = {
                affectedEvents: relevantEvents,
                mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                isEvent: true,
                origSeg: _this.draggingSeg
            };
            if (hit) {
                mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-start-resizer'), eventInstance.range, calendar.pluginSystem.hooks.eventResizeJoinTransforms);
            }
            if (mutation) {
                mutatedRelevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyMutationToEventStore"])(relevantEvents, calendar.eventUiBases, mutation, calendar);
                interaction.mutatedEvents = mutatedRelevantEvents;
                if (!_this.component.isInteractionValid(interaction)) {
                    isInvalid = true;
                    mutation = null;
                    mutatedRelevantEvents = null;
                    interaction.mutatedEvents = null;
                }
            }
            if (mutatedRelevantEvents) {
                calendar.dispatch({
                    type: 'SET_EVENT_RESIZE',
                    state: interaction
                });
            }
            else {
                calendar.dispatch({ type: 'UNSET_EVENT_RESIZE' });
            }
            if (!isInvalid) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }
            if (!isFinal) {
                if (mutation && isHitsEqual(initialHit, hit)) {
                    mutation = null;
                }
                _this.validMutation = mutation;
                _this.mutatedRelevantEvents = mutatedRelevantEvents;
            }
        };
        _this.handleDragEnd = function (ev) {
            var _a = _this.component.context, calendar = _a.calendar, view = _a.view;
            var eventDef = _this.eventRange.def;
            var eventInstance = _this.eventRange.instance;
            var eventApi = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](calendar, eventDef, eventInstance);
            var relevantEvents = _this.relevantEvents;
            var mutatedRelevantEvents = _this.mutatedRelevantEvents;
            calendar.publiclyTrigger('eventResizeStop', [
                {
                    el: _this.draggingSeg.el,
                    event: eventApi,
                    jsEvent: ev.origEvent,
                    view: view
                }
            ]);
            if (_this.validMutation) {
                calendar.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: mutatedRelevantEvents
                });
                calendar.publiclyTrigger('eventResize', [
                    {
                        el: _this.draggingSeg.el,
                        startDelta: _this.validMutation.startDelta || Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0),
                        endDelta: _this.validMutation.endDelta || Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0),
                        prevEvent: eventApi,
                        event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](// the data AFTER the mutation
                        calendar, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null),
                        revert: function () {
                            calendar.dispatch({
                                type: 'MERGE_EVENTS',
                                eventStore: relevantEvents
                            });
                        },
                        jsEvent: ev.origEvent,
                        view: view
                    }
                ]);
            }
            else {
                calendar.publiclyTrigger('_noEventResize');
            }
            // reset all internal state
            _this.draggingSeg = null;
            _this.relevantEvents = null;
            _this.validMutation = null;
            // okay to keep eventInstance around. useful to set it in handlePointerDown
        };
        var component = settings.component;
        var dragging = _this.dragging = new FeaturefulElementDragging(component.el);
        dragging.pointer.selector = '.fc-resizer';
        dragging.touchScrollAllowed = false;
        dragging.autoScroller.isEnabled = component.context.options.dragScroll;
        var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
        hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
        hitDragging.emitter.on('dragstart', _this.handleDragStart);
        hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
        hitDragging.emitter.on('dragend', _this.handleDragEnd);
        return _this;
    }
    EventDragging.prototype.destroy = function () {
        this.dragging.destroy();
    };
    EventDragging.prototype.querySeg = function (ev) {
        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getElSeg"])(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(ev.subjectEl, this.component.fgSegSelector));
    };
    return EventDragging;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]));
function computeMutation(hit0, hit1, isFromStart, instanceRange, transforms) {
    var dateEnv = hit0.component.context.dateEnv;
    var date0 = hit0.dateSpan.range.start;
    var date1 = hit1.dateSpan.range.start;
    var delta = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffDates"])(date0, date1, dateEnv, hit0.component.largeUnit);
    var props = {};
    for (var _i = 0, transforms_1 = transforms; _i < transforms_1.length; _i++) {
        var transform = transforms_1[_i];
        var res = transform(hit0, hit1);
        if (res === false) {
            return null;
        }
        else if (res) {
            __assign(props, res);
        }
    }
    if (isFromStart) {
        if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
            props.startDelta = delta;
            return props;
        }
    }
    else {
        if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
            props.endDelta = delta;
            return props;
        }
    }
    return null;
}

var UnselectAuto = /** @class */ (function () {
    function UnselectAuto(calendar) {
        var _this = this;
        this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
        this.onSelect = function (selectInfo) {
            if (selectInfo.jsEvent) {
                _this.isRecentPointerDateSelect = true;
            }
        };
        this.onDocumentPointerUp = function (pev) {
            var _a = _this, calendar = _a.calendar, documentPointer = _a.documentPointer;
            var state = calendar.state;
            // touch-scrolling should never unfocus any type of selection
            if (!documentPointer.wasTouchScroll) {
                if (state.dateSelection && // an existing date selection?
                    !_this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
                ) {
                    var unselectAuto = calendar.viewOpt('unselectAuto');
                    var unselectCancel = calendar.viewOpt('unselectCancel');
                    if (unselectAuto && (!unselectAuto || !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(documentPointer.downEl, unselectCancel))) {
                        calendar.unselect(pev);
                    }
                }
                if (state.eventSelection && // an existing event selected?
                    !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(documentPointer.downEl, EventDragging.SELECTOR) // interaction DIDN'T start on an event
                ) {
                    calendar.dispatch({ type: 'UNSELECT_EVENT' });
                }
            }
            _this.isRecentPointerDateSelect = false;
        };
        this.calendar = calendar;
        var documentPointer = this.documentPointer = new PointerDragging(document);
        documentPointer.shouldIgnoreMove = true;
        documentPointer.shouldWatchScroll = false;
        documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
        /*
        TODO: better way to know about whether there was a selection with the pointer
        */
        calendar.on('select', this.onSelect);
    }
    UnselectAuto.prototype.destroy = function () {
        this.calendar.off('select', this.onSelect);
        this.documentPointer.destroy();
    };
    return UnselectAuto;
}());

/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/
var ExternalElementDragging = /** @class */ (function () {
    function ExternalElementDragging(dragging, suppliedDragMeta) {
        var _this = this;
        this.receivingCalendar = null;
        this.droppableEvent = null; // will exist for all drags, even if create:false
        this.suppliedDragMeta = null;
        this.dragMeta = null;
        this.handleDragStart = function (ev) {
            _this.dragMeta = _this.buildDragMeta(ev.subjectEl);
        };
        this.handleHitUpdate = function (hit, isFinal, ev) {
            var dragging = _this.hitDragging.dragging;
            var receivingCalendar = null;
            var droppableEvent = null;
            var isInvalid = false;
            var interaction = {
                affectedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                isEvent: _this.dragMeta.create,
                origSeg: null
            };
            if (hit) {
                receivingCalendar = hit.component.context.calendar;
                if (_this.canDropElOnCalendar(ev.subjectEl, receivingCalendar)) {
                    droppableEvent = computeEventForDateSpan(hit.dateSpan, _this.dragMeta, receivingCalendar);
                    interaction.mutatedEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["eventTupleToStore"])(droppableEvent);
                    isInvalid = !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isInteractionValid"])(interaction, receivingCalendar);
                    if (isInvalid) {
                        interaction.mutatedEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])();
                        droppableEvent = null;
                    }
                }
            }
            _this.displayDrag(receivingCalendar, interaction);
            // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
            // TODO: wish we could somehow wait for dispatch to guarantee render
            dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-mirror'));
            if (!isInvalid) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }
            if (!isFinal) {
                dragging.setMirrorNeedsRevert(!droppableEvent);
                _this.receivingCalendar = receivingCalendar;
                _this.droppableEvent = droppableEvent;
            }
        };
        this.handleDragEnd = function (pev) {
            var _a = _this, receivingCalendar = _a.receivingCalendar, droppableEvent = _a.droppableEvent;
            _this.clearDrag();
            if (receivingCalendar && droppableEvent) {
                var finalHit = _this.hitDragging.finalHit;
                var finalView = finalHit.component.context.view;
                var dragMeta = _this.dragMeta;
                var arg = __assign({}, receivingCalendar.buildDatePointApi(finalHit.dateSpan), { draggedEl: pev.subjectEl, jsEvent: pev.origEvent, view: finalView });
                receivingCalendar.publiclyTrigger('drop', [arg]);
                if (dragMeta.create) {
                    receivingCalendar.dispatch({
                        type: 'MERGE_EVENTS',
                        eventStore: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["eventTupleToStore"])(droppableEvent)
                    });
                    if (pev.isTouch) {
                        receivingCalendar.dispatch({
                            type: 'SELECT_EVENT',
                            eventInstanceId: droppableEvent.instance.instanceId
                        });
                    }
                    // signal that an external event landed
                    receivingCalendar.publiclyTrigger('eventReceive', [
                        {
                            draggedEl: pev.subjectEl,
                            event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](receivingCalendar, droppableEvent.def, droppableEvent.instance),
                            view: finalView
                        }
                    ]);
                }
            }
            _this.receivingCalendar = null;
            _this.droppableEvent = null;
        };
        var hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsStore"]);
        hitDragging.requireInitial = false; // will start outside of a component
        hitDragging.emitter.on('dragstart', this.handleDragStart);
        hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
        hitDragging.emitter.on('dragend', this.handleDragEnd);
        this.suppliedDragMeta = suppliedDragMeta;
    }
    ExternalElementDragging.prototype.buildDragMeta = function (subjectEl) {
        if (typeof this.suppliedDragMeta === 'object') {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(this.suppliedDragMeta);
        }
        else if (typeof this.suppliedDragMeta === 'function') {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(this.suppliedDragMeta(subjectEl));
        }
        else {
            return getDragMetaFromEl(subjectEl);
        }
    };
    ExternalElementDragging.prototype.displayDrag = function (nextCalendar, state) {
        var prevCalendar = this.receivingCalendar;
        if (prevCalendar && prevCalendar !== nextCalendar) {
            prevCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
        if (nextCalendar) {
            nextCalendar.dispatch({ type: 'SET_EVENT_DRAG', state: state });
        }
    };
    ExternalElementDragging.prototype.clearDrag = function () {
        if (this.receivingCalendar) {
            this.receivingCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
        }
    };
    ExternalElementDragging.prototype.canDropElOnCalendar = function (el, receivingCalendar) {
        var dropAccept = receivingCalendar.opt('dropAccept');
        if (typeof dropAccept === 'function') {
            return dropAccept(el);
        }
        else if (typeof dropAccept === 'string' && dropAccept) {
            return Boolean(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementMatches"])(el, dropAccept));
        }
        return true;
    };
    return ExternalElementDragging;
}());
// Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------
function computeEventForDateSpan(dateSpan, dragMeta, calendar) {
    var defProps = __assign({}, dragMeta.leftoverProps);
    for (var _i = 0, _a = calendar.pluginSystem.hooks.externalDefTransforms; _i < _a.length; _i++) {
        var transform = _a[_i];
        __assign(defProps, transform(dateSpan, dragMeta));
    }
    var def = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseEventDef"])(defProps, dragMeta.sourceId, dateSpan.allDay, calendar.opt('forceEventDuration') || Boolean(dragMeta.duration), // hasEnd
    calendar);
    var start = dateSpan.range.start;
    // only rely on time info if drop zone is all-day,
    // otherwise, we already know the time
    if (dateSpan.allDay && dragMeta.startTime) {
        start = calendar.dateEnv.add(start, dragMeta.startTime);
    }
    var end = dragMeta.duration ?
        calendar.dateEnv.add(start, dragMeta.duration) :
        calendar.getDefaultEventEnd(dateSpan.allDay, start);
    var instance = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEventInstance"])(def.defId, { start: start, end: end });
    return { def: def, instance: instance };
}
// Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------
function getDragMetaFromEl(el) {
    var str = getEmbeddedElData(el, 'event');
    var obj = str ?
        JSON.parse(str) :
        { create: false }; // if no embedded data, assume no event creation
    return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(obj);
}
_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].dataAttrPrefix = '';
function getEmbeddedElData(el, name) {
    var prefix = _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].dataAttrPrefix;
    var prefixedName = (prefix ? prefix + '-' : '') + name;
    return el.getAttribute('data-' + prefixedName) || '';
}

/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/
var ExternalDraggable = /** @class */ (function () {
    function ExternalDraggable(el, settings) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        this.handlePointerDown = function (ev) {
            var dragging = _this.dragging;
            var _a = _this.settings, minDistance = _a.minDistance, longPressDelay = _a.longPressDelay;
            dragging.minDistance =
                minDistance != null ?
                    minDistance :
                    (ev.isTouch ? 0 : _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["globalDefaults"].eventDragMinDistance);
            dragging.delay =
                ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
                    (longPressDelay != null ? longPressDelay : _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["globalDefaults"].longPressDelay) :
                    0;
        };
        this.handleDragStart = function (ev) {
            if (ev.isTouch &&
                _this.dragging.delay &&
                ev.subjectEl.classList.contains('fc-event')) {
                _this.dragging.mirror.getMirrorEl().classList.add('fc-selected');
            }
        };
        this.settings = settings;
        var dragging = this.dragging = new FeaturefulElementDragging(el);
        dragging.touchScrollAllowed = false;
        if (settings.itemSelector != null) {
            dragging.pointer.selector = settings.itemSelector;
        }
        if (settings.appendTo != null) {
            dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
        }
        dragging.emitter.on('pointerdown', this.handlePointerDown);
        dragging.emitter.on('dragstart', this.handleDragStart);
        new ExternalElementDragging(dragging, settings.eventData);
    }
    ExternalDraggable.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return ExternalDraggable;
}());

/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/
var InferredElementDragging = /** @class */ (function (_super) {
    __extends(InferredElementDragging, _super);
    function InferredElementDragging(containerEl) {
        var _this = _super.call(this, containerEl) || this;
        _this.shouldIgnoreMove = false;
        _this.mirrorSelector = '';
        _this.currentMirrorEl = null;
        _this.handlePointerDown = function (ev) {
            _this.emitter.trigger('pointerdown', ev);
            if (!_this.shouldIgnoreMove) {
                // fire dragstart right away. does not support delay or min-distance
                _this.emitter.trigger('dragstart', ev);
            }
        };
        _this.handlePointerMove = function (ev) {
            if (!_this.shouldIgnoreMove) {
                _this.emitter.trigger('dragmove', ev);
            }
        };
        _this.handlePointerUp = function (ev) {
            _this.emitter.trigger('pointerup', ev);
            if (!_this.shouldIgnoreMove) {
                // fire dragend right away. does not support a revert animation
                _this.emitter.trigger('dragend', ev);
            }
        };
        var pointer = _this.pointer = new PointerDragging(containerEl);
        pointer.emitter.on('pointerdown', _this.handlePointerDown);
        pointer.emitter.on('pointermove', _this.handlePointerMove);
        pointer.emitter.on('pointerup', _this.handlePointerUp);
        return _this;
    }
    InferredElementDragging.prototype.destroy = function () {
        this.pointer.destroy();
    };
    InferredElementDragging.prototype.setIgnoreMove = function (bool) {
        this.shouldIgnoreMove = bool;
    };
    InferredElementDragging.prototype.setMirrorIsVisible = function (bool) {
        if (bool) {
            // restore a previously hidden element.
            // use the reference in case the selector class has already been removed.
            if (this.currentMirrorEl) {
                this.currentMirrorEl.style.visibility = '';
                this.currentMirrorEl = null;
            }
        }
        else {
            var mirrorEl = this.mirrorSelector ?
                document.querySelector(this.mirrorSelector) :
                null;
            if (mirrorEl) {
                this.currentMirrorEl = mirrorEl;
                mirrorEl.style.visibility = 'hidden';
            }
        }
    };
    return InferredElementDragging;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ElementDragging"]));

/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/
var ThirdPartyDraggable = /** @class */ (function () {
    function ThirdPartyDraggable(containerOrSettings, settings) {
        var containerEl = document;
        if (
        // wish we could just test instanceof EventTarget, but doesn't work in IE11
        containerOrSettings === document ||
            containerOrSettings instanceof Element) {
            containerEl = containerOrSettings;
            settings = settings || {};
        }
        else {
            settings = (containerOrSettings || {});
        }
        var dragging = this.dragging = new InferredElementDragging(containerEl);
        if (typeof settings.itemSelector === 'string') {
            dragging.pointer.selector = settings.itemSelector;
        }
        else if (containerEl === document) {
            dragging.pointer.selector = '[data-event]';
        }
        if (typeof settings.mirrorSelector === 'string') {
            dragging.mirrorSelector = settings.mirrorSelector;
        }
        new ExternalElementDragging(dragging, settings.eventData);
    }
    ThirdPartyDraggable.prototype.destroy = function () {
        this.dragging.destroy();
    };
    return ThirdPartyDraggable;
}());

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    componentInteractions: [DateClicking, DateSelecting, EventDragging, EventDragging$1],
    calendarInteractions: [UnselectAuto],
    elementDraggingImpl: FeaturefulElementDragging
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "PQoC":
/*!******************************************************************!*\
  !*** ./node_modules/@fullcalendar/resource-timeline/main.esm.js ***!
  \******************************************************************/
/*! exports provided: default, ResourceTimelineView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceTimelineView", function() { return ResourceTimelineView; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "SZB9");
/* harmony import */ var _fullcalendar_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/timeline */ "qv4X");
/* harmony import */ var _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/resource-common */ "0yvR");
/*!
FullCalendar Resource Timeline Plugin v4.4.2
Docs & License: https://fullcalendar.io/scheduler
(c) 2019 Adam Shaw
*/





/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row(spreadsheetParent, spreadsheetNextSibling, timeAxisParent, timeAxisNextSibling) {
        var _this = _super.call(this) || this;
        _this.isSizeDirty = false;
        spreadsheetParent.insertBefore(_this.spreadsheetTr = document.createElement('tr'), spreadsheetNextSibling);
        timeAxisParent.insertBefore(_this.timeAxisTr = document.createElement('tr'), timeAxisNextSibling);
        return _this;
    }
    Row.prototype.destroy = function () {
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.spreadsheetTr);
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.timeAxisTr);
        _super.prototype.destroy.call(this);
    };
    Row.prototype.updateSize = function (isResize) {
        this.isSizeDirty = false;
    };
    return Row;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function updateExpanderIcon(el, isExpanded) {
    var classList = el.classList;
    if (isExpanded) {
        classList.remove('fc-icon-plus-square');
        classList.add('fc-icon-minus-square');
    }
    else {
        classList.remove('fc-icon-minus-square');
        classList.add('fc-icon-plus-square');
    }
}
function clearExpanderIcon(el) {
    var classList = el.classList;
    classList.remove('fc-icon-minus-square');
    classList.remove('fc-icon-plus-square');
}
function updateTrResourceId(tr, resourceId) {
    tr.setAttribute('data-resource-id', resourceId);
}

var GroupRow = /** @class */ (function (_super) {
    __extends(GroupRow, _super);
    function GroupRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._renderCells = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this.renderCells, _this.unrenderCells);
        _this._updateExpanderIcon = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this.updateExpanderIcon, null, [_this._renderCells]);
        _this.onExpanderClick = function (ev) {
            var props = _this.props;
            _this.context.calendar.dispatch({
                type: 'SET_RESOURCE_ENTITY_EXPANDED',
                id: props.id,
                isExpanded: !props.isExpanded
            });
        };
        return _this;
    }
    GroupRow.prototype.render = function (props) {
        this._renderCells(props.group, props.spreadsheetColCnt);
        this._updateExpanderIcon(props.isExpanded);
        this.isSizeDirty = true;
    };
    GroupRow.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this._renderCells.unrender(); // should unrender everything else
    };
    GroupRow.prototype.renderCells = function (group, spreadsheetColCnt) {
        var spreadsheetContentEl = this.renderSpreadsheetContent(group);
        this.spreadsheetTr.appendChild(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('td', {
            className: 'fc-divider',
            colSpan: spreadsheetColCnt // span across all columns
        }, this.spreadsheetHeightEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', null, spreadsheetContentEl)) // needed by setTrInnerHeight
        );
        this.expanderIconEl = spreadsheetContentEl.querySelector('.fc-icon');
        this.expanderIconEl.parentElement.addEventListener('click', this.onExpanderClick);
        // insert a single cell, with a single empty <div>.
        // there will be no content
        this.timeAxisTr.appendChild(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('td', { className: 'fc-divider' }, this.timeAxisHeightEl = document.createElement('div')));
    };
    GroupRow.prototype.unrenderCells = function () {
        this.spreadsheetTr.innerHTML = '';
        this.timeAxisTr.innerHTML = '';
    };
    /*
    Renders the content wrapper element that will be inserted into this row's TD cell.
    */
    GroupRow.prototype.renderSpreadsheetContent = function (group) {
        var text = this.renderCellText(group);
        var contentEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-cell-content">' +
            '<span class="fc-expander">' +
            '<span class="fc-icon"></span>' +
            '</span>' +
            '<span class="fc-cell-text">' +
            (text ? Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(text) : '&nbsp;') +
            '</span>' +
            '</div>');
        var filter = group.spec.render;
        if (typeof filter === 'function') {
            contentEl = filter(contentEl, group.value) || contentEl;
        }
        return contentEl;
    };
    GroupRow.prototype.renderCellText = function (group) {
        var text = group.value || ''; // might be null/undefined if an ad-hoc grouping
        var filter = group.spec.text;
        if (typeof filter === 'function') {
            text = filter(text) || text;
        }
        return text;
    };
    GroupRow.prototype.getHeightEls = function () {
        return [this.spreadsheetHeightEl, this.timeAxisHeightEl];
    };
    GroupRow.prototype.updateExpanderIcon = function (isExpanded) {
        updateExpanderIcon(this.expanderIconEl, isExpanded);
    };
    return GroupRow;
}(Row));
GroupRow.addEqualityFuncs({
    group: _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["isGroupsEqual"] // HACK for ResourceTimelineView::renderRows
});

var SpreadsheetRow = /** @class */ (function (_super) {
    __extends(SpreadsheetRow, _super);
    function SpreadsheetRow(tr) {
        var _this = _super.call(this) || this;
        _this._renderRow = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this.renderRow, _this.unrenderRow);
        _this._updateTrResourceId = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(updateTrResourceId, null, [_this._renderRow]);
        _this._updateExpanderIcon = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this.updateExpanderIcon, null, [_this._renderRow]);
        _this.onExpanderClick = function (ev) {
            var props = _this.props;
            _this.context.calendar.dispatch({
                type: 'SET_RESOURCE_ENTITY_EXPANDED',
                id: props.id,
                isExpanded: !props.isExpanded
            });
        };
        _this.tr = tr;
        return _this;
    }
    SpreadsheetRow.prototype.render = function (props) {
        this._renderRow(props.resource, props.rowSpans, props.depth, props.colSpecs);
        this._updateTrResourceId(this.tr, props.resource.id); // TODO: only use public ID?
        this._updateExpanderIcon(props.hasChildren, props.isExpanded);
    };
    SpreadsheetRow.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this._renderRow.unrender(); // should unrender everything else
    };
    SpreadsheetRow.prototype.renderRow = function (resource, rowSpans, depth, colSpecs) {
        var _a = this.context, calendar = _a.calendar, view = _a.view, theme = _a.theme;
        var tr = this.tr;
        var resourceFields = Object(_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["buildResourceFields"])(resource); // slightly inefficient. already done up the call stack
        var mainTd;
        for (var i = 0; i < colSpecs.length; i++) {
            var colSpec = colSpecs[i];
            var rowSpan = rowSpans[i];
            if (rowSpan === 0) { // not responsible for group-based rows. VRowGroup is
                continue;
            }
            else if (rowSpan == null) {
                rowSpan = 1;
            }
            var text = void 0;
            if (colSpec.field) {
                text = resourceFields[colSpec.field];
            }
            else {
                text = Object(_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["buildResourceTextFunc"])(colSpec.text, calendar)(resource);
            }
            var contentEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-cell-content">' +
                (colSpec.isMain ? renderIconHtml(depth) : '') +
                '<span class="fc-cell-text">' +
                (text ? Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(text) : '&nbsp;') +
                '</span>' +
                '</div>');
            if (typeof colSpec.render === 'function') { // a filter function for the element
                contentEl = colSpec.render(new _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["ResourceApi"](calendar, resource), contentEl) || contentEl;
            }
            if (rowSpan > 1) {
                contentEl.classList.add('fc-sticky');
            }
            var td = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('td', {
                className: theme.getClass('widgetContent'),
                rowspan: rowSpan
            }, contentEl);
            // the first cell of the row needs to have an inner div for setTrInnerHeight
            if (colSpec.isMain) {
                td.appendChild(this.heightEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', null, td.childNodes) // inner wrap
                );
                mainTd = td;
            }
            tr.appendChild(td);
        }
        this.expanderIconEl = tr.querySelector('.fc-expander-space .fc-icon');
        // wait until very end
        calendar.publiclyTrigger('resourceRender', [
            {
                resource: new _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["ResourceApi"](calendar, resource),
                el: mainTd,
                view: view
            }
        ]);
    };
    SpreadsheetRow.prototype.unrenderRow = function () {
        this.tr.innerHTML = '';
    };
    SpreadsheetRow.prototype.updateExpanderIcon = function (hasChildren, isExpanded) {
        var expanderIconEl = this.expanderIconEl;
        var expanderEl = expanderIconEl.parentElement;
        if (expanderIconEl &&
            expanderEl // why would this be null?? was the case in IE11
        ) {
            if (hasChildren) {
                expanderEl.addEventListener('click', this.onExpanderClick);
                expanderEl.classList.add('fc-expander');
                updateExpanderIcon(expanderIconEl, isExpanded);
            }
            else {
                expanderEl.removeEventListener('click', this.onExpanderClick);
                expanderEl.classList.remove('fc-expander');
                clearExpanderIcon(expanderIconEl);
            }
        }
    };
    return SpreadsheetRow;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/*
Renders the HTML responsible for the subrow expander area,
as well as the space before it (used to align expanders of similar depths)
*/
function renderIconHtml(depth) {
    var html = '';
    for (var i = 0; i < depth; i++) {
        html += '<span class="fc-icon"></span>';
    }
    html +=
        '<span class="fc-expander-space">' +
            '<span class="fc-icon"></span>' +
            '</span>';
    return html;
}

var ResourceRow = /** @class */ (function (_super) {
    __extends(ResourceRow, _super);
    function ResourceRow(a, b, c, d, timeAxis) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton, _this._unrenderSkeleton);
        _this.updateTrResourceId = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(updateTrResourceId);
        _this.timeAxis = timeAxis;
        return _this;
    }
    ResourceRow.prototype.render = function (props, context) {
        this.renderSkeleton(context);
        // spreadsheetRow handles calling updateTrResourceId for spreadsheetTr
        this.spreadsheetRow.receiveProps({
            colSpecs: props.colSpecs,
            id: props.id,
            rowSpans: props.rowSpans,
            depth: props.depth,
            isExpanded: props.isExpanded,
            hasChildren: props.hasChildren,
            resource: props.resource
        }, context);
        this.updateTrResourceId(this.timeAxisTr, props.resource.id);
        this.lane.receiveProps({
            dateProfile: props.dateProfile,
            nextDayThreshold: props.nextDayThreshold,
            businessHours: props.businessHours,
            eventStore: props.eventStore,
            eventUiBases: props.eventUiBases,
            dateSelection: props.dateSelection,
            eventSelection: props.eventSelection,
            eventDrag: props.eventDrag,
            eventResize: props.eventResize
        }, context);
        this.isSizeDirty = true;
    };
    ResourceRow.prototype.destroy = function () {
        this.renderSkeleton.unrender();
        _super.prototype.destroy.call(this);
    };
    ResourceRow.prototype._renderSkeleton = function (context) {
        this.timeAxisTr.appendChild(this.cellEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('td', { className: context.theme.getClass('widgetContent') }, this.innerContainerEl = document.createElement('div')));
        this.spreadsheetRow = new SpreadsheetRow(this.spreadsheetTr);
        this.lane = new _fullcalendar_timeline__WEBPACK_IMPORTED_MODULE_1__["TimelineLane"](this.innerContainerEl, this.innerContainerEl, this.timeAxis);
    };
    ResourceRow.prototype._unrenderSkeleton = function () {
        this.spreadsheetRow.destroy();
        this.lane.destroy();
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.cellEl);
    };
    ResourceRow.prototype.updateSize = function (isResize) {
        _super.prototype.updateSize.call(this, isResize);
        this.lane.updateSize(isResize);
    };
    ResourceRow.prototype.getHeightEls = function () {
        return [this.spreadsheetRow.heightEl, this.innerContainerEl];
    };
    return ResourceRow;
}(Row));
ResourceRow.addEqualityFuncs({
    rowSpans: _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isArraysEqual"] // HACK for isSizeDirty, ResourceTimelineView::renderRows
});

var COL_MIN_WIDTH = 30;
var SpreadsheetHeader = /** @class */ (function (_super) {
    __extends(SpreadsheetHeader, _super);
    function SpreadsheetHeader(parentEl) {
        var _this = _super.call(this) || this;
        _this.resizables = [];
        _this.colWidths = [];
        _this.emitter = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EmitterMixin"]();
        _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton, _this._unrenderSkeleton);
        _this.parentEl = parentEl;
        return _this;
    }
    SpreadsheetHeader.prototype.render = function (props, context) {
        this.renderSkeleton(context);
        var theme = context.theme;
        var colSpecs = props.colSpecs;
        var html = '<colgroup>' + props.colTags + '</colgroup>' +
            '<tbody>';
        if (props.superHeaderText) {
            html +=
                '<tr class="fc-super">' +
                    '<th class="' + theme.getClass('widgetHeader') + '" colspan="' + colSpecs.length + '">' +
                    '<div class="fc-cell-content">' +
                    '<span class="fc-cell-text">' +
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(props.superHeaderText) +
                    '</span>' +
                    '</div>' +
                    '</th>' +
                    '</tr>';
        }
        html += '<tr>';
        for (var i = 0; i < colSpecs.length; i++) {
            var o = colSpecs[i];
            var isLast = i === (colSpecs.length - 1);
            html +=
                "<th class=\"" + theme.getClass('widgetHeader') + "\">" +
                    '<div>' +
                    '<div class="fc-cell-content">' +
                    (o.isMain ?
                        '<span class="fc-expander-space">' +
                            '<span class="fc-icon"></span>' +
                            '</span>' :
                        '') +
                    '<span class="fc-cell-text">' +
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(o.labelText || '') + // what about normalizing this value ahead of time?
                    '</span>' +
                    '</div>' +
                    (!isLast ? '<div class="fc-col-resizer"></div>' : '') +
                    '</div>' +
                    '</th>';
        }
        html += '</tr>';
        html += '</tbody>';
        this.tableEl.innerHTML = html;
        this.thEls = Array.prototype.slice.call(this.tableEl.querySelectorAll('th'));
        this.colEls = Array.prototype.slice.call(this.tableEl.querySelectorAll('col'));
        this.resizerEls = Array.prototype.slice.call(this.tableEl.querySelectorAll('.fc-col-resizer'));
        this.initColResizing();
    };
    SpreadsheetHeader.prototype.destroy = function () {
        for (var _i = 0, _a = this.resizables; _i < _a.length; _i++) {
            var resizable = _a[_i];
            resizable.destroy();
        }
        this.renderSkeleton.unrender();
        _super.prototype.destroy.call(this);
    };
    SpreadsheetHeader.prototype._renderSkeleton = function (context) {
        this.parentEl.appendChild(this.tableEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('table', {
            className: context.theme.getClass('tableGrid')
        }));
    };
    SpreadsheetHeader.prototype._unrenderSkeleton = function () {
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.tableEl);
    };
    SpreadsheetHeader.prototype.initColResizing = function () {
        var _this = this;
        var _a = this.context, calendar = _a.calendar, isRtl = _a.isRtl;
        var ElementDraggingImpl = calendar.pluginSystem.hooks.elementDraggingImpl;
        if (ElementDraggingImpl) {
            this.resizables = this.resizerEls.map(function (handleEl, colIndex) {
                var dragging = new ElementDraggingImpl(handleEl);
                var startWidth;
                dragging.emitter.on('dragstart', function () {
                    startWidth = _this.colWidths[colIndex];
                    if (typeof startWidth !== 'number') {
                        startWidth = _this.thEls[colIndex].getBoundingClientRect().width;
                    }
                });
                dragging.emitter.on('dragmove', function (pev) {
                    _this.colWidths[colIndex] = Math.max(startWidth + pev.deltaX * (isRtl ? -1 : 1), COL_MIN_WIDTH);
                    _this.emitter.trigger('colwidthchange', _this.colWidths);
                });
                dragging.setAutoScrollEnabled(false); // because gets weird with auto-scrolling time area
                return dragging;
            });
        }
    };
    return SpreadsheetHeader;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var Spreadsheet = /** @class */ (function (_super) {
    __extends(Spreadsheet, _super);
    function Spreadsheet(headParentEl, bodyParentEl) {
        var _this = _super.call(this) || this;
        _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton, _this._unrenderSkeleton);
        _this.renderCells = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderCells, _this._unrenderCells, [_this.renderSkeleton]);
        _this.layout = new _fullcalendar_timeline__WEBPACK_IMPORTED_MODULE_1__["HeaderBodyLayout"](headParentEl, bodyParentEl, 'clipped-scroll');
        return _this;
    }
    Spreadsheet.prototype.render = function (props, context) {
        this.renderSkeleton(context);
        this.renderCells(props.superHeaderText, props.colSpecs);
    };
    Spreadsheet.prototype.destroy = function () {
        this.renderCells.unrender();
        this.renderSkeleton.unrender();
        this.layout.destroy();
        _super.prototype.destroy.call(this);
    };
    Spreadsheet.prototype._renderSkeleton = function (context) {
        var _this = this;
        var bodyEnhancedScroller = this.layout.bodyScroller.enhancedScroll;
        bodyEnhancedScroller.canvas.contentEl
            .appendChild(this.bodyContainerEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-rows' }, '<table>' +
            '<colgroup />' +
            '<tbody />' +
            '</table>'));
        this.bodyColGroup = this.bodyContainerEl.querySelector('colgroup');
        this.bodyTbody = this.bodyContainerEl.querySelector('tbody');
        var headerEnhancedScroller = this.layout.headerScroller.enhancedScroll;
        this.header = new SpreadsheetHeader(headerEnhancedScroller.canvas.contentEl);
        this.header.emitter.on('colwidthchange', function (colWidths) {
            _this.applyColWidths(colWidths);
        });
    };
    Spreadsheet.prototype._unrenderSkeleton = function () {
        this.header.destroy();
    };
    Spreadsheet.prototype._renderCells = function (superHeaderText, colSpecs) {
        var colTags = this.renderColTags(colSpecs);
        this.header.receiveProps({
            superHeaderText: superHeaderText,
            colSpecs: colSpecs,
            colTags: colTags
        }, this.context);
        this.bodyColGroup.innerHTML = colTags;
        this.bodyColEls = Array.prototype.slice.call(this.bodyColGroup.querySelectorAll('col'));
        this.applyColWidths(colSpecs.map(function (colSpec) { return colSpec.width; }));
    };
    Spreadsheet.prototype._unrenderCells = function () {
        this.bodyColGroup.innerHTML = '';
    };
    Spreadsheet.prototype.renderColTags = function (colSpecs) {
        var html = '';
        for (var _i = 0, colSpecs_1 = colSpecs; _i < colSpecs_1.length; _i++) {
            var o = colSpecs_1[_i];
            if (o.isMain) {
                html += '<col class="fc-main-col"/>';
            }
            else {
                html += '<col/>';
            }
        }
        return html;
    };
    Spreadsheet.prototype.updateSize = function (isResize, totalHeight, isAuto) {
        this.layout.setHeight(totalHeight, isAuto);
    };
    Spreadsheet.prototype.applyColWidths = function (colWidths) {
        var _this = this;
        colWidths.forEach(function (colWidth, colIndex) {
            var headEl = _this.header.colEls[colIndex]; // bad to access child
            var bodyEl = _this.bodyColEls[colIndex];
            var styleVal;
            if (typeof colWidth === 'number') {
                styleVal = colWidth + 'px';
            }
            else if (typeof colWidth == null) {
                styleVal = '';
            }
            headEl.style.width = bodyEl.style.width = styleVal;
        });
    };
    return Spreadsheet;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var MIN_RESOURCE_AREA_WIDTH = 30; // definitely bigger than scrollbars
var ResourceTimelineView = /** @class */ (function (_super) {
    __extends(ResourceTimelineView, _super);
    function ResourceTimelineView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isStickyScrollDirty = false;
        _this.rowNodes = [];
        _this.rowComponents = [];
        _this.rowComponentsById = {};
        _this.resourceAreaWidthDraggings = [];
        _this.splitter = new _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["ResourceSplitter"](); // doesn't let it do businessHours tho
        _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton, _this._unrenderSkeleton);
        _this.hasResourceBusinessHours = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(hasResourceBusinessHours);
        _this.buildRowNodes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["buildRowNodes"]);
        _this.hasNesting = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(hasNesting);
        _this.updateHasNesting = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._updateHasNesting);
        _this.startInteractive = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._startInteractive, _this._stopInteractive);
        return _this;
    }
    ResourceTimelineView.prototype._startInteractive = function (timeAxisEl) {
        this.context.calendar.registerInteractiveComponent(this, { el: timeAxisEl });
    };
    ResourceTimelineView.prototype._stopInteractive = function () {
        this.context.calendar.unregisterInteractiveComponent(this);
    };
    ResourceTimelineView.prototype.render = function (props, context) {
        _super.prototype.render.call(this, props, context);
        this.renderSkeleton(context);
        var splitProps = this.splitter.splitProps(props);
        var hasResourceBusinessHours = this.hasResourceBusinessHours(props.resourceStore);
        this.spreadsheet.receiveProps({
            superHeaderText: this.superHeaderText,
            colSpecs: this.colSpecs
        }, context);
        this.timeAxis.receiveProps({
            dateProfileGenerator: props.dateProfileGenerator,
            dateProfile: props.dateProfile
        }, context);
        this.startInteractive(this.timeAxis.slats.el);
        // for all-resource bg events / selections / business-hours
        this.lane.receiveProps(__assign({}, splitProps[''], { dateProfile: props.dateProfile, nextDayThreshold: context.nextDayThreshold, businessHours: hasResourceBusinessHours ? null : props.businessHours }), context);
        var newRowNodes = this.buildRowNodes(props.resourceStore, this.groupSpecs, this.orderSpecs, this.isVGrouping, props.resourceEntityExpansions, context.options.resourcesInitiallyExpanded);
        this.updateHasNesting(this.hasNesting(newRowNodes));
        this.diffRows(newRowNodes);
        this.updateRowProps(props.dateProfile, hasResourceBusinessHours ? props.businessHours : null, // CONFUSING, comment
        splitProps);
        this.startNowIndicator(props.dateProfile, props.dateProfileGenerator);
    };
    ResourceTimelineView.prototype._renderSkeleton = function (context) {
        var options = context.options, calendar = context.calendar;
        var allColSpecs = options.resourceColumns || [];
        var labelText = options.resourceLabelText; // TODO: view.override
        var defaultLabelText = 'Resources'; // TODO: view.defaults
        var superHeaderText = null;
        if (!allColSpecs.length) {
            allColSpecs.push({
                labelText: labelText || defaultLabelText,
                text: Object(_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["buildResourceTextFunc"])(options.resourceText, calendar)
            });
        }
        else {
            superHeaderText = labelText;
        }
        var plainColSpecs = [];
        var groupColSpecs = [];
        var groupSpecs = [];
        var isVGrouping = false;
        var isHGrouping = false;
        for (var _i = 0, allColSpecs_1 = allColSpecs; _i < allColSpecs_1.length; _i++) {
            var colSpec = allColSpecs_1[_i];
            if (colSpec.group) {
                groupColSpecs.push(colSpec);
            }
            else {
                plainColSpecs.push(colSpec);
            }
        }
        plainColSpecs[0].isMain = true;
        if (groupColSpecs.length) {
            groupSpecs = groupColSpecs;
            isVGrouping = true;
        }
        else {
            var hGroupField = options.resourceGroupField;
            if (hGroupField) {
                isHGrouping = true;
                groupSpecs.push({
                    field: hGroupField,
                    text: options.resourceGroupText,
                    render: options.resourceGroupRender
                });
            }
        }
        var allOrderSpecs = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseFieldSpecs"])(options.resourceOrder);
        var plainOrderSpecs = [];
        for (var _a = 0, allOrderSpecs_1 = allOrderSpecs; _a < allOrderSpecs_1.length; _a++) {
            var orderSpec = allOrderSpecs_1[_a];
            var isGroup = false;
            for (var _b = 0, groupSpecs_1 = groupSpecs; _b < groupSpecs_1.length; _b++) {
                var groupSpec = groupSpecs_1[_b];
                if (groupSpec.field === orderSpec.field) {
                    groupSpec.order = orderSpec.order; // -1, 0, 1
                    isGroup = true;
                    break;
                }
            }
            if (!isGroup) {
                plainOrderSpecs.push(orderSpec);
            }
        }
        this.superHeaderText = superHeaderText;
        this.isVGrouping = isVGrouping;
        this.isHGrouping = isHGrouping;
        this.groupSpecs = groupSpecs;
        this.colSpecs = groupColSpecs.concat(plainColSpecs);
        this.orderSpecs = plainOrderSpecs;
        // START RENDERING...
        this.el.classList.add('fc-timeline');
        if (options.eventOverlap === false) {
            this.el.classList.add('fc-no-overlap');
        }
        this.el.innerHTML = this.renderSkeletonHtml();
        this.resourceAreaHeadEl = this.el.querySelector('thead .fc-resource-area');
        this.setResourceAreaWidth(options.resourceAreaWidth);
        this.initResourceAreaWidthDragging();
        this.miscHeight = this.el.getBoundingClientRect().height;
        this.spreadsheet = new Spreadsheet(this.resourceAreaHeadEl, this.el.querySelector('tbody .fc-resource-area'));
        this.timeAxis = new _fullcalendar_timeline__WEBPACK_IMPORTED_MODULE_1__["TimeAxis"](this.el.querySelector('thead .fc-time-area'), this.el.querySelector('tbody .fc-time-area'));
        var timeAxisRowContainer = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-rows' }, '<table><tbody /></table>');
        this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.contentEl.appendChild(timeAxisRowContainer);
        this.timeAxisTbody = timeAxisRowContainer.querySelector('tbody');
        this.lane = new _fullcalendar_timeline__WEBPACK_IMPORTED_MODULE_1__["TimelineLane"](null, this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.bgEl, this.timeAxis);
        this.bodyScrollJoiner = new _fullcalendar_timeline__WEBPACK_IMPORTED_MODULE_1__["ScrollJoiner"]('vertical', [
            this.spreadsheet.layout.bodyScroller,
            this.timeAxis.layout.bodyScroller
        ]);
        // after scrolljoiner
        this.spreadsheetBodyStickyScroller = new _fullcalendar_timeline__WEBPACK_IMPORTED_MODULE_1__["StickyScroller"](this.spreadsheet.layout.bodyScroller.enhancedScroll, context.isRtl, true // isVertical
        );
    };
    ResourceTimelineView.prototype._unrenderSkeleton = function (context) {
        this.startInteractive.unrender(); // "unrender" bad name
        this.destroyRows(); // wierd to call this here
        this.spreadsheet.destroy();
        this.timeAxis.destroy();
        this.lane.destroy();
        this.spreadsheetBodyStickyScroller.destroy();
        this.el.classList.remove('fc-timeline');
        this.el.classList.remove('fc-no-overlap');
    };
    ResourceTimelineView.prototype.renderSkeletonHtml = function () {
        var theme = this.context.theme;
        return "<table class=\"" + theme.getClass('tableGrid') + "\"> <thead class=\"fc-head\"> <tr> <td class=\"fc-resource-area " + theme.getClass('widgetHeader') + "\"></td> <td class=\"fc-divider fc-col-resizer " + theme.getClass('widgetHeader') + "\"></td> <td class=\"fc-time-area " + theme.getClass('widgetHeader') + "\"></td> </tr> </thead> <tbody class=\"fc-body\"> <tr> <td class=\"fc-resource-area " + theme.getClass('widgetContent') + "\"></td> <td class=\"fc-divider fc-col-resizer " + theme.getClass('widgetHeader') + "\"></td> <td class=\"fc-time-area " + theme.getClass('widgetContent') + "\"></td> </tr> </tbody> </table>";
    };
    ResourceTimelineView.prototype._updateHasNesting = function (isNesting) {
        var classList = this.el.classList;
        if (isNesting) {
            classList.remove('fc-flat');
        }
        else {
            classList.add('fc-flat');
        }
    };
    ResourceTimelineView.prototype.diffRows = function (newNodes) {
        var oldNodes = this.rowNodes;
        var oldLen = oldNodes.length;
        var oldIndexHash = {}; // id -> index
        var oldI = 0;
        var newI = 0;
        for (oldI = 0; oldI < oldLen; oldI++) {
            oldIndexHash[oldNodes[oldI].id] = oldI;
        }
        // iterate new nodes
        for (oldI = 0, newI = 0; newI < newNodes.length; newI++) {
            var newNode = newNodes[newI];
            var oldIFound = oldIndexHash[newNode.id];
            if (oldIFound != null && oldIFound >= oldI) {
                this.removeRows(newI, oldIFound - oldI, oldNodes); // won't do anything if same index
                oldI = oldIFound + 1;
            }
            else {
                this.addRow(newI, newNode);
            }
        }
        // old rows that weren't found need to be removed
        this.removeRows(newI, oldLen - oldI, oldNodes); // won't do anything if same index
        this.rowNodes = newNodes;
    };
    /*
    rowComponents is the in-progress result
    */
    ResourceTimelineView.prototype.addRow = function (index, rowNode) {
        var _a = this, rowComponents = _a.rowComponents, rowComponentsById = _a.rowComponentsById;
        var nextComponent = rowComponents[index];
        var newComponent = this.buildChildComponent(rowNode, this.spreadsheet.bodyTbody, nextComponent ? nextComponent.spreadsheetTr : null, this.timeAxisTbody, nextComponent ? nextComponent.timeAxisTr : null);
        rowComponents.splice(index, 0, newComponent);
        rowComponentsById[rowNode.id] = newComponent;
    };
    ResourceTimelineView.prototype.removeRows = function (startIndex, len, oldRowNodes) {
        if (len) {
            var _a = this, rowComponents = _a.rowComponents, rowComponentsById = _a.rowComponentsById;
            for (var i = 0; i < len; i++) {
                var rowComponent = rowComponents[startIndex + i];
                rowComponent.destroy();
                delete rowComponentsById[oldRowNodes[i].id];
            }
            rowComponents.splice(startIndex, len);
        }
    };
    ResourceTimelineView.prototype.buildChildComponent = function (node, spreadsheetTbody, spreadsheetNext, timeAxisTbody, timeAxisNext) {
        if (node.group) {
            return new GroupRow(spreadsheetTbody, spreadsheetNext, timeAxisTbody, timeAxisNext);
        }
        else if (node.resource) {
            return new ResourceRow(spreadsheetTbody, spreadsheetNext, timeAxisTbody, timeAxisNext, this.timeAxis);
        }
    };
    ResourceTimelineView.prototype.updateRowProps = function (dateProfile, fallbackBusinessHours, splitProps) {
        var _a = this, rowNodes = _a.rowNodes, rowComponents = _a.rowComponents, context = _a.context;
        for (var i = 0; i < rowNodes.length; i++) {
            var rowNode = rowNodes[i];
            var rowComponent = rowComponents[i];
            if (rowNode.group) {
                rowComponent.receiveProps({
                    spreadsheetColCnt: this.colSpecs.length,
                    id: rowNode.id,
                    isExpanded: rowNode.isExpanded,
                    group: rowNode.group
                }, context);
            }
            else {
                var resource = rowNode.resource;
                rowComponent.receiveProps(__assign({}, splitProps[resource.id], { dateProfile: dateProfile, nextDayThreshold: context.nextDayThreshold, businessHours: resource.businessHours || fallbackBusinessHours, colSpecs: this.colSpecs, id: rowNode.id, rowSpans: rowNode.rowSpans, depth: rowNode.depth, isExpanded: rowNode.isExpanded, hasChildren: rowNode.hasChildren, resource: rowNode.resource }), context);
            }
        }
    };
    ResourceTimelineView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
        // FYI: this ordering is really important
        var calendar = this.context.calendar;
        var isBaseSizing = isResize || calendar.isViewUpdated || calendar.isDatesUpdated || calendar.isEventsUpdated;
        if (isBaseSizing) {
            this.syncHeadHeights();
        }
        // TODO: don't always call these (but guarding behind isBaseSizing was unreliable)
        this.timeAxis.updateSize(isResize, viewHeight - this.miscHeight, isAuto);
        this.spreadsheet.updateSize(isResize, viewHeight - this.miscHeight, isAuto);
        var rowSizingCnt = this.updateRowSizes(isResize);
        this.lane.updateSize(isResize); // is efficient. uses flags
        if (isBaseSizing || rowSizingCnt) {
            this.bodyScrollJoiner.update();
            this.timeAxis.layout.scrollJoiner.update(); // hack
            this.rowPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.timeAxis.slats.el, this.rowComponents.map(function (rowComponent) {
                return rowComponent.timeAxisTr;
            }), false, // isHorizontal
            true // isVertical
            );
            this.rowPositions.build();
            this.isStickyScrollDirty = true;
        }
    };
    ResourceTimelineView.prototype.syncHeadHeights = function () {
        var spreadsheetHeadEl = this.spreadsheet.header.tableEl;
        var timeAxisHeadEl = this.timeAxis.header.tableEl;
        spreadsheetHeadEl.style.height = '';
        timeAxisHeadEl.style.height = '';
        var max = Math.max(spreadsheetHeadEl.getBoundingClientRect().height, timeAxisHeadEl.getBoundingClientRect().height);
        spreadsheetHeadEl.style.height =
            timeAxisHeadEl.style.height = max + 'px';
    };
    ResourceTimelineView.prototype.updateRowSizes = function (isResize) {
        var dirtyRowComponents = this.rowComponents;
        if (!isResize) {
            dirtyRowComponents = dirtyRowComponents.filter(function (rowComponent) {
                return rowComponent.isSizeDirty;
            });
        }
        var elArrays = dirtyRowComponents.map(function (rowComponent) {
            return rowComponent.getHeightEls();
        });
        // reset to natural heights
        for (var _i = 0, elArrays_1 = elArrays; _i < elArrays_1.length; _i++) {
            var elArray = elArrays_1[_i];
            for (var _a = 0, elArray_1 = elArray; _a < elArray_1.length; _a++) {
                var el = elArray_1[_a];
                el.style.height = '';
            }
        }
        // let rows update their contents' heights
        for (var _b = 0, dirtyRowComponents_1 = dirtyRowComponents; _b < dirtyRowComponents_1.length; _b++) {
            var rowComponent = dirtyRowComponents_1[_b];
            rowComponent.updateSize(isResize); // will reset isSizeDirty
        }
        var maxHeights = elArrays.map(function (elArray) {
            var maxHeight = null;
            for (var _i = 0, elArray_2 = elArray; _i < elArray_2.length; _i++) {
                var el = elArray_2[_i];
                var height = el.getBoundingClientRect().height;
                if (maxHeight === null || height > maxHeight) {
                    maxHeight = height;
                }
            }
            return maxHeight;
        });
        for (var i = 0; i < elArrays.length; i++) {
            for (var _c = 0, _d = elArrays[i]; _c < _d.length; _c++) {
                var el = _d[_c];
                el.style.height = maxHeights[i] + 'px';
            }
        }
        return dirtyRowComponents.length;
    };
    ResourceTimelineView.prototype.destroyRows = function () {
        for (var _i = 0, _a = this.rowComponents; _i < _a.length; _i++) {
            var rowComponent = _a[_i];
            rowComponent.destroy();
        }
        this.rowNodes = [];
        this.rowComponents = [];
    };
    ResourceTimelineView.prototype.destroy = function () {
        for (var _i = 0, _a = this.resourceAreaWidthDraggings; _i < _a.length; _i++) {
            var resourceAreaWidthDragging = _a[_i];
            resourceAreaWidthDragging.destroy();
        }
        this.renderSkeleton.unrender(); // will call destroyRows
        _super.prototype.destroy.call(this);
    };
    // Now Indicator
    // ------------------------------------------------------------------------------------------
    ResourceTimelineView.prototype.getNowIndicatorUnit = function (dateProfile, dateProfileGenerator) {
        return this.timeAxis.getNowIndicatorUnit(dateProfile, dateProfileGenerator);
    };
    ResourceTimelineView.prototype.renderNowIndicator = function (date) {
        this.timeAxis.renderNowIndicator(date);
    };
    ResourceTimelineView.prototype.unrenderNowIndicator = function () {
        this.timeAxis.unrenderNowIndicator();
    };
    // Scrolling
    // ------------------------------------------------------------------------------------------------------------------
    // this is useful for scrolling prev/next dates while resource is scrolled down
    ResourceTimelineView.prototype.queryScroll = function () {
        var scroll = _super.prototype.queryScroll.call(this);
        if (this.props.resourceStore) {
            __assign(scroll, this.queryResourceScroll());
        }
        return scroll;
    };
    ResourceTimelineView.prototype.applyScroll = function (scroll, isResize) {
        _super.prototype.applyScroll.call(this, scroll, isResize);
        if (this.props.resourceStore) {
            this.applyResourceScroll(scroll);
        }
        // avoid updating stickyscroll too often
        if (isResize || this.isStickyScrollDirty) {
            this.isStickyScrollDirty = false;
            this.spreadsheetBodyStickyScroller.updateSize();
            this.timeAxis.updateStickyScrollers();
        }
    };
    ResourceTimelineView.prototype.computeDateScroll = function (duration) {
        return this.timeAxis.computeDateScroll(duration);
    };
    ResourceTimelineView.prototype.queryDateScroll = function () {
        return this.timeAxis.queryDateScroll();
    };
    ResourceTimelineView.prototype.applyDateScroll = function (scroll) {
        this.timeAxis.applyDateScroll(scroll);
    };
    ResourceTimelineView.prototype.queryResourceScroll = function () {
        var _a = this, rowComponents = _a.rowComponents, rowNodes = _a.rowNodes;
        var scroll = {};
        var scrollerTop = this.timeAxis.layout.bodyScroller.el.getBoundingClientRect().top; // fixed position
        for (var i = 0; i < rowComponents.length; i++) {
            var rowComponent = rowComponents[i];
            var rowNode = rowNodes[i];
            var el = rowComponent.timeAxisTr;
            var elBottom = el.getBoundingClientRect().bottom; // fixed position
            if (elBottom > scrollerTop) {
                scroll.rowId = rowNode.id;
                scroll.bottom = elBottom - scrollerTop;
                break;
            }
        }
        // TODO: what about left scroll state for spreadsheet area?
        return scroll;
    };
    ResourceTimelineView.prototype.applyResourceScroll = function (scroll) {
        var rowId = scroll.forcedRowId || scroll.rowId;
        if (rowId) {
            var rowComponent = this.rowComponentsById[rowId];
            if (rowComponent) {
                var el = rowComponent.timeAxisTr;
                if (el) {
                    var innerTop = this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.el.getBoundingClientRect().top;
                    var rowRect = el.getBoundingClientRect();
                    var scrollTop = (scroll.forcedRowId ?
                        rowRect.top : // just use top edge
                        rowRect.bottom - scroll.bottom) - // pixels from bottom edge
                        innerTop;
                    this.timeAxis.layout.bodyScroller.enhancedScroll.setScrollTop(scrollTop);
                    this.spreadsheet.layout.bodyScroller.enhancedScroll.setScrollTop(scrollTop);
                }
            }
        }
    };
    // TODO: scrollToResource
    // Hit System
    // ------------------------------------------------------------------------------------------
    ResourceTimelineView.prototype.buildPositionCaches = function () {
        this.timeAxis.slats.updateSize();
        this.rowPositions.build();
    };
    ResourceTimelineView.prototype.queryHit = function (positionLeft, positionTop) {
        var rowPositions = this.rowPositions;
        var slats = this.timeAxis.slats;
        var rowIndex = rowPositions.topToIndex(positionTop);
        if (rowIndex != null) {
            var resource = this.rowNodes[rowIndex].resource;
            if (resource) { // not a group
                var slatHit = slats.positionToHit(positionLeft);
                if (slatHit) {
                    return {
                        component: this,
                        dateSpan: {
                            range: slatHit.dateSpan.range,
                            allDay: slatHit.dateSpan.allDay,
                            resourceId: resource.id
                        },
                        rect: {
                            left: slatHit.left,
                            right: slatHit.right,
                            top: rowPositions.tops[rowIndex],
                            bottom: rowPositions.bottoms[rowIndex]
                        },
                        dayEl: slatHit.dayEl,
                        layer: 0
                    };
                }
            }
        }
    };
    // Resource Area
    // ------------------------------------------------------------------------------------------------------------------
    ResourceTimelineView.prototype.setResourceAreaWidth = function (widthVal) {
        this.resourceAreaWidth = widthVal;
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyleProp"])(this.resourceAreaHeadEl, 'width', widthVal || '');
    };
    ResourceTimelineView.prototype.initResourceAreaWidthDragging = function () {
        var _this = this;
        var _a = this.context, calendar = _a.calendar, isRtl = _a.isRtl;
        var resourceAreaDividerEls = Array.prototype.slice.call(this.el.querySelectorAll('.fc-col-resizer'));
        var ElementDraggingImpl = calendar.pluginSystem.hooks.elementDraggingImpl;
        if (ElementDraggingImpl) {
            this.resourceAreaWidthDraggings = resourceAreaDividerEls.map(function (el) {
                var dragging = new ElementDraggingImpl(el);
                var dragStartWidth;
                var viewWidth;
                dragging.emitter.on('dragstart', function () {
                    dragStartWidth = _this.resourceAreaWidth;
                    if (typeof dragStartWidth !== 'number') {
                        dragStartWidth = _this.resourceAreaHeadEl.getBoundingClientRect().width;
                    }
                    viewWidth = _this.el.getBoundingClientRect().width;
                });
                dragging.emitter.on('dragmove', function (pev) {
                    var newWidth = dragStartWidth + pev.deltaX * (isRtl ? -1 : 1);
                    newWidth = Math.max(newWidth, MIN_RESOURCE_AREA_WIDTH);
                    newWidth = Math.min(newWidth, viewWidth - MIN_RESOURCE_AREA_WIDTH);
                    _this.setResourceAreaWidth(newWidth);
                });
                dragging.setAutoScrollEnabled(false); // because gets weird with auto-scrolling time area
                return dragging;
            });
        }
    };
    ResourceTimelineView.needsResourceData = true; // for ResourceViewProps
    return ResourceTimelineView;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["View"]));
function hasResourceBusinessHours(resourceStore) {
    for (var resourceId in resourceStore) {
        var resource = resourceStore[resourceId];
        if (resource.businessHours) {
            return true;
        }
    }
    return false;
}
function hasNesting(nodes) {
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        if (node.group) {
            return true;
        }
        else if (node.resource) {
            if (node.hasChildren) {
                return true;
            }
        }
    }
    return false;
}

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    deps: [_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timeline__WEBPACK_IMPORTED_MODULE_1__["default"]],
    defaultView: 'resourceTimelineDay',
    views: {
        resourceTimeline: {
            class: ResourceTimelineView,
            resourceAreaWidth: '30%',
            resourcesInitiallyExpanded: true,
            eventResizableFromStart: true // TODO: not DRY with this same setting in the main timeline config
        },
        resourceTimelineDay: {
            type: 'resourceTimeline',
            duration: { days: 1 }
        },
        resourceTimelineWeek: {
            type: 'resourceTimeline',
            duration: { weeks: 1 }
        },
        resourceTimelineMonth: {
            type: 'resourceTimeline',
            duration: { months: 1 }
        },
        resourceTimelineYear: {
            type: 'resourceTimeline',
            duration: { years: 1 }
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "R0Vg":
/*!*******************************************!*\
  !*** ./src/app/services/ticket.module.ts ***!
  \*******************************************/
/*! exports provided: Ticket, TicketTeam, TicketItem, TicketAttachment, TicketIssueType, TicketWiseIssueType, TicketTimer, TicketReminder, TicketEquipment, TicketEquipmentMasterData, TicketRecurringHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketTeam", function() { return TicketTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketItem", function() { return TicketItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketAttachment", function() { return TicketAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketIssueType", function() { return TicketIssueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketWiseIssueType", function() { return TicketWiseIssueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketTimer", function() { return TicketTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketReminder", function() { return TicketReminder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketEquipment", function() { return TicketEquipment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketEquipmentMasterData", function() { return TicketEquipmentMasterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketRecurringHelper", function() { return TicketRecurringHelper; });
/* harmony import */ var _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommanExtendsClass.module */ "mbav");

class Ticket {
}
class TicketTeam {
}
class TicketItem {
}
class TicketAttachment {
}
class TicketIssueType {
}
class TicketWiseIssueType {
}
class TicketTimer {
}
class TicketReminder extends _CommanExtendsClass_module__WEBPACK_IMPORTED_MODULE_0__["ReminderBase"] {
}
class TicketEquipment {
}
class TicketEquipmentMasterData {
}
class TicketRecurringHelper {
}


/***/ }),

/***/ "X7qY":
/*!******************************************************************************************!*\
  !*** ./src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TicketStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketStatusComponent", function() { return TicketStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TicketStatusComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NEW\u00A0JOB\u00A0REQUEST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DEFECT\u00A0JOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CANCELLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UPCOMING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLOSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLOSED & QUOTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLOSED & INVOICED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OVERDUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketStatusComponent_span_8_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketStatusComponent_span_8_span_3_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx_r8.OverDueDays, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.OverDueDays === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.OverDueDays > 1);
} }
function TicketStatusComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "HOLD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "INPROGRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TicketStatusComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UNSCHEDULED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TicketStatusComponent {
}
TicketStatusComponent.ɵfac = function TicketStatusComponent_Factory(t) { return new (t || TicketStatusComponent)(); };
TicketStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketStatusComponent, selectors: [["generic-ticket-status"]], inputs: { Status: "Status", OverDueDays: "OverDueDays" }, decls: 12, vars: 12, consts: [["class", "ticketstatus statusnewjobrequest", 4, "ngIf"], ["class", "ticketstatus statuscancelled", 4, "ngIf"], ["class", "ticketstatus statusupcoming", 4, "ngIf"], ["class", "ticketstatus statusclosed", 4, "ngIf"], ["class", "ticketstatus statusclosednQuoted", 4, "ngIf"], ["class", "ticketstatus statusclosednInvoised", 4, "ngIf"], ["class", "ticketstatus statusoverdue", 4, "ngIf"], ["class", "ticketstatus statusoverdueday", 4, "ngIf"], ["class", "ticketstatus statushold", 4, "ngIf"], ["class", "ticketstatus statusinprogress", 4, "ngIf"], ["class", "ticketstatus statusunschedulled", 4, "ngIf"], [1, "ticketstatus", "statusnewjobrequest"], [1, "ticketstatus", "statuscancelled"], [1, "ticketstatus", "statusupcoming"], [1, "ticketstatus", "statusclosed"], [1, "ticketstatus", "statusclosednQuoted"], [1, "ticketstatus", "statusclosednInvoised"], [1, "ticketstatus", "statusoverdue"], [1, "ticketstatus", "statusoverdueday"], [4, "ngIf"], [1, "ticketstatus", "statushold"], [1, "ticketstatus", "statusinprogress"], [1, "ticketstatus", "statusunschedulled"]], template: function TicketStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TicketStatusComponent_span_0_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TicketStatusComponent_span_1_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketStatusComponent_span_2_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketStatusComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TicketStatusComponent_span_4_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketStatusComponent_span_5_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TicketStatusComponent_span_6_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketStatusComponent_span_7_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TicketStatusComponent_span_8_Template, 4, 3, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TicketStatusComponent_span_9_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TicketStatusComponent_span_10_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TicketStatusComponent_span_11_Template, 2, 0, "span", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "NEW JOB REQUEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "DEFECT JOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "CANCELLED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "UPCOMING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "CLOSEDQUOTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "CLOSEDINVOICED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "OVERDUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "OVERDUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "HOLD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "INPROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Status === "UNSCHEDULED");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'generic-ticket-status',
                template: `
     <span *ngIf="Status ==='NEW JOB REQUEST'" class="ticketstatus statusnewjobrequest">NEW&nbsp;JOB&nbsp;REQUEST</span>
     <span *ngIf="Status ==='DEFECT JOB'" class="ticketstatus statusnewjobrequest">DEFECT&nbsp;JOB</span>
    <span *ngIf="Status ==='CANCELLED'" class="ticketstatus statuscancelled">CANCELLED</span>
    <span *ngIf="Status ==='UPCOMING'" class="ticketstatus statusupcoming">UPCOMING</span>
    <span *ngIf="Status ==='CLOSED'" class="ticketstatus statusclosed">CLOSED</span>
    <span *ngIf="Status ==='CLOSEDQUOTED'" class="ticketstatus statusclosednQuoted">CLOSED & QUOTED</span>
    <span *ngIf="Status ==='CLOSEDINVOICED'" class="ticketstatus statusclosednInvoised">CLOSED & INVOICED</span>
    <span *ngIf="Status ==='OVERDUE'" class="ticketstatus statusoverdue">OVERDUE</span>
    <span *ngIf="Status ==='OVERDUE'" class="ticketstatus statusoverdueday">By {{OverDueDays}}
	<span *ngIf="OverDueDays === 1">&nbsp;Day</span>
	<span *ngIf="OverDueDays > 1">&nbsp;Days</span></span>
    <span *ngIf="Status ==='HOLD'" class="ticketstatus statushold">HOLD</span>
    <span *ngIf="Status ==='INPROGRESS'" class="ticketstatus statusinprogress">INPROGRESS</span>
    <span *ngIf="Status === 'UNSCHEDULED'" class="ticketstatus statusunschedulled">UNSCHEDULED</span>
  `
            }]
    }], null, { Status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], OverDueDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ecWM":
/*!*********************************************************************************!*\
  !*** ./src/app/application/calendar/month-resource/month-resource.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MonthResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthResourceComponent", function() { return MonthResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/resource-timeline */ "PQoC");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "iOEq");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/timegrid */ "p8AH");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ "Gbwi");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_ticket_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/ticket.module */ "R0Vg");
/* harmony import */ var _services_genicprofile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/genicprofile.module */ "9u/L");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ticket_reschedule_popup_ticket_reschedule_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ticket-reschedule-popup/ticket-reschedule-popup.component */ "uOhu");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/calendar.service */ "3WFG");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/ticket.service */ "KPvW");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services */ "o0su");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/customer.service */ "0zL+");
/* harmony import */ var _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/genicprofile.service */ "bU6e");
/* harmony import */ var _services_engineer_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/engineer.service */ "+MZO");
/* harmony import */ var _services_userlog_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../services/userlog.service */ "V05N");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-select-dropdown */ "8bGj");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../generic-utils/Ticket-Status-Component/TicketStatusComponent.component */ "X7qY");






























const _c0 = ["viewmodalContent"];
const _c1 = ["calendar"];
const _c2 = ["external"];
function MonthResourceComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resource");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthResourceComponent_div_42_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 72);
} }
function MonthResourceComponent_div_42_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 73);
} }
function MonthResourceComponent_div_42_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-datepicker", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function MonthResourceComponent_div_42_div_11_Template_ngb_datepicker_select_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onDateSelect($event); })("navigate", function MonthResourceComponent_div_42_div_11_Template_ngb_datepicker_navigate_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.date = $event.next; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthResourceComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-select-dropdown", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MonthResourceComponent_div_42_Template_ngx_select_dropdown_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onCustomerItemSelect($event); })("ngModelChange", function MonthResourceComponent_div_42_Template_ngx_select_dropdown_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.CustomerselectedItems = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-select-dropdown", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MonthResourceComponent_div_42_Template_ngx_select_dropdown_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onEngineerItemSelect($event); })("ngModelChange", function MonthResourceComponent_div_42_Template_ngx_select_dropdown_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.EngineerselectedItems = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-select-dropdown", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MonthResourceComponent_div_42_Template_ngx_select_dropdown_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onStatusItemSelect($event); })("ngModelChange", function MonthResourceComponent_div_42_Template_ngx_select_dropdown_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.StatusselectedItems = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthResourceComponent_div_42_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.showcalendar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MonthResourceComponent_div_42_i_9_Template, 1, 0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MonthResourceComponent_div_42_i_10_Template, 1, 0, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MonthResourceComponent_div_42_div_11_Template, 2, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("ngModel", ctx_r1.CustomerselectedItems)("config", ctx_r1.CustomerdropdownSettings)("options", ctx_r1.CustomerdropdownList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("ngModel", ctx_r1.EngineerselectedItems)("config", ctx_r1.EngineerdropdownSettings)("options", ctx_r1.EngineerdropdownList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("ngModel", ctx_r1.StatusselectedItems)("config", ctx_r1.StatusdropdownSettings)("options", ctx_r1.StatusdropdownList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.Iscalendarshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.Iscalendarshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.Iscalendarshow);
} }
function MonthResourceComponent_strong_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.ticketlist.length, " Unallocated Ticket");
} }
function MonthResourceComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", t_r24.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", t_r24.TicketId, " | ", t_r24.Title, "");
} }
function MonthResourceComponent_ng_template_84_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Visit | One-Off Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthResourceComponent_ng_template_84_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visit | Recurring Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthResourceComponent_ng_template_84_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthResourceComponent_ng_template_84_em_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r38, " ");
} }
function MonthResourceComponent_ng_template_84_i_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 124);
} }
function MonthResourceComponent_ng_template_84_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " High Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthResourceComponent_ng_template_84_i_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 126);
} }
function MonthResourceComponent_ng_template_84_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Medium Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthResourceComponent_ng_template_84_i_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 128);
} }
function MonthResourceComponent_ng_template_84_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Low Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthResourceComponent_ng_template_84_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r39.EngineerName);
} }
function MonthResourceComponent_ng_template_84_tr_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itm_r40.ItemName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itm_r40.ItemTotalCost, "");
} }
function MonthResourceComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthResourceComponent_ng_template_84_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthResourceComponent_ng_template_84_span_4_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MonthResourceComponent_ng_template_84_button_7_Template, 3, 0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthResourceComponent_ng_template_84_Template_button_click_8_listener() { const close_r25 = ctx.close; return close_r25(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MonthResourceComponent_ng_template_84_em_19_Template, 3, 1, "em", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Direction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MonthResourceComponent_ng_template_84_i_30_Template, 1, 0, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MonthResourceComponent_ng_template_84_span_31_Template, 2, 0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MonthResourceComponent_ng_template_84_i_32_Template, 1, 0, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MonthResourceComponent_ng_template_84_span_33_Template, 2, 0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MonthResourceComponent_ng_template_84_i_34_Template, 1, 0, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MonthResourceComponent_ng_template_84_span_35_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "generic-ticket-status", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("StatusChange", function MonthResourceComponent_ng_template_84_Template_generic_ticket_status_StatusChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.ticketservice.formData.Status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, MonthResourceComponent_ng_template_84_div_71_Template, 2, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Line Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "table", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Product/Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "QTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, MonthResourceComponent_ng_template_84_tr_84_Template, 5, 2, "tr", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Client Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "table", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Property ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.formData.TicketType === "One-Off Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.formData.TicketType === "Recurring Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.formData.Status === "UPCOMING" || ctx_r9.ticketservice.formData.Status === "OVERDUE" || ctx_r9.ticketservice.formData.Status === "UNSCHEDULED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.ticketservice.formData.CustomerCompanyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.ticketservice.formData.CustomerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.ticketservice.formData.CustomerAddress == null ? null : ctx_r9.ticketservice.formData.CustomerAddress.split(","));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 30, ctx_r9.ticketservice.formData.OneOffAppointmentDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](24, 32, ctx_r9.ticketservice.formData.AppointmentStart, "h:mm a", "+0000"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](25, 36, ctx_r9.ticketservice.formData.AppointmentEnd, "h:mm a", "+0000"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.google.com/maps/place/", ctx_r9.ticketservice.formData.CustomerAddress, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.formData.Priority === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.formData.Priority === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.formData.Priority === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.formData.Priority === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.formData.Priority === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.ticketservice.formData.Priority === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Status", ctx_r9.ticketservice.formData.Status)("OverDueDays", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.ticketservice.formData.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.ticketservice.formData.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.ticketservice.formData.TicketId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.ticketservice.formData.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.ticketservice.formData.TicketTeams);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.ticketservice.formData.TicketItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.ticketservice.formData.CustomerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.ticketservice.formData.CustomerEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:@", ctx_r9.ticketservice.formData.CustomerEmail, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.ticketservice.formData.CustomerAddress, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.google.com/maps/place/", ctx_r9.ticketservice.formData.CustomerAddress, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.ticketservice.formData.InternalNoteDescription, " ");
} }
class MonthResourceComponent {
    constructor(titleService, service, ticketservice, loginservice, customerservice, genicprofileservice, engineerservice, logService, toastr, dialog, router) {
        this.titleService = titleService;
        this.service = service;
        this.ticketservice = ticketservice;
        this.loginservice = loginservice;
        this.customerservice = customerservice;
        this.genicprofileservice = genicprofileservice;
        this.engineerservice = engineerservice;
        this.logService = logService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.refresh = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.OneOffIsVisible = true;
        this.aspectRatio = 2.8;
        this.Iscalendarshow = false;
        this.currentUTCDate = new Date();
        this.viewDate = new Date();
        this.plugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.defaultView = 'resourceTimelineDay';
        this.header = { left: ' prev, today next ', center: 'title', right: 'resourceTimelineDay,resourceTimelineThreeDays,resourceTimelineWeek' };
        this.views = {
            resourceTimelineThreeDays: { type: 'resourceTimeline', duration: { days: 3 }, buttonText: '3 day' },
            resourceTimelineWeek: { type: 'resourceTimeline', duration: { days: 7 }, buttonText: 'week' }
        };
        this.CustomerdropdownList = [];
        this.CustomerselectedItems = [];
        this.CustomerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Customers' };
        this.EngineerdropdownList = [];
        this.EngineerselectedItems = [];
        this.EngineerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Engineers' };
        this.StatusdropdownList = [];
        this.StatusselectedItems = [];
        this.StatusdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Status' };
        this.loginservice.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.ticketlist = [];
        this.isDtInitialized = false;
    }
    ngOnInit() {
        this.EngineerdropdownSettings = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: this.currentUser.Engineer + 's' };
        this.genicprofileservice.TicketFilter.IsReady = false;
        this.genicprofileservice.TicketFilter.IsReadyQuote = false;
        this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
        if (this.currentUser.Permissions.ResourceView === false) {
            this.router.navigate(['/dashboard']);
        }
        this.titleService.setTitle('Calendar Resource | Genic Solution');
        this.showFilte = false;
        setTimeout(() => {
            this.showFilte = true;
        }, 1000);
        this.RefreshData();
        if (this.genicprofileservice.ResourceFullCalendarSetting === undefined) {
            this.genicprofileservice.ResourceFullCalendarSetting = new _services_genicprofile_module__WEBPACK_IMPORTED_MODULE_8__["ResourceFullCalendarSetting"]();
            this.genicprofileservice.ResourceFullCalendarSetting.start = '08:00';
            this.genicprofileservice.ResourceFullCalendarSetting.end = '20:00';
        }
        // tslint:disable-next-line: no-unused-expression
        new _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["Draggable"](this.external.nativeElement, {
            itemSelector: '.fc-event', eventData(eventEl) {
                return {
                    title: eventEl.innerText
                };
            }
        });
    }
    eventDragStop(model) {
        console.log(model);
    }
    drop(e) {
        const Id = e.draggedEl.id;
        const sTime = new Date(e.dateStr);
        const eTime = new Date(e.dateStr);
        eTime.setMinutes(sTime.getMinutes() + 60);
        const EngineerId = e.resource._resource.id;
        this.ticketservice.formData = new _services_ticket_module__WEBPACK_IMPORTED_MODULE_7__["Ticket"]();
        this.ticketservice.formData.Id = Id;
        this.ticketservice.formData.CustomerId = '00000000-0000-0000-0000-000000000000';
        this.ticketservice.formData.PropertyId = EngineerId;
        this.ticketservice.formData.OneOffAppointmentDate = sTime.toISOString();
        this.ticketservice.formData.OneOffStartTime =
            sTime.getHours().toString().padStart(2, '0') + ':' +
                sTime.getMinutes().toString().padStart(2, '0') + ':' +
                sTime.getSeconds().toString().padStart(2, '0') + '.' +
                sTime.getMilliseconds().toString().padStart(3, '0');
        this.ticketservice.formData.OneOffEndTime =
            eTime.getHours().toString().padStart(2, '0') + ':' +
                eTime.getMinutes().toString().padStart(2, '0') + ':' +
                eTime.getSeconds().toString().padStart(2, '0') + '.' +
                eTime.getMilliseconds().toString().padStart(3, '0');
        this.ticketservice.ResourceViewDropableEvent(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                    this.RefreshData();
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    eventClick(e) {
        const Id = e.event._def.publicId;
        if (Number(Id) !== 0) {
            this.openpopup(Id);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: e.view.title,
                text: e.event._def.title,
                type: 'info'
            });
        }
    }
    ngAfterViewInit() {
        this.customerservice.getCustomerListSync(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                const custList = response.result;
                custList.forEach(w => {
                    this.CustomerdropdownList.push({ Id: w.Id, Name: w.CompanyName, IsAssigned: false });
                    this.genicprofileservice.TicketFilter.CustomerId.forEach(el => {
                        if (w.Id === el) {
                            this.CustomerselectedItems.push({ Id: w.Id, Name: w.CompanyName, IsAssigned: true });
                        }
                    });
                });
            }
        }, error => console.log(error));
        this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                const engList = response.result;
                engList.forEach(w => {
                    this.EngineerdropdownList.push({ Id: w.Id, Name: w.EngineerName, IsAssigned: false });
                    this.genicprofileservice.TicketFilter.EngineerId.forEach(el => {
                        if (w.Id === el) {
                            this.EngineerselectedItems.push({ Id: w.Id, Name: w.EngineerName, IsAssigned: true });
                        }
                    });
                });
            }
        }, error => console.log(error));
        this.StatusdropdownList = [
            { Id: 'UPCOMING', Name: 'UPCOMING' },
            { Id: 'HOLD', Name: 'HOLD' },
            { Id: 'INPROGRESS', Name: 'INPROGRESS' },
            { Id: 'OVERDUE', Name: 'OVERDUE' },
            { Id: 'CLOSED', Name: 'CLOSED' },
            { Id: 'UNALLOCATED', Name: 'UNALLOCATED' },
            { Id: 'UNSCHEDULED', Name: 'UNSCHEDULED' },
            { Id: 'CANCELED', Name: 'CANCELED' }
        ];
    }
    onDateSelect(e) {
        this.Iscalendarshow = false;
        const d = new Date(e.year, e.month - 1, e.day, 0, 0, 0, 0);
        const calendarApi = this.calendarComponent.getApi();
        calendarApi.gotoDate(d);
        // this.Iscalendarshow = false;
        // const d = new Date(this.CalendarResourceData.Date);
        // const calendarApi = this.calendarComponent.getApi();
        // calendarApi.gotoDate(d);
    }
    DraggableEvent(e) {
        const Id = e.prevEvent._def.publicId;
        const sTime = new Date(e.event._instance.range.start);
        const eTime = new Date(e.event._instance.range.end);
        const EngineerId = e.prevEvent._def.resourceIds[0];
        this.ticketservice.formData = new _services_ticket_module__WEBPACK_IMPORTED_MODULE_7__["Ticket"]();
        this.ticketservice.formData.Id = Id;
        this.ticketservice.formData.PropertyId = EngineerId;
        this.ticketservice.formData.OneOffAppointmentDate = sTime.toISOString();
        this.ticketservice.formData.OneOffStartTime =
            sTime.getUTCHours().toString().padStart(2, '0') + ':' +
                sTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                sTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                sTime.getUTCMilliseconds().toString().padStart(3, '0');
        this.ticketservice.formData.OneOffEndTime =
            eTime.getUTCHours().toString().padStart(2, '0') + ':' +
                eTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                eTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                eTime.getUTCMilliseconds().toString().padStart(3, '0');
        this.ticketservice.ResourceViewDraggableEvent(this.currentUser.Token).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.toastr.success('success', response.MessageDescription);
                    this.RefreshData();
                }
                if (response.Message === 'failure') {
                    this.RefreshData();
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    eventDrop(e) {
        if (e.oldResource === null) {
            const Id = e.event._def.publicId;
            const sTime = new Date(e.event._instance.range.start);
            const eTime = new Date(e.event._instance.range.end);
            const EngineerId = e.event._def.resourceIds[0];
            this.ticketservice.formData = new _services_ticket_module__WEBPACK_IMPORTED_MODULE_7__["Ticket"]();
            this.ticketservice.formData.Id = Id;
            this.ticketservice.formData.PropertyId = EngineerId;
            this.ticketservice.formData.OneOffAppointmentDate = sTime.toISOString();
            this.ticketservice.formData.OneOffStartTime =
                sTime.getUTCHours().toString().padStart(2, '0') + ':' +
                    sTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                    sTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                    sTime.getUTCMilliseconds().toString().padStart(3, '0');
            this.ticketservice.formData.OneOffEndTime =
                eTime.getUTCHours().toString().padStart(2, '0') + ':' +
                    eTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                    eTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                    eTime.getUTCMilliseconds().toString().padStart(3, '0');
            this.ticketservice.ResourceViewDraggableEvent(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.toastr.success('success', response.MessageDescription);
                        this.RefreshData();
                    }
                    if (response.Message === 'failure') {
                        this.RefreshData();
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                }
            }, error => console.log(error));
        }
        else {
            const Id = e.event._def.publicId;
            const sTime = new Date(e.event._instance.range.start);
            const eTime = new Date(e.event._instance.range.end);
            const OldEngineerId = e.oldResource._resource.id;
            const NewEngineerId = e.newResource._resource.id;
            this.ticketservice.formData = new _services_ticket_module__WEBPACK_IMPORTED_MODULE_7__["Ticket"]();
            this.ticketservice.formData.Id = Id;
            this.ticketservice.formData.CustomerId = OldEngineerId;
            this.ticketservice.formData.PropertyId = NewEngineerId;
            this.ticketservice.formData.OneOffAppointmentDate = sTime.toISOString();
            this.ticketservice.formData.OneOffStartTime =
                sTime.getUTCHours().toString().padStart(2, '0') + ':' +
                    sTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                    sTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                    sTime.getUTCMilliseconds().toString().padStart(3, '0');
            this.ticketservice.formData.OneOffEndTime =
                eTime.getUTCHours().toString().padStart(2, '0') + ':' +
                    eTime.getUTCMinutes().toString().padStart(2, '0') + ':' +
                    eTime.getUTCSeconds().toString().padStart(2, '0') + '.' +
                    eTime.getUTCMilliseconds().toString().padStart(3, '0');
            this.ticketservice.ResourceViewDropableEvent(this.currentUser.Token).subscribe(res => {
                if (res) {
                    const response = res;
                    if (response.Message === 'success') {
                        this.toastr.success('success', response.MessageDescription);
                        this.RefreshData();
                    }
                    if (response.Message === 'failure') {
                        this.RefreshData();
                        this.toastr.warning('warning', response.MessageDescription);
                    }
                }
            }, error => console.log(error));
        }
    }
    RefreshData() {
        if (this.isDtInitialized) {
            const calendarApi = this.calendarComponent.getApi();
            calendarApi.removeAllEvents();
            calendarApi.refetchEvents();
        }
        this.ticketlist = [];
        this.resources = [];
        this.calendarEvents = [];
        this.service.ResourceParamData.TokenNo = this.currentUser.Token;
        this.service.refrestResourceViewList(this.currentUser.Token, this.service.ResourceParamData).subscribe(res => {
            if (res) {
                const response = res;
                if (response.Message === 'success') {
                    this.isDtInitialized = true;
                    this.resources = response.Item1;
                    this.calendarEvents = response.Item2;
                    this.ticketservice.getUnAssignedTickets(this.currentUser.Token).subscribe(res2 => {
                        if (res2) {
                            const response2 = res2;
                            this.ticketlist = response2.result;
                        }
                    }, error => console.log(error));
                }
                if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                }
            }
        }, error => console.log(error));
    }
    eventrender(event) {
        event.el.title = event.event.title;
    }
    showcalendar() {
        if (this.Iscalendarshow) {
            this.Iscalendarshow = false;
        }
        else {
            this.Iscalendarshow = true;
        }
    }
    /// Custimer
    onCustomerItemSelect(e) {
        this.service.ResourceParamData.CustomerId = [];
        e.value.forEach(element => {
            this.service.ResourceParamData.CustomerId.push(element.Id);
        });
        this.RefreshData();
    }
    /// Engineers
    onEngineerItemSelect(e) {
        this.service.ResourceParamData.EngineerId = [];
        e.value.forEach(element => {
            this.service.ResourceParamData.EngineerId.push(element.Id);
        });
        this.RefreshData();
    }
    onStatusItemSelect(e) {
        this.service.ResourceParamData.Status = [];
        e.value.forEach(element => {
            this.service.ResourceParamData.Status.push(element.Id);
        });
        this.RefreshData();
    }
    openpopup(id) {
        // this.toastr.info(c);
        this.ticketservice.formData.Id = id;
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '720px';
        dialogConfig.height = '720px';
        dialogConfig.data = {};
        this.dialog.open(_ticket_reschedule_popup_ticket_reschedule_popup_component__WEBPACK_IMPORTED_MODULE_11__["TicketReschedulePopupComponent"], dialogConfig)
            .afterClosed().subscribe(res => {
            this.engineerservice.releseTemporaryEngineerFromTicket(this.ticketservice.formData.Id, this.currentUser.Token, 'revert').subscribe(res => {
                this.RefreshData();
            }, error => console.log(error));
        });
    }
    OneOffScheduledLater() {
        if (this.ticketservice.formData.OneOffScheduled === true) {
            this.OneOffIsVisible = false;
        }
        else {
            this.OneOffIsVisible = true;
        }
    }
    resourcetime(e, v) {
        if (v === 'start') {
            this.genicprofileservice.ResourceFullCalendarSetting.start = e.target.value;
        }
        if (v === 'end') {
            this.genicprofileservice.ResourceFullCalendarSetting.end = e.target.value;
        }
    }
}
MonthResourceComponent.ɵfac = function MonthResourceComponent_Factory(t) { return new (t || MonthResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_calendar_service__WEBPACK_IMPORTED_MODULE_13__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ticket_service__WEBPACK_IMPORTED_MODULE_14__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_16__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_genicprofile_service__WEBPACK_IMPORTED_MODULE_17__["GenicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_engineer_service__WEBPACK_IMPORTED_MODULE_18__["EngineerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userlog_service__WEBPACK_IMPORTED_MODULE_19__["UserlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"])); };
MonthResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthResourceComponent, selectors: [["ng-component"]], viewQuery: function MonthResourceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewmodalContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.calendarComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.external = _t.first);
    } }, decls: 86, vars: 23, consts: [["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor"], ["id", "kt_subheader", 1, "kt-subheader", "kt-grid__item"], [1, "kt-container", "kt-container--fluid"], [1, "kt-subheader__main"], [1, "kt-subheader__title"], ["href", "javascript:;", "routerLink", "/dashboard"], [1, "kt-subheader__separator", "kt-hidden"], [1, "kt-subheader__breadcrumbs"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "kt-subheader__breadcrumbs-separator"], [1, "kt-subheader__breadcrumbs-link"], [1, "kt-subheader__toolbar"], [1, "kt-subheader__wrapper"], [1, "new-quote-main-section"], [1, "new-requst-filter_form", "create-new-client-popup"], [1, "accordion", "accordion-solid"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-xs-12", "no-spacing"], [1, ""], [1, "col-lg-12", "left-enlarge"], ["id", "kt_portlet", 1, "kt-portlet"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-icon"], [1, "flaticon-map-location"], [1, "kt-portlet__head-title"], ["aria-hidden", "true", 1, "la", "la-refresh", 2, "font-weight", "bold", 3, "click"], [1, "kt-portlet__head-toolbar"], ["class", "btn btn-group", 4, "ngIf"], [1, "ffffrow"], ["class", "row", 4, "ngIf"], [1, "resource-main"], [1, "row", 2, "padding", "10px"], [3, "ngClass"], [1, "col-md-12"], ["schedulerLicenseKey", "GPL-My-Project-Is-Open-Source", "theme", "'standart'", 3, "defaultDate", "defaultView", "plugins", "events", "resourceLabelText", "resources", "header", "timeZone", "editable", "selectable", "droppable", "views", "minTime", "maxTime", "nowIndicator", "aspectRatio", "eventResize", "eventDrop", "eventRender", "eventDragStop", "eventClick", "drop"], ["calendar", ""], [1, "col-md-2", "col-sm-2", "external-events"], ["external", ""], [4, "ngIf"], ["style", "cursor: pointer;margin-bottom: 1px; padding: 2px;", "class", "fc-event", 3, "id", 4, "ngFor", "ngForAsync", "ngForOf"], [1, "row", 2, "padding", "20px"], [1, "col-md-1"], [1, "input-group"], [1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["genicprofileservice.ResourceFullCalendarSetting.start", ""], ["value", "00:00"], ["value", "02:00"], ["value", "04:00"], ["value", "06:00"], ["value", "08:00"], ["value", "10:00"], ["genicprofileservice.ResourceFullCalendarSetting.end", ""], ["value", "16:00"], ["value", "18:00"], ["value", "20:00"], ["value", "22:00"], ["value", "24:00"], ["viewmodalContent", ""], [1, "btn", "btn-group"], ["routerLink", "/calendar/month-tickets", "href", "javascript:;", 1, "btn", "btn-secondary"], ["routerLink", "/calendar/resource-view", "href", "javascript:;", 1, "btn", "btn-primary"], [1, "col-md-3"], ["name", "CustomerselectedItems", 1, "myselectClass", 3, "multiple", "ngModel", "config", "options", "change", "ngModelChange"], ["name", "EngineerselectedItems", 1, "myselectClass", 3, "multiple", "ngModel", "config", "options", "change", "ngModelChange"], [1, "col-md-5"], ["name", "StatusselectedItems", 1, "myselectClass", 3, "multiple", "ngModel", "config", "options", "change", "ngModelChange"], [1, "col-md-1", 2, "text-align", "right"], ["href", "javascript:;", 1, "btn", "btn-secondary", "calendar", 3, "click"], ["class", "fa fa-calendar", 4, "ngIf"], ["class", "fa fa-window-close text-danger", 4, "ngIf"], ["style", "position: absolute; z-index: 99999; background-color: white;right: 10px;", 4, "ngIf"], [1, "fa", "fa-calendar"], [1, "fa", "fa-window-close", "text-danger"], [2, "position", "absolute", "z-index", "99999", "background-color", "white", "right", "10px"], ["name", "CalendarResourceData", 3, "select", "navigate"], [1, "fc-event", 2, "cursor", "pointer", "margin-bottom", "1px", "padding", "2px", 3, "id"], [1, "row", "cus-model-header", 2, "margin", "0"], [1, "col-md-9"], [1, "modal-title", 2, "font-size", "2em", "color", "black", "font-weight", "600"], [1, "btn-group", 2, "float", "right"], ["class", "btn btn-brand btn-sm text-white ", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "text-white", 3, "click"], ["aria-hidden", "true"], ["id", "month-1-modal", 1, "modal-body"], [1, "col-md-6", 2, "border-right", "1px solid #e1dfdf"], [1, "client-header"], [1, "client-address"], [4, "ngFor", "ngForOf"], [1, "col-md-6", "client-header-appoinmenttime"], ["href", "javascript:;", "target", "_blank", 3, "href"], [1, "fas", "fa-map-marker", "text-success"], ["class", "fas fa-circle text-danger", "title", "High Priority", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["class", "fas fa-circle text-info", "title", "Medium Priority", 4, "ngIf"], ["class", "text-info", 4, "ngIf"], ["class", "fas fa-circle text-success", "title", "Low Priority", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], [3, "Status", "OverDueDays", "StatusChange"], [1, "col-md-12", "col-sm-12"], [1, "details-tabs", "width100"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#dtab1", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#dtab2", 1, "nav-link"], ["data-toggle", "tab", "href", "#dtab3", 1, "nav-link"], [1, "tab-content"], ["id", "dtab1", 1, "tab-pane", "active"], [1, "row", "row-border"], [1, "client-info-title"], [1, "client-info-desc"], [1, "col-md-6", "col-sm-6"], ["class", "client-info-desc", 4, "ngFor", "ngForOf"], [1, "width100"], ["id", "dtab2", 1, "tab-pane", "fade"], ["href", "javascript:;"], [1, "fa", "fa-angle-double-right"], [3, "href"], [1, "fa", "fa-envelope"], ["colspan", "3"], ["target", "_blank", 3, "href"], ["id", "dtab3", 1, "tab-pane", "fade"], [1, "btn", "btn-brand", "btn-sm", "text-white"], [1, "la", "la-edit"], ["title", "High Priority", 1, "fas", "fa-circle", "text-danger"], [1, "text-danger"], ["title", "Medium Priority", 1, "fas", "fa-circle", "text-info"], [1, "text-info"], ["title", "Low Priority", 1, "fas", "fa-circle", "text-success"], [1, "text-success"]], template: function MonthResourceComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Resource ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Resource ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthResourceComponent_Template_i_click_37_listener() { return ctx.RefreshData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MonthResourceComponent_div_39_Template, 5, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MonthResourceComponent_div_42_Template, 12, 15, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "full-calendar", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventResize", function MonthResourceComponent_Template_full_calendar_eventResize_47_listener($event) { return ctx.DraggableEvent($event); })("eventDrop", function MonthResourceComponent_Template_full_calendar_eventDrop_47_listener($event) { return ctx.eventDrop($event); })("eventRender", function MonthResourceComponent_Template_full_calendar_eventRender_47_listener($event) { return ctx.eventrender($event); })("eventDragStop", function MonthResourceComponent_Template_full_calendar_eventDragStop_47_listener($event) { return ctx.eventDragStop($event); })("eventClick", function MonthResourceComponent_Template_full_calendar_eventClick_47_listener($event) { return ctx.eventClick($event); })("drop", function MonthResourceComponent_Template_full_calendar_drop_47_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, MonthResourceComponent_strong_51_Template, 2, 1, "strong", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MonthResourceComponent_div_52_Template, 2, 3, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "select", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MonthResourceComponent_Template_select_change_56_listener($event) { return ctx.resourcetime($event, "start"); })("ngModelChange", function MonthResourceComponent_Template_select_ngModelChange_56_listener($event) { return ctx.genicprofileservice.ResourceFullCalendarSetting.start = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "00:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "02:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "04:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "06:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "08:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 44, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MonthResourceComponent_Template_select_change_72_listener($event) { return ctx.resourcetime($event, "end"); })("ngModelChange", function MonthResourceComponent_Template_select_ngModelChange_72_listener($event) { return ctx.genicprofileservice.ResourceFullCalendarSetting.end = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "16:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "18:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "20:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "22:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "24:00");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, MonthResourceComponent_ng_template_84_Template, 127, 40, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.Permissions.CalendarView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilte);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.ticketservice.Ticketlist.length === 0 ? "col-md-12 col-sm-12" : "col-md-10 col-sm-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("resourceLabelText", ctx.EngineerdropdownSettings.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultDate", ctx.viewDate)("defaultView", ctx.defaultView)("plugins", ctx.plugins)("events", ctx.calendarEvents)("resources", ctx.resources)("header", ctx.header)("timeZone", "local")("editable", true)("selectable", true)("droppable", ctx.droppable)("views", ctx.views)("minTime", ctx.genicprofileservice.ResourceFullCalendarSetting.start)("maxTime", ctx.genicprofileservice.ResourceFullCalendarSetting.end)("nowIndicator", true)("aspectRatio", ctx.aspectRatio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketlist.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.genicprofileservice.ResourceFullCalendarSetting.start);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.genicprofileservice.ResourceFullCalendarSetting.end);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_23__["FullCalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_x"], ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__["SelectDropDownComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDatepicker"], _generic_utils_Ticket_Status_Component_TicketStatusComponent_component__WEBPACK_IMPORTED_MODULE_27__["TicketStatusComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"]], styles: [".reource-head[_ngcontent-%COMP%]{padding:4px 0px;}\r\n.rdate[_ngcontent-%COMP%]   .datenum[_ngcontent-%COMP%]{width:40px;height:40px;line-height:40px;text-align:center;background-color:#0084CA;border-radius:50%;display:inline-block;color:white;font-size:18px;margin-right:10px;}\r\n.rdate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:black;;}\r\n.ffffrow[_ngcontent-%COMP%]{width: 100%;background-color: #fff;padding: 10px 8px;}\r\n.filterheader[_ngcontent-%COMP%]{padding: 9px 15px;}\r\n.ffffrow[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size: 14px;font-weight: 500;}\r\n.ddldown[_ngcontent-%COMP%]{display: inline-block;}\r\n.ddldown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{ color:#808080; min-width: 207px; font-weight: bold;}\r\n.chkOption[_ngcontent-%COMP%] {padding-top: 10px;}\r\n.kt-radio-list[_ngcontent-%COMP%] { padding-top: 6px; }\r\n.kt-radio-vertical[_ngcontent-%COMP%] {display: inline;padding-right: 10px;}\r\n.calendar[_ngcontent-%COMP%]{background-color: #fff;color: #0084ca;}\r\n.filterbody[_ngcontent-%COMP%] { padding-top: 10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vY2FsZW5kYXIvbW9udGgtcmVzb3VyY2UvbW9udGgtcmVzb3VyY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLGVBQWUsQ0FBQztBQUM5QixnQkFBZ0IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0FBQ3ZMLFlBQVksY0FBYyxDQUFDLFdBQVcsRUFBRTtBQUN4QyxTQUFTLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQztBQUM5RCxjQUFjLGlCQUFpQixDQUFDO0FBQUMsZUFBZSxlQUFlLENBQUMsZ0JBQWdCLENBQUM7QUFDakYsU0FBUyxxQkFBcUIsQ0FBQztBQUMvQixpQkFBaUIsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDO0FBQ3BFLFlBQVksaUJBQWlCLENBQUM7QUFDOUIsaUJBQWlCLGdCQUFnQixFQUFFO0FBQ25DLG9CQUFvQixlQUFlLENBQUMsbUJBQW1CLENBQUM7QUFDeEQsVUFBVSxzQkFBc0IsQ0FBQyxjQUFjLENBQUM7QUFDaEQsY0FBYyxpQkFBaUIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2NhbGVuZGFyL21vbnRoLXJlc291cmNlL21vbnRoLXJlc291cmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVvdXJjZS1oZWFke3BhZGRpbmc6NHB4IDBweDt9XHJcbi5yZGF0ZSAuZGF0ZW51bXt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjQwcHg7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojMDA4NENBO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NvbG9yOndoaXRlO2ZvbnQtc2l6ZToxOHB4O21hcmdpbi1yaWdodDoxMHB4O31cclxuLnJkYXRlIHNwYW57Zm9udC1zaXplOjE2cHg7Y29sb3I6YmxhY2s7O31cclxuLmZmZmZyb3d7d2lkdGg6IDEwMCU7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtwYWRkaW5nOiAxMHB4IDhweDt9XHJcbi5maWx0ZXJoZWFkZXJ7cGFkZGluZzogOXB4IDE1cHg7fS5mZmZmcm93IGxhYmVse2ZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogNTAwO31cclxuLmRkbGRvd257ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLmRkbGRvd24gc2VsZWN0eyBjb2xvcjojODA4MDgwOyBtaW4td2lkdGg6IDIwN3B4OyBmb250LXdlaWdodDogYm9sZDt9XHJcbi5jaGtPcHRpb24ge3BhZGRpbmctdG9wOiAxMHB4O31cclxuLmt0LXJhZGlvLWxpc3QgeyBwYWRkaW5nLXRvcDogNnB4OyB9XHJcbi5rdC1yYWRpby12ZXJ0aWNhbCB7ZGlzcGxheTogaW5saW5lO3BhZGRpbmctcmlnaHQ6IDEwcHg7fVxyXG4uY2FsZW5kYXJ7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtjb2xvcjogIzAwODRjYTt9XHJcbi5maWx0ZXJib2R5IHsgcGFkZGluZy10b3A6IDEwcHg7IH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './month-resource.component.html',
                styleUrls: ['./month-resource.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Title"] }, { type: _services_calendar_service__WEBPACK_IMPORTED_MODULE_13__["CalendarService"] }, { type: _services_ticket_service__WEBPACK_IMPORTED_MODULE_14__["TicketService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"] }, { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_16__["CustomerService"] }, { type: _services_genicprofile_service__WEBPACK_IMPORTED_MODULE_17__["GenicProfileService"] }, { type: _services_engineer_service__WEBPACK_IMPORTED_MODULE_18__["EngineerService"] }, { type: _services_userlog_service__WEBPACK_IMPORTED_MODULE_19__["UserlogService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"] }]; }, { viewmodalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['viewmodalContent', { static: true }]
        }], calendarComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['calendar', { static: false }]
        }], external: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['external', { static: true }]
        }] }); })();


/***/ }),

/***/ "iOEq":
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.esm.js ***!
  \********************************************************/
/*! exports provided: default, AbstractDayGridView, DayBgRow, DayGrid, DayGridSlicer, DayGridView, SimpleDayGrid, buildBasicDayTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDayGridView", function() { return AbstractDayGridView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayBgRow", function() { return DayBgRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGrid", function() { return DayGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGridSlicer", function() { return DayGridSlicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGridView", function() { return DayGridView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDayGrid", function() { return SimpleDayGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBasicDayTable", function() { return buildDayTable; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "SZB9");
/*!
FullCalendar Day Grid Plugin v4.4.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var DayGridDateProfileGenerator = /** @class */ (function (_super) {
    __extends(DayGridDateProfileGenerator, _super);
    function DayGridDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    DayGridDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
        var dateEnv = this.dateEnv;
        var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
        var start = renderRange.start;
        var end = renderRange.end;
        var endOfWeek;
        // year and month views should be aligned with weeks. this is already done for week
        if (/^(year|month)$/.test(currentRangeUnit)) {
            start = dateEnv.startOfWeek(start);
            // make end-of-week if not already
            endOfWeek = dateEnv.startOfWeek(end);
            if (endOfWeek.valueOf() !== end.valueOf()) {
                end = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addWeeks"])(endOfWeek, 1);
            }
        }
        // ensure 6 weeks
        if (this.options.monthMode &&
            this.options.fixedWeekCount) {
            var rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffWeeks"])(start, end));
            end = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addWeeks"])(end, 6 - rowCnt);
        }
        return { start: start, end: end };
    };
    return DayGridDateProfileGenerator;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateProfileGenerator"]));

/* A rectangular panel that is absolutely positioned over other content
------------------------------------------------------------------------------------------------------------------------
Options:
  - className (string)
  - content (HTML string, element, or element array)
  - parentEl
  - top
  - left
  - right (the x coord of where the right edge should be. not a "CSS" right)
  - autoHide (boolean)
  - show (callback)
  - hide (callback)
*/
var Popover = /** @class */ (function () {
    function Popover(options) {
        var _this = this;
        this.isHidden = true;
        this.margin = 10; // the space required between the popover and the edges of the scroll container
        // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
        this.documentMousedown = function (ev) {
            // only hide the popover if the click happened outside the popover
            if (_this.el && !_this.el.contains(ev.target)) {
                _this.hide();
            }
        };
        this.options = options;
    }
    // Shows the popover on the specified position. Renders it if not already
    Popover.prototype.show = function () {
        if (this.isHidden) {
            if (!this.el) {
                this.render();
            }
            this.el.style.display = '';
            this.position();
            this.isHidden = false;
            this.trigger('show');
        }
    };
    // Hides the popover, through CSS, but does not remove it from the DOM
    Popover.prototype.hide = function () {
        if (!this.isHidden) {
            this.el.style.display = 'none';
            this.isHidden = true;
            this.trigger('hide');
        }
    };
    // Creates `this.el` and renders content inside of it
    Popover.prototype.render = function () {
        var _this = this;
        var options = this.options;
        var el = this.el = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
            className: 'fc-popover ' + (options.className || ''),
            style: {
                top: '0',
                left: '0'
            }
        });
        if (typeof options.content === 'function') {
            options.content(el);
        }
        options.parentEl.appendChild(el);
        // when a click happens on anything inside with a 'fc-close' className, hide the popover
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["listenBySelector"])(el, 'click', '.fc-close', function (ev) {
            _this.hide();
        });
        if (options.autoHide) {
            document.addEventListener('mousedown', this.documentMousedown);
        }
    };
    // Hides and unregisters any handlers
    Popover.prototype.destroy = function () {
        this.hide();
        if (this.el) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.el);
            this.el = null;
        }
        document.removeEventListener('mousedown', this.documentMousedown);
    };
    // Positions the popover optimally, using the top/left/right options
    Popover.prototype.position = function () {
        var options = this.options;
        var el = this.el;
        var elDims = el.getBoundingClientRect(); // only used for width,height
        var origin = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(el.offsetParent);
        var clippingRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeClippingRect"])(options.parentEl);
        var top; // the "position" (not "offset") values for the popover
        var left; //
        // compute top and left
        top = options.top || 0;
        if (options.left !== undefined) {
            left = options.left;
        }
        else if (options.right !== undefined) {
            left = options.right - elDims.width; // derive the left value from the right value
        }
        else {
            left = 0;
        }
        // constrain to the view port. if constrained by two edges, give precedence to top/left
        top = Math.min(top, clippingRect.bottom - elDims.height - this.margin);
        top = Math.max(top, clippingRect.top + this.margin);
        left = Math.min(left, clippingRect.right - elDims.width - this.margin);
        left = Math.max(left, clippingRect.left + this.margin);
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(el, {
            top: top - origin.top,
            left: left - origin.left
        });
    };
    // Triggers a callback. Calls a function in the option hash of the same name.
    // Arguments beyond the first `name` are forwarded on.
    // TODO: better code reuse for this. Repeat code
    // can kill this???
    Popover.prototype.trigger = function (name) {
        if (this.options[name]) {
            this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
    return Popover;
}());

/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/
// "Simple" is bad a name. has nothing to do with SimpleDayGrid
var SimpleDayGridEventRenderer = /** @class */ (function (_super) {
    __extends(SimpleDayGridEventRenderer, _super);
    function SimpleDayGridEventRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Builds the HTML to be used for the default element for an individual segment
    SimpleDayGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
        var context = this.context;
        var eventRange = seg.eventRange;
        var eventDef = eventRange.def;
        var eventUi = eventRange.ui;
        var allDay = eventDef.allDay;
        var isDraggable = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventDraggable"])(context, eventDef, eventUi);
        var isResizableFromStart = allDay && seg.isStart && Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventStartResizable"])(context, eventDef, eventUi);
        var isResizableFromEnd = allDay && seg.isEnd && Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventEndResizable"])(context, eventDef, eventUi);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
        var skinCss = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["cssToStr"])(this.getSkinCss(eventUi));
        var timeHtml = '';
        var timeText;
        var titleHtml;
        classes.unshift('fc-day-grid-event', 'fc-h-event');
        // Only display a timed events time if it is the starting segment
        if (seg.isStart) {
            timeText = this.getTimeText(eventRange);
            if (timeText) {
                timeHtml = '<span class="fc-time">' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(timeText) + '</span>';
            }
        }
        titleHtml =
            '<span class="fc-title">' +
                (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.title || '') || '&nbsp;') + // we always want one line of height
                '</span>';
        return '<a class="' + classes.join(' ') + '"' +
            (eventDef.url ?
                ' href="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.url) + '"' :
                '') +
            (skinCss ?
                ' style="' + skinCss + '"' :
                '') +
            '>' +
            '<div class="fc-content">' +
            (context.options.dir === 'rtl' ?
                titleHtml + ' ' + timeHtml : // put a natural space in between
                timeHtml + ' ' + titleHtml //
            ) +
            '</div>' +
            (isResizableFromStart ?
                '<div class="fc-resizer fc-start-resizer"></div>' :
                '') +
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer"></div>' :
                '') +
            '</a>';
    };
    // Computes a default event time formatting string if `eventTimeFormat` is not explicitly defined
    SimpleDayGridEventRenderer.prototype.computeEventTimeFormat = function () {
        return {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: 'narrow'
        };
    };
    SimpleDayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return false; // TODO: somehow consider the originating DayGrid's column count
    };
    return SimpleDayGridEventRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FgEventRenderer"]));

/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/
var DayGridEventRenderer = /** @class */ (function (_super) {
    __extends(DayGridEventRenderer, _super);
    function DayGridEventRenderer(dayGrid) {
        var _this = _super.call(this) || this;
        _this.dayGrid = dayGrid;
        return _this;
    }
    // Renders the given foreground event segments onto the grid
    DayGridEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        // append to each row's content skeleton
        this.dayGrid.rowEls.forEach(function (rowNode, i) {
            rowNode.querySelector('.fc-content-skeleton > table').appendChild(rowStructs[i].tbodyEl);
        });
        // removes the "more.." events popover
        if (!mirrorInfo) {
            this.dayGrid.removeSegPopover();
        }
    };
    // Unrenders all currently rendered foreground event segments
    DayGridEventRenderer.prototype.detachSegs = function () {
        var rowStructs = this.rowStructs || [];
        var rowStruct;
        while ((rowStruct = rowStructs.pop())) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(rowStruct.tbodyEl);
        }
        this.rowStructs = null;
    };
    // Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
    // Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
    // PRECONDITION: each segment shoud already have a rendered and assigned `.el`
    DayGridEventRenderer.prototype.renderSegRows = function (segs) {
        var rowStructs = [];
        var segRows;
        var row;
        segRows = this.groupSegRows(segs); // group into nested arrays
        // iterate each row of segment groupings
        for (row = 0; row < segRows.length; row++) {
            rowStructs.push(this.renderSegRow(row, segRows[row]));
        }
        return rowStructs;
    };
    // Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
    // the segments. Returns object with a bunch of internal data about how the render was calculated.
    // NOTE: modifies rowSegs
    DayGridEventRenderer.prototype.renderSegRow = function (row, rowSegs) {
        var isRtl = this.context.isRtl;
        var dayGrid = this.dayGrid;
        var colCnt = dayGrid.colCnt;
        var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
        var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
        var tbody = document.createElement('tbody');
        var segMatrix = []; // lookup for which segments are rendered into which level+col cells
        var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
        var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
        var i;
        var levelSegs;
        var col;
        var tr;
        var j;
        var seg;
        var td;
        // populates empty cells from the current column (`col`) to `endCol`
        function emptyCellsUntil(endCol) {
            while (col < endCol) {
                // try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
                td = (loneCellMatrix[i - 1] || [])[col];
                if (td) {
                    td.rowSpan = (td.rowSpan || 1) + 1;
                }
                else {
                    td = document.createElement('td');
                    tr.appendChild(td);
                }
                cellMatrix[i][col] = td;
                loneCellMatrix[i][col] = td;
                col++;
            }
        }
        for (i = 0; i < levelCnt; i++) { // iterate through all levels
            levelSegs = segLevels[i];
            col = 0;
            tr = document.createElement('tr');
            segMatrix.push([]);
            cellMatrix.push([]);
            loneCellMatrix.push([]);
            // levelCnt might be 1 even though there are no actual levels. protect against this.
            // this single empty row is useful for styling.
            if (levelSegs) {
                for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
                    seg = levelSegs[j];
                    var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                    var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                    emptyCellsUntil(leftCol);
                    // create a container that occupies or more columns. append the event element.
                    td = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('td', { className: 'fc-event-container' }, seg.el);
                    if (leftCol !== rightCol) {
                        td.colSpan = rightCol - leftCol + 1;
                    }
                    else { // a single-column segment
                        loneCellMatrix[i][col] = td;
                    }
                    while (col <= rightCol) {
                        cellMatrix[i][col] = td;
                        segMatrix[i][col] = seg;
                        col++;
                    }
                    tr.appendChild(td);
                }
            }
            emptyCellsUntil(colCnt); // finish off the row
            var introHtml = dayGrid.renderProps.renderIntroHtml();
            if (introHtml) {
                if (isRtl) {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(tr, introHtml);
                }
                else {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["prependToElement"])(tr, introHtml);
                }
            }
            tbody.appendChild(tr);
        }
        return {
            row: row,
            tbodyEl: tbody,
            cellMatrix: cellMatrix,
            segMatrix: segMatrix,
            segLevels: segLevels,
            segs: rowSegs
        };
    };
    // Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
    // NOTE: modifies segs
    DayGridEventRenderer.prototype.buildSegLevels = function (segs) {
        var isRtl = this.context.isRtl;
        var colCnt = this.dayGrid.colCnt;
        var levels = [];
        var i;
        var seg;
        var j;
        // Give preference to elements with certain criteria, so they have
        // a chance to be closer to the top.
        segs = this.sortEventSegs(segs);
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            // loop through levels, starting with the topmost, until the segment doesn't collide with other segments
            for (j = 0; j < levels.length; j++) {
                if (!isDaySegCollision(seg, levels[j])) {
                    break;
                }
            }
            // `j` now holds the desired subrow index
            seg.level = j;
            seg.leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol; // for sorting only
            seg.rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol // for sorting only
            ;
            (levels[j] || (levels[j] = [])).push(seg);
        }
        // order segments left-to-right. very important if calendar is RTL
        for (j = 0; j < levels.length; j++) {
            levels[j].sort(compareDaySegCols);
        }
        return levels;
    };
    // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
    DayGridEventRenderer.prototype.groupSegRows = function (segs) {
        var segRows = [];
        var i;
        for (i = 0; i < this.dayGrid.rowCnt; i++) {
            segRows.push([]);
        }
        for (i = 0; i < segs.length; i++) {
            segRows[segs[i].row].push(segs[i]);
        }
        return segRows;
    };
    // Computes a default `displayEventEnd` value if one is not expliclty defined
    DayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return this.dayGrid.colCnt === 1; // we'll likely have space if there's only one day
    };
    return DayGridEventRenderer;
}(SimpleDayGridEventRenderer));
// Computes whether two segments' columns collide. They are assumed to be in the same row.
function isDaySegCollision(seg, otherSegs) {
    var i;
    var otherSeg;
    for (i = 0; i < otherSegs.length; i++) {
        otherSeg = otherSegs[i];
        if (otherSeg.firstCol <= seg.lastCol &&
            otherSeg.lastCol >= seg.firstCol) {
            return true;
        }
    }
    return false;
}
// A cmp function for determining the leftmost event
function compareDaySegCols(a, b) {
    return a.leftCol - b.leftCol;
}

var DayGridMirrorRenderer = /** @class */ (function (_super) {
    __extends(DayGridMirrorRenderer, _super);
    function DayGridMirrorRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        var sourceSeg = mirrorInfo.sourceSeg;
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        // inject each new event skeleton into each associated row
        this.dayGrid.rowEls.forEach(function (rowNode, row) {
            var skeletonEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-mirror-skeleton"><table></table></div>'); // will be absolutely positioned
            var skeletonTopEl;
            var skeletonTop;
            // If there is an original segment, match the top position. Otherwise, put it at the row's top level
            if (sourceSeg && sourceSeg.row === row) {
                skeletonTopEl = sourceSeg.el;
            }
            else {
                skeletonTopEl = rowNode.querySelector('.fc-content-skeleton tbody');
                if (!skeletonTopEl) { // when no events
                    skeletonTopEl = rowNode.querySelector('.fc-content-skeleton table');
                }
            }
            skeletonTop = skeletonTopEl.getBoundingClientRect().top -
                rowNode.getBoundingClientRect().top; // the offsetParent origin
            skeletonEl.style.top = skeletonTop + 'px';
            skeletonEl.querySelector('table').appendChild(rowStructs[row].tbodyEl);
            rowNode.appendChild(skeletonEl);
        });
    };
    return DayGridMirrorRenderer;
}(DayGridEventRenderer));

var EMPTY_CELL_HTML = '<td style="pointer-events:none"></td>';
var DayGridFillRenderer = /** @class */ (function (_super) {
    __extends(DayGridFillRenderer, _super);
    function DayGridFillRenderer(dayGrid) {
        var _this = _super.call(this) || this;
        _this.fillSegTag = 'td'; // override the default tag name
        _this.dayGrid = dayGrid;
        return _this;
    }
    DayGridFillRenderer.prototype.renderSegs = function (type, context, segs) {
        // don't render timed background events
        if (type === 'bgEvent') {
            segs = segs.filter(function (seg) {
                return seg.eventRange.def.allDay;
            });
        }
        _super.prototype.renderSegs.call(this, type, context, segs);
    };
    DayGridFillRenderer.prototype.attachSegs = function (type, segs) {
        var els = [];
        var i;
        var seg;
        var skeletonEl;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            skeletonEl = this.renderFillRow(type, seg);
            this.dayGrid.rowEls[seg.row].appendChild(skeletonEl);
            els.push(skeletonEl);
        }
        return els;
    };
    // Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
    DayGridFillRenderer.prototype.renderFillRow = function (type, seg) {
        var dayGrid = this.dayGrid;
        var isRtl = this.context.isRtl;
        var colCnt = dayGrid.colCnt;
        var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
        var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
        var startCol = leftCol;
        var endCol = rightCol + 1;
        var className;
        var skeletonEl;
        var trEl;
        if (type === 'businessHours') {
            className = 'bgevent';
        }
        else {
            className = type.toLowerCase();
        }
        skeletonEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-' + className + '-skeleton">' +
            '<table><tr></tr></table>' +
            '</div>');
        trEl = skeletonEl.getElementsByTagName('tr')[0];
        if (startCol > 0) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(trEl, 
            // will create (startCol + 1) td's
            new Array(startCol + 1).join(EMPTY_CELL_HTML));
        }
        seg.el.colSpan = endCol - startCol;
        trEl.appendChild(seg.el);
        if (endCol < colCnt) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(trEl, 
            // will create (colCnt - endCol) td's
            new Array(colCnt - endCol + 1).join(EMPTY_CELL_HTML));
        }
        var introHtml = dayGrid.renderProps.renderIntroHtml();
        if (introHtml) {
            if (isRtl) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(trEl, introHtml);
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["prependToElement"])(trEl, introHtml);
            }
        }
        return skeletonEl;
    };
    return DayGridFillRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FillRenderer"]));

var DayTile = /** @class */ (function (_super) {
    __extends(DayTile, _super);
    function DayTile(el) {
        var _this = _super.call(this, el) || this;
        var eventRenderer = _this.eventRenderer = new DayTileEventRenderer(_this);
        var renderFrame = _this.renderFrame = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderFrame);
        _this.renderFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderFrame]);
        _this.renderEventSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        _this.renderEventDrag = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
        _this.renderEventResize = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
        return _this;
    }
    DayTile.prototype.firstContext = function (context) {
        context.calendar.registerInteractiveComponent(this, {
            el: this.el,
            useEventCenter: false
        });
    };
    DayTile.prototype.render = function (props, context) {
        this.renderFrame(props.date);
        this.renderFgEvents(context, props.fgSegs);
        this.renderEventSelection(props.eventSelection);
        this.renderEventDrag(props.eventDragInstances);
        this.renderEventResize(props.eventResizeInstances);
    };
    DayTile.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderFrame.unrender(); // should unrender everything else
        this.context.calendar.unregisterInteractiveComponent(this);
    };
    DayTile.prototype._renderFrame = function (date) {
        var _a = this.context, theme = _a.theme, dateEnv = _a.dateEnv, options = _a.options;
        var title = dateEnv.format(date, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(options.dayPopoverFormat) // TODO: cache
        );
        this.el.innerHTML =
            '<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
                '<span class="fc-title">' +
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(title) +
                '</span>' +
                '<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
                '</div>' +
                '<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
                '<div class="fc-event-container"></div>' +
                '</div>';
        this.segContainerEl = this.el.querySelector('.fc-event-container');
    };
    DayTile.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
        var date = this.props.date; // HACK
        if (positionLeft < elWidth && positionTop < elHeight) {
            return {
                component: this,
                dateSpan: {
                    allDay: true,
                    range: { start: date, end: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(date, 1) }
                },
                dayEl: this.el,
                rect: {
                    left: 0,
                    top: 0,
                    right: elWidth,
                    bottom: elHeight
                },
                layer: 1
            };
        }
    };
    return DayTile;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));
var DayTileEventRenderer = /** @class */ (function (_super) {
    __extends(DayTileEventRenderer, _super);
    function DayTileEventRenderer(dayTile) {
        var _this = _super.call(this) || this;
        _this.dayTile = dayTile;
        return _this;
    }
    DayTileEventRenderer.prototype.attachSegs = function (segs) {
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            this.dayTile.segContainerEl.appendChild(seg.el);
        }
    };
    DayTileEventRenderer.prototype.detachSegs = function (segs) {
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(seg.el);
        }
    };
    return DayTileEventRenderer;
}(SimpleDayGridEventRenderer));

var DayBgRow = /** @class */ (function () {
    function DayBgRow(context) {
        this.context = context;
    }
    DayBgRow.prototype.renderHtml = function (props) {
        var parts = [];
        if (props.renderIntroHtml) {
            parts.push(props.renderIntroHtml());
        }
        for (var _i = 0, _a = props.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            parts.push(renderCellHtml(cell.date, props.dateProfile, this.context, cell.htmlAttrs));
        }
        if (!props.cells.length) {
            parts.push('<td class="fc-day ' + this.context.theme.getClass('widgetContent') + '"></td>');
        }
        if (this.context.options.dir === 'rtl') {
            parts.reverse();
        }
        return '<tr>' + parts.join('') + '</tr>';
    };
    return DayBgRow;
}());
function renderCellHtml(date, dateProfile, context, otherAttrs) {
    var dateEnv = context.dateEnv, theme = context.theme;
    var isDateValid = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangeContainsMarker"])(dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
    var classes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getDayClasses"])(date, dateProfile, context);
    classes.unshift('fc-day', theme.getClass('widgetContent'));
    return '<td class="' + classes.join(' ') + '"' +
        (isDateValid ?
            ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
            '') +
        (otherAttrs ?
            ' ' + otherAttrs :
            '') +
        '></td>';
}

var DAY_NUM_FORMAT = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ day: 'numeric' });
var WEEK_NUM_FORMAT = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ week: 'numeric' });
var DayGrid = /** @class */ (function (_super) {
    __extends(DayGrid, _super);
    function DayGrid(el, renderProps) {
        var _this = _super.call(this, el) || this;
        _this.bottomCoordPadding = 0; // hack for extending the hit area for the last row of the coordinate grid
        _this.isCellSizesDirty = false;
        _this.renderProps = renderProps;
        var eventRenderer = _this.eventRenderer = new DayGridEventRenderer(_this);
        var fillRenderer = _this.fillRenderer = new DayGridFillRenderer(_this);
        _this.mirrorRenderer = new DayGridMirrorRenderer(_this);
        var renderCells = _this.renderCells = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderCells, _this._unrenderCells);
        _this.renderBusinessHours = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderCells]);
        _this.renderDateSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'highlight'), fillRenderer.unrender.bind(fillRenderer, 'highlight'), [renderCells]);
        _this.renderBgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderCells]);
        _this.renderFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderCells]);
        _this.renderEventSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        _this.renderEventDrag = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventDrag, _this._unrenderEventDrag, [renderCells]);
        _this.renderEventResize = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventResize, _this._unrenderEventResize, [renderCells]);
        return _this;
    }
    DayGrid.prototype.render = function (props, context) {
        var cells = props.cells;
        this.rowCnt = cells.length;
        this.colCnt = cells[0].length;
        this.renderCells(cells, props.isRigid);
        this.renderBusinessHours(context, props.businessHourSegs);
        this.renderDateSelection(context, props.dateSelectionSegs);
        this.renderBgEvents(context, props.bgEventSegs);
        this.renderFgEvents(context, props.fgEventSegs);
        this.renderEventSelection(props.eventSelection);
        this.renderEventDrag(props.eventDrag);
        this.renderEventResize(props.eventResize);
        if (this.segPopoverTile) {
            this.updateSegPopoverTile();
        }
    };
    DayGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderCells.unrender(); // will unrender everything else
    };
    DayGrid.prototype.getCellRange = function (row, col) {
        var start = this.props.cells[row][col].date;
        var end = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(start, 1);
        return { start: start, end: end };
    };
    DayGrid.prototype.updateSegPopoverTile = function (date, segs) {
        var ownProps = this.props;
        this.segPopoverTile.receiveProps({
            date: date || this.segPopoverTile.props.date,
            fgSegs: segs || this.segPopoverTile.props.fgSegs,
            eventSelection: ownProps.eventSelection,
            eventDragInstances: ownProps.eventDrag ? ownProps.eventDrag.affectedInstances : null,
            eventResizeInstances: ownProps.eventResize ? ownProps.eventResize.affectedInstances : null
        }, this.context);
    };
    /* Date Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype._renderCells = function (cells, isRigid) {
        var _a = this.context, calendar = _a.calendar, view = _a.view, isRtl = _a.isRtl, dateEnv = _a.dateEnv;
        var _b = this, rowCnt = _b.rowCnt, colCnt = _b.colCnt;
        var html = '';
        var row;
        var col;
        for (row = 0; row < rowCnt; row++) {
            html += this.renderDayRowHtml(row, isRigid);
        }
        this.el.innerHTML = html;
        this.rowEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-row');
        this.cellEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-day, .fc-disabled-day');
        if (isRtl) {
            this.cellEls.reverse();
        }
        this.rowPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.rowEls, false, true // vertical
        );
        this.colPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.cellEls.slice(0, colCnt), // only the first row
        true, false // horizontal
        );
        // trigger dayRender with each cell's element
        for (row = 0; row < rowCnt; row++) {
            for (col = 0; col < colCnt; col++) {
                calendar.publiclyTrigger('dayRender', [
                    {
                        date: dateEnv.toDate(cells[row][col].date),
                        el: this.getCellEl(row, col),
                        view: view
                    }
                ]);
            }
        }
        this.isCellSizesDirty = true;
    };
    DayGrid.prototype._unrenderCells = function () {
        this.removeSegPopover();
    };
    // Generates the HTML for a single row, which is a div that wraps a table.
    // `row` is the row number.
    DayGrid.prototype.renderDayRowHtml = function (row, isRigid) {
        var theme = this.context.theme;
        var classes = ['fc-row', 'fc-week', theme.getClass('dayRow')];
        if (isRigid) {
            classes.push('fc-rigid');
        }
        var bgRow = new DayBgRow(this.context);
        return '' +
            '<div class="' + classes.join(' ') + '">' +
            '<div class="fc-bg">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            bgRow.renderHtml({
                cells: this.props.cells[row],
                dateProfile: this.props.dateProfile,
                renderIntroHtml: this.renderProps.renderBgIntroHtml
            }) +
            '</table>' +
            '</div>' +
            '<div class="fc-content-skeleton">' +
            '<table>' +
            (this.getIsNumbersVisible() ?
                '<thead>' +
                    this.renderNumberTrHtml(row) +
                    '</thead>' :
                '') +
            '</table>' +
            '</div>' +
            '</div>';
    };
    DayGrid.prototype.getIsNumbersVisible = function () {
        return this.getIsDayNumbersVisible() ||
            this.renderProps.cellWeekNumbersVisible ||
            this.renderProps.colWeekNumbersVisible;
    };
    DayGrid.prototype.getIsDayNumbersVisible = function () {
        return this.rowCnt > 1;
    };
    /* Grid Number Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.renderNumberTrHtml = function (row) {
        var isRtl = this.context.isRtl;
        var intro = this.renderProps.renderNumberIntroHtml(row, this);
        return '' +
            '<tr>' +
            (isRtl ? '' : intro) +
            this.renderNumberCellsHtml(row) +
            (isRtl ? intro : '') +
            '</tr>';
    };
    DayGrid.prototype.renderNumberCellsHtml = function (row) {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.props.cells[row][col].date;
            htmls.push(this.renderNumberCellHtml(date));
        }
        if (this.context.isRtl) {
            htmls.reverse();
        }
        return htmls.join('');
    };
    // Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
    // The number row will only exist if either day numbers or week numbers are turned on.
    DayGrid.prototype.renderNumberCellHtml = function (date) {
        var _a = this.context, dateEnv = _a.dateEnv, options = _a.options;
        var html = '';
        var isDateValid = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangeContainsMarker"])(this.props.dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
        var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
        var classes;
        var weekCalcFirstDow;
        if (!isDayNumberVisible && !this.renderProps.cellWeekNumbersVisible) {
            // no numbers in day cell (week number must be along the side)
            return '<td></td>'; //  will create an empty space above events :(
        }
        classes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getDayClasses"])(date, this.props.dateProfile, this.context);
        classes.unshift('fc-day-top');
        if (this.renderProps.cellWeekNumbersVisible) {
            weekCalcFirstDow = dateEnv.weekDow;
        }
        html += '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
                '') +
            '>';
        if (this.renderProps.cellWeekNumbersVisible && (date.getUTCDay() === weekCalcFirstDow)) {
            html += Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(options, dateEnv, { date: date, type: 'week' }, { 'class': 'fc-week-number' }, dateEnv.format(date, WEEK_NUM_FORMAT) // inner HTML
            );
        }
        if (isDayNumberVisible) {
            html += Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(options, dateEnv, date, { 'class': 'fc-day-number' }, dateEnv.format(date, DAY_NUM_FORMAT) // inner HTML
            );
        }
        html += '</td>';
        return html;
    };
    /* Sizing
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.updateSize = function (isResize) {
        var calendar = this.context.calendar;
        var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
        if (isResize ||
            this.isCellSizesDirty ||
            calendar.isEventsUpdated // hack
        ) {
            this.buildPositionCaches();
            this.isCellSizesDirty = false;
        }
        fillRenderer.computeSizes(isResize);
        eventRenderer.computeSizes(isResize);
        mirrorRenderer.computeSizes(isResize);
        fillRenderer.assignSizes(isResize);
        eventRenderer.assignSizes(isResize);
        mirrorRenderer.assignSizes(isResize);
    };
    DayGrid.prototype.buildPositionCaches = function () {
        this.buildColPositions();
        this.buildRowPositions();
    };
    DayGrid.prototype.buildColPositions = function () {
        this.colPositions.build();
    };
    DayGrid.prototype.buildRowPositions = function () {
        this.rowPositions.build();
        this.rowPositions.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
    };
    /* Hit System
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.positionToHit = function (leftPosition, topPosition) {
        var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
        var col = colPositions.leftToIndex(leftPosition);
        var row = rowPositions.topToIndex(topPosition);
        if (row != null && col != null) {
            return {
                row: row,
                col: col,
                dateSpan: {
                    range: this.getCellRange(row, col),
                    allDay: true
                },
                dayEl: this.getCellEl(row, col),
                relativeRect: {
                    left: colPositions.lefts[col],
                    right: colPositions.rights[col],
                    top: rowPositions.tops[row],
                    bottom: rowPositions.bottoms[row]
                }
            };
        }
    };
    /* Cell System
    ------------------------------------------------------------------------------------------------------------------*/
    // FYI: the first column is the leftmost column, regardless of date
    DayGrid.prototype.getCellEl = function (row, col) {
        return this.cellEls[row * this.colCnt + col];
    };
    /* Event Drag Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype._renderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.fillRenderer.renderSegs('highlight', this.context, state.segs);
        }
    };
    DayGrid.prototype._unrenderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.fillRenderer.unrender('highlight', this.context);
        }
    };
    /* Event Resize Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype._renderEventResize = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.fillRenderer.renderSegs('highlight', this.context, state.segs);
            this.mirrorRenderer.renderSegs(this.context, state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    DayGrid.prototype._unrenderEventResize = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.fillRenderer.unrender('highlight', this.context);
            this.mirrorRenderer.unrender(this.context, state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    /* More+ Link Popover
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.removeSegPopover = function () {
        if (this.segPopover) {
            this.segPopover.hide(); // in handler, will call segPopover's removeElement
        }
    };
    // Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
    // `levelLimit` can be false (don't limit), a number, or true (should be computed).
    DayGrid.prototype.limitRows = function (levelLimit) {
        var rowStructs = this.eventRenderer.rowStructs || [];
        var row; // row #
        var rowLevelLimit;
        for (row = 0; row < rowStructs.length; row++) {
            this.unlimitRow(row);
            if (!levelLimit) {
                rowLevelLimit = false;
            }
            else if (typeof levelLimit === 'number') {
                rowLevelLimit = levelLimit;
            }
            else {
                rowLevelLimit = this.computeRowLevelLimit(row);
            }
            if (rowLevelLimit !== false) {
                this.limitRow(row, rowLevelLimit);
            }
        }
    };
    // Computes the number of levels a row will accomodate without going outside its bounds.
    // Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
    // `row` is the row number.
    DayGrid.prototype.computeRowLevelLimit = function (row) {
        var rowEl = this.rowEls[row]; // the containing "fake" row div
        var rowBottom = rowEl.getBoundingClientRect().bottom; // relative to viewport!
        var trEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findChildren"])(this.eventRenderer.rowStructs[row].tbodyEl);
        var i;
        var trEl;
        // Reveal one level <tr> at a time and stop when we find one out of bounds
        for (i = 0; i < trEls.length; i++) {
            trEl = trEls[i];
            trEl.classList.remove('fc-limited'); // reset to original state (reveal)
            if (trEl.getBoundingClientRect().bottom > rowBottom) {
                return i;
            }
        }
        return false; // should not limit at all
    };
    // Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
    // `row` is the row number.
    // `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
    DayGrid.prototype.limitRow = function (row, levelLimit) {
        var _this = this;
        var colCnt = this.colCnt;
        var isRtl = this.context.isRtl;
        var rowStruct = this.eventRenderer.rowStructs[row];
        var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
        var col = 0; // col #, left-to-right (not chronologically)
        var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
        var cellMatrix; // a matrix (by level, then column) of all <td> elements in the row
        var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
        var i;
        var seg;
        var segsBelow; // array of segment objects below `seg` in the current `col`
        var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
        var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
        var td;
        var rowSpan;
        var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
        var j;
        var moreTd;
        var moreWrap;
        var moreLink;
        // Iterates through empty level cells and places "more" links inside if need be
        var emptyCellsUntil = function (endCol) {
            while (col < endCol) {
                segsBelow = _this.getCellSegs(row, col, levelLimit);
                if (segsBelow.length) {
                    td = cellMatrix[levelLimit - 1][col];
                    moreLink = _this.renderMoreLink(row, col, segsBelow);
                    moreWrap = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', null, moreLink);
                    td.appendChild(moreWrap);
                    moreNodes.push(moreWrap);
                }
                col++;
            }
        };
        if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
            levelSegs = rowStruct.segLevels[levelLimit - 1];
            cellMatrix = rowStruct.cellMatrix;
            limitedNodes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findChildren"])(rowStruct.tbodyEl).slice(levelLimit); // get level <tr> elements past the limit
            limitedNodes.forEach(function (node) {
                node.classList.add('fc-limited'); // hide elements and get a simple DOM-nodes array
            });
            // iterate though segments in the last allowable level
            for (i = 0; i < levelSegs.length; i++) {
                seg = levelSegs[i];
                var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                emptyCellsUntil(leftCol); // process empty cells before the segment
                // determine *all* segments below `seg` that occupy the same columns
                colSegsBelow = [];
                totalSegsBelow = 0;
                while (col <= rightCol) {
                    segsBelow = this.getCellSegs(row, col, levelLimit);
                    colSegsBelow.push(segsBelow);
                    totalSegsBelow += segsBelow.length;
                    col++;
                }
                if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
                    td = cellMatrix[levelLimit - 1][leftCol]; // the segment's parent cell
                    rowSpan = td.rowSpan || 1;
                    segMoreNodes = [];
                    // make a replacement <td> for each column the segment occupies. will be one for each colspan
                    for (j = 0; j < colSegsBelow.length; j++) {
                        moreTd = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('td', { className: 'fc-more-cell', rowSpan: rowSpan });
                        segsBelow = colSegsBelow[j];
                        moreLink = this.renderMoreLink(row, leftCol + j, [seg].concat(segsBelow) // count seg as hidden too
                        );
                        moreWrap = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', null, moreLink);
                        moreTd.appendChild(moreWrap);
                        segMoreNodes.push(moreTd);
                        moreNodes.push(moreTd);
                    }
                    td.classList.add('fc-limited');
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["insertAfterElement"])(td, segMoreNodes);
                    limitedNodes.push(td);
                }
            }
            emptyCellsUntil(this.colCnt); // finish off the level
            rowStruct.moreEls = moreNodes; // for easy undoing later
            rowStruct.limitedEls = limitedNodes; // for easy undoing later
        }
    };
    // Reveals all levels and removes all "more"-related elements for a grid's row.
    // `row` is a row number.
    DayGrid.prototype.unlimitRow = function (row) {
        var rowStruct = this.eventRenderer.rowStructs[row];
        if (rowStruct.moreEls) {
            rowStruct.moreEls.forEach(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"]);
            rowStruct.moreEls = null;
        }
        if (rowStruct.limitedEls) {
            rowStruct.limitedEls.forEach(function (limitedEl) {
                limitedEl.classList.remove('fc-limited');
            });
            rowStruct.limitedEls = null;
        }
    };
    // Renders an <a> element that represents hidden event element for a cell.
    // Responsible for attaching click handler as well.
    DayGrid.prototype.renderMoreLink = function (row, col, hiddenSegs) {
        var _this = this;
        var _a = this.context, calendar = _a.calendar, view = _a.view, dateEnv = _a.dateEnv, options = _a.options, isRtl = _a.isRtl;
        var a = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', { className: 'fc-more' });
        a.innerText = this.getMoreLinkText(hiddenSegs.length);
        a.addEventListener('click', function (ev) {
            var clickOption = options.eventLimitClick;
            var _col = isRtl ? _this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
            var date = _this.props.cells[row][_col].date;
            var moreEl = ev.currentTarget;
            var dayEl = _this.getCellEl(row, col);
            var allSegs = _this.getCellSegs(row, col);
            // rescope the segments to be within the cell's date
            var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
            var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);
            if (typeof clickOption === 'function') {
                // the returned value can be an atomic option
                clickOption = calendar.publiclyTrigger('eventLimitClick', [
                    {
                        date: dateEnv.toDate(date),
                        allDay: true,
                        dayEl: dayEl,
                        moreEl: moreEl,
                        segs: reslicedAllSegs,
                        hiddenSegs: reslicedHiddenSegs,
                        jsEvent: ev,
                        view: view
                    }
                ]);
            }
            if (clickOption === 'popover') {
                _this.showSegPopover(row, col, moreEl, reslicedAllSegs);
            }
            else if (typeof clickOption === 'string') { // a view name
                calendar.zoomTo(date, clickOption);
            }
        });
        return a;
    };
    // Reveals the popover that displays all events within a cell
    DayGrid.prototype.showSegPopover = function (row, col, moreLink, segs) {
        var _this = this;
        var _a = this.context, calendar = _a.calendar, view = _a.view, theme = _a.theme, isRtl = _a.isRtl;
        var _col = isRtl ? this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
        var moreWrap = moreLink.parentNode; // the <div> wrapper around the <a>
        var topEl; // the element we want to match the top coordinate of
        var options;
        if (this.rowCnt === 1) {
            topEl = view.el; // will cause the popover to cover any sort of header
        }
        else {
            topEl = this.rowEls[row]; // will align with top of row
        }
        options = {
            className: 'fc-more-popover ' + theme.getClass('popover'),
            parentEl: view.el,
            top: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(topEl).top,
            autoHide: true,
            content: function (el) {
                _this.segPopoverTile = new DayTile(el);
                _this.updateSegPopoverTile(_this.props.cells[row][_col].date, segs);
            },
            hide: function () {
                _this.segPopoverTile.destroy();
                _this.segPopoverTile = null;
                _this.segPopover.destroy();
                _this.segPopover = null;
            }
        };
        // Determine horizontal coordinate.
        // We use the moreWrap instead of the <td> to avoid border confusion.
        if (isRtl) {
            options.right = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(moreWrap).right + 1; // +1 to be over cell border
        }
        else {
            options.left = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(moreWrap).left - 1; // -1 to be over cell border
        }
        this.segPopover = new Popover(options);
        this.segPopover.show();
        calendar.releaseAfterSizingTriggers(); // hack for eventPositioned
    };
    // Given the events within an array of segment objects, reslice them to be in a single day
    DayGrid.prototype.resliceDaySegs = function (segs, dayDate) {
        var dayStart = dayDate;
        var dayEnd = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(dayStart, 1);
        var dayRange = { start: dayStart, end: dayEnd };
        var newSegs = [];
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            var eventRange = seg.eventRange;
            var origRange = eventRange.range;
            var slicedRange = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRanges"])(origRange, dayRange);
            if (slicedRange) {
                newSegs.push(__assign({}, seg, { eventRange: {
                        def: eventRange.def,
                        ui: __assign({}, eventRange.ui, { durationEditable: false }),
                        instance: eventRange.instance,
                        range: slicedRange
                    }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() }));
            }
        }
        return newSegs;
    };
    // Generates the text that should be inside a "more" link, given the number of events it represents
    DayGrid.prototype.getMoreLinkText = function (num) {
        var opt = this.context.options.eventLimitText;
        if (typeof opt === 'function') {
            return opt(num);
        }
        else {
            return '+' + num + ' ' + opt;
        }
    };
    // Returns segments within a given cell.
    // If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
    DayGrid.prototype.getCellSegs = function (row, col, startLevel) {
        var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
        var level = startLevel || 0;
        var segs = [];
        var seg;
        while (level < segMatrix.length) {
            seg = segMatrix[level][col];
            if (seg) {
                segs.push(seg);
            }
            level++;
        }
        return segs;
    };
    return DayGrid;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));

var WEEK_NUM_FORMAT$1 = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ week: 'numeric' });
/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var AbstractDayGridView = /** @class */ (function (_super) {
    __extends(AbstractDayGridView, _super);
    function AbstractDayGridView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.processOptions = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_this._processOptions);
        _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton, _this._unrenderSkeleton);
        /* Header Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that will go before the day-of week header cells
        _this.renderHeadIntroHtml = function () {
            var _a = _this.context, theme = _a.theme, options = _a.options;
            if (_this.colWeekNumbersVisible) {
                return '' +
                    '<th class="fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.weekNumberStyleAttr() + '>' +
                    '<span>' + // needed for matchCellWidths
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(options.weekLabel) +
                    '</span>' +
                    '</th>';
            }
            return '';
        };
        /* Day Grid Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
        _this.renderDayGridNumberIntroHtml = function (row, dayGrid) {
            var _a = _this.context, options = _a.options, dateEnv = _a.dateEnv;
            var weekStart = dayGrid.props.cells[row][0].date;
            if (_this.colWeekNumbersVisible) {
                return '' +
                    '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '>' +
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(// aside from link, important for matchCellWidths
                    options, dateEnv, { date: weekStart, type: 'week', forceOff: dayGrid.colCnt === 1 }, dateEnv.format(weekStart, WEEK_NUM_FORMAT$1) // inner HTML
                    ) +
                    '</td>';
            }
            return '';
        };
        // Generates the HTML that goes before the day bg cells for each day-row
        _this.renderDayGridBgIntroHtml = function () {
            var theme = _this.context.theme;
            if (_this.colWeekNumbersVisible) {
                return '<td class="fc-week-number ' + theme.getClass('widgetContent') + '" ' + _this.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        // Generates the HTML that goes before every other type of row generated by DayGrid.
        // Affects mirror-skeleton and highlight-skeleton rows.
        _this.renderDayGridIntroHtml = function () {
            if (_this.colWeekNumbersVisible) {
                return '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        return _this;
    }
    AbstractDayGridView.prototype._processOptions = function (options) {
        if (options.weekNumbers) {
            if (options.weekNumbersWithinDays) {
                this.cellWeekNumbersVisible = true;
                this.colWeekNumbersVisible = false;
            }
            else {
                this.cellWeekNumbersVisible = false;
                this.colWeekNumbersVisible = true;
            }
        }
        else {
            this.colWeekNumbersVisible = false;
            this.cellWeekNumbersVisible = false;
        }
    };
    AbstractDayGridView.prototype.render = function (props, context) {
        _super.prototype.render.call(this, props, context);
        this.processOptions(context.options);
        this.renderSkeleton(context);
    };
    AbstractDayGridView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderSkeleton.unrender();
    };
    AbstractDayGridView.prototype._renderSkeleton = function (context) {
        this.el.classList.add('fc-dayGrid-view');
        this.el.innerHTML = this.renderSkeletonHtml();
        this.scroller = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollComponent"]('hidden', // overflow x
        'auto' // overflow y
        );
        var dayGridContainerEl = this.scroller.el;
        this.el.querySelector('.fc-body > tr > td').appendChild(dayGridContainerEl);
        dayGridContainerEl.classList.add('fc-day-grid-container');
        var dayGridEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-day-grid' });
        dayGridContainerEl.appendChild(dayGridEl);
        this.dayGrid = new DayGrid(dayGridEl, {
            renderNumberIntroHtml: this.renderDayGridNumberIntroHtml,
            renderBgIntroHtml: this.renderDayGridBgIntroHtml,
            renderIntroHtml: this.renderDayGridIntroHtml,
            colWeekNumbersVisible: this.colWeekNumbersVisible,
            cellWeekNumbersVisible: this.cellWeekNumbersVisible
        });
    };
    AbstractDayGridView.prototype._unrenderSkeleton = function () {
        this.el.classList.remove('fc-dayGrid-view');
        this.dayGrid.destroy();
        this.scroller.destroy();
    };
    // Builds the HTML skeleton for the view.
    // The day-grid component will render inside of a container defined by this HTML.
    AbstractDayGridView.prototype.renderSkeletonHtml = function () {
        var _a = this.context, theme = _a.theme, options = _a.options;
        return '' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            (options.columnHeader ?
                '<thead class="fc-head">' +
                    '<tr>' +
                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                    '</tr>' +
                    '</thead>' :
                '') +
            '<tbody class="fc-body">' +
            '<tr>' +
            '<td class="' + theme.getClass('widgetContent') + '"></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };
    // Generates an HTML attribute string for setting the width of the week number column, if it is known
    AbstractDayGridView.prototype.weekNumberStyleAttr = function () {
        if (this.weekNumberWidth != null) {
            return 'style="width:' + this.weekNumberWidth + 'px"';
        }
        return '';
    };
    // Determines whether each row should have a constant height
    AbstractDayGridView.prototype.hasRigidRows = function () {
        var eventLimit = this.context.options.eventLimit;
        return eventLimit && typeof eventLimit !== 'number';
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    AbstractDayGridView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
        _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto); // will call updateBaseSize. important that executes first
        this.dayGrid.updateSize(isResize);
    };
    // Refreshes the horizontal dimensions of the view
    AbstractDayGridView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
        var dayGrid = this.dayGrid;
        var eventLimit = this.context.options.eventLimit;
        var headRowEl = this.header ? this.header.el : null; // HACK
        var scrollerHeight;
        var scrollbarWidths;
        // hack to give the view some height prior to dayGrid's columns being rendered
        // TODO: separate setting height from scroller VS dayGrid.
        if (!dayGrid.rowEls) {
            if (!isAuto) {
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            return;
        }
        if (this.colWeekNumbersVisible) {
            // Make sure all week number cells running down the side have the same width.
            this.weekNumberWidth = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["matchCellWidths"])(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-week-number'));
        }
        // reset all heights to be natural
        this.scroller.clear();
        if (headRowEl) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["uncompensateScroll"])(headRowEl);
        }
        dayGrid.removeSegPopover(); // kill the "more" popover if displayed
        // is the event limit a constant level number?
        if (eventLimit && typeof eventLimit === 'number') {
            dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
        }
        // distribute the height to the rows
        // (viewHeight is a "recommended" value if isAuto)
        scrollerHeight = this.computeScrollerHeight(viewHeight);
        this.setGridHeight(scrollerHeight, isAuto);
        // is the event limit dynamically calculated?
        if (eventLimit && typeof eventLimit !== 'number') {
            dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
        }
        if (!isAuto) { // should we force dimensions of the scroll container?
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();
            if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?
                if (headRowEl) {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compensateScroll"])(headRowEl, scrollbarWidths);
                }
                // doing the scrollbar compensation might have created text overflow which created more height. redo
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            // guarantees the same scrollbar widths
            this.scroller.lockOverflow(scrollbarWidths);
        }
    };
    // given a desired total height of the view, returns what the height of the scroller should be
    AbstractDayGridView.prototype.computeScrollerHeight = function (viewHeight) {
        return viewHeight -
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["subtractInnerElHeight"])(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    // Sets the height of just the DayGrid component in this view
    AbstractDayGridView.prototype.setGridHeight = function (height, isAuto) {
        if (this.context.options.monthMode) {
            // if auto, make the height of each row the height that it would be if there were 6 weeks
            if (isAuto) {
                height *= this.dayGrid.rowCnt / 6;
            }
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["distributeHeight"])(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
        }
        else {
            if (isAuto) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["undistributeHeight"])(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["distributeHeight"])(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
            }
        }
    };
    /* Scroll
    ------------------------------------------------------------------------------------------------------------------*/
    AbstractDayGridView.prototype.computeDateScroll = function (duration) {
        return { top: 0 };
    };
    AbstractDayGridView.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
    };
    AbstractDayGridView.prototype.applyDateScroll = function (scroll) {
        if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
        }
    };
    return AbstractDayGridView;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["View"]));
AbstractDayGridView.prototype.dateProfileGeneratorClass = DayGridDateProfileGenerator;

var SimpleDayGrid = /** @class */ (function (_super) {
    __extends(SimpleDayGrid, _super);
    function SimpleDayGrid(dayGrid) {
        var _this = _super.call(this, dayGrid.el) || this;
        _this.slicer = new DayGridSlicer();
        _this.dayGrid = dayGrid;
        return _this;
    }
    SimpleDayGrid.prototype.firstContext = function (context) {
        context.calendar.registerInteractiveComponent(this, { el: this.dayGrid.el });
    };
    SimpleDayGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.context.calendar.unregisterInteractiveComponent(this);
    };
    SimpleDayGrid.prototype.render = function (props, context) {
        var dayGrid = this.dayGrid;
        var dateProfile = props.dateProfile, dayTable = props.dayTable;
        dayGrid.receiveProps(__assign({}, this.slicer.sliceProps(props, dateProfile, props.nextDayThreshold, context.calendar, dayGrid, dayTable), { dateProfile: dateProfile, cells: dayTable.cells, isRigid: props.isRigid }), context);
    };
    SimpleDayGrid.prototype.buildPositionCaches = function () {
        this.dayGrid.buildPositionCaches();
    };
    SimpleDayGrid.prototype.queryHit = function (positionLeft, positionTop) {
        var rawHit = this.dayGrid.positionToHit(positionLeft, positionTop);
        if (rawHit) {
            return {
                component: this.dayGrid,
                dateSpan: rawHit.dateSpan,
                dayEl: rawHit.dayEl,
                rect: {
                    left: rawHit.relativeRect.left,
                    right: rawHit.relativeRect.right,
                    top: rawHit.relativeRect.top,
                    bottom: rawHit.relativeRect.bottom
                },
                layer: 0
            };
        }
    };
    return SimpleDayGrid;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));
var DayGridSlicer = /** @class */ (function (_super) {
    __extends(DayGridSlicer, _super);
    function DayGridSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayGridSlicer.prototype.sliceRange = function (dateRange, dayTable) {
        return dayTable.sliceRange(dateRange);
    };
    return DayGridSlicer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Slicer"]));

var DayGridView = /** @class */ (function (_super) {
    __extends(DayGridView, _super);
    function DayGridView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayTable = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildDayTable);
        return _this;
    }
    DayGridView.prototype.render = function (props, context) {
        _super.prototype.render.call(this, props, context); // will call _renderSkeleton/_unrenderSkeleton
        var dateProfile = this.props.dateProfile;
        var dayTable = this.dayTable =
            this.buildDayTable(dateProfile, props.dateProfileGenerator);
        if (this.header) {
            this.header.receiveProps({
                dateProfile: dateProfile,
                dates: dayTable.headerDates,
                datesRepDistinctDays: dayTable.rowCnt === 1,
                renderIntroHtml: this.renderHeadIntroHtml
            }, context);
        }
        this.simpleDayGrid.receiveProps({
            dateProfile: dateProfile,
            dayTable: dayTable,
            businessHours: props.businessHours,
            dateSelection: props.dateSelection,
            eventStore: props.eventStore,
            eventUiBases: props.eventUiBases,
            eventSelection: props.eventSelection,
            eventDrag: props.eventDrag,
            eventResize: props.eventResize,
            isRigid: this.hasRigidRows(),
            nextDayThreshold: this.context.nextDayThreshold
        }, context);
    };
    DayGridView.prototype._renderSkeleton = function (context) {
        _super.prototype._renderSkeleton.call(this, context);
        if (context.options.columnHeader) {
            this.header = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayHeader"](this.el.querySelector('.fc-head-container'));
        }
        this.simpleDayGrid = new SimpleDayGrid(this.dayGrid);
    };
    DayGridView.prototype._unrenderSkeleton = function () {
        _super.prototype._unrenderSkeleton.call(this);
        if (this.header) {
            this.header.destroy();
        }
        this.simpleDayGrid.destroy();
    };
    return DayGridView;
}(AbstractDayGridView));
function buildDayTable(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DaySeries"](dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayTable"](daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    defaultView: 'dayGridMonth',
    views: {
        dayGrid: DayGridView,
        dayGridDay: {
            type: 'dayGrid',
            duration: { days: 1 }
        },
        dayGridWeek: {
            type: 'dayGrid',
            duration: { weeks: 1 }
        },
        dayGridMonth: {
            type: 'dayGrid',
            duration: { months: 1 },
            monthMode: true,
            fixedWeekCount: true
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "mbav":
/*!*******************************************************!*\
  !*** ./src/app/services/CommanExtendsClass.module.ts ***!
  \*******************************************************/
/*! exports provided: ReminderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderBase", function() { return ReminderBase; });
class ReminderBase {
}


/***/ }),

/***/ "p8AH":
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.esm.js ***!
  \*********************************************************/
/*! exports provided: default, AbstractTimeGridView, TimeGrid, TimeGridSlicer, TimeGridView, buildDayRanges, buildDayTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTimeGridView", function() { return AbstractTimeGridView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeGrid", function() { return TimeGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeGridSlicer", function() { return TimeGridSlicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeGridView", function() { return TimeGridView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildDayRanges", function() { return buildDayRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildDayTable", function() { return buildDayTable; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "SZB9");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/daygrid */ "iOEq");
/*!
FullCalendar Time Grid Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/




/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/*
Only handles foreground segs.
Does not own rendering. Use for low-level util methods by TimeGrid.
*/
var TimeGridEventRenderer = /** @class */ (function (_super) {
    __extends(TimeGridEventRenderer, _super);
    function TimeGridEventRenderer(timeGrid) {
        var _this = _super.call(this) || this;
        _this.timeGrid = timeGrid;
        return _this;
    }
    TimeGridEventRenderer.prototype.renderSegs = function (context, segs, mirrorInfo) {
        _super.prototype.renderSegs.call(this, context, segs, mirrorInfo);
        // TODO: dont do every time. memoize
        this.fullTimeFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({
            hour: 'numeric',
            minute: '2-digit',
            separator: this.context.options.defaultRangeSeparator
        });
    };
    // Given an array of foreground segments, render a DOM element for each, computes position,
    // and attaches to the column inner-container elements.
    TimeGridEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        var segsByCol = this.timeGrid.groupSegsByCol(segs);
        // order the segs within each column
        // TODO: have groupSegsByCol do this?
        for (var col = 0; col < segsByCol.length; col++) {
            segsByCol[col] = this.sortEventSegs(segsByCol[col]);
        }
        this.segsByCol = segsByCol;
        this.timeGrid.attachSegsByCol(segsByCol, this.timeGrid.fgContainerEls);
    };
    TimeGridEventRenderer.prototype.detachSegs = function (segs) {
        segs.forEach(function (seg) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(seg.el);
        });
        this.segsByCol = null;
    };
    TimeGridEventRenderer.prototype.computeSegSizes = function (allSegs) {
        var _a = this, timeGrid = _a.timeGrid, segsByCol = _a.segsByCol;
        var colCnt = timeGrid.colCnt;
        timeGrid.computeSegVerticals(allSegs); // horizontals relies on this
        if (segsByCol) {
            for (var col = 0; col < colCnt; col++) {
                this.computeSegHorizontals(segsByCol[col]); // compute horizontal coordinates, z-index's, and reorder the array
            }
        }
    };
    TimeGridEventRenderer.prototype.assignSegSizes = function (allSegs) {
        var _a = this, timeGrid = _a.timeGrid, segsByCol = _a.segsByCol;
        var colCnt = timeGrid.colCnt;
        timeGrid.assignSegVerticals(allSegs); // horizontals relies on this
        if (segsByCol) {
            for (var col = 0; col < colCnt; col++) {
                this.assignSegCss(segsByCol[col]);
            }
        }
    };
    // Computes a default event time formatting string if `eventTimeFormat` is not explicitly defined
    TimeGridEventRenderer.prototype.computeEventTimeFormat = function () {
        return {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: false
        };
    };
    // Computes a default `displayEventEnd` value if one is not expliclty defined
    TimeGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return true;
    };
    // Renders the HTML for a single event segment's default rendering
    TimeGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
        var eventRange = seg.eventRange;
        var eventDef = eventRange.def;
        var eventUi = eventRange.ui;
        var allDay = eventDef.allDay;
        var isDraggable = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventDraggable"])(this.context, eventDef, eventUi);
        var isResizableFromStart = seg.isStart && Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventStartResizable"])(this.context, eventDef, eventUi);
        var isResizableFromEnd = seg.isEnd && Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventEndResizable"])(this.context, eventDef, eventUi);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
        var skinCss = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["cssToStr"])(this.getSkinCss(eventUi));
        var timeText;
        var fullTimeText; // more verbose time text. for the print stylesheet
        var startTimeText; // just the start time text
        classes.unshift('fc-time-grid-event');
        // if the event appears to span more than one day...
        if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isMultiDayRange"])(eventRange.range)) {
            // Don't display time text on segments that run entirely through a day.
            // That would appear as midnight-midnight and would look dumb.
            // Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
            if (seg.isStart || seg.isEnd) {
                var unzonedStart = seg.start;
                var unzonedEnd = seg.end;
                timeText = this._getTimeText(unzonedStart, unzonedEnd, allDay); // TODO: give the timezones
                fullTimeText = this._getTimeText(unzonedStart, unzonedEnd, allDay, this.fullTimeFormat);
                startTimeText = this._getTimeText(unzonedStart, unzonedEnd, allDay, null, false); // displayEnd=false
            }
        }
        else {
            // Display the normal time text for the *event's* times
            timeText = this.getTimeText(eventRange);
            fullTimeText = this.getTimeText(eventRange, this.fullTimeFormat);
            startTimeText = this.getTimeText(eventRange, null, false); // displayEnd=false
        }
        return '<a class="' + classes.join(' ') + '"' +
            (eventDef.url ?
                ' href="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.url) + '"' :
                '') +
            (skinCss ?
                ' style="' + skinCss + '"' :
                '') +
            '>' +
            '<div class="fc-content">' +
            (timeText ?
                '<div class="fc-time"' +
                    ' data-start="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(startTimeText) + '"' +
                    ' data-full="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(fullTimeText) + '"' +
                    '>' +
                    '<span>' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(timeText) + '</span>' +
                    '</div>' :
                '') +
            (eventDef.title ?
                '<div class="fc-title">' +
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.title) +
                    '</div>' :
                '') +
            '</div>' +
            /* TODO: write CSS for this
            (isResizableFromStart ?
              '<div class="fc-resizer fc-start-resizer"></div>' :
              ''
              ) +
            */
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer"></div>' :
                '') +
            '</a>';
    };
    // Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
    // Assumed the segs are already ordered.
    // NOTE: Also reorders the given array by date!
    TimeGridEventRenderer.prototype.computeSegHorizontals = function (segs) {
        var levels;
        var level0;
        var i;
        levels = buildSlotSegLevels(segs);
        computeForwardSlotSegs(levels);
        if ((level0 = levels[0])) {
            for (i = 0; i < level0.length; i++) {
                computeSlotSegPressures(level0[i]);
            }
            for (i = 0; i < level0.length; i++) {
                this.computeSegForwardBack(level0[i], 0, 0);
            }
        }
    };
    // Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
    // from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
    // seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
    //
    // The segment might be part of a "series", which means consecutive segments with the same pressure
    // who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
    // segments behind this one in the current series, and `seriesBackwardCoord` is the starting
    // coordinate of the first segment in the series.
    TimeGridEventRenderer.prototype.computeSegForwardBack = function (seg, seriesBackwardPressure, seriesBackwardCoord) {
        var forwardSegs = seg.forwardSegs;
        var i;
        if (seg.forwardCoord === undefined) { // not already computed
            if (!forwardSegs.length) {
                // if there are no forward segments, this segment should butt up against the edge
                seg.forwardCoord = 1;
            }
            else {
                // sort highest pressure first
                this.sortForwardSegs(forwardSegs);
                // this segment's forwardCoord will be calculated from the backwardCoord of the
                // highest-pressure forward segment.
                this.computeSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
                seg.forwardCoord = forwardSegs[0].backwardCoord;
            }
            // calculate the backwardCoord from the forwardCoord. consider the series
            seg.backwardCoord = seg.forwardCoord -
                (seg.forwardCoord - seriesBackwardCoord) / // available width for series
                    (seriesBackwardPressure + 1); // # of segments in the series
            // use this segment's coordinates to computed the coordinates of the less-pressurized
            // forward segments
            for (i = 0; i < forwardSegs.length; i++) {
                this.computeSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
            }
        }
    };
    TimeGridEventRenderer.prototype.sortForwardSegs = function (forwardSegs) {
        var objs = forwardSegs.map(buildTimeGridSegCompareObj);
        var specs = [
            // put higher-pressure first
            { field: 'forwardPressure', order: -1 },
            // put segments that are closer to initial edge first (and favor ones with no coords yet)
            { field: 'backwardCoord', order: 1 }
        ].concat(this.context.eventOrderSpecs);
        objs.sort(function (obj0, obj1) {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compareByFieldSpecs"])(obj0, obj1, specs);
        });
        return objs.map(function (c) {
            return c._seg;
        });
    };
    // Given foreground event segments that have already had their position coordinates computed,
    // assigns position-related CSS values to their elements.
    TimeGridEventRenderer.prototype.assignSegCss = function (segs) {
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(seg.el, this.generateSegCss(seg));
            if (seg.level > 0) {
                seg.el.classList.add('fc-time-grid-event-inset');
            }
            // if the event is short that the title will be cut off,
            // attach a className that condenses the title into the time area.
            if (seg.eventRange.def.title && seg.bottom - seg.top < 30) {
                seg.el.classList.add('fc-short'); // TODO: "condensed" is a better name
            }
        }
    };
    // Generates an object with CSS properties/values that should be applied to an event segment element.
    // Contains important positioning-related properties that should be applied to any event element, customized or not.
    TimeGridEventRenderer.prototype.generateSegCss = function (seg) {
        var shouldOverlap = this.context.options.slotEventOverlap;
        var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
        var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
        var props = this.timeGrid.generateSegVerticalCss(seg); // get top/bottom first
        var isRtl = this.context.isRtl;
        var left; // amount of space from left edge, a fraction of the total width
        var right; // amount of space from right edge, a fraction of the total width
        if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
        }
        if (isRtl) {
            left = 1 - forwardCoord;
            right = backwardCoord;
        }
        else {
            left = backwardCoord;
            right = 1 - forwardCoord;
        }
        props.zIndex = seg.level + 1; // convert from 0-base to 1-based
        props.left = left * 100 + '%';
        props.right = right * 100 + '%';
        if (shouldOverlap && seg.forwardPressure) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
        }
        return props;
    };
    return TimeGridEventRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FgEventRenderer"]));
// Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
function buildSlotSegLevels(segs) {
    var levels = [];
    var i;
    var seg;
    var j;
    for (i = 0; i < segs.length; i++) {
        seg = segs[i];
        // go through all the levels and stop on the first level where there are no collisions
        for (j = 0; j < levels.length; j++) {
            if (!computeSlotSegCollisions(seg, levels[j]).length) {
                break;
            }
        }
        seg.level = j;
        (levels[j] || (levels[j] = [])).push(seg);
    }
    return levels;
}
// For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
function computeForwardSlotSegs(levels) {
    var i;
    var level;
    var j;
    var seg;
    var k;
    for (i = 0; i < levels.length; i++) {
        level = levels[i];
        for (j = 0; j < level.length; j++) {
            seg = level[j];
            seg.forwardSegs = [];
            for (k = i + 1; k < levels.length; k++) {
                computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
            }
        }
    }
}
// Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
function computeSlotSegPressures(seg) {
    var forwardSegs = seg.forwardSegs;
    var forwardPressure = 0;
    var i;
    var forwardSeg;
    if (seg.forwardPressure === undefined) { // not already computed
        for (i = 0; i < forwardSegs.length; i++) {
            forwardSeg = forwardSegs[i];
            // figure out the child's maximum forward path
            computeSlotSegPressures(forwardSeg);
            // either use the existing maximum, or use the child's forward pressure
            // plus one (for the forwardSeg itself)
            forwardPressure = Math.max(forwardPressure, 1 + forwardSeg.forwardPressure);
        }
        seg.forwardPressure = forwardPressure;
    }
}
// Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.
function computeSlotSegCollisions(seg, otherSegs, results) {
    if (results === void 0) { results = []; }
    for (var i = 0; i < otherSegs.length; i++) {
        if (isSlotSegCollision(seg, otherSegs[i])) {
            results.push(otherSegs[i]);
        }
    }
    return results;
}
// Do these segments occupy the same vertical space?
function isSlotSegCollision(seg1, seg2) {
    return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
}
function buildTimeGridSegCompareObj(seg) {
    var obj = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildSegCompareObj"])(seg);
    obj.forwardPressure = seg.forwardPressure;
    obj.backwardCoord = seg.backwardCoord;
    return obj;
}

var TimeGridMirrorRenderer = /** @class */ (function (_super) {
    __extends(TimeGridMirrorRenderer, _super);
    function TimeGridMirrorRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        this.segsByCol = this.timeGrid.groupSegsByCol(segs);
        this.timeGrid.attachSegsByCol(this.segsByCol, this.timeGrid.mirrorContainerEls);
        this.sourceSeg = mirrorInfo.sourceSeg;
    };
    TimeGridMirrorRenderer.prototype.generateSegCss = function (seg) {
        var props = _super.prototype.generateSegCss.call(this, seg);
        var sourceSeg = this.sourceSeg;
        if (sourceSeg && sourceSeg.col === seg.col) {
            var sourceSegProps = _super.prototype.generateSegCss.call(this, sourceSeg);
            props.left = sourceSegProps.left;
            props.right = sourceSegProps.right;
            props.marginLeft = sourceSegProps.marginLeft;
            props.marginRight = sourceSegProps.marginRight;
        }
        return props;
    };
    return TimeGridMirrorRenderer;
}(TimeGridEventRenderer));

var TimeGridFillRenderer = /** @class */ (function (_super) {
    __extends(TimeGridFillRenderer, _super);
    function TimeGridFillRenderer(timeGrid) {
        var _this = _super.call(this) || this;
        _this.timeGrid = timeGrid;
        return _this;
    }
    TimeGridFillRenderer.prototype.attachSegs = function (type, segs) {
        var timeGrid = this.timeGrid;
        var containerEls;
        // TODO: more efficient lookup
        if (type === 'bgEvent') {
            containerEls = timeGrid.bgContainerEls;
        }
        else if (type === 'businessHours') {
            containerEls = timeGrid.businessContainerEls;
        }
        else if (type === 'highlight') {
            containerEls = timeGrid.highlightContainerEls;
        }
        timeGrid.attachSegsByCol(timeGrid.groupSegsByCol(segs), containerEls);
        return segs.map(function (seg) {
            return seg.el;
        });
    };
    TimeGridFillRenderer.prototype.computeSegSizes = function (segs) {
        this.timeGrid.computeSegVerticals(segs);
    };
    TimeGridFillRenderer.prototype.assignSegSizes = function (segs) {
        this.timeGrid.assignSegVerticals(segs);
    };
    return TimeGridFillRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FillRenderer"]));

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var AGENDA_STOCK_SUB_DURATIONS = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 }
];
var TimeGrid = /** @class */ (function (_super) {
    __extends(TimeGrid, _super);
    function TimeGrid(el, renderProps) {
        var _this = _super.call(this, el) || this;
        _this.isSlatSizesDirty = false;
        _this.isColSizesDirty = false;
        _this.processOptions = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_this._processOptions);
        _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton);
        _this.renderSlats = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSlats, null, [_this.renderSkeleton]);
        _this.renderColumns = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderColumns, _this._unrenderColumns, [_this.renderSkeleton]);
        _this.renderProps = renderProps;
        var renderColumns = _this.renderColumns;
        var eventRenderer = _this.eventRenderer = new TimeGridEventRenderer(_this);
        var fillRenderer = _this.fillRenderer = new TimeGridFillRenderer(_this);
        _this.mirrorRenderer = new TimeGridMirrorRenderer(_this);
        _this.renderBusinessHours = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderColumns]);
        _this.renderDateSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderDateSelection, _this._unrenderDateSelection, [renderColumns]);
        _this.renderFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderColumns]);
        _this.renderBgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderColumns]);
        _this.renderEventSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        _this.renderEventDrag = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventDrag, _this._unrenderEventDrag, [renderColumns]);
        _this.renderEventResize = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventResize, _this._unrenderEventResize, [renderColumns]);
        return _this;
    }
    /* Options
    ------------------------------------------------------------------------------------------------------------------*/
    // Parses various options into properties of this object
    // MUST have context already set
    TimeGrid.prototype._processOptions = function (options) {
        var slotDuration = options.slotDuration, snapDuration = options.snapDuration;
        var snapsPerSlot;
        var input;
        slotDuration = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(slotDuration);
        snapDuration = snapDuration ? Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(snapDuration) : slotDuration;
        snapsPerSlot = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(slotDuration, snapDuration);
        if (snapsPerSlot === null) {
            snapDuration = slotDuration;
            snapsPerSlot = 1;
            // TODO: say warning?
        }
        this.slotDuration = slotDuration;
        this.snapDuration = snapDuration;
        this.snapsPerSlot = snapsPerSlot;
        // might be an array value (for TimelineView).
        // if so, getting the most granular entry (the last one probably).
        input = options.slotLabelFormat;
        if (Array.isArray(input)) {
            input = input[input.length - 1];
        }
        this.labelFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(input || {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: 'short'
        });
        input = options.slotLabelInterval;
        this.labelInterval = input ?
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(input) :
            this.computeLabelInterval(slotDuration);
    };
    // Computes an automatic value for slotLabelInterval
    TimeGrid.prototype.computeLabelInterval = function (slotDuration) {
        var i;
        var labelInterval;
        var slotsPerLabel;
        // find the smallest stock label interval that results in more than one slots-per-label
        for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
            labelInterval = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(AGENDA_STOCK_SUB_DURATIONS[i]);
            slotsPerLabel = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(labelInterval, slotDuration);
            if (slotsPerLabel !== null && slotsPerLabel > 1) {
                return labelInterval;
            }
        }
        return slotDuration; // fall back
    };
    /* Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.render = function (props, context) {
        this.processOptions(context.options);
        var cells = props.cells;
        this.colCnt = cells.length;
        this.renderSkeleton(context.theme);
        this.renderSlats(props.dateProfile);
        this.renderColumns(props.cells, props.dateProfile);
        this.renderBusinessHours(context, props.businessHourSegs);
        this.renderDateSelection(props.dateSelectionSegs);
        this.renderFgEvents(context, props.fgEventSegs);
        this.renderBgEvents(context, props.bgEventSegs);
        this.renderEventSelection(props.eventSelection);
        this.renderEventDrag(props.eventDrag);
        this.renderEventResize(props.eventResize);
    };
    TimeGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        // should unrender everything else too
        this.renderSlats.unrender();
        this.renderColumns.unrender();
        this.renderSkeleton.unrender();
    };
    TimeGrid.prototype.updateSize = function (isResize) {
        var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
        if (isResize || this.isSlatSizesDirty) {
            this.buildSlatPositions();
            this.isSlatSizesDirty = false;
        }
        if (isResize || this.isColSizesDirty) {
            this.buildColPositions();
            this.isColSizesDirty = false;
        }
        fillRenderer.computeSizes(isResize);
        eventRenderer.computeSizes(isResize);
        mirrorRenderer.computeSizes(isResize);
        fillRenderer.assignSizes(isResize);
        eventRenderer.assignSizes(isResize);
        mirrorRenderer.assignSizes(isResize);
    };
    TimeGrid.prototype._renderSkeleton = function (theme) {
        var el = this.el;
        el.innerHTML =
            '<div class="fc-bg"></div>' +
                '<div class="fc-slats"></div>' +
                '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '" style="display:none" />';
        this.rootBgContainerEl = el.querySelector('.fc-bg');
        this.slatContainerEl = el.querySelector('.fc-slats');
        this.bottomRuleEl = el.querySelector('.fc-divider');
    };
    TimeGrid.prototype._renderSlats = function (dateProfile) {
        var theme = this.context.theme;
        this.slatContainerEl.innerHTML =
            '<table class="' + theme.getClass('tableGrid') + '">' +
                this.renderSlatRowHtml(dateProfile) +
                '</table>';
        this.slatEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.slatContainerEl, 'tr');
        this.slatPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.slatEls, false, true // vertical
        );
        this.isSlatSizesDirty = true;
    };
    // Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
    TimeGrid.prototype.renderSlatRowHtml = function (dateProfile) {
        var _a = this.context, dateEnv = _a.dateEnv, theme = _a.theme, isRtl = _a.isRtl;
        var html = '';
        var dayStart = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(dateProfile.renderRange.start);
        var slotTime = dateProfile.minTime;
        var slotIterator = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0);
        var slotDate; // will be on the view's first day, but we only care about its time
        var isLabeled;
        var axisHtml;
        // Calculate the time for each slot
        while (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(slotTime) < Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(dateProfile.maxTime)) {
            slotDate = dateEnv.add(dayStart, slotTime);
            isLabeled = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(slotIterator, this.labelInterval) !== null;
            axisHtml =
                '<td class="fc-axis fc-time ' + theme.getClass('widgetContent') + '">' +
                    (isLabeled ?
                        '<span>' + // for matchCellWidths
                            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(dateEnv.format(slotDate, this.labelFormat)) +
                            '</span>' :
                        '') +
                    '</td>';
            html +=
                '<tr data-time="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["formatIsoTimeString"])(slotDate) + '"' +
                    (isLabeled ? '' : ' class="fc-minor"') +
                    '>' +
                    (!isRtl ? axisHtml : '') +
                    '<td class="' + theme.getClass('widgetContent') + '"></td>' +
                    (isRtl ? axisHtml : '') +
                    '</tr>';
            slotTime = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDurations"])(slotTime, this.slotDuration);
            slotIterator = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDurations"])(slotIterator, this.slotDuration);
        }
        return html;
    };
    TimeGrid.prototype._renderColumns = function (cells, dateProfile) {
        var _a = this.context, calendar = _a.calendar, view = _a.view, isRtl = _a.isRtl, theme = _a.theme, dateEnv = _a.dateEnv;
        var bgRow = new _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["DayBgRow"](this.context);
        this.rootBgContainerEl.innerHTML =
            '<table class="' + theme.getClass('tableGrid') + '">' +
                bgRow.renderHtml({
                    cells: cells,
                    dateProfile: dateProfile,
                    renderIntroHtml: this.renderProps.renderBgIntroHtml
                }) +
                '</table>';
        this.colEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-day, .fc-disabled-day');
        for (var col = 0; col < this.colCnt; col++) {
            calendar.publiclyTrigger('dayRender', [
                {
                    date: dateEnv.toDate(cells[col].date),
                    el: this.colEls[col],
                    view: view
                }
            ]);
        }
        if (isRtl) {
            this.colEls.reverse();
        }
        this.colPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.colEls, true, // horizontal
        false);
        this.renderContentSkeleton();
        this.isColSizesDirty = true;
    };
    TimeGrid.prototype._unrenderColumns = function () {
        this.unrenderContentSkeleton();
    };
    /* Content Skeleton
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders the DOM that the view's content will live in
    TimeGrid.prototype.renderContentSkeleton = function () {
        var isRtl = this.context.isRtl;
        var parts = [];
        var skeletonEl;
        parts.push(this.renderProps.renderIntroHtml());
        for (var i = 0; i < this.colCnt; i++) {
            parts.push('<td>' +
                '<div class="fc-content-col">' +
                '<div class="fc-event-container fc-mirror-container"></div>' +
                '<div class="fc-event-container"></div>' +
                '<div class="fc-highlight-container"></div>' +
                '<div class="fc-bgevent-container"></div>' +
                '<div class="fc-business-container"></div>' +
                '</div>' +
                '</td>');
        }
        if (isRtl) {
            parts.reverse();
        }
        skeletonEl = this.contentSkeletonEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-content-skeleton">' +
            '<table>' +
            '<tr>' + parts.join('') + '</tr>' +
            '</table>' +
            '</div>');
        this.colContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-content-col');
        this.mirrorContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-mirror-container');
        this.fgContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-event-container:not(.fc-mirror-container)');
        this.bgContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-bgevent-container');
        this.highlightContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-highlight-container');
        this.businessContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-business-container');
        if (isRtl) {
            this.colContainerEls.reverse();
            this.mirrorContainerEls.reverse();
            this.fgContainerEls.reverse();
            this.bgContainerEls.reverse();
            this.highlightContainerEls.reverse();
            this.businessContainerEls.reverse();
        }
        this.el.appendChild(skeletonEl);
    };
    TimeGrid.prototype.unrenderContentSkeleton = function () {
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.contentSkeletonEl);
    };
    // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col
    TimeGrid.prototype.groupSegsByCol = function (segs) {
        var segsByCol = [];
        var i;
        for (i = 0; i < this.colCnt; i++) {
            segsByCol.push([]);
        }
        for (i = 0; i < segs.length; i++) {
            segsByCol[segs[i].col].push(segs[i]);
        }
        return segsByCol;
    };
    // Given segments grouped by column, insert the segments' elements into a parallel array of container
    // elements, each living within a column.
    TimeGrid.prototype.attachSegsByCol = function (segsByCol, containerEls) {
        var col;
        var segs;
        var i;
        for (col = 0; col < this.colCnt; col++) { // iterate each column grouping
            segs = segsByCol[col];
            for (i = 0; i < segs.length; i++) {
                containerEls[col].appendChild(segs[i].el);
            }
        }
    };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.getNowIndicatorUnit = function () {
        return 'minute'; // will refresh on the minute
    };
    TimeGrid.prototype.renderNowIndicator = function (segs, date) {
        // HACK: if date columns not ready for some reason (scheduler)
        if (!this.colContainerEls) {
            return;
        }
        var top = this.computeDateTop(date);
        var nodes = [];
        var i;
        // render lines within the columns
        for (i = 0; i < segs.length; i++) {
            var lineEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-now-indicator fc-now-indicator-line' });
            lineEl.style.top = top + 'px';
            this.colContainerEls[segs[i].col].appendChild(lineEl);
            nodes.push(lineEl);
        }
        // render an arrow over the axis
        if (segs.length > 0) { // is the current time in view?
            var arrowEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-now-indicator fc-now-indicator-arrow' });
            arrowEl.style.top = top + 'px';
            this.contentSkeletonEl.appendChild(arrowEl);
            nodes.push(arrowEl);
        }
        this.nowIndicatorEls = nodes;
    };
    TimeGrid.prototype.unrenderNowIndicator = function () {
        if (this.nowIndicatorEls) {
            this.nowIndicatorEls.forEach(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"]);
            this.nowIndicatorEls = null;
        }
    };
    /* Coordinates
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.getTotalSlatHeight = function () {
        return this.slatContainerEl.getBoundingClientRect().height;
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    TimeGrid.prototype.computeDateTop = function (when, startOfDayDate) {
        if (!startOfDayDate) {
            startOfDayDate = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(when);
        }
        return this.computeTimeTop(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(when.valueOf() - startOfDayDate.valueOf()));
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    TimeGrid.prototype.computeTimeTop = function (duration) {
        var len = this.slatEls.length;
        var dateProfile = this.props.dateProfile;
        var slatCoverage = (duration.milliseconds - Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(dateProfile.minTime)) / Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(this.slotDuration); // floating-point value of # of slots covered
        var slatIndex;
        var slatRemainder;
        // compute a floating-point number for how many slats should be progressed through.
        // from 0 to number of slats (inclusive)
        // constrained because minTime/maxTime might be customized.
        slatCoverage = Math.max(0, slatCoverage);
        slatCoverage = Math.min(len, slatCoverage);
        // an integer index of the furthest whole slat
        // from 0 to number slats (*exclusive*, so len-1)
        slatIndex = Math.floor(slatCoverage);
        slatIndex = Math.min(slatIndex, len - 1);
        // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
        // could be 1.0 if slatCoverage is covering *all* the slots
        slatRemainder = slatCoverage - slatIndex;
        return this.slatPositions.tops[slatIndex] +
            this.slatPositions.getHeight(slatIndex) * slatRemainder;
    };
    // For each segment in an array, computes and assigns its top and bottom properties
    TimeGrid.prototype.computeSegVerticals = function (segs) {
        var options = this.context.options;
        var eventMinHeight = options.timeGridEventMinHeight;
        var i;
        var seg;
        var dayDate;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            dayDate = this.props.cells[seg.col].date;
            seg.top = this.computeDateTop(seg.start, dayDate);
            seg.bottom = Math.max(seg.top + eventMinHeight, this.computeDateTop(seg.end, dayDate));
        }
    };
    // Given segments that already have their top/bottom properties computed, applies those values to
    // the segments' elements.
    TimeGrid.prototype.assignSegVerticals = function (segs) {
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(seg.el, this.generateSegVerticalCss(seg));
        }
    };
    // Generates an object with CSS properties for the top/bottom coordinates of a segment element
    TimeGrid.prototype.generateSegVerticalCss = function (seg) {
        return {
            top: seg.top,
            bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
        };
    };
    /* Sizing
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.buildPositionCaches = function () {
        this.buildColPositions();
        this.buildSlatPositions();
    };
    TimeGrid.prototype.buildColPositions = function () {
        this.colPositions.build();
    };
    TimeGrid.prototype.buildSlatPositions = function () {
        this.slatPositions.build();
    };
    /* Hit System
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype.positionToHit = function (positionLeft, positionTop) {
        var dateEnv = this.context.dateEnv;
        var _a = this, snapsPerSlot = _a.snapsPerSlot, slatPositions = _a.slatPositions, colPositions = _a.colPositions;
        var colIndex = colPositions.leftToIndex(positionLeft);
        var slatIndex = slatPositions.topToIndex(positionTop);
        if (colIndex != null && slatIndex != null) {
            var slatTop = slatPositions.tops[slatIndex];
            var slatHeight = slatPositions.getHeight(slatIndex);
            var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
            var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
            var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
            var dayDate = this.props.cells[colIndex].date;
            var time = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDurations"])(this.props.dateProfile.minTime, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["multiplyDuration"])(this.snapDuration, snapIndex));
            var start = dateEnv.add(dayDate, time);
            var end = dateEnv.add(start, this.snapDuration);
            return {
                col: colIndex,
                dateSpan: {
                    range: { start: start, end: end },
                    allDay: false
                },
                dayEl: this.colEls[colIndex],
                relativeRect: {
                    left: colPositions.lefts[colIndex],
                    right: colPositions.rights[colIndex],
                    top: slatTop,
                    bottom: slatTop + slatHeight
                }
            };
        }
    };
    /* Event Drag Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype._renderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            if (state.isEvent) {
                this.mirrorRenderer.renderSegs(this.context, state.segs, { isDragging: true, sourceSeg: state.sourceSeg });
            }
            else {
                this.fillRenderer.renderSegs('highlight', this.context, state.segs);
            }
        }
    };
    TimeGrid.prototype._unrenderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            if (state.isEvent) {
                this.mirrorRenderer.unrender(this.context, state.segs, { isDragging: true, sourceSeg: state.sourceSeg });
            }
            else {
                this.fillRenderer.unrender('highlight', this.context);
            }
        }
    };
    /* Event Resize Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    TimeGrid.prototype._renderEventResize = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.mirrorRenderer.renderSegs(this.context, state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    TimeGrid.prototype._unrenderEventResize = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.mirrorRenderer.unrender(this.context, state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    /* Selection
    ------------------------------------------------------------------------------------------------------------------*/
    // Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.
    TimeGrid.prototype._renderDateSelection = function (segs) {
        if (segs) {
            if (this.context.options.selectMirror) {
                this.mirrorRenderer.renderSegs(this.context, segs, { isSelecting: true });
            }
            else {
                this.fillRenderer.renderSegs('highlight', this.context, segs);
            }
        }
    };
    TimeGrid.prototype._unrenderDateSelection = function (segs) {
        if (segs) {
            if (this.context.options.selectMirror) {
                this.mirrorRenderer.unrender(this.context, segs, { isSelecting: true });
            }
            else {
                this.fillRenderer.unrender('highlight', this.context);
            }
        }
    };
    return TimeGrid;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));

var AllDaySplitter = /** @class */ (function (_super) {
    __extends(AllDaySplitter, _super);
    function AllDaySplitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllDaySplitter.prototype.getKeyInfo = function () {
        return {
            allDay: {},
            timed: {}
        };
    };
    AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
        if (dateSpan.allDay) {
            return ['allDay'];
        }
        else {
            return ['timed'];
        }
    };
    AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
        if (!eventDef.allDay) {
            return ['timed'];
        }
        else if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["hasBgRendering"])(eventDef)) {
            return ['timed', 'allDay'];
        }
        else {
            return ['allDay'];
        }
    };
    return AllDaySplitter;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Splitter"]));

var TIMEGRID_ALL_DAY_EVENT_LIMIT = 5;
var WEEK_HEADER_FORMAT = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ week: 'short' });
/* An abstract class for all timegrid-related views. Displays one more columns with time slots running vertically.
----------------------------------------------------------------------------------------------------------------------*/
// Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
// Responsible for managing width/height.
var AbstractTimeGridView = /** @class */ (function (_super) {
    __extends(AbstractTimeGridView, _super);
    function AbstractTimeGridView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitter = new AllDaySplitter();
        _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton, _this._unrenderSkeleton);
        /* Header Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that will go before the day-of week header cells
        _this.renderHeadIntroHtml = function () {
            var _a = _this.context, theme = _a.theme, dateEnv = _a.dateEnv, options = _a.options;
            var range = _this.props.dateProfile.renderRange;
            var dayCnt = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffDays"])(range.start, range.end);
            var weekText;
            if (options.weekNumbers) {
                weekText = dateEnv.format(range.start, WEEK_HEADER_FORMAT);
                return '' +
                    '<th class="fc-axis fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.axisStyleAttr() + '>' +
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(// aside from link, important for matchCellWidths
                    options, dateEnv, { date: range.start, type: 'week', forceOff: dayCnt > 1 }, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(weekText) // inner HTML
                    ) +
                    '</th>';
            }
            else {
                return '<th class="fc-axis ' + theme.getClass('widgetHeader') + '" ' + _this.axisStyleAttr() + '></th>';
            }
        };
        /* Time Grid Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
        _this.renderTimeGridBgIntroHtml = function () {
            var theme = _this.context.theme;
            return '<td class="fc-axis ' + theme.getClass('widgetContent') + '" ' + _this.axisStyleAttr() + '></td>';
        };
        // Generates the HTML that goes before all other types of cells.
        // Affects content-skeleton, mirror-skeleton, highlight-skeleton for both the time-grid and day-grid.
        _this.renderTimeGridIntroHtml = function () {
            return '<td class="fc-axis" ' + _this.axisStyleAttr() + '></td>';
        };
        /* Day Grid Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that goes before the all-day cells
        _this.renderDayGridBgIntroHtml = function () {
            var _a = _this.context, theme = _a.theme, options = _a.options;
            return '' +
                '<td class="fc-axis ' + theme.getClass('widgetContent') + '" ' + _this.axisStyleAttr() + '>' +
                '<span>' + // needed for matchCellWidths
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getAllDayHtml"])(options) +
                '</span>' +
                '</td>';
        };
        // Generates the HTML that goes before all other types of cells.
        // Affects content-skeleton, mirror-skeleton, highlight-skeleton for both the time-grid and day-grid.
        _this.renderDayGridIntroHtml = function () {
            return '<td class="fc-axis" ' + _this.axisStyleAttr() + '></td>';
        };
        return _this;
    }
    AbstractTimeGridView.prototype.render = function (props, context) {
        _super.prototype.render.call(this, props, context);
        this.renderSkeleton(context);
    };
    AbstractTimeGridView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderSkeleton.unrender();
    };
    AbstractTimeGridView.prototype._renderSkeleton = function (context) {
        this.el.classList.add('fc-timeGrid-view');
        this.el.innerHTML = this.renderSkeletonHtml();
        this.scroller = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollComponent"]('hidden', // overflow x
        'auto' // overflow y
        );
        var timeGridWrapEl = this.scroller.el;
        this.el.querySelector('.fc-body > tr > td').appendChild(timeGridWrapEl);
        timeGridWrapEl.classList.add('fc-time-grid-container');
        var timeGridEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-time-grid' });
        timeGridWrapEl.appendChild(timeGridEl);
        this.timeGrid = new TimeGrid(timeGridEl, {
            renderBgIntroHtml: this.renderTimeGridBgIntroHtml,
            renderIntroHtml: this.renderTimeGridIntroHtml
        });
        if (context.options.allDaySlot) { // should we display the "all-day" area?
            this.dayGrid = new _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["DayGrid"](// the all-day subcomponent of this view
            this.el.querySelector('.fc-day-grid'), {
                renderNumberIntroHtml: this.renderDayGridIntroHtml,
                renderBgIntroHtml: this.renderDayGridBgIntroHtml,
                renderIntroHtml: this.renderDayGridIntroHtml,
                colWeekNumbersVisible: false,
                cellWeekNumbersVisible: false
            });
            // have the day-grid extend it's coordinate area over the <hr> dividing the two grids
            var dividerEl = this.el.querySelector('.fc-divider');
            this.dayGrid.bottomCoordPadding = dividerEl.getBoundingClientRect().height;
        }
    };
    AbstractTimeGridView.prototype._unrenderSkeleton = function () {
        this.el.classList.remove('fc-timeGrid-view');
        this.timeGrid.destroy();
        if (this.dayGrid) {
            this.dayGrid.destroy();
        }
        this.scroller.destroy();
    };
    /* Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    // Builds the HTML skeleton for the view.
    // The day-grid and time-grid components will render inside containers defined by this HTML.
    AbstractTimeGridView.prototype.renderSkeletonHtml = function () {
        var _a = this.context, theme = _a.theme, options = _a.options;
        return '' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            (options.columnHeader ?
                '<thead class="fc-head">' +
                    '<tr>' +
                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                    '</tr>' +
                    '</thead>' :
                '') +
            '<tbody class="fc-body">' +
            '<tr>' +
            '<td class="' + theme.getClass('widgetContent') + '">' +
            (options.allDaySlot ?
                '<div class="fc-day-grid"></div>' +
                    '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '" />' :
                '') +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    AbstractTimeGridView.prototype.getNowIndicatorUnit = function () {
        return this.timeGrid.getNowIndicatorUnit();
    };
    // subclasses should implement
    // renderNowIndicator(date: DateMarker) {
    // }
    AbstractTimeGridView.prototype.unrenderNowIndicator = function () {
        this.timeGrid.unrenderNowIndicator();
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    AbstractTimeGridView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
        _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto); // will call updateBaseSize. important that executes first
        this.timeGrid.updateSize(isResize);
        if (this.dayGrid) {
            this.dayGrid.updateSize(isResize);
        }
    };
    // Adjusts the vertical dimensions of the view to the specified values
    AbstractTimeGridView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
        var _this = this;
        var eventLimit;
        var scrollerHeight;
        var scrollbarWidths;
        // make all axis cells line up
        this.axisWidth = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["matchCellWidths"])(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-axis'));
        // hack to give the view some height prior to timeGrid's columns being rendered
        // TODO: separate setting height from scroller VS timeGrid.
        if (!this.timeGrid.colEls) {
            if (!isAuto) {
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            return;
        }
        // set of fake row elements that must compensate when scroller has scrollbars
        var noScrollRowEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-row').filter(function (node) {
            return !_this.scroller.el.contains(node);
        });
        // reset all dimensions back to the original state
        this.timeGrid.bottomRuleEl.style.display = 'none'; // will be shown later if this <hr> is necessary
        this.scroller.clear(); // sets height to 'auto' and clears overflow
        noScrollRowEls.forEach(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["uncompensateScroll"]);
        // limit number of events in the all-day area
        if (this.dayGrid) {
            this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed
            eventLimit = this.context.options.eventLimit;
            if (eventLimit && typeof eventLimit !== 'number') {
                eventLimit = TIMEGRID_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
            }
            if (eventLimit) {
                this.dayGrid.limitRows(eventLimit);
            }
        }
        if (!isAuto) { // should we force dimensions of the scroll container?
            scrollerHeight = this.computeScrollerHeight(viewHeight);
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();
            if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?
                // make the all-day and header rows lines up
                noScrollRowEls.forEach(function (rowEl) {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compensateScroll"])(rowEl, scrollbarWidths);
                });
                // the scrollbar compensation might have changed text flow, which might affect height, so recalculate
                // and reapply the desired height to the scroller.
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            // guarantees the same scrollbar widths
            this.scroller.lockOverflow(scrollbarWidths);
            // if there's any space below the slats, show the horizontal rule.
            // this won't cause any new overflow, because lockOverflow already called.
            if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
                this.timeGrid.bottomRuleEl.style.display = '';
            }
        }
    };
    // given a desired total height of the view, returns what the height of the scroller should be
    AbstractTimeGridView.prototype.computeScrollerHeight = function (viewHeight) {
        return viewHeight -
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["subtractInnerElHeight"])(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    /* Scroll
    ------------------------------------------------------------------------------------------------------------------*/
    // Computes the initial pre-configured scroll state prior to allowing the user to change it
    AbstractTimeGridView.prototype.computeDateScroll = function (duration) {
        var top = this.timeGrid.computeTimeTop(duration);
        // zoom can give weird floating-point values. rather scroll a little bit further
        top = Math.ceil(top);
        if (top) {
            top++; // to overcome top border that slots beyond the first have. looks better
        }
        return { top: top };
    };
    AbstractTimeGridView.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
    };
    AbstractTimeGridView.prototype.applyDateScroll = function (scroll) {
        if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
        }
    };
    // Generates an HTML attribute string for setting the width of the axis, if it is known
    AbstractTimeGridView.prototype.axisStyleAttr = function () {
        if (this.axisWidth != null) {
            return 'style="width:' + this.axisWidth + 'px"';
        }
        return '';
    };
    return AbstractTimeGridView;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["View"]));
AbstractTimeGridView.prototype.usesMinMaxTime = true; // indicates that minTime/maxTime affects rendering

var SimpleTimeGrid = /** @class */ (function (_super) {
    __extends(SimpleTimeGrid, _super);
    function SimpleTimeGrid(timeGrid) {
        var _this = _super.call(this, timeGrid.el) || this;
        _this.buildDayRanges = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildDayRanges);
        _this.slicer = new TimeGridSlicer();
        _this.timeGrid = timeGrid;
        return _this;
    }
    SimpleTimeGrid.prototype.firstContext = function (context) {
        context.calendar.registerInteractiveComponent(this, {
            el: this.timeGrid.el
        });
    };
    SimpleTimeGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.context.calendar.unregisterInteractiveComponent(this);
    };
    SimpleTimeGrid.prototype.render = function (props, context) {
        var dateEnv = this.context.dateEnv;
        var dateProfile = props.dateProfile, dayTable = props.dayTable;
        var dayRanges = this.dayRanges = this.buildDayRanges(dayTable, dateProfile, dateEnv);
        var timeGrid = this.timeGrid;
        timeGrid.receiveContext(context); // hack because context is used in sliceProps
        timeGrid.receiveProps(__assign({}, this.slicer.sliceProps(props, dateProfile, null, context.calendar, timeGrid, dayRanges), { dateProfile: dateProfile, cells: dayTable.cells[0] }), context);
    };
    SimpleTimeGrid.prototype.renderNowIndicator = function (date) {
        this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(date, this.timeGrid, this.dayRanges), date);
    };
    SimpleTimeGrid.prototype.buildPositionCaches = function () {
        this.timeGrid.buildPositionCaches();
    };
    SimpleTimeGrid.prototype.queryHit = function (positionLeft, positionTop) {
        var rawHit = this.timeGrid.positionToHit(positionLeft, positionTop);
        if (rawHit) {
            return {
                component: this.timeGrid,
                dateSpan: rawHit.dateSpan,
                dayEl: rawHit.dayEl,
                rect: {
                    left: rawHit.relativeRect.left,
                    right: rawHit.relativeRect.right,
                    top: rawHit.relativeRect.top,
                    bottom: rawHit.relativeRect.bottom
                },
                layer: 0
            };
        }
    };
    return SimpleTimeGrid;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));
function buildDayRanges(dayTable, dateProfile, dateEnv) {
    var ranges = [];
    for (var _i = 0, _a = dayTable.headerDates; _i < _a.length; _i++) {
        var date = _a[_i];
        ranges.push({
            start: dateEnv.add(date, dateProfile.minTime),
            end: dateEnv.add(date, dateProfile.maxTime)
        });
    }
    return ranges;
}
var TimeGridSlicer = /** @class */ (function (_super) {
    __extends(TimeGridSlicer, _super);
    function TimeGridSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeGridSlicer.prototype.sliceRange = function (range, dayRanges) {
        var segs = [];
        for (var col = 0; col < dayRanges.length; col++) {
            var segRange = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRanges"])(range, dayRanges[col]);
            if (segRange) {
                segs.push({
                    start: segRange.start,
                    end: segRange.end,
                    isStart: segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: segRange.end.valueOf() === range.end.valueOf(),
                    col: col
                });
            }
        }
        return segs;
    };
    return TimeGridSlicer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Slicer"]));

var TimeGridView = /** @class */ (function (_super) {
    __extends(TimeGridView, _super);
    function TimeGridView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayTable = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildDayTable);
        return _this;
    }
    TimeGridView.prototype.render = function (props, context) {
        _super.prototype.render.call(this, props, context); // for flags for updateSize. also _renderSkeleton/_unrenderSkeleton
        var _a = this.props, dateProfile = _a.dateProfile, dateProfileGenerator = _a.dateProfileGenerator;
        var nextDayThreshold = context.nextDayThreshold;
        var dayTable = this.buildDayTable(dateProfile, dateProfileGenerator);
        var splitProps = this.splitter.splitProps(props);
        if (this.header) {
            this.header.receiveProps({
                dateProfile: dateProfile,
                dates: dayTable.headerDates,
                datesRepDistinctDays: true,
                renderIntroHtml: this.renderHeadIntroHtml
            }, context);
        }
        this.simpleTimeGrid.receiveProps(__assign({}, splitProps['timed'], { dateProfile: dateProfile,
            dayTable: dayTable }), context);
        if (this.simpleDayGrid) {
            this.simpleDayGrid.receiveProps(__assign({}, splitProps['allDay'], { dateProfile: dateProfile,
                dayTable: dayTable,
                nextDayThreshold: nextDayThreshold, isRigid: false }), context);
        }
        this.startNowIndicator(dateProfile, dateProfileGenerator);
    };
    TimeGridView.prototype._renderSkeleton = function (context) {
        _super.prototype._renderSkeleton.call(this, context);
        if (context.options.columnHeader) {
            this.header = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayHeader"](this.el.querySelector('.fc-head-container'));
        }
        this.simpleTimeGrid = new SimpleTimeGrid(this.timeGrid);
        if (this.dayGrid) {
            this.simpleDayGrid = new _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["SimpleDayGrid"](this.dayGrid);
        }
    };
    TimeGridView.prototype._unrenderSkeleton = function () {
        _super.prototype._unrenderSkeleton.call(this);
        if (this.header) {
            this.header.destroy();
        }
        this.simpleTimeGrid.destroy();
        if (this.simpleDayGrid) {
            this.simpleDayGrid.destroy();
        }
    };
    TimeGridView.prototype.renderNowIndicator = function (date) {
        this.simpleTimeGrid.renderNowIndicator(date);
    };
    return TimeGridView;
}(AbstractTimeGridView));
function buildDayTable(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DaySeries"](dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayTable"](daySeries, false);
}

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    defaultView: 'timeGridWeek',
    views: {
        timeGrid: {
            class: TimeGridView,
            allDaySlot: true,
            slotDuration: '00:30:00',
            slotEventOverlap: true // a bad name. confused with overlap/constraint system
        },
        timeGridDay: {
            type: 'timeGrid',
            duration: { days: 1 }
        },
        timeGridWeek: {
            type: 'timeGrid',
            duration: { weeks: 1 }
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "qv4X":
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/timeline/main.esm.js ***!
  \*********************************************************/
/*! exports provided: default, HeaderBodyLayout, ScrollJoiner, StickyScroller, TimeAxis, TimelineLane, TimelineView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBodyLayout", function() { return HeaderBodyLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollJoiner", function() { return ScrollJoiner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyScroller", function() { return StickyScroller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAxis", function() { return TimeAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineLane", function() { return TimelineLane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineView", function() { return TimelineView; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "SZB9");
/*!
FullCalendar Timeline Plugin v4.4.2
Docs & License: https://fullcalendar.io/scheduler
(c) 2019 Adam Shaw
*/



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/*
A rectangular area of content that lives within a Scroller.
Can have "gutters", areas of dead spacing around the perimeter.
Also very useful for forcing a width, which a Scroller cannot do alone.
Has a content area that lives above a background area.
*/
var ScrollerCanvas = /** @class */ (function () {
    function ScrollerCanvas() {
        this.gutters = {};
        this.el = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])("<div class=\"fc-scroller-canvas\"> <div class=\"fc-content\"></div> <div class=\"fc-bg\"></div> </div>");
        this.contentEl = this.el.querySelector('.fc-content');
        this.bgEl = this.el.querySelector('.fc-bg');
    }
    /*
    If falsy, resets all the gutters to 0
    */
    ScrollerCanvas.prototype.setGutters = function (gutters) {
        if (!gutters) {
            this.gutters = {};
        }
        else {
            __assign(this.gutters, gutters);
        }
        this.updateSize();
    };
    ScrollerCanvas.prototype.setWidth = function (width) {
        this.width = width;
        this.updateSize();
    };
    ScrollerCanvas.prototype.setMinWidth = function (minWidth) {
        this.minWidth = minWidth;
        this.updateSize();
    };
    ScrollerCanvas.prototype.clearWidth = function () {
        this.width = null;
        this.minWidth = null;
        this.updateSize();
    };
    ScrollerCanvas.prototype.updateSize = function () {
        var _a = this, gutters = _a.gutters, el = _a.el;
        // is border-box (width includes padding)
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["forceClassName"])(el, 'fc-gutter-left', gutters.left);
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["forceClassName"])(el, 'fc-gutter-right', gutters.right);
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["forceClassName"])(el, 'fc-gutter-top', gutters.top);
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["forceClassName"])(el, 'fc-gutter-bottom', gutters.bottom);
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(el, {
            paddingLeft: gutters.left || '',
            paddingRight: gutters.right || '',
            paddingTop: gutters.top || '',
            paddingBottom: gutters.bottom || '',
            width: (this.width != null) ?
                this.width + (gutters.left || 0) + (gutters.right || 0) :
                '',
            minWidth: (this.minWidth != null) ?
                this.minWidth + (gutters.left || 0) + (gutters.right || 0) :
                ''
        });
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(this.bgEl, {
            left: gutters.left || '',
            right: gutters.right || '',
            top: gutters.top || '',
            bottom: gutters.bottom || ''
        });
    };
    return ScrollerCanvas;
}());

var EnhancedScroller = /** @class */ (function (_super) {
    __extends(EnhancedScroller, _super);
    function EnhancedScroller(overflowX, overflowY) {
        var _this = _super.call(this, overflowX, overflowY) || this;
        // Scroll Events
        // ----------------------------------------------------------------------------------------------
        _this.reportScroll = function () {
            if (!_this.isScrolling) {
                _this.reportScrollStart();
            }
            _this.trigger('scroll');
            _this.isMoving = true;
            _this.requestMovingEnd();
        };
        _this.reportScrollStart = function () {
            if (!_this.isScrolling) {
                _this.isScrolling = true;
                _this.trigger('scrollStart', _this.isTouching); // created in constructor
            }
        };
        // Touch Events
        // ----------------------------------------------------------------------------------------------
        // will fire *before* the scroll event is fired
        _this.reportTouchStart = function () {
            _this.isTouching = true;
        };
        _this.reportTouchEnd = function () {
            if (_this.isTouching) {
                _this.isTouching = false;
                // if touch scrolling was re-enabled during a recent touch scroll
                // then unbind the handlers that are preventing it from happening.
                if (_this.isTouchScrollEnabled) {
                    _this.unbindPreventTouchScroll(); // won't do anything if not bound
                }
                // if the user ended their touch, and the scroll area wasn't moving,
                // we consider this to be the end of the scroll.
                if (!_this.isMoving) {
                    _this.reportScrollEnd(); // won't fire if already ended
                }
            }
        };
        _this.isScrolling = false;
        _this.isTouching = false;
        _this.isMoving = false;
        _this.isTouchScrollEnabled = true;
        _this.requestMovingEnd = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["debounce"])(_this.reportMovingEnd, 500);
        _this.canvas = new ScrollerCanvas();
        _this.el.appendChild(_this.canvas.el);
        _this.applyOverflow();
        _this.bindHandlers();
        return _this;
    }
    EnhancedScroller.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.unbindHandlers();
    };
    // Touch scroll prevention
    // ----------------------------------------------------------------------------------------------
    EnhancedScroller.prototype.disableTouchScroll = function () {
        this.isTouchScrollEnabled = false;
        this.bindPreventTouchScroll(); // will be unbound in enableTouchScroll or reportTouchEnd
    };
    EnhancedScroller.prototype.enableTouchScroll = function () {
        this.isTouchScrollEnabled = true;
        // only immediately unbind if a touch event is NOT in progress.
        // otherwise, it will be handled by reportTouchEnd.
        if (!this.isTouching) {
            this.unbindPreventTouchScroll();
        }
    };
    EnhancedScroller.prototype.bindPreventTouchScroll = function () {
        if (!this.preventTouchScrollHandler) {
            this.el.addEventListener('touchmove', (this.preventTouchScrollHandler = _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["preventDefault"]));
        }
    };
    EnhancedScroller.prototype.unbindPreventTouchScroll = function () {
        if (this.preventTouchScrollHandler) {
            this.el.removeEventListener('touchmove', this.preventTouchScrollHandler);
            this.preventTouchScrollHandler = null;
        }
    };
    // Handlers
    // ----------------------------------------------------------------------------------------------
    EnhancedScroller.prototype.bindHandlers = function () {
        this.el.addEventListener('scroll', this.reportScroll);
        this.el.addEventListener('touchstart', this.reportTouchStart, { passive: true });
        this.el.addEventListener('touchend', this.reportTouchEnd);
    };
    EnhancedScroller.prototype.unbindHandlers = function () {
        this.el.removeEventListener('scroll', this.reportScroll);
        this.el.removeEventListener('touchstart', this.reportTouchStart, { passive: true });
        this.el.removeEventListener('touchend', this.reportTouchEnd);
    };
    EnhancedScroller.prototype.reportMovingEnd = function () {
        this.isMoving = false;
        // only end the scroll if not currently touching.
        // if touching, the scrolling will end later, on touchend.
        if (!this.isTouching) {
            this.reportScrollEnd();
        }
    };
    EnhancedScroller.prototype.reportScrollEnd = function () {
        if (this.isScrolling) {
            this.trigger('scrollEnd');
            this.isScrolling = false;
        }
    };
    // Horizontal Scroll Normalization
    // ----------------------------------------------------------------------------------------------
    // http://stackoverflow.com/questions/24276619/better-way-to-get-the-viewport-of-a-scrollable-div-in-rtl-mode/24394376#24394376
    // TODO: move all this to util functions
    /*
    If RTL, and scrolled to the left, returns NEGATIVE value (like Firefox)
    */
    EnhancedScroller.prototype.getScrollLeft = function () {
        var el = this.el;
        var direction = window.getComputedStyle(el).direction;
        var val = el.scrollLeft;
        if (direction === 'rtl') {
            switch (getRtlScrollSystem()) {
                case 'positive':
                    val = (val + el.clientWidth) - el.scrollWidth;
                    break;
                case 'reverse':
                    val = -val;
                    break;
            }
        }
        return val;
    };
    /*
    Accepts a NEGATIVE value for when scrolled in RTL
    */
    EnhancedScroller.prototype.setScrollLeft = function (val) {
        var el = this.el;
        var direction = window.getComputedStyle(el).direction;
        if (direction === 'rtl') {
            switch (getRtlScrollSystem()) {
                case 'positive':
                    val = (val - el.clientWidth) + el.scrollWidth;
                    break;
                case 'reverse':
                    val = -val;
                    break;
            }
        }
        el.scrollLeft = val;
    };
    /*
    Always returns the number of pixels scrolled from the leftmost position (even if RTL).
    Always positive.
    */
    EnhancedScroller.prototype.getScrollFromLeft = function () {
        var el = this.el;
        var direction = window.getComputedStyle(el).direction;
        var val = el.scrollLeft;
        if (direction === 'rtl') {
            switch (getRtlScrollSystem()) {
                case 'negative':
                    val = (val - el.clientWidth) + el.scrollWidth;
                    break;
                case 'reverse':
                    val = (-val - el.clientWidth) + el.scrollWidth;
                    break;
            }
        }
        return val;
    };
    return EnhancedScroller;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollComponent"]));
_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EmitterMixin"].mixInto(EnhancedScroller);
// Horizontal Scroll System Detection
// ----------------------------------------------------------------------------------------------
var _rtlScrollSystem;
function getRtlScrollSystem() {
    return _rtlScrollSystem || (_rtlScrollSystem = detectRtlScrollSystem());
}
function detectRtlScrollSystem() {
    var el = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])("<div style=\" position: absolute; top: -1000px; width: 1px; height: 1px; overflow: scroll; direction: rtl; font-size: 100px; \">A</div>");
    document.body.appendChild(el);
    var system;
    if (el.scrollLeft > 0) {
        system = 'positive';
    }
    else {
        el.scrollLeft = 1;
        if (el.scrollLeft > 0) {
            system = 'reverse';
        }
        else {
            system = 'negative';
        }
    }
    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(el);
    return system;
}

/*
A Scroller, but with a wrapping div that allows "clipping" away of native scrollbars,
giving the appearance that there are no scrollbars.
*/
var ClippedScroller = /** @class */ (function () {
    /*
    Received overflows can be set to 'clipped', meaning scrollbars shouldn't be visible
    to the user, but the area should still scroll.
    */
    function ClippedScroller(overflowX, overflowY, parentEl) {
        this.isHScrollbarsClipped = false;
        this.isVScrollbarsClipped = false;
        if (overflowX === 'clipped-scroll') {
            overflowX = 'scroll';
            this.isHScrollbarsClipped = true;
        }
        if (overflowY === 'clipped-scroll') {
            overflowY = 'scroll';
            this.isVScrollbarsClipped = true;
        }
        this.enhancedScroll = new EnhancedScroller(overflowX, overflowY);
        parentEl.appendChild(this.el = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
            className: 'fc-scroller-clip'
        }));
        this.el.appendChild(this.enhancedScroll.el);
    }
    ClippedScroller.prototype.destroy = function () {
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.el);
    };
    ClippedScroller.prototype.updateSize = function () {
        var enhancedScroll = this.enhancedScroll;
        var scrollEl = enhancedScroll.el;
        var edges = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEdges"])(scrollEl);
        var cssProps = { marginLeft: 0, marginRight: 0, marginTop: 0, marginBottom: 0 };
        // give the inner scrolling div negative margins so that its scrollbars
        // are nudged outside of the bounding box of the wrapper, which is overflow:hidden
        if (this.isVScrollbarsClipped) {
            cssProps.marginLeft = -edges.scrollbarLeft;
            cssProps.marginRight = -edges.scrollbarRight;
        }
        if (this.isHScrollbarsClipped) {
            cssProps.marginBottom = -edges.scrollbarBottom;
        }
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(scrollEl, cssProps);
        // if we are attempting to hide the scrollbars offscreen, OSX/iOS will still
        // display the floating scrollbars. attach a className to force-hide them.
        if ((this.isHScrollbarsClipped || (enhancedScroll.overflowX === 'hidden')) && // should never show?
            (this.isVScrollbarsClipped || (enhancedScroll.overflowY === 'hidden')) && // should never show?
            !( // doesn't have any scrollbar mass
            edges.scrollbarLeft ||
                edges.scrollbarRight ||
                edges.scrollbarBottom)) {
            scrollEl.classList.add('fc-no-scrollbars');
        }
        else {
            scrollEl.classList.remove('fc-no-scrollbars');
        }
    };
    ClippedScroller.prototype.setHeight = function (height) {
        this.enhancedScroll.setHeight(height);
    };
    /*
    Accounts for 'clipped' scrollbars
    */
    ClippedScroller.prototype.getScrollbarWidths = function () {
        var widths = this.enhancedScroll.getScrollbarWidths();
        if (this.isVScrollbarsClipped) {
            widths.left = 0;
            widths.right = 0;
        }
        if (this.isHScrollbarsClipped) {
            widths.bottom = 0;
        }
        return widths;
    };
    return ClippedScroller;
}());

var ScrollJoiner = /** @class */ (function () {
    function ScrollJoiner(axis, scrollers) {
        this.axis = axis;
        this.scrollers = scrollers;
        for (var _i = 0, _a = this.scrollers; _i < _a.length; _i++) {
            var scroller = _a[_i];
            this.initScroller(scroller);
        }
    }
    ScrollJoiner.prototype.initScroller = function (scroller) {
        var _this = this;
        var enhancedScroll = scroller.enhancedScroll;
        // when the user scrolls via mousewheel, we know for sure the target
        // scroller should be the master. capture the various x-browser events that fire.
        var onScroll = function () {
            _this.assignMasterScroller(scroller);
        };
        'wheel mousewheel DomMouseScroll MozMousePixelScroll'.split(' ').forEach(function (evName) {
            enhancedScroll.el.addEventListener(evName, onScroll);
        });
        enhancedScroll
            .on('scrollStart', function () {
            if (!_this.masterScroller) {
                _this.assignMasterScroller(scroller);
            }
        })
            .on('scroll', function () {
            if (scroller === _this.masterScroller) {
                for (var _i = 0, _a = _this.scrollers; _i < _a.length; _i++) {
                    var otherScroller = _a[_i];
                    if (otherScroller !== scroller) {
                        switch (_this.axis) {
                            case 'horizontal':
                                otherScroller.enhancedScroll.el.scrollLeft = enhancedScroll.el.scrollLeft;
                                break;
                            case 'vertical':
                                otherScroller.enhancedScroll.setScrollTop(enhancedScroll.getScrollTop());
                                break;
                        }
                    }
                }
            }
        })
            .on('scrollEnd', function () {
            if (scroller === _this.masterScroller) {
                _this.unassignMasterScroller();
            }
        });
    };
    ScrollJoiner.prototype.assignMasterScroller = function (scroller) {
        this.unassignMasterScroller();
        this.masterScroller = scroller;
        for (var _i = 0, _a = this.scrollers; _i < _a.length; _i++) {
            var otherScroller = _a[_i];
            if (otherScroller !== scroller) {
                otherScroller.enhancedScroll.disableTouchScroll();
            }
        }
    };
    ScrollJoiner.prototype.unassignMasterScroller = function () {
        if (this.masterScroller) {
            for (var _i = 0, _a = this.scrollers; _i < _a.length; _i++) {
                var otherScroller = _a[_i];
                otherScroller.enhancedScroll.enableTouchScroll();
            }
            this.masterScroller = null;
        }
    };
    ScrollJoiner.prototype.update = function () {
        var allWidths = this.scrollers.map(function (scroller) { return scroller.getScrollbarWidths(); });
        var maxLeft = 0;
        var maxRight = 0;
        var maxTop = 0;
        var maxBottom = 0;
        var widths;
        var i;
        for (var _i = 0, allWidths_1 = allWidths; _i < allWidths_1.length; _i++) {
            widths = allWidths_1[_i];
            maxLeft = Math.max(maxLeft, widths.left);
            maxRight = Math.max(maxRight, widths.right);
            maxTop = Math.max(maxTop, widths.top);
            maxBottom = Math.max(maxBottom, widths.bottom);
        }
        for (i = 0; i < this.scrollers.length; i++) {
            var scroller = this.scrollers[i];
            widths = allWidths[i];
            scroller.enhancedScroll.canvas.setGutters(this.axis === 'horizontal' ?
                {
                    left: maxLeft - widths.left,
                    right: maxRight - widths.right
                } :
                {
                    top: maxTop - widths.top,
                    bottom: maxBottom - widths.bottom
                });
        }
    };
    return ScrollJoiner;
}());

var HeaderBodyLayout = /** @class */ (function () {
    /*
    verticalScroll = 'auto' | 'clipped-scroll'
    */
    function HeaderBodyLayout(headerContainerEl, bodyContainerEl, verticalScroll) {
        this.headerScroller = new ClippedScroller('clipped-scroll', 'hidden', headerContainerEl);
        this.bodyScroller = new ClippedScroller('auto', verticalScroll, bodyContainerEl);
        this.scrollJoiner = new ScrollJoiner('horizontal', [
            this.headerScroller,
            this.bodyScroller
        ]);
    }
    HeaderBodyLayout.prototype.destroy = function () {
        this.headerScroller.destroy();
        this.bodyScroller.destroy();
    };
    HeaderBodyLayout.prototype.setHeight = function (totalHeight, isAuto) {
        var bodyHeight;
        if (isAuto) {
            bodyHeight = 'auto';
        }
        else {
            bodyHeight = totalHeight - this.queryHeadHeight();
        }
        this.bodyScroller.setHeight(bodyHeight);
        this.headerScroller.updateSize(); // adjusts gutters and classNames
        this.bodyScroller.updateSize(); // adjusts gutters and classNames
        this.scrollJoiner.update();
    };
    HeaderBodyLayout.prototype.queryHeadHeight = function () {
        return this.headerScroller.enhancedScroll.canvas.contentEl.getBoundingClientRect().height;
    };
    return HeaderBodyLayout;
}());

var TimelineHeader = /** @class */ (function (_super) {
    __extends(TimelineHeader, _super);
    function TimelineHeader(parentEl) {
        var _this = _super.call(this) || this;
        _this.parentEl = parentEl;
        return _this;
    }
    TimelineHeader.prototype.firstContext = function (context) {
        this.parentEl.appendChild(this.tableEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('table', {
            className: context.theme.getClass('tableGrid')
        }));
    };
    TimelineHeader.prototype.destroy = function () {
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.tableEl);
        _super.prototype.destroy.call(this);
    };
    TimelineHeader.prototype.render = function (props) {
        this.renderDates(props.tDateProfile);
    };
    TimelineHeader.prototype.renderDates = function (tDateProfile) {
        var _a = this.context, dateEnv = _a.dateEnv, theme = _a.theme;
        var cellRows = tDateProfile.cellRows;
        var lastRow = cellRows[cellRows.length - 1];
        var isChrono = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(tDateProfile.labelInterval) > Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(tDateProfile.slotDuration);
        var oneDay = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isSingleDay"])(tDateProfile.slotDuration);
        var html = '<colgroup>';
        // needs to be a col for each body slat. header cells will have colspans
        for (var i = tDateProfile.slotCnt - 1; i >= 0; i--) {
            html += '<col/>';
        }
        html += '</colgroup>';
        html += '<tbody>';
        for (var _i = 0, cellRows_1 = cellRows; _i < cellRows_1.length; _i++) {
            var rowCells = cellRows_1[_i];
            var isLast = rowCells === lastRow;
            html += '<tr' + (isChrono && isLast ? ' class="fc-chrono"' : '') + '>';
            for (var _b = 0, rowCells_1 = rowCells; _b < rowCells_1.length; _b++) {
                var cell = rowCells_1[_b];
                var headerCellClassNames = [theme.getClass('widgetHeader')];
                if (cell.isWeekStart) {
                    headerCellClassNames.push('fc-em-cell');
                }
                if (oneDay) {
                    headerCellClassNames = headerCellClassNames.concat(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getDayClasses"])(cell.date, this.props.dateProfile, this.context, true) // adds "today" class and other day-based classes
                    );
                }
                html +=
                    '<th class="' + headerCellClassNames.join(' ') + '"' +
                        ' data-date="' + dateEnv.formatIso(cell.date, { omitTime: !tDateProfile.isTimeScale, omitTimeZoneOffset: true }) + '"' +
                        (cell.colspan > 1 ? ' colspan="' + cell.colspan + '"' : '') +
                        '>' +
                        '<div class="fc-cell-content">' +
                        cell.spanHtml +
                        '</div>' +
                        '</th>';
            }
            html += '</tr>';
        }
        html += '</tbody>';
        this.tableEl.innerHTML = html; // TODO: does this work cross-browser?
        this.slatColEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.tableEl, 'col');
        this.innerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.tableEl.querySelector('tr:last-child'), // compound selector won't work because of query-root problem
        'th .fc-cell-text');
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.tableEl.querySelectorAll('tr:not(:last-child)'), // compound selector won't work because of query-root problem
        'th .fc-cell-text').forEach(function (innerEl) {
            innerEl.classList.add('fc-sticky');
        });
    };
    return TimelineHeader;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var TimelineSlats = /** @class */ (function (_super) {
    __extends(TimelineSlats, _super);
    function TimelineSlats(parentEl) {
        var _this = _super.call(this) || this;
        parentEl.appendChild(_this.el = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-slats' }));
        return _this;
    }
    TimelineSlats.prototype.destroy = function () {
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.el);
        _super.prototype.destroy.call(this);
    };
    TimelineSlats.prototype.render = function (props) {
        this.renderDates(props.tDateProfile);
    };
    TimelineSlats.prototype.renderDates = function (tDateProfile) {
        var _a = this.context, calendar = _a.calendar, view = _a.view, theme = _a.theme, dateEnv = _a.dateEnv;
        var slotDates = tDateProfile.slotDates, isWeekStarts = tDateProfile.isWeekStarts;
        var html = '<table class="' + theme.getClass('tableGrid') + '">' +
            '<colgroup>';
        for (var i = 0; i < slotDates.length; i++) {
            html += '<col/>';
        }
        html += '</colgroup>';
        html += '<tbody><tr>';
        for (var i = 0; i < slotDates.length; i++) {
            html += this.slatCellHtml(slotDates[i], isWeekStarts[i], tDateProfile);
        }
        html += '</tr></tbody></table>';
        this.el.innerHTML = html;
        this.slatColEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, 'col');
        this.slatEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, 'td');
        for (var i = 0; i < slotDates.length; i++) {
            calendar.publiclyTrigger('dayRender', [
                {
                    date: dateEnv.toDate(slotDates[i]),
                    el: this.slatEls[i],
                    view: view
                }
            ]);
        }
        this.outerCoordCache = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.slatEls, true, // isHorizontal
        false // isVertical
        );
        // for the inner divs within the slats
        // used for event rendering and scrollTime, to disregard slat border
        this.innerCoordCache = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findChildren"])(this.slatEls, 'div'), true, // isHorizontal
        false // isVertical
        );
    };
    TimelineSlats.prototype.slatCellHtml = function (date, isEm, tDateProfile) {
        var _a = this.context, theme = _a.theme, dateEnv = _a.dateEnv;
        var classes;
        if (tDateProfile.isTimeScale) {
            classes = [];
            classes.push(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isInt"])(dateEnv.countDurationsBetween(tDateProfile.normalizedRange.start, date, tDateProfile.labelInterval)) ?
                'fc-major' :
                'fc-minor');
        }
        else {
            classes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getDayClasses"])(date, this.props.dateProfile, this.context);
            classes.push('fc-day');
        }
        classes.unshift(theme.getClass('widgetContent'));
        if (isEm) {
            classes.push('fc-em-cell');
        }
        return '<td class="' + classes.join(' ') + '"' +
            ' data-date="' + dateEnv.formatIso(date, { omitTime: !tDateProfile.isTimeScale, omitTimeZoneOffset: true }) + '"' +
            '><div></div></td>';
    };
    TimelineSlats.prototype.updateSize = function () {
        this.outerCoordCache.build();
        this.innerCoordCache.build();
    };
    TimelineSlats.prototype.positionToHit = function (leftPosition) {
        var outerCoordCache = this.outerCoordCache;
        var _a = this.context, dateEnv = _a.dateEnv, isRtl = _a.isRtl;
        var tDateProfile = this.props.tDateProfile;
        var slatIndex = outerCoordCache.leftToIndex(leftPosition);
        if (slatIndex != null) {
            // somewhat similar to what TimeGrid does. consolidate?
            var slatWidth = outerCoordCache.getWidth(slatIndex);
            var partial = isRtl ?
                (outerCoordCache.rights[slatIndex] - leftPosition) / slatWidth :
                (leftPosition - outerCoordCache.lefts[slatIndex]) / slatWidth;
            var localSnapIndex = Math.floor(partial * tDateProfile.snapsPerSlot);
            var start = dateEnv.add(tDateProfile.slotDates[slatIndex], Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["multiplyDuration"])(tDateProfile.snapDuration, localSnapIndex));
            var end = dateEnv.add(start, tDateProfile.snapDuration);
            return {
                dateSpan: {
                    range: { start: start, end: end },
                    allDay: !this.props.tDateProfile.isTimeScale
                },
                dayEl: this.slatColEls[slatIndex],
                left: outerCoordCache.lefts[slatIndex],
                right: outerCoordCache.rights[slatIndex]
            };
        }
        return null;
    };
    return TimelineSlats;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var MIN_AUTO_LABELS = 18; // more than `12` months but less that `24` hours
var MAX_AUTO_SLOTS_PER_LABEL = 6; // allows 6 10-min slots in an hour
var MAX_AUTO_CELLS = 200; // allows 4-days to have a :30 slot duration
_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].MAX_TIMELINE_SLOTS = 1000;
// potential nice values for slot-duration and interval-duration
var STOCK_SUB_DURATIONS = [
    { years: 1 },
    { months: 1 },
    { days: 1 },
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { minutes: 10 },
    { minutes: 5 },
    { minutes: 1 },
    { seconds: 30 },
    { seconds: 15 },
    { seconds: 10 },
    { seconds: 5 },
    { seconds: 1 },
    { milliseconds: 500 },
    { milliseconds: 100 },
    { milliseconds: 10 },
    { milliseconds: 1 }
];
function buildTimelineDateProfile(dateProfile, dateEnv, allOptions, dateProfileGenerator) {
    var tDateProfile = {
        labelInterval: queryDurationOption(allOptions, 'slotLabelInterval'),
        slotDuration: queryDurationOption(allOptions, 'slotDuration')
    };
    validateLabelAndSlot(tDateProfile, dateProfile, dateEnv); // validate after computed grid duration
    ensureLabelInterval(tDateProfile, dateProfile, dateEnv);
    ensureSlotDuration(tDateProfile, dateProfile, dateEnv);
    var input = allOptions.slotLabelFormat;
    var rawFormats = Array.isArray(input) ?
        input
        : (input != null) ?
            [input]
            :
                computeHeaderFormats(tDateProfile, dateProfile, dateEnv, allOptions);
    tDateProfile.headerFormats = rawFormats.map(function (rawFormat) {
        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(rawFormat);
    });
    tDateProfile.isTimeScale = Boolean(tDateProfile.slotDuration.milliseconds);
    var largeUnit = null;
    if (!tDateProfile.isTimeScale) {
        var slotUnit = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["greatestDurationDenominator"])(tDateProfile.slotDuration).unit;
        if (/year|month|week/.test(slotUnit)) {
            largeUnit = slotUnit;
        }
    }
    tDateProfile.largeUnit = largeUnit;
    tDateProfile.emphasizeWeeks =
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isSingleDay"])(tDateProfile.slotDuration) &&
            currentRangeAs('weeks', dateProfile, dateEnv) >= 2 &&
            !allOptions.businessHours;
    /*
    console.log('label interval =', timelineView.labelInterval.humanize())
    console.log('slot duration =', timelineView.slotDuration.humanize())
    console.log('header formats =', timelineView.headerFormats)
    console.log('isTimeScale', timelineView.isTimeScale)
    console.log('largeUnit', timelineView.largeUnit)
    */
    var rawSnapDuration = allOptions.snapDuration;
    var snapDuration;
    var snapsPerSlot;
    if (rawSnapDuration) {
        snapDuration = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(rawSnapDuration);
        snapsPerSlot = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(tDateProfile.slotDuration, snapDuration);
        // ^ TODO: warning if not whole?
    }
    if (snapsPerSlot == null) {
        snapDuration = tDateProfile.slotDuration;
        snapsPerSlot = 1;
    }
    tDateProfile.snapDuration = snapDuration;
    tDateProfile.snapsPerSlot = snapsPerSlot;
    // more...
    var timeWindowMs = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(dateProfile.maxTime) - Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(dateProfile.minTime);
    // TODO: why not use normalizeRange!?
    var normalizedStart = normalizeDate(dateProfile.renderRange.start, tDateProfile, dateEnv);
    var normalizedEnd = normalizeDate(dateProfile.renderRange.end, tDateProfile, dateEnv);
    // apply minTime/maxTime
    // TODO: View should be responsible.
    if (tDateProfile.isTimeScale) {
        normalizedStart = dateEnv.add(normalizedStart, dateProfile.minTime);
        normalizedEnd = dateEnv.add(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(normalizedEnd, -1), dateProfile.maxTime);
    }
    tDateProfile.timeWindowMs = timeWindowMs;
    tDateProfile.normalizedRange = { start: normalizedStart, end: normalizedEnd };
    var slotDates = [];
    var date = normalizedStart;
    while (date < normalizedEnd) {
        if (isValidDate(date, tDateProfile, dateProfile, dateProfileGenerator)) {
            slotDates.push(date);
        }
        date = dateEnv.add(date, tDateProfile.slotDuration);
    }
    tDateProfile.slotDates = slotDates;
    // more...
    var snapIndex = -1;
    var snapDiff = 0; // index of the diff :(
    var snapDiffToIndex = [];
    var snapIndexToDiff = [];
    date = normalizedStart;
    while (date < normalizedEnd) {
        if (isValidDate(date, tDateProfile, dateProfile, dateProfileGenerator)) {
            snapIndex++;
            snapDiffToIndex.push(snapIndex);
            snapIndexToDiff.push(snapDiff);
        }
        else {
            snapDiffToIndex.push(snapIndex + 0.5);
        }
        date = dateEnv.add(date, tDateProfile.snapDuration);
        snapDiff++;
    }
    tDateProfile.snapDiffToIndex = snapDiffToIndex;
    tDateProfile.snapIndexToDiff = snapIndexToDiff;
    tDateProfile.snapCnt = snapIndex + 1; // is always one behind
    tDateProfile.slotCnt = tDateProfile.snapCnt / tDateProfile.snapsPerSlot;
    // more...
    tDateProfile.isWeekStarts = buildIsWeekStarts(tDateProfile, dateEnv);
    tDateProfile.cellRows = buildCellRows(tDateProfile, dateEnv, allOptions);
    return tDateProfile;
}
/*
snaps to appropriate unit
*/
function normalizeDate(date, tDateProfile, dateEnv) {
    var normalDate = date;
    if (!tDateProfile.isTimeScale) {
        normalDate = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(normalDate);
        if (tDateProfile.largeUnit) {
            normalDate = dateEnv.startOf(normalDate, tDateProfile.largeUnit);
        }
    }
    return normalDate;
}
/*
snaps to appropriate unit
*/
function normalizeRange(range, tDateProfile, dateEnv) {
    if (!tDateProfile.isTimeScale) {
        range = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeVisibleDayRange"])(range);
        if (tDateProfile.largeUnit) {
            var dayRange = range; // preserve original result
            range = {
                start: dateEnv.startOf(range.start, tDateProfile.largeUnit),
                end: dateEnv.startOf(range.end, tDateProfile.largeUnit)
            };
            // if date is partially through the interval, or is in the same interval as the start,
            // make the exclusive end be the *next* interval
            if (range.end.valueOf() !== dayRange.end.valueOf() || range.end <= range.start) {
                range = {
                    start: range.start,
                    end: dateEnv.add(range.end, tDateProfile.slotDuration)
                };
            }
        }
    }
    return range;
}
function isValidDate(date, tDateProfile, dateProfile, dateProfileGenerator) {
    if (dateProfileGenerator.isHiddenDay(date)) {
        return false;
    }
    else if (tDateProfile.isTimeScale) {
        // determine if the time is within minTime/maxTime, which may have wacky values
        var day = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(date);
        var timeMs = date.valueOf() - day.valueOf();
        var ms = timeMs - Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(dateProfile.minTime); // milliseconds since minTime
        ms = ((ms % 86400000) + 86400000) % 86400000; // make negative values wrap to 24hr clock
        return ms < tDateProfile.timeWindowMs; // before the maxTime?
    }
    else {
        return true;
    }
}
function queryDurationOption(allOptions, name) {
    var input = allOptions[name];
    if (input != null) {
        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(input);
    }
}
function validateLabelAndSlot(tDateProfile, dateProfile, dateEnv) {
    var currentRange = dateProfile.currentRange;
    // make sure labelInterval doesn't exceed the max number of cells
    if (tDateProfile.labelInterval) {
        var labelCnt = dateEnv.countDurationsBetween(currentRange.start, currentRange.end, tDateProfile.labelInterval);
        if (labelCnt > _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].MAX_TIMELINE_SLOTS) {
            console.warn('slotLabelInterval results in too many cells');
            tDateProfile.labelInterval = null;
        }
    }
    // make sure slotDuration doesn't exceed the maximum number of cells
    if (tDateProfile.slotDuration) {
        var slotCnt = dateEnv.countDurationsBetween(currentRange.start, currentRange.end, tDateProfile.slotDuration);
        if (slotCnt > _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].MAX_TIMELINE_SLOTS) {
            console.warn('slotDuration results in too many cells');
            tDateProfile.slotDuration = null;
        }
    }
    // make sure labelInterval is a multiple of slotDuration
    if (tDateProfile.labelInterval && tDateProfile.slotDuration) {
        var slotsPerLabel = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(tDateProfile.labelInterval, tDateProfile.slotDuration);
        if (slotsPerLabel === null || slotsPerLabel < 1) {
            console.warn('slotLabelInterval must be a multiple of slotDuration');
            tDateProfile.slotDuration = null;
        }
    }
}
function ensureLabelInterval(tDateProfile, dateProfile, dateEnv) {
    var currentRange = dateProfile.currentRange;
    var labelInterval = tDateProfile.labelInterval;
    if (!labelInterval) {
        // compute based off the slot duration
        // find the largest label interval with an acceptable slots-per-label
        var input = void 0;
        if (tDateProfile.slotDuration) {
            for (var _i = 0, STOCK_SUB_DURATIONS_1 = STOCK_SUB_DURATIONS; _i < STOCK_SUB_DURATIONS_1.length; _i++) {
                input = STOCK_SUB_DURATIONS_1[_i];
                var tryLabelInterval = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(input);
                var slotsPerLabel = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(tryLabelInterval, tDateProfile.slotDuration);
                if (slotsPerLabel !== null && slotsPerLabel <= MAX_AUTO_SLOTS_PER_LABEL) {
                    labelInterval = tryLabelInterval;
                    break;
                }
            }
            // use the slot duration as a last resort
            if (!labelInterval) {
                labelInterval = tDateProfile.slotDuration;
            }
            // compute based off the view's duration
            // find the largest label interval that yields the minimum number of labels
        }
        else {
            for (var _a = 0, STOCK_SUB_DURATIONS_2 = STOCK_SUB_DURATIONS; _a < STOCK_SUB_DURATIONS_2.length; _a++) {
                input = STOCK_SUB_DURATIONS_2[_a];
                labelInterval = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(input);
                var labelCnt = dateEnv.countDurationsBetween(currentRange.start, currentRange.end, labelInterval);
                if (labelCnt >= MIN_AUTO_LABELS) {
                    break;
                }
            }
        }
        tDateProfile.labelInterval = labelInterval;
    }
    return labelInterval;
}
function ensureSlotDuration(tDateProfile, dateProfile, dateEnv) {
    var currentRange = dateProfile.currentRange;
    var slotDuration = tDateProfile.slotDuration;
    if (!slotDuration) {
        var labelInterval = ensureLabelInterval(tDateProfile, dateProfile, dateEnv); // will compute if necessary
        // compute based off the label interval
        // find the largest slot duration that is different from labelInterval, but still acceptable
        for (var _i = 0, STOCK_SUB_DURATIONS_3 = STOCK_SUB_DURATIONS; _i < STOCK_SUB_DURATIONS_3.length; _i++) {
            var input = STOCK_SUB_DURATIONS_3[_i];
            var trySlotDuration = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(input);
            var slotsPerLabel = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(labelInterval, trySlotDuration);
            if (slotsPerLabel !== null && slotsPerLabel > 1 && slotsPerLabel <= MAX_AUTO_SLOTS_PER_LABEL) {
                slotDuration = trySlotDuration;
                break;
            }
        }
        // only allow the value if it won't exceed the view's # of slots limit
        if (slotDuration) {
            var slotCnt = dateEnv.countDurationsBetween(currentRange.start, currentRange.end, slotDuration);
            if (slotCnt > MAX_AUTO_CELLS) {
                slotDuration = null;
            }
        }
        // use the label interval as a last resort
        if (!slotDuration) {
            slotDuration = labelInterval;
        }
        tDateProfile.slotDuration = slotDuration;
    }
    return slotDuration;
}
function computeHeaderFormats(tDateProfile, dateProfile, dateEnv, allOptions) {
    var format1;
    var format2;
    var labelInterval = tDateProfile.labelInterval;
    var unit = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["greatestDurationDenominator"])(labelInterval).unit;
    var weekNumbersVisible = allOptions.weekNumbers;
    var format0 = (format1 = (format2 = null));
    // NOTE: weekNumber computation function wont work
    if ((unit === 'week') && !weekNumbersVisible) {
        unit = 'day';
    }
    switch (unit) {
        case 'year':
            format0 = { year: 'numeric' }; // '2015'
            break;
        case 'month':
            if (currentRangeAs('years', dateProfile, dateEnv) > 1) {
                format0 = { year: 'numeric' }; // '2015'
            }
            format1 = { month: 'short' }; // 'Jan'
            break;
        case 'week':
            if (currentRangeAs('years', dateProfile, dateEnv) > 1) {
                format0 = { year: 'numeric' }; // '2015'
            }
            format1 = { week: 'narrow' }; // 'Wk4'
            break;
        case 'day':
            if (currentRangeAs('years', dateProfile, dateEnv) > 1) {
                format0 = { year: 'numeric', month: 'long' }; // 'January 2014'
            }
            else if (currentRangeAs('months', dateProfile, dateEnv) > 1) {
                format0 = { month: 'long' }; // 'January'
            }
            if (weekNumbersVisible) {
                format1 = { week: 'short' }; // 'Wk 4'
            }
            format2 = { weekday: 'narrow', day: 'numeric' }; // 'Su 9'
            break;
        case 'hour':
            if (weekNumbersVisible) {
                format0 = { week: 'short' }; // 'Wk 4'
            }
            if (currentRangeAs('days', dateProfile, dateEnv) > 1) {
                format1 = { weekday: 'short', day: 'numeric', month: 'numeric', omitCommas: true }; // Sat 4/7
            }
            format2 = {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: true,
                meridiem: 'short'
            };
            break;
        case 'minute':
            // sufficiently large number of different minute cells?
            if ((Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMinutes"])(labelInterval) / 60) >= MAX_AUTO_SLOTS_PER_LABEL) {
                format0 = {
                    hour: 'numeric',
                    meridiem: 'short'
                };
                format1 = function (params) {
                    return ':' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["padStart"])(params.date.minute, 2); // ':30'
                };
            }
            else {
                format0 = {
                    hour: 'numeric',
                    minute: 'numeric',
                    meridiem: 'short'
                };
            }
            break;
        case 'second':
            // sufficiently large number of different second cells?
            if ((Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughSeconds"])(labelInterval) / 60) >= MAX_AUTO_SLOTS_PER_LABEL) {
                format0 = { hour: 'numeric', minute: '2-digit', meridiem: 'lowercase' }; // '8:30 PM'
                format1 = function (params) {
                    return ':' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["padStart"])(params.date.second, 2); // ':30'
                };
            }
            else {
                format0 = { hour: 'numeric', minute: '2-digit', second: '2-digit', meridiem: 'lowercase' }; // '8:30:45 PM'
            }
            break;
        case 'millisecond':
            format0 = { hour: 'numeric', minute: '2-digit', second: '2-digit', meridiem: 'lowercase' }; // '8:30:45 PM'
            format1 = function (params) {
                return '.' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["padStart"])(params.millisecond, 3);
            };
            break;
    }
    return [].concat(format0 || [], format1 || [], format2 || []);
}
// Compute the number of the give units in the "current" range.
// Won't go more precise than days.
// Will return `0` if there's not a clean whole interval.
function currentRangeAs(unit, dateProfile, dateEnv) {
    var range = dateProfile.currentRange;
    var res = null;
    if (unit === 'years') {
        res = dateEnv.diffWholeYears(range.start, range.end);
    }
    else if (unit === 'months') {
        res = dateEnv.diffWholeMonths(range.start, range.end);
    }
    else if (unit === 'weeks') {
        res = dateEnv.diffWholeMonths(range.start, range.end);
    }
    else if (unit === 'days') {
        res = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffWholeDays"])(range.start, range.end);
    }
    return res || 0;
}
function buildIsWeekStarts(tDateProfile, dateEnv) {
    var slotDates = tDateProfile.slotDates, emphasizeWeeks = tDateProfile.emphasizeWeeks;
    var prevWeekNumber = null;
    var isWeekStarts = [];
    for (var _i = 0, slotDates_1 = slotDates; _i < slotDates_1.length; _i++) {
        var slotDate = slotDates_1[_i];
        var weekNumber = dateEnv.computeWeekNumber(slotDate);
        var isWeekStart = emphasizeWeeks && (prevWeekNumber !== null) && (prevWeekNumber !== weekNumber);
        prevWeekNumber = weekNumber;
        isWeekStarts.push(isWeekStart);
    }
    return isWeekStarts;
}
function buildCellRows(tDateProfile, dateEnv, allOptions) {
    var slotDates = tDateProfile.slotDates;
    var formats = tDateProfile.headerFormats;
    var cellRows = formats.map(function (format) { return []; }); // indexed by row,col
    // specifically for navclicks
    var rowUnits = formats.map(function (format) {
        return format.getLargestUnit ? format.getLargestUnit() : null;
    });
    // builds cellRows and slotCells
    for (var i = 0; i < slotDates.length; i++) {
        var date = slotDates[i];
        var isWeekStart = tDateProfile.isWeekStarts[i];
        for (var row = 0; row < formats.length; row++) {
            var format = formats[row];
            var rowCells = cellRows[row];
            var leadingCell = rowCells[rowCells.length - 1];
            var isSuperRow = (formats.length > 1) && (row < (formats.length - 1)); // more than one row and not the last
            var newCell = null;
            if (isSuperRow) {
                var text = dateEnv.format(date, format);
                if (!leadingCell || (leadingCell.text !== text)) {
                    newCell = buildCellObject(date, text, rowUnits[row], allOptions, dateEnv);
                }
                else {
                    leadingCell.colspan += 1;
                }
            }
            else {
                if (!leadingCell ||
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isInt"])(dateEnv.countDurationsBetween(tDateProfile.normalizedRange.start, date, tDateProfile.labelInterval))) {
                    var text = dateEnv.format(date, format);
                    newCell = buildCellObject(date, text, rowUnits[row], allOptions, dateEnv);
                }
                else {
                    leadingCell.colspan += 1;
                }
            }
            if (newCell) {
                newCell.weekStart = isWeekStart;
                rowCells.push(newCell);
            }
        }
    }
    return cellRows;
}
function buildCellObject(date, text, rowUnit, allOptions, dateEnv) {
    var spanHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(allOptions, dateEnv, {
        date: date,
        type: rowUnit,
        forceOff: !rowUnit
    }, {
        'class': 'fc-cell-text'
    }, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(text));
    return { text: text, spanHtml: spanHtml, date: date, colspan: 1, isWeekStart: false };
}

var TimelineNowIndicator = /** @class */ (function () {
    function TimelineNowIndicator(headParent, bodyParent) {
        this.headParent = headParent;
        this.bodyParent = bodyParent;
    }
    TimelineNowIndicator.prototype.render = function (coord, isRtl) {
        var styleProps = isRtl ? { right: -coord } : { left: coord };
        this.headParent.appendChild(this.arrowEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
            className: 'fc-now-indicator fc-now-indicator-arrow',
            style: styleProps
        }));
        this.bodyParent.appendChild(this.lineEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
            className: 'fc-now-indicator fc-now-indicator-line',
            style: styleProps
        }));
    };
    TimelineNowIndicator.prototype.unrender = function () {
        if (this.arrowEl) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.arrowEl);
        }
        if (this.lineEl) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.lineEl);
        }
    };
    return TimelineNowIndicator;
}());

var STICKY_PROP_VAL = computeStickyPropVal(); // if null, means not supported at all
var IS_MS_EDGE = /Edge/.test(navigator.userAgent);
var IS_SAFARI = STICKY_PROP_VAL === '-webkit-sticky'; // good b/c doesn't confuse chrome
var STICKY_CLASSNAME = 'fc-sticky';
/*
useful beyond the native position:sticky for these reasons:
- support in IE11
- nice centering support
*/
var StickyScroller = /** @class */ (function () {
    function StickyScroller(scroller, isRtl, isVertical) {
        var _this = this;
        this.usingRelative = null;
        /*
        known bug: called twice on init. problem when mixing with ScrollJoiner
        */
        this.updateSize = function () {
            var els = Array.prototype.slice.call(_this.scroller.canvas.el.querySelectorAll('.' + STICKY_CLASSNAME));
            var elGeoms = _this.queryElGeoms(els);
            var viewportWidth = _this.scroller.el.clientWidth;
            if (_this.usingRelative) {
                var elDestinations = _this.computeElDestinations(elGeoms, viewportWidth); // read before prepPositioning
                assignRelativePositions(els, elGeoms, elDestinations);
            }
            else {
                assignStickyPositions(els, elGeoms, viewportWidth);
            }
        };
        this.scroller = scroller;
        this.usingRelative =
            !STICKY_PROP_VAL || // IE11
                (IS_MS_EDGE && isRtl) || // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/18883305/
                ((IS_MS_EDGE || IS_SAFARI) && isVertical); // because doesn't work with rowspan in tables, our only vertial use
        if (this.usingRelative) {
            scroller.on('scrollEnd', this.updateSize);
        }
    }
    StickyScroller.prototype.destroy = function () {
        this.scroller.off('scrollEnd', this.updateSize);
    };
    StickyScroller.prototype.queryElGeoms = function (els) {
        var canvasOrigin = this.scroller.canvas.el.getBoundingClientRect();
        var elGeoms = [];
        for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
            var el = els_1[_i];
            var parentBound = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["translateRect"])(el.parentNode.getBoundingClientRect(), -canvasOrigin.left, -canvasOrigin.top);
            var elRect = el.getBoundingClientRect();
            var computedStyles = window.getComputedStyle(el);
            var computedTextAlign = window.getComputedStyle(el.parentNode).textAlign; // ask the parent
            var intendedTextAlign = computedTextAlign;
            var naturalBound = null;
            if (computedStyles.position !== 'sticky') {
                naturalBound = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["translateRect"])(elRect, -canvasOrigin.left - (parseFloat(computedStyles.left) || 0), // could be 'auto'
                -canvasOrigin.top - (parseFloat(computedStyles.top) || 0));
            }
            if (el.hasAttribute('data-sticky-center')) {
                intendedTextAlign = 'center';
            }
            elGeoms.push({
                parentBound: parentBound,
                naturalBound: naturalBound,
                elWidth: elRect.width,
                elHeight: elRect.height,
                computedTextAlign: computedTextAlign,
                intendedTextAlign: intendedTextAlign
            });
        }
        return elGeoms;
    };
    StickyScroller.prototype.computeElDestinations = function (elGeoms, viewportWidth) {
        var viewportLeft = this.scroller.getScrollFromLeft();
        var viewportTop = this.scroller.getScrollTop();
        var viewportRight = viewportLeft + viewportWidth;
        return elGeoms.map(function (elGeom) {
            var elWidth = elGeom.elWidth, elHeight = elGeom.elHeight, parentBound = elGeom.parentBound, naturalBound = elGeom.naturalBound;
            var destLeft; // relative to canvas topleft
            var destTop; // "
            switch (elGeom.intendedTextAlign) {
                case 'left':
                    destLeft = viewportLeft;
                    break;
                case 'right':
                    destLeft = viewportRight - elWidth;
                    break;
                case 'center':
                    destLeft = (viewportLeft + viewportRight) / 2 - elWidth / 2;
                    break;
            }
            destLeft = Math.min(destLeft, parentBound.right - elWidth);
            destLeft = Math.max(destLeft, parentBound.left);
            destTop = viewportTop;
            destTop = Math.min(destTop, parentBound.bottom - elHeight);
            destTop = Math.max(destTop, naturalBound.top); // better to use natural top for upper bound
            return { left: destLeft, top: destTop };
        });
    };
    return StickyScroller;
}());
function assignRelativePositions(els, elGeoms, elDestinations) {
    els.forEach(function (el, i) {
        var naturalBound = elGeoms[i].naturalBound;
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(el, {
            position: 'relative',
            left: elDestinations[i].left - naturalBound.left,
            top: elDestinations[i].top - naturalBound.top
        });
    });
}
function assignStickyPositions(els, elGeoms, viewportWidth) {
    els.forEach(function (el, i) {
        var stickyLeft = 0;
        if (elGeoms[i].intendedTextAlign === 'center') {
            stickyLeft = (viewportWidth - elGeoms[i].elWidth) / 2;
            // needs to be forced to left?
            if (elGeoms[i].computedTextAlign === 'center') {
                el.setAttribute('data-sticky-center', '') // remember for next queryElGeoms
                ;
                el.parentNode.style.textAlign = 'left';
            }
        }
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(el, {
            position: STICKY_PROP_VAL,
            left: stickyLeft,
            right: 0,
            top: 0
        });
    });
}
function computeStickyPropVal() {
    var el = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div style="position:-webkit-sticky;position:sticky"></div>');
    var val = el.style.position;
    if (val.indexOf('sticky') !== -1) {
        return val;
    }
    else {
        return null;
    }
}

var TimeAxis = /** @class */ (function (_super) {
    __extends(TimeAxis, _super);
    function TimeAxis(headerContainerEl, bodyContainerEl) {
        var _this = _super.call(this) || this;
        _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton, _this._unrenderSkeleton);
        _this.layout = new HeaderBodyLayout(headerContainerEl, bodyContainerEl, 'auto');
        return _this;
    }
    TimeAxis.prototype.render = function (props, context) {
        var tDateProfile = this.tDateProfile =
            buildTimelineDateProfile(props.dateProfile, context.dateEnv, context.options, props.dateProfileGenerator); // TODO: cache
        this.renderSkeleton(context);
        this.header.receiveProps({
            dateProfile: props.dateProfile,
            tDateProfile: tDateProfile
        }, context);
        this.slats.receiveProps({
            dateProfile: props.dateProfile,
            tDateProfile: tDateProfile
        }, context);
    };
    TimeAxis.prototype.destroy = function () {
        this.renderSkeleton.unrender();
        this.layout.destroy();
        _super.prototype.destroy.call(this);
    };
    TimeAxis.prototype._renderSkeleton = function (context) {
        var layout = this.layout;
        var headerEnhancedScroller = layout.headerScroller.enhancedScroll;
        var bodyEnhancedScroller = layout.bodyScroller.enhancedScroll;
        // needs to go after layout, which has ScrollJoiner
        this.headStickyScroller = new StickyScroller(headerEnhancedScroller, context.isRtl, false); // isVertical=false
        this.bodyStickyScroller = new StickyScroller(bodyEnhancedScroller, context.isRtl, false); // isVertical=false
        this.header = new TimelineHeader(headerEnhancedScroller.canvas.contentEl);
        this.slats = new TimelineSlats(bodyEnhancedScroller.canvas.bgEl);
        this.nowIndicator = new TimelineNowIndicator(headerEnhancedScroller.canvas.el, bodyEnhancedScroller.canvas.el);
    };
    TimeAxis.prototype._unrenderSkeleton = function () {
        this.header.destroy();
        this.slats.destroy();
        this.nowIndicator.unrender();
        this.headStickyScroller.destroy();
        this.bodyStickyScroller.destroy();
    };
    // Now Indicator
    // ------------------------------------------------------------------------------------------
    TimeAxis.prototype.getNowIndicatorUnit = function (dateProfile, dateProfileGenerator) {
        var context = this.context;
        // yuck
        var tDateProfile = this.tDateProfile =
            buildTimelineDateProfile(dateProfile, context.dateEnv, context.options, dateProfileGenerator); // TODO: cache
        if (tDateProfile.isTimeScale) {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["greatestDurationDenominator"])(tDateProfile.slotDuration).unit;
        }
    };
    // will only execute if isTimeScale
    TimeAxis.prototype.renderNowIndicator = function (date) {
        if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangeContainsMarker"])(this.tDateProfile.normalizedRange, date)) {
            this.nowIndicator.render(this.dateToCoord(date), this.context.isRtl);
        }
    };
    // will only execute if isTimeScale
    TimeAxis.prototype.unrenderNowIndicator = function () {
        this.nowIndicator.unrender();
    };
    // Sizing
    // ------------------------------------------------------------------------------------------
    TimeAxis.prototype.updateSize = function (isResize, totalHeight, isAuto) {
        this.applySlotWidth(this.computeSlotWidth());
        // adjusts gutters. do after slot widths set
        this.layout.setHeight(totalHeight, isAuto);
        // pretty much just queries coords. do last
        this.slats.updateSize();
    };
    TimeAxis.prototype.updateStickyScrollers = function () {
        this.headStickyScroller.updateSize();
        this.bodyStickyScroller.updateSize();
    };
    TimeAxis.prototype.computeSlotWidth = function () {
        var slotWidth = this.context.options.slotWidth || '';
        if (slotWidth === '') {
            slotWidth = this.computeDefaultSlotWidth(this.tDateProfile);
        }
        return slotWidth;
    };
    TimeAxis.prototype.computeDefaultSlotWidth = function (tDateProfile) {
        var maxInnerWidth = 0; // TODO: harness core's `matchCellWidths` for this
        this.header.innerEls.forEach(function (innerEl, i) {
            maxInnerWidth = Math.max(maxInnerWidth, innerEl.getBoundingClientRect().width);
        });
        var headingCellWidth = Math.ceil(maxInnerWidth) + 1; // assume no padding, and one pixel border
        // in TimelineView.defaults we ensured that labelInterval is an interval of slotDuration
        // TODO: rename labelDuration?
        var slotsPerLabel = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(tDateProfile.labelInterval, tDateProfile.slotDuration);
        var slotWidth = Math.ceil(headingCellWidth / slotsPerLabel);
        var minWidth = window.getComputedStyle(this.header.slatColEls[0]).minWidth;
        if (minWidth) {
            minWidth = parseInt(minWidth, 10);
            if (minWidth) {
                slotWidth = Math.max(slotWidth, minWidth);
            }
        }
        return slotWidth;
    };
    TimeAxis.prototype.applySlotWidth = function (slotWidth) {
        var _a = this, layout = _a.layout, tDateProfile = _a.tDateProfile;
        var containerWidth = '';
        var containerMinWidth = '';
        var nonLastSlotWidth = '';
        if (slotWidth !== '') {
            slotWidth = Math.round(slotWidth);
            containerWidth = slotWidth * tDateProfile.slotDates.length;
            containerMinWidth = '';
            nonLastSlotWidth = slotWidth;
            var availableWidth = layout.bodyScroller.enhancedScroll.getClientWidth();
            if (availableWidth > containerWidth) {
                containerMinWidth = availableWidth;
                containerWidth = '';
                nonLastSlotWidth = Math.floor(availableWidth / tDateProfile.slotDates.length);
            }
        }
        layout.headerScroller.enhancedScroll.canvas.setWidth(containerWidth);
        layout.headerScroller.enhancedScroll.canvas.setMinWidth(containerMinWidth);
        layout.bodyScroller.enhancedScroll.canvas.setWidth(containerWidth);
        layout.bodyScroller.enhancedScroll.canvas.setMinWidth(containerMinWidth);
        if (nonLastSlotWidth !== '') {
            this.header.slatColEls.slice(0, -1).concat(this.slats.slatColEls.slice(0, -1)).forEach(function (el) {
                el.style.width = nonLastSlotWidth + 'px';
            });
        }
    };
    // returned value is between 0 and the number of snaps
    TimeAxis.prototype.computeDateSnapCoverage = function (date) {
        var tDateProfile = this.tDateProfile;
        var dateEnv = this.context.dateEnv;
        var snapDiff = dateEnv.countDurationsBetween(tDateProfile.normalizedRange.start, date, tDateProfile.snapDuration);
        if (snapDiff < 0) {
            return 0;
        }
        else if (snapDiff >= tDateProfile.snapDiffToIndex.length) {
            return tDateProfile.snapCnt;
        }
        else {
            var snapDiffInt = Math.floor(snapDiff);
            var snapCoverage = tDateProfile.snapDiffToIndex[snapDiffInt];
            if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isInt"])(snapCoverage)) { // not an in-between value
                snapCoverage += snapDiff - snapDiffInt; // add the remainder
            }
            else {
                // a fractional value, meaning the date is not visible
                // always round up in this case. works for start AND end dates in a range.
                snapCoverage = Math.ceil(snapCoverage);
            }
            return snapCoverage;
        }
    };
    // for LTR, results range from 0 to width of area
    // for RTL, results range from negative width of area to 0
    TimeAxis.prototype.dateToCoord = function (date) {
        var tDateProfile = this.tDateProfile;
        var snapCoverage = this.computeDateSnapCoverage(date);
        var slotCoverage = snapCoverage / tDateProfile.snapsPerSlot;
        var slotIndex = Math.floor(slotCoverage);
        slotIndex = Math.min(slotIndex, tDateProfile.slotCnt - 1);
        var partial = slotCoverage - slotIndex;
        var _a = this.slats, innerCoordCache = _a.innerCoordCache, outerCoordCache = _a.outerCoordCache;
        if (this.context.isRtl) {
            return (outerCoordCache.rights[slotIndex] -
                (innerCoordCache.getWidth(slotIndex) * partial)) - outerCoordCache.originClientRect.width;
        }
        else {
            return (outerCoordCache.lefts[slotIndex] +
                (innerCoordCache.getWidth(slotIndex) * partial));
        }
    };
    TimeAxis.prototype.rangeToCoords = function (range) {
        if (this.context.isRtl) {
            return { right: this.dateToCoord(range.start), left: this.dateToCoord(range.end) };
        }
        else {
            return { left: this.dateToCoord(range.start), right: this.dateToCoord(range.end) };
        }
    };
    // Scrolling
    // ------------------------------------------------------------------------------------------
    TimeAxis.prototype.computeDateScroll = function (duration) {
        var _a = this.context, dateEnv = _a.dateEnv, isRtl = _a.isRtl;
        var dateProfile = this.props.dateProfile;
        var left = 0;
        if (dateProfile) {
            left = this.dateToCoord(dateEnv.add(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(dateProfile.activeRange.start), // startOfDay needed?
            duration));
            // hack to overcome the left borders of non-first slat
            if (!isRtl && left) {
                left += 1;
            }
        }
        return { left: left };
    };
    TimeAxis.prototype.queryDateScroll = function () {
        var enhancedScroll = this.layout.bodyScroller.enhancedScroll;
        return {
            left: enhancedScroll.getScrollLeft()
        };
    };
    TimeAxis.prototype.applyDateScroll = function (scroll) {
        // TODO: lame we have to update both. use the scrolljoiner instead maybe
        this.layout.bodyScroller.enhancedScroll.setScrollLeft(scroll.left || 0);
        this.layout.headerScroller.enhancedScroll.setScrollLeft(scroll.left || 0);
    };
    return TimeAxis;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var TimelineLaneEventRenderer = /** @class */ (function (_super) {
    __extends(TimelineLaneEventRenderer, _super);
    function TimelineLaneEventRenderer(masterContainerEl, timeAxis) {
        var _this = _super.call(this) || this;
        _this.masterContainerEl = masterContainerEl;
        _this.timeAxis = timeAxis;
        return _this;
    }
    TimelineLaneEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
        var context = this.context;
        var eventRange = seg.eventRange;
        var eventDef = eventRange.def;
        var eventUi = eventRange.ui;
        var isDraggable = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventDraggable"])(context, eventDef, eventUi);
        var isResizableFromStart = seg.isStart && Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventStartResizable"])(context, eventDef, eventUi);
        var isResizableFromEnd = seg.isEnd && Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventEndResizable"])(context, eventDef, eventUi);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
        classes.unshift('fc-timeline-event', 'fc-h-event');
        var timeText = this.getTimeText(eventRange);
        return '<a class="' + classes.join(' ') + '" style="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["cssToStr"])(this.getSkinCss(eventUi)) + '"' +
            (eventDef.url ?
                ' href="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.url) + '"' :
                '') +
            '>' +
            (timeText ?
                '<span class="fc-time-wrap">' +
                    '<span class="fc-time">' +
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(timeText) +
                    '</span>' +
                    '</span>'
                :
                    '') +
            '<span class="fc-title-wrap">' +
            '<span class="fc-title fc-sticky">' +
            (eventDef.title ? Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.title) : '&nbsp;') +
            '</span>' +
            '</span>' +
            (isResizableFromStart ?
                '<div class="fc-resizer fc-start-resizer"></div>' :
                '') +
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer"></div>' :
                '') +
            '</a>';
    };
    TimelineLaneEventRenderer.prototype.computeDisplayEventTime = function () {
        return !this.timeAxis.tDateProfile.isTimeScale; // because times should be obvious via axis
    };
    TimelineLaneEventRenderer.prototype.computeDisplayEventEnd = function () {
        return false;
    };
    // Computes a default event time formatting string if `timeFormat` is not explicitly defined
    TimelineLaneEventRenderer.prototype.computeEventTimeFormat = function () {
        return {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: 'narrow'
        };
    };
    TimelineLaneEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        if (!this.el && this.masterContainerEl) {
            this.el = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-event-container' });
            if (mirrorInfo) {
                this.el.classList.add('fc-mirror-container');
            }
            this.masterContainerEl.appendChild(this.el);
        }
        if (this.el) {
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                this.el.appendChild(seg.el);
            }
        }
    };
    TimelineLaneEventRenderer.prototype.detachSegs = function (segs) {
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(seg.el);
        }
    };
    // computes AND assigns (assigns the left/right at least). bad
    TimelineLaneEventRenderer.prototype.computeSegSizes = function (segs) {
        var timeAxis = this.timeAxis;
        for (var _i = 0, segs_3 = segs; _i < segs_3.length; _i++) {
            var seg = segs_3[_i];
            var coords = timeAxis.rangeToCoords(seg); // works because Seg has start/end
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(seg.el, {
                left: (seg.left = coords.left),
                right: -(seg.right = coords.right)
            });
        }
    };
    TimelineLaneEventRenderer.prototype.assignSegSizes = function (segs) {
        if (!this.el) {
            return;
        }
        // compute seg verticals
        for (var _i = 0, segs_4 = segs; _i < segs_4.length; _i++) {
            var seg = segs_4[_i];
            seg.height = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeHeightAndMargins"])(seg.el);
        }
        this.buildSegLevels(segs); // populates above/below props for computeOffsetForSegs
        var totalHeight = computeOffsetForSegs(segs); // also assigns seg.top
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyleProp"])(this.el, 'height', totalHeight);
        // assign seg verticals
        for (var _a = 0, segs_5 = segs; _a < segs_5.length; _a++) {
            var seg = segs_5[_a];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyleProp"])(seg.el, 'top', seg.top);
        }
    };
    TimelineLaneEventRenderer.prototype.buildSegLevels = function (segs) {
        var segLevels = [];
        segs = this.sortEventSegs(segs);
        for (var _i = 0, segs_6 = segs; _i < segs_6.length; _i++) {
            var unplacedSeg = segs_6[_i];
            unplacedSeg.above = [];
            // determine the first level with no collisions
            var level = 0; // level index
            while (level < segLevels.length) {
                var isLevelCollision = false;
                // determine collisions
                for (var _a = 0, _b = segLevels[level]; _a < _b.length; _a++) {
                    var placedSeg = _b[_a];
                    if (timeRowSegsCollide(unplacedSeg, placedSeg)) {
                        unplacedSeg.above.push(placedSeg);
                        isLevelCollision = true;
                    }
                }
                if (isLevelCollision) {
                    level += 1;
                }
                else {
                    break;
                }
            }
            // insert into the first non-colliding level. create if necessary
            (segLevels[level] || (segLevels[level] = []))
                .push(unplacedSeg);
            // record possible colliding segments below (TODO: automated test for this)
            level += 1;
            while (level < segLevels.length) {
                for (var _c = 0, _d = segLevels[level]; _c < _d.length; _c++) {
                    var belowSeg = _d[_c];
                    if (timeRowSegsCollide(unplacedSeg, belowSeg)) {
                        belowSeg.above.push(unplacedSeg);
                    }
                }
                level += 1;
            }
        }
        return segLevels;
    };
    return TimelineLaneEventRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FgEventRenderer"]));
function computeOffsetForSegs(segs) {
    var max = 0;
    for (var _i = 0, segs_7 = segs; _i < segs_7.length; _i++) {
        var seg = segs_7[_i];
        max = Math.max(max, computeOffsetForSeg(seg));
    }
    return max;
}
function computeOffsetForSeg(seg) {
    if ((seg.top == null)) {
        seg.top = computeOffsetForSegs(seg.above);
    }
    return seg.top + seg.height;
}
function timeRowSegsCollide(seg0, seg1) {
    return (seg0.left < seg1.right) && (seg0.right > seg1.left);
}

var TimelineLaneFillRenderer = /** @class */ (function (_super) {
    __extends(TimelineLaneFillRenderer, _super);
    function TimelineLaneFillRenderer(masterContainerEl, timeAxis) {
        var _this = _super.call(this) || this;
        _this.masterContainerEl = masterContainerEl;
        _this.timeAxis = timeAxis;
        return _this;
    }
    TimelineLaneFillRenderer.prototype.attachSegs = function (type, segs) {
        if (segs.length) {
            var className = void 0;
            if (type === 'businessHours') {
                className = 'bgevent';
            }
            else {
                className = type.toLowerCase();
            }
            // making a new container each time is OKAY
            // all types of segs (background or business hours or whatever) are rendered in one pass
            var containerEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-' + className + '-container' });
            this.masterContainerEl.appendChild(containerEl);
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                containerEl.appendChild(seg.el);
            }
            return [containerEl]; // return value
        }
    };
    TimelineLaneFillRenderer.prototype.computeSegSizes = function (segs) {
        var timeAxis = this.timeAxis;
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            var coords = timeAxis.rangeToCoords(seg);
            seg.left = coords.left;
            seg.right = coords.right;
        }
    };
    TimelineLaneFillRenderer.prototype.assignSegSizes = function (segs) {
        for (var _i = 0, segs_3 = segs; _i < segs_3.length; _i++) {
            var seg = segs_3[_i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(seg.el, {
                left: seg.left,
                right: -seg.right
            });
        }
    };
    return TimelineLaneFillRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FillRenderer"]));

var TimelineLane = /** @class */ (function (_super) {
    __extends(TimelineLane, _super);
    function TimelineLane(fgContainerEl, bgContainerEl, timeAxis) {
        var _this = _super.call(this, bgContainerEl) || this;
        _this.slicer = new TimelineLaneSlicer();
        _this.renderEventDrag = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventDrag, _this._unrenderEventDrag);
        _this.renderEventResize = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventResize, _this._unrenderEventResize);
        _this.fgContainerEl = fgContainerEl;
        _this.timeAxis = timeAxis;
        var fillRenderer = _this.fillRenderer = new TimelineLaneFillRenderer(bgContainerEl, timeAxis);
        var eventRenderer = _this.eventRenderer = new TimelineLaneEventRenderer(fgContainerEl, timeAxis);
        _this.mirrorRenderer = new TimelineLaneEventRenderer(fgContainerEl, timeAxis);
        _this.renderBusinessHours = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'));
        _this.renderDateSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'highlight'), fillRenderer.unrender.bind(fillRenderer, 'highlight'));
        _this.renderBgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'));
        _this.renderFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer));
        _this.renderEventSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        return _this;
    }
    TimelineLane.prototype.render = function (props, context) {
        var timeAxis = this.timeAxis;
        var slicedProps = this.slicer.sliceProps(props, props.dateProfile, timeAxis.tDateProfile.isTimeScale ? null : props.nextDayThreshold, context.calendar, this, timeAxis);
        this.renderBusinessHours(context, slicedProps.businessHourSegs);
        this.renderDateSelection(context, slicedProps.dateSelectionSegs);
        this.renderBgEvents(context, slicedProps.bgEventSegs);
        this.renderFgEvents(context, slicedProps.fgEventSegs);
        this.renderEventSelection(slicedProps.eventSelection);
        this.renderEventDrag(slicedProps.eventDrag);
        this.renderEventResize(slicedProps.eventResize);
    };
    TimelineLane.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderBusinessHours.unrender();
        this.renderDateSelection.unrender();
        this.renderBgEvents.unrender();
        this.renderFgEvents.unrender();
        this.renderEventSelection.unrender();
        this.renderEventDrag.unrender();
        this.renderEventResize.unrender();
    };
    TimelineLane.prototype._renderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.mirrorRenderer.renderSegs(this.context, state.segs, { isDragging: true, sourceSeg: state.sourceSeg });
        }
    };
    TimelineLane.prototype._unrenderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.mirrorRenderer.unrender(this.context, state.segs, { isDragging: true, sourceSeg: state.sourceSeg });
        }
    };
    TimelineLane.prototype._renderEventResize = function (state) {
        if (state) {
            // HACK. eventRenderer and fillRenderer both use these segs. would compete over seg.el
            var segsForHighlight = state.segs.map(function (seg) {
                return __assign({}, seg);
            });
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.fillRenderer.renderSegs('highlight', this.context, segsForHighlight);
            this.mirrorRenderer.renderSegs(this.context, state.segs, { isDragging: true, sourceSeg: state.sourceSeg });
        }
    };
    TimelineLane.prototype._unrenderEventResize = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.fillRenderer.unrender('highlight', this.context);
            this.mirrorRenderer.unrender(this.context, state.segs, { isDragging: true, sourceSeg: state.sourceSeg });
        }
    };
    TimelineLane.prototype.updateSize = function (isResize) {
        var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
        fillRenderer.computeSizes(isResize);
        eventRenderer.computeSizes(isResize);
        mirrorRenderer.computeSizes(isResize);
        fillRenderer.assignSizes(isResize);
        eventRenderer.assignSizes(isResize);
        mirrorRenderer.assignSizes(isResize);
    };
    return TimelineLane;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));
var TimelineLaneSlicer = /** @class */ (function (_super) {
    __extends(TimelineLaneSlicer, _super);
    function TimelineLaneSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelineLaneSlicer.prototype.sliceRange = function (origRange, timeAxis) {
        var tDateProfile = timeAxis.tDateProfile;
        var _a = timeAxis.props, dateProfile = _a.dateProfile, dateProfileGenerator = _a.dateProfileGenerator;
        var dateEnv = timeAxis.context.dateEnv;
        var normalRange = normalizeRange(origRange, tDateProfile, dateEnv);
        var segs = [];
        // protect against when the span is entirely in an invalid date region
        if (timeAxis.computeDateSnapCoverage(normalRange.start) < timeAxis.computeDateSnapCoverage(normalRange.end)) {
            // intersect the footprint's range with the grid's range
            var slicedRange = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRanges"])(normalRange, tDateProfile.normalizedRange);
            if (slicedRange) {
                segs.push({
                    start: slicedRange.start,
                    end: slicedRange.end,
                    isStart: slicedRange.start.valueOf() === normalRange.start.valueOf() && isValidDate(slicedRange.start, tDateProfile, dateProfile, dateProfileGenerator),
                    isEnd: slicedRange.end.valueOf() === normalRange.end.valueOf() && isValidDate(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addMs"])(slicedRange.end, -1), tDateProfile, dateProfile, dateProfileGenerator)
                });
            }
        }
        return segs;
    };
    return TimelineLaneSlicer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Slicer"]));

var TimelineView = /** @class */ (function (_super) {
    __extends(TimelineView, _super);
    function TimelineView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton, _this._unrenderSkeleton);
        _this.startInteractive = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._startInteractive, _this._stopInteractive);
        return _this;
    }
    TimelineView.prototype._startInteractive = function (timeAxisEl) {
        this.context.calendar.registerInteractiveComponent(this, {
            el: timeAxisEl
        });
    };
    TimelineView.prototype._stopInteractive = function () {
        this.context.calendar.unregisterInteractiveComponent(this);
    };
    TimelineView.prototype.render = function (props, context) {
        _super.prototype.render.call(this, props, context); // flags for updateSize, addScroll. and _renderSkeleton/_unrenderSkeleton
        this.renderSkeleton(this.context);
        this.timeAxis.receiveProps({
            dateProfileGenerator: props.dateProfileGenerator,
            dateProfile: props.dateProfile
        }, context);
        this.startInteractive(this.timeAxis.slats.el);
        this.lane.receiveProps(__assign({}, props, { nextDayThreshold: this.context.nextDayThreshold }), context);
        this.startNowIndicator(props.dateProfile, props.dateProfileGenerator);
    };
    TimelineView.prototype.destroy = function () {
        this.startInteractive.unrender(); // "unrender" a weird name
        this.renderSkeleton.unrender();
        _super.prototype.destroy.call(this);
    };
    TimelineView.prototype._renderSkeleton = function (context) {
        this.el.classList.add('fc-timeline');
        if (context.options.eventOverlap === false) {
            this.el.classList.add('fc-no-overlap');
        }
        this.el.innerHTML = this.renderSkeletonHtml();
        this.timeAxis = new TimeAxis(this.el.querySelector('thead .fc-time-area'), this.el.querySelector('tbody .fc-time-area'));
        this.lane = new TimelineLane(this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.contentEl, this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.bgEl, this.timeAxis);
    };
    TimelineView.prototype._unrenderSkeleton = function () {
        this.el.classList.remove('fc-timeline');
        this.el.classList.remove('fc-no-overlap');
        this.timeAxis.destroy();
        this.lane.destroy();
    };
    TimelineView.prototype.renderSkeletonHtml = function () {
        var theme = this.context.theme;
        return "<table class=\"" + theme.getClass('tableGrid') + "\"> <thead class=\"fc-head\"> <tr> <td class=\"fc-time-area " + theme.getClass('widgetHeader') + "\"></td> </tr> </thead> <tbody class=\"fc-body\"> <tr> <td class=\"fc-time-area " + theme.getClass('widgetContent') + "\"></td> </tr> </tbody> </table>";
    };
    TimelineView.prototype.updateSize = function (isResize, totalHeight, isAuto) {
        this.timeAxis.updateSize(isResize, totalHeight, isAuto);
        this.lane.updateSize(isResize);
    };
    // Now Indicator
    // ------------------------------------------------------------------------------------------
    TimelineView.prototype.getNowIndicatorUnit = function (dateProfile, dateProfileGenerator) {
        return this.timeAxis.getNowIndicatorUnit(dateProfile, dateProfileGenerator);
    };
    TimelineView.prototype.renderNowIndicator = function (date) {
        this.timeAxis.renderNowIndicator(date);
    };
    TimelineView.prototype.unrenderNowIndicator = function () {
        this.timeAxis.unrenderNowIndicator();
    };
    // Scroll System
    // ------------------------------------------------------------------------------------------
    TimelineView.prototype.computeDateScroll = function (duration) {
        return this.timeAxis.computeDateScroll(duration);
    };
    TimelineView.prototype.applyScroll = function (scroll, isResize) {
        _super.prototype.applyScroll.call(this, scroll, isResize); // will call applyDateScroll
        var calendar = this.context.calendar;
        // avoid updating stickyscroll too often
        // TODO: repeat code as ResourceTimelineView::updateSize
        if (isResize || calendar.isViewUpdated || calendar.isDatesUpdated || calendar.isEventsUpdated) {
            this.timeAxis.updateStickyScrollers();
        }
    };
    TimelineView.prototype.applyDateScroll = function (scroll) {
        this.timeAxis.applyDateScroll(scroll);
    };
    TimelineView.prototype.queryScroll = function () {
        var enhancedScroll = this.timeAxis.layout.bodyScroller.enhancedScroll;
        return {
            top: enhancedScroll.getScrollTop(),
            left: enhancedScroll.getScrollLeft()
        };
    };
    // Hit System
    // ------------------------------------------------------------------------------------------
    TimelineView.prototype.buildPositionCaches = function () {
        this.timeAxis.slats.updateSize();
    };
    TimelineView.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
        var slatHit = this.timeAxis.slats.positionToHit(positionLeft);
        if (slatHit) {
            return {
                component: this,
                dateSpan: slatHit.dateSpan,
                rect: {
                    left: slatHit.left,
                    right: slatHit.right,
                    top: 0,
                    bottom: elHeight
                },
                dayEl: slatHit.dayEl,
                layer: 0
            };
        }
    };
    return TimelineView;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["View"]));

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    defaultView: 'timelineDay',
    views: {
        timeline: {
            class: TimelineView,
            eventResizableFromStart: true // how is this consumed for TimelineView tho?
        },
        timelineDay: {
            type: 'timeline',
            duration: { days: 1 }
        },
        timelineWeek: {
            type: 'timeline',
            duration: { weeks: 1 }
        },
        timelineMonth: {
            type: 'timeline',
            duration: { months: 1 }
        },
        timelineYear: {
            type: 'timeline',
            duration: { years: 1 }
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "rNeN":
/*!*********************************************************!*\
  !*** ./src/app/application/calendar/calendar.module.ts ***!
  \*********************************************************/
/*! exports provided: CalendarTicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarTicketModule", function() { return CalendarTicketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "7itd");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar.component */ "AYvY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _month_ticket_month_ticket_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./month-ticket/month-ticket.component */ "3D42");
/* harmony import */ var _month_resource_month_resource_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./month-resource/month-resource.component */ "ecWM");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./map/map.component */ "DdIF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var src_app_demo_utils_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/demo-utils/module */ "QejX");
/* harmony import */ var angular_calendar_scheduler__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-calendar-scheduler */ "SA0W");
/* harmony import */ var ngx_select2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-select2 */ "u1nn");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-select-dropdown */ "8bGj");
/* harmony import */ var src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/ngb-date-to-string-adapter */ "x8Rg");
/* harmony import */ var src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/ngb-time-to-string-adapter */ "dRK5");
/* harmony import */ var src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/generic-utils/Ticket-Status-Component/TicketStatusComponent.module */ "7kmZ");
































const routes = [
    { path: '', component: _calendar_component__WEBPACK_IMPORTED_MODULE_9__["CalendarComponent"],
        children: [
            { path: 'month-tickets', component: _month_ticket_month_ticket_component__WEBPACK_IMPORTED_MODULE_15__["MonthTicketComponent"] },
            { path: 'month-resource', component: _month_resource_month_resource_component__WEBPACK_IMPORTED_MODULE_16__["MonthResourceComponent"] },
            { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"] }
        ] },
];
class CalendarTicketModule {
}
CalendarTicketModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarTicketModule });
CalendarTicketModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarTicketModule_Factory(t) { return new (t || CalendarTicketModule)(); }, providers: [
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_25__["NgbDateToStringAdapter"] },
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_26__["NgbTimeToStringAdapter"] }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["GooglePlaceModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].googleapiKey }),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            angular_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"],
            angular_calendar_scheduler__WEBPACK_IMPORTED_MODULE_22__["SchedulerModule"].forRoot(),
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__["FullCalendarModule"],
            src_app_demo_utils_module__WEBPACK_IMPORTED_MODULE_21__["DemoUtilsModule"],
            ngx_select2__WEBPACK_IMPORTED_MODULE_23__["LSelect2Module"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_24__["SelectDropDownModule"],
            src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_27__["TicketStatusComponentModule"]
        ], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarTicketModule, { declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_9__["CalendarComponent"],
        _month_ticket_month_ticket_component__WEBPACK_IMPORTED_MODULE_15__["MonthTicketComponent"],
        _month_resource_month_resource_component__WEBPACK_IMPORTED_MODULE_16__["MonthResourceComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["GooglePlaceModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"], angular_calendar_scheduler__WEBPACK_IMPORTED_MODULE_22__["SchedulerModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__["FullCalendarModule"],
        src_app_demo_utils_module__WEBPACK_IMPORTED_MODULE_21__["DemoUtilsModule"],
        ngx_select2__WEBPACK_IMPORTED_MODULE_23__["LSelect2Module"],
        ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_24__["SelectDropDownModule"],
        src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_27__["TicketStatusComponentModule"]], exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarTicketModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _calendar_component__WEBPACK_IMPORTED_MODULE_9__["CalendarComponent"],
                    _month_ticket_month_ticket_component__WEBPACK_IMPORTED_MODULE_15__["MonthTicketComponent"],
                    _month_resource_month_resource_component__WEBPACK_IMPORTED_MODULE_16__["MonthResourceComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["GooglePlaceModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].googleapiKey }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    angular_calendar__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"],
                    angular_calendar_scheduler__WEBPACK_IMPORTED_MODULE_22__["SchedulerModule"].forRoot(),
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__["FullCalendarModule"],
                    src_app_demo_utils_module__WEBPACK_IMPORTED_MODULE_21__["DemoUtilsModule"],
                    ngx_select2__WEBPACK_IMPORTED_MODULE_23__["LSelect2Module"],
                    ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_24__["SelectDropDownModule"],
                    src_app_generic_utils_Ticket_Status_Component_TicketStatusComponent_module__WEBPACK_IMPORTED_MODULE_27__["TicketStatusComponentModule"]
                ],
                exports: [
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]
                ],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDateAdapter"], useClass: src_app_ngb_date_to_string_adapter__WEBPACK_IMPORTED_MODULE_25__["NgbDateToStringAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTimeAdapter"], useClass: src_app_ngb_time_to_string_adapter__WEBPACK_IMPORTED_MODULE_26__["NgbTimeToStringAdapter"] }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "u1nn":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-select2/__ivy_ngcc__/fesm2015/ngx-select2.js ***!
  \***********************************************************************/
/*! exports provided: LSelect2Component, LSelect2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSelect2Component", function() { return LSelect2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSelect2Module", function() { return LSelect2Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = ["selectControll"];
const _c1 = [[["option"], ["optgroup"]]];
const _c2 = ["option, optgroup"];
var LSelect2Component_1;
let LSelect2Component = LSelect2Component_1 = class LSelect2Component {
    constructor(_renderer) {
        this._renderer = _renderer;
        this.options = {};
        this.required = false;
        this.maxCount = Number.MAX_SAFE_INTEGER;
        this.minCount = Number.MIN_SAFE_INTEGER;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._onChange = (_) => { };
        this._onTouched = () => { };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this._jqueryElement = $(this.selectControll.nativeElement);
        this.initSelect2();
        this._jqueryElement.on('select2:select select2:unselect', (e) => {
            let data = this._jqueryElement.select2('data');
            for (let item of data) {
                delete item.element;
                delete item.disabled;
                delete item.selected;
            }
            if (!this.options.multiple) {
                data = (e.type == 'select2:unselect') ? null : data[0];
            }
            this.selectedValue = data;
            this._onChange(data);
            this.valueChange.emit(data);
        });
        if (this.selectedValue) {
            this.setSelect2Value(this.selectedValue);
        }
    }
    ngOnChanges(changes) {
        if (!this._jqueryElement)
            return;
        if (this.hasChanged(changes)) {
            this.initSelect2();
            if (this.selectedValue) {
                this.setSelect2Value(this.selectedValue);
            }
        }
    }
    ngOnDestroy() {
        this._jqueryElement.select2('destroy');
    }
    writeValue(value) {
        this.selectedValue = value;
        if (value !== null && value !== undefined)
            this.setSelect2Value(value);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    validate(c) {
        if (this.disabled) {
            return null;
        }
        let length = this.selectedValue ? this.selectedValue.length : 0;
        if (this.required === true && length === 0) {
            return { required: true };
        }
        if (this.minCount > 0 && length < this.minCount) {
            return { minCount: true };
        }
        if (this.maxCount > 0 && length > this.maxCount) {
            return { maxCount: true };
        }
        return null;
    }
    initSelect2() {
        if (this._jqueryElement.hasClass('select2-hidden-accessible') == true) {
            this._jqueryElement.select2('destroy');
            this._renderer.setProperty(this.selectControll.nativeElement, 'innerHTML', '');
        }
        let options = {
            data: this.data
        };
        Object.assign(options, this.options);
        this._jqueryElement.select2(options);
    }
    setSelect2Value(value) {
        if (!this._jqueryElement || !value) {
            this.selectedValue = value;
            return;
        }
        ;
        let targetVal = value['id'] || value;
        if (Array.isArray(value)) {
            targetVal = value.map(x => x['id']);
        }
        this._jqueryElement.val(targetVal).trigger('change');
    }
    hasChanged(changes) {
        if (changes['data'] && JSON.stringify(changes['data'].previousValue) !== JSON.stringify(changes['data'].currentValue)) {
            return true;
        }
        if (changes['options'] && JSON.stringify(changes['options'].previousValue) !== JSON.stringify(changes['options'].currentValue)) {
            return true;
        }
        return false;
    }
};
LSelect2Component.ɵfac = function LSelect2Component_Factory(t) { return new (t || LSelect2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
LSelect2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LSelect2Component, selectors: [["l-select2"]], viewQuery: function LSelect2Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selectControll = _t.first);
    } }, inputs: { options: "options", required: "required", maxCount: "maxCount", minCount: "minCount", disabled: "disabled", data: "data" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => LSelect2Component_1),
                multi: true
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => LSelect2Component_1),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 3, vars: 1, consts: [[2, "width", "100%", 3, "disabled"], ["selectControll", ""]], template: function LSelect2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, encapsulation: 2 });
LSelect2Component.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectControll'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LSelect2Component.prototype, "selectControll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], LSelect2Component.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], LSelect2Component.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LSelect2Component.prototype, "options", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], LSelect2Component.prototype, "required", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LSelect2Component.prototype, "maxCount", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LSelect2Component.prototype, "minCount", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], LSelect2Component.prototype, "valueChange", void 0);
LSelect2Component = LSelect2Component_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], LSelect2Component);

let LSelect2Module = class LSelect2Module {
};
LSelect2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LSelect2Module });
LSelect2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LSelect2Module_Factory(t) { return new (t || LSelect2Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LSelect2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'l-select2',
                template: "<select #selectControll [disabled]=\"disabled\" style=\"width: 100%\">\r\n  <ng-content select=\"option, optgroup\">\r\n  </ng-content>\r\n</select>",
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => LSelect2Component_1),
                        multi: true
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => LSelect2Component_1),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectControll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['selectControll']
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LSelect2Module, { declarations: function () { return [LSelect2Component]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]; }, exports: function () { return [LSelect2Component]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LSelect2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                declarations: [
                    LSelect2Component
                ],
                exports: [
                    LSelect2Component
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-select2.js.map

/***/ })

}]);
//# sourceMappingURL=application-calendar-calendar-module-es2015.js.map