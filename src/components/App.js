import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  //Link,
  Switch
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            Header
          </div>
          <div>
            <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/about' exact component={AboutPage} />
            <Route exact component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
