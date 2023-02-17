import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: "User is not logged in",
    isLogedIn: false,
    accessToken: ""
  }

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
          });
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
  
  
  
  
  export const verify = createAsyncThunk(
    "user/verify", // имя
    async (token, thunkAPI) => {
        try {
        const response = await fetch(
          `https://studapi.teachmeskills.by/auth/jwt/verify/`,
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
        catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  
  
  
  
  export const userSlice = createSlice({
    name: "user",
    initialState: {
      user: "User is not logged in",
    },
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(createUser.fulfilled, (state, action) => {
        //     state.user = action.payload;
        //   });
        // builder.addCase(createUser.pending, (state, action) => {
        //     state.post = " ";
        //   });
         // builder.addCase(createUser.rejected, (state, action) => {
        //     state.user = action.payload;
        //   });

         // builder.addCase(activateUser.fulfilled, (state, action) => {
        //     state.user = action.payload;
        //   });
         // builder.addCase(activateUser.pejected, (state, action) => {
        //     state.user = action.payload;
        //   });

        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(login.pending, (state, action) => {
            state.user = "Loading...";
        });
        builder.addCase(login.rejected, (state, action) => {
            state.user = "Error";
        });
    
        builder.addCase(verify.fulfilled, (state, action) => {
            state.accessToken = action.payload?.access
            const user = JSON.parse(localStorage.getItem('user'))
            user.access = state.accessToken
            localStorage.getItem('user', user)
            console.log(state.accessToken)
            console.log(JSON.parse(localStorage.getItem('user')))
            // localStorage.setItem('user', JSON.stringify(state.user))

            if(state.accessToken) {
            state.isLogedIn = true
            } else {
            state.isLogedIn = false
            }
        })
    
        builder.addCase(verify.rejected, (state, action) => {
            state.accessToken = "";
            state.isLogedIn = false
            
        })
        },
    });