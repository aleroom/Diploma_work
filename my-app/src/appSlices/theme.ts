import { createSlice } from "@reduxjs/toolkit";
import {PostsState} from "./index";


//actionCreator = () => {type: "theme/swichTheme"}
// экшн криэйтер генерирует экшн тайп, который генерируется из названия(нэйма) и названия редьюсера и пэйлоад

// тайп генерируется из 


type TabsType ={
    all: string,
    myFavorites: string,
    popular: string
}

interface ThemeState<TabsType, PostsState> {
    tabs: TabsType,
    posts: PostsState[],
    theme: string
}

const initialState: ThemeState<TabsType, PostsState> = {
    tabs: { all: "All", myFavorites: "My Favorites", popular: "Popular" },
    posts: [],
    theme: 'light',
    
  };

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      switchTheme: (state) => {
        state.theme === 'light' ? state.theme = 'dark' : state.theme = 'light'
      }
    }
  });


  export const { switchTheme } = themeSlice.actions;

  export default themeSlice.reducer