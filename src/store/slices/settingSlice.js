import { createSlice } from "@reduxjs/toolkit";

import setting from "../../../site.config";

const settingSlice = createSlice({
  name: "settings",
  initialState: setting,
  reducers: {
    setCurrentExchangeRateIndex: (state, action) => {
      console.log(action);
      state.currentExchangeRateIndex = action.payload;
    },
  },
});

export const { setCurrentExchangeRateIndex } = settingSlice.actions;
export default settingSlice.reducer;
