import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import { func, bool } from 'prop-types';

const PrivateRoute = ({
  component: Component,
  isAuthorized,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: func.isRequired,
  isAuthorized: bool.isRequired,
};

export default PrivateRoute;
