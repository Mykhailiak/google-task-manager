import React from 'react';
import { string, bool, func } from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import className from 'classnames';
import { Card, CardHeader } from 'material-ui/Card';

const SingleTask = ({
  title,
  updated,
  isCompleted,
  onStatusChange,
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
            onCheck={() => onStatusChange({ completed: !isCompleted, })}
          />
          <CardHeader
            title={title}
            subtitle={`Updated at: ${new Date(updated).toLocaleString()}`}
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
  onStatusChange: func.isRequired,
};

export default SingleTask;
