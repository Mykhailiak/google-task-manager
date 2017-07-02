import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import { object } from 'prop-types';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        this.props.isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: object.isRequired,
};

export default PrivateRoute;
