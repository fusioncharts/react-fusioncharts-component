import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from '../lib/ReactFC';

Charts(FusionCharts);
FusionTheme(FusionCharts);

const myDataSource = {
  chart: {
    caption: 'PARENT',
    subCaption: 'Top 5 stores in last month by revenue',
    numberPrefix: '$',
    theme: 'fusion',
  },
  data: [
    {
      label: 'Bakersfield Central',
      value: '880000',
    },
    {
      label: 'Garden Groove harbour',
      value: '730000',
    },
    {
      label: 'Los Angeles Topanga',
      value: '590000',
    },
    {
      label: 'Compton-Rancho Dom',
      value: '520000',
    },
    {
      label: 'Daly City Serramonte',
      value: '330000',
    },
  ],
};

class DrillDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChild: 0,
      showDrillDown: false,
      dataSource: this.props.dataSource, // Parent Chat's Data Source
      mappedIds: this.props.mappedIds, // An array of indices which maps each data plot of parent with its nested Chart Component.
      chartConfig: { // Parent Chart Config.
        type: 'column2d',
        width: 600,
        height: 400,
        dataFormat: 'json',
        dataSource: this.props.dataSource,
      }
    };
  }

  componentDidMount() {
    console.log(this.state);
    console.log(this.props.children);
  }

  // Listens to clicks on individual data plot clicks and replaces the original chart with that corresponding data plot's drilled down chart.
  plotClicked(e) {
    if (!this.state.showDrillDown) {
      //Index of the data plot that is clicked.
      let index = e.data.index;
      //Index of Drilled Down Chart.
      let plotPosition = this.state.mappedIds[index];

      console.log(index, plotPosition);
      console.log(e);

      this.setState({
        showDrillDown: true,
        selectedChild: plotPosition
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.showDrillDown ?
          <div>
            <button
              onClick={() => this.setState({ showDrillDown: false })}>
                back
            </button>
            <div>{this.props.children[this.state.selectedChild]}</div> {/* Displaying Correct Drilled Down Chart. */}
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
