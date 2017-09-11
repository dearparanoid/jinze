import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

class StreetCat extends Component {
  constructor(props) {
    super(props);

    this.APIKEY = 'a622ee062e1d799d9df510615a2247e5';
    this.PhotoSet_ID = '72157686414625164';
    this.User_ID = '14325930@N05';

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
      `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${this.APIKEY}&photo_id=${x.id}&format=json&nojsoncallback=1`, {
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
      `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.APIKEY}&photoset_id=${this.PhotoSet_ID}&user_id=${this.User_ID}&format=json&nojsoncallback=1`, {
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

