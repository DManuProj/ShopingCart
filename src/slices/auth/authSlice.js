import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")),
  isAuthenticated: localStorage.getItem("currentUser") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to register a new user
    registerUser: (state, action) => {
      const { name, email, password } = action.payload;

      // Check the email
      const existingUser = state.users.find((user) => user.email === email);
      if (existingUser) {
        state.error = "Email is already registered.";

        return;
      }
      const newUser = {
        id: uuidv4(),
        name,
        email,
        password,
      };
      state.users.push(newUser);

      state.error = null;
      state.currentUser = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      };
      state.isAuthenticated = true;

      // Save users to LocalStorage
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },

    // Action to log in an existing user
    loginUser: (state, action) => {
      const { email, password } = action.payload;

      // Find the user
      const existingUser = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (!existingUser) return;

      state.currentUser = {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      };
      state.isAuthenticated = true;

      // Set the logged-in user ID in LocalStorage
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },

    // Action to log out the current user
    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("currentUser");
    },

    // Action to clear any existing error messages
  },
});

export const { registerUser, loginUser, logoutUser, clearError } =
  authSlice.actions;

export default authSlice.reducer;
