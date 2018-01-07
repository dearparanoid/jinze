import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import GetPhotoSetCover from 'content/portfolio/GetPhotoSetCover';
import GetPhotoset from 'content/portfolio/GetPhotoset';

import * as F_API from 'F_API';
import 'portfolio.scss';

class PortfolioSet extends Component {
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

  componentWillReceiveProps() {
    window.addEventListener('hashchange', this.handleHashChange, false);
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

  handleHashChange = () => {
    const hash = window.location.hash;
    if (hash) {
      this.getSelectedId(hash.slice(1));
    } else {
      this.backToPortfolio();
    }
  }

  render() {
    if (this.state.dataReady === false) {
      return <div className="portfolioTitle">Fetching Data</div>;
    }

    if (this.state.selectedID) {
      return (
        <Router>
          <Route>
            <div>
              <GetPhotoset photosetId={this.state.selectedID} />
              <div role="button" tabIndex="0" className="footer" onClick={this.backToPortfolio}>Back to Portofolio</div>
            </div>
          </Route>
        </Router>
      );
    }


    const coverRow = [];
    this.state.photoData.forEach((x) => {
      coverRow.push(
        <Link to={`/portfolio#${x.id}`} className="portfolio-link" key={x.id}>
          <GetPhotoSetCover
            id={x.id}
            key={x.id}
            title={x.title._content}
            selectedID={this.getSelectedId}
          />
        </Link>,
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

export default PortfolioSet;
