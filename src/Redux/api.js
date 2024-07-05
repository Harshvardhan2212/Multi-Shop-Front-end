import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses"
export const api = createApi({
    reducerPath: "Apis",
    baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.188:8000/api/" }),
    tagTypes: ["multishop"],
    endpoints: (bulider) => ({})
})


