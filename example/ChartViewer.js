import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Column2d from 'fusioncharts/viz/column2d';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from '../lib/ReactFC';

// Charts(FusionCharts);
// TimeSeries(FusionCharts);
// OceanTheme(FusionCharts);
ReactFC.fcRoot(FusionCharts, Charts, TimeSeries, FusionTheme);

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

// const jsonify = res => res.json();
// const dataFetch = fetch(
//   'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json'
// ).then(jsonify);
// const schemaFetch = fetch(
//   'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json'
// ).then(jsonify);

class ChartViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeseriesDs: {
        type: 'column2d',
        renderAt: 'container',
        width: '90%',
        height: 350,
        dataSource: {
          chart: {
            caption: "Harry's ss",
            subCaption: 'Top 5 stores in last month by revenue',
            numberPrefix: '$'
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
        }
      }
    };

    this.onChangeSize = this.onChangeSize.bind(this);
    this.onFetchData = this.onFetchData.bind(this);
    this.onChangeCaption = this.onChangeCaption.bind(this);
  }

  componentDidMount() {
    // this.onFetchData();
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
    // Promise.all([dataFetch, schemaFetch]).then(res => {
    //   const data = res[0];
    //   const schema = res[1];
    //   const fusionTable = new FusionCharts.DataStore().createDataTable(
    //     data,
    //     schema
    //   );
    //   const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
    //   timeseriesDs.dataSource.data = fusionTable;
    //   this.setState({
    //     timeseriesDs
    //   });
    // });
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

  render() {
    return (
      <div>
        {/* <ReactFC {...this.state} /> */}
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC
            type="line"
            width="600"
            height="400"
            dataSource={{
              chart: {
                theme: 'fusion',
                caption: 'Total footfall in Bakersfield Central',
                subCaption: 'Last week',
                xAxisName: 'Day',
                yAxisName: 'No. of Visitors',
                lineThickness: '2',
                showXAxisLine: 1,
                showYAxisLine: 1,
                numDivLines: 7,
                numVDivLines: 7,
                showToolTip: 1
              },
              data: [
                {
                  label: 'Mon',
                  value: '15123'
                },
                {
                  label: 'Tue',
                  value: '14233'
                },
                {
                  label: 'Wed',
                  value: '23507'
                },
                {
                  label: 'Thu',
                  value: '9110'
                },
                {
                  label: 'Fri',
                  value: '15529'
                },
                {
                  label: 'Sat',
                  value: '20803'
                },
                {
                  label: 'Sun',
                  value: '19202'
                }
              ]
            }}
          />
        ) : (
          'loading'
        )}
        <div>
          <button onClick={this.onChangeSize}>Change Size</button>
          <button onClick={this.onChangeCaption}>Change Caption</button>
        </div>
      </div>
    );
  }
}

export default ChartViewer;
