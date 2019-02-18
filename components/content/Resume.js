import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import Paper from '@material-ui/core/Paper';

import { customMedia } from '../helper/Media';
import ResumeHeader from './resume/ResumeHeader';
import ResumeSection from './resume/ResumeSection';
import ResumeSkill from './resume/ResumeSkill';
import { pSkill } from '../../common/Resume';

import home from 'home.jpg';

import './resume/_resume.scss';

const Conatiner = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  padding-top: 5em;
  background-size: cover;
  background-image: url(${home});
  background-position: center;
`;

const BoxContainer = styled(Paper)`
  border: 1px solid #4e4e4e;
  border-radius: 0.25em;
  width: 75%;
  margin: 0 auto;
  padding: 2.5em;
  ${customMedia.lessThan('tablet')`
    width: 85%;
    padding: 1em;
  `}
`;

const ResumeHeaderContainer = styled(Flex)`
  flex-direction: column;
`;

const LayoutBlock = styled.div`
  display: none;
  ${customMedia.lessThan('tablet')`
    display: block;
    height: 20vh;
  `}
`;

export default class Resume extends PureComponent {
  render() {
    return (
      <Conatiner>
        <LayoutBlock />
        <BoxContainer elevation={2}>
          <ResumeHeaderContainer column justifyStart alignCenter>
            <ResumeHeader />
          </ResumeHeaderContainer>
          <ResumeSkill data={pSkill} />
          {/*<div className="resume-section">
            <h2> Work Experience </h2>
            <ResumeSection data={tripMomentJob} />
            <ResumeSection data={etherwanJob} />
            <ResumeSection data={moxaJob} />
          </div> */}
        </BoxContainer>
      </Conatiner>
    );
  }
}
