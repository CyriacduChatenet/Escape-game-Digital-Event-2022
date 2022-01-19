import { combineReducers } from "redux";
import userReducer from "./userReducer"
import missionsReducer from "./missionsReducer"
import ecologieReducer from "./ecologieReducer";
import climatReducer from "./climatReducer";

export default combineReducers({
  userReducer,
  missionsReducer,
  ecologieReducer,
  climatReducer
})