import React, { Component } from 'react';

import Header from 'header/Header';
import Home from 'content/Home';
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
        <Home />
      </div>
    );
  }
}

export default Index;
