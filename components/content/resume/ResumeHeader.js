
import React, { Component } from 'react';

class ResumeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props,
    };
  }

  componentWillMount() { }

  componentDidMount() { }

  shouldComponentUpdate() { }

  componentWillUpdate() { }

  componentWillUnmount() { }

  render() {
    return (
      <div className={this.state.data.class}>
        <h1> Huang JinZe </h1>
        <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
          <li> phone: +886 921671393</li>
          <li> email: gogogohuang@gmail.com </li>
        </ul>
      </div>
    );
  }
}

export default ResumeHeader;
