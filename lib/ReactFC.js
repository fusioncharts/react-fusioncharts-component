"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _uuid = require("uuid");
var utils = _interopRequireWildcard(require("./utils/utils"));
var _options = _interopRequireDefault(require("./utils/options"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var ReactFC = /*#__PURE__*/function (_React$Component) {
  function ReactFC(props) {
    var _this;
    _classCallCheck(this, ReactFC);
    _this = _callSuper(this, ReactFC, [props]);
    _this.initialUnmount = false;
    _this.containerRef = /*#__PURE__*/_react["default"].createRef();
    _this.containerId = (0, _uuid.v4)();
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
      if (!this.initialUnmount) {
        var _this$props$type;
        this.initialUnmount = true;
        var isMapChart = (_this$props$type = this.props.type) === null || _this$props$type === void 0 ? void 0 : _this$props$type.toLowerCase().includes("map");
        if (!isMapChart) this.chartObj.dispose();
      } else {
        this.chartObj.dispose();
      }
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
      this.checkAndUpdateRestOptions(_options["default"].filter(function (option) {
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
    key: "checkAndUpdateChartType",
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
    key: "checkAndUpdateChartData",
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
          return;
        }
      }
      if (!this.isSameChartData(currData, oldData)) {
        if (!utils.isUndefined(currData)) {
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
      if (utils.checkIfDataTableExists(currData) && !utils.checkIfDataTableExists(oldData)) {
        return false;
      }
      // 2. Old has and Current doesn't
      if (!utils.checkIfDataTableExists(currData) && utils.checkIfDataTableExists(oldData)) {
        return false;
      }
      // 3. Both has, check ref is equal, return false only if not equal
      if (utils.checkIfDataTableExists(currData) && utils.checkIfDataTableExists(oldData) && currData.data !== oldData.data) {
        return false;
      }
      // 4. Clone oldData for diff
      var oldDataStringified = JSON.stringify(utils.cloneDataSource(oldData, 'diff'));
      // 5. Clone currentData for diff
      var currentDataStringified = JSON.stringify(utils.cloneDataSource(currData, 'diff'));
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
    key: "detectChartEventsChange",
    value: function detectChartEventsChange(currEvents, oldEvents) {
      if (utils.isObject(currEvents) && utils.isObject(oldEvents)) {
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
    key: "isSameOptionValue",
    value: function isSameOptionValue(currValue, oldValue) {
      if (utils.isObject(currValue) && utils.isObject(oldValue)) {
        return utils.isSameObjectContent(currValue, oldValue);
      }
      return String(currValue) === String(oldValue);
    }
  }, {
    key: "renderChart",
    value: function renderChart() {
      var _this4 = this;
      var currentOptions = this.resolveChartOptions(this.props);
      var events = {};
      // passing the actual DOM element
      if (this.containerRef.current && this.props.renderInShadowDom) {
        currentOptions.renderAt = this.containerRef.current;
      } else {
        currentOptions.renderAt = this.containerId;
      }
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
      var inlineOptions = _options["default"].reduce(function (options, optionName) {
        options[optionName] = props[optionName];
        return options;
      }, {});
      Object.assign(inlineOptions, chartConfig);
      if (utils.isObject(inlineOptions.dataSource) && !utils.checkIfDataTableExists(inlineOptions.dataSource)) {
        inlineOptions.dataSource = utils.deepCopyOf(inlineOptions.dataSource);
      } else if (utils.isObject(inlineOptions.dataSource) && utils.checkIfDataTableExists(inlineOptions.dataSource)) {
        inlineOptions.dataSource = utils.cloneDataSource(inlineOptions.dataSource, 'clone');
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
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.containerRef,
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
}(_react["default"].Component);
var _default = exports["default"] = ReactFC;