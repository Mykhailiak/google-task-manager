import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import className from 'classnames';
import { Card, CardHeader } from 'material-ui/Card';
import TaskEdit from './TaskEdit';

class SingleTask extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
    };
  }

  handleEdit = () => {
    return this.setState({
      isEditing: true,
    });
  }

  handleCancel = () => {
    this.setState({
      isEditing: false,
    });
  }

  handleSave = (title) => {
    this.props.onUpdate({
      tasksListId: this.props.taskListId,
      taskId: this.props.id,
      title,
    });

    this.handleCancel();
  };

  render() {
    return (
      <section className={className('SingleTasks', {
        'completed': this.props.isCompleted,
      })}>
        {
          this.state.isEditing ?
            <TaskEdit
              value={this.props.title}
              onSave={this.handleSave}
              onCancel={this.handleCancel}
            /> :
            <MuiThemeProvider>
              <Card>
                <Checkbox
                  className="SingleTask__checkbox"
                  checked={this.props.isCompleted}
                  onCheck={() => this.props.onStatusChange({ completed: !this.props.isCompleted, })}
                />
                <CardHeader
                  onClick={this.handleEdit}
                  title={this.props.title}
                  subtitle={`Updated at: ${new Date(this.props.updated).toLocaleString()}`}
                />
              </Card>
            </MuiThemeProvider>
        }
      </section>
    );
  }
}

SingleTask.propTypes = {
  title: string.isRequired,
  updated: string.isRequired,
  status: string.isRequired,
  isCompleted: bool.isRequired,
  onStatusChange: func.isRequired,
  onUpdate: func.isRequired,
  id: string.isRequired,
  taskListId: string.isRequired,
};

export default SingleTask;
