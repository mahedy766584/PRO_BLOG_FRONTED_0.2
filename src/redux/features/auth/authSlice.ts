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
};

const initialState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            const {user, token} = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const {setUser, logout} = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;