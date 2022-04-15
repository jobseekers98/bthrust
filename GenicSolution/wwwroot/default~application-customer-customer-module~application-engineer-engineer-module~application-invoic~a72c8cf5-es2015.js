(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-customer-customer-module~application-engineer-engineer-module~application-invoic~a72c8cf5"],{

/***/ "7pIB":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js ***!
  \*******************************************************************************/
/*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLikeObject", function() { return FileLikeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader", function() { return FileUploader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
class FileLikeObject {
    /**
     * @param {?} fileOrInput
     */
    constructor(fileOrInput) {
        this.rawFile = fileOrInput;
        /** @type {?} */
        let isInput = isElement(fileOrInput);
        /** @type {?} */
        let fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */
        let postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */
        let method = '_createFrom' + postfix;
        ((/** @type {?} */ (this)))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    _createFromFakePath(path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    }
    /**
     * @param {?} object
     * @return {?}
     */
    _createFromObject(object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileItem {
    /**
     * @param {?} uploader
     * @param {?} some
     * @param {?} options
     */
    constructor(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    /**
     * @return {?}
     */
    upload() {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.uploader.cancelItem(this);
    }
    /**
     * @return {?}
     */
    remove() {
        this.uploader.removeFromQueue(this);
    }
    /**
     * @return {?}
     */
    onBeforeUpload() {
        return void 0;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    onBuildForm(form) {
        return { form };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgress(progress) {
        return { progress };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccess(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onError(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancel(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onComplete(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @return {?}
     */
    _onBeforeUpload() {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    }
    /**
     * @param {?} form
     * @return {?}
     */
    _onBuildForm(form) {
        this.onBuildForm(form);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    _onProgress(progress) {
        this.progress = progress;
        this.onProgress(progress);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccess(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onError(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancel(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onComplete(response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    _prepareToUploading() {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileType {
    /**
     * @param {?} file
     * @return {?}
     */
    static getMimeClass(file) {
        /** @type {?} */
        let mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    }
    /**
     * @param {?} inputFilename
     * @return {?}
     */
    static fileTypeDetection(inputFilename) {
        /** @type {?} */
        let types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        /** @type {?} */
        let chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        /** @type {?} */
        let extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    }
}
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/zip-compressed',
    'application/x-7z-compressed',
    'application/gzip',
    'application/x-bzip2'
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */
function Headers() { }
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() { }
if (false) {}
class FileUploader {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: (/**
             * @param {?} item
             * @return {?}
             */
            (item) => item._file),
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    }
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    addToQueue(files, options, filters) {
        /** @type {?} */
        let list = [];
        for (let file of files) {
            list.push(file);
        }
        /** @type {?} */
        let arrayOfFilters = this._getFilters(filters);
        /** @type {?} */
        let count = this.queue.length;
        /** @type {?} */
        let addedFileItems = [];
        list.map((/**
         * @param {?} some
         * @return {?}
         */
        (some) => {
            if (!options) {
                options = this.options;
            }
            /** @type {?} */
            let temp = new FileLikeObject(some);
            if (this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                let fileItem = new FileItem(this, some, options);
                addedFileItems.push(fileItem);
                this.queue.push(fileItem);
                this._onAfterAddingFile(fileItem);
            }
            else {
                /** @type {?} */
                let filter = arrayOfFilters[this._failFilterIndex];
                this._onWhenAddingFileFailed(temp, filter, options);
            }
        }));
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeFromQueue(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    }
    /**
     * @return {?}
     */
    clearQueue() {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    uploadItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        ((/** @type {?} */ (this)))[transport](item);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cancelItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    }
    /**
     * @return {?}
     */
    uploadAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems().filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploading));
        if (!items.length) {
            return;
        }
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item._prepareToUploading()));
        items[0].upload();
    }
    /**
     * @return {?}
     */
    cancelAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems();
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.cancel()));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFile(value) {
        return isFile(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFileLikeObject(value) {
        return value instanceof FileLikeObject;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getIndexOfItem(value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    }
    /**
     * @return {?}
     */
    getNotUploadedItems() {
        return this.queue.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploaded));
    }
    /**
     * @return {?}
     */
    getReadyItems() {
        return this.queue
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => (item.isReady && !item.isUploading)))
            .sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        (item1, item2) => item1.index - item2.index));
    }
    /**
     * @return {?}
     */
    destroy() {
        return void 0;
    }
    /**
     * @param {?} fileItems
     * @return {?}
     */
    onAfterAddingAll(fileItems) {
        return { fileItems };
    }
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    onBuildItemForm(fileItem, form) {
        return { fileItem, form };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onAfterAddingFile(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    onWhenAddingFileFailed(item, filter, options) {
        return { item, filter, options };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onBeforeUploadItem(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    onProgressItem(fileItem, progress) {
        return { fileItem, progress };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgressAll(progress) {
        return { progress };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccessItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onErrorItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancelItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCompleteItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @return {?}
     */
    onCompleteAll() {
        return void 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _mimeTypeFilter(item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileSizeFilter(item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileTypeFilter(item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onErrorItem(item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCompleteItem(item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        /** @type {?} */
        let nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    }
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    _headersGetter(parsedHeaders) {
        return (/**
         * @param {?} name
         * @return {?}
         */
        (name) => {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        });
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _xhrTransport(item) {
        /** @type {?} */
        let that = this;
        /** @type {?} */
        let xhr = item._xhr = new XMLHttpRequest();
        /** @type {?} */
        let sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            /** @type {?} */
            const appendFile = (/**
             * @return {?}
             */
            () => sendable.append(item.alias, item._file, item.file.name));
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    /** @type {?} */
                    let paramVal = this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                }));
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            let progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            this._onProgressItem(item, progress);
        });
        xhr.onload = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            /** @type {?} */
            let gist = this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */
            let method = '_on' + gist + 'Item';
            ((/** @type {?} */ (this)))[method](item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onerror = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onErrorItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onabort = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onCancelItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (let header of this.options.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (let header of item.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        });
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => xhr.send(JSON.stringify(result))));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    }
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    _getTotalProgress(value = 0) {
        if (this.options.removeAfterUpload) {
            return value;
        }
        /** @type {?} */
        let notUploaded = this.getNotUploadedItems().length;
        /** @type {?} */
        let uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        /** @type {?} */
        let ratio = 100 / this.queue.length;
        /** @type {?} */
        let current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    }
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    _getFilters(filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            /** @type {?} */
            let names = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => names.indexOf(filter.name) !== -1));
        }
        return this.options.filters;
    }
    /**
     * @protected
     * @return {?}
     */
    _render() {
        return void 0;
    }
    /**
     * @protected
     * @return {?}
     */
    _queueLimitFilter() {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    _isValidFile(file, filters, options) {
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((/**
         * @param {?} filter
         * @return {?}
         */
        (filter) => {
            this._failFilterIndex++;
            return filter.fn.call(this, file, options);
        }));
    }
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    _isSuccessCode(status) {
        return (status >= 200 && status < 300) || status === 304;
    }
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    _transformResponse(response, headers) {
        return response;
    }
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    _parseHeaders(headers) {
        /** @type {?} */
        let parsed = {};
        /** @type {?} */
        let key;
        /** @type {?} */
        let val;
        /** @type {?} */
        let i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        (line) => {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }));
        return parsed;
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    _onWhenAddingFileFailed(item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onAfterAddingFile(item) {
        this.onAfterAddingFile(item);
    }
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    _onAfterAddingAll(items) {
        this.onAfterAddingAll(items);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onBeforeUploadItem(item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    _onBuildItemForm(item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    _onProgressItem(item, progress) {
        /** @type {?} */
        let total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccessItem(item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancelItem(item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileSelectDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @return {?}
     */
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    /**
     * @return {?}
     */
    onChange() {
        /** @type {?} */
        let files = this.element.nativeElement.files;
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) { return new (t || FileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FileSelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FileSelectDirective, selectors: [["", "ng2FileSelect", ""]], hostBindings: function FileSelectDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileSelectDirective_change_HostBindingHandler() { return ctx.onChange(); });
    } }, inputs: { uploader: "uploader" }, outputs: { onFileSelected: "onFileSelected" } });
/** @nocollapse */
FileSelectDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileSelectDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onFileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSelectDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng2FileSelect]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onFileSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], 
    /**
     * @return {?}
     */
    onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change']
        }], uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileDropDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _getTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    _haveFiles(types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    }
}
FileDropDirective.ɵfac = function FileDropDirective_Factory(t) { return new (t || FileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FileDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FileDropDirective, selectors: [["", "ng2FileDrop", ""]], hostBindings: function FileDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function FileDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); });
    } }, inputs: { uploader: "uploader" }, outputs: { fileOver: "fileOver", onFileDrop: "onFileDrop" } });
/** @nocollapse */
FileDropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileDropDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng2FileDrop]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { fileOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onFileDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
        }], uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadModule {
}
FileUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FileUploadModule });
FileUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FileUploadModule_Factory(t) { return new (t || FileUploadModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadModule, { declarations: function () { return [FileDropDirective, FileSelectDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [FileDropDirective, FileSelectDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng2-file-upload.js.map

/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ProductService {
    constructor(http) {
        this.http = http;
        this.SetAsDefaultValue();
        this.setDefaultProductMovement();
        this.setDefaultProductBatch();
        this.ProductMovementList = [];
        this.locatProductMovmentList = [];
        this.Productlist = [];
        this.ItemofLists = [];
    }
    SetAsDefaultValue() {
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
    setDefaultProductBatch() {
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
            Remarks: '',
        };
    }
    setDefaultProductMovement() {
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
            MovementDate: new Date(),
        };
    }
    postProductDetails(t) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostProduct/' + t, this.formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    putProductDetails(t) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutProduct/' + t, this.formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    getAllProductList(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetAllProduct/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestProductsList(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProducts/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    getProductById(token, PId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProductById/' + token + '/' + PId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    refrestProductlistSync(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProductListForWarranty/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => Response));
    }
    onProductStatusChange(token, PId) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/onProductStatusChange/' + token + '/' + PId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    //#region service
    postServiceDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostService/' + token, this.serviceformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    putServiceDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutService/' + token, this.serviceformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    refrestServicesList(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetService/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    onServiceStatusChange(token, ServiceId) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/onServiceStatusChange/' + token + '/' + ServiceId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    GetRandamUniqueId(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetWarrantyUniqueKey/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    //#endregion
    /// *******************************************************************************/
    // Brands methods (api) Begin
    postBrandDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostBrand/' + token, this.BrandformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    putBrandDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutBrand/' + token, this.BrandformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    refrestBrand(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetBrand/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    // Brands methods (api) End
    /// *******************************************************************************/
    /// *******************************************************************************/
    // Category methods (api) Begin
    postCategoryDetails(token) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostCategory/' + token, this.CategoryformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    putCategoryDetails(token) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutCategory/' + token, this.CategoryformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
    refrestCategory(token) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetCategory/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Response => { return Response; }));
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nXz1":
/*!****************************************************!*\
  !*** ./src/app/services/DocumentUpload.service.ts ***!
  \****************************************************/
/*! exports provided: DocumentUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentUploadService", function() { return DocumentUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class DocumentUploadService {
    constructor(http) {
        this.http = http;
    }
    uploadDocument(token, access_type, guid, id, remark, file) {
        if (guid === '') {
            guid = '00000000-0000-0000-0000-000000000000';
        }
        if (id === '') {
            id = '0';
        }
        const formData = new FormData();
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
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    RemoveDocument(token, access_type, guid, id, remark) {
        if (guid === '') {
            guid = '00000000-0000-0000-0000-000000000000';
        }
        if (id === '') {
            id = '0';
        }
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api-aws-doc-remove', {
            reportProgress: true,
            headers: {
                "ACCESS_KEY": src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].Accesskey,
                "ACCESS_TYPE": access_type,
                "ACCESS_TOKEN": token,
                "ACCESS_GUID": guid,
                "ACCESS_Id": id,
                "Remark": remark
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    uploadDocuments(token, access_type, guid, id, remark, file) {
        if (guid === '') {
            guid = '00000000-0000-0000-0000-000000000000';
        }
        if (id === '') {
            id = '0';
        }
        const formData = new FormData();
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
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
    uploadBase64Document(token, access_type, guid, id, base64, name, size) {
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
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
}
DocumentUploadService.ɵfac = function DocumentUploadService_Factory(t) { return new (t || DocumentUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DocumentUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentUploadService, factory: DocumentUploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
//# sourceMappingURL=default~application-customer-customer-module~application-engineer-engineer-module~application-invoic~a72c8cf5-es2015.js.map