import {createSlice, createAsyncThunk, AsyncThunk} from "@reduxjs/toolkit";
import {CreatePostTypeProp} from "../components/ModalCreatePost";


export type PostsState = {
    title: string,
    image: string,
    description: string,
    likeCount: number,
    disLikeCount: number,
    favorite: boolean | never,
    data: string,
    id: string,
    text: string
}

type MenuState = {
    allPosts: string,
    favorites: string,
}

type CreatePostType = {
    title?: string
}

interface PostStateTypes<MenuState, PostsState, CreatePostType> {
    fetchedPosts: PostsState[],
    allPages: number,
    menu: MenuState,
    posts: PostsState[],
    theme: string,
    favorite: PostsState[],
    value: number,
    user: string,
    searchedPosts: PostsState[],
    pagination: number[],
    currentPage: number,
    error?: string,
    modalActive: boolean,
    modalCreate: boolean,
    createPost: CreatePostType
}

export const fetchPostById = createAsyncThunk<PostsState[], any>( //грубо говоря функция асинхронные функции обрабатывает
    "posts/PostId", // имя
    async (_, {rejectWithValue, dispatch}) => {//функция котрая делает запрос к API, она всегда asinc
        try {
            const response = await fetch( //fetch это промис который мы раскрывам then-ом, а мы раскрываем await-ом
                `https://63e68a0483c0e85a8695e64d.mockapi.io/name`
            );

            if (!response.ok) {
                throw new Error("Server Error 1");
            }
            const json = (await response.json()) as PostsState[];
            return json;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const PutPost = createAsyncThunk<any, CreatePostType, any>(
    "posts/PostCreate",
    async (post, {rejectWithValue}) => {
        try {
            const response = await fetch(
                `https://63e68a0483c0e85a8695e64d.mockapi.io/name`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(post)
                }
            );

            if (!response.ok) {
                throw new Error("Server Error 1");
            }
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);


const initialState: PostStateTypes<MenuState, PostsState, CreatePostType> = {
    fetchedPosts: [],
    allPages: 1,
    menu: {allPosts: "AllPosts", favorites: "Favorites"},
    posts: [],
    theme: 'light',
    favorite: [],
    value: 0,
    user: "",
    searchedPosts: [],
    pagination: [],
    currentPage: 1,
    modalActive: false,
    modalCreate: false,
    createPost: {}
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
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({likeCount: postLikeCount})
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
        filterByDate: (state, action) => {
          state.searchedPosts = []
          state.posts.map(item => {
              if(item.data.includes(action.payload)) {
                  state.searchedPosts.push(item)
              }
          })
        },
        refresh: (state, action) => {
            if (action.payload == 1) {
                state.posts.splice(6, 6)

            } else {
                state.posts.splice(0, 6)
            }
        },

        setModal: (state) => {
          state.modalActive = !state.modalActive
        },
        setModalCreate: (state) => {
            state.modalCreate = !state.modalCreate
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
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({disLikeCount: postDisLikeCount})
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
        setCurrentPage:(state, action) => {
          state.currentPage = action.payload
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
        //
        // setPagination: (state) => {
        //     state.pagination = []
        //     if (state.searchedPosts.length) {
        //         for (let i = 1; i <= state.searchedPosts.length; i += 6) {
        //             state.pagination.push(i)
        //         }
        //     } else {
        //         for (let i = 1; i <= state.posts.length; i += 6) {
        //             state.pagination.push(i)
        //         }
        //
        //     }
        //
        // }


    },
    extraReducers: (builder) => {
        builder.addCase(fetchPostById.fulfilled, (state, action) => {
            state.fetchedPosts = action.payload;
            state.pagination = []
            state.allPages = Math.ceil(state.fetchedPosts.length / 6)
            for(let i = 1; i <= state.allPages; i++) {
                state.pagination.push(i)
            }
            state.posts = [...state.fetchedPosts]
            let at = state.currentPage - 1
            let to = state.currentPage
           state.posts = state.posts.slice(at * 6, to * 6)
        });
        builder.addCase(fetchPostById.pending, (state, action) => {
            state.posts = [];
        });
        builder.addCase(fetchPostById.rejected, (state, action) => {
            state.error = "Error";
        });

    },
});


export const {
    addFavorite,
    setLikes,
    setDislikes,
    filterBySearch,
    setCurrentPage,
    setModal,
    setModalCreate,
    filterByDate
    // setPagination,

} =
    postsSlice.actions;


export default postsSlice.reducer;





