import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { func, string } from 'prop-types';

class CreateNewTask extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({ open: !prevState.open, }));
  };

  submitForm = () => {
    this.props.submit({
      taskListId: this.props.taskListId,
      title: this.taskTitle,
    });

    this.handleToggle();
  }

  changeFieldHandler = (e) => {
    this.taskTitle = e.target.value;
  }

  render() {
    /* eslint-disable react/jsx-key */
    const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.submitForm}
      />,
    ];

    return (
      <MuiThemeProvider>
        <section>
          <FloatingActionButton
            mini={true}
            onClick={this.handleToggle}
          >
            <ContentAdd />
          </FloatingActionButton>
          <Dialog
            title={'Create new task'}
            modal={false}
            open={this.state.open}
            actions={actions}
            onRequestClose={this.handleToggle}
          >
            <TextField onChange={this.changeFieldHandler} style={{ width: '100%', }} hintText="Enter task description" />
          </Dialog>
        </section>
      </MuiThemeProvider>
    );
  }
}

CreateNewTask.propTypes = {
  submit: func.isRequired,
  taskListId: string.isRequired,
};

export default CreateNewTask;

