"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ReactFC = _interopRequireDefault(require("../lib/ReactFC"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var DrillDown = /*#__PURE__*/function (_React$Component) {
  function DrillDown(props) {
    var _this;
    _classCallCheck(this, DrillDown);
    _this = _callSuper(this, DrillDown, [props]);
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
    _this.defButtonStyle = _defineProperty(_defineProperty(_defineProperty({
      border: "1px solid ".concat(_this.finalBtnConfig.borderColor),
      backgroundColor: "".concat(_this.finalBtnConfig.backgroundColor),
      color: "".concat(_this.finalBtnConfig.color),
      fontFamily: "".concat(_this.finalBtnConfig.fontFamily),
      fontSize: "".concat(_this.finalBtnConfig.fontSize),
      padding: "".concat(_this.finalBtnConfig.padding),
      fontWeight: "".concat(_this.finalBtnConfig.fontWeight),
      position: 'absolute'
    }, _this.positionH, "".concat(_this.finalBtnConfig.margin)), _this.positionV, "".concat(_this.finalBtnConfig.margin)), "cursor", 'pointer');
    _this.finBtnStyle = typeof btnStyle === 'undefined' ? _this.defButtonStyle : btnStyle;
    return _this;
  }
  _inherits(DrillDown, _React$Component);
  return _createClass(DrillDown, [{
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
      if (childrenLen === 0) return;

      // Further Optimization needed.
      var mapType = this.determinePlotMapType(plotChildMap);

      // Case : Array of numbers
      if (mapType === 'number') {
        var childPosition = plotChildMap[index];
        if (childPosition === null || typeof childPosition === 'undefined' || childPosition >= childrenLen || childPosition < 0) return;
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
          if (plotPosition === index && _childPosition !== null && typeof _childPosition !== 'undefined' && _childPosition < childrenLen && _childPosition > -1) {
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
    key: "cloneReactFCChild",
    value: function cloneReactFCChild(reactFCElem, customProps) {
      return /*#__PURE__*/_react["default"].cloneElement(reactFCElem, customProps);
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
        component = /*#__PURE__*/_react["default"].createElement(_ReactFC["default"], _extends({}, this.props, {
          "fcEvent-dataplotClick": this.plotClicked
        }));
      } else {
        var propChildren = Array.isArray(children) ? children : [children];
        component = /*#__PURE__*/_react["default"].createElement("div", {
          style: this.wrapperStyle
        }, this.cloneReactFCChild(propChildren[selectedChild], clonedElemConfig), isBtnVisible ? /*#__PURE__*/_react["default"].createElement("button", {
          style: this.finBtnStyle,
          onClick: this.onBtnClick
        }, this.finalBtnConfig.text) : null);
      }
      return component;
    }
  }], [{
    key: "fcRoot",
    value:
    // Resolve FusionCharts
    function fcRoot(core) {
      for (var _len = arguments.length, modules = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        modules[_key - 1] = arguments[_key];
      }
      _ReactFC["default"].fcRoot.apply(_ReactFC["default"], [core].concat(modules));
    }
  }]);
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
var _default = exports["default"] = DrillDown;