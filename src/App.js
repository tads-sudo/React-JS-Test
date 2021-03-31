import React, { lazy, Suspense } from "react";
import "./App.css";

const LoginView = lazy(() => import("./pages/Login/LoginView"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginView />
    </Suspense>
  );
}

export default App;
