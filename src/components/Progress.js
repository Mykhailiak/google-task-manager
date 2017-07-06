import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import './Progress.css';

const Progress = () => {
  return (
    <section className="Progress">
      <MuiThemeProvider>
        <section className="preloader">
          <CircularProgress size={80} thickness={5} />
        </section>
      </MuiThemeProvider>
    </section>
  );
};

export default Progress;
