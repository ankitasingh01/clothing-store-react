import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reduer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("action.type: ", action.type);
  console.log("action.payload: ", action.payload);
  console.log("prevState: ", store.getState());
  next(action);
  console.log("NextState", store.getState());
};

const middlewares = [loggerMiddleware];

const composerEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composerEnhancers);
