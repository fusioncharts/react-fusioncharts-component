import React from 'react';
import renderer from 'react-test-renderer';
import ReactFC from '../src/ReactFC';
import fusionChartsOptions from '../src/utils/options';
import sampleData from './data.json';

/* global describe it expect jest */

jest.mock('fusioncharts', () => {
  const FusionCharts = function FusionCharts() {};
  FusionCharts.prototype.render = () => {};
  FusionCharts.prototype.dispose = () => {};
  FusionCharts.prototype.resizeTo = () => {};
  FusionCharts.prototype.chartType = () => {};
  FusionCharts.prototype.setChartData = () => {};
  FusionCharts.prototype.addEventListener = () => {};
  FusionCharts.prototype.removeEventListener = () => {};
  return FusionCharts;
});

jest.mock('uuid/v4', () => () => 'CONSTANT_UUID');

const chartOptions = {
  type: 'column2d',
  width: 400,
  height: 300,
  dataFormat: 'json',
  dataSource: sampleData,
};

function changeComponentProps(component, changes) {
  const mockedChangedProps = Object.assign({}, component.props, changes);
  component.componentWillReceiveProps(mockedChangedProps);
  component.props = mockedChangedProps;
}

describe('ReactFC', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<ReactFC
      {...chartOptions}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should resolve the chart options passed through properties', () => {
    const mockedChartOptions = Object.assign({}, chartOptions, {
      chartConfig: { containerBackgroundColor: 'transparent' },
      events: { dataPlotClick: () => { } },
      link: {},
    });
    const instance = renderer.create(<ReactFC
      {...mockedChartOptions}
    />).getInstance();

    const resolvedChartOptions = instance.resolveChartOptions(instance.props);
    const expected = {
      ...fusionChartsOptions.reduce((options, optionName) => (options[optionName] = undefined, options), {}),
      ...chartOptions,
      events: Object.assign({}, mockedChartOptions.events),
      link: Object.assign({}, mockedChartOptions.link),
      ...mockedChartOptions.chartConfig,
    };
    expect(resolvedChartOptions).toEqual(expected);
  });

  it('should update the chart when chart data changes', () => {
    const instance = renderer.create(<ReactFC
      {...chartOptions}
    />).getInstance();

    changeComponentProps(instance, { dataFormat: 'jsonurl', dataSource: 'data.json' });
    expect(instance.oldOptions.dataFormat).toBe('jsonurl');
    expect(instance.oldOptions.dataSource).toBe('data.json');

    changeComponentProps(instance, { dataFormat: undefined });
    expect(instance.oldOptions.dataFormat).toBeUndefined();
    expect(instance.oldOptions.dataSource).toEqual('data.json');

    changeComponentProps(instance, { dataSource: 'data2.json' });
    expect(instance.oldOptions.dataFormat).toBeUndefined();
    expect(instance.oldOptions.dataSource).toBe('data2.json');

    changeComponentProps(instance, { dataFormat: 'json', dataSource: require('./data.json') });
    expect(instance.oldOptions.dataFormat).toBe('json');
    expect(instance.oldOptions.dataSource).toEqual(require('./data.json'));

    const newData = require('./data.json');
    newData.chart.caption = 'New caption';
    changeComponentProps(instance, { dataSource: newData });
    expect(instance.oldOptions.dataFormat).toBe('json');
    expect(instance.oldOptions.dataSource).toEqual(newData);

    changeComponentProps(instance, {});
    expect(instance.oldOptions.dataFormat).toBe('json');
    expect(instance.oldOptions.dataSource).toEqual(newData);

    changeComponentProps(instance, { dataSource: undefined });
    expect(instance.oldOptions.dataFormat).toBe('json');
    expect(instance.oldOptions.dataSource).toBeUndefined();
  });

  it('should update the chart when chart event changes', () => {
    const mockedChartOptions = Object.assign({}, chartOptions, {
      events: {
        event1() { },
        event2() { },
      },
    });
    const instance = renderer.create(<ReactFC
      {...mockedChartOptions}
    />).getInstance();

    changeComponentProps(instance, { events: { event1: () => { }, event2: () => { }, event3: () => { } } });
    expect(Object.keys(instance.oldOptions.events).sort()).toEqual(['event1', 'event2', 'event3'].sort());

    changeComponentProps(instance, { events: undefined });
    expect(instance.oldOptions.events).toBeUndefined();

    changeComponentProps(instance, { events: undefined });
    expect(instance.oldOptions.events).toBeUndefined();

    changeComponentProps(instance, { events: mockedChartOptions.events });
    expect(Object.keys(instance.oldOptions.events).sort()).toEqual(['event1', 'event2'].sort());

    changeComponentProps(instance, { events: { event1: mockedChartOptions.events.event1 } });
    expect(Object.keys(instance.oldOptions.events).sort()).toEqual(['event1'].sort());

    changeComponentProps(instance, { events: { event1: mockedChartOptions.events.event1 } });
    expect(Object.keys(instance.oldOptions.events).sort()).toEqual(['event1'].sort());

    changeComponentProps(instance, { events: { event1: mockedChartOptions.events.event2 } });
    expect(Object.keys(instance.oldOptions.events).sort()).toEqual(['event1'].sort());
  });

  it('should update the chart when other chart configurations change', () => {
    const mockedChartOptions = Object.assign({}, chartOptions, {
      containerBackgroundColor: 'transparent',
      link: {},
    });
    const instance = renderer.create(<ReactFC
      {...mockedChartOptions}
    />).getInstance();

    changeComponentProps(instance, { containerBackgroundColor: '#000000' });
    expect(instance.oldOptions.containerBackgroundColor).toBe('#000000');
    expect(instance.oldOptions.link).toEqual({});

    changeComponentProps(instance, { link: { link1: 'mocked_value' } });
    expect(instance.oldOptions.containerBackgroundColor).toBe('#000000');
    expect(instance.oldOptions.link).toEqual({ link1: 'mocked_value' });

    changeComponentProps(instance, { containerBackgroundColor: undefined });
    expect(instance.oldOptions.containerBackgroundColor).toBeUndefined();
    expect(instance.oldOptions.link).toEqual({ link1: 'mocked_value' });
  });

  it('should ignore updating chart if there is no old options', () => {
    const instance = renderer.create(<ReactFC
      {...chartOptions}
    />).getInstance();

    instance.oldOptions = null;
    changeComponentProps(instance, { width: 10 });

    expect(instance.oldOptions).toBeNull();
  });

  it('should dispose the chart when chart container is unmounted', () => {
    const instance = renderer.create(<ReactFC
      {...chartOptions}
    />).getInstance();

    const dispose = jest.fn();
    instance.chartObj.dispose = dispose;
    instance.componentWillUnmount();
    expect(dispose).toHaveBeenCalledTimes(1);
  });

  it('should update the chart when chart dimensions are changed', () => {
    const instance = renderer.create(<ReactFC
      {...chartOptions}
    />).getInstance();

    const resizeTo = jest.fn();
    instance.chartObj.resizeTo = resizeTo;

    changeComponentProps(instance, { width: 100, height: 500 });
    expect(resizeTo).toHaveBeenCalledWith(100, 500);

    changeComponentProps(instance, { width: 10, height: undefined });
    expect(resizeTo).toHaveBeenCalledWith({ w: 10 });

    changeComponentProps(instance, { width: undefined, height: 400 });
    expect(resizeTo).toHaveBeenCalledWith({ h: 400 });
  });

  it('should update the chart when chart type is changed', () => {
    const instance = renderer.create(<ReactFC
      {...chartOptions}
    />).getInstance();

    const chartType = jest.fn();
    instance.chartObj.chartType = chartType;

    changeComponentProps(instance, { type: 'bar2d' });
    expect(chartType).toHaveBeenCalledWith('bar2d');

    chartType.mockReset();
    changeComponentProps(instance, { type: undefined });
    expect(chartType).toHaveBeenCalledTimes(0);
  });

  it('should update the chart when other chart attributes are changed', () => {
    const instance = renderer.create(<ReactFC
      {...chartOptions}
    />).getInstance();

    instance.chartObj.options = { ...instance.oldOptions };

    changeComponentProps(instance, { containerBackgroundColor: '#ffffff' });
    expect(instance.chartObj.options.containerBackgroundColor).toBe('#ffffff');
  });
});


describe('ReactFC.fcRoot(core, ...modules)', () => {
  it('should resolve the FusionCharts core with the specified modules', () => {
    const core = jest.fn();
    const m1 = jest.fn();
    const m2 = jest.fn();

    ReactFC.fcRoot(core, m1, m2);

    expect(ReactFC.fusionChartsCore).toBe(core);
    expect(m1).toHaveBeenCalledTimes(1);
    expect(m2).toHaveBeenCalledTimes(1);
  });
});
