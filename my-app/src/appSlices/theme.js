import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tabs: { all: "All", myFavorites: "My Favorites", popular: "Popular" },
    posts: [],
    theme: 'light',
    Favourite: [],
  };

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      swichTheme: (state) => {
        state.theme === 'light' ? state.theme = 'dark' : state.theme = 'light'
      }
    }
  });


  export const { swichTheme } = themeSlice.actions;

  export default themeSlice.reducer