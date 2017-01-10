(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactFC = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _fusioncharts = (typeof window !== "undefined" ? window['FusionCharts'] : typeof global !== "undefined" ? global['FusionCharts'] : null);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var ReactFC = (function (_React$Component) {
    _inherits(ReactFC, _React$Component);

    function ReactFC(props) {
        var _this = this;

        _classCallCheck(this, ReactFC);

        _get(Object.getPrototypeOf(ReactFC.prototype), 'constructor', this).call(this, props);

        var propsObj = props;

        this.state = {};

        this.fcConfig = props;
        this.renderAt = propsObj.renderAt;

        this.chartObj = new _fusioncharts2['default'](this.fcConfig);

        this.getRenderAt = function () {
            return _this.renderAt || _this.chartObj.id + '-container';
        };
    }

    _createClass(ReactFC, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var global = this;

            global.chartObj.render(global.getRenderAt());
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.chartObj && this.chartObj.dispose();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var global = this,
                fcConfig = global.fcConfig,
                props = global.props,
                chartObj = global.chartObj,
                arrImpactedBy;

            if (fcConfig.type !== props.type) {
                chartObj.chartType(props.type);
            }

            if (fcConfig.dataSource !== props.dataSource) {
                chartObj.setChartData(props.dataSource, props.dataFormat);
            }

            if (fcConfig.width !== props.width || fcConfig.height !== props.height) {
                chartObj.resizeTo(props.width, props.height);
            }

            arrImpactedBy = fcConfig.impactedBy;
            if (arrImpactedBy && arrImpactedBy.length > 0 && arrImpactedBy.indexOf(props.eventSource) > -1) {
                chartObj.setChartAttribute(global.fcConfig);
                chartObj.setChartData(fcConfig.dataSource);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var global = this,
                renderAt = global.getRenderAt();

            return _react2['default'].createElement('div', { className: global.state.className, id: renderAt });
        }
    }]);

    return ReactFC;
})(_react2['default'].Component);

exports['default'] = ReactFC;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});