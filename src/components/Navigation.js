import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionHome from 'material-ui/svg-icons/action/home';
import Divider from 'material-ui/Divider';
import TasksLists from './TasksLists';
import { array, func } from 'prop-types';
import './Navigation.css';

const Navigation = ({
  tasksLists,
  createTaskList,
}) => {
  return (
    <section className="Navigation">
      <h3 className="Navigation__logo">Google Tasks Manager</h3>
      <MuiThemeProvider>
        <div>
          <Divider />
          <List className="Navigation__list">
            <Link to="/home">
              <ListItem primaryText="Home" leftIcon={<ActionHome />} />
            </Link>
            <Link to="/about">
              <ListItem primaryText="About" leftIcon={<ContentInbox />} />
            </Link>
          </List>
          <Divider />
          <TasksLists
            createTaskList={createTaskList}
            listClassName="Navigation__list"
            items={tasksLists}
          />
          <Divider />
          <List className="Navigation__list">
            <ListItem primaryText="Logout" />
          </List>
        </div>
      </MuiThemeProvider>
    </section>
  );
};

Navigation.propTypes = {
  tasksLists: array.isRequired,
  createTaskList: func.isRequired,
};

export default Navigation;
