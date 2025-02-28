import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../services/ApiIntegration";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({email, password}, {isRejectedWithValue})=>{
        try {
            const response = await axios.post(`${BaseURL}/login`, {email, password});
            return response.data;
        } catch (error) {
            return isRejectedWithValue(error.response?.data?.message || 'Login failed');
        }
    }
)

const initialState = {
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    error: null,
};


const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
       setTokens: (state, action) =>{
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
       } ,
       clearTokens: (state)=>{
        state.accessToken = null;
        state.refreshToken = null;
       },
       setLoading: (state, action) =>{
       state.isLoading = action.payload;
       },
       setError: (state, action)=>{
        state.error = action.payload;
       },
    },
extraReducers: (builder)=>{
    builder
    .addCase(loginUser.pending, (state)=>{
        state.isLoading = true;
        state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action)=>{
        state.accessToken = action.payload.token;
        state.isLoading = false;
        state.error = null;
    })
    .addCase(loginUser.rejected, (state,  action)=>{
        state.isLoading = false;
        state.error = action.payload;
    })
}
})

export const {setTokens, clearTokens, setLoading, setError} = AuthSlice.actions;
export default AuthSlice.reducer;