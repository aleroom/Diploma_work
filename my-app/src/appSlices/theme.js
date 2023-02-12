import { createSlice } from "@reduxjs/toolkit";


//actionCreator = () => {type: "theme/swichTheme"}
// экшн криэйтер генерирует экшн тайп, который генерируется из названия(нэйма) и названия редьюсера и пэйлоад

// тайп генерируется из 


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