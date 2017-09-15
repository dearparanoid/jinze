import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
/** Type Check */
import PropTypes from 'prop-types';

import * as F_API from 'F_API';

const originPhotoIdx = 8;
const thumPhotoIdx = 4;

class GetPhotoset extends Component {
  constructor(props) {
    super(props);

    this.PHOTO_SET = [];

    this.handleServerPhotoset = this.handleServerPhotoset.bind(this);
    this.handleServerPhotoSize = this.handleServerPhotoSize.bind(this);

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

    this.state = {
      dataReady: false,
      data: [],
      photosetId: this.props.photosetId,
      currentImage: 0,
    };
  }

  componentWillMount() {
    this.handleServerPhotoset();
  }
  componentDidMount() {
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() { }
  componentWillUnmount() { }

  openLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  handleServerPhotoSize(x) {
    fetch(
      `${F_API.URL}=flickr.photos.getSizes&api_key=${F_API.APIKEY}&photo_id=${x.id}&format=json&nojsoncallback=1`, {
        method: 'GET',
        headers: {},
        mode: 'cors',
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.PHOTO_SET.push(
          {
            src: data.sizes.size[originPhotoIdx].source,
            width: parseInt(data.sizes.size[originPhotoIdx].width, 10),
            height: parseInt(data.sizes.size[originPhotoIdx].height, 10),
            srcset: [
              `${data.sizes.size[originPhotoIdx].source} 1440w`,
              `${data.sizes.size[thumPhotoIdx].source} 720w`,
            ],
            sizes: [
              '(min-width: 720px) 50vw',
              '(min-width: 1440px) 33.3vw',
              '100vw',
            ],
          },
        );
        this.setState({ dataReady: true });
      })
      .catch(() => {
        this.setState({ dataReady: false });
      });
  }

  handleServerPhotoset() {
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
        data.photoset.photo.forEach((x) => {
          this.handleServerPhotoSize(x);
        });
        this.setState({ data });
      })
      .catch(() => {
        this.setState({ dataReady: false });
      });
  }


  render() {
    if (this.state.dataReady === false) {
      return (
        <div className="homeTitle">
          <h1>Data Fetching...</h1>
        </div>);
    }

    return (
      <div className="portfolioTitle">
        <h1>{this.state.data.photoset.title}</h1>
        <Gallery photos={this.PHOTO_SET} onClick={() => { return this.openLightbox(); }} />
        <Lightbox
          theme={{ container: { background: 'rgba(0, 0, 0, 0.85)' } }}
          images={this.PHOTO_SET.map((x) => { return { src: x.src, srcset: x.srcSet }; })}
          backdropClosesModal={true}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          width={1600}
        />
      </div>
    );
  }
}

GetPhotoset.propTypes = {
  photosetId: PropTypes.string.isRequired,
};

GetPhotoset.defaultProps = {

};

export default GetPhotoset;

