import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);

    this.fetchDatafromServer = this.fetchDatafromServer.bind(this);

    this.state = {
    };
  }

  componentWillMount() {
  }
  componentDidMount() {
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() { }
  componentWillUnmount() { }

  fetchDatafromServer() {
    console.info('nothing...');
    /**
     * Description: 
     *  Fetch a local file. I will write a node programm to parse specific article and save to a json file.
     *  Plz refer to https://github.com/dearparanoid/ptt2-crawler, if u r interested. 
     */
  }


  render() {
    this.fetchDatafromServer();

    return (
      <div className="homeTitle">
        <h1>ToDo...</h1>
      </div>
    );
  }
}

export default Article;
