import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import Home from 'content/Home';
import About from 'content/About';

import 'menu.scss';

class MenuBM extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="bm-overlay">
          <Menu noOverlay={false} rigtht={true}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Menu>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>);
  }
}

export default MenuBM;
