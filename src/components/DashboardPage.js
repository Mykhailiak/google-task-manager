import React, { Component } from 'react';
import Navigation from './Navigation';
import { func, array } from 'prop-types';
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
          <h3>Main</h3>
        </section>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  tasksLists: array.isRequired,
  fetchTasksLists: func.isRequired,
};

export default DashboardPage;
