import React from 'react';
import { Route } from 'react-router-dom';
import fakeAuth from './auth';
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (fakeAuth === true ? <Component {...props} /> : <Redirect to="/login" />)} />
);

export default PrivateRoute;
