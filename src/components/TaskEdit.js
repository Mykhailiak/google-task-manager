import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { func, string } from 'prop-types';
import './TaskEdit.css';

const TaskEdit = ({
  onSave,
  onCancel,
  value,
}) => {
  let taskTitle = value;

  return (
    <MuiThemeProvider>
      <section className="TaskEdit">
        <TextField
          id={'unique_' + Math.random()}
          defaultValue={value}
          fullWidth={true}
          onChange={(e, value) => taskTitle = value}
        />
        <FlatButton
          label="Submit"
          onClick={() => onSave(taskTitle)}
        />
        <FlatButton
          label="Cancel"
          onClick={onCancel}
        />
      </section>
    </MuiThemeProvider>
  );
};

TaskEdit.propTypes = {
  onSave: func.isRequired,
  onCancel: func.isRequired,
  value: string.isRequired,
};

export default TaskEdit;
