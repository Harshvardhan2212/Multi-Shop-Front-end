import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "Apis",
    baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.204:8088/api/" }),
    tagTypes: ["multishop", "UserProfile", "wish"],

    endpoints: (bulider) => ({})
})


