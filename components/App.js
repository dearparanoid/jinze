import React, { Component } from 'react';

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
      <div>
        <MenuBM />
      </div>
    );
  }
}

export default App;
