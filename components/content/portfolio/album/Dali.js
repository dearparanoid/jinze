import React, { Component } from 'react';
import GetPhotoset from 'content/portfolio/GetPhotoset';

class Dali extends Component {
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
      <GetPhotoset photosetId="72157676072604146" />
    );
  }
}

export default Dali;
