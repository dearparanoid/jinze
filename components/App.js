import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Header from 'header/Header';
import Home from 'content/Home';
import About from 'content/About';

import 'style.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

export default Index;
