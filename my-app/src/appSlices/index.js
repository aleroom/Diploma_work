import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//NTcxNA - uid
//bhke4k-90be0d5193a11e32138da77f3185ab9b - token
// export const fetchPostById = createAsyncThunk("theme/PostById", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1") // как второй then раскрыли промис, при первом раскрытии мы получакм еще один промис, await аналогичен первому then,вместо 2 then можно 2 await это аналогично
//     //const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     //const json = await response.json()
//     .then((response) => response.json());
//   return response;
// });

export const fetchPostById = createAsyncThunk(
  "posts/PostId", // имя
  async (postId, thunkAPI) => {
    //функция котрая делает запрос
    try {
      const response = await fetch(
        `https://63a9cc18594f75dc1dc0ae77.mockapi.io/api/b1/posts`
      );

      if (!response.ok) {
        throw new Error("Server Error 1");
      }

      const json = await response.json();
      // json.map(item => {
      //   item.dislikes = 0
      // })
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "user/login", // имя
  async (user, thunkAPI) => {
    //функция котрая делает запрос
    try {
      const response = await fetch(
        `https://studapi.teachmeskills.by/auth/jwt/create/`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        throw new Error("Server Error 1");
      }

      const json = await response.json();
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.posts.map (item => {
        return ({...item, dislikes: 0})
      })
    },
    setLikes:(state, action) => {
      state.posts.map(item => {
        if(item.id == action.payload) {
          return ({...item, likes: item.likes++})
        }else{
          return({...item})
        }
      }
      )
    },
    setDislikes: (state, action) => {
      state.posts.map(item => {
        if(item.id == action.payload) {
          return ({...item, likes: item.dislikes++})
        }else{
          return({...item})
        }
      }
      )
    },

    addFavourite: (state, action) => {
      const post = action.payload;
      state.Favourite = [...state.Favourite, post];
    },
    delitemarksFavourite: (state, action) => {
      state.Favourite = state.Favourite.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchPostById.pending, (state, action) => {
      state.posts = [];
    });
    builder.addCase(fetchPostById.rejected, (state, action) => {
      state.posts = "Error";
    });
  },
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "User is not logged in",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(login.pending, (state, action) => {
      state.user = "Loading...";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.user = "Error";
    });
  },
});

export const { setPosts, addFavourite, delitemarksFavourite, setLikes, setDislikes } =
  postsSlice.actions;

export const { swichTheme } = themeSlice.actions;


export default postsSlice.reducer;

// export const { reducer } = userSlice;
