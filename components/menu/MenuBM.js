import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import Home from 'content/Home';
import About from 'content/About';
import Resume from 'content/Resume';

import 'menu.scss';

class MenuBM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
    };
  }

  componentWillMount() { }
  componentDidMount() { }

  shouldComponentUpdate() {
    this.setState({ close: false });
    return true;
  }

  componentWillUpdate() { }
  componentWillUnmount() { }

  render() {
    return (
      <Router>
        <div>
          <Menu noOverlay={false} isOpen={this.state.close}>
            <Link className="bm-menu-item" to="/jinze">Home</Link>
            <Link className="bm-menu-item" to="/about">About</Link>
            <Link className="bm-menu-item" to="/resume">Resume</Link>
          </Menu>
          <Route exact={true} path="/jinze" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
        </div>
      </Router>
    );
  }
}

export default MenuBM;
