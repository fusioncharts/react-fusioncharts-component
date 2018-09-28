import React from 'react';
import PropTypes from 'prop-types';
import ReactFC from '../lib/ReactFC';


class DrillDown extends React.Component {
  // Resolve FusionCharts
  static fcRoot(core, ...modules) {
    ReactFC.fcRoot(core, ...modules);
  }

  constructor(props) {
    super(props);

    const { btnConfig, btnStyle } = props;
    this.finalBtnConfig = Object.assign({}, DrillDown.defaultProps.btnConfig, btnConfig);
    [this.positionV, this.positionH] = this.finalBtnConfig.placement.split('-');
    this.state = {
      isBtnVisible: true,
      selectedChild: -1,
      isDrilledDown: false,
    };

    /* Function Bindings */
    this.plotClicked = this.plotClicked.bind(this);
    this.onChildRendered = this.onChildRendered.bind(this);
    this.toggleParentBtnVisibility = this.toggleParentBtnVisibility.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);

    /* Default styles */
    this.wrapperStyle = {
      position: 'relative',
      display: 'inline-block',
    };

    this.defButtonStyle = {
      border: `1px solid ${this.finalBtnConfig.borderColor}`,
      backgroundColor: `${this.finalBtnConfig.backgroundColor}`,
      color: `${this.finalBtnConfig.color}`,
      fontFamily: `${this.finalBtnConfig.fontFamily}`,
      fontSize: `${this.finalBtnConfig.fontSize}`,
      padding: `${this.finalBtnConfig.padding}`,
      fontWeight: `${this.finalBtnConfig.fontWeight}`,
      position: 'absolute',
      [this.positionH]: `${this.finalBtnConfig.margin}`,
      [this.positionV]: `${this.finalBtnConfig.margin}`,
      cursor: 'pointer',
    };

    this.finBtnStyle = typeof btnStyle === 'undefined' ? this.defButtonStyle : btnStyle;
  }

  determinePlotMapType(plotChildMap) {
    let isNumberFound = false;
    let isObjectFound = false;
    plotChildMap.forEach((val) => {
      if (typeof val === 'undefined' || val === null) return;
      if (typeof val === 'number' && val > -1) isNumberFound = true;
      if (typeof val === 'object') isObjectFound = true;
    });
    if (isNumberFound && isObjectFound) {
      return 'invalid';
    }
    if (isNumberFound) return 'number';
    if (isObjectFound) return 'object';
    return 'noop';
  }

  plotClicked(e) {
    const { index } = e.data;
    const propChildren = Array.isArray(this.props.children) ?
      this.props.children : [this.props.children];
    const childrenLen = propChildren.length;
    const { plotChildMap } = this.props;
    if (childrenLen === 0) return;

    // Further Optimization needed.
    const mapType = this.determinePlotMapType(plotChildMap);

    // Case : Array of numbers
    if (mapType === 'number') {
      const childPosition = plotChildMap[index];
      if (childPosition === null || typeof childPosition === 'undefined' ||
        childPosition >= childrenLen || childPosition < 0) return;

      this.setState({
        selectedChild: childPosition,
        isDrilledDown: true,
      });
    }

    // Case : Array of objects
    if (mapType === 'object') {
      for (let i = 0; i < childrenLen; i++) {
        if (typeof plotChildMap[i] === 'undefined' || plotChildMap[i] === null) continue;
        const { plotPosition, childPosition } = plotChildMap[i];
        if (plotPosition === index &&
          (childPosition !== null && typeof childPosition !== 'undefined') &&
          childPosition < childrenLen && childPosition > -1) {
          this.setState({
            selectedChild: childPosition,
            isDrilledDown: true,
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

  cloneReactFCChild(reactFCElem, customProps) {
    return React.cloneElement(
      reactFCElem,
      customProps,
    );
  }

  onChildRendered() {
    if (this.props.toggleParentBtnVisibility) {
      this.props.toggleParentBtnVisibility(false);
    }
  }

  toggleParentBtnVisibility(isBtnVisible) {
    this.setState({ isBtnVisible });
  }

  onBtnClick() {
    this.setState({
      isDrilledDown: false,
    });
    if (this.props.toggleParentBtnVisibility) {
      this.props.toggleParentBtnVisibility(true);
    }
  }

  render() {
    let component;
    const { selectedChild, isBtnVisible } = this.state;
    const {
      children, width, height,
    } = this.props;
    const clonedElemConfig = {
      width,
      height,
      onRender: this.onChildRendered,
      toggleParentBtnVisibility: this.toggleParentBtnVisibility,
    };

    if (!this.state.isDrilledDown) {
      component = (
        <ReactFC
          {...this.props}
          fcEvent-dataplotClick={this.plotClicked}
        />
      );
    } else {
      const propChildren = Array.isArray(children) ? children : [children];
      component = (
        <div style={this.wrapperStyle}>
          {/* Children Chart */}
          {this.cloneReactFCChild(propChildren[selectedChild], clonedElemConfig)}
          {/* Back Button */}
          {
            isBtnVisible ?
              <button
                style={this.finBtnStyle}
                onClick={this.onBtnClick}
              >
                {this.finalBtnConfig.text}
              </button> : null
          }
        </div>
      );
    }

    return component;
  }
}

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
    margin: '10px',
  },
  btnStyle: undefined,
  dataSource: {},
  dataFormat: 'json',
  type: '',
  height: '',
  width: '',
};

DrillDown.propTypes = {
  plotChildMap: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      plotPosition: PropTypes.number,
      childPosition: PropTypes.number,
    })),
    PropTypes.arrayOf(PropTypes.number),
  ]),
  btnConfig: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    padding: PropTypes.string,
    fontFamily: PropTypes.string,
    placement: PropTypes.oneOf([
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
    ]),
    margin: PropTypes.string,
  }),
  btnStyle: PropTypes.object,
  dataSource: PropTypes.object,
  dataFormat: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default DrillDown;
