import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import classNames from "classnames";
import { Link, Redirect } from "react-router-dom";
import auth from "../services/userAuthService";
import { SubmissionError, clearSubmitErrors } from "redux-form";
import { isVerifiedUser } from "../services/userAuthService";
import store from "../store";

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

const RenderInput = ({ input, meta: { active }, label, type }) => (
  <InputGroup
    className={
      "no-border form-control-lg " + (active ? "input-group-focus" : "")
    }
  >
    <InputGroupAddon addonType="prepend">
      <InputGroupText>
        <i
          className={
            "now-ui-icons " +
            classNames(
              { "users_circle-08": input.name === "firstName" },
              { "text_caps-small": input.name === "lastName" }
            )
          }
        />
      </InputGroupText>
    </InputGroupAddon>
    <Input type={type} placeholder={label} {...input} />
  </InputGroup>
);

class LoginPage extends Component {
  submit = async values => {
    try {
      store.dispatch(clearSubmitErrors("loginForm")); //clear error for each submit
      await auth.login(values.email, values.password);
      //if user authentication expires during operation then redirect to loginpage
      //and if login succeed, then redirect to where user wantted to go before
      const { state } = this.props.location;
      this.props.history.push(state ? state.from.pathname : "/admin/dashboard");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        throw new SubmissionError({
          _error: "Login failed:Email or Password is not correct"
        });
      }
    }
  };
  render() {
    if (isVerifiedUser()) return <Redirect to="/admin/dashboard" />;
    return (
      <>
        {/* for sidebar  */}
        <div className="wrapper wrapper-full-page" ref="fullPages">
          {/* for bg image and filter-color could be multiple different color */}
          <div className="full-page section-image" filter-color="yellow">
            <div className="content">
              <div className="login-page">
                <Container>
                  <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
                    <Form onSubmit={this.props.handleSubmit(this.submit)}>
                      <Card className="card-login card-plain">
                        <CardHeader>
                          <div className="logo-container">
                            <img src={nowLogo} alt="now-logo" />
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Field
                            name="email"
                            type="email"
                            label="Email"
                            component={RenderInput}
                          />
                          <Field
                            name="password"
                            type="password"
                            label="Password"
                            component={RenderInput}
                          />
                          {this.props.error && (
                            <span className="text-danger">
                              {this.props.error}
                            </span>
                          )}
                        </CardBody>
                        <CardFooter>
                          <Button
                            block
                            color="primary"
                            size="lg"
                            href=""
                            className="mb-3 btn-round"
                            type="submit"
                            disabled={this.props.submitting}
                          >
                            Login
                          </Button>
                          <div className="pull-left">
                            <h6>
                              <Link to="/register" className="link footer-link">
                                Create Account
                              </Link>
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

LoginPage = reduxForm({
  form: "loginForm"
})(LoginPage);

export default LoginPage;
