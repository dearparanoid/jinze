import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

class StreetCat extends Component {
  constructor(props) {
    super(props);

    this.APIKEY = 'a622ee062e1d799d9df510615a2247e5';
    this.PhotoSet_ID = '72157686414625164';
    this.User_ID = '14325930@N05';

    this.PHOTO_SET = [];

    this.handleServerPhotosetLoad = this.handleServerPhotosetLoad.bind(this);
    this.getPhotoSet = this.getPhotoSet.bind(this);


    this.state = {
      dataReady: false,
      data: [],
    };
  }

  componentWillMount() { }
  componentDidMount() {
    this.handleServerPhotosetLoad();
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() { }
  componentWillUnmount() { }

  getPhotoSet(photoset) {
    /**
        {
        src: 'http://example.com/example/img1.jpg',
        srcset: [
          'http://example.com/example/img1_1024.jpg 1024w',
          'http://example.com/example/img1_800.jpg 800w',
          'http://example.com/example/img1_500.jpg 500w',
          'http://example.com/example/img1_320.jpg 320w',
        ],
        sizes:[
          '(min-width: 480px) 50vw',
          '(min-width: 1024px) 33.3vw',
          '100vw'
        ],
        width: 681,
        height: 1024,
        alt: 'image 1',
      },
    */
    /** 
        https://farm1.staticflickr.com/2/1418878_1e92283336_m.jpg
    
        farm-id: 1
        server-id: 2
        photo-id: 1418878
        secret: 1e92283336
        size: m
    */
    photoset.photo.forEach((x) => {
      console.log(x);
      const url = `http://farm${x.farm}.staticflickr.com/${x.server}/${x.id}_${x.secret}_m.jpg`;
      this.PHOTO_SET.push(
        { src: url, alt: x.title, width: 100, height: 100, srcset: [], sizes: [] },
      );
    });
  }

  handleServerPhotosetLoad() {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.APIKEY}&photoset_id=${this.PhotoSet_ID}&user_id=${this.User_ID}&format=json&nojsoncallback=1`, {
        method: 'GET',
        headers: {},
      })
      .then((response) => {
        // ok 代表狀態碼在範圍 200-299
        if (!response.ok) throw new Error(response.statusText);

        response.json().then((data) => {
          this.setState({ data, dataReady: true });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.dataReady === false) {
      return (<div className="homeTitle">
        <h1>Loading...</h1>
      </div>);
    }
    this.getPhotoSet(this.state.data.photoset);
    return (
      <div className="homeTitle">
        <Gallery photos={this.PHOTO_SET} onClickPhoto={this.openLightbox} />
      </div>
    );
  }
}

export default StreetCat;

