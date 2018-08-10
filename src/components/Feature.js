import React from 'react';

class Feature extends React.Component {
  render() {
    return (
      <div className="container container-1200 info-wrapper pb-3">
        <div className="row">
          <div className="col">
            <div className="h2 mt-2">Features</div>
            <div className="row">
              <div className="col-md-6">
                <ul className="feature-list">
                  <li>
                    <span>
                      <i className="icn-inline icn-success fc_select"></i>
                    </span>
                    <div>Adds a chart using just one single component.</div>
                  </li>
                  <li>
                    <span>
                      <i className="icn-inline icn-success fc_select"></i>
                    </span>
                    <div>Auto-updates the chart object when the data source is modified.</div>
                  </li>
                  <li>
                    <span>
                      <i className="icn-inline icn-success fc_select"></i>
                    </span>
                    <div>Adds a chart from a JSON URL, from a XML URL, or using props Binding.</div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list">
                  <li>
                    <span>
                      <i className="icn-inline icn-success fc_select"></i>
                    </span>
                    <div>Allows you to enable interactivity between Javascript charts</div>
                  </li>
                  <li>
                    <span>
                      <i className="icn-inline icn-success fc_select"></i>
                    </span>
                    <div>Offers advanced control by giving you access to the complete FusionCharts object (containing the chart configuration).</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Feature;
