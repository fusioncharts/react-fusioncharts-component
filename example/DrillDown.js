import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from '../lib/ReactFC';
import PropTypes from 'prop-types';

Charts(FusionCharts);
FusionTheme(FusionCharts);

class DrillDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showOverlaybtn: true,
      overlayZindex: 1,
      // Absolute position of Overlay Button
      positionH: (this.props.overlayBtn && this.props.overlayBtn.placement && this.props.overlayBtn.placement.includes('-')) ? this.props.overlayBtn.placement.split('-')[1] : 'right',
      positionV: (this.props.overlayBtn && this.props.overlayBtn.placement && this.props.overlayBtn.placement.includes('-')) ? this.props.overlayBtn.placement.split('-')[0] : 'top',
      selectedChild: 0,
      showDrillDown: false,
      // Parent Chart's Data Source
      dataSource: this.props.dataSource,
      // An array of indices which maps each 
      // data plot of parent with its nested Chart Component. 
      mappedIds: this.props.mappedIds, 
      borderColor: (this.props.overlayBtn && this.props.overlayBtn.borderColor) ? this.props.overlayBtn.borderColor : '#000',
      backgroundColor: (this.props.overlayBtn && this.props.overlayBtn.backgroundColor) ? this.props.overlayBtn.backgroundColor : '#F6F6F6',
      color: (this.props.overlayBtn && this.props.overlayBtn.color) ? this.props.overlayBtn.color : '#000',
      fontSize: (this.props.overlayBtn && this.props.overlayBtn.fontSize) ? this.props.overlayBtn.fontSize : '14px',
      padding: (this.props.overlayBtn && this.props.overlayBtn.padding) ? this.props.overlayBtn.padding : '3px',
      fontWeight: (this.props.fontWeight && this.props.overlayBtn.fontWeight) ? this.props.overlayBtn.fontWeight : 'bold',
      margin: (this.props.overlayBtn && this.props.overlayBtn.margin) ? this.props.overlayBtn.margin : '10px'
    };
  }

  // Listens to clicks on individual data plot clicks and 
  // replaces the original chart with that corresponding 
  // data plot's drilled down chart.
  plotClicked(e) {
    // Index of the data plot that is clicked.
    let index = e.data.index;
    // Number of children passed in parent chart
    let idArrLength = this.props.children.length;

    // This code will execute if array of integers is passed
    if(typeof this.state.mappedIds[0] == 'number') {
      for (let i = 0; i < this.state.mappedIds.length; i++) {
        let plotPosition = this.state.mappedIds[i];
        if(!this.state.showDrillDown && index == i && plotPosition != null && plotPosition < idArrLength) {
          this.setState({
            showDrillDown: true,
            selectedChild: plotPosition
          });
        }
      }
    // This code will execute if array of objects is passed
    } else if(typeof this.state.mappedIds[0] == 'object') {
      for (let i = 0; i < this.state.mappedIds.length; i++) {
        let plotPosition = this.state.mappedIds[i].plotPosition;
        let childPosition = this.state.mappedIds[i].childPosition;
        if(index == plotPosition && !this.state.showDrillDown && childPosition < idArrLength) {
          this.setState({
            showDrillDown: true,
            selectedChild: childPosition
          });
        }
      }
    }
  }

  renderComplete() {
    if(this.props && this.props.toggleParentOverlayBtnVisibility) {
      this.props.toggleParentOverlayBtnVisibility(false);
    }
  }

  toggleParentOverlayBtnVisibility(visibility) {
    this.setState({showOverlaybtn: visibility});
  }

  onClickOverlayBtn() {
    this.setState({ showDrillDown: false });
    if(this.props && this.props.toggleParentOverlayBtnVisibility && this.state.showDrillDown) {
      this.props.toggleParentOverlayBtnVisibility(true);
    }
  }

  render() {
    // In-line style for overlay button
    const btnStyle = {
      border: `1px solid ${this.state.borderColor}`,
      backgroundColor: `${this.state.backgroundColor}`,
      color: `${this.state.color}`,
      fontFamily: 'Verdana, sans',
      fontSize: `${this.state.fontSize}`,
      padding: `${this.state.padding}`,
      fontWeight: `${this.state.fontWeight}`,
      position: 'absolute',
      [this.state.positionH]: `${this.state.margin}`,
      [this.state.positionV]: `${this.state.margin}`,
      cursor: 'pointer',
      // zIndex: this.state.overlayZindex
    };

    // In-line style for root element of DrillDown component
    const rootStyle = {
      position: 'relative',
      display: 'inline-block'
    }

    const props = this.props;

    if(this.state.showDrillDown) {
      return (
        <div style={ rootStyle }>
          {/* Displaying Correct Drilled Down Chart. */}
          { React.cloneElement(
            this.props.children[this.state.selectedChild], 
            { 
              width: this.props.width, 
              height: this.props.height, 
              onRender: this.renderComplete.bind(this),
              // overlayBtn: this.props.overlayBtn,
              toggleParentOverlayBtnVisibility: this.toggleParentOverlayBtnVisibility.bind(this)
            }
          )}
          { this.state.showOverlaybtn ?
            <span style={ btnStyle }
              onClick={this.onClickOverlayBtn.bind(this)}>
                { 
                  this.props.overlayBtn && this.props.overlayBtn.message ? 
                  this.props.overlayBtn.message : 'Back'
                }
            </span> : null
          }
        </div>
      );
    } else {
      return (
        <ReactFC
            {...props}
            fcEvent-dataplotClick={this.plotClicked.bind(this)}
          />
      );
    }
  }
}

DrillDown.propTypes = {
  overlayBtn: PropTypes.objectOf(PropTypes.string),
  mappedIds: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      plotPosition: PropTypes.number,
      childPosition: PropTypes.number
    })),
    PropTypes.arrayOf(PropTypes.number)
  ]),
  dataSource: PropTypes.object,
  dataFormat: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  props: PropTypes.object
}

export default DrillDown;
