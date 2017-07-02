import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <MuiThemeProvider>
        <Paper
          zDepth={1}
          className='AboutPage__content container'
        >
          <h2>Google Tasks Manager</h2>
          <p>This application is written based on <a href="https://developers.google.com/google-apps/tasks/">Google Tasks API</a> usign Material Design concepts.</p>
        </Paper>
      </MuiThemeProvider>
    </div>
  );
};

export default AboutPage;
