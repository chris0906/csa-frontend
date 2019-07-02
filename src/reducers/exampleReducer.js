import { FETCH_POSTS } from "../actions/types";

const initialState = {
  //your state format, it can be any formate, here is a object
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        //set your state
      };
    default:
      return state;
  }
}
