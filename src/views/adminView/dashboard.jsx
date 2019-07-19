import React, { Component } from "react";
// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.jsx";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
