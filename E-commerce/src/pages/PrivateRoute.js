import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// sends user to home if they arent signed in
const PrivateRoute = ({children, ...rest}) => {

  const {user} = useAuth0()

  return <Route {...rest} render={() => {
    return user ? children : <Redirect to='/'></Redirect>
  }}>

  </Route>;
};
export default PrivateRoute;
