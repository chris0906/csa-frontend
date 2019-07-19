import React, { Component } from "react";
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import Step1 from "./selectApps.jsx";
import Step2 from "./configureSequence.jsx";
import Step3 from "./test.jsx";

var steps = [
  {
    stepName: "SELECT APPS",
    stepIcon: "now-ui-icons users_circle-08",
    component: Step1
  },
  {
    stepName: "CONFIGURE SEQUENCE",
    stepIcon: "now-ui-icons ui-1_settings-gear-63",
    component: Step2
  },
  {
    stepName: "TEST",
    stepIcon: "now-ui-icons ui-1_email-85",
    component: Step3
  }
];

class Wizard extends Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Col xs={12} md={10} className="mr-auto ml-auto">
            <ReactWizard
              steps={steps}
              navSteps
              validate
              title="Setup an automation sequence"
              description=""
              headerTextCenter
              color="blue"
              finishButtonClasses="btn btn-info"
              nextButtonClasses="btn btn-info"
              previousButtonClasses="btn btn-info"
            />
          </Col>
        </div>
      </>
    );
  }
}

export default Wizard;
