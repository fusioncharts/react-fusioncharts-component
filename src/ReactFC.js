import React from 'react';
import FusionCharts from 'fusioncharts';
import uuid from 'uuid/v4';
import * as utils from './utils/utils';
import fusionChartsOptions from './utils/options';

class ReactFC extends React.Component {
  static fcRoot(core, ...modules) {
    modules.forEach((m) => {
      m(core);
    });
    ReactFC.fusionChartsCore = core;
  }

  constructor(props) {
    super(props);

    this.containerId = uuid();
    this.oldOptions = null;
    this.FusionCharts = props.fcLibrary || ReactFC.fusionChartsCore || FusionCharts;
  }

  componentDidMount() {
    this.renderChart();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.oldOptions) { return; }
    this.detectChanges(nextProps);
  }

  componentWillUnmount() {
    this.chartObj.dispose();
  }

  detectChanges(nextProps) {
    const currentOptions = this.resolveChartOptions(nextProps);
    const { oldOptions } = this;
    const optionsUpdatedNatively = [
      'width',
      'height',
      'type',
      'dataFormat',
      'dataSource',
      'events',
    ];

    this.checkAndUpdateChartDimensions(currentOptions, oldOptions);
    this.checkAndUpdateChartType(currentOptions, oldOptions);
    this.checkAndUpdateChartData(currentOptions, oldOptions);
    this.checkAndUpdateEvents(currentOptions, oldOptions);
    this.checkAndUpdateRestOptions(
      fusionChartsOptions.filter(option => optionsUpdatedNatively.indexOf(option) === -1),
      currentOptions,
      oldOptions,
    );

    this.oldOptions = currentOptions;
  }

  checkAndUpdateChartDimensions(currentOptions, oldOptions) {
    const currWidth = currentOptions.width;
    const currHeight = currentOptions.height;
    const oldWidth = oldOptions.width;
    const oldHeight = oldOptions.height;

    if (String(currWidth) !== String(oldWidth) || String(currHeight) !== String(oldHeight)) {
      if (!utils.isUndefined(currWidth) && !utils.isUndefined(currHeight)) {
        this.chartObj.resizeTo(currWidth, currHeight);
      } else {
        if (!utils.isUndefined(currWidth)) {
          this.chartObj.resizeTo({
            w: currWidth,
          });
        }
        if (!utils.isUndefined(currHeight)) {
          this.chartObj.resizeTo({
            h: currHeight,
          });
        }
      }
    }
  }

  checkAndUpdateChartType(currentOptions, oldOptions) {
    const currType = currentOptions.type;
    const oldType = oldOptions.type;

    if (String(currType).toLowerCase() !== String(oldType).toLowerCase()) {
      if (!utils.isUndefined(currType)) {
        this.chartObj.chartType(String(currType).toLowerCase());
      }
    }
  }

  checkAndUpdateChartData(currentOptions, oldOptions) {
    const currDataFormat = currentOptions.dataFormat;
    const currData = currentOptions.dataSource;
    const oldDataFormat = oldOptions.dataFormat;
    const oldData = oldOptions.dataSource;

    if (String(currDataFormat).toLowerCase() !== String(oldDataFormat).toLowerCase()) {
      if (!utils.isUndefined(currDataFormat) && !utils.isUndefined(currData)) {
        this.chartObj.setChartData(currData, String(currDataFormat).toLowerCase());
        // If the chart dataFormat is changed then
        // animate the chart to show the changes
        this.chartObj.render();
      }
    } else if (!this.isSameChartData(currData, oldData)) {
      if (!utils.isUndefined(currData)) {
        this.chartObj.setChartData(
          currData,
          // When dataFormat is not given, but data is changed,
          // then use 'json' as default dataFormat
          currDataFormat ? String(currDataFormat).toLowerCase() : 'json',
        );
      }
    }
  }

  isSameChartData(currData, oldData) {
    if (utils.isObject(currData) && utils.isObject(oldData)) {
      return utils.isSameObjectContent(currData, oldData);
    }
    return currData === oldData;
  }

  checkAndUpdateEvents(currentOptions, oldOptions) {
    const currEvents = currentOptions.events;
    const oldEvents = oldOptions.events;
    let temp1;
    let temp2;

    if (this.detectChartEventsChange(currEvents, oldEvents)) {
      if (!utils.isUndefined(currEvents)) {
        temp1 = Object.assign({}, currEvents);
        temp2 = utils.isUndefined(oldEvents) ? {} : Object.assign({}, oldEvents);
        Object.keys(temp2).forEach((eventName) => {
          if (temp2[eventName] === temp1[eventName]) {
            temp1[eventName] = undefined;
          } else {
            this.chartObj.removeEventListener(eventName, temp2[eventName]);
          }
        });
        Object.keys(temp1).forEach((eventName) => {
          if (temp1[eventName]) {
            this.chartObj.addEventListener(eventName, temp1[eventName]);
          }
        });
      }
    }
  }

  detectChartEventsChange(currEvents, oldEvents) {
    if (utils.isObject(currEvents) && utils.isObject(oldEvents)) {
      return !(this.isSameChartEvents(currEvents, oldEvents));
    }
    return !(currEvents === oldEvents);
  }

  isSameChartEvents(currEvents, oldEvents) {
    if (Object.keys(currEvents).length !== Object.keys(oldEvents).length) { return false; }
    const currEventNames = Object.keys(currEvents);
    for (let i = 0; i < currEventNames.length; ++i) {
      const evName = currEventNames[i];
      if (currEvents[evName] !== oldEvents[evName]) {
        return false;
      }
    }
    return true;
  }

  checkAndUpdateRestOptions(restOptions, currentOptions, oldOptions) {
    let optionsUpdated = false;

    restOptions.forEach((optionName) => {
      const currValue = currentOptions[optionName];
      const oldValue = oldOptions[optionName];

      if (!this.isSameOptionValue(currValue, oldValue)) {
        if (!utils.isUndefined(currValue)) {
          if (this.chartObj.options && this.chartObj.options.hasOwnProperty(optionName)) {
            this.chartObj.options[optionName] = currValue;
            optionsUpdated = true;
          }
        }
      }
    });

    if (optionsUpdated) {
      this.chartObj.render(); // re-render the chart to reflect the changes
    }
  }

  isSameOptionValue(currValue, oldValue) {
    if (utils.isObject(currValue) && utils.isObject(oldValue)) {
      return utils.isSameObjectContent(currValue, oldValue);
    }
    return String(currValue) === String(oldValue);
  }


  renderChart() {
    const currentOptions = this.resolveChartOptions(this.props);
    currentOptions.renderAt = this.containerId;

    this.chartObj = new this.FusionCharts(currentOptions);
    this.chartObj.render();
    this.oldOptions = currentOptions;
  }

  resolveChartOptions(props) {
    const chartConfig = props.chartConfig ? props.chartConfig : {};
    const inlineOptions = fusionChartsOptions.reduce((options, optionName) => {
      options[optionName] = props[optionName];
      return options;
    }, {});
    Object.assign(inlineOptions, chartConfig);

    if (utils.isObject(inlineOptions.dataSource)) {
      inlineOptions.dataSource = utils.deepCopyOf(inlineOptions.dataSource);
    }
    if (utils.isObject(inlineOptions.link)) {
      inlineOptions.link = utils.deepCopyOf(inlineOptions.link);
    }
    if (utils.isObject(inlineOptions.events)) {
      inlineOptions.events = Object.assign({}, inlineOptions.events);
    }
    return inlineOptions;
  }

  render() {
    return (
      <div className={this.props.className} id={this.containerId} />
    );
  }
}

export default ReactFC;
