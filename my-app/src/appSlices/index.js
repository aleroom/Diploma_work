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
  Favourite: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
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
      console.log(action.payload);
      state.posts = action.payload;
    });
    builder.addCase(fetchPostById.pending, (state, action) => {
      console.log("PENDING");
      state.posts = [];
    });
    builder.addCase(fetchPostById.rejected, (state, action) => {
      console.log("ERROR 11");
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
      // console.log(action.payload);
      state.user = action.payload;
    });
    builder.addCase(login.pending, (state, action) => {
      // console.log("PENDING");
      state.user = "Loading...";
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("ERROR 11");
      state.user = "Error";
    });
  },
});

export const { setPosts, addFavourite, delitemarksFavourite } =
  postsSlice.actions;

export default postsSlice.reducer;

// export const { reducer } = userSlice;
