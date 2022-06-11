import { combineReducers } from "redux";
import userLoggedReducer from ".";

const rootReducer = combineReducers({ userLoggedReducer });

export default rootReducer;