
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import Smartphone from '@material-ui/icons/Smartphone';
import Email from '@material-ui/icons/Email';

const UList = styled.ul`
  list-style-type: none;
  padding-left: 1em;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.3em 0;
    text-align: left;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 0.5em;
  .svg{
    margin: 0 auto;
    display: block;
  }
`;

export default class ResumeHeader extends PureComponent {
  render() {
    return (
      <Flex style={{width: '100%'}} justifyBetween alignCenter>
        <h2> Huang JinZe </h2>
        <UList>
          <li><SvgContainer><Smartphone /></SvgContainer>+886 921671393</li>
          <li><SvgContainer><Email /></SvgContainer>gogogohuang@gmail.com</li>
        </UList>
      </Flex>
    );
  }
}
