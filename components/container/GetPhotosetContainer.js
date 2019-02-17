import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import isEmpty from 'lodash/isEmpty';

import GetPhotosContainer from './GetPhotosContainer';

import * as actions from '../../store/actions';

const _ = {
  isEmpty
};

const Container = styled(Flex)`
  width: 82.5vw;
  padding-top: 75px;
  margin: 0 auto;
`;

class GetPhotosetContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllPhotoSetsData();
  }

  render() {
    if (_.isEmpty(this.props.photoSet)) {
      return (
        <Container>
          <h1>Data Fetching...</h1>
        </Container>
      );
    }

    return (
      <Container>
        <GetPhotosContainer photoset_id={this.props.photoSet.allPhotoSets.photoset[1].id} />
      </Container>
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
