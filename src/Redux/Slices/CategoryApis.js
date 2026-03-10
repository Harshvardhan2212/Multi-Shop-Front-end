import { api } from "../api";


export const CategoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryData: builder.query({
      query: () => "list-category"
    }),
    getAdminCategoryData: builder.query({
      query: () => "category"
    }),
  })
})

export const {
  useGetCategoryDataQuery,
  useAdminGetCategoryDataQuery
} = CategoryApi
