import React from 'react';
import styled, { keyframes } from 'styled-components';
import Flex from 'styled-flex-component';
import { customMedia, fadeIn } from '../helper/Media';
import '../../scss/style.scss';

import home from 'home.jpg';

const HomeContainer = styled(Flex)`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${home});
  background-position: center;
`;

const Title = styled.h1`
  color: #4e4e4e;
  animation: ${fadeIn} 2s linear;
  ${customMedia.lessThan('tablet')`
    font-size: 5em;
    text-align: center;
  `}
  ${customMedia.greaterThan('tablet')`
    font-size: 10em;
  `}
`;

const Home = () => (
  <HomeContainer center full >
    <Flex full center><Title className='font-color-4e'>Light Always</Title></Flex>
  </HomeContainer>
)

export default Home;
