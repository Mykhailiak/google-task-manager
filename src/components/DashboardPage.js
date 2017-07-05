import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import TasksListsItemContainer from '../containers/TasksListItemContainer';
import { func, array, object } from 'prop-types';
import './DashboardPage.css';

class DashboardPage extends Component {
  componentDidMount() {
    this.props.fetchTasksLists();
  }

  render() {
    return (
      <div className="DashboardPage">
        <aside className="DashboardPage__sidebar">
          <Navigation tasksLists={this.props.tasksLists} />
        </aside>
        <section className="DashboardPage__main">
          <Route
            component={TasksListsItemContainer}
            path={`${this.props.match.url}/lists/:id`}
            exact
          />
        </section>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  tasksLists: array.isRequired,
  fetchTasksLists: func.isRequired,
  match: object.isRequired,
};

export default DashboardPage;
