import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = process.env.REACT_APP_BASE_URL

export const api = createApi({
  reducerPath: "Apis",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["multishop", "UserProfile", "wish"],

  endpoints: (bulider) => ({})
})


