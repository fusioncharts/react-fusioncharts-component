import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from '../lib/ReactFC';

ReactFC.fcRoot(FusionCharts, Charts, TimeSeries, FusionTheme);

const BAR = 'bar2d';

class ChartViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inverted: false,
      type: BAR,
      dataSource: {
        chart: {
          caption: 'Countries With Most Oil Reserves [2017-18]',
          subCaption: 'In MMbbl = One Million barrels',
          xAxisName: 'Country',
          yAxisName: 'Reserves (MMbbl)',
          numberSuffix: 'K',
          theme: 'fusion'
        },
        data: [
          { label: 'Venezuela', value: '290' },
          { label: 'Saudi', value: '260' },
          { label: 'Canada', value: '180' },
          { label: 'Iran', value: '140' },
          { label: 'Russia', value: '115' },
          { label: 'UAE', value: '100' },
          { label: 'US', value: '30' },
          { label: 'China', value: '300' }
        ]
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState(({ dataSource }) => ({
      dataSource: {
        ...dataSource,
        chart: { ...dataSource.chart, caption: 'CHANGED IT!!!!!!!' }
      }
    }));
  }

  render() {
    return (
      <div>
        <ReactFC
          type={this.state.type}
          width={this.state.inverted ? '400' : '600'}
          height={this.state.inverted ? '600' : '400'}
          dataFormat="json"
          dataSource={this.state.dataSource}
        />
        <button onClick={this.onChange}>CHANGE</button>
      </div>
    );
  }
}

export default ChartViewer;
