import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import maps from 'fusioncharts/fusioncharts.maps';
import usaMap from 'fusioncharts/maps/fusioncharts.usa';
import TM from 'fusioncharts/themes/fusioncharts.theme.fint';


// Load the charts, maps, usaMap module pass FusionCharts as dependency
charts(FusionCharts);
maps(FusionCharts);
usaMap(FusionCharts);

FusionCharts.ready(function () {
    var myDataSource = {
        "chart": {
            "theme": "fint",
            "caption": "Shipping Volume and Costs",
            "subcaption": "Harry's SuperMart Distribution Network - Last Month",
            "showMarkerLabels":"0",
            "numberSuffix": "%",
            //Changing connector hover color
            "connectorHoverColor": "#f8bd19",
            //Changing connector hover thickness
            "connectorHoverThickness": "3",
            //Enabling entity hover effect
            //Enabling marker hover effect
            "showMarkerHoverEffect": "1",
            //Changing marker fill color on hover
            "markerFillHoverColor": "#cccccc",
            "showLabels": "1"
        },
        "markers": {
            "shapes": [
                {
                    "id": "myCustomShape",
                    "type": "circle",
                    "fillcolor": "#f8bd19",
                    "showborder": "0",
                }
            ],
            "items": [
                {
                    "shapeid": "myCustomShape",
                    "id": "WA",
                    "x": "54.5",
                    "y": "44.8",
                    "label": "Washington",
                    "radius" : "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "OR",
                    "x": "58.3",
                    "y": "101.7",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "ID",
                    "x": "132.8",
                    "y": "110.7",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "MT",
                    "x": "188.8",
                    "y": "45.1",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "WY",
                    "x": "220",
                    "y": "121",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "AZ",
                    "x": "165",
                    "y": "261",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "UT",
                    "x": "170",
                    "y": "178",
                    "radius": "1"

                },
                {
                    "shapeid": "myCustomShape",
                    "id": "NV",
                    "x": "101",
                    "y": "193",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "LA",
                    "x": "406",
                    "y": "300",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "OK",
                    "x": "347",
                    "y": "245",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "NM",
                    "x": "238",
                    "y": "263",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "CO",
                    "x": "246.72",
                    "y": "179.01",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "KS",
                    "x": "335",
                    "y": "195",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "MO",
                    "x": "408",
                    "y": "197",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "AR",
                    "x": "413",
                    "y": "253",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "MS",
                    "x": "442",
                    "y": "277",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "NE",
                    "x": "318",
                    "y": "146",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "SD",
                    "x": "311",
                    "y": "99",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "ND",
                    "x": "310",
                    "y": "42",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "MN",
                    "x": "382",
                    "y": "61",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "WI",
                    "x": "439",
                    "y": "91",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "IA",
                    "x": "396",
                    "y": "139",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "IL",
                    "x": "445",
                    "y": "174",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "MI",
                    "x": "502",
                    "y": "114",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "IN",
                    "x": "483",
                    "y": "174",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "OH",
                    "x": "530",
                    "y": "168",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "KY",
                    "x": "501",
                    "y": "210",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "WV",
                    "x": "544",
                    "y": "199",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "PA",
                    "x": "593",
                    "y": "155",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "VA",
                    "x": "580",
                    "y": "210",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "NY",
                    "x": "620",
                    "y": "120",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "VT",
                    "x": "654",
                    "y": "95",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "ME",
                    "x": "700",
                    "y": "82",
                    "radius": "1",
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "NH",
                    "x": "666",
                    "y": "114",
                    "radius": "1"

                },
                {
                    "shapeid": "myCustomShape",
                    "id": "MA",
                    "x": "655",
                    "y": "132",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "CT",
                    "x": "654",
                    "y": "146",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "TN",
                    "x": "490",
                    "y": "237",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "GA",
                    "x": "522",
                    "y": "283",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "AL",
                    "x": "489",
                    "y": "279",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "FL",
                    "x": "539",
                    "y": "350",
                    "radius": "1"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "TX",
                    "x": "333",
                    "y": "304",
                    "label": "Texas",
                    "value": "75",
                    "tooltext": "Capacity utilization:$value% {br}Packages shipped/day : 253240 Units(avg) {br}Packages received/day: 253400 Units(avg){br}Daily operational cost: $4000(avg)"
                },
                {
                    "shapeid": "myCustomShape",
                    "id": "NC",
                    "x": "576",
                    "y": "240",
                    "label": "North Carolina",
                    "value": "65",
                    "tooltext": "Capacity utilization: $value%{br}Packages shipped/day : 311120 Units(avg){br}Packages received/day: 311320 Units(avg){br}Daily operational cost: $2000(avg)"
                },
                 {
                    "shapeid": "myCustomShape",
                    "id": "CA",
                    "x": "65.57",
                    "y": "227.21",
                    "label": "California",
                    //Adding value to marker and making it data enabled
                    "value": "80",
                    "tooltext": "Capacity utilization: $value%{br}Packages shipped/day : 126140 Units(avg) {br}Packages received/day: 129500 Units(avg){br}Daily operational cost: $6000(avg)"
                },
            ],
            "connectors": [
                {
                    "from": "CA",
                    "to": "WA",
                    "label": "20540",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.2"
                },
                {
                    "from": "CA",
                    "to": "ID",
                    "label": "17400",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.1"
                },
                {
                    "from": "CA",
                    "to": "MT",
                    "label": "15600",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3"
                },
                {
                    "from": "CA",
                    "to": "WY",
                    "label": "18400",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"
                },
                {
                    "from": "CA",
                    "to": "NV",
                    "label": "19300",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"
                },
                {
                    "from": "CA",
                    "to": "UT",
                    "label": "16500",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5"
                },
                {
                    "from": "CA",
                    "to": "AZ",
                    "label": "18400",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5"
                },
                {
                    "from": "TX",
                    "to": "NM",
                    "label": "21300",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"
                },
                {
                    "from": "TX",
                    "to": "LA",
                    "label": "15440",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"
                },
                {
                    "from": "TX",
                    "to": "OK",
                    "label": "16800",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"
                },

                {
                    "from": "TX",
                    "to": "CO",
                    "label": "17200",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.1"
                },
                {
                    "from": "TX",
                    "to": "KS",
                    "label": "13670",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5"
                },
                {
                    "from": "TX",
                    "to": "MO",
                    "label": "12560",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3"
                },
                {
                    "from": "TX",
                    "to": "AR",
                    "label": "19200",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"
                },
                {
                    "from": "TX",
                    "to": "MS",
                    "label": "18760",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.6"
                },
                {
                    "from": "TX",
                    "to": "NE",
                    "label": "16870",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"
                },
                {
                    "from": "TX",
                    "to": "SD",
                    "label": "17300",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"
                },
                {
                    "from": "TX",
                    "to": "ND",
                    "label": "19900",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"
                },
                {
                    "from": "TX",
                    "to": "MN",
                    "label": "16100",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"
                },
                {
                    "from": "TX",
                    "to": "WI",
                    "label": "14890",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"
                },
                {
                    "from": "TX",
                    "to": "IA",
                    "label": "15600",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: 1.3"
                },
                {
                    "from": "TX",
                    "to": "IL",
                    "label": "17650",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"
                },
                {
                    "from": "NC",
                    "to": "IN",
                    "label": "14700",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $4"
                },
                {
                    "from": "NC",
                    "to": "MI",
                    "label": "18200",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1"
                },
                {
                    "from": "NC",
                    "to": "OH",
                    "label": "16540",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3"
                },
                {
                    "from": "NC",
                    "to": "KY",
                    "label": "15850",
                "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"
                },
                {
                    "from": "NC",
                    "to": "WV",
                    "label": "16430",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"
                },
                {
                    "from": "NC",
                    "to": "PA",
                    "label": "15600",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"
                },
                {
                    "from": "NC",
                    "to": "VT",
                    "label": "18400",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"
                },
                {
                    "from": "NC",
                    "to": "NH",
                    "label": "16900",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"
                },
                {
                    "from": "NC",
                    "to": "MA",
                    "label": "16590",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.2"
                },
                {
                    "from": "NC",
                    "to": "CT",
                    "label": "18340",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"
                },
                {
                    "from": "NC",
                    "to": "ME",
                    "label": "14680",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"
                },
                {
                    "from": "NC",
                    "to": "NY",
                    "label": "23600",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"
                },
                {
                    "from": "NC",
                    "to": "TN",
                    "label": "19800",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.6"
                },
                {
                    "from": "NC",
                    "to": "AL",
                    "label": "13400",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"
                },
                {
                    "from": "NC",
                    "to": "VA",
                    "label": "17260",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.2"
                },
                {
                    "from": "NC",
                    "to": "GA",
                    "label": "17400",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"
                },
                {
                    "from": "NC",
                    "to": "SC",
                    "label": "16230",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.2"
                },
                {
                    "from": "NC",
                    "to": "FL",
                    "label": "21200",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"
                }
            ]
        }
    };

    var fc_configs_object = {
        type: 'usa',
        renderAt: 'map-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: myDataSource
    };
    ReactDOM.render(
        <ReactFC {...fc_configs_object} />,
        document.getElementById('fc_react_app')
    );
});