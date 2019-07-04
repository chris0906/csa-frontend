import { actionTypes } from "./types";

const methodA = () => dispatch => {
  dispatch({
    type: actionTypes.FETCH_POSTS,
    payload: "your content"
  });
};

const methodB = parameter => dispatch => {
  dispatch({
    type: actionTypes.FETCH_POSTS,
    payload: "your content"
  });
};

export const exampleAction = { methodA, methodB };
