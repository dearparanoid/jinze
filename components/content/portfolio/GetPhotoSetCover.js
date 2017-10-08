import React, { Component } from 'react';
/** Type Check */
import PropTypes from 'prop-types';
import * as F_API from 'F_API';

class GetPhotoset extends Component {
  constructor(props) {
    super(props);

    this.getCover = this.getCover.bind(this);
    this.getSize = this.getSize.bind(this);

    this.state = {
      dataReady: false,
      photosetId: this.props.id,
      title: this.props.title,
      imgSrc: '',
    };
  }

  componentWillMount() {
    this.getCover();
  }
  componentDidMount() {
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() { }
  componentWillUnmount() { }

  getCover() {
    fetch(
      `${F_API.URL}=flickr.photosets.getPhotos&api_key=${F_API.APIKEY}&photoset_id=${this.state.photosetId}&user_id=${F_API.UserID}&format=json&nojsoncallback=1`, {
        method: 'GET',
        headers: {},
        mode: 'cors',
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.getSize(data.photoset.photo[0].id);
      })
      .catch((e) => { console.error(e); });
  }

  getSize(photoId) {
    fetch(
      `${F_API.URL}=flickr.photos.getSizes&api_key=${F_API.APIKEY}&photo_id=${photoId}&format=json&nojsoncallback=1`, {
        method: 'GET',
        headers: {},
        mode: 'cors',
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return (response.json());
      })
      .then((data) => {
        this.setState({ dataReady: true, imgSrc: data.sizes.size[5].source });
      });
  }

  render() {
    if (this.state.dataReady === false) {
      return <div />;
    }

    return (
      <div
        className="cover"
        role="button"
        tabIndex="0"
        onClick={() => { this.props.selectedID(this.state.photosetId); }}
      >
        <div className="image">
          <img src={this.state.imgSrc} alt={this.state.title} />
        </div>
        <h3 className="title">{this.state.title}</h3>
      </div>
    );
  }
}

GetPhotoset.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selectedID: PropTypes.func.isRequired,
};

GetPhotoset.defaultProps = {

};

export default GetPhotoset;

