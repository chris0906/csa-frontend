import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import exampleAction from "../actions/exampleAction";

class ExampleComponent extends Component {
  render() {
    return <div />;
  }
}

ExampleComponent.propTypes = {};

const mapStateToProps = state => {
  return {
    exampleVariable: state.exampleReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    methodA: () => dispatch(exampleAction.methodA),
    methodB: parameter => dispatch(exampleAction.methodB(parameter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);
