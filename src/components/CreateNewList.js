import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import AddIcon from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { func } from 'prop-types';

class CreateNewList extends Component {
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
    this.props.submit(this.listName);

    this.handleToggle();
  }

  changeFieldHandler = (e) => {
    this.listName = e.target.value;
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
      <section>
        <ListItem
          primaryText="Create new list"
          leftIcon={<AddIcon />}
          onClick={this.handleToggle}
        />
        <Dialog
          title={'Create new list'}
          modal={false}
          open={this.state.open}
          actions={actions}
          onRequestClose={this.handleToggle}
        >
          <TextField onChange={this.changeFieldHandler} style={{ width: '100%', }} hintText="Hint Text" />
        </Dialog>
      </section>
    );
  }
}

CreateNewList.propTypes = {
  submit: func.isRequired,
};

export default CreateNewList;
