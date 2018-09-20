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
      dataSource: this.props.dataSource,
      mappedIds: this.props.mappedIds,
      chartConfig: {
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

  plotClicked(e, d) {
    if(!this.state.showDrillDown) {
      let index = e.data.index;
      let plotPosition = this.state.mappedIds[index];

      console.log(index, plotPosition);
      console.log(e)

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
            <button onClick={() => this.setState({showDrillDown: false})}>back</button>
            <div>{this.props.children[this.state.selectedChild]}</div>
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
