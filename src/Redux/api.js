import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  reducerPath: "Apis",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost4:8010/api/" }),
  tagTypes: ["multishop", "UserProfile", "wish"],

  endpoints: (bulider) => ({})
})


