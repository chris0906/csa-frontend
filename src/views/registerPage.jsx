import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import isValidEmail from "sane-email-validation";
import classNames from "classnames";

// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  Button,
  Alert
} from "reactstrap";

// core components
import bgImage from "../assets/img/bg16.jpg";

const RenderInput = ({
  meta: { active, error, touched },
  input,
  type,
  label
}) => (
  <div>
    <InputGroup className={active ? "input-group-focus" : ""}>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i
            className={
              "now-ui-icons " +
              classNames(
                { "users_circle-08": input.name === "firstName" },
                { "text_caps-small": input.name === "lastName" },
                { "ui-1_email-85": input.name === "email" },
                { "objects_key-25": input.name === "password" },
                { "objects_key-25": input.name === "confirmPassword" }
              )
            }
          />
        </InputGroupText>
      </InputGroupAddon>
      <Input type={type} placeholder={label} {...input} />
    </InputGroup>
    {error && touched && (
      <div>
        <Alert color="warning">
          <span>
            <b> Error - </b> {error}
          </span>
        </Alert>
      </div>
    )}
  </div>
);

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Invalid Email";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  }
  return errors;
};

class RegisterPage extends Component {
  render() {
    return (
      <>
        {/* for sidebar  */}
        <div className="wrapper wrapper-full-page" ref="fullPages">
          {/* for bg image and filter-color could be multiple different color */}
          <div className="full-page section-image" filter-color="yellow">
            <div className="content">
              <div className="register-page">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={5} md={8} xs={12}>
                      <div className="info-area info-horizontal mt-5">
                        <div className="icon icon-primary">
                          <i className="now-ui-icons media-2_sound-wave" />
                        </div>
                        <div className="description">
                          <h5 className="info-title">Marketing</h5>
                          <p className="description">
                            We've created the marketing campaign of the website.
                            It was a very interesting collaboration.
                          </p>
                        </div>
                      </div>
                      <div className="info-area info-horizontal">
                        <div className="icon icon-primary">
                          <i className="now-ui-icons media-1_button-pause" />
                        </div>
                        <div className="description">
                          <h5 className="info-title">
                            Fully Coded in React 16
                          </h5>
                          <p className="description">
                            We've developed the website with React 16, HTML5 and
                            CSS3. The client has access to the code using
                            GitHub.
                          </p>
                        </div>
                      </div>
                      <div className="info-area info-horizontal">
                        <div className="icon icon-info">
                          <i className="now-ui-icons users_single-02" />
                        </div>
                        <div className="description">
                          <h5 className="info-title">Built Audience</h5>
                          <p className="description">
                            There is also a Fully Customizable CMS Admin
                            Dashboard for this product.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} md={8} xs={12}>
                      <Card className="card-signup">
                        <CardHeader className="text-center">
                          <CardTitle tag="h4">Register</CardTitle>
                          <div className="social btns-mr-5">
                            <Button
                              className="btn-icon btn-round"
                              color="twitter"
                            >
                              <i className="fab fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon btn-round"
                              color="dribbble"
                            >
                              <i className="fab fa-dribbble" />
                            </Button>
                            <Button
                              className="btn-icon btn-round"
                              color="facebook"
                            >
                              <i className="fab fa-facebook-f" />
                            </Button>
                            <h5 className="card-description">
                              or be classical
                            </h5>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Form>
                            <Field
                              type="text"
                              label="First Name"
                              name="firstName"
                              component={RenderInput}
                            />
                            <Field
                              type="text"
                              label="Last Name"
                              name="lastName"
                              component={RenderInput}
                            />
                            <Field
                              type="email"
                              label="Email"
                              name="email"
                              component={RenderInput}
                            />
                            <Field
                              type="password"
                              label="Password"
                              name="password"
                              component={RenderInput}
                            />
                            <Field
                              type="password"
                              label="Confirm Password"
                              name="confirmPassword"
                              component={RenderInput}
                            />
                            {/* <InputGroup
                          className={
                            this.state.firstnameFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="First Name..."
                            onFocus={e =>
                              this.setState({ firstnameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ firstnameFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={
                            this.state.lastnameFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons text_caps-small" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="Last Name..."
                            onFocus={e =>
                              this.setState({ lastnameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ lastnameFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={
                            this.state.emailFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="email"
                            placeholder="Email..."
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                          />
                        </InputGroup> */}
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                                <div>
                                  I agree to the{" "}
                                  <a href="#something">terms and conditions</a>.
                                </div>
                              </Label>
                            </FormGroup>
                          </Form>
                        </CardBody>
                        <CardFooter className="text-center">
                          <Button
                            color="primary"
                            size="lg"
                            className="btn-round"
                            href="#pablo"
                          >
                            Register
                          </Button>
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div
              className="full-page-background"
              style={{ backgroundImage: "url(" + bgImage + ")" }}
            />
          </div>
        </div>
      </>
    );
  }
}

RegisterPage = reduxForm({
  form: "registerForm",
  validate
})(RegisterPage);

export default RegisterPage;
