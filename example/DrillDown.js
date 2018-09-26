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
      // Absolute position of Overlay Button
      positionH: (this.props.defaultOverlayBtnSettings && this.props.defaultOverlayBtnSettings.placement && this.props.defaultOverlayBtnSettings.placement.includes('-')) ? this.props.defaultOverlayBtnSettings.placement.split('-')[1] : 'right',
      positionV: (this.props.defaultOverlayBtnSettings && this.props.defaultOverlayBtnSettings.placement && this.props.defaultOverlayBtnSettings.placement.includes('-')) ? this.props.defaultOverlayBtnSettings.placement.split('-')[0] : 'top',
      selectedChild: 0,
      showDrillDown: false,
      // Parent Chart's Data Source
      dataSource: this.props.dataSource,
      // An array of indices which maps each 
      // data plot of parent with its nested Chart Component. 
      mappedIds: this.props.mappedIds, 
      borderColor: (this.props.defaultOverlayBtnSettings && this.props.defaultOverlayBtnSettings.borderColor) ? this.props.defaultOverlayBtnSettings.borderColor : '#000',
      backgroundColor: (this.props.defaultOverlayBtnSettings && this.props.defaultOverlayBtnSettings.backgroundColor) ? this.props.defaultOverlayBtnSettings.backgroundColor : '#F6F6F6',
      color: (this.props.defaultOverlayBtnSettings && this.props.defaultOverlayBtnSettings.color) ? this.props.defaultOverlayBtnSettings.color : '#000',
      fontSize: (this.props.defaultOverlayBtnSettings && this.props.defaultOverlayBtnSettings.fontSize) ? this.props.defaultOverlayBtnSettings.fontSize : '14px',
      padding: (this.props.defaultOverlayBtnSettings && this.props.defaultOverlayBtnSettings.padding) ? this.props.defaultOverlayBtnSettings.padding : '3px',
      fontWeight: (this.props.fontWeight && this.props.defaultOverlayBtnSettings.fontWeight) ? this.props.defaultOverlayBtnSettings.fontWeight : 'bold',
      margin: (this.props.defaultOverlayBtnSettings && this.props.defaultOverlayBtnSettings.margin) ? this.props.defaultOverlayBtnSettings.margin : '10px',
      fontFamily: (this.props.defaultOverlayBtnSettings && this.props.defaultOverlayBtnSettings.fontFamily) ? this.props.defaultOverlayBtnSettings.fontFamily : 'Verdana, sans',
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

  // Checks whether our current Chart has a parent whose Overlay Button an be hidden.
  renderComplete() {
    if(this.props && this.props.toggleParentOverlayBtnVisibility) {
      this.props.toggleParentOverlayBtnVisibility(false);
    }
  }

  // Toggles the visibilty of the Overlay Button
  toggleParentOverlayBtnVisibility(visibility) {
    this.setState({ showOverlaybtn: visibility });
  }

  // Handles click of the Overlay Button
  onClickOverlayBtn() {
    this.setState({ showDrillDown: false });
    if(this.props && this.props.toggleParentOverlayBtnVisibility && this.state.showDrillDown) {
      this.props.toggleParentOverlayBtnVisibility(true);
    }
  }

  // Configurable events for linked charts
  beforeLinkedItemOpen() {

  }

  linkedItemOpened() {

  }

  beforeLinkedItemClosed() {

  }

  linkedItemClosed() {

  }

  render() {
    // In-line style for default overlay button
    const btnStyle = {
      border: `1px solid ${this.state.borderColor}`,
      backgroundColor: `${this.state.backgroundColor}`,
      color: `${this.state.color}`,
      fontFamily: `${this.state.fontFamily}`,
      fontSize: `${this.state.fontSize}`,
      padding: `${this.state.padding}`,
      fontWeight: `${this.state.fontWeight}`,
      position: 'absolute',
      [this.state.positionH]: `${this.state.margin}`,
      [this.state.positionV]: `${this.state.margin}`,
      cursor: 'pointer'
    };

    // In-line style for root element of DrillDown component
    const rootStyle = {
      position: 'relative',
      display: 'inline-block'
    }

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
              toggleParentOverlayBtnVisibility: this.toggleParentOverlayBtnVisibility.bind(this)
            }
          )}
          { this.state.showOverlaybtn ?
            <button style={ 
              this.props.customOverlayBtnStyle === undefined ? 
              btnStyle : {cursor: 'pointer', ...this.props.customOverlayBtnStyle}
            }
              onClick={this.onClickOverlayBtn.bind(this)}>
                { 
                  this.props.defaultOverlayBtnSettings && this.props.defaultOverlayBtnSettings.message ? 
                  this.props.defaultOverlayBtnSettings.message : 'Back'
                }
            </button> : null
          }
        </div>
      );
    } else {
      return (
        <ReactFC
          {...this.props}
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
