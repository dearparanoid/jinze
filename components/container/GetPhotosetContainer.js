import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
/** Type Check */
import PropTypes from 'prop-types';

// import Portfolio from 'presentational/Portfolio';
import * as F_API from 'F_API';

const originPhotoIdx = 8;
const thumPhotoIdx = 4;

class GetPhotosetContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataReady: false,
    };
  }

  render() {
    if (this.state.dataReady === false) {
      return (
        <div className="homeTitle">
          <h1>Data Fetching...</h1>
        </div>);
    }

    console.log(this.state);

    return (
      <div >gogog</div>
    );
  }
}

export default GetPhotosetContainer;

