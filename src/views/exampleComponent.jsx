import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import exampleAction from "../actions/exampleAction";

// class ExampleComponent extends Component {
//   render() {
//     return <div />;
//   }
// }

const ExampleComponent = props => {
  return (
    <div>
      <h1>example component</h1>
      {console.log("props", props)}
    </div>
  );
};

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
