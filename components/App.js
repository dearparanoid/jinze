import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

// import Header from 'header/Header';
import Home from 'content/Home';
import About from 'content/About';

import 'style.scss';
import 'menu.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  shouldComponentUpdate() {
    this.setState({ close: false });
    return true;
  }


  componentWillUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Menu noOverlay={false} isOpen={this.state.close}>
              <Link className="bm-menu-item" to="/jinze">Home</Link>
              <Link className="bm-menu-item" to="/about">About</Link>
            </Menu>
            <Route exact={true} path="/jinze" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
