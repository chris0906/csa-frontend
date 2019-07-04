import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  //put your reducer here
  exampleReducer,
  form: formReducer
});

export default rootReducer;
