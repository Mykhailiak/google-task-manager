import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import { bool } from 'prop-types';
import api from '../api';

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
          <Route path="/login" render={() => (
            !this.props.isAuthorized ?
              <LoginPage {...this.props} /> :
              <Redirect to="/" />
          )} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  isAuthorized: bool.isRequired,
};

export default App;
