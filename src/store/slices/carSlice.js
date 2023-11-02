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
      let item = action.payload;

      const alreadyExistingIndex = state.findIndex(
        (_item) => item.id === _item.id
      );
      state.splice(alreadyExistingIndex, 1);
    },

    increaseProductCuantity: (state, action) => {
      let item = action.payload;

      const alreadyExistingIndex = state.findIndex(
        (_item) => item.id === _item.id
      );

      ++state[alreadyExistingIndex].itemAmount;
    },

    reduceProductCuantity: (state, action) => {
      let item = action.payload;

      const alreadyExistingIndex = state.findIndex(
        (_item) => item.id === _item.id
      );

      --state[alreadyExistingIndex].itemAmount;
    },
  },
});

export const {
  addProductToCart,
  removeProductToCart,
  increaseProductCuantity,
  reduceProductCuantity,
} = counterSlice.actions;
export default counterSlice.reducer;
