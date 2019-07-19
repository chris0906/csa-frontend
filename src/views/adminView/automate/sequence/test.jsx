import React, { Component } from "react";

import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

class Test extends Component {
  render() {
    return (
      <div>
        <h3>Mock Event Data</h3>
        <Form>
          <Row>
            <Label md={3} className="text-body">
              <span style={{ fontSize: 14 }}>Form Name:</span>
            </Label>
            <Col md={9}>
              <FormGroup className="">
                <Input type="text" placeholder="Form Name" />
              </FormGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Label md={3} className="text-body">
              <span style={{ fontSize: 14 }}>Question1:</span>
            </Label>
            <Col md={9}>
              <FormGroup className="">
                <Input type="text" placeholder="Question1" />
              </FormGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Label md={3} className="text-body">
              <span style={{ fontSize: 14 }}>Question2:</span>
            </Label>
            <Col md={9}>
              <FormGroup className="">
                <Input type="text" placeholder="Question2" />
              </FormGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Label md={3} className="text-body">
              <span style={{ fontSize: 14 }}>Question3:</span>
            </Label>
            <Col md={9}>
              <FormGroup className="">
                <Input type="text" placeholder="Question3" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 3, offset: 9 }}>
              <Button type="submit" color="info">
                Test
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Test;
