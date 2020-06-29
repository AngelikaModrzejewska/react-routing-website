import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = false;

const UserPage = () => {
  return (
    <Route
      render={() =>
        permission ? (
          <h3
            style={{
              marginTop: 20,
            }}
          >
            Welcome to your personal service!
          </h3>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default UserPage;
