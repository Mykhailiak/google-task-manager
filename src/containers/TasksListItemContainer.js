import { connect } from 'react-redux';
import TasksListItem from '../components/TasksListItem';
import { fetchTaskskListItem } from '../actions/tasksListItem';

const mapStateToProps = (state) => ({
  tasks: state.tasksListItem.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTaskskListItem: (listId) => dispatch(fetchTaskskListItem(listId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksListItem);
