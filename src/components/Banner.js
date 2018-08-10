import React from 'react';
import reactLogo from '../assets/images/react.svg';
import FCLogo from '../assets/images/fc-min-logo.svg';

class Banner extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="jumbotron banner-bg-3 heroContainer fixed-bg home-banner pl-2 pr-2 pl-sm-3 pr-sm-3 pl-md-3 pr-md-3 pl-lg-6 pr-lg-6 pb-4 pt-4">
          <div className="container container-1440 info-wrapper">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="h1 text-white text-center">
                  <img id="lang-logo" className="img-valign" src={reactLogo} width="40" height="40" alt="React" />
                  <img id="fc-logo" className="img-valign" src={FCLogo} width="40" height="40" alt="FusionCharts" />
                  <span className="title pl-1">React-FusionCharts</span>
                </div>
                <div className="h3 text-white text-center mt-2">
                  <span className="sub-title primary">
                      An easy-to-use, lightweight React component for the FusionCharts JavaScript Charting Library
                  </span>
                </div>
                <div className="p text-white text-center mt-2">
                  <span className="sub-title secondary">
                    The React-FusionCharts component lets you easily include FusionCharts in your React projects and add interactive charts to your React applications.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;
