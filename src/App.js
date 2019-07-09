import React from "react";
import LoginPage from "./views/loginPage";
import RegisterPage from "./views/registerPage";
import { Route, Redirect, Switch } from "react-router-dom";
import Admin from "./views/admin";
import HomePage from "./views/homePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
