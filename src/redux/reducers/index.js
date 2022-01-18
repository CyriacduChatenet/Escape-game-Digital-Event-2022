import { combineReducers } from "redux";
import userReducer from "./userReducer"
import missionsReducer from "./missionsReducer"

export default combineReducers({
    userReducer,
    missionsReducer
})