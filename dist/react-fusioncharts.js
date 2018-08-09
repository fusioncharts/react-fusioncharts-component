(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("fusioncharts"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "fusioncharts"], factory);
	else if(typeof exports === 'object')
		exports["ReactFC"] = factory(require("react"), require("fusioncharts"));
	else
		root["ReactFC"] = factory(root["React"], root["FusionCharts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _ReactFC = __webpack_require__(1);

	var _ReactFC2 = _interopRequireDefault(_ReactFC);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Use this format to export ReactFC as default module
	// Ref: https://gist.github.com/iamakulov/966b91c0fc6363a16ff0650b51fb991b
	module.exports = _ReactFC2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _fusioncharts = __webpack_require__(3);

	var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

	var _v = __webpack_require__(4);

	var _v2 = _interopRequireDefault(_v);

	var _utils = __webpack_require__(7);

	var utils = _interopRequireWildcard(_utils);

	var _options = __webpack_require__(8);

	var _options2 = _interopRequireDefault(_options);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactFC = function (_React$Component) {
	  _inherits(ReactFC, _React$Component);

	  _createClass(ReactFC, null, [{
	    key: 'fcRoot',
	    value: function fcRoot(core) {
	      for (var _len = arguments.length, modules = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        modules[_key - 1] = arguments[_key];
	      }

	      modules.forEach(function (m) {
	        if (m.getName || m.name) {
	          core.addDep(m);
	        } else {
	          m(core);
	        }
	      });
	      ReactFC.fusionChartsCore = core;
	    }
	  }]);

	  function ReactFC(props) {
	    _classCallCheck(this, ReactFC);

	    var _this = _possibleConstructorReturn(this, (ReactFC.__proto__ || Object.getPrototypeOf(ReactFC)).call(this, props));

	    _this.containerId = (0, _v2.default)();
	    _this.oldOptions = null;
	    _this.FusionCharts = props.fcLibrary || ReactFC.fusionChartsCore || _fusioncharts2.default;
	    return _this;
	  }

	  _createClass(ReactFC, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.renderChart();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (!this.oldOptions) {
	        return;
	      }
	      this.detectChanges(nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.chartObj.dispose();
	    }
	  }, {
	    key: 'detectChanges',
	    value: function detectChanges(nextProps) {
	      var currentOptions = this.resolveChartOptions(nextProps);
	      var oldOptions = this.oldOptions;

	      var optionsUpdatedNatively = ['width', 'height', 'type', 'dataFormat', 'dataSource', 'events'];

	      this.checkAndUpdateChartDimensions(currentOptions, oldOptions);
	      this.checkAndUpdateChartType(currentOptions, oldOptions);
	      this.checkAndUpdateChartData(currentOptions, oldOptions);
	      this.checkAndUpdateEvents(currentOptions, oldOptions);
	      this.checkAndUpdateRestOptions(_options2.default.filter(function (option) {
	        return optionsUpdatedNatively.indexOf(option) === -1;
	      }), currentOptions, oldOptions);

	      this.oldOptions = currentOptions;
	    }
	  }, {
	    key: 'checkAndUpdateChartDimensions',
	    value: function checkAndUpdateChartDimensions(currentOptions, oldOptions) {
	      var currWidth = currentOptions.width;
	      var currHeight = currentOptions.height;
	      var oldWidth = oldOptions.width;
	      var oldHeight = oldOptions.height;

	      if (String(currWidth) !== String(oldWidth) || String(currHeight) !== String(oldHeight)) {
	        if (!utils.isUndefined(currWidth) && !utils.isUndefined(currHeight)) {
	          this.chartObj.resizeTo(currWidth, currHeight);
	        } else {
	          if (!utils.isUndefined(currWidth)) {
	            this.chartObj.resizeTo({
	              w: currWidth
	            });
	          }
	          if (!utils.isUndefined(currHeight)) {
	            this.chartObj.resizeTo({
	              h: currHeight
	            });
	          }
	        }
	      }
	    }
	  }, {
	    key: 'checkAndUpdateChartType',
	    value: function checkAndUpdateChartType(currentOptions, oldOptions) {
	      var currType = currentOptions.type;
	      var oldType = oldOptions.type;

	      if (String(currType).toLowerCase() !== String(oldType).toLowerCase()) {
	        if (!utils.isUndefined(currType)) {
	          this.chartObj.chartType(String(currType).toLowerCase());
	        }
	      }
	    }
	  }, {
	    key: 'checkAndUpdateChartData',
	    value: function checkAndUpdateChartData(currentOptions, oldOptions) {
	      var currDataFormat = currentOptions.dataFormat;
	      var currData = currentOptions.dataSource;
	      var oldDataFormat = oldOptions.dataFormat;
	      var oldData = oldOptions.dataSource;

	      if (String(currDataFormat).toLowerCase() !== String(oldDataFormat).toLowerCase()) {
	        if (!utils.isUndefined(currDataFormat) && !utils.isUndefined(currData)) {
	          this.chartObj.setChartData(currData, String(currDataFormat).toLowerCase());
	          // If the chart dataFormat is changed then
	          // animate the chart to show the changes
	          this.chartObj.render();
	        }
	      } else if (!this.isSameChartData(currData, oldData)) {
	        if (!utils.isUndefined(currData)) {
	          this.chartObj.setChartData(currData,
	          // When dataFormat is not given, but data is changed,
	          // then use 'json' as default dataFormat
	          currDataFormat ? String(currDataFormat).toLowerCase() : 'json');
	        }
	      }
	    }
	  }, {
	    key: 'isSameChartData',
	    value: function isSameChartData(currData, oldData) {
	      if (utils.isObject(currData) && utils.isObject(oldData)) {
	        return utils.isSameObjectContent(currData, oldData);
	      }
	      return currData === oldData;
	    }
	  }, {
	    key: 'checkAndUpdateEvents',
	    value: function checkAndUpdateEvents(currentOptions, oldOptions) {
	      var _this2 = this;

	      var currEvents = currentOptions.events;
	      var oldEvents = oldOptions.events;
	      var temp1 = void 0;
	      var temp2 = void 0;

	      if (this.detectChartEventsChange(currEvents, oldEvents)) {
	        if (!utils.isUndefined(currEvents)) {
	          temp1 = Object.assign({}, currEvents);
	          temp2 = utils.isUndefined(oldEvents) ? {} : Object.assign({}, oldEvents);
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
	    key: 'detectChartEventsChange',
	    value: function detectChartEventsChange(currEvents, oldEvents) {
	      if (utils.isObject(currEvents) && utils.isObject(oldEvents)) {
	        return !this.isSameChartEvents(currEvents, oldEvents);
	      }
	      return !(currEvents === oldEvents);
	    }
	  }, {
	    key: 'isSameChartEvents',
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
	    key: 'checkAndUpdateRestOptions',
	    value: function checkAndUpdateRestOptions(restOptions, currentOptions, oldOptions) {
	      var _this3 = this;

	      var optionsUpdated = false;

	      restOptions.forEach(function (optionName) {
	        var currValue = currentOptions[optionName];
	        var oldValue = oldOptions[optionName];

	        if (!_this3.isSameOptionValue(currValue, oldValue)) {
	          if (!utils.isUndefined(currValue)) {
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
	    key: 'isSameOptionValue',
	    value: function isSameOptionValue(currValue, oldValue) {
	      if (utils.isObject(currValue) && utils.isObject(oldValue)) {
	        return utils.isSameObjectContent(currValue, oldValue);
	      }
	      return String(currValue) === String(oldValue);
	    }
	  }, {
	    key: 'renderChart',
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
	    key: 'resolveChartOptions',
	    value: function resolveChartOptions(props) {
	      var chartConfig = props.chartConfig ? props.chartConfig : {};
	      var inlineOptions = _options2.default.reduce(function (options, optionName) {
	        options[optionName] = props[optionName];
	        return options;
	      }, {});
	      Object.assign(inlineOptions, chartConfig);

	      if (utils.isObject(inlineOptions.dataSource)) {
	        inlineOptions.dataSource = utils.deepCopyOf(inlineOptions.dataSource);
	      }
	      if (utils.isObject(inlineOptions.link)) {
	        inlineOptions.link = utils.deepCopyOf(inlineOptions.link);
	      }
	      if (utils.isObject(inlineOptions.events)) {
	        inlineOptions.events = Object.assign({}, inlineOptions.events);
	      }
	      return inlineOptions;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: this.props.className, id: this.containerId });
	    }
	  }]);

	  return ReactFC;
	}(_react2.default.Component);

	exports.default = ReactFC;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var rng = __webpack_require__(5);
	var bytesToUuid = __webpack_require__(6);

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
/* 5 */
/***/ (function(module, exports) {

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
/* 6 */
/***/ (function(module, exports) {

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
	  return ([bth[buf[i++]], bth[buf[i++]], 
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]],
		bth[buf[i++]], bth[buf[i++]],
		bth[buf[i++]], bth[buf[i++]]]).join('');
	}

	module.exports = bytesToUuid;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.isObject = isObject;
	exports.isCallable = isCallable;
	exports.isSameObjectContent = isSameObjectContent;
	exports.isUndefined = isUndefined;
	exports.deepCopyOf = deepCopyOf;
	function isObject(value) {
	  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
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

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ['type', 'id', 'width', 'height', 'dataFormat', 'dataSource', 'events', 'link', 'showDataLoadingMessage', 'showChartLoadingMessage', 'baseChartMessageFont', 'baseChartMessageFontSize', 'baseChartMessageColor', 'dataLoadStartMessage', 'dataLoadErrorMessage', 'dataInvalidMessage', 'dataEmptyMessage', 'typeNotSupportedMessage', 'loadMessage', 'renderErrorMessage', 'containerBackgroundColor', 'containerBackgroundOpacity', 'containerClassName', 'baseChartMessageImageHAlign', 'baseChartMessageImageVAlign', 'baseChartMessageImageAlpha', 'baseChartMessageImageScale', 'typeNotSupportedMessageImageHAalign', 'typeNotSupportedMessageImageVAlign', 'typeNotSupportedMessageImageAlpha', 'typeNotSupportedMessageImageScale', 'dataLoadErrorMessageImageHAlign', 'dataLoadErrorMessageImageVAlign', 'dataLoadErrorMessageImageAlpha', 'dataLoadErrorMessageImageScale', 'dataLoadStartMessageImageHAlign', 'dataLoadStartMessageImageVAlign', 'dataLoadStartMessageImageAlpha', 'dataLoadStartMessageImageScale', 'dataInvalidMessageImageHAlign', 'dataInvalidMessageImageVAlign', 'dataInvalidMessageImageAlpha', 'dataInvalidMessageImageScale', 'dataEmptyMessageImageHAlign', 'dataEmptyMessageImageVAlign', 'dataEmptyMessageImageAlpha', 'dataEmptyMessageImageScale', 'renderErrorMessageImageHAlign', 'renderErrorMessageImageVAlign', 'renderErrorMessageImageAlpha', 'renderErrorMessageImageScale', 'loadMessageImageHAlign', 'loadMessageImageVAlign', 'loadMessageImageAlpha', 'loadMessageImageScale'];

/***/ })
/******/ ])
});
;