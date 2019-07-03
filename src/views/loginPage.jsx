import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Form,
  Container,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button
} from "reactstrap";

// core components
import nowLogo from "../assets/img/now-logo.png";
import bgImage from "../assets/img/bg14.jpg";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "required";
  }
  if (!values.password) {
    errors.password = "required";
  }
  return errors;
};

//has-success or has-danger
const RenderInput = ({ input, meta, label, ...rest }) => (
  <InputGroup
    className={
      "no-border form-control-lg " + (meta.active ? "input-group-focus" : "")
    }
  >
    <InputGroupAddon addonType="prepend">
      <InputGroupText>
        <i className="now-ui-icons users_circle-08" />
      </InputGroupText>
    </InputGroupAddon>
    <Input type="text" placeholder={label} {...input} />
  </InputGroup>
);

class LoginPage extends Component {
  render() {
    return (
      <>
        <div className="wrapper wrapper-full-page" ref="fullPages">
          {/* filter-color could be multiple different color */}
          <div className="full-page section-image" filter-color="yellow">
            <div className="content">
              <div className="login-page">
                <Container>
                  <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
                    <Form>
                      <Card className="card-login card-plain">
                        <CardHeader>
                          <div className="logo-container">
                            <img src={nowLogo} alt="now-logo" />
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Field
                            name="email"
                            label="Email"
                            component={RenderInput}
                          />
                          <Field
                            name="password"
                            label="Password"
                            component={RenderInput}
                          />
                        </CardBody>
                        <CardFooter>
                          <Button
                            block
                            color="primary"
                            size="lg"
                            href="#pablo"
                            className="mb-3 btn-round"
                          >
                            Get Started
                          </Button>
                          <div className="pull-left">
                            <h6>
                              <a href="#pablo" className="link footer-link">
                                Create Account
                              </a>
                            </h6>
                          </div>
                          <div className="pull-right">
                            <h6>
                              <a href="#pablo" className="link footer-link">
                                Need Help?
                              </a>
                            </h6>
                          </div>
                        </CardFooter>
                      </Card>
                    </Form>
                  </Col>
                </Container>
              </div>
            </div>
            <div
              className="full-page-background"
              style={{
                backgroundImage: "url(" + bgImage + ")",
                backgroundColor: "red"
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

LoginPage.propTypes = {};

LoginPage = reduxForm({
  form: "loginPage",
  validate
})(LoginPage);

export default LoginPage;
