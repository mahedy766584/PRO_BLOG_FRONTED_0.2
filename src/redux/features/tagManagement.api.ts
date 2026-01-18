import { baseApi } from "../api/baseApi";

const tagManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => (
        {
            getAllTag: builder.query({
                query: () => {
                    return {
                        url: "/tags",
                        method: "GET"
                    }
                }
            })
        }
    )
});

export const {
    useGetAllTagQuery,
} = tagManagementApi;