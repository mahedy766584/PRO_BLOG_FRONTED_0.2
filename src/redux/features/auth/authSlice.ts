import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type TRole = "user" | "author" | "admin";

export type TUser = {
    userId: string;
    userName: string;
    role: TRole;
    iat: number;
    exp: number;
};

export type TAuthState = {
    user: null | TUser;
    token: null | string;
    isLoading: boolean; 
};

const initialState: TAuthState = {
    user: null,
    token: null,
    isLoading: false, 
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isLoading = false; 
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoading = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
});

export const { setUser, logout, setLoading } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;