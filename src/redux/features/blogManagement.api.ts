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
        })
    })
});

export const {
    useGetAllBlogQuery,
} = blogManagementApi;