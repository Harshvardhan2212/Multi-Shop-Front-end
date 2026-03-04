import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  reducerPath: "Apis",
  baseQuery: fetchBaseQuery({ baseUrl: "https://streamglitch.space/api/" }),
  tagTypes: ["multishop", "UserProfile", "wish"],

  endpoints: (bulider) => ({})
})


