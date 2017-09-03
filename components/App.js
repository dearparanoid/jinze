import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import Header from 'header/Header';
import Home from 'content/Home';
import About from 'content/About';

import 'style.scss';
import 'menu.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="outer-container" style={{ height: '100vh' }}>
        <Header />
        <Router>
          <div>
            <Menu outerContainerId={'outer-container'} noOverlay={false} rigtht={true}>
              <Link className="menu-item" to="/">Home</Link>
              <Link className="menu-item" to="/about">About</Link>
            </Menu>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
