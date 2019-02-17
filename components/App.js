import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

//import MenuBM from './menu/MenuBM';
import Navbar from './Navbar';

import 'style.scss';

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    overflow-x: hidden;
  }
`;

const Container = styled.div`
  width: 100vw;
  position: relative;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Container>
          <GlobalStyle />
          <Navbar />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
