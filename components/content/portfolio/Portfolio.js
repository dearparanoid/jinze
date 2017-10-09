import React, { Component } from 'react';
import GetPhotoSetCover from 'content/portfolio/GetPhotoSetCover';
import GetPhotoset from 'content/portfolio/GetPhotoset';

import * as F_API from 'F_API';
import 'portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.getAllPhotoSets = this.getAllPhotoSets.bind(this);
    this.getSelectedId = this.getSelectedId.bind(this);
    this.backToPortfolio = this.backToPortfolio.bind(this);

    this.state = {
      dataReady: false,
      photoData: [],
      selectedID: '',
    };
  }
  componentWillMount() {
    this.getAllPhotoSets();
  }
  componentDidMount() {
  }

  shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() {

  }
  componentWillUnmount() { }

  getAllPhotoSets() {
    fetch(
      `${F_API.URL}=flickr.photosets.getList&api_key=${F_API.APIKEY}&user_id=${F_API.UserID}&format=json&nojsoncallback=1`, {
        method: 'GET',
        headers: {},
        mode: 'cors',
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({ dataReady: true, photoData: data.photosets.photoset });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ dataReady: false });
      });
  }

  getSelectedId(id) {
    this.setState({ selectedID: id });
  }

  backToPortfolio() {
    this.setState({ selectedID: '' });
  }

  render() {
    if (this.state.dataReady === false) {
      return <div className="portfolioTitle">Fetching Data</div>;
    }

    if (this.state.selectedID) {
      return (
        <div>
          <GetPhotoset photosetId={this.state.selectedID} />
          <div role="button" tabIndex="0" className="footer" onClick={() => { this.backToPortfolio(); }}>Back to Portofolio</div>
        </div>);
    }
    const coverRow = [];
    this.state.photoData.forEach((x) => {
      coverRow.push(
        <GetPhotoSetCover
          id={x.id}
          key={x.id}
          title={x.title._content}
          selectedID={this.getSelectedId}
        />,
      );
    });
    return (
      <div className="portfolioTitle">
        <h1>Portfolio</h1>
        <div className="panels">
          <div className="row">
            {coverRow}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
