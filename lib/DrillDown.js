'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ReactFC = require('./ReactFC');

var _ReactFC2 = _interopRequireDefault(_ReactFC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrillDown = function (_React$Component) {
  _inherits(DrillDown, _React$Component);

  _createClass(DrillDown, null, [{
    key: 'fcRoot',

    // Resolve FusionCharts
    value: function fcRoot(core) {
      for (var _len = arguments.length, modules = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        modules[_key - 1] = arguments[_key];
      }

      _ReactFC2.default.fcRoot.apply(_ReactFC2.default, [core].concat(modules));
    }
  }]);

  function DrillDown(props) {
    var _this$defButtonStyle;

    _classCallCheck(this, DrillDown);

    var _this = _possibleConstructorReturn(this, (DrillDown.__proto__ || Object.getPrototypeOf(DrillDown)).call(this, props));

    var btnConfig = props.btnConfig,
        btnStyle = props.btnStyle;

    _this.finalBtnConfig = Object.assign({}, DrillDown.defaultProps.btnConfig, btnConfig);

    var _this$finalBtnConfig$ = _this.finalBtnConfig.placement.split('-');

    var _this$finalBtnConfig$2 = _slicedToArray(_this$finalBtnConfig$, 2);

    _this.positionV = _this$finalBtnConfig$2[0];
    _this.positionH = _this$finalBtnConfig$2[1];

    _this.state = {
      isBtnVisible: true,
      selectedChild: -1,
      isDrilledDown: false
    };

    /* Function Bindings */
    _this.plotClicked = _this.plotClicked.bind(_this);
    _this.onChildRendered = _this.onChildRendered.bind(_this);
    _this.toggleParentBtnVisibility = _this.toggleParentBtnVisibility.bind(_this);
    _this.onBtnClick = _this.onBtnClick.bind(_this);

    /* Default styles */
    _this.wrapperStyle = {
      position: 'relative',
      display: 'inline-block'
    };

    _this.defButtonStyle = (_this$defButtonStyle = {
      border: '1px solid ' + _this.finalBtnConfig.borderColor,
      backgroundColor: '' + _this.finalBtnConfig.backgroundColor,
      color: '' + _this.finalBtnConfig.color,
      fontFamily: '' + _this.finalBtnConfig.fontFamily,
      fontSize: '' + _this.finalBtnConfig.fontSize,
      padding: '' + _this.finalBtnConfig.padding,
      fontWeight: '' + _this.finalBtnConfig.fontWeight,
      position: 'absolute'
    }, _defineProperty(_this$defButtonStyle, _this.positionH, '' + _this.finalBtnConfig.margin), _defineProperty(_this$defButtonStyle, _this.positionV, '' + _this.finalBtnConfig.margin), _defineProperty(_this$defButtonStyle, 'cursor', 'pointer'), _this$defButtonStyle);

    _this.finBtnStyle = typeof btnStyle === 'undefined' ? _this.defButtonStyle : btnStyle;
    return _this;
  }

  _createClass(DrillDown, [{
    key: 'determinePlotMapType',
    value: function determinePlotMapType(plotChildMap) {
      var isNumberFound = false;
      var isObjectFound = false;
      plotChildMap.forEach(function (val) {
        if (typeof val === 'undefined' || val === null) return;
        if (typeof val === 'number' && val > -1) isNumberFound = true;
        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') isObjectFound = true;
      });
      if (isNumberFound && isObjectFound) {
        return 'invalid';
      }
      if (isNumberFound) return 'number';
      if (isObjectFound) return 'object';
      return 'noop';
    }
  }, {
    key: 'plotClicked',
    value: function plotClicked(e) {
      var index = e.data.index;

      var propChildren = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
      var childrenLen = propChildren.length;
      var plotChildMap = this.props.plotChildMap;

      if (childrenLen === 0) return;
      var mapType = this.determinePlotMapType(plotChildMap);
      // Case : Array of numbers
      if (mapType === 'number') {
        var childPosition = plotChildMap[index];
        if (childPosition === null || typeof childPosition === 'undefined' || childPosition >= childrenLen) return;

        this.setState({
          selectedChild: childPosition,
          isDrilledDown: true
        });
      }

      // Case : Array of objects
      if (mapType === 'object') {
        for (var i = 0; i < childrenLen; i++) {
          if (typeof plotChildMap[i] === 'undefined' || plotChildMap[i] === null) continue;
          var _plotChildMap$i = plotChildMap[i],
              plotPosition = _plotChildMap$i.plotPosition,
              _childPosition = _plotChildMap$i.childPosition;

          if (plotPosition === index && _childPosition && _childPosition > -1) {
            this.setState({
              selectedChild: _childPosition,
              isDrilledDown: true
            });
            return;
          }
        }
      }

      // Case : Heterogeneous
      if (mapType === 'invalid') {
        console.log('Invalid heterogeneous data: Please check proptypes for - plotChildMap');
      }
    }
  }, {
    key: 'cloneReactFCChild',
    value: function cloneReactFCChild(reactFCElem, customProps) {
      var rFCElem = _react2.default.cloneElement(reactFCElem, customProps);
      return rFCElem;
    }
  }, {
    key: 'onChildRendered',
    value: function onChildRendered() {
      if (this.props.toggleParentBtnVisibility) {
        this.props.toggleParentBtnVisibility(false);
      }
    }
  }, {
    key: 'toggleParentBtnVisibility',
    value: function toggleParentBtnVisibility(isBtnVisible) {
      this.setState({ isBtnVisible: isBtnVisible });
    }
  }, {
    key: 'onBtnClick',
    value: function onBtnClick() {
      this.setState({
        isDrilledDown: false
      });
      if (this.props.toggleParentBtnVisibility) {
        this.props.toggleParentBtnVisibility(true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var component = void 0;
      var _state = this.state,
          selectedChild = _state.selectedChild,
          isBtnVisible = _state.isBtnVisible;
      var _props = this.props,
          children = _props.children,
          width = _props.width,
          height = _props.height;

      var clonedElemConfig = {
        width: width,
        height: height,
        onRender: this.onChildRendered,
        toggleParentBtnVisibility: this.toggleParentBtnVisibility
      };

      if (!this.state.isDrilledDown) {
        component = _react2.default.createElement(_ReactFC2.default, _extends({}, this.props, {
          'fcEvent-dataplotClick': this.plotClicked
        }));
      } else {
        var propChildren = Array.isArray(children) ? children : [children];
        component = _react2.default.createElement(
          'div',
          { style: this.wrapperStyle },
          this.cloneReactFCChild(propChildren[selectedChild], clonedElemConfig),
          isBtnVisible ? _react2.default.createElement(
            'button',
            { style: this.finBtnStyle, onClick: this.onBtnClick },
            this.finalBtnConfig.text
          ) : null
        );
      }

      return component;
    }
  }]);

  return DrillDown;
}(_react2.default.Component);

DrillDown.defaultProps = {
  plotChildMap: [],
  btnConfig: {
    text: 'Back',
    color: '#000000',
    backgroundColor: '#F6F6F6',
    borderColor: '#000000',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '3px',
    fontFamily: 'Verdana, sans',
    placement: 'top-right',
    margin: '10px'
  },
  btnStyle: undefined,
  dataSource: {},
  dataFormat: 'json',
  type: '',
  height: '',
  width: ''
};

DrillDown.propTypes = {
  plotChildMap: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({
    plotPosition: _propTypes2.default.number,
    childPosition: _propTypes2.default.number
  })), _propTypes2.default.arrayOf(_propTypes2.default.number)]),
  btnConfig: _propTypes2.default.shape({
    text: _propTypes2.default.string,
    color: _propTypes2.default.string,
    backgroundColor: _propTypes2.default.string,
    borderColor: _propTypes2.default.string,
    fontSize: _propTypes2.default.string,
    fontWeight: _propTypes2.default.string,
    padding: _propTypes2.default.string,
    fontFamily: _propTypes2.default.string,
    placement: _propTypes2.default.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
    margin: _propTypes2.default.string
  }),
  btnStyle: _propTypes2.default.object,
  dataSource: _propTypes2.default.object,
  dataFormat: _propTypes2.default.string,
  type: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string
};

exports.default = DrillDown;