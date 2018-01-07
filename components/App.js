import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MenuBM from 'menu/MenuBM';

import 'style.scss';

class App extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <BrowserRouter>
        <div>
          <MenuBM />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
