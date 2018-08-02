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
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

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
import FusionCharts from 'fusioncharts/core';
import Maps from 'fusioncharts/maps';
import World from 'fusioncharts/maps/es/fusioncharts.world';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

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

