import React, { Component } from 'react';
import GetPhotoset from 'content/portfolio/GetPhotoset';

class StreetCat extends Component {
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
      <GetPhotoset photosetId="72157686414625164" />
    );
  }
}

export default StreetCat;

