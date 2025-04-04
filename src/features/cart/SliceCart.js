/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

// Initialize count from localStorage or default to 0
const initialState = {
  value: JSON.parse(localStorage.getItem("data")) || [], // Retrieve cart items from localStorage
  count: JSON.parse(localStorage.getItem("count")) || 0, // Retrieve count from localStorage
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcart: (state, action) => {
      state.value.push(action.payload); // Add item to the cart
      localStorage.setItem("data", JSON.stringify(state.value)); // Save cart items to localStorage

      state.count += 1; // Increment count
      localStorage.setItem("count", JSON.stringify(state.count)); // Save count to localStorage
    },

    removeCart: (state, action) => {
      // Find the index of the item to be removed
      const index = state.value.findIndex((item) => item.id === action.payload.id);
    
      if (index !== -1) {
        // Remove the item from the cart
        state.value.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(state.value)); // Update localStorage
    
        // Decrement the count
        state.count -= 1;
        localStorage.setItem("count", JSON.stringify(state.count)); // Update localStorage
      }
    },
 
  },
});

// Action creators are generated for each case reducer function
export const { addcart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;