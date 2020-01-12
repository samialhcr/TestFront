import { combineReducers } from "redux";
import compteReducer from "./compteReducer";
import errorReducer from "./erreurReducer";
export default combineReducers({
  compte: compteReducer,
  errors: errorReducer
});
