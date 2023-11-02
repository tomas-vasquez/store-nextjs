import { createSlice } from "@reduxjs/toolkit";

const whiteListSlice = createSlice({
  name: "whiteList",
  initialState: [],
  reducers: {
    addProductToWhiteList: (state, action) => {
      state.push(action.payload);
    },
    removeProductToWhiteLis: (state, action) => {
      state.filter((product) => product.itemId !== action.payload);
    },
  },
});

export const { addProductToWhiteList, removeProductToWhiteList } =
  whiteListSlice.actions;
export default whiteListSlice.reducer;
