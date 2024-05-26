import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authenticated: Boolean(JSON.parse(localStorage.getItem('authenticated'))),
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
}

const authData = createSlice({
    name: "authData",
    initialState, // Corrected typo
    reducers: {
        SET_USER: (state, { payload }) => {
            state.user = payload
        },
        SET_TOKEN: (state, { payload }) => {
            state.token = payload
        },
    }
});

export const { SET_USER, SET_TOKEN } = authData.actions;
export default authData.reducer; // Corrected typo
