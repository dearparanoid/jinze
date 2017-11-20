import React, { Component } from 'react';

import ResumeHeader from 'content/resume/ResumeHeader';
import ResumeSection from 'content/resume/ResumeSection';
import ResumeSkill from 'content/resume/ResumeSkill';

import 'resume.scss';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    /** should get data from server */
    const tripMomentJob = {
      title: 'F2E Engineer',
      company: 'TripMoment Inc.',
      date: '2017/11 ~ Now',
      product: 'tripmoment.com',
      jobDesc: ['website development'],
    };
    const etherwanJob = {
      title: 'Senoir Software Engineer',
      company: 'EtherWAN System Inc.',
      date: '2017/3 ~ 2017/11',
      product: 'Network Management System',
      jobDesc: ['Topology', 'UI Revision', 'Adapt GitLab'],
    };
    const moxaJob = {
      title: 'Secured Router Software Engineer',
      company: 'MOXA Inc.',
      date: '2013/9 ~ 2016/6',
      product: 'Secured Router',
      jobDesc: ['ABC02 Porting', 'Transparent Filrewall', 'Mess Configure', 'Account Ehancement', 'OpenVPN porting', 'UI/UX Improvement'],
    };
    const pSkill = {
      language: ['Javascript', 'React', 'Sass', 'HTML', 'CSS', 'React-Native', 'Node.js'],
      tool: ['Webpack', 'Adobe Lightroom'],
    };
    /** end */
    return (
      <div className="content">
        <div className="resume">
          <ResumeHeader class={'resume-header'} />
          <div className="resume-section">
            <h2> Summary </h2>
            <p> I am major in JavaScript, especially React. Now I develop a
              network management software that based on React and Node.JS. </p>
          </div>
          <div className="resume-section">
            <h2> Skill </h2>
            <ResumeSkill data={pSkill} />
          </div>
          <div className="resume-section">
            <h2> Work Experience </h2>
            <ResumeSection data={tripMomentJob} />
            <ResumeSection data={etherwanJob} />
            <ResumeSection data={moxaJob} />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
