
import React, { Component } from 'react';

class ResumeSection extends Component {
  constructor(props) {
    super(props);
    this.renderJobDes = this.renderJobDes.bind(this);
    this.renderJobItem = this.renderJobItem.bind(this);

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

  renderJobDes() {
    const jobDes =
    this.state.data.data.jobDesc.map((x) => {
      return <li key={x}>{this.state.data.data.product} - {x}</li>;
    });
    return jobDes;
  }

  renderJobItem() {
    return (
      <div>
        {/*
        <h3 className="resume-item-title">{this.state.data.data.title}</h3>
        <h4 className="resume-item">{this.state.data.data.company}</h4>
        <h4 className="resume-item">{this.state.data.data.date}</h4>
      <h4 className="resume-item">{this.state.data.data.product}</h4> */}
        <h3>
          {this.state.data.data.company}, {this.state.data.data.title}, {this.state.data.data.date}
        </h3>
      </div>
    );
  }

  render() {
    return (
      <div className="resume-work">
        <div className="resume-line" />
        {this.renderJobItem()}
        <ul>
          {this.renderJobDes()}
        </ul>
      </div>
    );
  }
}

export default ResumeSection;
