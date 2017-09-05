import React, { Component } from 'react';

import ResumeHeader from 'content/resume/ResumeHeader';
// import ResumeSection from 'content/resume/ResumeSection';
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
    return (
      <div className="content">
        <div className="resume">
          <ResumeHeader class={'resume-header'} />
          <div className="resume-section">
            <h2> Summary </h2>
            <p> Major in ReactJS/Scss</p>
          </div>
          <div className="resume-section">
            <h2> Work Experience </h2>
            <div className="resume-work">
              <ul>
                <li>
                  <h3 className="resume-item-title">Senoir Software Engineer</h3>
                  <h4 className="resume-item">EtherWAN System Inc.</h4>
                  <h4 className="resume-item">2017/3 ~ now</h4>
                </li>
                <li>
                  <h3 className="resume-item-title">Secured Router Software Engineer</h3>
                  <h4 className="resume-item">MOXA</h4>
                  <h4 className="resume-item">2013/9 ~ 2016/6</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
