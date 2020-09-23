import { combineReducers } from "redux";
import { habitReducer } from "./reducers/habitReducer";

export const rootReducer = combineReducers({
  habit: habitReducer,
});
