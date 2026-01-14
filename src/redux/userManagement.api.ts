import { baseApi } from "./api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => (
        {
            addNewUser: builder.mutation({
                query: (data) => ({
                    url: "/users/create-user",
                    method: "POST",
                    body: data,
                })
            })
        }
    )
});

export const {
    useAddNewUserMutation,
} = userManagementApi;