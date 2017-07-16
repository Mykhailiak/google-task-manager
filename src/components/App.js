import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { bool, func } from 'prop-types';
import LoginPageContainer from '../containers/LoginPageContainer';
import DashboardPageContainer from '../containers/DashboardContainer';
import PrivateRoute from './PrivateRoute';
import api from '../api';
import AboutPage from './AboutPage';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  componentWillMount() {
    api.loadApi()
      .then(() => this.props.logInUserPrecenceOfTokens());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={LoginPageContainer} />
          <PrivateRoute
            path="/dashboard"
            isAuthorized={this.props.isAuthorized}
            component={DashboardPageContainer}
          />
          <PrivateRoute
            path="/about"
            isAuthorized={this.props.isAuthorized}
            component={AboutPage}
          />
          <Redirect from="/" to="/about" />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  isAuthorized: bool.isRequired,
  logInUserPrecenceOfTokens: func.isRequired,
};

export default App;
