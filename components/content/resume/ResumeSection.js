
import React, { Component } from 'react';

class ResumeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props,
    };
  }

  componentWillMount() {
  }

  componentDidMount() { }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() { }

  componentWillUnmount() { }

  render() {
    return (
      <div className="resume-work">
        <h3 className="resume-item-title">{this.state.data.data.title}</h3>
        <h4 className="resume-item">{this.state.data.data.company}</h4>
        <h4 className="resume-item">{this.state.data.data.date}</h4>
        <h4 className="resume-item">{this.state.data.data.product}</h4>
      </div>
    );
  }
}

export default ResumeSection;
