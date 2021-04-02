import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import { Preloader, PrivateRoute } from "./components";

import { useDispatch } from "react-redux";
import { login } from "./redux/actions/auth";

import "./App.css";

const LoginView = lazy(() => import("./pages/Login/LoginView"));
const TodoView = lazy(() => import("./pages/Todo/TodoVIew"));

function App() {
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
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route path="/login" component={LoginView} />
        <PrivateRoute path="/todo">
          <TodoView />
        </PrivateRoute>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
