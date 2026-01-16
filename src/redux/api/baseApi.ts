import type { FetchArgs } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery, type BaseQueryFn, type FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers;
    },
});


const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs | string,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOption) => {

    let result = await baseQuery(args, api, extraOption);

    const newToken = result?.meta?.response?.headers?.get("x-new-token");
    if (newToken) {
        const user = (api.getState() as RootState).auth.user;
        api.dispatch(setUser({ user, token: newToken }));
        result = await baseQuery(args, api, extraOption);
    }

    if (result.error?.status === 401) {
        api.dispatch(logout());
    }


    return result;
};


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ["Blog", "Like", "Bookmark", "Comments"],
    endpoints: () => ({}),
});