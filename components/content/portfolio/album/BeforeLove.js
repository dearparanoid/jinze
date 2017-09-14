import React, { Component } from 'react';
import GetPhotoset from 'content/portfolio/GetPhotoset';

class BeforeLove extends Component {
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
      <GetPhotoset photosetId="72157680622362610" />
    );
  }
}

export default BeforeLove;

