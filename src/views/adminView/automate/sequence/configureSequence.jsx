import React, { Component } from "react";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

import {
  Row,
  Col,
  Label,
  Input,
  Form,
  FormGroup,
  Card,
  CardBody
} from "reactstrap";

import typeformLogo from "assets/img/typeform-logo.png";

const selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "connect account", label: "Connect Account" }
];

const jsonText = {
  event_id: "LtWXD3crgy",
  event_type: "form_response",
  form_response: {
    form_id: "lT4Z3j",
    token: "a3a12ec67a1365927098a606107fac15",
    submitted_at: "2018-01-18T18:17:02Z",
    landed_at: "2018-01-18T18:07:02Z",
    calculated: {
      score: 9
    }
  }
};

class ConfigureSequence extends Component {
  state = {
    account: null
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Row>
          {/* first col */}
          <Col xs={12} md={6}>
            <Card style={{ borderRadius: 8 }}>
              {/* trigger event information*/}
              <CardBody>
                <Row>
                  <Col md={3}>
                    <img
                      src={typeformLogo}
                      style={{ height: 64, width: 64 }}
                      alt="typeform-logo"
                    />
                  </Col>
                  <Col>
                    <p>Typeform</p>
                    <p>Action:Form Complete</p>
                  </Col>
                </Row>
                <hr />
                {/* 1>:select account */}
                <Row>
                  <Col>
                    <label style={{ fontSize: 14, color: "black" }}>
                      Typeform Account:
                    </label>
                    <Select
                      className="react-select black"
                      classNamePrefix="react-select"
                      placeholder="Account"
                      name="account"
                      value={this.state.account}
                      options={selectOptions}
                      onChange={value => this.setState({ account: value })}
                    />
                  </Col>
                </Row>
                <hr />
                {/* 2>:select form type */}
                <Row>
                  <Col>
                    <label style={{ fontSize: 14, color: "black" }}>
                      Select Form:
                    </label>
                    <Select
                      className="react-select black"
                      classNamePrefix="react-select"
                      placeholder="Account"
                      name="account"
                      value={this.state.account}
                      options={selectOptions}
                      onChange={value => this.setState({ account: value })}
                    />
                  </Col>
                </Row>
                <hr />
                <Label className="text-body">
                  <span style={{ fontSize: 14 }}>Event Data:</span>
                </Label>
                <pre>{JSON.stringify(jsonText, null, 2)}</pre>
              </CardBody>
            </Card>
          </Col>
          {/* second col */}
          <Col xs={12} md={6}>
            <Card style={{ borderRadius: 8 }}>
              <CardBody>
                <Row>
                  <Col md={3}>
                    <i
                      style={{ fontSize: 64 }}
                      className={"now-ui-icons ui-1_email-85"}
                    />
                  </Col>
                  <Col>
                    <p>Transaction Email</p>
                    <p>Action:Send Email</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <label style={{ fontSize: 14, color: "black" }}>
                      Email Account:
                    </label>
                    <br />
                    <Select
                      className="react-select black"
                      classNamePrefix="react-select"
                      placeholder="Account"
                      name="account"
                      value={this.state.account}
                      options={selectOptions}
                      onChange={value => this.setState({ account: value })}
                    />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Label md={5} className="text-body">
                    <span style={{ fontSize: 14 }}>Email Options:</span>
                  </Label>
                </Row>
                <br />
                <Form>
                  <Row>
                    <Label md={3} className="text-body">
                      <span style={{ fontSize: 14 }}>To:</span>
                    </Label>
                    <Col md={9}>
                      <FormGroup className="">
                        <Input type="email" placeholder="To" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Label md={3} className="text-body">
                      <span style={{ fontSize: 14 }}>From:</span>
                    </Label>
                    <Col md={9}>
                      <FormGroup className="">
                        <Input type="email" placeholder="From" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Label md={3} className="text-body">
                      <span style={{ fontSize: 14 }}>Subject:</span>
                    </Label>
                    <Col md={9}>
                      <FormGroup className="">
                        <Input type="text" placeholder="Subject" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Label md={3} className="text-body">
                      <span style={{ fontSize: 14 }}>Content:</span>
                    </Label>
                    <Col md={9}>
                      <FormGroup className="">
                        <Input
                          style={{ height: 160, fontSize: 14 }}
                          placeholder="Here can be your description"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default ConfigureSequence;
