import { createSlice } from "@reduxjs/toolkit";

import setting from "../../../site.config";

const settingSlice = createSlice({
  name: "settings",
  initialState: { currentUser: null, ...setting },
  reducers: {
    setCurrentExchangeRateIndex: (state, action) => {
      state.currentExchangeRateIndex = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    deleteCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  setCurrentExchangeRateIndex,
  setCurrentUser,
  deleteCurrentUser,
} = settingSlice.actions;
export default settingSlice.reducer;
