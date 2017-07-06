import React, { Component } from 'react';
import { object, func, array } from 'prop-types';
import SingleTask from './SingleTask';
import './TasksListItem';


class TasksListItem extends Component {
  componentWillMount() {
    this.props.fetchTaskskListItem(this.props.match.params.id);
  }

  componentWillReceiveProps({ match, }) {
    if (this.props.match.params.id !== match.params.id) {
      this.props.fetchTaskskListItem(match.params.id);
    }
  }

  render() {
    return (
      <section className="TasksListItem">
        <h3>Tasks Lists Item</h3>
        {
          this.props.tasks.length ?
            this.props.tasks.map(task => (<SingleTask key={task.id} {...task} />)) :
            <h4>Tasks List is empty</h4>
        }
      </section>
    );
  }
}

TasksListItem.propTypes = {
  match: object.isRequired,
  fetchTaskskListItem: func.isRequired,
  tasks: array.isRequired,
};

export default TasksListItem;
