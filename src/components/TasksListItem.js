import React, { Component } from 'react';
import { object, func } from 'prop-types';
import './TasksListItem';


class TasksListItem extends Component {
  componentWillMount() {
    this.props.fetchTaskskListItem(this.props.match.params.id);
  }

  render() {
    return (
      <section className="TasksListItem">
        <h3>Tasks Lists Item</h3>
      </section>
    );
  }
}

TasksListItem.propTypes = {
  match: object.isRequired,
  fetchTaskskListItem: func.isRequired,
};

export default TasksListItem;
