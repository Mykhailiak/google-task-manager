import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { array, string } from 'prop-types';

const TasksLists = ({
  items,
  listClassName,
}) => {
  return (
    <MuiThemeProvider>
      <section className="TasksLists__container">
        <Subheader>Tasks Lists</Subheader>
        <List className={listClassName}>
          {items.map(item => (
            <ListItem key={item.id} primaryText={item.title} />
          ))}
        </List>
      </section>
    </MuiThemeProvider>
  );
};

TasksLists.propTypes = {
  items: array.isRequired,
  listClassName: string,
};

export default TasksLists;
