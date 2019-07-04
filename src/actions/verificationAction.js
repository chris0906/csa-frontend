import { SubmissionError } from "redux-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const submit = values => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (
      !["liqy0906@gmail.com", "paul", "george", "ringo"].includes(values.email)
    ) {
      throw new SubmissionError({
        email: "User does not exist",
        _error: "Login failed!"
      });
    } else if (values.password !== "redux-form") {
      throw new SubmissionError({
        password: "Wrong password",
        _error: "Login failed!"
      });
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }
  });
};

const someRequest = info => dispatch => {
  //send API request to server
};

export const verificationAction = { someRequest };
