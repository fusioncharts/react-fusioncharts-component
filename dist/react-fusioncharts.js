(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("ReactFC", ["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactFC"] = factory(require("react"));
	else
		root["ReactFC"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__2__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// import ReactFC from './src/ReactFC';

// Use this format to export ReactFC as default module
// Ref: https://gist.github.com/iamakulov/966b91c0fc6363a16ff0650b51fb991b
// export default ReactFC;

module.exports = __webpack_require__(1)["default"];

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var ReactFC = /*#__PURE__*/function (_React$Component) {
  function ReactFC(props) {
    var _this;
    _classCallCheck(this, ReactFC);
    _this = _callSuper(this, ReactFC, [props]);
    _defineProperty(_this, "initialUnmount", false);
    _this.containerId = uuid_v4__WEBPACK_IMPORTED_MODULE_1___default()();
    _this.oldOptions = null;
    _this.FusionCharts = props.fcLibrary || ReactFC.fusionChartsCore || window.FusionCharts;
    return _this;
  }
  _inherits(ReactFC, _React$Component);
  return _createClass(ReactFC, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderChart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.detectChanges(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.initialUnmount) this.initialUnmount = true;else this.chartObj.dispose();
    }
  }, {
    key: "detectChanges",
    value: function detectChanges(nextProps) {
      var currentOptions = this.resolveChartOptions(nextProps);
      var oldOptions = this.oldOptions;
      var optionsUpdatedNatively = ['width', 'height', 'type', 'dataFormat', 'dataSource', 'events'];
      this.checkAndUpdateChartDimensions(currentOptions, oldOptions);
      this.checkAndUpdateChartType(currentOptions, oldOptions);
      this.checkAndUpdateChartData(currentOptions, oldOptions);
      this.checkAndUpdateEvents(currentOptions, oldOptions);
      this.checkAndUpdateRestOptions(_utils_options__WEBPACK_IMPORTED_MODULE_3__["default"].filter(function (option) {
        return optionsUpdatedNatively.indexOf(option) === -1;
      }), currentOptions, oldOptions);
      this.oldOptions = currentOptions;
    }
  }, {
    key: "checkAndUpdateChartDimensions",
    value: function checkAndUpdateChartDimensions(currentOptions, oldOptions) {
      var currWidth = currentOptions.width;
      var currHeight = currentOptions.height;
      var oldWidth = oldOptions.width;
      var oldHeight = oldOptions.height;
      if (String(currWidth) !== String(oldWidth) || String(currHeight) !== String(oldHeight)) {
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(currWidth) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(currHeight)) {
          this.chartObj.resizeTo(currWidth, currHeight);
        } else {
          if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(currWidth)) {
            this.chartObj.resizeTo({
              w: currWidth
            });
          }
          if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(currHeight)) {
            this.chartObj.resizeTo({
              h: currHeight
            });
          }
        }
      }
    }
  }, {
    key: "checkAndUpdateChartType",
    value: function checkAndUpdateChartType(currentOptions, oldOptions) {
      var currType = currentOptions.type;
      var oldType = oldOptions.type;
      if (String(currType).toLowerCase() !== String(oldType).toLowerCase()) {
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(currType)) {
          this.chartObj.chartType(String(currType).toLowerCase());
        }
      }
    }
  }, {
    key: "checkAndUpdateChartData",
    value: function checkAndUpdateChartData(currentOptions, oldOptions) {
      var currDataFormat = currentOptions.dataFormat;
      var currData = currentOptions.dataSource;
      var oldDataFormat = oldOptions.dataFormat;
      var oldData = oldOptions.dataSource;
      if (String(currDataFormat).toLowerCase() !== String(oldDataFormat).toLowerCase()) {
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(currDataFormat) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(currData)) {
          this.chartObj.setChartData(currData, String(currDataFormat).toLowerCase());
          // If the chart dataFormat is changed then
          // animate the chart to show the changes
          this.chartObj.render();
          return;
        }
      }
      if (!this.isSameChartData(currData, oldData)) {
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(currData)) {
          this.chartObj.setChartData(currData,
          // When dataFormat is not given, but data is changed,
          // then use 'json' as default dataFormat
          currDataFormat ? String(currDataFormat).toLowerCase() : 'json');
        }
      }
    }
  }, {
    key: "isSameChartData",
    value: function isSameChartData(currData, oldData) {
      /* TODO
        1. Current has DataStore and Old doesn't
        2. Old has and Current doesn't
        3. Both has, check ref is equal, return false only if not equal
        4. Clone oldData for diff
        5. Clone currentData for diff
        6. return string check.
      */
      // 1. Current has DataStore and Old doesn't
      if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__.checkIfDataTableExists(currData) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__.checkIfDataTableExists(oldData)) {
        return false;
      }
      // 2. Old has and Current doesn't
      if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__.checkIfDataTableExists(currData) && _utils_utils__WEBPACK_IMPORTED_MODULE_2__.checkIfDataTableExists(oldData)) {
        return false;
      }
      // 3. Both has, check ref is equal, return false only if not equal
      if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__.checkIfDataTableExists(currData) && _utils_utils__WEBPACK_IMPORTED_MODULE_2__.checkIfDataTableExists(oldData) && currData.data !== oldData.data) {
        return false;
      }
      // 4. Clone oldData for diff
      var oldDataStringified = JSON.stringify(_utils_utils__WEBPACK_IMPORTED_MODULE_2__.cloneDataSource(oldData, 'diff'));
      // 5. Clone currentData for diff
      var currentDataStringified = JSON.stringify(_utils_utils__WEBPACK_IMPORTED_MODULE_2__.cloneDataSource(currData, 'diff'));
      // 6. return string check.
      return oldDataStringified === currentDataStringified;
    }
  }, {
    key: "checkAndUpdateEvents",
    value: function checkAndUpdateEvents(currentOptions, oldOptions) {
      var _this2 = this;
      var currEvents = currentOptions.events;
      var oldEvents = oldOptions.events;
      var temp1;
      var temp2;
      if (this.detectChartEventsChange(currEvents, oldEvents)) {
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(currEvents)) {
          temp1 = Object.assign({}, currEvents);
          temp2 = _utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(oldEvents) ? {} : Object.assign({}, oldEvents);
          Object.keys(temp2).forEach(function (eventName) {
            if (temp2[eventName] === temp1[eventName]) {
              temp1[eventName] = undefined;
            } else {
              _this2.chartObj.removeEventListener(eventName, temp2[eventName]);
            }
          });
          Object.keys(temp1).forEach(function (eventName) {
            if (temp1[eventName]) {
              _this2.chartObj.addEventListener(eventName, temp1[eventName]);
            }
          });
        }
      }
    }
  }, {
    key: "detectChartEventsChange",
    value: function detectChartEventsChange(currEvents, oldEvents) {
      if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isObject(currEvents) && _utils_utils__WEBPACK_IMPORTED_MODULE_2__.isObject(oldEvents)) {
        return !this.isSameChartEvents(currEvents, oldEvents);
      }
      return !(currEvents === oldEvents);
    }
  }, {
    key: "isSameChartEvents",
    value: function isSameChartEvents(currEvents, oldEvents) {
      if (Object.keys(currEvents).length !== Object.keys(oldEvents).length) {
        return false;
      }
      var currEventNames = Object.keys(currEvents);
      for (var i = 0; i < currEventNames.length; ++i) {
        var evName = currEventNames[i];
        if (currEvents[evName] !== oldEvents[evName]) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "checkAndUpdateRestOptions",
    value: function checkAndUpdateRestOptions(restOptions, currentOptions, oldOptions) {
      var _this3 = this;
      var optionsUpdated = false;
      restOptions.forEach(function (optionName) {
        var currValue = currentOptions[optionName];
        var oldValue = oldOptions[optionName];
        if (!_this3.isSameOptionValue(currValue, oldValue)) {
          if (!_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined(currValue)) {
            if (_this3.chartObj.options && _this3.chartObj.options.hasOwnProperty(optionName)) {
              _this3.chartObj.options[optionName] = currValue;
              optionsUpdated = true;
            }
          }
        }
      });
      if (optionsUpdated) {
        this.chartObj.render(); // re-render the chart to reflect the changes
      }
    }
  }, {
    key: "isSameOptionValue",
    value: function isSameOptionValue(currValue, oldValue) {
      if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isObject(currValue) && _utils_utils__WEBPACK_IMPORTED_MODULE_2__.isObject(oldValue)) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_2__.isSameObjectContent(currValue, oldValue);
      }
      return String(currValue) === String(oldValue);
    }
  }, {
    key: "renderChart",
    value: function renderChart() {
      var _this4 = this;
      var currentOptions = this.resolveChartOptions(this.props);
      var events = {};
      currentOptions.renderAt = this.containerId;
      Object.keys(this.props).forEach(function (value) {
        var event = value.match(/^fcEvent-.*/i);
        if (event && typeof _this4.props[value] === 'function') {
          var eventName = value.replace(/^fcEvent-/i, '');
          events[eventName] = _this4.props[value];
        }
      });
      if (Object.keys(events).length > 0) {
        if (currentOptions.events === undefined) {
          currentOptions.events = events;
        } else {
          currentOptions.events = Object.assign(currentOptions.events, events);
        }
      }
      this.chartObj = new this.FusionCharts(currentOptions);
      this.chartObj.render();
      this.oldOptions = currentOptions;
      if (this.props.onRender && typeof this.props.onRender === 'function') {
        this.props.onRender(this.chartObj);
      }
    }
  }, {
    key: "resolveChartOptions",
    value: function resolveChartOptions(props) {
      var chartConfig = props.chartConfig ? props.chartConfig : {};
      var inlineOptions = _utils_options__WEBPACK_IMPORTED_MODULE_3__["default"].reduce(function (options, optionName) {
        options[optionName] = props[optionName];
        return options;
      }, {});
      Object.assign(inlineOptions, chartConfig);
      if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isObject(inlineOptions.dataSource) && !_utils_utils__WEBPACK_IMPORTED_MODULE_2__.checkIfDataTableExists(inlineOptions.dataSource)) {
        inlineOptions.dataSource = _utils_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopyOf(inlineOptions.dataSource);
      } else if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isObject(inlineOptions.dataSource) && _utils_utils__WEBPACK_IMPORTED_MODULE_2__.checkIfDataTableExists(inlineOptions.dataSource)) {
        inlineOptions.dataSource = _utils_utils__WEBPACK_IMPORTED_MODULE_2__.cloneDataSource(inlineOptions.dataSource, 'clone');
      }
      if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isObject(inlineOptions.link)) {
        inlineOptions.link = _utils_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopyOf(inlineOptions.link);
      }
      if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isObject(inlineOptions.events)) {
        inlineOptions.events = Object.assign({}, inlineOptions.events);
      }
      return inlineOptions;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: this.props.className,
        id: this.containerId
      });
    }
  }], [{
    key: "fcRoot",
    value: function fcRoot(core) {
      for (var _len = arguments.length, modules = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        modules[_key - 1] = arguments[_key];
      }
      modules.forEach(function (m) {
        if (m.getName && m.getType || m.name && m.type) {
          core.addDep(m);
        } else {
          m(core);
        }
      });
      ReactFC.fusionChartsCore = core;
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactFC);

/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(4);
var bytesToUuid = __webpack_require__(5);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 4 */
/***/ ((module) => {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 5 */
/***/ ((module) => {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIfDataTableExists: () => (/* binding */ checkIfDataTableExists),
/* harmony export */   cloneDataSource: () => (/* binding */ cloneDataSource),
/* harmony export */   deepCopyOf: () => (/* binding */ deepCopyOf),
/* harmony export */   isCallable: () => (/* binding */ isCallable),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isSameObjectContent: () => (/* binding */ isSameObjectContent),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* eslint-disable guard-for-in */
function isObject(value) {
  return value !== null && _typeof(value) === 'object';
}
function isCallable(value) {
  return typeof value === 'function';
}
function isSameObjectContent(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  var keys = Object.keys(obj1);
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      if (!isSameObjectContent(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
function isUndefined(value) {
  // eslint-disable-next-line no-void
  var UNDEFINED = void 0;
  return value === UNDEFINED;
}
function deepCopyOf(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function checkIfDataTableExists(dataSource) {
  // eslint-disable-next-line no-underscore-dangle
  if (dataSource && dataSource.data && dataSource.data._dataStore) {
    return true;
  }
  return false;
}
function cloneDataSource(obj) {
  var purpose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'clone';
  var type = _typeof(obj);
  if (type === 'string' || type === 'number' || type === 'function' || type === 'boolean') {
    return obj;
  }
  if (obj === null || obj === undefined) {
    return obj;
  }
  if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(this.cloneDataSource(obj[i]));
    }
    return arr;
  }
  if (_typeof(obj) === 'object') {
    var clonedObj = {};
    // eslint-disable-next-line guard-for-in
    // eslint-disable-next-line no-restricted-syntax
    for (var prop in obj) {
      // Edge case handling for DataTable
      if (prop === 'data') {
        // eslint-disable-next-line no-underscore-dangle
        if (obj[prop]._dataStore && purpose === 'clone') {
          clonedObj[prop] = obj[prop];
          // eslint-disable-next-line no-underscore-dangle
        } else if (obj[prop]._dataStore && purpose === 'diff') {
          clonedObj[prop] = '-';
        } else {
          clonedObj[prop] = this.cloneDataSource(obj[prop]);
        }
        continue;
      }
      clonedObj[prop] = this.cloneDataSource(obj[prop]);
    }
    return clonedObj;
  }
  return undefined;
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['type', 'id', 'width', 'height', 'dataFormat', 'dataSource', 'events', 'link', 'showDataLoadingMessage', 'showChartLoadingMessage', 'baseChartMessageFont', 'baseChartMessageFontSize', 'baseChartMessageColor', 'dataLoadStartMessage', 'dataLoadErrorMessage', 'dataInvalidMessage', 'dataEmptyMessage', 'typeNotSupportedMessage', 'loadMessage', 'renderErrorMessage', 'containerBackgroundColor', 'containerBackgroundOpacity', 'containerClassName', 'baseChartMessageImageHAlign', 'baseChartMessageImageVAlign', 'baseChartMessageImageAlpha', 'baseChartMessageImageScale', 'typeNotSupportedMessageImageHAalign', 'typeNotSupportedMessageImageVAlign', 'typeNotSupportedMessageImageAlpha', 'typeNotSupportedMessageImageScale', 'dataLoadErrorMessageImageHAlign', 'dataLoadErrorMessageImageVAlign', 'dataLoadErrorMessageImageAlpha', 'dataLoadErrorMessageImageScale', 'dataLoadStartMessageImageHAlign', 'dataLoadStartMessageImageVAlign', 'dataLoadStartMessageImageAlpha', 'dataLoadStartMessageImageScale', 'dataInvalidMessageImageHAlign', 'dataInvalidMessageImageVAlign', 'dataInvalidMessageImageAlpha', 'dataInvalidMessageImageScale', 'dataEmptyMessageImageHAlign', 'dataEmptyMessageImageVAlign', 'dataEmptyMessageImageAlpha', 'dataEmptyMessageImageScale', 'renderErrorMessageImageHAlign', 'renderErrorMessageImageVAlign', 'renderErrorMessageImageAlpha', 'renderErrorMessageImageScale', 'loadMessageImageHAlign', 'loadMessageImageVAlign', 'loadMessageImageAlpha', 'loadMessageImageScale']);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});