import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

export const userSignup = createAsyncThunk('userSignup', async (data, thunkAPI) => {
    try {
        const response = await axios.post("/api/register", data);
        return response.data;
    } catch (error) {
        return error;
    }
});   