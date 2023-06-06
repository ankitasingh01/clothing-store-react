import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
// import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reduer";
import { loggerMiddleware } from "./middleware/logger";

const middleWares = [
  process.env.NODE_ENV === "development" && loggerMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  blackList: "user",
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composerEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composerEnhancers
);

export const persistor = persistStore(store);
