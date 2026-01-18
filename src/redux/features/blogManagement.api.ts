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
} = blogManagementApi;