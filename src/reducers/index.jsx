import { combineReducers } from "redux";

export default combineReducers({
  demo: (state = false, action) => !state,
});
