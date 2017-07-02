import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './LoginPage.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage__banner">
          <div className="LoginPage__text">
            <MuiThemeProvider>
              <RaisedButton label="Login" />
            </MuiThemeProvider>
          </div>
          <img src="http://www.themes-lab.com/make-frontend/common-files/images/flat-desk.png" alt=""/>
        </div>
      </div>
    );
  }
}

export default LoginPage;
