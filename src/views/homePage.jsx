import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <h1>HomePage</h1>
        <a className="btn btn-primary" href="/login">
          Head to Login Page
        </a>
        <a className="btn btn-primary" href="/register">
          Head to Register Page
        </a>
      </div>
    );
  }
}

export default HomePage;
