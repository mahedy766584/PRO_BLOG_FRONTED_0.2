import { baseApi } from "@/redux/api/baseApi";

const authorManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => (
        {
            getAllAuthor: builder.query({
                query: () => {
                    return {
                        url: "/authors",
                        method: "GET"
                    }
                }
            }),
            getSingleAuthor: builder.query({
                query: (userId) => ({
                    url: `/authors/author/:${userId}`,
                    method: "GET",
                })
            })
        }
    )
});

export const {
    useGetAllAuthorQuery,
    useGetSingleAuthorQuery,
} = authorManagementApi;