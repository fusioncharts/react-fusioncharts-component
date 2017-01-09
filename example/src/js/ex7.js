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
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
            numberPrefix: "$",
            theme: "ocean"
        },
        data:[{
            label: "Bakersfield Central",
            value: "880000"
        },
        {
            label: "Garden Groove harbour",
            value: "730000"
        },
        {
            label: "Los Angeles Topanga",
            value: "590000"
        },
        {
            label: "Compton-Rancho Dom",
            value: "520000"
        },
        {
            label: "Daly City Serramonte",
            value: "330000"
        }]
    };

    var FCDashboard = React.createClass({
        getInitialState: function () {
            return {
                filterSource: ''
            };
        },
        changeBackgroundColor: function () {
            this.setState({
                filterSource: 'btn_change_bg_color'
            });
        },
        changeCaptionTextAlignment: function () {
            this.setState({
                filterSource: 'btn_change_text_align'
            });
        },
        render: function () {
            var props_col_chart = {
                id: "column_chart",
                renderAt: "column_chart_container",
                type: "column2d",
                width:600,
                height: 400,
                dataFormat: "json",
                dataSource: myDataSource,
                eventSource: this.state.filterSource,
                impactedBy: ['btn_change_bg_color','btn_change_text_align']
            };

            // Change the column chart's attribute values
            if (this.state.filterSource && this.state.filterSource.length > 0) {
                switch (this.state.filterSource) {
                    case 'btn_change_bg_color':     props_col_chart.dataSource.chart.bgColor = "#efefef";
                                                    break;
                    case 'btn_change_text_align':   props_col_chart.dataSource.chart.captionAlignment = "left";
                                                    break;
                }
            }

            return (
                <div>
                    <ReactFC {...props_col_chart} />
                    <a  id='btn_change_bg_color'
                        onClick={this.changeBackgroundColor}
                        className="btn btn-default"
                        href="#">{'Change chart background color'}</a>
                    <a  id='btn_change_text_align'
                        onClick={this.changeCaptionTextAlignment}
                        className="btn btn-default"
                        href="#">{'Make Caption text left-aligned'}</a>
                </div>
            );
        }
    });

    ReactDOM.render(
        <FCDashboard />,
        document.getElementById('fc_react_app')
    );
});