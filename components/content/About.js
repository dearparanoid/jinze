import React, { Component } from 'react';
import avatar from 'avatar.jpg';

import 'about.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="about">
        <img src={avatar} alt="Avatar" className="about" />
        <div>Contact: gogogohuang@gmail.com</div>
      </div>
    );
  }
}

export default About;
