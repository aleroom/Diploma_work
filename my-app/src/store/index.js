import { combineReducers, configureStore } from "@reduxjs/toolkit"; //стандартные функции, комбайн редьюсер - функция, которая помогает прокинуть все редьюсеры, склеить все редьюсеры в один рутРедьюсер(корневой редьюсер)

import postsSlice, { themeSlice, userSlice } from "../appSlices/index.js";



const rootReducer = combineReducers({
  postsReducer: postsSlice,
  userReducer: userSlice.reducer,
  themeReducer: themeSlice.reducer
});

export const store = configureStore({
  reducer: { rootReducer },
});
