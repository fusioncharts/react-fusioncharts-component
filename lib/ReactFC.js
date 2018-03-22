'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fusioncharts = require('fusioncharts');

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _utils = require('./utils/utils');

var utils = _interopRequireWildcard(_utils);

var _options = require('./utils/options');

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
        m(core);
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
      var currentOptions = this.resolveChartOptions(this.props);
      currentOptions.renderAt = this.containerId;

      this.chartObj = new this.FusionCharts(currentOptions);
      this.chartObj.render();
      this.oldOptions = currentOptions;
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