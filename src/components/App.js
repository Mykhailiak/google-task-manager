import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LoginPageContainer from '../containers/LoginPageContainer';
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
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
