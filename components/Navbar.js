
import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import { customMedia } from './helper/Media';

import _navbar from './_navbar.scss';

import Home from './content/Home';
import About from './content/About';
import Resume from './content/Resume';
import GetPhotosetContainer from './container/GetPhotosetContainer';

const NavContainer = styled.nav`
  height: 5em;
  width: 100%;
`;

const InnerContainer = styled(Flex)`
  height: 100%;
  margin: 0 2em;
  ${customMedia.lessThan('tablet')`
    margin: 0 1em;
  `}
`;

const NavItemContainer = styled(Flex)`
  justify-content: space-around;
`;

const NavItem = styled.div`
  font-size: 1em;
  margin: 0 0.75em;
  text-align: center;
  ${customMedia.lessThan('tablet')`
  margin: 0 0.5em;
  `}
`;

export default class Navbar extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <NavContainer className="fixed_top">
            <InnerContainer row justifyBetween alignCenter>
              <NavItem><Link to="/jinze" className="remove_decoration font_color_4e">Home</Link></NavItem>
              <NavItemContainer>
                <NavItem><Link to="/about" className="remove_decoration font_color_4e">About</Link></NavItem>
                <NavItem><Link to="/resume" className="remove_decoration font_color_4e">Resume</Link></NavItem>
                <NavItem><Link to="/portfolio" className="remove_decoration font_color_4e">Portfolio</Link></NavItem>
              </NavItemContainer>
            </InnerContainer>
          </NavContainer>
          <Route exact={true} path="/jinze" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={GetPhotosetContainer} />
        </div>
      </Router>
    )
  }
}
