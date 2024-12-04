import { createSlice, current } from "@reduxjs/toolkit";

//get the current user
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const initialState = {
  items:
    (currentUser &&
      JSON.parse(localStorage.getItem(`cart_${currentUser.id}`))) ||
    [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (!existingItem) {
        state.items.unshift(item);
      }

      // Save cart to LocalStorage
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        localStorage.setItem(
          `cart_${currentUser.id}`,
          JSON.stringify([...state.items])
        );
      }
    },

    // // Action to update item quantity
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count += 1;
      }

      if (currentUser) {
        localStorage.setItem(
          `cart_${currentUser.id}`,
          JSON.stringify(state.items)
        );
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.count > 1) {
        existingItem.count -= 1;
      }

      if (currentUser) {
        localStorage.setItem(
          `cart_${currentUser.id}`,
          JSON.stringify(state.items)
        );
      }
    },

    // Action to remove an item from the cart
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

      if (currentUser) {
        localStorage.setItem(
          `cart_${currentUser.id}`,
          JSON.stringify(state.items)
        );
      }
    },

    clearCartOnLogout: (state) => {
      state.items = [];
    },

    // Action to clear the entire cart
    clearCart: (state) => {
      state.items = [];
      if (currentUser) {
        localStorage.removeItem(`cart_${currentUser.id}`);
      }
    },
  },
});

export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
  clearCartOnLogout,
} = cartSlice.actions;

export default cartSlice.reducer;
