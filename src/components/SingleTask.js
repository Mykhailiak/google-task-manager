import React from 'react';
import { string } from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader } from 'material-ui/Card';
import './SingleTask.css';

const SingleTask = ({
  title,
  updated,
  status,
}) => {
  return (
    <section className="SingleTasks">
      <MuiThemeProvider>
        <Card>
          <CardHeader
            title={title}
            subtitle={`Updated at: ${new Date(updated).toLocaleString()}; Status - ${status}`}
          />
        </Card>
      </MuiThemeProvider>
    </section>
  );
};

SingleTask.propTypes = {
  title: string.isRequired,
  updated: string.isRequired,
  status: string.isRequired,
};

export default SingleTask;
