import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { bool } from 'prop-types';
import LoginPageContainer from '../containers/LoginPageContainer';
import DashboardPageContainer from '../containers/DashboardContainer';
import PrivateRoute from './PrivateRoute';
import AboutPage from './AboutPage';
import api from '../api';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  componentDidMount() {
    api.loadApi();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={LoginPageContainer} />
          <Route path="/dashboard" component={DashboardPageContainer} />
          <PrivateRoute path="/about" isAuthorized={this.props.isAuthorized} component={AboutPage} />
          <Redirect from="/" to="/about" />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  isAuthorized: bool.isRequired,
};

export default App;
