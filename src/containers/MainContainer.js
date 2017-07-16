import { connect } from 'react-redux';
import App from '../components/App';
import { logInUserPrecenceOfTokens } from '../actions/session';

const mapStateToProps = (state) => ({
  isAuthorized: state.session.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logInUserPrecenceOfTokens: () => dispatch(logInUserPrecenceOfTokens()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
