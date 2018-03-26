#### [Demos and Documentation](https://fusioncharts.github.io/react-fusioncharts-component/)

# react-fusionCharts

A simple and lightweight `React` component which provides bindings for `FusionCharts` JavaScript Charting Library. It easily adds rich and interactive charts to any `React` Projects.

## Installation

To install `react-fusioncharts`, run:

```bash
$ npm install react-fusioncharts --save
```

Also install `fusionCharts`, if it is not already installed:

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

Charts(FusionCharts);

const myDataSource = {
  chart: {
    caption: 'Harry\'s SuperMart',
    subCaption: 'Top 5 stores in last month by revenue',
    numberPrefix: '$',
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

## Using Licensed Version of FusionCharts

While using licensed version of `FusionCharts`, you need to specify library as follows:

Specify library for all charts:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';

// Here import licensed version of FusionCharts
import FusionCharts from './path/to/fusioncharts';
import Charts from './path/to/fusioncharts/fusioncharts.charts';

// Provide FusionCharts core and other modules to resolve
ReactFC.fcRoot(FusionCharts, Charts)

// Rest of the application code

```

Specify library for a particular chart:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';

// Here import licensed version of FusionCharts
import FusionCharts from './path/to/fusioncharts';
import Charts from './path/to/fusioncharts/fusioncharts.charts';

// Resolve modules
Charts(FusionCharts)

ReactDOM.render(
  <ReactFC
    width="600"
    height="400"
    type="column2d"
    dataSource={ /* Chart data source */ }
    fcLibrary={FusionCharts} // Provide FusionCharts library
  />,
  document.getElementById('root'),
);

// Rest of the application code

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

