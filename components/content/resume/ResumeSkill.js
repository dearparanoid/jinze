
import React, { Component } from 'react';
/** Type Check */
import PropTypes from 'prop-types';

class ResumeSkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
    this.getSkillLan = this.getSkillLan.bind(this);
    this.getSkillTool = this.getSkillTool.bind(this);
  }

  componentWillMount() { }

  componentDidMount() { }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() { }

  componentWillUnmount() { }

  getSkillLan() {
    const skillBlock =
    this.state.data.language.map((ele) => {
      return <div key={ele}>{ele}</div>;
    });

    return skillBlock;
  }

  getSkillTool() {
    const skillBlock =
    this.state.data.tool.map((ele) => {
      return <div key={ele}>{ele}</div>;
    });

    return skillBlock;
  }

  render() {
    /** ToDo - a new way to dispaly all information with one func */
    return (
      <div className="resume-skill">
        <div className="skill-block">
          <h4>Language</h4>
          <div className="skill-content">{this.getSkillLan()}</div>
        </div>
        <div className="skill-block">
          <h4>Tool</h4>
          <div className="skill-content">{this.getSkillTool()}</div>
        </div>
      </div>
    );
  }
}


ResumeSkill.propTypes = {
  data: PropTypes.object.isRequired,
};

ResumeSkill.defaultProps = {

};
export default ResumeSkill;
