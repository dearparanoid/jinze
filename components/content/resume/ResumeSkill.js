
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import IconReact from 'react-devicon/react/original';
import IconJavascript from 'react-devicon/javascript/original';
import IconNodejs from 'react-devicon/nodejs/original';
import IconC from 'react-devicon/c/original';
import IconWebpack from 'react-devicon/webpack/original';
import IconCss3 from 'react-devicon/css3/original';
import IconSass from 'react-devicon/sass/original';
import IconHtml5 from 'react-devicon/html5/original';

import { customMedia } from '../../helper/Media';


const Container = styled(Flex)`
  width: 100%;
`;

const InnerContainer = styled(Flex)``;

const SvgContainer = styled(Flex)`
  width: 100%;
`;

const SvgWrapper = styled.div`
  margin: 0 0.5em;
`;

export default class ResumeSkill extends PureComponent {
  render() {
    return (
      <Container column justifyStart alignCenter>
        <InnerContainer column style={{ width: '100%' }}>
          <h3>Programming Language</h3>
          <SvgContainer wrap>
            <SvgWrapper><IconJavascript width={'3em'} height={'3em'} /></SvgWrapper>
            <SvgWrapper><IconReact width={'3em'} height={'3em'} /></SvgWrapper>
            <SvgWrapper><IconNodejs width={'3em'} height={'3em'} /></SvgWrapper>
            <SvgWrapper><IconHtml5 width={'3em'} height={'3em'} /></SvgWrapper>
            <SvgWrapper><IconSass width={'3em'} height={'3em'} /></SvgWrapper>
            <SvgWrapper><IconCss3 width={'3em'} height={'3em'} /></SvgWrapper>
            <SvgWrapper><IconC width={'3em'} height={'3em'} /></SvgWrapper>
          </SvgContainer>
        </InnerContainer>
      </Container>
    );
  }
}
