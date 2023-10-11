import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ element, authenticated }) => {

  if (authenticated) {
    return element;
  } else {

    return <Navigate to="/" />;

  }
};

export default PrivateRoute;
