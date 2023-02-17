import { combineReducers, configureStore } from "@reduxjs/toolkit"; //стандартные функции, комбайн редьюсер - функция, которая помогает прокинуть все редьюсеры, склеить все редьюсеры в один рутРедьюсер(корневой редьюсер)

import postsSlice from "../appSlices/index.js";
import themeSlice from "../appSlices/theme.js";
import { userSlice } from "../appSlices/user.slice"




const rootReducer = combineReducers({
  postsReducer: postsSlice,
  userReducer: userSlice.reducer,
  themeReducer: themeSlice.reducer,
});

export const store = configureStore({
  reducer: { rootReducer },
});
