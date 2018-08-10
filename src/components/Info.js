import React from 'react';
import CodeMirror from "react-codemirror";
import 'codemirror/mode/javascript/javascript';

var options = {
  tabSize: "4",
  smartIndent: true,
  lineNumbers: true,
  readOnly: true,
  theme: 'dracula',
  mode: 'javascript',
  viewportMargin: Infinity
};

var chartJSON = {
  chart: {
    caption: 'Countries With Most Oil Reserves [2017-18]',
    subCaption: 'In MMbbl = One Million barrels',
    xAxisName: 'Country',
    yAxisName: 'Reserves (MMbbl)',
    numberSuffix: 'K',
    theme: 'fusion'
  },
  data: [
    {
      label: 'Venezuela',
      value: '290'
    },
    {
      label: 'Saudi',
      value: '260'
    },
    {
      label: 'Canada',
      value: '180'
    },
    {
      label: 'Iran',
      value: '140'
    },
    {
      label: 'Russia',
      value: '115'
    },
    {
      label: 'UAE',
      value: '100'
    },
    {
      label: 'US',
      value: '30'
    },
    {
      label: 'China',
      value: '30'
    }
  ]
};

var mapsJSON = {
  "chart": {
      "caption": "Average Annual Population Growth",
      "subcaption": " 1955-2015",
      "numbersuffix": "%",
      "includevalueinlabels": "1",
      "labelsepchar": ": ",
      "entityFillHoverColor": "#FFF9C4",
      "theme": "fusion"
  },
  "colorrange": {
      "minvalue": "0",
      "code": "#FFE0B2",
      "gradient": "1",
      "color": [
          {
              "minvalue": "0.5",
              "maxvalue": "1.0",
              "color": "#FFD74D"
          },
          {
              "minvalue": "1.0",
              "maxvalue": "2.0",
              "color": "#FB8C00"
          },
          {
              "minvalue": "2.0",
              "maxvalue": "3.0",
              "color": "#E65100"
          }
      ]
  },
  "data": [
      {
          "id": "NA",
          "value": ".82",
          "showLabel": "1"
      },
      {
          "id": "SA",
          "value": "2.04",
          "showLabel": "1"
      },
      {
          "id": "AS",
          "value": "1.78",
          "showLabel": "1"
      },
      {
          "id": "EU",
          "value": ".40",
          "showLabel": "1"
      },
      {
          "id": "AF",
          "value": "2.58",
          "showLabel": "1"
      },
      {
          "id": "AU",
          "value": "1.30",
          "showLabel": "1"
      }
  ]
};

var code1 = "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport FusionCharts from 'fusioncharts/core';\nimport Column2D from 'fusioncharts/viz/column2d';\nimport ReactFC from 'react-fusioncharts';\nimport FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';\n\nReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);\n\nconst myDataSource = " + JSON.stringify(chartJSON, null, "\t") + ";\n\nconst chartConfigs = {\n  \ttype: 'column2d',\n  \twidth: 600,\n  \theight: 400,\n  \tdataFormat: 'json',\n  \tdataSource: myDataSource,\n};\n\nReactDOM.render(\n  \t<ReactFC {...chartConfigs} />,\n  \tdocument.getElementById('root'),\n);";
var code2 = "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport FusionCharts from 'fusioncharts/core';\nimport Maps from 'fusioncharts/maps';\nimport World from 'fusioncharts/maps/es/fusioncharts.world';\nimport ReactFC from 'react-fusioncharts';\nimport FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';\n\nReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);\n\nconst myDataSource = " + JSON.stringify(mapsJSON, null, "\t") + ";\n\nconst chartConfigs = {\n  \ttype: 'world',\n  \twidth: 600,\n  \theight: 400,\n  \tdataFormat: 'json',\n  \tdataSource: myDataSource,\n};\n\nReactDOM.render(\n  \t<ReactFC {...chartConfigs} />,\n  \tdocument.getElementById('root'),\n);";
var code3 = "import React, { Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport FusionCharts from 'fusioncharts/core';\nimport Column2D from 'fusioncharts/viz/column2d';\nimport ReactFC from 'react-fusioncharts';\nimport FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';\n\nReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);\n\nconst myDataSource = " + JSON.stringify(chartJSON, null, "\t") + ";\n\nconst chartConfigs = {\n  type: 'column2d',\n  width: 600,\n  height: 400,\n  dataFormat: 'json',\n  dataSource: myDataSource,\n};\n\nclass Chart extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      actualValue: 'Hover on the plot to see the value along with the label',\n    };\n\n    this.showPlotValue = this.showPlotValue.bind(this);\n  }\n\n  // Event callback handler for 'dataplotRollOver'.\n  // Shows the value of the hovered plot on the page.\n  showPlotValue(eventObj, dataObj) {\n    this.setState({\n      actualValue: `You’re are currently hovering over ${dataObj.categoryLabel} whose value is ${dataObj.displayValue}`,\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <ReactFC {...chartConfigs} fcEvent-dataplotRollOver={this.showPlotValue} />\n        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.actualValue}</p>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(\n  <Chart />,\n  document.getElementById('root'),\n);";
var code4 = "import React, { Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport FusionCharts from 'fusioncharts/core';\nimport Column2D from 'fusioncharts/viz/column2d';\nimport Pie2D from 'fusioncharts/viz/pie2d';\nimport ReactFC from 'react-fusioncharts';\nimport FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';\n\nReactFC.fcRoot(FusionCharts, Column2D, Pie2D, FusionTheme);\n\nconst myDataSource = " + JSON.stringify(chartJSON, null, "\t") + ";\n\nconst chartConfigs = {\n  type: 'column2d',\n  width: 600,\n  height: 400,\n  dataFormat: 'json',\n  dataSource: myDataSource,\n};\n\nclass Chart extends Component {\n  // Convert the chart to a 2D Pie chart after 5 secs.\n  alterChart(chart) {\n    setTimeout(() => {\n      chart.chartType('pie2d');\n    }, 5000);\n  }\n\n  render() {\n    return (\n      <div>\n        <ReactFC {...chartConfigs} onRender={alterChart} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(\n  <Chart />,\n  document.getElementById('root'),\n);";

class Banner extends React.Component {
  render() {
    return (
      <div className="container container-1200 info-wrapper pt-4">
        <div className="row">
          <div className="col">
            <div className="h2 mt-2">Quick Start</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-3">
            <div className="h5">
              <span>Step 1: Install the React-FusionCharts wrapper framework</span>
            </div>
            <p className="code-desc">In the terminal run the following command:</p>
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c1">
                      <CodeMirror value={'$ npm install react-fusioncharts --save'} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="code-desc">Also install fusionCharts, if it is not already installed:</p>
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c2">
                      <CodeMirror value={'$ npm install fusioncharts --save'} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-3">
            <div className="h5">
              <span>Step 2: Import the <a href="//www.npmjs.com/package/react-fusioncharts" target="_blank">ReactFC</a> component</span>
            </div>
            <p className="code-desc">After installing <a className="ref-link" href="//www.npmjs.com/package/react-fusioncharts" target="_blank">react-fusioncharts</a>, import it in your React app:</p>
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c3">
                      <CodeMirror value={code1} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-3">
          <div className="col">
            <div className="h3 mt-2">Render FusionMaps</div>
          </div>
        </div>
        <p className="code-desc">To render a map, import the FusionMaps module along with the map definition.</p>
        <div className="row">
          <div className="col-12">
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c4">
                      <CodeMirror value={code2} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col">
            <div className="h3 mt-2">Working with Events</div>
          </div>
        </div>
        <p className="code-desc mb-1">To attach event callbacks to a FusionCharts component, follow the pattern below.</p>
        <p className="code-desc mb-1">Write the callback:</p>
        <p className="code-desc mb-0">As a separate function:</p>
        <div className="row">
          <div className="col-12">
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c5">
                      <CodeMirror value={'var chartEventCallback  = function (eventObj, dataObj) {\n  [Code goes here]\n}'} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="code-desc mb-0 mt-2">Or, as a component class method:</p>
        <div className="row">
          <div className="col-12">
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c6">
                      <CodeMirror value={'chartEventCallback (eventObj, dataObj) {\n  [Code goes here]\n}'} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="code-desc mb-0 mt-2">Attach the callback to an event through the React-FC component:</p>
        <div className="row">
          <div className="col-12">
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c7">
                      <CodeMirror value={'<ReactFC {...chartConfigs} fcEvent-EVENTNAME={this.chartEventCallback} />'} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="code-desc">Where, EVENTNAME is to be replaced by the event you want to track.</p>
        <div className="h6">Consider the example below that tracks hover events on a data plot.</div>
        <div className="row">
          <div className="col-12">
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c8">
                      <CodeMirror value={code3} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-3">
          <div className="col">
            <div className="h3 mt-2">Working with APIs</div>
          </div>
        </div>
        <p className="code-desc mb-1">To call APIs we will need the chart object. To get the chart object for an React-FC component, pass a callback through the attribute onRender.</p>
        <p className="code-desc mb-1">Write the callback:</p>
        <p className="code-desc mb-0">As a separate function:</p>
        <div className="row">
          <div className="col-12">
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c9">
                      <CodeMirror value={'var chartRenderCallback  = function (chart) {\n  [Code goes here]\n}'} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="code-desc mb-0 mt-2">Or, as a component class method:</p>
        <div className="row">
          <div className="col-12">
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c10">
                      <CodeMirror value={'chartRenderCallback (chart) {\n  [Code goes here]\n}'} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="code-desc mb-0 mt-2">Pass the callback as a prop, to which the chart object will be returned on rendering:</p>
        <div className="row">
          <div className="col-12">
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c11">
                      <CodeMirror value={'<ReactFC {...chartConfigs} onRender={chartRenderCallback} />'} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h6 mt-2">Consider the example below that conerts a Column 2D chart to a Pie 2D chart after 5 seconds.</div>
        <div className="row">
          <div className="col-12">
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c12">
                      <CodeMirror value={code4} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 pt-3">
            <div className="h5">Support</div>
            <p>
              <a className="ref-link" href="//github.com/fusioncharts/react-fusioncharts-component/issues" target="_blank">GitHub Issues</a>&nbsp;|&nbsp;
              <a className="ref-link" href="mailto:support@fusioncharts.com" target="_blank">Contact FusionCharts Support</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-3">
            <div className="h5">Licensing</div>
            <p>React-FusionCharts module is licensed under open-source, distributed under the terms of the MIT/X11 License. You will
              still need to include FusionCharts in your page, as this project provides no direct functionality. You can download
              a free evaluation version&nbsp;
              <a className="ref-link" href="//www.fusioncharts.com/download/" target="_blank">here</a>. To use in a commercial environment, please&nbsp;
              <a className="ref-link" href="//www.fusioncharts.com/buy/" target="_blank">purchase a FusionCharts license</a>.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;
