import React, { Component } from 'react';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaFlickr from 'react-icons/lib/fa/flickr';
import FaWordpress from 'react-icons/lib/fa/wordpress';

import about from 'about.jpg';

import 'about.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="about content">
        <img src={about} alt="" className="about" />
        <div>
          <a href="https://www.instagram.com/gogogohuang" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} /></a>
          <a href="https://www.flickr.com/gogogohuang" target="_blank" rel="noopener noreferrer"><FaFlickr size={28} /></a>
          <a href="https://jzhuangblog.wordpress.com/" target="_blank" rel="noopener noreferrer"><FaWordpress size={28} /></a>
        </div>
        <div>Contact: gogogohuang@gmail.com</div>
      </div>
    );
  }
}

export default About;
