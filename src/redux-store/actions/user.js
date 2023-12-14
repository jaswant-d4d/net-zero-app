import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";


export const generalFormSubmit = createAsyncThunk('api/user/general/form/submit', async (data, thunkAPI) => {
    try {
        const response = await axios.post("/api/register", data);
        return response.data;
    } catch (error) {
        return error;
    }
});   