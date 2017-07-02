import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import LoginPageContainer from '../containers/LoginPageContainer';
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
          <Route path="/login" isAuthorized="true" component={LoginPageContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
