import React, { Component } from 'react';
import 'prismjs/prism.js';
import 'prismjs/themes/prism.css';

class Footer extends Component {
  render () {
    return (
        <div className="">
            <div id="footbar" className="text-center mt-2">
                <div className="col-12">
                    <p className="foot-item pt-4">© 2002-2018 InfoSoft Global Private Limited. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
  }
}

export default Footer;
