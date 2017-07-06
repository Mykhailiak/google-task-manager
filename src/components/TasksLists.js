import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import FolderIcon from 'material-ui/svg-icons/file/folder';
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
            <Link key={item.id} to={`/dashboard/lists/${item.id}`}>
              <ListItem
                leftIcon={<FolderIcon />}
                primaryText={item.title}
              />
            </Link>
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
