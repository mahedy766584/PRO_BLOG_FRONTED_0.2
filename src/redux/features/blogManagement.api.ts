import { baseApi } from "../api/baseApi";

const blogManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBlog: builder.query({
            query: () => {
                return {
                    url: "/blogs",
                    method: "GET",
                }
            }
        }),
        getAuthorPosts: builder.query({
            query: (userId) => {
                return {
                    url: `/blogs/${userId}/author-posts`,
                    method: "GET",
                }
            }
        }),
        getSingleBlog: builder.query({
            query: (blogId) => {
                return {
                    url: `/blogs/${blogId}`,
                    method: "GET",
                }
            }
        }),
        writeBlog: builder.mutation({
            query: (data) => ({
                url: "/blogs/create-blog-post",
                method: "POST",
                body: data,
            })
        }),
    })
});

export const {
    useGetAllBlogQuery,
    useWriteBlogMutation,
    useGetSingleBlogQuery,
    useGetAuthorPostsQuery
} = blogManagementApi;