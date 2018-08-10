import React, { Component } from 'react';
import siteLogo from '../assets/images/fc-logo.svg';

class Header extends Component {
  render () {
    return (
        <nav id="navbar" className="navbar navbar-light navbar-expand-lg bg-light">
            <a href="https://www.fusioncharts.com" target="_blank" className="navbar-brand active">
                <img src={siteLogo} width="149" height="27" alt="FusionCharts" className="img-circle" />
            </a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="header-link" href="//github.com/fusioncharts/react-fusioncharts-component" target="_blank">GitHub Repository</a>
                </li>
            </ul>
        </nav>
    )
  }
}

export default Header;
