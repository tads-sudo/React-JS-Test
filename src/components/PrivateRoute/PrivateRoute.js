import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

export const PrivateRoute = ({ children, ...props }) => {
  const state = useSelector((state) => state);
  return (
    <Route
      {...props}
      render={({ location }) =>
        state.data ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
