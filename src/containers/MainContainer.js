import { connect } from 'react-redux';
import App from '../components/App';

import { loginUser } from '../actions/session';


const mapStateToProps = (state) => ({
  isAuthorized: state.session.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(loginUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
