import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart/cartSlice"; // Import the cart slice
import authReducer from "../slices/auth/authSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Register cart slice
    auth: authReducer,
  },
});

export default store;
