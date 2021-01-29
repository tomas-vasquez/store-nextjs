import { createStore, combineReducers, applyMiddleware } from "redux";
import carStore from "./car_store/reducer";
import logger from "redux-logger";

const store = createStore(
  combineReducers({
    car: carStore,
  }),
  applyMiddleware(logger)
);

export default store;
