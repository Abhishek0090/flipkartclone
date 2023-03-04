import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {},
    loading: false
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchingProduct: (state) => {
            state.loading = true;
        },
        getProduct: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        logoutSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        logoutFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
        signUpStart: (state) => {
            state.loading = true;
        },
        signUpSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        signUpFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        subscription: (state, action) => {
            if (state.currentUser.subscribedUsers.includes(action.payload)) {
                state.currentUser.subscribedUsers.splice(
                    state.currentUser.subscribedUsers.findIndex(
                        (channelId) => channelId === action.payload
                    ),
                    1
                );
            } else {
                state.currentUser.subscribedUsers.push(action.payload);
            }
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout, logoutSuccess, logoutFailure, signUpStart, signUpSuccess, signUpFailure, subscription } =
    userSlice.actions;

export default userSlice.reducer;