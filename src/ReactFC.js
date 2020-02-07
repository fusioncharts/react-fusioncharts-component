import React from 'react';
import uuid from 'uuid/v4';
import * as utils from './utils/utils';
import fusionChartsOptions from './utils/options';

class ReactFC extends React.Component {
  static fcRoot(core, ...modules) {
    modules.forEach(m => {
      if ((m.getName && m.getType) || (m.name && m.type)) {
        core.addDep(m);
      } else {
        m(core);
      }
    });
    ReactFC.fusionChartsCore = core;
  }

  constructor(props) {
    super(props);

    this.containerId = uuid();
    this.oldOptions = null;
    this.FusionCharts =
      props.fcLibrary || ReactFC.fusionChartsCore || window.FusionCharts;
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.detectChanges(this.props);
    }
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
      'events'
    ];

    this.checkAndUpdateChartDimensions(currentOptions, oldOptions);
    this.checkAndUpdateChartType(currentOptions, oldOptions);
    this.checkAndUpdateChartData(currentOptions, oldOptions);
    this.checkAndUpdateEvents(currentOptions, oldOptions);
    this.checkAndUpdateRestOptions(
      fusionChartsOptions.filter(
        option => optionsUpdatedNatively.indexOf(option) === -1
      ),
      currentOptions,
      oldOptions
    );

    this.oldOptions = currentOptions;
  }

  checkAndUpdateChartDimensions(currentOptions, oldOptions) {
    const currWidth = currentOptions.width;
    const currHeight = currentOptions.height;
    const oldWidth = oldOptions.width;
    const oldHeight = oldOptions.height;

    if (
      String(currWidth) !== String(oldWidth) ||
      String(currHeight) !== String(oldHeight)
    ) {
      if (!utils.isUndefined(currWidth) && !utils.isUndefined(currHeight)) {
        this.chartObj.resizeTo(currWidth, currHeight);
      } else {
        if (!utils.isUndefined(currWidth)) {
          this.chartObj.resizeTo({
            w: currWidth
          });
        }
        if (!utils.isUndefined(currHeight)) {
          this.chartObj.resizeTo({
            h: currHeight
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
    if (
      String(currDataFormat).toLowerCase() !==
      String(oldDataFormat).toLowerCase()
    ) {
      if (!utils.isUndefined(currDataFormat) && !utils.isUndefined(currData)) {
        this.chartObj.setChartData(
          currData,
          String(currDataFormat).toLowerCase()
        );
        // If the chart dataFormat is changed then
        // animate the chart to show the changes
        this.chartObj.render();
        return;
      }
    }
    if (!this.isSameChartData(currData, oldData)) {
      if (!utils.isUndefined(currData)) {
        this.chartObj.setChartData(
          currData,
          // When dataFormat is not given, but data is changed,
          // then use 'json' as default dataFormat
          currDataFormat ? String(currDataFormat).toLowerCase() : 'json'
        );
      }
    }
  }

  isSameChartData(currData, oldData) {
    /* TODO
      1. Current has DataStore and Old doesn't
      2. Old has and Current doesn't
      3. Both has, check ref is equal, return false only if not equal
      4. Clone oldData for diff
      5. Clone currentData for diff
      6. return string check.
    */
    // 1. Current has DataStore and Old doesn't
    if (
      utils.checkIfDataTableExists(currData) &&
      !utils.checkIfDataTableExists(oldData)
    ) {
      return false;
    }
    // 2. Old has and Current doesn't
    if (
      !utils.checkIfDataTableExists(currData) &&
      utils.checkIfDataTableExists(oldData)
    ) {
      return false;
    }
    // 3. Both has, check ref is equal, return false only if not equal
    if (
      utils.checkIfDataTableExists(currData) &&
      utils.checkIfDataTableExists(oldData) &&
      currData.data !== oldData.data
    ) {
      return false;
    }
    // 4. Clone oldData for diff
    const oldDataStringified = JSON.stringify(
      utils.cloneDataSource(oldData, 'diff')
    );
    // 5. Clone currentData for diff
    const currentDataStringified = JSON.stringify(
      utils.cloneDataSource(currData, 'diff')
    );
    // 6. return string check.
    return oldDataStringified === currentDataStringified;
  }

  checkAndUpdateEvents(currentOptions, oldOptions) {
    const currEvents = currentOptions.events;
    const oldEvents = oldOptions.events;
    let temp1;
    let temp2;

    if (this.detectChartEventsChange(currEvents, oldEvents)) {
      if (!utils.isUndefined(currEvents)) {
        temp1 = Object.assign({}, currEvents);
        temp2 = utils.isUndefined(oldEvents)
          ? {}
          : Object.assign({}, oldEvents);
        Object.keys(temp2).forEach(eventName => {
          if (temp2[eventName] === temp1[eventName]) {
            temp1[eventName] = undefined;
          } else {
            this.chartObj.removeEventListener(eventName, temp2[eventName]);
          }
        });
        Object.keys(temp1).forEach(eventName => {
          if (temp1[eventName]) {
            this.chartObj.addEventListener(eventName, temp1[eventName]);
          }
        });
      }
    }
  }

  detectChartEventsChange(currEvents, oldEvents) {
    if (utils.isObject(currEvents) && utils.isObject(oldEvents)) {
      return !this.isSameChartEvents(currEvents, oldEvents);
    }
    return !(currEvents === oldEvents);
  }

  isSameChartEvents(currEvents, oldEvents) {
    if (Object.keys(currEvents).length !== Object.keys(oldEvents).length) {
      return false;
    }
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

    restOptions.forEach(optionName => {
      const currValue = currentOptions[optionName];
      const oldValue = oldOptions[optionName];

      if (!this.isSameOptionValue(currValue, oldValue)) {
        if (!utils.isUndefined(currValue)) {
          if (
            this.chartObj.options &&
            this.chartObj.options.hasOwnProperty(optionName)
          ) {
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
    const events = {};

    currentOptions.renderAt = this.containerId;

    Object.keys(this.props).forEach(value => {
      const event = value.match(/^fcEvent-.*/i);
      if (event && typeof this.props[value] === 'function') {
        const eventName = value.replace(/^fcEvent-/i, '');
        events[eventName] = this.props[value];
      }
    });

    if (Object.keys(events).length > 0) {
      if (currentOptions.events === undefined) {
        currentOptions.events = events;
      } else {
        currentOptions.events = Object.assign(currentOptions.events, events);
      }
    }

    this.chartObj = new this.FusionCharts(currentOptions);
    this.chartObj.render();
    this.oldOptions = currentOptions;

    if (this.props.onRender && typeof this.props.onRender === 'function') {
      this.props.onRender(this.chartObj);
    }
  }

  resolveChartOptions(props) {
    const chartConfig = props.chartConfig ? props.chartConfig : {};
    const inlineOptions = fusionChartsOptions.reduce((options, optionName) => {
      options[optionName] = props[optionName];
      return options;
    }, {});
    Object.assign(inlineOptions, chartConfig);

    if (
      utils.isObject(inlineOptions.dataSource) &&
      !utils.checkIfDataTableExists(inlineOptions.dataSource)
    ) {
      inlineOptions.dataSource = utils.deepCopyOf(inlineOptions.dataSource);
    } else if (
      utils.isObject(inlineOptions.dataSource) &&
      utils.checkIfDataTableExists(inlineOptions.dataSource)
    ) {
      inlineOptions.dataSource = utils.cloneDataSource(
        inlineOptions.dataSource,
        'clone'
      );
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
    return <div className={this.props.className} id={this.containerId} />;
  }
}

export default ReactFC;
