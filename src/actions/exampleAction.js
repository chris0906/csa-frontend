import { FETCH_POSTS } from "./types";

const methodA = () => dispatch => {
  dispatch({
    type: FETCH_POSTS,
    payload: "your content"
  });
};

const methodB = parameter => dispatch => {
  dispatch({
    type: FETCH_POSTS,
    payload: "your content"
  });
};

export default { methodA, methodB };
