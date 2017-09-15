import React, { Component } from 'react';

import ResumeHeader from 'content/resume/ResumeHeader';
import ResumeSection from 'content/resume/ResumeSection';

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

  }

  componentWillUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    /** get data from server */
    const etherwanJob = {
      title: 'Senoir Software Engineer',
      company: 'EtherWAN System Inc.',
      date: '2017/3 ~ now',
    };
    const moxaJob = {
      title: 'Secured Router Software Engineer',
      company: 'MOXA Inc.',
      date: '2013/9 ~ 2016/6',
    };
    /** end */
    return (
      <div className="content">
        <div className="resume">
          <ResumeHeader class={'resume-header'} />
          <div className="resume-section">
            <h2> Summary </h2>
            <p> I am major in JavaScript, especially ReactJS. Now I develop a
              network management software that based on reacts and nodejs.</p>
          </div>
          <div className="resume-section">
            <h2> Work Experience </h2>
            <ResumeSection data={etherwanJob} />
            <ResumeSection data={moxaJob} />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
