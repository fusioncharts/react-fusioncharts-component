import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import TM from 'fusioncharts/themes/fusioncharts.theme.ocean';

// Load the charts module pass FusionCharts as dependency
charts(FusionCharts);

FusionCharts.ready(function () {
    var myDataSource = {
        chart: {
            caption: "Age profile of website visitors",
            subcaption: "Last Year",
            startingangle: "120",
            showlabels: "0",
            showlegend: "1",
            enablemultislicing: "0",
            slicingdistance: "15",
            showpercentvalues: "1",
            showpercentintooltip: "0",
            plottooltext: "Age group : $label Total visit : $datavalue",
            theme: "ocean"
        },
        data: [
            {
                label: "Teenage",
                value: "1250400"
            },
            {
                label: "Adult",
                value: "1463300"
            },
            {
                label: "Mid-age",
                value: "1050700"
            },
            {
                label: "Senior",
                value: "491000"
            }
        ]
    }
    var props_pie_chart = {
        id: "pie_chart",
        renderAt: "pie_chart_container",
        type: "pie3d",
        width:600,
        height: 400,
        dataFormat: "json",
        dataSource: myDataSource
    };
    ReactDOM.render(
        <ReactFC {...props_pie_chart} />,
        document.getElementById('fc_react_app')
    );
})