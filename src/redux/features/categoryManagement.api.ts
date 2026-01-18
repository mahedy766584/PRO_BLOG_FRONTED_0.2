import { baseApi } from "../api/baseApi";

const categoryManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => (
        {
            getAllCategory: builder.query({
                query: () => {
                    return {
                        url: "/categories",
                        method: "GET"
                    }
                }
            })
        }
    )
});

export const {
    useGetAllCategoryQuery,
} = categoryManagementApi;