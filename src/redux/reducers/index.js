import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export default combineReducers({
  contact: contactReducer, //this name show in redux state
});
