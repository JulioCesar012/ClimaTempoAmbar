import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
