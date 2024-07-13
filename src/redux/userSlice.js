// slice - used to build state using redux toolkit
// 1. initial state
// 2. Reducers

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      const { payload } = action;
      state.isAuthenticated = payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// rename reducer as userReducer for code readibility
const { reducer: userReducer, actions } = userSlice;

export const { setIsAuthenticated, setUser } = actions;

export default userReducer;
