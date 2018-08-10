import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript';

import config from '../samples/config.json';

import SimpleChart from '../samples/simple-chart';
import Pie3DChart from '../samples/3d-pie-chart';
import ColumnLineAreaCombiChart from '../samples/column-line-area-combi-chart';
import FetchDataFromJsonUrl from '../samples/fetch-data-from-json-url';
import FetchDataFromXmlUrl from '../samples/fetch-data-from-xml-url';
import UpdateChartData from '../samples/update-chart-data';
import UpdateChartAttributes from '../samples/update-chart-attributes';
import TriggerEventsFromChart from '../samples/trigger-events-from-chart';
import PercentageCalculation from "../samples/percentage-calculation";
import ClientSideExporting from '../samples/client-side-exporting';
import DrillDown from '../samples/drill-down';
import SimpleGauge from '../samples/simple-gauge';
import SimpleMap from '../samples/simple-map';
import ApplyTheme from '../samples/apply-theme';
import ChangeChartTypeRuntime from '../samples/change-chart-type-runtime';
import UseAnnotations from '../samples/use-annotations';
import RenderAlert from '../samples/render-alert';
import SpecialEvents from '../samples/special-events';
import DynamicEventListening from '../samples/dynamic-event-listening';
import SliceDataPlots from '../samples/slice-data-plots';

var options = {
  tabSize: "4",
  smartIndent: true,
  lineNumbers: true,
  readOnly: true,
  theme: 'dracula',
  mode: 'javascript',
  viewportMargin: Infinity
};

class Samples extends Component {
  constructor(props) {
    super(props);

    var locationArr = window.location.pathname.split('/');
    var paths = Object.values(config.sampleRouteMapping);
    var activePath = paths.findIndex(element => element === '/' + locationArr[locationArr.length - 1]);
    if (activePath === -1) {
      activePath = 1;
    } else {
      ++activePath;
    }

    this.state = {
      activePath: activePath,
      button: 'js',
      showModal: false
    }
  }

  checkActiveTab(match, location, i) {
    if ((location.pathname === "/" && parseInt(i) === 1) || (match && match.url === location.pathname)) {
      function makeActive(){
        return true;
      }
      return makeActive;
    }
  }

  tabClicked(index) {
    this.setState({
      activePath: index,
    });
  }

  buttonClicked(button) {
    this.setState({
      button: button
    });
  }

  modalToggle(modal, event) {
    var modalEle = document.getElementById('myModal');
    if (event && (event.target !== modalEle && !modalEle.contains(event.target))) {
      modal = true
    }
    this.setState({
      showModal: modal,
    });
  }

  render () {
    var editorText = '';
    if (this.state.button === 'js') {
      editorText = config.sampleProps[this.state.activePath].code;
    } else {
      editorText = config.sampleProps[this.state.activePath].data;
    }
    return (
      <BrowserRouter basename="react-fusioncharts-component">
        <div className="demo bg-light-purple pt-4 pb-4">
          <div className="container container-1200 info-wrapper">
          <div className="row">
              <div className="col-12 d-flex justify-content-center d-md-none">
                <div id="mobileChart-selector" className="base-dropdown chart-selector" onClick={() => this.modalToggle(true)}>
                  <div className="selector">{config.sampleProps[this.state.activePath].title}</div>
                  <div className="placeholder">Quick Demo:</div>
                  <div className="caret">
                    <i className="fc_dropdown"></i>
                  </div>
                </div>
              </div>
            </div>
            <div id="myModal" className={"modal".concat(this.state.showModal ? ' sumo' : ' hidden')} onClick={(event) => this.modalToggle(false, event)}>
              <div className="modal-content">
                <div className="nav-list">
                  {
                    Object.keys(config.sampleProps).map(i =>
                      <NavLink className="nav-item" activeClassName="selected" key={"tab-" + i} to={config.sampleRouteMapping[i]} onClick={() => this.tabClicked(i)} isActive={(match, location) => this.checkActiveTab(match, location, i)}>
                        <div className="h5">{config.sampleProps[i].title}</div>
                        <div className="p item-desc">{config.sampleProps[i].desc}</div>
                      </NavLink>
                    )
                  }
                </div>
              </div>
            </div>

            <div className="row">
              <div className="side-nav col-3 d-none d-md-block">
                <div className="nav-heading">Quick Demo:</div>
                <div className="nav-list">
                  {
                    Object.keys(config.sampleProps).map(i =>
                      <NavLink className="nav-item" activeClassName="selected" key={"tab-" + i} to={config.sampleRouteMapping[i]} onClick={() => this.tabClicked(i)} isActive={(match, location) => this.checkActiveTab(match, location, i)}>
                        <div className="h5">{config.sampleProps[i].title}</div>
                        <div className="p item-desc">{config.sampleProps[i].desc}</div>
                      </NavLink>
                    )
                  }
                </div>
              </div>
              <div className="col-md-9 col-12">
                <div className="card shadow">
                  <div className="card-body chart-wrapper">
                    <div className="chart-wrapper-inner">
                      <Route exact path='/' component={SimpleChart} />
                      <Route path='/simple-chart' component={SimpleChart} />
                      <Route path='/3d-pie-chart' component={Pie3DChart} />
                      <Route path='/column-line-area-combi-chart' component={ColumnLineAreaCombiChart} />
                      <Route path='/fetch-data-from-json-url' component={FetchDataFromJsonUrl} />
                      <Route path='/fetch-data-from-xml-url' component={FetchDataFromXmlUrl} />
                      <Route path='/update-chart-data' component={UpdateChartData} />
                      <Route path='/update-chart-attributes' component={UpdateChartAttributes} />
                      <Route path='/trigger-events-from-chart' component={TriggerEventsFromChart} />
                      <Route path='/percentage-calculation' component={PercentageCalculation} />
                      <Route path='/export-charts' component={ClientSideExporting} />
                      <Route path='/drill-down' component={DrillDown} />
                      <Route path='/simple-gauge' component={SimpleGauge} />
                      <Route path='/world-map' component={SimpleMap} />
                      <Route path='/apply-theme' component={ApplyTheme} />
                      <Route path='/change-chart-type-runtime' component={ChangeChartTypeRuntime} />
                      <Route path='/use-annotations' component={UseAnnotations} />
                      <Route path='/render-alert' component={RenderAlert} />
                      <Route path='/special-events' component={SpecialEvents} />
                      <Route path='/dynamic-event-listening' component={DynamicEventListening} />
                      <Route path='/slice-data-plots' component={SliceDataPlots} />
                    </div>
                  </div>
                </div>

                <div className="code-view mt-2">
                  <div className="card-shadow" style={{background: '#03040B'}}>
                    <div className="code-nav-btns btn-group" role="group" aria-label="Basic example">
                      <button type="button" id="js" onClick={() => this.buttonClicked('js')} className={"btn btn-code".concat(this.state.button === 'js' ? ' selected': '')}>JavaScript</button>
                      <button type="button" id="data" onClick={() => this.buttonClicked('data')} className={"btn btn-code".concat(this.state.button === 'data' ? ' selected': '')}>Data</button>
                    </div>
                    <div className="card-body p-0">
                      <div className="code-panel">
                        <div className="code-panel-header">
                          <div id="chartCode">
                            <CodeMirror value={editorText} options={options} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Samples;
