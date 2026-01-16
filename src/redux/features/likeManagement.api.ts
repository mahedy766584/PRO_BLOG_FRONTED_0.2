import { baseApi } from "../api/baseApi";

const likeManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => (
        {
            getLikeByBlogPost: builder.query({
                query: (args) => ({
                    url: `/likes/${args.id}/count`,
                    method: "GET",
                }),
                providesTags: (_result, _error, args) => [
                    { type: "Like", id: args.id }
                ]
            }),
            addLike: builder.mutation({
                query: (data) => ({
                    url: "/likes/create-like",
                    method: "POST",
                    body: data,
                }),
                invalidatesTags: (_result, _error, data) => [
                    { type: "Like", id: data.blogId },
                ]
            })
        }
    )
});

export const {
    useGetLikeByBlogPostQuery,
    useAddLikeMutation,
} = likeManagementApi;