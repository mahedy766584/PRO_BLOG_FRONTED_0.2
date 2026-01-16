import { baseApi } from "../api/baseApi";

const commentManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        createComment: builder.mutation({
            query: (data) => ({
                url: "/comments/create-comment",
                method: "POST",
                body: data,
            }),
            invalidatesTags: (_result, _error, args) => [
                { type: "Comments", id: args.blogPost }
            ],
        }),

        getCommentByBlogPost: builder.query({
            query: (args) => ({
                url: `/comments/${args.id}/comment`,
                method: "GET",
            }),
            providesTags: (_result, _error, args) => [
                { type: "Comments", id: args.id }
            ],
        })

    }),
});


export const {
    useCreateCommentMutation,
    useGetCommentByBlogPostQuery,
} = commentManagementApi;