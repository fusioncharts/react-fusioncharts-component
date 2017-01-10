/* global FusionCharts, it, describe */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import FC from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusionCharts from '../lib/ReactFC';

charts(FC);

class FCDashboard extends React.Component {
    constructor(props) {
        super(props);
        let propsObj = props;

        this.state = {
            name: 'React is cool',
            id: propsObj.id,
            type: 'Column2D',
            dataFormat: 'JSON',
            dataSource: {
                chart: {
                    caption: 'FusionCharts React plugin'
                },
                data: [{value: 78}, {value: 45}]
            }
        };

        this.updateSize  = (e) => {
            var newWidth = e.target.value,
                size = {};

            size[e.target.name] = newWidth;

            this.setState(() => {
                return size;  
            });            
        };

        this.updateCaption  = (e) => {
            var newName = e.target.value;

            this.setState((prevProp) => {
                return {
                    dataSource: {
                        chart: {
                            caption: newName
                        },
                        data: prevProp.dataSource.data
                    }
                };
            });
        };
    }

    render() {
    	/** todo: 
		* Removing the below console.log throws error while running the test
		*/
    	console.log("________TESTING___________"); // eslint-disable-line
        return (
            <div>
                <h1>Hello World!</h1>
                <p>
                	Chart Caption:
                    <input ref="caption" onChange={this.updateCaption} value={this.state.dataSource.chart.caption} />

                    Width:
                    <input ref="width" name="width" onChange={this.updateSize} value={this.state.width} />
                    
                    Height:
                    <input ref="height" name="height" onChange={this.updateSize} value={this.state.height} />                	
             	</p>
            	<ReactFusionCharts ref="fusioncharts" {...this.state} />
            	<p></p>
            </div>
        );
    }
}

describe('root', function () {

  	it('FusionCharts renders without problems', function () {
    	var root = TestUtils.renderIntoDocument(<FCDashboard id="chart1" />);
    	expect(root).toExist();
  	});

  	it('Caption changes without problems', function () {
    	var root = TestUtils.renderIntoDocument(<FCDashboard id="chart2" />);

    	const caption = ReactDOM.findDOMNode(root.refs.caption),
  			  chartObj = FusionCharts.items['chart2'],
  			  newValue = 'New Caption Text';

    	caption.value = newValue;
    	TestUtils.Simulate.change(caption);

    	expect(chartObj.getChartAttribute('caption')).toEqual(newValue);
  	});

  	it('Chart resize without problems', function () {
    	var root = TestUtils.renderIntoDocument(<FCDashboard id="chart3" />);

    	const width = ReactDOM.findDOMNode(root.refs.width),
    		  height = ReactDOM.findDOMNode(root.refs.height),
			  chartObj = FusionCharts.items['chart3'],
    	      nWidth = '800',
    	      nHeight = '400';

    	width.value = nWidth;
    	height.value = nHeight;
    	TestUtils.Simulate.change(width);
    	TestUtils.Simulate.change(height);
    	
    	expect(chartObj.width).toEqual(nWidth);
    	expect(chartObj.height).toEqual(nHeight);
  	});

});


