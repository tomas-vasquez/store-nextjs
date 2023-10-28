import { createStore, combineReducers, applyMiddleware } from "redux";
import carStore from "./car_store/reducer";
import productStore from "./products_store/reducer";
import logger from "redux-logger";

const store = configureStore(
  combineReducers({
    car: carStore,
    product: productStore,
  }),
  applyMiddleware(logger)
);

export default store;
