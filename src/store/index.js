import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";

import carReducer from "./slices/carSlice";
import whiteListReducer from "./slices/whiteListSlice";
import settingSlice from "./slices/settingSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    whiteList: whiteListReducer,
    settings: settingSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(loggerMiddleware),
});
