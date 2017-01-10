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
        data:[
        {
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
        handleCLick: function () {
            this.setState({
                filterSource: 'btn_update_data'
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
                impactedBy: ['btn_update_data']
            };

            // Filter the column chart's data
            if (this.state.filterSource && this.state.filterSource.length != 0) {
                props_col_chart.dataSource.data[2].label = "Art Supply Store";
                props_col_chart.dataSource.data[2].value = "420000";
                props_col_chart.dataSource.data[3].label = "P.C. Richard & Son";
                props_col_chart.dataSource.data[3].value = "210000";
            }
            else {
                props_col_chart.dataSource = myDataSource;
            }

            return (
                <div>
                    <ReactFC {...props_col_chart} />
                    <a  id='btn_update_data'
                        onClick={this.handleCLick}
                        className="btn btn-default"
                        href="#">{'Click me to change data'}</a>
                </div>
            );
        }
    })

    ReactDOM.render(
        <FCDashboard />,
        document.getElementById('fc_react_app')
    );
});