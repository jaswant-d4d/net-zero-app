import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userSignup } from "../actions/auth";


const initialState = {
    loading: false,
    userInfo: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAction(state, action) {
        },
        logout(state) {
        }
    },
    extraReducers: (builder) => {
        // Login
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload.data;
            state.success = true;
        }).addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Login failed";
            state.success = false;
        })
            // Signup
            .addCase(userSignup.pending, (state) => {
                state.loading = true;
                state.error = null;
            }).addCase(userSignup.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload.data;
                state.success = true;
            }).addCase(userSignup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Signup failed";
                state.success = false;
            })
    }
});

export const { loginAction, logout } = authSlice.actions;
export default authSlice.reducer;




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { setMessage } from "./message";

// import AuthService from "../services/auth.service";

// const user = JSON.parse(localStorage.getItem("user"));

// export const register = createAsyncThunk(
//   "auth/register",
//   async ({ username, email, password }, thunkAPI) => {
//     try {
//       const response = await AuthService.register(username, email, password);
//       thunkAPI.dispatch(setMessage(response.data.message));
//       return response.data;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue();
//     }
//   }
// );

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ username, password }, thunkAPI) => {
//     try {
//       const data = await AuthService.login(username, password);
//       return { user: data };
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue();
//     }
//   }
// );

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await AuthService.logout();
// });

// const initialState = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [register.fulfilled]: (state, action) => {
//       state.isLoggedIn = false;
//     },
//     [register.rejected]: (state, action) => {
//       state.isLoggedIn = false;
//     },
//     [login.fulfilled]: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload.user;
//     },
//     [login.rejected]: (state, action) => {
//       state.isLoggedIn = false;
//       state.user = null;
//     },
//     [logout.fulfilled]: (state, action) => {
//       state.isLoggedIn = false;
//       state.user = null;
//     },
//   },
// });

// const { reducer } = authSlice;
// export default reducer;