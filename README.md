# react-fusioncharts

A simple and lightweight `React` component which provides bindings for `FusionCharts` JavaScript Charting Library. It easily adds rich and interactive charts to any `React` Projects.

## Installation

To install `react-fusioncharts`, run:

```bash
$ npm install react-fusioncharts --save
```

Also install `fusioncharts`, if it is not already installed:

```bash
$ npm install fusioncharts --save
```

## Getting Started

After installing `react-fusioncharts`, import it in your `React` app:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSource = {
  "chart": {
    "caption": "Countries With Most Oil Reserves [2017-18]",
    "subCaption": "In MMbbl = One Million barrels",
    "xAxisName": "Country",
    "yAxisName": "Reserves (MMbbl)",
    "numberSuffix": "K",
    "theme": "fusion"
  },
  "data": [
    {
      "label": "Venezuela",
      "value": "290"
    },
    {
      "label": "Saudi",
      "value": "260"
    },
    {
      "label": "Canada",
      "value": "180"
    },
    {
      "label": "Iran",
      "value": "140"
    },
    {
      "label": "Russia",
      "value": "115"
    },
    {
      "label": "UAE",
      "value": "100"
    },
    {
      "label": "US",
      "value": "30"
    },
    {
      "label": "China",
      "value": "30"
    }
  ]
};

const chartConfigs = {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
};

ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('root'),
);
```

## Render FusionMaps

To render a map, import the FusionMaps module along with the map definition.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);

const myDataSource = {
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

const chartConfigs = {
    type: 'world',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
};

ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('root'),
);
```

## Working with Events

To attach event callbacks to a FusionCharts component, follow the pattern below.

Write the callback:

As a separate function:

```javascript
var chartEventCallback  = function (eventObj, dataObj) {
  [Code goes here]
}
```

Or, as a component class method:

```javascript
chartEventCallback (eventObj, dataObj) {
  [Code goes here]
}
```

Attach the callback to an event through the React-FC component:
```javascript
<ReactFC {...chartConfigs} fcEvent-EVENTNAME={this.chartEventCallback} />
```
Where, EVENTNAME is to be replaced by the event you want to track.

##### Consider the example below that tracks hover events on a data plot.

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/Charts/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSource = {
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Venezuela",
            "value": "290"
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "30"
        }
    ]
};

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: myDataSource,
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue: 'Hover on the plot to see the value along with the label',
    };

    this.showPlotValue = this.showPlotValue.bind(this);
  }

  // Event callback handler for 'dataplotRollOver'.
  // Shows the value of the hovered plot on the page.
  showPlotValue(eventObj, dataObj) {
    this.setState({
      actualValue: `You’re are currently hovering over ${dataObj.categoryLabel} whose value is ${dataObj.displayValue}`,
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...chartConfigs} fcEvent-dataplotRollOver={this.showPlotValue} />
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.actualValue}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Chart />,
  document.getElementById('root'),
);
```

## Working with APIs

To call APIs we will need the chart object. To get the chart object for an React-FC component, pass a callback through the attribute ```onRender```.

Write the callback:

As a separate function:

```javascript
var chartRenderCallback  = function (chart) {
  [Code goes here]
}
```

Or, as a component class method:

```javascript
chartRenderCallback (chart) {
  [Code goes here]
}
```

Pass the callback as a prop, to which the chart object will be returned on rendering

```
<ReactFC {...chartConfigs} onRender={chartRenderCallback} />
```

##### Consider the example below that conerts a Column 2D chart to a Pie 2D chart after 5 seconds.

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSource = {
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Venezuela",
            "value": "290"
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "30"
        }
    ]
};

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: myDataSource,
};

class Chart extends Component {
  // Convert the chart to a 2D Pie chart after 5 secs.
  alterChart(chart) {
    setTimeout(() => {
      chart.chartType('pie2d');
    }, 5000);
  }

  render() {
    return (
      <div>
        <ReactFC {...chartConfigs} onRender={alterChart} />
      </div>
    );
  }
}

ReactDOM.render(
  <Chart />,
  document.getElementById('root'),
);
```


## Test

```sh
$ npm test
```

## Contributing

* Clone the repository.
* Install dependencies
* Run `npm start` to start the dev server.
* Open `http://localhost:5000/` in your browser.

```sh
$ git clone https://github.com/fusioncharts/react-fusioncharts-component.git
$ cd react-fusioncharts-component
$ npm i
$ npm start
```

To build, run:

```sh
$ npm run build
```

### [Demos and Documentation](https://fusioncharts.github.io/react-fusioncharts-component/)


#### Please note:
- When using create-react-app and then creating a build, the build is created in es5 so that it runs on every browser.
- The modular approach of fusioncharts is in es6.
- The ideal situation is the build process of create-react-app smoothly converts es6 code to es5 so that the build is supported by every browser.

However, a current limitation of create-react-app is, it doesn't yet support es6->es5 conversions. When you try to create a build, it succeeds even though it throws an error. However, the build has es6 code and will run on browsers that support es6.
So, if you don't need your app to run in browsers that don't support es6 then this build will be fine. However, that is extremely unlikely, hence, if you are building a react app using create-react-app then you cannot use fusioncharts in the modular method which is in es6.

However, if you define your custom build process in a custom way that supports es6->es5 conversion then modular approach will work.

FYI, create-react-app is also in the process of supporting this conversion and modular fusioncharts should be smoothly supported by this sometime in the future - https://github.com/facebook/create-react-app/issues/3815

For now, there are 2 options -
- eject the build process of create-react-app and add support for es6->es5 conversion
- use another approach for creating a react app and define own build process that supports es6->es5 conversion
