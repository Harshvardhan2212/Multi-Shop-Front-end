import { api } from "../api";
let token = localStorage.getItem("adminToken")
export const adminAuthApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postAdminSignInData: builder.mutation({
      query: (values) => ({
        url: "admin-login",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["UserProfile"]
    }),

  })
});

export const {
  usePostAdminSignInDataMutation
} = adminAuthApi;
