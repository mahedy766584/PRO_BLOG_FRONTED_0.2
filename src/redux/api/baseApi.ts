/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FetchArgs } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery, type BaseQueryFn, type FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { logout } from "../features/auth/authSlice";
import { toast } from "sonner";

type ApiError = {
    errorSources?: {
        path: string;
        message: string;
    }[];
    message?: string;
};

type ApiSuccess = {
    success: boolean;
    message: string;
    data?: any;
};


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
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
    
    const errorData = result.error?.data as ApiError;
    if (errorData?.errorSources?.length) {
        const errorMsg = errorData.errorSources[0].message;
        toast.error(errorMsg);
    } else if (errorData?.message) {
        toast.error(errorData.message);
    }


    const successData = result.data as ApiSuccess;
    if (successData?.success) {
        toast.success(successData.message);
    }

    const newToken = result?.meta?.response?.headers?.get("x-new-token");
    if (newToken) {
        const user = (api.getState() as RootState).auth.user;
        api.dispatch({ user, token: newToken });
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
    endpoints: () => ({}),
});