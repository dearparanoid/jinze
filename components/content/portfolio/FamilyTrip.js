import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

import * as F_API from 'F_API';

class StreetCat extends Component {
  constructor(props) {
    super(props);

    this.PhotoSetID = '72157685958265933';

    this.PHOTO_SET = [];

    this.handleServerPhotoset = this.handleServerPhotoset.bind(this);
    this.handleServerPhotoSize = this.handleServerPhotoSize.bind(this);

    this.state = {
      dataReady: false,
      data: [],
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
            src: data.sizes.size[6].source,
            width: parseInt(data.sizes.size[6].width, 10),
            height: parseInt(data.sizes.size[6].height, 10),
            srcset: [],
            sizes: [],
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
      `${F_API.URL}=flickr.photosets.getPhotos&api_key=${F_API.APIKEY}&photoset_id=${this.PhotoSetID}&user_id=${F_API.UserID}&format=json&nojsoncallback=1`, {
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
        <Gallery photos={this.PHOTO_SET} />
      </div>
    );
  }
}

export default StreetCat;

