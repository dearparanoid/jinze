import React, { Component } from 'react';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaFlickr from 'react-icons/lib/fa/flickr';
import FaWordpress from 'react-icons/lib/fa/wordpress';
import styled, { keyframes } from 'styled-components';
import Flex from 'styled-flex-component';
import { customMedia } from '../helper/Media';

import about from 'about.jpg';
import 'about.scss';

const ABOUT = ['Front-end', 'Photo', 'Surfing', 'Hiphop', 'Diving']

const Container = styled(Flex)`
  width: 100vw;
  height: 100vh;
  img {
    margin: 25px auto 0px;
    width: 50vw;
    padding-top: 0;
  }
`;

const SocialLinkContainer = styled(Flex)`
  margin: 1em auto;
  ${customMedia.greaterThan('tablet')`
    width: 10%;
  `}
  ${customMedia.lessThan('tablet')`
    width: 50%;
  `}
`;

const SocialLink = styled.a`
  color: black;
  text-decoration: none;
`;

const TextContainer = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const renderAboutText = () => (
  <TextContainer>
    {ABOUT.map((text, id, arr) => ((id !== arr.length - 1) ? `${text}/` : `${text}`))}
  </TextContainer>
)

const About = (props) => (
  <Container column center>
    <img src={about} alt="" />
    <SocialLinkContainer justifyAround alignCenter>
      <SocialLink href="https://www.instagram.com/gogogohuang" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} /></SocialLink>
      <SocialLink href="https://www.flickr.com/gogogohuang" target="_blank" rel="noopener noreferrer"><FaFlickr size={28} /></SocialLink>
      <SocialLink href="https://jzhuangblog.wordpress.com/" target="_blank" rel="noopener noreferrer"><FaWordpress size={28} /></SocialLink>
    </SocialLinkContainer>
    {renderAboutText()}
  </Container>
)

export default About;
