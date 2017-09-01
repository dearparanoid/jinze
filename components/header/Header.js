import React, { Component } from 'react';
import Menu from 'menu/Menu';

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
        <Menu />
      </div>
    );
  }
}

export default Header;
