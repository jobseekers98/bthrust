(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~application-customer-customer-module~application-engineer-engineer-module~application-invoic~a72c8cf5"], {
    /***/
    "7pIB":
    /*!*******************************************************************************!*\
      !*** ./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js ***!
      \*******************************************************************************/

    /*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */

    /***/
    function pIB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileDropDirective", function () {
        return FileDropDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileItem", function () {
        return FileItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileLikeObject", function () {
        return FileLikeObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function () {
        return FileSelectDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
        return FileUploadModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploader", function () {
        return FileUploader;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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

      var FileLikeObject = /*#__PURE__*/function () {
        /**
         * @param {?} fileOrInput
         */
        function FileLikeObject(fileOrInput) {
          _classCallCheck(this, FileLikeObject);

          this.rawFile = fileOrInput;
          /** @type {?} */

          var isInput = isElement(fileOrInput);
          /** @type {?} */

          var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
          /** @type {?} */

          var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
          /** @type {?} */

          var method = '_createFrom' + postfix;

          /** @type {?} */
          this[method](fakePathOrObject);
        }
        /**
         * @param {?} path
         * @return {?}
         */


        _createClass(FileLikeObject, [{
          key: "_createFromFakePath",
          value: function _createFromFakePath(path) {
            this.lastModifiedDate = void 0;
            this.size = void 0;
            this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
            this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
          }
          /**
           * @param {?} object
           * @return {?}
           */

        }, {
          key: "_createFromObject",
          value: function _createFromObject(object) {
            this.size = object.size;
            this.type = object.type;
            this.name = object.name;
          }
        }]);

        return FileLikeObject;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileItem = /*#__PURE__*/function () {
        /**
         * @param {?} uploader
         * @param {?} some
         * @param {?} options
         */
        function FileItem(uploader, some, options) {
          _classCallCheck(this, FileItem);

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


        _createClass(FileItem, [{
          key: "upload",
          value: function upload() {
            try {
              this.uploader.uploadItem(this);
            } catch (e) {
              this.uploader._onCompleteItem(this, '', 0, {});

              this.uploader._onErrorItem(this, '', 0, {});
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "cancel",
          value: function cancel() {
            this.uploader.cancelItem(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove() {
            this.uploader.removeFromQueue(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "onBeforeUpload",
          value: function onBeforeUpload() {
            return void 0;
          }
          /**
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "onBuildForm",
          value: function onBuildForm(form) {
            return {
              form: form
            };
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgress",
          value: function onProgress(progress) {
            return {
              progress: progress
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onSuccess",
          value: function onSuccess(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onError",
          value: function onError(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCancel",
          value: function onCancel(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onComplete",
          value: function onComplete(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "_onBeforeUpload",
          value: function _onBeforeUpload() {
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

        }, {
          key: "_onBuildForm",
          value: function _onBuildForm(form) {
            this.onBuildForm(form);
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "_onProgress",
          value: function _onProgress(progress) {
            this.progress = progress;
            this.onProgress(progress);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onSuccess",
          value: function _onSuccess(response, status, headers) {
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

        }, {
          key: "_onError",
          value: function _onError(response, status, headers) {
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

        }, {
          key: "_onCancel",
          value: function _onCancel(response, status, headers) {
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

        }, {
          key: "_onComplete",
          value: function _onComplete(response, status, headers) {
            this.onComplete(response, status, headers);

            if (this.uploader.options.removeAfterUpload) {
              this.remove();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_prepareToUploading",
          value: function _prepareToUploading() {
            this.index = this.index || ++this.uploader._nextIndex;
            this.isReady = true;
          }
        }]);

        return FileItem;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileType = /*#__PURE__*/function () {
        function FileType() {
          _classCallCheck(this, FileType);
        }

        _createClass(FileType, null, [{
          key: "getMimeClass",
          value:
          /**
           * @param {?} file
           * @return {?}
           */
          function getMimeClass(file) {
            /** @type {?} */
            var mimeClass = 'application';

            if (this.mime_psd.indexOf(file.type) !== -1) {
              mimeClass = 'image';
            } else if (file.type.match('image.*')) {
              mimeClass = 'image';
            } else if (file.type.match('video.*')) {
              mimeClass = 'video';
            } else if (file.type.match('audio.*')) {
              mimeClass = 'audio';
            } else if (file.type === 'application/pdf') {
              mimeClass = 'pdf';
            } else if (this.mime_compress.indexOf(file.type) !== -1) {
              mimeClass = 'compress';
            } else if (this.mime_doc.indexOf(file.type) !== -1) {
              mimeClass = 'doc';
            } else if (this.mime_xsl.indexOf(file.type) !== -1) {
              mimeClass = 'xls';
            } else if (this.mime_ppt.indexOf(file.type) !== -1) {
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

        }, {
          key: "fileTypeDetection",
          value: function fileTypeDetection(inputFilename) {
            /** @type {?} */
            var types = {
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

            var chunks = inputFilename.split('.');

            if (chunks.length < 2) {
              return 'application';
            }
            /** @type {?} */


            var extension = chunks[chunks.length - 1].toLowerCase();

            if (types[extension] === undefined) {
              return 'application';
            } else {
              return types[extension];
            }
          }
        }]);

        return FileType;
      }();
      /*  MS office  */


      FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
      FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
      FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
      /* PSD */

      FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
      /* Compressed files */

      FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} value
       * @return {?}
       */


      function _isFile(value) {
        return File && value instanceof File;
      }
      /**
       * @record
       */


      function Headers() {}

      if (false) {}
      /**
       * @record
       */


      function FileUploaderOptions() {}

      if (false) {}

      var FileUploader = /*#__PURE__*/function () {
        /**
         * @param {?} options
         */
        function FileUploader(options) {
          _classCallCheck(this, FileUploader);

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
            formatDataFunction:
            /**
            * @param {?} item
            * @return {?}
            */
            function formatDataFunction(item) {
              return item._file;
            },
            formatDataFunctionIsAsync: false
          };
          this.setOptions(options);
          this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @param {?} options
         * @return {?}
         */


        _createClass(FileUploader, [{
          key: "setOptions",
          value: function setOptions(options) {
            this.options = Object.assign(this.options, options);
            this.authToken = this.options.authToken;
            this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
            this.autoUpload = this.options.autoUpload;
            this.options.filters.unshift({
              name: 'queueLimit',
              fn: this._queueLimitFilter
            });

            if (this.options.maxFileSize) {
              this.options.filters.unshift({
                name: 'fileSize',
                fn: this._fileSizeFilter
              });
            }

            if (this.options.allowedFileType) {
              this.options.filters.unshift({
                name: 'fileType',
                fn: this._fileTypeFilter
              });
            }

            if (this.options.allowedMimeType) {
              this.options.filters.unshift({
                name: 'mimeType',
                fn: this._mimeTypeFilter
              });
            }

            for (var i = 0; i < this.queue.length; i++) {
              this.queue[i].url = this.options.url;
            }
          }
          /**
           * @param {?} files
           * @param {?=} options
           * @param {?=} filters
           * @return {?}
           */

        }, {
          key: "addToQueue",
          value: function addToQueue(files, options, filters) {
            var _this = this;

            /** @type {?} */
            var list = [];

            var _iterator = _createForOfIteratorHelper(files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var file = _step.value;
                list.push(file);
              }
              /** @type {?} */

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var arrayOfFilters = this._getFilters(filters);
            /** @type {?} */


            var count = this.queue.length;
            /** @type {?} */

            var addedFileItems = [];
            list.map(
            /**
            * @param {?} some
            * @return {?}
            */
            function (some) {
              if (!options) {
                options = _this.options;
              }
              /** @type {?} */


              var temp = new FileLikeObject(some);

              if (_this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                var fileItem = new FileItem(_this, some, options);
                addedFileItems.push(fileItem);

                _this.queue.push(fileItem);

                _this._onAfterAddingFile(fileItem);
              } else {
                /** @type {?} */
                var filter = arrayOfFilters[_this._failFilterIndex];

                _this._onWhenAddingFileFailed(temp, filter, options);
              }
            });

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

        }, {
          key: "removeFromQueue",
          value: function removeFromQueue(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];

            if (item.isUploading) {
              item.cancel();
            }

            this.queue.splice(index, 1);
            this.progress = this._getTotalProgress();
          }
          /**
           * @return {?}
           */

        }, {
          key: "clearQueue",
          value: function clearQueue() {
            while (this.queue.length) {
              this.queue[0].remove();
            }

            this.progress = 0;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "uploadItem",
          value: function uploadItem(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];
            /** @type {?} */

            var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';

            item._prepareToUploading();

            if (this.isUploading) {
              return;
            }

            this.isUploading = true;

            /** @type {?} */
            this[transport](item);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "cancelItem",
          value: function cancelItem(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];
            /** @type {?} */

            var prop = this.options.isHTML5 ? item._xhr : item._form;

            if (item && item.isUploading) {
              prop.abort();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "uploadAll",
          value: function uploadAll() {
            /** @type {?} */
            var items = this.getNotUploadedItems().filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !item.isUploading;
            });

            if (!items.length) {
              return;
            }

            items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item._prepareToUploading();
            });
            items[0].upload();
          }
          /**
           * @return {?}
           */

        }, {
          key: "cancelAll",
          value: function cancelAll() {
            /** @type {?} */
            var items = this.getNotUploadedItems();
            items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.cancel();
            });
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isFile",
          value: function isFile(value) {
            return _isFile(value);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isFileLikeObject",
          value: function isFileLikeObject(value) {
            return value instanceof FileLikeObject;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "getIndexOfItem",
          value: function getIndexOfItem(value) {
            return typeof value === 'number' ? value : this.queue.indexOf(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getNotUploadedItems",
          value: function getNotUploadedItems() {
            return this.queue.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !item.isUploaded;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "getReadyItems",
          value: function getReadyItems() {
            return this.queue.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.isReady && !item.isUploading;
            }).sort(
            /**
            * @param {?} item1
            * @param {?} item2
            * @return {?}
            */
            function (item1, item2) {
              return item1.index - item2.index;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "destroy",
          value: function destroy() {
            return void 0;
          }
          /**
           * @param {?} fileItems
           * @return {?}
           */

        }, {
          key: "onAfterAddingAll",
          value: function onAfterAddingAll(fileItems) {
            return {
              fileItems: fileItems
            };
          }
          /**
           * @param {?} fileItem
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "onBuildItemForm",
          value: function onBuildItemForm(fileItem, form) {
            return {
              fileItem: fileItem,
              form: form
            };
          }
          /**
           * @param {?} fileItem
           * @return {?}
           */

        }, {
          key: "onAfterAddingFile",
          value: function onAfterAddingFile(fileItem) {
            return {
              fileItem: fileItem
            };
          }
          /**
           * @param {?} item
           * @param {?} filter
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "onWhenAddingFileFailed",
          value: function onWhenAddingFileFailed(item, filter, options) {
            return {
              item: item,
              filter: filter,
              options: options
            };
          }
          /**
           * @param {?} fileItem
           * @return {?}
           */

        }, {
          key: "onBeforeUploadItem",
          value: function onBeforeUploadItem(fileItem) {
            return {
              fileItem: fileItem
            };
          }
          /**
           * @param {?} fileItem
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgressItem",
          value: function onProgressItem(fileItem, progress) {
            return {
              fileItem: fileItem,
              progress: progress
            };
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgressAll",
          value: function onProgressAll(progress) {
            return {
              progress: progress
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onSuccessItem",
          value: function onSuccessItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onErrorItem",
          value: function onErrorItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCancelItem",
          value: function onCancelItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCompleteItem",
          value: function onCompleteItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "onCompleteAll",
          value: function onCompleteAll() {
            return void 0;
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_mimeTypeFilter",
          value: function _mimeTypeFilter(item) {
            return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_fileSizeFilter",
          value: function _fileSizeFilter(item) {
            return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_fileTypeFilter",
          value: function _fileTypeFilter(item) {
            return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onErrorItem",
          value: function _onErrorItem(item, response, status, headers) {
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

        }, {
          key: "_onCompleteItem",
          value: function _onCompleteItem(item, response, status, headers) {
            item._onComplete(response, status, headers);

            this.onCompleteItem(item, response, status, headers);
            /** @type {?} */

            var nextItem = this.getReadyItems()[0];
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

        }, {
          key: "_headersGetter",
          value: function _headersGetter(parsedHeaders) {
            return (
              /**
              * @param {?} name
              * @return {?}
              */
              function (name) {
                if (name) {
                  return parsedHeaders[name.toLowerCase()] || void 0;
                }

                return parsedHeaders;
              }
            );
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_xhrTransport",
          value: function _xhrTransport(item) {
            var _this2 = this;

            /** @type {?} */
            var that = this;
            /** @type {?} */

            var xhr = item._xhr = new XMLHttpRequest();
            /** @type {?} */

            var sendable;

            this._onBeforeUploadItem(item);

            if (typeof item._file.size !== 'number') {
              throw new TypeError('The file specified is no longer valid');
            }

            if (!this.options.disableMultipart) {
              sendable = new FormData();

              this._onBuildItemForm(item, sendable);
              /** @type {?} */


              var appendFile =
              /**
              * @return {?}
              */
              function appendFile() {
                return sendable.append(item.alias, item._file, item.file.name);
              };

              if (!this.options.parametersBeforeFiles) {
                appendFile();
              } // For AWS, Additional Parameters must come BEFORE Files


              if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(
                /**
                * @param {?} key
                * @return {?}
                */
                function (key) {
                  /** @type {?} */
                  var paramVal = _this2.options.additionalParameter[key]; // Allow an additional parameter to include the filename

                  if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                    paramVal = paramVal.replace('{{file_name}}', item.file.name);
                  }

                  sendable.append(key, paramVal);
                });
              }

              if (this.options.parametersBeforeFiles) {
                appendFile();
              }
            } else {
              sendable = this.options.formatDataFunction(item);
            }

            xhr.upload.onprogress =
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              /** @type {?} */
              var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);

              _this2._onProgressItem(item, progress);
            };

            xhr.onload =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this2._transformResponse(xhr.response, headers);
              /** @type {?} */


              var gist = _this2._isSuccessCode(xhr.status) ? 'Success' : 'Error';
              /** @type {?} */

              var method = '_on' + gist + 'Item';

              /** @type {?} */
              _this2[method](item, response, xhr.status, headers);

              _this2._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.onerror =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this2._transformResponse(xhr.response, headers);

              _this2._onErrorItem(item, response, xhr.status, headers);

              _this2._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.onabort =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this2._transformResponse(xhr.response, headers);

              _this2._onCancelItem(item, response, xhr.status, headers);

              _this2._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.open(item.method, item.url, true);
            xhr.withCredentials = item.withCredentials;

            if (this.options.headers) {
              var _iterator2 = _createForOfIteratorHelper(this.options.headers),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var header = _step2.value;
                  xhr.setRequestHeader(header.name, header.value);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (item.headers.length) {
              var _iterator3 = _createForOfIteratorHelper(item.headers),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _header = _step3.value;
                  xhr.setRequestHeader(_header.name, _header.value);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            if (this.authToken) {
              xhr.setRequestHeader(this.authTokenHeader, this.authToken);
            }

            xhr.onreadystatechange =
            /**
            * @return {?}
            */
            function () {
              if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
              }
            };

            if (this.options.formatDataFunctionIsAsync) {
              sendable.then(
              /**
              * @param {?} result
              * @return {?}
              */
              function (result) {
                return xhr.send(JSON.stringify(result));
              });
            } else {
              xhr.send(sendable);
            }

            this._render();
          }
          /**
           * @protected
           * @param {?=} value
           * @return {?}
           */

        }, {
          key: "_getTotalProgress",
          value: function _getTotalProgress() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.options.removeAfterUpload) {
              return value;
            }
            /** @type {?} */


            var notUploaded = this.getNotUploadedItems().length;
            /** @type {?} */

            var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
            /** @type {?} */

            var ratio = 100 / this.queue.length;
            /** @type {?} */

            var current = value * ratio / 100;
            return Math.round(uploaded * ratio + current);
          }
          /**
           * @protected
           * @param {?} filters
           * @return {?}
           */

        }, {
          key: "_getFilters",
          value: function _getFilters(filters) {
            if (!filters) {
              return this.options.filters;
            }

            if (Array.isArray(filters)) {
              return filters;
            }

            if (typeof filters === 'string') {
              /** @type {?} */
              var names = filters.match(/[^\s,]+/g);
              return this.options.filters.filter(
              /**
              * @param {?} filter
              * @return {?}
              */
              function (filter) {
                return names.indexOf(filter.name) !== -1;
              });
            }

            return this.options.filters;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "_render",
          value: function _render() {
            return void 0;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "_queueLimitFilter",
          value: function _queueLimitFilter() {
            return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
          }
          /**
           * @protected
           * @param {?} file
           * @param {?} filters
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "_isValidFile",
          value: function _isValidFile(file, filters, options) {
            var _this3 = this;

            this._failFilterIndex = -1;
            return !filters.length ? true : filters.every(
            /**
            * @param {?} filter
            * @return {?}
            */
            function (filter) {
              _this3._failFilterIndex++;
              return filter.fn.call(_this3, file, options);
            });
          }
          /**
           * @protected
           * @param {?} status
           * @return {?}
           */

        }, {
          key: "_isSuccessCode",
          value: function _isSuccessCode(status) {
            return status >= 200 && status < 300 || status === 304;
          }
          /**
           * @protected
           * @param {?} response
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_transformResponse",
          value: function _transformResponse(response, headers) {
            return response;
          }
          /**
           * @protected
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_parseHeaders",
          value: function _parseHeaders(headers) {
            /** @type {?} */
            var parsed = {};
            /** @type {?} */

            var key;
            /** @type {?} */

            var val;
            /** @type {?} */

            var i;

            if (!headers) {
              return parsed;
            }

            headers.split('\n').map(
            /**
            * @param {?} line
            * @return {?}
            */
            function (line) {
              i = line.indexOf(':');
              key = line.slice(0, i).trim().toLowerCase();
              val = line.slice(i + 1).trim();

              if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
              }
            });
            return parsed;
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} filter
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "_onWhenAddingFileFailed",
          value: function _onWhenAddingFileFailed(item, filter, options) {
            this.onWhenAddingFileFailed(item, filter, options);
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_onAfterAddingFile",
          value: function _onAfterAddingFile(item) {
            this.onAfterAddingFile(item);
          }
          /**
           * @protected
           * @param {?} items
           * @return {?}
           */

        }, {
          key: "_onAfterAddingAll",
          value: function _onAfterAddingAll(items) {
            this.onAfterAddingAll(items);
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_onBeforeUploadItem",
          value: function _onBeforeUploadItem(item) {
            item._onBeforeUpload();

            this.onBeforeUploadItem(item);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "_onBuildItemForm",
          value: function _onBuildItemForm(item, form) {
            item._onBuildForm(form);

            this.onBuildItemForm(item, form);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "_onProgressItem",
          value: function _onProgressItem(item, progress) {
            /** @type {?} */
            var total = this._getTotalProgress(progress);

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

        }, {
          key: "_onSuccessItem",
          value: function _onSuccessItem(item, response, status, headers) {
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

        }, {
          key: "_onCancelItem",
          value: function _onCancelItem(item, response, status, headers) {
            item._onCancel(response, status, headers);

            this.onCancelItem(item, response, status, headers);
          }
        }]);

        return FileUploader;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileSelectDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         */
        function FileSelectDirective(element) {
          _classCallCheck(this, FileSelectDirective);

          this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.element = element;
        }
        /**
         * @return {?}
         */


        _createClass(FileSelectDirective, [{
          key: "getOptions",
          value: function getOptions() {
            return this.uploader.options;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFilters",
          value: function getFilters() {
            return {};
          }
          /**
           * @return {?}
           */

        }, {
          key: "isEmptyAfterSelection",
          value: function isEmptyAfterSelection() {
            return !!this.element.nativeElement.attributes.multiple;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onChange",
          value: function onChange() {
            /** @type {?} */
            var files = this.element.nativeElement.files;
            /** @type {?} */

            var options = this.getOptions();
            /** @type {?} */

            var filters = this.getFilters();
            this.uploader.addToQueue(files, options, filters);
            this.onFileSelected.emit(files);

            if (this.isEmptyAfterSelection()) {
              this.element.nativeElement.value = '';
            }
          }
        }]);

        return FileSelectDirective;
      }();

      FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) {
        return new (t || FileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      FileSelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FileSelectDirective,
        selectors: [["", "ng2FileSelect", ""]],
        hostBindings: function FileSelectDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileSelectDirective_change_HostBindingHandler() {
              return ctx.onChange();
            });
          }
        },
        inputs: {
          uploader: "uploader"
        },
        outputs: {
          onFileSelected: "onFileSelected"
        }
      });
      /** @nocollapse */

      FileSelectDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      FileSelectDirective.propDecorators = {
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onFileSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['change']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSelectDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng2FileSelect]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onFileSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * @return {?}
           */
          onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change']
          }],
          uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileDropDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         */
        function FileDropDirective(element) {
          _classCallCheck(this, FileDropDirective);

          this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.element = element;
        }
        /**
         * @return {?}
         */


        _createClass(FileDropDirective, [{
          key: "getOptions",
          value: function getOptions() {
            return this.uploader.options;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFilters",
          value: function getFilters() {
            return {};
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDrop",
          value: function onDrop(event) {
            /** @type {?} */
            var transfer = this._getTransfer(event);

            if (!transfer) {
              return;
            }
            /** @type {?} */


            var options = this.getOptions();
            /** @type {?} */

            var filters = this.getFilters();

            this._preventAndStop(event);

            this.uploader.addToQueue(transfer.files, options, filters);
            this.fileOver.emit(false);
            this.onFileDrop.emit(transfer.files);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDragOver",
          value: function onDragOver(event) {
            /** @type {?} */
            var transfer = this._getTransfer(event);

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

        }, {
          key: "onDragLeave",
          value: function onDragLeave(event) {
            if (
            /** @type {?} */
            this.element) {
              if (event.currentTarget ===
              /** @type {?} */
              this.element[0]) {
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

        }, {
          key: "_getTransfer",
          value: function _getTransfer(event) {
            return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
          }
          /**
           * @protected
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_preventAndStop",
          value: function _preventAndStop(event) {
            event.preventDefault();
            event.stopPropagation();
          }
          /**
           * @protected
           * @param {?} types
           * @return {?}
           */

        }, {
          key: "_haveFiles",
          value: function _haveFiles(types) {
            if (!types) {
              return false;
            }

            if (types.indexOf) {
              return types.indexOf('Files') !== -1;
            } else if (types.contains) {
              return types.contains('Files');
            } else {
              return false;
            }
          }
        }]);

        return FileDropDirective;
      }();

      FileDropDirective.ɵfac = function FileDropDirective_Factory(t) {
        return new (t || FileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      FileDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FileDropDirective,
        selectors: [["", "ng2FileDrop", ""]],
        hostBindings: function FileDropDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function FileDropDirective_drop_HostBindingHandler($event) {
              return ctx.onDrop($event);
            })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) {
              return ctx.onDragOver($event);
            })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) {
              return ctx.onDragLeave($event);
            });
          }
        },
        inputs: {
          uploader: "uploader"
        },
        outputs: {
          fileOver: "fileOver",
          onFileDrop: "onFileDrop"
        }
      });
      /** @nocollapse */

      FileDropDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      FileDropDirective.propDecorators = {
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fileOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFileDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileDropDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ng2FileDrop]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          fileOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onFileDrop: [{
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
          }],
          uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileUploadModule = function FileUploadModule() {
        _classCallCheck(this, FileUploadModule);
      };

      FileUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FileUploadModule
      });
      FileUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FileUploadModule_Factory(t) {
          return new (t || FileUploadModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadModule, {
          declarations: function declarations() {
            return [FileDropDirective, FileSelectDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [FileDropDirective, FileSelectDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [FileDropDirective, FileSelectDirective],
            exports: [FileDropDirective, FileSelectDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ng2-file-upload.js.map

      /***/

    },

    /***/
    "Gdn9":
    /*!*********************************************!*\
      !*** ./src/app/services/product.service.ts ***!
      \*********************************************/

    /*! exports provided: ProductService */

    /***/
    function Gdn9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
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

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
          this.SetAsDefaultValue();
          this.setDefaultProductMovement();
          this.setDefaultProductBatch();
          this.ProductMovementList = [];
          this.locatProductMovmentList = [];
          this.Productlist = [];
          this.ItemofLists = [];
        }

        _createClass(ProductService, [{
          key: "SetAsDefaultValue",
          value: function SetAsDefaultValue() {
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
        }, {
          key: "setDefaultProductBatch",
          value: function setDefaultProductBatch() {
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
              Remarks: ''
            };
          }
        }, {
          key: "setDefaultProductMovement",
          value: function setDefaultProductMovement() {
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
              MovementDate: new Date()
            };
          }
        }, {
          key: "postProductDetails",
          value: function postProductDetails(t) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostProduct/' + t, this.formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "putProductDetails",
          value: function putProductDetails(t) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutProduct/' + t, this.formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "getAllProductList",
          value: function getAllProductList(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetAllProduct/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestProductsList",
          value: function refrestProductsList(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProducts/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "getProductById",
          value: function getProductById(token, PId) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProductById/' + token + '/' + PId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestProductlistSync",
          value: function refrestProductlistSync(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetProductListForWarranty/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "onProductStatusChange",
          value: function onProductStatusChange(token, PId) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/onProductStatusChange/' + token + '/' + PId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          } //#region service

        }, {
          key: "postServiceDetails",
          value: function postServiceDetails(token) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostService/' + token, this.serviceformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "putServiceDetails",
          value: function putServiceDetails(token) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutService/' + token, this.serviceformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestServicesList",
          value: function refrestServicesList(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetService/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "onServiceStatusChange",
          value: function onServiceStatusChange(token, ServiceId) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/onServiceStatusChange/' + token + '/' + ServiceId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "GetRandamUniqueId",
          value: function GetRandamUniqueId(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetWarrantyUniqueKey/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          } //#endregion
          /// *******************************************************************************/
          // Brands methods (api) Begin

        }, {
          key: "postBrandDetails",
          value: function postBrandDetails(token) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostBrand/' + token, this.BrandformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "putBrandDetails",
          value: function putBrandDetails(token) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutBrand/' + token, this.BrandformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestBrand",
          value: function refrestBrand(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetBrand/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          } // Brands methods (api) End
          /// *******************************************************************************/
          /// *******************************************************************************/
          // Category methods (api) Begin

        }, {
          key: "postCategoryDetails",
          value: function postCategoryDetails(token) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PostCategory/' + token, this.CategoryformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "putCategoryDetails",
          value: function putCategoryDetails(token) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/PutCategory/' + token, this.CategoryformData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }, {
          key: "refrestCategory",
          value: function refrestCategory(token) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/Products/GetCategory/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Response) {
              return Response;
            }));
          }
        }]);

        return ProductService;
      }();

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
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
    "u1nn":
    /*!***********************************************************************!*\
      !*** ./node_modules/ngx-select2/__ivy_ngcc__/fesm2015/ngx-select2.js ***!
      \***********************************************************************/

    /*! exports provided: LSelect2Component, LSelect2Module */

    /***/
    function u1nn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LSelect2Component", function () {
        return LSelect2Component;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LSelect2Module", function () {
        return LSelect2Module;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["selectControll"];
      var _c1 = [[["option"], ["optgroup"]]];
      var _c2 = ["option, optgroup"];
      var LSelect2Component_1;

      var LSelect2Component = LSelect2Component_1 = /*#__PURE__*/function () {
        function LSelect2Component(_renderer) {
          _classCallCheck(this, LSelect2Component);

          this._renderer = _renderer;
          this.options = {};
          this.required = false;
          this.maxCount = Number.MAX_SAFE_INTEGER;
          this.minCount = Number.MIN_SAFE_INTEGER;
          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          this._onChange = function (_) {};

          this._onTouched = function () {};
        }

        _createClass(LSelect2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            this._jqueryElement = $(this.selectControll.nativeElement);
            this.initSelect2();

            this._jqueryElement.on('select2:select select2:unselect', function (e) {
              var data = _this4._jqueryElement.select2('data');

              var _iterator4 = _createForOfIteratorHelper(data),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var item = _step4.value;
                  delete item.element;
                  delete item.disabled;
                  delete item.selected;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              if (!_this4.options.multiple) {
                data = e.type == 'select2:unselect' ? null : data[0];
              }

              _this4.selectedValue = data;

              _this4._onChange(data);

              _this4.valueChange.emit(data);
            });

            if (this.selectedValue) {
              this.setSelect2Value(this.selectedValue);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._jqueryElement) return;

            if (this.hasChanged(changes)) {
              this.initSelect2();

              if (this.selectedValue) {
                this.setSelect2Value(this.selectedValue);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._jqueryElement.select2('destroy');
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.selectedValue = value;
            if (value !== null && value !== undefined) this.setSelect2Value(value);
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "validate",
          value: function validate(c) {
            if (this.disabled) {
              return null;
            }

            var length = this.selectedValue ? this.selectedValue.length : 0;

            if (this.required === true && length === 0) {
              return {
                required: true
              };
            }

            if (this.minCount > 0 && length < this.minCount) {
              return {
                minCount: true
              };
            }

            if (this.maxCount > 0 && length > this.maxCount) {
              return {
                maxCount: true
              };
            }

            return null;
          }
        }, {
          key: "initSelect2",
          value: function initSelect2() {
            if (this._jqueryElement.hasClass('select2-hidden-accessible') == true) {
              this._jqueryElement.select2('destroy');

              this._renderer.setProperty(this.selectControll.nativeElement, 'innerHTML', '');
            }

            var options = {
              data: this.data
            };
            Object.assign(options, this.options);

            this._jqueryElement.select2(options);
          }
        }, {
          key: "setSelect2Value",
          value: function setSelect2Value(value) {
            if (!this._jqueryElement || !value) {
              this.selectedValue = value;
              return;
            }

            ;
            var targetVal = value['id'] || value;

            if (Array.isArray(value)) {
              targetVal = value.map(function (x) {
                return x['id'];
              });
            }

            this._jqueryElement.val(targetVal).trigger('change');
          }
        }, {
          key: "hasChanged",
          value: function hasChanged(changes) {
            if (changes['data'] && JSON.stringify(changes['data'].previousValue) !== JSON.stringify(changes['data'].currentValue)) {
              return true;
            }

            if (changes['options'] && JSON.stringify(changes['options'].previousValue) !== JSON.stringify(changes['options'].currentValue)) {
              return true;
            }

            return false;
          }
        }]);

        return LSelect2Component;
      }();

      LSelect2Component.ɵfac = function LSelect2Component_Factory(t) {
        return new (t || LSelect2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
      };

      LSelect2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LSelect2Component,
        selectors: [["l-select2"]],
        viewQuery: function LSelect2Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selectControll = _t.first);
          }
        },
        inputs: {
          options: "options",
          required: "required",
          maxCount: "maxCount",
          minCount: "minCount",
          disabled: "disabled",
          data: "data"
        },
        outputs: {
          valueChange: "valueChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return LSelect2Component_1;
          }),
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return LSelect2Component_1;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 3,
        vars: 1,
        consts: [[2, "width", "100%", 3, "disabled"], ["selectControll", ""]],
        template: function LSelect2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled);
          }
        },
        encapsulation: 2
      });

      LSelect2Component.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectControll'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], LSelect2Component.prototype, "selectControll", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], LSelect2Component.prototype, "data", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], LSelect2Component.prototype, "disabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LSelect2Component.prototype, "options", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], LSelect2Component.prototype, "required", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], LSelect2Component.prototype, "maxCount", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], LSelect2Component.prototype, "minCount", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], LSelect2Component.prototype, "valueChange", void 0);
      LSelect2Component = LSelect2Component_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], LSelect2Component);

      var LSelect2Module = function LSelect2Module() {
        _classCallCheck(this, LSelect2Module);
      };

      LSelect2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: LSelect2Module
      });
      LSelect2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function LSelect2Module_Factory(t) {
          return new (t || LSelect2Module)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LSelect2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'l-select2',
            template: "<select #selectControll [disabled]=\"disabled\" style=\"width: 100%\">\r\n  <ng-content select=\"option, optgroup\">\r\n  </ng-content>\r\n</select>",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return LSelect2Component_1;
              }),
              multi: true
            }, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return LSelect2Component_1;
              }),
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }];
        }, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectControll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['selectControll']
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LSelect2Module, {
          declarations: function declarations() {
            return [LSelect2Component];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]];
          },
          exports: function exports() {
            return [LSelect2Component];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LSelect2Module, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [LSelect2Component],
            exports: [LSelect2Component]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-select2.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~application-customer-customer-module~application-engineer-engineer-module~application-invoic~a72c8cf5-es5.js.map