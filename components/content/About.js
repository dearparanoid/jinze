import React, { Component } from 'react';
import avatar from 'avatar.jpg';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <img src={avatar} alt="Avatar" />
      </div>
    );
  }
}

export default About;
