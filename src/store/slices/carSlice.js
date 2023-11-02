import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      let newItem = action.payload;

      const alreadyExistingIndex = state.findIndex(
        (_item) => newItem.id === _item.id
      );

      if (alreadyExistingIndex !== -1) {
        ++state[alreadyExistingIndex].itemAmount;
      } else {
        newItem.itemAmount = 1;
        state.push(newItem);
      }
    },
    removeProductToCart: (state, action) => {
      state.filter((product) => product.itemId !== action.payload);
    },
  },
});

export const { addProductToCart, removeProductToCart } = counterSlice.actions;
export default counterSlice.reducer;
