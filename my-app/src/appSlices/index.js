import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPostById = createAsyncThunk( //грубо говоря функция асинхронные функции обрабатывает
  "posts/PostId", // имя
  async (postId, thunkAPI) => {//функция котрая делает запрос к API, она всегда asinc
    try {
      const response = await fetch( //fetch это промис который мы раскрывам then-ом, а мы раскрываем await-ом
        `https://63e68a0483c0e85a8695e64d.mockapi.io/name`
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
  menu: { allPosts: "AllPosts",  favorites: "Favorites" },
  posts: [],
  theme: 'light',
  favorite: [],
  value: 0,
  user: "",
  searchedPosts: [],
  pagination: [],
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
          state.posts.map(item => {
              return ({...item, dislikes: 0})
          })
      },
      setLikes: (state, action) => {
        let postLikeCount = 0;

        state.posts.map(item => {
            if (item.id == action.payload) {
                postLikeCount = item.likeCount;
                postLikeCount++;
            }
        }
    )
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ likeCount: postLikeCount})
        };

        fetch('https://63e68a0483c0e85a8695e64d.mockapi.io/name/' + action.payload, requestOptions)
        .then(response => response.json());

          state.posts.map(item => {
                  if (item.id == action.payload) {
                      return ({...item, liked: item.likeCount++})
                  } else {
                      return ({...item})
                  }
              }
          )
      },
      filterBySearch: (state, action) => {
          state.searchedPosts = []
          state.posts.map(item => {
              if (item.title.toLowerCase().includes(action.payload)) {
                  state.searchedPosts.push(item)
              }
          })
      },
      setDislikes: (state, action) => {
            let postDisLikeCount = 0;
    
            state.posts.map(item => {
                if (item.id == action.payload) {
                    postDisLikeCount = item.disLikeCount;
                    postDisLikeCount++;
                }
            }
        )
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ disLikeCount: postDisLikeCount})
            };
    
            fetch('https://63e68a0483c0e85a8695e64d.mockapi.io/name/' + action.payload, requestOptions);
            // .then(response => response.json());

          state.posts.map(item => {
              if (item.id == action.payload) {
                  return ({...item, likeCount: item.disLikeCount++})
              } else {
                  return ({...item})
              }
          })
        //   localStorage.setItem('posts', JSON.stringify(state.posts))
      },
      addFavorite: (state, action) => {
          state.favorite.push(action.payload)
      },

      deliteFavorite: (state, action) => {
          state.favorite = state.favorite.filter(
              (item) => item.id !== action.payload
          );
      },
      clickNextPost: (state, action) => {
          state.posts.map(item => {
              if (item.id == action.payload) {
                  return ({item,})
              }
          })
      },
      renderPages: (state) => {
          state.posts.splice(0, 6)
      },
      setPagination: (state) => {
          state.pagination = []
          if (state.searchedPosts.length) {
              for (let i = 1; i <= state.searchedPosts.length; i += 6) {
                  state.pagination.push(i)
              }
          } else {
              for (let i = 1; i <= state.posts.length; i += 6) {
                  state.pagination.push(i)
              }

          }

      }


  },
  extraReducers: (builder) => {
      builder.addCase(fetchPostById.fulfilled, (state, action) => {
          state.posts = action.payload;
          state.currentPage = 1
      });
      builder.addCase(fetchPostById.pending, (state, action) => {
          state.posts = [];
      });
      builder.addCase(fetchPostById.rejected, (state, action) => {
          state.posts = "Error";
      });

  },
});


export const {
  setPosts,
  addFavorite,
  delitemarksFavorites,
  setLikes,
  setDislikes,
  increment,
  decrement,
  filterBySearch,
  setPagination,
  renderPages
} =
  postsSlice.actions;


export default postsSlice.reducer;


// export const { reducer } = userSlice;



// export const { reducer } = userSlice;
