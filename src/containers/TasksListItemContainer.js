import { connect } from 'react-redux';
import TasksListItem from '../components/TasksListItem';
import {
  fetchTaskskListItem,
  updateTaskStatus,
  createTask
} from '../actions/tasksListItem';

const mapStateToProps = (state) => ({
  tasks: state.tasksListItem.list,
  loading: state.tasksListItem.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTaskskListItem: (listId) => dispatch(fetchTaskskListItem(listId)),
  updateTaskStatus: (data) => dispatch(updateTaskStatus(data)),
  createNewTask: (data) => dispatch(createTask(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksListItem);
