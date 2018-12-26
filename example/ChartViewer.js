import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import ReactFC from '../lib/ReactFC';

// Charts(FusionCharts);
// TimeSeries(FusionCharts);
// OceanTheme(FusionCharts);
ReactFC.fcRoot(FusionCharts, Charts, TimeSeries);

const myDataSource = {
  chart: {
    caption: "Harry's ss",
    subCaption: 'Top 5 stores in last month by revenue',
    numberPrefix: '$',
    theme: 'ocean'
  },
  data: [
    {
      label: 'Bakersfield Central',
      value: '880000'
    },
    {
      label: 'Garden Groove harbour',
      value: '730000'
    },
    {
      label: 'Los Angeles Topanga',
      value: '590000'
    },
    {
      label: 'Compton-Rancho Dom',
      value: '520000'
    },
    {
      label: 'Daly City Serramonte',
      value: '330000'
    }
  ]
};

const jsonify = res => res.json();
const dataFetch = fetch(
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json'
).then(jsonify);
const schemaFetch = fetch(
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json'
).then(jsonify);

class ChartViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeseriesDs: {
        type: 'timeseries',
        renderAt: 'container',
        width: '90%',
        height: 350,
        dataSource: {
          caption: { text: 'Online Sales of a SuperStore in the US' },
          data: null,
          yAxis: [
            {
              plot: [
                {
                  value: 'Sales ($)'
                }
              ]
            }
          ]
        }
      }
    };

    this.onChangeSize = this.onChangeSize.bind(this);
    this.onFetchData = this.onFetchData.bind(this);
    this.onChangeCaption = this.onChangeCaption.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.onFetchData();
  }

  onChangeSize() {
    const timeseriesDs = { ...this.state.timeseriesDs };
    timeseriesDs.height = 600;
    timeseriesDs.width = 600;
    this.setState({ timeseriesDs }, () => {
      console.log(this.state.timeseriesDs);
    });
  }

  onFetchData() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs
      });
    });
  }

  onChangeCaption() {
    // console.log(this.state.timeseriesDs);
    const timeseriesDs = { ...this.state.timeseriesDs };
    timeseriesDs.dataSource.caption.text = 'Random';
    this.setState(
      {
        timeseriesDs
      },
      () => {
        // this.onChangeSize();
      }
    );
  }

  onChange() {
    this.onChangeCaption();
    this.onChangeSize();
  }

  render() {
    return (
      <div>
        {/* <ReactFC {...this.state} /> */}
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
          'loading'
        )}
        <div>
          <button onClick={this.onChangeSize}>Change Size</button>
          <button onClick={this.onChangeCaption}>Change Caption</button>
          <button onClick={this.onChange}>Change Both</button>
        </div>
      </div>
    );
  }
}

export default ChartViewer;
