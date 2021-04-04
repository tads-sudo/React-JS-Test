import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Preloader } from "./components";
import store from "./redux/store";
import { Routes } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Preloader />}>
          <Routes />
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
