import { connect } from 'react-redux';
import DashboardPage from '../components/DashboardPage';
import { fetchTasksLists } from '../actions/tasksLists';
import { createTaskList } from '../actions/tasksLists';

const mapStateToProps = (state) => ({
  tasksLists: state.tasksLists.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasksLists: () => dispatch(fetchTasksLists()),
  createTaskList: (title) => dispatch(createTaskList(title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
