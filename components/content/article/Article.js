import React, { Component } from 'react';
import Net from 'net';

class Article extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);

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

  login() {
    const gConn = Net.createConnection({ port: 23, host: 'ptt2.cc' });
    console.warn(gConn);
  }

  render() {
    this.login('dearparanoid', 'zxcvbnma', () => {
      console.info('Test Code');
    });
    return (
      <div className="homeTitle">
        <h1>ToDo...</h1>
      </div>
    );
  }
}

export default Article;
