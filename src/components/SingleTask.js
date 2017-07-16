import React from 'react';
import { string, bool } from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import className from 'classname';
import { Card, CardHeader } from 'material-ui/Card';

const SingleTask = ({
  title,
  updated,
  status,
  isCompleted,
}) => {
  return (
    <section className={className('SingleTasks', {
      'completed': isCompleted,
    })}>
      <MuiThemeProvider>
        <Card>
          <Checkbox
            className="SingleTask__checkbox"
            checked={isCompleted}
          />
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
  isCompleted: bool.isRequired,
};

export default SingleTask;
