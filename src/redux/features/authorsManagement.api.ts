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
            }),
            getSingleAuthor: builder.query({
                query: (authorId) => {
                    return {
                        url: `/users/authors/${authorId}`,
                        method: "GET"
                    }
                }
            })
        }
    )
});

export const {
    useGetAllAuthorQuery,
    useGetSingleAuthorQuery,
} = authorManagementApi;