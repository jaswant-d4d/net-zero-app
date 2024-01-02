import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { generalInfo } from "../reducers/auth";

export const addGeneralInfo = createAsyncThunk('auth/generalInfoId', async (form_id, { dispatch }) => {
    dispatch(generalInfo(form_id));
    return { success: true };
});

export const generalFormSubmit = createAsyncThunk('general', async (data, { dispatch }) => {
    try {
        const response = await axios.post("/api/user/general/form/submit", data);

        const form_id = response.data.form_id || response.data.data.form_id;
        await dispatch(addGeneralInfo(form_id))
        return response.data;
    } catch (error) {
        return error;
    }
});

export const homeFormSubmit = createAsyncThunk('home', async (data, thunkAPI) => {
    try {
        const response = await axios.post("/api/user/home/form/submit", data);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const travelFormSubmit = createAsyncThunk('travel', async (data, thunkAPI) => {
    try {
        const response = await axios.post("/api/user/travel/form/submit", data);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const foodFormSubmit = createAsyncThunk('food', async (data, thunkAPI) => {
    try {
        const response = await axios.post("/api/user/food/form/submit", data);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const finanicialFormSubmit = createAsyncThunk('finanicial', async (data, thunkAPI) => {
    try {
        const response = await axios.post("/api/user/finanicial/form/submit", data);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const getCountry = createAsyncThunk('getCountry', async (data, thunkAPI) => {
    try {
        const response = await axios.get("/api/get/country", data);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const getUserDetails = createAsyncThunk('getUserDetails', async (user_id, thunkAPI) => {
    try {
        const response = await axios.get(`/api/get/user/detail?user_id=${user_id}`);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const getformlist = createAsyncThunk('formlist', async (user_id, thunkAPI) => {
    try {
        const response = await axios.get(`/api/get/user/formlist?user_id=${user_id}`);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const updateUserDetails = createAsyncThunk('updateUserDetails', async (data, user_id, thunkAPI) => {
    try {
        const response = await axios.put(`/api/get/user/information/${user_id}`);
        return response.data;
    } catch (error) {
        return error;
    }
});   