import type { FetchArgs } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery, type BaseQueryFn, type FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token;
        if(token){
            headers.set("authorization", `Bearer ${token}`)
        };
        return headers;
    },
});

const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs | string,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOption) => {

    let result = await baseQuery(args, api, extraOption);
    console.log(result)
    return result;

};

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
});