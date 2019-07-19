import React, { Component } from "react";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

import { Row, Col, Label, Form } from "reactstrap";

const selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" }
];

class SelectApps extends Component {
  state = {
    triggerApp: null,
    triggerEvent: null,
    actionApp: null,
    action: null
  };

  isValidated() {
    // const { triggerApp, triggerEvent, actionApp, action } = this.state;
    // if (!triggerApp || !triggerEvent || !actionApp || !action) return false;
    return true;
  }
  render() {
    return (
      <div>
        <br />
        <Form className="form-horizontal">
          <Row>
            <Label className="text-body" md={{ size: 3, offset: 1 }}>
              <span style={{ fontSize: 14 }}>Trigger App</span>
            </Label>
            <Col xs={12} md={6}>
              <Select
                className="react-select black"
                classNamePrefix="react-select"
                placeholder="Trigger App"
                name="triggerApp"
                value={this.state.triggerApp}
                options={selectOptions}
                onChange={value => this.setState({ triggerApp: value })}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Label className="text-body" md={{ size: 3, offset: 1 }}>
              <span style={{ fontSize: 14 }}>Trigger Event</span>
            </Label>
            <Col xs={12} md={6}>
              <Select
                className="react-select black"
                classNamePrefix="react-select"
                placeholder="Trigger Event"
                name="triggerEvent"
                value={this.state.triggerEvent}
                options={selectOptions}
                onChange={value => this.setState({ triggerEvent: value })}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Label className="text-body" md={{ size: 3, offset: 1 }}>
              <span style={{ fontSize: 14 }}>Action App</span>
            </Label>
            <Col xs={12} md={6}>
              <Select
                className="react-select black"
                classNamePrefix="react-select"
                placeholder="Action App"
                name="actionApp"
                value={this.state.actionApp}
                options={selectOptions}
                onChange={value => this.setState({ actionApp: value })}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Label className="text-body" md={{ size: 3, offset: 1 }}>
              <span style={{ fontSize: 14 }}>Action</span>
            </Label>
            <Col xs={12} md={6}>
              <Select
                className="react-select black"
                classNamePrefix="react-select"
                placeholder="Action"
                name="action"
                value={this.state.action}
                options={selectOptions}
                onChange={value => this.setState({ action: value })}
              />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default SelectApps;
