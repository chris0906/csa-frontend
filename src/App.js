import React from "react";
// import LoginPage from "./views/loginPage";
import RegisterPage from "./views/registerPage";
import { Route, Redirect, Switch } from "react-router-dom";
import Admin from "./views/admin";

function App() {
  return (
    <div>
      {/* <LoginPage /> */}
      <RegisterPage />
      {/* <Switch>
        <Route path="/admin/" component={Admin} />
        <Redirect to="/admin" />
      </Switch> */}
    </div>
  );
}

export default App;
