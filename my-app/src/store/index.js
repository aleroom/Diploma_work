import { combineReducers, configureStore } from "@reduxjs/toolkit";

import postsSlice, { userSlice } from "../appSlices/index.js";

const rootReducer = combineReducers({
  postsReducer: postsSlice,
  userReducer: userSlice.reducer,
});

export const store = configureStore({
  reducer: { rootReducer },
});
