import React, { Component } from "react";
import LoginPage from "./views/loginPage";
import RegisterPage from "./views/registerPage";
import { Route, Redirect, Switch } from "react-router-dom";
import Admin from "./views/admin";
import HomePage from "./views/homePage";
import NotificationAlert from "react-notification-alert";

class App extends Component {
  notificationAlert = React.createRef();
  notify = (place, message, type) => {
    // tl - notification will be rendered in the top-left corner of the screen
    // tc - notification will be rendered in the top-center corner of the screen
    // tr - notification will be rendered in the top-right corner of the screen
    // bl - notification will be rendered in the bottom-left corner of the screen
    // bc - notification will be rendered in the bottom-center corner of the screen
    // br - notification will be rendered in the bottom-right corner of the screen
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
          <Route path="/admin" component={Admin} />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
