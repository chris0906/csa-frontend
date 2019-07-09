import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import classNames from "classnames";
import Joi from "joi-browser";
import axios from "axios";

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

// core components active ? "input-group-focus" : ""
import bgImage from "../assets/img/bg16.jpg";

axios.interceptors.response.use(null, error => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    //unexpected error
    console.log("Logging the error", error);
    console.log("unexpected error occurred");
  }
  return Promise.reject(error);
});

const RenderInput = ({
  meta: { active, error, touched },
  input,
  type,
  label
}) => (
  <div>
    <InputGroup
      className={classNames(
        { "input-group-focus": active },
        { "has-success": !error }
      )}
    >
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

const schema = {
  firstName: Joi.string()
    .alphanum() //Requires the string value to only contain a-z, A-Z, and 0-9.
    .min(2)
    .max(30)
    .required()
    .label("First Name"),
  lastName: Joi.string()
    .min(2)
    .max(30)
    .required()
    .label("Last Name"),
  email: Joi.string()
    .email()
    .required()
    .label("Email"),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{6,30}$/)
    .required()
    .error(err => ({
      message:
        "Password must should contain a-z, A-Z, and 0-9, and at least 6 length"
    }))
    .label("Password"),
  confirmPassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .options({ language: { any: { allowOnly: "must match password" } } })
    .label("Password Confirmation")
};

const validate = values => {
  const errors = {};
  const { error } = Joi.validate(values, schema, { abortEarly: false });
  if (!error) return null;
  for (let item of error.details) errors[item.path[0]] = item.message;

  return errors;
};

const apiEndpoint =
  "https://cors-anywhere.herokuapp.com/http://connect-and-serve-dev.ap-south-1.elasticbeanstalk.com";

async function submit(values) {
  const postUserData = {
    first_name: values.firstName,
    last_name: values.lastName,
    email: values.email,
    password: values.password
  };
  try {
    const result = await axios.post(
      apiEndpoint + "/account/users/",
      postUserData
    );
    console.log(result);
  } catch (ex) {
    // ex.request //if submit to server succcessfuly request will be set, otherwise will be null
    // ex.response //if there is no response from server, response will be null

    //expected error
    if (ex.response && ex.response.status === 400) {
      console.log("this email has already been used");
    }
  }
}

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
                    <Col lg={5} md={8} xs={12}>
                      <Form onSubmit={this.props.handleSubmit(submit)}>
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
                              label="Password Confirmation"
                              name="confirmPassword"
                              component={RenderInput}
                            />
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
                          </CardBody>
                          <CardFooter className="text-center">
                            <Button
                              color="primary"
                              size="lg"
                              className="mb-3 btn-round"
                              type="submit"
                              disabled={this.props.submitting}
                            >
                              Register
                            </Button>
                          </CardFooter>
                        </Card>
                      </Form>
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
