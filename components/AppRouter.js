import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './content/Home';
import About from './content/About';
import Resume from './content/Resume';
import GetPhotosetContainer from './container/GetPhotosetContainer';

const AppRouter = (props) => (
  <Router>
    <div>
      <Route exact={true} path="/jinze" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={GetPhotosetContainer} />
    </div>
  </Router>
);

export default AppRouter;
