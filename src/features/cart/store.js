import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../cart/SliceCart' // Adjust the path as needed

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})