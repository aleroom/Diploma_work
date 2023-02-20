import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import exp from "constants";
import {setModal} from "./index";

interface UserTypeFetch  {
    username: string,
    id?: number,
    email: string,
    error: string
}

interface UserState<UserTypeFetch> {
    user: UserTypeFetch,
    isLogedIn: boolean,
    accessToken: string
}

type Login = {
    password: string,
    email: string
}

const initialState:UserState<UserTypeFetch> = {
    user: {
        error: "User is not logged in",
        username: '',
        email: ''
    },
    isLogedIn: false,
    accessToken: ""
  }

export const login = createAsyncThunk<any,Login>(
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
          });
        if (!response.ok) {
          throw new Error("Server Error 1");
        }
        thunkAPI.dispatch(setModal())
        const json = await response.json();
        return json;
      } catch (error:any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  
  export const isLogin = createAsyncThunk<any, string>(
    "user/isLogin",
    async (accessToken, thunkAPI) => {
      try {
          console.log(JSON.stringify(accessToken))
        const response = await fetch(
          `https://studapi.teachmeskills.by/auth/users/me/`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
  
        if (response.ok === false) {
          throw new Error("Server Error isLogin");
        }
  
        const json = await response.json();
        return json
      } catch (err:any) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );

  
  
  export const refresh = createAsyncThunk(
    "user/refresh", // имя
    async (token, thunkAPI) => {
        try {
        const response = await fetch(
          `https://studapi.teachmeskills.by/auth/jwt/refresh/`,
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(token),
          });
        if (!response.ok) {
          throw new Error("Unable to autorized");
        }
        const json = await response.json();
        return json;
      } 
        catch (error:any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  
  
  
  
  export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        logOut: (state) => {
            state.isLogedIn = !state.isLogedIn
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.accessToken = action.payload.access
        });
        builder.addCase(login.pending, (state, action) => {
            state.user.error = "Loading...";
        });
        builder.addCase(login.rejected, (state, action) => {
            state.user.error = "Error";
        });
    
        builder.addCase(refresh.fulfilled, (state, action) => {
            state.accessToken = action.payload.access;
            const user = JSON.parse(localStorage.getItem('user') || '');
            user.access = state.accessToken;
            // console.log(JSON.stringify(user))
            localStorage.setItem('user', JSON.stringify(user));

            // if(state.accessToken) {
            // state.isLogedIn = true
            // } else {
            // state.isLogedIn = false
            // }
        });
    
        builder.addCase(refresh.rejected, (state, action) => {
            state.accessToken = "";
            state.isLogedIn = false
        });
        builder.addCase(isLogin.fulfilled, (state, action) => {
          state.accessToken = JSON.stringify(action.payload.access);
          state.isLogedIn = true
          // @ts-ignore
            state.user.username = action.payload.username
          // state.user.email = action.payload.email

        });
        builder.addCase(isLogin.pending, (state, action) => {
          // state.accessToken = "pending...";
        });
        builder.addCase(isLogin.rejected, (state, action) => {
          console.log(action.payload);
        });
        },
    });
    export const {logOut} = userSlice.actions
    export default userSlice.reducer;