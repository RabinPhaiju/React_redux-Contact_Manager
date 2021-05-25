import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  contact: contactReducer, //this name show in redux state
  alert: alertReducer,
});
