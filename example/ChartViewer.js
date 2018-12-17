import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import ReactFC from '../lib/ReactFC';

Charts(FusionCharts);
TimeSeries(FusionCharts);
OceanTheme(FusionCharts);

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
      type: 'column2d',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: myDataSource,
      timeseriesDs: {
        type: 'timeseries',
        renderAt: 'container',
        width: '90%',
        height: 350,
        dataSource: {
          data: null,
          yAxis: [
            {
              plot: [
                {
                  value: 'Sales ($)'
                }
              ]
            }
          ],
          caption: {
            text: 'Online Sales of a SuperStore in the US'
          }
        }
      }
    };

    this.onClick = this.onClick.bind(this);
    this.onFetchData = this.onFetchData.bind(this);
  }

  componentDidMount() {
    this.onFetchData();
  }

  onClick() {
    this.setState({
      dataFormat: 'xml',
      dataSource: `<chart caption="Top 10 Most Popular Sports in the World" subcaption="Based on number of viewers" yaxisname="Number of Viewers" plotgradientcolor="" bgcolor="FFFFFF" showplotborder="0" divlinecolor="CCCCCC" showvalues="1" showcanvasborder="0" canvasbordercolor="CCCCCC" canvasborderthickness="1" showyaxisvalues="0" showlegend="1" showshadow="0" labelsepchar=": " basefontcolor="000000" labeldisplay="AUTO" numberscalevalue="1000,1000,1000" numberscaleunit="K,M,B" palettecolors="#008ee4,#9b59b6,#6baa01,#e44a00,#f8bd19,#d35400,#bdc3c7,#95a5a6,#34495e,#1abc9c" showborder="0"  rotateValues="0" placevaluesInside="0" valueFontColor="#909090" theme="ocean">
      <set label="Football" value="3500000000" tooltext="Popular in: {br}Europe{br}Africa{br}Asia{br}Americas" />
      <set label="Cricket" value="3000000000" tooltext="Popular in: {br}India{br}UK{br}Pakistan{br}Australia" />
      <set label="Field Hockey" value="2200000000" tooltext="Popular in: {br}Asia{br}Europe{br}Africa{br}Australia" />
      <set label="Tennis" value="1000000000" color="e44a00" tooltext="Popular in: {br}Europe{br}Americas{br}Asia" />
      <set label="Volleyball" value="900000000" tooltext="Popular in: {br}Asia{br}Europe{br}Americas{br}Australia" />
      <set label="Table Tennis" value="900000000" tooltext="Popular in: {br}Asia{br}Europe{br}Africa{br}Americas" />
      <set label="Baseball" value="500000000" tooltext="Popular in: {br}US{br}Japan{br}Cuba{br}Dominican Republic" />
      <set label="Golf" value="400000000" tooltext="Popular in: {br}US{br}Canada{br}Europe" />
      <set label="Basketball" value="400000000" tooltext="Popular in: {br}US{br}Canada" />
      <set label="American football" value="390000000" tooltext="Popular in:{br}US" />
  </chart>`
    });
  }

  onFetchData() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];

      // console.log(data);
      // console.log(schema);
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );

      this.setState(
        {
          timeseriesDs: {
            ...this.state.timeseriesDs,
            dataSource: {
              ...this.state.timeseriesDs.dataSource,
              data: fusionTable
            }
          }
        },
        () => {
          // console.log(this.state.timeseriesDs);
        }
      );
    });
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
          <button onClick={this.onFetchData}>Click</button>
        </div>
      </div>
    );
  }
}

export default ChartViewer;
