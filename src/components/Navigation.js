import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import './Navigation.css';

const Navigation = () => {
  return (
    <section className="Navigation">
      <h3 className="Navigation__logo">Google Tasks Manager</h3>
      <MuiThemeProvider>
        <div>
          <Divider />
          <List className="Navigation__list">
            <Link to="/about">
              <ListItem primaryText="About" leftIcon={<ContentInbox />} />
            </Link>
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
          </List>
          <Divider />
          <List className="Navigation__list">
            <ListItem primaryText="Logout" />
          </List>
        </div>
      </MuiThemeProvider>
    </section>
  );
};

export default Navigation;
