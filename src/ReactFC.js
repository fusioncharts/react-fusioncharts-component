import React from 'react';
import FusionCharts from 'fusioncharts';

class ReactFC extends React.Component {
    constructor (props) {
        super(props);

        let propsObj = props;

        this.state = {
        };

        this.fcConfig = props;
        this.renderAt = propsObj.renderAt;

        this.chartObj = new FusionCharts(this.fcConfig);

        this.getRenderAt  = () => {
            return this.renderAt || this.chartObj.id + '-container';
        };
    }

    componentDidMount () {
        var global = this;

        global.chartObj.render(global.getRenderAt());
    }

    componentWillUnmount () {
        this.chartObj && this.chartObj.dispose();
    }

    componentDidUpdate () {
        var global = this,
            fcConfig = global.fcConfig,
            props = global.props,
            chartObj = global.chartObj,
            arrImpactedBy;

        if (fcConfig.type !== props.type) {
            chartObj.chartType(props.type);
        }

        if (fcConfig.dataSource !== props.dataSource) {
            chartObj.setChartData(props.dataSource, props.dataFormat);
        }

        if (fcConfig.width !== props.width || fcConfig.height !== props.height) {
            chartObj.resizeTo(props.width, props.height);
        }
        
        arrImpactedBy = fcConfig.impactedBy;
        if (arrImpactedBy && arrImpactedBy.length > 0 &&  arrImpactedBy.indexOf(props.eventSource) > -1) {
            chartObj.setChartAttribute(global.fcConfig);
            chartObj.setChartData(fcConfig.dataSource);
        }

    }

    render () {
        var global = this,
            renderAt = global.getRenderAt();

        return (
            <div className={global.state.className} id={renderAt} />
        );
    }
}

export default ReactFC;

