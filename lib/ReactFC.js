"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _v = _interopRequireDefault(require("uuid/v4"));

var utils = _interopRequireWildcard(require("./utils/utils"));

var _options = _interopRequireDefault(require("./utils/options"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ReactFC =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactFC, _React$Component);

  _createClass(ReactFC, null, [{
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

  function ReactFC(props) {
    var _this;

    _classCallCheck(this, ReactFC);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactFC).call(this, props));
    _this.containerId = (0, _v["default"])();
    _this.oldOptions = null;
    _this.FusionCharts = props.fcLibrary || ReactFC.fusionChartsCore || window.FusionCharts;
    return _this;
  }

  _createClass(ReactFC, [{
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
      this.chartObj.dispose();
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
          this.chartObj.setChartData(currData, String(currDataFormat).toLowerCase()); // If the chart dataFormat is changed then
          // animate the chart to show the changes

          this.chartObj.render();
          return;
        }
      }

      if (!this.isSameChartData(currData, oldData)) {
        if (!utils.isUndefined(currData)) {
          this.chartObj.setChartData(currData, // When dataFormat is not given, but data is changed,
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
      } // 2. Old has and Current doesn't


      if (!utils.checkIfDataTableExists(currData) && utils.checkIfDataTableExists(oldData)) {
        return false;
      } // 3. Both has, check ref is equal, return false only if not equal


      if (utils.checkIfDataTableExists(currData) && utils.checkIfDataTableExists(oldData) && currData.data !== oldData.data) {
        return false;
      } // 4. Clone oldData for diff


      var oldDataStringified = JSON.stringify(utils.cloneDataSource(oldData, 'diff')); // 5. Clone currentData for diff

      var currentDataStringified = JSON.stringify(utils.cloneDataSource(currData, 'diff')); // 6. return string check.

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
      return _react["default"].createElement("div", {
        className: this.props.className,
        id: this.containerId
      });
    }
  }]);

  return ReactFC;
}(_react["default"].Component);

var _default = ReactFC;
exports["default"] = _default;