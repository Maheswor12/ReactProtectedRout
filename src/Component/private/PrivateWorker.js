import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateWorker = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("status") === "authorizedworker" ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateWorker;
