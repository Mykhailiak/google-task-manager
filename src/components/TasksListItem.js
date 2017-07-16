import React, { Component } from 'react';
import { object, func, array, bool } from 'prop-types';
import SingleTask from './SingleTask';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Progress from './Progress';
import Paper from 'material-ui/Paper';

class TasksListItem extends Component {
  componentWillMount() {
    this.props.fetchTaskskListItem(this.props.match.params.id);
  }

  componentWillReceiveProps({ match, }) {
    if (this.props.match.params.id !== match.params.id) {
      this.props.fetchTaskskListItem(match.params.id);
    }
  }

  handleStatusChange = (taskId, { completed, }) => {
    const tasksListId = this.props.match.params.id;

    this.props.updateTaskStatus({
      tasksListId,
      taskId,
      status: completed,
    });
  }

  render() {
    if (this.props.loading) {
      return (
        <Progress />
      );
    }

    return (
      <section className="TasksListItem">
        <h3>Tasks Lists Item</h3>
        {
          this.props.tasks.length ?
            this.props.tasks.map(task => (
              <SingleTask
                key={task.id}
                isCompleted={task.status === 'completed'}
                onStatusChange={(params) => this.handleStatusChange(task.id, params)}
                {...task}
              />)) :
            <MuiThemeProvider>
              <Paper style={{ textAlign: 'center', padding: 8, }}>
                <span>List is empty</span>
              </Paper>
            </MuiThemeProvider>
        }
      </section>
    );
  }
}

TasksListItem.propTypes = {
  match: object.isRequired,
  fetchTaskskListItem: func.isRequired,
  tasks: array.isRequired,
  loading: bool.isRequired,
  updateTaskStatus: func.isRequired,
};

export default TasksListItem;
