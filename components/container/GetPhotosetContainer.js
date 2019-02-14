import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Gallery from 'react-photo-gallery';
/** Type Check */
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';

const originPhotoIdx = 8;
const thumPhotoIdx = 4;

class GetPhotosetContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataReady: false,
    };
  }

  componentWillMount() {
    this.props.fetchAllPhotoSetsData();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  

  componentDidMount() {
    console.log(this.props);
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPhotoSetsData: bindActionCreators(actions.fetchAllPhotoSetsData, dispatch),
  }
}

const mapStateToProps = (state) => {
  return {
    photoSet: state.photoSet,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetPhotosetContainer);
