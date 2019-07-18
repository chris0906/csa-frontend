import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NotificationAlert from "react-notification-alert";
import LoginPage from "./views/loginPage";
import RegisterPage from "./views/registerPage";
import Admin from "./views/admin";
import HomePage from "./views/homePage";
import ProtectedRoute from "./views/viewsComponents/protectedRoute";

class App extends Component {
  notificationAlert = React.createRef();
  notify = (place, message, type) => {
    const options = {
      place: place,
      message: (
        <div>
          <div>{message}</div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.notificationAlert.current.notificationAlert(options);
  };
  render() {
    return (
      <div>
        <NotificationAlert ref={this.notificationAlert} />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <ProtectedRoute path="/admin" component={Admin} />
          <Route path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
