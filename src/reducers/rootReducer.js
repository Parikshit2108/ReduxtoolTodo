import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import usersReducer from "./usersReducer";

let rootReducer = combineReducers({
  todo: todoReducer,
  users: usersReducer,
});

export default rootReducer;
