import React, { Component } from 'react';
import Header from './Header'
import Banner from './Banner'
import Feature from './Feature'
import Samples from './Samples'
import Info from './Info'
import Footer from './Footer'

import '../assets/css/codemirror.css';
import '../assets/css/dracula.css';

// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import 'prismjs/prism.js';
import 'prismjs/themes/prism.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="page-container">
          <Banner/>
          <Feature/>
          <Samples/>
          <Info/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
