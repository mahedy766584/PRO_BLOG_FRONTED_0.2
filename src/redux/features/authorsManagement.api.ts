import { baseApi } from "@/redux/api/baseApi";

const authorManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => (
        {
            getAllAuthor: builder.query({
                query: () => {
                    return {
                        url: "/users/authors",
                        method: "GET"
                    }
                }
            })
        }
    )
});

export const {
    useGetAllAuthorQuery
} = authorManagementApi;