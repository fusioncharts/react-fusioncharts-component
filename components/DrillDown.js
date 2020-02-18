"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ReactFC = _interopRequireDefault(require("../lib/ReactFC"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DrillDown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DrillDown, _React$Component);

  _createClass(DrillDown, null, [{
    key: "fcRoot",
    // Resolve FusionCharts
    value: function fcRoot(core) {
      for (var _len = arguments.length, modules = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        modules[_key - 1] = arguments[_key];
      }

      _ReactFC["default"].fcRoot.apply(_ReactFC["default"], [core].concat(modules));
    }
  }]);

  function DrillDown(props) {
    var _this$defButtonStyle;

    var _this;

    _classCallCheck(this, DrillDown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DrillDown).call(this, props));
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

    _this.plotClicked = _this.plotClicked.bind(_assertThisInitialized(_this));
    _this.onChildRendered = _this.onChildRendered.bind(_assertThisInitialized(_this));
    _this.toggleParentBtnVisibility = _this.toggleParentBtnVisibility.bind(_assertThisInitialized(_this));
    _this.onBtnClick = _this.onBtnClick.bind(_assertThisInitialized(_this));
    /* Default styles */

    _this.wrapperStyle = {
      position: 'relative',
      display: 'inline-block'
    };
    _this.defButtonStyle = (_this$defButtonStyle = {
      border: "1px solid ".concat(_this.finalBtnConfig.borderColor),
      backgroundColor: "".concat(_this.finalBtnConfig.backgroundColor),
      color: "".concat(_this.finalBtnConfig.color),
      fontFamily: "".concat(_this.finalBtnConfig.fontFamily),
      fontSize: "".concat(_this.finalBtnConfig.fontSize),
      padding: "".concat(_this.finalBtnConfig.padding),
      fontWeight: "".concat(_this.finalBtnConfig.fontWeight),
      position: 'absolute'
    }, _defineProperty(_this$defButtonStyle, _this.positionH, "".concat(_this.finalBtnConfig.margin)), _defineProperty(_this$defButtonStyle, _this.positionV, "".concat(_this.finalBtnConfig.margin)), _defineProperty(_this$defButtonStyle, "cursor", 'pointer'), _this$defButtonStyle);
    _this.finBtnStyle = typeof btnStyle === 'undefined' ? _this.defButtonStyle : btnStyle;
    return _this;
  }

  _createClass(DrillDown, [{
    key: "determinePlotMapType",
    value: function determinePlotMapType(plotChildMap) {
      var isNumberFound = false;
      var isObjectFound = false;
      plotChildMap.forEach(function (val) {
        if (typeof val === 'undefined' || val === null) return;
        if (typeof val === 'number' && val > -1) isNumberFound = true;
        if (_typeof(val) === 'object') isObjectFound = true;
      });

      if (isNumberFound && isObjectFound) {
        return 'invalid';
      }

      if (isNumberFound) return 'number';
      if (isObjectFound) return 'object';
      return 'noop';
    }
  }, {
    key: "plotClicked",
    value: function plotClicked(e) {
      var index = e.data.index;
      var propChildren = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
      var childrenLen = propChildren.length;
      var plotChildMap = this.props.plotChildMap;
      if (childrenLen === 0) return; // Further Optimization needed.

      var mapType = this.determinePlotMapType(plotChildMap); // Case : Array of numbers

      if (mapType === 'number') {
        var childPosition = plotChildMap[index];
        if (childPosition === null || typeof childPosition === 'undefined' || childPosition >= childrenLen || childPosition < 0) return;
        this.setState({
          selectedChild: childPosition,
          isDrilledDown: true
        });
      } // Case : Array of objects


      if (mapType === 'object') {
        for (var i = 0; i < childrenLen; i++) {
          if (typeof plotChildMap[i] === 'undefined' || plotChildMap[i] === null) continue;
          var _plotChildMap$i = plotChildMap[i],
              plotPosition = _plotChildMap$i.plotPosition,
              _childPosition = _plotChildMap$i.childPosition;

          if (plotPosition === index && _childPosition !== null && typeof _childPosition !== 'undefined' && _childPosition < childrenLen && _childPosition > -1) {
            this.setState({
              selectedChild: _childPosition,
              isDrilledDown: true
            });
            return;
          }
        }
      } // Case : Heterogeneous


      if (mapType === 'invalid') {
        console.log('Invalid heterogeneous data: Please check proptypes for - plotChildMap');
      }
    }
  }, {
    key: "cloneReactFCChild",
    value: function cloneReactFCChild(reactFCElem, customProps) {
      return _react["default"].cloneElement(reactFCElem, customProps);
    }
  }, {
    key: "onChildRendered",
    value: function onChildRendered() {
      if (this.props.toggleParentBtnVisibility) {
        this.props.toggleParentBtnVisibility(false);
      }
    }
  }, {
    key: "toggleParentBtnVisibility",
    value: function toggleParentBtnVisibility(isBtnVisible) {
      this.setState({
        isBtnVisible: isBtnVisible
      });
    }
  }, {
    key: "onBtnClick",
    value: function onBtnClick() {
      this.setState({
        isDrilledDown: false
      });

      if (this.props.toggleParentBtnVisibility) {
        this.props.toggleParentBtnVisibility(true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var component;
      var _this$state = this.state,
          selectedChild = _this$state.selectedChild,
          isBtnVisible = _this$state.isBtnVisible;
      var _this$props = this.props,
          children = _this$props.children,
          width = _this$props.width,
          height = _this$props.height;
      var clonedElemConfig = {
        width: width,
        height: height,
        onRender: this.onChildRendered,
        toggleParentBtnVisibility: this.toggleParentBtnVisibility
      };

      if (!this.state.isDrilledDown) {
        component = _react["default"].createElement(_ReactFC["default"], _extends({}, this.props, {
          "fcEvent-dataplotClick": this.plotClicked
        }));
      } else {
        var propChildren = Array.isArray(children) ? children : [children];
        component = _react["default"].createElement("div", {
          style: this.wrapperStyle
        }, this.cloneReactFCChild(propChildren[selectedChild], clonedElemConfig), isBtnVisible ? _react["default"].createElement("button", {
          style: this.finBtnStyle,
          onClick: this.onBtnClick
        }, this.finalBtnConfig.text) : null);
      }

      return component;
    }
  }]);

  return DrillDown;
}(_react["default"].Component);

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
  plotChildMap: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].shape({
    plotPosition: _propTypes["default"].number,
    childPosition: _propTypes["default"].number
  })), _propTypes["default"].arrayOf(_propTypes["default"].number)]),
  btnConfig: _propTypes["default"].shape({
    text: _propTypes["default"].string,
    color: _propTypes["default"].string,
    backgroundColor: _propTypes["default"].string,
    borderColor: _propTypes["default"].string,
    fontSize: _propTypes["default"].string,
    fontWeight: _propTypes["default"].string,
    padding: _propTypes["default"].string,
    fontFamily: _propTypes["default"].string,
    placement: _propTypes["default"].oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
    margin: _propTypes["default"].string
  }),
  btnStyle: _propTypes["default"].object,
  dataSource: _propTypes["default"].object,
  dataFormat: _propTypes["default"].string,
  type: _propTypes["default"].string,
  height: _propTypes["default"].string,
  width: _propTypes["default"].string
};
var _default = DrillDown;
exports["default"] = _default;