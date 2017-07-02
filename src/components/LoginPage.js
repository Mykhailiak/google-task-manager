import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './LoginPage.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { func } from 'prop-types';

class LoginPage extends Component {
  handleLogin = () => {
    this.props.login();
  }

  render() {
    return (
      <div className="LoginPage">
        <section className="LoginPage__banner">
          <section className="LoginPage__text">
            <h1 className="LoginPage__title">Google Task Manager</h1>
            <h3 className="LoginPage__subtitle">Orginize your life</h3>
            <MuiThemeProvider>
              <RaisedButton
                label="Login with google"
                onClick={this.handleLogin}
              />
            </MuiThemeProvider>
          </section>
          <img src="/img/desk.png" className="LoginPage__image" alt="" />
        </section>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: func.isRequired,
};

export default LoginPage;
