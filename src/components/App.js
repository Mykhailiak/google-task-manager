import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
