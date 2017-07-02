import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
  isAuthorized: state.session.isLoggedIn,
});

export default connect(
  mapStateToProps
)(App);
