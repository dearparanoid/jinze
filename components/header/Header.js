import React, { Component } from 'react';

import 'header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <h1>HUANG JINZE</h1>
        </div>
      </div>
    );
  }
}

export default Header;
