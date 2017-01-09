## Introduction

FusionCharts Suite XT is a front-end, JavaScript-based, comprehensive collection of 90+ charts and  1000+ maps. This includes basic and complex charts like the column and bar charts, pie and doughnut charts, treemap, heatmap, logarithmic charts, and so on; gauges like the angular gauge, bulb gauge, thermometer gauge, and so on; and maps for all continents, major countries, and all US states.

The **react-fusioncharts** plugin, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single ReactJS component.

This article outlines the steps to be executed for rendering charts using the **react-fusioncharts** plugin.

#### Step 1: Install **fusioncharts**, **react**, **react-dom**, and **react-fusioncharts** npm package
Execute the commands below in the terminal to install the **fusioncharts**, **react**, **react-dom**, and **react-fusioncharts** node modules.

##### Method 1:
```sh
npm install react --save
npm install react-dom --save
npm install fusioncharts --save
npm install react-fusioncharts --save
```

##### Method 2:
    `npm install react react-dom fusioncharts react-fusioncharts --save`

#### Step 2: Add the HTML container element for rendering the chart

Create a chart container in the HTML code of your chart using the `<div>` element, as shown below, placing it where you want to render the chart.
    `<div id='chart-container'></div>`

#### Step 3: Require the react-fusioncharts package from npm

Require the **react**, **fusioncharts**, and **react-fusioncharts** modules, in this order, in npm. In your JavaScript code, define an object that consists of all the configurations and their values, required to get FusionCharts up. 
```
import React from 'react';
import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
import fusioncharts from 'fusioncharts/fusioncharts.charts';
import react-fusioncharts from 'react-fusioncharts';

var chartConfigs = {
    type: ...,
    renderAt: ...,
    className: ..., // ReactJS attribute-name for DOM classes
    dataFormat: ...,
    dataSource: ...
};
```

#### Step 4: Pass the configurations required for FusionCharts and render the chart
There are two different methods of rendering a chart in React. The simplest is using the `ReactDOM.render()`. The second method involves creating a React component to hold the configuration logic for your charts. We will show you an example of both cases.

##### FusionCharts plugin for react cab be used in two ways.
1. Use the ReactFC component directly in ReactDOM to render the chart.  The configurations are passed as props of the component.
2. Compose multiple ReactFC component in your custom defined component to render the chart. This way you would be able to hold the state in your custom defined component and will be able to perform various activity using the lifecycle hooks. 

#### Method 1: Render the chart in the React application
For a standalone chart, we can choose to make a component class or directly render the chart with the ReactFC component class. The object containing the chart configuration properties is passed to the FusionCharts component as **props**, as shown below:
```
ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('chart-container')
);
```
##### OR
##### Method 2: Creating a custom MyApp component to render the chart

```
var MyApp = React.createClass({
    ..., // Rest of the React Component Code
    render: function () {
        return (
            <ReactFC {...categoryChartConfigs} />
            <ReactFC {...revenueChartConfigs} />
        );
    }
});

ReactDOM.render(
    <MyApp />,
    document.getElementById('chart-container')
);
```
While the previous method of creating an object, with the configuration properties and values defined, and passing it is recommended, the configuration properties can be passed separately as well, as shown below:
```
ReactDOM.render(
    <ReactFC
        type: ...,
        renderAt: ...,
        className: ...,
        dataFormat: ...,
        dataSource: ... />,
    document.getElementById('chart-container')
);
```
Your chart should now render when the page is loaded.

### Licensing
React-FusionCharts is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can [Download an evaluation](http://fusioncharts.com/download/). You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is [free for non-commercial and personal use](http://www.fusioncharts.com/download/free/)) .