import React, { Component } from 'react';
import Navigation from './Navigation';
import './DashboardPage.css';

class DashboardPage extends Component {
  render() {
    return (
      <div className="DashboardPage">
        <aside className="DashboardPage__sidebar">
          <Navigation />
        </aside>
        <section className="DashboardPage__main">
          <h3>Main</h3>
        </section>
      </div>
    );
  }
}

export default DashboardPage;
