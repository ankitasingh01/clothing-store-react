import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reduer";

const middlewares = [logger];

const composerEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composerEnhancers);