/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { Route} from "react-router-dom";




const ProtectedRoute = ({ component: Component, currentUser, ...rest  }) => {
    return (
      <Route
       
        render={props =>
          currentUser ? (
            <Component {...props} />
          ) : (
           <h2>loading</h2>
          )
        }
      />
    );
}
  
  export default ProtectedRoute;