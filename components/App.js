import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MenuBM from './menu/MenuBM';

import 'style.scss';

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    overflow-x: hidden;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <GlobalStyle />
          <MenuBM />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
