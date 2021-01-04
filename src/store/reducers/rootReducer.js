import { combineReducers } from "redux";
import previsaoReducer from "./previsaoReducer";

const rootReducer = combineReducers({
  previsao: previsaoReducer,
});

export default rootReducer;
