import React, { Component } from 'react';
import GetPhotoset from 'content/portfolio/GetPhotoset';

class Tibet extends Component {
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
  componentWillUpdate() { }
  componentWillUnmount() { }


  render() {
    return (
      <GetPhotoset photosetId="72157672449250872" />
    );
  }
}

export default Tibet;

