import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import TM from 'fusioncharts/themes/fusioncharts.theme.ocean';

// Load the charts module pass FusionCharts as dependency
charts(FusionCharts);

FusionCharts.ready(function () {
    var complete_data = [
        {
            label: "Bakersfield Central",
            category: "Retail",
            value: "880000",
            city: "NYC"
        },
        {
            label: "Garden Groove harbour",
            category: "General",
            value: "730000",
            city: "London"
        },
        {
            label: "Los Angeles Topanga",
            value: "590000",
            category: "Retail",
            city: "NYC"
        },
        {
            label: "Compton-Rancho Dom",
            value: "520000",
            category: "Retail",
            city: "NYC"
        },
        {
            label: "Daly City Serramonte",
            value: "330000",
            category: "General",
            city: "Mumbai"
        }
    ];
    var col_chart_dataSource = {
        chart: {
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
            theme:"ocean"
        },
        data: complete_data
    };

    var pie_chart_dataSource = {
        chart: {
            caption: "Categories of Harry's SuperMart",
            theme:"ocean",
            enablemultislicing: "0"
        },
        data: [
            {
                label: "General",
                value: 0
            },
            {
                label: "Retail",
                value: 0
            }
        ]
    };
    for (var i=0,len=complete_data.length ; i<len ; i++) {
        if (complete_data[i].category == "General") {
            pie_chart_dataSource.data[0].value += 1;
        }
        else {
            pie_chart_dataSource.data[1].value += 1;
        }
    }
    var FCApp = React.createClass({
        getInitialState: function () {
            return {
                filterValue: '',
                filterSource: ''
            };
        },
        handleUserInput: function (category_mart, source) {
            this.setState(function () {
                return {
                    filterValue: category_mart,
                    filterSource: source
                }
            });
        },
        render: function() {
            var that = this
                , rows = [];

            // Initialize configurations for FusionCharts
            var props_col_chart = {
                id: "column_chart",
                renderAt: "column_chart_container",
                className: "inline_div",
                type: "column2d",
                dataFormat: "json",
                dataSource: col_chart_dataSource,
                impactedBy: ['pie_chart'],
                eventSource: this.state.filterSource,
                width:300,
                heigth:150
            };
            var props_pie_chart = {
                type: "pie2D",
                id: "pie_chart",
                renderAt: "pie_chart_container",
                className: "inline_div",
                dataFormat: "json",
                defaultCenterLabel: "Total revenue: $64.08K",
                eventSource: this.state.filterSource,
                dataSource: pie_chart_dataSource,
                width:400,
                heigth:300,
                events: {
                    slicingStart: function (evtObj, argObj) {
                        if (argObj.slicedState == false) {
                            that.handleUserInput(argObj.data.categoryLabel, evtObj.sender.id);
                        }
                        else {
                            that.handleUserInput('',evtObj.sender.id);
                        }
                    }
                }
            };
            if (that.state.filterValue && that.state.filterValue.length != 0) {

                complete_data.forEach(function(mart) {
                    if (mart.category == that.state.filterValue) {

                        rows.push(mart);
                    }
                });
                props_col_chart.dataSource.data = rows;
            }
            else {
                props_col_chart.dataSource.data = complete_data;
            }
            return (
                <div id='fc_dashboard'>
                    <ReactFC {...props_pie_chart} />
                    <ReactFC {...props_col_chart} />
                </div>
            );
        }
    });

    ReactDOM.render(
        <FCApp />,
        document.getElementById('fc_react_app')
    );
});