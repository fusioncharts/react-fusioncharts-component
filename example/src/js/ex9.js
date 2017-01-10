import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import TM from 'fusioncharts/themes/fusioncharts.theme.fint';

// Load the charts module pass FusionCharts as dependency
charts(FusionCharts);

FusionCharts.ready(function () {
    var myDataSource = {
        "chart": {
            "caption": "Sales figures for top 4 chocolate brands - FY2013-2014",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Brand",
            "yAxisName": "Amount (In USD)",
            "yAxisMaxValue": "120000",
            "numberPrefix": "$",
            "theme": "fint",
            "chartBottomMargin": "70",
            "PlotfillAlpha": "0",
            "placeValuesInside": "0",
            "rotateValues": "0",
            "valueFontColor": "#333333"
        },
        "annotations": {
            "width": "500",
            "height": "300",
            "autoScale": "1",
            "groups": [{
                "id": "user-images",
                "items": [{
                    "id": "butterFinger-icon",
                    "type": "image",
                    "url": "../images/butterFinger.png",
                    "x": "$xaxis.label.0.x - 30",
                    "y": "$canvasEndY - 169",
                    "xScale": "50",
                    "yScale": "45",
                }, {
                    "id": "tom-user-icon",
                    "type": "image",
                    "url": "../images/snickrs.png",
                    "x": "$xaxis.label.1.x - 26",
                    "y": "$canvasEndY - 160",
                    "xScale": "48",
                    "yScale": "43"
                }, {
                    "id": "Milton-user-icon",
                    "type": "image",
                    "url": "../images/coffee_crisp.png",
                    "x": "$xaxis.label.2.x - 22",
                    "y": "$canvasEndY - 154",
                    "xScale": "43",
                    "yScale": "41"
                }, {
                    "id": "Brian-user-icon",
                    "type": "image",
                    "url": "../images/100grand.png",
                    "x": "$xaxis.label.3.x - 22",
                    "y": "$canvasEndY - 150",
                    "xScale": "43",
                    "yScale": "40"
                }, {
                    "id": "dyn-label-bg",
                    "type": "rectangle",
                    "showBorder": "1",
                    "borderColor": "12345d",

                    "fillcolor": "ffffff",
                    "x": "$canvasEndY-245",
                    "y": "$canvasEndY+45",
                    "tox": "$canvasEndX+10",
                    "toy": "$canvasEndY + 80"

                }, {
                    "id": "dyn-label",
                    "type": "text",
                    "fillcolor": "#000000",
                    "fontsize": "11",
                    "text": "Promotional activities for Butterfinger made it surpass Snickers, the highest selling brand for 3 years",
                    "bold": "1",
                    "wrap": "1",
                    "wrapWidth": "350",
                    "x": "$canvasEndY-72",
                    "y": "$canvasEndY + 60",
                }]
            }]
        },
        "data": [{
            "label": "Butterfinger",
            "value": "92000"
        }, {
            "label": "Snickers",
            "value": "87000"
        }, {
            "label": "Coffee Crisp",
            "value": "83000"
        }, {
            "label": "100 Grand",
            "value": "80000"
        }]
    };

    var revenueChartConfigs = {
        type: 'column2d',
        renderAt: 'revenue-chart-container',
        width: '400',
        height: '400',
        dataFormat: 'json',
        dataSource: myDataSource
    };

    ReactDOM.render(
        <ReactFC {...revenueChartConfigs} />,
        document.getElementById('chart-container')
    );
});