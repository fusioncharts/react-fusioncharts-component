import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import TM from 'fusioncharts/themes/fusioncharts.theme.ocean';

// Load the charts module pass FusionCharts as dependency
charts(FusionCharts);

FusionCharts.ready(function () {
    var props_column_chart = {
        id: "column_chart",
        renderAt: "column_chart_container",
        type: "column2d",
        width:600,
        height: 400,
        dataFormat: "xmlurl",
        dataSource: "../data/data.xml"
    };
    ReactDOM.render(
        <ReactFC {...props_column_chart} />,
        document.getElementById('fc_react_app')
    );
})