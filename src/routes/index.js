import React, { lazy, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../redux/actionCreators";

import { PrivateRoute } from "../components";

const LoginView = lazy(() => import("../pages/Login/LoginView"));
const TodoView = lazy(() => import("../pages/Todo/TodoVIew"));

export const Routes = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(login(JSON.parse(user)));

      history.push("/todo");
    }
  }, []);

  return (
    <Switch>
      <Route path="/login" component={LoginView} />
      <PrivateRoute path="/todo">
        <TodoView />
      </PrivateRoute>
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};
