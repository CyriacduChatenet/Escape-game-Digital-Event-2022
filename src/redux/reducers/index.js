import { combineReducers } from "redux";
import userReducer from "./userReducer"
import missionsReducer from "./missionsReducer"
import ecologieReducer from "./ecologieReducer";

export default combineReducers({
    userReducer,
    missionsReducer,
    ecologieReducer
})