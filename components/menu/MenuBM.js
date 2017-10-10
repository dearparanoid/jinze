import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import Home from 'content/Home';
import About from 'content/About';
import Resume from 'content/Resume';
import Portfolio from 'content/portfolio/Portfolio';


import 'menu.scss';

class MenuBM extends Component {
  constructor(props) {
    super(props);

    this.handleMenu = this.handleMenu.bind(this);

    this.state = {
      close: false,
    };
  }

  componentWillMount() { }
  componentDidMount() { }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() { }
  componentWillUnmount() { }

  handleMenu() {
    this.setState({ close: false });
  }

  render() {
    return (
      <Router>
        <div>
          <Menu noOverlay={false} isOpen={this.state.close}>
            <Link className="bm-menu-item" to="/jinze">Home</Link>
            <Link className="bm-menu-item" to="/about" onClick={this.handleMenu}>About</Link>
            <Link className="bm-menu-item" to="/resume" onClick={this.handleMenu}>Resume</Link>
            <Link className="bm-menu-item" to="/portfolio" onClick={this.handleMenu} style={{ width: '70%', display: 'initial' }}>Portfolio</Link>
          </Menu>
          <Route exact={true} path="/jinze" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default MenuBM;
