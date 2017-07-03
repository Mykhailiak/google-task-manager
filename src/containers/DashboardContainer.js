import { connect } from 'react-redux';
import DashboardPage from '../components/DashboardPage';
import { fetchTasksLists } from '../actions/tasksLists';

const mapStateToProps = (state) => ({
  tasksLists: state.tasksLists.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasksLists: () => dispatch(fetchTasksLists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
