import React from 'react';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaFlickr from 'react-icons/lib/fa/flickr';
import FaWordpress from 'react-icons/lib/fa/wordpress';
import FaGithub from 'react-icons/lib/fa/github';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { customMedia } from '../helper/Media';

import about from 'about.jpg';
import 'about.scss';

const ABOUT = ['Front-End', 'Photo', 'Surfing', 'Hiphop', 'Diving']

const Container = styled(Flex)`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  ${customMedia.greaterThan('tablet')`
    justify-content: center;
    align-items: center;
  `}
  ${customMedia.lessThan('tablet')`
    justify-content: flex-start;
    align-items: center;
  `}  
`;

const TextContainer = styled(Flex)`
  ${customMedia.greaterThan('tablet')`
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
  ${customMedia.lessThan('tablet')`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  `}  
`;

const TextWrapper = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #4e4e4e;
  ${customMedia.lessThan('tablet')`
    margin: 0.5em auto;
  `}  
`;

const ImgContainer = styled(Flex)`
  img {
    display: block;
    position: relative;
    height: auto;
    padding-top: 0;
    cursor: pointer;
    ${customMedia.greaterThan('tablet')`
      width: 50vw;
    `}  
    ${customMedia.lessThan('tablet')`
      width: 75vw;
    `}  
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

const LayoutBlock = styled.div`
  display: none;
  ${customMedia.lessThan('tablet')`
    display: block;
    height: 100px;
  `}
`;

const renderAboutText = () => (
  <TextContainer>
    {ABOUT.map((text, id, arr) => ((id !== arr.length - 1) ? <TextWrapper key={id}>{text}/</TextWrapper> : <TextWrapper key={id}>{text}</TextWrapper>))}
  </TextContainer>
)

const About = (props) => (
  <Container column center>
    <LayoutBlock />
    <ImgContainer column center>
      <img src={about} alt="" />
    </ImgContainer>
    <SocialLinkContainer justifyAround alignCenter>
      <SocialLink href="https://www.instagram.com/gogogohuang" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} /></SocialLink>
      <SocialLink href="https://www.flickr.com/gogogohuang" target="_blank" rel="noopener noreferrer"><FaFlickr size={28} /></SocialLink>
      <SocialLink href="https://jzhuangblog.wordpress.com/" target="_blank" rel="noopener noreferrer"><FaWordpress size={28} /></SocialLink>
      <SocialLink href="https://github.com/dearparanoid/" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></SocialLink>
    </SocialLinkContainer>
    {renderAboutText()}
  </Container>
)

export default About;
