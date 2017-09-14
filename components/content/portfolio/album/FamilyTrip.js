import React, { Component } from 'react';
import GetPhotoset from 'content/portfolio/GetPhotoset';

class FamilyTrip extends Component {
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
      <GetPhotoset photosetId="72157685958265933" />
    );
  }
}

export default FamilyTrip;
