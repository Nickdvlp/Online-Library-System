import { createSlice } from "@reduxjs/toolkit";
import { MockData } from "../utils/MockData";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: MockData,
  },
  reducers: {
    addBook: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
});

export const { addBook } = cartSlice.actions;
export default cartSlice.reducer;
