import { baseApi } from "../api/baseApi";

const bookMarkManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => (
        {
            createBookmark: builder.mutation({
                query: (data) => ({
                    url: "/bookmarks/create-bookmark",
                    method: "POST",
                    body: data,
                }),
                invalidatesTags: ["Bookmark"]
            }),
        }
    )
});

export const {
    useCreateBookmarkMutation,
} = bookMarkManagementApi;