import React from "react";
// import LoginPage from "./views/loginPage";
// import RegisterPage from "./views/registerPage";
import { Route } from "react-router-dom";
import Admin from "./views/admin";

function App() {
  return (
    <div>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <Route path="/admin/dashboard" component={Admin}></Route> */}
      <Admin />
    </div>
  );
}

export default App;
