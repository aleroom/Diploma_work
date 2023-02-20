import { combineReducers, configureStore } from "@reduxjs/toolkit"; //стандартные функции, комбайн редьюсер - функция, которая помогает прокинуть все редьюсеры, склеить все редьюсеры в один рутРедьюсер(корневой редьюсер)

import postsSlice from "../appSlices";
import themeSlice from "../appSlices/";
import { userSlice } from "../appSlices/user.slice";




// @ts-ignore
const rootReducer = combineReducers({
  postsReducer: postsSlice,
  userReducer: userSlice.reducer,
  themeReducer: themeSlice,
});

export const store = configureStore({
  reducer: { rootReducer },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch