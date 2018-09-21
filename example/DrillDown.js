import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from '../lib/ReactFC';

Charts(FusionCharts);
FusionTheme(FusionCharts);

class DrillDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChild: 0,
      showDrillDown: false,
      // Parent Chat's Data Source
      dataSource: this.props.dataSource,
      // An array of indices which maps each 
      // data plot of parent with its nested Chart Component. 
      mappedIds: this.props.mappedIds, 
      borderColor: (this.props.overlayBtn && this.props.overlayBtn.borderColor) ? this.props.overlayBtn.borderColor : '#000',
      backgroundColor: (this.props.overlayBtn && this.props.overlayBtn.backgroundColor) ? this.props.overlayBtn.backgroundColor : '#F6F6F6',
      color: (this.props.overlayBtn && this.props.overlayBtn.color) ? this.props.overlayBtn.color : '#000',
      fontSize: (this.props.overlayBtn && this.props.overlayBtn.fontSize) ? this.props.overlayBtn.fontSize : '14px'
    };
  }

  // Listens to clicks on individual data plot clicks and 
  // replaces the original chart with that corresponding 
  // data plot's drilled down chart.
  plotClicked(e) {
    //Index of the data plot that is clicked.
    let index = e.data.index;
    //Index of Drilled Down Chart.
    let plotPosition = this.state.mappedIds[index];

    if (!this.state.showDrillDown && plotPosition >= 0) {
      this.setState({
        showDrillDown: true,
        selectedChild: plotPosition
      });
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
      padding: '3px',
      fontWeight: 'bold',
      position: 'absolute',
      top: '0px',
      left: `${this.props.width}px`,
      cursor: 'pointer',
    };

    console.log(btnStyle);

    return (
      <div style={{
        position: 'relative',
      }}>
        { this.state.showDrillDown ?
          <div style={{ position: 'relative' }}>
            <span style={ btnStyle }
              onClick={() => this.setState({ showDrillDown: false })}>
              { 
                this.props.overlayBtn && this.props.overlayBtn.message ? 
                this.props.overlayBtn.message : 'Revert'
              }
            </span>
            {/* Displaying Correct Drilled Down Chart. */}
            { this.props.children[this.state.selectedChild] } 
          </div> :
          <ReactFC
            type={this.props.type}
            width={this.props.width}
            height={this.props.height}
            dataFormat={this.props.dataFormat}
            dataSource={this.props.dataSource}
            fcEvent-dataplotClick={this.plotClicked.bind(this)}
          />
        }
      </div>
    );
  }
}

export default DrillDown;
